class DonutMaker{
   

    

    constructor(numDonuts, numAutoclickers, numMultipliers){
        this.numDonuts = numDonuts;
        this.numAutoclickers = numAutoclickers;
        this.numMultipliers = numMultipliers;
        this.multiplierCost = 10;
    }
    addDonut(){
        if(this.numMultipliers === 0){
            this.numDonuts += 1;
         } else {
           this.numDonuts += 1* this.numMultipliers;
         }
    }
    addAutoclicker() {
        let clickerCost = 100;
        for(let i = 0; i<this.numAutoclickers; i++){
            clickerCost += Math.round(clickerCost * .1);
        }
        if (this.numDonuts >= clickerCost) {
            this.numDonuts -= clickerCost;
            this.numAutoclickers ++
           
        }
       
    }
    addMultiplier(){
        if( this.numDonuts >= this.multiplierCost){
            this.numDonuts = Math.round(numDonuts - multiplierCost);
            this.numMultipliers += 1;
            let multiplierCost = 10;
            multiplierCost = Math.round( multiplierCost * 1.1);
        }
        
    }
    autoclicker(){
        if(this.numAutoclicker >= 1){
            setInterval(() => {
                this.numDonuts += this.numDonuts + (this.numMultipliers * this.numAutoclickers);
                
            }, 1000);
             
        }
    }
    multiplier(){
        if(this.numMultipliers >= 1){
            this.numDonuts += this.numDonuts + Math.pow(1.2, this.numMultipliers);

        }
    }
 


}    
      
    



export default DonutMaker;