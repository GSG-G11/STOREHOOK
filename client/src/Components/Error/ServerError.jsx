import { Link } from 'react-router-dom';
import './ServerError.css';
import serverError from '../../images/serverError.svg';

export default function ServerError() {
  return (
    <main className="notfound-cover">
      <img src={serverError} className="serverError-img" alt="Not Found" />
      <h1 className="cover-heading">Opps... Something went wrong</h1>
      <p className="lead">Sorry, unexpected error</p>
      <button type="button" className="btn btn-primary notfound">
        <Link to="/">Take me Home</Link>
      </button>
    </main>
  );
}
