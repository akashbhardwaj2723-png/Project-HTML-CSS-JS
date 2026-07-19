let form=document.querySelector("form");

form.addEventListener("submit",function(e){
  e.preventDefault();
  // console.log("Submited suceefull:");
  const height=parseInt(document.querySelector("#height").value);
  const weight=parseInt(document.querySelector("#weight").value);
  const result=document.querySelector("#result");
    if(isNaN(height)|| height<=0){
      result.innerHTML=`Please enter a valid height ${height}`
      
    }else if( weight<=0 || isNaN(weight)){
       result.innerHTML=`Please enter a valid weight ${weight}`
    }
    else{
      let heightInMtr=height/100;
      const bmi=(weight/(heightInMtr*heightInMtr));
      result.innerHTML=`<span>${bmi.toFixed(2)}</span>`;  

let lessThan=document.querySelector("#lessThan");
let normal=document.querySelector("#normal")
let greatherThan=document.querySelector("#greatherThan")

lessThan.innerHTML="";
normal.innerHTML="";
greatherThan.innerHTML="";

      if (bmi < 18.5) {
   lessThan.innerHTML=`under weight less than ${bmi.toFixed(2)}`
} else if (bmi >= 18.5 && bmi <= 24.9) {
  normal.innerHTML=`norma range ${bmi.toFixed(2)}`
} else {
   greatherThan.innerHTML=`over weight Greather than ${bmi.toFixed(2)}`
} 




    }
});