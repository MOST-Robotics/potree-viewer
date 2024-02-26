$(document).ready(function(){

    $.getJSON('info.json', function(data) {

        var info = data.project_info;
        console.log(info);

        //Toggle info-button
        if(info.visible != "true"){
            document.querySelector('.info-button').remove();
        }
        //Toggle systems
        if(info.systems.visible != "true"){
            document.querySelector('#inner-panel_systems').remove();
        }
        //Toggle params
        if(info.params.visible != "true"){
            document.querySelector('#inner-panel_params').remove();
        }
        //Toggle data
        if(info.data.visible != "true"){
            document.querySelector('#inner-panel_data').remove();
        }

        //Set system platform
        if(info.systems.platform.visible != "true"){
            document.querySelector('.info-platform').remove();
        }
        document.querySelector('#platform_type').innerHTML = info.systems.platform.type;
        document.querySelector('#platform_name').innerHTML = info.systems.platform.name;
        document.querySelector('#platform_name').setAttribute('href', info.systems.platform.link);

        var platform_type = info.systems.platform.type;
        switch(platform_type.toLowerCase()){
            case "drone":
            case "drohne":
            case "uav":
            case "multicopter":
            case "multirotor":
            case "quadrocopter":
            case "hexacopter":
                document.querySelector('#platform_icon').style.color = '#ff0000';
                break;
            case "vtol":
            case "evtol":
            case "fixed-wing":
            case "fixed-wings":
            case "glider":
                document.querySelector('#platform_icon').style.color = '#00ff00';
                break;
            case "car":
            case "auto":
            case "mobile":
            case "kfz":
            case "kraftfahrzeug":
            case "vehicle":
            case "motor vehicle":
                document.querySelector('#platform_icon').style.color = '#0000ff';
                break;
            case "air craft":
            case "aircraft":
            case "plane":
            case "flugzeug":
                document.querySelector('#platform_icon').style.color = '#ffff00';
                break;
            case "handheld":
            case "walk":
            case "togo":
            case "to go":
            case "backpack":
            case "rucksack":
            case "zu fuß":
            case "gehend":
            case "laufend":
            case "tragend":
            case "getragen":
                document.querySelector('#platform_icon').style.color = '#ff00ff';
                break;
        }

        //Set system payload
        if(info.systems.payload.visible != "true"){
            document.querySelector('.info-payload').remove();
        }
        document.querySelector('#payload_type').innerHTML = info.systems.payload.type;
        document.querySelector('#payload_name').innerHTML = info.systems.payload.name;
        document.querySelector('#payload_name').setAttribute('href', info.systems.payload.link);

        //Set flight height
        if(info.params.flight_height.visible != "true"){
            document.querySelector('.flightHeight').remove();
        }
        document.querySelector('#flightHeight').innerHTML = info.params.flight_height.content;

        //Set flight speed
        if(info.params.flight_speed.visible != "true"){
            document.querySelector('.flightSpeed').remove();
        }
        document.querySelector('#flightSpeed').innerHTML = info.params.flight_speed.content;

        //Set flight time
        if(info.params.flight_time.visible != "true"){
            document.querySelector('.flightTime').remove();
        }
        document.querySelector('#flightTime').innerHTML = info.params.flight_time.content;

        //Set overlap
        if(info.params.overlap.visible != "true"){
            document.querySelector('.overlap').remove();
        }
        document.querySelector('#overlap').innerHTML = info.params.overlap.content;

        //Set cross flight
        if(info.params.cross_flight.visible != "true"){
            document.querySelector('.crossFlight').remove();
        }
        document.querySelector('#crossFlight').innerHTML = info.params.cross_flight.content;

        //Set area
        if(info.data.area.visible != "true"){
            document.querySelector('.area').remove();
        }
        document.querySelector('#area').innerHTML = info.data.area.content;

        //Set point budget
        if(info.data.point_budget.visible != "true"){
            document.querySelector('.pointBudget').remove();
        }
        document.querySelector('#pointBudget').innerHTML = info.data.point_budget.content;
        
        //Set point density
        if(info.data.point_density.visible != "true"){
            document.querySelector('.pointDensity').remove();
        }
        document.querySelector('#pointDensity').innerHTML = info.data.point_density.content;

    }).fail(function() {
        document.querySelector('.info-button').remove();
        console.log("Can't read project information");
    });

    //Set project title and description
    var title = document.querySelector('[property="og:title"]').getAttribute('content');
    var description = document.querySelector('[name="description"]').getAttribute('content');

    //Add info button
    var potreeQuickButtons = document.querySelector('#potree_quick_buttons');
    let infoButton = document.createElement('button');
    infoButton.classList.add('info-button');
    infoButton.innerHTML = `<i class="fa fa-info"></i>`;
    potreeQuickButtons.appendChild(infoButton);

    //Add info container
    document.querySelector('.info-area').innerHTML = `
    
    <div class="info-container info-container-closed" id="info">

			<div class="info-header">
				<h1 id="info-title">`+ title +`</h1>
				<img class="info-close-button" src="./libs/guide/icons/close.svg"/>
			</div>
			<p>`+ description +`</p>
			<div id="inner-panel_systems" class="inner-panel" state="1" style="display:">
				<h3>Systems</h3>
				<div style="display: flex; flex-direction: row; row-gap: 16px; margin-top: 8px; flex-wrap: wrap;">

					<div class="info-platform" style="display: flex; flex-direction: row; flex-grow: 1; width: 50%; min-width: 240px">
						<i id="platform_icon" class="fa fa-circle"></i>
						<div>
							<p id="platform_type">Drone / VTOL</p>
							<a id="platform_name" href=""></a>
						</div>
					</div>

					<div class="info-payload" style="display: flex; flex-direction: row; flex-grow: 1; width: 50%; min-width: 240px">
						<i id="payload_icon" class="fa fa-circle"></i>
						<div>
							<p id="payload_type">LiDAR / Kamera</p>
							<a id="payload_name" href="">YellowScan Navigator</a>
						</div>
					</div>

				</div>
			</div>
			<div id="inner-panel_params" class="inner-panel" state="1">
				<h3>Flight parameters</h3>
				<div style="display: flex; flex-direction: row; row-gap: 16px; margin-top: 8px; flex-wrap: wrap;">

					<div class="info-params flightHeight" style="display: flex; flex-direction: column; width: 33%; min-width: 120px">
						<p>Flight height</p>
						<p id="flightHeight">100 m</p>
					</div>

					<div class="info-params flightSpeed" style="display: flex; flex-direction: column; width: 33%; min-width: 120px">
						<p>Flight speed</p>
						<p id="flightSpeed">10 m/s</p>
					</div>

					<div class="info-params flightTime" style="display: flex; flex-direction: column; width: 33%; min-width: 120px">
						<p>Flight time</p>
						<p id="flightTime">1h</p>
					</div>

					<div class="info-params overlap" style="display: flex; flex-direction: column; width: 33%; min-width: 120px">
						<p>Overlap</p>
						<p id="overlap">10 %</p>
					</div>

					<div class="info-params crossFlight" style="display: flex; flex-direction: column; width: 33%; min-width: 120px">
						<p>Cross flight</p>
						<p id="crossFlight">No</p>
					</div>

				</div>
			</div>
			<div id="inner-panel_data" class="inner-panel" state="1">
				<h3>Data info</h3>

				<div style="display: flex; flex-direction: row; row-gap: 16px; margin-top: 8px; flex-wrap: wrap;">

					<div class="info-params area" style="display: flex; flex-direction: column; width: 33%; min-width: 120px">
						<p>Area</p>
						<p id="area">10.000 m²</p>
					</div>

					<div class="info-params pointBudget" style="display: flex; flex-direction: column; width: 33%; min-width: 120px">
						<p>Point budget</p>
						<p id="pointBudget">100.000</p>
					</div>

					<div class="info-params pointDensity" style="display: flex; flex-direction: column; width: 33%; min-width: 120px">
						<p>Point density</p>
						<p id="pointDensity">500 pt/m²</p>
					</div>

			</div>
		</div>
    `;

    $('.info-close-button').click(function(){
        $('#info').addClass('info-container-closed');
    });
    $('.info-button').click(function(){
        $('#info').removeClass('info-container-closed');
    });

});