
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const SingleSelectChartsApex = () => {
  // Question 1: Work Schedule Preference
  const workScheduleData = [
    { name: 'Remote Work', value: 561, percentage: 45 },
    { name: 'Hybrid', value: 374, percentage: 30 },
    { name: 'Office-based', value: 249, percentage: 20 },
    { name: 'Flexible', value: 63, percentage: 5 }
  ];

  // Question 2: Communication Method
  const communicationData = [
    { name: 'Email', value: 436, percentage: 35 },
    { name: 'Slack/Teams', value: 374, percentage: 30 },
    { name: 'Video Calls', value: 249, percentage: 20 },
    { name: 'In-Person', value: 125, percentage: 10 },
    { name: 'Phone Calls', value: 63, percentage: 5 }
  ];

  // Question 3: Meeting Frequency
  const meetingData = [
    { name: 'Daily', value: 187, percentage: 15 },
    { name: 'Weekly', value: 498, percentage: 40 },
    { name: 'Bi-weekly', value: 374, percentage: 30 },
    { name: 'Monthly', value: 125, percentage: 10 },
    { name: 'As needed', value: 63, percentage: 5 }
  ];

  // Charts for Question 1 - Work Schedule
  const workSchedulePieOptions: ApexOptions = {
    chart: { type: 'pie', height: 350 },
    title: { text: 'Work Schedule Preference Distribution' },
    labels: workScheduleData.map(item => item.name),
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560'],
    legend: { position: 'bottom' }
  };

  const workScheduleBarOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    title: { text: 'Work Schedule Preference Count' },
    xaxis: { categories: workScheduleData.map(item => item.name) },
    colors: ['#008FFB']
  };

  const workScheduleDonutOptions: ApexOptions = {
    chart: { type: 'donut', height: 350 },
    title: { text: 'Work Schedule Preference - Donut View' },
    labels: workScheduleData.map(item => item.name),
    colors: ['#775DD0', '#FEB019', '#FF4560', '#00E396']
  };

  // Charts for Question 2 - Communication
  const communicationRadialOptions: ApexOptions = {
    chart: { type: 'radialBar', height: 350 },
    title: { text: 'Communication Method Preferences' },
    labels: communicationData.map(item => item.name),
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']
  };

  const communicationAreaOptions: ApexOptions = {
    chart: { type: 'area', height: 350 },
    title: { text: 'Communication Method Usage' },
    xaxis: { categories: communicationData.map(item => item.name) },
    colors: ['#00E396']
  };

  const communicationPolarOptions: ApexOptions = {
    chart: { type: 'polarArea', height: 350 },
    title: { text: 'Communication Methods - Polar Area' },
    labels: communicationData.map(item => item.name),
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']
  };

  // Charts for Question 3 - Meeting Frequency
  const meetingColumnOptions: ApexOptions = {
    chart: { type: 'bar', height: 350 },
    title: { text: 'Preferred Meeting Frequency' },
    xaxis: { categories: meetingData.map(item => item.name) },
    colors: ['#FF4560']
  };

  const meetingTreemapOptions: ApexOptions = {
    chart: { type: 'treemap', height: 350 },
    title: { text: 'Meeting Frequency - Treemap View' },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']
  };

  const meetingRadarOptions: ApexOptions = {
    chart: { type: 'radar', height: 350 },
    title: { text: 'Meeting Frequency Pattern' },
    xaxis: { categories: meetingData.map(item => item.name) },
    colors: ['#775DD0']
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Single Select Questions - Individual Analysis</h2>
        <p className="text-gray-600">Each question analyzed with multiple chart types</p>
      </div>

      {/* Question 1: Work Schedule Preference */}
      <div className="space-y-4">
        <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-semibold text-blue-800">Question 1: What is your preferred work schedule?</h3>
          <p className="text-blue-600 mt-1">1,247 total responses</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pie Chart View</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={workSchedulePieOptions} 
                series={workScheduleData.map(item => item.value)} 
                type="pie" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Bar Chart View</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={workScheduleBarOptions} 
                series={[{ name: 'Responses', data: workScheduleData.map(item => item.value) }]} 
                type="bar" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Donut Chart View</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={workScheduleDonutOptions} 
                series={workScheduleData.map(item => item.value)} 
                type="donut" 
                height={350} 
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Question 2: Communication Method */}
      <div className="space-y-4">
        <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="text-xl font-semibold text-green-800">Question 2: What is your preferred communication method?</h3>
          <p className="text-green-600 mt-1">1,247 total responses</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Radial Bar Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={communicationRadialOptions} 
                series={communicationData.map(item => item.percentage)} 
                type="radialBar" 
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
                options={communicationAreaOptions} 
                series={[{ name: 'Responses', data: communicationData.map(item => item.value) }]} 
                type="area" 
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
                options={communicationPolarOptions} 
                series={communicationData.map(item => item.value)} 
                type="polarArea" 
                height={350} 
              />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Question 3: Meeting Frequency */}
      <div className="space-y-4">
        <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
          <h3 className="text-xl font-semibold text-purple-800">Question 3: How often do you prefer team meetings?</h3>
          <p className="text-purple-600 mt-1">1,247 total responses</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Column Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={meetingColumnOptions} 
                series={[{ name: 'Responses', data: meetingData.map(item => item.value) }]} 
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
                options={meetingTreemapOptions} 
                series={[{ data: meetingData.map(item => ({ x: item.name, y: item.value })) }]} 
                type="treemap" 
                height={350} 
              />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Radar Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <Chart 
                options={meetingRadarOptions} 
                series={[{ name: 'Frequency', data: meetingData.map(item => item.value) }]} 
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

export default SingleSelectChartsApex;
