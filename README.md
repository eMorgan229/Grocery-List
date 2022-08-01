# Grocery list
## User Story
- A user can Login/logout to the app
- A user can CREATE a grocery list
- A user can CREATE a new grocery list item and UPDATE and DELETE an item
- A user can favorite an item that they need frequently 
- ***A user can sort the items into cateogories
- ***A user can create a "household" or group list that can be updated and deleted by multiple  users ( this is a STRETCH goal) achieved by allowing multiple users to send something equivalent to a "friend request" to eachother which would grant them access to admin to both be able to CRUD the same grocery list
- ***A user can add links from favorite recipes and the app will search data in the url and automatically create a grocery list with the ingredients

### Tables:
Basic Requirements
1. Users
2. Grocery Lists
3. Grocery Items
4. List_Items (join table)

###### Relationships
One to Many:  Grocery List >- List Items
Many to Many: Grocery List >- List_items -< List Items


## Example Applications:
https://www.goodhousekeeping.com/food-recipes/g26255008/best-grocery-shopping-list-apps/

API with recipes: https://rapidapi.com/collection/food-apis

## Requirements:
-   Use a Rails API backend with a React frontend.
-   Have **at least** three models on the backend, that include:
-   at least one one-to-many relationship
-   at least one many-to-many relationship
-   full CRUD actions for at least one resource
-   Have at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes.
-   Implement authentication/authorization, including password protection. A user should be able to log in to the site with a secure password and stay logged in via user ID in the session hash.


