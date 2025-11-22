const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Buenos Aires, Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January, 17-19",
    area: 30659,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/buenos-aires-argentina-temple/buenos-aires-argentina-temple-4087-main.jpg"
  },
  {
    templeName: "Brazilia, Brasil",
    location: "Brazilia, Brasil",
    dedicated: "2023, September, 17",
    area: 25000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
  },
  {
    templeName: "Papeete, Tahiti",
    location: "Papeete, Tahiti",
    dedicated: "1983, October, 27-29",
    area: 25000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/025-Papeete-Tahiti-Temple.jpg"
  }
];

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('#menu-toggle');
    const navigation = document.querySelector('.navigation');
    const imgContainer = document.querySelector('.container-img')

    menuButton.addEventListener('click', () => {
        navigation.classList.toggle('active');
        menuButton.textContent = navigation.classList.contains('active') ? '✖' : '☰';
    });

  function cardTemples(temples) {
    imgContainer.innerHTML = "";

    temples.forEach(temple => {
      const figure = document.createElement("figure");

      figure.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <figcaption>
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Area:</strong> ${temple.area} sq ft</p>
        </figcaption>
        `;

      imgContainer.appendChild(figure);
    });
  }

  cardTemples(temples);

  const oldTemples = document.querySelector("#old");

  oldTemples.addEventListener("click", () => {
    const filtered = temples.filter(temple => {
      const year = parseInt(temple.dedicated); 
      return year < 1900;
    });
    cardTemples(filtered);
  })

  const newTemples = document.querySelector("#new");

  newTemples.addEventListener("click", () => {
    const filtered = temples.filter(temple => {
      const year = parseInt(temple.dedicated); 
      return year > 2000;
    });
    cardTemples(filtered);
  })

  const largeTemples = document.querySelector("#large");

  largeTemples.addEventListener("click", () => {
    const filtered = temples.filter(temple => {
      const size = parseInt(temple.area); 
      return size > 90000;
    });
    cardTemples(filtered);
  })

  const smallTemples = document.querySelector("#small");

  smallTemples.addEventListener("click", () => {
    const filtered = temples.filter(temple => {
      const size = parseInt(temple.area); 
      return size < 10000;
    });
    cardTemples(filtered);
  })

  const allHome = document.querySelector("#home");

  allHome.addEventListener("click", () => {
    cardTemples(temples);
  })
});

