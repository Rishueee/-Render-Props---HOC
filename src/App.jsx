import './App.css';
import LikeImage from './components/LikeImage';
import LikePost from './components/LikePost';
import Og from './rendering/OG';
function App() {
  return (
    <div>
   <h1>SOME BLOG</h1>
      <div className='buttons'>
       
        <Og render = {(arg1 , arg2) => <LikePost count = {arg1} functionality = {arg2}/>} />
        <Og render = {(arg1 , arg2) => <LikeImage count = {arg1} functionality = {arg2}/>} />
       
      </div>
    </div>
  );
}

export default App;