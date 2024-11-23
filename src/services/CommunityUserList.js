import axios from 'axios';

const API_BASE_URL = 'http://43.203.97.203:52169';

/**
 * 커뮤니티 유저 목록을 가져오는 함수
 */
export const fetchCommunityUserList = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/community/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching community user list:', error);
    throw error;
  }
};
