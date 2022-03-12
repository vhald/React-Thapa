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
  return(
    // but remember that we need to import React first, inorder to use Fragment
    <React.Fragment>
      <h1>Hello world</h1>
      <p>this is it.</p>
    </React.Fragment>
  )
}




export default App