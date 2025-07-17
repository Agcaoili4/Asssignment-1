//Code for mark-to-grade starts here
//Creating a class named convertGrade
export class convertGrade {
  constructor() {
    //Using a set of array for manipulation and better freedom, and also to further understand how to utilize them when doing exception handling
    this.rules = [
      { min: 90, grade: "A" },
      { min: 80, grade: "B" },
      { min: 70, grade: "C" },
      { min: 60, grade: "D" },
      { min: 50, grade: "E" },
      { min: 0,  grade: "F" }
    ];
  }

  //Creating a local function named convertGrade inside of class
  convertGrade(inputField, outputBox) {
    //Making sure to remove or reload 
    outputBox.innerHTML = "";

    // Reference to the input element itself for styling
    const input = inputField.value.trim();

    //Making sure that input would be converted to an int value for more accurate error handling method
    const mark = parseInt(input);

    //Creating a helper function to avoid repeating append code for error messages
    const displayMessage = (text) => {
      const msg = document.createElement("p");
      msg.textContent = text;
      msg.style.color = "red";
      outputBox.appendChild(msg);
    };

    //further validation
    if (input === "") {
      displayMessage("Enter a number.");
      inputField.style.color = "red";
      return;
    } else if (isNaN(mark)) {
      displayMessage("Enter an integer/number please.");
      inputField.style.color = "red";
      return;
    } else if (mark < 0 || mark > 100) {
      displayMessage("Mark must be between 0 and 100.");
      inputField.style.color = "red";
      return;
    }

    //Reset input color when valid
    inputField.style.color = "black";

    //Finds the object that fits through the answer that was given.
    const gradeObj = this.rules.find(rule => mark >= rule.min);

    //Ternary operator will be used, mainly learned last semester.
    const grade = gradeObj ? gradeObj.grade : "Invalid";

    //Append p instead of putting it directly to html for cleaner html code
    const message = document.createElement("p");
    message.textContent = `Your grade is: ${grade}`;
    message.style.color = "green";
    outputBox.appendChild(message);
  }
}
