import NavBar from './components/NavBar';
import Body from './components/Body'
import Sidebar from './components/SideBar'
import './global.css'
import styles from './css/App.module.css';
function App() {
  return (
    < >
      <NavBar />
      <div className={styles.flex}>
        <Body />
        <Sidebar />
      </div>
    </>
  );
}

export default App;
