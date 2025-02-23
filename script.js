const passwordPossibilities = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
    1, 2, 3, 4, 5, 6, 7, 8, 9
];

let passwordCombinations = [];
let passwordList = [];
const passwordLength = 6;

const passwordListContainer = document.getElementById('password-list-container');

function getPassword() {

    passwordCombinations = [];
    
    for (let i = 0; i <= passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * passwordPossibilities.length);
        passwordCombinations.push(passwordPossibilities[randomIndex]);
    }

    const password = passwordCombinations.join('');
    passwordList.push(password);

    return password;
}

function getDifferentPasswords() {

    passwordList.length = 0;
    passwordListContainer.innerHTML = '';

    for(let i = 0; i <= 10; i++) {
        getPassword();
    }

    displayPasswordCombinations();
}

function displayPasswordCombinations() {

    passwordList.forEach((password) => {
        const displayPassword = document.createElement('li');
        displayPassword.classList.add('password-list');
        displayPassword.textContent = password;

        passwordListContainer.appendChild(displayPassword);
    })
}

document.getElementById('generate').addEventListener('click', getDifferentPasswords);