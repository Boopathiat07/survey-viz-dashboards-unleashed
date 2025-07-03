
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';

const DateAnalysisCharts = () => {
  const trainingData = [
    { month: 'Jan 2024', responses: 45, cumulative: 45 },
    { month: 'Feb 2024', responses: 67, cumulative: 112 },
    { month: 'Mar 2024', responses: 89, cumulative: 201 },
    { month: 'Apr 2024', responses: 78, cumulative: 279 },
    { month: 'May 2024', responses: 56, cumulative: 335 },
    { month: 'Jun 2024', responses: 34, cumulative: 369 }
  ];

  const calendarData = [
    { date: '2024-06-01', count: 2 }, { date: '2024-06-02', count: 0 }, { date: '2024-06-03', count: 1 },
    { date: '2024-06-04', count: 3 }, { date: '2024-06-05', count: 5 }, { date: '2024-06-06', count: 1 },
    { date: '2024-06-07', count: 0 }, { date: '2024-06-08', count: 2 }, { date: '2024-06-09', count: 4 },
    { date: '2024-06-10', count: 6 }, { date: '2024-06-11', count: 3 }, { date: '2024-06-12', count: 8 },
    { date: '2024-06-13', count: 2 }, { date: '2024-06-14', count: 0 }, { date: '2024-06-15', count: 1 },
    { date: '2024-06-16', count: 0 }, { date: '2024-06-17', count: 7 }, { date: '2024-06-18', count: 4 },
    { date: '2024-06-19', count: 9 }, { date: '2024-06-20', count: 5 }, { date: '2024-06-21', count: 2 },
    { date: '2024-06-22', count: 0 }, { date: '2024-06-23', count: 3 }, { date: '2024-06-24', count: 6 },
    { date: '2024-06-25', count: 8 }, { date: '2024-06-26', count: 4 }, { date: '2024-06-27', count: 1 },
    { date: '2024-06-28', count: 0 }, { date: '2024-06-29', count: 2 }, { date: '2024-06-30', count: 5 }
  ];

  const workStartDates = [
    { period: '2020-2021', employees: 45, percentage: 14 },
    { period: '2021-2022', employees: 78, percentage: 24 },
    { period: '2022-2023', employees: 89, percentage: 28 },
    { period: '2023-2024', employees: 67, percentage: 21 },
    { period: '2024-Present', employees: 45, percentage: 13 }
  ];

  const CalendarHeatmap = ({ data }: { data: any[] }) => {
    const maxValue = Math.max(...data.map(d => d.count));
    
    const getIntensity = (count: number) => {
      if (count === 0) return 'bg-gray-100';
      const intensity = count / maxValue;
      if (intensity <= 0.25) return 'bg-blue-200';
      if (intensity <= 0.5) return 'bg-blue-400';
      if (intensity <= 0.75) return 'bg-blue-600';
      return 'bg-blue-800';
    };

    const getTextColor = (count: number) => {
      const intensity = count / maxValue;
      return intensity > 0.5 ? 'text-white' : 'text-gray-700';
    };

    return (
      <div className="space-y-2">
        <div className="text-sm text-gray-600 mb-2">June 2024 - Training Session Attendance</div>
        <div className="grid grid-cols-7 gap-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-xs text-center font-medium p-1">
              {day}
            </div>
          ))}
          {data.map((item, index) => {
            const date = new Date(item.date);
            const day = date.getDate();
            return (
              <div
                key={index}
                className={`aspect-square flex items-center justify-center text-xs rounded ${getIntensity(item.count)} ${getTextColor(item.count)} cursor-pointer hover:opacity-80`}
                title={`${item.date}: ${item.count} attendees`}
              >
                {day}
              </div>
            );
          })}
        </div>
        <div className="flex items-center justify-between text-xs text-gray-500 mt-2">
          <span>Less</span>
          <div className="flex space-x-1">
            <div className="w-3 h-3 bg-gray-100 rounded"></div>
            <div className="w-3 h-3 bg-blue-200 rounded"></div>
            <div className="w-3 h-3 bg-blue-400 rounded"></div>
            <div className="w-3 h-3 bg-blue-600 rounded"></div>
            <div className="w-3 h-3 bg-blue-800 rounded"></div>
          </div>
          <span>More</span>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Date Analysis Questions</h2>
        <p className="text-gray-600">Visualizations for date picker responses and temporal patterns</p>
      </div>

      {/* Question Context */}
      <Card className="bg-purple-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-lg text-purple-800">Sample Questions</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="text-purple-700">
            <strong>Q1:</strong> "When did you last attend a training session?"
          </div>
          <div className="text-purple-700">
            <strong>Q2:</strong> "What is your employment start date?"
          </div>
          <div className="text-purple-700">
            <strong>Q3:</strong> "When would you prefer to schedule team meetings?"
          </div>
        </CardContent>
      </Card>

      {/* Timeline Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Training Attendance Timeline</CardTitle>
          <p className="text-sm text-gray-600">Monthly distribution of last training session attendance</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={trainingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [
                  `${value} responses`,
                  name === 'responses' ? 'Monthly' : 'Cumulative'
                ]}
              />
              <Line 
                type="monotone" 
                dataKey="responses" 
                stroke="#0088FE" 
                strokeWidth={3}
                dot={{ fill: '#0088FE', strokeWidth: 2, r: 6 }}
                name="responses"
              />
              <Line 
                type="monotone" 
                dataKey="cumulative" 
                stroke="#00C49F" 
                strokeWidth={2}
                strokeDasharray="5 5"
                name="cumulative"
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Calendar Heatmap */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Daily Activity Calendar</CardTitle>
          <p className="text-sm text-gray-600">Intensity map showing training session attendance by date</p>
        </CardHeader>
        <CardContent>
          <CalendarHeatmap data={calendarData} />
        </CardContent>
      </Card>

      {/* Employment Start Dates */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Employee Start Date Distribution</CardTitle>
          <p className="text-sm text-gray-600">When did current employees join the company?</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={workStartDates}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="period" />
              <YAxis />
              <Tooltip 
                formatter={(value, name) => [
                  `${value} employees (${workStartDates.find(d => d.employees === value)?.percentage}%)`,
                  'Count'
                ]}
              />
              <Bar dataKey="employees" fill="#8884D8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Date Analysis Insights */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Peak Training Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-blue-600">March 2024</div>
            <div className="text-xs text-gray-500">89 attendees</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Recent Decline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-orange-600">-39%</div>
            <div className="text-xs text-gray-500">May to June drop</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Busiest Day</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-green-600">June 19</div>
            <div className="text-xs text-gray-500">9 attendees</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Hiring Peak</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-purple-600">2022-2023</div>
            <div className="text-xs text-gray-500">28% of team</div>
          </CardContent>
        </Card>
      </div>

      {/* Temporal Patterns */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Temporal Patterns Analysis</CardTitle>
          <p className="text-sm text-gray-600">Key insights from date-based responses</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="font-medium">Seasonal Trends</h4>
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Q1 (Jan-Mar):</span>
                  <span className="font-medium">High activity (201 total)</span>
                </div>
                <div className="flex justify-between">
                  <span>Q2 (Apr-Jun):</span>
                  <span className="font-medium">Declining trend (168 total)</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Weekly Patterns</h4>
              <div className="text-sm space-y-2">
                <div className="flex justify-between">
                  <span>Weekdays:</span>
                  <span className="font-medium">Higher attendance</span>
                </div>
                <div className="flex justify-between">
                  <span>Weekends:</span>
                  <span className="font-medium">Lower participation</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Chart Type Suggestions */}
      <Card className="bg-teal-50 border-teal-200">
        <CardHeader>
          <CardTitle className="text-lg text-teal-800">Chart Recommendations for Date Analysis</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div><strong>Best for:</strong> Date picker responses, temporal data, time-based analysis</div>
          <div><strong>Recommended Charts:</strong></div>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>Timeline/Line Chart:</strong> Shows trends over time periods</li>
            <li><strong>Calendar Heatmap:</strong> Displays activity intensity by specific dates</li>
            <li><strong>Monthly/Yearly Bar Chart:</strong> Groups responses by time periods</li>
            <li><strong>Seasonal Analysis:</strong> Compares quarterly or seasonal patterns</li>
            <li><strong>Gantt Chart:</strong> Shows duration-based responses</li>
            <li><strong>Time Series:</strong> Advanced temporal analysis with forecasting</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default DateAnalysisCharts;
