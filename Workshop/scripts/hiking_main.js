function showNonImageDetails(hike){
    details.innerHTML = `
    <h1>${hike.name}</h1>
    <p>${hike.description}</p>
    <table><tr><th>Length</th><th>Difficulty</th></tr>
        <tr><td>${hike.length}</td><td>${hike.difficulty}</td></tr></table>
    <p>ID: ${hike.id} </p>
    `;
    }
    function showImage(imageName, title){
        details.innerHTML += `<h2>${title}</h2>
        <img src="./images/${imageName}">`;
    }

//<!-- 2. show hike details -->
function showHikeDetails(hike){
    showNonImageDetails(hike);
    showImage(hike.scenicImage, "Scenic Image");
    showImage(hike.trailMapImage, "Trail Map");
}

function onHikeChange(){
    for(h of hikes){
        if(h.id == hikesElement.value){
          showHikeDetails(h);  
        }
    }
}

function showHikes(){
    // <!-- 0b. show empty select for hikes -->
    for(h of hikes){
        hikesElement.innerHTML += `<option value="${h.id}">${h.name}</option>`;
    }
}

function init(){
    showHikes();
    // <!-- 1. listen for change on hike selection -->
    hikesElement.addEventListener("change", onHikeChange)
}

document.addEventListener("DOMContentLoaded", init);
