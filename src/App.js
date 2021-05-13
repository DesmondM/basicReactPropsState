import './App.css';
import Greet from './Greet';
import Users from './users/Users';



function App() {
  return (
    <div className="App">
     <Greet name = "Desmond" surname ="Mpofu"> <button>ActionClick</button></Greet>
     <Greet name = "Sbongizz" surname ="Mpofu2"><h2>The first baby</h2></Greet>
     <Greet name = "Banothile" surname ="Mpofu3"><h2>Last one</h2></Greet>
    </div>
  );
}

export default App;
