
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RankingCharts = () => {
  const jobFactorsData = [
    { factor: 'Salary', averageRank: 1.8, rank1: 45, rank2: 35, rank3: 15, rank4: 3, rank5: 2 },
    { factor: 'Work-Life Balance', averageRank: 2.3, rank1: 25, rank2: 40, rank3: 25, rank4: 8, rank5: 2 },
    { factor: 'Career Growth', averageRank: 2.9, rank1: 15, rank2: 20, rank3: 35, rank4: 25, rank5: 5 },
    { factor: 'Company Culture', averageRank: 3.2, rank1: 8, rank2: 15, rank3: 30, rank4: 35, rank5: 12 },
    { factor: 'Benefits', averageRank: 3.8, rank1: 7, rank2: 10, rank3: 15, rank4: 35, rank5: 33 }
  ];

  const HeatmapVisualization = ({ data }: { data: any[] }) => {
    const maxValue = Math.max(...data.flatMap(item => [item.rank1, item.rank2, item.rank3, item.rank4, item.rank5]));
    
    const getIntensity = (value: number) => {
      const intensity = value / maxValue;
      return {
        backgroundColor: `rgba(59, 130, 246, ${intensity})`,
        color: intensity > 0.5 ? 'white' : 'black'
      };
    };

    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="p-3 text-left border">Factor</th>
              <th className="p-3 text-center border">Rank 1</th>
              <th className="p-3 text-center border">Rank 2</th>
              <th className="p-3 text-center border">Rank 3</th>
              <th className="p-3 text-center border">Rank 4</th>
              <th className="p-3 text-center border">Rank 5</th>
              <th className="p-3 text-center border">Avg Rank</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td className="p-3 font-medium border">{item.factor}</td>
                <td className="p-3 text-center border" style={getIntensity(item.rank1)}>
                  {item.rank1}%
                </td>
                <td className="p-3 text-center border" style={getIntensity(item.rank2)}>
                  {item.rank2}%
                </td>
                <td className="p-3 text-center border" style={getIntensity(item.rank3)}>
                  {item.rank3}%
                </td>
                <td className="p-3 text-center border" style={getIntensity(item.rank4)}>
                  {item.rank4}%
                </td>
                <td className="p-3 text-center border" style={getIntensity(item.rank5)}>
                  {item.rank5}%
                </td>
                <td className="p-3 text-center border font-bold">
                  {item.averageRank}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const RankedList = ({ data }: { data: any[] }) => {
    const sortedData = [...data].sort((a, b) => a.averageRank - b.averageRank);
    
    return (
      <div className="space-y-3">
        {sortedData.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full font-bold">
                {index + 1}
              </div>
              <div>
                <div className="font-medium">{item.factor}</div>
                <div className="text-sm text-gray-500">
                  {item.rank1}% ranked this #1
                </div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-lg font-bold text-blue-600">
                {item.averageRank}
              </div>
              <div className="text-sm text-gray-500">avg rank</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Ranking Questions</h2>
        <p className="text-gray-600">Visualizations for priority ranking and ordered preferences</p>
      </div>

      {/* Average Ranking Bar Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Job Factor Importance - Average Ranking</CardTitle>
          <p className="text-sm text-gray-600">"Rank these factors in order of importance when choosing a job (1=most important)"</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart 
              data={jobFactorsData}
              margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="factor" 
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis 
                domain={[1, 5]}
                tickFormatter={(value) => `Rank ${value}`}
              />
              <Tooltip 
                formatter={(value) => [`Rank ${value}`, 'Average Ranking']}
              />
              <Bar dataKey="averageRank" fill="#0088FE" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Ranking Heatmap */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Ranking Distribution Heatmap</CardTitle>
          <p className="text-sm text-gray-600">Percentage of respondents who gave each rank to each factor</p>
        </CardHeader>
        <CardContent>
          <HeatmapVisualization data={jobFactorsData} />
          <div className="mt-4 text-sm text-gray-600">
            Darker blue indicates higher percentage of responses
          </div>
        </CardContent>
      </Card>

      {/* Ranked List View */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Final Ranking - Ordered by Average Rank</CardTitle>
          <p className="text-sm text-gray-600">Factors ordered from most important to least important</p>
        </CardHeader>
        <CardContent>
          <RankedList data={jobFactorsData} />
        </CardContent>
      </Card>

      {/* Ranking Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Most Consistent</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-2xl font-bold text-green-600">Salary</div>
            <div className="text-sm text-gray-600">45% ranked it #1</div>
            <div className="text-xs text-gray-500">Lowest variation in rankings</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Most Divisive</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-2xl font-bold text-orange-600">Benefits</div>
            <div className="text-sm text-gray-600">Wide ranking spread</div>
            <div className="text-xs text-gray-500">Highest variation in rankings</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Surprise Factor</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="text-2xl font-bold text-blue-600">Company Culture</div>
            <div className="text-sm text-gray-600">Lower than expected</div>
            <div className="text-xs text-gray-500">Often ranked 4th or 5th</div>
          </CardContent>
        </Card>
      </div>

      {/* Chart Type Suggestions */}
      <Card className="bg-indigo-50 border-indigo-200">
        <CardHeader>
          <CardTitle className="text-lg text-indigo-800">Chart Recommendations for Ranking Questions</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div><strong>Best for:</strong> Priority ranking, ordered preferences, importance ratings</div>
          <div><strong>Recommended Charts:</strong></div>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>Average Rank Bar Chart:</strong> Shows overall ranking order clearly</li>
            <li><strong>Ranking Heatmap:</strong> Displays distribution of ranks for each option</li>
            <li><strong>Ranked List View:</strong> Simple ordered list with average rankings</li>
            <li><strong>Sankey Diagram:</strong> Shows how rankings flow from one position to another</li>
            <li><strong>Parallel Coordinates:</strong> Compare rankings across different respondent groups</li>
            <li><strong>Box Plot:</strong> Shows ranking distribution and variability</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default RankingCharts;
