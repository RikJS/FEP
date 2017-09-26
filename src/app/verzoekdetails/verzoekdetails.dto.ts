import {Verzoekstatus} from "./verzoekstatus";
/**
 * Created by rikde on 18/09/2017.
 */

export class VerzoekdetailsDto {
  constructor(
    public studentId: number,
    public firstname: string,
    public lastname: string,
    public email: string,
    public courseId: string,
    public courseName: string,
    public motivation: string,
    public status: Verzoekstatus
  ){}
}

