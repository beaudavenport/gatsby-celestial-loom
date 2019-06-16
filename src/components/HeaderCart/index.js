import { Badge, Button, FontIcon } from 'react-md';
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
          style={{ padding: 0 }}
          iconEl={(
            <Badge invisibleOnZero badgeContent={itemCount} primary badgeId="cart-quantity">
              <FontIcon style={{ fontSize: '2rem' }}>shopping_cart</FontIcon>
            </Badge>
        )}
        />
      </div>
    </Fragment>
  );
};
export default Header;
