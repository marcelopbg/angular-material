import { Component, OnInit } from '@angular/core';
import SimpleMaskMoney from 'simple-mask-money'; // import mask

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
oldValue = ''
// declare mask in your class to use in html templete
SimpleMaskMoney = SimpleMaskMoney; // if you prefer use only in class this line is not necessary

// Your value
val = 0.00;
constructor() {
 
}

ngOnInit() {
 SimpleMaskMoney.args = {
   prefix: 'R$ ',
   suffix: '',
   fixed: true,
   fractionDigits: 2,
   decimalSeparator: ',',
   thousandsSeparator: '.'
 };
}
lettersOnly(event, input) {  
if(((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode == 32))) {
  this.oldValue = input.value
  return true
}else {
  return false
}
}
send(e) {
  if (e.key !== 'Enter') return;
  // This method return value of your input in format number to save in your database
  SimpleMaskMoney.formatToNumber(this.val);
}

ngAfterContentInit(): void {
  //Called after ngOnInit when the component's or directive's content has been initialized.
  //Add 'implements AfterContentInit' to the class.
/*   document.getElementById('moneyInput').value = 
 */  console.log(SimpleMaskMoney.formatToNumber(this.val));
  

}
}

