
function saveUserInput() {
    // Get the user input value
    var userInputValue = document.getElementById("userInput").value;
  
    // Save the user input to a variable, send it to a server, or perform any other desired action
  
    // You can also save it to localStorage for persistence
    var a=localStorage.setItem("userInput", userInputValue);
    return "NSE:"+a;
  }