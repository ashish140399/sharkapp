import * as React from "react";
import styled from "styled-components";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled as muistyled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Pinterest } from "../../../../../assets/icons";
import SharkleftImage from "../../../../../assets/sharkleft.png";
import WaterBg from "../../../../../assets/waterbg.png";
import SharkRightImage from "../../../../../assets/sharkright.png";
import SharkImage from "../../../../../assets/shark.png";

const UnderOver: NextPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };
    return (
        <Box>
            <PredResult>
                <div className="innerbx">
                    <div className="bx">
                        <div className="sq">24</div>Prediction
                    </div>
                    <div className="bx">
                        <div className="sq">24</div>Result
                    </div>
                </div>
                <div className="sharkleft">
                    <Image src={SharkleftImage} />
                </div>
                <div className="imgbg">
                    <Image src={WaterBg} />
                </div>
                <div className="sharkright">
                    <Image src={SharkRightImage} />
                </div>
                <div className="underoverbx">
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="Under" />
                        <Tab label="Over" />
                    </Tabs>
                </div>
            </PredResult>
        </Box>
    );
};
const Box = styled.div`
    padding: 20px 30px;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
`;

const PredResult = styled.div`
    width: 100%;
    height: 200px;
    position: relative;
    .innerbx {
        position: relative;
        z-index: 3;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        color: #fff;
        margin-top: 30px;
        .bx {
            margin: 0 10px;
            .sq {
                width: 83px;
                margin-bottom: 10px;
                height: 83px;
                background: rgba(121, 230, 255, 0.18);
                border: 1px solid rgba(171, 241, 255, 0.29);
                backdrop-filter: blur(14px);
                border-radius: 18px;
                font-weight: 800;
                font-size: 32px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }
    .imgbg {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        object-fit: cover;
        span {
            width: 100% !important;
        }
        img {
            object-fit: cover;
            width: 100% !important;
            height: 200px !important;
            border-radius: 30px;
            z-index: 0;
        }
    }
    .sharkleft {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: -30px;
        z-index: 2;
        img {
            object-fit: cover;
            height: 180px !important;
        }
    }
    .sharkright {
        position: absolute;
        width: auto;
        top: 50%;
        transform: translateY(-50%);
        right: -16px;
        z-index: 1;
        img {
            object-fit: cover;
            height: 100px !important;
        }
    }

    .underoverbx {
        position: absolute;
        z-index: 3;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 50%);
        background: linear-gradient(180deg, #c1effa 49.78%, #cef3fc 100%);
        border-radius: 70px;
        padding: 10px 14px;
        .MuiTabs-root {
            min-height: unset;
            .Mui-selected {
                background: radial-gradient(
                            62.63% 137.84% at 96.84% 64.86%,
                            rgba(251, 191, 35, 0.55) 0%,
                            rgba(251, 191, 35, 0) 100%
                        )
                        /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
                    #fb9523;
                box-shadow: 0px 4px 16px rgba(251, 149, 35, 0.33);
                color: #fff;
            }
        }
        .MuiTabs-fixed {
            display: flex;
            align-items: center;
        }
    }
`;
export default UnderOver;
