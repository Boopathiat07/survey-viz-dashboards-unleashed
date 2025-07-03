
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const LikertScaleChartsApex = () => {
  const likertData = [
    { category: 'Strongly Disagree', value: 6, percentage: 2 },
    { category: 'Disagree', value: 25, percentage: 8 },
    { category: 'Neutral', value: 63, percentage: 20 },
    { category: 'Agree', value: 127, percentage: 40 },
    { category: 'Strongly Agree', value: 95, percentage: 30 }
  ];

  // Likert Scale Horizontal Bar
  const likertOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    title: { text: 'Likert Scale Response - Horizontal Bar' },
    plotOptions: { bar: { horizontal: true } },
    xaxis: { categories: likertData.map(item => item.category) },
    colors: ['#FF4560', '#FF6B6B', '#FEB019', '#00E396', '#008FFB']
  };
  const likertSeries = [{ name: 'Responses', data: likertData.map(item => item.value) }];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Likert Scale Questions - ApexCharts</h2>
        <p className="text-gray-600">Agreement scale visualizations</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Likert Scale Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <Chart options={likertOptions} series={likertSeries} type="bar" height={350} />
        </CardContent>
      </Card>
    </div>
  );
};

export default LikertScaleChartsApex;
