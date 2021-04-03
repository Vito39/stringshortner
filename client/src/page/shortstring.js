import React from 'react';
import { Link } from 'react-router-dom';
import './shortstring.css'

class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      output: 'get short text'
    };
  }


  handleSubmit(event) {
    event.preventDefault();
    var data = new URLSearchParams();
    for (const pair of new FormData(event.target)) {
      data.append(pair[0], pair[1]);
    }
    fetch('/shortstring', { method: 'post', body: data }).then(res => res.json()).then(res2 => {
      this.setState({
        output: res2.ok
      })
    });
  }

  handleinput(out) {
    this.setState({ text: out });
  }
  handlecopy = () => {
    const el = this.textArea;
    el.select();
    document.execCommand("copy");
    alert("text Copied");
  }



  render() {

    return (
      <div className="obj">
        <h1>Enter Text Consist of lowercase(a-z) alphaet to get encoded text</h1>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <input type="text" name="item" id="item" value={this.props.text}
            onChange={(event) => this.handleinput(event.target.value)} placeholder="Enter text to get short text"/>
          <button type="submit" id="waves">Short String  </button>
        </form>
        <textarea id="cpyarea" ref={(textarea) => this.textArea = textarea}
          value={this.state.output} readOnly />
          
        <button id="cpybtn" onClick={() => this.handlecopy()}>
          Copy to Clipboard
          </button>
        <br></br>
        <Link id="sepage" to="/original">Click Here To Get Original String</Link>
      </div>
    )
  }
}

export default (home);