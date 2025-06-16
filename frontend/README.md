Justin Strohsnitter, Miles Tarricone, Abdullah Durrani 

Movie recommendation (movie api)

User story:
I want to be able to search for movies by title or by genre.
I want to be able to add movie from search to my watchlist with a click of a button.
I want to be able to navigate to and view my watch list.
I want to be to able to ‘check-off’ from my watch list movies I have already seen.

Components:
Home page - search third party API
Features to have:
Search functionality - returns movies by genres or names
Schema: list of movies we have seen
Data to extract from third party api results:
** Title, rating, runtime, genre, year, director, actors: (first three), plot, awards, watched/unwatched **
(?) redbox functionality - populates results near you by zip code if a Redbox is holding your film
Interests
Miles: Authentication,
Justin: Authentication,
Abdullah: Authentication,

Functionality -- 
1. have a user search for movies by title or by genre (React Home Page Component)
- Search functionality making a call to the OMDb API (React Search Bar Component)
- this call will return a specific movie (React State Variable within the search bar Search Results Component)
- the call will display a returned movie on a movie card (React component)


2. user will be able to add movie from search to my watchlist with a click of a button.



React Skeleton
1. Home Page Component
2. Search Bar Component
3. Nav Bar with two options -- Home Page/Watchlist 
4. Search Result List
5. Watchlist - Hearder that says watchlist, items of data listed out in cards
6. Movie card component, search result card will have a button that sends data from the api call to the data base 

Running To-Do
- movie card component -- priority for for finishing the watchlist and home(search)
- deploy to AWS
- service module
- Nav Bar
- card component in HomeSearch
- add found movie to our API
- landing page with instructions on how to use app? ** on home page
- search page 
- fetch function in services?
- watched checkbox in watchlist
- delete button in watchlist
- change additional info in database 
- change shcema *additional info*


Wednesday
-Abdullah -- MVC set up, communication w database, schema set up (Complete 12/12)
-Miles -- form to communicate with our database and API

Thursday
* Database with Schema built by 0900 (Completed 12/12)

* Watchlist Component -- Hearder that says watchlist, items of data listed out in cards by 0900 ** will update when card component is integrated ONGOING


* Home Componenet -- calls to api -- search bar component, if i can -> render search results by 0900 ONGOING

Thursday Day Work
* Search results rendered -> search results added to watchlist 


Friday
-Deploy to AWS
-Justin - make home page, update nav bar 
Saturday & Sunday

Monday



Tuesday
-CSS/Styling Finish 1500
-Deploy AWS

Wednesday --SUBMIT
-Rehearsal 


reference: 

found the card style in https://codepen.io/jepooley/pen/NWYryap

rendering PUT, POST, DELETE method in JS through React
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

variations of HTTP method functuonal calls:

https://stackoverflow.com/questions/40284338/javascript-fetch-delete-and-put-requests

how to handle component refresh on post request:
https://forum.freecodecamp.org/t/react-correct-way-to-handle-a-component-refresh-on-post-request/502426

understanding headers:
https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

handling fetch PUT requests:
https://jasonwatmore.com/post/2020/11/02/react-fetch-http-put-request-examples

button styling:
https://www.freecodecamp.org/news/css-button-style-hover-color-and-background/

CSS color picker:
https://www.figma.com/colors/sky-blue/

border animations using trasnition:
https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions
