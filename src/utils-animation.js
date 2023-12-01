export function showUp() {
    var contentElement = document.querySelector('.content');
    if (contentElement) {
      contentElement.classList.add('vanish-move-down');
    }
  }
  
export  function showDown() {
    var contentElement = document.querySelector('.content');
    if (contentElement) {
      contentElement.classList.remove('vanish-move-down');
    }
  }
  
  