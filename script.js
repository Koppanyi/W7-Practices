/*
funtion functionName(argumentum) {
    parameter === "arumentum mint string";
};
const functionName = function ("arumentum mint string") {

    const argument = "argument mint string";
    const functionName = function (parameter) {
        parameter === "arumentum mint string";
    }
};
functionName(argument);
const functionName = () => {};

functionName();
*/

const inputElement = (type, name, label, connect) => { 
    let content = `
        <div>
            <label for="${connect}">${label}</label> <br>
            <input type="${type}" id="${connect}" name="${name}">
        </div>`;
    if (type === "checkbox") {
        content = content.replace(`<br>`, "")
    }
    return content
};

const selectElement = (type, name, label, selectOptions) => { 
    let optionElements = "";
    for (const option of selectOptions) {
        optionElements += `<option>${option}</option>`
    }
    return `
        <div>
            <label>${label}</label>
            <${type} name=${name}>
            ${optionElements}
            </${type}>
        </div>`
};

    /*
    const formElement = '<form id="form">' + inputElement("text", "firstname", "Keresztneved") + inputElement("file", "profilePicture", "Profilképed") + inputElement("email", "personalEmail", "Email címed") + inputElement("email", "personalEmail", "Email címed")
    */
const formElement = `
    <form id="form">
        <h1>Űrlap</h1>
        ${ inputElement("text", "firstname", "Keresztneved", "fname") }
        ${ inputElement("email", "personalEmail", "E-mail címed", "mail") }
        ${ inputElement("file", "profilePicture", "Profilképed", "picture") }
        ${ selectElement("select", "where", "Hol hallottál rólunk?", ["internetről", "ismerőstől", "egyéb"]) }
        ${ inputElement("checkbox", "newsLetter", "Szeretnél-e hírlevelet kapni?", "check1") }
        ${ inputElement("checkbox", "terms", "Elfogadod-e a felhasználási feltételeket?", "check2") }

        <button>OK</button>

    </form>
`;
const formSubmit = (event) => {
    event.preventDefault();  // itt nem fogja újratölteni az oldalt, nem tudja submit-olni
    console.log(event);
    const eT = event.target;
    eT.classList.add("submitted");
    let eTValue = eT.querySelector(`select[name="where"]`).value;
    console.log(eTValue);
}

const inputEvent = (event) => {
    document.getElementById("inputValueContent").innerHTML = event.target.value;
    console.log(event.target.value);
}

function loadEvent() {

const root = document.getElementById("root");

root.insertAdjacentHTML("beforeend", formElement);

root.insertAdjacentHTML("beforeend", `
    <div id="inputValueContent"></div>`);

const form = document.getElementById("form");
form.addEventListener("submit", formSubmit);

const inputList = form.querySelectorAll("input");
for (const input of inputList) {
    input.addEventListener("input", inputEvent)
}




  
}

window.addEventListener("load", loadEvent);