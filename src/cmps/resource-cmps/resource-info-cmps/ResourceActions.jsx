import { Component } from 'react';
import help from '../../../assets/img/help-12.svg'
import { actionService } from '../../../services/action.service';

export class ResourceActions extends Component {
    componentDidMount(){
        actionService.getActions(["1", "2", "3", "4", "5"])
    }
    render() {
        return (
            <section className="resource-actions flex column card" >
                <div className="card-title flex align-center">
                    <span>
                        Permitted Actions
                    </span>
                    <img src={help} alt="help" />
                </div>
                <div className="card-info flex column">
                    <p className="card-row">Action 1</p>
                    <p className="card-row">Action 1</p>
                    <p className="card-row">Action 1</p>
                    <p className="card-row">Action 1</p>
                    <p className="card-row">Action 1</p>
                    <p className="card-row">Action 1</p>
                </div>
            </section>
        )
    }
}
