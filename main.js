const str = `
010-1234-5678
rltk8520@naver.com
http://www.omdbapi.com/?apikey=7035c&s=frozen
The quick brown fox jumps over the lazy dog.
abbbcccddd
`


const regexp = /the/g
console,log(str.match(/(?=@).{1,}/g))
