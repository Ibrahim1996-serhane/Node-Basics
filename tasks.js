
/**
 * Starts the application
 * This is the function that is run when the app starts
 * 
 * It prints a welcome line, and then a line with "----",
 * then nothing.
 *  
 * @param  {string} name the name of the app
 * @returns {void}
 */
function startApp(name){
  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', onDataReceived);
  console.log(`Welcome to ${name}'s application!`)
  console.log("--------------------")
}


/**
 * Decides what to do depending on the data that was received
 * This function receives the input sent by the user.
 * 
 * For example, if the user entered 
 * ```
 * node tasks.js batata
 * ```
 * 
 * The text received would be "batata"
 * This function  then directs to other functions
 * 
 * @param  {string} text data typed by the user
 * @returns {void}
 */
function onDataReceived(text) {
  if (text === 'quit\n' || text === 'exit\n') {
    quit();
  }
  else if(text === 'hello\n'){
    hello();
  }
  else if (text.slice(0, 5) === "hello") {
    batata(text); 
  }
  else if(text === 'help\n'){
    help();
  }
  else if(text === 'list\n'){
   list();
  }
  else if(text.trim().slice(0,3)==='add'){
    add(text);
   }
  else{
    unknownCommand(text);
  }
}
const tasks = ["Read a book", "Organize office","Meet George"];

function add(x) {
  
    if(x.trim()==="add"){
      console.log("Error! enter a value!!!")
    }
    else{
      tasks.push(x);
      console.log(tasks);
    }
  } 
function list(){
  console.log(tasks);
}

function batata(text){
  console.log(text.replace("\n","")+"!");
}
function help(){

 console.log("quit: quits the application\n");
 console.log("exit: quits the application\n");
 console.log("hello W/ ----   : hello ---!  ") ;
}
/**
 * prints "unknown command"
 * This function is supposed to run when all other commands have failed
 *
 * @param  {string} c the text received
 * @returns {void}
 */
function unknownCommand(c){
  console.log('unknown command: "'+c.trim()+'"')
}


/**
 * Says hello
 *
 * @returns {void}
 */
function hello(){
  console.log('hello!')
}


/**
 * Exits the application
 *
 * @returns {void}
 */
function quit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}
function exit(){
  console.log('Quitting now, goodbye!')
  process.exit();
}


// The following line starts the application
startApp("Ibrahim Serhane")
