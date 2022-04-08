import './index.css';
import Header from './Header';
import Main from './Main';
import Team from './Team';
import TrainingCoaching from './TrainingCoaching';
import Contact from './Contact';
import Footer from './Footer';
import TopReasons from './TopReasons';
import TheDifference from './TheDifference';
import OurTechnology from './OurTechnology';
import Careers from './Careers';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Team />
      <TheDifference />
      <TopReasons />
      <OurTechnology />
      <TrainingCoaching />
      <Careers/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
