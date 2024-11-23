import { useState, useEffect } from 'react';

// 더미 데이터
const userData = {
  profile: 'https://avatars.githubusercontent.com/u/81866624?v=4',
  name: '홍길동',
  email: 'kakakako@gmail.com',
  badgeData: [
    {
      badgeType: 'Green',
      count: 3,
    },
    {
      badgeType: 'Yellow',
      count: 2,
    },
    {
      badgeType: 'Orange',
      count: 0,
    },
    {
      badgeType: 'Red',
      count: 1,
    },
  ],
};

export default function useProfileData() {
  const [data, setData] = useState({
    profile: '',
    name: '',
    email: '',
    badgeData: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setData(userData);
    };

    fetchData();
  }, []);

  return data;
}
