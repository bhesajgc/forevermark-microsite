import "./App.css";
import Agenda from "./containers/agenda/Agenda";
import Speakers from "./containers/speakers/Speakers";
import Home from "./components/home/Home";
import ContactUs from "./containers/contactUs/ContactUs";
import About from "./containers/about/About";
import ScheduleMeeting from "./containers/scheduleMeeting/ScheduleMeeting";
import Login from "./containers/login/Login";
import Register from "./containers/register/Register";
import Navbar from "./components/navbar/Navbar";
import Timer from "./containers/timer/Timer";
import TimerEnd from "./containers/timer/TimerEnd";
import Header from "./components/header/Header";
import CommingSoon from "./containers/commingsoon/CommingSoon";
// import Meetings from "./containers/meetings/Meetings";
// import MyMeeting from './components/MyMeetings/MyMeeting';
import Logo from "./images/logo.png";
import WhiteLogo from "./images/white_logo.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Styles/global.css";
import AfterRegister from "./containers/afterRegister/AfterRegister";
import Footer from './components/footer/Footer'

function App() {
  return (
    // <CommingSoon />
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <div className="container">
              <Header logo={WhiteLogo} />
              <Navbar key={0} />
              <Timer />
              <Footer />
            </div>
            <div className="home_bg"></div>
          </Route>
          <Route exact path="/about">
            <div className="container">
              <Header logo={Logo} />
              <Navbar key={1} />
              <About />
              <Footer />
            </div>
            <div className="about_bg"></div>
          </Route>
          <Route exact path="/agenda">
            <div className="container-coming-soon">
              <Header logo={Logo} />
              <Navbar key={2} />
              <Agenda />
              <Footer />
            </div>
            <div className="agenda-bg"></div>
          </Route>
          <Route exact path="/speakers">
            <div className="container-coming-soon">
              <Header logo={Logo} />
              <Navbar key={2} />
              <Speakers />
              <Footer />
            </div>
            <div className="agenda-bg"></div>
          </Route>
          {/* <Route exact path="/schedule-meetings">
            <div className="container">
              <Header logo={Logo} optionsShow={true} />
              <Navbar key={3} />
              <ScheduleMeeting />
              <Footer />
            </div>
          </Route> */}
          <Route exact path="/contact-us">
            <div className="container">
              <Header logo={Logo} />
              <Navbar key={4} />
              <ContactUs />
              <Footer />
            </div>
            <div className="contact-bg"></div>
          </Route>
          <Route exact path="/signin">
            <div className="container">
              <Header logo={Logo} />
              <Navbar key={5} />
              <Login />
              <Footer />
            </div>
          </Route>
          <Route exact path="/register">
            <div className="container">
              <Header logo={Logo} />
              <Navbar key={6} />
              <Register />
              <Footer />
            </div>
            <div className="register-bg"></div>
          </Route>
          {/* <Route exact path="/my-meetings">
            <div className="container">
              <Header logo={Logo} optionsShow={true} />
              <Navbar key={7} />
              <Meetings />
              <Footer />
            </div>
          </Route> */}
          <Route exact path="/comming-soon">
            <div className="container-coming-soon">
              <Header logo={Logo} />
              <Navbar key={8} />
              <CommingSoon />

            </div>
          </Route>
          <Route exact path="/after-register">
            <div className="container-after-register">
              <Header logo={Logo} />
              <Navbar key={9} />
              <AfterRegister />
            </div>
          </Route>
          <Route exact path="/after-timer-end">
            <div className="container">
              <Header logo={WhiteLogo} />
              <Navbar key={0} />
              <TimerEnd />
            </div>
            <div className="home_bg"></div>
          </Route>
          <Route path='/external-link' component={() => {
            window.location.href = 'https://ffm-traversal-dev.web.app';
            return null;
          }} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

