 let circle  = document.querySelector(".circle");
 let circle2 = document.querySelector(".circle2");
 let circle3 = document.querySelector(".circle3");
 let circle4 = document.querySelector(".circle4");
 let circle5 = document.querySelector(".circle5");
 let reverse = document.querySelector(".reverse");
 let revResult = document.querySelector("#revResult");
  let revResult2 = document.querySelector("#revResult2");
  let logorev = document.querySelector("#logorev");
  let back = document.querySelector(".back");


  function backb(){
    location.reload();
  }

   

 function revl(){
            circle.style.display = "block";
            circle2.style.display = "block";
            circle3.style.display = "block";
            circle4.style.display = "block";
            circle5.style.display = "block";
            reverse.style.display = "block";
           
             setTimeout(function(){
                    back.style.display = "block";
            },3000);
          
        }


 document.getElementById('enter2').addEventListener('keydown', function(event) {//dili maka space
      if (event.key === ' ') { // e check kong naas space
        event.preventDefault(); // Prevent the default action (inserting a space)
      }
    });


function prefixRev() {
            let prefixExp = document.getElementById("enter2").value;
            let infixExp = convertPrefixToInfix(prefixExp);
            document.getElementById("revResult").innerHTML = "Infix Expression"+ "<br>" + infixExp;
        }

        function postfixRev() {// di maka space
            let postfixExp = document.getElementById("enter2").value;
            let infixExp = postfixToInfix(postfixExp);
            document.getElementById("revResult2").innerHTML = "Infix Expression"+ "<br>" + infixExp;
        }

        // Function to convert prefix to infix
        function convertPrefixToInfix(prefixExp) {
            revResult.style.display = "block";
            revResult2.style.display = "none";
            let stack = [];
            for (let i = prefixExp.length - 1; i >= 0; i--) {
                let char = prefixExp[i];
                if (/[a-zA-Z0-9]/.test(char)) {
                    stack.push(char);
                } else {
                    let operand1 = stack.pop();
                    let operand2 = stack.pop();
                    stack.push("(" + operand1 + char + operand2 + ")");
                }
            }
            return stack.pop();
        }

        // Function to convert postfix to infix
        function postfixToInfix(postfixExp) {
            revResult.style.display = "none";
            revResult2.style.display = "block";
            let stack = [];
            for (let i = 0; i < postfixExp.length; i++) {
                let char = postfixExp[i];
                if (/[a-zA-Z0-9]/.test(char)) {
                    stack.push(char);
                } else {
                    let operand2 = stack.pop();
                    let operand1 = stack.pop();
                    stack.push("(" + operand1 + char + operand2 + ")");
                }
            }
            return stack.pop();
        }

       

        function dguide(){

        }


        let next = document.querySelector("#next");
        let nextb2 = document.querySelector("#nextb2");
        let nextb3 = document.querySelector("#nextb3");
        let nextb4 = document.querySelector("#nextb4");
        let nextb5 = document.querySelector("#nextb5");
        let noParenthesesInfo = document.querySelector("#noParenthesesInfo");
        let viewHere = document.querySelector("#viewHere");
        let resultInfo = document.querySelector("#resultInfo");
        let operatorInfo = document.querySelector("#operatorInfo");
        let parenthesesInfo = document.querySelector("#parenthesesInfo");
        let operandsInfo = document.querySelector("#operandsInfo");
        let stackInfo = document.querySelector("#stackInfo");
        let container1 = document.querySelector(".container1");
        let guide = document.querySelector("#guide");
        let guideTable = document.querySelector(".guideTable");

        let clickPrefix = document.querySelector("#clickPrefix");
        let clickPostfix = document.querySelector("#clickPostfix");
        let labelPrefix = document.querySelector("#labelPrefix");
        let clickClear = document.querySelector("#clickClear");
        let enter = document.querySelector("#enter");
        let labelPostfix = document.querySelector("#labelPostfix");

        let enterAnimation = document.querySelector(".enterAnimation");

        let prefix = document.querySelector("#prefix");
        let postfix = document.querySelector("#postfix");

        let headMain = document.querySelector(".headMain");

        let showingClick = document.getElementById('showingClick');
        let xb = document.querySelector("#xb");

        var cells = document.querySelectorAll('.tb td');
        let ansPost = document.querySelector("#ansPost");
        
      


        

// Loop through each cell
// cells.forEach(function(cell) {
//     // Check if the cell is empty or contains only whitespace
//     if (!cell.textContent.trim()) {
//         // If empty, hide the cell
//         cell.style.display = 'none';
//     }
// });


        // let td4 = document.querySelector("#td4");
        // let tt4 = document.querySelector("#t-4");
        

        // if(td4.textContent.trim()=== ' '){
        //     tt4.style.display = "none";
        // }
        
        function prefixNav() {
    let navPrefix = document.querySelector("#navPrefix");
    navPrefix.style.display = "block";
    container1.style.display = "block";
     step3.style.display = "block";
    guideTable.style.display = "none";
    tempnavp.style.display = "none";
    showingClick.style.display = "block";

    // Hide headMain section if no data is being converted
    if (!calculationInProgress && !haveData) {
        headMain.style.display = "none";
    } else {
        headMain.style.display = "block";
    }
}

let tempost = document.querySelector("#tempost");
function postfixNav(){
    let navPostfix = document.querySelector("#navPostfix");
    navPostfix.style.display = "block";
    container1.style.display = "block";
    ansPost.style.display = "block";
    guideTable.style.display = "none";
    tempost.style.display = "none";
    showingClick.style.display = "block";

    // Hide headMain section if no data is being converted
    if (!calculationInProgress && !haveData) {
        headMain.style.display = "none";
    } else {
        headMain.style.display = "block";
    }
}

        function moveS6animate(){
            let step6 = document.querySelector("#step6");
            showingClick.appendChild(step6);
            setTimeout(function(){
                xb.style.display = "block";
            },800);
        }


 

        function toPrefix(){
            let tempnavp = document.querySelector("#tempnavp");
            clickPrefix.style.display = "block";
            labelPrefix.style.display = "block";
            enter.style.display = "block";
            clickClear.style.display = "none";
            logorev.style.display = "none";

            clickPostfix.style.display = "none";
            labelPostfix.style.display = "none";

            enterAnimation.style.display = "block";
            postfix.style.display = "none";
            prefix.style.display = "none";
            // tempnavp.style.display = "block";
        //   prefixNav();
       
          tempnavp.style.display = "block";
          guide.style.display = "block";
          displayGuide.style.display = "none";
          ansPost.style.display = "none";
          logorev.style.display = "none";
        }

      
        let guide2 = document.querySelector("#guide2");
        function toPostfix(){
            clickPostfix.style.display = "block";
            labelPostfix.style.display = "block";
            enter.style.display = "block";
            clickClear.style.display = "none";
            logorev.style.display = "none";

            clickPrefix.style.display = "none";
            labelPrefix.style.display = "none";
            
            enterAnimation.style.display = "block";
            postfix.style.display = "none";
            prefix.style.display = "none";

            tempost.style.display = "block";
            guide.style.display = "none";
            guide2.style.display = "block";
logorev.style.display = "none";

displayGuide.style.display = "none";

        }



function next5(){
    resultInfo.style.display = "block";
    nextb5.style.display = "none";
}

// function next4(){
 
   
//     nextb4.style.display = "none";
// }

function next3(){
    noParenthesesInfo.style.display = "block";
    operatorInfo.style.display="block";
    nextb3.style.display = "none";
    parenthesesInfo.style.display = "block";
}

function next2(){
    nextb2.style.display = "none";
    operandsInfo.style.display = "block";
}

function next1(){
    next.style.display = "none";
    stackInfo.style.display = "block";   
    // step2.innerHTML = "Operators are now stored on the Stack Whoever goes first or near the stack, is last";
    
    viewHere.style.display = "block";
    
}

let step3 = document.querySelector("#step3");

function guideClick(){

    container1.style.display = "none";
    guideTable.style.display = "block";
    guideTable.style.display = "flex";
    guideTable.style.justifyContent = "center";
    guideTable.style.paddingTop = "100px";
    prefix.style.display = "none";
    postfix.style.display = "none";
    headMain.style.display = "none";
    showingClick.style.display = "none";

    tempnavp.style.display = "none";
    navPrefix.style.display = "block";
    step3.style.display = "none";
}



function guideClick2(){

container1.style.display = "none";
guideTable.style.display = "block";
guideTable.style.display = "flex";
guideTable.style.justifyContent = "center";
guideTable.style.paddingTop = "100px";
prefix.style.display = "none";
postfix.style.display = "none";
headMain.style.display = "none";
showingClick.style.display = "none";

tempnavp.style.display = "none";
navPostfix.style.display = "block";
tempost.style.display = "none";
step3.style.display = "none";
ansPost.style.display = "none";
}


function precedence(operator) {
            switch (operator) {
                case '+':
                case '-':
                    return 1;
                case '*':
                case '/':
                    return 2;
                case '^':
                    return 3;
                default:
                    return 0;
            }
        }

        function isOperator(char) {
            return ['+', '-', '*', '/', '^'].includes(char);
        }

        function infixToPrefix(infix) {
            let prefix = '';
            let stack = [];

            for (let i = infix.length - 1; i >= 0; i--) {
                let currentChar = infix[i];

                if (isOperator(currentChar)) {
                    while (stack.length > 0 && precedence(stack[stack.length - 1]) > precedence(currentChar)) {
                        prefix += stack.pop();
                    }
                    stack.push(currentChar);
                } else if (currentChar === ')') {
                    stack.push(currentChar);
                } else if (currentChar === '(') {
                    while (stack.length > 0 && stack[stack.length - 1] !== ')') {
                        prefix += stack.pop();
                    }
                    stack.pop();
                } else {
                    prefix += currentChar;
                }
            }

            while (stack.length > 0) {
                prefix += stack.pop();
            }

            return prefix.split('').reverse().join('');
        }
        

let calculationComplete = false;
let calculationInProgress = false;
let haveData = false;
let displayGuide = document.querySelector("#displayGuide");


    document.getElementById('enter').addEventListener('keydown', function(event) {//dili maka space
      if (event.key === ' ') { // Check if the pressed key is space
        event.preventDefault(); // Prevent the default action (inserting a space)
      }
    });
    

        function convert() {

            if(haveData){
                return;
            }
 
        let enter = document.querySelector("#enter");
     
        let empty = enter.value.trim();
        


        if(empty === ""){
            alert("Enter a value");
        }else{


            step3.style.display = "block";
            // prefixNav();
            // tempnavp.style.display = "block";
        const enterAnimation = document.querySelector(".enterAnimation")
        enterAnimation.classList.add('animate');
        headMain.style.display = "block";

        let clickPrefix = document.querySelector("#clickPrefix");
        clickPrefix.style.visibility = "hidden";
        clickClear.style.display = "block";

            if(calculationInProgress){
                // alert("Please wait");
                return;
            }

            calculationInProgress = true;
            calculationComplete = true;


setTimeout(function(){
    next1();
},2000);
setTimeout(function(){
    next2();
},3000);
setTimeout(function(){
    next3();
},4000);
setTimeout(function(){
    next5();
    calculationComplete = true;
    
},5000);
// 
    let tableHere = document.getElementById('tableHere');
    let infixExpression = document.getElementById('enter').value;
    let prefixExpression = infixToPrefix(infixExpression);
    let operators = [];
    let parentheses = [];
    let operands = [];
    let operand = '';

    let table15 = document.querySelector("#table15");
    

    setTimeout(function(){
        let enteredV = document.getElementById('enter');
        let probC = enteredV.value;
        inputtedProb.innerHTML = "Inputted Problem" + "<br>" + probC;
    // inputtedProb.innerHTML = "Problem you want to convert "+ "<br>" + infixExpression;
    let operandsOnly = operands.join(' ');

    // Display operands in the upOperands section
    let upOperands = document.getElementById('upOperands');
    upOperands.innerText = "Updated operands: " + operandsOnly;
   
    },1000);
    next.style.display = "block";

    /////////////////////////////////////////////
    setTimeout(function(){
    document.getElementById('view').innerText = prefixExpression;//"Prefix Expression: " 

    let prefixLength = prefixExpression.length;

    // Clear existing content for tables 11 to 25
    for (let i = 11; i <= 25; i++) {
        document.getElementById(`table${i}`).innerHTML = '';
    }

    // Display prefixExpression in tables 11 to 25 starting from last index
    for (let i = prefixLength - 1; i >= 0; i--) {
        let table = document.getElementById(`table${11 + prefixLength - 1 - i}`);
        let row = table.insertRow();
        let substr = prefixExpression.substring(i); // Get substring from index i to the end
        for (let j = 0; j < substr.length; j++) {
            let cell = row.insertCell();
            cell.innerText = substr[j];
        }
    }

    // Count the number of tables being displayed (tables 11 to 25)
    let tablesDisplayed = Math.min(prefixLength, 15);

    // Update corresponding tb divs based on the number of tables displayed
    for (let k = 1; k <= 15; k++) {
        let tbDiv = document.getElementById('tb' + k);
        if (tbDiv) {
            if (k <= tablesDisplayed) {
                tbDiv.style.display = 'block'; // Display the div
            } else {
                tbDiv.style.display = 'none'; // Hide the div
            }
        }
    }

    moveS6animate();
}, 1000);


///////////////////////////////////////////////////////////////////////







///////////////////////////////////////////
// Define the function to check if a character is an operator
// Function to check if a character is an operator
function displayOperators(expression, tableIDs) {
    // Initialize an array to store operands and operators
    let items = [];
    // Initialize a counter to track the number of tables being used
    let tablesUsed = 0;

    // Extract operands and operators from the input expression
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        if (isOperator(char) || char === '(' || char === ')') {
            // For operators and parentheses, prepend them to the items array and set color to yellow
            items.unshift({ value: char, color: 'black' });
        } else {
            // For operands, prepend them to the items array and set color to blue
            items.unshift({ value: char, color: 'black'});
        }
    }
    
    // Display the items in the appropriate tables
    for (let j = 0; j < Math.min(items.length, tableIDs.length); j++) {
        let table = document.getElementById(tableIDs[j]);
        if (!table) {
            console.error(`Table ${tableIDs[j]} not found.`);
            continue;
        }
        // Increment the tablesUsed counter if the table is being used
        if (items[j]) {
            tablesUsed++;
        }
        table.innerHTML = ''; // Clear existing content of the table
        let row = table.insertRow(); // Insert a new row
        let cell = row.insertCell(); // Insert a new cell in the row
        let item = items[j];
        cell.innerText = item.value; // Set the content of the cell to the item

        // Apply the color based on the item's color property
        cell.style.color = item.color;

        // Shift the content to the right by copying content from the previous table
        if (j > 0) {
            let prevTable = document.getElementById(tableIDs[j - 1]);
            if (prevTable) {
                let prevCell = prevTable.rows[0].cells[0];
                cell.innerText += prevCell.innerText;
            }
        }
    }

    // Hide st divs that are not being used
    for (let k = 1; k <= tableIDs.length; k++) {
        let stDiv = document.getElementById('st' + k);
        if (stDiv) {
            if (k <= tablesUsed) {
                stDiv.style.display = 'block';
            } else {
                stDiv.style.display = 'none';
            }
        }
    }
}

// Your existing JavaScript code goes here...

// Extract expression from the source where it is being inputted (e.g., input field)
let infixExpression1 = document.getElementById('enter').value; // Get the input value

// Define the table IDs where you want to display the operators and operands
let tableIDs = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9', 't10', 't11', 't12', 't13', 't14', 't15'];

// Call the displayOperators function with the extracted expression and table IDs
displayOperators(infixExpression1, tableIDs);


///////////////////////////////////////////







    for (let i = 0; i < infixExpression.length; i++) {
        let char = infixExpression[i];
        if (isOperator(char)) {
            operators.push({ char: char, index: i });
        } else if (char === '(' || char === ')') {
            parentheses.push({ char: char, index: i });
        } else {
            operand += char;
        }
    }
    if (operand !== '') {
        operands.push(operand);
    }

    operators.sort((a, b) => a.index - b.index);
    parentheses.sort((a, b) => a.index - b.index);

    let combinedChars = operators.concat(parentheses);

    combinedChars.sort((a, b) => a.index - b.index);

    let opAndParenthesis = combinedChars.map(item => item.char).reverse();

    if(parentheses.length > 0){
        parenthesis.innerHTML = "Parenthesis are now cleared or Pop "+ "<br>" + parentheses.map(paren => paren.char).join(', ');
    }else{
        parentheses.innerHTML = "";
        let step4 = document.querySelector("#step4");
        step4.style.display = "none";
    }
    // moveS6animate();
    document.getElementById('view').innerText = "Prefix Expression: " + prefixExpression;
    // moveS6animate();
    tableHere.innerHTML = '';

     

    let i = opAndParenthesis.length - 1;
    let interval = setInterval(function() {
        if (i >= 0) {
            addCell(tableHere, opAndParenthesis[i]);
            i--;
        } else {
            clearInterval(interval);
            viewOperands.innerHTML = "Operands: " + operands.join(', ');
            enter.value = " ";
            cloneTableWithoutParentheses();
        }
    }, 1000);
    haveData = true;
}
}




function addCell(table, content) {
    let newRow = table.insertRow();
    newRow.style.textAlign = "center";
    let cell = newRow.insertCell();
    cell.innerText = content;
}

function cloneTableWithoutParentheses() {
    let tableHere = document.getElementById('tableHere');
    let clonedTable = document.createElement('table');
    clonedTable.setAttribute('id', 'noParenthesesTable');

    for (let i = 0; i < tableHere.rows.length; i++) {
        let row = tableHere.rows[i];
        let rowContainsParentheses = false;

        for (let j = 0; j < row.cells.length; j++) {
            let cellText = row.cells[j].innerText.trim();
            if (cellText === '(' || cellText === ')') {
                rowContainsParentheses = true;
                break;
            }
        }

        if (!rowContainsParentheses) {
            let newRow = clonedTable.insertRow();
            newRow.style.textAlign = "center";
            for (let j = 0; j < row.cells.length; j++) {
                let cellText = row.cells[j].innerText.trim();
                addCell(clonedTable, cellText);
            }
        }
    }

    let existingNoParenthesesTable = document.getElementById('noParenthesesTable');
    if (existingNoParenthesesTable) {
        existingNoParenthesesTable.remove();
    }

    document.getElementById("noParentheses").appendChild(clonedTable);
}

function clearInfo() {

    if(calculationComplete){
        location.reload();
}else{
    // alert("please wait until calculation is complete")
}
}






function next5(){
    resultInfo.style.display = "block";
    nextb5.style.display = "none";
}

function next3(){
    noParenthesesInfo.style.display = "block";
    operatorInfo.style.display="block";
    nextb3.style.display = "none";
    parenthesesInfo.style.display = "block";
}

function next2(){
    nextb2.style.display = "none";
    operandsInfo.style.display = "block";
}

function next1(){
    next.style.display = "none";
    stackInfo.style.display = "block";   
    viewHere.style.display = "block";
}

function precedence(operator) {
            switch (operator) {
                case '+':
                case '-':
                    return 1;
                case '*':
                case '/':
                    return 2;
                case '^':
                    return 3;
                default:
                    return 0;
            }
        }

        function isOperator(char) {
            return ['+', '-', '*', '/', '^'].includes(char);
        }

        function infixToPostfix(infix) {
            let postfix = '';
            let stack = [];

            for (let i = 0; i < infix.length; i++) {
                let currentChar = infix[i];

                if (!isOperator(currentChar) && currentChar !== '(' && currentChar !== ')') {
                    postfix += currentChar;
                } else if (isOperator(currentChar)) {
                    while (stack.length > 0 && precedence(stack[stack.length - 1]) >= precedence(currentChar)) {
                        postfix += stack.pop();
                    }
                    stack.push(currentChar);
                } else if (currentChar === '(') {
                    stack.push(currentChar);
                } else if (currentChar === ')') {
                    while (stack.length > 0 && stack[stack.length - 1] !== '(') {
                        postfix += stack.pop();
                    }
                    stack.pop(); // Remove the opening parenthesis from the stack
                }
            }

            while (stack.length > 0) {
                postfix += stack.pop();
            }

            return postfix;
        }

        function postFix() {

            if(haveData){
                return;
            }

            calculationComplete = true;
            calculationInProgress = false;
            
            if(calculationInProgress){
                // alert("Please wait");
                return;
            }

            calculationInProgress = true;

        let enter = document.querySelector("#enter");
        let empty = enter.value.trim();

        if(empty === ""){
            alert("Enter a value");
        }else{
            ansPost.style.display = "block"
        clickClear.style.display = "block";
        clickPostfix.style.visibility = "hidden";
            headMain.style.display = "block";
            const enterAnimation = document.querySelector(".enterAnimation")
            enterAnimation.classList.add('animate');

setTimeout(function(){
    next1();
},2000);
setTimeout(function(){
    next2();
},3000);
setTimeout(function(){
    next3();
},4000);
setTimeout(function(){
    next5();
    calculationComplete = true;
    
},5000);


    let tableHere = document.getElementById('tableHere');
    let infixExpression = document.getElementById('enter').value;
    let postfixExpression = infixToPostfix(infixExpression);
    let operators = [];
    let parentheses = [];
    let operands = [];
    let operand = '';
    

    

    setTimeout(function(){
        let enteredV = document.getElementById('enter');
        let probC = enteredV.value;
        inputtedProb.innerHTML = "Inputted Problen " + "<br>" + probC;
     // inputtedProb.innerHTML = "Problem you want to convert"+ "<br>" + postfixExpression;
    
    let operandsOnly = operands.join(' ');

// Display operands in the upOperands section
let upOperands = document.getElementById('upOperands');
upOperands.innerText = "Updated operands: " + operandsOnly;
    },1000);
    next.style.display = "block";




////////////////////
setTimeout(function(){
    document.getElementById('view').innerText = "Postfix Expression: " + postfixExpression;

    let postfixLength = postfixExpression.length;

    // Clear existing content for tables 11 to 25
    for (let i = 11; i <= 25; i++) {
        document.getElementById(`table${i}`).innerHTML = '';
    }

    // Display postfixExpression in tables 11 to 25 starting from last index
    for (let i = postfixLength - 1; i >= 0; i--) {
        let table = document.getElementById(`table${11 + postfixLength - 1 - i}`);
        let row = table.insertRow();
        let substr = postfixExpression.substring(i); // Get substring from index i to the end
        for (let j = 0; j < substr.length; j++) {
            let cell = row.insertCell();
            cell.innerText = substr[j];
        }
    }

    // Count the number of tables being displayed (tables 11 to 25)
    let tablesDisplayed = Math.min(postfixLength, 15);

    // Update corresponding tb divs based on the number of tables displayed
    for (let k = 1; k <= 15; k++) {
        let tbDiv = document.getElementById('tb' + k);
        if (tbDiv) {
            if (k <= tablesDisplayed) {
                tbDiv.style.display = 'block'; // Display the div
            } else {
                tbDiv.style.display = 'none'; // Hide the div
            }
        }
    }

    // moveS6animate();
}, 6000);


///////////////////////////////////////////////////////////////////////






/////////////////////////////////////////////////////////////////////////////////
function displayOperators(expression, tableIDs) {
    // Initialize an array to store operands and operators
    let items = [];
    // Initialize a counter to track the number of tables being used
    let tablesUsed = 0;

    // Extract operands and operators from the input expression
    for (let i = 0; i < expression.length; i++) {
        let char = expression[i];
        if (isOperator(char) || char === '(' || char === ')') {
            // For operators and parentheses, prepend them to the items array and set color to yellow
            items.unshift({ value: char, color: 'black' });
        } else {
            // For operands, prepend them to the items array and set color to blue
            items.unshift({ value: char, color: 'black'});
        }
    }
    
    // Display the items in the appropriate tables
    for (let j = 0; j < Math.min(items.length, tableIDs.length); j++) {
        let table = document.getElementById(tableIDs[j]);
        if (!table) {
            console.error(`Table ${tableIDs[j]} not found.`);
            continue;
        }
        // Increment the tablesUsed counter if the table is being used
        if (items[j]) {
            tablesUsed++;
        }
        table.innerHTML = ''; // Clear existing content of the table
        let row = table.insertRow(); // Insert a new row
        let cell = row.insertCell(); // Insert a new cell in the row
        let item = items[j];
        cell.innerText = item.value; // Set the content of the cell to the item

        // Apply the color based on the item's color property
        cell.style.color = item.color;

        // Shift the content to the right by copying content from the previous table
        if (j > 0) {
            let prevTable = document.getElementById(tableIDs[j - 1]);
            if (prevTable) {
                let prevCell = prevTable.rows[0].cells[0];
                cell.innerText += prevCell.innerText;
            }
        }
    }

    // Hide st divs that are not being used
    for (let k = 1; k <= tableIDs.length; k++) {
        let stDiv = document.getElementById('st' + k);
        if (stDiv) {
            if (k <= tablesUsed) {
                stDiv.style.display = 'block';
            } else {
                stDiv.style.display = 'none';
            }
        }
    }
}

// Your existing JavaScript code goes here...

// Extract expression from the source where it is being inputted (e.g., input field)
let infixExpression1 = document.getElementById('enter').value; // Get the input value

// Define the table IDs where you want to display the operators and operands
let tableIDs = ['t1', 't2', 't3', 't4', 't5', 't6', 't7', 't8', 't9', 't10', 't11', 't12', 't13', 't14', 't15'];

// Call the displayOperators function with the extracted expression and table IDs
displayOperators(infixExpression1, tableIDs);

////////////////////////////////////////////////////////////////////////////////////



function displayInputtedOperators(expression, tableID) {//para nis postfix na stack
    // Get the table element
    let table = document.getElementById(tableID);

    // Clear existing content of the table
    table.innerHTML = '';

    // Initialize an array to store operators and parentheses
    let inputtedSymbols = [];

    // Iterate through the expression
    for (let i = expression.length - 1; i >= 0; i--) {
        let char = expression[i];

        // Check if the character is an operator or a parenthesis
        if (isOperator(char) || char === '(' || char === ')') {
            // Add the operator or parenthesis to the array
            inputtedSymbols.push(char);
        }
    }

    // Iterate through the array of inputted operators and parentheses
    for (let i = 0; i < inputtedSymbols.length; i++) {
        let symbol = inputtedSymbols[i];

        // Create a new row in the table
        let row = table.insertRow();

        // Create a new cell in the row
        let cell = row.insertCell();

        // Set the content of the cell to the current symbol
        cell.innerText = symbol;

        // Apply styling to the cell
        cell.style.color = 'black';
    }
}
// Call the displayInputtedOperators function with the infix expression and table ID
 infixExpression = document.getElementById('enter').value;
displayInputtedOperators(infixExpression, 'postOpAndPar');





    for (let i = 0; i < infixExpression.length; i++) {
        let char = infixExpression[i];
        if (isOperator(char)) {
            operators.push({ char: char, index: i });
        } else if (char === '(' || char === ')') {
            parentheses.push({ char: char, index: i });
        } else {
            operand += char;
        }
    }
    if (operand !== '') {
        operands.push(operand);
    }

    operators.sort((a, b) => a.index - b.index);
    parentheses.sort((a, b) => a.index - b.index);

    let combinedChars = operators.concat(parentheses);

    combinedChars.sort((a, b) => a.index - b.index);

    let opAndParenthesis = combinedChars.map(item => item.char);
    

    if(parentheses.length > 0){
        parenthesis.innerHTML = "Parentheses are now cleared or Pop "+ "<br>" + parentheses.map(paren => paren.char).join(', ');
    }else{
        parentheses.innerHTML = "";
        step4.style.display = "none";
    }

    document.getElementById('view').innerText = "Postfix Expression: " + postfixExpression;
    moveS6animate();
    tableHere.innerHTML = '';

    

    let i = opAndParenthesis.length - 1;
    let interval = setInterval(function() {
        if (i >= 0) {
            addCell(tableHere, opAndParenthesis[i]);
            i--;
        } else {
            clearInterval(interval);
            viewOperands.innerHTML = "Operands: " + operands.join(', ');
            enter.value = " ";
            cloneTableWithoutParentheses();
        }
    }, 1000);
    haveData = true;
}

}

function addCell(table, content) {
    let newRow = table.insertRow();
    newRow.style.textAlign = "center";
    let cell = newRow.insertCell();
    cell.innerText = content;
}

function cloneTableWithoutParentheses() {
    let tableHere = document.getElementById('tableHere');
    let clonedTable = document.createElement('table');
    clonedTable.setAttribute('id', 'noParenthesesTable');

    for (let i = 0; i < tableHere.rows.length; i++) {
        let row = tableHere.rows[i];
        let rowContainsParentheses = false;

        for (let j = 0; j < row.cells.length; j++) {
            let cellText = row.cells[j].innerText.trim();
            if (cellText === '(' || cellText === ')') {
                rowContainsParentheses = true;
                break;
            }
        }

        if (!rowContainsParentheses) {
            let newRow = clonedTable.insertRow();
            newRow.style.textAlign = "center";
            for (let j = 0; j < row.cells.length; j++) {
                let cellText = row.cells[j].innerText.trim();
                addCell(clonedTable, cellText);
            }
        }
    }

    let existingNoParenthesesTable = document.getElementById('noParenthesesTable');
    if (existingNoParenthesesTable) {
        existingNoParenthesesTable.remove();
    }

    document.getElementById("noParentheses").appendChild(clonedTable);
}

function clearInfo() {
    if(calculationComplete){
        location.reload();

}else{
    // alert("please wait until calculation is complete")
}
}
// toPostfix();
