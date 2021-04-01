import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import home from './page/shortstring';
import original from './page/converttooriginal';



class App extends React.Component{
    constructor(props) {  super(props); this.state = {} 
       this.connecToServer = this.connecToServer.bind(this); 
    }
    connecToServer() {
      fetch('/'); 
    }

    componentDidMount() {  
        this.connecToServer();  
    }


  render(){
       return (
       	<Router>
         <div className="App">
         <Route exact path="/" component={home}/>
         <Route path="/original" component={original}/>
         </div>
         </Router>
     );
  } 
}
export default App;
