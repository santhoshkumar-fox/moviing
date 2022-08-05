var $box = document.getElementById("thebox");
var $thesheet = document.getElementById("thesheet");
var positionx = 0;
var positiony= 0;
function nextbtn(){
    // console.log(document.getElementById('thebox').getBoundingClientRect());
    // console.log("left");
    // var left = document.getElementById('thebox').getBoundingClientRect();
    // console.log(left.left);

    positionx = 100+positionx;
    var left = document.getElementById('thesheet').getBoundingClientRect();
    console.log(left.width);
    console.log(positionx);
    if(positionx<=800){
        document.getElementById("thebox").style.transform = "translate("+positionx+"px,"+positiony+"px)";
    }
    else {
        if(positiony < 400){
            positionx = 0;
        positiony = 100+positiony;
        document.getElementById("thebox").style.transform = "translate("+positionx+"px,"+positiony+"px)";
        console.log("warn")
        console.log(positiony);

        }
        else{
            alert("That over please click prev Button");
        }  
    }
}

function prevBtn(){
    console.log(positionx);
    console.log(positiony);

    if(positionx !== 0 || positiony !== 0){
        if(positionx > 0  ){
            positionx = Number(positionx - 100);
            document.getElementById("thebox").style.transform = "translate("+positionx+"px,"+positiony+"px)";
            console.log("next");
            console.log(positionx);
        }
        else if(positionx === 0) {
            console.log("prevX");
            console.log(positionx);
            positionx = 800;
            positiony = Number(positiony - 100);
            document.getElementById("thebox").style.transform = "translate("+positionx+"px,"+positiony+"px)";
        
            console.log("warn")
            console.log(positiony);
    
             
        }
    }
    
    else {
        alert("please type next");
    }

}



   
