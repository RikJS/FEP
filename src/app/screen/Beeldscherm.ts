/**
 * Created by rikde on 13/09/2017.
 */
import Orientation from './Orientation';

class Beeldscherm {
    width: number;
    height: number;

    Beeldscherm(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getOrientation(): Orientation {
        if(this.height > this.width) {
            return Orientation.PORTRAIT;
        }
        return Orientation.LANDSCAPE;
    }
}

export default Beeldscherm;
