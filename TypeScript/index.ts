// nav bar
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

// Calculator page (Event Listeners)

let display = document.getElementById('display');//Get HTML element Id = display 

let buttons = Array.from(document.getElementsByClassName('button'));//Create an array from HTML element Id = button

buttons.map( button => { // .map()  method creates an array by calling a specific function on each element present in the parent array
    button.addEventListener('click', (e) => { //.addEventListener() method of the EventTarget interface sets up a function that will be called whenever the specified event Ex:(click) is delivered to the target
        switch((e.target as HTMLElement).innerText){ //take e.target as an HTML element //.innerText get the value between <start tag> and </end tag> in HTML element
            case 'C'://like in java
                display.innerText = '';//display is var,  set the '' value between <start tag> and </end tag> in display element
                break;
            case '=':
                try{//like in java
                    display.innerText = eval(display.innerText); //evall convert text "String" to TS code
                } catch {
                    display.innerText = "Error"//set the 'Error' value between <start tag> and </end tag> in display element
                }
                break;//like in java
            default://like in java
                display.innerText += (e.target as HTMLElement).innerText;
        }
    });
});

// TODO page
//Activate onclick() method in add button
function newElement() {
            let inputValue = (<HTMLInputElement>document.getElementById('myInput')).value;//.value() get the value of HTML element
            if(inputValue){// if inputValue have valu not = null
            let li = document.createElement("li");//.createElement() create new li HTML element 
            //(<HTMLInputElement>document.getElementById(elementId)).value;//this for value fun in Ts
           
            let txt1 = document.createTextNode(inputValue);//createTextNode() create new text "string" from inputValue in text1 var
            li.appendChild(txt1);//appendChild() method of the Node interface adds a node to the end of the list of children of a specified parent node
            li.onclick=chefun;//Create onclick property for new li element
            document.getElementById("myUL").appendChild(li);// add new element li to ul
            
            (<HTMLInputElement>document.getElementById('myInput')).value = "";
            //--------------------------------------------------------------------------------------------------------
            // add delete bouton
            let span = document.createElement("span");//create new span HTML element 
            let txt2 = document.createTextNode("X");//create new text "string" ="X" in text2 var
            span.className = "close";//add css class name to delete botoon
            
            span.onclick=delfun;//Create onclick property for new span element
            span.appendChild(txt2);//add a text node to the end of the children of a span parent node.
            li.appendChild(span);//add a span node to the end of the children of a li parent node.
            }else//like in java
            alert("You must write something!");//alert() method displays an alert box with a specified message and an OK button

        }
 //Activate delete bouton
function delfun(){
    if(confirm("Are you sure?")){//confirm() method displays a dialog box with a specified message, along with an OK and a Cancel button
     let div = this.parentElement; //parentElement property returns the parent element of the specified element
     div.remove();//method removes the HTML element
    }
}
//Activate check button
function chefun(){
    let chelm = this; //like in java
    let classname = chelm.className;//.className property get the class name fo HTML element
    if (classname == "checked"){//like in java
        chelm.className ="null";//like in java
    }else //like in java
        chelm.className ="checked";//like in java
  
}

