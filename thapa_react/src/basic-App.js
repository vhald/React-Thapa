import React from 'react'

// //fuctional  component of react. < App />

// METHOD 1 <React Script - JSX format> (more preffered and easy)
// We dont need to use import React from 'react' in this (acc. to react v17.0)
// const App = () => {
//   // this return is imp, as we want to get something in return from this component. 
//   // JSX Must be returned only inside it.
//   return (
//       <div>
//     <h1>Welcome Onboard MF!</h1>
//       </div>
//   )
// }

// METHOD 2 <React Script - React DOM>
// const App = () => {
//   // no matter whatever version of React, now we have to use line 1, use to React.createElement
//   return React.createElement("h1", {}, "Hello World");
// }

// {/* <div><h3>hello world</h3></div> */} can be written as below: 
// const App = () => {
//   return React.createElement(
//     "div", {}, React.createElement('h3', {}, "hello World")
//   )
// }

// we can return only one element using JSX i.e. One complete {div/section/article/React.Fragment} element, or another complete element


const App = () => {
  return (
    // but remember that we need to import React first, inorder to use Fragment
    <React.Fragment>
      <Vhald />
      <h1>Hello world {3 + 3} </h1>
      <p>this is it.</p>
      <img src="" alt="" />
    </React.Fragment>
  )
  // 3+3 was javascript inside the jsx.
  // pasting Vhald on line 37 is known as Nesting in JSX.
}

const Vhald = () => {
  return (
    <section>
      <h2><mark> this is the highlighted portion but i have to</mark> copy paste Vhald in the index.js</h2>
    </section>
  )
}

export default App;

// React ka basics ye hi h
// 1. component
// 2. nested components.
// 3. JSX ke rules
// 4. 