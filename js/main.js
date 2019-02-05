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


function sendForm(){
    var subject = $('#subject').val();
    var text = $('#text').val();
    // var url =`https://mail.google.com/mail/?view=cm&fs=1&to=shai.lavie@gmail.com&su=${subject}SUBJECT&body=${text}`;
    submitEmail(subject,text)
}

function submitEmail($subject,$msg) {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=shai.lavie@gmail.com&su='+ $subject +'&body='+ $msg +'', '_blank');
}


function onOpenProjModal(projId) {
    console.log('i was clicked')
    var proj = getProjById(projId);
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
                        <a href="${proj.link}" target="_blank"><img class="img-fluid d-block mx-auto img-box" src="${proj.imgCover}" alt=""></a>
                        <p>${proj.desc}</p>
                        <ul class="list-inline">
                        <li>Date: ${proj.publishedAt}</li>
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

