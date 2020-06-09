import React, { Component } from "react";
import BookPreview from "../BookPreview/BookPreview";
import styled from "styled-components";

class BookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredByAuthor: [],
      favorites: [],
      favoritesIDs: [],
      useFavorites: false,
    };
  }

  handleChange = (e) => {
    if (e.target.value === "All") {
      return this.setState({
        filteredByAuthor: [...this.props.bookInfo],
        useFavorites: false,
      });
    }
    let filteredAuthors = this.props.bookInfo.filter((book) => {
      if (book.authorName.includes(e.target.value)) {
        return book;
      }
    });
    this.setState({
      filteredByAuthor: [...filteredAuthors],
      useFavorites: false,
    });
  };

  render() {
    let data;
    if (!this.state.useFavorites) {
      data = this.state.filteredByAuthor;
    }
    const books = data.map((book, i) => {
      return <BookPreview key={book[i]} {...book} />;
    });
    return (
      <div>
        <div>
          <label htmlFor="filter">Filter books: </label>
          <select
            id="filter"
            onChange={(e) => {
              this.handleChange(e);
            }}
          >
            <option value=""> - Choose books to view - </option>
            <option value="All">All Authors</option>
            <option value="Favorites">Favorites</option>
            <option value="JaNay Brown-Wood">JaNay Brown-Wood</option>
            <option value="Misty Copeland">Misty Copeland</option>
            <option value="Nikki Grimes">Nikki Grimes</option>
            <option value="Angela Johnson">Angela Johnson</option>
            <option value="Patricia McKissack">Patricia McKissack</option>
            <option value="Jacqueline Woodson">Jacqueline Woodson</option>
          </select>
        </div>
        {books}
      </div>
    );
  }
}

export default BookContainer;
