function createCalculator() {
  return {
    display: document.querySelector('.display'),

    start() {
      this.clickButtons();
      this.pressEnter();
    },

    pressEnter(){
      this.display.addEventListener('keyup', (e) => {
        if(e.keyCode == 13) this.equal();
      });
    },

    clickButtons() {
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
    },

    btnToDisplay(value) {
      this.display.value += value;
    },

    clearDisplay() {
      this.display.value = '';
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1);
    },

    equal() {
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
    },

  };
}

const calculator = createCalculator();
calculator.start();