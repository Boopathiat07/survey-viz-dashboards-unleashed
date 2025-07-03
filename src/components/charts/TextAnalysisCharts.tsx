
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Badge } from "@/components/ui/badge";

const TextAnalysisCharts = () => {
  const keywordsData = [
    { word: 'lighting', frequency: 45, category: 'Environment' },
    { word: 'temperature', frequency: 38, category: 'Environment' },
    { word: 'noise', frequency: 34, category: 'Environment' },
    { word: 'space', frequency: 29, category: 'Environment' },
    { word: 'equipment', frequency: 25, category: 'Technology' },
    { word: 'collaboration', frequency: 22, category: 'Social' },
    { word: 'privacy', frequency: 18, category: 'Environment' },
    { word: 'comfort', frequency: 16, category: 'Environment' }
  ];

  const sentimentData = [
    { sentiment: 'Positive', count: 48, percentage: 15, color: '#22C55E' },
    { sentiment: 'Neutral', count: 192, percentage: 60, color: '#EAB308' },
    { sentiment: 'Negative', count: 80, percentage: 25, color: '#EF4444' }
  ];

  const themesData = [
    { theme: 'Physical Environment', count: 128, percentage: 40, examples: ['lighting', 'temperature', 'space'] },
    { theme: 'Equipment & Technology', count: 80, percentage: 25, examples: ['computers', 'software', 'internet'] },
    { theme: 'Policies & Procedures', count: 64, percentage: 20, examples: ['remote work', 'hours', 'breaks'] },
    { theme: 'Other', count: 48, percentage: 15, examples: ['management', 'communication', 'training'] }
  ];

  const sampleResponses = [
    {
      response: "The office lighting could be improved. It's often too dim and causes eye strain.",
      sentiment: 'Negative',
      keywords: ['lighting', 'dim', 'eye strain'],
      theme: 'Physical Environment'
    },
    {
      response: "Great collaborative spaces! Love the open areas for team meetings.",
      sentiment: 'Positive',
      keywords: ['collaborative', 'spaces', 'team meetings'],
      theme: 'Physical Environment'
    },
    {
      response: "Need better equipment for remote work. Current setup is outdated.",
      sentiment: 'Negative',
      keywords: ['equipment', 'remote work', 'outdated'],
      theme: 'Equipment & Technology'
    },
    {
      response: "Temperature control would be nice. Sometimes it's too cold or too hot.",
      sentiment: 'Neutral',
      keywords: ['temperature', 'control', 'cold', 'hot'],
      theme: 'Physical Environment'
    }
  ];

  const WordCloud = ({ words }: { words: any[] }) => {
    const maxFreq = Math.max(...words.map(w => w.frequency));
    
    return (
      <div className="flex flex-wrap gap-2 p-4">
        {words.map((word, index) => {
          const size = Math.max(12, (word.frequency / maxFreq) * 32);
          const opacity = 0.6 + (word.frequency / maxFreq) * 0.4;
          
          return (
            <span
              key={index}
              style={{
                fontSize: `${size}px`,
                opacity: opacity,
                color: word.category === 'Environment' ? '#0088FE' : 
                       word.category === 'Technology' ? '#00C49F' : '#FFBB28'
              }}
              className="font-medium hover:opacity-100 transition-opacity cursor-pointer"
            >
              {word.word}
            </span>
          );
        })}
      </div>
    );
  };

  const ResponseCard = ({ response }: { response: any }) => (
    <div className="p-4 border rounded-lg space-y-2">
      <div className="text-sm text-gray-700">"{response.response}"</div>
      <div className="flex flex-wrap gap-2">
        <Badge 
          variant="outline" 
          className={
            response.sentiment === 'Positive' ? 'border-green-500 text-green-700' :
            response.sentiment === 'Negative' ? 'border-red-500 text-red-700' :
            'border-yellow-500 text-yellow-700'
          }
        >
          {response.sentiment}
        </Badge>
        <Badge variant="secondary">{response.theme}</Badge>
        {response.keywords.map((keyword: string, idx: number) => (
          <Badge key={idx} variant="outline" className="text-xs">
            {keyword}
          </Badge>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Text Analysis Questions</h2>
        <p className="text-gray-600">Visualizations for open-ended responses and qualitative feedback</p>
      </div>

      {/* Question Context */}
      <Card className="bg-blue-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-lg text-blue-800">Sample Question</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-blue-700 font-medium">
            "What improvements would you suggest for our workspace?"
          </p>
          <p className="text-sm text-blue-600 mt-2">
            320 responses analyzed • 1,247 total words • 89 unique keywords identified
          </p>
        </CardContent>
      </Card>

      {/* Word Cloud and Keywords */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Word Cloud</CardTitle>
            <p className="text-sm text-gray-600">Most frequently mentioned terms (size = frequency)</p>
          </CardHeader>
          <CardContent>
            <WordCloud words={keywordsData} />
            <div className="mt-4 flex gap-4 text-xs">
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-blue-500 rounded"></div>
                <span>Environment</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-green-500 rounded"></div>
                <span>Technology</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                <span>Social</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Top Keywords - Frequency Chart</CardTitle>
            <p className="text-sm text-gray-600">Most mentioned keywords with counts</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={keywordsData} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="word" type="category" width={80} />
                <Tooltip formatter={(value) => [`${value} mentions`, 'Frequency']} />
                <Bar dataKey="frequency" fill="#0088FE" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Sentiment Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Sentiment Distribution</CardTitle>
            <p className="text-sm text-gray-600">Overall emotional tone of responses</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({sentiment, percentage}) => `${sentiment}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} responses`, 'Count']} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Theme Categories</CardTitle>
            <p className="text-sm text-gray-600">Grouped feedback topics</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {themesData.map((theme, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="font-medium">{theme.theme}</div>
                    <div className="text-sm text-gray-500">
                      Examples: {theme.examples.join(', ')}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold">{theme.percentage}%</div>
                    <div className="text-sm text-gray-500">{theme.count} responses</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sample Responses */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Sample Analyzed Responses</CardTitle>
          <p className="text-sm text-gray-600">Examples showing sentiment, keywords, and theme classification</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {sampleResponses.map((response, index) => (
              <ResponseCard key={index} response={response} />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Analysis Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Top Concern</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-orange-600">Lighting</div>
            <div className="text-xs text-gray-500">45 mentions</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Sentiment Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-yellow-600">Mixed</div>
            <div className="text-xs text-gray-500">60% neutral</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Main Category</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-blue-600">Environment</div>
            <div className="text-xs text-gray-500">40% of feedback</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm">Response Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-lg font-bold text-green-600">98.8%</div>
            <div className="text-xs text-gray-500">320/324 responded</div>
          </CardContent>
        </Card>
      </div>

      {/* Chart Type Suggestions */}
      <Card className="bg-pink-50 border-pink-200">
        <CardHeader>
          <CardTitle className="text-lg text-pink-800">Chart Recommendations for Text Analysis</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div><strong>Best for:</strong> Open-ended responses, qualitative feedback, comments</div>
          <div><strong>Recommended Visualizations:</strong></div>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>Word Cloud:</strong> Visual representation of keyword frequency</li>
            <li><strong>Sentiment Pie Chart:</strong> Shows emotional tone distribution</li>
            <li><strong>Theme Bar Chart:</strong> Groups responses into categories</li>
            <li><strong>Keyword Frequency Chart:</strong> Most mentioned terms</li>
            <li><strong>Response Cards:</strong> Display individual responses with analysis</li>
            <li><strong>Topic Modeling:</strong> Advanced clustering of similar responses</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default TextAnalysisCharts;
