import './App.css';
import CoeurDegrade from './components/coeurDegrade/CoeurDegrade';
import BtnOpenFormulaire from "./components/formulaire/BtnOpenFormulaire";
import Dropdown from './components/dropdown/Dropdown';

function App() {
  return (
    <div className="App">
      <CoeurDegrade />
      <BtnOpenFormulaire />
      <Dropdown title="Le développement" text1={"JVJVJHVHJVJHVHJVHV"}/>
      <Dropdown title="Le graphisme" text1="DFWXWDWDFWDFWD"/>
      <Dropdown title="La SEO" text1="GHCJCJCJCJCJH"/>

    </div>
  );
}

export default App;
