const compress = (data) =>{
   

    var a="";
    for(var i=0;i<data.length;i++)
    {
      var j=i;
      var c=0;
      while(data[i]===data[j]){ j++;c++;}
      
      if(c>1)
      {a = a + data[i]+ c.toString();}
      else
      {a = a + data[i];}

      i=j-1;
    }
    return a;
}

module.exports = compress;