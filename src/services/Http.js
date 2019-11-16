import Storage from "./Storage";
import * as axios from "axios";
import { from, of } from "rxjs";
import { map } from "rxjs/operators";
import { sha3_512 } from "js-sha3";

const qs = require("querystring");

export class Http {

  static userValidate(username, password) {
    const hash = sha3_512(password);

    return this.post("login", {
      username: username,
      pwhash: hash
    }).pipe(
      map(value => {
        const entity = value.data && value.data ? value.data : null;
        Storage.set("token", entity.Token);
        return value;
      })
    );
  }

  /*
   * Register
   */
  static checkIfAccountNameExists(value) {
    const tempData = [
      "new york", "new york state", "new york & company"
    ];
    const fakeRequest = tempData.includes(value.toLowerCase());
    return of({ status: fakeRequest, data: fakeRequest ? tempData : null });
  }

  static registerUser(data) {

    return this.post("register", data).pipe(
      map(value => {
        const entity = value.data && value.data ? value.data : null;
        Storage.set("token", entity.Token);
        return value;
      })
    );
  }

  static uploadFile(file) {
    return this.post("file", file).pipe(
      map(value => {
        return value;
      })
    );
  }

  static getEarthStatus() {
    return this.get("earth-states").pipe(
      map(value => {
        return value;
      })
    );
  }

  static getActors() {
    return of([
      { id: 1, name: "Comoros", "type": 1 },
      { id: 10, name: "Mozambique", "type": 1 },
      { id: 100, name: "Bermuda", "type": 1 },
      { id: 101, name: "Ireland", "type": 1 },
      { id: 102, name: "Malta", "type": 1 },
      { id: 103, name: "Mauritius", "type": 1 },
      { id: 104, name: "Netherlands", "type": 1 },
      { id: 105, name: "Azerbaijan", "type": 1 },
      { id: 106, name: "Guatemala", "type": 1 },
      { id: 107, name: "Lebanon", "type": 1 },
      { id: 108, name: "Mauritania", "type": 1 },
      { id: 109, name: "Serbia", "type": 1 },
      { id: 11, name: "United Republic of Tanzania", "type": 1 },
      { id: 110, name: "Austria", "type": 1 },
      { id: 111, name: "Belize", "type": 1 },
      { id: 112, name: "Croatia", "type": 1 },
      { id: 113, name: "Indonesia", "type": 1 },
      { id: 114, name: "Israel", "type": 1 },
      { id: 115, name: "Kyrgyzstan", "type": 1 },
      { id: 116, name: "Nigeria", "type": 1 },
      { id: 117, name: "Bhutan", "type": 1 },
      { id: 118, name: "Bolivia (Plurinational State of)", "type": 1 },
      { id: 119, name: "Sri Lanka", "type": 1 },
      { id: 12, name: "Turkey", "type": 1 },
      { id: 120, name: "Zimbabwe", "type": 1 },
      { id: 121, name: "Côte d'Ivoire", "type": 1 },
      { id: 122, name: "Ethiopia", "type": 1 },
      { id: 123, name: "Japan", "type": 1 },
      { id: 124, name: "Kazakhstan", "type": 1 },
      { id: 125, name: "Kenya", "type": 1 },
      { id: 126, name: "Malaysia", "type": 1 },
      { id: 127, name: "Peru", "type": 1 },
      { id: 128, name: "Cameroon", "type": 1 },
      { id: 129, name: "Guinea", "type": 1 },
      { id: 13, name: "Honduras", "type": 1 },
      { id: 130, name: "Germany", "type": 1 },
      { id: 131, name: "Morocco", "type": 1 },
      { id: 132, name: "Chile", "type": 1 },
      { id: 133, name: "Eswatini", "type": 1 },
      { id: 14, name: "Senegal", "type": 1 },
      { id: 15, name: "Ghana", "type": 1 },
      { id: 16, name: "Guinea-Bissau", "type": 1 },
      { id: 17, name: "Montenegro", "type": 1 },
      { id: 18, name: "Panama", "type": 1 },
      { id: 19, name: "Uganda", "type": 1 },
      { id: 2, name: "Democratic Republic of the Congo", "type": 1 },
      { id: 20, name: "Algeria", "type": 1 },
      { id: 21, name: "Bosnia and Herzegovina", "type": 1 },
      { id: 22, name: "Gabon", "type": 1 },
      { id: 23, name: "Greece", "type": 1 },
      { id: 24, name: "Tunisia", "type": 1 },
      { id: 25, name: "Australia", "type": 1 },
      { id: 26, name: "Ecuador", "type": 1 },
      { id: 27, name: "Romania", "type": 1 },
      { id: 28, name: "Belgium", "type": 1 },
      { id: 29, name: "Republic of Korea", "type": 1 },
      { id: 3, name: "Dominican Republic", "type": 1 },
      { id: 30, name: "Luxembourg", "type": 1 },
      { id: 31, name: "Malawi", "type": 1 },
      { id: 32, name: "Mexico", "type": 1 },
      { id: 33, name: "Pakistan", "type": 1 },
      { id: 34, name: "Portugal", "type": 1 },
      { id: 35, name: "Bangladesh", "type": 1 },
      { id: 36, name: "France", "type": 1 },
      { id: 37, name: "Namibia", "type": 1 },
      { id: 38, name: "Singapore", "type": 1 },
      { id: 39, name: "United Arab Emirates", "type": 1 },
      { id: 4, name: "Hungary", "type": 1 },
      { id: 40, name: "Central African Republic", "type": 1 },
      { id: 41, name: "Finland", "type": 1 },
      { id: 42, name: "Norway", "type": 1 },
      { id: 43, name: "Philippines", "type": 1 },
      { id: 44, name: "Spain", "type": 1 },
      { id: 45, name: "Lithuania", "type": 1 },
      { id: 46, name: "Mali", "type": 1 },
      { id: 47, name: "Georgia", "type": 1 },
      { id: 48, name: "South Africa", "type": 1 },
      { id: 49, name: "Togo", "type": 1 },
      { id: 5, name: "Jordan", "type": 1 },
      { id: 50, name: "Vanuatu", "type": 1 },
      { id: 51, name: "Armenia", "type": 1 },
      { id: 52, name: "China", "type": 1 },
      { id: 53, name: "Nepal", "type": 1 },
      { id: 54, name: "Viet Nam", "type": 1 },
      { id: 55, name: "Argentina", "type": 1 },
      { id: 56, name: "Cyprus", "type": 1 },
      { id: 57, name: "Albania", "type": 1 },
      { id: 58, name: "Bulgaria", "type": 1 },
      { id: 59, name: "Monaco", "type": 1 },
      { id: 6, name: "Taiwan Province of China", "type": 1 },
      { id: 60, name: "Solomon Islands", "type": 1 },
      { id: 61, name: "Venezuela (Bolivarian Republic of)", "type": 1 },
      { id: 62, name: "Sweden", "type": 1 },
      { id: 63, name: "United States of America", "type": 1,
        subnationals: [
          { id: 1001, name: 'Arizona' },
          { id: 1002, name: 'California' },
          { id: 1003, name: 'Colorado' },
          { id: 1004, name: 'Connecticut' },
          { id: 1005, name: 'Illinois' },
          { id: 1006, name: 'Iowa' },
          { id: 1007, name: 'Kansas' },
          { id: 1008, name: 'Maine' },
          { id: 1009, name: 'New York' },
          { id: 1010, name: 'North Carolina' },
          { id: 1011, name: 'Ohio' },
          { id: 1012, name: 'Oklahoma' },
        ],
        organizations: [
          { id: 2001, name: 'Amazon' },
          { id: 2002, name: 'Apple' },
          { id: 2003, name: 'Facebook' },
          { id: 2004, name: 'Google' },
          { id: 2005, name: 'Microsoft' },
        ],
      },
      { id: 64, name: "Uruguay", "type": 1 },
      { id: 65, name: "Burundi", "type": 1 },
      { id: 66, name: "Russian Federation", "type": 1 },
      { id: 67, name: "Fiji", "type": 1 },
      { id: 68, name: "Paraguay", "type": 1 },
      { id: 69, name: "Sierra Leone", "type": 1 },
      { id: 7, name: "Belarus", "type": 1 },
      { id: 70, name: "Switzerland", "type": 1 },
      { id: 71, name: "Denmark", "type": 1 },
      { id: 72, name: "Egypt", "type": 1 },
      { id: 73, name: "Thailand", "type": 1 },
      { id: 74, name: "Ukraine", "type": 1 },
      { id: 75, name: "Hong Kong, China", "type": 1 },
      { id: 76, name: "Latvia", "type": 1 },
      { id: 77, name: "Benin", "type": 1 },
      { id: 78, name: "Slovakia", "type": 1 },
      { id: 79, name: "Colombia", "type": 1 },
      { id: 8, name: "Chad", "type": 1 },
      { id: 80, name: "New Zealand", "type": 1 },
      { id: 81, name: "Republic of Moldova", "type": 1 },
      { id: 82, name: "Brazil", "type": 1 },
      { id: 83, name: "Costa Rica", "type": 1 },
      { id: 84, name: "India", "type": 1 },
      { id: 85, name: "Italy", "type": 1 },
      { id: 86, name: "Poland", "type": 1 },
      { id: 87, name: "Saudi Arabia", "type": 1 },
      { id: 88, name: "Czech Republic", "type": 1 },
      { id: 89, name: "Estonia", "type": 1 },
      { id: 9, name: "United Kingdom of Great Britain and Northern Ireland", "type": 1 },
      { id: 90, name: "Burkina Faso", "type": 1 },
      { id: 91, name: "Somalia", "type": 1 },
      { id: 92, name: "Cabo Verde", "type": 1 },
      { id: 93, name: "Qatar", "type": 1 },
      { id: 94, name: "Slovenia", "type": 1 },
      { id: 95, name: "Canada", "type": 1 },
      { id: 96, name: "Iceland", "type": 1 },
      { id: 97, name: "Liberia", "type": 1 },
      { id: 98, name: "Tajikistan", "type": 1 },
      { id: 99, name: "Zambia", "type": 1 },
    ]);
  }

  static getNationStates() {
    return this.get("nation-states").pipe(
      map(value => {
        return value;
      })
    );
  }

  static getExploreReviewData(path, id) {
    return this.get(`${path}/${id}`).pipe(
      map(value => {
        return value;
      })
    );
  }

  static getMultinationals() {
    return this.get("multinationals").pipe(
      map(value => {
        return value;
      })
    );
  }

  static get(path, data) {
    return from(
      axios({
        method: "GET",
        url: `https://api.openclimate.earth/${path}`,
        params: data,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
    );
  }

  static post(path, data) {
    return from(
      axios({
        method: "POST",
        url: `https://api.openclimate.earth/${path}`,
        data: qs.stringify(data),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      })
    );
  }
}
