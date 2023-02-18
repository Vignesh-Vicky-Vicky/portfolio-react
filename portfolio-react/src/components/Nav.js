import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const Nav = () => {
    return(
        <StyledaNav>
            <h1><Link id='Logo' to="/">Portfolio</Link></h1>
            <ul>
                <li><Link to="/">1. About Us</Link></li>
                <li><Link to="/work">2. Our Work</Link></li>
                <li><Link to="/contact">3. contact Us</Link></li>
            </ul>
        </StyledaNav>
    )
}

const StyledaNav = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;

    a {
        color: #fff;
        text-decoration: none;
    }

    ul {
        display: flex;
        list-style: none;

        li {
            padding-left: 10rem;
            position: relative;
        }
    }

    #Logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
`
export default Nav;