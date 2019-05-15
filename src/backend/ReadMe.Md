# ImaginePaper Server 
 > backend, node server

## API List (회의 항목)
 > API Default prefix: /imgp/api
 > - ex) 메인화면 API: /imgp/api/main-paper

  * 메인화면(좋아요 많은글 1, 최신글 1) 항목
    - [GET] /imgp/api/main-paper
  * 좋아요 리스트(많은순 3~5개)
    - [GET] /imgp/api/like-paper
  * 최신글 리스트(최신순 2~5개)
    - [GET] /imgp/api/latest-paper
  * 로그인(ID 없을 시 자동회원가입 유도) ???
  * 회원가입(Join, 닉네임 중복시 닉네임 + 랜덤 숫자) ???
  * 닉네임 목록 조회
  * 개인정보 수정(닉네임 등 우선순위) ???
  * 게시판 전체목록 가져오기(스크롤링, 10개 정도) ???
  * 게시글 read, write, update, delete
    - read: [GET] /imgp/api/paper/{paper_id}
    - write: [POST] /imgp/api/paper
    - update: [PUT] /imgp/api/paper/{paper_id}
    - delete: [DELETE] /imgp/api/paper/{paper_id}
  * 댓글 read, write, update, delete
  * 즐겨찾기 등록/삭제
  * 내글만 조회
  * 내 즐겨찾기 조회
  * 검색(대/중?소 2건) ???
  * 카테고리 목록 조회
    - [GET] /imgp/api/category
  * 카테고리 항목 조회
    - [GET] /imgp/api/category/{category_id}

### npm global install list
  * npm install -g express-generator
  * npm install -g sequelize-cli
  * npm install -g nodemon
