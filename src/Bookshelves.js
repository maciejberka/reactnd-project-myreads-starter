import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import {Link} from 'react-router-dom'
import Book from './Book';

class Bookshelves extends React.Component {
  
  render(){
    console.log(this.props.books)
    return(
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  
                  {this.props.books.map(function(book){
                    if(book.shelf === "currentlyReading"){
                      return <li key={book.id}>
                          {<Book
                          id={book.id}
                          title={book.title}
                          author={book.authors}
                          cover = {book.imageLinks.thumbnail}
                          />}
                        </li>;
                    }
                  })}

                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {this.props.books.map(function(book){
                    if(book.shelf === "wantToRead"){
                      return <li key={book.id}>
                          {<Book
                          id={book.id}
                          title={book.title}
                          author={book.authors}
                          cover = {book.imageLinks.thumbnail}
                          />}
                        </li>;
                    }
                  })}
                </ol>
              </div>
            </div>

            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {this.props.books.map(function(book){
                    if(book.shelf === "read"){
                      return <li key={book.id}>
                          {<Book
                          id={book.id}
                          title={book.title}
                          author={book.authors}
                          cover = {book.imageLinks.thumbnail}
                          />}
                        </li>;
                    }
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
    
  }

}
export default Bookshelves