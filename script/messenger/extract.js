const fs = require('fs');

// Задайте пътя към вашия JSON файл
const jsonFilePath = 'script/messenger/conversations.json';

// Четене на JSON файла
fs.readFile(jsonFilePath, 'utf8', (err, data) => {
    if (err) {
        console.error('Грешка при четене на файла:', err);
        return;
    }

    try {
        // Парсване на JSON данните
        const conversations = JSON.parse(data);

        // Проверка дали conversations е масив
        if (!Array.isArray(conversations)) {
            throw new Error('Полето "conversation" е липсва или не е масив.');
        }

        // Обработка на всяка разговор
        conversations.forEach(conversation => {
            console.log(`Име: ${conversation.name}`);
            console.log(`Последно съобщение: ${conversation.lastMessage}`);

            // Обработка на всяко съобщение в разговора
            conversation.conversation.forEach(msg => {
                console.log(`${msg.sender}: ${msg.message} `);
            });
        });

    } catch (parseError) {
        console.error('Грешка при парсване на JSON:', parseError.message);
    }
});
