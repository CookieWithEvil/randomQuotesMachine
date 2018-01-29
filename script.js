var quotes = [
  {"quote":"Meow-Meow","autor":"Cat"},
  {"quote":"...","autor":"Someone, who don't want to speak"},
  {"quote":"Don't cry because it's over, smile because it happened.","autor":"Dr. Seuss"},
  {"quote":"You only live once, but if you do it right, once is enough.","autor":"Mae West"},
  {"quote":"If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.","autor":" J.K. Rowling"},
  {"quote":"Do not take life too seriously. You will never get out of it alive.","autor":"Elbert Hubbard"},
  {"quote":"Friends show their love in times of trouble, not in happiness.","autor":"Euripides"},
  {"quote":"Love yourself. It is important to stay positive because beauty comes from the inside out.","autor":"Jenn Proske"},
  {"quote":"Friends are the siblings God never gave us.","autor":"Mencius"},
  {"quote":"A friend is someone who gives you total freedom to be yourself.","autor":"Jim Morrison"},
  {"quote":"Friendship is always a sweet responsibility, never an opportunity.","autor":"Khalil Gibran"},
  {"quote":"My best friend is the one who brings out the best in me.","autor":"Henry Ford"},
  {"quote":"Into each life some rain must fall.","autor":"Henry Wadsworth Longfellow"},
  {"quote":"Be happy for this moment. This moment is your life.","autor":"Omar Khayyam"},
  {"quote":"Life is 10% what happens to you and 90% how you react to it.","autor":"Charles R. Swindoll"},
  {"quote":"There is only one happiness in this life, to love and be loved.","autor":"George Sand"},
  {"quote":"Everything is funny, as long as it's happening to somebody else.","autor":"Will Rogers"},
  {"quote":"Always remember that you are absolutely unique. Just like everyone else.","autor":"Margaret Mead"},
  {"quote":"My fake plants died because I did not pretend to water them.","autor":"Mitch Hedberg"},
  {"quote":"Age is something that doesn't matter, unless you are a cheese.","autor":"Luis Bunuel"},
  {"quote":"Any girl can be glamorous. All you have to do is stand still and look stupid.","autor":"Hedy Lamarr"},
  {"quote":"Smoking kills. If you're killed, you've lost a very important part of your life.","autor":"Brooke Shields"},
  {"quote":"I always wanted to be somebody, but now I realize I should have been more specific.","autor":"Lily Tomlin"},
  {"quote":"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.","autor":"Helen Keller"},
  {"quote":"Try to be a rainbow in someone's cloud.","autor":"Maya Angelou"},
];

var rand = "";// = Math.floor(Math.random()*(quotes.length+1));

function giveQuote(){
  rand = "";
  var stRandom = Math.floor(Math.random()*(quotes.length+1));
  rand += stRandom;
  document.getElementById("quote").innerHTML = +rand;
  document.getElementById("quote").innerHTML = "&quot;" + quotes[+rand].quote + "&quot;";
  document.getElementById("autor").innerHTML = quotes[+rand].autor;  
  
};
function tweet(){
var adr = "https://twitter.com/share?text=";
var text = quotes[+rand]['quote'] + " - " + quotes[+rand]['autor'] + "&url=/&hashtags=quote";
$("a").attr("href", adr + text);
//thanks to him(didn't know how to do it for weeks) - https://petermahoney.net/make-a-share-on-twitter-link-with-url-and-hashtags/
}