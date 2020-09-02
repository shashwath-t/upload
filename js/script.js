auth.onAuthStateChanged(user => {
	var loginButton = document.getElementById("loginBtn");
	var logoutButton = document.getElementById("logoutBtn");
	if (user) {
		loginBtn.style.display = 'none';
		logoutBtn.style.display = '';
		console.log('signed in');
	}
	else {
		loginBtn.style.display = '';
		logoutBtn.style.display = 'none';
		console.log('signed out');	
	}
});

const logout = document.querySelector('#logoutBtn');
logout.addEventListener('click', (e) => {
	e.preventDefault();
	auth.signOut().then(() => {
		console.log('User Logged Out');
	})
})

function showTime(){
    var date = new Date();
    var hour = date.getHours(); 
    var minute = date.getMinutes(); 
    var second = date.getSeconds(); 
    var session = "AM";
    
    if(hour == 0){
        hour = 12;
    }
    
    if(hour > 12){
        hour = hour - 12;
        session = "PM";
    }
    
    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;
    
    var time = hour + ":" + minute + ":" + second + " " + session;
    document.getElementById("DigitalCLOCK").innerText = time;
    document.getElementById("DigitalCLOCK").textContent = time;
    
    setTimeout(showTime, 1000);
    
}
 
showTime();

