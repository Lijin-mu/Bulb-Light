// variables
let bulbItem = document.querySelector('[data-bulb-status]');
let bulbOn = document.querySelector('[data-bulb-status=on]');
let bulbOnBtn = document.querySelector('[data-bulb-trigger=ON]');
let bulbOffBtn = document.querySelector('[data-bulb-trigger=OFF]');
let bulbBlinkBtn = document.querySelector('[data-bulb-trigger=BLINK]');
var intervalarray = [];
var interval=null;

// methods

var bulb = {
   
    switch:function(task){
        
        if(task === true) {
            for (var id of intervalarray) {
                this.clear(id);
            }
            intervalarray=[];
            bulbItem.setAttribute("data-bulb-status", "on"); 
        } else if(task === false){
            for (var id of intervalarray) {
                this.clear(id);
            }
            intervalarray=[];
            bulbItem.setAttribute("data-bulb-status", "off"); 
        } else{
            interval = setInterval(() => {
                bulbItem.setAttribute("data-bulb-status", "on"); 
                setTimeout(() => { bulbItem.setAttribute("data-bulb-status", "off");  }, 200);
            }, 300);
            intervalarray.push(interval);
        }
    },
    clear:function(id){
        clearInterval(id);
    },
    init:function(){
        bulbOnBtn.addEventListener("click", function(){ bulb.switch(true) });
        bulbOffBtn.addEventListener("click", function(){ bulb.switch(false) });
        bulbBlinkBtn.addEventListener("click", function(){ bulb.switch() } );
    }
}

//init

bulb.init();





