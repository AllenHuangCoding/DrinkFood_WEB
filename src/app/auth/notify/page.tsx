"use client";

import { BindLine } from "@/src/services/admin/AccountService";

export default function NotifyPage({
  params,
  searchParams,
}: {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  BindLine(searchParams.state!.toString(), {
    code: searchParams.code?.toString(),
    state: searchParams.state!.toString(),
  });
  return <>This is Notify Page</>;
}
