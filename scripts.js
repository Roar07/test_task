//getting all the forms=================================================================
const addUser=document.forms["adduser"];
const addFood=document.forms["addfood"]
const inTake=document.forms["intake"];
const stt=document.forms["stats"];
var nameFood=document.querySelector('div[id="nameFood"]').querySelector('ul');


//auto calculating requirements==========================================================
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


//adding user=========================================================================


var user=function(dtluser){
    this.userName=dtluser.querySelector('input[name="Name"]').value ;
    this.age=dtluser.querySelector('input[name="Age"]').value ;
    this.weight=dtluser.querySelector('input[name="weight"]').value ;
    this.height=dtluser.querySelector('input[name="height"]').value ;
    this.BMI=dtluser.querySelector('output[name="BMI"]').value ;
    this.calories=dtluser.querySelector('output[name="cal"]').value;
    this.protein=dtluser.querySelector('output[name="protn"]').value;
    this.carbohydrate=dtluser.querySelector('output[name="carbs"]').value;
    this.fats=dtluser.querySelector('output[name="fats"]').value;
    this.water=dtluser.querySelector('output[name="h2o"]').value;
    this.type="user";
};

addUser.addEventListener("submit",function(e){
    e.preventDefault();
    var N=addUser.querySelector('input[name="Name"]').value ;
    var local= new user(addUser);
    let str =JSON.stringify(local);
    localStorage.setItem(N,str);
    alert(addUser.querySelector('input[name="Name"]').value+"-a new user added");
    
});



//adding food items====================================================================

var food=function(dtlfood){
    this.itemName=dtlfood.querySelector('input[name="Item name"]').value ;
    this.calories=dtlfood.querySelector('input[name="Item cal"]').value;
    this.protein=dtlfood.querySelector('input[name="Item protn"]').value;
    this.carbohydrate=dtlfood.querySelector('input[name="Item carbs"]').value;
    this.fats=dtlfood.querySelector('input[name="Item fats"]').value;
    this.water=dtlfood.querySelector('input[name="Item h2o"]').value;
    this.type="food";
};

var displayitem=document.querySelector('div[id="3"]');

addFood.addEventListener("submit",function(e){
    e.preventDefault();
    var N=addFood.querySelector('input[name="Item name"]').value ;

    var local= new food(addFood);
    let str =JSON.stringify(local);
    localStorage.setItem(N,str);


    nameFood.innerHTML="";
    for(i=0;i<localStorage.length;++i)
    {
        var key=localStorage.key(i);
        var get=localStorage.getItem(key);

        var local=JSON.parse(get);
     
    
//for avoiding empty elements to count--(can be change after validictionof input)---  
        if(local.itemName=="")continue;     
 //checking for type to get similar type of items--       
        if(local.type==="food"){
            
            showItemsName(local);
        }
    }


});

//showing pre added food items====================================================================

window.onload=function(){

    for(i=0;i<localStorage.length;++i)
    {
        var key=localStorage.key(i);
        var get=localStorage.getItem(key);

        var local=JSON.parse(get);
     
    
//for avoiding empty elements to count--(can be change after validictionof input)---  
        if(local.itemName=="")continue;     
 //checking for type to get similar type of items--       
        if(local.type==="food"){
            
            showItemsName(local);
        }
    }
}

//showing possible intakes=========================================================================



document.querySelector('button[id="pinTake"]').addEventListener("click",function(e){
    e.preventDefault();
    for(i=0;i<localStorage.length;++i)
    {
        var key=localStorage.key(i);
        var get=localStorage.getItem(key);

        var local=JSON.parse(get);
     
    
//for avoiding empty elements to count--(can be change after validictionof input)---  
        if(local.itemName==="")continue;     
 //checking for type to get similar type of items--       
        if(local.type==="food"){
            
            showItems(local);
        }
    }

});

//only name=======================
function showItemsName(src){
//name--------------------------------------------------------------------
       
            var name=document.createElement("li");
            name.innerHTML=src.itemName;
            nameFood.appendChild(name);

}




function showItems(src){
    var brk1=document.createElement("br");
    inTake.insertBefore(brk1,intake.querySelector('input[type="submit"]'))

//name--------------------------------------------------------------------
        var lbl=document.createElement("label")
        lbl.innerHTML="Item Name:";
        inTake.appendChild(lbl);
            var name=document.createElement("output");
            name.value=src.itemName;
            inTake.appendChild(name);

//calories----------------------------------------------------------------
        var lbl=document.createElement("label")
        lbl.innerHTML="calories:";
        inTake.appendChild(lbl);    
            var name=document.createElement("output");
            name.value=src.calories;
            name.name="Item cal";
            inTake.appendChild(name);
          
//protein-------------------------------------------------------------------
        var lbl=document.createElement("label")
        lbl.innerHTML="protein:";
        inTake.appendChild(lbl);;    
            var name=document.createElement("output");
            name.value=src.protein;
            name.name="Item protn";
            inTake.appendChild(name);
         
//cabohydrates--------------------------------------------------------------
        var lbl=document.createElement("label")
        lbl.innerHTML="carbohydrate:";
        inTake.appendChild(lbl);   
            var name=document.createElement("output");
            name.value=src.carbohydrate;
            name.name="Item carbs";
            inTake.appendChild(name);
     
//fats-----------------------------------------------------------------------
        var lbl=document.createElement("label")
        lbl.innerHTML="fats:";
        inTake.appendChild(lbl);   
            var name=document.createElement("output");
            name.value=src.fats;
            name.name="Item fats";
            inTake.appendChild(name);
            
//water-------------------------------------------------------------------------
        var lbl=document.createElement("label")
        lbl.innerHTML="water:";
        inTake.appendChild(lbl);  
            var name=document.createElement("output");
            name.value=src.water;
            name.name="Item h2o";
            inTake.appendChild(name);
          
    var labl=document.createElement("label");
    labl.innerHTML="Quantity Taken:";
    inTake.appendChild(labl);

    var qyt=document.createElement("input");
    qyt.type="number";
    qyt.name="qyt";
    qyt.style.width="50px";
    qyt.min=0;
    inTake.appendChild(qyt);
    
    var brk1=document.createElement("br");
    inTake.appendChild(brk1);
}


//clearing items entries=================================================================

document.querySelector('button[id="clear"]').addEventListener("click",function(e){
           e.preventDefault();
           inTake.innerHTML="";
        
});
//calculating stats======================================================================

document.querySelector('button[id="Daily stats"]').addEventListener("click",function(e){
    e.preventDefault();
    totalCal();
    totalProtn();
    totalCarbs();
    totalFats();
    totalh2o();

 });

//final calories=============================================================================
 function totalCal(){
       var ttlcal=inTake.querySelectorAll('output[name="Item cal"]');
       var qyt=inTake.querySelectorAll('input[name="qyt"]');
       var total=0;
       
       for(k=0;k<ttlcal.length;++k)
       {
       
        total=total+((ttlcal[k].value*qyt[k].value));;
       }
     var pass=document.createElement("output");
     pass.name="final calories";
     var pnm=document.createElement("label");
     pnm.innerHTML="calories:"
     pass.value=total;
     stt.appendChild(pnm);
     stt.appendChild(pass);
    
 };
 
//final protein================================================================================

 function totalProtn(){
    var ttlcal=inTake.querySelectorAll('output[name="Item protn"]');
    var qyt=inTake.querySelectorAll('input[name="qyt"]');
    var total=0;
    
    for(k=0;k<ttlcal.length;++k)
    {
    
     total=total+((ttlcal[k].value*qyt[k].value)/100);;
    }
  var pass=document.createElement("output");
  pass.name="final protein";
  var pnm=document.createElement("label");
  pnm.innerHTML="proteins:"
  pass.value=total.toFixed(2);
  stt.appendChild(pnm);
  stt.appendChild(pass);

 }

 //final carbohydrates=========================================================================

 function totalCarbs(){
    var ttlcal=inTake.querySelectorAll('output[name="Item carbs"]');
    var qyt=inTake.querySelectorAll('input[name="qyt"]');
    var total=0;
    
    for(k=0;k<ttlcal.length;++k)
    {
    
     total=total+((ttlcal[k].value*qyt[k].value)/100);;
    }
  var pass=document.createElement("output");
  pass.name="final carbohydrate";
  var pnm=document.createElement("label");
  pnm.innerHTML="Carbohydrates:"
  pass.value=total.toFixed(2);
  stt.appendChild(pnm);
  stt.appendChild(pass);

 }
//final fats=====================================================================================
 function totalFats(){
    var ttlcal=inTake.querySelectorAll('output[name="Item fats"]');
    var qyt=inTake.querySelectorAll('input[name="qyt"]');
    var total=0;
    
    for(k=0;k<ttlcal.length;++k)
    {
     total=total+((ttlcal[k].value*qyt[k].value)/100);;
    }
  var pass=document.createElement("output");
  pass.name="final fats";
  var pnm=document.createElement("label");
  pnm.innerHTML="fats:"
  pass.value=total.toFixed(2);
  stt.appendChild(pnm);
  stt.appendChild(pass);
 }

//final water=====================================================================================
 
function totalh2o(){
    var ttlcal=inTake.querySelectorAll('output[name="Item h2o"]');
    var qyt=inTake.querySelectorAll('input[name="qyt"]');
    var total=0;
    
    for(k=0;k<ttlcal.length;++k)
    {
    
     total=total+((ttlcal[k].value*qyt[k].value)/100);
    }

  var pass=document.createElement("output");
  pass.name="final water";
  var pnm=document.createElement("label");
  pnm.innerHTML="water:"
  pass.value=total;
  stt.appendChild(pnm);
  stt.appendChild(pass);
 }
// clearing stats=====================================================================================


document.querySelector('button[id="clearstats"]').addEventListener("click",function(e){
    e.preventDefault();
    stt.innerHTML="";
 
});

//comparing stats=====================================================================================

const remarks=document.querySelector('div[id="rmk"]');  
const cuser=document.forms["compare"];  

cuser.addEventListener("submit",function(e){
    e.preventDefault();
    var cname=cuser.querySelector('input[name="compareUser"]').value;
    if(cname==""){
            alert("Enter User name...")
    }else{
    var get=localStorage.getItem(cname);
    var local=JSON.parse(get);
    
      if(local==null){
        alert("enter valid user");
        
    }else{
        
        let final=stt.querySelector('output[name="final water"]');
        if(final!=null){
        
        let ucal=local.calories; 
        let uwater=local.calories; 
        let fcal=stt.querySelector('output[name="final calories"]');
        let fwater=stt.querySelector('output[name="final water"]');
     
        if(ucal<fcal){
            var rmk=document.createElement("span");
        rmk.innerText="calories limit exceeded!!!";
        remarks.appendChild(rmk);
        }
     if(uwater>fwater){
        var rmk=document.createElement("span");
        rmk.innerText="not drinking enough water why---????";
        remarks.appendChild(rmk);
     }
     if(uwater<fwater&&ucal>fcal){
        var rmk=document.createElement("span");
        rmk.innerText="!!!GOOD JOB!!!";
        remarks.appendChild(rmk);
     }
     
    }else{
        alert("calculate stats First....");}
    
    }
}
});

