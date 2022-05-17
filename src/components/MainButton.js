import './MainButton.css'

const MainButton = (props) => {
    return (
        <>
            <button onClick={props.click} className="mainButton">{props.value}</button>
        </>
    )
}

export default MainButton;