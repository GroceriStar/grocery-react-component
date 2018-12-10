[![npm version](https://badge.fury.io/js/%40groceristar%2Fgrocery-component.svg)](https://badge.fury.io/js/%40groceristar%2Fgrocery-component)

example how i use list:

```
// this is an ingredient for list
import React, { Component, Fragment } from 'react';

import List from './List/DefaultList'
or import from separated module via npm logic...

const IngredientsList = ({ ingredients, title }) => (

  <Fragment>
    <h2>{title}</h2>
    <DefaultList items={ingredients} />
  </Fragment>

);
```

 - for creating build run 'yarn clean && yarn build'
 - tests, lint, coverage is not working at this moment

---

<!---
эта часть для курса, пока на нее забей.

https://medium.com/@Powderham/sharing-react-components-between-separate-projects-self-hosting-with-git-installing-with-yarn-npm-d3275b64239c
https://babeljs.io/docs/en/babel-preset-react
https://www.useloom.com/share/e5f01b62ff2441b9a60659cb3b2caa74

https://drive.google.com/file/d/1-X1I04sM4zKS0zqb_zbxC8HMv0ve2a42/view

https://drive.google.com/file/d/1N7RFOWRimN1tjVWh5JuFsTYAghvsmKzy/view

https://drive.google.com/file/d/1sqwIJOedsayeZ3lIq9j1_u_xCmDmYXw9/view

https://drive.google.com/file/d/15c0UwInohN9kb9mj4UM9hE3c-LwGKkXv/view

https://github.com/GroceriStar/es6-package/blob/master/package.json

https://rollupjs.org/guide/en#babel

https://github.com/GroceriStar/grocery-react-component/blob/master/package.json

https://medium.freecodecamp.org/how-to-make-a-beautiful-tiny-npm-package-and-publish-it-2881d4307f78

https://codeburst.io/how-to-create-and-publish-your-first-node-js-module-444e7585b738

https://medium.com/@Powderham/sharing-react-components-between-separate-projects-self-hosting-with-git-installing-with-yarn-npm-d3275b64239c

https://itsfoss.com/best-linux-screen-recorders/

https://www.creative-tim.com/product/rotating-css-card
https://github.com/codrops/DiagonalSlideshow/blob/master/index.html

-->
