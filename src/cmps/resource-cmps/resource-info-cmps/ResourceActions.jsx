import { Component } from 'react';
import { actionService } from '../../../services/action.service';
import help from '../../../assets/img/help-12.svg'

export class ResourceActions extends Component {
    state = {
        actions: []
    }

    async componentDidMount() {
        await this.getActions()
    }

    componentDidUpdate(prevProps) {
        // JSON.strigify prevents rendering an array with the same values but different pointers
        if (JSON.stringify(prevProps.actionIds) !== JSON.stringify(this.props.actionIds)){
            this.getActions()
        }
    }

    getActions = async () => {
        const actions = await actionService.getActions(this.props.actionIds)
        this.setState({ actions })
    }

    render() {
        const { actions } = this.state
        return (
            <section className="resource-actions flex column card" >
                <div className="card-title flex align-center">
                    <span>
                        Permitted Actions
                    </span>
                    <img src={help} alt="help" />
                </div>
                <div className="card-info flex column">
                    {actions.length && actions.map(action => <p key={action.id} className="card-row">{action.name}</p>)}
                </div>
            </section>
        )
    }
}
