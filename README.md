# Journal App

## Routes

-`localhost:3000/`
    - root or homepage
    - Welcome Screen
    - JOurnal entry form/ "comment box"
    - List the entries
        - latest five entries?
-`localhost:3000/:entries/entryId/`
    - View and edit individual journal entries by their entryId
    - "edit in place" for journal enrty data
        - toggle between read-only and an editable form
-`localhost:3000/search/:searchKey/:searchValue`
    - Show a list of journal entries where each entry matches the searchParam
-`localhost:3000/latest/`
    - List the entries
        - latest INFINITY entries

localhost:3000/search/:searcHKey/:searchValue
localhost:3000/search/type/review

```js
{
    id: "12345678",
    type: "review",
    name: "Example post name",
    content: "Some cool content",
    author: "Wade",
    lastEdited: 12343455 // milliseconds since JS dates are stored as that internally

}
```
