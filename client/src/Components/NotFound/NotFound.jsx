import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import notfound from '../../images/notFound.svg';
import noResult from '../../images/noResult.svg';

const NotFound = ({ isNotFoundPage }) => {
  let image = notfound;
  let classValue = 'serverError-img';
  let title = 'Page Not Found.';
  let description = "look like you're lost in space Sorry, the page not found";
  let btn = 'Back To Home';

  if (!isNotFoundPage) {
    image = noResult;
    classValue = 'notfound-img';
    title = 'No Result Found.';
    description =
      "We've searched more than 350 product We did not find any product for your search.";
    btn = 'Search Again';
  }

  return (
    <>
      <main className="notfound-cover">
        <img src={image} className={classValue} alt="Not Found" />
        <h1 className="cover-heading">{title}</h1>
        <p className="lead">{description}</p>
        <button type="button" className="btn btn-primary notfound">
          <Link to="/"> {btn} </Link>
        </button>
      </main>
    </>
  );
};

export default NotFound;
