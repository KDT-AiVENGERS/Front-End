export interface JDResponse {
  data: {
    jds: {
      jd_id: number;
      회사명: string;
      회사소개: string;
      경력조건: number;
      공고명: string;
      복지: string;
      우대조건: string;
      자격요건: string;
      주요업무: string;
      직무내용: string;
      "출처 URL": string;
    }[];
    keyword_counts: { [key: string]: number };
    most_frequent_job: string;
  };
  message: string;
}

export interface LecResponse {
  message: string;
  data: {
    "Unnamed: 0": number;
    대분류: string;
    소분류: string;
    강의명: string;
    난이도: string;
    "가격(현재가격)": number;
    총소요시간: string;
    강의소개: string;
    언어: string;
    출처: string;
  };
}
