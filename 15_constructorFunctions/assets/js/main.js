function Calculator() {
  this.display = document.querySelector('.display');

  this.start = () => {
    this.clickButtons();
    this.pressEnter();
  };

  this.pressEnter = () => {
    this.display.addEventListener('keyup', (e) => {
      if(e.keyCode == 13) this.equal();
    });
  };

  this.clickButtons = () => {
    document.addEventListener('click', (e) => {
      const element = e.target;

      if(element.classList.contains('btn-num'))
        this.btnToDisplay(element.innerText);

      if(element.classList.contains('btn-clear'))
        this.clearDisplay();

      if(element.classList.contains('btn-del'))
        this.deleteOne();

      if(element.classList.contains('btn-eq'))
        this.equal();
    });
  };

  this.btnToDisplay = (value) => {
    this.display.value += value;
  };

  this.clearDisplay = () => {
    this.display.value = '';
  };

  this.deleteOne = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.equal = () => {
    let account = this.display.value;

    try {
      account = eval(account);

      if (!account) {
        alert('Conta inválida');
        return;
      }

      this.display.value = String(account);
    } catch (error) {
      alert('Conta inválida');
      return;
    }
  };


}

const calculator = new Calculator();
calculator.start();