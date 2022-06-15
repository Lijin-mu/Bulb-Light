// variables
let bulbItem = document.querySelector('[data-bulb-status]');
let bulbItems = document.querySelectorAll('[data-bulb-status]');
let bulbOn = document.querySelector('[data-bulb-status=on]');
let bulbOnBtn = document.querySelector('[data-bulb-trigger=ON]');
let bulbOffBtn = document.querySelector('[data-bulb-trigger=OFF]');
let bulbBlinkBtn = document.querySelector('[data-bulb-trigger=BLINK]');
let bulbBlinkAllBtn = document.querySelector('[data-bulb-trigger=BLINKALL]');
let bulbs = document.querySelector('[data-bulb-status="on"]');
let on = true;
let off = false;
let timing = 0;

var counter = 100;

let totalTime = (bulbItems.length + 1) * 200;

// methods

var bulb = {
    switch: function(status){

        if(status === true) {
            bulbItem.setAttribute("data-bulb-status", "on"); 
        } else {
            bulbItem.setAttribute("data-bulb-status", "off"); 
        }
    },
    blink:function(){
        setInterval(() => {
            this.switch(on);
            setTimeout(() => { this.switch(off); }, 200);
        }, 300);
    },
    blinkAll:function(){
        setInterval(() => {

            console.log(" loop start");

            bulbItems.forEach((item, index)=>{
                setTimeout(() => {  itemBlink(item); console.log(index); }, 200 * index);
            });

            console.log("end loop");

        }, totalTime);

        console.log("started");

        function itemBlink(item){
            item.setAttribute("data-bulb-status", "on"); 
            setTimeout(() => { item.setAttribute("data-bulb-status", "off"); }, 200);
        }
        console.log("before loop");

    }

}

// actions

bulbOnBtn.addEventListener("click", function(){ bulb.switch(on) });

bulbOffBtn.addEventListener("click", function(){ bulb.switch(off) });

bulbBlinkBtn.addEventListener("click", function(){ bulb.blink() } );

