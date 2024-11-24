let textInput = document.getElementById("text");
let keyInput = document.getElementById("shift");
let tlOF = document.getElementById("tlOF");
let mfOF = document.getElementById("mfOF");
let slider = document.getElementById("slider");
let about = document.getElementById("about");
let encryptBtn = document.getElementById("encryptBtn");
let decryptBtn = document.getElementById("decryptBtn");

console.log("WARNING! THIS WEBSITE IS NOT RESPONSIVE FOR DEVICE WITH SCREEN RESOLUTION BELOW 1000x720px!!!")

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

encryptBtn.addEventListener("click",() => {
    keyInput.classList.remove("negativeKey");
})

decryptBtn.addEventListener("click",() => {
    keyInput.classList.add("negativeKey");
})

function convertToCustomNumbers() {
    const Text = textInput.value.toUpperCase(); // Convert input to uppercase
    const key = parseInt(document.getElementById("shift").value);


    const results = Text.split('').map(letter => {
        if (letter >= 'A' && letter <= 'Z') {
            const c = letter.charCodeAt(0) - 65; // Map A=0, ..., Z=25
            const multiplier = 26; // Pengali tetap
            let x = 26, y, z, m;

            let h = parseInt(c) + parseInt(key);
            const target = parseInt(h, 10); // Ambil target dari input


            function numberToLetter(num) {
                if (num < 0 || num > 25) {
                    throw new Error("Number must be in the range 0-25.");
                }
                return String.fromCharCode(97 + num);
            }
            if (target <= 26) {
                y = 0; // Jika target <= 26, maka y = 0
                z = target - (multiplier * y); // Hitung z
                m = (parseInt(x)*parseInt(y))+parseInt(z);
            } else if (target > 26) {
                y = 1; // Jika target > 26, maka y = 1
                z = target - (multiplier * y); // Hitung z
                m = (parseInt(x)*parseInt(y))+parseInt(z);
            }
            const num = parseInt(z, 10);
            let NtoL = numberToLetter(num);
            return `${letter} => ${c} + ${key} = ${h} => ${z} mod ${x} = ${x} * ${y} + ${z} = ${m} => ${z} => ${NtoL}`; // Show the formula and result

        } else if (!isNaN(letter) && letter.trim() !== '') {
            // Convert numeric characters to numbers and apply the formula
            const x = parseInt(letter, 10);
            return `${x} = ${parseInt(x)}`;
        } else {
            // Non-alphabetic and non-numeric characters remain the same
            return letter;
        }
    });
    results.className = "my-class";
    output.classList.add("loopBorder");
    
    document.getElementById("output").innerHTML = results.map(result => `<div class="my-class">${result}</div>`).join('');
}

function encrypt() {
    let Text = textInput.value;
    let key = parseInt(document.getElementById("shift").value);

    if (Text == '') {
        output.classList.remove("loopBorder");
        output.innerHTML = "Please input any text to encrypt!"
        setTimeout(function(){
            output.innerHTML = ""
        }, 3000);
    } else {
        output.classList.remove("loopBorder");
        const encryptedText = encryptCaesarCipher(Text, key);
        output.innerHTML = `${encryptedText}`
    }

}

function encryptLoop() {
    let Text = textInput.value;
    let key = parseInt(document.getElementById("shift").value);
    const output = document.getElementById("output");
    
    output.innerHTML = "";

    // Execute the loop and display results
    if (Text == '') {
        output.classList.remove("loopBorder");
        output.innerHTML = "Please input any text to encrypt!"
        setTimeout(function(){
            output.innerHTML = ""
        }, 3000);
    } else {
        output.classList.add("loopBorder");
        for (let i = 0; i <= key; i++) {
            let ship =  parseInt(`${i}`);
            const result = document.createElement("div");
            result.className = "my-class";
            const encryptedTextLoop = encryptCaesarCipher(Text, ship);
            result.textContent = `key ${i} : ${encryptedTextLoop}`;
            output.appendChild(result);
        }
    }

}

function decrypt() {
    const output = document.getElementById("output");
    let Text = textInput.value;
    let key = parseInt(document.getElementById("shift").value);

    if (Text == '') {
        output.classList.remove("loopBorder");
        output.innerHTML = "Please input any text to decrypt!"
        setTimeout(function(){
            output.innerHTML = ""
        }, 3000);
    } else {
        output.classList.remove("loopBorder");
        const decryptedText = decryptCaesarCipher(Text, key);
        output.innerHTML = `${decryptedText}`
    }
}

function decryptLoop() {
    let Text = textInput.value;
    let key = parseInt(document.getElementById("shift").value);
    const output = document.getElementById("output");
    
    output.innerHTML = "";

    // Execute the loop and display results
    if (Text == '') {
        output.classList.remove("loopBorder");
        output.innerHTML = "Please input any text to decrypt!"
        setTimeout(function(){
            output.innerHTML = ""
        }, 3000);
    } else {
        output.classList.add("loopBorder");
        for (let i = 0; i <= key; i++) {
            let ship =  parseInt(`${i}`);
            const result = document.createElement("div");
            result.className = "my-class";
            const decryptedText = decryptCaesarCipher(Text, ship);
            result.textContent = `key ${i} : ${decryptedText}`;
            output.appendChild(result);
        }
    }
}

function copyToClipboard() {
    // Ambil teks dari div
    const text = document.getElementById('output').innerText;

    // Salin teks ke clipboard
    if (text == "") {
        alert("there's no text to copy");
    } else {
        navigator.clipboard.writeText(text).then(() => {
            alert('Teks berhasil disalin!');
        }).catch(err => {
            alert('Gagal menyalin teks: ' + err);
        });
    }
}

function copyToInput() {
    let text = document.getElementById('output').innerText;
    if (text == "") {
        alert("there's no text to copy");
    } else {
        textInput.value = `${text}`;
        output.innerHTML = "";
    }
}

function reset() {
    document.getElementById("text").value = "";
    output.innerHTML = "";
}

function resetIKey() {
    document.getElementById("shift").value = 0;
}


tlOF.addEventListener("click",() => {
    if (tlOF.checked) {
        mfOF.checked = false;
    }
})

mfOF.addEventListener("click",() => {
    if (mfOF.checked) {
        tlOF.checked = false;
    }
})

encryptBtn.addEventListener("click",() => {
    if (tlOF.checked) {
        encryptLoop();
    } else if (mfOF.checked) {
        convertToCustomNumbers()
    } else {
        encrypt();
    }
})

decryptBtn.addEventListener("click",() => {
    if (tlOF.checked) {
        decryptLoop();
    } else if (mfOF.checked) {
        convertToCustomNumbers()
    } else {
        decrypt();
    }
})

about.addEventListener("click",() => {
    about.href = "./assets/img,vid/vid/1/2/1/ick.mp4";
    window.location.href = about.href;
})



