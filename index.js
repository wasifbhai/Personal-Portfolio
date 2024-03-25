
(function(){
    emailjs.init({
      publicKey: "7SjfHVne7W5VjYaj0",
    });
 })();


 function mail(event){
    event.preventDefault()
    let templateParms = {
    first_name:document.getElementById("first-name").value,
    last_name:document.getElementById("last-name").value,
    email:document.getElementById("email").value,
    phone:document.getElementById("phone").value,
    message:document.getElementById("message").value,
    }
  

    emailjs.send('service_2wcafx1', 'template_7dwai4y' ,templateParms).then(
        (response) => {
          console.log('SUCCESS!', response.status, response.text);
        },
        (error) => {
          console.log('FAILED...', error);
        },
      );
 }

document.getElementById("button").addEventListener('click', (event) => mail(event))

 
 setTimeout(function() {
    var loadingContainer = document.getElementById('loadingContainer');
    loadingContainer.style.display = 'none'; 

    var contentContainer = document.getElementById('contentContainer');
    contentContainer.style.display = 'block'; 
  }, 3000);

  document.addEventListener("DOMContentLoaded", function() {
    var skills = document.querySelectorAll(".skill-bar");
    skills.forEach(function(skill) {
        var width = skill.style.width;
        skill.style.width = "0";
        setTimeout(function() {
            skill.style.width = width;
        }, 500);
    });
});

document.addEventListener("DOMContentLoaded", function() {
  var skills = document.querySelectorAll(".skill-bar");

  function animateSkills() {
      skills.forEach(function(skill) {
          var percent = parseInt(skill.getAttribute("data-percent"));
          var progress = skill.querySelector(".bar-progress");
          var percentage = skill.querySelector(".percentage");
          var width = 0;
          var interval = setInterval(function() {
              if (width >= percent) {
                  clearInterval(interval);
              } else {
                  width++;
                  progress.style.width = width + "%";
                  percentage.textContent = width + "%";
              }
          }, 20);
      });
  }

  function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
  }

  function checkVisibility() {
      skills.forEach(function(skill) {
          if (isElementInViewport(skill)) {
              animateSkills();
          }
      });
  }

  // Check visibility when the page loads and on scroll
  window.addEventListener('DOMContentLoaded', checkVisibility);
  window.addEventListener('scroll', checkVisibility);
});

