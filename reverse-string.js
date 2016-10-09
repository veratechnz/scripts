function reverseString(str) {

	//Split reverse and then join the string again. 
	var a = function(){
		var newish = str.split('');
		var rev = newish.reverse();
		strA = rev.join();
		return strA;
	};

	//USe regex to remove all commas from the string.  
	var b = function(){
		strA.replace(/\,/g,"");
		var str = strA.replace(/\,/g,"");
		return str;
	}

	return b(a());

}

console.log(reverseString("hello"));