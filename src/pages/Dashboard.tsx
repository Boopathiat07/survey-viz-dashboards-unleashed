
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, PieChart, TrendingUp, Users, Target, Clock } from 'lucide-react';
import SingleSelectCharts from '@/components/charts/SingleSelectCharts';
import MultiSelectCharts from '@/components/charts/MultiSelectCharts';
import RatingCharts from '@/components/charts/RatingCharts';
import LikertScaleCharts from '@/components/charts/LikertScaleCharts';
import RankingCharts from '@/components/charts/RankingCharts';
import TextAnalysisCharts from '@/components/charts/TextAnalysisCharts';
import DateAnalysisCharts from '@/components/charts/DateAnalysisCharts';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('all');

  // Dashboard overview metrics
  const overviewMetrics = {
    totalResponses: 324,
    completionRate: 87.5,
    avgTimeSpent: 8.3,
    responseRate: 65.2,
    lastUpdated: '2 minutes ago'
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Survey Analytics Dashboard</h1>
            <p className="text-gray-600 mt-1">Workplace Satisfaction Survey - Q2 2024</p>
          </div>
          <div className="flex gap-3">
            {['all', '30d', '7d'].map((period) => (
              <Button
                key={period}
                variant={selectedPeriod === period ? 'default' : 'outline'}
                onClick={() => setSelectedPeriod(period)}
                size="sm"
              >
                {period === 'all' ? 'All Time' : period === '30d' ? 'Last 30 Days' : 'Last 7 Days'}
              </Button>
            ))}
          </div>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Responses</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overviewMetrics.totalResponses}</div>
              <p className="text-xs text-muted-foreground">
                +12% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overviewMetrics.completionRate}%</div>
              <p className="text-xs text-muted-foreground">
                +3.2% from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Time Spent</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overviewMetrics.avgTimeSpent} min</div>
              <p className="text-xs text-muted-foreground">
                -0.8 min from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Response Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overviewMetrics.responseRate}%</div>
              <p className="text-xs text-muted-foreground">
                +8.1% from last month
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Chart Tabs */}
        <Tabs defaultValue="single-select" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-7">
            <TabsTrigger value="single-select">Single Select</TabsTrigger>
            <TabsTrigger value="multi-select">Multi Select</TabsTrigger>
            <TabsTrigger value="rating">Rating</TabsTrigger>
            <TabsTrigger value="likert">Likert Scale</TabsTrigger>
            <TabsTrigger value="ranking">Ranking</TabsTrigger>
            <TabsTrigger value="text">Text Analysis</TabsTrigger>
            <TabsTrigger value="date">Date Analysis</TabsTrigger>
          </TabsList>

          <TabsContent value="single-select">
            <SingleSelectCharts />
          </TabsContent>

          <TabsContent value="multi-select">
            <MultiSelectCharts />
          </TabsContent>

          <TabsContent value="rating">
            <RatingCharts />
          </TabsContent>

          <TabsContent value="likert">
            <LikertScaleCharts />
          </TabsContent>

          <TabsContent value="ranking">
            <RankingCharts />
          </TabsContent>

          <TabsContent value="text">
            <TextAnalysisCharts />
          </TabsContent>

          <TabsContent value="date">
            <DateAnalysisCharts />
          </TabsContent>
        </Tabs>

        {/* Footer */}
        <div className="text-center text-sm text-gray-500 pt-8">
          Last updated: {overviewMetrics.lastUpdated} | Survey period: March 1 - June 30, 2024
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
