const express = require("express");
const { isLoggedIn, isNotLoggedIn } = require("./middlewares");

const router = express.Router();

// 공통된 처리 - 무조건 수행
router.use((req, res, next) => {
  // 로그인한 유저 정보
  res.locals.user = req.user;
  // 게시글을 follow하고 된 개수
  res.locals.followCount = 0;
  res.locals.followingCount = 0;
  // 게시글을 follow하고있는 유저들의 목록
  res.locals.followerIdList = [];

  next();
});

// 메인 화면
router.get("/", (req, res, next) => {
  const twits = [];
  // 템플릿 엔진을 이용한 출력
  // views 디렉터리의 main.html로 출력
  res.render("main", { title: "Node Authentication" });
});

// 회원 가입
router.get("/join", isNotLoggedIn, (req, res, next) => {
  res.render("join", { title: "회원 가입 - Node Authentication" });
});

// 프로필 화면 처리
router.get("/profile", isLoggedIn, (req, res, next) => {
  res.render("profile", { title: "나의 정보 - Node Authentication" });
});

module.exports = router;
