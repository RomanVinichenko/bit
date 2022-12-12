import React, { FC } from 'react'
import { Button, Logo } from '../../components'
import { NavLink, useLocation, useNavigate, useParams } from 'react-router-dom'
import * as s from './styled'

type Props = {
  openMenu: () => void
}

const Header: FC<Props> = ({ openMenu }) => {
  const location = useLocation()
  const params = useParams()
  const navigate = useNavigate()

  console.log(location.pathname)
  function renderRouteButton() {
    switch (location.pathname) {
      case `/${params.lang}/signin`:
        return (
          <NavLink to={`/${params.lang}/signup`} replace={true}>
            <Button>Get Started</Button>
          </NavLink>
        )
      default:
        return (
          <NavLink to={`/${params.lang}/signin`} replace={true}>
            <Button>Log In</Button>
          </NavLink>
        )
    }
  }

  return (
    <s.Container>
      <Logo />
      <div className="content content--desktop">
        <div className="label">Already a member?</div>
        {renderRouteButton()}
        <button className="language">English</button>
      </div>
      <button className="content content--mobile" onClick={openMenu}>
        <svg
          width="24"
          height="25"
          viewBox="0 0 24 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_71_8597)">
            <path
              d="M3 18.7021H21V16.7021H3V18.7021ZM3 13.7021H21V11.7021H3V13.7021ZM3 6.70215V8.70215H21V6.70215H3Z"
              fill="currentColor"
            />
          </g>
          <defs>
            <clipPath id="clip0_71_8597">
              <rect
                width="24"
                height="24"
                fill="currentColor"
                transform="translate(0 0.702148)"
              />
            </clipPath>
          </defs>
        </svg>
      </button>
    </s.Container>
  )
}

export default Header
