import React, {PureComponent} from 'react';
import './App.css';


export default class App extends PureComponent {
  constructor() {
    super()
    this.state = { messages: [] }

    // binds
    this._getLastMessage = this._getLastMessage.bind(this)
    this._onMessageChange = this._onMessageChange.bind(this)
  }

  _getLastMessage() {
    const lastMessage = this.state.messages[this.state.messages.length - 1]
    return lastMessage === undefined ? "" : lastMessage
  }

  _onMessageChange(event) {
    const messages = [...this.state.messages]
    messages.push(event.target.value)
    this.setState({ messages })
  }

  render() {
        return (
      <div className="App">
        <input
          type="text"
          value={this._getLastMessage()}
          onChange={this._onMessageChange}
          style={{ margin: "10px" }}
        />
        <MessageList messages={this.state.messages} />
      </div>
    )
  }
}

class MessageList extends PureComponent {
  render() {
    console.log('rendering..');
    return (
      <ul>
        {this.props.messages.map((m, i) => <Message key={i} message={m} />)}
      </ul>
    )
  }
}
class Message extends PureComponent {
  render() {
    return <li style={{ margin: "10px" }}> {this.props.message} </li>
  }
}

//export default App;
