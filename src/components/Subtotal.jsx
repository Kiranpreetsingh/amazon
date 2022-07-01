import React from 'react';
import CurrencyFormat from 'react-currency-format';

import '../styles/Subtotal.css';
import { useStateValue } from '../context/StateProvider';

import { getBasketTotal } from '../context/reducer';
import { useHistory } from "react-router-dom";

function SubTotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
       <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
