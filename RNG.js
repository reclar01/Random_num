//PB numbers are 5 from 1 to 69 and PB 1 to 26
//mm number are 5 from 1 to 70 and MN 1 to 25
//ToDo
//randomly generate the required numbers for a pick of a given game
//Compare the numbers generated to the list of historical numbers picked to see if there is any matches
//OR:
//randomly generate the required numbers for a pick of a given game
//compare the numbers generated with the latest historical picks
//rinse and repeat until the numbers are generated.
//list the number of iterations it took to get the correct number
//console.log(69%(Math.random("Apeshit")*100));
//console.log(readTextFile("C:\Users\reclar01\Documents\Code\Random_num\Random_numPBAllNumbersNumericalOrder.txt"));

function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("demo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "PBAllNumbersNumericalOrder.txt", true);
    xhttp.send();
  }