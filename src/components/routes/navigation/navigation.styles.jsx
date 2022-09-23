import styled, { keyframes } from 'styled-components'
import { Link } from 'react-router-dom'
export const NavigationContainer = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-basis: 100%;
`

export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  text-decoration: underline;
`
const slideInLeft = keyframes`
  0% {
    -webkit-transform: translateX(-50px);
            transform: translateX(-50px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
`

export const WelcomeUser = styled.h2`
  animation: ${slideInLeft} .5s linear;
`

// .navigation {


//   .logo-container {
//     height: 100%;
//     width: 70px;
//     padding: 25px;
//   }

//   .nav-links-container {
//     width: 50%;
//     height: 100%;
//     display: flex;
//     align-items: center;
//     justify-content: flex-end;
//     flex-basis: 100%;

//     .nav-link {
//       padding: 10px 15px;
//       cursor: pointer;
//       text-decoration: underline;
//     }
//   }
// }
