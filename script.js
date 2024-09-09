const header = document.querySelector(".head");

window.addEventListener("scroll", (e) => {
    if (window.scrollY > 50){
        header.classList.add('header');
    } else {
        header.classList.remove('header');
    }
});
const text = "Bienvenue à vous sur notre site, cap sur la réussite vous pouvez scroller pour postuler";
const typingElement = document.getElementById('typing');
let index = 0;
let isTyping = false;

function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 100); 
  }
}

function handleScroll() {
  const container = document.querySelector('.typing-container');
  const containerPosition = container.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  if (containerPosition < screenPosition && !isTyping) {
    isTyping = true;
    type();
  }
}

window.addEventListener('scroll', handleScroll);
