import { JDResponse, LecResponse } from "@/interfaces/server";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const JDDataState = atom<JDResponse>({
  key: "JDDataState", // unique ID (with respect to other atoms/selectors)
  default: {
    data: {
      jds: [],
      keyword_counts: {}, // 수정된 부분
      most_frequent_job: "",
    },
    message: "",
  },
  effects_UNSTABLE: [persistAtom],
});

export const LecDataState = atom<LecResponse>({
  key: "LecDataState",
  default: {
    data: {
      "Unnamed: 0": 0,
      대분류: "",
      소분류: "",
      강의명: "",
      난이도: "",
      "가격(현재가격)": 0,
      총소요시간: "",
      강의소개: "",
      언어: "",
      출처: "",
    },
    message: "",
  },
  effects_UNSTABLE: [persistAtom],
});
