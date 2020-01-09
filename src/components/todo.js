import React from 'react';

class Todo extends React.Component {
  constructor(props){
    super(props);
    this.state={
      tasks:[],
      taskToAdd: ""
    }
  }

  updateTaskToAdd=(event)=>{
    this.setState({ taskToAdd: event.target.value })
  }

  addTask(){
    console.log(this.state.taskToAdd);
    let updatedTasks=this.state.tasks
    let now=new Date();
    let stamp=now.getTime();
    console.log(stamp)

    let taskObject={
      id: stamp,
      content: this.state.taskToAdd
    }
    //this.setState({taskToAdd: taskObject})
    updatedTasks.push(taskObject);
    this.setState(
      {
        taskToAdd: "",
        tasks: updatedTasks
      },
      () => {
        window.localStorage.setItem('savedList', JSON.stringify(this.state.tasks));
        console.log("LocalStorage")
      }
    )
    //console.log(this.state.tasks);
  }

  componentDidMount() {
    const loadedList = window.localStorage.getItem('savedList');
    const parsedList = JSON.parse(loadedList);
    this.setState({
        tasks: parsedList,
    })
  }

  deleteTask(id) {
    let taskListCopy = this.state.tasks
    let taskListShortened = taskListCopy.filter(task => task.id !== id)
    this.setState(
      {
        tasks: taskListShortened
      },
      () => {
        window.localStorage.setItem('savedList', JSON.stringify(this.state.tasks));
        //console.log("LocalStorage")
      }
    )
  }

  handleEnter(e){
    if (e.key==='Enter'){
      this.addTask();
    }
    
  }



  render(){
    
    //console.log(this.state.tasks);
    return (
      <React.Fragment>
        <input 
          type="text" 
          placeholder="add task"
          value={this.state.taskToAdd}
          onChange={this.updateTaskToAdd}
          onKeyDown={this.handleEnter.bind(this)}
        />
        <button  
          onClick={this.addTask.bind(this)}
        >Add task</button>

        <ul>
            {this.state.tasks.map( singleTask => <li key={singleTask.id}>
              {singleTask.content}
              <button onClick={() => this.deleteTask(singleTask.id)}>x</button>
            </li>)}
        </ul>
        
      </React.Fragment>
      
    );
  } 
}

export default Todo;