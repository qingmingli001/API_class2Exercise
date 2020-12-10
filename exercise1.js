//exercise1 part1

function downloadImage(imageNameArg){
  let x = 0;
  while(x < 1000000000){
    x++;
  }
  console.log(`${imageNameArg} Downloaded.`);
}

function logEvent(stringArg){
  console.log(stringArg)
}

logEvent("first line");
logEvent("second line");
logEvent("third line");
downloadImage("image1.jpg");
logEvent("fourth line");
logEvent("fifth line");
logEvent("sixth line");

//part2

// function downloadImage(imageNameArg) {
//   setTimeout(()=>console.log(`${imageNameArg} Downloaded.`),5000)
// }

// function logEvent(stringArg){
//   console.log(stringArg)
// }

// logEvent("first line");
// logEvent("second line");
// logEvent("third line");
// downloadImage("image1.jpg");
// logEvent("fourth line");
// logEvent("fifth line");
// logEvent("sixth line");

//part3

// function downloadImage(imageNameArg) {
//   setTimeout(()=>console.log(`${imageNameArg} Downloaded.`),2000)
// }

// function logEvent(stringArg){
//   console.log(stringArg)
// }

// logEvent("first line");
// logEvent("second line");
// logEvent("third line");
// downloadImage("image1.jpg");
// logEvent("fourth line");
// logEvent("fifth line");
// logEvent("sixth line");

//part4
// const fastFunction = (logString) => {
//   console.log(logString);
// }

// const slowFunction = (logString) => {
//   setTimeout(function() {
//       return(logString);
//   }, 2000);
// }

// fastFunction('first line');
// fastFunction('second line');

// const third = slowFunction('third line')
// console.log(third)