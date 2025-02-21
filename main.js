const childDivs = document.querySelectorAll('.child-div');
const para = document.querySelector('.para');
const heading = document.querySelector('h1');
const cards = document.querySelectorAll('.cards');

childDivs.forEach(childDiv => {
    childDiv.addEventListener('mouseover', () => {
      childDiv.style.transform = 'scale(1.2)';
        childDiv.style.zIndex = '1';
        heading.style.color = '#212121';
        para.style.textShadow = `
            -1px -1px 0 white,  
             1px -1px 0 white,
            -1px  1px 0 white,
             1px  1px 0 white`;
    });

    childDiv.addEventListener('mouseout', () => {
      childDiv.style.transform = '';
        heading.style.color = '';
        para.style.textShadow = '';
        childDiv.style.zIndex = '';    });
});

window.addEventListener('scroll', () => {
  const scrollX = window.scrollX;
  const scrollY = window.scrollY;
  console.log(`Scroll X: ${scrollX}, Scroll Y: ${scrollY}`);
});

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition >= 500 ) {
      console.log('hi');
      cards.forEach(card => card.style.display = 'flex');
  } else {
      cards.forEach(card => card.style.display = 'none');
  }
});