// import "./MyButton.css"

function createRipple(event) {
    console.log(`event: `)
    console.log(event)
    const button = event.target;

    const circle = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
    circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
    circle.classList.add("ripple");

    const ripple = button.getElementsByClassName("ripple")[0];
    console.log("ripple")
    console.log(ripple)
    if (ripple) {
        ripple.remove();
    }

    button.appendChild(circle);
    console.log(button)
}

//   const buttons = document.getElementsByTagName("button");
//   for (const button of buttons) {
//     button.addEventListener("click", createRipple);
//   }

export default function MyButton({ onClick, children, className, style }) {
    let clickCallbacks = [createRipple];
    if (onClick != undefined) {
        clickCallbacks.push(onClick)
    }

    return (<button onClick={(e) => {
        clickCallbacks.forEach((c) => {
            c(e);
        })
    }} className={className}
        style={style}>
        {children}
    </button>)
}