import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class SendMessageService {
  _url = 'sendMail.php';

  constructor(private _http: HttpClient) { }

  //  sendMessage(messageData) {
  //   return this._http.post<any>(this._url, messageData);
  // }


  // sendMessage(messageData) {
  //   let xhr = new XMLHttpRequest();
  //   let params = `name=${messageData.name}&email=${messageData.email}&phone=${messageData.phone}&message=${messageData.message}`;
  //   xhr.open('POST', this._url, true);
  //   xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
  //   xhr.onload = function () {
  //     return console.log(this);
  //   }
  //   xhr.send(params);
  // }




}
