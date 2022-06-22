
/**
 * Base file for the Application
 * Use this place to configure all setup required throughout app such as provider,
 *  or redux or something like that might needed across the App.
 * 
 */
import './App.css';
import GiphyListingContainer from './features/GiphyList/containers/GiphyListContainer';
import Main from './layouts/main';

function App() {
  return (
    /** use Router if Application has multiple features/pages */
    <Main>
      <GiphyListingContainer/>
    </Main>
  );
}

export default App;
