import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchPageScreenshot = ({ url }) => {
  const [img, setImg] = useState('');

  const fetchImg = async () => {
    try {
      const username = 'mohapatra.manish.99@gmail.com';
      const password = 'd8ecf5d93a2b3bcf';

      const statusResponse = await axios.post(
        'https://api.dataforseo.com/v3/on_page/page_screenshot',
        [{ url, "full_page_screenshot": false }],
        {
          auth: {
            username,
            password,
          },
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      setImg(statusResponse?.data?.tasks[0]?.result[0]?.items[0]?.image);
    } catch (error) {
      console.error('API call failed:', error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchImg();
    };

    // Call the API when the component mounts or when the 'url' prop changes
    fetchData();
  }, [url]); // Include 'url' as a dependency to re-run the effect when 'url' changes

  return { img };
};

export default useFetchPageScreenshot;
