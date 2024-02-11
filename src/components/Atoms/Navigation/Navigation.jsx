import { LoggedIn } from "./LoggedIn/LoggedIn"
import { NotAuth } from "./NotAuth/NotAuth"
import "./Navigation.css"


export const Navigation = () => {
  return (
    <nav className="nav">
      {
        localStorage.getItem('token') ? <LoggedIn /> : <NotAuth />
      }
    </nav>
  )
}