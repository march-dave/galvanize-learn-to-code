/* 
	1) Get these elements from the DOM
		- the image
		- the button
*/
var myImage = document.getElementById("image");
var editImageButton = document.getElementById("edit");

// 	2) Add a click handler to the button
editImageButton.addEventListener("click", launchImageEditor, false);

// 	3) Initialize the Image Editor 
var csdkImageEditor = Aviary.Feather({
	apiKey: "",
	onSave: function(id, newURL) {
		csdkImageEditor.close();
		myImage.src = newURL;
	},
	onError: function(error) {
		console.log(error);
	}
});

// 	4) Make the helper function for the click handler
function launchImageEditor() {

	csdkImageEditor.launch({
		image: myImage.id,
		url: myImage.src
	});
}