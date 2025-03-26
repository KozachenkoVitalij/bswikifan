

// Завантажуємо headerTemp.html після завантаження DOM
document.addEventListener('DOMContentLoaded', function() {
  // Завантажуємо вміст headerTemp.html
  fetch('../template/headerTemp.html')
    .then(response => response.text())
    .then(data => {
      // Вставляємо вміст в елемент з id 'headerTemp'
      document.getElementById('headerTemp').innerHTML = data;

      // Дочекаємося завершення вставки вмісту та обробимо елементи
      handleHoverIcons();  // Викликаємо функцію для роботи з hoverIcon
    })
    .catch(err => console.log('Error loading headerTemp.html: ', err));

  function handleHoverIcons() {
    // Тепер шукаємо всі елементи з класом hoverIcon
    const hoverIcons = document.querySelectorAll(".hoverIcon");

    // Перевірка на консоль
    console.log("Знайдені елементи hoverIcon після завантаження headerTemp:", hoverIcons);

    // Для кожного елемента з класом .hoverIcon додаємо події
    hoverIcons.forEach(function(hoverIcon) {
      const hoverSrc = hoverIcon.getAttribute("data-hover");
      const originalSrc = hoverIcon.getAttribute("data-original");

      hoverIcon.addEventListener("mouseenter", function() {
        hoverIcon.src = hoverSrc;  // Зміна зображення на hover
      });

      hoverIcon.addEventListener("mouseleave", function() {
        hoverIcon.src = originalSrc;  // Відновлення оригінального зображення
      });
    });
  }
});


fetch('../template/footerTemp/footerTemp.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('footer').innerHTML = data;
            })
            .catch(err => console.log('Error loading footerTemp.html: ', err));

fetch('../template/bar-tool.html')
            .then(response => response.text())
            .then(data => {
                document.getElementById('template-bar-tools').innerHTML = data;
            })
            .catch(err => console.log('Error loading barTemp.html: ', err));




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