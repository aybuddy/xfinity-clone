import './App.css';
import './styles/global.css';
import Header from './components/Header';
import FlexCardContainer from './components/FlexCardContainer';

function App() {
  return (
    <section>
      <Header />

      <main>
        <FlexCardContainer />
      </main>
      <footer>{/* Footer Compoent (3 sections) */}</footer>
    </section>
  );
}

export default App;
