const input = document.querySelector('input[name="price"]')
input.addEventListener("keydown", function(e) {
    setTimeout(function() {
        let { value } = e.target
            //180,23 -> 18023 /100 -> 180
        value = value.replace(/\D/g, "")
        value = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value / 100)
        e.target.value = value
    }, 1)
})
const PhotosUpload = {
    preview: document.querySelector('#photos-preview'),
    uploadLimit: 6,
    handleFileInput(event) {
        const { files: fileList } = event.target
        if (PhotosUpload.hasLimit(event, fileList)) return
        Array.from(fileList).forEach(file => {
            const reader = new FileReader()
            reader.onload = () => {
                const image = new Image()
                image.src = String(reader.result)
                const div = PhotosUpload.getContainer(image)
                PhotosUpload.preview.appendChild(div)
            }
            reader.readAsDataURL(file)
        })
    },
    hasLimit(event) {
        const { uploadLimit } = PhotosUpload
        const { files: fileList } = event.target
        if (fileList.length > uploadLimit) {
            alert(`Envie no maximo ${this.uploadLimit} fotos`)
            event.preventDefault()
            return true
        }
        return false
    },
    getContainer(image) {
        const div = document.createElement('div')
        div.classList.add('photo')
        div.onclick = () => alert('remover foto')
        div.appendChild(image)
        return div
    }

}