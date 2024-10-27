import { useQuery } from "@tanstack/react-query";
import { getData } from "../Api/apiHandler";

export function useGetData() {
  console.log("useGetData");
  const { data, isLoading, error } = useQuery({
    queryKey: ["formData"],
    queryFn: getData,
  });

  if (error) throw new Error(error);

  return { data, isLoading };
}
