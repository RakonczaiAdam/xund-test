type MyFile = {
    path: string,
    filename: string,
    size: number,
    originalname: string
}
declare namespace Express {
    export interface Request {
       file?: MyFile
    }
 }