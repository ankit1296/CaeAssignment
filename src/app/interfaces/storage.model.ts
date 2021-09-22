import { flightDetails } from "../classes/flightDetails.class";
import { LoggedInUser } from "../classes/loggedInUser.class";

export interface IStorageData {
    user:LoggedInUser;
    rosterData:Array<flightDetails>;
    dataFetched:boolean;
    dataFetchedOn:Date | undefined;
}