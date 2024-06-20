// fetch data from json

fetch("projects.json").then(function (res) {
    return res.json()
}).then(function (data){
    const section3 = document.querySelector(".section-3")

    readMores = []
    
    projectDescs = []
    

    data.projects.forEach(function (project) {
        section3.innerHTML += `
        <div class="projects-outer">
            <div class="project-container">
                <div class="project-info">
                    <h2>${project.name}</h2>
                    <div class="response-image-container">
                        <img class="response-image" src="${project.img}"/>
                    </div>
                    <div>
                        <p style="cursor: pointer;" class="read-more${project.name[8]}">Read more <i class="fa-solid fa-chevron-down"></i></p>
                        <p class="project-desc${project.name[8]} hidden">${project.desc}</p>
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
                <img class="project-image" src="${project.img}"/>
            </div>
        </div>
        `
        readMores.push(`.read-more${project.name[8]}`)
        projectDescs.push(`.project-desc${project.name[8]}`)
    })

    console.log(readMores)

    section3.innerHTML += `
    <div class="arrow-3">
        <a class="arrow-to-contact" href="#footer"><i class="fa-solid fa-chevron-down"></i></a>
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

    const scroll = document.querySelector('.arrow-to-contact')
    const body = document.querySelector('.section-3')

    function showArrow3() {
        scroll.classList.remove('hidden')
    }

    body.addEventListener("scroll", showArrow3)


    // Read more onclick
    readMores.forEach(function (readMore) {
        const read = document.querySelector(readMore)
        const para = document.querySelector('.project-desc'+readMore[10])
        console.log(read, para)

        read.addEventListener('click', function () {
            para.classList.toggle('hidden')
            if (read.innerHTML === `Read more <i class="fa-solid fa-chevron-down"></i>`) {
                read.innerHTML = `Hide description <i class="fa-solid fa-chevron-up"></i>`;
            } else {
                read.innerHTML = `Read more <i class="fa-solid fa-chevron-down"></i>`;
            }
            
        })
    }

    )

    
})

