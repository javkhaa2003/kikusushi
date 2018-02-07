//console.log("hello world")
//document.write("Hello World")
//alert("hello World")
//var name = prompt("what's your name?")
//console.log(name)




//var numberValue = 12

//var numberValue2 = 100
//var boolValue = true

//var stringValue = "write wahtever you want here"

//var arrayValue = [33, false, "string"]

//var nunberValue = prompt("whatever you want to write here using PROMPT MEAN TUR HULEENE UU")



///var combineVariables = numberValue + numberValue2
//console.log(combineVariables)

function myPic(){

  var foo = document.getElementById('foo');

  foo.innerHTML = '';//get rid of what was in the element

  var picUrl = document.getElementById('pic').value; //grab value from input
  

  picObj.url = picObj;
  
   localStorage.setItem('myObj', JSON.stringify({name: 'brian', job: 'hack'}));




  var picEl = document.createElement('img'); //creating img element

  picEl.src = picUrl; //dynamically set pic src to our pic url from user

  document.getElementById('foo').appendChild(picEl);//add our pic element to the div on the html

  document.getElementById('pic').value = '';//set value

};



//function myPic(){

  var foo = document.getElementById('foo');

  foo.innerHTML = '';//get rid of what was in the element

  var picUrl = document.getElementById('pic').value; //grab value from input
  var picEl = document.createElement('img'); //creating img element

  picEl.src = picUrl; //dynamically set pic src to our pic url from user

  document.getElementById('foo').appendChild(picEl);//add our pic element to the div on the html

  document.getElementById('pic').value = '';//set value




//CallMe();
//mayBeCall();




function callMe(){
	console.log('callMe');
};



var mayBeCall = function mayBe(){
	console.log('maybe');
};




//outer function
function myClozure(){
 var cat = 'henry';
​

 //inner function
 function innerClosure(){
  cat = 'billy';
  var dog = 'sam';
 };
​
 innerClosure();
 console.log(cat);
 console.log(dog);
​
};




function pic(){
  localStorage.setItem('myObj', JSON.stringify({name: 'brian', job: 'hack'}));

  setTimeout(function(){
    getStorage();
  },3000);
};

function getStorage(){
  console.log(JSON.parse(localStorage.getItem('myObj')));
};




