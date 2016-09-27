# Project 1: World Wild West: a Western Shooting Game

![](https://s3-eu-west-1.amazonaws.com/world-wide-west/travelly-screenshot.png)

##What is World Wild West:

The game is completely written in **HTML**, **CSS** and **jQuery**. It is based on time and **click events** and on a **random number generator system**.
I also used both **CSS** and **JavaScript animations** in order to practice and better understand both of them. 

I also implemented **sounds using jQuery**, the main theme is called as soon as the page is loaded, the sound of the player gun is trigged by the click event and other two sounds are activated when the system choose to activate a random DOM element. 

I am counting the player score, the turn wins (or draws) and the life of the player.

Thanks to the time event I can easily modify the pace of the game making it more or less hard in a few seconds.

--

## Technologies Used

- **HTML5**
- **CSS3**
- **jQuery**
- **Animate.CSS**
- **Javascript Animations**
- **Heroku**
- **Sublime Editor**
- **Trello**
- **Balsamic**
- **MacDown**

---

## Bugs

Currenty the game is running with no bugs, however in the last stage I had to remove an important feature because was causing a major bug. 

On my original plan, the player's turn should end when the life reach zero or after 60 seconds (a fixed amount of time).

I had to remove this feature because, when a player was not scoring points (quite unlikly but still possible) the system was calling a draw before and player 2 turn start.
This was happening because the last DIV was affecting the score of the player 2 and the system recognised the turn as played.
It took me quite a while to understand completely the reason of the bug and I preferred to remove the timer because I already had a similar bug before and solving that problem I created this new one. 
Probably with a litte more time I could have solved also this last bug. 

As aforementioned, the previous bug was also releted with the timer. When the 60 seconds finished, the last activated DIV event was endind after the end of the turn and was affecting the score of the player 2 since the very begin of its turn.
At the end of the game, the system was also not loading the final funciton where I compare the two scores. 

I had seveal other minor bugs during the project, mainly related with the add/remove of classes from the DIVs but I planned a day just for debugging. 

---

##Planning and Timeline: 

###Tuesday:

As first step of the project, I used Trello for planning the whole project in details.

[Trello Board](https://trello.com/b/88ryxjNP)

I started creating a coulpe of lists called ***Ideas*** and ***Extra Features***.

While I was diving into the project details, I quickly reorganised all the Trello Board since reaching the final result linked above.

The colors of the Trello items represent their **priority**.  
  

While I was planning I also searched for the background image because all the layout is based on it.

I also searched for the images for the charaters appearing on the screen in order to be able to style quickly the first MVP as soon as it was finished.

--

###Friday:

On Friday I started to work at the MVP and I planned to finish it at the end of Saturday.

I managed to create the main automation at the base of the game. The system is randomly choosing a DIV and activating it. It is also deactivaiting it asfer a few seconds.

The second step was the implementation of the "click" event. When a DIV has been clicked, the DIV is deactivated before the automation.

I finished matching perfectly my shedule.

--

### Saturday

On Saturday I created the score and life system. The player will score 100 point for every click and lose 10 points of life is the the DIV is not clicked in time and is deactivated by the system. 

I struggled quite a lot in implementing the second player and appeared a bug with the turn time. The last-activated-DIV event is longer than the turn of the player and is affectng the life counter of the Player 2 since the start of the turn.

I spent most of the day working in the implementation of the second player but I was not able to solve the bug of the timer.

Due to the problem with the bug, I was not on shedule anymore.

--

### Sunday

On Sunday I started to work on the bug again because now is affecting also the final stage, where I am checking the winner. After a few hour without any result, I dedided to start with the styling.

I was able to implement the figures quite quickly, however I realised that was not possible to make the game responsive with only percentages but the only way will be using Media Queries. 

I created a new div called Wrapper in order to try to adapt the game to as many resolution as possible without Media Queries (for the moment). This tooked me an hour. 

The next step was finishig the styling.

I searched for the soundtrack and for a couple of other effect and I added them in the "sounds" folder. 

Late in the evening I started to work on the anumations and, althoug the fadOut is working properly the fadeIn is not. I think I have a problem because all the DIVs should start with the class "hidden", became visible, and then return invisible with the class "hidden". However, the system seems not working properly. 

--

### Monday

On Monday I started the day solving all the major issues that I faced during the weekend and I managed to fix all the bugs (and the new one created by my fix) just after noon.

I spent the rest of the afternoon styling and adding animations and sounds. 

---