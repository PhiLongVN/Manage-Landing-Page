/* ============================================ */
/*                    TOGGLE                    */
/* ============================================ */

const head = document.querySelector('.head');
const toggle = document.querySelector('.head-toggle');

toggle.onclick = () => {
  head.classList.toggle('active');
};
window.onscroll = () => {
  head.classList.remove('active');
};

/* ============================================ */
/*                     EMAIL                    */
/* ============================================ */
const email = document.querySelector('.email input');
const form = document.querySelector('.email');

form.onsubmit = (e) => {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  let dem = 0;
  let a = email.value;

  // nếu email NULL
  if (a == '' || a == null) {
    email.parentNode.classList.add('active');
    dem++;
  }
  // nếu email có cú pháp không hợp lệ
  else if (!a.match(re)) {
    email.parentNode.classList.add('active');
    dem++;
  }

  if (dem > 0) {
    e.preventDefault();
  }

  error(email);
};

error = (set) => {
  set.onclick = () => {
    set.parentNode.classList.remove('active');
  };
};

/* ============================================ */
/*                     SLIDE                    */
/* ============================================ */

let slide = 0;

const dots = document.querySelectorAll('.dot');
const tableSlide = document.querySelector('.sec3-table');

dots.forEach((dot) => {
  dot.addEventListener('click', handleDot);
});

function handleDot(e) {
  let target = e.target;
  slide = target.dataset.key;

  tableSlide.style.transform = `translateX(-${slide}00vw)`;
  light();
}

setInterval(plusSLide, 5000);

function plusSLide() {
  if (slide > 3) {
    slide = 0;
  }
  tableSlide.style.transform = `translateX(-${slide}00vw)`;
  light();
  slide++;
}

function light() {
  dots.forEach((dot) => {
    if (dot.dataset.key == slide) {
      dot.style.background = 'red';
    } else {
      dot.style.background = 'unset';
    }
  });
}
