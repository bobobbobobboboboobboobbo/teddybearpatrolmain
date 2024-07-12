const accordions = document.querySelectorAll('.accordion');
const dynamicImage = document.getElementById('dynamicImage');

accordions.forEach(accordion => {
  accordion.addEventListener('click', () => {
    // Find the active accordion (the one with the '#')
    const activeAccordion = document.querySelector('.accordion[id="#"]:not(:target)');

    // If there's an active accordion, reset its image
    if (activeAccordion) {
      activeAccordion.classList.remove('active');
      dynamicImage.src = 'TBP.png'; // Reset to default image
    }

    // If the clicked accordion is active, reset its image
    if (accordion.classList.contains('active')) {
     accordion.classList.remove('active');
      //dynamicImage.src = 'TBP.png'; // Reset to default image
    } else {
      // Otherwise, set the image based on the clicked accordion's ID
      accordion.classList.add('active');
      switch (accordion.id) {
        case 'Genesee_Lodge_No_174':
          dynamicImage.src = '174masonic.jpg';
          break;

      }
    }
  });
});