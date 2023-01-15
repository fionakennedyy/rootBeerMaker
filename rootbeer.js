function checkRadio(){
	console.log(document.querySelectorAll('input[type="radio"]:checked'));
	return document.querySelectorAll('input[type="radio"]:checked').length > 0;
}
function checkCheckbox(){
	return document.querySelectorAll('input[type="checkbox"]:checked').length > 0;
}
function recipe(){
	const recipe1 = "Recipe:\nIn a glass mug, add one scoop\n of these ice creams- \n";
	const recipe2 = ". Fill up the mug\n with ";
	const recipe3 = " root beer. Enjoy!";
	var icecreams = document.querySelectorAll('input[type="checkbox"]:checked');
	var icecream = "";
	for(var i = 0; i < document.querySelectorAll('input[type="checkbox"]:checked').length; i++)
	{
		icecream += icecreams[i].value;
		if(i < document.querySelectorAll('input[type="checkbox"]:checked').length - 1)
		{
			icecream += ", ";
		}
	}
	const rootbeer = document.querySelectorAll('input[type="radio"]:checked')[0].value;
	return recipe1 + icecream + recipe2 + rootbeer + recipe3;
}

function rbfloat(){
	if(checkRadio() == true && checkCheckbox() == true){
		const dialog = document.getElementById('dialog');
		dialog.innerText = recipe();
		dialog.show();
	}
	else{
		alert("You must select at least one ice cream flavor, and you must select one root beer brand.");
	}
}