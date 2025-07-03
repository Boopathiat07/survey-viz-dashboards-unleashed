
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const SingleSelectCharts = () => {
  const workScheduleData = [
    { name: 'Remote Work', value: 145, percentage: 45 },
    { name: 'Hybrid', value: 98, percentage: 30 },
    { name: 'Office-based', value: 65, percentage: 20 },
    { name: 'Flexible', value: 16, percentage: 5 }
  ];

  const departmentData = [
    { name: 'Engineering', value: 89, percentage: 28 },
    { name: 'Marketing', value: 67, percentage: 21 },
    { name: 'Sales', value: 54, percentage: 17 },
    { name: 'HR', value: 43, percentage: 13 },
    { name: 'Finance', value: 38, percentage: 12 },
    { name: 'Operations', value: 29, percentage: 9 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Single Select Questions</h2>
        <p className="text-gray-600">Visualizations for questions where respondents can select only one option</p>
      </div>

      {/* Work Schedule Preference */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Preferred Work Schedule - Bar Chart</CardTitle>
            <p className="text-sm text-gray-600">Total Responses: 324</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={workScheduleData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    `${value} responses (${workScheduleData.find(d => d.value === value)?.percentage}%)`,
                    'Count'
                  ]}
                />
                <Bar dataKey="value" fill="#0088FE" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Preferred Work Schedule - Pie Chart</CardTitle>
            <p className="text-sm text-gray-600">Distribution of preferences</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={workScheduleData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({name, percentage}) => `${name}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {workScheduleData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} responses`, 'Count']} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Department Distribution */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Department Distribution - Horizontal Bar Chart</CardTitle>
          <p className="text-sm text-gray-600">Employee distribution across departments</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={departmentData}
              layout="horizontal"
              margin={{ top: 20, right: 30, left: 80, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip 
                formatter={(value, name) => [
                  `${value} employees (${departmentData.find(d => d.value === value)?.percentage}%)`,
                  'Count'
                ]}
              />
              <Bar dataKey="value" fill="#00C49F" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Chart Type Suggestions */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-lg text-blue-800">Chart Recommendations for Single Select</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div><strong>Best for:</strong> Questions where respondents choose one option from multiple choices</div>
          <div><strong>Recommended Charts:</strong></div>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>Bar Chart:</strong> Best for comparing values, easy to read exact numbers</li>
            <li><strong>Horizontal Bar Chart:</strong> Better when option names are long</li>
            <li><strong>Pie Chart:</strong> Shows proportional relationships, good for percentages</li>
            <li><strong>Donut Chart:</strong> Modern alternative to pie chart, can display total in center</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleSelectCharts;
