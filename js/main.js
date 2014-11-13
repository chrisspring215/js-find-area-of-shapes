function init() {

	var triangleSelected = document.getElementById('triangleSelected');

	/* TRIANGLE MATH */
	var doTriangleMath = document.getElementById('doTriangleMath');

	doTriangleMath.onclick = function () {

		var triangleBase = document.getElementById('triangleBase').value;
		var triangleHeight = document.getElementById('triangleHeight').value;
		var base = parseInt(triangleBase);
		var height = parseInt(triangleHeight);

		alert((base * height) / 2);
	};


}