import { useParams } from "react-router-dom";
// 출력할 데이터 생성
const data = {
  woo: {
    name: "지우",
    description: "오늘은 금요일",
  },
  suzy: {
    name: "수지",
    description: "예쁘다",
  },
};

const Profile = () => {
  // URL 파라미터 읽기
  const params = useParams();
  // 데이터 찾아오기
  // username이라는 파라미터 찾아옵니다.
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 사용자입니다.</p>
      )}
    </div>
  );
};

export default Profile;
