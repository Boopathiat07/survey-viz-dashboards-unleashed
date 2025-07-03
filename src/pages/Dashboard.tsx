
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
import DropdownCharts from '@/components/charts/DropdownCharts';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('all');

  // Dashboard overview metrics
  const overviewMetrics = {
    totalResponses: 1247,
    completionRate: 92.3,
    avgTimeSpent: 12.8,
    responseRate: 78.5,
    lastUpdated: '5 minutes ago',
    totalQuestions: 28,
    questionBreakdown: {
      singleSelect: 8,
      multiSelect: 4,
      rating: 6,
      likert: 5,
      ranking: 2,
      text: 2,
      date: 3,
      dropdown: 3
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Employee Satisfaction Survey 2024</h1>
            <p className="text-gray-600 mt-1">Comprehensive workplace experience analysis • {overviewMetrics.totalQuestions} Questions</p>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Responses</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overviewMetrics.totalResponses}</div>
              <p className="text-xs text-muted-foreground">
                +18% from last survey
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
                +5.1% from last survey
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overviewMetrics.avgTimeSpent} min</div>
              <p className="text-xs text-muted-foreground">
                +2.1 min from target
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
                +12.3% from last survey
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Questions</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overviewMetrics.totalQuestions}</div>
              <p className="text-xs text-muted-foreground">
                Across 8 categories
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Question Type Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Survey Structure Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {Object.entries(overviewMetrics.questionBreakdown).map(([type, count]) => (
                <div key={type} className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-lg font-bold text-blue-600">{count}</div>
                  <div className="text-xs text-gray-600 capitalize">{type.replace(/([A-Z])/g, ' $1').trim()}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Chart Tabs */}
        <Tabs defaultValue="single-select" className="space-y-4">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="single-select">Single Select</TabsTrigger>
            <TabsTrigger value="multi-select">Multi Select</TabsTrigger>
            <TabsTrigger value="dropdown">Dropdown</TabsTrigger>
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

          <TabsContent value="dropdown">
            <DropdownCharts />
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
          Last updated: {overviewMetrics.lastUpdated} | Survey period: January 1 - December 31, 2024
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
