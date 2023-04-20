import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './default.scss'
import styled from 'styled-components'
import {observer} from "mobx-react";


const StyledApp = styled.article`
`

const App =() => {

    return (
        <StyledApp>
            <p>Start project</p>
        </StyledApp>
    );
};

export default observer(App);
