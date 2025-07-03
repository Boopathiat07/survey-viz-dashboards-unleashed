
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const LikertScaleCharts = () => {
  const workLifeBalanceData = [
    { category: 'Strongly Agree', value: 95, percentage: 30, color: '#22C55E' },
    { category: 'Agree', value: 127, percentage: 40, color: '#84CC16' },
    { category: 'Neutral', value: 63, percentage: 20, color: '#EAB308' },
    { category: 'Disagree', value: 25, percentage: 8, color: '#F97316' },
    { category: 'Strongly Disagree', value: 6, percentage: 2, color: '#EF4444' }
  ];

  const multipleStatementsData = [
    {
      statement: 'Company values work-life balance',
      stronglyAgree: 30, agree: 40, neutral: 20, disagree: 8, stronglyDisagree: 2,
      netAgreement: 70
    },
    {
      statement: 'Management is supportive',
      stronglyAgree: 25, agree: 35, neutral: 25, disagree: 12, stronglyDisagree: 3,
      netAgreement: 60
    },
    {
      statement: 'Career growth opportunities exist',
      stronglyAgree: 15, agree: 30, neutral: 35, disagree: 15, stronglyDisagree: 5,
      netAgreement: 45
    },
    {
      statement: 'Compensation is fair',
      stronglyAgree: 12, agree: 28, neutral: 30, disagree: 20, stronglyDisagree: 10,
      netAgreement: 40
    }
  ];

  // Diverging stacked bar data (centered on neutral)
  const divergingData = multipleStatementsData.map(item => ({
    statement: item.statement.length > 25 ? item.statement.substring(0, 25) + '...' : item.statement,
    negativeTotal: -(item.disagree + item.stronglyDisagree),
    disagree: -item.disagree,
    stronglyDisagree: -item.stronglyDisagree,
    neutral: item.neutral,
    agree: item.agree,
    stronglyAgree: item.stronglyAgree,
    positiveTotal: item.agree + item.stronglyAgree
  }));

  const LikertBar = ({ data }: { data: any }) => (
    <div className="space-y-2">
      {data.map((item: any, index: number) => (
        <div key={index} className="flex items-center">
          <div className="w-48 text-sm text-right pr-4">{item.statement}</div>
          <div className="flex-1 flex h-8 bg-gray-100 rounded">
            {/* Negative side */}
            <div className="flex">
              <div 
                className="bg-red-500 flex items-center justify-center text-white text-xs"
                style={{ width: `${item.stronglyDisagree}%` }}
              >
                {item.stronglyDisagree > 0 && item.stronglyDisagree}
              </div>
              <div 
                className="bg-orange-400 flex items-center justify-center text-white text-xs"
                style={{ width: `${item.disagree}%` }}
              >
                {item.disagree > 0 && item.disagree}
              </div>
            </div>
            {/* Neutral center */}
            <div 
              className="bg-yellow-300 flex items-center justify-center text-black text-xs"
              style={{ width: `${item.neutral}%` }}
            >
              {item.neutral > 0 && item.neutral}
            </div>
            {/* Positive side */}
            <div className="flex">
              <div 
                className="bg-green-400 flex items-center justify-center text-white text-xs"
                style={{ width: `${item.agree}%` }}
              >
                {item.agree > 0 && item.agree}
              </div>
              <div 
                className="bg-green-600 flex items-center justify-center text-white text-xs"
                style={{ width: `${item.stronglyAgree}%` }}
              >
                {item.stronglyAgree > 0 && item.stronglyAgree}
              </div>
            </div>
          </div>
          <div className="w-16 text-sm text-left pl-4 font-medium">
            {item.netAgreement}%
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Likert Scale Questions</h2>
        <p className="text-gray-600">Visualizations for agreement scales and opinion statements</p>
      </div>

      {/* Single Statement Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Work-Life Balance Statement</CardTitle>
            <p className="text-sm text-gray-600">"Our company values work-life balance"</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={workLifeBalanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="category" 
                  angle={-45}
                  textAnchor="end"
                  height={80}
                />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    `${value} responses (${workLifeBalanceData.find(d => d.value === value)?.percentage}%)`,
                    'Count'
                  ]}
                />
                <Bar dataKey="value">
                  {workLifeBalanceData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-green-50 rounded-lg text-center">
              <div className="text-lg font-semibold text-green-800">
                Net Agreement: 70% (Agree + Strongly Agree)
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Response Distribution</CardTitle>
            <p className="text-sm text-gray-600">Percentage breakdown with color coding</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {workLifeBalanceData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div 
                      className="w-4 h-4 rounded"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="font-medium">{item.category}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold">{item.percentage}%</span>
                    <span className="text-sm text-gray-500">({item.value})</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Multiple Statements Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Multiple Statements - Likert Scale Visualization</CardTitle>
          <p className="text-sm text-gray-600">Diverging bar chart showing agreement levels</p>
        </CardHeader>
        <CardContent>
          <div className="mb-4 flex justify-center">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span>Strongly Disagree</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-orange-400 rounded"></div>
                <span>Disagree</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-yellow-300 rounded"></div>
                <span>Neutral</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-400 rounded"></div>
                <span>Agree</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-green-600 rounded"></div>
                <span>Strongly Agree</span>
              </div>
            </div>
          </div>
          <LikertBar data={multipleStatementsData} />
        </CardContent>
      </Card>

      {/* Net Agreement Scores */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Net Agreement Scores</CardTitle>
          <p className="text-sm text-gray-600">Combined Agree + Strongly Agree percentages</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart 
              data={multipleStatementsData}
              margin={{ top: 20, right: 30, left: 20, bottom: 80 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="statement" 
                angle={-45}
                textAnchor="end"
                height={80}
                interval={0}
              />
              <YAxis domain={[0, 100]} />
              <Tooltip 
                formatter={(value) => [`${value}%`, 'Net Agreement']}
              />
              <Bar dataKey="netAgreement" fill="#22C55E" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Chart Type Suggestions */}
      <Card className="bg-purple-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-lg text-purple-800">Chart Recommendations for Likert Scale</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div><strong>Best for:</strong> Agreement scales, opinion statements, attitude measurements</div>
          <div><strong>Recommended Charts:</strong></div>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>Stacked Bar Chart:</strong> Shows full response distribution</li>
            <li><strong>Diverging Bar Chart:</strong> Centers neutral responses, emphasizes agreement/disagreement</li>
            <li><strong>Likert Scale Visualization:</strong> Traditional horizontal format with color coding</li>
            <li><strong>Net Agreement Score:</strong> Simplified view focusing on positive responses</li>
            <li><strong>Heatmap:</strong> Compare multiple statements across different groups</li>
            <li><strong>Radar Chart:</strong> Multi-dimensional view of related statements</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default LikertScaleCharts;
