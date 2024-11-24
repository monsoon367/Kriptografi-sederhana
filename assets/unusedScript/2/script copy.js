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

alert ("THIS WEBSITE IS NOT RESPONSIVE FOR DEVICE WITH SCREEN RESOLUTION BELOW 1000x720px!!!")

function handleChange(input) {
    const value = parseInt(input.value, 10);
    // Enforce the value within range
    if (value < 0) elements.keyInput.value = 0; // Reset to 0 if less than 0
    else if (value > 25) elements.keyInput.value = 25; // Reset to 25 if more than 25
}

if (target < 0) {
    y = -1; // Jika target < 26, maka y = -1
    z = multiplier + target; // Hitung z
    m = (parseInt(x)*parseInt(y))+parseInt(z);
}

<div id="letterValueContainer">
                    <p>A = 0</p>
                    <p>B = 1</p>
                    <p>C = 2</p>
                    <p>D = 3</p>
                    <p>E = 4</p>
                    <p>F = 5</p>
                    <p>G = 6</p>
                    <p>H = 7</p>
                    <p>I = 8</p>
                    <p>J = 9</p>
                    <p>K = 10</p>
                    <p>L = 11</p>
                    <p>M = 12</p>
                    <p>N = 13</p>
                    <p>O = 14</p>
                    <p>P = 15</p>
                    <p>Q = 16</p>
                    <p>R = 17</p>
                    <p>S = 18</p>
                    <p>T = 19</p>
                    <p>U = 20</p>
                    <p>V = 21</p>
                    <p>W = 22</p>
                    <p>X = 23</p>
                    <p>Y = 24</p>
                    <p>Z = 25</p>
                </div>

#letterValueContainer {
    position: relative;
    width: 100%;
    height: 100%;
    border: 1px solid rgb(129, 129, 129);
    margin-top: 1rem;
    border-radius: 3px;
    font-size: 15px;
}