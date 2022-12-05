'use strict'

$(document).ready(initPage())

function initPage() {
    renderProjects()
    addEventListeners()
    hideModals()
}

function hideModals() {
    $('.modal-new').hide()
    $('.dark-overlay').hide()
    $('.offcanvas-aside').removeClass('offcanvas-aside-open')
    $('.offcanvas-btn').removeClass('offcanvas-btn-open')
}

function addEventListeners() {
    $('.close-modal').on('click', hideModals)
    $('.dark-overlay').on('click', hideModals)
    $('.contact-submit').on('click', submitForm)
    $('.call-for-action button').on('click', openCanvas)
}

function submitForm() {
    const nameValue = $('.name-form').val()
    const emailValue = $('.email-form').val()
    const subjectValue = $('.subject-form').val()
    const messageValue = $('.main-message-form').val()

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
    $('.modal-new .btn-modal-check').removeClass('disabled')
    $('.modal-new .btn-modal-check').text('CHECK IT OUT')
    $('.modal-new .btn-modal-check').attr('href', project.url)
    console.log(project.url)
    if (project.url == 'none') {
        $('.modal-new .btn-modal-check').addClass('disabled')
        $('.modal-new .btn-modal-check').text('Not Available')
    }
    $('.dark-overlay').show()
    $('.modal-new').fadeIn(500)
}

function addProjectsModalListeners() {
    const $elImg = $('.portfolio-link')
    $elImg.on('click', function () {
        openModal($(this).attr('data-project-id'))
    })
}
