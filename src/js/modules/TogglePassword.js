export function TogglePassword() {
  document.querySelectorAll('.js-password-toggle').forEach((btn) => {
    btn.addEventListener('click', () => {
      const inputWrapper = btn.closest('.u-area-input__input-wrapper');
      const input = inputWrapper?.querySelector('input[type="password"], input[type="text"]');

      if (!input) return;

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';

      btn.classList.toggle('is-active', isPassword);
    });
  });
}