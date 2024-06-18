const header=document.createElement("header")
document.body.appendChild(header)
//Create a <h1> Tag
const head=document.createElement("h1")
head.setAttribute("id","title")
head.innerHTML="<b>DOM CALCULATOR</b>"
header.appendChild(head)

//Create a <p> Tag
let para=document.createElement("p")
para.setAttribute("id","description")
para.innerHTML= " This task represent a simple calculator using DOM";
header.appendChild(para)

// Create calculator 
//div container and append to the body
const calculator = document.createElement('div');
calculator.setAttribute("class","container")
document.body.appendChild(calculator)

// Create the calculator display
const display = document.createElement('input');
display.type = 'text';
display.id = 'result';
display.readOnly = true;
calculator.appendChild(display);

// Calculator buttons

// Create 'C' button
const clearButton = document.createElement('button');
clearButton.textContent = 'C';
clearButton.className = 'operator-btn';
clearButton.id='clear';
calculator.appendChild(clearButton);

// Create 'DEL' button
const deleteButton = document.createElement('button');
deleteButton.textContent = 'DEL';
deleteButton.className = 'operator-btn';
deleteButton.id='delete';
calculator.appendChild(deleteButton);

// Create '/' button
const divideButton = document.createElement('button');
divideButton.textContent = '/';
divideButton.className = 'operator-btn';
divideButton.id='divide'
calculator.appendChild(divideButton);

// Create '+' (addition) button
const addButton = document.createElement('button');
addButton.textContent = '+';
addButton.className = 'operator-btn';
addButton.id='add';
calculator.appendChild(addButton);

//create button 7
const noSeven = document.createElement('button');
noSeven.textContent = '7';
noSeven.className = 'number-btn';
noSeven.id='7';
calculator.appendChild(noSeven);

//create button 8
const noEight = document.createElement('button');
noEight.textContent = '8';
noEight.className = 'number-btn';
noEight.id='8';
calculator.appendChild(noEight);

//create button 9
const noNine = document.createElement('button');
noNine.textContent = '9';
noNine.className = 'number-btn';
noNine.id='9';
calculator.appendChild(noNine);

// Create '*' (multiplication) button
const multiplyButton = document.createElement('button');
multiplyButton.textContent = '*';
multiplyButton.className = 'operator-btn';
multiplyButton.id='multiply';
calculator.appendChild(multiplyButton);

//create button 4
const noFour = document.createElement('button');
noFour.textContent = '4';
noFour.className = 'number-btn';
noFour.id='4';
calculator.appendChild(noFour);

//create button 5
const noFive = document.createElement('button');
noFive.textContent = '5';
noFive.className = 'number-btn';
noFive.id='5';
calculator.appendChild(noFive);

//create button 6
const noSix = document.createElement('button');
noSix.textContent = '6';
noSix.className = 'number-btn';
noSix.id='6';
calculator.appendChild(noSix);

// Create '-' (subtraction) button
const subtractButton = document.createElement('button');
subtractButton.textContent = '-';
subtractButton.className = 'operator-btn';
subtractButton.id='subtract'
calculator.appendChild(subtractButton);

//create button 1
const noOne = document.createElement('button');
noOne.textContent = '1';
noOne.className = 'number-btn';
noOne.id='1';
calculator.appendChild(noOne);

//create button 2
const noTwo = document.createElement('button');
noTwo.textContent = '2';
noTwo.className = 'number-btn';
noTwo.id='2';
calculator.appendChild(noTwo);

//create button 3
const noThree = document.createElement('button');
noThree.textContent = '3';
noThree.className = 'number-btn';
noThree.id='3';
calculator.appendChild(noThree);

//create button .
const noDot = document.createElement('button');
noDot.textContent = '.';
noDot.className = 'operator-btn';
noDot.id='.';
calculator.appendChild(noDot);

//create button 0
const noZero = document.createElement('button');
noZero.textContent = '0';
noZero.className = 'number-btn';
noZero.id='zero';
calculator.appendChild(noZero);

//create button 00
const noDoubleZero = document.createElement('button');
noDoubleZero.textContent = '00';
noDoubleZero.className = 'number-btn';
calculator.appendChild(noDoubleZero);

// Create '=' button
const equalsButton = document.createElement('button');
equalsButton.textContent = '=';
equalsButton.className = 'operator-btn';
equalsButton.id='equal'
calculator.appendChild(equalsButton);


//Writing functions

// Function to update the display
function updateDisplay(value) {
    display.value += value;
  }
  
  // Function to calculate the result
  function calculateResult() {
    try {
      display.value = eval(display.value);
    } catch (error) {
      display.value = 'Error';
    }
  }
  
  // Adding event listeners to number buttons
  const numberButtons = document.querySelectorAll('.number-btn');
  numberButtons.forEach(button => {
    button.addEventListener('click', () => updateDisplay(button.textContent));
  });
  
  // Adding event listeners to operator buttons
  const operatorButtons = document.querySelectorAll('.operator-btn');
  operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (button.textContent === '=') {
        calculateResult();
      } else {
        updateDisplay(button.textContent);
      }
    });
  });
  
  // Clear and delete functions
  clearButton.addEventListener('click', () => display.value = '');
  deleteButton.addEventListener('click', () => display.value = display.value.slice(0, -1));
  
  // Keyboard 
  document.addEventListener('keydown', (event) => {
    const { key } = event;
    if ((key >= '0' && key <= '9') || key === '.') {
      updateDisplay(key);
    } else if (key === 'Enter') {
      calculateResult();
    } else if (key === 'Backspace') {
      display.value = display.value.slice(0, -1);
    } else if (['+', '-', '*', '/'].includes(key)) {
      updateDisplay(key);
    }
  });
  

  