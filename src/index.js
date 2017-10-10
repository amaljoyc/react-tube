import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search-bar';


const App = () => {
  return (
    <div>
      Hello World!
      <SearchBar />
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('.container'));
