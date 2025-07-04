
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const DateAnalysisChartsApex = () => {
  // Question 1: Last Training Date
  const trainingData = [
    { month: 'Jan 2024', responses: 145 },
    { month: 'Feb 2024', responses: 167 },
    { month: 'Mar 2024', responses: 189 },
    { month: 'Apr 2024', responses: 178 },
    { month: 'May 2024', responses: 156 },
    { month: 'Jun 2024', responses: 134 },
    { month: 'Jul 2024', responses: 98 },
    { month: 'Aug 2024', responses: 76 },
    { month: 'Sep 2024', responses: 54 },
    { month: 'Oct 2024', responses: 32 },
    { month: 'Nov 2024', responses: 18 }
  ];

  // Question 2: Project Start Date
  const projectStartData = [
    { quarter: 'Q1 2024', count: 312, percentage: 25.0 },
    { quarter: 'Q2 2024', count: 436, percentage: 35.0 },
    { quarter: 'Q3 2024', count: 374, percentage: 30.0 },
    { quarter: 'Q4 2024', count: 125, percentage: 10.0 }
  ];

  // Question 3: Performance Review Date
  const reviewData = [
    { week: 'Week 1', mon: 8, tue: 7, wed: 9, thu: 6, fri: 5 },
    { week: 'Week 2', mon: 6, tue: 8, wed: 5, thu: 7, fri: 9 },
    { week: 'Week 3', mon: 9, tue: 4, wed: 7, thu: 8, fri: 6 },
    { week: 'Week 4', mon: 5, tue: 6, wed: 8, thu: 7, fri: 4 }
  ];

  // Charts for Question 1 - Training Timeline
  const trainingLineOptions: ApexOptions = {
    chart: { type: 'line', height: 350 },
    title: { text: 'Training Attendance Timeline' },
    xaxis: { categories: trainingData.map(item => item.month) },
    colors: ['#008FFB']
  };

  const trainingAreaOptions: ApexOptions = {
    chart: { type: 'area', height: 350 },
    title: { text: 'Training Participation Over Time' },
    xaxis: { categories: trainingData.map(item => item.month) },
    colors: ['#00E396']
  };

  const trainingColumnOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    title: { text: 'Monthly Training Attendance' },
    xaxis: { categories: trainingData.map(item => item.month) },
    colors: ['#FEB019']
  };

  // Charts for Question 2 - Project Start Dates
  const projectPieOptions: ApexOptions = {
    chart: { type: 'pie', height: 350 },
    title: { text: 'Project Start Distribution by Quarter' },
    labels: projectStartData.map(item => item.quarter),
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560']
  };

  const projectRadialOptions: ApexOptions = {
    chart: { type: 'radialBar', height: 350 },
    title: { text: 'Project Start Quarters' },
    labels: projectStartData.map(item => item.quarter),
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560']
  };

  const projectTreemapOptions: ApexOptions = {
    chart: { type: 'treemap', height: 350 },
    title: { text: 'Project Volume by Quarter' },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560']
  };

  // Charts for Question 3 - Review Dates
  const reviewHeatmapOptions: ApexOptions = {
    chart: { type: 'heatmap', height: 350 },
    title: { text: 'Performance Review Schedule Heatmap' },
    xaxis: { categories: ['Week 1', 'Week 2', 'Week 3', 'Week 4'] },
    colors: ['#008FFB']
  };

  const reviewStackedOptions: ApexOptions = {
    chart: { type: 'bar', height: 350, stacked: true },
    title: { text: 'Review Distribution by Day of Week' },
    xaxis: { categories: reviewData.map(item => item.week) },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']
  };

  const reviewRadarOptions: ApexOptions = {
    chart: { type: 'radar', height: 350 },
    title: { text: 'Weekly Review Pattern' },
    xaxis: { categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'] },
    colors: ['#775DD0', '#FEB019', '#FF4560', '#00E396']
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Date Analysis Questions - Individual Analysis</h2>
        <p className="text-gray-600">Temporal patterns and date-based insights for each question</p>
      </div>

      {/* Question 1: Training Timeline */}
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-blue-800">Question 1: When did you last attend a training session?</h3>
          <p className="text-blue-600 mt-1">1,247 total responses • Date range: Jan 2024 - Nov 2024 • Peak: Mar 2024</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Timeline Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={trainingLineOptions} 
                series={[{ name: 'Training Attendance', data: trainingData.map(item => item.responses) }]} 
                type="line" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Area Chart View</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={trainingAreaOptions} 
                series={[{ name: 'Participants', data: trainingData.map(item => item.responses) }]} 
                type="area" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Monthly Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={trainingColumnOptions} 
                series={[{ name: 'Responses', data: trainingData.map(item => item.responses) }]} 
                type="bar" 
                height={350} 
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Question 2: Project Start Dates */}
      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-semibold text-green-800">Question 2: When did your current project start?</h3>
          <p className="text-green-600 mt-1">1,247 total responses • Quarterly distribution • Peak: Q2 2024 (35%)</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Quarterly Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={projectPieOptions} 
                series={projectStartData.map(item => item.count)} 
                type="pie" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Radial Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={projectRadialOptions} 
                series={projectStartData.map(item => item.percentage)} 
                type="radialBar" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Project Volume Treemap</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={projectTreemapOptions} 
                series={[{ data: projectStartData.map(item => ({ x: item.quarter, y: item.count })) }]} 
                type="treemap" 
                height={350} 
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Question 3: Performance Review Dates */}
      <div className="space-y-4">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-semibold text-purple-800">Question 3: When was your last performance review?</h3>
          <p className="text-purple-600 mt-1">1,247 total responses • Weekly and daily patterns analyzed</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Weekly Activity Heatmap</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={reviewHeatmapOptions} 
                series={[
                  { name: 'Mon', data: reviewData.map(item => ({ x: item.week, y: item.mon })) },
                  { name: 'Tue', data: reviewData.map(item => ({ x: item.week, y: item.tue })) },
                  { name: 'Wed', data: reviewData.map(item => ({ x: item.week, y: item.wed })) },
                  { name: 'Thu', data: reviewData.map(item => ({ x: item.week, y: item.thu })) },
                  { name: 'Fri', data: reviewData.map(item => ({ x: item.week, y: item.fri })) }
                ]} 
                type="heatmap" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Day of Week Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={reviewStackedOptions} 
                series={[
                  { name: 'Monday', data: reviewData.map(item => item.mon) },
                  { name: 'Tuesday', data: reviewData.map(item => item.tue) },
                  { name: 'Wednesday', data: reviewData.map(item => item.wed) },
                  { name: 'Thursday', data: reviewData.map(item => item.thu) },
                  { name: 'Friday', data: reviewData.map(item => item.fri) }
                ]} 
                type="bar" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Weekly Pattern Radar</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={reviewRadarOptions} 
                series={reviewData.map((item, index) => ({
                  name: item.week,
                  data: [item.mon, item.tue, item.wed, item.thu, item.fri]
                }))} 
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

export default DateAnalysisChartsApex;
