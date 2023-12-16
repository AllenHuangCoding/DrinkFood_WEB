"use client";

import { BindLine } from "@/src/services/admin/AccountService";

export default function NotifyPage({
  params,
  searchParams,
}: {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const timeout = setTimeout(function () {
    window.close();
  }, 5000);

  if (searchParams.state == null || searchParams.code == null) {
    return <>綁定失敗，此頁面將於5秒後自動關閉</>;
  }
  BindLine(searchParams.state!.toString(), {
    code: searchParams.code?.toString(),
    state: searchParams.state!.toString(),
  });
  return <>綁定成功，此頁面將於5秒後自動關閉</>;
}
