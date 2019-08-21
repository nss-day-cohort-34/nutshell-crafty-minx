const articlesData = {

articleFetch(activeUserId) {
    return fetch(`http://localhost:8088/articles?userID=${activeUserId}&_sort=id&_order=desc`)
    .then(data => data.json())

  }

}

export default articlesData