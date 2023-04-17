import React, { Component } from 'react';
import './App.css';
import Form from "./components/form";
import Books from "./components/books";

//https://stackoverflow.com/questions/57719168/uncaught-typeerror-cannot-read-property-map-of-null

//declare App component
class App extends Component{

  //create state items. items is the name assigned to book array in the api
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }


  //get book request
  getBook = async (e) => {

    const bookName = e.target.elements.bookName.value;
    e.preventDefault(); //prevents automatic refreshing
 // await fetch is "GET"ing the list of books
    const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}`)
    const data = await api_call.json()
    this.setState({ items: data.items })
    
   
  } 

  /*componentDidMount = () => {
    const json = localStorage.getItem("items");
    const items = JSON.parse(json);
    this.setState({ items });
  }*/
  
  componentDidUpdate = () => {
    const items = JSON.stringify(this.state.items);
    localStorage.setItem("items", items);
  }


render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Book Search!</h1>
        </header>

        <Form getBook={this.getBook} />
        
        <Books books = {this.state.items}/>
        <footer>
          By Antony Nyagah
        </footer>
        <br></br>
        <footer>This app uses Google Books API</footer>
      </div>
    );
  }
  

}
export default App;