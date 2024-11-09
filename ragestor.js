// Function to create animated particles

function createParticles(num) {
    const body = document.body;
    for (let i = 0; i < num; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        const size = Math.random() * 20 + 5; // Random size between 5 and 25px
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.top = `${Math.random() * window.innerHeight}px`;
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.opacity = Math.random();
        body.appendChild(particle);
    }
}




function animateNumber(target, duration) {
    let start = 0;
    const end = target;
    const incrementTime = duration / end;

    const interval = setInterval(() => {
        start++;
        document.getElementById('number').innerText = start;

        if (start === end) {
            clearInterval(interval);
        }
    }, incrementTime);
}



createParticles(30); // Create 30 animated particles

// Show the form after a delay
window.onload = function() {
    setTimeout(() => {
        document.querySelector('form').style.display = 'block';
    }, 2000); // Delay for the form to appear
};


  (function() {
               let count = 0;
    let store = "";
    let str = "Welcome to Taste & Twist!";
    const output = document.querySelector('#output');
    const tpw = () => setInterval(run, 100);
    const run = () => {
        if (count < str.length) { 
            store += str[count];
            output.innerHTML = store;
            count++;
        } else {
            clearInterval(tpw); // Stop when message is complete
        }
    };
    tpw();
        })();

// Validate password match and provide feedback
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const message = document.getElementById('message');
    
    if (password !== confirmPassword) {
        message.textContent = "Passwords do not match.";
        message.style.color = "red";
    } else {
        message.textContent = "Registration successful!";
        message.style.color = "green";
        // You can add further form submission logic here
    }
});

// Play/Pause Music Functionality
const backgroundMusic = document.getElementById('backgroundMusic');
const toggleMusic = document.getElementById('toggleMusic');

toggleMusic.addEventListener('click', function() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        toggleMusic.textContent = 'Pause Music';
        backgroundMusic.muted = false; // Unmute music
    } else {
        backgroundMusic.pause();
        toggleMusic.textContent = 'Play Music';
        backgroundMusic.muted = true; // Mute music
    }
});

// Store form data in localStorage
function ll() {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const confirmPassword = document.querySelector('#confirmPassword').value;

    const data = {
        name: name,
        email: email,
        password: password,
        confirmPassword: confirmPassword
    };
    
    localStorage.setItem("data", JSON.stringify(data));
    console.log("Data stored in localStorage:", data);
    window.open("home.html");
}

// Function to show alert with stored data
function jj() {
    const storedData = JSON.parse(localStorage.getItem("data"));

    if (storedData) {
        let na = storedData.name;
        document.querySelector("#lom").innerHTML = na; // Display stored name
    }

   
   
}
function dd()
{
window.open("book.html");

}