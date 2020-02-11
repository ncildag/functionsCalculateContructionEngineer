function myFunction() {

  let radius = document.getElementById("radius").value;
  let pi=Math.PI;
  let length=document.getElementById("length").value;
  let breadth=document.getElementById("breadth").value;
  let lengthOfCube=document.getElementById("lengthOfTheCube").value;
  let results=[];



 
 let resultOfCircle = areaOfTheCircle(radius, pi);
 results.push(resultOfCircle);

 let resultOfTheRectangle = areaOfTheRectangle(length,breadth) ;
 results.push(resultOfTheRectangle);
 
 let resultOfCircumferenceOfTheCircle = circumferenceOfTheCircle(radius,pi);
 results.push(resultOfCircumferenceOfTheCircle);

 
 let resultOfCircumferenceOfTheRectangle = circumferenceOfTheRectangle(radius,pi);
 results.push(resultOfCircumferenceOfTheRectangle);
 
 let resultOfVolumeOfTheCube =volumeOfTheCube(lengthOfCube);
 results.push(resultOfVolumeOfTheCube);

 let resultOfAreaOfTheCube =areaOfTheCube(lengthOfCube);
 results.push(resultOfAreaOfTheCube);


 

 let resultsofExercises = document.getElementById("circle").innerHTML = results;
  return resultsofExercises;

  }