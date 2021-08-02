- In action creators, like `getFilmFromAPI`, we use a "regular expression" ---
  what is that regular expression, and what is its purpose?
  - gets the ID of a resource from the URL. This makes it so we can store an array of numbers rather than an array of strings. 
  
- We're persisting the Redux store, so if you re-visit the app, it will remember
  the topics you've visited. Where is this stored? How is this done?
  - The persisted store is located in localStorage[persist:root]. 
  - When the store is made, we pass it a "persistedReducer" instead of the rootReducer. This loads the data from localstorage and merges it into the initialState on first load, then runs the rootReducer. 
  
- What does `combineReducers` do? Why are we using it? 
  - combineReducers combines multiple reducers into one big root reducer that we can use with redux. We use it to split of the logic of our Store into people, planets, and films

- How does the "Reset to Fresh Exploration" feature work?
  - It dispatches an action with a type of "RESET_ALL". "RESET_ALL" is in all of our reducers and sets their State back to INITIAL_STATE. Thus, emptying the Store.

- Why are `FilmList.js`, `PlanetList.js`, and 
  `PersonList.js` all simple components that use an `ItemList`?
  Why is this a good design?
  - I would say this is good design because it is very clear what each component is for. You can customize each one individually. But each components purpose, to display a list of items, is generic and can be abstracted to another common component. 

- In the `HomePage` component we use the `useSelector` hook to save only a single fact---
  whether the first film is loaded, We could instead have selected all the
  films, and had the check for whether the first film is loaded in our
  `render` function. Why is this worse? What would the performance implications
  be?
  - Well, The first thing I think of is true/false is smaller to store than a whole object. The useSelector would also cause a rerender everytime films is changed rather than just the first one, but that seems like an edge case where that would matter. 
  
- What good ideas for designing and organizing React apps have you learned from
  studying this code?
  - The actionCreators made dealing with API calls and loading data so streamlined and simple. Definietly will exploring and incorporating that pattern into future Apps.
  
- Which Star Wars character would make the best React developer, and why?
  - I really don't know, haha. 
