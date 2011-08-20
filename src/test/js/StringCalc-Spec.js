describe("the StringCalc object", function() {

	describe("add", function(){
		
		it("returns 0 if the input is empty", function() {
			var result = StringCalc.add();
			expect(result).toEqual(0);
		})

		it("returns a number if the input is a single number", function() {
			var result = StringCalc.add("1");
			expect(result).toEqual(1);
		});
		
		it("adds two numbers seperated by a comma", function() {
			var result = StringCalc.add("1,2");
			expect(result).toEqual(3);
		});
		
		it("adds three comma seperated numbers", function() {
			var result = StringCalc.add("1,2,3");
			expect(result).toEqual(6);
		})
		
	});
	
	describe("subtract", function(){		
		it("returns 0 if the input is empty", function() {
			var result = StringCalc.subtract();
			expect(result).toEqual(0);
		});
		
		it("returns a number if the input is a single number", function() {
			var result = StringCalc.subtract("1");
			expect(result).toEqual(1);
		});
		
		it("subtracts two numbers seperated by a comma", function(){
			var result = StringCalc.subtract("1,2");
			expect(result).toEqual(-1);
		});
		
		it("subtracts three comma seperated numbers", function() {
			var result = StringCalc.add("1,2,3");
			expect(result).toEqual(6);
		})
	});
	
	
	
});