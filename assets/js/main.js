function headerInit() {
  const header = document.querySelector('#header');
  const slider = document.querySelector('#top_slider');
  const headerHeight = header.clientHeight;
  let prevScrollPos = window.scrollY;


  window.addEventListener('scroll', () => {

    const currentScrollPos = window.scrollY;

    if (currentScrollPos > headerHeight) {
      header.style.transform = `translateY(-${headerHeight}px)`;
      header.style.boxShadow = '0px 0px 10px 1px rgba(53, 80, 128, 0.2)';

    } else if (currentScrollPos === 0) {
      header.style.boxShadow = 'none';

    } else {
      header.style.position = 'static'; // или возвращай старое значение
      header.style.top = 'auto'; // или возвращай старое значение
      header.style.zIndex = 'auto'; // или возвращай старое значение
    }

    if (currentScrollPos < prevScrollPos) {
      slider.style.top = `100px`;
      header.style.transform = `translateY(0px)`;
      header.style.position = 'sticky';
      header.style.top = '0';
      header.style.zIndex = '2';
    }
    if (currentScrollPos > prevScrollPos) {
      slider.style.top = `0px`;
    }

    prevScrollPos = currentScrollPos;
  });
}

headerInit();