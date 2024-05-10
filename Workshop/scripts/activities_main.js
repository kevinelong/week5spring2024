function option(target, displayName, value) {
    const option = document.createElement("option");
    option.innerText = displayName;
    if (value != undefined) {
        option.value = value;
    }
    target.appendChild(option);
}

function getDetails(a) {
    return `
        ${a.id}

        ${a.description}

        ${a.location}

        $${a.price.toFixed(2)}
    `;
}//end get details

function showCatList() {
    for (let cat of categories) {
        option(cats, cat)
    }
}

function catChange() {
    details.innerText = ""; //clear out details
    // <!-- 3. clear and show matching activities. -->
    activitiesElement.innerHTML = ""; //CLEAR - EMPTY OUT OLD OPTIONS

    option(activitiesElement, "Select an Activity");

    for (let a of activities) {
        if (cats.value == a.category) { // IS MATCH?
            option(activitiesElement, a.name);
        }
    }
}

function activityChange() {
    // <!-- 5. display the details for the selected activity. -->
    for (a of activities) {
        if (a.name == activitiesElement.value) { //is the selected item
            details.innerText = getDetails(a);
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    showCatList();
    cats.addEventListener("change", catChange);
    activitiesElement.addEventListener("change", activityChange);
});
