
//Доска судоку
var board = [
    [2,3,8,9,6,5,7,1,4],
    [7,5,9,4,1,3,6,8,2],
    [4,1,6,2,7,8,9,5,3],
    [9,4,5,1,3,6,2,7,8],
    [6,8,7,5,2,4,1,3,9],
    [3,2,1,8,9,7,4,6,5],
    [1,6,2,3,5,9,8,4,7],
    [5,7,4,6,8,2,3,9,1],
    [8,9,3,7,4,1,5,2,6],
];

//Функция для нахождения чисел от 1 до 9 во входящем массиве
//Возвращает false, если не найдено какое либо число 
function check (input) {
    for (var j=1; j<=9; j++) {
        if (input.indexOf(j) == -1) {
            return false;
        }
    }
    
    return true;
}

//перевернуть массив для проверки строк
function transpose(arr) {
    for (x = 0; x < 9; x++)
        for (y = x + 1; y < 9; y++) {
            var temp = arr[x][y];
            arr[x][y] = arr[y][x];
            arr[y][x] = temp
        }
    return arr
};

//создание массива из квадрата 3x3 
// X и Y координаты верхнего левого угла квадрата
function box(Y, X, arr) {
    var output = [];
	for (var i=0; i<3; i++) {
		for (var j=0; j<3; j++) {
            output.push(arr[Y+i][X+j]);
		};
    };
    return output;
};

var transposedBoard = transpose(board);

//проверка массива board
for (var i=0; i<9; i++) {
    //сначала проверяем правильность строк и столбцов
    if (!check(board[i]) || !check(transposedBoard[i])) {
        console.log("некорректно");
        return false;
    }

    //проверка квадратов 3x3
	var y=Math.floor(i/3)*3;
    var x=(i%3)*3;
    if (!check(box(y,x,board))) {
        console.log("некорректно");
        return false; 
    }
};


console.log("корректно");
return true;


