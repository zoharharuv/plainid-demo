import { useState, useEffect } from 'react';
import { actionService } from '../../../services/action.service';
import help from '../../../assets/img/help-12.svg'

export function ResourceActions({ resource }) {
    const [actions, setActions] = useState([]);

    useEffect(() => {
        const fetchActions = async () => {
            const map = await actionService.getResourceIdActionsMap()
            const actions = map.get(resource.id)
            setActions(actions)
        }
        fetchActions()
    }, [resource.id]);

    return (
        <section className="resource-actions flex column card" >
            <div className="card-title flex align-center">
                <span>
                    Permitted Actions
                </span>
                <img src={help} alt="help" />
            </div>
            <div className="card-info flex column">
                {actions?.length && actions?.map(action =>
                    <p key={action.id} className="card-row">
                        {action.name}
                    </p>)}
            </div>
        </section>
    )
}
