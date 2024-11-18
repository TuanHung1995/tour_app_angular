import { AbstractControl, ValidatorFn } from '@angular/forms';

export function futureDateValidator(): ValidatorFn {
  return (control: AbstractControl) => {
    const currentDate = new Date();
    const inputDate = new Date(control.value);

    if (inputDate <= currentDate) {
      return { futureDate: true }; // Lỗi nếu ngày không hợp lệ
    }

    return null; // Không có lỗi
  };
}