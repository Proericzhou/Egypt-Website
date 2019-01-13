import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="booksSide">
            <ul className="bookList">
              <div className="bookList"><li>Harry Potter and the Sorcerer's Stone</li></div>
              <div className="bookList"><li>Harry Potter and the Chamber of Secrets</li></div>
              <div className="bookList"><li>Harry Potter and the Prisoner of Azkaban</li></div>
              <div className="bookList"><li>Harry Potter and the Goblet of Fire</li></div>
              <div className="bookList"><li>Harry Potter and the Order of The Phoenix</li></div>
              <div className="bookList"><li>Harry Potter and the Half-Blood Prince</li></div>
              <div className="bookList"><li>Harry Potter and the Deathly Hallows</li></div>
              <div className="bookList"><li>Fantastic Beasts and Where to Find Them</li></div>
              <div className="bookList"><li>Fantastic Beasts and Where to Find Them: Crimes of Grindelwald</li></div>
            </ul>
        </div> 
      </div>
    );
  }
}

export default App;
