"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AlertCircle, Check, CheckCircle2, Copy, Facebook } from "lucide-react";
import Link from "next/link";
import CopyLInkDialoge from "@/components/CopyLInkDialoge";
import { create_fb_link_action } from "@/lib/action";
import { useToast } from "@/hooks/use-toast";
import NavBar from "@/components/NavBar";

function Footer() {
  return (
    <footer className="bg-gray-50 text-gray-600 py-4">
      <div className="container mx-auto px-4 text-center text-sm">
        <p>&copy; 2024 FB Video Link. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function VideoLinkSubmission() {
  const [open, setOpen] = useState(false);
  const [link, setLink] = useState("");
  const [videoLink, setVideoLink] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ videoLink: "", email: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { videoLink: "", email: "" };

    if (
      !videoLink.includes("facebook.com") &&
      !videoLink.includes("fb.watch")
    ) {
      newErrors.videoLink = "Please enter a valid Facebook video link";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", { videoLink, email });
      setIsSubmitting(true);
      try {
        const result = await create_fb_link_action(email, videoLink);
        setLink(`${process.env.NEXT_PUBLIC_HOST}/vedio/${result?._id}`);
        setIsSubmitted(true);
      } catch (error) {
        console.log(error);
      } finally {
        setIsSubmitting(false);
      }
      setOpen(true);
      setVideoLink("");
      setEmail("");
    }
  };
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setIsCopied(true);
      toast({
        title: "Link copied!",
        description: "The shareable link has been copied to your clipboard.",
      });
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
      toast({
        title: "Copy failed",
        description: "Failed to copy the link. Please try again.",
        variant: "destructive",
      });
    }
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <NavBar />
      {/* <CopyLInkDialoge open={open} setOpen={setOpen} link={link} /> */}
      <main className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 rounded-xl shadow-md max-w-md w-full">
          <h1 className="text-2xl font-bold text-center mb-6">
            Submit Facebook Video Link
          </h1>
          {isSubmitted ? (
            <div className="text-center">
              <CheckCircle2 className="mx-auto text-green-500 w-16 h-16 mb-4" />
              <p className="text-lg font-semibold text-green-700">
                Submission Successful!
              </p>
              <div>
                <div className="grid flex-1 gap-2">
                  <Label htmlFor="shareableLink" className="sr-only">
                    Shareable Link
                  </Label>
                  <div className="flex items-center justify-center gap-2">
                    <Input
                      id="shareableLink"
                      type="text"
                      value={link}
                      readOnly
                      className="pr-10"
                    />
                    <Button
                      type="button"
                      size="icon"
                      onClick={handleCopy}
                      className="flex-shrink-0"
                    >
                      {isCopied ? (
                        <Check className="h-4 w-4" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      <span className="sr-only">
                        {isCopied ? "Copied" : "Copy link"}
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
              <p className="mt-2 text-gray-600">
                Thank you for your submission.
              </p>
              <Button
                className="mt-4 w-full"
                onClick={() => {
                  setIsSubmitted(false);
                  setVideoLink("");
                  setLink("");
                  setEmail("");
                }}
              >
                Submit Another Link
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Label htmlFor="video-link">Spam Link</Label>
                <Input
                  id="video-link"
                  type="url"
                  placeholder="https://www.facebook.com/watch/?v=123456789"
                  value={videoLink}
                  onChange={(e) => setVideoLink(e.target.value)}
                  className={errors.videoLink ? "border-red-500" : ""}
                />
                {errors.videoLink && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.videoLink}
                  </p>
                )}
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={errors.email ? "border-red-500" : ""}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>
              <Button type="submit" className="w-full">
                {isSubmitting ? "Submitting..." : "Submit"}
              </Button>
            </form>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
