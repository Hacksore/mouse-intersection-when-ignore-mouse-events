import { useEffect, useState } from "react";
import { appWindow } from "@tauri-apps/api/window";
import "./App.css";

function App() {
  const [isHovering, setIsHovering] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    window.addEventListener("mouseover", () => {
      setIsHovering(true);
    });

    window.addEventListener("mouseout", () => {
      setIsHovering(false);
    });

    appWindow.onFocusChanged(({ payload: focused }) => {
      setIsFocused(focused);
    });
  }, []);

  return (
    <div className="container">
      mouse over here
      <hr />
      <div style={{ background: isHovering ? "green" : "none" }}>
        {isHovering ? "hovering" : "not hovering"}
      </div>
      <hr />
      <div>{isFocused ? "focused" : "not focused"}</div>
    </div>
  );
}

export default App;
