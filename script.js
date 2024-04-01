var count;
    function randomNumber(){
        count = Math.floor(Math.random()*9)+1;
        document.getElementById("randomnum").innerHTML = count;
        var row = document.getElementById("inputfriend");
        for (let i = 0; i < count; i++){
         
            const name = document.createElement("h3");
            name.innerHTML = "Enter friend nickname : ";
            const nameinput = document.createElement("input");
            nameinput.id = "name"+i;
            nameinput.type = "text";
            row.appendChild(name);
            name.appendChild(nameinput);

          
            const age = document.createElement("span");
            age.innerHTML = "  Age : ";
            const ageinput = document.createElement("input");
            ageinput.id = "age"+i;
            ageinput.type = "number";
            name.appendChild(age);
            age.appendChild(ageinput);

            const br = document.createElement("br");
            row.appendChild(br);
        }
        
        const nextbtn = document.createElement("button");
        nextbtn.innerHTML = "Next";
        nextbtn.type = "button";
        nextbtn.onclick = goNext;

        const resetbtn = document.createElement("button");
        resetbtn.innerHTML = "Reset";
        resetbtn.type = "button";
        resetbtn.onclick = reset;

        row.appendChild(nextbtn);
        row.appendChild(resetbtn);
        document.getElementById("randombtn").style.display="none";

    }

    function goNext() {
        var check;
        var result = document.getElementById("result");
       
        for (let i = 0; i < count; i++) {
            const nameValue = document.getElementById("name" + i).value;
            const ageValue = document.getElementById("age" + i).value;
    
            if (nameValue.trim() == "" || ageValue.trim() == "") {
                check = "กรุณาเติมคำในช่องว่าง!!";
                break; 
            }
        }
        if(check != undefined){
            alert(check);
            result.style = "";
        } else {
            const sumbtn = document.createElement("button"); 
            sumbtn.innerHTML = "Sum";
            sumbtn.type = "button";
            sumbtn.onclick = sum;
            result.appendChild(sumbtn);
            
            const averagebtn = document.createElement("button");
            averagebtn.innerHTML = "Average";
            averagebtn.type = "button";
            averagebtn.onclick = average;
            result.appendChild(averagebtn);
            
            const minbtn = document.createElement("button");
            minbtn.innerHTML = "Min";
            minbtn.type = "button";
            minbtn.onclick = min; 
            result.appendChild(minbtn);
            
            const maxbtn = document.createElement("button"); 
            maxbtn.innerHTML = "Max";
            maxbtn.type = "button";
            maxbtn.onclick = max;
            result.appendChild(maxbtn);
            
            result.style = "text-align:center; margin-top:10px; margin-left"
        }
    }

    function reset(){
        var row = document.getElementById("inputfriend");
        var result = document.getElementById("result");
        while (row.firstChild) {
            row.removeChild(row.firstChild);
        }
        while (result.firstChild) {
            result.removeChild(result.firstChild);
        }
        while (ans.firstChild) {
            ans.removeChild(ans.firstChild);
        }
        row.style = "";
        result.style = "";
        ans.style = "";
        document.getElementById("randombtn").style.display="";
        document.getElementById("randomnum").innerHTML="";
    }

    function sum(){
        var sum = 0;
        for (let i = 0; i < count; i++) {
            const ageValue = parseInt(document.getElementById("age" + i).value);
            sum += ageValue;
        }
        console.log("Sum of ages: " + sum);
        const resultsum = document.createElement("p");
        const hr = document.createElement("hr");
        resultsum.id = "resultsum";
        resultsum.innerHTML = "Sum of age : "+ sum;
        var ans = document.getElementById("ans");
        ans.appendChild(resultsum);
        ans.appendChild(hr);
        resultsum.style = "text-align:center;margin-top:10px;"
        
    }

    function average(){
        var sum = 0;
        for (let i = 0; i < count; i++) {
            const ageValue = parseInt(document.getElementById("age" + i).value);
            sum += ageValue;
        }
        var average = sum / count;
        console.log("Average age: " + average.toFixed(2));

        const resultavg =  document.createElement("p");
        const hr = document.createElement("hr");
        resultavg.id = "resultavg";
        resultavg.innerHTML = "Average of age : "+average.toFixed(2);
        var ans = document.getElementById("ans");
        ans.appendChild(resultavg);
        ans.appendChild(hr);
        resultavg.style = "text-align:center;margin-top:10px;"
    }

    function min(){
        var minAge = Infinity;
        var minAgename = []; 
        const resmin = document.createElement("p");
        const hr = document.createElement("hr");
        var ans = document.getElementById("ans");
        resmin.id = "resmin";
    
        for (let i = 0; i < count; i++) {
            const ageValue = parseInt(document.getElementById("age" + i).value);
            const nameValue = document.getElementById("name" + i).value;
    
            if (ageValue < minAge) {
                minAge = ageValue;
                minAgename = [nameValue]; 
            } else if (ageValue == minAge) {
                minAgename.push(nameValue);
            }
        }

        if (minAgename.length > 0) {
            resmin.innerHTML = "Youngest friend  : " + minAgename.join(", ") + "," + minAge +" year old";
            ans.appendChild(resmin);
        }
    
        ans.appendChild(hr);
        resmin.style = "text-align:center;margin-top:10px;"
    }

    function max(){
        var maxAge = -Infinity;
        var maxAgename = []; 
        const resmax = document.createElement("p");
        const hr = document.createElement("hr");
        var ans = document.getElementById("ans");
        resmax.id = "resmax";
    
        for (let i = 0; i < count; i++) {
            const ageValue = parseInt(document.getElementById("age" + i).value);
            const nameValue = document.getElementById("name" + i).value;
    
            if (ageValue > maxAge) {
                maxAge = ageValue;
                maxAgename = [nameValue];
            } else if (ageValue == maxAge) {
                maxAgename.push(nameValue);
            }
        }

        if (maxAgename.length > 0) {
            resmax.innerHTML = "Elder friend : " + maxAgename.join(", ") +"," + maxAge +" year old";
            ans.appendChild(resmax);
        }
    
        ans.appendChild(hr);
        resmax.style = "text-align:center;margin-top:10px;"
    }