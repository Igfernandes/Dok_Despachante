(function(){
    document.addEventListener("DOMContentLoaded", ()=>{
        let $filter = document.querySelector(".dok_development-video-filter")

        $filter.onclick = function(){
            this.style = "opacity: 0;"
            setTimeout(()=>{
                this.remove();
            }, 700)
        }
    })
}())