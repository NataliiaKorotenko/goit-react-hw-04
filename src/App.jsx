import { useState } from 'react';
import styles from './App.module.css';
import SearchBar from './components/SearchBar/SearchBar';

function App() {
  const [query, setQuery] = useState("");

  const handleSubmit = (searchValue) => {
    setQuery(searchValue);
  };

  return (
    <div className={styles.Container}>
      <SearchBar onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
