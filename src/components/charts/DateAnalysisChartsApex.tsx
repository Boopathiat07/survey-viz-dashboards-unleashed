
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const DateAnalysisChartsApex = () => {
  const timelineData = [
    { month: 'Jan 2024', responses: 45 },
    { month: 'Feb 2024', responses: 67 },
    { month: 'Mar 2024', responses: 89 },
    { month: 'Apr 2024', responses: 78 },
    { month: 'May 2024', responses: 56 },
    { month: 'Jun 2024', responses: 34 }
  ];

  // Timeline Chart
  const timelineOptions: ApexOptions = {
    chart: { type: 'line', height: 350 },
    title: { text: 'Response Timeline - Training Attendance' },
    xaxis: { categories: timelineData.map(item => item.month) },
    colors: ['#008FFB']
  };
  const timelineSeries = [{ name: 'Responses', data: timelineData.map(item => item.responses) }];

  // Calendar Heatmap simulation using matrix
  const heatmapOptions: ApexOptions = {
    chart: { type: 'heatmap', height: 350 },
    title: { text: 'Daily Activity Heatmap' },
    xaxis: { categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'] },
    colors: ['#008FFB']
  };
  const heatmapSeries = [
    { name: 'Mon', data: [{ x: 'Week 1', y: 8 }, { x: 'Week 2', y: 6 }, { x: 'Week 3', y: 9 }, { x: 'Week 4', y: 5 }] },
    { name: 'Tue', data: [{ x: 'Week 1', y: 7 }, { x: 'Week 2', y: 8 }, { x: 'Week 3', y: 4 }, { x: 'Week 4', y: 6 }] },
    { name: 'Wed', data: [{ x: 'Week 1', y: 9 }, { x: 'Week 2', y: 5 }, { x: 'Week 3', y: 7 }, { x: 'Week 4', y: 8 }] }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Date Analysis Questions - ApexCharts</h2>
        <p className="text-gray-600">Temporal patterns and date-based insights</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Timeline Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={timelineOptions} series={timelineSeries} type="line" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Activity Heatmap</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={heatmapOptions} series={heatmapSeries} type="heatmap" height={350} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DateAnalysisChartsApex;
