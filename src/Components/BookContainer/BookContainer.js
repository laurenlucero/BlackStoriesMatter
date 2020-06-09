import { theme } from "../../theme/globalStyle";
import BookPreview from "../BookPreview/BookPreview";
import React, { Component } from "react";
import styled from "styled-components";

const { black, white } = theme;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.5em;

  select {
    background: ${white};
    border-radius: 5px;
    border: none;
    box-shadow: 1px 1px 1px ${black};
    cursor: pointer;
    padding: 0.5em;
  }
`;

class BookContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredByAuthor: [],
      favorites: [],
      favoritesIds: [],
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
    if (e.target.value === "Favorites") {
      return this.displayFavorites();
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

  toggleFavorites = (id) => {
    if (!this.state.favorites.includes(id)) {
      this.setState({ favoritesIds: [...this.state.favoritesIds, id] });
    } else {
      let newFavoritesIds = this.state.favoritesIds.filter((favorite) => {
        return favorite !== id;
      });
      let newFavorites = this.state.favorites.filter((favorite) => {
        return favorite.id !== id;
      });
      this.setState({
        favoritesIds: newFavoritesIds,
        favorites: newFavorites,
      });
    }
  };

  displayFavorites = () => {
    let matchedBooks = this.props.bookInfo.filter((book) => {
      let match = this.state.favoritesIds.find((id) => {
        return book.id === id;
      });
      return match;
    });
    this.setState({ favorites: matchedBooks, useFavorites: true });
  };

  render() {
    let data;
    if (!this.state.useFavorites) {
      data = this.state.filteredByAuthor;
    } else if (this.state.useFavorites) {
      data = this.state.favorites;
    }
    const books = data.map((book) => {
      return (
        <BookPreview
          key={book.isbn}
          id={book.isbn}
          {...book}
          favorite={this.favorite}
          toggleFavorites={this.toggleFavorites}
        />
      );
    });
    return (
      <Wrapper>
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
      </Wrapper>
    );
  }
}

export default BookContainer;
