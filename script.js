const cards = document.querySelectorAll('li');

cards.forEach((card) =>
  card.addEventListener('click', (e) => {
    card.scrollIntoView({
      behavior: 'smooth',
      inline: 'center'
    });
  })
);