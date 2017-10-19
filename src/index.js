import env from './env'
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail'

const API_KEY = process.env.GOOGLE_API_KEY || '';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {videos : []};

    YTSearch({key: API_KEY, term: 'cricket'}, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        Hello World!
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
