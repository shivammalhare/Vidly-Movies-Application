
import React, { Component } from 'react';


const ListGroup = (props) => {
    const { items, textProperty, valueProperty, onItemSelect,selectedItem } = props;
        
    return (
            
            <ul className="list-group">
                <li  onClick ={()=> onItemSelect(null)} className={selectedItem === null ? 'list-group-item active' : 'list-group-item'}>
                        
                    All Genres
                </li>
                {items.map(item => (
                    <li key ={item[valueProperty]} 
                        onClick ={()=> onItemSelect(item) }
                        className={ item === selectedItem  ? 'list-group-item active' : 'list-group-item'} >
                        
                        {item[textProperty]}
                     </li>
                    
                ))}
                
            </ul>
        ); 
    
};
 
ListGroup.defaultProps = {

    valueProperty : "_id",
    textProperty: "name"
};

export default ListGroup;