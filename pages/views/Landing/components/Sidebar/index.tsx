import * as React from "react";
import styled from "styled-components";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Grid from "@mui/material/Grid";
import {
    CrashIcon,
    DiceIcon,
    FairnessIcon,
    FaqIcon,
    InviteIcon,
    Pinterest,
    SupportIcon,
    WheelIcon,
} from "../../../../../assets/icons";

const Sidebar: NextPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };
    return (
        <Box>
            <div className="navitem">
                <div className="navicon">
                    <DiceIcon />
                </div>
                dice
            </div>
            <div className="navitem">
                <div className="navicon">
                    <WheelIcon />
                </div>
                wheel
            </div>
            <div className="navitem">
                <div className="navicon">
                    <CrashIcon />
                </div>
                crash
            </div>
            <div className="dotseprator"></div>
            <div className="navitem">
                <div className="navicon">
                    <FairnessIcon />
                </div>
                fairness
            </div>
            <div className="navitem">
                <div className="navicon">
                    <FaqIcon />
                </div>
                faq
            </div>
            <div className="navitem">
                <div className="navicon">
                    <SupportIcon />
                </div>
                support
            </div>
            <div className="navitem">
                <div className="navicon">
                    <InviteIcon />
                </div>
                invite friend
            </div>
        </Box>
    );
};
const Box = styled.div`
    padding: 20px;
    width: 100%;
    position: relative;
    min-height: calc(100vh - 100px);
    .dotseprator {
        width: 100px;
        height: 1px;
        background-image: linear-gradient(
            to right,
            #fff 33%,
            rgba(255, 255, 255, 0) 0%
        );
        background-position: bottom;
        background-size: 12px 3px;
        background-repeat: repeat-x;
        margin: 10px 0;
        margin-left: 30px;
    }
    .navitem {
        text-transform: uppercase;
        display: flex;
        align-items: center;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        letter-spacing: 0.01em;
        text-transform: uppercase;
        color: #ffffff;
        margin: 40px 0;
        .navicon {
            width: 30px;
            display: flex;
            align-items: center;
            justify-content: Center;
            margin-right: 10px;
        }
    }
    &::before {
        position: absolute;
        content: "";
        bottom: 0;
        right: 0;
        height: 70vh;
        width: 200px;
        background: radial-gradient(
            100% 57.33% at 0% 54.65%,
            #005b8b 0%,
            rgba(0, 91, 139, 0) 100%
        );
        opacity: 0.6;
        transform: matrix(-1, 0, 0, 1, 0, 0);
        z-index: -1;
    }
`;

export default Sidebar;
