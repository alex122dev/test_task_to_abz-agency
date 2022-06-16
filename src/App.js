import { useEffect } from 'react';
import { GetBlock } from './component/GetBlock/GetBlock';
import { Header } from './component/Header/Header';
import { MainBanner } from './component/MainBanner/MainBanner';
import { PostBlock } from './component/PostBlock/PostBlock';
import { useDispatch } from "react-redux";
import './styles/style.scss'
import { getNewToken } from './redux/users-reducer';

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewToken())
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <MainBanner />
      <GetBlock />
      <PostBlock />
    </div>
  );
}

export default App;
