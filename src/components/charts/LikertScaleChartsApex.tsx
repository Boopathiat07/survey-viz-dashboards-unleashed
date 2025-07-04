
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const LikertScaleChartsApex = () => {
  const workLifeBalanceQuestion = {
    id: "q1_work_life_balance_statement",
    title: "Our company values work-life balance",
    totalResponses: 1247,
    totalOptions: 5,
    options: [
      { id: "strongly_disagree", label: "Strongly Disagree", responses: 25, percentage: 2.0 },
      { id: "disagree", label: "Disagree", responses: 100, percentage: 8.0 },
      { id: "neutral", label: "Neutral", responses: 249, percentage: 20.0 },
      { id: "agree", label: "Agree", responses: 498, percentage: 40.0 },
      { id: "strongly_agree", label: "Strongly Agree", responses: 375, percentage: 30.0 }
    ]
  };

  const createChartOptions = (question: any): ApexOptions => {
    return {
      chart: { 
        height: 350,
        type: 'bar' as const
      },
      plotOptions: { 
        bar: { 
          horizontal: true,
          distributed: true 
        } 
      },
      xaxis: { 
        categories: question.options.map((opt: any) => opt.label),
        labels: { show: false }
      },
      yaxis: { labels: { show: false } },
      colors: ['#FF4560', '#FF8A80', '#FEB019', '#00E396', '#008FFB'],
      dataLabels: { enabled: false },
      grid: { show: false },
      legend: { show: false },
      tooltip: { 
        y: { formatter: (val: number) => `${val} responses` }
      }
    };
  };

  const renderQuestionSection = (question: any, bgColor: string, borderColor: string) => (
    <div className="space-y-4">
      <div className={`${bgColor} p-4 rounded-lg border-l-4 ${borderColor}`}>
        <h3 className="text-xl font-semibold">"{question.title}"</h3>
        <div className="flex gap-4 mt-2 text-sm">
          <Badge variant="outline">Total Responses: {question.totalResponses}</Badge>
          <Badge variant="outline">Total Options: {question.totalOptions}</Badge>
        </div>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <Chart 
            options={createChartOptions(question)} 
            series={[{ name: 'Responses', data: question.options.map((opt: any) => opt.responses) }]} 
            type="bar" 
            height={350} 
          />
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Likert Scale Questions</h2>
      </div>
      {renderQuestionSection(workLifeBalanceQuestion, "bg-blue-50", "border-blue-500")}
    </div>
  );
};

export default LikertScaleChartsApex;
