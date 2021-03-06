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
  * npm install -g cross-env  # window 용


### env file info
~~~
########################################
## Server Info
########################################
# common
COOKIE_SECRET=
JWT_KEY=

# dev
DEV_NODE_PORT=

# prod
PROD_NODE_PORT=


########################################
## DataBase Info
########################################
# dev
DEV_DB_HOST=
DEV_DB_NAME=
DEV_DB_DIALECT=
DEV_DB_USER=
DEV_DB_PASSWORD=

# prod
PROD_DB_HOST=
PROD_DB_NAME=
PROD_DB_DIALECT=
PROD_DB_USER=
PROD_DB_PASSWORD=


########################################
## SNS Info
########################################
SNS_DEV_KEY_GOOGLE=
SNS_DEV_KEY_FACEBOOK=
SNS_DEV_KEY_KAKAO=

~~~
