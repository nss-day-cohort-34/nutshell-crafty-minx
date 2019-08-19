const renderToArticles = (HTMLString) => {
    const articlesContainer = document.querySelector("#articles")
    articlesContainer.innerHTML += HTMLString
}

export default renderToArticles