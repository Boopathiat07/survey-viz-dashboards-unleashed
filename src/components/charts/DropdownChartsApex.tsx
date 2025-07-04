
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const DropdownChartsApex = () => {
  // Question 1: Department Selection
  const departmentData = [
    { name: 'Engineering', value: 289, percentage: 23.2 },
    { name: 'Sales', value: 234, percentage: 18.8 },
    { name: 'Marketing', value: 187, percentage: 15.0 },
    { name: 'Operations', value: 187, percentage: 15.0 },
    { name: 'HR', value: 156, percentage: 12.5 },
    { name: 'Finance', value: 143, percentage: 11.5 },
    { name: 'Legal', value: 25, percentage: 2.0 },
    { name: 'Other', value: 26, percentage: 2.1 }
  ];

  // Question 2: Education Level
  const educationData = [
    { name: 'Bachelor\'s Degree', value: 498, percentage: 40.0 },
    { name: 'Master\'s Degree', value: 374, percentage: 30.0 },
    { name: 'High School', value: 187, percentage: 15.0 },
    { name: 'PhD/Doctorate', value: 125, percentage: 10.0 },
    { name: 'Associate Degree', value: 63, percentage: 5.0 }
  ];

  // Question 3: Experience Level
  const experienceData = [
    { name: '3-5 years', value: 374, percentage: 30.0 },
    { name: '0-2 years', value: 312, percentage: 25.0 },
    { name: '6-10 years', value: 348, percentage: 27.9 },
    { name: '10+ years', value: 213, percentage: 17.1 }
  ];

  // Charts for Question 1 - Department
  const deptPieOptions: ApexOptions = {
    chart: { type: 'pie', height: 350 },
    title: { text: 'Department Distribution' },
    labels: departmentData.map(item => item.name),
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5', '#E91E63', '#9C27B0']
  };

  const deptTreemapOptions: ApexOptions = {
    chart: { type: 'treemap', height: 350 },
    title: { text: 'Department Hierarchy - Size by Count' },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5', '#E91E63', '#9C27B0']
  };

  const deptColumnOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    title: { text: 'Department Response Count' },
    xaxis: { categories: departmentData.map(item => item.name) },
    colors: ['#008FFB']
  };

  // Charts for Question 2 - Education
  const educationDonutOptions: ApexOptions = {
    chart: { type: 'donut', height: 350 },
    title: { text: 'Education Level Distribution' },
    labels: educationData.map(item => item.name),
    colors: ['#775DD0', '#FEB019', '#FF4560', '#00E396', '#008FFB']
  };

  const educationRadialOptions: ApexOptions = {
    chart: { type: 'radialBar', height: 350 },
    title: { text: 'Education Level Percentages' },
    labels: educationData.map(item => item.name),
    colors: ['#775DD0', '#FEB019', '#FF4560', '#00E396', '#008FFB']
  };

  const educationPolarOptions: ApexOptions = {
    chart: { type: 'polarArea', height: 350 },
    title: { text: 'Education Level - Polar Area' },
    labels: educationData.map(item => item.name),
    colors: ['#775DD0', '#FEB019', '#FF4560', '#00E396', '#008FFB']
  };

  // Charts for Question 3 - Experience
  const experienceAreaOptions: ApexOptions = {
    chart: { type: 'area', height: 350 },
    title: { text: 'Experience Level Over Time' },
    xaxis: { categories: ['2021', '2022', '2023', '2024'] },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560']
  };

  const experienceRadarOptions: ApexOptions = {
    chart: { type: 'radar', height: 350 },
    title: { text: 'Experience Distribution by Department' },
    xaxis: { categories: experienceData.map(item => item.name) },
    colors: ['#FEB019', '#00E396', '#775DD0']
  };

  const experienceHeatmapOptions: ApexOptions = {
    chart: { type: 'heatmap', height: 350 },
    title: { text: 'Experience vs Department Heatmap' },
    xaxis: { categories: ['Engineering', 'Sales', 'Marketing', 'Operations'] },
    colors: ['#008FFB']
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Dropdown Questions - Individual Analysis</h2>
        <p className="text-gray-600">Categorical selection analysis for each dropdown question</p>
      </div>

      {/* Question 1: Department Selection */}
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-blue-800">Question 1: Select your department</h3>
          <p className="text-blue-600 mt-1">1,247 total responses • 8 departments • Diversity Index: 0.78</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Department Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={deptPieOptions} 
                series={departmentData.map(item => item.value)} 
                type="pie" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Department Hierarchy</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={deptTreemapOptions} 
                series={[{ data: departmentData.map(item => ({ x: item.name, y: item.value })) }]} 
                type="treemap" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Response Count by Department</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={deptColumnOptions} 
                series={[{ name: 'Responses', data: departmentData.map(item => item.value) }]} 
                type="bar" 
                height={350} 
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Question 2: Education Level */}
      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-semibold text-green-800">Question 2: What is your highest education level?</h3>
          <p className="text-green-600 mt-1">1,247 total responses • 5 education levels</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Education Distribution Donut</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={educationDonutOptions} 
                series={educationData.map(item => item.value)} 
                type="donut" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Education Level Radial</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={educationRadialOptions} 
                series={educationData.map(item => item.percentage)} 
                type="radialBar" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Education Polar Area</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={educationPolarOptions} 
                series={educationData.map(item => item.value)} 
                type="polarArea" 
                height={350} 
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Question 3: Experience Level */}
      <div className="space-y-4">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-semibold text-purple-800">Question 3: How many years of experience do you have?</h3>
          <p className="text-purple-600 mt-1">1,247 total responses • 4 experience ranges</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Experience Trend Over Years</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={experienceAreaOptions} 
                series={experienceData.map(item => ({
                  name: item.name,
                  data: [
                    Math.floor(item.value * 0.7),
                    Math.floor(item.value * 0.8),
                    Math.floor(item.value * 0.9),
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
              <CardTitle className="text-lg">Experience by Department</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={experienceRadarOptions} 
                series={[
                  { name: 'Engineering', data: [25, 30, 28, 17] },
                  { name: 'Sales', data: [28, 32, 25, 15] },
                  { name: 'Marketing', data: [30, 28, 27, 15] }
                ]} 
                type="radar" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Experience vs Department</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={experienceHeatmapOptions} 
                series={experienceData.map(item => ({
                  name: item.name,
                  data: [
                    { x: 'Engineering', y: Math.floor(item.value * 0.25) },
                    { x: 'Sales', y: Math.floor(item.value * 0.20) },
                    { x: 'Marketing', y: Math.floor(item.value * 0.18) },
                    { x: 'Operations', y: Math.floor(item.value * 0.15) }
                  ]
                }))} 
                type="heatmap" 
                height={350} 
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DropdownChartsApex;
