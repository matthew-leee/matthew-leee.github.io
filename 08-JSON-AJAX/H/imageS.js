function imageS() {
    for (let i of image) {
        i.addEventListener('mouseleave', function () {
            this.style.width = "200px";
        }, true);
    }
}
imageS();