let projectsHTML = "";

projects.forEach((project) => {
  projectsHTML += `
  <div class="project-container">
  <div class="image"><img src="${project.image}" /></div>
  <div class="title">Project Name</div>
  <div class="description">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
    iste, minima dolorem, debitis sunt accusamus impedit quia asperiores
    ipsum possimus cupiditate quidem assumenda autem libero eaque.
    Voluptatibus aliquam impedit molestiae?
  </div>
</div>`
})

document.querySelector(".main").innerHTML = projectsHTML;

