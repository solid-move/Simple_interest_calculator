function compute()
{

    var p = document.getElementById("principal").value;
    if(p == '' || p == 0 || p < 0)
    {
        if(window.confirm('please enter positive number'))
        {
            principal.focus();
        }
        return false;
    }
    var q= document.getElementById("rate").value;
    var r= document.getElementById("years").value;
    //var s= document.getElementById("result").value;   


    var s=(p*q*r)/100;

   // document.getElementById("result").innerHTML = s;
   //Interest : <span id="result"></span>
    document.getElementById("demo1").innerHTML ="If you deposit ";
    document.getElementById("demo5").innerHTML =" "+p+",";
    document.getElementById("demo2").innerHTML =" at an interest of rate ";
    document.getElementById("demo6").innerHTML =q+"%.";
    document.getElementById("demo3").innerHTML ="You will receive an amount of ";
    document.getElementById("demo7").innerHTML =s+",";
    document.getElementById("demo4").innerHTML ="in ";
    document.getElementById("demo8").innerHTML =r+" years.";

    function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

}