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

// Változók és függvények létrehozása a loadEvent()-en kívül:

const inputElement = (type, name, label) => {
    return `
    <div> 
        <label for="${name}">${label}</label>
        <input type="${type}" id="${name}" name="${name}">
    </div>
    `
};

const selectElement = (type, name, label, selectOptions) => {
    let optionElements = "";
    for (const options of selectOptions) {
        optionElements += `<option value=${options}>${options} </option>`;
    }

    return `
    <div> 
        <label>${label}</label>
        <${type} name="${name}">
         ${optionElements}
        </${type}>
    </div>
    `
};

/*
const formElement = '<form id="form">' + inputElement("text", "firstName", "Keresztneved") + inputElement("file", "profilePicture", "Profilképed") + inputElement("email", "personalEmail", "E-mail címed") + inputElement("checkbox", "newsletter", "Szeretnél-e hírlevelet kapni") + selectElement("select", "where", "Hol hallottál rólunk?", ["internetről", "ismerőstől", "egyéb"]) + '<button id="gomb">OK</button></form>;
*/


const formElement = `
    <form id="form">
        ${ inputElement("text", "firstName", "Keresztneved") }
        ${ inputElement("file", "profilePicture", "Profilképed") }
        ${ inputElement("email", "personalEmail", "E-mail címed") }
        ${ inputElement("checkbox", "newsletter", "Szeretnél-e hírlevelet kapni oldalunkról?") }
        ${ inputElement("checkbox", "terms", "Elfogadod-e a felhasználási feltételeket?") }
        ${ selectElement("select", "where", "Hol hallottál rólunk?", ["internetről", "ismerőstől", "egyéb"]) }

        <button id="gomb">OK</button>
    </form>
`;

const formSubmit = (event) => {
    event.preventDefault();     // — nem lesznek elküldve az adatok!
    console.log(event);
    event.target.classList.add("submitted");
    const optionValue = event.target.querySelector(`select[name="where"]`).value;
    console.log(optionValue);
};

const inputEvent = (event) => {

    let whichInput = event.target.getAttribute("name");
    let fName = document.querySelector(`input[name="firstName"]`)
    let tryForm = event.target.closest("#form");
    console.log(tryForm);
    if (whichInput === "firstName") {
        document.getElementById("inputValueContent").innerHTML = event.target.value;
    }
};

function loadEvent() {  // a loadEvent()-be csak a "kiíratások" és az eventek kerüljenek (?)
    const root = document.getElementById("root");
    root.insertAdjacentHTML("beforeend", formElement);
    root.insertAdjacentHTML("beforeend", `
    <div id="inputValueContent"></div>
    `);

    const form = document.getElementById("form");
    form.addEventListener("submit", formSubmit);

    const inputList = form.querySelectorAll("input");
    for (const input of inputList) {
        input.addEventListener("input", inputEvent);
    }
};

window.addEventListener("load", loadEvent);