const newsHere = document.getElementById("newsHere")
const sourcesHere = document.getElementById("sourcesHere")
let freepress = news.articles
let freesource = sources.sources


sourcesHere.addEventListener("change", function () {
    let newschoice = this.value
    let spotcheck = news.articles["source"]

    let sourcednews = news.articles.filter(function (article) {
        return article.source.name == newschoice

    })
  
    shownews(sourcednews)
})


let sourceslist = freesource.map(function (itemtwo) {
    return `
<option value="${itemtwo.name}">${itemtwo.name}</option>
`
})


sourcesHere.innerHTML = sourceslist.join("")


shownews(freepress)

function shownews(takenews) {

    newsHere.innerHTML = ""

    let newsy = takenews.map(function (app) {
        return `
    <li>
    <div id="author">${app.author != null ? app.author : ""}</div>
    <div id="title">${app.title != null ? app.title : ""}</div>
    <div id="description">${app.description != null ? app.description : ""}</div>
    <div id="url"><a href="${app.url != null ? app.url : ""}">News Story Link</a></div>
    <div id="urlToImage"><img src="${app.urlToImage != null ? app.urlToImage : ""}" /></div>
    <div id="publishedAt">${app.publishedAt != null ? app.publishedAt : ""}</div>
    </li>
    `

    })
    newsHere.innerHTML = newsy.join("")
}