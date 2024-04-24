import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  //length
  const [length, setLength] = useState(8);
  //Number
  const [numberAllowed, setNumberAllowed] = useState(false);
  //Character
  const [charAllowed, setCharAllowed] = useState(false);
  //Password
  const [password, setPassword] = useState("");
  //Reference password
  const selectText = useRef(null);
  //Generates password
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (numberAllowed) str += "1234567890";
    if (charAllowed) str += "!@#$%^&*/";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    // store generated password in setPassword
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  //Copy the password and highlights copied text
  const copyText = useCallback(() => {
    selectText.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  //it calls generatePassword function
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md text-center rounded-lg py-5 px-4 my-12 bg-blue-950">
        <h1 className="text-blue-200 text-center mb-4">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            placeholder="Password"
            readOnly
            className="outline-none w-full py-1 px-3"
            value={password}
            ref={selectText}
          />
          <button
            onClick={copyText}
            className="bg-black text-white px-2 py-1.5"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 text-blue-200">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={8}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            ></input>
            <label>Length: {length}</label>
          </div>
          <div className="flex item-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onClick={() => {
                setNumberAllowed((prev) => !prev);
              }}
            ></input>
            <label>Number</label>
          </div>
          <div className="flex item-center gap-x-2">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              onClick={() => {
                setCharAllowed((prev) => !prev);
              }}
            ></input>
            <label>Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
