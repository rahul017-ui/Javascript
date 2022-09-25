

const mainDeck =makeDeck();




function makeDeck() {
    const deck=[];
    const suits=["heart",'diamond','spades','clubs'];
    const values='2,3,4,5,6,7,8,9,10,J,Q,K,A';
   
    for (let value of values.split(',')){
        for(let suit of suits) {
            deck.push({
                value,
                suit
            })
        }
    }
    return deck;
   }


   function drawcard(deck){
    return deck.pop()
   }
//    const myDeck=makeDeck();



const myDeck={
    deck:[],
    drawCard:[],
    suits:["heart",'diamond','spades','clubs'],
    values:'2,3,4,5,6,7,8,9,10,J,Q,K,A',
  initializeDeck(){
    const {
        suits,
        values,
        deck
    }=this;
    for (let value of values.split(',')){
        for(let suit of suits) {
            deck.push({
                value,
                suit
            })
        }
    }
    //return deck;
},
drawCard(){

    const card= this.deck.pop()
    this.drawCard.push(card);
    return card;

},

drawMultiple(numCards){
    const cards=[];
    for(let i=0;i<numCards;i++){
        this.drawCard()
    }
    return cards;

}

}

   