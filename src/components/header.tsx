import { NavLink } from './nav-link'

import nlwUniteIcon from '../assets/nlw-unite-icon.svg'

export function Header() {
  return (
    <div className="flex items-center gap-5 py-2">
      <img src={nlwUniteIcon} alt="nlw unite logo svg image" />
      <nav className="flex items-center gap-5">
        <NavLink href="/events">Events</NavLink>
        <NavLink href="/attendees">Attendees</NavLink>
      </nav>
    </div>
  )
}
