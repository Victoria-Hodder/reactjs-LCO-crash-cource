import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    }
  }

  addItem(todoValue) {
    if (todoValue !== "") {
      const newItem = {
        id: Date.now(),
        value: todoValue,
        isDone: false,
      };
      const list = [...this.state.list];
      list.push(newItem);

      this.setState({
        list,
        newItem: ""
      });
    }
  }

  deleteItem(id) {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList })
  }

  updateInput(input) {
    this.setState({ newItem: input })
  }


  render() {
    return (
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="app-title">ToDo App</h1>
        <div className="container">
          Add an item
          <br />
          <input
            type="text"
            className="input-text"
            placeholder="Tell me what you want to do"
            required
            value={this.state.newItem}
            onChange={e => this.updateInput(e.target.value)}
          />
          <button
            className="btn"
            onClick={() => this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
          >
            Add todo
          </button>
          <div>
            <ul>
              {this.state.list.map(item => {
                return (
                  <li key={item.id}>
                    <input
                      type="checkbox"
                      name="isDone"
                      checked={item.isDone}
                      onChange={() => { }}
                    />
                    {item.value}
                    <button
                      className="btn"
                      onClick={() => this.deleteItem(item.id)}
                    >Delete
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
