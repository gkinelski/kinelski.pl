import type { APIRoute } from 'astro';
import site from '../../data/siteContent.json';
import typography from '../../data/typography.json';
import profile from '../../data/profile.json';
import career from '../../data/career.json';
import energyProjects from '../../data/energyProjects.json';
import bibliometrics from '../../data/bibliometrics.json';
import publications from '../../data/publications.json';
import research from '../../data/research.json';
import monographs from '../../data/monographs.json';
import monograph from '../../data/monograph.json';
import activity from '../../data/activity.json';
import contact from '../../data/contact.json';
import assistant from '../../data/researchAssistant.json';

const localData = {
  site,
  typography,
  profile,
  career,
  energyProjects,
  bibliometrics,
  publications,
  research,
  monographs,
  monograph,
  activity,
  contact,
  assistant,
};

type LocalDataKey = keyof typeof localData;

export function getStaticPaths() {
  return Object.keys(localData).map((key) => ({ params: { key } }));
}

export const GET: APIRoute = ({ params }) => {
  const key = params.key as LocalDataKey;
  const data = localData[key];

  if (!data) {
    return new Response(JSON.stringify({ error: 'Nie znaleziono lokalnych danych.' }), {
      status: 404,
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  return new Response(JSON.stringify(data), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Robots-Tag': 'noindex, nofollow, noarchive',
    },
  });
};
