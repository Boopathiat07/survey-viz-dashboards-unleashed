
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const LikertScaleChartsApex = () => {
  // Question 1: Work-Life Balance Statement
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

  // Question 2: Management Support Statement
  const managementSupportQuestion = {
    id: "q2_management_support_statement",
    title: "Management is supportive and approachable",
    totalResponses: 1247,
    totalOptions: 5,
    options: [
      { id: "strongly_disagree", label: "Strongly Disagree", responses: 37, percentage: 3.0 },
      { id: "disagree", label: "Disagree", responses: 150, percentage: 12.0 },
      { id: "neutral", label: "Neutral", responses: 312, percentage: 25.0 },
      { id: "agree", label: "Agree", responses: 436, percentage: 35.0 },
      { id: "strongly_agree", label: "Strongly Agree", responses: 312, percentage: 25.0 }
    ]
  };

  const createChartOptions = (question: any, chartType: string) => {
    const baseOptions: ApexOptions = {
      chart: { height: 350 },
      title: { text: `${question.title} - ${chartType}` },
      colors: ['#FF4560', '#FF8A80', '#FEB019', '#00E396', '#008FFB']
    };

    switch (chartType) {
      case 'Horizontal Bar':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'bar' },
          plotOptions: { bar: { horizontal: true } },
          xaxis: { categories: question.options.map((opt: any) => opt.label) }
        };
      case 'Donut Chart':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'donut' },
          labels: question.options.map((opt: any) => opt.label)
        };
      case 'Stacked Bar':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'bar', stacked: true },
          xaxis: { categories: ['All Responses'] }
        };
      default:
        return baseOptions;
    }
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
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Horizontal Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart 
              options={createChartOptions(question, 'Horizontal Bar')} 
              series={[{ name: 'Responses', data: question.options.map((opt: any) => opt.responses) }]} 
              type="bar" 
              height={350} 
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Agreement Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart 
              options={createChartOptions(question, 'Donut Chart')} 
              series={question.options.map((opt: any) => opt.responses)} 
              type="donut" 
              height={350} 
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Stacked Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart 
              options={createChartOptions(question, 'Stacked Bar')} 
              series={question.options.map((opt: any) => ({
                name: opt.label,
                data: [opt.responses]
              }))} 
              type="bar" 
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
        <h2 className="text-2xl font-bold">Likert Scale Questions - Individual Analysis</h2>
        <p className="text-gray-600">Agreement scale responses for each statement</p>
      </div>

      {renderQuestionSection(workLifeBalanceQuestion, "bg-blue-50", "border-blue-500")}
      {renderQuestionSection(managementSupportQuestion, "bg-green-50", "border-green-500")}
    </div>
  );
};

export default LikertScaleChartsApex;
