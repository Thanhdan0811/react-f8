import { createContext, useContext, useState } from "react";
import Content1 from "./Content1";

// export const themeContext = createContext();

// createContext() ; trả về object chứa Provider và Consumer.
// Ta có thể gọi nhiều context khác nhau , mỗi lần gọi sẽ tạo ra 1 context cụ thể.
// console.log(themeContext);

// 1. Context
// 2. Provider
// 3. Consumer

import { ThemeContext } from "./ThemeContext";

const ContextCom = () => {

    const context = useContext(ThemeContext);

//   const [theme, setTheme] = useState("dark");

//   const toggleTheme = () => {
//     setTheme(theme === "dark" ? "light" : "dark");
//   };
// <themeContext.Provider value={theme}>
// </themeContext.Provider>
{/*  Toàn bộ children sẽ nhận được theme */}

  return (
      <div style={{ padding: "20px" }}>
        <button onClick={()=>{context.toggleTheme()}}>Toggle theme</button>
        <Content1 />
      </div>
  );
};

export default ContextCom;
