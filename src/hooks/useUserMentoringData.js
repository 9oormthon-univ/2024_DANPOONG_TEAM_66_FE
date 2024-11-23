import { useEffect, useState } from 'react';
// 더미 데이터
// 특정 유저 id 함께 보내는 경우
// mentoring 으로 멘토, 멘티 구분
// 요청에 첨부한 id와 관련된 유저 정보만 넘겨주시면 좋겠습니다!
const UserMentoringData = [
  {
    id: 1,
    name: '홍길동',
    mentoring: "멘토",
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
    ]
  },
  {
    id: 2,
    name: '김철수',
    mentoring: "멘티",
    badgeData: [
      {
        badgeType: 'Green',
        count: 1,
      },
      {
        badgeType: 'Yellow',
        count: 0,
      },
      {
        badgeType: 'Orange',
        count: 0,
      },
      {
        badgeType: 'Red',
        count: 0,
      },
    ]
  },
  {
    id: 3,
    name: '이영희',
    mentoring: "멘토",
    badgeData: [
      {
        badgeType: 'Green',
        count: 2,
      },
      {
        badgeType: 'Yellow',
        count: 1,
      },
      {
        badgeType: 'Orange',
        count: 1,
      },
      {
        badgeType: 'Red',
        count: 0,
      },
    ]
  },
  {
    id: 4,
    name: '박민수',
    mentoring: "멘티",
    badgeData: [
      {
        badgeType: 'Green',
        count: 0,
      },
      {
        badgeType: 'Yellow',
        count: 0,
      },
      {
        badgeType: 'Orange',
        count: 0,
      },
      {
        badgeType: 'Red',
        count: 0,
      },
    ]
  },
  {
    id: 5,
    name: '김미영',
    mentoring: "멘티",
    badgeData: [
      {
        badgeType: 'Green',
        count: 1,
      },
      {
        badgeType: 'Yellow',
        count: 0,
      },
      {
        badgeType: 'Orange',
        count: 0,
      },
      {
        badgeType: 'Red',
        count: 0,
      },
    ]
  },
];

export default function useUserMentoringData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setData(UserMentoringData);
    };

    fetchData();
  }, []);

  return data;
}