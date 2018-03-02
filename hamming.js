var Hamming = function() {
	/*this.compute = function(str1, str2) {
		if (str1 === str2) {
			return 0;
		}
		else {
			return 1;
		}
	}*/

	this.compute = function (str1, str2) {

		if (str1.length !== str2.length) {
			throw 'DNA strands must be of equal length.';
		}

		str1 = str1.split(""); // pas obligatoire
		str2 = str2.split(""); // pas obligatoire
		var distance = 0;

		for (var i = 0; i < str1.length; i++) {
			if (str1[i] !== str2[i]) {
				distance++;
			}
		}
	return distance;	
	}
}

module.exports = Hamming;