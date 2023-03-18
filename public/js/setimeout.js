document.addEventListener('DOMContentLoaded', function() {
	let errorMsg = document.querySelector('.errors');
	if (errorMsg.innerHTML !== '') {
		setTimeout(function() {
			errorMsg.innerHTML = '';
		}, 5000);
	}
});


