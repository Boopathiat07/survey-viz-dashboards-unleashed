
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const DropdownChartsApex = () => {
  const departmentData = [
    { name: 'Engineering', value: 289, percentage: 23.2 },
    { name: 'Sales', value: 234, percentage: 18.8 },
    { name: 'Marketing', value: 187, percentage: 15.0 },
    { name: 'Operations', value: 187, percentage: 15.0 },
    { name: 'HR', value: 156, percentage: 12.5 },
    { name: 'Finance', value: 143, percentage: 11.5 }
  ];

  // Department Distribution
  const deptOptions: ApexOptions = {
    chart: { type: 'pie', height: 350 },
    title: { text: 'Department Distribution' },
    labels: departmentData.map(item => item.name),
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5']
  };
  const deptSeries = departmentData.map(item => item.value);

  // Dropdown Hierarchy (Treemap)
  const treemapOptions: ApexOptions = {
    chart: { type: 'treemap', height: 350 },
    title: { text: 'Department Hierarchy - Treemap' },
    colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5']
  };
  const treemapSeries = [{
    name: 'Departments',
    data: departmentData.map(item => ({ x: item.name, y: item.value }))
  }];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Dropdown Questions - ApexCharts</h2>
        <p className="text-gray-600">Categorical selection visualizations</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Department Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={deptOptions} series={deptSeries} type="pie" height={350} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Department Hierarchy</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart options={treemapOptions} series={treemapSeries} type="treemap" height={350} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DropdownChartsApex;
