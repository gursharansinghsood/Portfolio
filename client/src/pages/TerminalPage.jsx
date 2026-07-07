import { useEffect, useRef, useState } from "react";
import Titlebar from "../components/cards/Titlebar";
import InputSystem from "../components/terminal/InputSystem";
import Fade from "../components/motion/Fade";
import HistorySystem from "../components/terminal/HistorySystem";

const TerminalPage = () => {
  const [history, setHistory] = useState([]);

  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [history]);

  return (
    <Fade className="h-screen flex flex-col">
      <Titlebar name={"Terminal"} />
      <div className="flex-1 overflow-y-auto p-5 font-mono">
        <HistorySystem history={history} />
        <InputSystem history={history} setHistory={setHistory} />
        <div ref={bottomRef} />
      </div>
    </Fade>
  );
};

export default TerminalPage;
