class FormValidator {
  constructor() {
    this.form = document.querySelector('.form');

    this.events();
  }

  events() {
    this.form.addEventListener('submit', e => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    const validFields = this.checkFields();
    const validPasswords = this.checkPasswords();

    if (validFields && validPasswords) {
      alert('Formulário enviado.');
      this.form.submit();
    }
  }

  checkPasswords() {
    let valid = true;

    const password = this.form.querySelector('.password');
    const repeatedPassword = this.form.querySelector('.repeated-password');

    if (password.value !== repeatedPassword.value) {
      this.createError(password, `"Senha" e "Repetir Senha" precisam ser iguais`);
      this.createError(repeatedPassword, `"Senha" e "Repetir Senha" precisam ser iguais`);
      valid = false;
    }

    if(password.value.length < 3 || password.value.length > 12) {
      this.createError(password, `Sua Senha deve ter entre 3 e 12 caracteres`);
      this.createError(repeatedPassword, `Sua Senha deve ter entre 3 e 12 caracteres`);
      valid = false;
    }

    return valid;
  }

  checkFields() {
    let valid = true;
    
    for(let errorText of this.form.querySelectorAll('.error-text')){
      errorText.remove();
    }

    for(let field of this.form.querySelectorAll('.validate')){
      let label = field.previousElementSibling.innerHTML;

      if(!field.value) {
        this.createError(field, `"${label}" não pode estar em branco`);
        valid = false;
      }

      if(field.classList.contains('cpf')) {
        if(!this.cpfValidator(field)) valid = false;
      }

      if(field.classList.contains('user')) {
        if(!this.userNameValidator(field)) valid = false;
      }
    }

    return valid;
  }

  cpfValidator(field) {
    const cpf = new ValidaCPF(field.value);

    if(!cpf.valida()) {
      this.createError(field, `CPF Inválido`);
      return false;
    }

    return true;
  }

  userNameValidator(field) {
    const user = field.value;
    let valid = true

    if(user.length < 3 || user.length > 12) {
      this.createError(field, `Usuário deve ter entre 3 e 12 caracteres`);
      valid = false;
    }

    if(!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(field, `Usuário deve conter apenas letras e/ou números`);
      valid = false;
    }

    return valid;
  }

  createError(field, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    field.insertAdjacentElement('afterend', div);
  }
}

const valida = new FormValidator();
