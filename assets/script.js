
let textInput = document.getElementById("text");
let resultText = document.getElementById("result");

// Fungsi untuk mengenkripsi teks
function encryptCaesarCipher(text, key) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            // Huruf besar
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + key) % 26) + 65);
            }
            // Huruf kecil
            else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + key) % 26) + 97);
            }
        }
        result += char;
    }
    return result;
}

// Fungsi untuk mendekripsi teks
function decryptCaesarCipher(text, key) {
    return encryptCaesarCipher(text, (26 - key) % 26);
}

// Contoh penggunaan


function encrypt() {
    let Text = textInput.value;
    let key = parseInt(document.getElementById("shift").value);
    const encryptedText = encryptCaesarCipher(Text, key);
    resultText.innerHTML = `${encryptedText}`
}

function decrypt() {
    let Text = textInput.value;
    let key = parseInt(document.getElementById("shift").value);
    const decryptedText = decryptCaesarCipher(Text, key);
    resultText.innerHTML = `${decryptedText}`
}

function copyToClipboard() {
    // Get the text field
    let copyText = document.getElementById("result");
    // Select the text field
    copyText.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}

function copyToInput() {
    // Get the text field
    textInput.value = `${resultText.innerHTML}`;
    document.getElementById("result").innerHTML = "";
}

function reset() {
    document.getElementById("text").value = "";
    document.getElementById("result").innerHTML = "";
}

function resetKey() {
    let key = parseInt(document.getElementById("shift").value = 0);
}
