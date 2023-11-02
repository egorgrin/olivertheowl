// Конструктор объекта для отзывов
function Review(data) {
  this.stars = data.stars;
  this.date = data.date;
  this.avatar = data.avatar;
  this.name = data.name;
  this.reviewText = data.reviewText;
  this.productImage = data.productImage;
}

const reviewsData = [
  {
    stars: 5,
    date: '11/17/2022',
    avatar: 'assets/img/avatar.webp',
    name: 'Name',
    reviewText: 'Wow, it\'s really cute. The size fits well, but it\'s a lot larger than I thought.',
    productImage: 'assets/img/reviews/r1.webp',
  },
  {
    stars: 4,
    date: '11/17/2022',
    avatar: 'assets/img/avatar.webp',
    name: 'Name',
    reviewText: 'Wow, it\'s really cute. The size fits well, but it\'s a lot larger than I thought.',
    productImage: 'assets/img/reviews/r1.webp',
  },
  {
    stars: 3,
    date: '11/17/2022',
    avatar: 'assets/img/avatar.webp',
    name: 'Name',
    reviewText: 'Wow, it\'s really cute. The size fits well, but it\'s a lot larger than I thought.',
    productImage: 'assets/img/reviews/r1.webp',
  },
  {
    stars: 2,
    date: '11/17/2022',
    avatar: 'assets/img/avatar.webp',
    name: 'Name',
    reviewText: 'Wow, it\'s really cute. The size fits well, but it\'s a lot larger than I thought.',
    productImage: 'assets/img/reviews/r1.webp',
  }, {
    stars: 1,
    date: '11/17/2022',
    avatar: 'assets/img/avatar.webp',
    name: 'Name',
    reviewText: 'Wow, it\'s really cute. The size fits well, but it\'s a lot larger than I thought.',
    productImage: 'assets/img/reviews/r1.webp',
  },
  // Другие отзывы представлены в виде объектов
];

const reviewsContainer = document.getElementById('reviewsContainer');

reviewsData.forEach((data) => {
  const review = new Review(data);
  const reviewElement = document.createElement('div');
  reviewElement.classList.add('review');

  // Создание элементов отзыва и добавление их в reviewElement

  // Звёзды
  const header = document.createElement('div');
  header.classList.add('header');

  const starsElement = document.createElement('div');
  starsElement.classList.add('stars');

  for (let i = 0; i < 5; i++) {
    const starIcon = document.createElement('i');
    starIcon.classList.add(i < review.stars ? 'fa-solid' : 'fa-regular', 'fa-star');
    starsElement.appendChild(starIcon);
  }

  header.appendChild(starsElement);
  const dateElement = document.createElement('div');
  dateElement.classList.add('date');
  dateElement.textContent = review.date;
  header.appendChild(dateElement);
  reviewElement.appendChild(header);

  // Данные пользователя (аватар и имя)
  const user_info = document.createElement('div');
  user_info.classList.add('user_info');
  const avatarElement = document.createElement('div');
  avatarElement.classList.add('avatar');
  const avatarImage = document.createElement('img');
  avatarImage.src = review.avatar;
  avatarImage.alt = 'User Avatar';
  avatarElement.appendChild(avatarImage);
  user_info.appendChild(avatarElement);
  const nameElement = document.createElement('span');
  nameElement.textContent = review.name;
  user_info.appendChild(nameElement);
  reviewElement.appendChild(user_info);

  // Текст отзыва
  const reviewTextElement = document.createElement('p');
  reviewTextElement.classList.add('review_body');
  reviewTextElement.textContent = review.reviewText;
  reviewElement.appendChild(reviewTextElement);

  // Изображение продукта
  const productImageElement = document.createElement('div');
  productImageElement.classList.add('product_image');
  const productImage = document.createElement('img');
  productImage.src = review.productImage;
  productImage.alt = 'Product Image';
  productImageElement.appendChild(productImage);
  reviewElement.appendChild(productImageElement);

  reviewsContainer.appendChild(reviewElement);
});
