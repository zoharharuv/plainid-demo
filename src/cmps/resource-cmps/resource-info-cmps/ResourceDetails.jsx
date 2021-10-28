import { Fragment } from 'react'
import help from '../../../assets/img/help-12.svg'

export function ResourceDetails({ resource }) {
    return (
        <section className="resource-details flex column card" >
            <div className="card-title flex align-center">
                <span>
                    General Details
                </span>
                <img src={help} alt="help" />
            </div>

            <div className="card-info flex column">
                {// eslint-disable-next-line
                Object.keys(resource).map((key, idx) => {
                    if (key !== 'id' && key !== 'actionIds') {
                        return (
                            <Fragment key={idx}>
                                <span className="details-info-label">
                                    {key === 'resourceType' ? 'resource type' : key}
                                </span>
                                <p className="card-row">
                                    {resource[key]}
                                </p>
                            </Fragment>
                        )
                    }
                })}
            </div>
            
        </section>
    )
}
