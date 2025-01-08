import './expand-button.scss'

export default function ExpandButton({setShow, show, altText}) {
    return (
    <button
              onClick={() => {
                setShow(!show)     
             }}
              className="expand-arrow-button"
            >
              <img
                src={show ? "assets/down.png" : "assets/up.png"}
                alt={altText}
                className="expand-arrow"
              />
    </button>
    )
}