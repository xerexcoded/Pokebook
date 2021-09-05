import { set } from 'immer/dist/internal';
import React from 'react'
import {Col,Row} from 'react-bootstrap'

function Faves ({favorite,visitFaves,index,removeFaves})
{

    return(
        <Row className="fave-link">
            <Col className="col-8 favorites-p">
                <a href={favorite.text}>{favorite.text}</a>
            </Col>
            <Col className="col-4">
                <button className="btn btn-icon-trash" onClick={()=>removeFaves(index)}>
                    <i className="fas fa-trash"></i>
                </button>
                <button className="btn btn-icon-redo" onClick={()=>visitFaves(index)}>
                    <i className="fas fa-globe"></i>
                </button>
            </Col>
        </Row>
    );
}

function FaveForm({addFaves}){
  const [value,setValue] = React.useState("");
  const handleSubmit = e => {
      e.preventDefault();
      if(!value) return;
      addFaves(value);
      setValue("");
  };

  return(
      <form onSubmit={handleSubmit} className="mb-3">
          <Row>
              <Col className="col-md-8">
               <input type="text" 
               className="faves-input"
               value={value}
               onChange={e => setValue(e.target.value)} 
               />
              </Col >
              <Col className="col-md-4">
               <button type="submit" className="faves-input-btn">Favorite!</button>
              </Col>
          </Row>
      </form>
  );

}

function FavoriteLinks() {
    const [favorites, setFaves] = React.useState([
    //default values are passed for display purposes
      {
        text: "https://www.youtube.com"
      },
      {
        text: "https://github.com/xerexcoded"
      },
      {
        text: "https://developer.mozilla.org/"
      }
    ]);



//add a favorite to the list
const addFaves = text => {
    const newFaves = [...favorites,{text}];//destructuring the array and adding the new favorite
    setFaves(newFaves);
}

const removeFaves = index => {
   const newFaves=[...favorites];
   newFaves.splice(index,1);//remove one element from index
   setFaves(newFaves);
}

const visitFaves = index => {
    const newFaves=window.location.href=`{favorite.text}`;
    setFaves(newFaves);
};

//render the main ui of to do list

return (
      <div className="favorites mb-3 container-fluid">
          <div className="favorites-header">
              <h2>Favorites</h2>
          </div>
          <div className="card">
              <div className="card-body favorites">
                 <Row>
                     <Col className="col-md-8">
                       <h3 className="cat-header">
                          website
                       </h3>
                     </Col>
                 </Row>
                 {/*maps over todo items and instantiates functions for existing items*/ }
                 {favorites.map((favorite,index,category) => (
                     <Faves
                     key={index}
                     index={index}
                     favorite={favorite}
                     removeFaves={removeFaves}
                     visitFaves={visitFaves}
                     category={category}
                     />
                 ))}
                 {/*form to add a new item */}
                 <div className="faves-form">
                     <FaveForm addFaves={addFaves}/>
                 </div>
              </div>
          </div>
      </div>
);
}

export default FavoriteLinks;



















