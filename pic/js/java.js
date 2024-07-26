let arr=[1,2,3,4,5];
        
function chunk(arr,size){ 
     let tarr=[];
     let rarr=[];
    let j=0,i=0;
     let tn=Math.floor(arr.length/size);
    
     for( i=0;i<tn;i++){

        for( j=i*size;j<size*(i+1);j++){
            tarr.push(arr[j]);   
        }

         rarr.push(tarr);
         tarr=[];
     }

     for(let k=i*size;k<arr.length;k++){
        tarr.push(arr[k]);
     }
     rarr.push(tarr);


        
    return rarr;
}
let data = chunk(arr,2);
console.log(data);