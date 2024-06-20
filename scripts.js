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
                    <p>${project.desc}</p>
                </div>
                <div class="project-links">
                    <a href="${project.plink}">Live <i class="fa-solid fa-link"></i></a>
                    <a href="${project.github}"> Github <i class="fa-brands fa-square-github"></i></a>
                </div>
                
            </div>
            <div>
            </div>
            <div class="image-container">
                <img class="project-image" src="${project.img}"/>
            </div>
        </div>
        `
    })

    section3.innerHTML += `
    <div class="arrow-3">
        <a class="arrow-to-contact" href="#footer"><i class="fa-solid fa-chevron-down"></i></a>
    </div>
    `

    // Hide arrow to contact section 

    const clickArrow = document.querySelector('.arrow-to-contact')

    function hideArrow3() {
        clickArrow.classList.add('hidden')
    }

    clickArrow.addEventListener('click', hideArrow3)
    
    // Show arrow on scroll

    const scroll = document.querySelector('.arrow-to-contact')
    const body = document.querySelector('.section-3')

    function showArrow3() {
        scroll.classList.remove('hidden')
    }

    body.addEventListener("scroll", showArrow3)


})

