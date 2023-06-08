import "./Nav.css"
export default function Nav(props) {
    return(
        <>
            <div className="header">
                 <h1>{props.header}</h1>
            </div>
        </>
    );
} 