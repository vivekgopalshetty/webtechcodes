var fs=require('fs');
var data=fs.readFileSync('h.txt');

var buf1=new Buffer(data);
console.log(buf1.length);
console.log(data.toString());
console.log(buf1.slice(0,10).toString());

var fd=fs.open('sync.txt','w+');
fs.writeFile(fd,data);

len=buf1.write('simply learn');
console.log(len);