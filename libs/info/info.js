$(document).ready(function(){

   var potreeQuickButtons = document.querySelector('#potree_quick_buttons');

   let infoButton = document.createElement('div');
   infoButton.classList.add('info-button');
   infoButton.innerHTML = `<i class="fa fa-info"></i>`;
   
   potreeQuickButtons.appendChild(infoButton);

});