import MainLogo from "../Images/bbLogo.png"
import styled from "styled-components"

const NavWrapper = styled.div`
background-color: white;
overflow: hidden;


`;
const ListWrapper = styled.ul`
list-style-type: none;
margin: 0;
padding: 0;
overflow: hidden;
background-color: white;
`;

const ListItemWrapper=styled.li`
    float: left;
  `
  
  const ListAnchorWrapper =styled.a`
  float: left;
  color: black;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
  `
  const NavImageWrapper=styled.div`
  float: left;
  padding-top: 0;
`
const NavImageRightWrapper=styled.div`
float: right
`
const UserActionWrapper=styled.li`
    float: right;
    margin-top: 0;
    
`
const flexWrapper=styled.div`
    display:flex;
    flex-direction:row;
    
`




const SiteNav = () =>{
    return(
            
        <NavWrapper id="siteNavBar"> 
             <NavImageWrapper><img src={MainLogo} alt='store logo' height='100' width= '100'/></NavImageWrapper>
            
            <ListWrapper id="siteNavBar-list">  
                <li className="siteNavBar-item">
                    <ListAnchorWrapper href="#shop">SHOP</ListAnchorWrapper>
                </li>
                <li className="siteNavBar-item">
                    <ListAnchorWrapper href="#subs">SUBSCRIPTIONS</ListAnchorWrapper>
                </li>
                <li className="siteNavBar-item">
                    <ListAnchorWrapper href="#holiday">HOLIDAY</ListAnchorWrapper>
                </li>
                <li className="siteNavBar-item">
                    <ListAnchorWrapper href="#locations">LOCATIONS</ListAnchorWrapper>
                </li>
                <li className="siteNavBar-item">
                    <ListAnchorWrapper href="#learn">LEARN</ListAnchorWrapper>
                </li>
              <flexWrapper>  
                <UserActionWrapper>
                    <ListAnchorWrapper href="#learn">SUBSCRIBE</ListAnchorWrapper>
                </UserActionWrapper>
                <UserActionWrapper>
                    <ListAnchorWrapper href="#learn">SIGN IN</ListAnchorWrapper>
                </UserActionWrapper>
            </flexWrapper>

            </ListWrapper>
           <flexWrapper>
            <NavImageRightWrapper><img src={MainLogo} alt='store logo' height='100' width= '100'/></NavImageRightWrapper>
            <NavImageRightWrapper><img src={MainLogo} alt='store logo' height='100' width= '100'/></NavImageRightWrapper>
        </flexWrapper>


            <hr></hr>
        

        </NavWrapper>
        


    )
    
    
}

export default SiteNav

