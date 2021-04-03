const short26 = require('./algo/short26');
const compress = require('./algo/compress');
const short36 = require('./algo/short36');
const decompress = require('./algo/decompress');
const unshort36 = require('./algo/unshort36');
const unshort26 = require('./algo/unshort26');
const cors = require('cors');

module.exports = (app)=>{
app.get('/',(req,res)=>{
    res.send('server is up and running');
})

app.post('/shortstring',(req,res)=>{
    var data=req.body.item;
    
    var j=0;
    for(var i=0;i<data.length;i++)
    {
        if(data[i]<'a' || data[i]>'z')
        j=1;
    }

    var data26=short26(data);
    
    data=compress(data);
    
    var data36;
    data36=short36(data);
    data36=data36+String.fromCharCode(255);
    if(j===1 )
    {
        data='please enter in lowercase only';
      res.send({'ok':data})
    }
    else if(data26.length < data36.length){
    res.send({'ok':data26});
    }
    else{
        res.send({'ok':data36});
    }
})

app.post('/converttooriginal',(req,res)=>{
      
    var data=req.body.item;
    var j=data.length;
    if(data[j-1]===String.fromCharCode(255)){
     var a=[];
     for(var i=0;i<data.length-1;i++)a.push(data[i]);
     data=a;

     data=unshort36(data);
     data=decompress(data);
     res.send({'ok':data});
    }
    else{
    data=unshort26(data);
    res.send({'ok':data});
    }
       
    

})
}