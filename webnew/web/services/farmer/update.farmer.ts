import api from "@/lib/axios";


export class FarmerUpdates {
    private static base = "/farmer/update";


    static async deleteFarmerLandInfo( landinfoid : string ){
        try {
            const res = await api.post(`${this.base}/deletelandinfo` , { landinfoid });

            return res.status;
        } catch (error) {
            console.error('Error Deleting farmers landinformation');
            throw error;
        }
    } 
}