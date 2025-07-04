
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const RatingChartsApex = () => {
  // Question 1: Job Satisfaction (1-5 scale)
  const jobSatisfactionData = [
    { rating: '1 Star', value: 25, percentage: 2.0 },
    { rating: '2 Stars', value: 62, percentage: 5.0 },
    { rating: '3 Stars', value: 249, percentage: 20.0 },
    { rating: '4 Stars', value: 561, percentage: 45.0 },
    { rating: '5 Stars', value: 350, percentage: 28.0 }
  ];

  // Question 2: Work-Life Balance (1-10 scale)
  const workLifeBalanceData = [
    { rating: '1', value: 12, percentage: 1.0 },
    { rating: '2', value: 25, percentage: 2.0 },
    { rating: '3', value: 62, percentage: 5.0 },
    { rating: '4', value: 87, percentage: 7.0 },
    { rating: '5', value: 125, percentage: 10.0 },
    { rating: '6', value: 187, percentage: 15.0 },
    { rating: '7', value: 312, percentage: 25.0 },
    { rating: '8', value: 274, percentage: 22.0 },
    { rating: '9', value: 124, percentage: 10.0 },
    { rating: '10', value: 37, percentage: 3.0 }
  ];

  // Question 3: Manager Support (1-5 scale)
  const managerSupportData = [
    { rating: '1 Star', value: 37, percentage: 3.0 },
    { rating: '2 Stars', value: 87, percentage: 7.0 },
    { rating: '3 Stars', value: 312, percentage: 25.0 },
    { rating: '4 Stars', value: 436, percentage: 35.0 },
    { rating: '5 Stars', value: 375, percentage: 30.0 }
  ];

  // Charts for Question 1 - Job Satisfaction
  const jobSatBarOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    title: { text: 'Job Satisfaction Rating Distribution' },
    xaxis: { categories: jobSatisfactionData.map(item => item.rating) },
    colors: ['#FF4560', '#FF8A80', '#FEB019', '#00E396', '#008FFB'],
    plotOptions: { bar: { distributed: true } }
  };

  const jobSatGaugeOptions: ApexOptions = {
    chart: { type: 'radialBar', height: 350 },
    title: { text: 'Average Job Satisfaction Score' },
    plotOptions: {
      radialBar: {
        startAngle: -90,
        endAngle: 90,
        dataLabels: {
          name: { fontSize: '16px', offsetY: 120 },
          value: { offsetY: 76, fontSize: '22px', formatter: (val) => (val * 0.05).toFixed(1) + '/5' }
        }
      }
    },
    labels: ['Job Satisfaction'],
    colors: ['#008FFB']
  };

  const jobSatAreaOptions: ApexOptions = {
    chart: { type: 'area', height: 350 },
    title: { text: 'Job Satisfaction Trend Over Time' },
    xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'] },
    colors: ['#00E396']
  };

  // Charts for Question 2 - Work-Life Balance
  const workLifeLineOptions: ApexOptions = {
    chart: { type: 'line', height: 350 },
    title: { text: 'Work-Life Balance Rating Distribution' },
    xaxis: { categories: workLifeBalanceData.map(item => item.rating) },
    colors: ['#775DD0']
  };

  const workLifeHeatmapOptions: ApexOptions = {
    chart: { type: 'heatmap', height: 350 },
    title: { text: 'Work-Life Balance by Department' },
    xaxis: { categories: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'] },
    colors: ['#008FFB']
  };

  const workLifeRadialOptions: ApexOptions = {
    chart: { type: 'radialBar', height: 350 },
    title: { text: 'Work-Life Balance Score' },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: { fontSize: '16px' },
          value: { fontSize: '22px', formatter: (val) => (val * 0.1).toFixed(1) + '/10' }
        }
      }
    },
    labels: ['Work-Life Balance'],
    colors: ['#775DD0']
  };

  // Charts for Question 3 - Manager Support
  const managerPieOptions: ApexOptions = {
    chart: { type: 'pie', height: 350 },
    title: { text: 'Manager Support Rating Distribution' },
    labels: managerSupportData.map(item => item.rating),
    colors: ['#FF4560', '#FF8A80', '#FEB019', '#00E396', '#008FFB']
  };

  const managerColumnOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    title: { text: 'Manager Support Ratings Count' },
    xaxis: { categories: managerSupportData.map(item => item.rating) },
    colors: ['#00E396']
  };

  const managerRadarOptions: ApexOptions = {
    chart: { type: 'radar', height: 350 },
    title: { text: 'Manager Support Across Departments' },
    xaxis: { categories: ['Engineering', 'Marketing', 'Sales', 'HR', 'Finance'] },
    colors: ['#FEB019']
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Rating Questions - Individual Analysis</h2>
        <p className="text-gray-600">Star ratings and numerical scales for each question</p>
      </div>

      {/* Question 1: Job Satisfaction */}
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-blue-800">Question 1: Rate your overall job satisfaction (1-5 stars)</h3>
          <p className="text-blue-600 mt-1">1,247 total responses • Average: 3.9/5 stars</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Rating Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={jobSatBarOptions} 
                series={[{ name: 'Responses', data: jobSatisfactionData.map(item => item.value) }]} 
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
                options={jobSatGaugeOptions} 
                series={[78]} 
                type="radialBar" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Satisfaction Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={jobSatAreaOptions} 
                series={[{ 
                  name: 'Average Rating', 
                  data: [3.2, 3.4, 3.6, 3.7, 3.8, 3.9] 
                }]} 
                type="area" 
                height={350} 
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Question 2: Work-Life Balance */}
      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-semibold text-green-800">Question 2: Rate your work-life balance (1-10 scale)</h3>
          <p className="text-green-600 mt-1">1,247 total responses • Average: 6.8/10</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Rating Distribution Line</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={workLifeLineOptions} 
                series={[{ name: 'Responses', data: workLifeBalanceData.map(item => item.value) }]} 
                type="line" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Department Heatmap</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={workLifeHeatmapOptions} 
                series={[
                  { name: 'Avg Rating', data: [
                    { x: 'Engineering', y: 7.2 },
                    { x: 'Marketing', y: 6.8 },
                    { x: 'Sales', y: 6.3 },
                    { x: 'HR', y: 7.5 },
                    { x: 'Finance', y: 6.9 }
                  ]}
                ]} 
                type="heatmap" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Overall Score Gauge</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={workLifeRadialOptions} 
                series={[68]} 
                type="radialBar" 
                height={350} 
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Question 3: Manager Support */}
      <div className="space-y-4">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-semibold text-purple-800">Question 3: Rate your manager's support (1-5 stars)</h3>
          <p className="text-purple-600 mt-1">1,247 total responses • Average: 3.8/5 stars</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Rating Distribution Pie</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={managerPieOptions} 
                series={managerSupportData.map(item => item.value)} 
                type="pie" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Support Ratings Count</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={managerColumnOptions} 
                series={[{ name: 'Responses', data: managerSupportData.map(item => item.value) }]} 
                type="bar" 
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
                options={managerRadarOptions} 
                series={[{ 
                  name: 'Manager Support', 
                  data: [4.1, 3.7, 3.5, 4.2, 3.9] 
                }]} 
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

export default RatingChartsApex;
