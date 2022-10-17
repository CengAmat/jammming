import React from 'react';
import "./App.css";
import { SearchBar } from "../SearchBar/SearchBar";
import { SearchResults } from "../SearchResults/SearchResults";
import { Playlist } from "../Playlist/Playlist";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state.searchResults = [];
    this.state.playlistName = "Amat";
    this.state.playlistTracks = [
      {
        name: "Where the shadows lie",
        artist: "Bear McCreary",
        album: "The Rings of Power",
      },
      {
        name: "Galadriel",
        artist: "Bear McCreary",
        album: "The Rings of Power",
      },
      {
        name: "In the beginning",
        artist: "Bear McCreary",
        album: "The Rings of Power",
      },
    ];
  }

  render() {
    return (
      <div>
        <h1>
          Ja<span className="highlight">mmm</span>ing
        </h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
