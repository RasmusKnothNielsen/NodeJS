let fileValid = false;

function validateForm() {
	const title = document.forms.videoupload.title.value;
	const description = document.forms.videoupload.description.value;
	const tags = document.forms.videoupload.tags.value;
	const category = document.forms.videoupload.category;

	if (title.length < 8 || title.length > 64) {
		if (title.length < 8) {
			alert('Title is too short!');
		}
		else if (title.length > 64) {
			alert('Title is too long!');
		}
		return false;
	}

	if (description.length > 2048) {
		return false;
	}

	if (category.value == 'none') {
		alert('You have to pick a category!');
		return false;
	}

	return true && fileValid;
}
// How to access information from a form
// JQuery

// or API DOM directly
// document.forms.videoupload.title.value takes the value in the title field.

function handleFileUpload(files) {
	const file = files[0];

	const mimeTypeArray = file.type.split('/');
	if (mimeTypeArray[0] !== 'video') {
		fileValid = false;
		return;
	}
	const fileSize = file.size;
	const twoGBFileLimit = 2147483648;
	if (fileSize > twoGBFileLimit) {
		fileValid = false;
		return;
	}

	fileValid = true;
}