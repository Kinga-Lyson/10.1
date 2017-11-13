$(function(){
console.log('DOM loaded- you can have fun');
});

var span = $('span');
	span.each(
		function(index, element) 
		{
			if (index % 2 == 0) {
				$(element).css('color', 'red');
			}
			else {
				$(element).css('color', 'blue');
			}
		}
	);
var paragraph = $('p');

	paragraph.each(
		function(index, element) {
			var button = '<button class="btn" data-tmp="' + index + '">Click</button>';
			$(element).append(button);
		}
	);
	
$("button").click(
		function(){
			alert($(this).attr("data-tmp"));
		}
	);