# Simple Shopping Card

## Lessons

1. create react app
   1. npx create-app
   2. remove extra files

2. create website layout
   1.add Header, Main and Basket components
   2. Style components

3. create Main componentes
    1.create data.js
    2.render product items

4. create Product component
   1.create product divs
   2.pass props to product component 

5.Implement cart
  1.add and remove items from the card    

6.create basket component
   1.list items in cartItems
   2.calculate sub total
   3. show checkout button

7.save cart items in locale storage
   1.use items in locale storage on add remove
   2.use useEffect to get items in locale storage

8. use useTransition and useDeferedValue
   1.read items in locale storage using useTransition
   2.change cartItems.length to transition effect

9. Deploy website on github pages
   1. login github account
   2.push code to git hub
   3.npm install gh-pages --save--dev
   4.package.json "homepage" :https://github_name.github.io/webapp_name ,
   5.add deployment script : "predeploy" : "npm run build"  , "deploy" : gh-pages -d build",
   6.npm run deploy    


