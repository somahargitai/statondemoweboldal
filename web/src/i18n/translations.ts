export type Lang = 'hu' | 'de';

export interface ServiceCopy {
  key: string;
  num: string;
  title: string;
  body: string;
  tags: string[];
}

export interface Dictionary {
  nav: {
    home: string;
    services: string;
    projects: string;
    about: string;
    contact: string;
    cta: string;
  };
  hero: {
    tagline: string;
    title1: string;
    title2: string;
    lead: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stat1Label: string;
    stat2Label: string;
    stat3Label: string;
  };
  intro: {
    eyebrow: string;
    heading: string;
    body: string;
  };
  services: {
    eyebrow: string;
    heading: string;
    items: ServiceCopy[];
  };
  projects: {
    eyebrow: string;
    heading: string;
    lead: string;
    all: string;
    filters: Record<string, string>;
    viewAll: string;
    loading: string;
    error: string;
    empty: string;
    locationLabel: string;
    yearLabel: string;
    clientLabel: string;
    scopeLabel: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    body1: string;
    body2: string;
    valuesHeading: string;
    values: { title: string; body: string }[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    lead: string;
    name: string;
    email: string;
    company: string;
    subject: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    errorGeneric: string;
    required: string;
    invalidEmail: string;
    officeLabel: string;
    emailLabel: string;
    phoneLabel: string;
  };
  footer: {
    blurb: string;
    nav: string;
    contact: string;
    rights: string;
    madeIn: string;
  };
}

export const dict: Record<Lang, Dictionary> = {
  hu: {
    nav: {
      home: 'Kezdőlap',
      services: 'Szolgáltatások',
      projects: 'Referenciák',
      about: 'Rólunk',
      contact: 'Kapcsolat',
      cta: 'Ajánlatkérés',
    },
    hero: {
      tagline: 'Mérnöki tervezőiroda · Tragwerksplanung',
      title1: 'Tartószerkezetek,',
      title2: 'amelyek megtartanak.',
      lead: 'A STATON hidakat, vasúti műtárgyakat és mélyépítési szerkezeteket tervez német és európai szabványok szerint — a koncepciótól a BIM-alapú kiviteli tervekig.',
      ctaPrimary: 'Projekt indítása',
      ctaSecondary: 'Referenciák',
      stat1Label: 'év mérnöki tapasztalat',
      stat2Label: 'megvalósult műtárgy',
      stat3Label: 'mérnöki munkatárs',
    },
    intro: {
      eyebrow: 'Kik vagyunk',
      heading: 'Precíz statika. Bizonyítható biztonság.',
      body: 'Mérnökeink a hídépítés, a vasúti infrastruktúra és a mélyépítés statikájára specializálódtak. Minden szerkezetet a vonatkozó Eurocode-ok, a BASt (ZTV-ING, RiZ-ING) és a Deutsche Bahn Ril előírásai szerint méretezünk és igazolunk.',
    },
    services: {
      eyebrow: 'Amit nyújtunk',
      heading: 'Szolgáltatások',
      items: [
        {
          key: 'bridge',
          num: '01',
          title: 'Hídépítés',
          body: 'Közúti és vasúti hidak, völgyhidak és műtárgyak teljes körű tartószerkezeti tervezése — feszített vasbeton, acél és öszvér felszerkezetekkel.',
          tags: ['Tartószerkezet', 'Feszített beton', 'Öszvérhíd'],
        },
        {
          key: 'rail',
          num: '02',
          title: 'Vasúti infrastruktúra',
          body: 'Vasúti műtárgyak méretezése és statikai felülvizsgálata a Deutsche Bahn Ril 804/805 szerint, üzem melletti megerősítésekkel.',
          tags: ['Ril 804/805', 'Felülvizsgálat', 'Fáradás'],
        },
        {
          key: 'structural',
          num: '03',
          title: 'Magasépítési statika',
          body: 'Acél-, vasbeton- és faszerkezetű épületek tartószerkezeti tervezése az Eurocode és a földrengési méretezés szabályai szerint.',
          tags: ['Acélszerkezet', 'Vasbeton', 'EC0–EC8'],
        },
        {
          key: 'bim',
          num: '04',
          title: 'BIM & digitális tervezés',
          body: 'Revit- és SOFiSTiK-alapú 3D/5D BIM-modellek, ütközésvizsgálat, mennyiségkinyerés és kivitelezési ütemterv-integráció.',
          tags: ['Revit', 'SOFiSTiK', '5D-BIM'],
        },
        {
          key: 'infrastructure',
          num: '05',
          title: 'Mélyépítés',
          body: 'Alapozások, támszerkezetek, csatornák, zajvédő falak és munkagödör-dúcolások tervezése a ZTV-ING és ZTV Kanal szerint.',
          tags: ['Alapozás', 'Munkagödör', 'ZTV-ING'],
        },
        {
          key: 'supervision',
          num: '06',
          title: 'Műszaki ellenőrzés',
          body: 'Kivitelezés-támogatás, statikai szakfelügyelet és független tervellenőrzés (Prüfstatik) a kivitelezés teljes ideje alatt.',
          tags: ['Szakfelügyelet', 'Prüfstatik', 'Bauüberwachung'],
        },
      ],
    },
    projects: {
      eyebrow: 'Referenciák',
      heading: 'Megvalósult projektek',
      lead: 'Néhány kiemelt mérnöki munkánk Németország-szerte — hidaktól a vasúti műtárgyakig.',
      all: 'Mind',
      filters: {
        bridge: 'Híd',
        rail: 'Vasút',
        structural: 'Magasépítés',
        bim: 'BIM',
        infrastructure: 'Mélyépítés',
      },
      viewAll: 'Összes referencia',
      loading: 'Projektek betöltése…',
      error: 'A projektek betöltése nem sikerült. Fut a backend?',
      empty: 'Ebben a kategóriában még nincs publikált projekt.',
      locationLabel: 'Helyszín',
      yearLabel: 'Év',
      clientLabel: 'Megbízó',
      scopeLabel: 'Hatókör',
    },
    about: {
      eyebrow: 'A cégről',
      heading: 'Mérnöki gondosság, kompromisszumok nélkül.',
      body1: 'A STATON egy szerkezetépítő mérnökiroda, amely a német és európai infrastruktúra-piacra dolgozik. Hidak, vasúti műtárgyak és mélyépítési szerkezetek statikai tervezését végezzük — a megvalósíthatósági tanulmánytól a kiviteli tervekig.',
      body2: 'Munkánk alapja a szabványos, ellenőrizhető méretezés és a digitális, BIM-alapú munkamódszer. Minden projektet úgy adunk át, hogy az igazolt, auditálható és a kivitelező számára egyértelmű legyen.',
      valuesHeading: 'Alapelveink',
      values: [
        { title: 'Igazolt biztonság', body: 'Minden szerkezet teljes statikai igazolással, a vonatkozó Eurocode és BASt előírások szerint.' },
        { title: 'Digitális módszer', body: 'BIM-alapú tervezés Revittel és SOFiSTiK-kel — koordinált, ütközésmentes modellek.' },
        { title: 'Határidő-tartás', body: 'Fázisolt ütemezés és átlátható kommunikáció a koncepciótól az átadásig.' },
      ],
    },
    contact: {
      eyebrow: 'Kapcsolat',
      heading: 'Beszéljünk a projektjéről.',
      lead: 'Írja le röviden a feladatot, és 2 munkanapon belül felvesszük Önnel a kapcsolatot.',
      name: 'Név',
      email: 'E-mail',
      company: 'Cég (opcionális)',
      subject: 'Tárgy (opcionális)',
      message: 'Üzenet',
      submit: 'Üzenet küldése',
      sending: 'Küldés…',
      success: 'Köszönjük! Üzenetét megkaptuk, hamarosan jelentkezünk.',
      errorGeneric: 'Hiba történt a küldés során. Kérjük, próbálja újra.',
      required: 'Kötelező mező',
      invalidEmail: 'Érvénytelen e-mail cím',
      officeLabel: 'Iroda',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefon',
    },
    footer: {
      blurb: 'Mérnöki tervezőiroda tartószerkezetekre, hídépítésre és BIM-re.',
      nav: 'Oldaltérkép',
      contact: 'Kapcsolat',
      rights: 'Minden jog fenntartva.',
      madeIn: 'Tervezve és méretezve · Magyarország / Deutschland',
    },
  },

  de: {
    nav: {
      home: 'Startseite',
      services: 'Leistungen',
      projects: 'Referenzen',
      about: 'Über uns',
      contact: 'Kontakt',
      cta: 'Angebot anfragen',
    },
    hero: {
      tagline: 'Ingenieurbüro · Tragwerksplanung',
      title1: 'Tragwerke,',
      title2: 'die tragen.',
      lead: 'STATON plant Brücken, Eisenbahnbauwerke und Tiefbaukonstruktionen nach deutschen und europäischen Normen — vom Konzept bis zur BIM-basierten Ausführungsplanung.',
      ctaPrimary: 'Projekt starten',
      ctaSecondary: 'Referenzen',
      stat1Label: 'Jahre Ingenieurerfahrung',
      stat2Label: 'realisierte Bauwerke',
      stat3Label: 'Ingenieur:innen',
    },
    intro: {
      eyebrow: 'Wer wir sind',
      heading: 'Präzise Statik. Nachweisbare Sicherheit.',
      body: 'Unsere Ingenieur:innen sind auf die Tragwerksplanung im Brückenbau, in der Eisenbahninfrastruktur und im Tiefbau spezialisiert. Jedes Tragwerk wird nach den geltenden Eurocodes, den BASt-Vorschriften (ZTV-ING, RiZ-ING) und den Ril-Richtlinien der Deutschen Bahn bemessen und nachgewiesen.',
    },
    services: {
      eyebrow: 'Was wir leisten',
      heading: 'Leistungen',
      items: [
        {
          key: 'bridge',
          num: '01',
          title: 'Brückenbau',
          body: 'Vollständige Tragwerksplanung für Straßen- und Eisenbahnbrücken, Talbrücken und Ingenieurbauwerke — in Spannbeton, Stahl und Verbund.',
          tags: ['Tragwerk', 'Spannbeton', 'Verbundbrücke'],
        },
        {
          key: 'rail',
          num: '02',
          title: 'Eisenbahninfrastruktur',
          body: 'Bemessung und statische Nachrechnung von Eisenbahnbauwerken nach Ril 804/805 der Deutschen Bahn, inklusive Verstärkungen bei laufendem Betrieb.',
          tags: ['Ril 804/805', 'Nachrechnung', 'Ermüdung'],
        },
        {
          key: 'structural',
          num: '03',
          title: 'Hochbaustatik',
          body: 'Tragwerksplanung für Gebäude in Stahl, Stahlbeton und Holz nach Eurocode, einschließlich Erdbebenbemessung.',
          tags: ['Stahlbau', 'Stahlbeton', 'EC0–EC8'],
        },
        {
          key: 'bim',
          num: '04',
          title: 'BIM & digitale Planung',
          body: '3D/5D-BIM-Modelle auf Basis von Revit und SOFiSTiK, Kollisionsprüfung, Mengenermittlung und Bauablaufintegration.',
          tags: ['Revit', 'SOFiSTiK', '5D-BIM'],
        },
        {
          key: 'infrastructure',
          num: '05',
          title: 'Tiefbau',
          body: 'Planung von Gründungen, Stützbauwerken, Kanälen, Lärmschutzwänden und Baugrubenverbau nach ZTV-ING und ZTV Kanal.',
          tags: ['Gründung', 'Baugrube', 'ZTV-ING'],
        },
        {
          key: 'supervision',
          num: '06',
          title: 'Bauüberwachung',
          body: 'Ausführungsbegleitung, statische Fachbauleitung und unabhängige Prüfstatik über die gesamte Bauzeit.',
          tags: ['Fachbauleitung', 'Prüfstatik', 'Bauüberwachung'],
        },
      ],
    },
    projects: {
      eyebrow: 'Referenzen',
      heading: 'Realisierte Projekte',
      lead: 'Eine Auswahl unserer Ingenieurleistungen deutschlandweit — von Brücken bis zu Eisenbahnbauwerken.',
      all: 'Alle',
      filters: {
        bridge: 'Brücke',
        rail: 'Bahn',
        structural: 'Hochbau',
        bim: 'BIM',
        infrastructure: 'Tiefbau',
      },
      viewAll: 'Alle Referenzen',
      loading: 'Projekte werden geladen…',
      error: 'Projekte konnten nicht geladen werden. Läuft das Backend?',
      empty: 'In dieser Kategorie sind noch keine Projekte veröffentlicht.',
      locationLabel: 'Standort',
      yearLabel: 'Jahr',
      clientLabel: 'Auftraggeber',
      scopeLabel: 'Leistungsumfang',
    },
    about: {
      eyebrow: 'Über das Büro',
      heading: 'Ingenieurssorgfalt ohne Kompromisse.',
      body1: 'STATON ist ein Ingenieurbüro für Tragwerksplanung, das für den deutschen und europäischen Infrastrukturmarkt arbeitet. Wir planen die Statik von Brücken, Eisenbahnbauwerken und Tiefbaukonstruktionen — von der Machbarkeitsstudie bis zur Ausführungsplanung.',
      body2: 'Grundlage unserer Arbeit sind normkonforme, prüfbare Nachweise und eine durchgängig digitale, BIM-basierte Arbeitsweise. Jedes Projekt übergeben wir nachgewiesen, auditierbar und für die Ausführung eindeutig.',
      valuesHeading: 'Unsere Prinzipien',
      values: [
        { title: 'Nachgewiesene Sicherheit', body: 'Jedes Tragwerk mit vollständigem statischen Nachweis nach Eurocode und BASt.' },
        { title: 'Digitale Methode', body: 'BIM-basierte Planung mit Revit und SOFiSTiK — koordinierte, kollisionsfreie Modelle.' },
        { title: 'Termintreue', body: 'Phasierte Planung und transparente Kommunikation vom Konzept bis zur Übergabe.' },
      ],
    },
    contact: {
      eyebrow: 'Kontakt',
      heading: 'Sprechen wir über Ihr Projekt.',
      lead: 'Beschreiben Sie kurz die Aufgabe — wir melden uns innerhalb von 2 Werktagen bei Ihnen.',
      name: 'Name',
      email: 'E-Mail',
      company: 'Unternehmen (optional)',
      subject: 'Betreff (optional)',
      message: 'Nachricht',
      submit: 'Nachricht senden',
      sending: 'Wird gesendet…',
      success: 'Vielen Dank! Wir haben Ihre Nachricht erhalten und melden uns in Kürze.',
      errorGeneric: 'Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.',
      required: 'Pflichtfeld',
      invalidEmail: 'Ungültige E-Mail-Adresse',
      officeLabel: 'Büro',
      emailLabel: 'E-Mail',
      phoneLabel: 'Telefon',
    },
    footer: {
      blurb: 'Ingenieurbüro für Tragwerksplanung, Brückenbau und BIM.',
      nav: 'Seitenübersicht',
      contact: 'Kontakt',
      rights: 'Alle Rechte vorbehalten.',
      madeIn: 'Geplant und bemessen · Ungarn / Deutschland',
    },
  },
};
