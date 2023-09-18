import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchData from './getData';
import { RedIcon } from '../Assets/icon';
import { GreenIcon } from '../Assets/icon';
import useFetchPageScreenshot from './fetchPageScreenshot';
import PageLoadingCircle from '../Assets/loading';

const ShowData = () => {

 const { domainName, '*': remainingPath } = useParams();
const url = `https://${domainName}/${remainingPath}`;
const { summaryData, loading, error } = useFetchData(domainName);


const { img } = useFetchPageScreenshot({ url });

if (loading) {
    // Display a loading indicator while data is being fetched
    return <PageLoadingCircle/>;
  }


  if (error) {
    // Handle the error condition here, you can display an error message
    return <p>Error: {error.message}</p>;
  }

  if (!summaryData) {
    return null; // Return null or loading/error message while data is being fetched
  }

  // Find the object with a matching 'url'
  const matchingData = summaryData.find((data) => data.url === url);
  if (!matchingData) {
    return <p>No data found for the provided URL.</p>;
  }
  // Render the data for the matching object
  return (
    <div className="bg-white min-h-screen p-4">
    {/* Header Section */}
    <div className='mt-12 mb-12'>
  <span className='mb-2 block text-center text-xs sm:text-sm md:text-base lg:text-lg font-bold uppercase text-gray-500'>Everything You need to know about</span>
  <h1 className='text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900'>Result For {url}</h1>
</div>


<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
  <div>
    <div className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
      <img src={img} className="object-cover h-full w-full" alt="Screenshot of https://dataforseo.com/apis" />
    </div>
  </div>
  <div className='flex flex-col p-12'>
    <div className="mx-auto my-auto h-24 w-24 sm:h-36 sm:w-36">
      <div className="relative h-full w-full">
        <svg className="absolute inset-0 m-auto" viewBox="0 0 100 100" width="100" height="100">
          <circle
            strokeWidth="7"
            strokeDasharray="0.9523999999999999px 1px"
            strokeLinecap="round"
            transform="rotate(-90 50 50)"
            cx="50"
            cy="50"
            r="45"
            fill="#DCFCE7"
            stroke="#10B981"
            pathLength="1"
            strokeDashoffset="0px"
          ></circle>
        </svg>
        <p className="font-display absolute inset-0 mx-auto flex items-center justify-center text-green-500 text-4xl sm:text-5xl">
          95
        </p>
        <div className="font-display absolute bottom-0 left-0 right-0 mx-auto flex translate-y-full flex-col items-center justify-center text-center text-xl sm:text-4xl">
          <p className="rounded bg-opacity-50 px-2 text-gray-900 text-lg">
            On-Page Score
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


    {/* Onpage Result Card */}
    <div className="bg-white p-4 rounded-lg shadow-md mb-12">
      <h2 className="text-xl font-semibold mb-2">Onpage Result</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-3 mb-3">
  <div className='flex flex-col items-center rounded-lg border p-4 text-center'>
    <span className="text-xl font-semibold">{matchingData?.meta?.internal_links_count}</span>
    <p>Internal Links</p>
  </div>
  <div className='flex flex-col items-center rounded-lg border p-4 text-center'>
    <span className="text-xl font-semibold">{matchingData?.meta?.external_links_count}</span>
    <p>External Links</p>
  </div>
  <div className='flex flex-col items-center rounded-lg border p-4 text-center'>
    <span>{matchingData?.meta?.images_count}</span>
    <p>Number of Images</p>
  </div>
  <div className='flex flex-col items-center rounded-lg border p-4 text-center'>
    <span>{matchingData?.meta?.images_size}</span>
    <p>Images Size</p>
  </div>
  <div className='flex flex-col items-center rounded-lg border p-4 text-center'>
    <span>{matchingData?.meta?.scripts_count}</span>
    <p>Scripts</p>
  </div>
  <div className='flex flex-col items-center rounded-lg border p-4 text-center'>
    <span>{matchingData?.meta?.scripts_size}</span>
    <p>Script Size</p>
  </div>
  <div className='flex flex-col items-center rounded-lg border p-4 text-center'>
    <span>{matchingData?.meta?.content?.plain_text_size}</span>
    <p>Plain Text Size</p>
  </div>
  <div className='flex flex-col items-center rounded-lg border p-4 text-center'>
    <span>{matchingData?.meta?.content?.plain_text_rate.toFixed(2)}</span>
    <p>Plain Text Rate</p>
  </div>
  <div className='flex flex-col items-center rounded-lg border p-4 text-center'>
    <span>{matchingData?.meta?.content?.plain_text_word_count}</span>
    <p>Plain Text Word Count</p>
  </div>
  <div className='flex flex-col items-center rounded-lg border p-4 text-center'>
    <span>{matchingData?.meta?.content?.automated_readability_index.toFixed(2)}</span>
    <p>Automated Readability Index</p>
  </div>
  <div className='flex flex-col items-center rounded-lg border p-4 text-center'>
    <span>{matchingData?.meta?.content?.coleman_liau_readability_index.toFixed(2)}</span>
    <p>Coleman Liau Readability index</p>
  </div>
  <div className='flex flex-col items-center rounded-lg border p-4 text-center'>
    <span>{matchingData?.meta?.content?.dale_chall_readability_index.toFixed(2)}</span>
    <p>Dale Chall Readability Index</p>
  </div>
  <div className='flex flex-col items-center rounded-lg border p-4 text-center'>
    <span>{matchingData?.meta?.content?.flesch_kincaid_readability_index.toFixed(2)}</span>
    <p>Flesch Kincaid Readability Index</p>
  </div>
  <div className='flex flex-col items-center rounded-lg border p-4 text-center'>
    <span>{matchingData?.meta?.content?.smog_readability_index.toFixed(2)}</span>
    <p>Smog Readability Index</p>
  </div>
  <div className='flex flex-col items-center rounded-lg border p-4 text-center'>
    <span>{matchingData?.meta?.content?.description_to_content_consistency.toFixed(2)}</span>
    <p>Description to Content Consistency</p>
  </div>
  <div className='flex flex-col items-center rounded-lg border p-4 text-center'>
    <span>{matchingData?.meta?.content?.title_to_content_consistency.toFixed(2)}</span>
    <p>Title to Content Consistency</p>
  </div>
  {/* Add more items here */}
</div>


    {/* Duplicate Title Card */}
<div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
  {/* Duplicate Description and Duplicate Content Cards */}
    <div className="flex items-center space-x-4 rounded-lg border p-4">
     
          <span>
            {matchingData?.checks?.duplicate_description ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p >Duplicate Description</p>
          <p className='text-sm text-gray-500'>
            Duplicate meta descriptions are bad for SEO. They confuse search engines and make it harder to rank for specific keywords.
          </p>
      </div>


  <div className="flex items-center space-x-4 rounded-lg border p-4">
          <span>
            {matchingData?.checks?.duplicate_content ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p>Duplicate Content</p>
          <p className='text-sm text-gray-500'>
            Duplicate content is bad for SEO. It confuses search engines and makes it harder to rank for specific keywords.
          </p>
    </div>
  <div className="flex items-center space-x-4 rounded-lg border p-4">
          <span>
            {matchingData?.checks?.large_page_size ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p >Size</p>
          <p className='text-sm text-gray-500'>
            The size of your page is too large. This can negatively impact your page load speed and user experience.
          </p>
    </div>


    {/* Cache Control Card */}
    <div className="flex items-center space-x-4 rounded-lg border p-4">
          <span>
            {matchingData?.checks?.irrelevant_description ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p >Cache Control</p>
          <p className='text-sm text-gray-500'>
            Your page does not have a cache control header. This can negatively impact your page load speed and user experience.
          </p>
    </div>

    {/* Canonical Card */}
    <div className="flex items-center space-x-4 rounded-lg border p-4">
          <span>
            {matchingData?.checks?.canonical ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p >Canonical</p>
          <p className='text-sm text-gray-500'>
            Your page does not have a canonical tag. This can negatively impact your page load speed and user experience.
          </p>
    </div>

    {/* No H1 Tag Card */}
    <div className="flex items-center space-x-4 rounded-lg border p-4">
          <span>
            {matchingData?.checks?.no_h1_tag ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p >No H1 Tag</p>
          <p className='text-sm text-gray-500'>
            Your page does not have an H1 tag. This can negatively impact your page load speed and user experience.
          </p>
    </div>

    {/* HTTPS to HTTP Links Card */}
    <div className="flex items-center space-x-4 rounded-lg border p-4">
          <span>
            {matchingData?.checks?.https_to_http_links ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p >HTTPS to HTTP Links</p>
          <p className='text-sm text-gray-500'>
            Your page has links to HTTP pages. This can negatively impact your page load speed and user experience.
          </p>
    </div>

    {/* Is 4xx Code Card */}
    <div className="flex items-center space-x-4 rounded-lg border p-4">
          <span>
            {matchingData?.checks?.is_4xx_code ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p >Is 4xx Code</p>
          <p className='text-sm text-gray-500'>
            Your page has a 4xx status code. This can negatively impact your page load speed and user experience.
          </p>
        </div>

    {/* Is 5xx Code Card */}
    <div className="flex items-center space-x-4 rounded-lg border p-4">
          <span>
            {matchingData?.checks?.is_5xx_code ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p >Is 5xx Code</p>
          <p className='text-sm text-gray-500'>
            Your page has a 5xx status code. This can negatively impact your page load speed and user experience.
          </p>
        </div>

    {/* Is Broken Card */}
    <div className="flex items-center space-x-4 rounded-lg border p-4">
    
          <span>
            {matchingData?.checks?.is_broken ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p >Is Broken</p>
          <p className='text-sm text-gray-500'>
            Your page has broken links. This can negatively impact your page load speed and user experience.
          </p>
    </div>

    {/* Low Content Rate Card */}
    <div className="flex items-center space-x-4 rounded-lg border p-4">
          <span>
            {matchingData?.checks?.low_content_rate ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p>Low Content Rate</p>
          <p className='text-sm text-gray-500'>
            Your page has a low content rate. This can negatively impact your page load speed and user experience.
          </p>
    </div>

    {/* Has Render Blocking Resources Card */}
    <div className="flex items-center space-x-4 rounded-lg border p-4">
          <span>
            {matchingData?.checks?.has_render_blocking_resources ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p >Has Render Blocking Resources</p>
          <p className='text-sm text-gray-500'>
            Your page has render blocking resources. This can negatively impact your page load speed and user experience.
          </p>
        </div>

    {/* Low Readability Rate Card */}
    <div className="flex items-center space-x-4 rounded-lg border p-4">

          <span>
            {matchingData?.checks?.low_readability_rate ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p >Low Readability Rate</p>
          <p className='text-sm text-gray-500'>
            Your page has a low readability rate. This can negatively impact your page load speed and user experience.
          </p>
        </div>

    {/* Title Too Long Card */}
    <div className="flex items-center space-x-4 rounded-lg border p-4">
          <span>
            {matchingData?.checks?.title_too_long ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p>Title Too Long</p>
          <p className='text-sm text-gray-500'>
            Your page has a title that is too long. This can negatively impact your page load speed and user experience.
          </p>
        </div>

    {/* No Image Alt Card */}
    <div className="flex items-center space-x-4 rounded-lg border p-4">
          <span>
            {matchingData?.checks?.no_image_alt ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p>No Image Alt</p>
          <p className='text-sm text-gray-500'>
            Your page has images without alt tags. This can negatively impact your page load speed and user experience.
          </p>
        </div>

    {/* No Favicon Card */}
    <div className="flex items-center space-x-4 rounded-lg border p-4">
          <span>
            {matchingData?.checks?.no_favicon ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p c>No Favicon</p>
          <p className='text-sm text-gray-500'>
            Your page does not have a favicon. This can negatively impact your page load speed and user experience.
          </p>
        </div>

    {/* Recursive Canonical Card */}
    <div className="flex items-center space-x-4 rounded-lg border p-4">
          <span>
            {matchingData?.checks?.recursive_canonical ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p >Recursive Canonical</p>
          <p className='text-sm text-gray-500'>
            Your page has a recursive canonical tag. This can negatively impact your page load speed and user experience.
          </p>
        </div>

    {/* Is Orphan Page Card */}
    <div className="flex items-center space-x-4 rounded-lg border p-4">

          <span>
            {matchingData?.checks?.is_orphan_page ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p >Is Orphan Page</p>
          <p className='text-sm text-gray-500'>
            Your page is an orphan page. This can negatively impact your page load speed and user experience.
          </p>
        </div>

    {/* Web Server Card */}
    <div className="flex items-center space-x-4 rounded-lg border p-4">

          <span>
            {matchingData?.checks?.server ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p >Web Server</p>
          <p className='text-sm text-gray-500'>
            Server information is the information about the software that is running on the server. This can be used to determine the technology stack of a website.
          </p>
        </div>

    {/* No Title Card */}
    <div className="flex items-center space-x-4 rounded-lg border p-4">
          <span>
            {matchingData?.checks?.no_title ? (
              <>{GreenIcon}</>
            ) : (
              <>{RedIcon}</>
            )}
          </span>
          <p >No Title</p>
          <p className='text-sm text-gray-500'>
            The title tag is an HTML tag that is used to define the title of a webpage. This tag is displayed in the search results and is used by search engines to determine the topic of a page.
          </p>
        </div>
</div>
    


    {/* H Tags Section */}
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
  <div className="mb-4">
    <h1 className="text-3xl">H Tags</h1>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 items-start">
    <div className="border p-4 rounded-lg bg-gray-50">
      {!matchingData?.meta?.htags.h1 ? null : (
        <>
          <h2 className="font-medium mb-4">
            We found {matchingData?.meta?.htags.h1.length} H1 tags on this page
          </h2>
          {matchingData?.meta?.htags.h1.map((h, index) => (
            <li className="text-gray-600" key={index}>
              {h}
            </li>
          ))}
        </>
      )}
    </div>
    <div className="border p-4 rounded-lg bg-gray-50">
      {!matchingData?.meta?.htags.h2 ? null : (
        <>
          <h2 className="font-medium mb-4">
            We found {matchingData?.meta?.htags.h2.length} H2 tags on this page
          </h2>
          {matchingData?.meta?.htags.h2.map((h, index) => (
            <li className="text-gray-600" key={index}>
              {h}
            </li>
          ))}
        </>
      )}
    </div>
    <div className="border p-4 rounded-lg bg-gray-50">
      {!matchingData?.meta?.htags.h3 ? null : (
        <>
          <h2 className="font-medium mb-4">
            We found {matchingData?.meta?.htags.h3.length} H3 tags on this page
          </h2>
          {matchingData?.meta?.htags.h3.map((h, index) => (
            <li className="text-gray-600" key={index}>
              {h}
            </li>
          ))}
        </>
      )}
    </div>
    <div className="border p-4 rounded-lg bg-gray-50">
      {!matchingData?.meta?.htags.h4 ? null : (
        <>
          <h2 className="font-medium mb-4">
            We found {matchingData?.meta?.htags.h4.length} H4 tags on this page
          </h2>
          {matchingData?.meta?.htags.h4.map((h, index) => (
            <li className="text-gray-600" key={index}>
              {h}
            </li>
          ))}
        </>
      )}
    </div>
    <div className="border p-4 rounded-lg bg-gray-50">
      {!matchingData?.meta?.htags.h5 ? null : (
        <>
          <h2 className="font-medium mb-4">
            We found {matchingData?.meta?.htags.h5.length} H5 tags on this page
          </h2>
          {matchingData?.meta?.htags.h5.map((h, index) => (
            <li className="text-gray-600" key={index}>
              {h}
            </li>
          ))}
        </>
      )}
    </div>
  </div>
  {/* Add more H tags cards here */}
</div>


    {/* Speed Insight Section */}
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
  <div className="mb-4">
    <h1 className="text-3xl">Speed Insight</h1>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
    <div className='flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4'>
      <span className="text-xl">{matchingData?.page_timing?.connection_time}ms</span>
      <p>Time to Secure Connection</p>
    </div>
    <div className='flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4'>
      <span className="text-xl">{matchingData?.page_timing?.waiting_time}ms</span>
      <p>Waiting Time</p>
    </div>
    <div className='flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4'>
      <span>{matchingData?.page_timing?.download_time}ms</span>
      <p>Download Time</p>
    </div>
    <div className='flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4'>
      <span>{matchingData?.page_timing?.time_to_interactive}ms</span>
      <p>Time to Interactive</p>
    </div>
    <div className='flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4'>
      <span>{matchingData?.page_timing?.dom_complete}ms</span>
      <p>DOM Complete</p>
    </div>
    <div className='flex flex-col items-center justify-center space-y-2 rounded-lg bg-gray-100 p-4'>
      <span>{matchingData?.page_timing?.largest_contentful_paint}ms</span>
      <p>Largest Contentful Paint</p>
    </div>
    {/* Add more speed insights here */}
  </div>
</div>

    

    {/* Social Media Meta Tags Section */}
<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
  <div className="grid grid-cols-[auto_1fr] gap-y-1 rounded-lg border p-4 sm:grid-cols-[auto_1fr auto_1fr]">
    {/* Social media meta tags cards */}
    <p className="border-b p-2">og:title</p>
    <p className="border-b p-2 font-medium">{matchingData.meta.social_media_tags["og:title"]}</p>

    <p className="border-b p-2">og:type</p>
    <p className="border-b p-2 font-medium">{matchingData.meta.social_media_tags["og:type"]}</p>

    <p className="border-b p-2">og:image</p>
    <p className="border-b p-2 font-medium">{matchingData.meta.social_media_tags["og:image"]}</p>

    <p className="border-b p-2">og:locale</p>
    <p className="border-b p-2 font-medium">{matchingData.meta.social_media_tags["og:locale"]}</p>

    <p className="border-b p-2">og:site_name</p>
    <p className="border-b p-2 font-medium">{matchingData.meta.social_media_tags["og:site_name"]}</p>

    <p className="border-b p-2">og:url</p>
    <p className="border-b p-2 font-medium">{matchingData.meta.social_media_tags["og:url"]}</p>

    <p className="border-b p-2">twitter:card</p>
    <p className="border-b p-2 font-medium">{matchingData.meta.social_media_tags["twitter:card"]}</p>
    {/* Add more social media meta tags cards here */}
  </div>
  


  
  <div className='flex flex-col justify-between'>
    <div>
      <img src="https://dataforseo.com/wp-content/uploads/2022/04/cropped-favicon_512.png" alt="Website Icon" />
    </div>
    <div className=''>
      <h2>{matchingData.meta.social_media_tags["og:title"]}</h2>
      <p>{matchingData.meta.social_media_tags["og:description"]}</p>
    </div>
    <div>
      <p>How your website is displayed on search engines & social media.</p>
    </div>
  </div>
</div>
</div>
</div>

  );
};

export default ShowData;
