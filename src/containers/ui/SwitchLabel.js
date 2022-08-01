import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styled from 'styled-components';
import {
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';

function SwitchLabel({
  handleLeftClick,
  handleRightClick,
  items,
  withTransition,
}) {
  const [translate, setTranslate] = useState(0);
  const [index, setIndex] = useState(0);

  return (
    <>
        <StyledCarousel>
          <StyledCarouselItems
            transition={withTransition}
            style={{
              width: `${100 * items.length}%`,
              transform: `translateX(${translate}%)`,
            }}
          >
            {items.map(item => (
              <StyledCarouselItem key={item.name}>
                <label htmlFor={item.name}>{item.name}</label>
              </StyledCarouselItem>
            ))}
          </StyledCarouselItems>
          <StyledCarouselArrows>
            <div
              onClick={() => {
                setIndex(prevCount =>
                  prevCount === 0 ? items.length - 1 : prevCount - 1,
                );
                setTranslate(
                  index === 0
                    ? translate - ((items.length - 1) / items.length) * 100
                    : translate + 100 / items.length,
                );
                handleLeftClick(index);
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <div
              onClick={() => {
                setIndex(prevCount =>
                  prevCount === items.length - 1 ? 0 : prevCount + 1,
                );
                setTranslate(
                  index === items.length - 1
                    ? 0
                    : translate - 100 / items.length,
                );
                handleRightClick(index);
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          </StyledCarouselArrows>
        </StyledCarousel>
    </>
  );
}

SwitchLabel.defaultProps = {
  handleLeftClick: () => {},
  handleRightClick: () => {},
};

SwitchLabel.propTypes = {
  handleLeftClick: PropTypes.func,
  handleRightClick: PropTypes.func,
  items: PropTypes.array.isRequired,
  withTransition: PropTypes.bool,
};

export default SwitchLabel;

const StyledCarousel = styled.div`
  width: 100%;
  position: relative;
  height: 50px;
  overflow: hidden;
  color: #ddd;
  margintop: 15px;
`;

const StyledCarouselItems = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  transform: translateX(0%);
  height: 100%;
  width: 100%;
  ${({ transition }) => transition && `transition: 1s ease;`}
`;

const StyledCarouselItem = styled.div`
  width: 100%;
  & label {
    width: 100%;
    text-align: center;
    line-height: 25px;
  }
`;

const StyledCarouselArrows = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  & div {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    & :hover {
      background-color: #eee;
    }
  }
`;