window.viewer = new Potree.Viewer(document.getElementById("potree_render_area"));

viewer.setEDLEnabled(true);
viewer.setFOV(60);
viewer.setPointBudget(5_000_000);
viewer.setEDLRadius(1.0);
viewer.setEDLStrength(0.2);
viewer.setBackground("none");

//viewer.useHQ = true;
function checkDeviceType() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    if (/android/i.test(userAgent) || /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return 'mobile';
    } else {
        return 'desktop';
    }
}
if (checkDeviceType() === 'desktop') {
    viewer.useHQ = true;
}else{
	viewer.useHQ = false;
}

viewer.loadSettingsFromURL();
viewer.setDescription();
		
viewer.loadGUI(() => {
	viewer.setLanguage('en');
	$("#menu_appearance").next().show();
	$("#menu_tools").next().show();
	$("#menu_clipping").next().show();
	viewer.toggleSidebar();
});

$(document).ready(function(){

	//Get canvas
	const canvas = document.querySelectorAll('canvas')[1];
	const ctx = canvas.getContext('webgl');

	// Scale canvas
	var displayWidth = 1920;
	var displayHeight = 1080;
	var scale = 4;

	if (!ctx) {
		console.error('WebGL is not supported.');
	} else {
		canvas.style.width = displayWidth + 'px';
		canvas.style.height = displayHeight + 'px';
		canvas.width = displayWidth * scale;
		canvas.height = displayHeight * scale;
		/* canvas.width = '5160';
		canvas.height = '2880';
		ctx.viewport(0, 0, canvas.width, canvas.height); */
		console.log('WebGL context obtained successfully.');
	};

	//inner-panel function
	
	/* document.querySelectorAll('.inner-panel h3').forEach(h3 => {
		h3.addEventListener('click', function() {
		// Finde das übergeordnete Panel-Element
		const panel = this.closest('.inner-panel');
			if (panel) {
				// Umschalten des 'state' Attributs
				const currentState = panel.getAttribute('state');
				panel.setAttribute('state', currentState === '0' ? '1' : '0');
			}
		});
	}); */

	$(document).on('click', '.inner-panel h3', function() {
        const panel = $(this).closest('.inner-panel');
        if (panel.length) {
            const currentState = panel.attr('state');
            panel.attr('state', currentState === '0' ? '1' : '0');
        }
    });

	setTimeout(function(){

		//Remove measurements
		document.querySelector('[title="Angle measurement"]').remove();
		document.querySelector('[title="Point measurement"]').remove();
		document.querySelector('[title="Circle measurement"]').remove();
		document.querySelector('[data-i18n="Azimuth"]').remove();
		document.querySelector('[title="Annotation"]').remove();

		//document.querySelector('[title="Volume measurement"]').remove();
		document.querySelectorAll('[src*="sphere_distances"]').forEach(function(el) {
			if (el.src.includes("sphere_distances")) {
				el.remove();
			}
		});

		//Remove navigations
		document.querySelector('[title="Fly control"]').remove();
		document.querySelector('[title="Helicopter control"]').remove();
		document.querySelector('[title="Full extent"]').remove();
		document.querySelector('[title="Left view"]').remove();
		document.querySelector('[title="Righ view"]').remove();
		document.querySelector('[title="Top view"]').remove();
		document.querySelector('[title="Bottom view"]').remove();
		document.querySelector('[title="Back view"]').remove();
		document.querySelector('[title="Front view"]').remove();

		//Default accordion
		$(".accordion > div").hide();
		$("#menu_tools").next().show();
		$("#menu_filters").next().show();
		$("#menu_scene").next().show();

		//Remove classifications
		var classElement = document.querySelectorAll('#classificationList li');
		// classElement[3].style.display = 'none'; //ground
		classElement[4].style.display = 'none'; //low vegetation
		classElement[5].style.display = 'none'; //medium vegetation
		classElement[7].style.display = 'none'; //building
		classElement[8].style.display = 'none'; //lowpoint
		classElement[9].style.display = 'none'; //keypoint
		classElement[11].style.display = 'none'; //overlap

		//Change classifications labels
		var classLabels = document.querySelectorAll('span');
		classLabels.forEach(function(span) {

			if (span.textContent === 'show/hide all') {
				span.textContent = 'Show / Hide all';
			};
			if (span.textContent === 'never classified') {
				span.textContent = 'Unclassfied';
			};
			if (span.textContent === 'ground') {
				span.textContent = 'Ground';
			};
			if (span.textContent === 'unclassified') {
				span.textContent = 'Objects';
			};
			if (span.textContent === 'high vegetation') {
				span.textContent = 'Underwater';
			};
			if (span.textContent === 'water') {
				span.textContent = 'Water';
			};
			if (span.textContent === 'default') {
				span.textContent = 'Default';
			};

		});

		//Remove sidebar elements

		//document.querySelector('#clipping_tools').remove();
		//document.querySelector('#cliptask_options').remove();
		//document.querySelector('#clipmethod_options').remove();
		document.querySelector('#pointsourceid_filter_panel').remove();

		//document.querySelector('#navigation').remove();
		document.querySelector('#lblMoveSpeed').remove();
		document.querySelector('#sldMoveSpeed').remove();
		document.querySelector('[data-i18n="appearance.move_speed"]').remove();
		document.querySelector('#splat_quality_options').remove();
		document.querySelector('#show_bounding_box').remove();
		document.querySelector('[data-i18n="appearance.box"]').remove();
		document.querySelector('#set_freeze').remove();
		document.querySelector('[data-i18n="appearance.freeze"]').remove();

		//Remove export options
		document.querySelector('[download="measure.json"]').remove();
		document.querySelector('[download="potree.json5"]').remove();

		//Enable compass
		//document.querySelector('#live-compass').style.display = "unset";

		//Set inner-panel states
		document.querySelector('#inner-panel_navigation').setAttribute('state', 1);
		document.querySelector('#inner-panel_measurement').setAttribute('state', 0);
		document.querySelector('#inner-panel_classification').setAttribute('state', 1);
		document.querySelector('#inner-panel_returns').setAttribute('state', 0);
		document.querySelector('#inner-panel_gpstime').setAttribute('state', 0);
		document.querySelector('#inner-panel_objects').setAttribute('state', 1);
		document.querySelector('#inner-panel_properties').setAttribute('state', 1);
		document.querySelector('#inner-panel_points').setAttribute('state', 1);
		document.querySelector('#inner-panel_EDL').setAttribute('state', 0);
		document.querySelector('#inner-panel_background').setAttribute('state', 0);
		
	}, 250);

	//Fixes
	setTimeout(function(){

		//Remove empty <li></li> elements
		var listItems = document.querySelectorAll('li');
		listItems.forEach(function(li) {
		if (!li.hasChildNodes()) {
			li.parentNode.removeChild(li);
		}
		});
		//Remove empty <legend></legend> elements
		var listItems = document.querySelectorAll('legend');
		listItems.forEach(function(legend) {
		if (!legend.hasChildNodes()) {
			legend.parentNode.removeChild(legend);
		}
		});

		//Select elements
		document.querySelector('#j1_8_anchor').click();
		document.querySelector('#background_options_none').click();

		//Scroll to top
		var sidebar = document.getElementById("potree_sidebar_container");
		sidebar.scrollTop = 0;

	  }, 500);

	  setTimeout(function(){
		document.querySelector('#loaderPopup').remove();
	  }, 1250);

});