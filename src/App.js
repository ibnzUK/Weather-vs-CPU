import classes from './App.module.css';
import Card from './components/UI/Card';
import Waves from './components/UI/Waves';
import Footer from './components/Footer';

function App() {
  return (
    <div className={classes.App}>
      <Waves />
      <Card />
      <Footer/>
    </div>
  );
}

export default App;
