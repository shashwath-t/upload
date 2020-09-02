


const signupForm = document.querySelector('#signupForm');
signupForm.addEventListener('submit',  (e) => {
	e.preventDefault();

	//get user info
	const email = signupForm['signup-email'].value;
	const password = signupForm['signup-pwd'].value;

	//sign up the user
	auth.createUserWithEmailAndPassword(email, password).then(cred => {
		window.location.href = "index.html"
	});


})

//
const loginForm = document.querySelector('#loginForm');
loginForm.addEventListener('submit', (e) => {
	e.preventDefault();

	//get user info
	const email = loginForm['login-email'].value;
	const password = loginForm['login-pwd'].value;

	auth.signInWithEmailAndPassword(email, password).then(cred => {
		window.location.href = "index.html"
	})
})