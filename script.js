 // Simple JavaScript for all pages

// Update copyright year on all pages
document.querySelector('footer').innerHTML = `<p>&copy; ${new Date().getFullYear()} Faculty of Medicine | University of Zimbabwe</p>`;

// Image click viewer for all images
document.querySelectorAll('img').forEach(img => {
    img.style.cursor = 'pointer';
    img.onclick = () => {
        const overlay = document.createElement('div');
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:9999;display:flex;justify-content:center;align-items:center;cursor:pointer';
        const big = document.createElement('img');
        big.src = img.src;
        big.style.maxWidth = '90%';
        big.style.maxHeight = '90%';
        overlay.appendChild(big);
        document.body.appendChild(overlay);
        overlay.onclick = () => overlay.remove();
    };
});

// Back to top button for all pages
const btn = document.createElement('button');
btn.innerHTML = '↑';
btn.style.cssText = 'position:fixed;bottom:20px;right:20px;width:45px;height:45px;background:#00695c;color:white;border:none;border-radius:50%;font-size:24px;cursor:pointer;display:none;z-index:1000';
document.body.appendChild(btn);

window.onscroll = () => btn.style.display = window.scrollY > 200 ? 'block' : 'none';
btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });

// Count programs if on programs page
if (document.getElementById('programCount')) {
    const programs = document.querySelectorAll('ul li');
    document.getElementById('programCount').innerHTML = programs.length;
}

// Show program details function
window.showPrograms = function() {
    const list = document.querySelectorAll('ul li');
    let msg = 'Available Programs:\n';
    list.forEach((item, i) => msg += `${i+1}. ${item.innerText}\n`);
    alert(msg);
};

// Contact form handling if on contact page
const form = document.getElementById('contactForm');
if (form) {
    form.onsubmit = (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (!name || !email || !message) {
            alert('Please fill in all fields');
        } else if (!email.includes('@')) {
            alert('Please enter a valid email');
        } else {
            alert(`Thank you ${name}! Your message has been sent.`);
            form.reset();
        }
    };
}

// Welcome message
const hour = new Date().getHours();
const greeting = hour < 12 ? 'Good Morning' : hour < 18 ? 'Good Afternoon' : 'Good Evening';
console.log(`${greeting}! Welcome to Faculty of Medicine`);
