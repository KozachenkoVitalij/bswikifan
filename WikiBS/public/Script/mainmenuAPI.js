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

function toggleSearch() {
  const search = document.querySelector('.search-tools');

  if(search){
    if(search.getAttribute('data-search') ==='hidden'){
      search.setAttribute('data-search','visible');
    }
    else{
      search.setAttribute('data-search','hidden');
    }
  }else{
    console.error('search не знайдено!');
  }
}

function toggleMenu() {
    const menu = document.querySelector('.menu-bar-container');
    
    if (menu) {
        if (menu.getAttribute('data-menu') === 'hidden') {
            menu.setAttribute('data-menu', 'visible');
        } else {
            menu.setAttribute('data-menu', 'hidden');
        }
    } else {
        console.error('Меню не знайдено!');
    }
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
function toggleSetting(){
  const setting = document.querySelector(".setting-tools")

  if (setting) {
    if (setting.getAttribute('data-setting') === 'hidden') {
      setting.setAttribute('data-setting', 'visible')
    }else{
      setting.setAttribute('data-setting','hidden')
    }
  }else{
     console.error('More не знайдено!');
  }
}

function toggleRandomPageHref(){
  const hrefPage = document.getElementById('random-link')

  const pages = [
    '/bswikifan.html',
    '../htmlHrefTitle/black-souls-about.html',
    '../htmlHrefTitle/alica-about.html',
    '../htmlHrefTitle/red-hood.html'
  ];

   const randomPage = pages[Math.floor(Math.random() * pages.length)];

            // Переходимо на обрану сторінку
            window.location.href = randomPage;
  console.log(randomPage);
}

