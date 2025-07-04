
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const RankingChartsApex = () => {
  // Question 1: Job Factors Ranking
  const jobFactorsData = [
    { factor: 'Salary', averageRank: 1.8, rank1: 561, rank2: 436, rank3: 187, rank4: 37, rank5: 25 },
    { factor: 'Work-Life Balance', averageRank: 2.3, rank1: 312, rank2: 498, rank3: 312, rank4: 100, rank5: 25 },
    { factor: 'Career Growth', averageRank: 2.9, rank1: 187, rank2: 249, rank3: 436, rank4: 312, rank5: 62 },
    { factor: 'Company Culture', averageRank: 3.2, rank1: 100, rank2: 187, rank3: 374, rank4: 436, rank5: 150 },
    { factor: 'Benefits', averageRank: 3.8, rank1: 87, rank2: 125, rank3: 187, rank4: 436, rank5: 411 }
  ];

  // Question 2: Skills Priority Ranking
  const skillsPriorityData = [
    { skill: 'Communication', averageRank: 2.1, rank1: 436, rank2: 374, rank3: 249, rank4: 125, rank5: 62 },
    { skill: 'Technical Skills', averageRank: 2.4, rank1: 312, rank2: 436, rank3: 312, rank4: 150, rank5: 37 },
    { skill: 'Leadership', averageRank: 2.8, rank1: 249, rank2: 312, rank3: 374, rank4: 249, rank5: 62 },
    { skill: 'Problem Solving', averageRank: 3.1, rank1: 187, rank2: 249, rank3: 374, rank4: 312, rank5: 125 },
    { skill: 'Creativity', averageRank: 3.6, rank1: 62, rank2: 125, rank3: 249, rank4: 436, rank5: 374 }
  ];

  // Charts for Question 1 - Job Factors
  const jobFactorsBarOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    title: { text: 'Job Factors - Average Ranking (Lower is Better)' },
    xaxis: { categories: jobFactorsData.map(item => item.factor) },
    yaxis: { reversed: true, title: { text: 'Average Rank' } },
    colors: ['#00E396']
  };

  const jobFactorsStackedOptions: ApexOptions = {
    chart: { type: 'bar', height: 350, stacked: true },
    title: { text: 'Job Factors - Ranking Distribution' },
    xaxis: { categories: jobFactorsData.map(item => item.factor) },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']
  };

  const jobFactorsHeatmapOptions: ApexOptions = {
    chart: { type: 'heatmap', height: 350 },
    title: { text: 'Job Factors Ranking Heatmap' },
    xaxis: { categories: ['Rank 1', 'Rank 2', 'Rank 3', 'Rank 4', 'Rank 5'] },
    colors: ['#008FFB']
  };

  // Charts for Question 2 - Skills Priority
  const skillsHorizontalOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    plotOptions: { bar: { horizontal: true } },
    title: { text: 'Skills Priority - Average Ranking' },
    xaxis: { categories: skillsPriorityData.map(item => item.skill) },
    yaxis: { reversed: true },
    colors: ['#775DD0']
  };

  const skillsTreemapOptions: ApexOptions = {
    chart: { type: 'treemap', height: 350 },
    title: { text: 'Skills Priority - First Choice Volume' },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']
  };

  const skillsRadarOptions: ApexOptions = {
    chart: { type: 'radar', height: 350 },
    title: { text: 'Skills Priority vs Current Proficiency' },
    xaxis: { categories: skillsPriorityData.map(item => item.skill) },
    colors: ['#008FFB', '#00E396']
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Ranking Questions - Individual Analysis</h2>
        <p className="text-gray-600">Priority ranking analysis for each question</p>
      </div>

      {/* Question 1: Job Factors Ranking */}
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-blue-800">Question 1: Rank these job factors by importance (1 = Most Important)</h3>
          <p className="text-blue-600 mt-1">1,247 total responses • Kendall's Tau: 0.67 • Ranking Consensus: 73%</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Average Ranking Results</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={jobFactorsBarOptions} 
                series={[{ name: 'Average Rank', data: jobFactorsData.map(item => item.averageRank) }]} 
                type="bar" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ranking Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={jobFactorsStackedOptions} 
                series={[
                  { name: 'Rank 1', data: jobFactorsData.map(item => item.rank1) },
                  { name: 'Rank 2', data: jobFactorsData.map(item => item.rank2) },
                  { name: 'Rank 3', data: jobFactorsData.map(item => item.rank3) },
                  { name: 'Rank 4', data: jobFactorsData.map(item => item.rank4) },
                  { name: 'Rank 5', data: jobFactorsData.map(item => item.rank5) }
                ]} 
                type="bar" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Ranking Pattern Heatmap</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={jobFactorsHeatmapOptions} 
                series={jobFactorsData.map(item => ({
                  name: item.factor,
                  data: [
                    { x: 'Rank 1', y: item.rank1 },
                    { x: 'Rank 2', y: item.rank2 },
                    { x: 'Rank 3', y: item.rank3 },
                    { x: 'Rank 4', y: item.rank4 },
                    { x: 'Rank 5', y: item.rank5 }
                  ]
                }))} 
                type="heatmap" 
                height={350} 
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Question 2: Skills Priority Ranking */}
      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-semibold text-green-800">Question 2: Rank these skills by development priority (1 = Highest Priority)</h3>
          <p className="text-green-600 mt-1">1,246 total responses • Kendall's Tau: 0.72 • Ranking Consensus: 78%</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Skills Priority Ranking</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={skillsHorizontalOptions} 
                series={[{ name: 'Average Rank', data: skillsPriorityData.map(item => item.averageRank) }]} 
                type="bar" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">First Choice Volume</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={skillsTreemapOptions} 
                series={[{ data: skillsPriorityData.map(item => ({ x: item.skill, y: item.rank1 })) }]} 
                type="treemap" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Priority vs Proficiency</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={skillsRadarOptions} 
                series={[
                  { name: 'Development Priority', data: skillsPriorityData.map(item => 6 - item.averageRank) },
                  { name: 'Current Proficiency', data: [4.2, 3.8, 3.1, 4.1, 2.9] }
                ]} 
                type="radar" 
                height={350} 
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RankingChartsApex;
