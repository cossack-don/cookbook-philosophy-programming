# Паттерн Фасад - Facade

```ts
// Внутренние функции для работы с аудио
function loadAudioFile(filename:string) {
    console.log(`Загрузка аудиофайла: ${filename}`);
    return { filename, status: 'loaded' };
}

function decodeAudioFile(audioFile:{filename:string}) {
    console.log(`Декодирование аудиофайла: ${audioFile.filename}`);
    return { ...audioFile, status: 'decoded' };
}

function initAudioPlayer(audioFile: {filename:string}) {
    console.log(`Инициализация аудиоплеера для: ${audioFile.filename}`);
    return { ...audioFile, status: 'ready' };
}

function playAudio(audioFile:{filename:string}) {
    console.log(`Воспроизведение аудио: ${audioFile.filename}`);
    return { ...audioFile, status: 'playing' };
}


// Фасад для работы с аудио
export function PatternFacadePlayAudioFile(filename:string) {
    const audioFile = loadAudioFile(filename); // Загрузка файла
    const decodedAudio = decodeAudioFile(audioFile); // Декодирование
    const readyAudio = initAudioPlayer(decodedAudio); // Инициализация плеера
    const result = playAudio(readyAudio); // Воспроизведение

    return result;
}

const result = PatternFacadePlayAudioFile('song.mp3');
console.log(result);

// Загрузка аудиофайла: song.mp3
// Декодирование аудиофайла: song.mp3
// Инициализация аудиоплеера для: song.mp3
// Воспроизведение аудио: song.mp3
// { filename: 'song.mp3', status: 'playing' }
```
