import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = (domain) => {
  const [summaryData, setSummaryData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [taskId, setTaskId] = useState(null);

  const username = 'mohapatra.manish.99@gmail.com';
  const password = 'd8ecf5d93a2b3bcf';

  const fetchDataFromApi = async () => {
    if (!domain) {
      // Domain is empty, so return early without making the API call
      return;
    }

    // Create the tasksArray with the updated "target"
    const tasksArray = [
      {
        target: domain,
        max_crawl_pages: 10,
        load_resources: true,
        enable_javascript: true,
        enable_browser_rendering: true,
        custom_js: 'meta = {}; meta.url = document.URL; meta;',
        tag: 'some_string_123',
      },
      // Add more task objects if needed
    ];

    setLoading(true);
    try {
      const taskPostResponse = await axios.post(
        'https://sandbox.dataforseo.com/v3/on_page/task_post',
        tasksArray,
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

      if (Array.isArray(taskPostResponse.data.tasks) && taskPostResponse.data.tasks.length > 0) {
        const newTaskId = taskPostResponse.data.tasks[0].id;
        setTaskId(newTaskId); // Update taskId with the new value

        const makeApiCall = async (currentTaskId) => {
          try {
            const statusResponse = await axios.post(
              'https://sandbox.dataforseo.com/v3/on_page/pages',
              [{ id: currentTaskId }],
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

            const status = statusResponse.data.tasks ? statusResponse.data.tasks[0].status_message : null;

            if (status === 'Ok.') {
              const crawlStatus = statusResponse.data.tasks[0].result[0].crawl_progress;
              if (crawlStatus === 'finished') {
                setSummaryData(statusResponse.data.tasks[0].result[0].items);
              } else {
                setTimeout(() => makeApiCall(currentTaskId), 8000);
              }
            } else {
              setTimeout(() => makeApiCall(currentTaskId), 8000);
            }
          } catch (error) {
            console.error('API call failed:', error);
          }
        };

        makeApiCall(newTaskId); // Start the initial API call with the new taskId
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // Call the fetchData function when the component using this hook mounts
  useEffect(() => {
    fetchDataFromApi();
    // Clean up the setTimeout when the component unmounts
    return () => clearTimeout();
  }, []);

  return { summaryData, loading, error };
};

export default useFetchData;
