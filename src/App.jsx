//Now that we have created our Header component, we want to use it in our main App component.


//the app.jsx file represent the homepage of our application. 
//currently we have the default code from vite so lets highlight all of it and start from scratch with
//a empty file.
//lets begin by creating a arraow function name app
//export it
// then add a return statment with parthesis
//

// const App = () => {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   )
// }

// export default App

//now we want to bring in the header compont we just created
//letstart by importing the header from the compontn folder so

// import Header from "../src/components/header/header"

// //Now, we can use the Header component inside our App component. Simply include <Header /> within the JSX of the App componen



// const App = () => {
//   return (

//     //In React, components must return a single parent element. 
//     //That’s why, in the Header component, we wrapped our content in a <header> tag, and in the App component, we used a <div> or <React.Fragment> as the parent element.
//     <div>
//       hi
//     </div>
//   )

// }
// export default App

//show how to import the card
//show the .. slash method too just in case the user may need it
//bring in the card then footer

import Footer from "./components/footer/footer"
import Header from "./components/header/header"
import Card from "./components/main/card"
const App = () => {
  return (
    <div>
     <Header />
     <Card />
     <Footer />
    </div>
  )
}

export default App

