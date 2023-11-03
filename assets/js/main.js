function headerInit() {
  const header = document.querySelector('#header');
  const slider = document.querySelector('#slider_wrapper');
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
      if (slider) {
        slider.style.top = `100px`;
      }
      header.style.transform = `translateY(0px)`;
      header.style.position = 'sticky';
      header.style.top = '0';
      header.style.zIndex = '2';
    }
    if (slider) {
      if (currentScrollPos > prevScrollPos) {
        slider.style.top = `0px`;
      }
    }


    prevScrollPos = currentScrollPos;
  });
}

function quantInit() {
  const plusBtn = document.querySelector('.quantity_button[name="plus"]');
  const minusBtn = document.querySelector('.quantity_button[name="minus"]');
  const quantInput = document.querySelector('.quantity_input');

  if (plusBtn && minusBtn && quantInput) {
    plusBtn.addEventListener('click', () => {
      quantInput.value = parseInt(quantInput.value) + 1;
    });

    minusBtn.addEventListener('click', () => {
      if (parseInt(quantInput.value) > 1) {
        quantInput.value = parseInt(quantInput.value) - 1;
      }
    });
  }
}

function accordion() {
  const elements = document.querySelectorAll('.accordion_element');

  elements.forEach(element => {
    const title = element.querySelector('.title');
    const content = element.querySelector('.accordion_content');
    const expandBtn = element.querySelector('.expand_btn');

    title.addEventListener('click', () => {
      if (content.style.display === 'none' || content.style.display === '') {
        content.style.display = 'block';
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.marginTop = '2rem';
        content.addEventListener('transitionend', () => {
          expandBtn.style.transform = 'scaleY(-1)';
        }, {
          once: true, // This ensures the event listener fires only once
        });
      } else if (content.style.display === 'block') {
        content.style.maxHeight = null;
        content.style.marginTop = '0';
        content.addEventListener('transitionend', () => {
          expandBtn.style.transform = 'scaleY(1)';
          content.style.display = 'none';
        }, {
          once: true, // This ensures the event listener fires only once
        });
      }
    });
  });


}

function checkOut() {
  const cartBtn = document.querySelector('#cartBtn');
  if (cartBtn) {
    const colorSelect = document.querySelector('#selectColor');
    const sizeSelect = document.querySelector('#selectSize');
    const quantityInput = document.querySelector('#selectQuantity');

    cartBtn.addEventListener('click', function (e) {
      e.preventDefault();
      const cartData = {
        color: colorSelect.value,
        size: sizeSelect.value,
        quantity: quantityInput.value,
      };
      localStorage.setItem('cartData', JSON.stringify(cartData));

      window.location.href = '/olivertheowl/cart';
    });


    colorSelect.addEventListener('change', function () {
      const selectedValue = colorSelect.value;
      let slide;
      switch (selectedValue) {
        case 'Blue Lagoon': {
          slide = 2;
        }
          break;
        case 'Pink Diamond': {
          slide = 1;
        }
          break;
        case 'Fresh Lemon': {
          slide = 0;
        }
          break;
        case 'Mint Green': {
          slide = 4;
        }
          break;
        case 'Silver Rock': {
          slide = 3;
        }
          break;
      }
      swiper2.slideTo(slide);
    });

  }
}

function setCart() {
  const cartData = JSON.parse(localStorage.getItem('cartData'));

  const cartImage = document.querySelector('#cartImage');

  const cartColor = document.getElementById('cartColor');
  const cartSize = document.getElementById('cartSize');
  const cartQuantity = document.getElementById('cartQuantity');

  cartColor.textContent = cartData.color;
  cartSize.textContent = cartData.size;
  cartQuantity.value = cartData.quantity;

  let image = '';

  switch (cartData.color) {
    case 'Blue Lagoon': {
      image = `p03`;
    }
      break;
    case 'Pink Diamond': {
      image = `p02`;
    }
      break;
    case 'Fresh Lemon': {
      image = `p01`;
    }
      break;
    case 'Mint Green': {
      image = `p05`;
    }
      break;
    case 'Silver Rock': {
      image = `p04`;
    }
      break;
  }

  cartImage.src = `/assets/img/products/${image}.webp`;
}

headerInit();
quantInit();
accordion();
checkOut();

if (document.querySelector('#cart_page')) {
  setCart();
}