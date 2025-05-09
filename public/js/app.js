// header
var modal = document.getElementById("modal");


var btn = document.getElementById("butt");


var span = document.getElementsByClassName("exit")[0];

btn.onclick = function() {
  modal.style.display = "block";
  document.body.style.overflow="hidden"
}


// video
let svg1 = document.getElementById("svg1");
let close = document.getElementById("close");
let ffllex = document.getElementById("video");


svg1.addEventListener("click", (e) => {
    e.preventDefault(); 
    video.style.display = "block"; 
    body.style.overflow = "hidden"; 
});

close.addEventListener("click", () => {
    video.style.display = "none"; 
    body.style.overflow = "auto"; 
});


// specials-part
let modi = document.getElementById("modi")
let unde = document.getElementById("unde")
let pariatur = document.getElementById("pariatur")
let nostrum = document.getElementById("nostrum")
let lusti = document.getElementById("lusti")
let choose= document.getElementById("sugg")
let ChooseList = [
   
    document.getElementById("sugg1"),
    document.getElementById("sugg2"),
    document.getElementById("sugg3"),
    document.getElementById("sugg4")
];


function hideAll() {
    ChooseList.forEach(el => el.style.display = "none")
}
 choose.style.display = "flex"

modi.addEventListener("click", (e) => {
    e.preventDefault()
    hideAll()
    choose.style.display = "flex"
});

unde.addEventListener("click", (e) => {
    e.preventDefault()
    hideAll()
    ChooseList[0].style.display = "flex"
     choose.style.display = "none"
});

pariatur.addEventListener("click", (e) => {
    e.preventDefault()
    hideAll()
    ChooseList[1].style.display = "flex"
});

nostrum.addEventListener("click", (e) => {
    e.preventDefault()
    hideAll()
    ChooseList[2].style.display = "flex"
});

lusti.addEventListener("click", (e) => {
    e.preventDefault()
    hideAll()
    ChooseList[3].style.display = "flex"
});






// menu

const allTabsBtn = document.getElementById('all-tabs')
const startersBtn = document.getElementById('starters')
const saladesBtn = document.getElementById('salades')
const specialtyBtn = document.getElementById('specialty')


const allPlats = document.querySelectorAll('.plats')


allPlats.forEach(plat => {
  plat.style.display = 'flex'; 
})


allTabsBtn.addEventListener('click', () => {
  allPlats.forEach(plat => {
    plat.style.display = 'flex';
  })
})


startersBtn.addEventListener('click', () => {
  allPlats.forEach(plat => {
    if (plat.classList.contains('starters-plat')) {
      plat.style.display = 'flex';
    } else {
      plat.style.display = 'none';
    }
  })
})


saladesBtn.addEventListener('click', () => {
  allPlats.forEach(plat => {
    if (plat.classList.contains('salades')) {
      plat.style.display = 'flex';
    } else {
      plat.style.display = 'none';
    }
  })
})


specialtyBtn.addEventListener('click', () => {
  allPlats.forEach(plat => {
    if (plat.classList.contains('specialty')) {
      plat.style.display = 'flex';
    } else {
      plat.style.display = 'none';
    }
  })
})

// reservation

document.getElementById('reservation-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const fields = [
    'name',
    'email',
    'phone',
    'date',
    'time',
    'people'
  ];

  const isEmpty = fields.some(id => {
    const el = document.getElementById(id);
    return !el.value.trim();
  });

  if (isEmpty) {
    alert('Please complete all required fields before booking.');
  } else {
    alert('Table booked successfully!');
  }
});




// carousel-events



let nextBtns = document.querySelectorAll(".next-btn");
let previousBtns = document.querySelectorAll(".previous-btn");
let containers = document.querySelectorAll(".carousel-box");
let carouselIndexes = new Map();

// Manual buttons
nextBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let target = e.target.getAttribute("carousel-target");
        let targetID = carouselIndexes.get(target) || 0;
        slider(targetID + 1, target);
    });
});

previousBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        let target = e.target.getAttribute("carousel-target");
        let targetID = carouselIndexes.get(target) || 0;
        slider(targetID - 1, target);
    });
});

// Auto slide logic
setInterval(() => {
    containers.forEach(container => {
        if (container.getAttribute("autoslide") === "true") {
            let id = container.id;
            let currentIndex = carouselIndexes.get(id) || 0;
            slider(currentIndex + 1, id);
        }
    });
}, 3000); // every 3 seconds

// Slider function
const slider = (index, target) => {
    containers.forEach(container => {
        if (container.id == target) {
            let camera = container.querySelector(".carousel");
            let slide = container.querySelectorAll(".slide");
            let slideWidth = slide[0].clientWidth;

            if (index < 0) {
                index = slide.length - 1;
            } else if (index >= slide.length) {
                index = 0;
            }

            camera.style.transform = `translateX(-${slideWidth * index}px)`;
            carouselIndexes.set(target, index);
        }
    });
};

// testimonials
let currentcaro = 0;
let slides2 = document.querySelectorAll('.testimonial-card');
let slidesToShow = 3;

function showSlides(startIndex) {
   slides2.forEach((slide, i) => {
      slide.style.display = (i >= startIndex && i < startIndex + slidesToShow) ? 'block' : 'none';
   });
}

document.getElementById('nextBtn').addEventListener('click', () => {
   currentcaro = (currentcaro + 1) % slides2.length;
   if (currentcaro + slidesToShow > slides2.length) currentcaro = 0;
   showSlides(currentcaro);
});

document.getElementById('prevBtn').addEventListener('click', () => {
   currentcaro = (currentcaro - 1 + slides2.length) % slides2.length;
   if (currentcaro < 0) currentcaro = slides2.length - slidesToShow;
   showSlides(currentcaro);
});

setInterval(() => {
   currentcaro = (currentcaro + 1) % slides2.length;
   if (currentcaro + slidesToShow > slides2.length) currentcaro = 0;
   showSlides(currentcaro);
}, 3000);


showSlides(currentcaro);