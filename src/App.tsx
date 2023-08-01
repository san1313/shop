import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import data from './data';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

export interface shoes {
  shoes: {
    id: number;
    title: string;
    content: string;
    price: number;
  }[];
}

function App() {
  const [shoes, setShoes] = useState(data);
  const [count, setCount] = useState(2);
  const [loading, setLoading] = useState(false);
  let navigate = useNavigate();

  return (
    <div className='App'>
      <Navbar bg='dark' data-bs-theme='dark'>
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate('/');
            }}>
            ShoeShop
          </Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link
              onClick={() => {
                navigate('/');
              }}>
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate('/detail');
              }}>
              Cart
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path='/'
          element={
            <>
              <div className='main-bg'></div>
              <Product shoes={shoes}></Product>
              {loading ? <div>로딩중입니다.</div> : null}
              <button
                onClick={() => {
                  if (count <= 3) {
                    setLoading(true);
                    axios
                      .get('https://codingapple1.github.io/shop/data' + count + '.json')
                      .then(data => {
                        let copy = [...shoes, ...data.data];
                        setShoes(copy);
                        setCount(count + 1);
                        setLoading(false);
                      })
                      .catch(() => {
                        setLoading(false);
                      });
                  } else {
                    alert('더없습니다');
                  }
                }}>
                더보기
              </button>
            </>
          }
        />
        <Route path='/detail/:id' element={<Detail shoes={shoes} />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </div>
  );
}

function Product(props: shoes) {
  return (
    <div className='container'>
      <div className='row'>
        {props.shoes.map((ele, i) => {
          return (
            <div className='col-md-4' key={i}>
              <img
                src={'https://codingapple1.github.io/shop/shoes' + (i + 1) + '.jpg'}
                alt={'신발' + i}
                style={{ width: '80%' }}
              />
              <h4>{ele.title}</h4>
              <p>{ele.price}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
