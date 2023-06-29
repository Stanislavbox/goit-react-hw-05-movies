import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { ErrorWrapper } from './NotFound.styled';

export const NotFound = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldRedirect(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  if (shouldRedirect) {
    return <Navigate to="/" />;
  }

  return (
    <ErrorWrapper>
      Error 404: Sorry, page not found. We will now redirect to the homepage...
    </ErrorWrapper>
  );
};
