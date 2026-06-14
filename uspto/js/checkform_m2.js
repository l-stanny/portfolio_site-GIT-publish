function checkForm(theForm) {
	var checkBox = document.getElementById("inlineRadio015");
	if (checkBox.checked == true) {
		var why = "";
		why = checkText(theForm.attorneyfirstname.value, "first name");
		var attorneyfirstnameval =
			document.getElementById("attorneyfirstname").value;
		var highlightattorneyfirstname =
			document.getElementById("attorneyfirstname");
		if (attorneyfirstnameval) {
			var highlightattorneyfirstname =
				document.getElementById("attorneyfirstname");
			document
				.getElementById("attorneyfirstname")
				.classList.remove("highlighted");
			highlightattorneyfirstname.classList.remove("highlighted");
			highlightattorneyfirstname.setAttribute("aria-invalid", "false");
		}
		if (attorneyfirstnameval.length == 0) {
			highlightattorneyfirstname.classList.add("highlighted");
			highlightattorneyfirstname.setAttribute("aria-invalid", "true");
		}
		why += checkText(theForm.attorneylastname.value, "last name");
		var attorneylastnameval = document.getElementById("attorneylastname").value;
		var highlightattorneylastname = document.getElementById("attorneylastname");
		if (attorneylastnameval) {
			var highlightattorneylastname =
				document.getElementById("attorneylastname");
			document
				.getElementById("attorneylastname")
				.classList.remove("highlighted");
			highlightattorneylastname.classList.remove("highlighted");
			highlightattorneylastname.setAttribute("aria-invalid", "false");
		}
		if (attorneylastnameval.length == 0) {
			highlightattorneylastname.classList.add("highlighted");
			highlightattorneylastname.setAttribute("aria-invalid", "true");
		}
		why += checkText(theForm.attorneylawfirmname.value, "firm");
		var attorneylawfirmnameval = document.getElementById(
			"attorneylawfirmname"
		).value;
		var highlightattorneylawfirmname = document.getElementById(
			"attorneylawfirmname"
		);
		if (attorneylawfirmnameval) {
			var highlightattorneylawfirmname = document.getElementById(
				"attorneylawfirmname"
			);
			document
				.getElementById("attorneylawfirmname")
				.classList.remove("highlighted");
			highlightattorneylawfirmname.classList.remove("highlighted");
			highlightattorneylawfirmname.setAttribute("aria-invalid", "false");
		}
		if (attorneylawfirmnameval.length == 0) {
			highlightattorneylawfirmname.classList.add("highlighted");
			highlightattorneylawfirmname.setAttribute("aria-invalid", "true");
		}
		if (why != "") {
			var textnode =
				"The form is not complete. Please enter the following information.\n" +
				why;
			var node = document.createElement("ul");
			node.innerHTML = textnode;
			document.getElementById("errorslist").appendChild(node);
			document.getElementById("errorslist").focus();
			document.getElementById("errorslist").tabIndex = "-1";
			window.scrollTo(0, 0);
			var c = document.getElementById("errorslist").childElementCount;
			if (c > 1) {
				document.getElementById("errorslist").firstElementChild.remove();
			}
			node.setAttribute("aria-invalid", "true");
			return false;
		} else {
			window.location.href = "marks_stylized.html";
		}
	}
}
