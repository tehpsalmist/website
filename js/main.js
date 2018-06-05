const main = document.querySelector('.main')
const hireme = document.getElementById('hireme')

hireme.innerHTML = '<a href="ma' + 'ilto:bstew' + 'ardcode' + 's@g' + 'mai' + 'l.c' + 'om?subj' +
  'ect=' + 'Let\'s Work Together">hire me!</a>'

window.fetch('/data/projects.json')
  .then(data => data.text())
  .then(text => {
    let projects
    let jason = JSON.parse(text)

    if (window.currentPage === 'projects') {
      projects = jason.projects
    } else if (window.currentPage === 'home') {
      projects = jason.projects.filter(project => project.order <= 4)
    }

    projects.map(project => {
      let projectNode = document.createElement('div')
      projectNode.classList.add('main-item')
      projectNode.style.order = project.order
      projectNode.innerHTML =
        `<div class="project-container" tabindex="${project.order}">
  <h2 class="project-title">
    ${project.title}
  </h2>
  <div class="project-img-container">
    <img src="/${project.imgSrc}" alt="${project.imgAlt}" class="project-img">
  </div>
  <p class="project-details project-description">
    ${project.description}
  </p>
  <div class="project-details">
    <button class="project-button" onclick="window.open('${project.projectURL}', '_blank')">Live Project</button>
    <button class="project-button" onclick="window.open('${project.codeURL}', '_blank')">Source Code</button>
  </div>
  <div class="project-details">
    <div class="project-tech-list">
      <h3 class="project-tech-list-title">
        Technologies Used
      </h3>
      ${project.tech.map(item => `<span class="project-tech-list-item">${item}</span>`).join('')}
    </div>
  </div>
</div>`
      main.appendChild(projectNode)
    })

    let imgs = document.images
    let l = imgs.length
    let count = 1

    Array.from(imgs).forEach(img => img.addEventListener('load', () => {
      count++
      if (count === l) {
        setMainHeights()
      }
    }))

    Array.from(projectItems).forEach(project => {
      project.addEventListener('click', () => {
        project.classList.toggle('project-active')
        Array.from(project.getElementsByClassName('project-details'))
          .forEach(el => el.classList.toggle('show-details'))
      })
      project.addEventListener('mouseover', () => {
        project.classList.add('project-active')
        Array.from(project.getElementsByClassName('project-details'))
          .forEach(el => el.classList.add('show-details'))
      })
      project.addEventListener('mouseout', () => {
        project.classList.remove('project-active')
        Array.from(project.getElementsByClassName('project-details'))
          .forEach(el => el.classList.remove('show-details'))
      })
    })
  })

const mainItems = main.getElementsByClassName('main-item')
const projectItems = main.getElementsByClassName('project-container')

function setMainHeights () {
  viewportWidth = window.innerWidth
  Array.from(mainItems).forEach(el => {
    el.style.height = 'auto'
  })

  let heights = []

  Array.from(projectItems).forEach(el => {
    let height = window.getComputedStyle(el).getPropertyValue('height')
    heights.push(height.replace('px', ''))
  })

  let finalHeight = Math.max(...heights)

  Array.from(mainItems).forEach(el => {
    el.style.height = `${finalHeight}px`
  })

  document.body.classList.remove('nohover')
}
let viewportWidth = window.innerWidth
window.onresize = function () {
  if (viewportWidth !== window.innerWidth) {
    setMainHeights()
  }
}
