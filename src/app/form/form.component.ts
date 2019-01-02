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
  Kg = {
    prefix: '',
    suffix: '',
    fixed: true,
    fractionDigits: 3,
    decimalSeparator: ',',
    thousandsSeparator: ''
  };
  Lt = {
    prefix: '',
    suffix: '',
    fixed: true,
    fractionDigits: 3,
    decimalSeparator: ',',
    thousandsSeparator: ''
  };
  Money = {
    prefix: 'R$ ',
    suffix: '',
    fixed: true,
    fractionDigits: 2,
    decimalSeparator: ',',
    thousandsSeparator: '.'
  };

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
    if (((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode == 32))) {
      this.oldValue = input.value
      return true
    } else {
      return false
    }
  }
  onSubmit(item, type, quantity, price, perecivelYes, perecivelNo, expirationDate, manufacturingDate) {

    event.preventDefault()
    console.log('item', item.value);
    console.log('type', type.value);
    if(type.value==='0') {
      console.log('everithing is gonna e alright', document.getElementById("ltInput").value)
    }else if(type.value==='1') {
      console.log('everithing is gonna e alright', document.getElementById("kgInput").value)
    }else if(type.value==='2') {
      console.log('everithing is gonna e alright', document.getElementById("unInput").value)
    }
    console.log('quantity', quantity);
    console.log('input', price.value);
    console.log('radioYes', perecivelYes.checked);
    console.log('radioNO', perecivelNo.checked);
    console.log('expirationDate', expirationDate);
    console.log('manufacturingDate', manufacturingDate.value);

  }

  send(e, type) {
    if (e.key !== 'Enter') return;
    SimpleMaskMoney.formatToNumber(this.val);
  }
  setMask(item) {
    console.log(item.id);
    switch (item.id) {
      case 'kgInput':
        SimpleMaskMoney.args = this.Kg
        item.value = SimpleMaskMoney.format(item.value)
        break;
      case 'ltInput':
        SimpleMaskMoney.args = this.Lt
        item.value = SimpleMaskMoney.format(item.value)
        break;

      default:
        SimpleMaskMoney.args = this.Money
        item.value = SimpleMaskMoney.format(item.value)

        break;
    }
  }
  ngAfterContentInit(): void {
 console.log(SimpleMaskMoney.formatToNumber(this.val));


  }
}

