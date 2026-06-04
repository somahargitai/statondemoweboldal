import { useEffect, useState } from 'react';
import { fetchProjects, type Project } from '../lib/api';

type Status = 'loading' | 'ready' | 'error';

export function useProjects(category?: string) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [status, setStatus] = useState<Status>('loading');

  useEffect(() => {
    let active = true;
    setStatus('loading');
    fetchProjects(category)
      .then((data) => {
        if (!active) return;
        setProjects(data);
        setStatus('ready');
      })
      .catch(() => {
        if (!active) return;
        setStatus('error');
      });
    return () => {
      active = false;
    };
  }, [category]);

  return { projects, status };
}
