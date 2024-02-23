$(document).ready(function(){

     const url = window.location.href;

     //Share URL
     $(document).on('click', '.share-button', function() {

         const platform = $(this).attr('class').split(' ')[1];
 
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
             case 'whatsapp':
                 shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(url)}`;
                 break;
             case 'email':
                 shareUrl = `mailto:?body=${encodeURIComponent(url)}`;
                 break;
         }
 
         window.open(shareUrl, '_blank');

    });

    var potreeQuickButtons = document.querySelector('#potree_quick_buttons');

    // Add share buttons
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
        <button class="share-button email">
            <i class="fa fa-envelope"></i>
        </button>
    `;

    // Add capture buttons
    let captureButton = document.createElement('button');
    captureButton.classList.add('capture-button');
    captureButton.innerHTML = `
        <i class="fa fa-image"></i>
    `;

    potreeQuickButtons.appendChild(captureButton);
    potreeQuickButtons.appendChild(shareButtonsDiv);

    const host = window.location.hostname;
    var imgID = generateImgID(8);
    var imgURL = host + "/captures/" + imgID + ".jpg";

    //Share capture
    $('.capture-button').click(function(){

        //Get canvas
        const canvas = document.querySelectorAll('canvas')[1];
        var ctx = canvas.getContext('2d');

        //Create image
        const img    = canvas.toDataURL('image/jpeg');

        //Save image
        imgID = generateImgID(8);
        imgURL = host + "/share/" + imgID + ".jpg";
        imgPath = "/share/" + imgID + ".jpg";

        $.ajax({
            type: "POST",
            url: "libs/share/save.php",
            data: {
                image: img,
                code: imgID // Send the generated code to the server
            },
            success: function(data){
                console.log("Image saved successfully");
                console.log(imgURL);
                console.log(data);
            },
            error: function(err){
                console.log("Error saving image");
            }
        });

        //Set image
        setTimeout(function(){
            document.getElementById('capture_image').src = imgPath;
            document.getElementByClass('imageLoader').remove();
        }, 1000);
        /* document.getElementById('capture_image').src = imgPath; */

        $('#capture').removeClass('capture-container-closed');

    });

    $('.capture-close-button').click(function(){

        $('#capture').addClass('capture-container-closed');

    });
    
    function generateImgID(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

     //Share image
     $(document).on('click', '.capture-share-button', function() {

        const platform = $(this).attr('class').split(' ')[1];

        let imgShareUrl;
        switch (platform) {
            case 'facebook':
                imgShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${imgURL}`;
                break;
            case 'twitter':
                imgShareUrl = `href="https://twitter.com/intent/tweet?url=${imgURL}`;
                break;
            case 'linkedin':
                imgShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${imgURL}`;
                break;
            case 'whatsapp':
                imgShareUrl = `https://wa.me/?text=${imgURL}`;
                break;
            case 'email':
                imgShareUrl = `mailto:?body=${imgURL}`;
                break;
        }

        window.open(imgShareUrl, '_blank');

   });

   //Download image
   document.getElementById('capture_download').addEventListener('click', function() {
    /* var imageDataUrl = document.getElementById('capture_image').src; // Die Data-URL des Bildes */
    var element = document.createElement('a');
    element.setAttribute('href', imgURL); //imageDataUrl
    element.setAttribute('download', `Pointcloud-Viewer_${imgID}.jpg`);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
});

});