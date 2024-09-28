import { createContext, useState, useContext } from "react";


// Create the context
//      SomeContextVariable = createContext(defaultValue);
const JournalEntriesDataContext = createContext([]);
const JournalEntriesSetterContext = createContext([]);

// function SomeExample(){
//     const journalData = useContext(JournalEntriesContext);
// }

// Create custom hooks to access the context data
export function useJournalEntriesData(){
    console.log("Passing data around!");

    let currentJournalData = useContext(JournalEntriesDataContext);
    if (currentJournalData.lenght == 0){
        console.log("No entries to show!");
    }

    return useContext(JournalEntriesDataContext);
}

export function useJournalEntriesSetter(){
    return useContext(JournalEntriesDataContext);
}

// Create the context provider

export default function JournalEntriesProvider(props){
    let [journalEntries, setJournalEntries] = useState([]);

    return(
        <JournalEntriesDataContext.Provider value={journalEntries}>
            <JournalEntriesSetterContext.Provider value={setJournalEntries}>
                {props.children}
            </JournalEntriesSetterContext.Provider>
        </JournalEntriesDataContext.Provider>
    );
}
