"use client";

import { Switch } from "@/components/ui/switch";
import { getAppStaticByName, updateAppStatic } from "@/lib/network/app-static";
import { CreateAppStatics } from "@/lib/types/app-static";
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function VotingStatus() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { data: votingStatus, refetch } = useQuery({
    queryFn: () => getAppStaticByName("voting"),
    queryKey: ["voting-status"],
  });

  const { mutate: onUpdateStatus } = useMutation({
    mutationFn: (values: CreateAppStatics) => updateAppStatic("voting", values),
    onSuccess: () => {
      toast.success("Status Voting Berhasil Diubah");
      queryClient.invalidateQueries({ queryKey: ["voting-status"] });
      refetch();
      router.refresh;
    },
    onError: (error) => console.log(error),
  });

  function handleChangeStatus() {
    onUpdateStatus({
      name: "voting",
      status: votingStatus?.status === "open" ? "closed" : "open",
    });
  }

  return (
    <div className="relative flex gap-3">
      <p className="capitalize">
        Voting is <span className="text-primary">{votingStatus?.status}</span>
      </p>
      <Switch
        checked={votingStatus?.status === "open"}
        onCheckedChange={handleChangeStatus}
      />
    </div>
  );
}
