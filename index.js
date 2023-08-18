let projectsHTML = "";

projects.forEach((project) => {
  projectsHTML += `
  <div class="project-container">
  <div class="image"><img src="${project.image}" /></div>
  <div class="title">${project.title}</div>
  <div class="description">
  
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
    iste, minima dolorem, debitis sunt accusamus impedit quia asperiores
    ipsum possimus cupiditate quidem assumenda autem libero eaque.
    Voluptatibus aliquam impedit molestiae?
  </div>

  <button onclick="window.location.href='weather-app.html'">View Project</button>
  <button onclick="window.location.href='https://github.com/'">Source Code</button>

</div>`
})

document.querySelector(".main").innerHTML = projectsHTML;

