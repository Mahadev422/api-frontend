import { useState } from "react"
import CodeShowCase from "./components/CodeShowCase"
import NotificationSystem from "./components/extra/NotificationSystem"
import HomePage from "./components/HomePage"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import Sidebar from "./components/layout/Sidebar"


function App() {

  const [home, setHome] = useState(false);

  return (
   <div className="flex flex-col min-h-screen">
      <Header set={setHome} />
      <div className="flex flex-1">
        
          <div className="sticky top-13 h-screen z-10 bg-blue-50">
            <Sidebar />
          </div>

       <main className="flex-1 overflow-y-auto">
          {/* <Outlet /> */}
          {home ? <HomePage /> :
          <CodeShowCase />}
        </main>
      </div>
      <NotificationSystem />
      <Footer />
    </div>
  )
}

export default App
