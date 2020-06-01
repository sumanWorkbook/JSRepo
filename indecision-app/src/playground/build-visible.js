

let heading = "Visibility Toggle"
let buttonLable = '';
let visibility = false;

const buttonFunc = () => {
    visibility = !visibility;
    render();

}
let details = "Here are your details"
let appRoot = document.querySelector('#app')
const render = () => {
    let template = (
        <div>
            <h1>{heading}</h1>
            <button onClick={buttonFunc}>
                {visibility ? 'hide Details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                    <p>{details}</p>
                </div>
            )}
        </div>
    )
    ReactDOM.render(template, appRoot);
}


render();
