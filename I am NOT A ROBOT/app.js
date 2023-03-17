const checkbox = document.getElementById("checkbox");
const submitBtn = document.querySelector("button[type=submit]");

//disabled checkbox
checkbox.disabled =true;
submitBtn.disabled =true;

const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById("SelectColor");

//Assign color to Elements
elements.forEach(function(element){
    const color = getRandomColor();
    element.style.backgroundColor = color;
     element.innerHTML = color;
     selectColor.innerHTML = color;

})

//Generate Ramdom Color
function  getRandomColor(){
    const letter = "0123456789ABCDEF";
    let color = "#";
    for (let i=0; i<6; i++){
        color+=letter[Math.floor(Math.random()*16)] ;

    }
    return color;
 }
// console.log(getRandomColor());

//Check if right color

elements.forEach(function (element){
    element.addEventListener("click", function (){
        if(element.innerHTML===selectColor.innerHTML){
        alert("Your are a Human");
        checkbox.checked = true;
        submitBtn.disabled=false;
        submitBtn.classList.remove("btn-light");
        submitBtn.classList.add("btn-success");
        }else{
            alert("Please verify that you are a HUMAN");
           
            location.reload(true);
        }
    });
});

