export function ResourceHeader({ headerInfo }) {
    return (
        <section className="resource-header padding15" >
            <h1>{headerInfo.name}</h1>
            <p>{headerInfo.description}</p>
        </section>
    )
}
