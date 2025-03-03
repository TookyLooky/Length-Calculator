<!DOCTYPE html>
<html lang="en">
 <head>
     <meta charset="UTF-8">
     <title>Height Measurement</title>

 </head>
 <h1>What is this website used for?</h1>
 <h2>This Website is an application that helps people to measure distance using various different methods</h2>
 <h3>Currently, our team is working on a length calculator</h3>
  <body>
<p>Click here to got to length calculator: </p>
<a href="Sub-parts/lenght-calculator.html">Length Calculator</a>


  </body>
</html>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>

<body>
<link rel="stylesheet" href="style.css">

    <div id="Calculator">
        <input id="display" readonly>
        <div id="Keys">
            <button onclick="appendToDisplay('+')" class="operator-btn">+</button>
            <button onclick="appendToDisplay('7')">7</button>
            <button onclick="appendToDisplay('8')">8</button>
            <button onclick="appendToDisplay('9')">9</button>
            <button onclick="appendToDisplay('-')" class="operator-btn">-</button>
            <button onclick="appendToDisplay('4')">4</button>
            <button onclick="appendToDisplay('5')">5</button>
            <button onclick="appendToDisplay('6')">6</button>
            <button onclick="appendToDisplay('*')" class="operator-btn">*</button>
            <button onclick="appendToDisplay('1')">1</button>
            <button onclick="appendToDisplay('2')">2</button>
            <button onclick="appendToDisplay('3')">3</button>
            <button onclick="appendToDisplay('/')" class="operator-btn">/</button>
            <button onclick="appendToDisplay('0')">0</button>
            <button onclick="appendToDisplay('.')">.</button>
            <button onclick="calculate()">=</button>
            <button onclick="clearDisplay()" class="operator-btn">C</button>
        </div>
    </div>
<script src="Length Calculator.js"></script>
</body>
</html>



body{
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: hsl(0, 0%, 95%);
}
#calculator{
    font-family: Arial, sans-serif;
    background-color: hsl(0, 0%, 15%);
    border-radius: 15px;
    max-width: 500px;
    overflow: hidden;
}
#display{
    width: 100%;
    padding: 20px;
    font-size: 5rem;
    text-align: left;
    border: none;
    background-color: hsl(0, 0%, 20%);
    color: white;
}
#keys{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    padding: 25px;
}
button{
    width: 100px;
    height: 100px;
    border-radius: 50px;
    border: none;
    background-color: hsl(0, 0%, 30%);
    color: white;
    font-size: 3rem;
    font-weight: bold;
    cursor: pointer;
}
button:hover{
    background-color: hsl(0, 0%, 40%);
}
button:active{
    background-color: hsl(0, 0%, 50%);
}
.operator-btn{
    background-color: hsl(35, 100%, 55%);
}
.operator-btn:hover{
    background-color: hsl(35, 100%, 65%);
}
.operator-btn:active{
    background-color: hsl(35, 100%, 75%);
}






const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
}
