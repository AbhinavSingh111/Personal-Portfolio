console.log("Script Running")
var w = window.innerWidth;
var h = window.innerHeight;
document.querySelector('.ham').style.display='none';
document.querySelector('.hamburger').addEventListener("click", ()=>{
    document.querySelector('.sideBar').classList.toggle('sideBarGo');
    if(document.querySelector('.sideBar').classList.contains('sideBarGo')){
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'

    }
    else{
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() =>{
            document.querySelector('.cross').style.display = 'inline'

        },300)
        
        

    }
})


function check() {
    var inputs = document.getElementsByTagName("input");
    var textareas = document.getElementsByTagName("textarea");
    var filled = true;
    var oneChecked = false;
    
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].type === "text" && !inputs[i].value) {
            filled = false;
        }
        
        if (inputs[i].type === "radio" && inputs[i].checked) {
            oneChecked = true;
        }

    }

    if (!oneChecked) {
        filled = false;
    }

    for (var j = 0; j < textareas.length; j++) {
        if (!textareas[j].value) {
            filled = false;
        }
    }
    
    if (filled) {
        document.getElementById("button").disabled = false;
        
        
        

    } else {
        document.getElementById("button").disabled = true;
    }
    
}
// window.addEventListener("keyup", check);
// window.addEventListener("click", check);
// document.getElementById("#clientdetails").addEventListener("submit", function(e){
//     if(!isValid){
//         e.preventDefault();    //stop form from submitting
//     }
//   	//do whatever an submit the form
//       document.getElementById('clientdetails').reset();
// });
