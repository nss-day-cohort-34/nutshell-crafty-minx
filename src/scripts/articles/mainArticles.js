/*
Story
As a user, I should be able to list interesting news articles on my dashboard

Acceptance Criteria
Given a user wants to record a news article on their dashboard
When the user performs a gesture on a New Article affordance
Then a form should be presented to the user in which the following information can be entered

News title
Synopsis
URL
Given a user has entered in all field values for storing a new article
When the user performs a gesture on the Save Article affordance
Then the article should be saved in the database, and assigned to the user
And should have a property of the current timestamp

Given a user has saved news articles
When the user visits their dashboard
Then the news articles should be presented in the News components, sorted by date in descending order
And each article should have an affordance to delete the news article

Given a user wants to remove a previously stored news article
When the user performs a gesture on the delete affordance
Then the article should be deleted

Given a user wants to change the details of a news article
When the user performs a gesture to edit the article
Then the user should be presented with a form that has the news article details pre-filled into the fields
And there should be an affordance to save the new details
*/