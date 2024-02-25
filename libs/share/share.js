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

    //Set project title and description
    var title = document.querySelector('title').innerText;
    document.querySelector('.capture-area').innerHTML = `

        <div class="capture-container capture-container-closed" id="capture">

			<div class="capture-header">
				<h1 id="capture-title">`+ title +`</h1>
				<img class="capture-close-button" src="./libs/guide/icons/close.svg"/>
			</div>

			<div style="min-width: 640px; min-height: 320px;">
			<img id="capture_image" src="" style="display: none; opacity: 0;"></img>
			<div id="imageLoader" style="display: flex; opacity: 100;">
				<lottie-player src="https://lottie.host/35121da5-e0b3-4063-808e-f4e64db99e13/ts0YewjQik.json" style="width: 120px; height: 120px" background="#00000000" speed="1" direction="1" mode="normal" loop="" autoplay=""></lottie-player>
			</div>
			</div>

			<div style="display: flex; flex-direction: row;">

				<div style="display: flex; flex-direction: row; gap: 8px; align-items: center; flex-grow: 1">
					<p>Share now</p>
					<button class="capture-share-button linkedin">
						<i class="fab fa-linkedin-in"></i>
					</button>
					<button class="capture-share-button facebook">
						<i class="fab fa-facebook-f"></i>
					</button>
					<button class="capture-share-button whatsapp">
						<i class="fab fa-whatsapp"></i>
					</button>
					<button class="capture-share-button twitter">
						<i class="fab fa-twitter"></i>
					</button>
					<button class="capture-share-button email">
						<i class="fa fa-envelope"></i>
					</button>
				</div>

				<div style="display: flex; align-items: center">
					<button id="capture_download"><i class="fa-solid fa-arrow-down"></i>Download</button>
				</div>

			</div>

		</div>
        
    `;

    const host = window.location.hostname;
    var imgID = generateImgID(8);
    var imgURL = host + "/share/" + imgID + ".jpg";

    //Share capture
    $('.capture-button').click(function(){

        //Get canvas
        const canvas = document.querySelectorAll('canvas')[1];

        // Scale canvas
        /* const ctx = canvas.getContext('webgl');
        if (!ctx) {
            console.error('WebGL is not supported.');
        } else {
            console.log('WebGL context obtained successfully.');
        };
        canvas.width = '3840';
        canvas.height = '2160';
        ctx.viewport(0, 0, canvas.width, canvas.height); */


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
            document.getElementById('imageLoader').style.opacity = "0";
            document.getElementById('imageLoader').style.display = "none";
            document.getElementById('capture_image').style.display = "unset";
            document.getElementById('capture_image').style.opacity = "100";
        }, 1000);
        /* document.getElementById('capture_image').src = imgPath; */

        $('#capture').removeClass('capture-container-closed');

    });

    $('.capture-close-button').click(function(){

        $('#capture').addClass('capture-container-closed');
        document.getElementById('capture_image').style.opacity = "0";
        document.getElementById('capture_image').style.display = "none";
        document.getElementById('imageLoader').style.display = "flex";
        document.getElementById('imageLoader').style.opacity= "100";

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