class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: props.count
        };

    }

    handleAddOne() {

        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    handleMinusOne() {
        this.setState(prevState => {
            return {
                count: prevState.count - 1
            }
        })
    }

    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }



    render() {
        return (
            <div>
                <h1>Counter : {this.state.count}</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }


    componentDidMount() {
        const countNumber = parseInt(localStorage.getItem('count'), 10);
        if (!isNaN(countNumber)) {
            this.setState(() => ({
                count: countNumber
            }))

        }
    }
    componentDidUpdate(prevProp, prevState) {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
        }
    }
    componentWillUnmount() {

    }
}



Counter.defaultProps = {
    count: 0
}
ReactDOM.render(<Counter />, document.querySelector('#app'))

//Create three method : handleAddOne,handleMinusOne, handleReset
//UseConsole.log to print the method name 
//Wire up on click and bind the constructor funtion


/*
let count = 0;

const addOne = () => {
    count++;
    renderCounterApp();
};

const minusOne = () => {
    count--;
    renderCounterApp();
}
const reset = () => {
    count = 0;
    renderCounterApp();
};


// Make a button "-1" setup minus one function and register - log "minus One"
//Make reset button "reset" - setUp reset Funtoin - log "reset"

const numbers = [55, 100, 1000]



const renderCounterApp = () => {

    const templateTwo = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
            {
                numbers.map((num) => {
                    return <p key={num}>Number : {num}</p>;
                })
            }
        </div >
    )
    ReactDOM.render(templateTwo, appRoot)

}

renderCounterApp(); */