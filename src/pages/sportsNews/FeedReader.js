let API = "https://api.rss2json.com/v1/api.json?rss_url=";
let userFeedURLs = [ 
"http://www.sportingnews.com/us/rss",
"https://www.skysports.com/rss/12040",
"https://www.sbnation.com/rss",
"http://feeds.bbci.co.uk/sport/rss.xml"
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
