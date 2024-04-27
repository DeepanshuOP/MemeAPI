const generateBtn = document.getElementById('get-meme-btn');
const memeTitle = document.getElementById('title');
const memeImage = document.getElementById('meme');

//Subreddits
const subreddits = ["dankmemes", "IndianDankMemes", "memes", "FingMemes"];

function getMeme() {
  console.log("Fetching meme...");
  
  //Random subreddit
  const randomSubreddit = subreddits[Math.floor(Math.random() * subreddits.length)];
  
  // Fetch
  fetch(`https://meme-api.com/gimme/${randomSubreddit}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("Meme data:", data);
      const { title, url } = data;
      memeTitle.innerText = title;
      memeImage.src = url;
    })
    .catch((error) => {
      console.error("Error fetching meme:", error);
    });
}
generateBtn.addEventListener('click', () => {
  console.log("Button clicked. Fetching next meme...");
  getMeme();
});

getMeme();
