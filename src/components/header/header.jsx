

//To create a React component, we can use an arrow function. 
//Arrow functions are a more concise way to write functions in JavaScript. 

//lets create a component named Header and the first letter is capitalized
// In React, it's a convention to capitalize the first letter of component names to differentiate them from regular HTML elements.

//Within this function, we return some JSX. JSX stands for JavaScript XML, and it's a syntax extension for JavaScript that allows us to write HTML-like code directly within our JavaScript.

//he return statement here is crucial because it tells the component what to display on the screen. In our Header component, we're returning a <header> HTML element that contains an <h1> tag with the text "My First Website".

//We need to export our Header component so that it can be imported and used in other files.

//By using export default, we make Header the default export of the file. This means when we import it elsewhere, we don't need to use curly braces.



const Header = () => {
  return (
    <header>
        <h1>My First Website</h1>
    </header>
  )
}

export default Header