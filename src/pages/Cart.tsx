import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Rootstate } from '..';

function Cart() {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          <CartDetail />
        </tbody>
      </Table>
    </div>
  );
}

function CartDetail() {
  let cart = useSelector((state: Rootstate) => state.cart);
  return (
    <>
      {cart.map(ele => {
        return (
          <tr>
            <td>{ele.id}</td>
            <td>{ele.name}</td>
            <td>{ele.count}</td>
            <td></td>
          </tr>
        );
      })}
    </>
  );
}
export default Cart;
