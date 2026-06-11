const goofyahh = document.getElementById('goofyahh');
const serious = document.getElementById('serious')
var slider = document.getElementById('slider');

function update() {
  if (slider.checked) {
    goofyahh.style.display = 'none';
    serious.style.display = 'block';
  }
  else {
    goofyahh.style.display = 'block';
    serious.style.display = 'none';
  }
}
update()
// check the bottom

console.log(window.location.href)