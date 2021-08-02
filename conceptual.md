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

- Describe the `useCallback` hook.  What is it used for?

- Compare and contrast the `useReducer` hook with Redux (including react-redux).  Why would you choose one over the other?