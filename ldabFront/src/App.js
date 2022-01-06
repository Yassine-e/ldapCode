import ErrorPage from './components/errorPage.js';
import Main from './components/page1/main.js';
import Admin from './components/Admin/admin.js';
import Prof from './components/professeur/prof.js';

import { BrowserRouter, Route, Routes  } from "react-router-dom";


function App() {
  return (
    <div className="App">

    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Main/>} exact />
      <Route path="/admin" element={<Admin/>} />
      <Route path="/prof" element={<Prof/>} />
      <Route element={<ErrorPage/>} />
     </Routes>
    </BrowserRouter>



      {/*
        {user.roles=="ADMIN"? <Route path="/Dashboard" component={Dashboard} /> : <Route path="/Dashboard" component={ErrorPage} /> }
        <NavBar/>
      <Desc1/>
      <Letter/>
      <Courses/>
      <NewsLetter/>*/}
    </div>
  );
}

export default App;
