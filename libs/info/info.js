$(document).ready(function(){

    const drone_icon = `
        <g id="uuid-444628f1-cc0c-4376-8afe-132f6726c55b" data-name="drone">
            <path shape-rendering="optimizeQuality" d="M422,332c-19.41,0-37.28,6.31-51.99,16.8l-13.33-13.33c-33.89-46.33-33.89-112.61,0-158.94l13.33-13.33c14.71,10.48,32.58,16.8,51.99,16.8,49.63,0,90-40.37,90-90S471.63,0,422,0s-90,40.37-90,90c0,19.41,6.31,37.28,16.8,51.99l-13.33,13.33c-46.34,33.9-112.6,33.9-158.94,0l-13.33-13.33c10.49-14.71,16.8-32.58,16.8-51.99C180,40.37,139.63,0,90,0S0,40.37,0,90s40.37,90,90,90c19.41,0,37.28-6.31,51.99-16.8l13.33,13.33c33.89,46.33,33.89,112.61,0,158.94l-13.33,13.33c-14.71-10.48-32.58-16.8-51.99-16.8-49.63,0-90,40.37-90,90s40.37,90,90,90,90-40.37,90-90c0-19.41-6.31-37.28-16.8-51.99l13.33-13.33c46.34-33.9,112.6-33.9,158.94,0l13.33,13.33c-10.49,14.71-16.8,32.58-16.8,51.99,0,49.63,40.37,90,90,90s90-40.37,90-90-40.37-90-90-90ZM422,30c33.09,0,60,26.91,60,60s-26.91,60-60,60c-11.09,0-21.37-3.23-30.29-8.5l30.29-30.29,4.39,4.39c5.86,5.86,15.35,5.86,21.21,0s5.86-15.35,0-21.21l-30-30c-5.86-5.86-15.35-5.86-21.21,0s-5.86,15.35,0,21.21l4.39,4.39-30.29,30.29c-5.27-8.92-8.5-19.19-8.5-30.29,0-33.09,26.91-60,60-60ZM141.5,120.29l-30.29-30.29,4.39-4.39c5.86-5.86,5.86-15.35,0-21.21s-15.35-5.86-21.21,0l-30,30c-5.86,5.86-5.86,15.35,0,21.21s15.35,5.86,21.21,0l4.39-4.39,30.29,30.29c-8.92,5.27-19.19,8.5-30.29,8.5-33.09,0-60-26.91-60-60s26.91-60,60-60,60,26.91,60,60c0,11.09-3.23,21.37-8.5,30.29ZM90,482c-33.09,0-60-26.91-60-60s26.91-60,60-60c11.09,0,21.37,3.23,30.29,8.5l-30.29,30.29-4.39-4.39c-5.86-5.86-15.35-5.86-21.21,0s-5.86,15.35,0,21.21l30,30c5.86,5.86,15.35,5.86,21.21,0s5.86-15.35,0-21.21l-4.39-4.39,30.29-30.29c5.27,8.92,8.5,19.2,8.5,30.29,0,33.09-26.91,60-60,60ZM422,482c-33.09,0-60-26.91-60-60,0-11.09,3.23-21.37,8.5-30.29l30.29,30.29-4.39,4.39c-5.86,5.86-5.86,15.35,0,21.21,2.93,2.93,6.77,4.39,10.61,4.39s7.68-1.46,10.61-4.39l30-30c5.86-5.86,5.86-15.35,0-21.21s-15.35-5.86-21.21,0l-4.39,4.39-30.29-30.29c8.92-5.27,19.2-8.5,30.29-8.5,33.09,0,60,26.91,60,60s-26.91,60-60,60Z" stroke-width="0"/>
            <rect width="512" height="512" fill="none" stroke-width="0"/>
        </g>
    `;
    const vtol_icon = `
        <g id="uuid-d7ce9139-72ed-48c6-9519-3fb99468e265" data-name="vtol">
            <rect x="0" width="512" height="512" fill="none" stroke-width="0"/>
            <path shape-rendering="optimizeQuality" d="M512,334.73c-5.5,7.26-9.19,8.32-17.6,4.95-62.87-25.15-125.73-50.3-188.6-75.45-6.24-2.5-6.26-2.49-6.26,4.13,0,41.44.08,82.88-.11,124.32-.02,4.66,1.66,7.21,5.46,9.54,20.83,12.82,41.46,25.97,62.29,38.78,12.02,7.39,17.93,17.74,17.4,31.93-.32,8.31-.05,16.64-.06,24.96-.02,12.08-6.32,16.54-17.86,12.38-27.07-9.77-54.09-19.66-81.14-29.5-8.13-2.96-16.28-5.85-24.36-8.94-3.31-1.26-6.37-1.17-9.67.04-34.05,12.46-68.14,24.84-102.22,37.22-3.42,1.24-6.75,2.87-10.55,2.73-5.82-.21-10.35-4.13-10.45-9.93-.21-11.98-.6-24,.17-35.93.67-10.4,6.52-18.28,15.4-23.82,20.89-13.05,41.67-26.26,62.7-39.08,4.81-2.93,6.78-6.07,6.74-11.86-.27-41.11-.14-82.21-.15-123.32,0-6.05-.08-6.08-5.79-3.8-63.02,25.2-126.04,50.4-189.05,75.62-3.44,1.38-6.85,2.65-10.6,1.14-3.82-1.53-6.96-4.12-7.1-8.26-.35-10.79-1.35-21.68.53-32.37,2.53-14.4,10.05-25.92,22.08-34.35,61.6-43.16,123.2-86.33,184.89-129.36,3.69-2.58,5.18-5.28,5.14-9.8-.2-25.63.54-51.28-.28-76.88-.77-23.99,10.12-42.52,34.4-49.67h17.98c24.33,7.07,35.16,25.85,34.41,49.61-.82,25.92-.13,51.88-.25,77.82-.02,3.71,1.11,6.07,4.22,8.24,60,41.87,119.78,84.03,179.94,125.66,14.38,9.95,24.66,22.03,28.37,39.28v33.96Z" stroke-width="0"/>
        </g>
    `;
    const car_icon = `
        <g id="uuid-ab0cdbad-22e5-4b42-9209-237f328999e7" data-name="car">
            <rect x="0" width="512" height="512" fill="none" stroke-width="0"/>
            <g>
                <path shape-rendering="optimizeQuality" d="M256.17,211.18c67.73,0,135.46-.06,203.19.04,25.06.04,45.72,16.55,51.04,40.48,1.08,4.85,1.6,9.81,1.59,14.82-.04,22.11.03,44.22-.03,66.34-.08,33.63-22.26,55.75-55.94,55.76-133.67.02-267.34.03-401.01,0-26.59,0-46.9-15.18-53.15-39.52C.53,343.85,0,338.51,0,333.11c.02-22.11-.04-44.22.02-66.34.09-33.73,22.08-55.57,55.94-55.58,66.74-.02,133.47,0,200.21,0ZM421.71,263.09c-20.96.03-37.45,16.26-37.44,36.83.02,20.43,16.78,36.84,37.59,36.8,20.89-.04,37.26-16.31,37.23-36.99-.03-20.89-16.14-36.67-37.38-36.64ZM52.91,299.96c.04,20.63,16.5,36.79,37.46,36.76,20.76-.03,37.42-16.54,37.36-37.02-.06-20.51-16.66-36.64-37.66-36.61-21.15.03-37.19,15.96-37.16,36.88Z" stroke-width="0"/>
                <path shape-rendering="optimizeQuality" d="M248.96,34.54c38.08,0,68.97-.25,99.84.08,23.88.26,45.58,6.8,62.94,24.32,5.7,5.75,9.69,12.61,13.4,19.68,15.36,29.28,30.71,58.57,46.05,87.86.83,1.59,1.7,3.17,2.32,4.85.86,2.31,0,3.43-2.55,3.08-15.47-2.13-31.03-.69-46.54-.89-4.99-.06-7.93-1.52-10.28-6.11-12.57-24.45-25.67-48.62-38.15-73.11-5.75-11.28-14.67-16.31-26.89-16.31-62.16-.02-124.33-.04-186.49.02-11.95.01-20.8,5.01-26.45,16.06-12.52,24.47-25.62,48.65-38.16,73.11-2.47,4.82-5.51,6.32-10.74,6.37-15.32.13-30.67-1.22-45.95.84-2.89.39-3.75-.67-2.72-3.33.36-.93.81-1.82,1.27-2.7,16.38-31.22,32.63-62.51,49.21-93.63,13.28-24.92,35.49-36.87,62.55-39.12,34.76-2.89,69.69-.33,97.35-1.06Z" stroke-width="0"/>
                <path shape-rendering="optimizeQuality" d="M421.97,425.31c10.94,0,21.88.1,32.82-.04,4.28-.05,5.87,1.58,6.06,5.96.6,14.39-2.22,27.43-13.82,37.1-12.1,10.08-25.94,12.11-40.28,6.22-15.52-6.37-22.92-19.03-24.05-35.47-.95-13.76-.84-13.77,13.01-13.77,8.75,0,17.51,0,26.26,0Z" stroke-width="0"/>
                <path shape-rendering="optimizeQuality" d="M90.75,425.3c10.74,0,21.48.13,32.22-.06,4.51-.08,6.33,1.49,6.48,6.18.75,22.38-9.27,38.67-27.66,44.44-24.22,7.59-49.58-9.87-50.4-35.23-.58-17.98-1.84-15.09,14.3-15.32,8.35-.12,16.71-.02,25.06-.02Z" stroke-width="0"/>
            </g>
        </g>
    `;
    const plane_icon = `
        <g id="uuid-bc05b402-3782-4fab-ae98-a4cc94d2cba8" data-name="plane">
            <rect width="512" height="512" fill="none" stroke-width="0"/>
            <g>
                <path shape-rendering="optimizeQuality" d="M510.41,255.85c-10.38,2.85-21.08,3.88-31.68,5.45-2.9.43-3-1.92-3.39-3.86-1.63-8.1-3.27-16.2-4.89-24.3-1.24-6.17-4.55-9.22-9-8.27-4.67.99-6.48,4.48-5.31,10.96,1.41,7.8,2.94,15.59,4.64,23.34.83,3.77-.25,5.33-4.18,5.92-43.14,6.47-86.26,13.08-129.38,19.65-.98.15-2,.08-2.96.31-3.87.96-5.05-.66-4.74-4.39.85-10.21,1.53-20.44,2.28-30.65,1.2-16.32,2.42-32.63,3.6-48.95.49-6.76.93-13.52,1.33-20.29.2-3.41,1.68-4.79,5.32-4.78,51.62.1,103.25.04,154.87.1,9.53.01,16.8,6.99,17.77,16.65,1.71,17.1,3.37,34.2,5.08,51.3.1.97.44,1.92.66,2.87,0,2.98,0,5.96,0,8.94Z" stroke-width="0"/>
                <path shape-rendering="optimizeQuality" d="M261.11,1.59c8.35,3.57,11.63,9.92,11.37,18.93-.37,12.49-.08,12.5,12.39,12.5,16.55,0,33.09-.03,49.64.02,10.27.03,17.35,6.78,17.31,16.34-.04,9.68-6.91,16.11-17.45,16.11-52.12.03-104.24.03-156.36,0-10.45,0-17.49-6.52-17.55-16.06-.06-9.79,7.01-16.37,17.74-16.39,18.7-.03,37.39-.13,56.09.08,4.29.05,6.18-1.13,5.65-5.58-.26-2.12.13-4.31-.07-6.44-.89-9.23,2.97-15.65,11.3-19.49h9.93Z" stroke-width="0"/>
                <path shape-rendering="optimizeQuality" d="M256.18,335.65c-12.74,0-25.49-.14-38.22.08-4.28.08-5.62-1.38-5.93-5.65-2.5-34.11-5.18-68.22-7.94-102.31-1.87-23.06-4.45-46.07-4.01-69.28.08-4.34,1.23-6.33,5.66-7.52,33.52-9,66.97-8.88,100.55-.37,4.56,1.15,5.88,3.17,5.95,7.82.37,22.88-2.09,45.56-3.94,68.29-1.52,18.61-2.8,37.24-4.25,55.86-1.27,16.31-2.71,32.61-3.89,48.92-.27,3.68-2.22,4.21-5.25,4.19-12.91-.07-25.81-.03-38.72-.03Z" stroke-width="0"/>
                <path shape-rendering="optimizeQuality" d="M102.49,176.04c25.49,0,50.98.14,76.47-.12,5.13-.05,6.51,1.92,6.81,6.52,1.96,30.19,4.08,60.37,6.17,90.56.18,2.64.51,5.27.81,7.89.39,3.43-.75,4.81-4.47,4.21-12.24-1.98-24.51-3.71-36.77-5.57-31.7-4.81-63.39-9.74-95.12-14.36-4.72-.69-5.71-2.35-4.65-6.79,1.83-7.71,3.18-15.55,4.64-23.35,1.05-5.59-1.17-9.43-5.76-10.24-4.14-.73-7.56,2.22-8.66,7.6-1.66,8.1-3.47,16.17-4.81,24.32-.62,3.73-1.92,5.16-5.83,4.45-8.62-1.56-17.28-2.88-25.95-4.13-4.06-.59-3.94-3.31-3.65-6.24,1.04-10.53,2.09-21.05,3.16-31.58.87-8.55,1.88-17.09,2.65-25.64.97-10.76,8.1-17.5,18.99-17.52,25.32-.04,50.65-.01,75.97-.02Z" stroke-width="0"/>
                <path shape-rendering="optimizeQuality" d="M247.78,478.65c-6.9-6.9-13.74-13.86-20.75-20.65-2.56-2.48-3.58-5.31-3.9-8.77-2.51-27.13-5.12-54.25-7.7-81.38-.39-4.11-.69-8.23-1.16-12.33-.39-3.42.96-4.72,4.44-4.71,24.97.09,49.95.09,74.92,0,3.53-.01,4.72,1.39,4.39,4.76-1.8,18.41-3.55,36.82-5.3,55.24-1.2,12.66-2.51,25.31-3.5,37.98-.3,3.87-1.45,6.87-4.29,9.59-6.93,6.63-13.63,13.5-20.42,20.28-.27-.24-.55-.49-.82-.73.01-25.28.02-50.57.05-75.85,0-2.17-.12-4.3-1.08-6.29-1.27-2.63-3.49-4.1-6.27-4.2-3.01-.1-5.38,1.41-6.76,4.2-.98,1.98-1.09,4.12-1.09,6.29.02,25.28.03,50.57.04,75.85-.27.24-.54.48-.81.72Z" stroke-width="0"/>
                <path shape-rendering="optimizeQuality" d="M383.62,442.86c0,5.29-.11,10.59.04,15.87.09,2.9-.96,4.54-3.73,5.56-19.07,7.05-38.09,14.21-57.13,21.35-4.66,1.75-9.5.8-14.25.95-4.79.15-9.59.16-14.38-.03-2.13-.08-5.32,1.24-6.12-1.6-.9-3.2-1.55-6.93,1.21-9.86,2.83-3.01,5.63-6.09,8.76-8.76,3.39-2.88,4.95-6.38,5.33-10.7,1.34-15.3,2.84-30.58,4.15-45.88.52-6.04.78-6.43,6.4-5.03,21.48,5.36,42.94,10.82,64.45,16.06,3.82.93,5.65,2.49,5.35,6.7-.36,5.1-.08,10.25-.09,15.37Z" stroke-width="0"/>
                <path shape-rendering="optimizeQuality" d="M128.66,442.41c0-5.29.09-10.59-.03-15.87-.07-2.87.77-4.55,3.83-5.3,22.46-5.52,44.91-11.11,67.32-16.85,4.87-1.25,4.68,1.75,4.96,4.85,1.38,15.46,2.84,30.91,4.18,46.38.38,4.32,1.88,7.86,5.31,10.7,2.66,2.2,4.77,5.08,7.44,7.27,3.53,2.9,3.13,6.63,2.92,10.43-.12,2.26-1.7,2.57-3.47,2.58-15.47.07-30.81,1.02-45.67-5.88-13.6-6.32-28.02-10.89-42.17-16.01-3.54-1.28-4.91-3.18-4.71-6.92.27-5.11.07-10.25.07-15.37Z" stroke-width="0"/>
                <path shape-rendering="optimizeQuality" d="M256.3,80.7c9.27,0,18.53.02,27.8-.02,2.38,0,4.44.34,6.36,2.08,14.5,13.17,22.48,29.12,21.75,49.09-.15,4.1-1.58,4.82-5.09,3.88-16.06-4.31-32.53-6.23-49.06-6.44-17.22-.23-34.3,1.96-51.07,6.2-6.81,1.72-6.68,1.68-6.84-5.43-.46-19.45,7.93-34.73,21.93-47.5,1.78-1.62,3.74-1.88,5.93-1.88,9.43.02,18.87.01,28.3,0Z" stroke-width="0"/>
                <path shape-rendering="optimizeQuality" d="M264.51,478.66c-.03,7.41,0,14.83-.1,22.24-.07,6.08-3.12,9.52-8.28,9.51-5.16,0-8.2-3.44-8.27-9.52-.09-7.41-.07-14.83-.09-22.24.27-.24.54-.48.81-.72,5.04,0,10.07,0,15.11,0,.27.24.55.49.82.73Z" stroke-width="0"/>
            </g>
        </g>
    `;
    const backpack_icon = `
        <g id="uuid-e0ee20a0-2073-4d4a-a037-812c00596f60" data-name="backpack">
            <rect width="512" height="512" fill="none" stroke-width="0"/>
            <g>
                <path shape-rendering="optimizeQuality" d="M399.77,257.2c.06,64.48.16,128.95,0,193.43-.07,28.62-17.14,49.41-44.16,54.35-3.67.68-7.52.62-11.29.63-58.49.03-116.97-.63-175.44.32-26.36.42-56.25-17.27-56.35-54.94-.16-64.84-.06-129.67-.03-194.51,0-1.53-.48-3.27,1.69-5,2.22,4.13,4.08,7.99,6.28,11.64,20.18,33.34,49.44,53.72,88.35,57.35,32.39,3.02,65.2,3.47,97.51-.26,37.42-4.31,65.83-24.45,85.32-56.77,2.22-3.67,4.15-7.53,6.22-11.29.06-.12.33-.12.63-.2,2.12,1.3,1.27,3.49,1.27,5.26Z" stroke-width="0"/>
                <path shape-rendering="optimizeQuality" d="M95.42,395.92c0,22.25.02,44.5-.01,66.75-.01,9.21-2.99,11.6-11.97,9.83-16.78-3.31-27.97-16.12-28.16-33.9-.37-33.73-.23-67.46-.05-101.2.06-11.95,7.51-18.88,19.41-18.97,3.78-.03,7.55-.03,11.33,0,7.57.06,9.44,1.91,9.45,9.66.04,19.56.01,39.12.01,58.67,0,3.05,0,6.1,0,9.15Z" stroke-width="0"/>
                <path shape-rendering="optimizeQuality" d="M416.77,395.88c0-22.61-.02-45.23,0-67.84.01-7.89,1.68-9.56,9.4-9.61,4.5-.03,9-.12,13.49.05,8.85.33,15.65,6.61,16.65,15.34.37,3.2.6,6.44.6,9.66.04,29.61.08,59.22-.03,88.84-.02,5-.22,10.12-1.29,14.97-3.03,13.73-14.4,23.66-28.65,25.69-7.04,1-10.15-1.57-10.17-8.72-.05-22.79-.02-45.58-.02-68.38Z" stroke-width="0"/>
                <path shape-rendering="optimizeQuality" d="M390.31,210.94c-2.81,40.28-30.07,75.91-68.45,88.51-12.28,4.03-24.94,5.26-37.78,5.31-9.36.04-18.72.01-30.49.01-14.66-.36-31.8,1.02-48.78-1.8-43.09-7.17-76.59-42.51-82.06-85.88-1.89-14.95-.43-28.72,9.89-40.43,8.12-9.22,18.39-14.26,30.78-14.52.86-.01,1.71-.03,2.58-.04,6.68-.12,13.39-.1,20.09.01.72,0,1.44.01,2.16.03.4,0,.79,0,1.15-.03h27.75c.53.06,1.12.07,1.8.06,1.11-.01,2.2-.04,3.31-.04,5.76-.09,11.54-.1,17.31-.07v-63.7h-15.83c-5.76,0-10.43-4.67-10.43-10.43V10.43c0-5.76,4.67-10.43,10.43-10.43h64.49c5.76,0,10.43,4.67,10.43,10.43v77.52c0,5.76-4.67,10.43-10.43,10.43h-15.44v63.68c6.34-.03,12.69-.01,19.04.12.52,0,1.04.01,1.56.03.48.01.91,0,1.31-.03h29.08s.46.01.46.01c.19,0,.37,0,.56-.01,3.14-.13,6.28-.06,9.42.01,3.36.06,6.7.1,10.01-.16,24.17-1.87,48.26,17.63,46.07,48.91Z" stroke-width="0"/>
            </g>
        </g>
    `;

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
                document.querySelector('#platform_icon').innerHTML = drone_icon;
                break;
            case "vtol":
            case "evtol":
            case "fixed-wing":
            case "fixed-wings":
            case "glider":
                document.querySelector('#platform_icon').innerHTML = vtol_icon;
                break;
            case "car":
            case "auto":
            case "mobile":
            case "kfz":
            case "kraftfahrzeug":
            case "vehicle":
            case "motor vehicle":
                document.querySelector('#platform_icon').innerHTML = car_icon;
                break;
            case "air craft":
            case "aircraft":
            case "plane":
            case "flugzeug":
                document.querySelector('#platform_icon').innerHTML = plane_icon;
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
                document.querySelector('#platform_icon').innerHTML = backpack_icon;
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
                        <svg id="platform_icon" viewBox="0 0 512 512">
                            <g id="uuid-444628f1-cc0c-4376-8afe-132f6726c55b" data-name="drone">
                                <path shape-rendering="optimizeQuality" d="M422,332c-19.41,0-37.28,6.31-51.99,16.8l-13.33-13.33c-33.89-46.33-33.89-112.61,0-158.94l13.33-13.33c14.71,10.48,32.58,16.8,51.99,16.8,49.63,0,90-40.37,90-90S471.63,0,422,0s-90,40.37-90,90c0,19.41,6.31,37.28,16.8,51.99l-13.33,13.33c-46.34,33.9-112.6,33.9-158.94,0l-13.33-13.33c10.49-14.71,16.8-32.58,16.8-51.99C180,40.37,139.63,0,90,0S0,40.37,0,90s40.37,90,90,90c19.41,0,37.28-6.31,51.99-16.8l13.33,13.33c33.89,46.33,33.89,112.61,0,158.94l-13.33,13.33c-14.71-10.48-32.58-16.8-51.99-16.8-49.63,0-90,40.37-90,90s40.37,90,90,90,90-40.37,90-90c0-19.41-6.31-37.28-16.8-51.99l13.33-13.33c46.34-33.9,112.6-33.9,158.94,0l13.33,13.33c-10.49,14.71-16.8,32.58-16.8,51.99,0,49.63,40.37,90,90,90s90-40.37,90-90-40.37-90-90-90ZM422,30c33.09,0,60,26.91,60,60s-26.91,60-60,60c-11.09,0-21.37-3.23-30.29-8.5l30.29-30.29,4.39,4.39c5.86,5.86,15.35,5.86,21.21,0s5.86-15.35,0-21.21l-30-30c-5.86-5.86-15.35-5.86-21.21,0s-5.86,15.35,0,21.21l4.39,4.39-30.29,30.29c-5.27-8.92-8.5-19.19-8.5-30.29,0-33.09,26.91-60,60-60ZM141.5,120.29l-30.29-30.29,4.39-4.39c5.86-5.86,5.86-15.35,0-21.21s-15.35-5.86-21.21,0l-30,30c-5.86,5.86-5.86,15.35,0,21.21s15.35,5.86,21.21,0l4.39-4.39,30.29,30.29c-8.92,5.27-19.19,8.5-30.29,8.5-33.09,0-60-26.91-60-60s26.91-60,60-60,60,26.91,60,60c0,11.09-3.23,21.37-8.5,30.29ZM90,482c-33.09,0-60-26.91-60-60s26.91-60,60-60c11.09,0,21.37,3.23,30.29,8.5l-30.29,30.29-4.39-4.39c-5.86-5.86-15.35-5.86-21.21,0s-5.86,15.35,0,21.21l30,30c5.86,5.86,15.35,5.86,21.21,0s5.86-15.35,0-21.21l-4.39-4.39,30.29-30.29c5.27,8.92,8.5,19.2,8.5,30.29,0,33.09-26.91,60-60,60ZM422,482c-33.09,0-60-26.91-60-60,0-11.09,3.23-21.37,8.5-30.29l30.29,30.29-4.39,4.39c-5.86,5.86-5.86,15.35,0,21.21,2.93,2.93,6.77,4.39,10.61,4.39s7.68-1.46,10.61-4.39l30-30c5.86-5.86,5.86-15.35,0-21.21s-15.35-5.86-21.21,0l-4.39,4.39-30.29-30.29c8.92-5.27,19.2-8.5,30.29-8.5,33.09,0,60,26.91,60,60s-26.91,60-60,60Z" stroke-width="0"/>
                                <rect width="512" height="512" fill="none" stroke-width="0"/>
                            </g>
                        </svg>
						<div>
							<p id="platform_type">Drone / VTOL</p>
							<a id="platform_name" href=""></a>
						</div>
					</div>

					<div class="info-payload" style="display: flex; flex-direction: row; flex-grow: 1; width: 50%; min-width: 240px">
						<svg id="payload_icon" viewBox="0 0 512 512">
                            <g id="uuid-0eb99908-4ae2-464e-903b-798e85ededeb" data-name="payload">
                                <rect width="512" height="512" fill="none" stroke-width="0"/>
                                <path shape-rendering="optimizeQuality" d="M416.94,501.26H95.06c-.39-.25-.76-.63-1.18-.72-29.14-6.23-45.65-28.03-42.71-57.52,2.18-21.89,5.28-43.7,7.96-65.54,4-32.61,7.98-65.22,11.99-97.83,3.15-25.64,5.98-51.33,9.6-76.91,3.65-25.79,22.65-43.34,48.58-44.38,21.67-.86,43.41-.3,65.11-.36,1.87,0,3.73,0,5.73,0v-36.91c-11.76-1.98-23.36-3.24-34.6-5.96-48.58-11.72-88.25-36.67-115.76-79.3-3.63-5.63-5.33-11.3-1.91-17.47,3.32-5.99,8.89-7.59,15.41-7.59,128.49.05,256.99.05,385.48,0,6.53,0,12.09,1.62,15.4,7.61,3.41,6.17,1.7,11.85-1.94,17.47-28.47,43.99-69.63,69.06-119.96,80.25-9.9,2.2-20.07,3.22-30.4,4.83v37.08c1.86,0,3.57,0,5.28,0,20.27,0,40.54-.07,60.82.02,29.21.12,49.57,17.28,53.51,46.16,4.83,35.39,8.86,70.9,13.22,106.36,5.33,43.37,10.59,86.75,15.98,130.12,2.52,20.26-3.32,37.16-19.46,50.11-7.13,5.72-15.64,8.25-24.26,10.52ZM256.05,449.39c65.79-.09,119.74-54.11,119.68-119.85-.05-65.9-53.87-119.63-119.77-119.59-65.93.04-119.74,53.85-119.69,119.68.05,65.78,54.12,119.85,119.78,119.76ZM255.13,251.4c-43.14,0-78.11,34.97-78.11,78.11s34.97,78.11,78.11,78.11,78.11-34.97,78.11-78.11-34.97-78.11-78.11-78.11Z" stroke-width="0"/>
                            </g>
                        </svg>
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