export class flightDetails {
  aircraftType: string;
  captain: string;
  date: string;
  departure: string;
  destination: string;
  dutyCode: string;
  dutyId: string;
  firstOfficer: string;
  flightAttendant: string;
  flightnr: string;
  tail: string;
  timeArrive: string;
  timeDepart: string;
  displayDate: boolean;
  convertedDate: Date;

  constructor() {
    this.aircraftType = '';
    this.captain = '';
    this.date = '';
    this.departure = '';
    this.destination = '';
    this.dutyCode = '';
    this.dutyId = '';
    this.firstOfficer = '';
    this.flightAttendant = '';
    this.flightnr = '';
    this.tail = '';
    this.timeArrive = '';
    this.timeDepart = '';
    this.displayDate = false;
    this.convertedDate = new Date();
  }

  /**
   * create flightDetails object from specified data
   * @param apiData api object for flightData
   * @returns Object of flightData
   */
  static createFlightDetailsFromData(apiData: any): flightDetails {
    const flight = new flightDetails();
    flight.aircraftType = apiData['Aircraft Type'];
    flight.captain = apiData['Captain'];
    flight.date = apiData['Date'];
    flight.departure = apiData['Departure'];
    flight.destination = apiData['Destination'];
    flight.dutyCode = apiData['DutyCode'];
    flight.dutyId = apiData['DutyID'];
    flight.firstOfficer = apiData['First Officer'];
    flight.flightAttendant = apiData['FlightAttendant'];
    flight.flightnr = apiData['Flightnr'];
    flight.tail = apiData['Tail'];
    flight.timeArrive = apiData['Time_Arrive'];
    flight.timeDepart = apiData['Time_Depart'];
    flight.displayDate = false;
    flight.convertedDate = new Date();
    if (flight && flight.date) {
      flight.convertedDate.setDate(
        Number.parseInt(flight.date.substring(0, 2), 10)
      );
      flight.convertedDate.setMonth(
        Number.parseInt(flight.date.substring(3, 5), 10)
      );
      flight.convertedDate.setFullYear(
        Number.parseInt(flight.date.substring(6, 10), 10)
      );
    }
    return flight;
  }

  /**
   * sorts flightDetails object based on date
   * @param data flightDetails array to be sorted
   * @returns
   */
  static sortBaseOnDate(data: Array<flightDetails>): Array<flightDetails> {
    const sortedArr = data
      .slice()
      .sort(
        (a: flightDetails, b: flightDetails) =>
          a.convertedDate.valueOf() - b.convertedDate.valueOf()
      );
    return sortedArr;
  }
}
