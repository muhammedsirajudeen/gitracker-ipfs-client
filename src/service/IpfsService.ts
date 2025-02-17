import axios from "axios";
import FormData from "form-data";

export interface IIpfsService {
    uploadMetadata(metadata: object): Promise<string>;
}


class IpfsService implements IIpfsService {
    ipfsEndpoint = 'http://43.204.251.65:5001/api/v0/add'

    async uploadMetadata(metadata: object): Promise<string> {
        try {
            const jsonBuffer=Buffer.from(JSON.stringify(metadata))
            const formData=new FormData()
            formData.append('file',jsonBuffer,{filename:'data.json'})
            const response = await axios.post(this.ipfsEndpoint, formData, {
                headers: {
                  ...formData.getHeaders(), // Include necessary headers for FormData
                },
              });
              console.log("ipfs response",response.data.Hash)
              return `https://gittracker.ddns.net/ipfs/${response.data.Hash}`
        } catch (error) {
            console.error('Error uploading metadata to IPFS:', error);
            throw error;
        }
    }
}

export default new IpfsService();