import React from 'react';
import { Link } from 'react-router-dom'
import './NotFound.css'
import notfound from '../../images/notFound.svg';

const NotFound = ({isNotFoundPage}) => {
  let title = 'Page Not Found.'; 
  let description = "look like you're lost in space Sorry, the page not found";
  let btn  = 'Back To Home';

  if(!isNotFoundPage) {
    title = 'No Result Found.'
    description = "We've searched more than 350 product We did not find any product for your search."
    btn = 'Search Again'
  }

  return (
    <>
      <main className="notfound-cover">
        <img src={notfound} className="notfound-img" alt="Not Found"/>
        <h1 className="cover-heading">{title}</h1>
        <p className="lead">{description}</p>
        <button type="button" className="btn btn-primary notfound"><Link to="/"> {btn} </Link></button>
      </main>      
    </>
  );
};

export default NotFound;