### Conceptual Exercise

Answer the following questions below:

- What is Redux? Why might you use it?

  - Redux Is a library that helps make manipulating State more predictable. It is very handy in React. 

- What are three features of the Redux developer tool in Chrome?
  1. You can view the action history
  2. You can view the current state of the app
  3. You can view how the state has changed per action dispated

- What is a store?  
  - A Store is the object you get back from calling create store. You use functions on the object to manipulate the state. 

- What is a reducer?
  - A Reducer is a function that accepts two arguments, the current state, and an action object. The current state must have an initial value.  

- What is an action?
  - an action is an Object that contains at least an attribute called "type"

- What is an action creator?
  - An action Creator is a function that constructs and returns an action object. 

- How does data flow in a React/Redux application?
  - Still top to bottom, but there is an added detour of most of the state through the Redux Store.

- What is the purpose of the `<Provider>` component?
  - To give context for useDispatch and useSelector to run in your other components. 

- What is the purpose of the `useSelector` hook? What does it return?
  - useSelector is used to grab something out of the state in a functional component. It returns the piece of state.

- Describe the `useDispatch` hook. What do you use it for?
  - The useDispatch hook returns the dispatch function for the redux store. you use it to get the dispatch function that you can then use to dispatch actions.  

- What is redux-thunk and why would you use it?
  - Redux Thunk exposes dispatch to any function that is passed into dispatch (as opposed to an action object). You can then dispatch an action in a function you dispatched. This is handy for async ops. 

- What are propTypes?
  - A way of validating the Props given to a component in React Develoment

- Describe the `useCallback` hook.  What is it used for?
  - The useCallback hook is a way of writing a function that will persist between renders. This is useful when you are using a function in a useEffect hook. Since that function is supposed to be in the Dependency array, if we didn't use useCallback, everytime the function rerendered the function would be remade - which would cause the useEffect to be called again, possibly causing another rerender, possibly causing an inifintie loop. But, if we use useCallback, rerendering the component won't make a new function so it won't cause a loop. 

- Compare and contrast the `useReducer` hook with Redux (including react-redux).  Why would you choose one over the other?
  - useReducer is useful for storing and manipulating a single section of data. Redux is useful for handling an entire applications data. While you can hoist useReducer to the top of an App, and use Context to mimic the flow of React-Redux. You cannot combine reducers with useReducer, and each dispatch is useReducer specific, so this can get messy quick if your application needs to split the store up into many sections. 