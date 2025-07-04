
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const MultiSelectChartsApex = () => {
  // Question 1: Benefits Selection
  const benefitsData = [
    { name: 'Health Insurance', responses: 1085, percentage: 87 },
    { name: 'Flexible Hours', responses: 948, percentage: 76 },
    { name: 'Remote Work', responses: 761, percentage: 61 },
    { name: 'Professional Development', responses: 598, percentage: 48 },
    { name: 'Gym Membership', responses: 337, percentage: 27 },
    { name: 'Free Meals', responses: 262, percentage: 21 }
  ];

  // Question 2: Skills Development
  const skillsData = [
    { name: 'Communication', responses: 976, percentage: 78 },
    { name: 'Problem Solving', responses: 856, percentage: 69 },
    { name: 'Leadership', responses: 689, percentage: 55 },
    { name: 'Technical Skills', responses: 641, percentage: 51 },
    { name: 'Creativity', responses: 535, percentage: 43 },
    { name: 'Time Management', responses: 487, percentage: 39 }
  ];

  // Question 3: Work Environment Preferences
  const environmentData = [
    { name: 'Quiet Spaces', responses: 823, percentage: 66 },
    { name: 'Collaborative Areas', responses: 734, percentage: 59 },
    { name: 'Natural Light', responses: 698, percentage: 56 },
    { name: 'Ergonomic Furniture', responses: 587, percentage: 47 },
    { name: 'Temperature Control', responses: 456, percentage: 37 },
    { name: 'Plants/Greenery', responses: 298, percentage: 24 }
  ];

  // Charts for Question 1 - Benefits
  const benefitsStackedOptions: ApexOptions = {
    chart: { type: 'bar', height: 350, stacked: true },
    title: { text: 'Benefits Selection by Quarter' },
    xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5']
  };

  const benefitsHorizontalOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    plotOptions: { bar: { horizontal: true } },
    title: { text: 'Benefits Selection Count' },
    xaxis: { categories: benefitsData.map(item => item.name) },
    colors: ['#00E396']
  };

  const benefitsPieOptions: ApexOptions = {
    chart: { type: 'pie', height: 350 },
    title: { text: 'Benefits Distribution' },
    labels: benefitsData.map(item => item.name),
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5']
  };

  // Charts for Question 2 - Skills
  const skillsAreaOptions: ApexOptions = {
    chart: { type: 'area', height: 350, stacked: true },
    title: { text: 'Skills Development Over Time' },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5']
  };

  const skillsRadarOptions: ApexOptions = {
    chart: { type: 'radar', height: 350 },
    title: { text: 'Skills Importance vs Current Level' },
    xaxis: { categories: skillsData.map(item => item.name) },
    colors: ['#008FFB', '#00E396']
  };

  const skillsTreemapOptions: ApexOptions = {
    chart: { type: 'treemap', height: 350 },
    title: { text: 'Skills Selection - Treemap' },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5']
  };

  // Charts for Question 3 - Environment
  const environmentMixedOptions: ApexOptions = {
    chart: { type: 'line', height: 350 },
    title: { text: 'Environment Preferences - Mixed Chart' },
    xaxis: { categories: environmentData.map(item => item.name) },
    yaxis: [
      { title: { text: 'Number of Responses' } },
      { opposite: true, title: { text: 'Percentage' } }
    ],
    colors: ['#008FFB', '#00E396']
  };

  const environmentBubbleOptions: ApexOptions = {
    chart: { type: 'bubble', height: 350 },
    title: { text: 'Environment Preferences - Bubble View' },
    xaxis: { title: { text: 'Importance Score' } },
    yaxis: { title: { text: 'Selection Count' } },
    colors: ['#775DD0']
  };

  const environmentPolarOptions: ApexOptions = {
    chart: { type: 'polarArea', height: 350 },
    title: { text: 'Environment Preferences - Polar Area' },
    labels: environmentData.map(item => item.name),
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5']
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Multi Select Questions - Individual Analysis</h2>
        <p className="text-gray-600">Each multi-select question with various chart visualizations</p>
      </div>

      {/* Question 1: Benefits Selection */}
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-blue-800">Question 1: Which benefits are most important to you? (Select all that apply)</h3>
          <p className="text-blue-600 mt-1">1,247 respondents • 3,986 total selections • Avg 3.2 selections per person</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Stacked Bar - Quarterly Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={benefitsStackedOptions} 
                series={benefitsData.map(item => ({
                  name: item.name,
                  data: [
                    Math.floor(item.responses * 0.2),
                    Math.floor(item.responses * 0.25),
                    Math.floor(item.responses * 0.25),
                    Math.floor(item.responses * 0.3)
                  ]
                }))} 
                type="bar" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Horizontal Bar Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={benefitsHorizontalOptions} 
                series={[{ name: 'Selections', data: benefitsData.map(item => item.responses) }]} 
                type="bar" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Distribution Pie Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={benefitsPieOptions} 
                series={benefitsData.map(item => item.responses)} 
                type="pie" 
                height={350} 
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Question 2: Skills Development */}
      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-semibold text-green-800">Question 2: What skills would you like to develop? (Choose up to 4)</h3>
          <p className="text-green-600 mt-1">1,189 respondents • 2,854 total selections • Avg 2.4 selections per person</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Stacked Area - Time Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={skillsAreaOptions} 
                series={skillsData.slice(0, 4).map(item => ({
                  name: item.name,
                  data: [
                    Math.floor(item.responses * 0.6),
                    Math.floor(item.responses * 0.7),
                    Math.floor(item.responses * 0.85),
                    Math.floor(item.responses * 0.9),
                    Math.floor(item.responses * 0.95),
                    item.responses
                  ]
                }))} 
                type="area" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Skills Comparison Radar</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={skillsRadarOptions} 
                series={[
                  { name: 'Current Interest', data: skillsData.map(item => item.percentage) },
                  { name: 'Expected Demand', data: skillsData.map(item => Math.min(item.percentage + 10, 100)) }
                ]} 
                type="radar" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Skills Treemap</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={skillsTreemapOptions} 
                series={[{ data: skillsData.map(item => ({ x: item.name, y: item.responses })) }]} 
                type="treemap" 
                height={350} 
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Question 3: Work Environment */}
      <div className="space-y-4">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-semibold text-purple-800">Question 3: What work environment features are important? (Select all that apply)</h3>
          <p className="text-purple-600 mt-1">1,247 respondents • 3,596 total selections • Avg 2.9 selections per person</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Mixed Chart (Bar + Line)</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={environmentMixedOptions} 
                series={[
                  { name: 'Responses', type: 'column', data: environmentData.map(item => item.responses) },
                  { name: 'Percentage', type: 'line', data: environmentData.map(item => item.percentage) }
                ]} 
                type="line" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Bubble Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={environmentBubbleOptions} 
                series={[{
                  name: 'Environment Features',
                  data: environmentData.map((item, index) => [
                    (index + 1) * 15,
                    item.responses,
                    item.percentage
                  ])
                }]} 
                type="bubble" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Polar Area Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={environmentPolarOptions} 
                series={environmentData.map(item => item.responses)} 
                type="polarArea" 
                height={350} 
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MultiSelectChartsApex;
