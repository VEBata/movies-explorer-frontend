import { NavLink } from "react-router-dom"
import "./NotAuth.css"

export const NotAuth = () => {
  const buttons = [
    {
      to: '/signup',
      text: 'Регистрация',
      button: false
    },
    {
      to: '/signin',
      text: 'Войти',
      button: true
    }
  ]

  return (
    <ul className="not-auth__list">
      {buttons.map((button, i) => {
        const buttonClass = button.button ? 'not-auth__link' : 'not-auth__link-native';
        return <NavLink to={button.to} className={buttonClass}>
          <li key={i} className={`not-auth__item ${button.button ? 'link' : ''}`}>
            {button.text}
          </li>
        </NavLink>
      })}
    </ul>
  )
}