
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const DropdownChartsApex = () => {
  // Question 1: Department Selection
  const departmentQuestion = {
    id: "q1_department",
    title: "Select your department",
    totalResponses: 1247,
    totalOptions: 8,
    options: [
      { id: "engineering", label: "Engineering", responses: 289, percentage: 23.2 },
      { id: "sales", label: "Sales", responses: 234, percentage: 18.8 },
      { id: "marketing", label: "Marketing", responses: 187, percentage: 15.0 },
      { id: "operations", label: "Operations", responses: 187, percentage: 15.0 },
      { id: "hr", label: "HR", responses: 156, percentage: 12.5 },
      { id: "finance", label: "Finance", responses: 143, percentage: 11.5 },
      { id: "legal", label: "Legal", responses: 25, percentage: 2.0 },
      { id: "other", label: "Other", responses: 26, percentage: 2.1 }
    ]
  };

  const createChartOptions = (question: any): ApexOptions => {
    return {
      chart: { 
        height: 350,
        type: 'pie' as const
      },
      labels: question.options.map((opt: any) => opt.label),
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5', '#E91E63', '#9C27B0'],
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
            type="pie" 
            height={350} 
          />
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Dropdown Questions - Individual Analysis</h2>
        <p className="text-gray-600">Categorical selection analysis for each dropdown question</p>
      </div>

      {renderQuestionSection(departmentQuestion, "bg-blue-50", "border-blue-500")}
    </div>
  );
};

export default DropdownChartsApex;
