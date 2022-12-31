// import logo from './logo.svg';
import './App.css';  // App.css에 있는 css를 import 해야 반영이 됨

function App() {

  let postTitle = '제목에 해당하는거를 변수에 저장함';

  return (
    <div className="App"> 
      <div className= 'black-nav'>
        <h4>
          블로그임
        </h4>
      </div>
      <h4 style={{ color: 'red', fontSize : '30px' }}>블로그 글 제목</h4>
      <h4>{ postTitle }</h4>
    </div>
  );
}



export default App;



