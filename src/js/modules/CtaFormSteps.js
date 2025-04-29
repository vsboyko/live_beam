export function CtaFormSteps() {
  const form = document.getElementById('cta_form');
  if (!form) return;

  const steps = form.querySelectorAll('.cta-form__step');
  const progressDots = form.querySelectorAll('.cta-form__progress span');

  const step1 = steps[0];
  const step2 = steps[1];
  const btnStep1 = step1.querySelector('#cta_form_btn_sign');
  const btnStep2Google = step2.querySelector('#cta_form_btn_google');
  const btnStep2Email = step2.querySelector('#cta_form_btn_email');

  function validateStep1() {
    const sex = form.querySelector('input[name="cta_sex"]:checked');
    const name = form.querySelector('#cta_name');
    const born = form.querySelector('#cta_born');
    const privacy = form.querySelector('input[name="cta_privacy"]:checked');

    const isValid =
      !!sex &&
      name?.value.trim().length > 0 &&
      born?.value &&
      !!privacy;

    btnStep1.disabled = !isValid;
  }

  function validateStep2() {
    const email = form.querySelector('#cta_email');
    const password = form.querySelector('#cta_password');

    const isValid =
      email?.value.trim().length > 0 &&
      email?.checkValidity() &&
      password?.value.trim().length >= 8;

    btnStep2Google.disabled = !isValid;
    btnStep2Email.disabled = !isValid;
  }

  // Слухаємо всі відповідні поля першого кроку
  form.querySelectorAll('#cta_name, #cta_born, input[name="cta_sex"], input[name="cta_privacy"]').forEach(el => {
    el.addEventListener('input', validateStep1);
    el.addEventListener('change', validateStep1);
  });

  // При кліку по кнопці "Sign up now" — переходимо до другого кроку
  btnStep1.addEventListener('click', () => {
    step1.classList.remove('is-show');
    step2.classList.add('is-show');
    progressDots[0].classList.remove('is-active');
    progressDots[1].classList.add('is-active');
  });

  // Слухаємо всі поля другого кроку
  form.querySelectorAll('#cta_email, #cta_password').forEach(el => {
    el.addEventListener('input', validateStep2);
  });

  // Якщо натиснули "Sign up with Google" або "Sign up with Email" — відправляємо форму
  [btnStep2Google, btnStep2Email].forEach(btn => {
    btn.addEventListener('click', () => {
      form.submit();
    });
  });

  // Перезавантаження сторінки після відправки
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    location.reload();
  });

  // Ініціальна перевірка
  validateStep1();
  validateStep2();
}
