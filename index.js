/*
	1) Get these elements from the DOM
		- the image
		- the button
*/
var myImage = document.getElementById("image");
var editImageButton = document.getElementById("edit");

// 	2) Add a click handler to the button
editImageButton.addEventListener("click", launchImageEditor);

// 	3) Initialize the Image Editor
var csdkImageEditor = Aviary.Feather({
  apiKey: "1234567",
  onSave: function(id, newURL) {
    csdkImageEditor.close();
    myImage.src = newURL;
  }

});

// 	4) Make the helper function for the click handler
function launchImageEditor() {
  // console.log("Aviary!");

  console.log('myImage.id', myImage.id);
  console.log('myImage.src', myImage.src);

  csdkImageEditor.launch({
    image: myImage.id,
    url: myImage.src
  });

}
