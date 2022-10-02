function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    t = document.getElementById("year").value;
    
    var currentYear  = new Date().getFullYear();
    var finalyear = currentYear+parseInt(t);
    result = (p*r*t)/100;
    Total_amt= Number(result)+Number(p);
    var finalvalue = result+parseInt(p);
    document.getElementById("outputPrincipal").innerHTML = "If you deposit <b>" + p+",</b>";
    document.getElementById("outputInterest").innerHTML = "at an interest rate of <b>" + r+"%.<b>";
    document.getElementById("SI").innerHTML = "the simple intrest added to the principal will be <b>" + result+".</b>";
    document.getElementById("Finalvalue").innerHTML = "The total amount will be  <b>" + Total_amt+".</b>";
    document.getElementById("Finalyear").innerHTML = "in the year of <b>" + finalyear+"</b>";
    
}   
function updaterate()

{
  var z = document.getElementById("rate").value;
  document.getElementById("roi").innerText=z;
}