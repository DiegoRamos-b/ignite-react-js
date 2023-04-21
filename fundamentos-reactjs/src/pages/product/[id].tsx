import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();
  console.log(query.id);

  return <div>Product</div>;
}
