
/*.module was further studied via the use of three external uses:
  chat GPT
  Youtube
  W3 schools

  The purpose is to further expand knowledge in terms of creating modular programming
  via JS. The student was always exposed to using this method ever since he participated to 
  certain Hackathons and further expanding his knowledge in terms of OOP style of coding.
*/

//Code starts here

//Setting timeout to the picture by accessing it's id
setTimeout(() => {
  const image = document.getElementById("delayed-image");
  image.classList.add("show");
}, 10000);

//Setting current year to footer
const yearSpan = document.getElementById("year");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

//Code for mark-to-grade starts here
import {convertGrade} from "./grade-converter.js";

//Create variables to store the elements for a better clean code
const markInput = document.getElementById("mark-input-box");
const markOutput = document.getElementById("mark-output");
const convertBtn = document.getElementById("convert");

const grader = new convertGrade();
if (convertBtn && markInput && markOutput) {
  convertBtn.addEventListener("click", () => {
    grader.convertGrade(markInput, markOutput);
  });
}

//Code for staff starts here
import { Staff } from './staff-members.js';
const staff = new Staff();
staff.init();


//Code for Temp converter starts here
import {ConvertTemp} from "./temperature-converter.js";

//Create variables to store the elements for a better clean code
const convertBtnTemp = document.getElementById("convert-temp");
const converter = new ConvertTemp();

convertBtnTemp.addEventListener("click", () => {
  converter.convert();
});

