function dataHandling(arr){
    var id = '';

    for (i = 0; i < arr.length; i++){

        for (j = 0; j < 5; j++){
            if (j === 0){
                id += 'Nomor ID: ' + arr[i][j] + '\n';
            } else if (j === 1){
                id += 'Nama Lengkap: ' + arr[i][j] + '\n';
            } else if (j === 2){
                id += 'TTL: ' + arr[i][j] + ' ';
            } else if (j === 3){
                id += arr[i][j] + '\n';
            } else if (j === 4 && i === arr.length - 1){
                id += 'Hobi: ' + arr[i][j];
            }
            else if (j === 4){
                id += 'Hobi: ' + arr[i][j] + '\n \n';
            }
        }

    }

    return id;
     
}

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

console.log(dataHandling(input));