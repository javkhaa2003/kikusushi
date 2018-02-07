///document.getElementById("add").addEventListener("click", adding);
 document.getElementById("remove").addEventListener("click", remove);

var name = document.getElementById("input").value

var arr =[];

function adding(){
     var name = document.getElementById("input").value
      arr.push(name);
      var one = document.getElementById("array");
      one.textContent = arr.join(",");
      
}

function remove(){
      arr.pop()
      var one = document.getElementById("array");
      one.textContent = arr.join(",");
 }
 document.getElementById("add").addEventListener("click", adding);
 document.getElementById("remove").addEventListener("click", remove);

var name = document.getElementById("input").value

var arr =[];

function adding(){
     var name = document.getElementById("input").value
      arr.push(name);
      var one = document.getElementById("array");
      one.textContent = arr.join(",");
      
}

function remove(){
      arr.pop()
      var one = document.getElementById("array");
      one.textContent = arr.join(",");
 }
 