import { Component } from 'react';

import { AppHeader } from './cmps/AppHeader';
import { AppMenu } from './cmps/AppMenu';
import { ResourceInfo } from './cmps/resource-cmps/ResourceInfo';

import { resourceService } from './services/resource.service';
import { utilService } from './services/utils';

export class App extends Component {
  state = {
    resources: [],
    selectedResource: null,
    filterBy: '',
    isMenuShown: false
  }

  async componentDidMount() {
    await this.loadActions()
    if (!this.state.selectedResource) {
      this.onSelectResource(this.state.resources[0])
    }
  }

  loadActions = async () => {
    const filter = this.state.filterBy
    const resources = await resourceService.getResources(filter)
    this.setState({ resources })
  }

  loadActionsDebounced = utilService.debounce(async () => await this.loadActions(), 250);

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, this.loadActionsDebounced())
  }

  onSelectResource = (selectedResource) => {
    this.setState({ selectedResource })
  }

  toggleMenu = () =>{
    this.setState({isMenuShown: !this.state.isMenuShown})
  }

  render() {
    const { resources, selectedResource, isMenuShown } = this.state
    return (
      <section className="app flex column">
        <AppHeader />
        <main className="app-content flex grow">
          <AppMenu
            isMenuShown={isMenuShown}
            toggleMenu={this.toggleMenu}
            resources={resources}
            selectedResource={selectedResource}
            onSetFilter={this.onSetFilter}
            onSelectResource={this.onSelectResource} />
          {selectedResource &&
            <ResourceInfo resource={selectedResource} />
          }
        </main>
      </section>
    )
  }
}

