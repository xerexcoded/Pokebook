import React from 'react'
import { Redirect } from 'react-router'
import moment from 'moment'
import newline from 'react-newline-to-break';

//lets try using class instead of useEffect() 
class EditNotes extends React.Component{
    constructor(props){

        super(props)
        this.state={
            redirect : false
        };
        //binding the components to the event handlers to be executed
        this.deleteNote = this.deleteNote.bind(this)
        this.editNote = this.editNote.bind(this)
    }


    deleteNote(e){

        e.preventDefault();
       this.props.deleteNote(this.props.note.id);
    }

    editNote(e){

        e.preventDefault();
       this.props.editNote(this.props.note.id);
    }
    //render a new date whenever there is a edit 
    renderFormattedDate(){
        return 'Last edited:' + moment(this.props.note.date).format("DD MMM YYYY [at] HH:mm");
    }
  render(){
    if(this.state.redirect || !this.props.note) { return <Redirect push to ="/"/>}
    return(
        <div className="card">
            <div className="card-header">
                <h4>{this.props.note.title}</h4>
            </div>
            <div className="card-body">

                <p className="text-center font-weight-light small text-muted">{this.renderFormattedDate()}</p>
                <p className="card-text-main">Title: {newline(this.props.note.title)}</p>
                <p className="card-text">{newline(this.props.note.description)}</p>
                <button onClick={this.deleteNote} className="btn btn-danger">Delete</button>
                <button onClick={this.editNote} className="btn btn-success float-right">Edit</button>
            
            </div>
        </div>


    )
}
}

export default EditNotes;
