const list = document.getElementById("trending-list");

// Use your NewsData.io API key (already have it 👍)
const API_KEY = "pub_f1275e5743be4e0cb15103b9f5c9fded"; 
const URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&q=trending&language=en`;

async function fetchTrending() {
  try {
    const res = await fetch(URL);
    const data = await res.json();

    list.innerHTML = ""; // clear old list

    // Take first 5 trending articles
    data.results.slice(0, 5).forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.title;
      li.onclick = () => window.open(item.link, "_blank");
      list.appendChild(li);
    });
  } catch (err) {
    list.innerHTML = "<li>⚠️ Failed to load trending topics</li>";
    console.error(err);
  }
}

fetchTrending();
