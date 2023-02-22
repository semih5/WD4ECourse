function billingFunction() {
	if (document.getElementById("same").checked) {
		document.getElementById("billingName").value= document.getElementById("shippingName");
		document.getElementById("billingZip").value= document.getElementById("shippingZip")
	}else{
		document.getElementById("billingName").value="";
		document.getElementById("billingZip").value=""
	}
}