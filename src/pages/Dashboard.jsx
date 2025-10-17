import React, { useState } from "react";
import Button from "../ui/button";
import RevisonProblemCard from "../ui/RevisonProblemCard";
import {
  Shuffle,
  BookOpen,
  Plus,
  TrendingUp,
  Target,
  Zap,
  Clock,
  CircleCheckBig,
} from "lucide-react";
import StatsCards from "../ui/StatCards";
import Bucket from "../ui/buckets";
import StreakCard from "../ui/StreakCard";
import ProgressCard from "../ui/ProgressCard";
import Sidebar from "../ui/Sidebar";

const statCards = [
  {
    title: "Total Problems",
    value: "100",
    icons: TrendingUp,
    bgColor: "#192a37",
    iconColor: "#1ba6ed",
  },
  {
    title: "Strict Mode",
    value: "20",
    icons: Target,
    bgColor: "#2e2723",
    iconColor: "#ff922b",
    description: "High-intensity revision",
  },
  {
    title: "Normal Mode",
    value: "125",
    icons: Zap,
    bgColor: "#172d35",
    iconColor: "#03c4d3",
    description: "Regular practice schedule",
  },
  {
    title: "Avg Review Time",
    value: "18",
    icons: Clock,
    bgColor: "#2f2a21",
    iconColor: "#daad1e",
  },
  {
    title: "Success Rate",
    value: "87%",
    icons: CircleCheckBig,
    bgColor: "#1a2d22",
    iconColor: "#31b931",
  },
];

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen w-full bg-[var(--background)] mt-4 text-[var(--primary)] overflow-x-hidden">
      <Sidebar onCollapseChange={setSidebarCollapsed} />
      <div className={`ml-0 transition-all duration-300 ${sidebarCollapsed ? 'md:ml-16' : 'md:ml-64'}`}>
        {/* Header */}
        <div className="pt-20 px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="font-medium text-4xl mb-2">Dashboard</h1>
            <p className="text-[var(--accent-foreground)]">
              Welcome back, Saicharan 👋 You have{" "}
              <span className="text-[var(--normal-secondary)] font-semibold">
                8 problems
              </span>{" "}
              due for revision today.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <Button icon={Plus} name="Add Problem" />
            <Button icon={Shuffle} name="Random Practice" />
            <Button icon={BookOpen} name="Study Resources" />
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 mt-5">
          {statCards.map((card, idx) => (
            <StatsCards
              key={idx}
              title={card.title}
              value={card.value}
              icons={card.icons}
              bgColor={card.bgColor}
              iconColor={card.iconColor}
            />
          ))}
        </div>

        {/* Main Custom Grid */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold mb-6">Your Buckets</h2>

          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-3
              gap-6
            "
          >
            {/* Row 1 - Strict, Normal, Streak */}
            <Bucket
              borderColor="#443025"
              bgColor="#fc6c22"
              iconColor="#fff"
              icon={Target}
              name="Strict Bucket"
              description="Hardcore practice mode"
              value={15}
            />

            <Bucket
              borderColor="#124149"
              bgColor="#0cc4f3"
              iconColor="#fff"
              icon={Zap}
              name="Normal Bucket"
              description="Regular learning mode"
              value={75}
            />

            <StreakCard />

            {/* Row 2 - Today's Revision & Progress */}
            <div className="lg:col-span-2 space-y-4">
              <h3 className="text-2xl font-semibold">
                Today's Revision
              </h3>
              <RevisonProblemCard />
              <RevisonProblemCard />
            </div>

            <ProgressCard />
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
