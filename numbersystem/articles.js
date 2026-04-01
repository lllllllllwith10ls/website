const urlString = window.location.href;
const url = new URL(urlString);

function loadArticle(id) {
    document.getElementById("leftcolumn").innerHTML = document.getElementById("article" + id).innerHTML;
}

maxArticle = 1;

if (url.searchParams.get("article") == null || isNaN(parseInt(url.searchParams.get("article"))) || parseInt(url.searchParams.get("article")) > maxArticle) {
    loadArticle(maxArticle);
} else {
    loadArticle(parseInt(url.searchParams.get("article")));
}