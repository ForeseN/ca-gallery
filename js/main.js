'use strict'

// A $( document ).ready() block.
$(document).ready(initPage())

function initPage() {
    renderProjects()
    addEventListeners()
    $('.modal-new').hide()
    $('.dark-overlay').hide()
}

function addEventListeners() {
    $('.close-modal').on('click', function () {
        $('.modal-new').hide()
        $('.dark-overlay').hide()
    })
    $('.dark-overlay').on('click', function () {
        $('.modal-new').hide()
        $('.dark-overlay').hide()
    })
    $('.contact-submit').on('click', submitForm)
}

function submitForm() {
    const nameValue = $('.name-form').val()
    const emailValue = $('.email-form').val()
    const subjectValue = $('.subject-form').val()
    const messageValue = $('.main-message-form').val()
    console.log(nameValue, emailValue, subjectValue, messageValue)

    window.open(
        `https://mail.google.com/mail/?view=cm&fs=1&to=yagosik@gmail.com&su=${subjectValue}&body=from:${emailValue}, Name: ${nameValue}, \nMessage:${messageValue}&bcc=someone.else@example.com`
    )
}

function renderProjects() {
    const projects = getProjects()
    var strHTML = projects.map(project => {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" data-project-id="${project.id}">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid" src="img/portfolio/${project.id}.png" alt="">
            </a>
            <div class="portfolio-caption">
                <h4>${project.name}</h4>
                <p class="text-muted">${project.labels.join(', ')}</p>
            </div>
        </div>
        `
    })

    $('.javascript-projects-insert').append(strHTML.join(''))
    addProjectsModalListeners()
}

function openModal(projectId) {
    const project = getProject(projectId)
    $('.modal-new img').attr('src', `img/portfolio/${project.id}.png`)
    $('.modal-new h2').text(project.name)
    $('.modal-new .item-intro').text(project.title)
    // $('.modal .desc').text(project.desc)
    $('.modal-new .date').text(new Date(project.publishedAt).toLocaleDateString())
    $('.modal-new .categories').text(project.labels.join(', '))
    $('.dark-overlay').show()
    $('.modal-new').fadeIn(500)
}

function addProjectsModalListeners() {
    const $elImg = $('.portfolio-link')
    $elImg.on('click', function () {
        openModal($(this).attr('data-project-id'))
    })
}

/* <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>Project Name</h2>
                <p class="item-intro text-muted">Lorem ipsum dolor sit amet consectetur.</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/01-full.jpg" alt="">
                <p>Use this area to describe your project. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
                  blanditiis
                  dolorem culpa incidunt minus dignissimos deserunt repellat aperiam quasi sunt officia expedita beatae
                  cupiditate,
                  maiores repudiandae, nostrum, reiciendis facere nemo!</p>
                <ul class="list-inline">
                  <li>Date: January 2017</li>
                  <li>Client: Threads</li>
                  <li>Category: Illustration</li>
                </ul>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                  <i class="fa fa-times"></i>
                  Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */
