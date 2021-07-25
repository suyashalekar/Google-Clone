import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import '../Home.css';
import Search from './Search';

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerLinksLeft">
          <Link to="#" className="link">
            About
          </Link>

          <Link to="#" className="link">
            Store
          </Link>
        </div>

        <div className="home__headerLinksRight">
          <Link to="#" className="link">
            Gmail
          </Link>

          <Link to="#" className="link">
            Image
          </Link>

          <AppsIcon className="icons" />
          <Avatar className="icons" />
        </div>
      </div>

      <div className="home__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="home__inputContainer">
          <Search hiddenButtons />
        </div>
      </div>
    </div>
  );
}

export default Home;
