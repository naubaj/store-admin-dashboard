import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import NavBar from "@/components/navbar";

interface DashboardType {
  children: React.ReactNode;
  params: Promise<{ storeId: string }>;
}

export default async function DashboardLayout({
  children,
  params,
}: DashboardType) {
  const { userId } = await auth();
  // asynchronous access of `params.id`.
  const { storeId } = await params;

  if (!userId) {
    redirect("/sign-in");
  }
  const store = await prismadb.store.findFirst({
    where: {
      id: storeId,
      userId,
    },
  });

  if (!store) {
    redirect("/");
  }

  return (
    <>
      <NavBar />
      {children}
    </>
  );
}
