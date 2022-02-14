import Navigation from "./common/components/navigation";
import css from './app.module.css';
import Header from "./common/components/header";

function App() {
  return (
    <div className={css.app}>
      <Header />
      <Navigation />
    </div>
  )
}

export default App
