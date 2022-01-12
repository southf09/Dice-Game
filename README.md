# Dice-Game

This is a simple dice game to settle disputes.

How to play:

- On page load, refresh your browser. That's it!

What's happening behind the scenes:

- DOM manipulation to grab the h1, and the image sources for player 1 and player 2.
- On refresh, two random numbers are generated, one for each player. The corresponding dice image is then set for each player.
- .setAttribute() used to change img src.
- .innerText used in conjunction with if else statement to set the h1 to the winner.
