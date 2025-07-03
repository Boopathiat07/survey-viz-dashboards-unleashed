
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, RadialBarChart, RadialBar, Legend, AreaChart, Area, LineChart, Line } from 'recharts';
import { Badge } from "@/components/ui/badge";

const SingleSelectCharts = () => {
  // Question 1: Work Schedule Preference
  const workScheduleData = [
    { name: 'Remote Work', value: 389, percentage: 45, color: '#0088FE' },
    { name: 'Hybrid', value: 259, percentage: 30, color: '#00C49F' },
    { name: 'Office-based', value: 173, percentage: 20, color: '#FFBB28' },
    { name: 'Flexible', value: 43, percentage: 5, color: '#FF8042' }
  ];

  // Question 2: Preferred Communication Method
  const communicationData = [
    { name: 'Email', value: 298, percentage: 35 },
    { name: 'Slack/Teams', value: 254, percentage: 30 },
    { name: 'Video Calls', value: 169, percentage: 20 },
    { name: 'In-Person', value: 85, percentage: 10 },
    { name: 'Phone Calls', value: 42, percentage: 5 }
  ];

  // Question 3: Work Environment Preference
  const environmentData = [
    { name: 'Quiet Space', value: 342, percentage: 40 },
    { name: 'Collaborative', value: 256, percentage: 30 },
    { name: 'Mixed', value: 171, percentage: 20 },
    { name: 'Open Office', value: 85, percentage: 10 }
  ];

  // Question 4: Meeting Frequency Preference
  const meetingData = [
    { name: 'Weekly', value: 425, percentage: 50 },
    { name: 'Bi-weekly', value: 255, percentage: 30 },
    { name: 'Monthly', value: 119, percentage: 14 },
    { name: 'Daily', value: 51, percentage: 6 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D'];

  const PolarAreaChart = ({ data }: { data: any[] }) => {
    const processedData = data.map((item, index) => ({
      ...item,
      angle: 360 / data.length,
      startAngle: (360 / data.length) * index,
      endAngle: (360 / data.length) * (index + 1),
      fill: COLORS[index % COLORS.length]
    }));

    return (
      <ResponsiveContainer width="100%" height={300}>
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" data={processedData}>
          <RadialBar dataKey="value" cornerRadius={10} fill="#8884d8" />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    );
  };

  const BubbleChart = ({ data }: { data: any[] }) => {
    const bubbleData = data.map((item, index) => ({
      x: index * 100 + 50,
      y: 50,
      z: item.value,
      name: item.name,
      fill: COLORS[index % COLORS.length]
    }));

    return (
      <div className="relative h-80 p-4">
        <svg width="100%" height="100%" viewBox="0 0 400 200">
          {bubbleData.map((bubble, index) => (
            <g key={index}>
              <circle
                cx={bubble.x}
                cy={bubble.y}
                r={Math.sqrt(bubble.z) / 2}
                fill={bubble.fill}
                opacity={0.7}
                stroke="#fff"
                strokeWidth="2"
              />
              <text
                x={bubble.x}
                y={bubble.y - 5}
                textAnchor="middle"
                fontSize="10"
                fontWeight="bold"
                fill="#000"
              >
                {bubble.name}
              </text>
              <text
                x={bubble.x}
                y={bubble.y + 5}
                textAnchor="middle"
                fontSize="8"
                fill="#000"
              >
                {bubble.z}
              </text>
            </g>
          ))}
        </svg>
      </div>
    );
  };

  const StackedProgressBar = ({ data }: { data: any[] }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let cumulative = 0;

    return (
      <div className="space-y-4">
        <div className="w-full h-12 bg-gray-200 rounded-lg overflow-hidden flex">
          {data.map((item, index) => {
            const width = (item.value / total) * 100;
            cumulative += width;
            return (
              <div
                key={index}
                className="h-full flex items-center justify-center text-white text-sm font-medium"
                style={{
                  width: `${width}%`,
                  backgroundColor: item.color || COLORS[index % COLORS.length]
                }}
              >
                {width > 15 && item.percentage + '%'}
              </div>
            );
          })}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {data.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <div 
                className="w-4 h-4 rounded"
                style={{ backgroundColor: item.color || COLORS[index % COLORS.length] }}
              />
              <span className="text-sm">{item.name}: {item.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Single Select Questions</h2>
        <p className="text-gray-600">8 questions where respondents can select only one option</p>
      </div>

      {/* Question 1: Work Schedule - Multiple Visualizations */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Q1: "What is your preferred work schedule?"</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Traditional Bar Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Work Schedule - Vertical Bar Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={workScheduleData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} responses`, 'Count']} />
                  <Bar dataKey="value" fill="#0088FE" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Horizontal Bar Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Work Schedule - Horizontal Bar Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={workScheduleData}
                  layout="horizontal"
                  margin={{ left: 80 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={80} />
                  <Tooltip formatter={(value) => [`${value} responses`, 'Count']} />
                  <Bar dataKey="value" fill="#00C49F" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Work Schedule - Pie Chart</CardTitle>
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
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Donut Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Work Schedule - Donut Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={workScheduleData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                    label={({name, percentage}) => `${percentage}%`}
                  >
                    {workScheduleData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
              <div className="text-center mt-2">
                <div className="text-sm font-medium">Total Responses</div>
                <div className="text-xl font-bold">
                  {workScheduleData.reduce((sum, item) => sum + item.value, 0)}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Radial Bar Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Work Schedule - Radial Bar Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <PolarAreaChart data={workScheduleData} />
            </CardContent>
          </Card>

          {/* Bubble Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Work Schedule - Bubble Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <BubbleChart data={workScheduleData} />
            </CardContent>
          </Card>
        </div>

        {/* Stacked Progress Bar */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Work Schedule - Stacked Progress Bar</CardTitle>
          </CardHeader>
          <CardContent>
            <StackedProgressBar data={workScheduleData} />
          </CardContent>
        </Card>
      </div>

      {/* Question 2: Communication Method */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Q2: "What is your preferred communication method?"</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Communication Method - Area Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={communicationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="value" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Communication Method - Semi-Circle</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={communicationData}
                    cx="50%"
                    cy="80%"
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={120}
                    dataKey="value"
                    label={({name, percentage}) => `${name}: ${percentage}%`}
                  >
                    {communicationData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Question 3: Work Environment */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Q3: "What type of work environment do you prefer?"</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Environment Preference - Line Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={environmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#8884d8" 
                    strokeWidth={3}
                    dot={{ r: 6 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Environment Preference - Gradient Donut</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <defs>
                    <linearGradient id="gradientDonut" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#8884d8" />
                      <stop offset="100%" stopColor="#82ca9d" />
                    </linearGradient>
                  </defs>
                  <Pie
                    data={environmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={70}
                    outerRadius={110}
                    paddingAngle={2}
                    dataKey="value"
                    fill="url(#gradientDonut)"
                  >
                    {environmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Question 4: Meeting Frequency */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Q4: "How often would you prefer team meetings?" - 3D-style Bar Chart</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={meetingData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="bar3d" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.9}/>
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0.3}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip formatter={(value) => [`${value} responses`, 'Count']} />
              <Bar dataKey="value" fill="url(#bar3d)" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Chart Options Summary */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-lg text-blue-800">All Chart Options for Single Select Questions</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div><strong>Available Visualizations:</strong></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <Badge variant="outline">Vertical Bar Chart</Badge>
            <Badge variant="outline">Horizontal Bar Chart</Badge>
            <Badge variant="outline">Pie Chart</Badge>
            <Badge variant="outline">Donut Chart</Badge>
            <Badge variant="outline">Radial Bar Chart</Badge>
            <Badge variant="outline">Bubble Chart</Badge>
            <Badge variant="outline">Stacked Progress Bar</Badge>
            <Badge variant="outline">Area Chart</Badge>
            <Badge variant="outline">Semi-Circle Chart</Badge>
            <Badge variant="outline">Line Chart</Badge>
            <Badge variant="outline">Gradient Donut</Badge>
            <Badge variant="outline">3D-style Bar Chart</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SingleSelectCharts;
