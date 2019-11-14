//TriangleLoopingExercise Pseudocode

//mulai dgn var star = "*****"
var star = '*****'

for(s = 5; s > 0; s--){
/**
* ! iterasi 0, s = 5 msh > 0, jdi s - 1, s = 4.
* ! iterasi 1, s = 4 msh > 0, jdi s - 1, s = 3 dan lanjut ke 'for' kedua.
* ! iterasi 2, s = 3 msh > 0, jdi s - 1, s = 2 dan lanjut ke 'for' kedua.
* ! iterasi 3, s = 2 msh > 0, jdi s - 1, s = 1 dan lanjut ke 'for' kedua.
* ! iterasi 4, s = 1 msh > 0, jdi s - 1, s = 0 dan lanjut ke 'for' kedua.
* ! iterasi 5, s = 0 sudah tidak > 0, jdi loopnya dihentikan.
*/
    star = ''
//di 'for' kedua, i mulai dgn nilai 0, i > 4, jadi i ditambah 1.
for(i = 0; i < s; i++){
/**
* ! iterasi 0, star ditampil sbgi '*****' krna var dan karena i = 1, starnya tidak diubah dan tetap '*****'. s = 4 msh > 0, jdi lanjut ke 'for' pertama.
* ! iterasi 1, i = 2, starnya menampilkan 9 '*', star = '' hilangin '*****', jdi hnya 4 '*' yng tampil. s = 3 msh > 0, jdi lanjut ke 'for' pertama.
* ! iterasi 2, i = 3, starnya menampilkan 8 '*', star = '' hilangin '*****', jdi hnya 3 '*' yng tampil. s = 2 msh > 0, jdi lanjut ke 'for' pertama.
* ! iterasi 3, i = 4, starnya menampilkan 7 '*', star = '' hilangin '*****', jdi hnya 2 '*' yng tampil. s = 1 msh > 0, jdi lanjut ke 'for' pertama.
* ! iterasi 4, i = 5, starnya menampilkan 6 '*', star = '' hilangin '*****', jdi hnya 1 '*' yng tampil. s = 0 sdh tdk > 0, jdi loopnya dihentikan.
*/
    star = star + '*'
    }
}

