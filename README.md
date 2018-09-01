# Franklyn's Cookbook
I wanted a single place to store my most common receipes in my meal prep sunday routine. I was getting tired of looking at various websites while I was walking in the store and keeping a running list in my head. Some features.

* Front-End application was build with Vue.js, vue-router.
* Backend is hosted with google firebase.
* Hosting is with google firebase. https://franks-cookbook.firebaseapp.com/#/
* Styled with google materialize 

Features
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
* Sort by ca
