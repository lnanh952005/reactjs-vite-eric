
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <div id='error-page'>
        <h1>OOP!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
            <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
            <span>Back to Home Page</span>
        </Link>
    </div>
  )
}

export default ErrorPage;