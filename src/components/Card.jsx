import { PiCopySimpleBold } from "react-icons/pi";

function Card({ onClick, passwordOne, passwordTwo, darkMode, handleCopy }) {
  return (
    <main className={darkMode ? "dark" : " "}>
      <div className="bg-green-50 w-80 md:w-96 p-5 mx-auto dark:bg-gray-900">
        <h1 className="text-slate-800 font-karla text-3xl leading-7 mb-3 font-extrabold dark:text-white">
          Generate a <span className="text-emerald-400">random password</span>
        </h1>
        <p className="text-gray-400 text-sm mb-7">
          Never use an insecure password again.
        </p>
        <button
          className="bg-emerald-400 text-white text-sm p-2 rounded-md"
          onClick={onClick}
        >
          Generate passwords
        </button>
        <div className="border-t border-gray-800 mt-8 py-8 flex gap-3 text-emerald-400 text-center text-xs md:text-sm">
          <div className="w-3/6 bg-slate-800 rounded-md p-1 px-2 h-8 flex items-center justify-between">
            <p>{passwordOne}</p>
            <PiCopySimpleBold
              className="text-white ml-2 text-lg cursor-pointer"
              onClick={() => handleCopy(passwordOne)}
            />
          </div>
          <div className="w-3/6 bg-slate-800 rounded-md p-1 px-2 h-8 flex items-center justify-between">
            <p>{passwordTwo}</p>
            <PiCopySimpleBold
              className="text-white ml-2 text-lg cursor-pointer"
              onClick={() => handleCopy(passwordTwo)}
            />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Card;
