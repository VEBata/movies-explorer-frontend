import { AboutProject } from './AboutProject/AboutProject'
import { NavTab } from './NavTab/NavTab'
import { Promo } from './Promo/Promo'
import { Techs } from './Techs/Techs'
import { AboutMe } from './AboutMe/AboutMe'
import { Portfolio } from './Portfolio/Portfolio'
import './Home.css'

export const Home = () => {
  return (
    <main className='home'>
      <Promo />
      <NavTab />
      <AboutProject />
      <Techs />
			<AboutMe />
			<Portfolio />
    </main>
  )
}