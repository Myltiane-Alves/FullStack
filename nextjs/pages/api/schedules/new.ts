import { NextApiRequest, NextApiResponse } from "next";
import {withIronSessionApiRoute} from 'iron-session/next'
import { sessionOptions } from "../../../utils/session";
import { parse } from "date-fns";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    
    try {
        const schduleAt = parse(req.body.scheduleAt, 'dd/MM/yyyy', new Date());
        
        const schedule = {
            scheduleAt: parse(req.body.schduleAt,   'yyyy-MM-dd', new Date()),
        } as ScheduleSession;
    
        req.session.schedule = schedule;
        
        await req.session.save();
    
    } catch (e: any) {
        res.status(200).json({
            message: e.message,
         });

    }
};

export default withIronSessionApiRoute(handler, sessionOptions)