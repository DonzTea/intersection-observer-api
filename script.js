const section = document.querySelector('.section-2');
const imgContent = document.querySelector('.img');

const objOptions = {
  threshold: 0.8,
};

function callBackFunction(entries) {
  const [entry] = entries;
  if (entry.isIntersecting) {
    imgContent.classList.remove('hidden');
  } else {
    imgContent.classList.add('hidden');
  }
}

const sectionObserver = new IntersectionObserver(callBackFunction, objOptions);
sectionObserver.observe(section);
