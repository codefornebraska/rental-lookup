import axios from "axios";
import getLandlordApiUrl from "../Config";

export const searchForProperties = async (search: string) => {
    const landlordApiUrl  = getLandlordApiUrl();
    const {data: properties} = await axios.get(`${landlordApiUrl}/properties?search=${search}`);
    return properties;
}