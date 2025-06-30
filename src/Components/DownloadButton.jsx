import React from 'react';
import styled from 'styled-components';

const DownloadButton = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path
            fill="white"
            d="M12 16.5l4.5-4.5h-3V3h-3v9h-3l4.5 4.5zM5 20h14v-2H5v2z"
          />
        </svg>
        <span>Download CV</span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6em;
    border-radius: 7px;
    border: none;
    background: linear-gradient(to right, #0ba360, #3cba92);
    color: white;
    font-family: inherit;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0px 8px 30px -8px #0ba360;
    width: 12em;
    padding: 0.75em 1em;
    transition: all 0.4s ease;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .button svg {
    width: 22px;
    height: 22px;
    transition: transform 0.4s ease;
  }

  .button span {
    position: relative;
    z-index: 2;
  }

  .button:hover {
    box-shadow: 0 0 25px #0ba360;
    transform: scale(1.03);
  }

  .button:hover svg {
    transform: translateY(2px);
  }
`;

export default DownloadButton;
