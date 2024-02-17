$(document).ready(function(){

     // Get the URL of the current page
     const url = window.location.href;

     // Event Delegation: Add click event listener to the document, listen for clicks on '.share-button' elements
     $(document).on('click', '.share-button', function() {

         // Get the social media platform from the button's class name
         const platform = $(this).attr('class').split(' ')[1];
 
         // Set the URL to share based on the social media platform
         let shareUrl;
         switch (platform) {
             case 'facebook':
                 shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
                 break;
             case 'twitter':
                 shareUrl = `https://twitter.com/share?url=${encodeURIComponent(url)}`;
                 break;
             case 'linkedin':
                 shareUrl = `https://www.linkedin.com/shareArticle?url=${encodeURIComponent(url)}`;
                 break;
             case 'pinterest':
                 shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}`;
                 break;
             case 'reddit':
                 shareUrl = `https://reddit.com/submit?url=${encodeURIComponent(url)}`;
                 break;
             case 'whatsapp':
                 shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
                 break;
         }
 
         // Open a new window to share the URL
         window.open(shareUrl, '_blank');

    });

    var potreeQuickButtons = document.querySelector('#potree_quick_buttons');

    let shareButtonsDiv = document.createElement('div');
    shareButtonsDiv.classList.add('share-buttons');
    shareButtonsDiv.innerHTML = `
        <button class="share_menu_button">
            <i class="fa fa-up-right-from-square"></i>
        </button>
        <button class="share-button linkedin">
            <i class="fab fa-linkedin-in"></i>
        </button>
        <button class="share-button facebook">
            <i class="fab fa-facebook-f"></i>
        </button>
        <button class="share-button whatsapp">
            <i class="fab fa-whatsapp"></i>
        </button>
        <button class="share-button twitter">
            <i class="fab fa-twitter"></i>
        </button>
    `;
    
    potreeQuickButtons.appendChild(shareButtonsDiv);

});