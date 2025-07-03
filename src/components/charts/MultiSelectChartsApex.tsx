
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const MultiSelectChartsApex = () => {
  const benefitsData = [
    { name: 'Health Insurance', responses: 1089, percentage: 87 },
    { name: 'Flexible Hours', responses: 945, percentage: 76 },
    { name: 'Remote Work', responses: 761, percentage: 61 },
    { name: 'Professional Development', responses: 599, percentage: 48 },
    { name: 'Gym Membership', responses: 337, percentage: 27 },
    { name: 'Free Meals', responses: 262, percentage: 21 }
  ];

  const skillsData = [
    { name: 'Communication', responses: 1023, percentage: 82 },
    { name: 'Problem Solving', responses: 898, percentage: 72 },
    { name: 'Leadership', responses: 723, percentage: 58 },
    { name: 'Technical Skills', responses: 673, percentage: 54 },
    { name: 'Creativity', responses: 561, percentage: 45 },
    { name: 'Time Management', responses: 511, percentage: 41 }
  ];

  // 1. Stacked Bar Chart
  const stackedBarOptions: ApexOptions = {
    chart: { type: 'bar', height: 350, stacked: true },
    title: { text: 'Benefits Selection - Stacked Bar' },
    xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5']
  };
  const stackedBarSeries = benefitsData.map(item => ({
    name: item.name,
    data: [
      Math.floor(item.responses * 0.3),
      Math.floor(item.responses * 0.25),
      Math.floor(item.responses * 0.25),
      Math.floor(item.responses * 0.2)
    ]
  }));

  // 2. Grouped Bar Chart
  const groupedBarOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    title: { text: 'Skills vs Benefits - Grouped Bar' },
    xaxis: { categories: ['Communication', 'Leadership', 'Technical', 'Creativity'] },
    colors: ['#008FFB', '#00E396']
  };
  const groupedBarSeries = [
    { name: 'Skills', data: [1023, 723, 673, 561] },
    { name: 'Benefits', data: [1089, 945, 761, 599] }
  ];

  // 3. Horizontal Stacked Bar
  const hStackedOptions: ApexOptions = {
    chart: { type: 'bar', height: 350, stacked: true },
    plotOptions: { bar: { horizontal: true } },
    title: { text: 'Benefits Distribution - Horizontal Stacked' },
    xaxis: { categories: benefitsData.map(item => item.name) },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560']
  };
  const hStackedSeries = [
    { name: 'Selected', data: benefitsData.map(item => item.responses) },
    { name: 'Not Selected', data: benefitsData.map(item => 1247 - item.responses) }
  ];

  // 4. Multiple Line Chart
  const multiLineOptions: ApexOptions = {
    chart: { type: 'line', height: 350 },
    title: { text: 'Skills Development Trends - Multi Line' },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5']
  };
  const multiLineSeries = skillsData.map(item => ({
    name: item.name,
    data: [
      Math.floor(item.responses * 0.7),
      Math.floor(item.responses * 0.8),
      Math.floor(item.responses * 0.9),
      item.responses,
      Math.floor(item.responses * 1.1),
      Math.floor(item.responses * 1.2)
    ]
  }));

  // 5. Stacked Area Chart
  const stackedAreaOptions: ApexOptions = {
    chart: { type: 'area', height: 350, stacked: true },
    title: { text: 'Benefits Selection Over Time - Stacked Area' },
    xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5']
  };
  const stackedAreaSeries = benefitsData.slice(0, 4).map(item => ({
    name: item.name,
    data: [
      Math.floor(item.responses * 0.6),
      Math.floor(item.responses * 0.7),
      Math.floor(item.responses * 0.9),
      item.responses
    ]
  }));

  // 6. Multi-Series Radar
  const multiRadarOptions: ApexOptions = {
    chart: { type: 'radar', height: 350 },
    title: { text: 'Skills vs Benefits Comparison - Radar' },
    xaxis: { categories: ['Communication', 'Leadership', 'Technical', 'Problem Solving', 'Creativity'] },
    colors: ['#008FFB', '#00E396']
  };
  const multiRadarSeries = [
    { name: 'Importance', data: [82, 58, 54, 72, 45] },
    { name: 'Current Level', data: [65, 45, 70, 60, 55] }
  ];

  // 7. Sunburst Chart (Hierarchical)
  const sunburstOptions: ApexOptions = {
    chart: { type: 'pie', height: 350 },
    title: { text: 'Benefits Hierarchy - Sunburst Style' },
    labels: benefitsData.map(item => item.name),
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5']
  };
  const sunburstSeries = benefitsData.map(item => item.responses);

  // 8. Mixed Chart (Bar + Line)
  const mixedOptions: ApexOptions = {
    chart: { type: 'line', height: 350 },
    title: { text: 'Benefits Selection & Trend - Mixed Chart' },
    xaxis: { categories: benefitsData.map(item => item.name) },
    yaxis: [
      { title: { text: 'Number of Responses' } },
      { opposite: true, title: { text: 'Percentage' } }
    ],
    colors: ['#008FFB', '#00E396']
  };
  const mixedSeries = [
    { name: 'Responses', type: 'column', data: benefitsData.map(item => item.responses) },
    { name: 'Percentage', type: 'line', data: benefitsData.map(item => item.percentage) }
  ];

  // 9. Parallel Coordinates
  const parallelOptions: ApexOptions = {
    chart: { type: 'line', height: 350 },
    title: { text: 'Multi-Select Patterns - Parallel Coordinates' },
    xaxis: { categories: ['Health', 'Flexible', 'Remote', 'Development', 'Gym', 'Meals'] },
    colors: ['#008FFB', '#00E396', '#FEB019']
  };
  const parallelSeries = [
    { name: 'Group A', data: [87, 76, 61, 48, 27, 21] },
    { name: 'Group B', data: [82, 72, 58, 54, 45, 41] },
    { name: 'Group C', data: [78, 65, 45, 38, 25, 18] }
  ];

  // 10. Sankey-style Flow (using stacked bars)
  const sankeyOptions: ApexOptions = {
    chart: { type: 'bar', height: 350, stacked: true },
    title: { text: 'Selection Flow - Sankey Style' },
    plotOptions: { bar: { horizontal: true } },
    xaxis: { categories: ['Initial Interest', 'Considered', 'Final Selection'] },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5']
  };
  const sankeySeries = benefitsData.map(item => ({
    name: item.name,
    data: [
      Math.floor(item.responses * 1.3),
      Math.floor(item.responses * 1.1),
      item.responses
    ]
  }));

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Multi Select Questions - ApexCharts Showcase</h2>
        <p className="text-gray-600">Advanced visualizations for multiple selection data</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">1. Stacked Bar Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={stackedBarOptions} series={stackedBarSeries} type="bar" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">2. Grouped Bar Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={groupedBarOptions} series={groupedBarSeries} type="bar" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">3. Horizontal Stacked Bar</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={hStackedOptions} series={hStackedSeries} type="bar" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">4. Multiple Line Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={multiLineOptions} series={multiLineSeries} type="line" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">5. Stacked Area Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={stackedAreaOptions} series={stackedAreaSeries} type="area" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">6. Multi-Series Radar</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={multiRadarOptions} series={multiRadarSeries} type="radar" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">7. Hierarchical Pie (Sunburst Style)</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={sunburstOptions} series={sunburstSeries} type="pie" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">8. Mixed Chart (Bar + Line)</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={mixedOptions} series={mixedSeries} type="line" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">9. Parallel Coordinates</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={parallelOptions} series={parallelSeries} type="line" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">10. Selection Flow (Sankey Style)</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={sankeyOptions} series={sankeySeries} type="bar" height={350} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MultiSelectChartsApex;
