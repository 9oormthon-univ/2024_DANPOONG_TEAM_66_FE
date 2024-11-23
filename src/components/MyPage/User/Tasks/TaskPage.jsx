import TaskBox from './TaskBox';

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

export default function TaskPage() {
  return (
    <div>
      <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 px-10 mt-10'>
        {taskList.map((task) => (
          <div 
            key={task.id}
            className="flex justify-center"
          >
            <TaskBox {...task} />
          </div>
        ))}
      </div>
    </div>
  );
}