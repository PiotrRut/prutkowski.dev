---
date: "2020-05-24"
path: "/blog/new-website"
title: "Welcome to the refreshed site!"
---
Hey all, and welcome to the finally refreshed website! This post is going to be a long one, but also a very interesting read!

With my old website (created way back in 2019) well overdue a new, fresh look, and me being stuck at home due to social distancing and whatnot, the website you are currently on came to life. It is written entirely from scratch with React and Gatsby!

As opposed to my old website, full of vibrant colurs and big, bulky text, I wanted this one to be much more minimalistic. The bright colours were switched out with black and white, and the whole structure has changed too - it is now a _single page application_!! This means that all of the content is on the main page (also called the _landing page_), but in my case, there are some separate pages here as well.

The projects page for example, is now its own separate page, where __all__ of my public GitHub repositories fetched automatically via the GitHub REST API live, and are displayed in a neat grid! There is also a blog section (where you probably found this post) as well as the new addition to my portfolio - a dedicated gallery!

### __The creation of the gallery__
  
Now, to make this possible I had to do a lot of thinking. The images I shoot are in the RAW format, which is great for post-production in software like Adobe Lightroom, because it saves all the image metadata, and lets me manipulate everything in the picture - from the highlights and shadows, through the clarity and sharpness, to the smallest details like saturation and luminosity! The downside though - very large file size!! Even after exporting them to JPG format from within lightroom, image files are around 10-15MB in size, each. This of course, would make it really inefficient to store and display locally.

What I have ultimately decided on, is to store each picture on a Microsoft Azure blob container. Now that would solve the issue of hosting and storage, but they would still be __way__ to big to display. To solve this, I run all of them through a small python script written by my good friend [Reece](http://reecemercer.dev), which compresses them down by a chosen amount (in my case around 35%) and returns both the full size and the compressed version.

To make them displayable on my website, I wrote a very simple [back end API](https://github.com/PiotrRut/prutkowski.tech-backend) in NodeJS. Both version of each picture are uploaded to the Azure storage, with '-compressed' appended at the end of the filename of the compressed one. This makes it very easy and convienient to search for them and filter them out. As the URL structure is the same for every image, I only have to append the file name to the end of the URL to be able to access any of the photos. In my backend, this is done using the following function:

```javascript
// Create a new url to access the image with the image file name appended at the end
function genImageUrl(key){
  return `https://${process.env.AZURE_SPACE}.blob.core.windows.net/${process.env.AZURE_CONTAINER}/${key}`
}
```

These URLs are then inserted into a JSON object for each picture I have in storage, and sent to my front end via an ```HTTP GET``` request, stored in local state-array, and displayed using the compressed image to reduce load size and network usage.

```javascript
 // Fetch all image URLs from Azure via my backend and append to array
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${BACKEND_URL}/gallery/getAllPhotos`);
      setImgs(response.data.reverse());
    }
    fetchData();
  }, []);
```

Once an image is clicked on to isolate it on the screen (against a fully black background to allow better contrast) anybody can press a button which will take them to the full sized picture in a separate tab 😊

I hope you will enjoy this site just as much as I enjoyed crating it! It

