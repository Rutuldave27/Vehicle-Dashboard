import React from "react";
import styled from "styled-components";
import { route } from "react-router-dom";
import { RiHomeLine, RiFileCopyLine } from "react-icons/ri";
import { FaCar, FaComments, FaMapMarkedAlt, FaRoute, FaShopify, FaShoppingBag, FaTruck, FaWallet } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import Badge from "./Badge";
import AvatarImage from "../assets/dp2.jpg";
import { darkThemeColor } from "../utils";
import BlueBtn from "./BlueBtn";

var windowObjectReference;

function openRequestedPopup() {
  windowObjectReference = window.open(
    "https://google.com",
    "DescriptiveWindowName",
    "left=100,top=100,width=320,height=320"
  );
}


function Sidebar() {
  
 
function helpBtn(props) {
  return (<a href={props.openUrl} target="_blank" rel="noopener noreferrer">{props.openUrl}</a>)
}
  return (
    <Container>
      <ProfileContainer>
        <Avatar src={AvatarImage} />
        <Name>Shravan Suresh</Name>
        <Badge href="www.google.com"content="Pro Level" />
      </ProfileContainer>
      <LinksContainer>
        <Links>
          <Link>
            <RiHomeLine />
            <h3>Dashboard</h3>
          </Link>
          <Link>
            <FaCar />
            <h3>My Vehicles</h3>
          </Link>
          <Link>
            <FaRoute />
            <h3>Tracker</h3>
          </Link>
          <Link>
            <FaMapMarkedAlt />
            <h3>Path Finder</h3>
          </Link>
          <Link>
            <AiOutlinePieChart />
            <h3>Communities</h3>
          </Link>
          {/* <Link>
            <FaShoppingBag />
            <h3>Shop</h3>
          </Link> */}
        </Links>
        <ContactContainer>
          {/* <BlueBtn>hello</BlueBtn> */}
          {/* <Badge onClick={openRequestedPopup}  content="Get Help" clean={true} /> */}
          {/* <button style={{padding:"5px", color:"#000000", borderRadius:"15px", outline:"None"}}>
            <a style={{color:"#000000", outline:"None", fontFamily:""}} href="https://google.com">Contact Us</a>
          </button> */}
        </ContactContainer>
      </LinksContainer>
    </Container>
  );
}

const Container = styled.div`
  width: 20%;
  height: 62% !important;
  border-radius: 2rem;
  background-color: #091322;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    width: 100%;
    height: max-content !important;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Avatar = styled.img`
  height: 7rem;
  border-radius: 6rem;
  margin-top: 20%;
`;

const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 400;
  margin: 0.8rem 0 0.5rem 0;
`;

const LinksContainer = styled.div`
  background-color: ${darkThemeColor};
  height: 100%;
  width: 100%;
  border-radius: 2rem;
`;

const Links = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  height: 60%;
`;

const Link = styled.li`
  margin-left: 25%;
  margin-bottom: 2rem;
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  h3 {
    font-weight: 300;
  }
  svg {
    font-size: 1.1rem;
    margin-top: 3%;
  }
`;

const ContactContainer = styled.div`
  width: 60%;
  text-align: center;
  // color: #c4c4c4;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: -10px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  a {
    color: white;
    text-decoration: none;
  }

  @media screen and (min-width: 320px) and (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export default Sidebar;
