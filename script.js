const hearts = document.querySelector('.hearts');

setInterval(() => {
  const heart = document.createElement('div');
  heart.innerHTML = '❤️';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = Math.random() * 20 + 15 + 'px';
  heart.style.position = 'fixed';
  heart.style.bottom = '-20px';
  heart.style.animation = 'float 6s linear';
  hearts.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}, 400);

const style = document.createElement('style');
style.innerHTML = `
@keyframes float{
  0%{transform:translateY(0);opacity:1;}
  100%{transform:translateY(-100vh);opacity:0;}
}`;
document.head.appendChild(style);
