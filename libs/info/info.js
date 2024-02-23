$(document).ready(function(){

    var potreeQuickButtons = document.querySelector('#potree_quick_buttons');

    let infoButton = document.createElement('button');
    infoButton.classList.add('info-button');
    infoButton.innerHTML = `<i class="fa fa-info"></i>`;
    potreeQuickButtons.appendChild(infoButton);

    /* document.querySelector('.info-box').addEventListener('mouseover', function() {

        setTimeout(function(){
            document.querySelector('.info-box').style.maxWidth = '420px';
        }, 250);

        document.querySelector('.info-button').style.width = '48px';
        document.querySelector('.info-button').style.borderRadius = 'var(--border-radius-m) 0 0 var(--border-radius-m)';

    }); */
      
    /* document.querySelector('.info-button').addEventListener('mouseout', function() {

        document.querySelector('.info-box').style.maxWidth = '0px';

        setTimeout(function(){
            document.querySelector('.info-button').style.width = '40px';
            document.querySelector('.info-button').style.borderRadius = 'var(--border-radius-m) var(--border-radius-m) var(--border-radius-m) var(--border-radius-m)';
        }, 500);

    });

    document.querySelector('.info-box').addEventListener('mouseout', function() {

        document.querySelector('.info-box').style.maxWidth = '0px';

        setTimeout(function(){
            document.querySelector('.info-button').style.width = '40px';
            document.querySelector('.info-button').style.borderRadius = 'var(--border-radius-m) var(--border-radius-m) var(--border-radius-m) var(--border-radius-m)';
        }, 500);

    }); */

    //Position correction
    /* var $container = $('#info');
    var containerHeight = $container.outerHeight();
    var containerWidth = $container.outerWidth();

    $container.css({
        'margin-top': -(containerHeight / 2) + 'px',
        'margin-left': -(containerWidth / 2) + 'px'
    }); */

    $('.info-close-button').click(function(){
        $('#info').addClass('info-container-closed');
    });
    $('.info-button').click(function(){
        $('#info').removeClass('info-container-closed');
    });

    /* let infoBox = document.createElement('div');
    infoBox.classList.add('info-wrapper');
    infoBox.innerHTML = `
        <div class="info-button">
            <i class="fa fa-info"></i>
        </div>
        <div class="info-box">

            <h1>Projekt Titel</h1>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            
            <h2>Systeme</h2>
            <div style="display: flex; flex-direction: row; width: 100%;">

                <div style="display: flex; flex-direction: row; width: 50%">
                    <i class="fa fa-circle"></i>
                    <div style="display: flex; flex-direction: column;">
                        <h3>Plattform</h3>
                        <a href="">Acecore ZOE X4</a>
                    </div>
                </div>

                <div style="display: flex; flex-direction: row; width: 50%">
                <i class="fa fa-circle"></i>
                    <div style="display: flex; flex-direction: column;">
                        <h3>LiDAR/Kamera</h3>
                        <a href="">YellowScan Navigator</a>
                    </div>
                </div>

            </div>
        </div>
    `; */

    potreeQuickButtons.appendChild(infoBox);

    /* document.querySelector('.info-button').addEventListener('mouseover', function() {
        document.querySelector('.info-box').style.maxHeight = '512px';
    });
      
    document.querySelector('.info-button').addEventListener('mouseout', function() {
        document.querySelector('.info-box').style.maxHeight = '0px';
    }); */

});