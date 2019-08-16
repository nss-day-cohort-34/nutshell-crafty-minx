const factoryArticles = {

factoryArticlesWelcome() {
    return `
    <div>
    <h2>Articles</h2>
    <button id="newArticleButton" name="newArticleButton">Add New Article</button>
    </div>
    <div id="articlesContainer">
    </div>
    `
},

factoryNewArticle() {
    return `
    <fieldset>
        <label for="articleTitle">Title</label>
        <input class="articleTitleInput" type="text" name="articleTitle" id="articleTitle">
        <label for="articleSynopsis">Synopsis</label>
        <input class="articleSynopsisInput" type="text" name="articleSynopsis" id="articleSynopsis">
        <label for="articleURL">URL</label>
        <input class="articleURLInput" type="text" name="articleURL" id="articleURL">
    </fieldset>
    <div>
        <button id="saveArticleButton" name="saveArticleButton">Save Article</button>
    </div>
    `
  }
}

export default factoryArticles