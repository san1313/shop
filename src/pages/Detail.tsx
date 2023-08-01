import { useParams } from 'react-router-dom';
import { shoes } from '../App';
import { Nav } from 'react-bootstrap';
import { useState } from 'react';

function Detail(props: shoes) {
  let { id } = useParams();
  let idNum = Number(id);
  let shoe = props.shoes.find(ele => ele.id === idNum)!;
  const [tab, setTab] = useState(0);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <img src={'https://codingapple1.github.io/shop/shoes' + (idNum + 1) + '.jpg'} width='100%' alt='신발' />
        </div>
        <div className='col-md-6'>
          <h4 className='pt-5'>{shoe.title}</h4>
          <p>{shoe.content}</p>
          <p>{shoe.price}</p>
          <button className='btn btn-danger'>주문하기</button>
        </div>
      </div>

      <Nav variant='tabs' defaultActiveKey='link0'>
        <Nav.Item>
          <Nav.Link eventKey='link0'>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link1'>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link2'>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <div>내용0</div>
      <div>내용1</div>
      <div>내용2</div>
    </div>
  );
}

export default Detail;
