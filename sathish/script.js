const arr = [12, 23, 34, 45, 25];
console.table(arr);
console.log(arr.length);
var count = 0;
for (var i = 0; i < arr.length; i++) {
    console.log("index: " + i + "" + arr[i]);
    count = count + arr[i];
}
console.log("count :" + count);