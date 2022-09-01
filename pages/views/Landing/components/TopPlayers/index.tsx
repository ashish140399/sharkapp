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
import { Pinterest } from "../../../../../assets/icons";

const TopPlayers: NextPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };
    return (
        <Box>
            <div className="heading">top players</div>
            <Tabs value={value} onChange={handleChange}>
                <Tab label="TODAY" />
                <Tab label="7 DAY" />
                <Tab label="ALL TIME" />
            </Tabs>
            <div className="content">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
                    <div className="frw" key={number}>
                        <div className="left">
                            <div className="playernum">{number}</div>
                            <div className="playername">
                                {" "}
                                j21j3nkl1n41jk24b12j3k..
                            </div>
                        </div>
                        <div className="right">32.321.421</div>
                    </div>
                ))}
            </div>
        </Box>
    );
};
const Box = styled.div`
    width: 100%;
    position: Relative;
    .heading {
        font-weight: 800;
        font-size: 32px;
        line-height: 39px;
        letter-spacing: 0.01em;
        text-transform: uppercase;
        color: #ffffff;
        margin-bottom: 20px;
    }

    .MuiTabs-root {
        .MuiTab-root {
            color: #fff;
            background: rgba(12, 141, 193, 0.33);
            &.Mui-selected {
                background: #abf1ff;
                color: #32657a;
            }
            span {
            }
        }
    }
    .content {
        position: Relative;
        z-index: 2;
        .frw {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 10px;
            .left {
                display: flex;
                align-items: center;
                .playernum {
                    border: 2px solid #a5e5f6;
                    border-radius: 28px;
                    width: 36px;
                    display: inline-flex;
                    height: 36px;
                    align-items: center;
                    justify-content: center;
                    margin-right: 10px;
                    color: #fff;
                }
                font-weight: 700;
                font-size: 16px;
                line-height: 20px;
                letter-spacing: 0.01em;
                text-transform: uppercase;
                color: #abf1ff;
                @media screen and (max-width: 1600px) {
                    font-weight: 600;
                    .playername {
                        text-overflow: ellipsis;
                        width: 100px;
                        display: inline-block;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                }
            }
            .right {
                font-weight: 700;
                font-size: 18px;
                line-height: 22px;
                display: flex;
                align-items: center;
                letter-spacing: 0.01em;
                text-transform: uppercase;
                color: #ffffff;
            }
        }
    }
`;

export default TopPlayers;
