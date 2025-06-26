import { By } from 'selenium-webdriver';

class PageLogin {
    static inputUsername = By.xpath('//*[@id="user-name"]');
    static inputPassword = By.xpath('//*[@id="password"]');
    static buttonLogin = By.xpath('//*[@id="login-button"]');
    static dropdownSort = By.xpath('//*[@id="header_container"]/div[2]/div/span/select');
    static opsiZA = By.xpath('//*[@id="header_container"]/div[2]/div/span/select/option[2]');


}
// commonjs
// module.exports = PageLogin;
// ES6 module
export default PageLogin;
// ini adalah file page object untuk halaman login
// berisi elemen-elemen yang digunakan untuk login
// untuk digunakan dalam file test
// sehingga lebih mudah untuk mengelola elemen-elemen yang digunakan dalam test
// dengan menggunakan page object, kita bisa menghindari duplikasi kode
