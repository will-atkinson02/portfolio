// fetch data from json

fetch("projects.json").then(function (res) {
    return res.json()
}).then(function (data){
    const section3 = document.querySelector(".section-3")


    data.projects.forEach(function (project) {
        section3.innerHTML += `
        <div class="projects-outer">
            <div class="project-container">
                <div class="project-info">
                    <h2>${project.name}</h2>
                    <div class="response-image-container">
                        <img class="response-image" src="${project.img}" alt=""/>
                    </div>
                    <div class="read-more-container">
                        <p style="cursor: pointer;" onmouseover="this.style.color='rgb(17, 218, 178)';" onmouseout="this.style.color='';" class="read-more">Read more <i class="fa-solid fa-chevron-down"></i></p>
                        <p class="project-desc hidden">${project.desc}</p>
                    </div>
                </div>
                <div class="project-links">
                    <a href="${project.plink}">Live <i class="fa-solid fa-link"></i></a>
                    <a href="${project.github}"> Github <i class="fa-brands fa-square-github"></i></a>
                </div>
                
            </div>
            <div>
            </div>
            <div class="image-container">
                <img class="project-image" src="${project.img}" alt=""/>
            </div>
        </div>
        `
    })


    section3.innerHTML += `
    <!-- Arrow to contact section -->
    <div class="arrow-3">
        <a class="arrow-to-contact" href="#footer" aria-label="Next Section"><i class="fa-solid fa-chevron-down"></i></a>
    </div>
    `

    

    // Hide arrow to contact section 

    // #1 when arrow is clicked

    const clickArrow = document.querySelector('.arrow-to-contact')

    function hideArrow3() {
        clickArrow.classList.add('hidden')
        
    }

    clickArrow.addEventListener('click', hideArrow3)

    // #2 when contact is clicked

    const contactBtn = document.querySelector('#contact-border')

    function hideArrow3() {
        clickArrow.classList.add('hidden')
        
    }
    contactBtn.addEventListener('click', hideArrow3)

    // Show arrow on scroll

    //const scroll = document.querySelector('.arrow-to-contact')
    //const body = document.querySelector('.section-3')

    //let hiddenCheck = clickArrow.classList.contains('hidden')
    
    let counter = 0

    window.addEventListener("scroll", function () {
        console.log(counter)
        counter += 1
        if (counter >= 50) {
            clickArrow.classList.remove('hidden')
            counter = 0
        }
            
    })
    

    

    // Read more onclick
    
    const readMores = document.querySelectorAll('.read-more')
    
    readMores.forEach(function (readMore) {
        readMore.addEventListener('click', function () {
            const container = readMore.closest('.read-more-container')
            const projectDesc = container.querySelector('.project-desc')
            
            projectDesc.classList.toggle('hidden')

            if (readMore.innerHTML === `Read more <i class="fa-solid fa-chevron-down"></i>`) {
                readMore.innerHTML = `Hide description <i class="fa-solid fa-chevron-up"></i>`;
            } else {
                readMore.innerHTML = `Read more <i class="fa-solid fa-chevron-down"></i>`;
            }
            
        })
    })

    

    
})


