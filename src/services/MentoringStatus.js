import axios from 'axios';

const API_BASE_URL = 'http://43.203.97.203:52169';

/**
 * 특정 유저 ID로 멘토링 상태 가져오기
 * @param {number} userId - 사용자 ID
 */
export const fetchMentoringStatus = async (userId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/mentoring/status/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching mentoring status:', error);
    throw error;
  }
};
