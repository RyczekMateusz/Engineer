import React from 'react';
import { connect } from 'react-redux'
import Element from './Element'

const List = ({ offers }) => {
  const offersElements = offers.map(offer => <Element
    key={offer.id} {...offer} />)

  return (
    <ul>
      {offersElements}
    </ul>
  );
}

const connectReduxStateToProps = store => ({
  offers: store.offers,
});

const ListConsumer = connect(connectReduxStateToProps)(List);

export default ListConsumer;