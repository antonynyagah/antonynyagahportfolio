import React from 'react';
import {Link} from 'react-router-dom';

const Books = props => (
  
    <div>
      
      {props.books && props.books.map((book) =>{
          
          return (
            
            <div className= "book-text" key = {book.volumeInfo.title}>
                <img src = {book.volumeInfo.imageLinks.thumbnail} alt ={book.volumeInfo.title}></img>
                <p> Title: {book.volumeInfo.title}   </p>
                <p>Author: {book.volumeInfo.authors}</p>
                <p>Publihser: {book.volumeInfo.publisher}</p>
                <button className="button"> 
                    <Link to = {{pathname: `/book/${book.id}`,
                      state : {book: book.volumeInfo.title }
                    }}>View Book!</Link>   
                </button>  
             </div>    
          );
          
        }
        )
        } 
    </div> 
    
    /*<div>
      {
        props.books && props.books.map((book) =>{

          return(
            <div key = {book.volumeInfo.title}>
                
                <img src = {book.volumeInfo.imageLinks.thumbnail} alt ={book.volumeInfo.title}></img>
                <p> Title: {book.volumeInfo.title}   </p>
                <p>Author: {book.volumeInfo.authors}</p>
                <p>Publihser: {book.volumeInfo.publisher}</p>

            </div>
          );


        }

        )
      }
    </div>*/

    
  );





  export default Books;