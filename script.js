//Test addition
document.addEventListener("DOMContentLoaded", function() {
    const messages = [
      "Every ounce of effort is worth it",
      "This is your moment, seize it",
      "You are amazing",
      "You can do hard things",
      "When at first you don’t succeed, try try again",
      "Once begun is half done",
      "The world is brighter because you’re in it",
      "You are stronger than you think",
      "Something in you just shines",
      "You are incredible and others can tell",
      "You are loved",
      "You are the light in someone else’s life",
      "Life is “mint” to be lived",
      "Happiness is a choice. Chews it!",
      "Sunshine is just ahead",
      "Keep going, you’re doing great!",
      "The world is your oyster, so take it on",
      "Keep on dreaming, keep on living",
      "People can only get in your way if you let them",
      "When one door closes, another opens",
      "Take on the world",
      "There is nothing you can’t do",
      "We are cheering you on",
      "Slow and steady wins the race",
      "You reek of awesomeness"
    ];
  
    const changeButton = document.getElementById('changeMessageButton');
  const messageContainer = document.getElementById('messageContainer');

  function displayRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    messageContainer.textContent = messages[randomIndex];
  }

  // Display a random message when the page loads
  displayRandomMessage();

  // Add event listener to change the message when the button is clicked
  changeButton.addEventListener('click', displayRandomMessage);
});
  