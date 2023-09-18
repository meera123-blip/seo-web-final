import { useState } from 'react';

function useUrlValidation(initialValue = '') {
  const [url, setUrl] = useState(initialValue);
  const [isValidUrl, setIsValidUrl] = useState(true);

  function handleUrlChange(e) {
    const inputValue = e.target.value;
    const urlPattern = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i; // Basic URL format pattern

    if (inputValue === '') {
      setUrl(inputValue);
      setIsValidUrl(true); // Empty input, no error
    } else if (inputValue.match(urlPattern)) {
      setUrl(inputValue);
      setIsValidUrl(true); // Valid URL
    } else {
      setUrl(inputValue);
      setIsValidUrl(false); // Invalid URL
    }
  }

  return { url, isValidUrl, handleUrlChange };
}

export default useUrlValidation;
