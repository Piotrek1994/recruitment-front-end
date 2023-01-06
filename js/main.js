import custom from './custom'
window.addEventListener('load', () => {
	custom()
})
const playBtn = document.querySelector('.hero_section-play')

function addVideo() {
	const div = document.createElement('div')
	div.innerHTML =
		'<iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>'
        div.classList.add("showVideo")
	document.body.appendChild(div)
}




playBtn.addEventListener('click', addVideo)
