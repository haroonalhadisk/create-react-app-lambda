import React from "react"
import reactDom from "react-dom"
import AppTravel from "../table/appTableTravel"
import TravelComplete from "../travel/travelComplete"

class TravelList extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "",
            todolist:[{title:'Shimla',status:true},{title:'Manali',status:false},
            {title:'Ladhak',status:false},{title:'Kashmir',status:false}]
            
            
        }
        
    }

    updatePending=(title)=>{
        let todolist = this.state.todolist;
       let updatedtodo=todolist.map(item=>{
           console.log(item.title, item.status)
            if (item.title===title && item.status===false)
            {
                item.status=true;
            }else if (item.title===title && item.status===true)
            {
                item.status=false;
                console.log('false')
            }
            return item
        })
        this.setState(({ todolist: updatedtodo }))
    }
    
    onDelete=(index)=>{
        let updatedtodo = this.state.todolist;
        updatedtodo.splice(index,1)

        this.setState(({ todolist: updatedtodo }))
    }
    setData = (event) => {
        this.setState({ title: event.target.value})
    }
    saveData = () => {
        const todolist ={
            title: this.state.title,
            status: false
        }
        this.setState((prevState) => ({ todolist: [...prevState.todolist, todolist ] , title: ''}))

    }
    render() {
        return (
            <div>
                
                <div className="card">
                      <AppTravel todolist={this.state.todolist} onDelete={this.onDelete} updatePending={this.updatePending}/>
                    <div class="search-bar-outer">
                        <div className="search-bar">
                            <input type="text" placeholder="Enter Destination here" value={this.state.title} onChange={this.setData}/>
                            <input type="button" className="savebutton" value="+" onClick={this.saveData} />
                        </div>
                    </div>
                </div>
               
              
            </div>

        )
    }
}

export default TravelList