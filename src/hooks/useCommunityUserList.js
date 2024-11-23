// 더미데이터
const CommunityUserList = [
  {
    id: 1,
    name: '홍길동',
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
  }
];


export default function useCommunityUserList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setData(CommunityUserList);
    };

    fetchData();
  }, []);

  return data;
}