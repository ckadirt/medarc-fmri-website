export function vanishAndMoveDown() {
    var contentElement = document.querySelector('.content');
    if (contentElement) {
      contentElement.classList.add('vanish-move-down');
    }
  }
  
export  function reverseVanishAndMoveDown() {
    var contentElement = document.querySelector('.content');
    if (contentElement) {
      contentElement.classList.remove('vanish-move-down');
    }
  }
  
  