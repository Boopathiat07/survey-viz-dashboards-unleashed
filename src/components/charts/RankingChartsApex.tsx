
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const RankingChartsApex = () => {
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

  const createChartOptions = (question: any): ApexOptions => {
    return {
      chart: { 
        height: 350,
        type: 'heatmap' as const
      },
      xaxis: { 
        categories: ['Priority'],
        labels: { show: false }
      },
      yaxis: { 
        labels: { show: false }
      },
      colors: ['#008FFB'],
      dataLabels: { enabled: false },
      legend: { show: false },
      tooltip: { 
        y: { formatter: (val: number) => `Average rank: ${val.toFixed(1)}` }
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
            series={[{ 
              name: 'Priority',
              data: question.options.map((opt: any) => ({
                x: 'Priority',
                y: 6 - opt.averageRank
              }))
            }]} 
            type="heatmap" 
            height={350} 
          />
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Ranking Questions</h2>
      </div>
      {renderQuestionSection(jobFactorsQuestion, "bg-blue-50", "border-blue-500")}
    </div>
  );
};

export default RankingChartsApex;
