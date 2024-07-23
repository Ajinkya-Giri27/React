This repo is for React practice

# parcel

- Dev build
- Local server
- HMR = Hot Module Replacement (Automatically refreshes page)
- File Watching Algorithm - Written in C++
- caching - Faster Builds
- most expensive thing in web browser is to load image
- parcel does Image Optimization
- minification
- bundle
- compress the files
- consisting hashing
- code splitting
- differential bundling - to support older browsers
- diagnostics
- error handling
- tree shaking - remove unused code0
- Different dev and production bundle

# jsx (Javascript xml)

- jsx is html like syntax
- jsx is not html
- jsx is syntax extension for javascript
- you can write html like code directly in javascript
- jsx and react are two differen things
- jsx is used with react to describe UI
- javascript does not contain jsx or jsx does not come built-in js
- javascript engine does not understand jsx

This is Component Composition

<!--

const HeadingComp = () => <h1>Functional component from 1st head</h1>;

const HeadingComp2 = () => {
return (

<div id='container'>
<HeadingComp />
<h1 id='Heading'>Functional component in React</h1>
<h2>you piece of shit</h2>
</div>

); -->

# Food Ordering

- Header

  - logo
  - Nav-items

- Body
  - Search Bar
  - Resto Container
    -Resto Card-cointainer (- Img - Star Rating - Name of res - cuisine - Delivery time)

* Note :- Never Keep Your HardCoded Data in your component folder

# File-Formatting

Make various files for each componenet (for better practices)

# Default import/Export

- export default Component/Variable_Name;
- import Component/Variable_Name from "path";

# Named Import/Export

<<<<<<< HEAD
export const Component;
import {component} from "path"; (Do Not Forget curly braces {})

# React Hooks

- Hooks are Nothing but a normal javascript utility functions.
- They are provided to us by React to create a super powerful variable.
- There are two very Important Hooks :-

  - useState()
  - useEffect()

- useState() :- whenever a state variable updates or chnages react re-renders the component.
=======
- export const Component;
- import {component} from "path"; (Do Not Forget curly braces {})
>>>>>>> origin/main
