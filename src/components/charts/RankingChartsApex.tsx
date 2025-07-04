
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const RankingChartsApex = () => {
  // Question 1: Job Factors Ranking
  const jobFactorsQuestion = {
    id: "q1_job_factors_ranking",
    title: "Rank these job factors by importance (1 = Most Important)",
    totalResponses: 1247,
    totalOptions: 5,
    options: [
      { id: "salary", label: "Salary", responses: 1247, percentage: 100, averageRank: 1.8 },
      { id: "work_life_balance", label: "Work-Life Balance", responses: 1247, percentage: 100, averageRank: 2.3 },
      { id: "career_growth", label: "Career Growth", responses: 1247, percentage: 100, averageRank: 2.9 },
      { id: "company_culture", label: "Company Culture", responses: 1247, percentage: 100, averageRank: 3.2 },
      { id: "benefits", label: "Benefits", responses: 1247, percentage: 100, averageRank: 3.8 }
    ]
  };

  // Question 2: Skills Priority Ranking
  const skillsPriorityQuestion = {
    id: "q2_skills_priority_ranking",
    title: "Rank these skills by development priority (1 = Highest Priority)",
    totalResponses: 1246,
    totalOptions: 5,
    options: [
      { id: "communication", label: "Communication", responses: 1246, percentage: 100, averageRank: 2.1 },
      { id: "technical_skills", label: "Technical Skills", responses: 1246, percentage: 100, averageRank: 2.4 },
      { id: "leadership", label: "Leadership", responses: 1246, percentage: 100, averageRank: 2.8 },
      { id: "problem_solving", label: "Problem Solving", responses: 1246, percentage: 100, averageRank: 3.1 },
      { id: "creativity", label: "Creativity", responses: 1246, percentage: 100, averageRank: 3.6 }
    ]
  };

  const createChartOptions = (question: any, chartType: string) => {
    const baseOptions: ApexOptions = {
      chart: { height: 350 },
      title: { text: `${question.title} - ${chartType}` },
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']
    };

    switch (chartType) {
      case 'Average Ranking':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'bar' },
          xaxis: { categories: question.options.map((opt: any) => opt.label) },
          yaxis: { reversed: true, title: { text: 'Average Rank (Lower is Better)' } }
        };
      case 'Horizontal Bar':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'bar' },
          plotOptions: { bar: { horizontal: true } },
          xaxis: { categories: question.options.map((opt: any) => opt.label) },
          yaxis: { reversed: true }
        };
      case 'Radar Chart':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'radar' },
          xaxis: { categories: question.options.map((opt: any) => opt.label) },
          yaxis: { reversed: true }
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
            <CardTitle className="text-lg">Average Rankings</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart 
              options={createChartOptions(question, 'Average Ranking')} 
              series={[{ name: 'Average Rank', data: question.options.map((opt: any) => opt.averageRank) }]} 
              type="bar" 
              height={350} 
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Horizontal Rankings</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart 
              options={createChartOptions(question, 'Horizontal Bar')} 
              series={[{ name: 'Average Rank', data: question.options.map((opt: any) => opt.averageRank) }]} 
              type="bar" 
              height={350} 
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Ranking Pattern</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart 
              options={createChartOptions(question, 'Radar Chart')} 
              series={[{ name: 'Priority Score', data: question.options.map((opt: any) => 6 - opt.averageRank) }]} 
              type="radar" 
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
        <h2 className="text-2xl font-bold">Ranking Questions - Individual Analysis</h2>
        <p className="text-gray-600">Priority ranking analysis for each question</p>
      </div>

      {renderQuestionSection(jobFactorsQuestion, "bg-blue-50", "border-blue-500")}
      {renderQuestionSection(skillsPriorityQuestion, "bg-green-50", "border-green-500")}
    </div>
  );
};

export default RankingChartsApex;
