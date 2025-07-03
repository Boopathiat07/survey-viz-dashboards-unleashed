
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const TextAnalysisChartsApex = () => {
  const keywordData = [
    { word: 'lighting', frequency: 45 },
    { word: 'temperature', frequency: 38 },
    { word: 'noise', frequency: 34 },
    { word: 'space', frequency: 29 },
    { word: 'equipment', frequency: 25 },
    { word: 'collaboration', frequency: 22 }
  ];

  const sentimentData = [
    { sentiment: 'Positive', count: 48, percentage: 15 },
    { sentiment: 'Neutral', count: 192, percentage: 60 },
    { sentiment: 'Negative', count: 80, percentage: 25 }
  ];

  // Keyword Frequency
  const keywordOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    title: { text: 'Top Keywords Frequency' },
    plotOptions: { bar: { horizontal: true } },
    xaxis: { categories: keywordData.map(item => item.word) },
    colors: ['#008FFB']
  };
  const keywordSeries = [{ name: 'Frequency', data: keywordData.map(item => item.frequency) }];

  // Sentiment Pie
  const sentimentOptions: ApexOptions = {
    chart: { type: 'pie', height: 350 },
    title: { text: 'Sentiment Analysis' },
    labels: sentimentData.map(item => item.sentiment),
    colors: ['#00E396', '#FEB019', '#FF4560']
  };
  const sentimentSeries = sentimentData.map(item => item.count);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Text Analysis Questions - ApexCharts</h2>
        <p className="text-gray-600">Keyword frequency and sentiment analysis</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Keyword Frequency</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={keywordOptions} series={keywordSeries} type="bar" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={sentimentOptions} series={sentimentSeries} type="pie" height={350} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TextAnalysisChartsApex;
