console.log("App.js is running");

// //JSX - Javascript XML
//Create app object title/subtitle
//user title/subtitle in the template



const app = {
    "title": "Indecision App",
    "subtitle": "THis is some info",
    "options": []
}

const onFormSumit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if (option) {
        console.log(option)
        app.options.push(option);

    }
    e.target.elements.option.value = ''
    renderReactDOM();
}

function removeAllOption() {
    app.options = [];
    renderReactDOM();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum]
    alert(option)
};


let appRoot = document.querySelector("#app");



function renderReactDOM() {

    const template = (
        <div>
            <h1>{app.title.toUpperCase() + '!'}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            {app.options && app.options.length > 0 ? <p>Here are your options</p> : <p>No Options</p>}
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do ?</button>
            <button onClick={removeAllOption}>Remove all Options</button>
            <ol>
                {
                    /* Map over app.options getting back and array of list (set key and text)  */
                    app.options.map(option => <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSumit}>
                <input type="text" name="option" />
                <button>Add Options</button>

            </form>
        </div>);

    ReactDOM.render(template, appRoot);
}

renderReactDOM();




