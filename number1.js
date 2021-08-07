
let onlineShop = (namaPembeli, produkBeli) => {
    return  'Terimakasih ' + (namaPembeli) + ' telah membeli produk ' +(produkBeli) + ' kami'  ; 
}
console.log (onlineShop ('Kak Salsa', 'kosmetik'))
document.write ('Hasilnya :')
document.write ('<br />')
document.write (onlineShop ('Kak Salsa', 'kosmetik'))