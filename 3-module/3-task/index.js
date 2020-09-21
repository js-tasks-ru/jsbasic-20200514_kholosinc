function camelize(str) {
    arr = str.split(`-`);
    for (let i = arr.length-1; i > 0; i--){

// Изменение регистра
    arr[i] = (arr[i][0].toUpperCase() + arr[i].slice(1));

    }
    str = arr.join(``);
    return str;
}
