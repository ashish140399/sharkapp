import type { NextPage } from "next";
import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";
import Bets from "./components/Bets";
import RollSec from "./components/RollSec";
import UnderOver from "./components/UnderOver";

const Maincontent = () => {
    return (
        <Box>
            <UnderOver />
            <RollSec />
            <Bets />
        </Box>
    );
};

const Box = styled.div`
    background: #e1f9ff;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-radius: 50px;
    padding-top: 10px;
    margin-bottom: 20px;
`;
export default Maincontent;
