function encrypt() {
    let text = document.getElementById("text").value;
    let shift = parseInt(document.getElementById("shift").value);
    let encryptText = caesarCipher(text, shift);
    document.getElementById("result").value = encryptText;
}

function decrypt() {
    let text = document.getElementById("text").value;
    let shift = parseInt(document.getElementById("shift").value);
    let decryptText = caesarCipher(text, -shift);
    document.getElementById("result").value = decryptText;
}

function caesarCipher(text, shift) {
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (char.match(/[a-z]/i)) {
            let code = text.charCodeAt(i);
            if (code >= 65 && code <= 90) {
                char = String.fromCharCode(((code - 65 + shift) % 26) + 65);
            } else if (code >= 97 && code <= 122) {
                char = String.fromCharCode(((code - 97 + shift) % 26) + 97);
            }
        }
     result += char
}
return result;
}

function copy() {
    // Get the text field
    let copyText = document.getElementById("result");
    // Select the text field
    copyText.setSelectionRange(0, 99999); // For mobile devices
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
}

function reset() {
    document.getElementById("text").value = "";
    document.getElementById("result").value = "";
    return;
}
