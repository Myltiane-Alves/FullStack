import { NextApiRequest, NextApiResponse } from "next";
import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from "../../../utils/session";
import { parse, format } from "date-fns";
import { ScheduleSession } from "../../../types/ScheduleSession";


const handler = async (req: NextApiRequest, res: NextApiResponse) => {

    try {
        const schduleAt = parse(req.body.scheduleAt, 'dd/MM/yyyy', new Date());

        const schedule = {
            scheduleAt: format(schduleAt, 'yyyy-MM-dd'),
        } as ScheduleSession;

        req.session.schedule = schedule;

        await req.session.save();

        res.status(200).json(req.session.schedule);
    } catch (e: any) {
        res.status(200).json({
            message: e.message,
        });
    }
};

export default withIronSessionApiRoute(handler, sessionOptions)