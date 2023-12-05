import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      tasks : [
        {name : "Amine", done : true, id : 1},
        {name : "Chaima", done : false, id :2},
        {name : "Amine", done : false, id : 3},
      ],
      textP : ''
    }
  }
  addTask=()=> this.setState({tasks : [...this.state.tasks,{name : this.state.textP, done : false, id : Math.random()}]})
  deleteTask=(idelimechta3tihoulo)=> this.setState({tasks : this.state.tasks.filter((el,i,t)=> el.id !== idelimechta3tihoulo)})
  editTask=(idelimechta3tihoulo)=> this.setState({tasks : this.state.tasks.map((el,i,t)=> el.id === idelimechta3tihoulo ? {...el,done : !el.done} : el)})
  render(){
    return(
      <div>
        <h1>Corr Chal State</h1>
        {
          this.state.tasks.map((el,i,t)=> 
          <div>
            <h2 className={el.done === true && 'fourat'}>{el.name}</h2>
            <h3>{el.done === true ? "TRUE" : "FALSE"}</h3>
            <button onClick={()=>this.editTask(el.id)}>Done</button>
            <button onClick={()=>this.deleteTask(el.id)}>Delete</button>
          </div>
            )
        }

        <br/>
        <br/>
        <input type='text' onChange={(e)=>this.setState({textP : e.target.value})}/>
        <button onClick={this.addTask}>Ajouter</button>
      </div>
    )
  }
}

export default App;
