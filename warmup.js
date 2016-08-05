//warmup 1

function myEach(array, callback){
  array.forEach(el => callback(el));
}

myEach([1,2,3,4], function(item){
  console.log(item);
});

function myMap(array, callback){
  newArray = [];
  myEach(array, function(item){
    newArray.push(callback(item));
  });
  return newArray;
}


let mapped = myMap([1,2,3,4], function(item){
  return item * 2;
});

console.log(mapped);
