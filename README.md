# One repo to rule them all

to run

`npm i`
`npm start`

For this project, I have focused more on the functionality aspects of the project
I’ve built the project using react, the tech and features used to build it are

1. Redux
2. React hooks
3. Context api
4. Error boundary
5. React Lazy, component based splitting
6. React router
7. Custom hooks
8. webpack

The project structure is as follows

```
  client
    - public
    - source
      - redux architecture (actions, service, reducer, store)
      - components
      - error (error handling)
      - hooks (custom hooks)
      - pages
    - index.js
    - App.jsx
    - routes
```

Pages folder contains the 4 pages used throughout the application

1. Home
2. Books
3. Movies
4. Character

Each of the pages follow the same folder structure 1. Page.jsx - File where you can hooks into the redux state or Context, that acts as the Parent for the page specific components 2. views 3. styles 4. Context 5. containers

components folder contains 4 major components that are shared and used across the application, they are

1. Header
2. List - uses the render prop pattern
3. Pagination
4. Search - uses the custom hooks functionality

hooks folder contains the custom hooks

1. useFetch - sharable hook to make fetch request and return state and loading state
2. useSearch

NOTES: to showcase the usage of both redux and context api way, I've divided the project into two parts

The books page contains the code that utilizes the redux architecture
THe Characters, Movies pages and components utilize the Context api
