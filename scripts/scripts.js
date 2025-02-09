// fetch data from json

fetch("projects.json").then(function (res) {
    return res.json()
}).then(function (data){
    const section2 = document.querySelector(".section-2")
    data.projects.forEach(function (project) {
        section2.innerHTML += `
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
                    ${project.plink ? `<a href="${project.plink}">Live <i class="fa-solid fa-link"></i></a>` : ''}
                    ${project.frontendGithub && project.backendGithub ? `
                        <a href="${project.frontendGithub}">Frontend <i class="fa-brands fa-square-github"></i></a>
                        <a href="${project.backendGithub}">Backend <i class="fa-brands fa-square-github"></i></a>` 
                        : project.github ? `<a href="${project.github}">Github <i class="fa-brands fa-square-github"></i></a>` 
                        : ''
                    }
                    ${project.download ? `<a href="${project.download}">Download <i class="fa-solid fa-download"></i></a>` : ''}
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

const toggleThemeButton = document.getElementById('toggleThemeButton')
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark')

    // Header
    document.querySelector('header').classList.toggle('dark')
    document.querySelector('h2').classList.toggle('dark')
    document.querySelectorAll('.anchor-1').forEach(el=>el.classList.toggle('dark'))
    document.querySelector('.change-theme').classList.toggle('dark')

    // Section 1
    document.querySelector('.section-1').classList.toggle('dark')
    document.querySelector('h1').classList.toggle('dark')
    document.querySelector('.animation-column').classList.toggle('dark')
    document.querySelector('.about-panel').classList.toggle('dark')

    // Section 3
    document.querySelector('.section-2').classList.toggle('dark')
    document.querySelector('.portfolio-title').classList.toggle('dark')

    // Footer
    document.querySelector('footer').classList.toggle('dark')
    document.querySelector('.div-pad').classList.toggle('dark')
    document.querySelector('.div-pad p').classList.toggle('dark')
})
