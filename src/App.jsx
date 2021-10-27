import { useState, useEffect, useCallback } from 'react';

import { AppHeader } from './cmps/AppHeader';
import { AppMenu } from './cmps/AppMenu';
import { ResourceInfo } from './cmps/resource-cmps/ResourceInfo';

import { resourceService } from './services/resource.service';
import { utilService } from './services/utils';

import { useUpdateEffect } from './hooks/useUpdateEffect';

export function App() {
  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);
  const [filterBy, setFilterBy] = useState('');
  const [isMenuShown, setIsMenuShown] = useState(false);

  const loadResources = async (filterBy = '') => {
    const res = await resourceService.getResources(filterBy);
    setResources(res);
    return res
  }

  // eslint-disable-next-line
  const debouncedloadResources = useCallback(utilService.debounce(loadResources, 250), []);

  const handleChange = useCallback((ev) => {
    const filter = ev.target.value;
    setFilterBy(filter);
    // eslint-disable-next-line
  }, [filterBy])

  const onSelectResource = (resource) => {
    setSelectedResource(resource);
  }

  const toggleMenu = useCallback(() => {
    setIsMenuShown(prev => !prev);
  }, [setIsMenuShown])

  useEffect(() => {
    async function fetchResources() {
      const [selectedRes] = await loadResources();
      onSelectResource(selectedRes);
    }
    fetchResources();
  }, []);

  useUpdateEffect(() => {
    debouncedloadResources(filterBy)
  }, [filterBy])

  return (
    <section className="app flex column">
      <AppHeader />
      <main className="app-content flex grow">
        <AppMenu
          isMenuShown={isMenuShown}
          toggleMenu={toggleMenu}
          resources={resources}
          selectedResource={selectedResource}
          filterBy={filterBy}
          handleChange={handleChange}
          onSelectResource={onSelectResource} />
        {selectedResource &&
          <ResourceInfo resource={selectedResource} />
        }
      </main>
    </section>
  )
}

