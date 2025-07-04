
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BarChart3, PieChart, TrendingUp, Users, Target, Clock } from 'lucide-react';
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const Dashboard = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('all');

  // Dashboard overview metrics
  const overviewMetrics = {
    totalResponses: 1247,
    completionRate: 92.3,
    avgTimeSpent: 12.8,
    responseRate: 78.5,
    lastUpdated: '5 minutes ago',
    totalQuestions: 63,
    totalSections: 5
  };

  // Section-based survey structure
  const surveyData = {
    sections: [
      {
        id: "work_environment",
        title: "Work Environment & Culture",
        questionCount: 12,
        questions: [
          {
            id: "q1",
            title: "What is your preferred work schedule?",
            type: "single_select",
            totalResponses: 1247,
            totalOptions: 4,
            options: [
              { label: "Remote Work", responses: 561 },
              { label: "Hybrid", responses: 374 },
              { label: "Office-based", responses: 249 },
              { label: "Flexible", responses: 63 }
            ]
          },
          {
            id: "q2",
            title: "Which work environment features are important?",
            type: "multi_select",
            totalResponses: 1247,
            totalOptions: 6,
            totalSelections: 3596,
            averageSelectionsPerPerson: 2.9,
            options: [
              { label: "Quiet Spaces", responses: 823 },
              { label: "Collaborative Areas", responses: 734 },
              { label: "Natural Light", responses: 698 },
              { label: "Ergonomic Furniture", responses: 587 },
              { label: "Temperature Control", responses: 456 },
              { label: "Plants/Greenery", responses: 298 }
            ]
          },
          {
            id: "q3",
            title: "Select your department",
            type: "dropdown",
            totalResponses: 1247,
            totalOptions: 8,
            options: [
              { label: "Engineering", responses: 289 },
              { label: "Sales", responses: 234 },
              { label: "Marketing", responses: 187 },
              { label: "Operations", responses: 187 },
              { label: "HR", responses: 156 },
              { label: "Finance", responses: 143 },
              { label: "Legal", responses: 25 },
              { label: "Other", responses: 26 }
            ]
          }
        ]
      },
      {
        id: "job_satisfaction",
        title: "Job Satisfaction & Performance",
        questionCount: 15,
        questions: [
          {
            id: "q4",
            title: "Rate your overall job satisfaction",
            type: "rating",
            totalResponses: 1247,
            totalOptions: 5,
            averageStars: 3.9,
            options: [
              { label: "1 Star", responses: 25 },
              { label: "2 Stars", responses: 62 },
              { label: "3 Stars", responses: 249 },
              { label: "4 Stars", responses: 561 },
              { label: "5 Stars", responses: 350 }
            ]
          },
          {
            id: "q5",
            title: "Our company values work-life balance",
            type: "likert",
            totalResponses: 1247,
            totalOptions: 5,
            options: [
              { label: "Strongly Disagree", responses: 25 },
              { label: "Disagree", responses: 100 },
              { label: "Neutral", responses: 249 },
              { label: "Agree", responses: 498 },
              { label: "Strongly Agree", responses: 375 }
            ]
          },
          {
            id: "q6",
            title: "Rank job factors by importance",
            type: "ranking",
            totalResponses: 1247,
            totalOptions: 5,
            options: [
              { label: "Salary", responses: 1247, averageRank: 1.8 },
              { label: "Work-Life Balance", responses: 1247, averageRank: 2.3 },
              { label: "Career Growth", responses: 1247, averageRank: 2.9 },
              { label: "Company Culture", responses: 1247, averageRank: 3.2 },
              { label: "Benefits", responses: 1247, averageRank: 3.8 }
            ]
          }
        ]
      },
      {
        id: "career_development",
        title: "Career Development & Training",
        questionCount: 11,
        questions: [
          {
            id: "q7",
            title: "When did you last attend training?",
            type: "date",
            totalResponses: 1247,
            totalOptions: 11,
            pattern: "month",
            options: [
              { label: "Jan 2024", responses: 145 },
              { label: "Feb 2024", responses: 167 },
              { label: "Mar 2024", responses: 189 },
              { label: "Apr 2024", responses: 178 },
              { label: "May 2024", responses: 156 },
              { label: "Jun 2024", responses: 134 },
              { label: "Jul 2024", responses: 98 },
              { label: "Aug 2024", responses: 76 },
              { label: "Sep 2024", responses: 54 },
              { label: "Oct 2024", responses: 32 },
              { label: "Nov 2024", responses: 18 }
            ]
          }
        ]
      },
      {
        id: "compensation_benefits",
        title: "Compensation & Benefits",
        questionCount: 13,
        questions: [
          {
            id: "q8",
            title: "Which benefits are most important?",
            type: "multi_select",
            totalResponses: 1247,
            totalOptions: 6,
            totalSelections: 3986,
            averageSelectionsPerPerson: 3.2,
            options: [
              { label: "Health Insurance", responses: 1085 },
              { label: "Flexible Hours", responses: 948 },
              { label: "Remote Work", responses: 761 },
              { label: "Professional Development", responses: 598 },
              { label: "Gym Membership", responses: 337 },
              { label: "Free Meals", responses: 262 }
            ]
          }
        ]
      },
      {
        id: "communication_feedback",
        title: "Communication & Feedback",
        questionCount: 12,
        questions: [
          {
            id: "q9",
            title: "Rate manager support",
            type: "rating",
            totalResponses: 1247,
            totalOptions: 5,
            averageStars: 3.8,
            options: [
              { label: "1 Star", responses: 37 },
              { label: "2 Stars", responses: 87 },
              { label: "3 Stars", responses: 312 },
              { label: "4 Stars", responses: 436 },
              { label: "5 Stars", responses: 375 }
            ]
          }
        ]
      }
    ]
  };

  const createChartOptions = (question: any): ApexOptions => {
    const baseOptions = {
      chart: { height: 300 },
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0', '#3F51B5', '#E91E63', '#9C27B0'],
      legend: { show: false },
      dataLabels: { enabled: false },
      grid: { show: false }
    };

    switch (question.type) {
      case 'single_select':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'donut' as const },
          labels: question.options.map((opt: any) => opt.label),
          tooltip: { y: { formatter: (val: number) => `${val} responses` } }
        };
      
      case 'multi_select':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'bar' as const },
          plotOptions: { bar: { horizontal: true } },
          xaxis: { categories: question.options.map((opt: any) => opt.label), labels: { show: false } },
          yaxis: { labels: { show: false } },
          tooltip: { y: { formatter: (val: number) => `${val} selections` } }
        };
      
      case 'dropdown':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'pie' as const },
          labels: question.options.map((opt: any) => opt.label),
          tooltip: { y: { formatter: (val: number) => `${val} responses` } }
        };
      
      case 'rating':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'radialBar' as const },
          plotOptions: {
            radialBar: {
              startAngle: -90,
              endAngle: 90,
              dataLabels: {
                name: { show: false },
                value: { 
                  show: true,
                  fontSize: '18px', 
                  formatter: () => `${question.averageStars}/${question.totalOptions}`
                }
              }
            }
          }
        };
      
      case 'likert':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'bar' as const },
          plotOptions: { bar: { horizontal: true, distributed: true } },
          xaxis: { categories: question.options.map((opt: any) => opt.label), labels: { show: false } },
          yaxis: { labels: { show: false } },
          colors: ['#FF4560', '#FF8A80', '#FEB019', '#00E396', '#008FFB'],
          tooltip: { y: { formatter: (val: number) => `${val} responses` } }
        };
      
      case 'ranking':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'heatmap' as const },
          xaxis: { categories: ['Priority'], labels: { show: false } },
          yaxis: { categories: question.options.map((opt: any) => opt.label), labels: { show: false } },
          tooltip: { y: { formatter: (val: number) => `Rank: ${val.toFixed(1)}` } }
        };
      
      case 'date':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'area' as const },
          xaxis: { categories: question.options.map((opt: any) => opt.label), labels: { show: false } },
          yaxis: { labels: { show: false } },
          tooltip: { y: { formatter: (val: number) => `${val} responses` } }
        };
      
      default:
        return baseOptions;
    }
  };

  const getChartSeries = (question: any) => {
    switch (question.type) {
      case 'single_select':
      case 'dropdown':
        return question.options.map((opt: any) => opt.responses);
      
      case 'multi_select':
        return [{ name: 'Selections', data: question.options.map((opt: any) => opt.responses) }];
      
      case 'rating':
        return [(question.averageStars / question.totalOptions) * 100];
      
      case 'likert':
        return [{ name: 'Responses', data: question.options.map((opt: any) => opt.responses) }];
      
      case 'ranking':
        return [{ 
          name: 'Priority',
          data: question.options.map((opt: any) => ({
            x: 'Priority',
            y: 6 - opt.averageRank
          }))
        }];
      
      case 'date':
        return [{ name: 'Responses', data: question.options.map((opt: any) => opt.responses) }];
      
      default:
        return [];
    }
  };

  const getChartType = (questionType: string) => {
    const typeMap = {
      'single_select': 'donut',
      'multi_select': 'bar',
      'dropdown': 'pie',
      'rating': 'radialBar',
      'likert': 'bar',
      'ranking': 'heatmap',
      'date': 'area'
    };
    return typeMap[questionType as keyof typeof typeMap] || 'bar';
  };

  const renderQuestion = (question: any) => (
    <Card key={question.id} className="mb-4">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-base">{question.title}</CardTitle>
          <Badge variant="outline" className="text-xs">
            {question.type.replace('_', ' ')}
          </Badge>
        </div>
        <div className="flex gap-2 flex-wrap">
          <Badge variant="outline" className="text-xs">
            Responses: {question.totalResponses}
          </Badge>
          <Badge variant="outline" className="text-xs">
            Options: {question.totalOptions}
          </Badge>
          {question.totalSelections && (
            <Badge variant="outline" className="text-xs">
              Selections: {question.totalSelections}
            </Badge>
          )}
          {question.averageStars && (
            <Badge variant="outline" className="text-xs">
              Avg: {question.averageStars}★
            </Badge>
          )}
          {question.pattern && (
            <Badge variant="outline" className="text-xs">
              Pattern: {question.pattern}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <Chart 
          options={createChartOptions(question)} 
          series={getChartSeries(question)} 
          type={getChartType(question.type) as any}
          height={300} 
        />
      </CardContent>
    </Card>
  );

  const renderSection = (section: any) => (
    <div key={section.id} className="space-y-4">
      <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
        <h3 className="text-xl font-semibold">{section.title}</h3>
        <div className="flex gap-4 mt-2 text-sm">
          <Badge variant="outline">Questions: {section.questionCount}</Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        {section.questions.map(renderQuestion)}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Employee Satisfaction Survey 2024</h1>
            <p className="text-gray-600 mt-1">Section-wise analysis • {overviewMetrics.totalSections} Sections • {overviewMetrics.totalQuestions} Questions</p>
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
              <p className="text-xs text-muted-foreground">+18% from last survey</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overviewMetrics.completionRate}%</div>
              <p className="text-xs text-muted-foreground">+5.1% from last survey</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Time</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overviewMetrics.avgTimeSpent} min</div>
              <p className="text-xs text-muted-foreground">+2.1 min from target</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Sections</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overviewMetrics.totalSections}</div>
              <p className="text-xs text-muted-foreground">Survey sections</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Questions</CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{overviewMetrics.totalQuestions}</div>
              <p className="text-xs text-muted-foreground">Total questions</p>
            </CardContent>
          </Card>
        </div>

        {/* Section Tabs */}
        <Tabs defaultValue={surveyData.sections[0].id} className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            {surveyData.sections.map((section) => (
              <TabsTrigger key={section.id} value={section.id} className="text-xs">
                {section.title.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {surveyData.sections.map((section) => (
            <TabsContent key={section.id} value={section.id}>
              {renderSection(section)}
            </TabsContent>
          ))}
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
