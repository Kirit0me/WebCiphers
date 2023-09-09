function rot13(text) {
    return text.replace(/[a-zA-Z]/g, function (char) {
        const offset = char <= 'Z' ? 65 : 97;
        return String.fromCharCode(((char.charCodeAt(0) - offset + 13) % 26) + offset);
    });
}

const inputElement = document.getElementById('input');
const outputElement = document.getElementById('output');

inputElement.addEventListener('input', () => {
    const inputText = inputElement.value;
    const rotatedText = rot13(inputText);
    outputElement.textContent = rotatedText;
});
