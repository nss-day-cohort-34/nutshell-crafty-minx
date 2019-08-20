import API from "./registration/dataRegistration";
import welcomePageHTML from "./registration/factoryRegistration";
import renderRegistration from "./registration/domRegistration";
import domArticles from "./articles/domArticles";
import factoryArticles from "./articles/factoryArticles";
import articlesData from "./articles/dataArticles";
import initRegistration from "./registration/mainRegistration";
import initEvents from "./events/mainEvents";

/*----------------------REGISTRATION----------------------*/
initRegistration();
/*----------------------END REGISTRATION----------------------*/
/*----------------------TASKS----------------------*/
/*----------------------END TASKS----------------------*/
/*----------------------EVENTS----------------------*/
initEvents();
/*----------------------END EVENTS----------------------*/
/*----------------------ARTICLES----------------------*/

//render welcome page

const welcomeConverted = factoryArticles.factoryArticlesWelcome();
domArticles.renderToArticles(welcomeConverted);

const newArticleButton = document.querySelector("#newArticleButton");

//add new article

newArticleButton.addEventListener("click", () => {
  const newArticleConverted = factoryArticles.factoryNewArticle();
  domArticles.renderToArticlesContainer(newArticleConverted);
  articlesData.articleFetch().then(articles => {
    for (const article of articles) {
      const postedArticleConverted = factoryArticles.factoryPostedArticle(
        article
      );
      domArticles.renderToPostsContainer(postedArticleConverted);
    }
  });
});

const articles = document.querySelector("#articles");
const newDate = new Date();
const timestamp = newDate.toUTCString();
let activeID = sessionStorage.getItem("activeUser");

//post new article

articles.addEventListener("click", event => {
  if (event.target.id.startsWith("saveArticleButton")) {
    const articleTitle = document.querySelector(".articleTitleInput");
    const articleSynopsis = document.querySelector(".articleSynopsisInput");
    const articleURL = document.querySelector(".articleURLInput");
    console.log(articleTitle.value, articleSynopsis.value, articleURL.value);

    const hiddenEditId = document.querySelector("#editID");

    if (hiddenEditId.value !== "") {
      const updatedObject = factoryArticles.createJSON(
        articleTitle.value,
        articleSynopsis.value,
        articleURL.value,
        timestamp,
        activeID
      );
      editEntry(hiddenEditId.value, updatedObject).then(() => {
        postsContainer.innerHTML = "";
        console.log(postsContainer)

        articlesData.articleFetch().then(articles => {
          for (const article of articles) {
            const postedArticleConverted = factoryArticles.factoryPostedArticle(
              article
            );
            domArticles.renderToPostsContainer(postedArticleConverted);
          }
        });
      });
    } else {
      const newArticle = factoryArticles.createJSON(
        articleTitle.value,
        articleSynopsis.value,
        articleURL.value,
        timestamp,
        activeID
      );
      console.log(newArticle);

      fetch("http://localhost:8088/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(newArticle)
      }).then(() => {
        postsContainer.innerHTML = "";
        articlesData.articleFetch().then(articles => {
          for (const article of articles) {
            const postedArticleConverted = factoryArticles.factoryPostedArticle(
              article
            );
            domArticles.renderToPostsContainer(postedArticleConverted);
          }
        });
      });
    }
  }
});

//delete article

articles.addEventListener("click", event => {
  if (event.target.id.startsWith("deleteButton")) {
    const deleteID = event.target.id.split("--")[1];
    deleteEntry(deleteID)
    .then(() => {
      postsContainer.innerHTML = "";
      articlesData.articleFetch().then(articles => {
        for (const article of articles) {
          const postedArticleConverted = factoryArticles.factoryPostedArticle(
            article
          );
          domArticles.renderToPostsContainer(postedArticleConverted);
        }
      });
    });
  }
});

const deleteEntry = deleteID => {
  return fetch(`http://localhost:8088/articles/${deleteID}`, {
    method: "DELETE"
  }).then(response => response.json());
};

//edit article

const updateFields = editIDparam => {
  // Get reference to input fields in the form
  const hiddenEditId = document.querySelector("#editID");
  const articleTitleInput = document.querySelector(".articleTitleInput");
  const articleSynopsisInput = document.querySelector(".articleSynopsisInput");
  const articleURLInput = document.querySelector(".articleURLInput");

  return fetch(`http://localhost:8088/articles/${editIDparam}`)
    .then(response => response.json())
    .then(articles => {
      hiddenEditId.value = articles.id; // Hidden value. User no see. 🙈
      articleTitleInput.value = articles.title;
      articleSynopsisInput.value = articles.synopsis;
      articleURLInput.value = articles.url;
    });
};

articles.addEventListener("click", event => {
  if (event.target.id.startsWith("editButton")) {
    console.log(event.target.id);
    const entryToEdit = event.target.id.split("--")[1];
    console.log(entryToEdit);

    updateFields(entryToEdit)
  }
});

// -will need to update event-listener on submit button to include conditional logic
// so th button knows whether this is a new entry (POST) or edited entry (PUT)

const editEntry = (editID, updatedObject) => {
  // Logic for the PUT operation

 return fetch(`http://localhost:8088/articles/${editID}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updatedObject)
  })
    .then(res => res.json())
    .then(() => {
      const hiddenEditId = document.querySelector("#editID");
      hiddenEditId.value = "";
    });
};

/*----------------------END ARTICLES----------------------*/
/*----------------------MESSAGES----------------------*/
/*----------------------END MESSAGES----------------------*/
/*----------------------FRIENDS (MAYBE)----------------------*/
/*----------------------END FRIENDS----------------------*/
