const decompress = (data) =>{
   
    var a="";
    for(var i=0;i<data.length;i++)
    {
        if(data[i]>='a' && data[i]<='z')
        {
         var j=i+1;
          var c="";
          while(j<data.length && data[j]>='0' && data[j]<='9' ){ c=c+data[j];j++;}
          if(c==="")c=1;
          var f = parseInt(c,10);
          while(f>0)
          {
              a=a+data[i];f--;
          }
        }  
    }
    return a;
}

module.exports = decompress;