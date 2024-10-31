const con = document.querySelector(".container");

const career = ["Full Stack Developer", "Machine Learning Engineer", "Businessman", "Entrepreneur", "Web Developer", "Tuition Master"];
const vowels = ['A', 'E', 'I', 'O', 'U']; // Array of vowel characters

let careerIndex = 0;
let character = 0;

function changeText() {
    // Get the current career text up to the current character index
    let currentCareer = career[careerIndex];
    let article = vowels.includes(currentCareer[0].toUpperCase()) ? 'an' : 'a';

    con.innerHTML = `<h1>I'm ${article} ${currentCareer.slice(0, character)}</h1>`;
    character++;

    // If we have displayed the whole career, move to the next career after a short pause
    if (character > currentCareer.length) {
        careerIndex = (careerIndex + 1) % career.length; // Cycle to the next career
        character = 0; // Reset character index for the new career
        setTimeout(changeText, 1000); // Add a pause before starting the next career
    } else {
        setTimeout(changeText, 400); // Continue displaying the current career
    }
}

changeText(); // Start the animation
