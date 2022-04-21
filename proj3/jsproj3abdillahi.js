
    function GenerateLottery() {
        
            var lotto1 = Math.ceil(Math.random() * 50);
            var lotto2 = Math.ceil(Math.random() * 50);
            var lotto3 = Math.ceil(Math.random() * 50);
            var lotto4 = Math.ceil(Math.random() * 50);
            var lotto5 = Math.ceil(Math.random() * 50);     
    
         var array = [lotto1, lotto2, lotto3, lotto4, lotto5]
         array.sort(function(a,b){return a - b})
        
        var ul = document.getElementById("LottoNumbers");
        ul.innerHTML = ""
        array.forEach(num =>{
            var img = document.createElement("img")
            img.src =`${num}.gif`
            var li = document.createElement("li")
            li.appendChild(img)
            ul.appendChild(li)
        })
        return(array)
    }


function GuessField(){

       var t = Number(document.getElementById("guessField1").value);
       var y = Number(document.getElementById("guessField2").value);
       var u = Number(document.getElementById("guessField3").value);
       var i = Number(document.getElementById("guessField4").value);
       var o = Number(document.getElementById("guessField5").value);
       
       let array = [t, y, u, i, o]
       
       array.sort(function(a,b){return a - b})
    
       var winningArray = GenerateLottery()
    
        console.log(array)
        console.log(winningArray)

        if (JSON.stringify(array) == JSON.stringify(winningArray))
            
           {    
               alert("CONGRATULATIONS! YOU WON $1,000,000,000 DOLLARS");
           }
      
        else
            {
                    alert("YOU LOSE");   
            }
}


