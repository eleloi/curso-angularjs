//** Prototypal inheritance
// var parent = {
//   value: "parentValue",
//   obj: {
//     objValue: "parentObjValue"
//   },
//   walk: function () {
//     console.log("walking!");
//   }
// };
//
// function logSplash () {
//   console.log("CHILD - child.value: ", child.value);
//   console.log("CHILD - child.obj.objValue: ", child.obj.objValue);
//   console.log("PARENT - parent.value: ", parent.value);
//   console.log("PARENT - parent.obj.objValue: ", parent.obj.objValue);
//   console.log("parent: ", parent);
//   console.log("child: ", child);
// };
//
// var child = Object.create(parent);
// logSplash();
//
// child.value = "childValue";
// child.obj.objValue = "childObjValue";
// console.log("*** CHANGED: child.value = 'childValue'");
// console.log("*** CHANGED: child.obj.objValue = 'child.obj.objValue'");
// logSplash();
//
// console.log("child.obj === parent.obj ? ", child.obj === parent.obj);
//
// var grandChild = Object.create(child);
// console.log("Grandchild: ", grandChild);
// grandChild.walk();

//** Function constructors
function Dog(name) {
  this.name = name;
  console.log("'this' is: ", this);
}

var myDog = new Dog("Max");
console.log("MyDog: ", myDog);

Dog("Max2");
