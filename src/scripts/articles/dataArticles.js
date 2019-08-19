const articlesData = {

articleFetch() {
    return fetch("http://localhost:8088/articles")
    .then(data => data.json())

  }

}

export default articlesData