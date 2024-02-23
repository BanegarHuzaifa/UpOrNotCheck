var domains = [
  { name: "Google", url: "https://www.google.com" },
  { name: "Youtube", url: "https://www.youtube.com" },
  { name: "Facebook", url: "https://www.facebook.com" },
  { name: "Twitter", url: "https://twitter.com" }, // X
  { name: "Wikipedia", url: "https://www.wikipedia.org" },
  { name: "Instagram", url: "https://www.instagram.com" },
  { name: "Reddit", url: "https://www.reddit.com" },
  { name: "Amazon", url: "https://www.amazon.com" },
  { name: "DuckDuckGo", url: "https://www.duckduckgo.com" },
  { name: "Yahoo", url: "https://www.yahoo.com" },
  { name: "Tiktok", url: "https://www.tiktok.com" },
  { name: "Bing", url: "https://www.bing.com" },
  { name: "The Weather Channel", url: "https://weather.com" },
  { name: "WhatsApp", url: "https://www.whatsapp.com" },
  { name: "Yandex", url: "https://www.yandex.com" },
  { name: "OpenAI", url: "https://www.openai.com" },
  { name: "ChatGPT", url: "https://chat.openai.com" },
  { name: "Live", url: "https://www.live.com" },
  { name: "Microsoft", url: "https://www.microsoft.com" },
  { name: "Microsoft Online", url: "https://www.microsoftonline.com" },
  { name: "Linkedin", url: "https://www.linkedin.com" },
  { name: "Quora", url: "https://www.quora.com" },
  { name: "Twitch", url: "https://www.twitch.tv" },
  { name: "Naver", url: "https://www.naver.com" },
  { name: "Netflix", url: "https://www.netflix.com" },
  { name: "Microsoft Office", url: "https://www.office.com" },
  { name: "VK", url: "https://vk.com" },
  { name: "Globo", url: "https://www.globo.com" },
  { name: "Ali Express", url: "https://www.aliexpress.com" },
  { name: "CNN", url: "https://www.cnn.com" },
  { name: "Zoom", url: "https://www.zoom.us" },
  { name: "IMDb", url: "https://www.imdb.com" },
  { name: "New York Times", url: "https://www.nytimes.com" },
  { name: "ESPN", url: "https://www.espn.com" },
  { name: "Pinterest", url: "https://www.pinterest.com" },
  { name: "Universo Online", url: "https://www.uol.com.br" },
  { name: "eBay", url: "https://www.ebay.com" },
  { name: "Marca", url: "https://www.marca.com" },
  { name: "Canva", url: "https://www.canva.com" },
  { name: "Spotify", url: "https://www.spotify.com" },
  { name: "BBC", url: "https://www.bbc.com" },
  { name: "PayPal", url: "https://www.paypal.com" },
  { name: "Apple", url: "https://www.apple.com" },
  { name: "WeChat", url: "https://www.wechat.com" },
  { name: "Facebook Messenger", url: "https://www.messenger.com" },
  { name: "Telegram", url: "https://www.telegram.org" },
  { name: "SnapChat", url: "https://www.snapchat.com" },
  { name: "Josh", url: "https://www.josh.com" },
  { name: "SEOVigil", url: "https://www.seovigil.io" },
  {
    name: "Microsoft Teams",
    url: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software",
  },
  { name: "Skype", url: "https://www.skype.com" },
  { name: "Viber", url: "https://www.viber.com" },
  { name: "Line", url: "https://line.me/en/" },
  { name: "Discord", url: "https://discord.com" },
  { name: "Picsart", url: "https://www.picsart.com" },
  { name: "Vevo", url: "https://www.vevo.com" },
  { name: "Tumblr", url: "https://www.tumblr.com" },
  { name: "Threads", url: "https://threads.com" },
  { name: "Steam", url: "https://store.steampowered.com" },
  { name: "Hulu", url: "https://www.hulu.com" },
  { name: "Spectrum", url: "https://www.spectrum.net" },
  { name: "CashApp", url: "https://cash.app" },
  { name: "Fortnite", url: "https://www.epicgames.com/fortnite" },
  { name: "Verizon", url: "https://www.verizon.com" },
  { name: "Crunchyroll", url: "https://www.crunchyroll.com" },
  { name: "Doordash", url: "https://www.doordash.com" },
  { name: "Tmobile", url: "https://www.t-mobile.com" },
  { name: "Xfinity", url: "https://www.xfinity.com" },
  { name: "Disney Plus", url: "https://www.disneyplus.com" },
  { name: "Gmail", url: "https://mail.google.com" },
  { name: "Outlook", url: "https://www.outlook.com" },
  {
    name: "Playstation Network",
    url: "https://www.playstation.com/en-us/network",
  },
  { name: "Att", url: "https://www.att.com" },
  { name: "Comcast", url: "https://www.xfinity.com" },
  { name: "HBO Max", url: "https://www.hbomax.com" },
  { name: "Square", url: "https://squareup.com" },
  { name: "Venmo", url: "https://www.venmo.com" },
  { name: "Cox", url: "https://www.cox.com" },
  { name: "Slack", url: "https://slack.com" },
  { name: "Xbox", url: "https://www.xbox.com" },
  { name: "Apex", url: "https://www.ea.com/games/apex-legends" },
  { name: "AWS", url: "https://aws.amazon.com" },
  { name: "Diablo 4", url: "https://us.diablo3.com/en-us/" },
  { name: "Erome", url: "https://erome.com" },
  { name: "Pokemon Go", url: "https://www.pokemongo.com" },
  { name: "Shein", url: "https://www.shein.com" },
  { name: "Valorant", url: "https://playvalorant.com" },
  { name: "Yahoo Mail", url: "https://mail.yahoo.com" },
  {
    name: "Battle Net",
    url: "https://www.blizzard.com/en-us/apps/battle.net/desktop",
  },
  { name: "Github", url: "https://github.com" },
  { name: "Paramount Plus", url: "https://www.paramountplus.com" },
  { name: "Peacock", url: "https://www.peacocktv.com" },
  { name: "Centurylink", url: "https://www.centurylink.com" },
  { name: "Chess.com", url: "https://www.chess.com" },
  { name: "Dish Network", url: "https://www.dish.com" },
  { name: "Good Reads", url: "https://www.goodreads.com" },
  { name: "Alexa", url: "https://developer.amazon.com/alexa" },
  { name: "Chase", url: "https://www.chase.com" },
  { name: "Chime", url: "https://www.chime.com" },
  { name: "Etsy", url: "https://www.etsy.com" },
  { name: "Shopify", url: "https://www.shopify.com" },
  { name: "Sim City", url: "https://www.ea.com/games/simcity" },
  { name: "Starlink", url: "https://www.starlink.com" },
  { name: "Ticketmaster", url: "https://www.ticketmaster.com" },
  { name: "Tumblr", url: "https://www.tumblr.com" },
  { name: "World of Warcraft", url: "https://worldofwarcraft.com" },
  { name: "EA", url: "https://www.ea.com" },
  { name: "Apple Music", url: "https://music.apple.com" },
  { name: "Chegg", url: "https://www.chegg.com" },
  { name: "ifunny", url: "https://ifunny.co" },
  { name: "Aqua Manga", url: "https://aquamanga.com" },
  { name: "Coinbase", url: "https://www.coinbase.com" },
  { name: "Craigslist", url: "https://www.craigslist.org" },
  { name: "Hotmail", url: "https://outlook.live.com" },
  { name: "Imgur", url: "https://imgur.com" },
  { name: "Instacart", url: "https://www.instacart.com" },
  { name: "Kik", url: "https://www.kik.com" },
  {
    name: "Microsoft Teams",
    url: "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software",
  },
  { name: "Ubisoft", url: "https://www.ubisoft.com" },
  { name: "Dropbox", url: "https://www.dropbox.com" },
  { name: "Google Maps", url: "https://www.google.com/maps" },
  { name: "GTA Online", url: "https://www.rockstargames.com/GTAOnline" },
  { name: "Salesforce", url: "https://www.salesforce.com" },
  { name: "Virgin Media", url: "https://www.virginmedia.com" },
  { name: "Sky", url: "https://www.sky.com" },
  { name: "bet365", url: "https://www.bet365.com" },
  { name: "Llodys Bank", url: "https://www.lloydsbank.com" },
  { name: "Fandom", url: "https://www.fandom.com" },
];

document.addEventListener("DOMContentLoaded", function () {
  const inputArea = document.querySelector(".inputArea");

  function debounce(func, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  }

  function findSuggestion(input) {
    const filteredDomains = domains.filter((domain) =>
    domain.name.toLowerCase().startsWith(input.toLowerCase())
);
    
    return filteredDomains.length > 0 ? filteredDomains : null;
  }

  inputArea.addEventListener(
    "input",
    debounce(function () {
      const inputValue = this.value;
      if(inputValue.length){
      const suggestions = findSuggestion(inputValue);
      const dropdown = document.createElement('div');
      dropdown.setAttribute('class', 'autocomplete-items');
      inputArea.parentNode.appendChild(dropdown);
      if(suggestions==null){
        dropdown.parentNode.removeChild(dropdown);
        dropdown.classList.remove('autocomplete-items');
        return;
      }

      suggestions.forEach(suggestion => {
        const item = document.createElement('div');
        item.innerHTML = suggestion.url;
        item.setAttribute('class', 'autocomplete-item');
        item.addEventListener('click', function() {
          inputArea.value = suggestion.url;
          dropdown.parentNode.removeChild(dropdown);
        });
        dropdown.appendChild(item);
      });
  
      document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target) && event.target !== inputArea) {
          dropdown.parentNode.removeChild(dropdown);
          dropdown.classList.remove('autocomplete-items');
          item.parentNode.removeChild(item)
        }
      });

      }
     

    }, 10)
  );
});

const upgradeModal = document.getElementById("upgradeModal");

function handleClose() {
  message.style.display = "none";
}

function isProperUrl(text) {
  const regex = /^((https?:\/\/)?(www\.)?[\w-]+\.(com|io|[a-zA-Z]{2}))$/
  return regex.test(text);
}

function extractDomainName(url) {
  var parsedUrl = new URL(url);
  var domain = parsedUrl.hostname;
  domain = domain.replace(/^www\./, "");
  return domain;
}

function handleSubmit() {
  const message = document.getElementById("message");
  let inputValue = document.querySelector(".inputArea").value;
  if(!inputValue.startsWith('https://')&&!inputValue.startsWith('http://')){
      inputValue='https://www.'+inputValue;
  }
// console.log(inputValue)
  if(isProperUrl(inputValue)){
    fetchStatus(inputValue);
  }else{
    message.style.display = "flex";
    message.style.justifyContent = "space-between";
    message.style.color = "white";
    message.style.background = "#EF4040";
    message.innerHTML = `<p>Please enter valid URL</p> <p style="cursor:pointer" onclick="handleClose()">ⓧ</p>`;
  }
  
}

async function fetchStatus(url) {
    let count = 0;
    const intervalId = setInterval(() => {
      message.style.display = "flex";
      message.style.justifyContent = "space-between";
      message.style.color = "white";
      message.style.border="none";
      message.style.background="none"
      if (count % 3 == 0) {
        message.innerHTML = `Checking.`;
      } else if (count % 3 == 1) {
        message.innerHTML = `Checking..`;
      } else {
        message.innerHTML = `Checking...`;
      }
      count++;
    }, 500);
  
    const api = "https://apitest.seovigil.io/api/v1/public/status/check";
    const requestBody = {
      url: url,
    };
    
    try {
      const data = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });
      clearInterval(intervalId); // Clear the interval once API call is done
      const response = await data.json();
    if (response.data.status_code == 200) {
      message.style.display = "flex";
      message.style.justifyContent = "space-between";
      message.style.color = "white";
      message.style.background = "#65B741";
      message.innerHTML = `<p>${url} is up and running fine.</p> <p style="cursor:pointer" onclick="handleClose()">ⓧ</p>`;
    } else if (
      response.data.status_code > 400 &&
      response.data.status_code < 500
    ) {
      message.style.display = "flex";
      message.style.justifyContent = "space-between";
      message.style.color = "white";
      message.style.background = "#EF4040";
      message.innerHTML = `<p>${url} is down and it's not just you!</p> <p style="cursor:pointer" onclick="handleClose()">ⓧ</p>`;
    } else if (response.data.status_code > 500) {
      message.style.display = "flex";
      message.style.justifyContent = "space-between";
      message.style.color = "white";
      message.style.background = "#EF4040";
      message.innerHTML = `<p>${url} is timing out and it's not just you!</p> <p style="cursor:pointer" onclick="handleClose()">ⓧ</p>`;
    } else if (
      (response.data.status_code > 300 && response.data.status_code < 400) ||
      response.data.is_redirect == true
    ) {
      message.style.display = "flex";
      message.style.justifyContent = "space-between";
      message.style.color = "white";
      message.style.background = "#FF8911";
      message.innerHTML = `<p>${url}is being redirected</p> <p style="cursor:pointer" onclick="handleClose()">ⓧ</p>`;
    }
  } catch (error) {
    message.style.display = "flex";
    message.style.justifyContent = "space-between";
    message.style.color = "white";
    message.style.background = "#EF4040";
    message.innerHTML = `<p>${url} is down and it's not just you!</p> <p style="cursor:pointer" onclick="handleClose()">ⓧ</p>`;
  }
}
