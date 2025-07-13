import { Request, Response } from "express";
import prisma from "../utils/prismaconfig";

async function Otp(req: Request, res: Response) {
  const { phone, CodeOtp } = req.body;

  try {
    const phoneuser = await prisma.user.findFirst({
      where: { phone },
    });
    if (!phoneuser) {
      return res.status(404).json({ error: "نیست داداش" });
    }
    if (phoneuser.CodeOtp !== CodeOtp) {
      return res.status(401).json({ error: "چشمات باز کن" });
    }
    res.status(200).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({ error: "خطا در سرور" });
  }
}
export default Otp;
