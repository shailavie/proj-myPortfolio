'use strict';

function init() {
    console.log('Projects are ready');
    renderProjs();
}

function renderProjs() {
    var projs = getProjsForDisplay();
    var strHtmls = projs.map(function (proj) {
        return `           
            <div class="col-md-4 col-sm-6 portfolio-item">
            <div class="portfolio-link" onclick="onOpenProjModal('${proj.id}')">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img class="img-fluid proj-img" src="${proj.imgCover}" > </div>
                <div class="portfolio-caption">
                    <h4>${proj.name}</h4>
                    <p class="text-muted">${proj.title}</p>
                </div>
            </div>`
    })
    console.log(projs);
    $('.porfolio-grid').html(strHtmls.join(''));
}


function onOpenProjModal(projId) {
    console.log('i was clicked')
    var proj = getProjById(projId);
    // <div class="portfolio-modal modal fade" id="portfolioModal1" tabindex="-1" role="dialog" aria-hidden="true">
    var strHtml = `
    <div class="portfolio-modal modal hide" id="modal-proj-${projId}">
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="close-modal" data-dismiss="modal" onclick="onCloseModal('${projId}')">
                <div class="lr">
                    <div class="rl"></div>
                </div>
                </div>
                <div class="container">
                <div class="row">
                    <div class="col-lg-8 mx-auto">
                    <div class="modal-body">
                        <!-- Project Details Go Here -->
                        <h2>${proj.name}</h2>
                        <p class="item-intro text-muted">${proj.title}</p>
                        <img class="img-fluid d-block mx-auto" src="${proj.imgCover}" alt="">
                        <p>${proj.desc}</p>
                        <ul class="list-inline">
                        <li>Date: ${proj.createdAt}</li>
                        <li><a href="${proj.link}" target="_blank">Link</a></li>
                        </ul>
                        <button class="btn btn-primary" data-dismiss="modal" type="button" onclick="onCloseModal('${projId}')">
                        <i class="fa fa-times"></i>
                        Close Project</button>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>`;
    var $projModal = $('.proj-modal-container')
    $projModal.show();
    $projModal.html(strHtml);
    var elModal = document.getElementById(`modal-proj-${projId}`)
    elModal.style.display = 'block'
}

function onCloseModal(projId) {
    var elModal = document.getElementById(`modal-proj-${projId}`)
    elModal.style.display = 'none'
}

/*
<li>Client: Threads</li>
<li>Category: Illustration</li>
*/

function validateForm() {
    var name = document.getElementById('name').value;
    if (name == "") {
        document.getElementById('status').innerHTML = "Name cannot be empty";
        return false;
    }
    var email = document.getElementById('email').value;
    if (email == "") {
        document.getElementById('status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
            document.getElementById('status').innerHTML = "Email format invalid";
            return false;
        }
    }
    var subject = document.getElementById('subject').value;
    if (subject == "") {
        document.getElementById('status').innerHTML = "Subject cannot be empty";
        return false;
    }
    var message = document.getElementById('message').value;
    if (message == "") {
        document.getElementById('status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.getElementById('status').innerHTML = "Sending...";
    document.getElementById('contact-form').submit();

}
 