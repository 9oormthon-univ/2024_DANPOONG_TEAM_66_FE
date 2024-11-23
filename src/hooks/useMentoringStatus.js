import { useEffect, useState } from "react";

// 더미 데이터
// 멘토링 요청 및 승인 현황
// 특정 유저 id를 같이 보낼 예정
// 이것과 별개로 특정 id에게 요청 보내기, 요청 거절하기, 요청 수락하기 api도 필요
const MentoringStatus = [
    {
      id: 1,
      name: "박민수",
      intereset: "마케팅",
      status: "요청중",
      badgeData: [
        {
          badgeType: "Green",
          count: 3,
        },
        {
          badgeType: "Yellow",
          count: 2,
        },
        {
          badgeType: "Orange",
          count: 0,
        },
        {
          badgeType: "Red",
          count: 1,
        },
      ],
    },
    {
      id: 2,
      name: "김철수",
      intereset: "프로그래밍",
      status: "요청중",
      badgeData: [
        {
          badgeType: "Green",
          count: 1,
        },
        {
          badgeType: "Yellow",
          count: 0,
        },
        {
          badgeType: "Orange",
          count: 0,
        },
        {
          badgeType: "Red",
          count: 0,
        },
      ],
    },
    {
      id: 3,
      name: "이영희",
      intereset: "프로그래밍",
      status: "요청받음",
      badgeData: [
        {
          badgeType: "Green",
          count: 2,
        },
        {
          badgeType: "Yellow",
          count: 1,
        },
        {
          badgeType: "Orange",
          count: 1,
        },
        {
          badgeType: "Red",
          count: 0,
        },
      ],
    },
  ];


export default function useMentoringStatus() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 300));
      setData(MentoringStatus);
    };

    fetchData();
  }, []);

  return data;
}
