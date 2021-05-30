let API = "https://api.rss2json.com/v1/api.json?rss_url=";
let userFeedURLs = [ 
    "http://feeds.bbci.co.uk/news/world/rss.xml",
    "http://feeds.bbci.co.uk/news/world/asia/rss.xml",
    "http://feeds.bbci.co.uk/news/health/rss.xml",
    "http://feeds.bbci.co.uk/news/technology/rss.xml",
    "http://newsrss.bbc.co.uk/rss/newsonline_uk_edition/sci/tech/rss.xml",
    "http://feeds.bbci.co.uk/news/entertainment_and_arts/rss.xml",
    "http://feeds.bbci.co.uk/sport/rss.xml",
    "http://www.bbc.com/culture/feed.rss",
    "http://feeds.bbci.co.uk/news/uk/rss.xml",
    "http://feeds.bbci.co.uk/news/business/rss.xml"
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
                newItem += "<div class=\"goorac\" id=\"item\"><a target\"_blank\" href=\"" + item.link + "\"><p class=\"gh\" >" + item.title + "</p></a>";
                if (item.author != "")
                  
                newItem += "<h4>Published Date: " + item.pubDate + "</h4>";

                newItem += "<p class='dg'>" + item.description + "</p><hr></div>";

                content.insertAdjacentHTML('beforeend', newItem);
            });
        }
    });
});
