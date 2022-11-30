import React from 'react';
import logo from './logo.svg';
import './App.css';
import './js/main';

function App(){
  return (
          <div className="container">
            <div className="upload-text">Upload Files</div>
            <header>
              Upload documents you want to share
              <br />
              with the team.
            </header>
            <form action="#">
              <input type="file" className="file-input" name="file" hidden />
              <i className="fas fa-cloud-upload-alt" />
              <p>
                Drag &amp; Drop your files here <br />
                OR
              </p>
              <button className="button">Browse Files</button>
            </form>
            <section className="progress-area" />
            <section className="upload-area" />
          </div>
        );
      }

export default App;
