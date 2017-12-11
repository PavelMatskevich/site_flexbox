window.onload = function() {
	var email =  document.querySelector("input[name='text']");
	var window = document.querySelector(".divWindow");
	var button = document.querySelector("input[name='button']");
	button.addEventListener("submit", function() {
		validate(email);
		var param = 'email=' + email.value;
		ajax(params, window);
	});
	
	hideWindow(window);
}

function hideWindow(window) {
	var button = document.createElement("button");
	var text = document.createTextNode("X");
	button.appendChild(text);
	button.classList.add("but");
	window.appendChild(button);
	button.addEventListener("click", function() {
		window.style.display = "none";
	})
}

function validate(email) {
	var patternForEmail = /^[_a-zA-Z0-9à-ÿÀ-ß¸¨ ]+$/;
	var checkEmail = email.value.search(patternForEmail) != -1;
	return checkEmail;
}

function ajax(param, window) {
	var request = new XMLHttpRequest();
	
	request.onreadystatechange = function() {
		if (request.readyState == 4 && request.status == 200) {
			if (request.responseText == "1") {
				window.style.display = "none";
			}
			else {
				window.style.display = "block";
			}
		}
	}
	
	request.open("POST", "file.php", true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	request.send(param);	
}		