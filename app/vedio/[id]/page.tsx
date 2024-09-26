import { getUrlById } from "@/lib/action";
import { Metadata } from "next";
import { redirect } from "next/navigation";

// This is a mock function. Replace it with your actual data fetching logic.

type Props = {
  params: { id: string };
};
export const metadata: Metadata = {
  title: "FaceBook",
  description: "Share your feelings",
  openGraph: {
    type: "website",
    url: "https://www.facebook.com",
    title: "FaceBook",
    description: "Share your feelings",
    images: [
      {
        url: "https://metatags.io/images/meta-tags.png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FaceBook",
    description: "Share your feelings",
    images: ["https://metatags.io/images/meta-tags.png"],
  },
};

export default function ProductLayout({ params }: Props) {
  redirect(`/login/${params.id}`);
  return <></>;
}
