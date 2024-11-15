        //creatig the score object 
        const score = {
            wins : 0,
            losses: 0,
            ties:0
        };
        // lisitening to the storage evevnt to check for the saved score 
        window.addEventListener('storage', UpdateScore());

        // Generating the computer move in a randon manner
        function generateComputerMove(userMove)
        {
            // Using the random function, method () to generate a random value 
            // between 0 and 1 
            const  randomNumber = Math.random();
            //Creating the computer move variable 
            let computerMove = '';
            // Checking the random value based on the pervious assumption
             if (randomNumber >= 0 && randomNumber<1/3) 
             {
                computerMove = "Rock";
             }
             else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3)
             {
                computerMove = " Paper"; 
             }
             else if (randomNumber >= 2 / 3   && randomNumber < 1)
             {
                computerMove = " Scissors"; 
             }

             //Displaying both move 
             //console.log(`User : ${userMove} --- Computer : ${computerMove}`);

             //Calling the compare moves methods 
             compareChoices(userMove , computerMove);
        }
        //Creating the comparsion method 
        function compareChoices(userChoice , computerChoice)
        {
            //Creating a variable to store the comparison result 
            let theResult = '';
            //Comeraing the moves 
            if (userChoice === computerChoice){
                theResult = "Tie";
            }
            else if (userChoice === "Rock" && computerChoice ==="Paper")
            {
                theResult = "You lose.";
            }
            else if (userChoice === "Rock" && computerChoice === "Scissors")
            {
                theResult = "You win.";
            }
            else if (userChoice === "Paper" && computerChoice === "Rock")
            {
                theResult = "You win.";
            }
            else if (userChoice === "Paper" && computerChoice === "Scissors")
            {
                theResult = "You lose.";
            }
            else if (userChoice === "Scissors" && computerChoice === "Rock")
            {
                theResult = "You lose.";
            }
            else if (userChoice === "Scissors" && computerChoice === "Rock")
            {
                theResult = "You lose.";
            }
            else if (userChoice === "Scissors" && computerChoice === "Paper")
            {
                theResult = "You win.";
            }
            //Updating the score subject 
            if(theResult === "You win.")
            {
                score.wins +=1;
            } 
           else if(theResult === "You lose.")
            {
                score.losses +=1;
            } 
            else(theResult === "Tie")
            {
                score.ties +=1;
            } 
            // Using locating to maintain the current score 


            //Since localStorage works with text data , we need to serialize the score object 
            localStorage.setItem('Score', JSON.stringify(score));

            //calling the displayResult function 
            displayResults(theResult,userChoice,computerChoice);

           // console.log(`You picked : ${userChoice}. computer piked ${computerChoice}. result : ${theResult}
            //\nWins : ${score.wins} - Losses : ${score.losses} Ties : ${score.ties}`);
        
        }
        //Creating a counter function to reset the result 
        function resetCounters(){
            score.wins = 0;
            score.losses = 0 ;
            score.ties = 0 ; 
        //Deleting the available stored score 
        localStorage.removeItem("Score");
        //informaing the user with the current score 
        displayResults();
        console.log(`Score has been reset. This is a fresh starts. \nwins: ${score.wins} - lossed : ${score.losses}
        - ties : ${score.ties}`);
        }

        //Creating score update function 
        function UpdateScore(e){
            // Getting the data fro the localstorage and converting them back to javaScript object 
            let newScore = JSON.parse(localStorage.getItem('Score'));
            // Checking if the new score is empty 
            if (newScore === null){
                alert("there was no saved data .. ")
            } 
            else{
                alert("Saved score available");
                score.wins = newScore.wins;
                score.losses = newScore.losses;
                score.ties = newScore.ties;
            }
        }
    //Creating function to display full result 
    function displayResults(result = "New Game" , userStep = "No Moves" , compuerStep = "No Moves")
    {
  //Displaying the comparsion result 
            //linking  to the paragraph element 
            let theResultDisplay = document.querySelector(".jsResult");
            let theMoveDisplay = document.querySelector(".jsMoves");
            let theScoreDisplay = document.querySelector(".jsScore");

            // populating the text inside the p elements 
            theResultDisplay.innerHTML = result;
            theMoveDisplay.innerHTML = ` You 
        <img src="images/${userStep}Final.png" class="moveIcon">
        <img src="images/${compuerStep}Final.png" class="moveIcon">
        Computer`;
            theScoreDisplay.innerHTML = `Wins ${score.wins} - losses ${score.losses} - Ties ${score.ties}`;
    }