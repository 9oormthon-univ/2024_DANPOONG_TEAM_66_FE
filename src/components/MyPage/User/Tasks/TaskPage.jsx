import useUserTaskData from "../../../../hooks/useUserTaskData";
import TaskBox from "../../TaskBox";

export default function TaskPage() {
  const tasks = useUserTaskData();

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 px-10 mt-10">
        {tasks.map((task) => (
          <div key={task.id} className="flex justify-center">
            <TaskBox {...task} />
          </div>
        ))}
      </div>
    </div>
  );
}
