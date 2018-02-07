function showTime (){
	var date = new Date();
	var h = date.getHours();
	var n = date.getMinutes();
	var s = date.getSeconds();


	var session = "Am";

	if (h == 0){
		h=12;
	}
	if (h>12){
		h= h-12;
		session= "Pm"
	}




	
	var time = h + ":" +n +":"+ s + "" + session;
	document.getElemnetById("MyClockDisplay").innerText=time;
	document.getElemnetById("MyClockDisplay").textContent=time;

	setTimeout(showTime, 1000);
}
