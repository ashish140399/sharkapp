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

function createData(
    playernum: any,
    player: any,
    prediction: Number,
    result: any,
    wagger: any,
    payout: any
) {
    return { playernum, player, prediction, result, wagger, payout };
}

const rows = [
    createData(9, "j21j3nkl1n41jk24b12j3k..", 0.0, 0.0, 0.0, 0.0),
    createData(2, "j21j3nkl1n41jk24b12j3k..", 0.0, 0.0, 0.0, 0.0),
    createData(1, "j21j3nkl1n41jk24b12j3k..", 0.0, 0.0, 0.0, 0.0),
    createData(0, "j21j3nkl1n41jk24b12j3k..", 0.0, 0.0, 0.0, 0.0),
    createData(9, "j21j3nkl1n41jk24b12j3k..", 0.0, 0.0, 0.0, 0.0),
    createData(9, "j21j3nkl1n41jk24b12j3k..", 0.0, 0.0, 0.0, 0.0),
];

const Bets: NextPage = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };
    return (
        <Box>
            <Header>
                <h1>BETS</h1>
                <Tabs value={value} onChange={handleChange}>
                    <Tab label="ALL" />
                    <Tab label="MY BETS" />
                    <Tab label="HIGH ROLLERS" />
                    <Tab label="RARE WINS" />
                </Tabs>
            </Header>
            <TableContainerStyled>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Player</TableCell>
                            <TableCell align="center">Predictions</TableCell>
                            <TableCell align="center">Result</TableCell>
                            <TableCell align="center">Wagger</TableCell>
                            <TableCell align="right">Payout</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.player}
                                sx={{
                                    "&:last-child td, &:last-child th": {
                                        border: 0,
                                    },
                                }}
                            >
                                <TableCell
                                    component="th"
                                    scope="row"
                                    align="left"
                                >
                                    <span className="playernum">
                                        {row.playernum}
                                    </span>
                                    {row.player}
                                </TableCell>
                                <TableCell align="center">
                                    {row.prediction.toFixed(4)}
                                </TableCell>
                                <TableCell align="center">
                                    {row.result.toFixed(4)}
                                </TableCell>
                                <TableCell align="center">
                                    {row.wagger.toFixed(4)}
                                </TableCell>
                                <TableCell align="right">
                                    {row.payout.toFixed(4)}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainerStyled>
        </Box>
    );
};
const Box = styled.div`
    background: #fff;
    padding: 10px 30px;
    border-radius:30px;
    border-top-right-radius:30px;
`;




const Header = styled.div`
    display: flex;
    align-items: Center;
    justify-content: Space-between;
    h1 {
        letter-spacing: 0.01em;
        text-transform: uppercase;
        color: #265568;
    }
    .MuiTabs-root {

        .MuiTab-root {

            color: #32657a;
 
            border: 1px solid #a5e5f6 !important;

            padding: 8px 14px;

            font-size: 14px;
 
            margin-left: 10px;
            &.Mui-selected {
                background: radial-gradient(
                        62.63% 137.84% at 96.84% 64.86%,
                        rgba(251, 191, 35, 0.55) 0%,
                        rgba(251, 191, 35, 0) 100%
                    ),
                    #fb9523;
                box-shadow: 0px 4px 16px rgba(251, 149, 35, 0.33);
                border: 1px solid #fb9523 !important;
                color: #fff;
            }
   
        }
    }
`;


const TableContainerStyled = styled(TableContainer)`
max-height:400px;
    &.MuiTableContainer-root {
        margin:0 -12px;
        th,td{
            border-bottom:0;
            padding-top:10px;
            padding-bottom:10px;
        }
        .MuiTableRow-head{
            .MuiTableCell-head{
                font-weight: 400;
                font-size: 14px;
                line-height: 17px;
                letter-spacing: 0.01em;
                color: #32657A !important;
            }
        }
        .MuiTableBody-root{
            .MuiTableRow-root{
                .MuiTableCell-root{
                    font-weight: 700;
                    font-size: 14px;
                    line-height: 17px;
                    letter-spacing: 0.01em;
                    text-transform: uppercase;
                    color: #32657A;
                    .playernum{
                        border: 2px solid #A5E5F6;
                        border-radius: 28px;
                        width: 30px;
                        display: inline-flex;
                        height: 30px;
                        align-items: center;
                        justify-content: center;
                        margin-right: 10px;
                    }
                    &:last-child{
                        color: #FB9523;
                    }
                }
            }
        }
    }
`
export default Bets;
