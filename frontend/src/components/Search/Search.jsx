import { useState } from 'react';
import SearchList from '/src/components/Search/SearchList.jsx';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import './Search.css';

const Search = ({ fetchDataForMovies }) => {
  const [searchTitle, setSearchTitle] = useState('');
  const [foundTitle, setFoundTitle] = useState('');
  const API = import.meta.env.VITE_OMDB_API_KEY;

  const handleChange = (event) => {
    setSearchTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let response = await fetch(
      `https://www.omdbapi.com/?apikey=${API}&i=${searchTitle}`
    );
    let JSONdata = await response.json();
    console.log(JSONdata);
    setFoundTitle(JSONdata);
  };

  return (
    <>
      <div id="searchDiv">
        <h1>Search</h1>
        <Navbar id="searchFormBar" className="justify-content-between">
          <Form onSubmit={handleSubmit} id="searchForm">
            Please enter an imdbID of a movie you would like to add to your Watchlist:
            <br />
            <br />
            <Row>
              <Form.Control
                type="text"
                placeholder="imdbID"
                id="searchFormControl"
                onChange={handleChange}
              />
              <Button id="searchButton" type="submit">
                Get my movie
              </Button>
            </Row>
          </Form>
        </Navbar>
        {/* Place the suggestions block here (around line 38) */}
        <div className="search-suggestions">
          <p className="search-suggestions-title">
            Try out the search with one of these IMDb IDs:
          </p>
          <ul className="search-suggestions-list">
            <li>tt0892769 <span>(How To Train Your Dragon)</span></li>
            <li>tt0068646 <span>(The Godfather)</span></li>
            <li>tt0468569 <span>(The Dark Knight)</span></li>
            <li>tt0109830 <span>(Forrest Gump)</span></li>
            <li>tt1375666 <span>(Inception)</span></li>
          </ul>
        </div>
        <SearchList fetchDataForMovies={fetchDataForMovies} foundTitle={foundTitle} />
      </div>
    </>
  );
};

export default Search;

// ------------------- graveyard -------------------

// const dotenv = require("dotenv")
// dotenv.config()

// const fetchDataForMovies = props.fetchDataForMovies //add to pass

// const API = OMDb_API ** need to figure out how to incorporate requiring dotenv so i can access this through .env instead of exposing key

// props.fetchDataForMovies()

/*
<form onSubmit={handleSubmit}>
  Please enter a movie title you would like to add to your Watchlist: <br/>
  <input type="text" onChange={handleChange}/>
  <input type="submit" value="Get my moive"/>
</form>
*/

/*
<Form.Control
  type="text"
  placeholder="Search"
  className=" mr-sm-2"
/>
<Col xs="auto">
<input type="text" onChange={handleChange}/>
</Col>
<Col xs="auto">
<Button id= "searchButton" type="submit">Get my movie</Button>
</Col>
*/