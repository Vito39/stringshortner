const unshort26 = (data) =>{
       
    var a = new Map();
    var j=0;
    for(i=48;i<=57;i++){a.set(String.fromCharCode(i),j);j++;}
    for(i=65;i<=90;i++){a.set(String.fromCharCode(i),j);j++;}
    for(i=97;i<=122;i++){a.set(String.fromCharCode(i),j);j++;}
    
    var base=27;

     var b = [];

     for(i=0;i<data.length;i=i+4)
     {
        var c="";
        var j=i;
        var d=0;
        var p=1;
        for(j=i;j<i+4 && j<data.length;j++){
            d+=a.get(data[j])*p;
            p*=62;
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

module.exports = unshort26;