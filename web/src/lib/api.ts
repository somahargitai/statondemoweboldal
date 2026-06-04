export interface Project {
  id: number;
  slug: string;
  category: 'bridge' | 'rail' | 'infrastructure' | 'bim' | 'structural';
  title_hu: string;
  title_de: string;
  summary_hu: string;
  summary_de: string;
  location: string;
  client: string | null;
  year: number;
  scope_hu: string | null;
  scope_de: string | null;
  accent: string;
  featured: boolean;
  sort_order: number;
}

export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  subject?: string;
  message: string;
  locale: string;
}

export async function fetchProjects(category?: string): Promise<Project[]> {
  const qs = category && category !== 'all' ? `?category=${encodeURIComponent(category)}` : '';
  const res = await fetch(`/api/projects${qs}`);
  if (!res.ok) throw new Error(`projects request failed: ${res.status}`);
  return (await res.json()) as Project[];
}

export interface ContactResult {
  ok: boolean;
  fields?: Record<string, string>;
}

export async function submitContact(payload: ContactPayload): Promise<ContactResult> {
  const res = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  if (res.status === 201) return { ok: true };
  if (res.status === 422) {
    const data = (await res.json()) as { fields?: Record<string, string> };
    return { ok: false, fields: data.fields };
  }
  throw new Error(`contact request failed: ${res.status}`);
}
