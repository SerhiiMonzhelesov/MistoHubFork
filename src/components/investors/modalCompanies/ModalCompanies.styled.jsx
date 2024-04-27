import styled from 'styled-components';
import ReactModal from 'react-modal';

export const ModalCompanyWrapper = styled.div`
  @media screen and (min-width: 375px) and (max-width: 767.9px) {
    .text {
      color: rgba(11, 11, 11, 0.5);
      font-family: 'MacPaw Fixel Display';
      font-size: 12px;
      line-height: 16px; /* 133.333% */
      letter-spacing: -0.24px;
    }

    .textQuestion {
      color: #0b0b0b;
      font-family: Oddval;
      font-size: 18px;
      font-weight: 600;
      line-height: 20px; /* 111.111% */
      letter-spacing: -0.36px;
    }

    .companyName {
      color: #0b0b0b;
      font-family: Oddval;
      font-size: 16px;
      font-weight: 600;
      line-height: 20px; /* 125% */
      letter-spacing: -0.32px;
    }

    .textAnswer {
      color: #0b0b0b;
      font-family: 'MacPaw Fixel Display';
      font-size: 14px;
      line-height: 18px; /* 128.571% */
      letter-spacing: -0.28px;
      min-width: 303px;
      position: relative;
      z-index: 1;
    }

    .contentWrapper {
      padding: 18px 10px 10px 10px;
    }

    .closeWrapper {
      display: flex;
      justify-content: flex-end;
    }
    .closeButton {
      float: right;
      border: none;
      border-radius: 10px;
      background: #fff;
      box-shadow:
        4px 17px 102.1px 0px rgba(0, 0, 0, 0.19),
        0px 25px 30.4px 0px rgba(0, 0, 0, 0.09);
      padding: 0;
    }

    .instaIcon {
      width: 14px;
      height: 14px;
    }
    .svgWrapper {
      background: #f77d07;
      width: 30px;
      height: 30px;
      border-radius: 100px;
      display: inline-flex;
      padding: 8px;
      align-items: center;
      gap: 10px;
    }

    a {
      padding: 0;
    }

    .svgBackground {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 189px;
      height: 115px;
    }

    .closeWord {
      display: none;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1023.9px) {
    .text {
      color: rgba(11, 11, 11, 0.5);
      font-family: 'MacPaw Fixel Display';
      font-size: 14px;
      line-height: 18px; /* 128.571% */
      letter-spacing: -0.28px;
    }

    .textQuestion {
      color: #0b0b0b;
      font-family: Oddval;
      font-size: 20px;
      font-weight: 600;
      line-height: 26px; /* 130% */
    }

    .companyName {
      color: #0b0b0b;
      font-family: Oddval;
      font-size: 20px;
      font-weight: 600;
      line-height: 26px; /* 130% */
    }

    .textAnswer {
      color: #0b0b0b;
      font-family: 'MacPaw Fixel Display';
      font-size: 16px;
      font-weight: 500;
      line-height: 24px; /* 150% */
      letter-spacing: -0.32px;
      max-width: 516px;
      position: relative;
      z-index: 1;
    }

    .contentWrapper {
      padding: 14px 30px 30px 30px;
    }

    .closeWrapper {
      display: flex;
      justify-content: flex-end;
    }

    .closeWord {
      color: rgba(11, 11, 11, 0.5);
      font-family: 'MacPaw Fixel Display';
      font-size: 16px;
      font-weight: 500;
      line-height: 24px; /* 150% */
      letter-spacing: -0.32px;
      background: #fff;
      border: none;

      margin-right: 4px;
    }

    .closeButton {
      float: right;
      border: none;
      border-radius: 10px;
      background: #fff;
      box-shadow:
        4px 17px 102.1px 0px rgba(0, 0, 0, 0.19),
        0px 25px 30.4px 0px rgba(0, 0, 0, 0.09);
      padding: 0;
      position: relative;
      z-index: 1;
    }

    .closeSvg {
      width: 28px;
      height: 28px;
    }

    .svgWrapper {
      background: #f77d07;
      width: 40px;
      height: 40px;
      border-radius: 100px;
      display: inline-flex;
      padding: 8px;
      align-items: center;
      justify-content: center;
      gap: 10px;
    }

    a {
      padding: 0;
    }

    .svgBackground {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 410px;
      height: 282px;
    }
  }

    @media screen and (min-width: 1024px) {
      .text {
        color: rgba(11, 11, 11, 0.5);
        font-family: 'MacPaw Fixel Display';
        font-size: 14px;
        line-height: 18px; /* 128.571% */
        letter-spacing: -0.28px;
      }

      .textQuestion {
        color: #0b0b0b;
        font-family: Oddval;
        font-size: 20px;
        font-weight: 600;
        line-height: 26px; /* 130% */
      }

      .companyName {
        color: #0b0b0b;
        font-family: Oddval;
        font-size: 20px;
        font-weight: 600;
        line-height: 26px; /* 130% */
      }

      .textAnswer {
        color: #0b0b0b;
        font-family: 'MacPaw Fixel Display';
        font-size: 16px;
        line-height: 24px; /* 150% */
        letter-spacing: -0.32px;
        max-width: 516px;
        position: relative;
        z-index: 1;
      }

      .contentWrapper {
        padding: 14px 30px 30px 30px;
      }

      .closeWrapper {
        display: flex;
        justify-content: flex-end;
      }

      .closeWord {
        color: rgba(11, 11, 11, 0.5);
        font-family: 'MacPaw Fixel Display';
        font-size: 16px;
        font-weight: 500;
        line-height: 24px; /* 150% */
        letter-spacing: -0.32px;
        background: #fff;
        border: none;
        margin-right: 4px;
      }

      .closeButton {
        float: right;
        border: none;
        border-radius: 10px;
        background: #fff;
        box-shadow:
          4px 17px 102.1px 0px rgba(0, 0, 0, 0.19),
          0px 25px 30.4px 0px rgba(0, 0, 0, 0.09);
        padding: 0;
        position: relative;
        z-index: 1;
      }

      .closeSvg {
        width: 28px;
        height: 28px;
      }

      .svgWrapper {
        background: #f77d07;
        width: 40px;
        height: 40px;
        border-radius: 100px;
        display: inline-flex;
        padding: 8px;
        align-items: center;
        justify-content: center;
        gap: 10px;
      }

      a {
        padding: 0;
      }

      .svgBackground {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 410px;
        height: 282px;
      }
    }
  }
`;

export const CustomModal = styled(ReactModal)`
  &.ReactModal__Content {
    width: 100%;
    height: fit-content;
    margin: auto;
    padding: 10px;
    border-radius: 10px;
    background: #fff;
    box-shadow:
      4px 17px 102.1px 0px rgba(0, 0, 0, 0.19),
      0px 25px 30.4px 0px rgba(0, 0, 0, 0.09);
    overflow: fixed;
    backgroundcolor: rgba(0, 0, 0, 0.5);

    @media screen and (min-width: 375px) and (max-width: 811.9px) {
      width: 343px;
    }

    @media screen and (min-width: 768px) and (max-width: 1023.9px) {
      width: 576px;
    }

    @media screen and (min-width: 1024px) {
      width: 576px;
    }
  }
`;

// div: {
//   margin: '0',
//   padding: '0',
//   borderRadius: '10px',
//   background: '#FFF',
//   boxShadow:
//     '4px 17px 102.1px 0px rgba(0, 0, 0, 0.19), 0px 25px 30.4px 0px rgba(0, 0, 0, 0.09)',
// },
// overlay: {
//   position: 'fixed',
//   backgroundColor: 'rgba(0, 0, 0, 0.5)',
// },
// content: {
//   width: '343px',
//   height: 'fit-content',
//   margin: 'auto',
//   padding: '10px',
// },
// closeButton: {
//   position: 'absolute',
//   top: '10px',
//   right: '10px',
//   cursor: 'pointer',
//   padding: '0',
// },

// '@media screen and (min-width: 768px) and (max-width: 1023.9px)': {
//   content: {
//     width: '576px',
// }
