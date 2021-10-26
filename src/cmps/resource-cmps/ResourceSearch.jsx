import { Component } from "react";
import search from '../../assets/img/search.svg'

export class ResourceSearch extends Component {
    state = {
        input: ''
    }

    handleChange = (ev) => {
        this.setState({ input: ev.target.value }, () => {
            this.props.onSetFilter(this.state.input)
        })
    }

    render() {
        return (
            <section className="resource-search">
                <div className="search-bar">
                    <input
                        onChange={this.handleChange}
                        value={this.state.input}
                        type="text"
                        placeholder="Search Resource"
                        autoComplete="off"/>
                    <img src={search} alt="search" />
                </div>
            </section>
        )
    }
}