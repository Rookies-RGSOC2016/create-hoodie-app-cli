
var fs = require('fs')
var child = require('child_process').exec;
var exec = require('child_process').exec;
var dir = './tmp';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}
  fs.writeFile("tmp/package.json",JSON.stringify({
    name: "tmp",
    script: "tmp",
    version: "1.0.0",
    description: "",
    main: "index.js",
    keywords: [],
    author: "",
    license: "ISC",
    scripts: {
      start: "hoodie",
      test: "echo \"Error: no test specified\" && exit 1"
  }
  },
    null,2), function(err) {
      if(err) {
          console.log("error"+err)
      } else {
          console.log("The file was saved!");
      }
  })

 exec('npm install hoodie --save', {
   cwd: 'tmp'
 }, function(error, stdout, stderr) {
   console.log('stdout: ' + stdout);
   console.log('stderr: ' + stderr);
   if (error !== null) {
        console.log('exec error: ' + error);
   }
 });

// child('npm start', {
//   cwd: 'tmp'
// }, function(error, stdout, stderr) {
//   console.log('stdout: ' + stdout);
//   console.log('stderr: ' + stderr);
//   if (error !== null) {
//        console.log('exec error: ' + error);
//   }
// });
//

console.log('hello world')
