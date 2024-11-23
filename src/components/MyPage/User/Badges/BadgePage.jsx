import { useState } from "react";
import useUserTaskData from "../../../../hooks/useUserTaskData";
import BadgeHeader from "./BadgeHeader";
import TaskListBox from "../../TaskListBox";

export default function BadgePage() {
  const [selectedOption, setSelectedOption] = useState("전체");
  const tasks = useUserTaskData();

  return (
    <div className="px-1 md:px-10 mt-5">
      <BadgeHeader
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        BadgeData={{
          score: tasks.length * 10, // 임의로 점수 계산 (예: task 개수 기반)
          mentoring: tasks.filter((task) => task.badgeType === "Silver").length,
          user: tasks.filter((task) => task.badgeType === "Bronze").length,
          company: tasks.filter((task) => task.badgeType === "Gold").length,
        }}
      />
      <TaskListBox taskData={tasks} />
    </div>
  );
}
