
let current = document.querySelector(".current")
let allNumber = document.querySelectorAll(".number  span")
let equalBtn = document.querySelector(".equal")
let reset =  document.querySelector(".reset")
handelReasult()
allNumber.forEach(element => {
    element.addEventListener("click", (e) => {
        if (!element.classList.contains("del")) {
            console.log(current.innerHTML);
            if( current.innerHTML == "0"){
                current.innerHTML = "";
                current.innerHTML += element.dataset.num
            }else{

                current.innerHTML += element.dataset.num;
            }

                       
        }

    })

});


equalBtn.addEventListener("click", calc)
document.querySelector(".del").addEventListener("click", delet)
reset.addEventListener("click",(e)=>{
    current.innerHTML = ""
    handelReasult()
    
})


function calc() {
    current.innerHTML = eval((current.innerHTML))
    console.log(current.innerHTML.split("").pop());

}

function delet() {
    let currentValue = current.innerHTML.split("")
   let newValue =currentValue.pop();
   current.innerHTML= currentValue.join("");
   handelReasult()
}
function handelReasult(){
    if(current.innerHTML == ""){
        current.innerHTML = 0 
    }
}



