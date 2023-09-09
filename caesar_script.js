// Function to generate the A-Z alphabet
function generateAlphabet() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet.split('');
}

// Function to create and populate the alphabet
function createAlphabet(shift) {
    const alphabet = generateAlphabet();

    const shiftedAlphabet = alphabet.slice(shift).concat(alphabet.slice(0, shift));

    return shiftedAlphabet;
}

// Function to perform Caesar cipher encryption/decryption
function caesarCipher(message, shift) {
    const alphabet = generateAlphabet();
    shift = parseInt(shift);

    const encryptedMessage = message
        .toUpperCase()
        .split('')
        .map(char => {
            if (alphabet.includes(char)) {
                const currentIndex = alphabet.indexOf(char);
                const newIndex = (currentIndex + shift) % 26;
                return alphabet[newIndex];
            } else {
                return char;
            }
        })
        .join('');

    return encryptedMessage;
}

// Function to update the alphabet display
function updateAlphabet(shift) {
    const alphabetDiv = document.getElementById('alphabet');
    const alphabet = createAlphabet(shift);
    alphabetDiv.textContent = alphabet.join('');
}

// Event listener for shift input change
document.getElementById('shift').addEventListener('input', function () {
    const shift = this.value;
    updateAlphabet(shift);
});

// Event listener for input change
document.getElementById('message').addEventListener('input', function () {
    const message = this.value;
    const shift = document.getElementById('shift').value;
    const result = caesarCipher(message, shift);
    document.getElementById('result').value = result;
});

// Initialize the alphabet display
updateAlphabet(1);
