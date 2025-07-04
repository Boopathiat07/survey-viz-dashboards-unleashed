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
    totalQuestions: 35,
    totalSections: 5
  };

  // Section-based survey structure with all question types
  const surveyData = {
    sections: [
      {
        id: "work_environment",
        title: "Work Environment & Culture",
        questionCount: 7,
        questions: [
          {
            id: "q1",
            title: "What is your preferred work schedule?",
            type: "single_select",
            totalResponses: 1247,
            totalOptions: 4,
            options: [
              { label: "Remote Work", responses: 561, percentage: 45.0 },
              { label: "Hybrid", responses: 374, percentage: 30.0 },
              { label: "Office-based", responses: 249, percentage: 20.0 },
              { label: "Flexible", responses: 63, percentage: 5.0 }
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
              { label: "Quiet Spaces", responses: 823, percentage: 66.0 },
              { label: "Collaborative Areas", responses: 734, percentage: 58.9 },
              { label: "Natural Light", responses: 698, percentage: 56.0 },
              { label: "Ergonomic Furniture", responses: 587, percentage: 47.1 },
              { label: "Temperature Control", responses: 456, percentage: 36.6 },
              { label: "Plants/Greenery", responses: 298, percentage: 23.9 }
            ]
          },
          {
            id: "q3",
            title: "Select your department",
            type: "dropdown",
            totalResponses: 1247,
            totalOptions: 8,
            options: [
              { label: "Engineering", responses: 289, percentage: 23.2 },
              { label: "Sales", responses: 234, percentage: 18.8 },
              { label: "Marketing", responses: 187, percentage: 15.0 },
              { label: "Operations", responses: 187, percentage: 15.0 },
              { label: "HR", responses: 156, percentage: 12.5 },
              { label: "Finance", responses: 143, percentage: 11.5 },
              { label: "Legal", responses: 25, percentage: 2.0 },
              { label: "Other", responses: 26, percentage: 2.1 }
            ]
          },
          {
            id: "q4",
            title: "Rate your workspace satisfaction",
            type: "rating",
            totalResponses: 1247,
            totalOptions: 5,
            averageStars: 4.1,
            options: [
              { label: "1 Star", responses: 18, percentage: 1.4 },
              { label: "2 Stars", responses: 45, percentage: 3.6 },
              { label: "3 Stars", responses: 187, percentage: 15.0 },
              { label: "4 Stars", responses: 623, percentage: 49.9 },
              { label: "5 Stars", responses: 374, percentage: 30.0 }
            ]
          },
          {
            id: "q5",
            title: "Our workplace promotes collaboration",
            type: "likert",
            totalResponses: 1247,
            totalOptions: 5,
            options: [
              { label: "Strongly Disagree", responses: 31, percentage: 2.5 },
              { label: "Disagree", responses: 87, percentage: 7.0 },
              { label: "Neutral", responses: 312, percentage: 25.0 },
              { label: "Agree", responses: 561, percentage: 45.0 },
              { label: "Strongly Agree", responses: 256, percentage: 20.5 }  
            ]
          },
          {
            id: "q6",
            title: "Rank office amenities by importance",
            type: "ranking",
            totalResponses: 1247,
            totalOptions: 5,
            options: [
              { label: "Cafeteria", responses: 1247, percentage: 100, averageRank: 1.9 },
              { label: "Parking", responses: 1247, percentage: 100, averageRank: 2.4 },
              { label: "Gym", responses: 1247, percentage: 100, averageRank: 2.8 },
              { label: "Game Area", responses: 1247, percentage: 100, averageRank: 3.5 },
              { label: "Meditation Room", responses: 1247, percentage: 100, averageRank: 4.4 }
            ]
          },
          {
            id: "q7",
            title: "When did you last use office facilities?",
            type: "date",
            totalResponses: 1247,
            totalOptions: 12,
            pattern: "month",
            options: [
              { label: "Dec 2023", responses: 87, percentage: 7.0 },
              { label: "Jan 2024", responses: 145, percentage: 11.6 },
              { label: "Feb 2024", responses: 167, percentage: 13.4 },
              { label: "Mar 2024", responses: 189, percentage: 15.2 },
              { label: "Apr 2024", responses: 178, percentage: 14.3 },
              { label: "May 2024", responses: 156, percentage: 12.5 },
              { label: "Jun 2024", responses: 134, percentage: 10.7 },
              { label: "Jul 2024", responses: 98, percentage: 7.9 },
              { label: "Aug 2024", responses: 76, percentage: 6.1 },
              { label: "Sep 2024", responses: 54, percentage: 4.3 },
              { label: "Oct 2024", responses: 32, percentage: 2.6 },
              { label: "Nov 2024", responses: 18, percentage: 1.4 }
            ]
          }
        ]
      },
      {
        id: "job_satisfaction",
        title: "Job Satisfaction & Performance",
        questionCount: 7,
        questions: [
          {
            id: "q8",
            title: "How satisfied are you with your current role?",
            type: "single_select",
            totalResponses: 1247,
            totalOptions: 5,
            options: [
              { label: "Very Dissatisfied", responses: 25, percentage: 2.0 },
              { label: "Dissatisfied", responses: 87, percentage: 7.0 },
              { label: "Neutral", responses: 249, percentage: 20.0 },
              { label: "Satisfied", responses: 561, percentage: 45.0 },
              { label: "Very Satisfied", responses: 325, percentage: 26.0 }
            ]
          },
          {
            id: "q9",
            title: "Which factors contribute to job satisfaction?",
            type: "multi_select",
            totalResponses: 1247,
            totalOptions: 7,
            totalSelections: 4238,
            averageSelectionsPerPerson: 3.4,
            options: [
              { label: "Work-Life Balance", responses: 948, percentage: 76.0 },
              { label: "Career Growth", responses: 823, percentage: 66.0 },
              { label: "Recognition", responses: 734, percentage: 58.9 },
              { label: "Compensation", responses: 687, percentage: 55.1 },
              { label: "Team Collaboration", responses: 598, percentage: 48.0 },
              { label: "Job Security", responses: 456, percentage: 36.6 },
              { label: "Autonomy", responses: 392, percentage: 31.4 }
            ]
          },
          {
            id: "q10",
            title: "Select your experience level",
            type: "dropdown",
            totalResponses: 1247,
            totalOptions: 6,
            options: [
              { label: "Entry Level (0-2 years)", responses: 198, percentage: 15.9 },
              { label: "Junior (2-4 years)", responses: 267, percentage: 21.4 },
              { label: "Mid-Level (4-7 years)", responses: 398, percentage: 31.9 },
              { label: "Senior (7-10 years)", responses: 234, percentage: 18.8 },
              { label: "Lead (10-15 years)", responses: 112, percentage: 9.0 },
              { label: "Expert (15+ years)", responses: 38, percentage: 3.0 }
            ]
          },
          {
            id: "q11",
            title: "Rate your overall job satisfaction",
            type: "rating",
            totalResponses: 1247,
            totalOptions: 5,
            averageStars: 3.9,
            options: [
              { label: "1 Star", responses: 25, percentage: 2.0 },
              { label: "2 Stars", responses: 62, percentage: 5.0 },
              { label: "3 Stars", responses: 249, percentage: 20.0 },
              { label: "4 Stars", responses: 561, percentage: 45.0 },
              { label: "5 Stars", responses: 350, percentage: 28.0 }
            ]
          },
          {
            id: "q12",
            title: "I feel valued as an employee",
            type: "likert",
            totalResponses: 1247,
            totalOptions: 5,
            options: [
              { label: "Strongly Disagree", responses: 43, percentage: 3.4 },
              { label: "Disagree", responses: 124, percentage: 9.9 },
              { label: "Neutral", responses: 287, percentage: 23.0 },
              { label: "Agree", responses: 498, percentage: 39.9 },
              { label: "Strongly Agree", responses: 295, percentage: 23.7 }
            ]
          },
          {
            id: "q13",
            title: "Rank job satisfaction factors by priority",
            type: "ranking",
            totalResponses: 1247,
            totalOptions: 5,
            options: [
              { label: "Salary", responses: 1247, percentage: 100, averageRank: 1.8 },
              { label: "Work-Life Balance", responses: 1247, percentage: 100, averageRank: 2.3 },
              { label: "Career Growth", responses: 1247, percentage: 100, averageRank: 2.9 },
              { label: "Company Culture", responses: 1247, percentage: 100, averageRank: 3.2 },
              { label: "Benefits", responses: 1247, percentage: 100, averageRank: 3.8 }
            ]
          },
          {
            id: "q14",
            title: "When did you start feeling satisfied with your role?",
            type: "date",
            totalResponses: 1247,
            totalOptions: 8,
            pattern: "quarter",
            options: [
              { label: "Q1 2023", responses: 89, percentage: 7.1 },
              { label: "Q2 2023", responses: 134, percentage: 10.7 },
              { label: "Q3 2023", responses: 178, percentage: 14.3 },
              { label: "Q4 2023", responses: 223, percentage: 17.9 },
              { label: "Q1 2024", responses: 267, percentage: 21.4 },
              { label: "Q2 2024", responses: 198, percentage: 15.9 },
              { label: "Q3 2024", responses: 112, percentage: 9.0 },
              { label: "Q4 2024", responses: 46, percentage: 3.7 }
            ]
          }
        ]
      },
      {
        id: "career_development",
        title: "Career Development & Training",
        questionCount: 7,
        questions: [
          {
            id: "q15",
            title: "Are you interested in career advancement?",
            type: "single_select",
            totalResponses: 1247,
            totalOptions: 3,
            options: [
              { label: "Yes, actively seeking", responses: 687, percentage: 55.1 },
              { label: "Yes, but not actively", responses: 423, percentage: 33.9 },
              { label: "No, satisfied with current role", responses: 137, percentage: 11.0 }
            ]
          },
          {
            id: "q16",
            title: "Which development areas interest you?",
            type: "multi_select",
            totalResponses: 1247,
            totalOptions: 8,
            totalSelections: 3741,
            averageSelectionsPerPerson: 3.0,
            options: [
              { label: "Technical Skills", responses: 823, percentage: 66.0 },
              { label: "Leadership", responses: 612, percentage: 49.1 },
              { label: "Communication", responses: 534, percentage: 42.8 },
              { label: "Project Management", responses: 498, percentage: 39.9 },
              { label: "Data Analysis", responses: 445, percentage: 35.7 },
              { label: "Creative Skills", responses: 334, percentage: 26.8 },
              { label: "Sales & Marketing", responses: 267, percentage: 21.4 },
              { label: "Finance", responses: 228, percentage: 18.3 }
            ]
          },
          {
            id: "q17",
            title: "Select your preferred learning format",
            type: "dropdown",
            totalResponses: 1247,
            totalOptions: 5,
            options: [
              { label: "Online Courses", responses: 456, percentage: 36.6 },
              { label: "In-Person Workshops", responses: 312, percentage: 25.0 },
              { label: "Mentorship Programs", responses: 245, percentage: 19.6 },
              { label: "Conference Attendance", responses: 156, percentage: 12.5 },
              { label: "Self-Study Materials", responses: 78, percentage: 6.3 }
            ]
          },
          {
            id: "q18",
            title: "Rate the quality of training programs",
            type: "rating",
            totalResponses: 1247,
            totalOptions: 5,
            averageStars: 3.6,
            options: [
              { label: "1 Star", responses: 62, percentage: 5.0 },
              { label: "2 Stars", responses: 124, percentage: 9.9 },
              { label: "3 Stars", responses: 374, percentage: 30.0 },
              { label: "4 Stars", responses: 436, percentage: 35.0 },
              { label: "5 Stars", responses: 251, percentage: 20.1 }
            ]
          },
          {
            id: "q19",
            title: "The company supports my career development",
            type: "likert",
            totalResponses: 1247,
            totalOptions: 5,
            options: [
              { label: "Strongly Disagree", responses: 87, percentage: 7.0 },
              { label: "Disagree", responses: 187, percentage: 15.0 },
              { label: "Neutral", responses: 374, percentage: 30.0 },
              { label: "Agree", responses: 436, percentage: 35.0 },
              { label: "Strongly Agree", responses: 163, percentage: 13.1 }
            ]
          },
          {
            id: "q20",
            title: "Rank career development priorities",
            type: "ranking",
            totalResponses: 1247,
            totalOptions: 6,
            options: [
              { label: "Skill Development", responses: 1247, percentage: 100, averageRank: 1.7 },
              { label: "Promotion Opportunities", responses: 1247, percentage: 100, averageRank: 2.4 },
              { label: "Mentorship", responses: 1247, percentage: 100, averageRank: 3.1 },
              { label: "Cross-functional Projects", responses: 1247, percentage: 100, averageRank: 3.6 },
              { label: "External Training", responses: 1247, percentage: 100, averageRank: 4.2 },
              { label: "Conference Attendance", responses: 1247, percentage: 100, averageRank: 4.9 }
            ]
          },
          {
            id: "q21",
            title: "When did you last attend training?",
            type: "date",
            totalResponses: 1247,
            totalOptions: 11,
            pattern: "month",
            options: [
              { label: "Jan 2024", responses: 145, percentage: 11.6 },
              { label: "Feb 2024", responses: 167, percentage: 13.4 },
              { label: "Mar 2024", responses: 189, percentage: 15.2 },
              { label: "Apr 2024", responses: 178, percentage: 14.3 },
              { label: "May 2024", responses: 156, percentage: 12.5 },
              { label: "Jun 2024", responses: 134, percentage: 10.7 },
              { label: "Jul 2024", responses: 98, percentage: 7.9 },
              { label: "Aug 2024", responses: 76, percentage: 6.1 },
              { label: "Sep 2024", responses: 54, percentage: 4.3 },
              { label: "Oct 2024", responses: 32, percentage: 2.6 },
              { label: "Nov 2024", responses: 18, percentage: 1.4 }
            ]
          }
        ]
      },
      {
        id: "compensation_benefits",
        title: "Compensation & Benefits",
        questionCount: 7,
        questions: [
          {
            id: "q22",
            title: "Are you satisfied with your current compensation?",
            type: "single_select",
            totalResponses: 1247,
            totalOptions: 4,
            options: [
              { label: "Very Satisfied", responses: 187, percentage: 15.0 },
              { label: "Satisfied", responses: 498, percentage: 39.9 },
              { label: "Dissatisfied", responses: 436, percentage: 35.0 },
              { label: "Very Dissatisfied", responses: 126, percentage: 10.1 }
            ]
          },
          {
            id: "q23",
            title: "Which benefits are most important to you?",
            type: "multi_select",
            totalResponses: 1247,
            totalOptions: 6,
            totalSelections: 3986,
            averageSelectionsPerPerson: 3.2,
            options: [
              { label: "Health Insurance", responses: 1085, percentage: 87.0 },
              { label: "Flexible Hours", responses: 948, percentage: 76.0 },
              { label: "Remote Work", responses: 761, percentage: 61.0 },
              { label: "Professional Development", responses: 598, percentage: 48.0 },
              { label: "Gym Membership", responses: 337, percentage: 27.0 },
              { label: "Free Meals", responses: 262, percentage: 21.0 }
            ]
          },
          {
            id: "q24",
            title: "Select your salary range",
            type: "dropdown",
            totalResponses: 1247,
            totalOptions: 7,
            options: [
              { label: "$30,000 - $50,000", responses: 156, percentage: 12.5 },
              { label: "$50,000 - $70,000", responses: 234, percentage: 18.8 },
              { label: "$70,000 - $90,000", responses: 312, percentage: 25.0 },
              { label: "$90,000 - $110,000", responses: 287, percentage: 23.0 },
              { label: "$110,000 - $130,000", responses: 187, percentage: 15.0 },
              { label: "$130,000 - $150,000", responses: 49, percentage: 3.9 },
              { label: "$150,000+", responses: 22, percentage: 1.8 }
            ]
          },
          {
            id: "q25",
            title: "Rate the value of your benefits package",
            type: "rating",
            totalResponses: 1247,
            totalOptions: 5,
            averageStars: 3.4,
            options: [
              { label: "1 Star", responses: 87, percentage: 7.0 },
              { label: "2 Stars", responses: 156, percentage: 12.5 },
              { label: "3 Stars", responses: 436, percentage: 35.0 },
              { label: "4 Stars", responses: 374, percentage: 30.0 },
              { label: "5 Stars", responses: 194, percentage: 15.6 }
            ]
          },
          {
            id: "q26",
            title: "The compensation is fair for my role",
            type: "likert",
            totalResponses: 1247,
            totalOptions: 5,
            options: [
              { label: "Strongly Disagree", responses: 124, percentage: 9.9 },
              { label: "Disagree", responses: 287, percentage: 23.0 },
              { label: "Neutral", responses: 312, percentage: 25.0 },
              { label: "Agree", responses: 374, percentage: 30.0 },
              { label: "Strongly Agree", responses: 150, percentage: 12.0 }
            ]
          },
          {
            id: "q27",
            title: "Rank compensation components by importance",
            type: "ranking",
            totalResponses: 1247,
            totalOptions: 5,
            options: [
              { label: "Base Salary", responses: 1247, percentage: 100, averageRank: 1.2 },
              { label: "Health Benefits", responses: 1247, percentage: 100, averageRank: 2.1 },
              { label: "Retirement Plan", responses: 1247, percentage: 100, averageRank: 2.8 },
              { label: "Bonus/Incentives", responses: 1247, percentage: 100, averageRank: 3.4 },
              { label: "Stock Options", responses: 1247, percentage: 100, averageRank: 4.5 }
            ]
          },
          {
            id: "q28",
            title: "When did you last receive a raise?",
            type: "date",
            totalResponses: 1247,
            totalOptions: 4,
            pattern: "year",
            options: [
              { label: "2021", responses: 98, percentage: 7.9 },
              { label: "2022", responses: 287, percentage: 23.0 },
              { label: "2023", responses: 561, percentage: 45.0 },
              { label: "2024", responses: 301, percentage: 24.1 }
            ]
          }
        ]
      },
      {
        id: "communication_feedback",
        title: "Communication & Feedback",
        questionCount: 7,
        questions: [
          {
            id: "q29",
            title: "How effective is communication in your team?",
            type: "single_select",
            totalResponses: 1247,
            totalOptions: 4,
            options: [
              { label: "Excellent", responses: 234, percentage: 18.8 },
              { label: "Good", responses: 561, percentage: 45.0 },
              { label: "Fair", responses: 312, percentage: 25.0 },
              { label: "Poor", responses: 140, percentage: 11.2 }
            ]
          },
          {
            id: "q30",
            title: "Which communication tools do you prefer?",
            type: "multi_select",
            totalResponses: 1247,
            totalOptions: 6,
            totalSelections: 2869,
            averageSelectionsPerPerson: 2.3,
            options: [
              { label: "Email", responses: 823, percentage: 66.0 },
              { label: "Slack/Teams", responses: 734, percentage: 58.9 },
              { label: "Video Calls", responses: 612, percentage: 49.1 },
              { label: "In-Person Meetings", responses: 445, percentage: 35.7 },
              { label: "Phone Calls", responses: 156, percentage: 12.5 },
              { label: "Project Management Tools", responses: 99, percentage: 7.9 }
            ]
          },
          {
            id: "q31",
            title: "Select your preferred feedback frequency",
            type: "dropdown",
            totalResponses: 1247,
            totalOptions: 5,
            options: [
              { label: "Weekly", responses: 187, percentage: 15.0 },
              { label: "Bi-weekly", responses: 312, percentage: 25.0 },
              { label: "Monthly", responses: 498, percentage: 39.9 },
              { label: "Quarterly", responses: 187, percentage: 15.0 },
              { label: "Annually", responses: 63, percentage: 5.1 }
            ]
          },
          {
            id: "q32",
            title: "Rate manager support and feedback quality",
            type: "rating",
            totalResponses: 1247,
            totalOptions: 5,
            averageStars: 3.8,
            options: [
              { label: "1 Star", responses: 37, percentage: 3.0 },
              { label: "2 Stars", responses: 87, percentage: 7.0 },
              { label: "3 Stars", responses: 312, percentage: 25.0 },
              { label: "4 Stars", responses: 436, percentage: 35.0 },
              { label: "5 Stars", responses: 375, percentage: 30.1 }
            ]
          },
          {
            id: "q33",
            title: "I receive constructive feedback regularly",
            type: "likert",
            totalResponses: 1247,
            totalOptions: 5,
            options: [
              { label: "Strongly Disagree", responses: 62, percentage: 5.0 },
              { label: "Disagree", responses: 156, percentage: 12.5 },
              { label: "Neutral", responses: 287, percentage: 23.0 },
              { label: "Agree", responses: 498, percentage: 39.9 },
              { label: "Strongly Agree", responses: 244, percentage: 19.6 }
            ]
          },
          {
            id: "q34",
            title: "Rank communication preferences",
            type: "ranking",
            totalResponses: 1247,
            totalOptions: 4,
            options: [
              { label: "Face-to-Face", responses: 1247, percentage: 100, averageRank: 1.6 },
              { label: "Video Calls", responses: 1247, percentage: 100, averageRank: 2.3 },
              { label: "Email", responses: 1247, percentage: 100, averageRank: 2.8 },
              { label: "Chat/Messaging", responses: 1247, percentage: 100, averageRank: 3.3 }
            ]
          },
          {
            id: "q35",
            title: "When did you last have a one-on-one meeting?",
            type: "date",
            totalResponses: 1247,
            totalOptions: 12,
            pattern: "week",
            options: [
              { label: "Week 45", responses: 234, percentage: 18.8 },
              { label: "Week 46", responses: 187, percentage: 15.0 },
              { label: "Week 47", responses: 156, percentage: 12.5 },
              { label: "Week 48", responses: 134, percentage: 10.7 },
              { label: "Week 49", responses: 112, percentage: 9.0 },
              { label: "Week 50", responses: 98, percentage: 7.9 },
              { label: "Week 51", responses: 87, percentage: 7.0 },
              { label: "Week 52", responses: 76, percentage: 6.1 },
              { label: "Week 1", responses: 65, percentage: 5.2 },
              { label: "Week 2", responses: 54, percentage: 4.3 },
              { label: "Week 3", responses: 32, percentage: 2.6 },
              { label: "Week 4", responses: 12, percentage: 1.0 }
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
          yaxis: { labels: { show: false } },
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
