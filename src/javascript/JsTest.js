var cp  = require('child_process');
var fs = require('fs')



runXML =  function(){
 
fs.copyFile("c:/users/nidhi.joshi/downloads/testNG.xml", "C:/Users/nidhi.joshi/eclipse-workspace/seleniumUI/testNG.xml", function(err){

  // fs.unlink("c:/users/nidhi.joshi/downloads/testNG.xml", function(err){
    // if(err){
      // console.log("Error encountered while deleting file from downloads")
      
    // }
    // else{
      // console.log("Deleted successfully")
      cp.execFile("C:\\Users\\nidhi.joshi\\eclipse-workspace\\seleniumUI\\Test.java", function(err){
        console.log("error")
      })
    // }
  // })
})
}
runXML();