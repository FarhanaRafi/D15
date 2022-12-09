//JS EXERCISES
        
//     21) Given variables x = "John" and y = "Doe", write on the console "John <> Doe"

let x = "John"
let y ="Doe"
console.log(`${x} <> ${y}`)

// 22) Create an object with properties such name, surname, email
 let me = { name: "Farhana",
            surName: "Rafi",
            email: "abc@gmail.com",
          }

 // 23) Delete the email property from the previously created object

 let deleteMail = delete me.email;
 console.log("After Deleting email:", me);


//24) Create an array with 10 strings in it
let arrayOfColors = [ "red", "orange", "green", "yellow", "blue","violet", "indigo", "pink", "black", "brown" ]

// 25) Print in the console every string from the previous array
 for(let i = 0; i< arrayOfColors.length; i++){
    let string = arrayOfColors[i]
console.log("Created string:" , string)}

// 26) Create an array with 100 random numbers in it
let randomNumbers = []
let arrayLength = 100
for(let i = 0; i < arrayLength; i++){
    randomNumbers.push(Math.floor(Math.random()*1001))
}
console.log(randomNumbers)

// 27) Write a function to get the maximum and minimum values from the previously created array

function maximumNumber(array){
    return Math.max(...randomNumbers)
}
 let maxNumber = maximumNumber(randomNumbers)
 console.log(maxNumber)

 function minimumNumber(array){
    return Math.min(...randomNumbers)
}
 let minNumber = minimumNumber(randomNumbers)
 console.log(minNumber)

 //  28) Create an array of arrays, in which every array has 10 random numbers

 function getArrayOfArrays (limit){
    let arrayOfArray = []
    for(let i = 0; i < limit; i++){
        arrayOfArray.push(getRandomNumArray())
    }
    return arrayOfArray
 }


 function getRandomNumArray(){
    let randomNumber = []
    for(let i = 0; i < 10; i++){
        randomNumber.push(Math.floor(Math.random()*101))
    }
    return randomNumber;
 }

 let arrayOfArrays = getArrayOfArrays(5)
 console.log("Array of array:", arrayOfArrays)

 // 29) Create a function that gets 2 arrays as parameters and returns the longest one

 function getLongestArray(array1, array2){
    if(array1.length > array2.length){
        return array1
    }else {
        return array2
    }
 }

 let longestArray = getLongestArray(randomNumbers, arrayOfColors)
 console.log(longestArray)

 // 30) Create a function that gets 2 arrays of numbers as parameters and 
 //   returns the one with the higher sum of values
function getHighestSum(array1, array2){
    let sum = 0
    for(let i =0; i < array1.length; i++ ){
        sum += array1[i]
    }
        let sum2 = 0
        for(let i =0; i < array2.length; i++ ){
            sum2 += array2[i]
     }
     if(sum > sum2){
        return array1
    }else {
        return array2
    }

}

 let sum1Array =[5, 7, 9, 80 ,9,5]
 let sum2Array= [8, 70,2, 9, 6,7]
 

 

 let highestSum = getHighestSum(sum1Array, sum2Array)
 console.log(highestSum)

 //DOM EXERCISES
//  31) Get the element with an id of "container" from the page
let container = document.getElementById("container")

// 32) Get every <td> element from the page]
let tableColumn = document.getElementsByTagName("td")

// 33) Use a loop for printing the text inside of every <td> element in the page
function printTds(){
    let tableColumn = document.getElementsByTagName("td") 
for(let i = 0; i <tableColumn.length; i++){
    let tds= tableColumn[i]
   let printTd = tds.innerText
   console.log(printTd)
}
}

// 34) Write a function to change the heading of the page


function changeTitle(newTitle){
    let h1Node = document.getElementById("title")
    h1Node.innerText= newTitle;
}

//  35) Write a function to add an extra row to the table

    function addRow(){
        let table = document.getElementsByTagName("table")[0]
        let createRow = document.createElement("tr")
        let addClass = createRow.classList.add("row")
        let createdRow = table.appendChild(createRow)
        
    }

    // 36) Write a function to add a class of "test" to each row in the table
    function addClassToRow(){
        let tableRowNode = document.getElementsByTagName("tr")
        for(let i=0; i< tableRowNode.length; i++){
            let rowNode =tableRowNode[i]
         rowNode.classList.add("test")
        }
    }

    // 37) Write a function to add a red background to every link in the page
    function linkBackground(){
        let link = document.getElementsByTagName("a")
        for(let i = 0; i< link.length; i ++){
            let changeBackground = link[i]
            changeBackground.style.backgroundColor = "red"
        }    }

        // 38) Console log "Page loaded" when the page is correctly loaded
        function onLoadAction(){
            console.log("Page Loaded")
            let tags = document.getElementsByTagName("a")
            for(let i = 0; i < tags.length; i++) {
                tags[i].addEventListener('mouseover', function(event) {
                    alert(event.target)
                })
            }
            let h1Node = document.getElementsByTagName("h1")[0]
            h1Node.addEventListener("click", removeLastLetter)

            let tdNodes = document.getElementsByTagName("td")
            for(let i = 0; i < tdNodes.length; i++) {
                tdNodes[i].addEventListener("click", changeBackgroundColor)
            }
        }
        

// 39) Write a function to add new items to a unordered list
function newItem(newItem){
    let newItemInUl = document.getElementsByTagName("ul")[0]
    let liNode = document.createElement("li")
    liNode.innerText = newItem
    newItemInUl.appendChild(liNode)
}

  // 40) Write a function to empty a list 
  function removeAll(){
    let olNode = document.getElementById("o-list").childNodes
    for(let i =0; i<olNode.length; i++){
    olNode[i].innerHTML = " "
    }
  }

 // EXTRA EXERCISES

 //41) Add an eventListener to show an alert when the cursor hovers a link, 
   //displaying its href property
    


 // 42) Create a button that will hide every image on the page when clicked
      function hideImage(){
        let image = document.getElementsByTagName("img")
        for(let i = 0; i < image.length; i++){
            let allImages = image[i]
            allImages.hidden = true
        }
      }
   
 //43) Create a button that will hide or show the table on the page when clicked
      function hideTable(){
        let tableVisibility = document.getElementsByTagName("table")[0]
        tableVisibility.classList.toggle("imgvisibility")
      }

 // 44) Write a function for calculating the sum of every number inside all the table 
   //cells (if their content is numeric)

   function getTableSum() {
        let tableCells = document.getElementsByTagName("td")
        let sum = 0
        for(let i=0; i<tableCells.length; i ++) {
        if(!isNaN(tableCells[i].innerText)) {
            sum = sum+parseInt(tableCells[i].innerText)
        } 
        }
      return sum
   }


// 45) Delete the last letter from the heading each time the user clicks on it
        function removeLastLetter(event){
            let h1Node = document.getElementsByTagName("h1")[0]
            
            h1Node.innerText = h1Node.innerText.slice(0, -1)
        }
    
 // 46) Change the background color of a <td> if the user clicks on it
        
        function changeBackgroundColor(event){
            event.target.style.backgroundColor = "#ff6600"
            
        }
       // 47) Add a delete button at the bottom of the table, when clicked it should delete a random <td>

        
       // 48) Add automatically a pink border to a cell when the mouse hovers it
        //49) Write a function to create a table with 4 rows and 3 columns programmatically and add it to the bottom of the page
       // 50) Write a function to remove the last table from the page

       window.onload = onLoadAction