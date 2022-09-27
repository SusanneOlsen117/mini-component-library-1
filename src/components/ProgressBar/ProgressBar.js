/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--height": "8px",
    "--border-radius": "4px",
  },
  medium: {
    "--height": "12px",
    "--border-radius": "4px",
  },
  large: {
    "--padding": "4px",
    "--height": "24px",
    "--border-radius": "8px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return (
    <ProgressBarBase
      role="progressbar"
      aria-valuenow={value}
      aria-valuemin="0"
      aria-valuemax="100"
      aria-label="Progress bar"
      style={styles}
    >
      <BarWrapper style={styles}>
        <VisuallyHidden>{value}%</VisuallyHidden>
        <Progress style={styles} value={value}></Progress>
      </BarWrapper>
    </ProgressBarBase>
  );
};

const ProgressBarBase = styled.div`
  background: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  height: var(--height);
  border-radius: var(--border-radius);
  padding: var(--padding);
`;

const BarWrapper = styled.div`
  overflow: hidden;
  border-radius: 4px;
  height: 100%;
`;

const Progress = styled.div`
  background-color: ${COLORS.primary};
  border-radius: 4px 0px 0px 4px;
  height: 100%;
  width: ${(p) => p.value}%;
`;

export default ProgressBar;
