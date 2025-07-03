
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Star, StarHalf } from 'lucide-react';

const RatingCharts = () => {
  const satisfactionData = [
    { rating: '5 Stars', value: 128, percentage: 40, stars: 5 },
    { rating: '4 Stars', value: 96, percentage: 30, stars: 4 },
    { rating: '3 Stars', value: 64, percentage: 20, stars: 3 },
    { rating: '2 Stars', value: 24, percentage: 7.5, stars: 2 },
    { rating: '1 Star', value: 8, percentage: 2.5, stars: 1 }
  ];

  const productRatings = [
    { product: 'User Interface', rating: 4.3, responses: 298 },
    { product: 'Customer Support', rating: 4.1, responses: 287 },
    { product: 'Product Quality', rating: 3.9, responses: 312 },
    { product: 'Value for Money', rating: 3.7, responses: 289 },
    { product: 'Delivery Speed', rating: 4.5, responses: 276 }
  ];

  const COLORS = ['#22C55E', '#84CC16', '#EAB308', '#F97316', '#EF4444'];

  const StarRating = ({ rating }: { rating: number }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <div key={i}>
            {i < fullStars ? (
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ) : i === fullStars && hasHalfStar ? (
              <StarHalf className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            ) : (
              <Star className="h-4 w-4 text-gray-300" />
            )}
          </div>
        ))}
        <span className="ml-2 text-sm font-medium">{rating}</span>
      </div>
    );
  };

  const GaugeChart = ({ rating, maxRating = 5 }: { rating: number; maxRating?: number }) => {
    const percentage = (rating / maxRating) * 100;
    const strokeDasharray = 2 * Math.PI * 45;
    const strokeDashoffset = strokeDasharray - (strokeDasharray * percentage) / 100;

    return (
      <div className="relative w-32 h-32 mx-auto">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-200"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="text-blue-500"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="text-xl font-bold">{rating}</div>
            <div className="text-xs text-gray-500">/ {maxRating}</div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Rating Questions</h2>
        <p className="text-gray-600">Visualizations for star ratings, numerical scales, and satisfaction scores</p>
      </div>

      {/* Customer Satisfaction Rating */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Customer Satisfaction - Bar Chart</CardTitle>
            <p className="text-sm text-gray-600">"Rate your satisfaction with our service (1-5 stars)"</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={satisfactionData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="rating" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => [
                    `${value} responses (${satisfactionData.find(d => d.value === value)?.percentage}%)`,
                    'Count'
                  ]}
                />
                <Bar dataKey="value" fill="#0088FE" />
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg text-center">
              <div className="text-lg font-semibold text-blue-800">Average Rating: 4.1/5</div>
              <StarRating rating={4.1} />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Rating Distribution - Pie Chart</CardTitle>
            <p className="text-sm text-gray-600">Percentage breakdown of ratings</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={satisfactionData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({rating, percentage}) => `${rating}: ${percentage}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {satisfactionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value} responses`, 'Count']} />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Product Ratings Comparison */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Product Aspect Ratings - Horizontal Bar with Stars</CardTitle>
          <p className="text-sm text-gray-600">Average ratings across different product aspects</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {productRatings.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="font-medium">{item.product}</div>
                  <div className="text-sm text-gray-500">{item.responses} responses</div>
                </div>
                <div className="flex items-center space-x-4">
                  <StarRating rating={item.rating} />
                  <div className="w-32 bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full" 
                      style={{ width: `${(item.rating / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Gauge Chart for Overall Rating */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Overall Satisfaction</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <GaugeChart rating={4.1} />
            <div className="mt-2 text-sm text-gray-600">Excellent</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Product Quality</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <GaugeChart rating={3.9} />
            <div className="mt-2 text-sm text-gray-600">Good</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Customer Support</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <GaugeChart rating={4.5} />
            <div className="mt-2 text-sm text-gray-600">Excellent</div>
          </CardContent>
        </Card>
      </div>

      {/* Chart Type Suggestions */}
      <Card className="bg-yellow-50 border-yellow-200">
        <CardHeader>
          <CardTitle className="text-lg text-yellow-800">Chart Recommendations for Rating Questions</CardTitle>
        </CardHeader>
        <CardContent className="text-sm space-y-2">
          <div><strong>Best for:</strong> Star ratings, numerical scales, satisfaction scores</div>
          <div><strong>Recommended Charts:</strong></div>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li><strong>Bar Chart:</strong> Shows distribution of each rating level</li>
            <li><strong>Histogram:</strong> Displays rating frequency patterns</li>
            <li><strong>Gauge Chart:</strong> Emphasizes average rating prominently</li>
            <li><strong>Star Rating Display:</strong> Visual representation with actual stars</li>
            <li><strong>Box Plot:</strong> Shows rating distribution and outliers</li>
            <li><strong>Progress Bars:</strong> Linear representation of rating scales</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default RatingCharts;
