let umurKucing = (usia) => {
    if (usia ==1 ) {
        return 15 ;
    } else if (usia == 2) {
        return 24
    } else if (usia > 2) {
        return ((usia - 2) *4) + 24
    }
}
console.log (umurKucing(4))
document.write ('Hasilnya : ')
document.write (umurKucing(4))