import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 1, 
    display: 'flex',
    flexDirection: 'column',
    gap: '12px', 
    padding: '10px', 
  },
};

function App() {
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.content}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;