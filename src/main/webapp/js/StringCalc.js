function StringCalc(){}

StringCalc.add = function(s) {
	return StringCalc.applyFunction(s, function(a, b) {
		return Number(a) + Number(b);
	});
};

StringCalc.subtract = function(s) {
	return StringCalc.applyFunction(s, function(a, b){
		return Number(a) - Number(b);
	});
};

StringCalc.applyFunction = function(s, f) {
	var result = 0, i, max, values = [];

	if (s) {
		if (s.indexOf(",") === -1) {
			result = Number(s);
		} else {
			values = StringCalc.splitStringValues(s);
			result = values.reduce(f);
		}
	}
	return result;
};

StringCalc.splitStringValues = function(values){
	var valueArray = values.split(",");
	return valueArray;
};