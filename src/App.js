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
        {/* <div className='relative overflow-hidden'>
          <div
            className='flex flex-col flex-1 md:flex-row'
            style={{
              position: 'relative',
              backgroundPosition: 'center center',
              overflow: 'hidden',
              backgroundImage: `url('https://assets.xfinity.com/assets/dotcom/projects/cix-2598_fall-sale/2.0_Homepage_Hero_Fall_Sale-Desktop-Update-2.jpg')`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
            }}
          >
            <div className='flex flex-col items-center full-image-content-half max-w justify-center px-6 py-8 md:px-8 md:py-10 lg:px-16 lg:py-16 md:full-image-content-half'></div>
          </div>
        </div> */}
      </main>
      <footer>{/* Footer Compoent (3 sections) */}</footer>
    </section>
  );
}

export default App;
