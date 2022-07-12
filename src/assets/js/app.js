// variables
let bulbItem = document.querySelector('[data-bulb-status]');
let bulbOn = document.querySelector('[data-bulb-status=on]');
let bulbOnBtn = document.querySelector('[data-bulb-trigger=ON]');
let bulbOffBtn = document.querySelector('[data-bulb-trigger=OFF]');
let bulbBlinkBtn = document.querySelector('[data-bulb-trigger=BLINK]');

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
            this.switch(true);
            setTimeout(() => { this.switch(false); }, 200);
        }, 300);
    },
    init:function(){
        bulbOnBtn.addEventListener("click", function(){ bulb.switch(true) });
        bulbOffBtn.addEventListener("click", function(){ bulb.switch(false) });
        bulbBlinkBtn.addEventListener("click", function(){ bulb.blink() } );
    }
}

//init

bulb.init();





