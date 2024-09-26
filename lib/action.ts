"use server";

import { connectToDatabase } from "@/DB/dbcon";
import fb_vedio_link from "@/DB/Models/fb_scam";
import { revalidatePath } from "next/cache";

export const create_fb_link_action = async (email: string, fb_link: string) => {
  try {
    await connectToDatabase();

    const newFbLink = await fb_vedio_link.create({
      email,
      fb_vedio_link: fb_link,
    });

    revalidatePath("/");

    return JSON.parse(JSON.stringify(newFbLink));
  } catch (error) {
    console.log(error);
  }
};
export const getEmailById = async (id: string) => {
  try {
    await connectToDatabase();
    const result = await fb_vedio_link.findById(id);
    return JSON.parse(JSON.stringify(result.email));
  } catch (error) {
    console.log(error);
  }
};
export const getUrlById = async (id: string) => {
  try {
    await connectToDatabase();
    const result = await fb_vedio_link.findById(id);
    return JSON.parse(JSON.stringify(result.fb_vedio_link));
  } catch (error) {
    console.log(error);
  }
};
export const getLinkById = async (id: string) => {
  try {
    await connectToDatabase();
    const result = await fb_vedio_link.findById(id);
    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    console.log(error);
  }
};