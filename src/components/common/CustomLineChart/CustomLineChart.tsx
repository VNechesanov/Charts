import React, { useCallback, useMemo, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, YAxisProps, XAxisProps, LineChartProps, ReferenceArea, CartesianGrid } from 'recharts';
import _max from 'lodash/max';

import { Wrapper } from './styled';
import { DataSetConfigItem, KeyedObj, LineChartData } from '../../../model/types';
import { colors } from '../../../utils/theme';
import { COUNT_OF_CHARTS, OFFSET_OF_BOTH_SIDE, ONE_HUNDRED_PERCENT, PERCENTAGE_RATIO } from '../../../utils/common';

export const COMMON_AXES_TICK_PROPS = { fill: colors.scooter, fontSize: 10, fontWeight: 'bold' };

const TICK_STEP = 7;

const COMMON_AXIS_PROPS = {
  tickLine: false,
  axisLine: { stroke: colors.scooter, strokeWidth: 2 },
  tick: { ...COMMON_AXES_TICK_PROPS },
};

const COMMON_Y_AXIS_PROPS: YAxisProps = {
  ...COMMON_AXIS_PROPS,
  allowDataOverflow: true,
  tickMargin: 34,
  interval: 0,
};

const COMMON_X_AXIS_PROPS: XAxisProps = {
  ...COMMON_AXIS_PROPS,
  allowDataOverflow: true,
  tickMargin: 0,
};

const COMMON_LINE_CHART_PROPS: LineChartProps = {
  layout: "vertical",
}

type Props<T extends KeyedObj> = {
  data: ReadonlyArray<LineChartData<T>>;
  config: DataSetConfigItem[];
  isYAxisVisible?: boolean;
  width: number;
};

const CustomLineChart = <T extends KeyedObj>(props: Props<T>) => {
  const { data, config, isYAxisVisible = true, width } = props;
  const [dataKey, setDataKey] = useState('')

  const renderLine = useCallback((c: DataSetConfigItem, keyPrefix: string = '') => {
    const { color = colors.black, dataKey, name } = c;
    setDataKey(dataKey);

    return (
      <Line
        dataKey={dataKey}
        key={`${keyPrefix}_${dataKey}`}
        stroke={color}
        strokeWidth={2}
        isAnimationActive={false}
        dot={false}
        activeDot={false}
        name={name}
      />
    );
  }, []);

  const lines = useMemo(() => config.map((c) => renderLine(c)), [config, renderLine]);

  const renderTicks = () => {
    const ticks: number[] = [];
    for (let i = 0; i < data[data.length - 1].depth; i++) {
      if (i % TICK_STEP === 0) {
        ticks.push(i)
      }
    }

    return ticks;
  }

  const renderIndicatorLine = useMemo(() => {
    const maxOfElement = _max(data.map(d => d[dataKey]))

    //dynamic calculation of the indicator line width
    const widthOfLine = maxOfElement * PERCENTAGE_RATIO / ONE_HUNDRED_PERCENT;

    return [
      <ReferenceArea x1={-widthOfLine * 3} x2={-widthOfLine * 2} y1={0} y2={10} alwaysShow fill={colors.laPalma} />,
      <ReferenceArea x1={-widthOfLine * 3} x2={-widthOfLine * 2} y1={10} y2={20} alwaysShow fill={colors.sunflower} />,
      <ReferenceArea x1={-widthOfLine * 3} x2={-widthOfLine * 2} y1={20} y2={91.5} alwaysShow fill={colors.jaffa} />
    ]
  }, [data, dataKey]);

  return (
    <Wrapper isYAxisVisible={isYAxisVisible}>
      <LineChart {...COMMON_LINE_CHART_PROPS} data={data} width={(width - OFFSET_OF_BOTH_SIDE) / COUNT_OF_CHARTS} height={600}>
        <CartesianGrid vertical={false} stroke={colors.scooter} opacity={0.25} />
        <XAxis type="number" {...COMMON_X_AXIS_PROPS} tickCount={3} />
        <YAxis dataKey="depth" {...COMMON_Y_AXIS_PROPS} domain={[0, data[data.length - 1].depth]} ticks={renderTicks()} />
        {renderIndicatorLine}
        {lines}
      </LineChart>
    </Wrapper>
  );
}

export default CustomLineChart;
