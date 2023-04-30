import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./styles/global";
import { Router } from "./Router";

export function App () {
  
  return (
   <>
      <GlobalStyles/>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
   </>
  )
}


