import { Badge, FontIcon } from 'react-md';
import React, { Fragment, useState, useEffect } from 'react';


const Header = () => {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    console.log('called effect...');
    const initialValue = global.Snipcart ? Snipcart.api.items.count() : 0;
    setItemCount(initialValue);
    const handler = () => {
      console.log('called handler!', Snipcart.api.items.count());
      setItemCount(Snipcart.api.items.count());
    };
    document.addEventListener('snipcart.ready', handler);
    return () => {
      document.removeEventListener('snipcart.ready', handler);
    };
  }, []);

  return (
    <Fragment>
      <div className="header-search-container">
        <Badge badgeContent={itemCount} primary>
          <a href="#" className="snipcart-checkout">
            <FontIcon>shopping_cart</FontIcon>
          </a>
        </Badge>
      </div>
    </Fragment>
  );
};
export default Header;
