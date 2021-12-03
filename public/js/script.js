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