const mainnav = document.querySelector(".filter-nav");
const hambutton = document.querySelector("#menu");

hambutton.addEventListener("click", () => {
  mainnav.classList.toggle("show");
  hambutton.classList.toggle("show");
});

const today = new Date();
document.querySelector("#year").textContent = today.getFullYear();

document.querySelector("#lastModified").textContent =
  "Last Modified: " + document.lastModified;

document.addEventListener("DOMContentLoaded", function () {

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
      templeName: "Nairobi Kenya",
      location: "Nairobi, Kenya",
      dedicated: "2023, May, 21",
      area: 19800,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/400x250/6-1f722c658877170182ae74e76ce9a1697f503b65.jpeg"
    },
    {
      templeName: "Paris France",
      location: "Paris, France",
      dedicated: "2017, May, 21",
      area: 44000,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/paris-france/2018/400x250/Paris-Temple02.jpg"
    },
    {
      templeName: "Tokyo Japan",
      location: "Tokyo, Japan",
      dedicated: "1980, October, 27",
      area: 52900,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x640/tokyo_japan_temple-evening.jpeg"
    }
  ];

  function renderTemples(list) {
    const container = document.getElementById("gallery");
    container.innerHTML = "";

    list.forEach(temple => {
      const card = document.createElement("div");
      card.className = "temple-card";

      card.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <h3>${temple.templeName}</h3>
        <p>${temple.location}</p>
        <p>${temple.dedicated}</p>
        <p>${temple.area} sq ft</p>
      `;

      container.appendChild(card);
    });
  }

  function filterTemples(key) {
    let filtered = temples;

    if (key === "old") {
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
    } else if (key === "new") {
      filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
    } else if (key === "large") {
      filtered = temples.filter(t => t.area > 90000);
    } else if (key === "small") {
      filtered = temples.filter(t => t.area < 10000);
    }

    renderTemples(filtered);
  }

  document.querySelector("#filter-all").addEventListener("click", e => {
    e.preventDefault();
    filterTemples("all");
  });

  document.querySelector("#filter-old").addEventListener("click", e => {
    e.preventDefault();
    filterTemples("old");
  });

  document.querySelector("#filter-new").addEventListener("click", e => {
    e.preventDefault();
    filterTemples("new");
  });

  document.querySelector("#filter-large").addEventListener("click", e => {
    e.preventDefault();
    filterTemples("large");
  });

  document.querySelector("#filter-small").addEventListener("click", e => {
    e.preventDefault();
    filterTemples("small");
  });

  renderTemples(temples);
});