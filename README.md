# Franklyn's Cookbook
I wanted a single place to store my most common receipes in my meal prep routine. I was getting tired of looking at various websites while I was walking in the store and keeping a running list in my head. This is to serve as a central place of my favorite and easy receipes. Lots of them are 6 ingredients or less and can be put together in a few minutes with minimal kitchen equipment needed.

**Technology**
* Front-End application was build with Vue.js.
* Backend is hosted with google firebase.
* Hosting is with google firebase. https://franks-cookbook.firebaseapp.com/#/
* Styled with google materialize.

**Features**
* Able to display current recepies in the database.
* Able to create, edit and delete recipes.
* Able to go to the recipe specific page for more information.

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
## Deploy Setup

``` bash
# login to firebase
firebase login

# initalize firebase config
* Set public to ./dist
firebase init

# Deploy code to production: https://franks-cookbook.firebaseapp.com
npm run build
firebase deploy
```

###TODO
* Optimize for mobile
* Offer a shopping list option
* Press to check off shopping list item.
* Add average cost
* Add average servings
* Add nutrition information
* Add aisle location for ingredients.
* Add price history to find price trends.
* Add filtering (slow cooker, no heating required, grilling possible).
