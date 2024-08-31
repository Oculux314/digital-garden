// import { useEffect, useState } from "react";
import Garden from "@/components/composite/garden";
import ToolBar from "@/components/composite/toolBar";
import { getUserById, getUserByEmail } from "@/routes/userRoute";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  try {
    const user = await getUserById(params.id);
    if (user) {
      return (
        <div>
          <ToolBar />
          <Garden />
        </div>
      );
    } else {
      redirect("http://localhost:3000/");
    }
  } catch (e) {
    redirect("http://localhost:3000/");
  }
}
