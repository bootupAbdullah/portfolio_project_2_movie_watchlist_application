# 🎬 Movie Recommendation App

**Contributors:** Justin Strohsnitter, Miles Tarricone, Abdullah Durrani  
**Tech Stack:** React, Node.js, Express, MongoDB, OMDb API

## 📌 Overview
This is a full-stack movie recommendation and tracking app that lets users search for movies by title or genre, add them to a personal watchlist, and track which ones they've already seen. It integrates the OMDb API for real-time movie data.

## 🧑‍💻 User Stories
- As a user, I want to search for movies by title or genre.
- I want to add a movie to my watchlist with a single click.
- I want to navigate to and view my watchlist at any time.
- I want to mark movies as watched once I've seen them.

## 🔧 Functionality
- **Search:** Users can search the OMDb API for movies by title or genre.
- **Add to Watchlist:** A returned movie can be saved to a personalized list.
- **Watchlist:** Displays saved movies and allows users to check off watched titles or delete them.
- **Persistent Storage:** Watchlist is stored in a custom database (MongoDB).
- **Optional Feature:** Local Redbox availability by ZIP code (if integrated).

## 🧩 Components

### UI Components
- **HomePage:** Landing page with search instructions.
- **SearchBar:** Handles user input and API fetch requests.
- **SearchResultList:** Renders movie results as cards.
- **MovieCard:** Displays title, genre, director, etc., and includes a save button.
- **Watchlist:** Displays user's saved movies in card format.
- **NavBar:** Navigation between Home and Watchlist.

## 📁 Data Schema
Example schema fields for saved movies:
- title
- rating
- runtime
- genre
- year
- director
- actors (first three)
- plot
- awards
- watched (Boolean)

## 🗓 Timeline

### Wednesday (12/12)
- **Abdullah:** MVC setup, database schema ✅
- **Miles:** Form setup for database/API communication ✅

### Thursday–Friday
- Search and Watchlist integration
- Movie card actions (Add/Delete/Mark Watched)
- Initial deployment to AWS

### Weekend – Final Polish
- Home page text and nav cleanup
- Styling, animations, responsiveness

### Monday–Wednesday
- Final tests, rehearsals
- Submit project ✅