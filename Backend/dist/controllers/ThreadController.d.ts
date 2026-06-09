import { NextFunction, Request, Response } from "express";
export declare const createThread: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getThreads: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const getThreadById: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=ThreadController.d.ts.map