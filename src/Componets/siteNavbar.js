import MainLogo from "../Images/bbLogo.png"
import styled from "styled-components"

const navWrapper = styled.nav`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const listWrapper = styled.li`
  display: inline;
  float: left;
`;

const SiteNav = () =>{
    return(
        <navWrapper>
        <nav id="siteNavBar">
            <div>
            <img src={MainLogo} alt='store logo' height='100' width= '100'/>
            <a href="#shop"></a>
            </div>
            <ul id="siteNavBar-list">
                <listWrapper>
                <li className="siteNavBar-item">
                    <a href="#shop">SHOP</a>
                </li>
                <li className="siteNavBar-item">
                    <a href="#shop">SUBSCRIPTIONS</a>
                </li>
                <li className="siteNavBar-item">
                    <a href="#shop">HOLIDAY</a>
                </li>
                <li className="siteNavBar-item">
                    <a href="#shop">LOCATIONS</a>
                </li>
                <li className="siteNavBar-item">
                    <a href="#shop">LEARN</a>
                </li>
                </listWrapper>

            </ul>

        </nav>
        </navWrapper>


    )
}

export default SiteNav