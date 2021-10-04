
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About us/About';
import Courses from './components/Courses/Courses';
import Contact from './components/Contact/Contact';
import Instractor from './components/Instractors/Instractor';
import NotFound from './components/NotFound/NotFound';
import Header from './components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoadData from './components/LoadData/LoadData';
import DisplayHome from './components/DisplayHome/DisplayHome';
import CourseDisplay from './components/CourseDisplay/CourseDisplay';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/home">
            <DisplayHome></DisplayHome>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/courses">
            <Courses></Courses>
          </Route>
          <Route path="/courses">
            <CourseDisplay></CourseDisplay>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="/instractor">
            <Instractor></Instractor>
          </Route>
          <Route path="/instractor">
            <LoadData></LoadData>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
