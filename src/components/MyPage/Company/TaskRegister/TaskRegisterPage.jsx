import { useState } from "react";
import TaskBox from "../../TaskBox";
import cn from "../../../../utils/cn";
import Register from "./Register";

// 더미데이터
const taskList = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    company: 'Company A',
    title: 'Task A',
    description: 'Task A Description',
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    company: 'Company B',
    title: 'Task B',
    description: 'Task B Description',
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    company: 'Company C',
    title: 'Task C',
    description: 'Task C Description',
  }
]

export default function TaskRegisterPage() {
  const [registerButtonClicked, setRegisterButtonClicked] = useState(false);
  return (
    <div>
      <div className="px-20 flex justify-end">
        <button 
          onClick={() => setRegisterButtonClicked(!registerButtonClicked)}
          className={cn(
            "border-2 border-gray-400  rounded-lg text-lg p-2",
            "hover:bg-gray-400  hover:text-white transition duration-200",
            registerButtonClicked ? "bg-gray-400 text-white" : "bg-white text-gray-400"
          )}
        >
          {registerButtonClicked ? "작성 취소" : "새로운 과제"}
        </button>
      </div>
      {registerButtonClicked ? <Register /> : (
      <>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 px-10 mt-6'>
        {taskList.map((task) => (
          <div 
            key={task.id}
            className="flex justify-center"
          >
            <TaskBox {...task} />
          </div>
        ))}
      </div>
    </>
    )}
    </div>
  );
}