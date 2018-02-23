import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyB9yIb-5MgvcWYCdSPi8CHhq5Mov4ClHKg';

// Create a new component. This component should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar/>
    </div>
  );
}

// Take this component's generated HTML and put it on the page.
ReactDOM.render(<App/>, document.querySelector('.container'));
