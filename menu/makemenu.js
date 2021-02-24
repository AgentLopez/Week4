let menuspot = document.getElementById("menulist")
let starters = document.getElementById("starters")
let entrees = document.getElementById("entrees")
let desserts = document.getElementById("desserts")
let allitems = document.getElementById("allitems")

function shapemenu(givenmenu) {
    let menuprep = givenmenu.map(function (dish) {
        return `
    <li class="dish">
    <div class="pic"><img src="${dish.imageURL}" class="image"><img></div>
    <div class="titledesc">
    <div class="dishtitle">${dish.title}</div>
    <div class="description">${dish.description}</div>
    </div>
    <div class="price">$${dish.price}</div>

    </li>
    `
    })

    menuspot.innerHTML = ""
    menuspot.innerHTML = menuprep.join("")
}

function mainmenu() {
    shapemenu(dishes)
}

starters.addEventListener("click", function() {
    let starterprep = dishes.filter(function (dish) {
        return dish.course == "Starters"
    })
    shapemenu(starterprep)
})

entrees.addEventListener("click", function() {
    let entreeprep = dishes.filter(function (dish) {
        return dish.course == "Entrees"
    })
    shapemenu(entreeprep)
})

desserts.addEventListener("click", function() {
    let dessertsprep = dishes.filter(function (dish) {
        return dish.course == "Desserts"
    })
    shapemenu(dessertsprep)
})

allitems.addEventListener("click", function() {
    mainmenu()
})

mainmenu()