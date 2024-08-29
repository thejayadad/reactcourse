const Footer = () => {
    //create a variable name currentYear and set it equal to
    //javascript makes it easy to get the current date by providing a date object that we will use
    //so lets call it by typing new Dae() this will create a new Date instance represeing the current date and time

    const currentYear = new Date().getFullYear(); // Get the current year dynamically
  //getFullYear() Method: The getFullYear() method is called on the Date instance to extract the current year (e.g., 2024). This method returns a four-digit year.
  //lets add a return statement and we want to wrap our content in a footer tag
  //then we will include a p tag 

    return (
      <footer>
        <p>&copy; {currentYear} My First Website. All rights reserved.</p>
      </footer>
    );
  };

  //In HTML, certain characters are reserved for use in the language's syntax (such as <, >, &, etc.). To display these characters as text, we use HTML entities. These entities begin with an ampersand (&) and end with a semicolon (;).
  //&copy; Entity: The &copy; is a specific HTML entity that represents the copyright symbol ©. When a web browser encounters &copy; in the HTML code, it renders the copyright symbol instead of displaying the entity text.

  //now lets address the variable that holds currentYear
  //to display javascript in our jsx we need to enclose the variable name in curly braces
  
  
  export default Footer;
  