import { useEffect, useRef, useState } from "react";
import { terminalCommand } from "../../services/terminalCommand";
import { replace, useNavigate } from "react-router-dom";

const InputSystem = ({ history, setHistory }) => {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const handleEnter = () => {
    if (input.toLowerCase().trim() === "clear") {
      return setHistory([]);
    } else if (input.toLowerCase().trim() === "exit") {
      return navigate("/home", replace);
    } else {
      const newHistory = [
        ...history,
        { command: input, output: terminalCommand(input) },
      ];
      return setHistory(newHistory);
    }
  };

  useEffect(() => inputRef.current.focus(), []);

  return (
    <div className="flex items-center gap-2">
      <p className="text-success font-bold">GursharanSinghSood@Portfolio: </p>
      <input
        type="text"
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 outline-none"
        ref={inputRef}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            handleEnter();
            setInput("");
            e.target.value = "";
          }
        }}
      />
    </div>
  );
};

export default InputSystem;
