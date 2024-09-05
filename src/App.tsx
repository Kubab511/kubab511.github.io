import { Route, Routes } from "react-router"
import AppPl from "./locale/pl/AppPl"
import AppEn from "./locale/en/AppEn"

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={ <AppEn /> }/>
      <Route path="/pl" element={ <AppPl /> }/>
    </Routes>
    </>
  )
}

export default App