
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const SingleSelectChartsApex = () => {
  const workScheduleQuestion = {
    id: "q1_work_schedule",
    title: "What is your preferred work schedule?",
    totalResponses: 1247,
    totalOptions: 4,
    options: [
      { id: "remote", label: "Remote Work", responses: 561, percentage: 45.0 },
      { id: "hybrid", label: "Hybrid", responses: 374, percentage: 30.0 },
      { id: "office", label: "Office-based", responses: 249, percentage: 20.0 },
      { id: "flexible", label: "Flexible", responses: 63, percentage: 5.0 }
    ]
  };

  const createChartOptions = (question: any): ApexOptions => {
    return {
      chart: { 
        height: 350,
        type: 'donut' as const
      },
      labels: question.options.map((opt: any) => opt.label),
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560'],
      legend: { show: false },
      dataLabels: { enabled: false },
      tooltip: { 
        y: { formatter: (val: number) => `${val} responses` }
      }
    };
  };

  const renderQuestionSection = (question: any, bgColor: string, borderColor: string) => (
    <div className="space-y-4">
      <div className={`${bgColor} p-4 rounded-lg border-l-4 ${borderColor}`}>
        <h3 className="text-xl font-semibold">{question.title}</h3>
        <div className="flex gap-4 mt-2 text-sm">
          <Badge variant="outline">Total Responses: {question.totalResponses}</Badge>
          <Badge variant="outline">Total Options: {question.totalOptions}</Badge>
        </div>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <Chart 
            options={createChartOptions(question)} 
            series={question.options.map((opt: any) => opt.responses)} 
            type="donut" 
            height={350} 
          />
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Single Select Questions</h2>
      </div>
      {renderQuestionSection(workScheduleQuestion, "bg-blue-50", "border-blue-500")}
    </div>
  );
};

export default SingleSelectChartsApex;
