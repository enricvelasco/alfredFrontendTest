import {
  Routes,
  Route
} from "react-router-dom";
import Main from "../../../pages/main";
import Detail from "../../../pages/detail";

const Navigation = () => {
  return (
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path=":id" element={<Detail />} />
      </Routes>
  )
}

export default Navigation;
