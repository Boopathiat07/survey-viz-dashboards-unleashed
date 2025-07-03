
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const RatingChartsApex = () => {
  const satisfactionData = [
    { rating: '1 Star', value: 8, percentage: 2.5 },
    { rating: '2 Stars', value: 24, percentage: 7.5 },
    { rating: '3 Stars', value: 64, percentage: 20 },
    { rating: '4 Stars', value: 96, percentage: 30 },
    { rating: '5 Stars', value: 128, percentage: 40 }
  ];

  // 1. Rating Distribution Bar
  const ratingBarOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    title: { text: 'Rating Distribution - Bar Chart' },
    xaxis: { categories: satisfactionData.map(item => item.rating) },
    colors: ['#FF4560', '#FF6B6B', '#FEB019', '#00E396', '#008FFB']
  };
  const ratingBarSeries = [{ name: 'Responses', data: satisfactionData.map(item => item.value) }];

  // 2. Gauge Chart for Average Rating
  const gaugeOptions: ApexOptions = {
    chart: { type: 'radialBar', height: 350 },
    title: { text: 'Average Rating - Gauge Chart' },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        dataLabels: {
          name: { fontSize: '16px', color: undefined, offsetY: 120 },
          value: { offsetY: 76, fontSize: '22px', color: undefined, formatter: (val) => val + '%' }
        }
      }
    },
    labels: ['Average Rating'],
    colors: ['#008FFB']
  };
  const gaugeSeries = [82]; // 4.1/5 * 100 = 82%

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Rating Questions - ApexCharts</h2>
        <p className="text-gray-600">Star ratings and numerical scales visualization</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Rating Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={ratingBarOptions} series={ratingBarSeries} type="bar" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Average Rating Gauge</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={gaugeOptions} series={gaugeSeries} type="radialBar" height={350} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RatingChartsApex;
