import React, { useRef, useEffect } from "react";
import { init, getInstanceByDom, registerTheme } from "echarts";
import type { CSSProperties } from "react";
import type { EChartsOption, ECharts, SetOptionOpts } from "echarts";
import chalkTheme from './Chart_Style.json';


export interface ReactEChartsProps {
  option: EChartsOption;
  style?: CSSProperties;
  settings?: SetOptionOpts;
  loading?: boolean;
  theme?: "light" | "dark" | "chalk";
}
  
const ReactECharts: React.FC<ReactEChartsProps> = ({
  option,
  style,
  theme,
  settings,
  loading,
}) => {
  const chartRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    let chart: ECharts | undefined;

    if (chartRef.current !== null) {
      registerTheme('chalk', chalkTheme);
      chart = init(chartRef.current, theme);
    }

    function resizeChart() {
      chart?.resize();
    }
    window.addEventListener("resize", resizeChart);

    return () => {
      chart?.dispose();
      window.removeEventListener("resize", resizeChart);
    };
  }, [theme]);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      chart?.setOption(option, settings);
    }
  }, [option, settings, theme]);

  useEffect(() => {
    if (chartRef.current !== null) {
      const chart = getInstanceByDom(chartRef.current);
      loading === true ? chart?.showLoading() : chart?.hideLoading();
    }
  }, [loading, theme]);

  return (
    <div className="ec-panel" ref={chartRef} style={{ width: "100%", height: "100%", ...style }} />
  );
}

export default ReactECharts;

