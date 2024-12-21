import { FontIcon } from '@react-md/icon';
import { Button } from '@react-md/button';
import { Badge } from '@react-md/badge';

import React, { Fragment, useState, useEffect } from 'react';


const Header = () => {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    const initialValue = global.Snipcart ? Snipcart.api.items.count() : 0;
    setItemCount(initialValue);
    global.Snipcart && Snipcart.subscribe('item.added', () => setItemCount(Snipcart.api.items.count()));
    global.Snipcart && Snipcart.subscribe('item.removed', () => setItemCount(Snipcart.api.items.count()));
    const handler = () => {
      setItemCount(Snipcart.api.items.count());
      global.Snipcart && Snipcart.subscribe('item.added', () => setItemCount(Snipcart.api.items.count()));
      global.Snipcart && Snipcart.subscribe('item.removed', () => setItemCount(Snipcart.api.items.count()));
    };
    document.addEventListener('snipcart.ready', handler);
    return () => {
      // global.Snipcart && Snipcart.unsubscribe('item.added');
      // global.Snipcart && Snipcart.unsubscribe('item.removed');
      document.removeEventListener('snipcart.ready', handler);
    };
  }, []);

  return (
    <Fragment>
      <div className="flex-center">
        <Button
          icon
          onClick={() => global.Snipcart && Snipcart.api.modal.show()}
          className='tertiary-button'
        >
          <Badge invisibleOnZero primary badgeId="cart-quantity" className="badge">
            {itemCount}
          </Badge>
          <FontIcon className='tertiary-button__icon'>shopping_cart</FontIcon>
        </Button>
      </div>
    </Fragment>
  );
};
export default Header;
