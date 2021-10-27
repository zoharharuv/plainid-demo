import { useState, useEffect, useMemo } from 'react';
import { actionService } from '../../../services/action.service';
import help from '../../../assets/img/help-12.svg'

export function ResourceActions({ actionIds }) {
    const [actions, setActions] = useState([]);

    const getActions = async (ids) => {
        const actions = await actionService.getActions(ids)
        setActions(actions)
    }

    // Spreading actionIds array prevents calling getActions in case of an 
    // array with the exact same values but different pointers
    // Sorting for cases e.g: [1,2,3,4,5], [1,3,2,4,5]
    const sortedActionIds = useMemo(() => {
        return actionIds.sort()
    }, [actionIds])

    useEffect(() => {
        getActions(actionIds);
        // eslint-disable-next-line
    }, [...sortedActionIds]);

    return (
        <section className="resource-actions flex column card" >
            <div className="card-title flex align-center">
                <span>
                    Permitted Actions
                </span>
                <img src={help} alt="help" />
            </div>
            <div className="card-info flex column">
                {actions.length && actions.map(action =>
                    <p key={action.id} className="card-row">
                        {action.name}
                    </p>)}
            </div>
        </section>
    )
}
