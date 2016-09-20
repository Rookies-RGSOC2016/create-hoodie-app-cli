console.log('hello world')
var exec = require('child_process').exec;
var    child;

// get exec from that utily, give the command you want to run as it's first argument
 child = exec('npm install ffi',
 function (error, stdout, stderr) {
 // these are the result, somehow, it's devided to when there's error, or output etc.
     console.log('stdout: ' + stdout);
     console.log('stderr: ' + stderr);
     if (error !== null) {
          console.log('exec error: ' + error);
     }
 });
