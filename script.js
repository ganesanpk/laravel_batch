const arr =[20,40,15,23,25];
console.table(arr);
console.log(arr.length);
var count=0;
for(var i=0; i < arr.length; i++){
    console.log("index :"+i+" "+arr[i]);
    count +=arr[i];
}
console.log("count :"+count); 