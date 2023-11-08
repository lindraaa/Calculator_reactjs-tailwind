import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: '',
      result: ''
    };
  }

  handleClick = (value) => {
    if (value === '=') {
      try {
        this.setState({
          result: eval(this.state.display)
        });
      } catch (error) {
        this.setState({
          result: 'Error'
        });
      }
    } else if (value === 'C') {
      this.setState({
        display: '',
        result: ''
      });
    } else if (value === 'D') {
      this.setState({
        display: this.state.display.slice(0, -1)
      });
    } else {
      this.setState({
        display: this.state.display + value
      });
    }
  };

  render() {
    return (
      <div className="calculator bg-gray-200 w-96 mx-auto border rounded-lg p-4 shadow-md">
        <div className="display bg-white p-2 rounded-lg mb-2 text-right shadow-sm">
          <input
            type="text"
            value={this.state.display}
            readOnly
            className="w-full border-none outline-none text-2xl p-1"
          />
          <div className="result text-xl text-gray-600">
            {this.state.result}
          </div>
        </div>
        <div className="buttons">
          <div className="grid grid-cols-4 gap-2">
            <button
              onClick={() => this.handleClick('7')}
              className="btn bg-stone-400 hover:bg-stone-500 active:bg-stone-600 rounded-md"
            >
              7
            </button>
            <button
              onClick={() => this.handleClick('4')}
              className="btn bg-stone-400 hover:bg-stone-500 active:bg-stone-600 rounded-md"
            >
              4
            </button>
            <button
              onClick={() => this.handleClick('1')}
              className="btn bg-stone-400 hover:bg-stone-500 active:bg-stone-600 rounded-md"
            >
              1
            </button>
            <button
              onClick={() => this.handleClick('D')}
              className="btn bg-red-700 hover:bg-red-500 active:bg-red-600 rounded-md"
            >
              Del
            </button>
            <button
              onClick={() => this.handleClick('8')}
              className="btn bg-stone-400 hover:bg-stone-500 active:bg-stone-600 rounded-md"
            >
              8
            </button>
            <button
              onClick={() => this.handleClick('5')}
              className="btn bg-stone-400 hover:bg-stone-500 active:bg-stone-600 rounded-md"
            >
              5
            </button>
            <button
              onClick={() => this.handleClick('2')}
              className="btn bg-stone-400 hover:bg-stone-500 active:bg-stone-600 rounded-md"
            >
              2
            </button>
            <button
              onClick={() => this.handleClick('0')}
              className="btn bg-stone-400 hover:bg-stone-500 active:bg-stone-600 rounded-md"
            >
              0
            </button>
            <button
              onClick={() => this.handleClick('9')}
              className="btn bg-stone-400 hover:bg-stone-500 active:bg-stone-600 rounded-md"
            >
              9
            </button>
            <button
              onClick={() => this.handleClick('6')}
              className="btn bg-stone-400 hover:bg-stone-500 active:bg-stone-600 rounded-md"
            >
              6
            </button>
            <button
              onClick={() => this.handleClick('3')}
              className="btn bg-stone-400 hover:bg-stone-500 active:bg-stone-600 rounded-md"
            >
              3
            </button>
            <button
              onClick={() => this.handleClick('.')}
              className="btn bg-stone-400 hover:bg-stone-500 active:bg-stone-600 rounded-md"
            >
              .
            </button>
            <button
              onClick={() => this.handleClick('+')}
              className="btn bg-stone-400 hover:bg-stone-500 active:bg-stone-600 rounded-md"
            >
              +
            </button>
            <button
              onClick={() => this.handleClick('-')}
              className="btn bg-stone-400 hover:bg-stone-500 active:bg-stone-600 rounded-md"
            >
              -
            </button>
            <button
              onClick={() => this.handleClick('/')}
              className="btn bg-stone-400 hover:bg-stone-500 active:bg-stone-600 rounded-md"
            >
              /
            </button>
            <button
              onClick={() => this.handleClick('*')}
              className="btn bg-stone-400 hover:bg-stone-500 active:bg-stone-600 rounded-md"
            >
              *
            </button>
            <button
              onClick={() => this.handleClick('=')}
              className="btn bg-stone-400 hover:bg-stone-500 active:bg-stone-600 rounded-md"
            >
              =
            </button>
            <button
              onClick={() => this.handleClick('C')}
              className="btn bg-stone-400 hover:bg-stone-500 active:bg-stone-600 rounded-md"
            >
              C
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
