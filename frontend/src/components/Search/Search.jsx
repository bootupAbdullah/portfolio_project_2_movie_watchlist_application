import { useState, useEffect } from 'react'
import SearchList from '/src/components/Search/SearchList.jsx'
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Search.css'


// const dotenv = require("dotenv")
// dotenv.config()

const Search = ({fetchDataForMovies}) => {
    //2.) add state to our Home. create a variable named title initialized by the hook useState. NOTE THIS WILL ACTUALLY BE AN IMDBID
    const [ searchTitle, setSearchTitle] = useState('')
    //9.) **NOW NOT IN USE add variable to handle the response data and display. i am hard coding this into the component for now just to get and idea of how to access the values, then i will map onto a component card to display
    const  [foundTitle, setFoundTitle] = useState('') //10.) the movie object found
    const API = '5b053eb2'
    //3.) create a handler that will respond to change events when the text field is typed in. add onChange to the input
    const handleChange = (event) => {
        setSearchTitle(event.target.value)
    }

//const fetchDataForMovies = props.fetchDataForMovies//add to pass
    //4.) Get an api key and write a function for submitting that will request to the API
    //const API = OMDb_API ** need to figure out how to incorporate requiring dotenv so i can access this through .env instead of exposing key
   //props.fetchDataForMovies();

    const handleSubmit = async (event) => {
        event.preventDefault() //5.) prevents us from taking us to a different page
        let response = await fetch( //6.) use fetch to make an AJAX request to the outside API. 
            `https://www.omdbapi.com/?apikey=${API}&i=${searchTitle}`
        )
        let JSONdata = await response.json(); //7.) return the response as a javascript object
        console.log(JSONdata);
        setFoundTitle(JSONdata);
    }
//props.fetchDataForMovies()
    return (
    // 1.) create a form where the user can input data. We will add the movie title to search by title
    // 8.) add onSubmit={handleSubmit} on the form to link to the handleSubmit fn
    //12.) **NOW NOT IN USE added ternary statement to conditionally render the movie cards
    //13.) importing HomeSearchList component and passing found title to render as a card
    <>
    <div id="searchDiv">
    <h1>Search</h1>
    <Navbar id="searchFormBar" className="justify-content-between">
    <Form inline onSubmit={handleSubmit} id="searchForm">
        Please enter an imdbID of a movie you would like to add to your Watchlist: <br/>
        <br/>
        <Row>
        {/* <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            /> */}
          {/* <Col xs="auto"> */}
        {/* <input type="text" onChange={handleChange}/> */}
        <Form.Control type="text" placeholder="imdbID" id="searchFormControl" onChange={handleChange}/>
        {/* </Col> */}
        {/* <Col xs="auto"> */}
        <Button id= "searchButton" type="submit">Get my movie</Button>
        {/* </Col> */}
        </Row>
    </Form>
    </Navbar>
    <SearchList fetchDataForMovies={fetchDataForMovies} foundTitle={foundTitle}/> 
    </div>

    {/* <form onSubmit={handleSubmit}>
        Please enter a movie title you would like to add to your Watchlist: <br/>
        <input type="text" onChange={handleChange}/>
        <input type="submit" value="Get my moive"/>
    </form> */}
  
    </>
)

}

export default Search


//========================USE LATER/TRASH PILE====================================================

    /* <p>Total Results: {resultsNumber}</p>
    {foundTitle === '' ? <p>Title:  </p> : 
    <ul>
        {foundTitle.map((movie, index) => {
            return <li key={index}>Title: {movie.Title}</li>
        })}
    </ul> */
/* } */

//const searchArray = 
//setFoundTitle(JSONdata.Search) keeping a copy commented out to potentially use for finding by imdbID

//setFoundTitle(JSONdata.Search[0].Title)
// setResultsNumber(JSONdata.totalResults)

// foundTitle.forEach(movie => {
//     console.log(movie.title)
// })
//console.log(foundTitle)

 //const [resultsNumber, setResultsNumber] = useState('') //11.) *IN TRASH PILE* the number of results, lets the user know if they should narrow their search (searching for the movie seven yields 1524 results)