import { createContext, useState, useContext } from "react";


// Create the context
//      SomeContextVariable = createContext(defaultValue);
const JournalEntriesContext = createContext([]);

// function SomeExample(){
//     const journalData = useContext(JournalEntriesContext);
// }

// Create custom hooks to access the context data
export function useJournalEntriesData(){
    console.log("Passing data around!");

    let currentJournalData = useContext(JournalEntriesContext);
    if (currentJournalData.lenght == 0){
        console.log("No entries to show!");
    }

    return useContext(JournalEntriesContext);
}

// Create the context provider

export default function JournalEntriesProvider(props){
    let [journalEntries, setJournalEntries] = useState([]);

    return(
        <JournalEntriesContext.Provider value={journalEntries}>
            {props.children}
        </JournalEntriesContext.Provider>
    );
}
