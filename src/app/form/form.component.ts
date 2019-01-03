import { Component, OnInit } from '@angular/core';
import SimpleMaskMoney from 'simple-mask-money'; // import mask

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  oldValue = ''
  itens = new Array()
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
  //
  lettersOnly(event, input) {
    if (((event.keyCode >= 65 && event.keyCode <= 90) || (event.keyCode >= 97 && event.keyCode <= 122) || (event.keyCode == 32))) {
      this.oldValue = input.value
      return true
    } else {
      return false
    }
  }
  onSubmit(item, type, price, perecivelYes, perecivelNo, manufacturingDate) {
    var itemObj = (new Object())
    var newQuantity:any
    var expirationDate
    event.preventDefault()
    if(type.value==='0') {
      newQuantity = (<HTMLInputElement>document.getElementById("ltInput")).value
    }else if(type.value==='1') {
      newQuantity = (<HTMLInputElement>document.getElementById("kgInput")).value
    }else if(type.value==='2') {
      newQuantity = (<HTMLInputElement>document.getElementById("unInput")).value
    }
    console.log('name', item.value);
    console.log('quantity', newQuantity);
    console.log('type', type.value);
    console.log('input', price);
    console.log('radioYes', perecivelYes.checked);
    console.log('radioNO', perecivelNo.checked);
    console.log('manufacturingDate', manufacturingDate.value);
  if(perecivelYes.checked===true) {
    expirationDate =  (<HTMLInputElement>document.getElementById('expirationPerecivel')).value
  }else {
    expirationDate =   (<HTMLInputElement>document.getElementById('expirationNaoPerecivel')).value
  }
  itemObj = {
    name: item.value,
    quantity: newQuantity,
    type: type.value,
    price: price,
    expirationDate: expirationDate,
    manufacturingDate: manufacturingDate.value
  }
  var localStorageItensList = localStorage.getItem('itensList')
  if(!localStorageItensList) {
  this.itens.push(itemObj)
  var json = JSON.stringify(this.itens)
  localStorage.removeItem('itensList');
  localStorage.setItem('itensList', json)  

  }else {
    var itens = JSON.parse(localStorageItensList);
    itens.push(itemObj);
    var json = JSON.stringify(itens)
    console.log(json);
    localStorage.setItem('itensList', json)  
  }
}

  send(e) {
    if (e.key !== 'Enter') return;
    SimpleMaskMoney.formatToNumber(this.val);
  }
  setMask(item) {
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

