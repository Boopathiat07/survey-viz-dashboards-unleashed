
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const MultiSelectChartsApex = () => {
  // Question 1: Benefits Selection
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

  // Question 2: Skills Development
  const skillsQuestion = {
    id: "q2_skills",
    title: "What skills would you like to develop? (Choose up to 4)",
    totalResponses: 1189,
    totalOptions: 6,
    totalSelections: 2854,
    averageSelectionsPerPerson: 2.4,
    options: [
      { id: "communication", label: "Communication", responses: 976, percentage: 82.1 },
      { id: "problem_solving", label: "Problem Solving", responses: 856, percentage: 72.0 },
      { id: "leadership", label: "Leadership", responses: 689, percentage: 57.9 },
      { id: "technical", label: "Technical Skills", responses: 641, percentage: 53.9 },
      { id: "creativity", label: "Creativity", responses: 535, percentage: 45.0 },
      { id: "time_management", label: "Time Management", responses: 487, percentage: 41.0 }
    ]
  };

  // Question 3: Work Environment Preferences
  const environmentQuestion = {
    id: "q3_environment",
    title: "What work environment features are important? (Select all that apply)",
    totalResponses: 1247,
    totalOptions: 6,
    totalSelections: 3596,
    averageSelectionsPerPerson: 2.9,
    options: [
      { id: "quiet", label: "Quiet Spaces", responses: 823, percentage: 66.0 },
      { id: "collaborative", label: "Collaborative Areas", responses: 734, percentage: 59.0 },
      { id: "natural_light", label: "Natural Light", responses: 698, percentage: 56.0 },
      { id: "ergonomic", label: "Ergonomic Furniture", responses: 587, percentage: 47.0 },
      { id: "temperature", label: "Temperature Control", responses: 456, percentage: 37.0 },
      { id: "plants", label: "Plants/Greenery", responses: 298, percentage: 24.0 }
    ]
  };

  const createChartOptions = (question: any, chartType: string) => {
    const baseOptions: ApexOptions = {
      chart: { height: 350 },
      title: { text: `${question.title} - ${chartType}` },
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5']
    };

    switch (chartType) {
      case 'Horizontal Bar':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'bar' },
          plotOptions: { bar: { horizontal: true } },
          xaxis: { categories: question.options.map((opt: any) => opt.label) }
        };
      case 'Stacked Bar':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'bar', stacked: true },
          xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] }
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
        <div className="flex gap-4 mt-2 text-sm flex-wrap">
          <Badge variant="outline">Total Responses: {question.totalResponses}</Badge>
          <Badge variant="outline">Total Options: {question.totalOptions}</Badge>
          <Badge variant="outline">Total Selections: {question.totalSelections}</Badge>
          <Badge variant="outline">Avg Selections/Person: {question.averageSelectionsPerPerson}</Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Horizontal Bar Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart 
              options={createChartOptions(question, 'Horizontal Bar')} 
              series={[{ name: 'Selections', data: question.options.map((opt: any) => opt.responses) }]} 
              type="bar" 
              height={350} 
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Stacked Bar - Quarterly</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart 
              options={createChartOptions(question, 'Stacked Bar')} 
              series={question.options.map((opt: any) => ({
                name: opt.label,
                data: [
                  Math.floor(opt.responses * 0.2),
                  Math.floor(opt.responses * 0.25),
                  Math.floor(opt.responses * 0.25),
                  Math.floor(opt.responses * 0.3)
                ]
              }))} 
              type="bar" 
              height={350} 
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Treemap View</CardTitle>
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
        <h2 className="text-2xl font-bold">Multi Select Questions - Individual Analysis</h2>
        <p className="text-gray-600">Each multi-select question with various chart visualizations</p>
      </div>

      {renderQuestionSection(benefitsQuestion, "bg-blue-50", "border-blue-500")}
      {renderQuestionSection(skillsQuestion, "bg-green-50", "border-green-500")}
      {renderQuestionSection(environmentQuestion, "bg-purple-50", "border-purple-500")}
    </div>
  );
};

export default MultiSelectChartsApex;
