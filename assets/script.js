const elements = {
    textInput: document.getElementById("text"),
    keyInput: document.getElementById("shift"),
    tlOF: document.getElementById("tlOF"),
    mfOF: document.getElementById("mfOF"),
    slider: document.getElementById("slider"),
    status: document.getElementById("status"),
    EorDstatus: document.getElementById("EorDstatus"),
    encryptBtn: document.getElementById("encryptBtn"),
    decryptBtn: document.getElementById("decryptBtn"),
    resetIKeyBtn: document.getElementById("resetIKeyBtn"),
    resetBtn: document.getElementById("resetBtn"),
    copyToClipboardBtn: document.getElementById("copyToClipboardBtn"),
    copyToInputBtn: document.getElementById("copyToInputBtn"),
    about: document.getElementById("about"),
    output: document.getElementById("output"),
};

console.log("WARNING! THIS WEBSITE IS NOT RESPONSIVE FOR DEVICE WITH SCREEN RESOLUTION BELOW 1000x720px!!!");

function handleChange(input) {
    const value = parseInt(input.value, 10);
    // Enforce the value within range
    if (value < 0) elements.keyInput.value = 0; // Reset to 0 if less than 0
    else if (value > 25) elements.keyInput.value = 25; // Reset to 25 if more than 25
};

const caesarCipher = (text, key, decrypt = false) => {
    if (decrypt) key = (26 - key) % 26;
    return [...text].map((char) => {
        if (/[a-zA-X]/.test(char)) {
            const base = char >= "a" ? 97 : 65;
            return String.fromCharCode(((char.charCodeAt(0) - base + key)% 26)+ base);
        }
        return char;
    }).join('');
};

const processText = (decrypt = false, loop = false) => {
    const text = elements.textInput.value;
    const key = parseInt(elements.keyInput.value);

    if (!text) return showMessage(`Please input text to ${decrypt ? "decrypt" : "encrypt"}!`, false);
    elements.output.classList.toggle("loopBorder", loop);

    if (loop) {
        elements.output.innerHTML = Array.from({length: key + 1}, (_, i) => {
            const processedText = caesarCipher(text, i, decrypt);
            return `<div class="my-class">Key ${i} = ${processedText}</div>`;
        }).join('');
    } else {
        const result = caesarCipher(text, key, decrypt);
        displayOutput([result], false)
    }
};

const mathProcess = (isDecrypt = false) => {
    const text = elements.textInput.value.toUpperCase();
    let key = parseInt(elements.keyInput.value);

    if (isDecrypt) key = -key;

    if (!text) return showMessage(`Please input text to ${isDecrypt ? "decrypt" : "encrypt"}!`, false);

    const results = text.split('').map((char) =>{
        if (char >= 'A' && char <= 'Z') {
            const c = char.charCodeAt(0) - 65;
            const h = c + key;
            const z = ((h % 26) + 26) % 26;
            const resultLetter = String.fromCharCode(97 + z);
            return `${char} => ${c} + ${key} = ${h} => ${z} mod 26 = ${z} => ${resultLetter}`;
        };
        return char;
    });
    elements.output.classList.add("loopBorder");
    displayOutput(results, true)
};

const displayOutput = (results, loop) => {
    elements.output.innerHTML = results.map(r => `<div class="my-class">${r}</div>`).join('');
    if (!loop) elements.output.classList.remove("loopBorder");
};

const showMessage = (message, addClass) => {
    elements.output.innerHTML = message;
    if (addClass) elements.output.classList.add("loopBorder");
    setTimeout(() => elements.output.innerHTML = "", 3000);
};

const resetIKey = () => {
    elements.keyInput.value = 0;
};

const reset = () => {
    elements.textInput.value = "";
    elements.output.innerHTML = "";
};

const copyToClipboard = () => {
    let text = elements.output.innerText;
    if (!text) return alert("There's no text to copy.");
    else navigator.clipboard.writeText(text).then(() => alert("Text copied!")).catch(() => alert("Failed to copy text!"));
};

const copyToInput = () => {
    let text = elements.output.innerText;
    elements.textInput.value = text;
    elements.output.innerHTML = "";
};

elements.tlOF.addEventListener("click",() => {
    if (tlOF.checked) {mfOF.checked = false; elements.status.innerHTML = "Loop Function";} else {elements.status.innerHTML = "Regular Function";}});
elements.mfOF.addEventListener("click",() => {
    if (mfOF.checked) {tlOF.checked = false; elements.status.innerHTML = "Show Math Function";} else {elements.status.innerHTML = "Regular Function";}});

elements.encryptBtn.addEventListener("click", () => {
    if (elements.tlOF.checked) processText(false, true);
    else if (elements.mfOF.checked) mathProcess(false);
    else processText(false,false);
    elements.EorDstatus.innerHTML = "Encrypt";
});

elements.decryptBtn.addEventListener("click", () => {
    if (elements.tlOF.checked) processText(true, true);
    else if (elements.mfOF.checked) mathProcess(true);
    else processText(true,false);
    elements.EorDstatus.innerHTML = "Decrypt";
});

elements.resetIKeyBtn.addEventListener("click", () => {resetIKey()})
elements.resetBtn.addEventListener("click", () => {reset()})
elements.copyToClipboardBtn.addEventListener("click", () => {copyToClipboard()})
elements.copyToInputBtn.addEventListener("click", () => {copyToInput()})

elements.about.addEventListener("click", () => {
    elements.about.href = "./assets/img,vid/vid/1/2/1/ick.mp4";
    window.location.href = about.href;
});