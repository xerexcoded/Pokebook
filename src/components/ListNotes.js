import React ,{Component} from 'react'
import {NavLink} from 'react-router-dom'
import moment from 'moment'
class ListNotes extends Component {
   
   renderFormattedDate(){
       return moment(date).format('DD MM YYYY');

   }
    render(){
        if(!this.props.notes || this.props.notes.length === 0){
            return(<div className="no-notes">No notes yet , add one it is easy </div>)
        }
        //if there are notes to list 
        const listItems = this.props.notes.map((note) =>
        
        <Navlink activeClassName='active' to={`/note/${note.id}`}
          className="list-group-item"
          key={note.id.toString()}
          onClick={this.props.viewNote.bind(this,note.id)}>
              <div className="text-truncate primary">
               {note.title}
              </div>
              <div className="font-weight-light font-italic small">
                {this.renderFormattedDate(note.date)}
              </div>
        </Navlink>
        );
        return (<ul className="list-group">{listItems}</ul>);
    }   
   
   
   
   
}

export default ListNotes
