import env from './env'
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';

const API_KEY = process.env.GOOGLE_API_KEY || '';

YTSearch({key: API_KEY, term: 'cricket'}, function(data) {
  console.log(data);
});

const App = () => {
  return (
    <div>
      Hello World!
      <SearchBar />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
