
//dishes

let menuspot = document.getElementById("menulist")

let starters = document.getElementById("starters")
let entrees = document.getElementById("entrees")
let desserts = document.getElementById("desserts")
let allitems = document.getElementById("allitems")




function mainmenu() {
    let menuprep = dishes.map(function (dish) {
        return `
    <li class="dish">
    <div class="pic"><img src="${dish.imageURL}" class="image"></div>
    <div class="titledesc">
    <div class="title">${dish.title}</div>
    <div class="description">${dish.description}</div>
    </div>
    <div class="price">${dish.price}</div>

    </li>
    `
    })
    menuspot.innerHTML = menuprep.join("")
}


function startermenu() {
    let starterprep = dishes.filter(function (dish) {
        return dish.course == "Starters"
    })
    let menuprep = starterprep.map(function (dish) {
        return `
    <li class="dish">
    <div class="pic"><img src="${dish.imageURL}" class="image"><img></div>
    <div class="titledesc">
    <div class="title">${dish.title}</div>
    <div class="description">${dish.description}</div>
    </div>
    <div class="price">${dish.price}</div>

    </li>
    `
    })
    

    menuspot.innerHTML = ""
    menuspot.innerHTML = menuprep.join("")
}

function entreesmenu() {
    let entreeprep = dishes.filter(function (dish) {
        return dish.course == "Entrees"
    })
    let menuprep = entreeprep.map(function (dish) {
        return `
    <li class="dish">
    <div class="pic"><img src="${dish.imageURL}" class="image"><img></div>
    <div class="titledesc">
    <div class="title">${dish.title}</div>
    <div class="description">${dish.description}</div>
    </div>
    <div class="price">${dish.price}</div>

    </li>
    `
    })
    

    menuspot.innerHTML = ""
    menuspot.innerHTML = menuprep.join("")
}

function dessertsmenu() {
    let dessertsprep = dishes.filter(function (dish) {
        return dish.course == "Desserts"
    })
    let menuprep = dessertsprep.map(function (dish) {
        return `
    <li class="dish">
    <div class="pic"><img src="${dish.imageURL}" class="image"><img></div>
    <div class="titledesc">
    <div class="title">${dish.title}</div>
    <div class="description">${dish.description}</div>
    </div>
    <div class="price">${dish.price}</div>

    </li>
    `
    })
    

    menuspot.innerHTML = ""
    menuspot.innerHTML = menuprep.join("")
}

starters.addEventListener("click", function() {
    startermenu()
})

entrees.addEventListener("click", function() {
    entreesmenu()
})

desserts.addEventListener("click", function() {
    dessertsmenu()
})

allitems.addEventListener("click", function() {
    mainmenu()
})


mainmenu()
/*
     <buton id="all">All</buton>
        <button id="starters">Starters</button>
        <button id="entrees">Entrees</button>
        <button id="desserts">Desserts</button>
*/