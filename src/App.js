import './App.css';
import DeveloperCardView from './components/DeveloperCard';

function App() {
  return (
    <div className="App">
      <DeveloperCardView 
      dev_name= "Vaibhav Chavda "
      role = "Software Engineer"
      skills = "Python, Django"
      status={true}
      />
    </div>
  );
}

export default App;
