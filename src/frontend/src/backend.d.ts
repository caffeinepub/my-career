import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface QuizAnswer {
    categoryName: string;
    question: string;
    selectedAnswer?: string;
}
export interface StudentInfo {
    age: bigint;
    stream: string;
    name: string;
    whatsapp: string;
    email: string;
    grade: string;
}
export interface QuizResponse {
    studentInfo: StudentInfo;
    answers: Array<QuizAnswer>;
    submittedAt: bigint;
}
export interface backendInterface {
    getAllResponses(): Promise<Array<QuizResponse>>;
    getTotalResponses(): Promise<bigint>;
    getUniqueStudentCount(): Promise<bigint>;
    submitResponse(studentInfo: StudentInfo, answers: Array<QuizAnswer>): Promise<void>;
}
