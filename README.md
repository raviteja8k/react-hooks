This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### By default, rendering in a single component causes all of its sub-components to render also. Even if their props haven’t changed. This is precisely the problem that PureComponent was designed to optimize. 

PureComponent is exactly the same as Component except that it handles the shouldComponentUpdate method for you. When props or state changes, PureComponent will do a shallow comparison on both props and state. 

Use “Highlight Updates” turned on in the React Dev Tools. This allows us to see when the component is being updated (aka re-rendered).