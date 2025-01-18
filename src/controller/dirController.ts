import { HttpStatus, HttpStatusMessage } from "@/lib/HttpStatus";
import DirServiceInstance, { IDirService } from "@/service/DirService";
import axios from "axios";
import { Request,Response } from "express";
interface GitTreeItem {
    path: string;
    mode: string;
    type: string;
    sha: string;
    size: number;
    url: string;
}

interface IDirController{
    getDirStructure:(req:Request,res:Response)=>Promise<void>
    getTextSummary:(req:Request,res:Response)=>Promise<void>
}

class DirController implements IDirController{
    _DirService:IDirService
    constructor(DirService:IDirService) {
        this._DirService=DirService
    }
    async getDirStructure(req:Request,res:Response):Promise<void> {
        try {
            const {githubRepo,githubToken}=req.body
            console.log(githubRepo,githubToken)
            const response = await axios.get(`https://api.github.com/repos/${githubRepo}`, {
                headers: {
                  Authorization: `Bearer ${githubToken}`
                }
              });
              const defaultBranch = response.data.default_branch;
            console.log(defaultBranch)
            const commitResponse = await axios.get(`https://api.github.com/repos/${githubRepo}/commits/${defaultBranch}`, {
                headers: {
                  Authorization: `Bearer ${githubToken}`
                }
              });
            const treeSha = commitResponse.data.commit.tree.sha;
            console.log(treeSha)
            const treeResponse = await axios.get(`https://api.github.com/repos/${githubRepo}/git/trees/${treeSha}?recursive=true`, {
                headers: {
                  Authorization: `Bearer ${githubToken}`
                }
              });
            const tree = treeResponse.data.tree as GitTreeItem[];
            if (response.status === HttpStatus.OK ) {
                res.status(HttpStatus.OK).json({message:HttpStatusMessage[HttpStatus.OK],paths:tree??[]})
            } else {
                console.log(`Error fetching directory structure for ${githubRepo}:`, response.statusText);
                res.status(HttpStatus.NOT_FOUND).json({message:HttpStatusMessage[HttpStatus.NOT_FOUND]})
            }
        } catch (error) {
            console.log(error)
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:HttpStatusMessage[HttpStatus.INTERNAL_SERVER_ERROR]})
        }
    }
    
    async getTextSummary(req:Request,res:Response):Promise<void> {
        try {
            const {githubRepo,githubToken}=req.body
            if(!githubToken || !githubRepo){
                res.status(HttpStatus.BAD_REQUEST).json({message:HttpStatus.BAD_REQUEST});
            }
            const repoResponse = await axios.get(`https://api.github.com/repos/${githubRepo}`, {
                headers: {
                  Authorization: `Bearer ${githubToken}`
                }
              });
            const defaultBranch = repoResponse.data.default_branch;
            const treeResponse = await axios.get(`https://api.github.com/repos/${githubRepo}/git/trees/${defaultBranch}?recursive=true`, {
                headers: {
                  Authorization: `Bearer ${githubToken}`
                }
              });
            const tree = treeResponse.data.tree as GitTreeItem[];
            const textFileExtensions = ['.txt', '.md', '.js', '.py', '.html', '.css']; // Extend as needed
            const textFiles = tree.filter(item => {
            return item.type === 'blob' && textFileExtensions.some(ext => item.path.endsWith(ext));
            });

            const fileContents = await Promise.all(textFiles.map(async file => {
            const fileResponse = await axios.get(`https://api.github.com/repos/${githubRepo}/contents/${file.path}`, {
                headers: {
                Authorization: `Bearer ${githubToken}`
                }
            });
            const content = Buffer.from(fileResponse.data.content, 'base64').toString('utf-8');
            return { path: file.path, content };
            }));
            res.status(HttpStatus.OK).json({message:HttpStatusMessage[HttpStatus.OK],filecontents:fileContents??[]})
        } catch (error) {
            console.log(error)
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message:HttpStatusMessage[HttpStatus.INTERNAL_SERVER_ERROR]})
        }
    }
    
}
const DirControllerInstance=new DirController(DirServiceInstance)
export default DirControllerInstance