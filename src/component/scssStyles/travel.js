import styled from "styled-components";

export const Button = styled.button`
padding: 5px 3px;
font-size: 14px;
border: 0;
outline: none;
border: 1px solid #ababab;
// background: #fff8e2;
color: #af9138;
// width: 35px;
height: 35px;
margin-left: auto;
margin-right: auto;
// min-width: 20px !important;
border-radius: 4px;
cursor: pointer;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-weight: 500;
    min-width:110px;
`
export const DeleteButton = styled(Button)`
padding: 5px 3px;
font-size: 15px;
font-weight: bold;
border: 0;
outline: none;
// background-color: #f34949;
color: #f34949;
border-radius: 4px;
cursor: pointer;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-weight: 500;
    min-width: 90px;
    min-height: 32px;

`
export const DisbaledButton = styled(Button)`
color: #03a9f4;
border: 1px solid #03a9f4;
background: #eff9f81c;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    font-weight: 500;
    min-width:110px;
`
export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    th:first-of-type{
        text-align: left;
    }
    th{
        background: #191919;
        padding: 10px 15px;
        color: white;
        font-weight:500;
    }
    td{
        padding: 12px 15px;
        color: white;
    }
    tr{
        border-bottom:solid 1px #ffffff12;
    }
    h4{
        margin:0;
    }
`