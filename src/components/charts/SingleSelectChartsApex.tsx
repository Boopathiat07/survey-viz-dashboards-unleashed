
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const SingleSelectChartsApex = () => {
  // Sample data for work schedule preference
  const workScheduleData = [
    { name: 'Remote Work', value: 389, percentage: 45 },
    { name: 'Hybrid', value: 259, percentage: 30 },
    { name: 'Office-based', value: 173, percentage: 20 },
    { name: 'Flexible', value: 43, percentage: 5 }
  ];

  const communicationData = [
    { name: 'Email', value: 298, percentage: 35 },
    { name: 'Slack/Teams', value: 254, percentage: 30 },
    { name: 'Video Calls', value: 169, percentage: 20 },
    { name: 'In-Person', value: 85, percentage: 10 },
    { name: 'Phone Calls', value: 42, percentage: 5 }
  ];

  // 1. Basic Column Chart
  const columnOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    title: { text: 'Work Schedule Preference - Column Chart' },
    xaxis: { categories: workScheduleData.map(item => item.name) },
    colors: ['#008FFB']
  };
  const columnSeries = [{ name: 'Responses', data: workScheduleData.map(item => item.value) }];

  // 2. Horizontal Bar Chart
  const barOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    plotOptions: { bar: { horizontal: true } },
    title: { text: 'Work Schedule Preference - Horizontal Bar' },
    xaxis: { categories: workScheduleData.map(item => item.name) },
    colors: ['#00E396']
  };
  const barSeries = [{ name: 'Responses', data: workScheduleData.map(item => item.value) }];

  // 3. Pie Chart
  const pieOptions: ApexOptions = {
    chart: { type: 'pie', height: 350 },
    title: { text: 'Work Schedule Preference - Pie Chart' },
    labels: workScheduleData.map(item => item.name),
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560']
  };
  const pieSeries = workScheduleData.map(item => item.value);

  // 4. Donut Chart
  const donutOptions: ApexOptions = {
    chart: { type: 'donut', height: 350 },
    title: { text: 'Work Schedule Preference - Donut Chart' },
    labels: workScheduleData.map(item => item.name),
    colors: ['#775DD0', '#FEB019', '#FF4560', '#00E396']
  };
  const donutSeries = workScheduleData.map(item => item.value);

  // 5. Radial Bar Chart
  const radialOptions: ApexOptions = {
    chart: { type: 'radialBar', height: 350 },
    title: { text: 'Work Schedule Preference - Radial Bar' },
    labels: workScheduleData.map(item => item.name),
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560']
  };
  const radialSeries = workScheduleData.map(item => item.percentage);

  // 6. Area Chart
  const areaOptions: ApexOptions = {
    chart: { type: 'area', height: 350 },
    title: { text: 'Communication Methods - Area Chart' },
    xaxis: { categories: communicationData.map(item => item.name) },
    colors: ['#00E396']
  };
  const areaSeries = [{ name: 'Responses', data: communicationData.map(item => item.value) }];

  // 7. Line Chart
  const lineOptions: ApexOptions = {
    chart: { type: 'line', height: 350 },
    title: { text: 'Communication Methods - Line Chart' },
    xaxis: { categories: communicationData.map(item => item.name) },
    colors: ['#FF4560']
  };
  const lineSeries = [{ name: 'Responses', data: communicationData.map(item => item.value) }];

  // 8. Radar Chart
  const radarOptions: ApexOptions = {
    chart: { type: 'radar', height: 350 },
    title: { text: 'Work Schedule Preference - Radar Chart' },
    xaxis: { categories: workScheduleData.map(item => item.name) },
    colors: ['#775DD0']
  };
  const radarSeries = [{ name: 'Responses', data: workScheduleData.map(item => item.value) }];

  // 9. Polar Area Chart
  const polarOptions: ApexOptions = {
    chart: { type: 'polarArea', height: 350 },
    title: { text: 'Work Schedule Preference - Polar Area' },
    labels: workScheduleData.map(item => item.name),
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560']
  };
  const polarSeries = workScheduleData.map(item => item.value);

  // 10. Treemap Chart
  const treemapOptions: ApexOptions = {
    chart: { type: 'treemap', height: 350 },
    title: { text: 'Work Schedule Preference - Treemap' },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560']
  };
  const treemapSeries = [{
    data: workScheduleData.map(item => ({ x: item.name, y: item.value }))
  }];

  // 11. Bubble Chart
  const bubbleOptions: ApexOptions = {
    chart: { type: 'bubble', height: 350 },
    title: { text: 'Communication vs Work Schedule - Bubble Chart' },
    xaxis: { title: { text: 'Communication Preference' } },
    yaxis: { title: { text: 'Work Schedule Preference' } },
    colors: ['#775DD0']
  };
  const bubbleSeries = [{
    name: 'Responses',
    data: [
      [30, 40, 35], [25, 35, 30], [20, 30, 20], [15, 25, 10], [10, 20, 5]
    ]
  }];

  // 12. Scatter Chart
  const scatterOptions: ApexOptions = {
    chart: { type: 'scatter', height: 350 },
    title: { text: 'Response Distribution - Scatter Plot' },
    xaxis: { title: { text: 'Time (hours)' } },
    yaxis: { title: { text: 'Responses' } },
    colors: ['#FEB019']
  };
  const scatterSeries = [{
    name: 'Responses',
    data: [[1, 389], [2, 259], [3, 173], [4, 43], [5, 298]]
  }];

  // 13. Heatmap Chart
  const heatmapOptions: ApexOptions = {
    chart: { type: 'heatmap', height: 350 },
    title: { text: 'Response Intensity - Heatmap' },
    xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
    colors: ['#008FFB']
  };
  const heatmapSeries = [
    { name: 'Remote', data: [{ x: 'Q1', y: 389 }, { x: 'Q2', y: 350 }, { x: 'Q3', y: 300 }, { x: 'Q4', y: 280 }] },
    { name: 'Hybrid', data: [{ x: 'Q1', y: 259 }, { x: 'Q2', y: 240 }, { x: 'Q3', y: 220 }, { x: 'Q4', y: 200 }] },
    { name: 'Office', data: [{ x: 'Q1', y: 173 }, { x: 'Q2', y: 160 }, { x: 'Q3', y: 140 }, { x: 'Q4', y: 120 }] }
  ];

  // 14. Candlestick Chart (Mock financial data)
  const candlestickOptions: ApexOptions = {
    chart: { type: 'candlestick', height: 350 },
    title: { text: 'Response Trends - Candlestick' },
    xaxis: { type: 'datetime' }
  };
  const candlestickSeries = [{
    data: [
      [Date.UTC(2024, 0, 1), 200, 400, 180, 350],
      [Date.UTC(2024, 1, 1), 350, 380, 200, 250],
      [Date.UTC(2024, 2, 1), 250, 300, 150, 180],
      [Date.UTC(2024, 3, 1), 180, 200, 100, 150]
    ]
  }];

  // 15. Box Plot Chart
  const boxPlotOptions: ApexOptions = {
    chart: { type: 'boxPlot', height: 350 },
    title: { text: 'Response Distribution - Box Plot' },
    xaxis: { categories: ['Remote', 'Hybrid', 'Office', 'Flexible'] }
  };
  const boxPlotSeries = [{
    name: 'Responses',
    data: [
      { x: 'Remote', y: [300, 350, 389, 420, 450] },
      { x: 'Hybrid', y: [200, 230, 259, 280, 300] },
      { x: 'Office', y: [120, 150, 173, 200, 220] },
      { x: 'Flexible', y: [20, 35, 43, 55, 70] }
    ]
  }];

  // 16. Funnel Chart
  const funnelOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    title: { text: 'Survey Completion Funnel' },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '80%',
        isFunnel: true
      }
    },
    xaxis: { categories: ['Started', 'Question 5', 'Question 10', 'Completed'] },
    colors: ['#008FFB']
  };
  const funnelSeries = [{ name: 'Responses', data: [1500, 1247, 1189, 1100] }];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Single Select Questions - ALL ApexCharts Types</h2>
        <p className="text-gray-600">Comprehensive showcase of all available chart types in ApexCharts</p>
      </div>

      {/* Basic Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">1. Column Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={columnOptions} series={columnSeries} type="bar" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">2. Horizontal Bar Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={barOptions} series={barSeries} type="bar" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">3. Pie Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={pieOptions} series={pieSeries} type="pie" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">4. Donut Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={donutOptions} series={donutSeries} type="donut" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">5. Radial Bar Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={radialOptions} series={radialSeries} type="radialBar" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">6. Area Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={areaOptions} series={areaSeries} type="area" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">7. Line Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={lineOptions} series={lineSeries} type="line" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">8. Radar Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={radarOptions} series={radarSeries} type="radar" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">9. Polar Area Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={polarOptions} series={polarSeries} type="polarArea" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">10. Treemap Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={treemapOptions} series={treemapSeries} type="treemap" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">11. Bubble Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={bubbleOptions} series={bubbleSeries} type="bubble" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">12. Scatter Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={scatterOptions} series={scatterSeries} type="scatter" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">13. Heatmap Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={heatmapOptions} series={heatmapSeries} type="heatmap" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">14. Candlestick Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={candlestickOptions} series={candlestickSeries} type="candlestick" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">15. Box Plot Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={boxPlotOptions} series={boxPlotSeries} type="boxPlot" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">16. Funnel Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={funnelOptions} series={funnelSeries} type="bar" height={350} />
          </CardContent>
        </Card>
      </div>

      {/* Summary */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-lg text-blue-800">ApexCharts vs Recharts Comparison</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-blue-700">ApexCharts Advantages:</h4>
              <ul className="text-sm space-y-1 mt-2">
                <li>✅ More chart types (16+ vs 8)</li>
                <li>✅ Better interactivity</li>
                <li>✅ Advanced features (zoom, pan, brush)</li>
                <li>✅ Better animations</li>
                <li>✅ Mixed chart types</li>
                <li>✅ Real-time updates</li>
                <li>✅ Export functionality built-in</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-blue-700">Recharts Advantages:</h4>
              <ul className="text-sm space-y-1 mt-2">
                <li>✅ Smaller bundle size</li>
                <li>✅ More React-native approach</li>
                <li>✅ Easier customization</li>
                <li>✅ Better TypeScript support</li>
                <li>✅ Simpler API</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleSelectChartsApex;
