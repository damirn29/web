import { useState } from 'react';
import MainRouter from './MainRouter';

function App() {
  const [isAuth, setIsAuth] = useState(false);


  const handleAuthentication = () => {
    setIsAuth(!isAuth);
  };



  return (
    <div>
      <MainRouter isAuth={isAuth} handleAuthentication={handleAuthentication} />
    </div>
  );
}
App.whyDidYouRender = true;
export default App;
