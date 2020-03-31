/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

let score = 0;
let scoreEl =  document


let shuffle = function(array) {
  let currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

document.getElementsByClassName('restart')[0].addEventListener('click', function(){location.reload();});
var nextcard = document.getElementById('next-card').firstElementChild;
var images= [];
var cards;
var cardsNumbers = [];
var isClickable = true;
var currentEl = 0;



let incScore = function(s = 1){

   let score = parseInt( document.getElementById('score').innerHTML.trim());
       score +=  s;
       document.getElementById('score').innerHTML = score+"";
}


let setUpGame =  function(){

   document.getElementById('score').innerHTML = "0";
   cards = document.getElementById('cards').children;
   for(let i = 0 ; i < cards.length  ; i++){ 

         images.push(cards[i].firstElementChild.className);
         cardsNumbers.push(i);
         cards[i].addEventListener('click', function(){

          if(!isClickable) return;
          var cn = cards[i].className ;

          if(cn == "card matched" || cn == "card show" ) return;

            
              elementclicked(i);
            
                incScore();

    
    }.bind(i));

      currentEl = shuffle(cardsNumbers)[0];
      nextcard.className = images[currentEl];
     
  
   }


}


let elementclicked = function(cardnum){

      if(nextcard.className == cards[cardnum].firstElementChild.className){

           cardsNumbers.splice(cardsNumbers.indexOf(currentEl), 1);

           cards[cardnum].className = "card matched";
           currentEl = shuffle(cardsNumbers)[0];
           nextcard.className = images[currentEl];
           
           if(cardsNumbers.length == 0){
              isClickable = false;  
              setTimeout(function(){ resetGame();}, 500);

           }   

           console.log(nextcard.className);
           console.log(cardsNumbers);
           

      }else{

          isClickable = false;
          cards[cardnum].className = "card show";
          setTimeout(function(){ cards[cardnum].className = "card"; isClickable = true;}, 500);

      }

};

 
let resetGame = function(){

    
     alert("winner");
     setUpGame();
    isClickable = true;

}



setUpGame();



/*
* Shuffle the cards and set a card in the `#next-card` element
*  - This card should be replaced/updated whenever a player find the correct match
*  - Once a match has been made, the symbol with a new symbols
*  - Symbols cannot repeat more than once
*  - All the symbols on the board must be used 1 time

/*
* set up the event listener for a card. If a card is clicked:
*  - display the card's symbol
*  - Check to see if this card matches the card displayed in the `next-match` element
*    + if the cards do match, lock the open card into the match position and update the next-card
*    + if the cards do not match, hide the card's symbol
*    + increment the move counter and display it on the page each time a card is revealed
*    + if all cards have matched, display an alert indicating the user has won, include their final score
*/
