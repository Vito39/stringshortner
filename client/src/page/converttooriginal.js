import React from 'react';
import {Link} from 'react-router-dom';
import './converttooriginal.css'

class original extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      text : '',
      output:'get Original text'
   };
  }
   

    handleSubmit(event){
    	event.preventDefault();
    	var data = new URLSearchParams();
    	for(const pair of new FormData(event.target)){
    		data.append(pair[0],pair[1]);
    	}
    fetch('http://localhost:5000/converttooriginal',{method:'post',body:data}).then(res=>res.json()).then(res2=>{
      this.setState({
            output:res2.ok
        })
    });
    }
    
    handleinput(out){
      this.setState({text:out});
    }
    handlecopy =()=>
    {
      const el = this.textArea;
      el.select();
     document.execCommand("copy");
      alert("text Copied");      
    }
    


    render(){

    return (
     <div className="obj">
         <form onSubmit={(event)=>this.handleSubmit(event)}>
         <input type="text" name="item" id="item" value={this.props.text} 
         onChange={(event)=>this.handleinput(event.target.value)} placeholder="Enter Short text to get original text"/>
         <button type="submit" id="waves">Convert To Original </button>
         </form>
         <textarea  id="cpyarea" ref={(textarea) => this.textArea = textarea}
          value={this.state.output}  readOnly/>
          <button id="cpybtn" onClick={() => this.handlecopy()}>
            Copy to Clipboard
          </button>
          <br></br>
          <Link id="sepage" to="/"> Click Here To Short Your String </Link>
         
    </div>
   	)
   }
}

export default original;