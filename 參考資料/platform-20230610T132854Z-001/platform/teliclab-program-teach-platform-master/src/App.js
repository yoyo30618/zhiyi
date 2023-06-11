import './App.css';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './page/LoginPage';
import CourcePage from './page/CourcePage';
import NoMatch from './page/NoMatch';
import CourceCard from './component/courcePage/CourceCard';
import { menuData } from './utils/menuData';
import MenuPage from './page/MenuPage';
import CourcePanel from './component/Charpter3Page/CourcePanel';

function App() {
  const sectionRoute = (charpterData) => {
    return charpterData.sectionList.map((section, i) => {
        if (charpterData.charterTitle === 'Charpter3')
          return <Route key={i} path={section.url} element={<CourcePanel charpterTitle={charpterData.charterTitle} sectionUrl={section.url} key={i}/>} />
        else
          return <Route key={i} path={section.url} element={<CourceCard charpterTitle={charpterData.charterTitle} sectionUrl={section.url} key={i}/>} />
      }
    );
  };

  return (
    <div> 
      <Routes>
        <Route index element={<MenuPage menuData={menuData}/>} />
        {menuData.map((charpterData, i) => {
          return (
            <Route key={i} path={charpterData.charterTitle} element={<CourcePage seciontDataList={menuData[i]} />}>
              {sectionRoute(menuData[i])}
              <Route path="*" element={<NoMatch />} />
            </Route>
          );
        })}
        <Route path="login" element={<LoginPage />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;