import React, { Fragment } from "react";

// @TODO ERRORRR!!!!
import { DefaultList } from '@groceristar/grocery-component';
// @TODO i think we have here an Ingredients List.

// @TODO discuss using some of list components as
// https://github.com/developerdizzle/react-virtual-list
// https://www.npmjs.com/package/react-list

// maybe IngredientsList later we should check
// if we have an ingredient id or we generate key by using shortid
const IngredientList = ({ items }) => {
  return (
    <Fragment>
      <DefaultList items={items} />
    </Fragment>
  )
}


export default IngredientList
