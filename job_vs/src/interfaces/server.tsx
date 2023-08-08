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
