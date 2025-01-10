const quoteList = [
  "Don't be lasagna.",
  "There's a horror movie called Alien? That's really offensive. No wonder everyone keeps invading you.",
  "Well, first you imagine a very big box inside a very small box... And then you build it. It's usually the second part people get stuck on",
  "Yeah, my carer. She cares so I don't have to.",
  "Don't make the tea.",
  "Wait. Hang on. I know what I need. I need, I need, I need fish fingers and custard.",
  "London... what a dump.",
  "You are being mansplained by a briefcase.",
  "Do you know how lonely you are? You live in a great, big, giant spaceship and there aren't any chairs! And you haven't even noticed because nobody ever comes round!",
  "Doesn't that just sum up Christmas? You go through all those presents and right at the end, tucked away at the bottom, there's always one stupid old satsuma.",
  "Kate: But... You mean... you can have a granddaughter before a daughter? Doctor: Life of a Time Lord.",
  "Oh, capitalism.",
  "Flashy lights play well in a showroom. Modern warfare. Death by salesman.",
  "Give it time. Everywhere's a beach eventually.",
  "No. No, don't be silly, Ruby. There's no such thing as monsters, there's just... just creatures you haven't met yet.",
  "Ha-ha! Space babies!",
  "What's a zingo?",
  "Jam on toast.",
  "You've got weapons in your wheelchair?",
  "I know these teeth. What? What? What?!"
];

const colors = ["#e81416", "#ffa500", "#faeb36", "#79c314", "#487de7", "#4b369d", "#70369d"];
let wrapperDiv = document.getElementById("wrapper");
let quoteText = document.getElementById("quote-text");
let quoteButton = document.getElementById("quote-button");

quoteButton.addEventListener("click", function() {
  let randomIndex = Math.floor(Math.random() * quoteList.length);
  let randomColourIndex = Math.floor(Math.random() * colors.length);
  let randomQuote = quoteList[randomIndex];
  quoteText.innerText = randomQuote;
  wrapperDiv.style.backgroundColor = colors[randomColourIndex];
});