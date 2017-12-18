//Class 1:
$(document).ready(function() {
    $("#input").click(function() {
        var computadora=['rock', 'scissors', "paper"];
        var computeranswers= computadora[Math.floor(Math.random()*computadora.length)];
        $("#c-choice").html(computeranswers)
        var input=$('input').val();
        
        if (input === "Rock"){
                if(computeranswers==="rock"){
                        $('#outcome').html("Tie")
                } 
                if(computeranswers==="paper"){
                        $('#outcome').html("Lose") 
                        
                }
                if(computeranswers==="scissors"){
                        $('#outcome').html("Win")
                }
        }

        if (input === "paper"){
                if(computeranswers==="paper"){
                        $('#outcome').html("Tie")
                } 
               if(computeranswers==="scissors"){
                        $('#outcome').html("Lose")
                } 
                if(computeranswers==="rock"){
                        $('#outcome').html("Win")
                }
        }
        
         if (input === "scissors"){
                if(computeranswers==="scissors"){
                        $('#outcome').html("Tie")
                } 
                if(computeranswers==="rock"){
                        $('#outcome').html("Lose") 
                        
                }
                if(computeranswers==="paper"){
                        $('#outcome').html("Win")
                        
                }
        }

        });
});
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES



//FUNCTIONS



// DOCUMENT READY FUNCTION

