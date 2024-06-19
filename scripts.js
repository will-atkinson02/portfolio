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
    <div class="arrow-4">
        <a><i class="fa-solid fa-chevron-down"></i></a>
    </div>
    `
    
})

// Reduce opacity when