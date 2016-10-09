function factorialize(num) {
	// If the number is less than 0, reject it.
	if (num < 0) {
	    return -1;
	}
	// If the number is 0, its factorial is 1.
	else if (num == 0) {
	    return 1;
	}
	// Otherwise, call this recursive procedure again.
	else {
	    return (num * factorialize(num - 1));
	}

  return num;
}

console.log(factorialize(5));
