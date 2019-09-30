import React, { Component } from 'react';
import styled from 'styled-components';

export default class Defaults extends Component {
    render() {
        return (
            <React.Fragment>

            
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                        <h1 className="display-3">404</h1>
                        <h1>Error</h1>
                        <h2>Page Not Found</h2>
                        
                    </div>
                </div>
                
            </div>
            <ErrorFooter className="text-title">
                <h3>The requested <span className="text-danger">url{this.props.location.pathname}</span>{" "} was not found</h3>
            </ErrorFooter>
            </React.Fragment>
        )
    }
}

const ErrorFooter = styled.div`
position: fixed;
left: 0;
bottom: 0;
width: 100%;
color: black;
text-align: center;
`;
