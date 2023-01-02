const fileInput = document.querySelector('input');
const downloadBtn = document.querySelector('button');


downloadBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    downloadBtn.innerText = 'Downloading file...';
    fetchFile(fileInput.value);
    fileInput.value = '';
})

function fetchFile(url){
    fetch(url).then(res =>res.blob()).then(file=>{
        let tempURL = URL.createObjectURL(file);
        let aTag = document.createElement('a');
        aTag.href = tempURL;
        aTag.download = url.replace(/^.*[\\\/]/, '');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempURL);
        downloadBtn.innerText= 'Download File';

    }).catch(()=>{
        downloadBtn.innerText= 'Download File';
        alert('Failed to download file!')
    })
}




























