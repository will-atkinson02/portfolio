// fetch data from json

fetch("projects.json").then(function (res) {
    return res.json()
}).then(function (data){
    const section3 = document.querySelector(".section-3")

    data.projects.forEach(function (project) {
        section3.innerHTML += `
        <div class="projects">
            <div class="project-info">
                <div>
                    <h2>${project.name}</h2>
                    <p>${project.desc}</p>
                </div>
                <div class="project-links">
                    <a href="${project.plink}">Project link</a>
                    <a href="${project.github}">Github</a>
                </div>
                
            </div>
            <div class="placeholder-image">
                <img src=""${project.img}/>
            </div>
        </div>
        `
    })

})