import DefaultProfile from '../../../assets/icons/ProfileSm.svg';

export default function MentorListBox({ mentorData }) {
  return (
    <div className='flex flex-row'>
      <img src={DefaultProfile} alt='Profile' />
      <h1>{mentorData.name</h1>

    </div>
  );
}
