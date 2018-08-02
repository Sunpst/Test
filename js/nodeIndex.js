const http = require('http');
var fs = require('fs');
var path = require('path');
var jexcel=require('json2excel');
var sheet1={
    header: {
        'author': 'Author Name',
        'title': 'Article Title'
    },
    items: [
        {
            author:'john',
            title:'how to use this'
        },
        {
            author:'Bob',
            title:'so Easy'
        }
    ],
    sheetName: 'sheet1'  //
};
 
var data = {
    sheets: [sheet1],
    filepath: path.join(path.resolve(__dirname, '../..'),"xls/j2x.xlsx")
}
const hostname = '127.0.0.1';
const port = 8020;
const server = http.createServer((req, res) => {
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Hello World\n');
});
server.listen(port, hostname, () => {
console.log(`Server running at http://${hostname}:${port}/`);
 
fs.writeFile(path.join(path.resolve(__dirname, '../..'),"xls/output.txt"), "Hello World!", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("File saved successfully!");
});
 
 
jexcel.j2e(data,function(err){
    console.log('finish')
});
});
 
 
