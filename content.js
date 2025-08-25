// Слушаем сообщения от popup
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === 'fillLoginForm') {
        fillLoginForm(request.username);
    }
});

function fillLoginForm(username) {
    // Получаем настройки из хранилища
    chrome.storage.sync.get(['defaultPassword', 'loginSelector', 'passwordSelector', 'submitSelector'], function(result) {
        const password = result.defaultPassword || '';
        const loginSelector = result.loginSelector || "input[type='username']";
        const passwordSelector = result.passwordSelector || "input[type='password']";
        const submitSelector = result.submitSelector || "button[type='login']";

        if (!password) {
            alert('Пароль не установлен в настройках расширения');
            return;
        }

        // Ищем поля используя настроенные селекторы
        const usernameField = findElement(loginSelector);
        const passwordField = findElement(passwordSelector);
        const submitButton = findElement(submitSelector);

        if (usernameField) {
            // Заполняем логин
            usernameField.value = username;
            usernameField.dispatchEvent(new Event('input', { bubbles: true }));
            usernameField.dispatchEvent(new Event('change', { bubbles: true }));
        } else {
            console.warn('Поле логина не найдено с селектором:', loginSelector);
        }

        if (passwordField) {
            // Заполняем пароль
            passwordField.value = password;
            passwordField.dispatchEvent(new Event('input', { bubbles: true }));
            passwordField.dispatchEvent(new Event('change', { bubbles: true }));
        } else {
            console.warn('Поле пароля не найдено с селектором:', passwordSelector);
        }

        // Небольшая задержка перед нажатием кнопки
        setTimeout(() => {
            if (submitButton) {
                submitButton.click();
            } else {
                console.warn('Кнопка входа не найдена с селектором:', submitSelector);
            }
        }, 500);
    });
}

function findElement(selector) {
    try {
        return document.querySelector(selector);
    } catch (error) {
        console.error('Ошибка в селекторе:', selector, error);
        return null;
    }
}
