function haveCommonDigits(cur,toComp){
    var i=cur,j;
    var find=0;
    var valToTest,valToTest2;
    while(i>0&&!find){
       valToTest=i%10;
       j=toComp;
       valToTest2=j%10;
       while(j>0&&!(find=(valToTest===valToTest2))){
          j=Math.floor(j/=10);
        
           valToTest2=j%10;
           } 
       i=Math.floor(i/=10);
    }
    return find;
}

function splitByDigit(tab,res){
    var canAdd,ind=0,ind2=0;
    for(let i=0;i<tab.length;i++){
        canAdd=1;
        let j=0;
        while(j<tab.length&&canAdd){
           canAdd&=!haveCommonDigits(tab[i],tab[j])||i==j;
           j++;          
        }
        if(canAdd){
            res[0][ind]=tab[i];
            ind++;
       }          
       else{
           res[1][ind2]=tab[i];
          ind2++;
        }
        canAdd=1;
        
    }
}

function exchange(a,b){return [b,a];}
 
var belongAt=(a,b)=>{
     let i=0;
     while(i<b.length&&!haveCommonDigits(b[i],a)){
         i++;
     }
      return b.length==i?-1:i;
 }

function main(entry) {
    let numbers=entry.split(",").map(x=>parseInt(x));
    let res=[];
    res[0]=[];
    res[1]=[];
    let sumMax=0;
   var disp=document.getElementById("res"); 
  disp.innerHTML="numbers: "+numbers+"<br/>"+disp.innerHTML;
    splitByDigit(numbers,res);
    let valToDisp="detail:<br/>";
    for(let i=0;i<res[0].length;i++){
        valToDisp+=sumMax+"+"+res[0][i];
        sumMax+=res[0][i];
       valToDisp+="="+sumMax+"<br/>";
    }
    
    let s;
    let filter=new Array();

    for(let i=0;i<res[1].length;i++){
        j=i+1
        while(j<res[1].length-1){
            if(haveCommonDigits(res[1][i],res[1][j])){
                if(res[1][i]<res[1][j]){
                     [res[1][i],res[1][j]]= exchange(res[1][i],res[1][j]);
                }
            }
         j++;
      }
      indRes=belongAt(res[1][i],filter);
      
      if(indRes==-1){
           filter[filter.length]=res[1][i];
      }
      else{
          if(filter[indRes]<res[1][i]){
           [res[1][i],filter[indRes]]= exchange(res[1][i],filter[indRes]);
          }
              
      }
    }   
   
    for(let r of filter){
    valToDisp+=sumMax;
        sumMax+=r;
       valToDisp+="+"+r+"="+sumMax+"<br/>";
    }
    disp.innerHTML=valToDisp+disp.innerHTML;
    disp.innerHTML="sumMax: "+sumMax+"<br/>"+disp.innerHTML;
}
