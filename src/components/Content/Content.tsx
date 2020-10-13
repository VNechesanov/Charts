import React from 'react';

import { alConfig, cuConfig, feConfig, mnConfig, mockData } from '../../utils';
import CustomLineChart from '../common/CustomLineChart/CustomLineChart';
import { ElementWrapper, Wrapper } from './styled';

const Content = () => {
  return (
    <Wrapper>
      <ElementWrapper>
        Fe
      <CustomLineChart config={feConfig} data={mockData} />
      </ElementWrapper>
      <ElementWrapper>
        Al
      <CustomLineChart config={alConfig} data={mockData} isYAxisVisible={false} />
      </ElementWrapper>
      <ElementWrapper>
        Mn
      <CustomLineChart config={mnConfig} data={mockData} isYAxisVisible={false} />
      </ElementWrapper>
      <ElementWrapper>
        Cu
      <CustomLineChart config={cuConfig} data={mockData} isYAxisVisible={false} />
      </ElementWrapper>
    </Wrapper>
  );
}

export default Content;
