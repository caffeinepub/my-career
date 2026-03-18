import { useQuery } from "@tanstack/react-query";
import type { QuizResponse } from "../backend";
import { useActor } from "./useActor";

export function useGetAllResponses() {
  const { actor, isFetching } = useActor();
  return useQuery<QuizResponse[]>({
    queryKey: ["allResponses"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllResponses();
    },
    enabled: !!actor && !isFetching,
    refetchInterval: 30000,
  });
}

export function useGetTotalResponses() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["totalResponses"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getTotalResponses();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetUniqueStudentCount() {
  const { actor, isFetching } = useActor();
  return useQuery<bigint>({
    queryKey: ["uniqueStudentCount"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getUniqueStudentCount();
    },
    enabled: !!actor && !isFetching,
  });
}
