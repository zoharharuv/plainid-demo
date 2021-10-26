import { Component } from 'react';

import { AppHeader } from './cmps/AppHeader';
import { AppMenu } from './cmps/AppMenu';
import { ResourceInfo } from './cmps/resource-cmps/ResourceInfo';

import { resourceService } from './services/resource.service';

export class App extends Component {
  state = {
    resources: [],
    actions: [],
    currentResource: null,
    filterBy: ''
  }

  async componentDidMount() {
    await this.loadActions()
  }

  loadActions = async () => {
    const filter = this.state.filterBy 
    const resources = await resourceService.getResources(filter)
    this.setState({ resources })
  }

  onSetFilter = (filterBy) => {
    // DEBOUNCE
    this.setState({ filterBy })
  }

  render() {
    const { resources, actions, currentResource } = this.state
    return (
      <section className="app flex column">
        <AppHeader />
        <main className="app-content flex">
          <AppMenu resources={resources} onSetFilter={this.onSetFilter} />
          {/* {currentResource &&  */}
          <ResourceInfo resource={currentResource} />
          {/* } */}
        </main>
      </section>
    )
  }
}

