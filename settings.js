viewer.setPointSize(1.0);
viewer.setMinPointSize(1.0);
viewer.setMaxPointSize(3.0);
viewer.setPointSizing(Potree.PointSizeType.FIXED);
viewer.setPointColorType(Potree.PointColorType.RGB);
viewer.setClipMode(Potree.ClipMode.HIGHLIGHT_INSIDE);
viewer.setQuality(Potree.Quality.SQUARE);
viewer.setEDLEnabled(true);
viewer.setEDLRadius(1.4);
viewer.setEDLStrength(1.0);
viewer.setBackground("gradient");
viewer.setPointBudget(1000000);
viewer.setShowBoundingBox(false);
viewer.setShowSkybox(false);
viewer.setUseDEMCollisions(false);
viewer.setMinNodeSize(100);
viewer.setHeightRange(0, 1000);
viewer.setIntensityRange(0, 255);
viewer.setIntensityGamma(1);
viewer.setIntensityContrast(0);
viewer.setIntensityBrightness(0);
viewer.setRGBGamma(1);
viewer.setRGBContrast(0);
viewer.setRGBBrightness(0);
viewer.setMoveSpeed(10);
viewer.setFOV(60);
viewer.setBackgroundColor(new THREE.Color(255, 255, 255));

//DEFAULT
viewer.setEDLEnabled(true);
viewer.setFOV(60);
viewer.setPointBudget(2_000_000);
//<!-- INCLUDE SETTINGS HERE -->
viewer.loadSettingsFromURL();