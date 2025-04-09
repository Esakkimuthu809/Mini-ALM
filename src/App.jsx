import Header from './Components/Header/Header.jsx';
import { CORE_CONCEPTS } from './data';
import CoreConcept from './Components/CoreConcept/CoreConcept.jsx';
import TabButton from './Components/TabButton/TabButton.jsx'





function App() {
  let tabContent = "Please click a button"
  function handleSelect(selectedButton){
    tabContent = selectedButton;
    console.log(tabContent);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept 
            title={CORE_CONCEPTS[0].title}
            description={CORE_CONCEPTS[0].description}
            image={CORE_CONCEPTS[0].image}
             />
             <CoreConcept {...CORE_CONCEPTS[1]} />
             <CoreConcept {...CORE_CONCEPTS[2]} />
             <CoreConcept {...CORE_CONCEPTS[3]} />
             
          </ul>
        </section>
        <section id="examples">
          <h2>Tab section</h2>
          <menu >
            <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('probs')}>Probs</TabButton>
            <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
          </menu>
          <tabContent/>
        </section>
      </main>
    </div>
  );
}

export default App;