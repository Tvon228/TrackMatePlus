import telebot
from telebot.types import InlineKeyboardMarkup, InlineKeyboardButton, WebAppInfo

# Ваш токен Telegram-бота
BOT_TOKEN = "7756587110:AAHbKjovWkZZZet9mhrMYsmmjOi1tknfGHM"  
bot = telebot.TeleBot(BOT_TOKEN)

@bot.message_handler(commands=['start'])
def send_welcome(message):

    markup = InlineKeyboardMarkup()
    web_app = WebAppInfo(url="https://www.google.com")  # Ссылка на мини-приложение
    button = InlineKeyboardButton("Открыть Google", web_app=web_app)
    markup.add(button)

    bot.reply_to(
        message,
        "Нажмите на кнопку ниже, чтобы открыть мини-приложение:",
        reply_markup=markup
    )

# Запуск бота
if __name__ == "__main__":
    print("Бот запущен...")
    bot.infinity_polling()