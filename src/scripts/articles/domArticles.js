const domArticles = {

    renderToArticles(HTMLString) {
        const articles = document.querySelector("#articles")
        articles.innerHTML = HTMLString
    },

    renderToArticlesContainer(HTMLString) {
        const articlesContainer = document.querySelector("#articlesContainer")
        articlesContainer.innerHTML = HTMLString
    },

    renderToPostsContainer(HTMLString) {
        const postsContainer = document.querySelector("#postsContainer")
        postsContainer.innerHTML += HTMLString
    }
}
export default domArticles
