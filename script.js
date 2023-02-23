let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
  let newTitle = document.getElementById('main-title')
  newTitle = 'DOM Toretto Website'
  console.log(newTitle);

  // Part 2
  const root = document.querySelector('html');
  console.log(root.children);
  let body = root.children[1]
  body.style.background = 'purple'; 

  // Part 3
  const favThings = document.getElementById('favorite-things');
  console.log(favThings);

  favThings.lastElementChild.remove();
  console.log(favThings);

  // Part 4
  let specialTitle = document.querySelectorAll('div.special-title');

  console.log(specialTitle);

  specialTitle.forEach(element => {
    element.style.fontSize = '2rem';
  })

  // Part 5
  const pastRaces = document.getElementById('past-races');
  console.log(pastRaces);
  pastRaces.children[3].remove();

  // Part 6
  const newCity = document.createElement('li');
  const liText = document.createTextNode('Boston');
  newCity.appendChild(liText);
  pastRaces.appendChild(newCity);

  console.log(pastRaces);

  // Part 7
  const main = document.querySelector('.main');
  
  const newBlog = document.createElement('div');
  const newHeading = document.createElement('h1');
  const newParagraph = document.createElement('p');

  newBlog.classList.add('blog-post', 'purple')
  const h1Text= document.createTextNode('Boston');
  const pText= document.createTextNode('I GOT MY CAR STUCK IN MASSHOLE TRAFFIC');

  main.appendChild(newBlog);
  newHeading.appendChild(h1Text);
  newParagraph.appendChild(pText);
  newBlog.append(newHeading, newParagraph);
  
  // Part 8 

  const randomQuoteEl = document.getElementById('quote-title')
  randomQuoteEl.addEventListener('click', function(evt) {
    randomQuote();
  });

  // Part 9
  const blogPosts = document.querySelectorAll('.blog-post'); 
  blogPosts.forEach(element => {
    element.addEventListener('mouseout', function(evt){
      element.classList.toggle('purple');
    });
    element.addEventListener('mouseenter', function(evt){
      element.classList.toggle('red');
    });
  });
});

