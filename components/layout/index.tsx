import * as React from "react";
import { Header } from "./header";

const Layout: React.FC<React.PropsWithChildren> = ({children}) => {
  return (
  <div>
    <Header/>
    {children}
  </div>
  )
}
export default Layout
