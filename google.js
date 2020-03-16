function myFunction() {
  var x = document.getElementById("myDIV");
  var button = document.getElementById("toggle");
  button.textContent = "Something";
  if (x.style.display === "none") {
    x.style.display = "block";
    button.textContent = "Close";

  } else {
    x.style.display = "none";
    button.textContent = "Solution";
  }
}






const array = ['pea', 'pear', 'apple', 'for', 'april', 'apendix', 'peace', 1];
const obj = {};

const check = (item) =>{	(item in obj)? obj[item]++ : obj[item] = 1;  }
const del = (item) =>{	return (obj[item[0]] !== counter)    }


const inner = (arr,str,rounds) => 
{	
	let min = Math.min(...arr.map(({ length }) => length));
	for (rounds=1 ; rounds<min ; rounds++)
	{
		let x = arr[0][rounds];
		if (arr.every(char => char[rounds] === x)){
			str += x;		
		}
	}
	return str;
}


const main = (arr) => 
{
	let rounds = 0;
	let counter = 0;
	let result = [];

	arr.forEach(item => {
		check(item[rounds]);
	})
	counter = Math.max(...Object.values(obj))
	Object.keys(obj).forEach(item => {
		(obj[item] !== counter)? delete obj[item]: 	result.push([item])
	})
	let x = Object.keys(obj).length;
	for (var i=0 ;i<x ;i++ ){
		rounds = 1;
		let newarr = arr.filter(item => Object.keys(obj)[i] === item[0]);
		result[i] = inner(newarr, result[i], rounds);
	}	
	console.log(result);		
}

const arrayfilter = () => {
	const filt = array.filter(item => typeof(item)==="string");
	filt.sort();
	return filt;
}

main(arrayfilter());