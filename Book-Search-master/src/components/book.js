import React, { Component } from 'react';
import { Link } from "react-router-dom";
 
class Book extends Component{


    state = {

        activeBook :[]

    }

    componentDidMount = async () =>{

        const singlebook = this.props.location.state.book;
        const req = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${singlebook}`) 
        const res = await req.json()
        this.setState({activeBook:res.items[0]}); 
        console.log(this.state.activeBook);
    }
    
    render() {

        const bookinfo=this.state.activeBook.volumeInfo

        return(
           
            <div className="container">
            { this.state.activeBook.length !== 0 &&
              <div className="active-book">
                <img className="active-book-img" src={bookinfo.imageLinks.thumbnail} alt={bookinfo.title}/>
                <h3 className="active-book__title">{ bookinfo.title }</h3>
                <h4 className="active-book__publisher">
                  Publisher: <span>{ bookinfo.publisher }</span>
                </h4>

                <p className="active-book__description">Description: 
                   <span>{bookinfo.description}</span>
                </p>

                <button className="button">
                  <a href={bookinfo.infoLink}  className="active-book__website"> Additional Information! </a>
                </button>

                <br></br>
                <br></br>

                <button className="button">
                  <Link to="/">Go Home!</Link>
                </button>
              </div>
            }
          </div>
            
               
          

           
        );

    }

}

    




export default Book;