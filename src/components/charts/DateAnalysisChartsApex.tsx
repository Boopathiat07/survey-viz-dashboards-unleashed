
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

  // Question 2: Project Start Date (Week pattern)
  const projectStartQuestion = {
    id: "q2_project_start",
    title: "When did your current project start?",
    totalResponses: 1247,
    totalOptions: 12,
    pattern: "week",
    options: [
      { id: "2024-w40", label: "Week 40", responses: 87, percentage: 7.0 },
      { id: "2024-w41", label: "Week 41", responses: 95, percentage: 7.6 },
      { id: "2024-w42", label: "Week 42", responses: 103, percentage: 8.3 },
      { id: "2024-w43", label: "Week 43", responses: 112, percentage: 9.0 },
      { id: "2024-w44", label: "Week 44", responses: 125, percentage: 10.0 },
      { id: "2024-w45", label: "Week 45", responses: 134, percentage: 10.7 },
      { id: "2024-w46", label: "Week 46", responses: 121, percentage: 9.7 },
      { id: "2024-w47", label: "Week 47", responses: 108, percentage: 8.7 },
      { id: "2024-w48", label: "Week 48", responses: 99, percentage: 7.9 },
      { id: "2024-w49", label: "Week 49", responses: 87, percentage: 7.0 },
      { id: "2024-w50", label: "Week 50", responses: 92, percentage: 7.4 },
      { id: "2024-w51", label: "Week 51", responses: 84, percentage: 6.7 }
    ]
  };

  // Question 3: Performance Review Date (Year pattern)
  const reviewDateQuestion = {
    id: "q3_review_date",
    title: "When was your last performance review?",
    totalResponses: 1247,
    totalOptions: 4,
    pattern: "year",
    options: [
      { id: "2021", label: "2021", responses: 87, percentage: 7.0 },
      { id: "2022", label: "2022", responses: 234, percentage: 18.8 },
      { id: "2023", label: "2023", responses: 498, percentage: 39.9 },
      { id: "2024", label: "2024", responses: 428, percentage: 34.3 }
    ]
  };

  const createChartOptions = (question: any, chartType: string) => {
    const baseOptions: ApexOptions = {
      chart: { height: 350 },
      title: { text: `${question.title} - ${chartType} (${question.pattern} pattern)` },
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']
    };

    switch (chartType) {
      case 'Line Chart':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'line' },
          xaxis: { categories: question.options.map((opt: any) => opt.label) }
        };
      case 'Area Chart':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'area' },
          xaxis: { categories: question.options.map((opt: any) => opt.label) }
        };
      case 'Bar Chart':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'bar' },
          xaxis: { categories: question.options.map((opt: any) => opt.label) }
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
          <Badge variant="outline">Pattern: {question.pattern}</Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Timeline Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart 
              options={createChartOptions(question, 'Line Chart')} 
              series={[{ name: 'Responses', data: question.options.map((opt: any) => opt.responses) }]} 
              type="line" 
              height={350} 
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Area View</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart 
              options={createChartOptions(question, 'Area Chart')} 
              series={[{ name: 'Participants', data: question.options.map((opt: any) => opt.responses) }]} 
              type="area" 
              height={350} 
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Distribution</CardTitle>
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
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Date Analysis Questions - Individual Analysis</h2>
        <p className="text-gray-600">Temporal patterns and date-based insights for each question</p>
      </div>

      {renderQuestionSection(trainingDateQuestion, "bg-blue-50", "border-blue-500")}
      {renderQuestionSection(projectStartQuestion, "bg-green-50", "border-green-500")}
      {renderQuestionSection(reviewDateQuestion, "bg-purple-50", "border-purple-500")}
    </div>
  );
};

export default DateAnalysisChartsApex;
