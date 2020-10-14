import React, { useEffect, useState } from 'react';

import { alConfig, cuConfig, feConfig, mnConfig, mockData } from '../../utils';
import CustomLineChart from '../common/CustomLineChart/CustomLineChart';
import { ElementWrapper, Wrapper } from './styled';

const Content = () => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateSize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', updateSize);

    return function cleanup() {
      window.removeEventListener('resize', updateSize)
    }
  }, [])

  return (
    <>
      <Wrapper>
        <ElementWrapper>
          Fe
          <CustomLineChart config={feConfig} data={mockData} width={width} />
        </ElementWrapper>
        <ElementWrapper>
          Al
          <CustomLineChart config={alConfig} data={mockData} isYAxisVisible={false} width={width} />
        </ElementWrapper>
        <ElementWrapper>
          Mn
          <CustomLineChart config={mnConfig} data={mockData} isYAxisVisible={false} width={width} />
        </ElementWrapper>
        <ElementWrapper>
          Cu
          <CustomLineChart config={cuConfig} data={mockData} isYAxisVisible={false} width={width} />
        </ElementWrapper>
      </Wrapper>
    </>
  );
}

export default Content;
