//render,constructor,handleToggleVisiblitiy
//visibitity -> state -> false

class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleToggleVisibility() {
    console.log(this.state.visibility);
    this.setState((prevState => {
      return {
        visibility: !prevState.visibility
      }
    }))
  }

  render() {
    const heading = "Click to toggle details Options";
    const details = "here are the details"

    console.log('In render ' + this.state.visibility);
    return (
      <div>
        <h1>{heading}</h1>
        <button onClick={this.handleToggleVisibility}>{this.state.visibility ? 'Hide Details' : 'show Details'}</button>
        {this.state.visibility && (
          <div>
            <p>{details}</p>
          </div>
        )}
      </div>
    )
  }
}

ReactDOM.render(<VisibilityToggle />, document.querySelector("#app"));
/*

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
 */
