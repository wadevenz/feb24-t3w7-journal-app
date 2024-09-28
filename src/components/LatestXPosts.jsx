

import { useEffect, useState } from "react";
import { useJournalEntriesData } from "../contexts/EntriesContext";
import JournalEntryContainer from "./JournalEntryContainer";


export default function LatestXPosts({limit}){
    let journalEntries = useJournalEntriesData();

    let [sortedAndTrimmedPostList, setProcessedPostList] = useState([]);

    useEffect(() => {
        // detect any changes to the context data of journal entries
        // and process the context data into a sorted and trimmed post list
        let tempListCopy = [...journalEntries];

        tempListCopy.sort((a, b) => {
            if (a.lastEdited < b.lastEdited) {
                return 1;
            } else if (a.lastEdited > b.lastEdited) {
                return -1;
            } else {
                return 0;
            }
        });

        

        if (limit && limit > 0 && tempListCopy.length > limit){
            // cuts array down to a size if its larger than the size
            tempListCopy.length = limit;
        }

        setProcessedPostList(tempListCopy);


    }, [journalEntries]);

    return (
        <>
            {sortedAndTrimmedPostList.map((entry) => {
                return <JournalEntryContainer key={entry.id} entryId={entry.id} />
            })};     
        </>
        
    );
}