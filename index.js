 function Click()
	{
	 with(document.forms){
	 let number = box1.value;
	 let square = number * number;
	 forms.box1.value = square+" is the square of "+number;
	 
	 }   
    }