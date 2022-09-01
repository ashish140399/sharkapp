import styled from "styled-components";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Maincontent from "./Maincontent";
import TopPlayers from "./components/TopPlayers";
import Sidebar from "./components/Sidebar";
import { WalletIcon } from "../../../assets/icons";
import MasktopImage from "../../../assets/masktop.png";

const Landing: NextPage = () => {
    return (
        <Layout>
            <div className="leftlayout">
                <div className="headertop left"></div>
                <Sidebar />
            </div>
            <div className="middlelayout">
                <div className="headertop middle">
                    Lorem ipsum, or lipsum as it is sometimes known, is dummy
                    text used in laying out print. Graphic or web designs. The
                    passage is attri..
                </div>
                <Maincontent />
            </div>
            <div className="rightlayout">
                <div className="headertop right">
                    <button>
                        <WalletIcon />
                        Connect Wallet
                    </button>
                </div>
                <TopPlayers />
            </div>
            <div className="masktop">
                <Image src={MasktopImage} />
            </div>
        </Layout>
    );
};
const Layout = styled.div`
    display: flex;
    .headertop {
        height: 70px;
        margin-bottom: 20px;
        display: flex;
        align-items: Center;
        color: #fff;
        &.middle {
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 0.01em;
        }
        &.right {
            display: flex;
            justify-content: flex-end;
            button {
                display: flex;
                align-items: center;
                background: #fff;
                border: 0;
                padding: 11px 28px 11px 24px;
                border-radius: 70px;
                font-weight: 700;
                letter-spacing: 0.01em;
                text-transform: uppercase;
                color: #32657a;
                svg {
                    margin-right: 6px;
                    margin-top: -1px;
                }
            }
        }
    }
    .leftlayout {
        width: 250px;
        position: Sticky;
        align-self: flex-start;
        top: 0;
        z-index: 2;
    }
    .middlelayout {
        width: calc(100vw - 700px);
        position: relative;
        z-index: 2;
    }
    .rightlayout {
        width: 450px;
        padding: 0 20px 20px;
        box-sizing: content-box;
        position: relative;
        z-index: 2;

        &::before {
            position: absolute;
            content: "";
            top: 20vh;
            left: 0;
            height: 120vh;
            width: 300px;
            background: radial-gradient(
                100% 57.33% at 0% 54.65%,
                #005b8b 0%,
                rgba(0, 91, 139, 0) 100%
            );
            opacity: 0.6;
            z-index: 0;
        }
    }
    @media screen and (max-width: 1600px) {
        .leftlayout {
            width: 250px;
        }
        .middlelayout {
            width: calc(100vw - 550px);
        }
        .rightlayout {
            width: 300px;
        }
    }

    .MuiTabs-root {
        .MuiTabs-indicator {
            display: none;
        }
        margin: 0 -4px;
        .MuiTab-root {
            letter-spacing: 0.01em;
            text-transform: uppercase;

            color: #32657a;
            font-weight: 600;

            border: 0;
            background: #fff;
            border-radius: 47px;
            padding: 6px 15px;
            min-height: unset;
            font-size: 13px;
            min-width: unset;
            margin: 0 4px;
            &.Mui-selected {
            }
            span {
            }
        }
    }

    .masktop {
        position: absolute;
        width: 40vw;
        right: 2px;
        top: 0;
        height: auto;
        object-fit: cover;
        z-index: 0;
    }
`;

export default Landing;
