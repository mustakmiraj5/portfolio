import React, { useState } from "react";

const ErrorBoundary = ({ children }) => {
  const [hasError, setHasError] = useState(false);

  const handleError = (error, errorInfo) => {
    // Log the error to an error reporting service if needed
    console.error("Error caught by ErrorBoundary:", error, errorInfo);
    // Set state to indicate that an error occurred
    setHasError(true);
  };

  return (
    <>
      {hasError ? (
        <div>Something went wrong.</div>
      ) : (
        // Render children normally
        children
      )}
    </>
  );
};

export default ErrorBoundary;
