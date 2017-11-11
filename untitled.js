var http = require("http");
var PORT = 7000;
var PORT2 = 7500;

var server = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);



function handleRequest(request,response) {
	response.end("Good Things!");
}
server.listen(PORT, function() {
	console.log("Server is on");
})



function handleRequest2(request,response) {
	response.end("Bad things :-(");
}
server2.listen(PORT2, function() {
	console.log("Server2 is on");
})