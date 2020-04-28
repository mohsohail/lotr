import React from 'react';
import PropTypes from 'prop-types';

import BooksListContainer from '../containers/BooksListContainer';
import BookDetailsContainer from '../containers/BookDetailsContainer';

import { Page, LeftSection, MiddleSection, RightSection } from '../styles/BookPage';

const BookView = (props) => {
  const { booksData } = props;
  console.log('### propy', props);
  return (
    <>
      <Page>
        <LeftSection>
          {booksData.status === 2 && (
            <BooksListContainer booksData={booksData} handleFetchBook={props.handleFetchBook} />
          )}
        </LeftSection>
        <MiddleSection>
          <BookDetailsContainer />
        </MiddleSection>
        <RightSection></RightSection>
      </Page>
      {/* <div className="page">
        <div className="left" style={{ fontFamily: 'Comic Sans MS' }}>
          Welcome <span id="welcome-name"></span>
        </div>

        <div className="middle">
          <div className="status-container">
            <div className="status-input-container">
              <div className="me-img">
                <img src="placeholder.jpg" />
              </div>
              <input
                className="status-input"
                id="tweet-content"
                type="text"
                placeholder="What's happening?"
              />
            </div>
            <div className="status-bottom-group">
              <div></div>
              <div className="status-button-container">
                <button id="tweet" className="status-button">
                  Tweet
                </button>
              </div>
            </div>
            <div className="follow-container">
              <a className="followBtn">109 Following</a>
              <a className="followBtn">15 Followers</a>
            </div>
          </div>

          <div className="feed-container">
            <div className="feed"></div>
          </div>
        </div>

        <div className="right">
          <div className="right-container">
            <div className="to-follow">
              <h3>People to Follow</h3>
            </div>
            <div className="to-follow-user-list-container"></div>
          </div>
        </div>
      </div> */}
    </>
  );
};

BookView.propTypes = {};

export default BookView;
