"use client";
import { HMSPrebuilt } from "@100mslive/roomkit-react";
import { useSearchParams } from "next/navigation";

export default function PrebuiltPage() {
  //   const searchParams = useSearchParams();
  //   const roomCode = searchParams.get("roomCode");
  const roomCode = "zcg-jbza-hnb";

  return (
    <div style={{ height: "100vh" }}>
      {roomCode && <HMSPrebuilt roomCode={roomCode} />}
    </div>
  );
}
