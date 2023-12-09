export default function NotifyPage({
  params,
  searchParams,
}: {
  params: {};
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  console.log(params);
  console.log(searchParams);
  return <>This is Notify Page</>;
}
