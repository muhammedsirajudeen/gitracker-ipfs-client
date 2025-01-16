export interface IDirService{
    getDirStructure:(githubRepo:string)=>Promise<object|null>
}
class DirService implements IDirService{
    async getDirStructure(githubRepo:string):Promise<object|null>{
        try {
            return {}
        } catch (error) {
            console.log(error)
            return null
        }
    }
}
const DirServiceInstance=new DirService()
export default DirServiceInstance