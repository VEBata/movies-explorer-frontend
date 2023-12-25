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
      {buttons.map((button, i) => (
        <li key={i} className={`not-auth__item ${button.button ? 'link' : ''}`}>
          {
            !button.button ? (
              <NavLink to={button.to} className='not-auth__link-native'>
                {button.text}
              </NavLink>
            ) : (
              <NavLink className="not-auth__link" to={button.to}>
                {button.text}
              </NavLink>
            )
          }
        </li>
      ))}
    </ul>
  )
}