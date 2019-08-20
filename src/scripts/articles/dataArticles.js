const articlesData = {

articleFetch() {
    return fetch("http://localhost:8088/articles?_sort=id&_order=desc")
    .then(data => data.json())

  }

}

export default articlesData