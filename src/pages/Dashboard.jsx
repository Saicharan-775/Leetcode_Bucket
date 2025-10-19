import Button from "../ui/button";
import RevisonProblemCard from "../ui/RevisonProblemCard";
import {
  Shuffle,
  BookOpen,
  Plus,
  Target,
  Zap,
  List,
} from "lucide-react";
import StatsCards from "../ui/StatCards";
import Bucket from "../ui/buckets";
import StreakCard from "../ui/StreakCard";
import ProgressCard from "../ui/ProgressCard";
import Tags from "../ui/Tags";
import {statCards} from "../constants/constants"
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="w-full bg-[var(--background)] text-[var(--primary)] p-2 -ml-2 sm:p-6 pt-0">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-4">
        <div>
          <h1 className="font-medium text-2xl sm:text-3xl lg:text-4xl mb-2">
            Dashboard
          </h1>
          <p className="text-[var(--accent-foreground)] text-sm sm:text-base">
            Welcome back, Saicharan 👋 You have{" "}
            <span className="text-[var(--normal-secondary)] font-semibold">
              8 problems
            </span>{" "}
            due for revision today.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 md:gap-4 mt-4 lg:mt-0">
          <Button icon={Plus} name="Add Problem" />
          <Button icon={Shuffle} name="Random Practice" />
          <Button icon={BookOpen} name="Study Resources" />
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 mb-6 sm:mb-10">
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

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {/* LEFT SIDE (Main Dashboard Area) */}
        <div className="lg:col-span-2 space-y-6 sm:space-y-8">
          {/* Buckets Section */}
          <div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-6">
              Your Buckets
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <Bucket
                borderColor="#443025"
                bgColor="#fc6c22"
                iconColor="#fff"
                icon={Target}
                name="Strict Bucket"
                description="Hardcore practice mode"
                value={15}
                bucket="strict"
              />
              <Bucket
                borderColor="#124149"
                bgColor="#0cc4f3"
                iconColor="#fff"
                icon={Zap}
                name="Normal Bucket"
                description="Regular learning mode"
                value={75}
                 bucket="normal"
              />
            </div>
          </div>

          {/* Today's Revision */}
          <div className="space-y-4">
            <div className="flex justify-between">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                  Today's Revision
                </h3>
                <div className="flex">
               <Tags tag="3 Problems"/>
                </div>
            </div>
                <RevisonProblemCard bucket="Strict" level="Medium" title="Pascals Triangle" name="pascals-triangle"/>
                <RevisonProblemCard bucket="Strict" level="Hard" title="Trapping Rain Water" name="trapping-rain-water"/>
                <RevisonProblemCard bucket="Normal" level="Easy"  title="Two Sum" name="two-sum"/>
 

            <div className="flex justify-center">
              <Link
                to="/revision-queue"
                className="inline-flex items-center gap-2 font-medium px-2 py-2 rounded-xl shadow cursor-pointer
                          transition-all duration-300 hover:scale-105 hover:shadow-lg hover:opacity-90"
              >
                <Button name="View All" icon={List}/>
                
              </Link>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE (Sidebar Area) */}
        <div className="space-y-6 sm:space-y-8">
          <StreakCard />
          <ProgressCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
