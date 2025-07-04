
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const RatingChartsApex = () => {
  // Question 1: Job Satisfaction (1-5 scale)
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

  // Question 2: Work-Life Balance (1-10 scale)
  const workLifeBalanceQuestion = {
    id: "q2_work_life_balance",
    title: "Rate your work-life balance (1-10 scale)",
    totalResponses: 1247,
    totalOptions: 10,
    averageStars: 6.8,
    options: [
      { id: "1", label: "1", responses: 12, percentage: 1.0 },
      { id: "2", label: "2", responses: 25, percentage: 2.0 },
      { id: "3", label: "3", responses: 62, percentage: 5.0 },
      { id: "4", label: "4", responses: 87, percentage: 7.0 },
      { id: "5", label: "5", responses: 125, percentage: 10.0 },
      { id: "6", label: "6", responses: 187, percentage: 15.0 },
      { id: "7", label: "7", responses: 312, percentage: 25.0 },
      { id: "8", label: "8", responses: 274, percentage: 22.0 },
      { id: "9", label: "9", responses: 124, percentage: 10.0 },
      { id: "10", label: "10", responses: 37, percentage: 3.0 }
    ]
  };

  // Question 3: Manager Support (1-5 scale)
  const managerSupportQuestion = {
    id: "q3_manager_support",
    title: "Rate your manager's support (1-5 stars)",
    totalResponses: 1247,
    totalOptions: 5,
    averageStars: 3.8,
    options: [
      { id: "1_star", label: "1 Star", responses: 37, percentage: 3.0 },
      { id: "2_stars", label: "2 Stars", responses: 87, percentage: 7.0 },
      { id: "3_stars", label: "3 Stars", responses: 312, percentage: 25.0 },
      { id: "4_stars", label: "4 Stars", responses: 436, percentage: 35.0 },
      { id: "5_stars", label: "5 Stars", responses: 375, percentage: 30.0 }
    ]
  };

  const createChartOptions = (question: any, chartType: string) => {
    const baseOptions: ApexOptions = {
      chart: { height: 350 },
      title: { text: `${question.title} - ${chartType}` },
      colors: ['#FF4560', '#FF8A80', '#FEB019', '#00E396', '#008FFB']
    };

    switch (chartType) {
      case 'Bar Chart':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'bar' },
          xaxis: { categories: question.options.map((opt: any) => opt.label) },
          plotOptions: { bar: { distributed: true } }
        };
      case 'Radial Gauge':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'radialBar' },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              dataLabels: {
                name: { fontSize: '16px', offsetY: 120 },
                value: { offsetY: 76, fontSize: '22px', formatter: (val: number) => `${(val * question.averageStars / 100).toFixed(1)}/${question.totalOptions}` }
              }
            }
          },
          labels: [question.title.split(' ').slice(0, 2).join(' ')],
          colors: ['#008FFB']
        };
      case 'Pie Chart':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'pie' },
          labels: question.options.map((opt: any) => opt.label)
        };
      default:
        return baseOptions;
    }
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
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Rating Distribution</CardTitle>
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
            <CardTitle className="text-lg">Average Score Gauge</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart 
              options={createChartOptions(question, 'Radial Gauge')} 
              series={[(question.averageStars / question.totalOptions) * 100]} 
              type="radialBar" 
              height={350} 
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Distribution Pie</CardTitle>
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
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Rating Questions - Individual Analysis</h2>
        <p className="text-gray-600">Star ratings and numerical scales for each question</p>
      </div>

      {renderQuestionSection(jobSatisfactionQuestion, "bg-blue-50", "border-blue-500")}
      {renderQuestionSection(workLifeBalanceQuestion, "bg-green-50", "border-green-500")}
      {renderQuestionSection(managerSupportQuestion, "bg-purple-50", "border-purple-500")}
    </div>
  );
};

export default RatingChartsApex;
