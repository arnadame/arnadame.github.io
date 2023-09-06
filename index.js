document.addEventListener('DOMContentLoaded', function () {
  const navi = document.querySelector('.navbar');
  
  window.addEventListener('scroll', function () {
    const scrollDistance = window.scrollY;

    if (scrollDistance > 150) {
      navi.style.backgroundColor = 'rgba(7, 8, 3, 0.8)';
    } else {
      navi.style.backgroundColor = 'rgba(7, 8, 3, 1)';
    }
  });

  const head = document.querySelector('.title-main');

  const headObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-viewport');
        head.style.animation = 'sample1 1.7s ease-out';
        head.style.visibility = 'visible';
      } else {
        entry.target.classList.remove('in-viewport');
        head.style.animation = 'none';
        head.style.visibility = 'hidden';
      }
    });  
  }, {
    threshold: 0.2
  });

  const webp = document.querySelector('.myweb-p');

  const webpObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-viewport');
        webp.style.animation = 'sample1 1.7s ease-out';
        webp.style.visibility = 'visible';
      } else {
        entry.target.classList.remove('in-viewport');
        webp.style.animation = 'none';
        webp.style.visibility = 'hidden';
      }
    });
  }, {
    threshold: 0
  });

  const box_skills = document.querySelectorAll('.box-skills')

  const boxObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-viewport');
        entry.target.style.animation = 'appear 0.7s ease-in';
        entry.target.style.visibility = 'visible';
      } else {
        entry.target.classList.remove('in-viewport');
        entry.target.style.animation = 'none';
        entry.target.style.visibility = 'hidden';
      }
    });
  }, {
    threshold: 0.3
  });

  const picture = document.querySelector('.picture-wrapper')

  const pictObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-viewport');
        picture.style.animation = 'appear 0.45s ease-in';
        picture.style.visibility = 'visible';
      } else {
        entry.target.classList.remove('in-viewport');
        picture.style.animation = 'none';
        picture.style.visibility = 'hidden';
      }
    });
  }, {
    threshold: 0.2
  });

box_skills.forEach(box => {
  boxObserver.observe(box);
});
  pictObserver.observe(picture);
  headObserver.observe(head);
  webpObserver.observe(webp);


  var checkbox = document.querySelector(".hamburger");

    checkbox.addEventListener('change', function(){
    const hamburger_menu = document.querySelector('.hamburger-menu');

    if (this.checked){
      hamburger_menu.style.animation = 'transform 1s ease-in-out';
    } else {
      hamburger_menu.style.animation = 'transform-out 1s ease-in-out';
    }

  })

  document.querySelector('.form-wrapper').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.querySelector('.name');
    var sub = document.querySelector('.subject');
    var msg = document.querySelector('.message');
    const messageBox = document.querySelector('.message-box');

    emailjs.send("service_bmuslrc", "template_6oeu8b2", {
      from_name: name.value,
      subject: sub.value,
      to_name: "Aaron",
      message: msg.value,

    }).then(
      function (response) {
        messageBox.textContent = "Email sent successfully!";
        messageBox.classList.remove('error');
        messageBox.classList.add('success');
        name.value = '';
        sub.value ='';
        msg.value = '';
      },
      function (error) {
        messageBox.textContent = "Email sending failed. Please try again later.";
        messageBox.classList.remove('success');
        messageBox.classList.add('error');
        name.value = '';
        sub.value ='';
        msg.value = '';
      }
    );
  });
});