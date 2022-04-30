import { NextApiRequest, NextApiResponse } from "next";


export default const handler = (req: NextApiRequest, res: NextApiResponse) => {
    req.session;

    res.status(200).json({ });
};

