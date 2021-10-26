import { Component } from "react";

export class ResourceSearch extends Component {
    state = {
        input: ''
    }

    onSearch = async () => {
        await this.props.onSearchResources(this.state.input)
    }

    handleChange = (ev) => {
        this.setState({
            input: ev.target.value
        })
    }
    render() {
        return (
            <section className="resource-search">
                <div className="search-bar">
                    <input onChange={this.handleChange} value={this.state.input} type="search" id="search-bar" placeholder="Search on YouTube" autoFocus />
                    <button onClick={this.onSearch}>🔍</button>
                </div>

            </section>
        )
    }
}