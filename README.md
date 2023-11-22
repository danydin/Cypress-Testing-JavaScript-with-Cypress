## to run the website (next.js) & the cypress (the testing tool):
npm run dev (start the next.js server-website)
npx cypress open (to run the cypress configuration which install the cypress and its config in the dir you run the command from - this command also run the portal to run the tests from)
## cypress block code 
callback function simply means passing a function into another function
desrcibe is the block code for multiple tests, it is a block for individual test - both blocks takes 2 args, a name of the test and a function (callback function) that will be passed to the describe/it inside cypress framework
cy is a global(no need to import it) object that you can run different methods on it such as click, visit sites, type etc etc (basically anything you can do with keyboard / mouse)
* cypress is ASYNC (yield their subject - commands are async and get queued for execuation at a later time using .then INSTEAD of storing in vars) so whatever RETURN from you current subject/callback command becomes the new subject and will flow into the follwoing command & DO NOT return their subject/objects (const button = cy.get("button) WILL NOT WORK). .then is a cypress command not a promise js, so async/await commands will NOT work within your cypress tests. you can use const cls as an assertion with the subject of the cypress object e.g:
cy.get('button').then(($btn) => {
    const cls = $btn.attr('class')
    //..
})
if undefnied return from the cypress callback function (subject/command) the subject will not be modifed and will instead carry over to the next command. as cypress is async any .then() command will wait for each .then() to be resolved before continuing through its chain of commands. if we want to make an assertion (test check) on a specific DOM element (button, h3 etc) we need to wrap it first (to make the object assertable by cypress) by using the .wrap() command. 