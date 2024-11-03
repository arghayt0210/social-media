import { validateRequest } from "@/auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  // check current user session
  const { user, session } = await validateRequest();

  if (user) redirect("/");

  return <>{children}</>;
}
