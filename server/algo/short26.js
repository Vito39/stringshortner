const short26 = (data) =>{

      var a = [];
      for(i=48;i<=57;i++)
     a.push(String.fromCharCode(i));

     for(i=65;i<=90;i++)
     a.push(String.fromCharCode(i));

     for(i=97;i<=122;i++)
     a.push(String.fromCharCode(i));
      

      var base=62;

     var b = [];

     for(i=0;i<data.length;i=i+5)
     {
        var c="";
        var j=i;
        var d=0;
        var p=1;
        for(j=i;j<i+5 && j<data.length;j++){
            d=d+(data.charCodeAt(j)-97+1)*p;p=p*27;}
        
        while(d>0)
        {
            c=c+a[d%base];
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