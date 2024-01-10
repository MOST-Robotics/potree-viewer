window.viewer = new Potree.Viewer(document.getElementById("potree_render_area"));

viewer.setEDLEnabled(true);
viewer.setFOV(60);
viewer.setPointBudget(2_500_000);
viewer.setEDLRadius(1.0);
viewer.setEDLStrength(0.2);
viewer.useHQ = true;

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
	setTimeout(function(){

		//Remove measurements
		document.querySelector('[title="Angle measurement"]').remove();
		document.querySelector('[title="Point measurement"]').remove();
		document.querySelector('[title="Circle measurement"]').remove();
		document.querySelector('[data-i18n="Azimuth"]').remove();
		document.querySelector('[title="Area measurement"]').remove();
		document.querySelector('[title="Annotation"]').remove();

		//Default accordion
		$(".accordion > div").hide();
		$("#menu_tools").next().show();
		$("#menu_filters").next().show();

		//Remove classifications
		var classElement = document.querySelectorAll('#classificationList li');
		classElement[3].style.display = 'none'; //ground
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

	}, 100)
});