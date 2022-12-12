const mymiddleware = (store) => (next) => (action) => {
  console.log(action); // 먼저 액션을 출력합니다.
  const result = next(action);
  return result;
};
export default mymiddleware;
