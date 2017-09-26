import {VerzoekdetailsDto} from "./verzoekdetails.dto";
import {Verzoekstatus} from "./verzoekstatus";
export class VerzoekdetailsService {
  getVerzoekDetails = function() {
    return new VerzoekdetailsDto(1663522, "Rik", "de Kruiff", "rik.dekruiff@student.hu.nl", "TCICT-123-123", "FEP", "Is toch mooi jonguh", Verzoekstatus.PENDING);
  };

  getAllVerzoekDetails = function() {
    const allVerzoekDetails = [];
    allVerzoekDetails.push(new VerzoekdetailsDto(1663522, "Rik", "de Kruiff", "rik.dekruiff@student.hu.nl", "TCICT-123-123", "FEP", "Is toch mooi jonguh", Verzoekstatus.PENDING));
    allVerzoekDetails.push(new VerzoekdetailsDto(1643145, "Marlies", "Adema", "marlies.adema@student.hu.nl", "TCICT-123-123", "FEP", "Is toch mooi jonguh", Verzoekstatus.AFGEKEURD));
    allVerzoekDetails.push(new VerzoekdetailsDto(1665289, "Judith", "de Kruiff", "judith.dekruiff@student.hu.nl", "TCICT-123-123", "FEP", "Is toch mooi jonguh", Verzoekstatus.GOEDGEKEURD));
    return allVerzoekDetails;
  };
}
