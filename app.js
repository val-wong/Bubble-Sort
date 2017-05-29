var resultDiv = document.getElementById('result');
var startDiv = document.getElementById('start');
var button = document.getElementsByTagName('button');

var numbers = [75, 89, 45, 52, 40, 12, 92, 20, 85, 
6, 68, 87, 23, 69, 32, 97, 53, 64, 42, 51, 14, 76, 
51, 26, 6, 89, 93, 73, 9, 65, 36, 4, 59, 81, 46, 67, 
83, 87, 21, 5, 86, 42, 25, 62, 99, 4, 66, 15, 26, 91, 
89, 90, 57, 52, 53, 27, 68, 3, 6, 100, 52, 17, 70, 16, 
82, 77, 68, 5, 38, 83, 74, 29, 43, 32, 59, 99, 78, 51, 
30, 67, 29, 15, 67, 95, 3, 80, 43, 88, 86, 43, 82, 25, 
12, 65, 13, 81, 99, 23, 76, 54]

startDiv.innerHTML = numbers;

function sorter(nums) {
	// for (var i = 0; i < nums.length; i++) {
	// 	for (var j = 0; j < nums.length; j++) {
	// 		if (nums[j-1] > nums[j]) {
	// 			var tmp = nums[j-1];
	// 			nums[j-1] = nums[j];
	// 			nums[j] = tmp;
	// 		}
	// 	}
	// }

	nums.sort(function(a,b) {return a-b});
	
	resultDiv.innerHTML = nums;
}

function clicked(){
	sorter(numbers);
}
button[0].addEventListener('click', clicked);