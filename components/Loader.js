import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flexDirection: column;
  alignItems: center;
  height: 50%;
  width: 50%;
  margin: 10em;
`

const Squares = styled.div`
  .self-building-square-spinner,
  .self-building-square-spinner * {
    box-sizing: border-box;
  }

  .self-building-square-spinner {
    height: 140px;
    width: 140px;
    top: calc(-10px * 2 / 3);
  }

  .self-building-square-spinner .square {
    height: 30px;
    width: 30px;
    top: calc(-10px * 2 / 3);
    margin-right: calc(10px / 3);
    margin-top: calc(10px / 3);
    background: #ff1d5e;
    float: left;
    position: relative;
    opacity: 0;
    animation: self-building-square-spinner 6s infinite;
  }

  .self-building-square-spinner .square:nth-child(1) {
    animation-delay: calc(300ms * 6);
  }

  .self-building-square-spinner .square:nth-child(2) {
    animation-delay: calc(300ms * 7);
  }

  .self-building-square-spinner .square:nth-child(3) {
    animation-delay: calc(300ms * 8);
  }

  .self-building-square-spinner .square:nth-child(4) {
    animation-delay: calc(300ms * 3);
  }

  .self-building-square-spinner .square:nth-child(5) {
    animation-delay: calc(300ms * 4);
  }

  .self-building-square-spinner .square:nth-child(6) {
    animation-delay: calc(300ms * 5);
  }

  .self-building-square-spinner .square:nth-child(7) {
    animation-delay: calc(300ms * 0);
  }

  .self-building-square-spinner .square:nth-child(8) {
    animation-delay: calc(300ms * 1);
  }

  .self-building-square-spinner .square:nth-child(9) {
    animation-delay: calc(300ms * 2);
  }

  .self-building-square-spinner .clear {
    clear: both;
  }

  @keyframes self-building-square-spinner {
    0% {
      opacity: 0;
    }
    5% {
      opacity: 1;
      top: 0;
    }
    50.9% {
      opacity: 1;
      top: 0;
    }
    55.9% {
      opacity: 0;
      top: inherit;
    }
  }
`;

export default function Loader() {
  return (
    <Wrapper>
      <Squares>
        <div className="self-building-square-spinner">
          <div className="square"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square clear"></div>
          <div className="square"></div>
          <div className="square"></div>
          <div className="square clear"></div>
          <div className="square"></div>
          <div className="square"></div>
        </div>
      </Squares>
    </Wrapper>
  );
}
