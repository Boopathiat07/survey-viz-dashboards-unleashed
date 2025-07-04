
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const MultiSelectChartsApex = () => {
  const benefitsQuestion = {
    id: "q1_benefits",
    title: "Which benefits are most important to you? (Select all that apply)",
    totalResponses: 1247,
    totalOptions: 6,
    totalSelections: 3986,
    averageSelectionsPerPerson: 3.2,
    options: [
      { id: "health", label: "Health Insurance", responses: 1085, percentage: 87.0 },
      { id: "flexible", label: "Flexible Hours", responses: 948, percentage: 76.0 },
      { id: "remote", label: "Remote Work", responses: 761, percentage: 61.0 },
      { id: "development", label: "Professional Development", responses: 598, percentage: 48.0 },
      { id: "gym", label: "Gym Membership", responses: 337, percentage: 27.0 },
      { id: "meals", label: "Free Meals", responses: 262, percentage: 21.0 }
    ]
  };

  const createChartOptions = (question: any): ApexOptions => {
    return {
      chart: { 
        height: 350,
        type: 'bar' as const
      },
      plotOptions: { bar: { horizontal: true } },
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
        y: { formatter: (val: number) => `${val} selections` }
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
          <Badge variant="outline">Total Selections: {question.totalSelections}</Badge>
          <Badge variant="outline">Avg Selections/Person: {question.averageSelectionsPerPerson}</Badge>
        </div>
      </div>
      
      <Card>
        <CardContent className="pt-6">
          <Chart 
            options={createChartOptions(question)} 
            series={[{ name: 'Selections', data: question.options.map((opt: any) => opt.responses) }]} 
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
        <h2 className="text-2xl font-bold">Multi Select Questions</h2>
      </div>
      {renderQuestionSection(benefitsQuestion, "bg-blue-50", "border-blue-500")}
    </div>
  );
};

export default MultiSelectChartsApex;
