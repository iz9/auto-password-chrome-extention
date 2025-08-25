document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('defaultPassword');
    const loginSelectorInput = document.getElementById('loginSelector');
    const passwordSelectorInput = document.getElementById('passwordSelector');
    const submitSelectorInput = document.getElementById('submitSelector');
    const saveButton = document.getElementById('save');
    const statusDiv = document.getElementById('status');
    const togglePasswordButton = document.getElementById('togglePassword');

    // Значения по умолчанию
    const defaults = {
        loginSelector: "input[type='username']",
        passwordSelector: "input[type='password']",
        submitSelector: "button[type='login']"
    };

    // Загружаем сохраненные настройки
    chrome.storage.sync.get(['defaultPassword', 'loginSelector', 'passwordSelector', 'submitSelector'], function(result) {
        if (result.defaultPassword) {
            passwordInput.value = result.defaultPassword;
        }

        loginSelectorInput.value = result.loginSelector || defaults.loginSelector;
        passwordSelectorInput.value = result.passwordSelector || defaults.passwordSelector;
        submitSelectorInput.value = result.submitSelector || defaults.submitSelector;
    });

    // Показать/скрыть пароль
    togglePasswordButton.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            togglePasswordButton.textContent = '🙈';
        } else {
            passwordInput.type = 'password';
            togglePasswordButton.textContent = '👁';
        }
    });

    // Сохранение настроек
    saveButton.addEventListener('click', function() {
        const settings = {
            defaultPassword: passwordInput.value,
            loginSelector: loginSelectorInput.value || defaults.loginSelector,
            passwordSelector: passwordSelectorInput.value || defaults.passwordSelector,
            submitSelector: submitSelectorInput.value || defaults.submitSelector
        };

        chrome.storage.sync.set(settings, function() {
            statusDiv.innerHTML = '<div class="status success">Настройки сохранены!</div>';
            setTimeout(() => {
                statusDiv.innerHTML = '';
            }, 3000);
        });
    });
});
