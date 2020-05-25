// var incrementBtn = document.querySelector("#increment");
// var decrementBtn = document.querySelector("#decrement");

// incrementBtn.addEventListener("click", function (){
//     document.getElementById('count').innerHTML ++
// });

// decrementBtn.addEventListener("click", function (){
//     if(document.getElementById('count').textContent > '0' document.getElementById('count').innerHTML --;
// });




var countArray = {'#increment':'++','#decrement':'--'};

Object.keys(countArray).forEach( (value, index) => document.querySelector(value).addEventListener("click", function(){
    if(document.getElementById('count').textContent > index-1 ) eval(`document.getElementById('count').innerHTML ${countArray[value]}`);
}))