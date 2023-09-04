function insert(param){
    var parameter = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = parameter + param;
}
/*
document.addEventListener('keydown', function(event){
    if(event.key == 0 && event.key <= 9){
        insert(event.key)
    }
})

document.querySelectorAll('button').forEach(function(button){
    button.addEventListener('click', function(){
        insert(button.textContent); 
    })
})*/

function cleaned(){
    document.getElementById('result').innerHTML = "";
}

function deleted(){
    var del = document.getElementById('result').innerHTML;
    document.getElementById('result').innerHTML = del.substring(0, del.length - 1);
}

function calculate(){
    let number = document.getElementById('result').innerHTML;
    if(number){ //if(number != null)
        document.getElementById('result').innerHTML = eval(number);
    } else{} //don't do anything
}

function PI(){
    document.getElementById('result').innerHTML = Math.PI.toFixed(7);
}

function euler(){
    document.getElementById('result').innerHTML = Math.E.toFixed(7);
}

function radic(){
    let number = parseFloat(document.getElementById('result').innerHTML);
    let squareRoot = Math.sqrt(number).toFixed(2);
    document.getElementById('result').innerHTML = squareRoot;
}

function pow(){
    let number = parseFloat(document.getElementById('result').innerHTML);
    let pow2 = Math.pow(number, 2);
    document.getElementById('result').innerHTML = pow2;
}

function random(){
    const Random = Math.floor(Math.random() * (100000000 - 1) + 1);
    document.getElementById('result').innerHTML = Random;
}

function fatorial(){
    let number = parseFloat(document.getElementById('result').innerHTML);
    let fat = 1;
    for(let i = number; i > 1; i--){
        fat *= i;
    }
    document.getElementById('result').innerHTML = fat;
}