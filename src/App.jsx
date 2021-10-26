import { Component } from 'react';
import { AppHeader } from './cmps/AppHeader';

export class App extends Component {
  state = {
    resources: [],
    actions: [],
    currentResource: null
  }

  async componentDidMount() {
    await this.loadActions()
  }

  loadActions = async () => {
    const resources = await resourceService.getResources()
    this.setState({ resources })
  }

  render() {
    const { resources, actions, currentResource } = this.state
    return (
      <main className="app flex column">
        <AppHeader />
        <section className="flex">
          <AppMenu resources={resources} />
          {/* {currentResource &&  */}
          <ResourceInfo resource={currentResource} />
          {/* } */}
        </section>
      </main>
    )
  }
}

