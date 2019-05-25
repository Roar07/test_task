
const addUser=document.forms["add user"];
var ht=addUser.querySelector('input[name="height"]');

ht.addEventListener("keyup",function(e){
//getting values---
    var height=addUser.querySelector('input[name="height"]').value;
    var weight=addUser.querySelector('input[name="weight"]').value;
    var age=addUser.querySelector('input[name="Age"]').value;

// BMI calculation
   
    var Rs=(weight/(height*height))*10000;
    addUser.querySelector('output[name="BMI"]').value=Rs;

// calorie calculation   

    var cal;
    if(age>=10&& age<18){
      cal=2200;
    }
    if(age>=18&& age<30){
        cal=2400;
    }
    if(age>=30){
        cal=2200;
    }
        addUser.querySelector('output[name="cal"]').value=cal;

// protein--0.8gm per kg

    var pro=0.8*weight;
    addUser.querySelector('output[name="protn"]').value=pro;

// cabohydrate--8gm per kg

    var carbs=8*weight;
    addUser.querySelector('output[name="carbs"]').value=carbs;''

//  fats-- about 25% of basic calories requirement

   var fats=0.25*cal;
   addUser.querySelector('output[name="fats"]').value=fats;
// water
   
addUser.querySelector('output[name="h2o"]').value=2;

});



//add user---

addUser.addEventListener('submit',function(e){
          e.preventDefault();
          
          var ele=addUser.querySelectorAll('input,output');
          listUser(ele);

});




const lsUser=document.forms["login"];
function listUser(dtl){
      for(i=0;dtl[i].name!="";++i){
        if(i==0){
          var opt=document.createElement("option");
          opt.value=dtl[i].value;
          opt.innerHTML=dtl[i].value;
          lsUser.querySelector('select[name="userName"]').appendChild(opt);  

        }else{
      var inpt=document.createElement("output");
      inpt.name=dtl[i].name;
      inpt.value=dtl[i].value;
      inpt.style.display="none";    

      inpt.className=dtl[0].value;
      lsUser.appendChild(inpt);
      }
    
}};



// add food item----
const adfod=document.forms["add food"];

adfod.addEventListener("submit",function(e){
    e.preventDefault();
     var fod=adfod.querySelectorAll('input');
     adintake(fod);
});

//passing value to intake section---

const inTake=document.forms["intake"];
function adintake(inpt){

    for(j=0;inpt[j].name!="";++j)
    {
        var dt=document.createElement("output");
        dt.value=inpt[j].value;
        dt.className="calc";
        dt.name=inpt[j].name;
        var nm=document.createElement("label")
        nm.innerHTML=inpt[j].name+":";    
        var brk=document.createElement("br");
         inTake.insertBefore(nm,inTake.querySelector('input[type="submit"]'));
         inTake.insertBefore(dt,inTake.querySelector('input[type="submit"]'));
         inTake.insertBefore(brk,intake.querySelector('input[type="submit"]'));
    }

    var labl=document.createElement("label");
    labl.innerHTML="Quantity Taken:";
    inTake.insertBefore(labl,intake.querySelector('input[type="submit"]'));


    var qyt=document.createElement("input");
    qyt.type="number";
    qyt.name="qyt";
    qyt.style.width="50px";
    qyt.min=0;
    inTake.insertBefore(qyt,intake.querySelector('input[type="submit"]'));
    

    var brk1=document.createElement("br");
    inTake.insertBefore(brk1,inTake.querySelector('input[type="submit"]'));
};

//calculating stats---
 inTake.addEventListener("submit",function(e){
    e.preventDefault();
    console.log("hai im working");
      totalCal();
      console.log("hai im working");
    //totalProtn();
    //totalCarbs();
    //totalFats();
    //totalh2o();
 });

 const stt=document.forms["stats"];
 function totalCal(){
       var ttlcal=inTake.querySelectorAll('output[name="calories"]');
       var qyt=inTake.querySelectorAll('input[name="qyt"]');
       var total;
       console.log(ttlcal[0].value);
       console.log(qyt[0].value);
       for(k=0;ttlcal[k].value!="";++k)
       {
        console.log(ttlcal[0].value);
        console.log(qyt[0].value);
        total+=(ttlcal[k].value*qyt[k].value);
       }
     var pass=document.createElement("output");
     var pnm=document.createElement("label");
     pnm.innerHTML="calories:"
     pass.value=total;
     stt.appendChild(pnm);
     stt.appendChild(pass);
    
 };
 /*
 function totalProtn()
 function totalCarbs()
 function totalFats()
 function totalh2o()
 */