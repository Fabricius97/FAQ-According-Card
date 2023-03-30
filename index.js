

// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// const texts = document.querySelectorAll('span[id^="spans"]');


// for (let i = 0; i < checkboxes.length; i++) {
//   checkboxes[i].addEventListener('change', function() {
//     const parentP = this.parentElement;
//     const parentDiv = parentP.parentElement;
//     const textSpan = parentDiv.querySelector('span[id^="spans"]');
//     if (this.checked) {
//       textSpan.style.display = 'block';
//       parentP.style.fontWeight = 'bold';
//     } else {
//       textSpan.style.display = 'none';
//       parentP.style.fontWeight = 'normal';
//     }
//   });
// }

// const checkboxes = document.querySelectorAll('input[type="checkbox"]');
// const texts = document.querySelectorAll('span[id^="spans"]');

// for (let i = 0; i < checkboxes.length; i++) {
//   checkboxes[i].addEventListener('change', function() {
//     const parentP = this.parentElement;
//     const parentDiv = parentP.parentElement;
//     const textSpan = parentDiv.querySelector('span[id^="spans"]');
//     const arrowImg = parentDiv.querySelector('img[id^="arrowImg"]');
//     if (this.checked) {
//       textSpan.style.display = 'block';
//       parentP.style.fontWeight = 'bold';
//       arrowImg.classList.add('rotated');
//     } else {
//       textSpan.style.display = 'none';
//       parentP.style.fontWeight = 'normal';
//       arrowImg.classList.remove('rotated');
//     }
//   });
// }

const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const texts = document.querySelectorAll('span.spans');
const arrows = document.querySelectorAll('img.arrowImg');

for (let i = 0; i < checkboxes.length; i++) {
  checkboxes[i].addEventListener('change', function() {
    const parentP = this.parentElement;
    const parentDiv = parentP.parentElement;
    const textSpan = parentDiv.querySelector('span.spans');
    const arrowImg = parentDiv.querySelector('img.arrowImg');
    if (this.checked) {
      textSpan.style.display = 'block';
      parentP.style.fontWeight = 'bold';
      arrowImg.classList.add('rotated');
    } else {
      textSpan.style.display = 'none';
      parentP.style.fontWeight = 'normal';
      arrowImg.classList.remove('rotated');
    }
  });
}


