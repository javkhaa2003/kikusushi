
//let arr = ["cat", "dog", "bones", "witch"];

//for(var i = 0; i < arr.length; i++){

 //  console.log(arr[i].length);
//}



//let myArr = [1,2,3,4,5,6];

//let myNewArr = myArr.map((i)=>{
  //  return i + 1;
//});

//var mynewArr = myArr.map(function(i){
  //  return i + 1;
//})



var Hotel =  function( roomnumber, service, available,){	
	this.roomnumber=roomnumber;
	this.service=service;
	this.available=available;
}
var roomnumber = new Hotel(21,"available", "yes");
console.log(roomnumber);
