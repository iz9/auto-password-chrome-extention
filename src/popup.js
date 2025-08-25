document.addEventListener('DOMContentLoaded', function() {
    const usernameInput = document.getElementById('username');
    const fillButton = document.getElementById('fillForm');
    const settingsLink = document.getElementById('openSettings');

    // Загружаем сохраненный логин
    chrome.storage.local.get(['savedUsername'], function(result) {
        if (result.savedUsername) {
            usernameInput.value = result.savedUsername;
        }
    });

    fillButton.addEventListener('click', function() {
        const username = usernameInput.value.trim();

        if (!username) {
            alert('Пожалуйста, введите логин');
            return;
        }

        // Сохраняем логин
        chrome.storage.local.set({savedUsername: username});

        // Отправляем сообщение в content script
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {
                action: 'fillLoginForm',
                username: username
            });
        });

        window.close();
    });

    settingsLink.addEventListener('click', function() {
        chrome.runtime.openOptionsPage();
    });
});
