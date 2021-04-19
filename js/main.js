const nums = document.querySelectorAll('.nums span')
const counter = document.querySelector('.counter')
const finalMsg = document.querySelector('.final')
const replay = document.querySelector('.replay')

runAnimation()

// RESET ALL CLASSES
function resetDOM() {
    counter.classList.remove('hide')
    finalMsg.classList.remove('show')

    nums.forEach(nums => {
        nums.classList.value = ''
    })

    nums[0].classList.add('in')
}

// PLAY AGAIN
replay.addEventListener('click', resetDOM, runAnimation)

function runAnimation() {
    nums.forEach((num, idx) => {
        const nextToLast = nums.length - 1

        // pay attention, its 'animatioend' listener
        num.addEventListener('animationend', (e) => {
            // if animation goIN ends, and idx is not last
            if (e.animationName === 'goIn' && idx !== nextToLast) {
                num.classList.remove('in')
                num.classList.add('out')
            } else if
                // if animation goOut ends, and num is next el sibling
                (e.animationName === "goOut" && num.nextElementSibling) {
                num.nextElementSibling.classList.add('in')
            } else {
                // when all ends, hide counter, show final msg 
                counter.classList.add('hide')
                finalMsg.classList.add('show')
            }
        })
    })
}