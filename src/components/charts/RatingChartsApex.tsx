
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const RatingChartsApex = () => {
  const jobSatisfactionQuestion = {
    id: "q1_job_satisfaction",
    title: "Rate your overall job satisfaction (1-5 stars)",
    totalResponses: 1247,
    totalOptions: 5,
    averageStars: 3.9,
    options: [
      { id: "1_star", label: "1 Star", responses: 25, percentage: 2.0 },
      { id: "2_stars", label: "2 Stars", responses: 62, percentage: 5.0 },
      { id: "3_stars", label: "3 Stars", responses: 249, percentage: 20.0 },
      { id: "4_stars", label: "4 Stars", responses: 561, percentage: 45.0 },
      { id: "5_stars", label: "5 Stars", responses: 350, percentage: 28.0 }
    ]
  };

  const createChartOptions = (question: any): ApexOptions => {
    return {
      chart: { 
        height: 350,
        type: 'radialBar' as const
      },
      plotOptions: {
        radialBar: {
          startAngle: -90,
          endAngle: 90,
          dataLabels: {
            name: { show: false },
            value: { 
              show: true,
              fontSize: '22px', 
              formatter: (val: number) => `${(val * question.averageStars / 100).toFixed(1)}/${question.totalOptions}`
            }
          }
        }
      },
      colors: ['#008FFB'],
      labels: [''],
      legend: { show: false }
    };
  };

  const renderQuestionSection = (question: any, bgColor: string, borderColor: string) => (
    <div className="space-y-4">
      <div className={`${bgColor} p-4 rounded-lg border-l-4 ${borderColor}`}>
        <h3 className="text-xl font-semibold">{question.title}</h3>
        <div className="flex gap-4 mt-2 text-sm flex-wrap">
          <Badge variant="outline">Total Responses: {question.totalResponses}</Badge>
          <Badge variant="outline">Total Options: {question.totalOptions}</Badge>
          <Badge variant="outline">Average Stars: {question.averageStars}</Badge>
        </div>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <Chart 
            options={createChartOptions(question)} 
            series={[(question.averageStars / question.totalOptions) * 100]} 
            type="radialBar" 
            height={350} 
          />
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Rating Questions</h2>
      </div>
      {renderQuestionSection(jobSatisfactionQuestion, "bg-blue-50", "border-blue-500")}
    </div>
  );
};

export default RatingChartsApex;
