export interface QuestionOption {
  optionName: string;
  optionDescription?: string;
}

export type Question =
  | {
      type: "multipleChoice";
      choiceMoreThan: number;
      choiceLowerThan: number;
      question: string;
      options: QuestionOption[];
    }
  | {
      type: "multipleChoiceLong";
      choiceMoreThan: number;
      choiceLowerThan: number;
      question: string;
      options: QuestionOption[];
    }
  | { type: "subjective"; question: string; example?: string }
  | { type: "search"; question: string; example?: string };

const questions: Question[] = [
  {
    type: "multipleChoice",
    choiceMoreThan: 3,
    choiceLowerThan: 0,
    question: "나를 잘 표현할 수 있는 것들을 세 가지 이상 골라주세요",
    options: [
      { optionName: "적극적" },
      { optionName: "주도적" },
      { optionName: "책임감" },
      { optionName: "커뮤니케이션" },
      { optionName: "도전적" },
    ],
  },
  {
    type: "search",
    question:
      "보유중인 기술 스택이 있다면 골라주세요. 없으면 넘어가 주시면 됩니다",
  },
  {
    type: "multipleChoiceLong",
    choiceMoreThan: 3,
    choiceLowerThan: 3,
    options: [
      {
        optionName: "장비",
        optionDescription: "🖥️ 모니터, 노트북 등 장비지원",
      },
      { optionName: "휴가", optionDescription: "⛱️ 넉넉하고 자유로운 휴가" },
      { optionName: "출퇴근", optionDescription: "🏠 유연근무제 및 재택근무" },
      { optionName: "식사", optionDescription: "🌭 구내식당 혹은 식사비 제공" },
      { optionName: "수습", optionDescription: "👨‍💻 수습기간 없음" },
      {
        optionName: "건강검진",
        optionDescription: "🏥 정기적 건강검진비용 제공",
      },
      {
        optionName: "인센티브",
        optionDescription: "💰 인센티브, 스톡옵션 등 성과에 따른 보상 제공",
      },
      {
        optionName: "계발",
        optionDescription: "📔 온라인 강의, 도서, 시험비 등 자기계발비 지원",
      },
    ],
    question:
      "회사에 들어가게 된다면 가장 중요하게 생각하는 복지 3가지를 골라주세요",
  },
  {
    type: "subjective",
    question: `개발 관련하여 관심있는 업무 키워드가 있다면 입력해 주세요\n없으면 넘어가 주시면 됩니다`,
    example: "Ex. 프론트엔드, AI",
  },
  {
    type: "subjective",
    question: `개발 외에 관심있는 분야, 도메인이 있다면 작성해 주세요\n없으면 넘어가 주시면 됩니다`,
    example: "Ex. 화장품, 커피",
  },
];

export { questions };
