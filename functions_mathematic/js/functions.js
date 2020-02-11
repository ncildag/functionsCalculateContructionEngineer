// AREA OF THE CIRCLE //
let radius = document.getElementById("radius").value;
  let pi=Math.PI;

function areaOfTheCircle(radius, pi) {
 
     let h=  pi * Math.pow(radius,2);

    return h;
}


// console.log(areaOfTheCircle(radius,pi));

// AREA OF THE RECTANGLE //

function areaOfTheRectangle(length,breadth) {
    let a =  length * breadth;
    return a ;
}

//console.log(areaOfTheRectangle(length,breadth));

// CIRCUMFERENCE OF THE CIRCLE //

function circumferenceOfTheCircle(radius,pi) {
    let b = 2*pi*radius;
    return b;
    
}

// console.log(circumferenceOfTheCircle(radius,pi));

// CIRCUMFERENCE OF THE RECTANGLE //

function circumferenceOfTheRectangle(length,breadth) {
    let c = length + breadth;
    let d = 2*c;
    return d;
    
}

// console.log(circumferenceOfTheRectangle(length,breadth));

// VOLUME OF THE CUBE //

function volumeOfTheCube(lengthOfCube) {
    let e = Math.pow(lengthOfCube,3);
    return e;
}

// console.log(volumeOfTheCube(lengthOfCube)); 

// AREA OF THE CUBE //

function areaOfTheCube(lengthOfCube) {
    let f = 2*Math.pow(lengthOfCube,2)
    return f;
}

// console.log(areaOfTheCube(lengthOfCube));