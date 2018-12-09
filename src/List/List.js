import React, { Component, Fragment } from 'react';

class List extends Component {

  render() {
    const { items, renderItem } = this.props;

    return (
      <Fragment>
        {items.map( (index, value) =>
          <li>{renderItem}</li>
        )}
      </Fragment>
    )
  }

}

export default List;
