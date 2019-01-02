export default (callback, options) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.addEventListener("change", (e) => {
        callback(e.target.files[0], options)
    })
    input.click()
}