
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const LikertScaleChartsApex = () => {
  // Question 1: Work-Life Balance Statement
  const workLifeBalanceData = [
    { category: 'Strongly Disagree', value: 25, percentage: 2 },
    { category: 'Disagree', value: 100, percentage: 8 },
    { category: 'Neutral', value: 249, percentage: 20 },
    { category: 'Agree', value: 498, percentage: 40 },
    { category: 'Strongly Agree', value: 375, percentage: 30 }
  ];

  // Question 2: Management Support Statement
  const managementSupportData = [
    { category: 'Strongly Disagree', value: 37, percentage: 3 },
    { category: 'Disagree', value: 150, percentage: 12 },
    { category: 'Neutral', value: 312, percentage: 25 },
    { category: 'Agree', value: 436, percentage: 35 },
    { category: 'Strongly Agree', value: 312, percentage: 25 }
  ];

  // Question 3: Growth Opportunities Statement
  const growthOpportunitiesData = [
    { category: 'Strongly Disagree', value: 62, percentage: 5 },
    { category: 'Disagree', value: 187, percentage: 15 },
    { category: 'Neutral', value: 374, percentage: 30 },
    { category: 'Agree', value: 436, percentage: 35 },
    { category: 'Strongly Agree', value: 187, percentage: 15 }
  ];

  // Charts for Question 1 - Work-Life Balance
  const workLifeHorizontalOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    title: { text: 'Work-Life Balance Agreement Levels' },
    plotOptions: { bar: { horizontal: true } },
    xaxis: { categories: workLifeBalanceData.map(item => item.category) },
    colors: ['#FF4560', '#FF8A80', '#FEB019', '#00E396', '#008FFB']
  };

  const workLifeStackedOptions: ApexOptions = {
    chart: { type: 'bar', height: 350, stacked: true },
    title: { text: 'Work-Life Balance - Stacked Analysis' },
    xaxis: { categories: ['All Responses'] },
    colors: ['#FF4560', '#FF8A80', '#FEB019', '#00E396', '#008FFB']
  };

  const workLifeDonutOptions: ApexOptions = {
    chart: { type: 'donut', height: 350 },
    title: { text: 'Work-Life Balance Agreement Distribution' },
    labels: workLifeBalanceData.map(item => item.category),
    colors: ['#FF4560', '#FF8A80', '#FEB019', '#00E396', '#008FFB']
  };

  // Charts for Question 2 - Management Support
  const managementAreaOptions: ApexOptions = {
    chart: { type: 'area', height: 350 },
    title: { text: 'Management Support Over Time' },
    xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
    colors: ['#00E396', '#008FFB', '#FEB019', '#FF4560', '#775DD0']
  };

  const managementRadarOptions: ApexOptions = {
    chart: { type: 'radar', height: 350 },
    title: { text: 'Management Support by Department' },
    xaxis: { categories: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'] },
    colors: ['#775DD0']
  };

  const managementColumnOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    title: { text: 'Management Support Response Count' },
    xaxis: { categories: managementSupportData.map(item => item.category) },
    colors: ['#775DD0']
  };

  // Charts for Question 3 - Growth Opportunities
  const growthPolarOptions: ApexOptions = {
    chart: { type: 'polarArea', height: 350 },
    title: { text: 'Growth Opportunities Agreement' },
    labels: growthOpportunitiesData.map(item => item.category),
    colors: ['#FF4560', '#FF8A80', '#FEB019', '#00E396', '#008FFB']
  };

  const growthHeatmapOptions: ApexOptions = {
    chart: { type: 'heatmap', height: 350 },
    title: { text: 'Growth Opportunities by Experience Level' },
    xaxis: { categories: ['0-2 years', '3-5 years', '6-10 years', '10+ years'] },
    colors: ['#FEB019']
  };

  const growthTreemapOptions: ApexOptions = {
    chart: { type: 'treemap', height: 350 },
    title: { text: 'Growth Opportunities Response Volume' },
    colors: ['#FF4560', '#FF8A80', '#FEB019', '#00E396', '#008FFB']
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Likert Scale Questions - Individual Analysis</h2>
        <p className="text-gray-600">Agreement scale responses for each statement</p>
      </div>

      {/* Question 1: Work-Life Balance Statement */}
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-blue-800">Question 1: "Our company values work-life balance"</h3>
          <p className="text-blue-600 mt-1">1,247 total responses • Net Agreement: 70% • Top-2-Box: 873 responses</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Horizontal Bar Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={workLifeHorizontalOptions} 
                series={[{ name: 'Responses', data: workLifeBalanceData.map(item => item.value) }]} 
                type="bar" 
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
                options={workLifeStackedOptions} 
                series={workLifeBalanceData.map(item => ({
                  name: item.category,
                  data: [item.value]
                }))} 
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
                options={workLifeDonutOptions} 
                series={workLifeBalanceData.map(item => item.value)} 
                type="donut" 
                height={350} 
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Question 2: Management Support Statement */}
      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-semibold text-green-800">Question 2: "Management is supportive and approachable"</h3>
          <p className="text-green-600 mt-1">1,247 total responses • Net Agreement: 60% • Top-2-Box: 748 responses</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quarterly Trend Area</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={managementAreaOptions} 
                series={managementSupportData.map(item => ({
                  name: item.category,
                  data: [
                    Math.floor(item.value * 0.8),
                    Math.floor(item.value * 0.9),
                    Math.floor(item.value * 0.95),
                    item.value
                  ]
                }))} 
                type="area" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Support by Department</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={managementRadarOptions} 
                series={[{ 
                  name: 'Agreement Score', 
                  data: [3.8, 3.5, 3.2, 4.1, 3.7] 
                }]} 
                type="radar" 
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
                options={managementColumnOptions} 
                series={[{ name: 'Responses', data: managementSupportData.map(item => item.value) }]} 
                type="bar" 
                height={350} 
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Question 3: Growth Opportunities Statement */}
      <div className="space-y-4">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-semibold text-purple-800">Question 3: "I have adequate growth opportunities at this company"</h3>
          <p className="text-purple-600 mt-1">1,246 total responses • Net Agreement: 50% • Top-2-Box: 623 responses</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Polar Area Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={growthPolarOptions} 
                series={growthOpportunitiesData.map(item => item.value)} 
                type="polarArea" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Experience Level Heatmap</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={growthHeatmapOptions} 
                series={[
                  { name: 'Strongly Agree', data: [
                    { x: '0-2 years', y: 4.2 },
                    { x: '3-5 years', y: 3.1 },
                    { x: '6-10 years', y: 2.8 },
                    { x: '10+ years', y: 2.3 }
                  ]},
                  { name: 'Agree', data: [
                    { x: '0-2 years', y: 3.8 },
                    { x: '3-5 years', y: 3.5 },
                    { x: '6-10 years', y: 3.2 },
                    { x: '10+ years', y: 2.9 }
                  ]}
                ]} 
                type="heatmap" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Response Volume Treemap</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={growthTreemapOptions} 
                series={[{ data: growthOpportunitiesData.map(item => ({ x: item.category, y: item.value })) }]} 
                type="treemap" 
                height={350} 
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default LikertScaleChartsApex;
