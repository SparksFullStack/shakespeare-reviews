# Shakespeare Reviews
- This was a website I made as part of a coding challenge for a company I was applying to.

## Technologies
- Main: React
- Requests: Axios
- Styling: Reactstrap
- Testing: Jest, Enzyme
- Other: ReactStars

## Components
### NavHeader
- Renders a ReactStrap navbar component that auto resizes and has a toggler for mobile devices

### Hero
- A hero with a large picture of Shakespeare. It displays the main header of the website, as well as a brief description and a button linking to the reviews

### ReviewsContainer
- This area renders the actual reviews. It reaches out to Axios, and then calls a function that sorts the reviews into groups. That function, after sorting them into a large object with multiple sub-arrays of objects, sets the state so that the reviews can be rendered.

### Review
- This component is a child of ReviewsContainer. A single instance of it is render for each review in a review group (up to six). It translates the review date into a more managable format, and converts the review rating to a star rating via the ReactStars library.

### Star Rating
- This just setups the star rating component from ReactStars.

### Footer
- A simple footer with a link to my portfolio website on it