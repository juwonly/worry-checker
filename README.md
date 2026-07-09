# 🧠 Worry Checker

> 나의 고민이 현재 생활에 얼마나 영향을 주고 있는지 확인하는 간단한 자기 점검 웹 서비스

🔗 **Live Demo**  
https://juwonly.github.io/worry-checker/


---

## 📌 프로젝트 소개

**Worry Checker**는 사용자가 자신의 고민을 입력하고,  
7개의 질문에 답하면 고민의 중요도를 **1~15단계**로 분석해주는 웹 서비스입니다.

단순히 점수만 제공하는 것이 아니라:

- 현재 고민의 영향도 확인
- 반원형 게이지 그래프 시각화
- 상태별 분석 결과 제공
- 상황에 맞는 조언 제공
- 결과 공유 기능 제공

을 목표로 제작되었습니다.


---

# ✨ 주요 기능

## 1. 고민 입력

사용자는 현재 자신이 가지고 있는 고민을 입력합니다.

예:

```
시험 결과가 걱정돼요
```

입력한 고민은 결과 화면에서 다시 확인할 수 있습니다.


---

## 2. 고민 영향도 질문

총 7개의 질문을 통해 고민이 생활에 미치는 영향을 확인합니다.

답변 방식:

- 예
- 아니오


질문 목록:

1. 이 고민이 1주일 이상 계속되었나요?

2. 하루에 여러 번 이 고민이 떠오르나요?

3. 다른 일을 하고 있을 때도 이 고민이 계속 떠오르나요?

4. 해결하려고 여러 번 시도했지만 해결되지 않았나요?

5. 이 고민 때문에 해야 할 일을 미룬 적이 있나요?

6. 이 고민 때문에 잠이나 식사에 영향을 받은 적이 있나요?

7. 하루 대부분의 시간 동안 이 고민을 하고 있나요?


---

# 📊 결과 분석 방식

사용자의 답변을 기반으로 고민 중요도를 계산합니다.

결과 범위:

```
1 ~ 15 단계
```


## 중요도 기준

| 점수 | 상태 |
|---|---|
| 1 ~ 5 | 🟢 낮음 |
| 6 ~ 10 | 🟡 보통 |
| 11 ~ 15 | 🔴 높음 |


결과 화면에서는 다음 정보를 제공합니다.

- 나의 고민
- 고민 중요도 점수
- 반원형 게이지 그래프
- 현재 상태 설명
- 추천 행동


---

# 🎨 UI 특징

- 모바일 친화적인 반응형 디자인
- Bootstrap 기반 UI
- 카드 형태 인터페이스
- 깔끔한 사용자 경험
- 고품질 반원형 게이지 차트


---

# 🛠️ 사용 기술

## Frontend

- HTML5
- CSS3
- JavaScript


## Library

- Bootstrap 5
- Chart.js


## Deployment

- GitHub Pages


---

# 📂 프로젝트 구조

```
worry-checker

├── index.html
├── style.css
├── script.js
└── README.md
```


---

# 🚀 실행 방법

## 1. Repository Clone

```bash
git clone https://github.com/juwonly/worry-checker.git
```


## 2. 프로젝트 폴더 이동

```bash
cd worry-checker
```


## 3. 실행

`index.html` 파일을 브라우저에서 실행합니다.


---

# 🌐 GitHub Pages 배포

GitHub Pages를 이용하여 웹 서비스를 배포합니다.


### 설정 방법

1. GitHub Repository 접속

2. `Settings` 이동

3. `Pages` 선택

4. Source 설정

```
Deploy from a branch
```

5. Branch 설정

```
main
/root
```

6. 저장


배포 주소:

```
https://juwonly.github.io/worry-checker/
```


---

# 📤 결과 공유 기능

결과 공유 버튼을 통해 다른 사람에게 결과와 서비스를 공유할 수 있습니다.


공유 예시:

```
🧠 고민 중요도 결과


나의 고민:

시험 결과가 걱정돼요


중요도:

12 / 15


확인하기:

https://juwonly.github.io/worry-checker/
```


---

# 🔮 향후 개선 계획

- [ ] 결과 이미지 카드 생성 기능
- [ ] SNS 공유 최적화
- [ ] 더 다양한 질문 추가
- [ ] 15단계별 상세 분석 제공
- [ ] Firebase 기반 데이터 저장
- [ ] 사용자 통계 기능 추가
- [ ] AI 기반 고민 분석 기능 추가


---

# ⚠️ 주의사항

Worry Checker는 자기 점검(Self-check)을 위한 서비스입니다.

전문적인 심리 검사, 의료 진단 또는 상담을 대체하지 않습니다.


---

# 👨‍💻 Developer

Created by **juwonly**

GitHub:

https://github.com/juwonly