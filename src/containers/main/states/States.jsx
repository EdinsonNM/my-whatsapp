import React from 'react';
export default class States extends React.PureComponent {
    state = {
        counter1: 0,
        counter2: 0,
        counter3: 0
    };
    handleChangeCounter1 = () =>
        this.setState({counter1: this.state.counter1 + 1});
    handleChangeCounter2 = () =>
        this.setState({counter2: this.state.counter2 + 1});
    handleChangeCounter3 = () =>
        this.setState({counter3: this.state.counter3 + 1});
    changeTitle = () => (document.title = `total ${this.state.counter1}`);
    componentDidMount() {
        this.changeTitle();
    }
    componentDidUpdate() {
        console.log('componentDidUpdate');
        this.changeTitle();
    }
    render() {
        return (
            <div>
                <button onClick={this.handleChangeCounter1}>
                    Counter 1 ({this.state.counter1})
                </button>
                <button onClick={this.handleChangeCounter2}>
                    Counter 2 ({this.state.counter2})
                </button>
                <button onClick={this.handleChangeCounter3}>
                    Counter 3 ({this.state.counter3})
                </button>
            </div>
        );
    }
}
