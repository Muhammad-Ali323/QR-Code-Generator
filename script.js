let generateBtn= document.getElementById('generate')
let downloadBtn= document.getElementById('download')
let size= document.getElementById('size')
let qrtext= document.getElementById('qr-text')
let img= document.querySelector('.image')
generateBtn.addEventListener('click', (e)=>{
    qrtext.value.length > 0 ? generateqrcode() : alert("Enter the text or URL to generate your QR code");
    e.preventDefault()
    generateqrcode()
})
function generateqrcode(){
    img.innerHTML=''
    return new QRCode(img, {
        text: qrtext.value,
        width: size.value,
        height: size.value,
        colorDark : "#000000",
        colorLight : "#ffffff",
    });
}
downloadBtn.addEventListener('click', ()=>{
    let imag = document.querySelector('.image img');

    if(imag !== null){
        let imgAtrr = imag.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
})