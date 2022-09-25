const annoyer={
    phrase:['ram','cray',"i cant eat",'totes'],
    pickPhrase(){
        const {
            phrase
        }=this;
        const idx=Math.floor(Math.random() * phrase.length);
        return phrase[idx]
    },
    start(){
        setInterval(function() {
            console.log('ahwgr')
        },3000)
    }
}