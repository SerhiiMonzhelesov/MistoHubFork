import styled from 'styled-components';
import Modal from 'react-modal';

import sity from '../../../assets/menu-img/misto.png';
import sityx2 from '../../../assets/menu-img/misto-x2.png';
import sityWebP from '../../../assets/menu-img/misto.webp';
import sityWebPx2 from '../../../assets/menu-img/misto-x2.webp';
import support from '../../../assets/menu-img/support.svg';

export const StyledMenu = styled(Modal)`
  background-color: #ffffff;
  padding: 20px 16px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: auto;

  @media screen and (min-width: 768px) {
    padding: 32px;
  }
  @media screen and (min-width: 1440px) {
    padding: 40px 80px;
  }

  .close-button {
    border: none;
    outline: none;
    background-color: transparent;
    display: flex;
    justify-content: center;
    align-items: self-start;
    gap: 12px;

    span {
      display: none;
      font-weight: 500;
      font-size: 14px;
      line-height: 1.29;
      letter-spacing: -0.02em;
      color: rgba(11, 11, 11, 0.5);

      @media screen and (min-width: 768px) {
        display: inline;
        font-size: 16px;
      }
    }

    svg {
      stroke-width: 2px;
      fill: rgba(11, 11, 11, 0.5);
    }
  }

  .close-button:hover span {
    color: #0b0b0b;
  }

  .close-button:active span {
    color: #0b0b0b;
  }

  .close-button:hover svg {
    fill: #0b0b0b;
  }
  .close-button:active svg {
    fill: #0b0b0b;
  }
`;

export const StyledText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.29;
  letter-spacing: -0.02em;
  color: rgba(11, 11, 11, 0.5);
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

export const BtnSupport = styled.button`
  width: 129px;
  height: 61px;
  font-weight: 600;
  border: none;
  padding: 0;
  outline: none;
  font-size: 10px;
  line-height: 120%;
  letter-spacing: -0.02em;
  color: #fff;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${support});
  background-color: transparent;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0;
`;

export const BtnContainer = styled.div`
  display: flex;
  gap: 10px;
  max-width: 283px;
  padding: 0;
  @media screen and (min-width: 768px) {
    max-width: 100%;
  }
`;

export const ImgContainer = styled.div`
  width: 845px;
  height: 563px;
  background-image: url(${sity});
  background-image: -webkit-image-set(url(${sityWebP}) 1x);
  background-repeat: no-repeat;
  padding: 0;
  display: none;
  position: relative;
  left: 80px;
  background-size: contain;

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  @media screen and (min-width: 1440px) {
    display: block;
  }

  img {
    width: 100%;
  }

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${sityx2});
    background-image: -webkit-image-set(url(${sityWebPx2}) 2x);
  }
`;

export const FlexContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: space-between;
  padding: 0;
`;

export const BottomContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  padding: 0;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: end;
    span {
      margin-right: auto;
    }
  }
`;

export const BtnGoIt = styled.button`
  border: none;
  outline: none;
  padding: 0;
  background-color: transparent;
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;

  span {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: rgba(11, 11, 11, 0.5);

    @media screen and (min-width: 768px) {
      display: inline;
      font-size: 16px;
    }
  }

  &:hover svg {
    border: none;
    outline: none;
    fill: #0b0b0b;
  }

  svg {
    fill: #f77d07;
  }

  &:hover span {
    color: #0b0b0b;
  }

  &:active span {
    color: #0b0b0b;
  }
`;
