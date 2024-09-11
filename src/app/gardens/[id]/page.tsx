// import { useEffect, useState } from "react";
import Garden from "@/components/composite/garden";
import { getUserById } from "@/routes/userRoute";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  try {
    const user = await getUserById(params.id);

    if (user) {
      return (
        <div className="h-full w-full">
          <Garden user={user.id} />
        </div>
      );
    } else {
      redirect(process.env.APP_URL!);
    }
  } catch (e) {
    redirect(process.env.APP_URL!);
  }
}
