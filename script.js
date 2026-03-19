


//mobile menu

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});



// Animate skill bars on page load
        window.addEventListener('load', function() {
            const skillBars = document.querySelectorAll('.skill-bar');
            
            skillBars.forEach((bar, index) => {
                setTimeout(() => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                    bar.classList.add('animate');
                }, index * 150);
            });
        });

         function animateCounter(element) {
            const target = parseInt(element.getAttribute('data-target'));
            const duration = 2000;
            const step = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += step;
                if (current < target) {
                    element.textContent = Math.floor(current) + '+';
                    requestAnimationFrame(updateCounter);
                } else {
                    if (target >= 1000) {
                        element.textContent = (target / 1000).toFixed(0) + 'K';
                    } else {
                        element.textContent = target + '+';
                    }
                }
            };

            updateCounter();
        }

        // Wait for elements to fade in before starting counter
        setTimeout(() => {
            document.querySelectorAll('.stat-number').forEach(counter => {
                animateCounter(counter);
            });
        }, 800);

    /* Review js */

let index = 0;
const slides = document.getElementById("slides");

function showSlide(){
  slides.style.transform =
   `translateX(-${index * 340}px)`;
}

function autoSlide(){
  index++;
  if(index >= slides.children.length){
    index = 0;
  }
  showSlide();
}

setInterval(autoSlide, 3000);


/* Add Review */
function addReview(){

  const name =
   document.getElementById("name").value;

  const review =
   document.getElementById("review").value;

  const rating =
   document.getElementById("rating").value;

  if(name === "" || review === ""){
    alert("Fill all fields");
    return;
  }

  /* First Letter */
  const firstLetter =
   name.charAt(0).toUpperCase();

  const card =
   document.createElement("div");

  card.className = "review-card";

  card.innerHTML = `
    <div class="avatar">${firstLetter}</div>
    <p>"${review}"</p>
    <h4>${name}</h4>
    <div class="stars">${rating}</div>
  `;

  slides.appendChild(card);

  document.getElementById("name").value="";
  document.getElementById("review").value="";
}
