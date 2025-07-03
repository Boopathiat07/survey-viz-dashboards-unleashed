
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Treemap, FunnelChart, Funnel, LabelList } from 'recharts';
import { Badge } from "@/components/ui/badge";

const DropdownCharts = () => {
  // Question 1: Department Selection
  const departmentData = [
    { name: 'Engineering', value: 234, percentage: 28.5, color: '#0088FE' },
    { name: 'Marketing', value: 187, percentage: 22.8, color: '#00C49F' },
    { name: 'Sales', value: 156, percentage: 19.0, color: '#FFBB28' },
    { name: 'HR', value: 98, percentage: 11.9, color: '#FF8042' },
    { name: 'Finance', value: 89, percentage: 10.8, color: '#8884D8' },
    { name: 'Operations', value: 58, percentage: 7.0, color: '#82CA9D' }
  ];

  // Question 2: Experience Level
  const experienceData = [
    { name: '0-1 years', value: 89, percentage: 10.8 },
    { name: '1-3 years', value: 234, percentage: 28.5 },
    { name: '3-5 years', value: 198, percentage: 24.1 },
    { name: '5-10 years', value: 156, percentage: 19.0 },
    { name: '10+ years', value: 145, percentage: 17.6 }
  ];

  // Question 3: Education Level
  const educationData = [
    { name: "Bachelor's", value: 456, percentage: 55.5 },
    { name: "Master's", value: 234, percentage: 28.5 },
    { name: 'High School', value: 87, percentage: 10.6 },
    { name: 'PhD', value: 32, percentage: 3.9 },
    { name: 'Other', value: 12, percentage: 1.5 }
  ];

  // Treemap data structure
  const treemapData = [
    { name: 'Engineering', size: 234, children: [
      { name: 'Frontend', size: 89 },
      { name: 'Backend', size: 76 },
      { name: 'Mobile', size: 45 },
      { name: 'DevOps', size: 24 }
    ]},
    { name: 'Marketing', size: 187, children: [
      { name: 'Digital', size: 67 },
      { name: 'Content', size: 56 },
      { name: 'Brand', size: 34 },
      { name: 'Analytics', size: 30 }
    ]},
    { name: 'Sales', size: 156 },
    { name: 'HR', size: 98 },
    { name: 'Finance', size: 89 },
    { name: 'Operations', size: 58 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#FF7C7C'];

  const CustomTreemapContent = (props: any) => {
    const { x, y, width, height, index, name, size } = props;
    return (
      <g>
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          style={{
            fill: COLORS[index % COLORS.length],
            stroke: '#fff',
            strokeWidth: 2,
            fillOpacity: 0.8,
          }}
        />
        {width > 60 && height > 40 && (
          <text
            x={x + width / 2}
            y={y + height / 2}
            textAnchor="middle"
            fill="#000"
            fontSize="12"
            fontWeight="bold"
          >
            {name}
          </text>
        )}
        {width > 60 && height > 60 && (
          <text
            x={x + width / 2}
            y={y + height / 2 + 15}
            textAnchor="middle"
            fill="#000"
            fontSize="10"
          >
            {size}
          </text>
        )}
      </g>
    );
  };

  const SunburstChart = ({ data }: { data: any[] }) => {
    return (
      <div className="relative w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={40}
              outerRadius={80}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={90}
              outerRadius={120}
              paddingAngle={1}
              dataKey="percentage"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-outer-${index}`} fill={COLORS[index % COLORS.length]} opacity={0.6} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-sm font-bold">Total</div>
            <div className="text-lg font-bold">{data.reduce((sum, item) => sum + item.value, 0)}</div>
          </div>
        </div>
      </div>
    );
  };

  const WaffleChart = ({ data }: { data: any[] }) => {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    const squares = data.flatMap(item => 
      Array(Math.round((item.value / total) * 100)).fill(item)
    );

    return (
      <div className="p-4">
        <div className="grid grid-cols-10 gap-1 max-w-md mx-auto">
          {Array(100).fill(0).map((_, index) => {
            const square = squares[index];
            return (
              <div
                key={index}
                className="w-6 h-6 rounded-sm"
                style={{
                  backgroundColor: square?.color || '#f3f4f6'
                }}
                title={square?.name || 'No data'}
              />
            );
          })}
        </div>
        <div className="mt-4 text-center text-sm text-gray-600">
          Each square represents 1% of responses
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Dropdown Questions</h2>
        <p className="text-gray-600">Multiple dropdown questions with diverse visualization options</p>
      </div>

      {/* Question 1: Department - Multiple Chart Types */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Q1: "Which department do you work in?"</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Traditional Bar Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Department Distribution - Vertical Bar Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={departmentData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} employees`, 'Count']} />
                  <Bar dataKey="value" fill="#0088FE" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Horizontal Bar Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Department Distribution - Horizontal Bar Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart
                  data={departmentData}
                  layout="horizontal"
                  margin={{ left: 80 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={80} />
                  <Tooltip formatter={(value) => [`${value} employees`, 'Count']} />
                  <Bar dataKey="value" fill="#00C49F" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Pie Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Department Distribution - Pie Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({name, percentage}) => `${name}: ${percentage}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
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
              <CardTitle className="text-lg">Department Distribution - Donut Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={departmentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {departmentData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Treemap */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Department Distribution - Treemap</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <Treemap
                  data={departmentData}
                  dataKey="value"
                  aspectRatio={4/3}
                  stroke="#fff"
                  fill="#8884d8"
                  content={<CustomTreemapContent />}
                />
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Sunburst Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Department Distribution - Sunburst Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <SunburstChart data={departmentData} />
            </CardContent>
          </Card>
        </div>

        {/* Waffle Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Department Distribution - Waffle Chart</CardTitle>
          </CardHeader>
          <CardContent>
            <WaffleChart data={departmentData} />
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
              {departmentData.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div 
                    className="w-4 h-4 rounded"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Question 2: Experience Level */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Q2: "How many years of experience do you have?"</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Experience Distribution - Stepped Bar Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={experienceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} employees`, 'Count']} />
                  <Bar dataKey="value" fill="#FFBB28" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Experience Distribution - Funnel Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <FunnelChart>
                  <Tooltip />
                  <Funnel
                    dataKey="value"
                    data={experienceData}
                    isAnimationActive
                  >
                    <LabelList position="center" fill="#fff" stroke="none" />
                  </Funnel>
                </FunnelChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Question 3: Education Level */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Q3: "What is your highest level of education?"</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Education Distribution - Gradient Bar Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={educationData}>
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#8884d8" stopOpacity={0.3}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} employees`, 'Count']} />
                  <Bar dataKey="value" fill="url(#colorGradient)" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Education Distribution - Semi-Circle Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={educationData}
                    cx="50%"
                    cy="80%"
                    startAngle={180}
                    endAngle={0}
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={2}
                    dataKey="value"
                    label={({name, percentage}) => `${name}: ${percentage}%`}
                  >
                    {educationData.map((entry, index) => (
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

      {/* Chart Comparison Grid */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Chart Type Comparison for Dropdown Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-blue-600">Best for Small Categories (2-5 options)</h4>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>• Pie Chart</li>
                <li>• Donut Chart</li>
                <li>• Simple Bar Chart</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-green-600">Best for Medium Categories (5-10 options)</h4>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>• Horizontal Bar Chart</li>
                <li>• Treemap</li>
                <li>• Waffle Chart</li>
              </ul>
            </div>
            <div className="p-4 border rounded-lg">
              <h4 className="font-semibold text-orange-600">Best for Large Categories (10+ options)</h4>
              <ul className="mt-2 space-y-1 text-gray-600">
                <li>• Horizontal Bar Chart</li>
                <li>• Treemap</li>
                <li>• Sunburst Chart</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chart Type Suggestions */}
      <Card className="bg-purple-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-lg text-purple-800">All Chart Options for Dropdown Questions</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div><strong>Available Charts:</strong></div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            <Badge variant="outline">Vertical Bar Chart</Badge>
            <Badge variant="outline">Horizontal Bar Chart</Badge>
            <Badge variant="outline">Pie Chart</Badge>
            <Badge variant="outline">Donut Chart</Badge>
            <Badge variant="outline">Treemap</Badge>
            <Badge variant="outline">Sunburst Chart</Badge>
            <Badge variant="outline">Waffle Chart</Badge>
            <Badge variant="outline">Funnel Chart</Badge>
            <Badge variant="outline">Semi-Circle Chart</Badge>
            <Badge variant="outline">Gradient Bar Chart</Badge>
            <Badge variant="outline">Stacked Bar Chart</Badge>
            <Badge variant="outline">Radial Bar Chart</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DropdownCharts;
