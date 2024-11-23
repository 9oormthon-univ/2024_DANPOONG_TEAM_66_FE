import { useEffect, useState } from 'react';
import { fetchMentoringStatus } from '../services/MentoringStatus';

// 더미 데이터
const MentoringStatus = [
  {
    id: 1,
    name: '박민수',
    intereset: '마케팅',
    status: '요청중',
    badgeData: [
      { badgeType: 'Green', count: 3 },
      { badgeType: 'Yellow', count: 2 },
      { badgeType: 'Orange', count: 0 },
      { badgeType: 'Red', count: 1 },
    ],
  },
  {
    id: 2,
    name: '김철수',
    intereset: '프로그래밍',
    status: '요청중',
    badgeData: [
      { badgeType: 'Green', count: 1 },
      { badgeType: 'Yellow', count: 0 },
      { badgeType: 'Orange', count: 0 },
      { badgeType: 'Red', count: 0 },
    ],
  },
  {
    id: 3,
    name: '이영희',
    intereset: '프로그래밍',
    status: '요청받음',
    badgeData: [
      { badgeType: 'Green', count: 2 },
      { badgeType: 'Yellow', count: 1 },
      { badgeType: 'Orange', count: 1 },
      { badgeType: 'Red', count: 0 },
    ],
  },
];

export default function useMentoringStatus(userId) {
  const [data, setData] = useState([]); // 초기값 빈 배열
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchMentoringStatus(userId); // API 호출
        console.log('API Response:', response); // 응답 데이터 확인

        // 빈 배열인지 확인하여 더미 데이터 설정
        if (Array.isArray(response) && response.length === 0) {
          console.log('Response is empty, using dummy data.');
          setData(MentoringStatus);
        } else {
          setData(response);
        }
      } catch (err) {
        console.error(err);
        setData(MentoringStatus); // API 실패 시 더미 데이터 사용
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchData();
    }
  }, [userId]);

  return { data, loading, error }; // 객체로 반환
}
