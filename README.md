  # 📕 DAEBAK
SpringBoot와 Spring MVC 패턴을 기반으로 제작한 <br><br>
대구 숙박업소 예약 프로젝트 DAE BAK 입니다. <br><br>
<b> ** 일반 회원, 파트너(사업자), 관리자 ** </b> 3개의 파트로 나누어 서비스를 구축하였습니다.

![image](https://github.com/taeyoung0504/leisure_project1/assets/128016593/a6d6e8dd-5efa-4663-8a34-31f7328b2e49)

<br>



# 📟 개발환경


개발환경은 아래와 같음. <br><br>
![image](https://github.com/taeyoung0504/leisure_project1/assets/128016593/8d6486eb-9021-436f-89d2-0512d0c56548)

<strong>#etc </strong> <br>
tools : tst4 ,  vscode, DBeaver <br>

deploy : git, github <br>



<br>

# 📃 Database ERD

데이터베이스 ERD는 아래와 같음. <br><br>

![image](https://github.com/taeyoung0504/leisure_project1/assets/128016593/c578332a-64fd-4d76-be1c-8084d350abf9)


   
   
# 👊 주요 기능

주요 기능은 아래와 같음 <br>

## [USER]

![image](https://github.com/taeyoung0504/leisure_project1/assets/128016593/56b09792-16f1-4c22-91de-8dacac5afd02)


## [PATNER]

![image](https://github.com/taeyoung0504/leisure_project1/assets/128016593/75aa0fc8-6f57-4f30-b5c4-75fb1aec0115)


## [ADMIN]

![image](https://github.com/taeyoung0504/leisure_project1/assets/128016593/10e1ade4-b17f-4fcf-a083-7c3a9175d7e8)





##  기능 (상세) 

[로그인]
1. 로그인 기능 -> 일반 로그인 , 소셜로그인(네이버,카카오)
    -  로그인의 경우 Spring Security와 OAuth2 를 이용하여 구현.
2.  회원 가입
    - ID,PW, 주소, 이메일, 이메일 인증번호을 통한 회원가입 진행


[메인 페이지]
1. 공공데이터를 이용한 맛집, 여행지 소개 페이지 , 대구 날씨 안내 구현

2. 숙소 평점이 높은 순으로 추천숙소 top 8 정렬

3. 각 숙박 업소 유형별 접근 가능 (모텔, 호텔, 리조트 , 펜션, 게스트하우스)


[마이페이지]

1. 내 비밀번호, 주소 수정 가능
  - 비밀번호의 경우 기존비밀번호, 새 비밀번호, 새 비밀번호 확인을 통한 입력값 검증 필수
2. 내가 예약한 숙소에 대한 예약 내역 확인 가능
  - 예약 취소, 예약내역 삭제 가능
  - 이용 전, 이용 중, 예약 취소, 이용완료 를 통한 상태 표시

3. 내 업소 등록을 위한 파트너 권한 신청 폼 구현

4. 내가 등록한 숙소에 대한 파트너 신청 결과 확인 및
   권한 획득 시 내가 입력한 값으로만 숙소를 등록할 수 있도록 입력값 변조 방지

5. 내가 등록한 업소 및 업소에 있는 객실에 대한 CRUD 구현

[ 예약 & 결제 & 리뷰]
1. 사용자의 검색 및 필터에 맞는 숙박업소 검색 기능 구현
    - 키워드, 날짜, 구역, 인원 수 , 최소~최대 금액 , 후기(평점) 을 통한 검색 
2. 카카오 페이 , 토스 API 를 이용한 더미 결제와 결제 취소 기능 구현
3. 카카오맵 API를 이용한 숙박업소 위치 표시
4. 리뷰 작성 및 신고 기능 구현
   - 한 예약 건 당 1회 리뷰 작성 가능
   - 한 리뷰 내용에 대해 1회만 신고 가능
   - 누적 신고 횟수가 5회 이상일 시 해당 리뷰 블라인드 처리

5. 숙박업소 이용 1일전 까지 결제 취소 가능
    
6.  파트너의 경우 임의 예약 취소 불가능
    - 별도 신청을 통해 관리자 승인 시 예약 취소 가능





[관리자 페이지]

1. 대시보드를 통한 권한별(일반회원,파트너,관리자) 회원 수, 일일 접속자 수, 숙소 등록 현황, 금일 예약 및 순매출액, 취소 건 수 및 총 취소금액 확인 가능

2. 회원 리스트를 통한 회원 관리 가능
   - 회원 권한 변경 가능
   - 회원 정보 수정 가능
   - 회원 계정 정지 가능
     
3. 등록된 숙박업소에 대한 관리
   - 숙박업소 삭제 가능
  
4. 파트너 신청 내역 확인 및 관리
   - 승인 , 반려를 통한 각 회원별 파트너 권한 신청 관리 가능
  
5.  예약 취소 요청 처리
   - 파트너가 요청한 숙박업소 예약 취소 요청에 대한 처리 가능
   - 취소, 거절을 통해 예약취소 요청 처리

<br>





# 프로젝트 결과 화면(요약) // 내용 추가 중

##  [숙소 메인]

![image](https://github.com/taeyoung0504/leisure_project1/assets/128016593/87a4e188-deb3-45f6-a61e-6b6a575d17cf)


## [로그인 페이지]

![image](https://github.com/taeyoung0504/DAEBAK/assets/128016593/4f137c76-5347-47a7-87fb-b1dcb2f3b6ee)

##[회원가입 페이지] 

![image](https://github.com/taeyoung0504/DAEBAK/assets/128016593/bb06df37-35e2-4512-b1e6-5ff947c746ca)


## [숙소 검색 페이지]

![image](https://github.com/taeyoung0504/leisure_project1/assets/128016593/64b0c0e1-e507-4e5a-b45c-adda6bb398c1)


## [숙소 상세 페이지]

(빈방 있는 상태)
![image](https://github.com/taeyoung0504/leisure_Project/assets/128016593/ab922c01-5f2c-44dd-bddf-b7dc1bf92d6d)


(빈방 없는 상태)
![image](https://github.com/taeyoung0504/leisure_Project/assets/128016593/6889d4b7-9425-439b-8ae2-45e42f3234cc)


## [예약 페이지]
![image](https://github.com/taeyoung0504/leisure_Project/assets/128016593/a7024633-3611-4fb9-bad5-a3aef426afb0)




(결제를 위한 문자 인증)

![image](https://github.com/taeyoung0504/leisure_Project/assets/128016593/dfc58195-c74e-4fd1-b833-998a2828e21a)


## [마이페이지]

(내 정보)



![image](https://github.com/taeyoung0504/leisure_Project/assets/128016593/c4ffb392-371d-4b12-940a-f2a3a8fb0b42)


(예약내역)

![image](https://github.com/taeyoung0504/leisure_Project/assets/128016593/82f5dfab-60f2-4e81-aa5a-911f4622164c)



(문의내역 _ 없는경우)

![image](https://github.com/taeyoung0504/leisure_Project/assets/128016593/d384d21b-0475-4d64-a52a-9ccdccb53d82)


(문의내역 작성)

![image](https://github.com/taeyoung0504/leisure_Project/assets/128016593/bb35a2de-58a6-4684-904d-8e75ac91dac0)


(문의내역 _ 있는경우)

![image](https://github.com/taeyoung0504/leisure_Project/assets/128016593/4ee58a36-31ea-4a6c-b2df-aa2253f7d4be)

![image](https://github.com/taeyoung0504/leisure_Project/assets/128016593/a00e19c7-d4f5-4422-bfc3-6e49d8a6c019)



(파트너 권한 신청)

![image](https://github.com/taeyoung0504/leisure_project1/assets/128016593/bc5493f5-9510-415f-8229-5657668c4f94)


(파트너 권한 신청 _ 필수값 미입력 시)

![image](https://github.com/taeyoung0504/leisure_Project/assets/128016593/a38ed9d3-8a82-44fc-a363-2edc3233b978)



( 내 업소 예약 내역) 

![image](https://github.com/taeyoung0504/leisure_Project/assets/128016593/211904ba-524a-4a88-ba9a-6c692775c437)



# 기타 페이지 


(대구 맛집 공공데이터를 이용한 식당 검색 페이지)

![image](https://github.com/taeyoung0504/DAEBAK/assets/128016593/a29b36b5-5932-49fd-b409-c44e1b601a6f)

# 관리자 페이지

(대시보드)

![image](https://github.com/taeyoung0504/leisure_project1/assets/128016593/b9b4b194-a148-4f83-925a-4584c5189f66)


(공지사항)

![image](https://github.com/taeyoung0504/DAEBAK/assets/128016593/48162033-fcbd-49dc-a2f9-ab4ba5e954c1)

(공지사항_등록)

![image](https://github.com/taeyoung0504/DAEBAK/assets/128016593/02907a57-10ee-4c3b-899c-571560ae17cc)


(회원 관리_등급, 계정잠금 설정 가능)
![image](https://github.com/taeyoung0504/DAEBAK/assets/128016593/300c1176-a094-4902-92dc-1c5872218783)
![image](https://github.com/taeyoung0504/DAEBAK/assets/128016593/b94b8fa1-c51a-411b-801a-1b03e2114f8a)


(등록 업체 관리)

![image](https://github.com/taeyoung0504/DAEBAK/assets/128016593/be04e730-55d0-4785-8d0f-a0cc646626d3)


(파트너 권한 신청 내역 관리)

![image](https://github.com/taeyoung0504/DAEBAK/assets/128016593/603fbdd9-06b8-4508-881c-ec87ada0b101)


(1:1 문의 관리)

![image](https://github.com/taeyoung0504/DAEBAK/assets/128016593/37ef0b73-be38-496f-abfb-948f95ecd55d)

(결제 취소 요청 처리)

![image](https://github.com/taeyoung0504/DAEBAK/assets/128016593/f4209880-9b68-4386-bf62-e43c0a8ca1ac)


