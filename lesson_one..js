
//Object
object ={a:10,b:20,c:[30,40,50]};
function Func_obj()
{
 let {a:af,b:bf,c:[,,cf]}=object;
  return cf;
}
console.log(Func_obj());

//Destructuring
function Func_D()
	{
      let Destructuring=['one','two','three'];
		return Destructuring
	}
var [_one,_two,_three]=Func_D();

console.log(_one);

//RestParameter
function sum(...numbers)
{
var result=0;
  numbers.forEach(function(numbers){
    result += numbers;
  });
  return result
}
console.log(sum(2,4,6,8));

