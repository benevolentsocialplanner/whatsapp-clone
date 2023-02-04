import { useSelector } from "react-redux";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ChatDetail from "./pages/ChatDetail";
import Chat from "./pages/Chat";
import Sidebar from "./components/Sidebar"
import PageContainer from "./containers/PageContainers"

function App() {
  
  
      const { user } = useSelector(state=>state.user)
      console.log(user)
      
      return (  
      <>
      {
        !user ? <Login/> : 
        <Router>
          <PageContainer>
            <Sidebar/>
          <Routes>
            <Route path = "/" element = {<ChatDetail/>}/>
            <Route path = "chat/:id" element = { <Chat/>}/>
          </Routes>
          </PageContainer>
        </Router>
      }
      </> 
              
        );
      }

export default App;
