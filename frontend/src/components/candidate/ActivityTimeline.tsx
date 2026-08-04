"use client";

import {
    Briefcase,
    FileText,
    Sparkles,
    CheckCircle2,
    CalendarDays,
} from "lucide-react";

interface ActivityItem {
    id: number;
    title: string;
    description: string;
    time: string;
    type:
    | "resume"
    | "application"
    | "recommendation"
    | "shortlisted"
    | "interview";
}

interface ActivityTimelineProps {
    activities?: ActivityItem[];
}

export default function ActivityTimeline({
    activities = [],
}: ActivityTimelineProps) {
    const timeline: ActivityItem[] =
        activities.length > 0
            ? activities
            : [
                {
                    id: 1,
                    type: "resume",
                    title: "Resume Uploaded",
                    description:
                        "Your resume is ready for AI analysis.",
                    time: "Today",
                },
                {
                    id: 2,
                    type: "application",
                    title: "Applied to Frontend Developer",
                    description:
                        "Application submitted successfully.",
                    time: "Yesterday",
                },
                {
                    id: 3,
                    type: "recommendation",
                    title: "New AI Recommendations",
                    description:
                        "3 jobs were matched to your profile.",
                    time: "2 days ago",
                },
                {
                    id: 4,
                    type: "shortlisted",
                    title: "Application Shortlisted",
                    description:
                        "You have been shortlisted for Backend Developer.",
                    time: "4 days ago",
                },
                {
                    id: 5,
                    type: "interview",
                    title: "Interview Scheduled",
                    description:
                        "Technical interview scheduled for next week.",
                    time: "1 week ago",
                },
            ];

    function getIcon(type: ActivityItem["type"]) {
        switch (type) {
            case "resume":
                return (
                    <FileText
                        size={20}
                        className="text-blue-600"
                    />
                );

            case "application":
                return (
                    <Briefcase
                        size={20}
                        className="text-indigo-600"
                    />
                );

            case "recommendation":
                return (
                    <Sparkles
                        size={20}
                        className="text-purple-600"
                    />
                );

            case "shortlisted":
                return (
                    <CheckCircle2
                        size={20}
                        className="text-green-600"
                    />
                );

            default:
                return (
                    <CalendarDays
                        size={20}
                        className="text-orange-600"
                    />
                );
        }
    }

    return (
        <section className="rounded-2xl border border-gray-200 dark:border-slate-800 bg-white dark:bg-slate-900">

            <div className="border-b border-gray-200 dark:border-slate-800 p-6">

                <h2 className="text-2xl font-bold">
                    Activity Timeline
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                    Recent activity across your career journey.
                </p>

            </div>

            <div className="p-6">

                <div className="space-y-6">

                    {timeline.map((activity) => (

                        <div
                            key={activity.id}
                            className="flex gap-5"
                        >

                            <div className="relative">

                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 dark:bg-slate-800">

                                    {getIcon(activity.type)}

                                </div>

                                {activity.id !==
                                    timeline.length && (
                                        <div className="absolute left-1/2 top-12 h-10 w-px -translate-x-1/2 bg-gray-300 dark:bg-slate-700" />
                                    )}

                            </div>

                            <div className="flex-1 pb-6">

                                <div className="flex items-center justify-between">

                                    <h3 className="font-semibold">
                                        {activity.title}
                                    </h3>

                                    <span className="text-xs text-gray-500">
                                        {activity.time}
                                    </span>

                                </div>

                                <p className="mt-2 text-sm text-gray-500">

                                    {activity.description}

                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}