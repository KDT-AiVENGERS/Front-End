# 🌠 Front-End 🌠

[북극성 서비스 정보 바로가기](https://github.com/KDT-AiVENGERS/PolarStar_Info)

## ❗️ About PolarStar FrontEnd Repository

### FrontEnd Repository는 북극성 프로젝트의 Web FrontEnd를 구축하기 위해

### 만들어진 Repository 입니다.

## 🖇️ Wire Frame

## ⭐️ Key Service & User Flow

✨ **나에게 맞는 개인화 맞춤 공고 추천**

사용자가 시작하기 버튼을 누르면 사용자의 맞춤 공고를 추천하기 위한 여러가지 질문을 제시합니다.
이 제시한 결과를 토대로 BERT 기반 인공지능 모델이 사용자에게 맞는 공고를 추천합니다.

✨ **추천된 공고를 대비하기 위한 추천 강의 목록 제시**

사용자에게 추천된 공고에 대해서, 이 공고를 준비하기 위해서 필요한 스킬셋을 익힐 수 있는
추천 강의 목록을 제시합니다.

## ⚒️ Development Environment

![TypeScript](https://img.shields.io/badge/TypeScript-v5.1.6-3178C6?logo=typescript) ![Node.js](https://img.shields.io/badge/Node.js-v20.5.1-339933?logo=node.js) ![Next.js](https://img.shields.io/badge/Next.js-v13.4.12-000000?logo=next.js) ![tailwind](https://img.shields.io/badge/TailwindCSS-v3.3.3-06B6D4?logo=tailwindcss)

## 🎁 Package Dependency

|      Name       |        Tag         |
| :-------------: | :----------------: |
|     ESLint      |      Linting       |
|      Nivo       | Data Visualization |
| React-Hot-Toast |         UI         |
|  React-Select   |         UI         |
|     lodash      |  Utility Library   |
|     recoil      |  State Management  |

## 📁 Project Structure

```

📦
├─ README.md
└─ polarstar
   ├─ .eslintrc.json
   ├─ .gitignore
   ├─ README.md
   ├─ next.config.js
   ├─ package-lock.json
   ├─ package.json
   ├─ postcss.config.js
   ├─ public
   │  ├─ images
   │  │  ├─ favicon.ico
   │  │  ├─ loading
   │  │  │  └─ north.png
   │  │  ├─ onboarding
   │  │  │  ├─ icon_1.png
   │  │  │  ├─ icon_2.png
   │  │  │  ├─ icon_3.png
   │  │  │  ├─ mainPageUpscaled.png
   │  │  │  ├─ north.png
   │  │  │  └─ polar-bear.png
   │  │  └─ qna
   │  │     ├─ arrow_next.png
   │  │     ├─ arrow_prev.png
   │  │     └─ close.png
   │  ├─ next.svg
   │  └─ vercel.svg
   ├─ src
   │  ├─ app
   │  │  ├─ dummyData.tsx
   │  │  ├─ globals.css
   │  │  ├─ layout.tsx
   │  │  ├─ page.tsx
   │  │  ├─ qna
   │  │  │  ├─ page.tsx
   │  │  │  ├─ qnaData.tsx
   │  │  │  ├─ skillStack.json
   │  │  │  └─ skillStackData.tsx
   │  │  ├─ ref.tsx
   │  │  └─ result
   │  │     ├─ jd
   │  │     │  └─ page.tsx
   │  │     └─ lec
   │  │        └─ page.tsx
   │  ├─ components
   │  │  ├─ bubble.tsx
   │  │  ├─ button.tsx
   │  │  ├─ curriCell.tsx
   │  │  ├─ fadeButton.tsx
   │  │  ├─ introduce.tsx
   │  │  ├─ jdRecommendCell.tsx
   │  │  ├─ jdRecommendSummary.tsx
   │  │  ├─ objective.tsx
   │  │  ├─ onboarding.tsx
   │  │  ├─ opacityAni.tsx
   │  │  ├─ recoil.tsx
   │  │  ├─ seo.tsx
   │  │  ├─ skill.tsx
   │  │  ├─ skillSearchDropdown.tsx
   │  │  └─ subjective.tsx
   │  ├─ global
   │  │  ├─ globalAtom.tsx
   │  │  └─ globalConstant.tsx
   │  └─ interfaces
   │     ├─ components.tsx
   │     └─ server.tsx
   ├─ tailwind.config.js
   └─ tsconfig.json
```

## 💡 구현 방식

### 1. 페이지 와이어프레임 구상📌

- 저희 팀은 따로 디자이너, 기획자가 없었으므로 Figma 또는 Zeplin으로 만들어진 레퍼런스가 없는 상황이었습니다.
- 따라서 우선 와이어프레임을 결정하여 개발의 큰 틀을 잡았습니다.

### 2. UI Component 구현📌

- 각 페이지에 필요한 UI Component들을 우선적으로 구현하였습니다.

### 3. UI Componet 페이지에 배치 및 UI 로직 구현📌

- 각 페이지에 적절한 UI Component 를 레이아웃에 맞게 배치합니다.
- 적절한 UI Logic을 구현합니다.
- 애니메이션 효과 등 디테일을 구현합니다.
