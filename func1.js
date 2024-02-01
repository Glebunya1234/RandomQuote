const getRandomQuote = () => {
  $.ajax({
    url: "https://api.quotable.io/random",
    method: "GET",
    success: function (response) {
      displayQuote(response);
    },
    error: function (error) {
      console.error("Error fetching quote:", error);
    },
  });
};

$("#new-quote-btn").click(function () {
  getRandomQuote();
});

$(document).ready(function () {
  getRandomQuote();
});

const displayQuote = (quote) => {
  $("#quote-text").text(quote.content);
  $("#quote-author").text(quote.author); 
};

