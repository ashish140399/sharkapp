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
import StartRollImage from "../../../../../assets/start_roll.png";
import SharkImage from "../../../../../assets/shark.png";

const AntSwitch = muistyled(Switch)(({ theme }) => ({
    width: 34,
    height: 20,
    padding: 0,
    borderRadius: 60,
    display: "flex",
    "&:active": {
        "& .MuiSwitch-thumb": {
            width: 15,
        },
        "& .MuiSwitch-switchBase.Mui-checked": {
            transform: "translateX(9px)",
        },
    },
    "& .MuiSwitch-switchBase": {
        padding: 2,
        "&.Mui-checked": {
            transform: "translateX(12px)",
            color: "#fff",
            "& + .MuiSwitch-track": {
                opacity: 1,
                backgroundColor: "#D2F2FB",
            },
        },
    },
    "& .MuiSwitch-thumb": {
        boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
        width: 16,
        height: 16,
        borderRadius: 60,
        transition: theme.transitions.create(["width"], {
            duration: 200,
        }),
    },
    "& .MuiSwitch-track": {
        borderRadius: 16 / 2,
        opacity: 1,
        backgroundColor:
            theme.palette.mode === "dark"
                ? "rgba(255,255,255,.35)"
                : "rgba(0,0,0,.25)",
        boxSizing: "border-box",
    },
}));

const RollSec: NextPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };
    const [togglevalue, setTogglevalue] = React.useState(true);

    const handletoggleChange = (event: any, newValue: any) => {
        setTogglevalue(newValue);
    };
    return (
        <Box>
            <ManualAutoCard>
                <div className="switchrow">
                    <Stack direction="row" spacing={1} alignItems="center">
                        <Typography
                            style={{ fontWeight: togglevalue ? 600 : 500 }}
                        >
                            MANUAL
                        </Typography>
                        <AntSwitch
                            checked={togglevalue}
                            onChange={handletoggleChange}
                            inputProps={{ "aria-label": "ant design" }}
                        />
                        <Typography
                            style={{ fontWeight: !togglevalue ? 600 : 500 }}
                        >
                            AUTO
                        </Typography>
                    </Stack>
                </div>
                <Grid container spacing={2} className="info">
                    <Grid item xs={6}>
                        <div className="bx">
                            <div className="heading">Your balance</div>
                            <div className="value">
                                <Pinterest /> 3.03452
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="bx">
                            <div className="heading yellow">Payout on win</div>
                            <div className="value">
                                <Pinterest /> 3.03452
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </ManualAutoCard>
            <BetAmountBx>
                <div className="bx">
                    <div className="heading">Bet Amount</div>
                    <div className="iptbx">
                        <Pinterest /> <input type="text" value="0.33" />
                    </div>
                    <Tabs value={value} onChange={handleChange}>
                        <Tab label="MIN" />
                        <Tab label="MAX" />
                        <Tab label="1/2" />
                        <Tab label="2X" />
                    </Tabs>
                </div>
            </BetAmountBx>
            <StartRoll>
                <div className="startrollinner">
                    <div className="text">Start Roll</div>
                    <div className="imgrollbg">
                        <Image src={StartRollImage} />
                    </div>
                    <div className="imgsharkbg">
                        <Image src={SharkImage} />
                    </div>
                </div>
            </StartRoll>
        </Box>
    );
};
const Box = styled.div`
    padding: 20px 30px;
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    box-shadow: 0px -6px 26px rgba(255, 255, 255, 1);
    @media screen and (max-width: 1400px) {
        flex-flow: Wrap;
    }
`;

const StartRoll = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 24%;
    @media screen and (max-width: 1400px) {
        width: 100%;
        justify-content: Center;
        margin-top: 30px;
    }
    .startrollinner {
        box-shadow: 0px 24px 38px rgba(251, 149, 35, 0.22);
        border-radius: 24px;
        cursor: pointer;
        padding: 10px;
        display: flex;
        justify-content: center;
        width: 150px;
        height: 100px;
        justify-content: Center;
        position: Relative;
    }
    .text {
        letter-spacing: 0.01em;
        text-transform: uppercase;
        margin-top: 10px;
        color: #ffffff;
        font-weight: 600;
        max-width: 60px;
        text-align: Center;
        justify-content: Center;

        text-shadow: 0px 2px 3px rgba(199, 72, 0, 0.32);

        position: Relative;
        z-index: 3;
    }
    .imgrollbg {
        position: absolute;
        width: 100%;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        height: 100%;
        object-fit: cover;
        z-index: 0;
    }
    .imgsharkbg {
        position: absolute;
        width: 100px;
        left: 2px;
        bottom: -63px;
        height: 100%;
        object-fit: cover;
        z-index: 1;
    }
`;

const ManualAutoCard = styled.div`
    background: #ffffff;
    border-radius: 24px;
    padding: 20px 30px;
    width: 38%;
    @media screen and (max-width: 1600px) {
        width: 45%;
    }
    @media screen and (max-width: 1400px) {
        width: 50%;
    }
    .switchrow {
        border-bottom: 1px dashed #6bc9e2;
        padding-bottom: 20px;
        margin-bottom: 20px;
        .MuiTypography-root {
            color: #32657a;
            font-size: 14px;
            font-weight: 500;
        }
    }
    .info {
        .heading {
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 0.01em;
            color: #32657a;
            margin-bottom: 6px;
            &.yellow {
                color: #fb9523;
            }
        }
        .value {
            display: flex;
            align-items: Center;
            font-weight: 700;
            font-size: 18px;
            line-height: 24px;
            letter-spacing: 0.01em;
            text-transform: uppercase;
            color: #32657a;
            svg {
                margin-right: 10px;
            }
        }
    }
`;

const BetAmountBx = styled.div`
    width: 38%;
    margin: 0 40px;
    // box-sizing:border-box;
    @media screen and (max-width: 1400px) {
        width: 50%;
        margin: 0;
        padding-left: 30px;
    }
    .bx {
        .heading {
            font-weight: 500;
            font-size: 14px;
            line-height: 17px;
            letter-spacing: 0.01em;
            color: #32657a;
            opacity: 0.7;
            margin-bottom: 5px;
        }
        .iptbx {
            display: flex;
            align-items: Center;
            border-bottom: 1px solid #7ec6d5;
            padding-bottom: 10px;
            margin-bottom: 20px;
            input {
                font-weight: 700;
                font-size: 24px;
                line-height: 29px;
                letter-spacing: 0.01em;
                text-transform: uppercase;
                color: #32657a;
                border: 0 !important;
                outline: 0 !important;
                background: Transparent;
                margin-left: 10px;

                width: 75%;
            }
            svg {
                height: 34px;
            }
        }
    }
`;

export default RollSec;
