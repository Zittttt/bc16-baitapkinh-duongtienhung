import logo from "./logo.svg";
import "./App.css";
import BaiTapThuKinh from "./BaiTapThuKinh/BaiTapThuKinh";
//Component App sẽ là nơi chứa toàn bộ giao diện của ứng dụng
function App() {
  return (
    <div className="App">
      <BaiTapThuKinh />
    </div>
  );
}

export default App;
