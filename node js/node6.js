var fs=require('fs');
var data=fs.readFileSync('h.txt');
console.log(data.toString().length);

data=data.toString()+' '+'university';
console.log(data);
fs.writeFile("sync.txt",data);