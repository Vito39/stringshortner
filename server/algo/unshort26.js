const short26 = (data) =>{
       
    var a = new Map();
    var j=0;
    for(i=33;i<=126;i++)
   {a.set(String.fromCharCode(i),j);j++;}
    for(i=161;i<=255;i++)
    {a.set(String.fromCharCode(i),j);j++;}

    var base=27;

     var b = [];

     for(i=0;i<data.length;i=i+2)
     {
        var c="";
        var j=i;
        var d=0;
        var p=1;
        for(j=i;j<i+2 && j<data.length;j++){
            d+=a.get(data[j])*p;
            p*=141;
        }
        
        while(d>0)
        {
            c= c + String.fromCharCode(d%base+97-1) ;
            d=d/base;
            d=Math.floor(d);
        }
        for(var k=0;k<c.length/2;k++){
            var t=c[k];
            c[k]=c[c.length-k-1];
            c[c.length-k-1]=t;
        }
        
        b+=c;
     }

    return b;

}

module.exports = short26;