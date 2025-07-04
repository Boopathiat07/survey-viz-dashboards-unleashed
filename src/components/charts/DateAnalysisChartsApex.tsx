
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const DateAnalysisChartsApex = () => {
  // Question 1: Last Training Date (Month pattern)
  const trainingDateQuestion = {
    id: "q1_training_date",
    title: "When did you last attend a training session?",
    totalResponses: 1247,
    totalOptions: 11,
    pattern: "month",
    options: [
      { id: "2024-01", label: "Jan 2024", responses: 145, percentage: 11.6 },
      { id: "2024-02", label: "Feb 2024", responses: 167, percentage: 13.4 },
      { id: "2024-03", label: "Mar 2024", responses: 189, percentage: 15.2 },
      { id: "2024-04", label: "Apr 2024", responses: 178, percentage: 14.3 },
      { id: "2024-05", label: "May 2024", responses: 156, percentage: 12.5 },
      { id: "2024-06", label: "Jun 2024", responses: 134, percentage: 10.7 },
      { id: "2024-07", label: "Jul 2024", responses: 98, percentage: 7.9 },
      { id: "2024-08", label: "Aug 2024", responses: 76, percentage: 6.1 },
      { id: "2024-09", label: "Sep 2024", responses: 54, percentage: 4.3 },
      { id: "2024-10", label: "Oct 2024", responses: 32, percentage: 2.6 },
      { id: "2024-11", label: "Nov 2024", responses: 18, percentage: 1.4 }
    ]
  };

  const createChartOptions = (question: any): ApexOptions => {
    return {
      chart: { 
        height: 350,
        type: 'area' as const
      },
      xaxis: { 
        categories: question.options.map((opt: any) => opt.label),
        labels: { show: false }
      },
      yaxis: { labels: { show: false } },
      colors: ['#008FFB'],
      dataLabels: { enabled: false },
      grid: { show: false },
      legend: { show: false },
      tooltip: { 
        x: { show: true },
        y: { formatter: (val: number) => `${val} responses` }
      }
    };
  };

  const renderQuestionSection = (question: any, bgColor: string, borderColor: string) => (
    <div className="space-y-4">
      <div className={`${bgColor} p-4 rounded-lg border-l-4 ${borderColor}`}>
        <h3 className="text-xl font-semibold">{question.title}</h3>
        <div className="flex gap-4 mt-2 text-sm flex-wrap">
          <Badge variant="outline">Total Responses: {question.totalResponses}</Badge>
          <Badge variant="outline">Total Options: {question.totalOptions}</Badge>
          <Badge variant="outline">Pattern: {question.pattern}</Badge>
        </div>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <Chart 
            options={createChartOptions(question)} 
            series={[{ name: 'Responses', data: question.options.map((opt: any) => opt.responses) }]} 
            type="area" 
            height={350} 
          />
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Date Analysis Questions - Individual Analysis</h2>
        <p className="text-gray-600">Temporal patterns and date-based insights for each question</p>
      </div>

      {renderQuestionSection(trainingDateQuestion, "bg-blue-50", "border-blue-500")}
    </div>
  );
};

export default DateAnalysisChartsApex;
