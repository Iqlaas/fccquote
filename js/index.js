var qurl = "https://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en";
var turl = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
$("button").on("click", function() {
  getQuote();
});

function getQuote() {
  $.getJSON(qurl, function(response) {
    $("p").html(response.quoteText);
    $("i.author").html(response.quoteAuthor);
    $("#tweetlink").attr("href", 
      turl + response.quoteText + " ― " + response.quoteAuthor);
  }); 
}
getQuote();