import { useEffect, useState } from 'react';
import { fetchCommunityUserList } from '../services/CommunityUserList';

// 더미 데이터
const CommunityUserList = [
  {
    id: 1,
    name: '홍길동',
    interest: '마케팅',
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
    interest: '프로그래밍',
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
    interest: '프로그래밍',
    badgeData: [
      { badgeType: 'Green', count: 2 },
      { badgeType: 'Yellow', count: 1 },
      { badgeType: 'Orange', count: 1 },
      { badgeType: 'Red', count: 0 },
    ],
  },
  {
    id: 4,
    name: '박민수',
    interest: '경영',
    badgeData: [
      { badgeType: 'Green', count: 0 },
      { badgeType: 'Yellow', count: 0 },
      { badgeType: 'Orange', count: 0 },
      { badgeType: 'Red', count: 0 },
    ],
  },
  {
    id: 5,
    name: '김미영',
    interest: '경영',
    badgeData: [
      { badgeType: 'Green', count: 1 },
      { badgeType: 'Yellow', count: 0 },
      { badgeType: 'Orange', count: 0 },
      { badgeType: 'Red', count: 0 },
    ],
  },
];

export default function useCommunityUserList() {
  const [data, setData] = useState([]); // 초기값 빈 배열
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchCommunityUserList(); // 실제 API 호출
        // console.log('API Response:', response); // 응답 데이터 확인
        setData(response); // 응답 데이터를 상태로 설정
      } catch (err) {
        console.error('Error fetching community user list:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error }; // 객체 반환
}