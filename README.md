# Auto Login Helper - Расширение Chrome

Автоматическое заполнение форм авторизации с настраиваемыми селекторами.

## 🚀 Установка

### Из GitHub Releases (Рекомендуется)
1. Перейдите в [Releases](https://github.com/ваш-username/auto-login-extension/releases)
2. Скачайте последнюю версию `auto-login-extension-v1.0.0.zip`
3. Распакуйте архив
4. Откройте Chrome → `chrome://extensions/`
5. Включите "Режим разработчика"
6. Нажмите "Загрузить распакованное расширение"
7. Выберите папку с распакованным расширением

### Из исходного кода
``` bash
    git clone [https://github.com/ваш-username/auto-login-extension.git](https://github.com/%D0%B2%D0%B0%D1%88-username/auto-login-extension.git) cd auto-login-extension
```
Затем загрузите папку `src` как расширение в Chrome.

## ⚙️ Настройка

1. После установки нажмите на иконку расширения
2. Перейдите в "Настройки"
3. Укажите:
    - **Стандартный пароль** - пароль для автозаполнения
    - **Селектор логина** - CSS селектор поля логина (по умолчанию: `input[type='username']`)
    - **Селектор пароля** - CSS селектор поля пароля (по умолчанию: `input[type='password']`)
    - **Селектор кнопки** - CSS селектор кнопки входа (по умолчанию: `button[type='login']`)

## 🎯 Использование

1. Откройте страницу авторизации
2. Нажмите на иконку расширения
3. Введите логин
4. Нажмите "Заполнить форму"

## 🔧 Примеры селекторов

- `input[name='username']` - поле с атрибутом name="username"
- `#loginField` - элемент с id="loginField"
- `.username-input` - элемент с классом "username-input"
- `form input[type='email']` - email поле внутри формы

## 🛡️ Безопасность

⚠️ **Внимание:** Расширение сохраняет пароли локально в браузере. Используйте только на доверенных устройствах.

## 📝 Changelog

См. [CHANGELOG.md](CHANGELOG.md)

## 📄 Лицензия

MIT License - см. [LICENSE](LICENSE)

## 🐛 Сообщить о проблеме

Создайте [Issue](https://github.com/ваш-username/auto-login-extension/issues/new)
