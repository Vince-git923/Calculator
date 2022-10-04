let numpads = document.querySelectorAll(".num")
let mainscreen = document.querySelector('.finput')
let outputscreen = document.querySelector('.secinput')
let ops = document.querySelectorAll(".op")
let ac = document.querySelector(".clear")
let equal = document.querySelector(".equal")
let del = document.querySelector(".delete")
let decimal = document.querySelector(".decimal")

let oper = ""
let tempnum1 = ""
let num1 = ""

let num2 = ""



decimal.addEventListener("click",()=>{
    if(tempnum1 === ""){
        tempnum1 = "0"
    }
})

function dellete(){
    tempnum1 = mainscreen.textContent
    mainscreen.textContent = mainscreen.textContent.slice(0, mainscreen.textContent.length-1)
  tempnum1 = mainscreen.textContent
    
    if(tempnum1 === ""){
      
      mainscreen.textContent = "0"
      tempnum1 = ""
        
    }
}

numpads.forEach(pad =>{
    pad.addEventListener("click",()=>{
      

       if (tempnum1.length < 20){
       tempnum1 = tempnum1 += pad.textContent
        mainscreen.textContent = tempnum1
       }else{
        tempnum1 = tempnum1+=""
       }

       

        /*point not working after AC is clicked,
        if mainscreen  = 0 should = 0. when . is clicked
        point on keyboard not yet !*/
       if(tempnum1.includes(".")){
            decimal.style.pointerEvents ="none"
            
        }else{
            decimal.style.removeProperty('pointer-events')
        }
        
        if(mainscreen.textContent ==="0" && pad.textContent === "0"){
            tempnum1 =""
        }
    })
})


ops.forEach(op =>{
    op.addEventListener("click",()=>{
       
        decimal.style.removeProperty('pointer-events')
     
        num1 = outputscreen.textContent
       
      if(mainscreen.textContent === "" ){
        return
      }else if(num1 === ""){
        outputscreen.textContent = mainscreen.textContent + " " + op.textContent
      }
      else if( outputscreen.textContent === parseFloat(num1) +" "+oper + " "+ num2){
        //WTF have i done here!
        
        outputscreen.textContent = mainscreen.textContent + " " + op.textContent 
       
       }else{
        
      outputscreen.textContent = solve(oper, parseFloat(num1), parseFloat(mainscreen.textContent)) + " " + op.textContent
     //final
      }
      
      oper = op.textContent
      
      tempnum1 = ""
      mainscreen.textContent = ""
      mainscreen.textContent  = ""
    
    })
})
function equalls(){
    num1 = outputscreen.textContent

    if(num1 === ""){
    return
  }else if(mainscreen.textContent === "" || mainscreen.textContent ==="0"){
   return
  }
  else if( outputscreen.textContent === parseFloat(num1) +" "+oper + " "+ num2){
    
    mainscreen.textContent = mainscreen.textContent  
   
   }
  else{
   num2 = tempnum1
    outputscreen.textContent = parseFloat(num1) + " " +oper +" " + tempnum1
   mainscreen.textContent = solve(oper, parseFloat(num1), parseFloat(tempnum1))
   //mainscreen.textContent = parseFloat(mainscreen.textContent,8)

  tempnum1 = mainscreen.textContent
 
  }
}
equal.addEventListener("click",()=>{
  
 equalls()
  
})
 function solve(operator,fnum,snum){
     if(operator === "" || fnum === "" || snum === ""){
        return "Invalid Operation"
     }
    if(operator === "+"){
       b =  fnum + snum;
       return Math.round(b * 10000000000)/10000000000
       
    }
    else if(operator === "-"){
        b =  fnum - snum;
        return Math.round(b * 10000000000)/10000000000
    }else if(operator === "x" ){32
        return fnum * snum
    }else if(operator === "/"){
        if(snum === 0){
            return "Undefined"
        }else{
        return Math.round((fnum / snum)*10000000000000) /10000000000000
    }
}

    
 }

 
function resetall(){
    mainscreen.textContent = "0"
    outputscreen.textContent = ""
    num1 = ""
    num2 = ""
    tempnum1 = ""
}
ac.addEventListener("click",()=>{
   resetall()
   decimal.style.removeProperty('pointer-events')
})

del.addEventListener('click',()=>{

dellete()
//console.log(num2)
  
    
})



document.addEventListener("keydown",(e)=>{
    let c = e.key;

    



    if(mainscreen.textContent === "0" && c === "."){
     
        tempnum1 =  "0";
        tempnum1 += c
       mainscreen.textContent = tempnum1
       
    }else if(mainscreen.textContent ==="" && c ==="."){
     tempnum1 ="0"
     tempnum1 += c
     mainscreen.textContent = tempnum1
    }
     else if (mainscreen.textContent.includes(".") && c === "."){
       
         tempnum1 = tempnum1 += "";
       mainscreen.textContent = tempnum1
      }
 else if(c >= 0 && c <= 9 || c === "."){
    
    if(tempnum1.length < 20){
    tempnum1 = tempnum1 += c;
    mainscreen.textContent = tempnum1
    }else{
      tempnum1 =tempnum1 += ""
    }
    
 } 
 else if(c === "Backspace"){
    dellete()
 }else if(c === "+" || c ==="-" || c==="/" || c==="*"){
   if(c === "*"){
    c = "x";
   }

  





    num1 = outputscreen.textContent
       
    if(mainscreen.textContent === "" ){
      return
    }else if(num1 === ""){
      outputscreen.textContent = mainscreen.textContent + " " + c
    }
    else if( outputscreen.textContent === parseFloat(num1) +" "+oper + " "+ num2){
      //WTF have i done here!
      
      outputscreen.textContent = mainscreen.textContent + " " + c
     
     }else{
      
    outputscreen.textContent = solve(oper, parseFloat(num1), parseFloat(mainscreen.textContent)) + " " + c
   //final
    }
   
    
    
    oper = c
    
    tempnum1 = ""
    mainscreen.textContent = ""
    mainscreen.textContent  = ""
 }else if(c === "Enter"){
  equalls()
 }

if(e.code ==="Space"){
    resetall()
 }
 


if(c ==="1"){
  let key = document.getElementById("one")
  key.style.animation = 'numColor 0.1s'
}else if(c === "2"){
  let key = document.getElementById("two")
  key.style.animation = 'numColor 0.1s'
}else if(c === "3"){
  let key = document.getElementById("three")
  key.style.animation = 'numColor 0.1s'
}else if(c === "4"){
  let key = document.getElementById("four")
  key.style.animation = 'numColor 0.1s'
}else if(c === "5"){
  let key = document.getElementById("five")
  key.style.animation = 'numColor 0.1s'
}else if(c === "6"){
  let key = document.getElementById("six")
  key.style.animation = 'numColor 0.1s'
}else if(c === "7"){
  let key = document.getElementById("seven")
  key.style.animation = 'numColor 0.1s'
}else if(c === "8"){
  let key = document.getElementById("eight")
  key.style.animation = 'numColor 0.1s'
}else if(c === "9"){
  let key = document.getElementById("nine")
  key.style.animation = 'numColor 0.1s'
}else if(c === "0"){
  let key = document.getElementById("zero")
  key.style.animation = 'numColor 0.1s'
}else if(e.code==="Space"){
  let key = document.getElementById("allClear")
  key.style.animation = 'clrBtns 0.1s'
}else if(c === "Backspace"){
  
  del.style.animation = 'clrBtns 0.1s'
}else if(c === "+"){
let key = document.getElementById("plus")
key.style.animation = 'opBtns 0.1s'
}else if(c === "-"){
  let key = document.getElementById("minus")
  key.style.animation = 'opBtns 0.1s'
  }
  else if(c === "/"){
    let key = document.getElementById("divide")
    key.style.animation = 'opBtns 0.1s'
    }
    else if(c === "x"){
      let key = document.getElementById("times")
      key.style.animation = 'opBtns 0.1s'
      }
      else if(c === "Enter"){
        equal.style.animation = "equalBtns 0.1s"
      }

 
  

 
}) 
document.addEventListener("keyup",()=>{
  numpads.forEach(pad=>{
    
    pad.style.animation ="none"
  })
  ac.style.animation ="none"
 del.style.animation ="none"
 ops.forEach(op =>{
  op.style.animation ="none"
 })
 equal.style.animation ="none"
 })