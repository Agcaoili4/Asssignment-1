//Code for temperatureConverter Starts here
//Created a class name ConvertTemp
export class ConvertTemp {
  //Add units
  //Create a local variable name convert inside of the class
  convert() {
    const firstTemp = document.getElementById("temp-1").value;
    const secondTemp = document.getElementById("temp-2").value;
    const inputField = document.getElementById("temp-input-box");
    const output = document.getElementById("temp-output-box");

    // Clear previous output
    output.innerHTML = "";

    // Get and validate input
    const input = inputField.value.trim();
    const mark = parseFloat(input);

    const displayMessage = (text) => {
      const msg = document.createElement("p"); 
      msg.textContent = text;
      msg.style.color = "red";
      output.appendChild(msg);
    };

  //Further validation
  if (input === "") {
    displayMessage("Enter a number.");
    inputField.style.color = "red";
    return;
  } else if (isNaN(mark)) {
    displayMessage("Enter a valid number.");
    inputField.style.color = "red";
    return;
  }

  //Resets the style if the input's correct
  inputField.style.color = "black";

  //Logic behind the first temp
  //Let celsius be the "current pick" temperature to slash redundancy of code
  let celsius;
  switch (firstTemp) {
    case "celsius":
      celsius = mark;
      break;
    case "fahrenheit":
      celsius = (mark - 32) * 5 / 9;
      break;
    case "kelvin":
      celsius = mark - 273.15;
      break;
  }

  //Then convert to the target temp
  let result;
  switch (secondTemp) {
    case "celsius":
      result = celsius;
      break;
    case "fahrenheit":
      result = (celsius * 9 / 5) + 32;
      break;
    case "kelvin":
      result = celsius + 273.15;
      break;
  }

  //Append p instead of putting it directly to HTML for cleaner code
  const message = document.createElement("p");
  message.textContent = `${mark} ${firstTemp} is equal to ${result.toFixed(2)} ${secondTemp}`;
  message.style.color = "green";
  output.appendChild(message);
}};