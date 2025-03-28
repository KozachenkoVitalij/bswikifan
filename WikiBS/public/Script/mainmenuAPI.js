

document.addEventListener("DOMContentLoaded", function () {
  initTemplates();
 
});

function loadTemplate(url, targetId) {
  return fetch(url)
    .then((response) => response.text())
    .then((data) => {
      document.getElementById(targetId).innerHTML = data;
    })
    .catch((err) => console.log(`Error loading ${url}:`, err));
}

function initTemplates() {
  const templates = [
    { url: "../template/headerTemp.html", target: "headerTemp" },
    { url: "../template/footerTemp/footerTemp.html", target: "footer" },
    { url: "../template/bar-tool.html", target: "template-bar-tools" }
  ];

  Promise.all(templates.map((t) => loadTemplate(t.url, t.target))).then(() => {
    console.log("Усі шаблони завантажені!");

    // Після завантаження всіх шаблонів викликаємо потрібні функції
    handleHoverIcons();
     initialSearch();
  });
}

function handleHoverIcons() {
  const hoverIcons = document.querySelectorAll(".hoverIcon");
  console.log("Знайдені елементи hoverIcon:", hoverIcons);

  hoverIcons.forEach(function (hoverIcon) {
    const hoverSrc = hoverIcon.getAttribute("data-hover");
    const originalSrc = hoverIcon.getAttribute("data-original");

    hoverIcon.addEventListener("mouseenter", function () {
      hoverIcon.src = hoverSrc;
    });

    hoverIcon.addEventListener("mouseleave", function () {
      hoverIcon.src = originalSrc;
    });
  });
}


function handleHoverIcons() {
  // Тепер шукаємо всі елементи з класом hoverIcon
  const hoverIcons = document.querySelectorAll(".hoverIcon");

  // Перевірка на консоль
  console.log("Знайдені елементи hoverIcon після завантаження:", hoverIcons);

  // Для кожного елемента з класом .hoverIcon додаємо події
  hoverIcons.forEach(function (hoverIcon) {
    const hoverSrc = hoverIcon.getAttribute("data-hover");
    const originalSrc = hoverIcon.getAttribute("data-original");

    hoverIcon.addEventListener("mouseenter", function () {
      hoverIcon.src = hoverSrc; // Зміна зображення на hover
    });

    hoverIcon.addEventListener("mouseleave", function () {
      hoverIcon.src = originalSrc; // Відновлення оригінального зображення
    });
  });
};


function initialSearch() {
  const searchInput = document.querySelector('.search-input');
  const searchResult = document.querySelector('.search-result');
  const searchIcon = document.querySelector('.search-icon');
  console.log(searchInput, searchResult, searchIcon);
  const pagesList = [
    { name: ['home', 'b', 'black', 'home'], url: '/bswikifan.html' },
    { name: ['black souls I', 'b', 'black', '1'], url: '../htmlHrefTitle/black-souls-about.html' },
    { name: ['Alice', 'A', 'Alice', 'Al'], url: '../htmlHrefTitle/alica-about.html' },
    { name: ['Red hood', 'R', '', 'Hood', 'H'], url: '../htmlHrefTitle/red-hood.html' }
  ];

  // Функція пошуку
  function search() {
    const query = searchInput.value.toLowerCase().trim();
    searchResult.innerHTML = '';

    if (query) {
      const filteredSites = pagesList.filter(site =>
        site.name.some(n => n.toLowerCase().includes(query))
      );

      filteredSites.forEach(site => {
        const div = document.createElement('div');
        div.classList.add('search-item');
        div.innerHTML = `<a href="${site.url}">${site.name[0]}</a>`;
        searchResult.appendChild(div);      
    });
    }
  }


  // Обробник події для введення тексту
  searchInput.addEventListener('input', search);

  // Обробник події для натискання на іконку
  searchIcon.addEventListener('click', search);
}

function toggleMore(){
  const more = document.querySelector(".button-more-tools")

  if (more) {
    if (more.getAttribute('data-more') === 'hidden') {
      more.setAttribute('data-more', 'visible')
    }else{
      more.setAttribute('data-more','hidden')
    }
  }else{
     console.error('More не знайдено!');
  }
}

function toggleRandomPageHref(){
  const hrefPage = document.getElementById('random-link') 
  const pages1 = [
   '../bswikifan.html',
  '../htmlHrefTitle/black-souls-about.html',
  '../htmlHrefTitle/alica-about.html',
   '../htmlHrefTitle/red-hood.html'
  ];


   const randomPage = pages[Math.floor(Math.random() * pages.length)];

            // Переходимо на обрану сторінку
            window.location.href = randomPage;
  console.log(randomPage);
}