
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Chart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

const SingleSelectChartsApex = () => {
  // Question 1: Work Schedule Preference
  const workScheduleQuestion = {
    id: "q1_work_schedule",
    title: "What is your preferred work schedule?",
    totalResponses: 1247,
    totalOptions: 4,
    options: [
      { id: "remote", label: "Remote Work", responses: 561, percentage: 45.0 },
      { id: "hybrid", label: "Hybrid", responses: 374, percentage: 30.0 },
      { id: "office", label: "Office-based", responses: 249, percentage: 20.0 },
      { id: "flexible", label: "Flexible", responses: 63, percentage: 5.0 }
    ]
  };

  // Question 2: Communication Method
  const communicationQuestion = {
    id: "q2_communication",
    title: "What is your preferred communication method?",
    totalResponses: 1247,
    totalOptions: 5,
    options: [
      { id: "email", label: "Email", responses: 436, percentage: 35.0 },
      { id: "slack", label: "Slack/Teams", responses: 374, percentage: 30.0 },
      { id: "video", label: "Video Calls", responses: 249, percentage: 20.0 },
      { id: "person", label: "In-Person", responses: 125, percentage: 10.0 },
      { id: "phone", label: "Phone Calls", responses: 63, percentage: 5.0 }
    ]
  };

  // Question 3: Meeting Frequency
  const meetingQuestion = {
    id: "q3_meeting_frequency",
    title: "How often do you prefer team meetings?",
    totalResponses: 1247,
    totalOptions: 5,
    options: [
      { id: "daily", label: "Daily", responses: 187, percentage: 15.0 },
      { id: "weekly", label: "Weekly", responses: 498, percentage: 40.0 },
      { id: "biweekly", label: "Bi-weekly", responses: 374, percentage: 30.0 },
      { id: "monthly", label: "Monthly", responses: 125, percentage: 10.0 },
      { id: "asneeded", label: "As needed", responses: 63, percentage: 5.0 }
    ]
  };

  const createChartOptions = (question: any, chartType: string) => {
    const baseOptions: ApexOptions = {
      chart: { height: 350 },
      title: { text: `${question.title} - ${chartType}` },
      colors: ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']
    };

    switch (chartType) {
      case 'Pie Chart':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'pie' },
          labels: question.options.map((opt: any) => opt.label)
        };
      case 'Bar Chart':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'bar' },
          xaxis: { categories: question.options.map((opt: any) => opt.label) }
        };
      case 'Donut Chart':
        return {
          ...baseOptions,
          chart: { ...baseOptions.chart, type: 'donut' },
          labels: question.options.map((opt: any) => opt.label)
        };
      default:
        return baseOptions;
    }
  };

  const renderQuestionSection = (question: any, bgColor: string, borderColor: string) => (
    <div className="space-y-4">
      <div className={`${bgColor} p-4 rounded-lg border-l-4 ${borderColor}`}>
        <h3 className="text-xl font-semibold">{question.title}</h3>
        <div className="flex gap-4 mt-2 text-sm">
          <Badge variant="outline">Total Responses: {question.totalResponses}</Badge>
          <Badge variant="outline">Total Options: {question.totalOptions}</Badge>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Pie Chart View</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart 
              options={createChartOptions(question, 'Pie Chart')} 
              series={question.options.map((opt: any) => opt.responses)} 
              type="pie" 
              height={350} 
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Bar Chart View</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart 
              options={createChartOptions(question, 'Bar Chart')} 
              series={[{ name: 'Responses', data: question.options.map((opt: any) => opt.responses) }]} 
              type="bar" 
              height={350} 
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Donut Chart View</CardTitle>
          </CardHeader>
          <CardContent>
            <Chart 
              options={createChartOptions(question, 'Donut Chart')} 
              series={question.options.map((opt: any) => opt.responses)} 
              type="donut" 
              height={350} 
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold">Single Select Questions - Individual Analysis</h2>
        <p className="text-gray-600">Each question analyzed with multiple chart types</p>
      </div>

      {renderQuestionSection(workScheduleQuestion, "bg-blue-50", "border-blue-500")}
      {renderQuestionSection(communicationQuestion, "bg-green-50", "border-green-500")}
      {renderQuestionSection(meetingQuestion, "bg-purple-50", "border-purple-500")}
    </div>
  );
};

export default SingleSelectChartsApex;
