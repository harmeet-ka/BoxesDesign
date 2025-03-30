// Function to toggle the expansion of a box and collapse the others
function toggleBox(event, boxId) {
    if (event.target.closest('.size-options') || event.target.closest('.color-options') || event.target.closest('select')) {
        return;
    }

    event.stopPropagation();
    
    const boxes = document.querySelectorAll('.box');
    const boxToToggle = document.getElementById(boxId);
    
    boxes.forEach(box => {
      const options = box.querySelector('.extra-options');
      if (box !== boxToToggle) {
        box.classList.remove('active');
        options.style.display = 'none';
      }
    });
  
    const options = boxToToggle.querySelector('.extra-options');
    boxToToggle.classList.toggle('active');
    if (boxToToggle.classList.contains('active')) {
      options.style.display = 'block';
    } else {
      options.style.display = 'none';
    }
}

document.addEventListener('click', function(event) {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
      const options = box.querySelector('.extra-options');
      if (!box.contains(event.target)) {
        box.classList.remove('active');
        options.style.display = 'none';
      }
    });
});
