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

app.post('/shortstring',cors(),(req,res)=>{
    var data=req.body.item;
    console.log(data);
    var data26=short26(data);
    
    data=compress(data);
    
    var data36;
    data36=short36(data);
    data36=data36+String.fromCharCode(255);

    if(data26.length < data36.length){
    res.send({'ok':data26});
    }
    else{
        res.send({'ok':data36});
    }
})

app.post('/converttooriginal',cors(),(req,res)=>{
      
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