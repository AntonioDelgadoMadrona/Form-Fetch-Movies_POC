## Statement

![alt text](https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2023/04/react-js-and-vite-js-logo-on-night-sky-background.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5)

DEFINITION

I have used to assemble the project with Vite + React.

I decided to use vite, for its speed and lightness. It is one of the options recommended by the react official documentation.

I decided not to "componetize" more than necessary, I could have created an item component for each child, but I didn't find it necessary for this case.

FACILITY

This proyect is developed in React, mounted by Vite like package builder. So for the installation of dependencies it is necessary to have Node and Vite. Once both are installed, go to the root of the project and run "npm install" to install all the necessary dependencies.

PERFORMANCE

To run the project on port 5173 it is only necessary to go to the root of the project and execute "npm run dev". Then go to http://localhost:5173/ in the default browser and shows the / of the application

APP

Create an application to search for movies

API to use: - https://www.omdbapi.com/
Get the API Key on the website itself by registering your email.

Requirements:

✅ Need to show an input to search for movie and a button to search.
✅ List the movies and show the title, year and poster.
✅ Get the form to work.
✅ Make the movies display in a responsive grid.
✅ Do the data fetching to the API.

First iteration:

✅ Prevent the same search from being done twice in a row.
✅ Have the search done automatically on typing.
✅ Prevent the search from being done continuously on typing (debounce).
