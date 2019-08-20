const factoryArticles = {

factoryArticlesWelcome() {
    return `
    <div>
    <h2>Articles</h2>
    <button id="newArticleButton" name="newArticleButton">Add New Article</button>
    </div>
    <div id="articlesContainer">
    </div>
    <div id="postsContainer">
    </div>
    `
},

factoryNewArticle() {
    return `
    <fieldset>
        <input type="hidden" id="editID" value="">
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
  },

createJSON(title, synopsis, url, timestamp, userID) {
    return {
        title: title,
        synopsis: synopsis,
        url: url,
        timestamp: timestamp,
        userID: userID
      }
},

factoryPostedArticle(object) {
    return `
    <h4>Title: ${object.title}</h4>
    <h5>Synopsis: ${object.synopsis}</h5>
    <h5>URL: ${object.url}</h5>
    <h6>Posted: ${object.timestamp}</h6>
    <div>
    <button class="button2" id="editButton--${object.id}">Edit</button>
    </div>
    <div>
    <button class="button2" id="deleteButton--${object.id}">Delete</button>
    </div>
    `
}

}

export default factoryArticles