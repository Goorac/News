let API = "https://api.rss2json.com/v1/api.json?rss_url=";
let userFeedURLs = [ 
  "https://timesofindia.indiatimes.com/rssfeedstopstories.cms?x=1",
  "http://feeds.feedburner.com/NDTV-LatestNews",
  "https://www.indiatoday.in/rss/1206578",
  "http://www.news18.com/rss/india.xml"
];
userFeedURLs.forEach(userUrl => {
    $.ajax({
        type: 'GET',
        url: API + userUrl,
        dataType: 'jsonp',
        success: function (data) {
            console.log(data);
            data.items.forEach(item => {
                var content = document.getElementById('content');

                var newItem = "";
                newItem += "<div class=\"goorac\" id=\"item\"><a target=\"_blank\" href=\"" + item.link + "\"><p class=\"gh\" >" + item.title + "</p></a>";
                if (item.author != "")
                  
                newItem += "<h4>Published Date: " + item.pubDate + "</h4>";

                newItem += "<p class='dg'>" + item.description + "</p><hr></div>";

                content.insertAdjacentHTML('beforeend', newItem);
            });
        }
    });
});
