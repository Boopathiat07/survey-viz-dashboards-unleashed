
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, AreaChart, Area } from 'recharts';
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star } from 'lucide-react';

const MultiSelectCharts = () => {
  // Question 1: Important Benefits
  const benefitsData = [
    { name: 'Health Insurance', responses: 1089, percentage: 87, selected: true },
    { name: 'Flexible Hours', responses: 945, percentage: 76, selected: true },
    { name: 'Remote Work', responses: 761, percentage: 61, selected: true },
    { name: 'Professional Development', responses: 599, percentage: 48, selected: false },
    { name: 'Gym Membership', responses: 337, percentage: 27, selected: false },
    { name: 'Free Meals', responses: 262, percentage: 21, selected: false },
    { name: 'Parking', responses: 187, percentage: 15, selected: false },
    { name: 'Childcare', responses: 149, percentage: 12, selected: false }
  ];

  // Question 2: Skills to Develop
  const skillsData = [
    { name: 'Communication', responses: 1023, percentage: 82 },
    { name: 'Problem Solving', responses: 898, percentage: 72 },
    { name: 'Leadership', responses: 723, percentage: 58 },
    { name: 'Technical Skills', responses: 673, percentage: 54 },
    { name: 'Creativity', responses: 561, percentage: 45 },
    { name: 'Time Management', responses: 511, percentage: 41 }
  ];

  // Question 3: Preferred Training Methods
  const trainingData = [
    { name: 'Online Courses', responses: 892, percentage: 71 },
    { name: 'Workshops', responses: 756, percentage: 61 },
    { name: 'Mentoring', responses: 623, percentage: 50 },
    { name: 'Conferences', responses: 498, percentage: 40 },
    { name: 'Books/Reading', responses: 436, percentage: 35 },
    { name: 'Podcasts', responses: 324, percentage: 26 }
  ];

  // Question 4: Work-Life Balance Factors
  const workLifeData = [
    { name: 'Flexible Schedule', responses: 987, percentage: 79 },
    { name: 'Mental Health Support', responses: 823, percentage: 66 },
    { name: 'Vacation Time', responses: 756, percentage: 61 },
    { name: 'Family Time', responses: 698, percentage: 56 },
    { name: 'Wellness Programs', responses: 547, percentage: 44 },
    { name: 'Sabbaticals', responses: 287, percentage: 23 }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8', '#82CA9D', '#FFC658', '#FF7C7C'];

  const CheckboxVisual = ({ data }: { data: any[] }) => (
    <div className="space-y-3">
      {data.map((item, index) => (
        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
          <div className="flex items-center space-x-3">
            <CheckCircle 
              className={`h-6 w-6 ${item.selected ? 'text-green-500' : 'text-gray-300'}`}
              fill={item.selected ? 'currentColor' : 'none'}
            />
            <span className="font-medium text-gray-800">{item.name}</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
            <Badge variant="secondary" className="min-w-[80px]">{item.responses}</Badge>
            <Badge variant="outline" className="min-w-[50px]">{item.percentage}%</Badge>
          </div>
        </div>
      ))}
    </div>
  );

  const StarRatingVisual = ({ data }: { data: any[] }) => (
    <div className="space-y-3">
      {data.map((item, index) => (
        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-5 w-5 ${star <= Math.ceil(item.percentage / 20) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="font-medium text-gray-800">{item.name}</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">{item.responses} selections</span>
            <Badge variant="outline">{item.percentage}%</Badge>
          </div>
        </div>
      ))}
    </div>
  );

  const HeatmapGrid = ({ data }: { data: any[] }) => {
    const maxValue = Math.max(...data.map(item => item.responses));
    
    return (
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {data.map((item, index) => {
          const intensity = item.responses / maxValue;
          return (
            <div
              key={index}
              className="p-4 rounded-lg text-center transition-all duration-200 hover:scale-105"
              style={{
                backgroundColor: `rgba(59, 130, 246, ${intensity})`,
                color: intensity > 0.5 ? 'white' : 'black'
              }}
            >
              <div className="font-semibold text-sm">{item.name}</div>
              <div className="text-lg font-bold mt-1">{item.responses}</div>
              <div className="text-xs opacity-75">{item.percentage}%</div>
            </div>
          );
        })}
      </div>
    );
  };

  const RadarChartComponent = ({ data }: { data: any[] }) => {
    const radarData = data.map(item => ({
      subject: item.name,
      A: item.percentage,
      fullMark: 100
    }));

    return (
      <ResponsiveContainer width="100%" height={400}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar
            name="Percentage"
            dataKey="A"
            stroke="#8884d8"
            fill="#8884d8"
            fillOpacity={0.3}
          />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    );
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Multi Select Questions</h2>
        <p className="text-gray-600">4 questions where respondents can select multiple options</p>
      </div>

      {/* Question 1: Important Benefits */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Q1: "Which benefits are most important to you?" (Select all that apply)</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Horizontal Bar Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Benefits - Horizontal Bar Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <BarChart
                  data={benefitsData}
                  layout="horizontal"
                  margin={{ left: 120 }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" width={120} />
                  <Tooltip formatter={(value) => [`${value} selections`, 'Count']} />
                  <Bar dataKey="responses" fill="#0088FE" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Checkbox Style */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Benefits - Interactive Checkbox Style</CardTitle>
            </CardHeader>
            <CardContent>
              <CheckboxVisual data={benefitsData} />
            </CardContent>
          </Card>

          {/* Heatmap Grid */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Benefits - Heatmap Grid</CardTitle>
            </CardHeader>
            <CardContent>
              <HeatmapGrid data={benefitsData} />
            </CardContent>
          </Card>

          {/* Star Rating Visual */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Benefits - Star Rating Style</CardTitle>
            </CardHeader>
            <CardContent>
              <StarRatingVisual data={benefitsData} />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Question 2: Skills Development */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Q2: "Which skills would you like to develop?" (Select all that apply)</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Skills - Radar Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <RadarChartComponent data={skillsData} />
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Skills - Area Chart</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={400}>
                <AreaChart data={skillsData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                  <YAxis />
                  <Tooltip formatter={(value) => [`${value} selections`, 'Count']} />
                  <Area type="monotone" dataKey="responses" stroke="#00C49F" fill="#00C49F" fillOpacity={0.6} />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Question 3: Training Methods */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Q3: "What training methods do you prefer?" (Select all that apply)</h3>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Training Methods - Stacked Bar with Gradient</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={trainingData}>
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#FFBB28" stopOpacity={0.9}/>
                    <stop offset="95%" stopColor="#FFBB28" stopOpacity={0.3}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip formatter={(value) => [`${value} selections`, 'Count']} />
                <Bar dataKey="responses" fill="url(#colorGradient)" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Question 4: Work-Life Balance */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-800">Q4: "What factors are important for work-life balance?" (Select all that apply)</h3>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Work-Life Balance - Multi-layered Progress Bars</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {workLifeData.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">{item.name}</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-gray-600">{item.responses}</span>
                      <Badge variant="outline">{item.percentage}%</Badge>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="h-3 rounded-full transition-all duration-500"
                      style={{ 
                        width: `${item.percentage}%`,
                        backgroundColor: COLORS[index % COLORS.length]
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Selection Pattern Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Multi-Select Pattern Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">3.2</div>
              <div className="text-sm text-gray-600">Average selections per question</div>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">68%</div>
              <div className="text-sm text-gray-600">Selected top 3 options</div>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl font-bold text-orange-600">87%</div>
              <div className="text-sm text-gray-600">Made multiple selections</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">12%</div>
              <div className="text-sm text-gray-600">Selected all options</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chart Options Summary */}
      <Card className="bg-green-50 border-green-200">
        <CardHeader>
          <CardTitle className="text-lg text-green-800">All Chart Options for Multi Select Questions</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div><strong>Available Visualizations:</strong></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <Badge variant="outline">Horizontal Bar Chart</Badge>
            <Badge variant="outline">Checkbox Visual</Badge>
            <Badge variant="outline">Heatmap Grid</Badge>
            <Badge variant="outline">Star Rating Style</Badge>
            <Badge variant="outline">Radar Chart</Badge>
            <Badge variant="outline">Area Chart</Badge>
            <Badge variant="outline">Stacked Bar (Gradient)</Badge>
            <Badge variant="outline">Progress Bars</Badge>
            <Badge variant="outline">Bubble Chart</Badge>
            <Badge variant="outline">Treemap</Badge>
            <Badge variant="outline">Sankey Diagram</Badge>
            <Badge variant="outline">Chord Diagram</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default MultiSelectCharts;
