var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var count = 2;

var output = generateLists(a, count);
console.log(output);

function generateLists(a, count){
  var t = 0;
  var lists = {
    'list0': [],
    'list1': []
  };
  var listNumber = 0;
  for(var i = 0; i < a.length; i++){
    lists['list' + listNumber].push(a[i]);
    t++;

    if(t == count){
      t = 0;
      listNumber = (listNumber + 1) % 2;
    }
  }
  return lists;
}