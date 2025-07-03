
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const RankingChartsApex = () => {
  const rankingData = [
    { factor: 'Salary', averageRank: 1.8 },
    { factor: 'Work-Life Balance', averageRank: 2.3 },
    { factor: 'Career Growth', averageRank: 2.9 },
    { factor: 'Company Culture', averageRank: 3.2 },
    { factor: 'Benefits', averageRank: 3.8 }
  ];

  const rankingOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    title: { text: 'Average Ranking - Lower is Better' },
    xaxis: { categories: rankingData.map(item => item.factor) },
    yaxis: { reversed: true, title: { text: 'Average Rank' } },
    colors: ['#00E396']
  };
  const rankingSeries = [{ name: 'Average Rank', data: rankingData.map(item => item.averageRank) }];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Ranking Questions - ApexCharts</h2>
        <p className="text-gray-600">Priority ranking visualizations</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Average Ranking Results</CardTitle>
        </CardHeader>
        <CardContent>
          <Chart options={rankingOptions} series={rankingSeries} type="bar" height={350} />
        </CardContent>
      </Card>
    </div>
  );
};

export default RankingChartsApex;
