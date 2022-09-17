const http=require('http')

const server1=http.createServer( (req, res)=> {
    console.log(req);
    res.write('Hello World testterst    !'); //write a response to the client
    res.end(); //end the response
  });

  server1.listen(8800)