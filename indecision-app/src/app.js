class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision'
        const subtitle = 'Put your life in the hands of the Computer'
        let options = ['Option A', 'Option B']
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <ActionSubmit />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}

class Action extends React.Component {

    handlePick() {
        alert('handlePick');
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What Should I do?</button>
            </div>
        )
    }
}

//option  Coment List of current avaiable options 
//AddOption component -> Submit 
//Add Remove all button 
//Setup HandleRemove All -> alert Some message

class Options extends React.Component {

    constructor(props) {
        super(props);
        this.handleRemoveAll = this.handleRemoveAll.bind(this);
    }

    handleRemoveAll() {
        console.log(this.props.options)
        //   alert('Remove all options');
    }
    render() {

        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove all</button>
                <ol>
                    {this.props.options.map(option => <Option key={option} optionText={option} />)}
                </ol>
            </div>
        )

    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
                <li>{this.props.optionText}</li>
            </div>
        )
    }
}


class ActionSubmit extends React.Component {

    handleAddOption(e) {
        e.preventDefault();
        const enteredOption = e.target.elements.option.value.trim();
        if (enteredOption) {
            alert(enteredOption);
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" placeholder="Add what you want to do?" name="option"></input>
                    <button >Add option </button>
                </form>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp />, document.querySelector('#app'))