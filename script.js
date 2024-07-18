const movingButton = document.getElementById('movingButton');

movingButton.addEventListener('mouseover', moveButton);

function moveButton() {
  const maxX = window.innerWidth - movingButton.clientWidth;
  const maxY = window.innerHeight - movingButton.clientHeight;
  
  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);
  
  movingButton.style.left = `${randomX}px`;
  movingButton.style.top = `${randomY}px`;
}
