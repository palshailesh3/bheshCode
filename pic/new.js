let arr = [24,12,32,1];
let check=arr[0];
let first;
let count;
let i;
for(let j=0;j<2;j++){
    for(i=j;i<arr.length;i++){
        if(check<arr[i]){
         check=arr[i];
            count=i;
        }

     }
   first=arr[i];
   arr[count]=check;
   arr[j]=first;
}
console.log(arr[count]);