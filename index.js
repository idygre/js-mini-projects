let projectsHTML = "";

projects.forEach((project) => {
  projectsHTML += `
  <div class="project-container">
  <div class="image"><img src="${project.image}" /></div>
  <div class="title">${project.title}</div>
  <div class="description">
  ${project.description}
  </div>
  
  <button onclick="window.open('weather-app.html', '_blank' )">View Project</button>
  <button onclick="window.location.href='https://github.com/'">Source Code</button>

</div>`
})

document.querySelector(".main").innerHTML = projectsHTML;

