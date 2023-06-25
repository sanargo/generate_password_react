import Card from "./components/Card";
import { useState } from "react";
import { WiDayCloudy } from "react-icons/wi";

function App() {
  const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
  ];

  const [darkMode, setDarkMode] = useState(true);

  const [passwordOne, setPasswordOne] = useState("");
  const [passwordTwo, setPasswordTwo] = useState("");

  const generatePassword = () => {
    let password = "";
    for (let i = 0; i <= 15; i++) {
      let charIndex = Math.floor(Math.random() * characters.length);
      password += characters[charIndex];
    }
    return password;
  };

  const handleClick = () => {
    setPasswordOne(generatePassword());
    setPasswordTwo(generatePassword());
  };
  console.log(darkMode);

  return (
    <div className="bg-gray-950 h-screen font-inter">
      <header className="flex justify-center mb-44 py-5">
        <WiDayCloudy
          className="text-white text-4xl cursor-pointer"
          onClick={() => setDarkMode(!darkMode)}
        />
      </header>
      <Card
        darkMode={darkMode}
        onClick={handleClick}
        passwordOne={passwordOne}
        passwordTwo={passwordTwo}
      />
    </div>
  );
}

export default App;
