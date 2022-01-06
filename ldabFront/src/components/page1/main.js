import NavBar from '../navBar.js';
import Desc1 from './desc1.js';
import Letter from './letter.js';
import Courses from './courses.js';
import NewsLetter from './newsLetter.js';

function Main() {
  return (
    <div className="App">
      <NavBar/>
      <Desc1/>
      <Letter/>
      <Courses/>
    </div>
  );
}

export default Main;
