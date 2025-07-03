
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from 'lucide-react';

const MultiSelectCharts = () => {
  const benefitsData = [
    { name: 'Health Insurance', responses: 280, percentage: 87, selected: true },
    { name: 'Flexible Hours', responses: 245, percentage: 76, selected: true },
    { name: 'Remote Work', responses: 198, percentage: 61, selected: true },
    { name: 'Professional Development', responses: 156, percentage: 48, selected: false },
    { name: 'Gym Membership', responses: 89, percentage: 27, selected: false },
    { name: 'Free Meals', responses: 67, percentage: 21, selected: false }
  ];

  const skillsData = [
    { name: 'Communication', responses: 267, percentage: 82 },
    { name: 'Problem Solving', responses: 234, percentage: 72 },
    { name: 'Leadership', responses: 189, percentage: 58 },
    { name: 'Technical Skills', responses: 176, percentage: 54 },
    { name: 'Creativity', responses: 145, percentage: 45 },
    { name: 'Time Management', responses: 134, percentage: 41 }
  ];

  const CheckboxVisual = ({ data }: { data: any[] }) => (
    <div className="space-y-4">
      {data.map((item, index) => (
        <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <CheckCircle 
              className={`h-5 w-5 ${item.selected ? 'text-green-500' : 'text-gray-300'}`}
              fill={item.selected ? 'currentColor' : 'none'}
            />
            <span className="font-medium">{item.name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary">{item.responses} responses</Badge>
            <Badge variant="outline">{item.percentage}%</Badge>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Multi Select Questions</h2>
        <p className="text-gray-600">Visualizations for questions where respondents can select multiple options</p>
      </div>

      {/* Benefits Importance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Important Benefits - Horizontal Bar Chart</CardTitle>
            <p className="text-sm text-gray-600">"Which benefits are most important to you?" (Multiple selections allowed)</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart
                data={benefitsData}
                layout="horizontal"
                margin={{ top: 20, right: 30, left: 120, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={120} />
                <Tooltip 
                  formatter={(value, name) => [
                    `${value} responses (${benefitsData.find(d => d.responses === value)?.percentage}%)`,
                    'Selections'
                  ]}
                />
                <Bar dataKey="responses" fill="#0088FE" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Benefits Selection - Checkbox Style</CardTitle>
            <p className="text-sm text-gray-600">Visual representation of selection frequency</p>
          </CardHeader>
          <CardContent>
            <CheckboxVisual data={benefitsData} />
          </CardContent>
        </Card>
      </div>

      {/* Skills Development */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Skills for Development - Stacked Percentage View</CardTitle>
          <p className="text-sm text-gray-600">"Which skills would you like to develop?" (Select all that apply)</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={skillsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={-45}
                textAnchor="end"
                height={100}
              />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [
                  `${value} responses (${skillsData.find(d => d.responses === value)?.percentage}%)`,
                  'Selections'
                ]}
              />
              <Bar dataKey="responses" fill="#00C49F" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Selection Overlap Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Selection Patterns</CardTitle>
          <p className="text-sm text-gray-600">Analysis of how respondents combine different options</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">2.8</div>
              <div className="text-sm text-gray-600">Average selections per respondent</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">156</div>
              <div className="text-sm text-gray-600">Respondents selected all top 3</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">23</div>
              <div className="text-sm text-gray-600">Respondents selected only 1 option</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chart Type Suggestions */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-lg text-green-800">Chart Recommendations for Multi Select</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div><strong>Best for:</strong> Questions where respondents can choose multiple options</div>
          <div><strong>Recommended Charts:</strong></div>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>Horizontal Bar Chart:</strong> Shows frequency of each option selection</li>
            <li><strong>Checkbox Visual:</strong> Mimics original question format, intuitive</li>
            <li><strong>Stacked Bar Chart:</strong> Can show selection combinations</li>
            <li><strong>Multiple Bar Chart:</strong> Compare selections across different groups</li>
            <li><strong>Heatmap:</strong> Show correlation between different option selections</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default MultiSelectCharts;
