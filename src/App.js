import React, {Component} from 'react';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      nutri: []
    };
    
  }

  componentDidMount(){
    let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';
    fetch(url)
    .then((r)=>r.json())
    .then((json)=>{
      let state = this.state;
      state.nutri = json;
      this.setState(state);
      console.log(json)
    })
  }

  render(){
    return(
      <div>

      </div>
    )
  }
  
}

export default App;
