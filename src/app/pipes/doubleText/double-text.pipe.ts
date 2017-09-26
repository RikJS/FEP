import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'doubleText' })
export class DoubleTextPipe implements PipeTransform {
  transform(value: string): string {
    return value + value;
  }
}
