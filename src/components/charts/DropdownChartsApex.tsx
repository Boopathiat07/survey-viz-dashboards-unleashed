
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

  // Question 2: Education Level
  const educationQuestion = {
    id: "q2_education",
    title: "What is your highest education level?",
    totalResponses: 1247,
    totalOptions: 5,
    options: [
      { id: "bachelors", label: "Bachelor's Degree", responses: 498, percentage: 40.0 },
      { id: "masters", label: "Master's Degree", responses: 374, percentage: 30.0 },
      { id: "high_school", label: "High School", responses: 187, percentage: 15.0 },
      { id: "phd", label: "PhD/Doctorate", responses: 125, percentage: 10.0 },
      { id: "associate", label: "Associate Degree", responses: 63, percentage: 5.0 }
    ]
  };

  // Question 3: Experience Level
  const experienceQuestion = {
    id: "q3_experience",
    title: "How many years of experience do you have?",
    totalResponses: 1247,
    totalOptions: 4,
    options: [
      { id: "3_5_years", label: "3-5 years", responses: 374, percentage: 30.0 },
      { id: "6_10_years", label: "6-10 years", responses: 348, percentage: 27.9 },
      { id: "0_2_years", label: "0-2 years", responses: 312, percentage: 25.0 },
      { id: "10_plus_years", label: "10+ years", responses: 213, percentage: 17.1 }
    ]
  };

  const createChartOptions = (question: any, chartType: string) => {
    const baseOptions: ApexOptions = {
      chart: { height: 350 },
      title: { text: `${question.title} - ${chartType}` },
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5', '#E91E63', '#9C27B0']
    };

    switch (chartType) {
      case 'Pie Chart':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'pie' },
          labels: question.options.map((opt: any) => opt.label)
        };
      case 'Bar Chart':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'bar' },
          xaxis: { categories: question.options.map((opt: any) => opt.label) }
        };
      case 'Treemap':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'treemap' }
        };
      default:
        return baseOptions;
    }
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
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart 
              options={createChartOptions(question, 'Pie Chart')} 
              series={question.options.map((opt: any) => opt.responses)} 
              type="pie" 
              height={350} 
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Response Count</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart 
              options={createChartOptions(question, 'Bar Chart')} 
              series={[{ name: 'Responses', data: question.options.map((opt: any) => opt.responses) }]} 
              type="bar" 
              height={350} 
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Hierarchy View</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart 
              options={createChartOptions(question, 'Treemap')} 
              series={[{ data: question.options.map((opt: any) => ({ x: opt.label, y: opt.responses })) }]} 
              type="treemap" 
              height={350} 
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Dropdown Questions - Individual Analysis</h2>
        <p className="text-gray-600">Categorical selection analysis for each dropdown question</p>
      </div>

      {renderQuestionSection(departmentQuestion, "bg-blue-50", "border-blue-500")}
      {renderQuestionSection(educationQuestion, "bg-green-50", "border-green-500")}
      {renderQuestionSection(experienceQuestion, "bg-purple-50", "border-purple-500")}
    </div>
  );
};

export default DropdownChartsApex;
