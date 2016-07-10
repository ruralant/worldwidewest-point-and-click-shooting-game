# Project 1: Wild West Shooting Game

##Tuesday:

As first step of the project, I used Trello for planning the whole project in details.

[Trello Board](https://trello.com/b/88ryxjNP)

I started creating a coulpe of lists called ***Ideas*** and ***Extra Features***.

While I was diving into the project details, I quickly reorganised all the Trello Board since reaching the final result linked above.

The colors of the Trello items represent their **priority**.  
  

While I was planning I also searched for the background image because all the layout is based on it.

I also searched for the images for the charaters appearing on the screen in order to be able to style quickly the first MVP as soon as it was finished.


---

##Friday:

On Friday I started to work at the MVP and I planned to finish it at the end of Saturday.

I managed to create the main automation at the base of the game. The system is randomly choosing a DIV and activating it. It is also deactivaiting it asfer a few seconds.

The second step was the implementation of the "click" event. When a DIV has been clicked, the DIV is deactivated before the automation.

I finished matching perfectly my shedule.

---

## Saturday

On Saturday U created the score and life system. The player will score 100 point for every click and lose 10 points of life is the the DIV is not clicked in time and is deactivated by the system. 

I struggled quite a lot in implementing the second player and appeared a bug with the turn time. The last-activated-DIV event is longer than the turn of the player and is affectng the life counter of the Player 2 since the start of the turn.

I spent most of the day working in the implementation of the second player but I was not able to solve the bug of the timer.

Due to the problem with the bug, I am not on shedule anymore.

---

## Sunday

On Sunday I started to work on the bug again because now is affecting also the final stage, where I am checking the winner. After a few hour without any result, I dedided to start with the styling.

I was able to implement the figures quite quickly, however I realised that was not possible to make the game responsive with only percentages but the only way will be using Media Queries. 

I created a new div called Wrapper in order to try to adapt the game to as many resolution as possible without Media Queries (for the moment). This tooked me an hour. 

The next step was finishig the styling.

I searched for the soundtrack and for a couple of other effect and I added them in the "sounds" folder. 

Late in the evening I started to work on the anumations and, althoug the fadOut is working properly the fadeIn is not. I think I have a problem because all the DIVs should start with the class "hidden", became visible, and then return invisible with the class "hidden". However, the system seems not working properly. 

## Monday

To Do:

1: solve the bug of the timer and recreate the complete flow of the game.

2: make the figures appear

3: Fix the animations

4: add audio using jQuery

5: display player 1 and player 2 in the splash screen.

6: better styling if possible