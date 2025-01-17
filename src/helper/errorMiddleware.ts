import { HttpStatus, HttpStatusMessage } from "@/lib/HttpStatus";
import { NextFunction, Request, Response,  } from "express";

export function ErrorMiddleware(error:Error,req:Request,res:Response,next:NextFunction){
    try {
         res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:HttpStatusMessage[HttpStatus.INTERNAL_SERVER_ERROR]})
    } catch (error) {
        console.log(error)
         res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:HttpStatusMessage[HttpStatus.INTERNAL_SERVER_ERROR]})
    }
}