import { JDResponse } from "@/interfaces/server";
import { atom } from "recoil";

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
});
