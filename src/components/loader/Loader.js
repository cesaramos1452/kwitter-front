import React from "react";
import { css } from "@emotion/core";
import CircleLoader from "react-spinners/CircleLoader";

/*
https://lmgtfy.com/?q=react+loading+spinner+components
There are many more on the web use one of these or create your own!
*/


export const Loader = () => <>
                                <CircleLoader 
                                    css={css`
                                    display: block;
                                    margin: 0 auto;
                                  `}
                                    color={"#735f9c"}  
                                />
                            </>;

