
let incrementBtn = document.getElementById("incrementBtn")
let decrementBtn = document.getElementById("decrementBtn")
let resetCount = document.getElementById("resetCount")
let counter = document.getElementById("counter")

let count = 0;

incrementBtn.addEventListener('click', ()=>{
    console.log("increseeee");
    count ++;
    counter.innerHTML = count;
    counterStyle()

})


decrementBtn.addEventListener('click', ()=>{
    count --;
    counter.innerHTML = count;
    counterStyle()

})

resetCount.addEventListener('click', ()=>{
    counter.innerHTML = 0
    counterStyle()

})

function counterStyle() {
    if(count < 0){
        counter.classList.add("negative")
    }
    else if (count > 0){
        counter.classList.add("positive")
    }
    else if (count == 0){
        counter.classList.add("zero")
        
    }
    
}


