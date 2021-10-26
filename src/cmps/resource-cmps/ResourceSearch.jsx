import { Component } from "react";

export class ResourceSearch extends Component {
    state = {
        input: ''
    }
    
    handleChange = (ev) => {
        this.setState({input: ev.target.value}, () =>{
            this.props.onSetFilter(this.state.input)
        })
    }

    render() {
        return (
            <section className="resource-search">
                <div className="search-bar">
                    <input onChange={this.handleChange} value={this.state.input} type="search" id="search-bar" placeholder="Search Resource" autoFocus />
                </div>

            </section>
        )
    }
}