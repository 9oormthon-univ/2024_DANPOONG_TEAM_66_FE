import { useState, useEffect } from "react";

// 더미 데이터
const taskData = [
  {
    id: 1,
    image: 'https://via.placeholder.com/150',
    company: 'Company A',
    title: 'Task A',
    description: 'Task A Description',
    badgeType: "Normal",
  },
  {
    id: 2,
    image: 'https://via.placeholder.com/150',
    company: 'Company B',
    title: 'Task B',
    description: 'Task B Description',
    badgeType: "Gold",
  },
  {
    id: 3,
    image: 'https://via.placeholder.com/150',
    company: 'Company C',
    title: 'Task C',
    description: 'Task C Description',
    badgeType: "Silver",
  },
  {
    id: 4,
    image: 'https://via.placeholder.com/150',
    company: 'Company D',
    title: 'Task D',
    description: 'Task D Description',
    badgeType: "Bronze",
  },
  {
    id: 5,
    image: 'https://via.placeholder.com/150',
    company: 'Company E',
    title: 'Task E',
    description: 'Task E Description',
    badgeType: "Gold",
  },
  {
    id: 6,
    image: 'https://via.placeholder.com/150',
    company: 'Company F',
    title: 'Task F',
    description: 'Task F Description',
    badgeType: "Silver",
  },
  {
    id: 7,
    image: 'https://via.placeholder.com/150',
    company: 'Company G',
    title: 'Task G',
    description: 'Task G Description',
    badgeType: "Normal",
  },
  {
    id: 8,
    image: 'https://via.placeholder.com/150',
    company: 'Company H',
    title: 'Task H',
    description: 'Task H Description',
    badgeType: "Bronze",
  },
  {
    id: 9,
    image: 'https://via.placeholder.com/150',
    company: 'Company I',
    title: 'Task I',
    description: 'Task I Description',
    badgeType: "Gold",
  },
  {
    id: 10,
    image: 'https://via.placeholder.com/150',
    company: 'Company J',
    title: 'Task J',
    description: 'Task J Description',
    badgeType: "Silver",
  },
];

export default function useTaskData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setData(taskData);
    };

    fetchData();
  }, []);

  return data;
}
