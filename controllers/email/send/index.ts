import { Request, Response } from "express";

export const send = async (req: Request, res: Response) => {
  const page_num = parseInt(req.body.page_num as string) || 1;
  const rows_per_page = parseInt(req.body.rows_per_page as string) || 10;

  try {

    return res.status(200).json({
      message: "Email sent successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error sending email",
      data: error,
    });
  }
};
