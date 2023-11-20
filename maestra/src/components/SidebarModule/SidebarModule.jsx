import "./SidebarModule.css"

const SidebarModule = (props) => {
    return (
        <div id="module">
            <h1>{props.moduleTopic}</h1>
        </div>
    )
}

export default SidebarModule;