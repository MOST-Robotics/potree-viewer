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