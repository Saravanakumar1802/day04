//How to compare two JSON have the same properties without order?

var obj1 = { name: "Person 1", age:5 };
var obj2 = { age:5, name: "Person 2" };
 var JSON = true;
 if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1){
        if(obj1[key]==obj2[key]){
            continue;
        }
        else{
            JSON = false;
            break; 
        }
    }
 }
 else{
    JSON =false;
 }
 console.log(JSON);



