import { useLayoutEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { shoes } from '../App';

function Detail(props: shoes) {
  let { id } = useParams();
  let idNum = Number(id);
  let shoe = props.shoes.find(ele => ele.id === idNum)!;
  const [tab, setTab] = useState(0);
  const [fade, setFade] = useState('');
  useLayoutEffect(() => {
    setTimeout(() => {
      setFade('container');
    }, 100);
    return () => {
      setFade('start');
    };
  }, []);

  return (
    <div className={fade}>
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
          <Nav.Link onClick={() => setTab(0)} eventKey='link0'>
            버튼0
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link onClick={() => setTab(1)} eventKey='link1'>
            버튼1
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setTab(2);
            }}
            eventKey='link2'>
            버튼2
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent tab={tab} />
    </div>
  );
}

function TabContent({ tab }: { tab: number }) {
  const [fade, setFade] = useState('');
  useLayoutEffect(() => {
    let a = setTimeout(() => {
      setFade('end');
    }, 100);
    return () => {
      clearTimeout(a);
      setFade('');
    };
  }, [tab]);
  return <div className={'start ' + fade}>{[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}</div>;
}

export default Detail;
