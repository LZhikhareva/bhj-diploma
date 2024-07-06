/**
 * Класс Sidebar отвечает за работу боковой колонки:
 * кнопки скрытия/показа колонки в мобильной версии сайта
 * и за кнопки меню
 * */
class Sidebar {
  /**
   * Запускает initAuthLinks и initToggleButton
   * */
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  /**
   * Отвечает за скрытие/показа боковой колонки:
   * переключает два класса для body: sidebar-open и sidebar-collapse
   * при нажатии на кнопку .sidebar-toggle
   * */
  static initToggleButton() {
    const initBtn = document.querySelector('.sidebar-toggle');
    const body = document.querySelector('body')
    initBtn.addEventListener('click', (e) => {
      e.preventDefault();
      body.classList.toggle('sidebar-open');
      body.classList.toggle('sidebar-collapse');
    })
  }

  /**
   * При нажатии на кнопку входа, показывает окно входа
   * (через найденное в App.getModal)
   * При нажатии на кнопку регастрации показывает окно регистрации
   * При нажатии на кнопку выхода вызывает User.logout и по успешному
   * выходу устанавливает App.setState( 'init' )
   * */
  static initAuthLinks() {
    const btnLogin = document.querySelector('.menu-item_login');
    const btnRegister = document.querySelector('.menu-item_register');
    const btnLogout = document.querySelector('.menu-item_logout');

    const modalLogin = App.getModal('login');
    const modalRegister = App.getModal('register');

    btnLogin.addEventListener('click', () => {
      modalLogin.open()
    })

    btnRegister.addEventListener('click', () => {
      modalRegister.open()
    })

    btnLogout.addEventListener('click', () => {
      User.logout((err, response) => {
        if (response && response.success) {
          App.setState('init');
        }
      })
    })
  }
}