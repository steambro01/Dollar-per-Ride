window.onload=function(){
   document.getElementById("main-form") .addEventListener("click",function(e){
      var ppg= document.getElementById('ppg').value;
      var miles= document.getElementById('milesNeeded').value;
      var mpg= document.getElementById('mpg').value;
      document.getElementById("total").value=( ((miles/mpg)*ppg));

     // e.preventDefeault();
      console.log(ppg);
      console.log(miles);
      console.log(mpg);
  // document.getElementById('total').textContent=  ((miles/mpg)*ppg);
   });
};