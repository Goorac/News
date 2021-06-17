let API = "https://api.rss2json.com/v1/api.json?rss_url=";
let userFeedURLs = [ 
"https://www.techmeme.com/feed.xml?x=1",
"https://feeds.feedburner.com/TechCrunch/",
"https://www.technologyreview.com/topnews.rss",
"http://feeds.arstechnica.com/arstechnica/technology-lab",
"https://readwrite.com/feed/?x=1",
"http://feeds.bbci.co.uk/news/technology/rss.xml",
"https://www.cnet.com/rss/news/"
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
                  
                newItem += "<p>Date: " + item.pubDate + "</p>";

                newItem += "<p class='dg'>" + item.description + "</p><hr></div>";

                content.insertAdjacentHTML('beforeend', newItem);
            });
        }
    });
});
