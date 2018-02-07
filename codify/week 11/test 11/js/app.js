function search(){

    let userInput = document.getElementById("userInput").value;

    const jobs = "https://api.usa.gov/jobs/search.json?query=" + userInput;

    $.ajax({
        type: 'GET',
        url: jobs,
        dataType: "json",
        success: function(data){
            for(let i=0; i<data.length; i++){
                //store pertinent info in vars
                let div = document.createElement("div");
                let endDate = data[i].endDate;
                let max = data[i].maximum;
                let min = data[i].minimum;
                let title = data[i].position_title;
                let location = data[i].locations[0];
    
                //create html elements 
                let h1 = document.createElement('h1');
                let p = document.createElement('p');
    
                h1.textContent = title;
    
                p.textContent = location;
    
                div.appendChild(h1);
                div.appendChild(p);
    
                //add this to the body
                document.querySelector("body").appendChild(div);
    
            }
        }
      });


}