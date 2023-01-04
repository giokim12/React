// import logo from './logo.svg';
import './App.css';  // App.css에 있는 css를 import 해야 반영이 됨
import { useState } from 'react';

function App() {

  let postTitle = '제목에 해당하는거를 변수에 저장함';
  let [글제목, setTitle] = useState(['내가 스테이트에 저장한 자료1','내가 스테이트에 저장한 자료2','내가 스테이트에 저장한 자료3']);
  let[따봉, 따봉변경] = useState(0);
  let[modal, setModal] = useState(false);

  // function likeAdd() {
  //   console.log(1);
  // }


  return (
    <div className="App"> 
      <div className= 'black-nav'>
        <h4>블로그임</h4>
      </div>
      <h4 style={{ color: 'red', fontSize : '30px' }}>블로그 글 제목</h4>
      <h4>{ postTitle }</h4>

      <button onClick={() => {
        let copy = [...글제목];
        copy[0] = '이름바꾼거1';
        setTitle(copy);
      }}>글 제목 바꾸기</button>

      <button onClick={() => {
        let copy = [...글제목];
        copy.sort();
        setTitle(copy);
      }}>가나다순 정렬</button>

      <div className="list">
        <h4>글 제목</h4>
        <h4>몇월며칠 발행</h4>
      </div>
      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={() => 따봉변경(따봉+1)}>❤</span> { 따봉 }</h4>
        <p> 뭔가를 씀</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p> 뭔가를 씀</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p> 뭔가를 씀</p>
      </div>


      <Modal></Modal>
    </div>
  );
}


export default App;

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}



