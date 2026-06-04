-- Referencia-projektek / Referenzprojekte
-- Idempotens: ON CONFLICT (slug) frissít.

INSERT INTO projects
  (slug, category, title_hu, title_de, summary_hu, summary_de, location, client, year, scope_hu, scope_de, accent, featured, sort_order)
VALUES
  (
    'main-volgyhid',
    'bridge',
    'Main-völgyhíd újjáépítés',
    'Talbrücke Main — Ersatzneubau',
    'Hatpályás völgyhíd cseréje feszített vasbeton felszerkezettel, BIM-alapú kiviteli tervezéssel és fázisolt forgalomfenntartással.',
    'Ersatzneubau einer sechsfeldrigen Talbrücke mit Spannbeton-Überbau, BIM-basierter Ausführungsplanung und phasierter Verkehrsführung.',
    'Würzburg, DE', 'DEGES', 2024,
    'Tartószerkezeti tervezés · Kiviteli tervek · BIM-koordináció',
    'Tragwerksplanung · Ausführungsplanung · BIM-Koordination',
    '#DA4B1B', TRUE, 100
  ),
  (
    'rhein-eisenbahnbruecke',
    'rail',
    'Rajnai vasúti híd megerősítés',
    'Eisenbahnbrücke Rhein — Verstärkung',
    'Acél rácsos vasúti híd teherbírás-növelése és fáradásvizsgálata a megnövelt tengelyterhelésekhez, üzem melletti kivitelezéssel.',
    'Tragfähigkeitserhöhung und Ermüdungsnachweis einer stählernen Eisenbahnfachwerkbrücke für erhöhte Achslasten bei laufendem Betrieb.',
    'Köln, DE', 'DB InfraGO AG', 2023,
    'Statikai felülvizsgálat · Fáradásvizsgálat · RIL 805',
    'Statische Nachrechnung · Ermüdungsnachweis · RIL 805',
    '#2E6E5A', TRUE, 90
  ),
  (
    'a3-laermschutz',
    'infrastructure',
    'A3 autópálya zajvédő falak',
    'A3 — Lärmschutzwände',
    '4,2 km hosszú zajvédő fal alapozása és tartószerkezete, betonpilléres és résfalas alapozási megoldásokkal a töltésszakaszokon.',
    'Gründung und Tragwerk von 4,2 km Lärmschutzwand mit Bohrpfahl- und Schlitzwandlösungen in den Dammabschnitten.',
    'Frankfurt am Main, DE', 'Autobahn GmbH', 2023,
    'Alapozástervezés · Tartószerkezet · ZTV-ING',
    'Gründungsplanung · Tragwerk · ZTV-ING',
    '#3B5BA5', FALSE, 70
  ),
  (
    's-bahn-tunnel-bim',
    'bim',
    'S-Bahn alagút BIM-modell',
    'S-Bahn-Tunnel — BIM-Modell',
    'Teljes körű 5D BIM-modell egy városi vasúti alagúthoz: mennyiségkinyerés, ütközésvizsgálat és kivitelezési ütemterv integrációja.',
    'Durchgängiges 5D-BIM-Modell für einen innerstädtischen S-Bahn-Tunnel: Mengenermittlung, Kollisionsprüfung und Bauablaufintegration.',
    'Stuttgart, DE', 'DB InfraGO AG', 2024,
    'BIM-menedzsment · 5D-modell · Ütközésvizsgálat',
    'BIM-Management · 5D-Modell · Kollisionsprüfung',
    '#7A5BA8', FALSE, 60
  ),
  (
    'industriehalle-tragwerk',
    'structural',
    'Ipari csarnok acélszerkezet',
    'Industriehalle — Stahltragwerk',
    'Nagyfesztávú acél csarnokszerkezet daruüzemhez, 36 m fesztávú rácsos főtartókkal és földrengési méretezéssel.',
    'Weitgespanntes Stahltragwerk einer Industriehalle mit Kranbetrieb, 36 m Fachwerkbinder und Erdbebenbemessung.',
    'Leipzig, DE', 'Privat / Generalunternehmer', 2022,
    'Acélszerkezet tervezés · Kranpálya · EC3 / EC8',
    'Stahlbau-Planung · Kranbahn · EC3 / EC8',
    '#B5852A', FALSE, 50
  ),
  (
    'kanal-stadtbahn',
    'infrastructure',
    'Városi főgyűjtő csatorna',
    'Hauptsammler — Kanalbau',
    'DN 2000 vasbeton főgyűjtő statikai tervezése nyílt és zárt építéssel, talajvízszint alatti munkagödör-dúcolással.',
    'Statische Planung eines DN-2000-Stahlbeton-Hauptsammlers in offener und geschlossener Bauweise mit Baugrubenverbau unter Grundwasser.',
    'Dresden, DE', 'Stadtentwässerung', 2022,
    'Csőstatika · Munkagödör · ZTV Kanal',
    'Rohrstatik · Baugrube · ZTV Kanal',
    '#2E6E5A', FALSE, 40
  )
ON CONFLICT (slug) DO UPDATE SET
  category   = EXCLUDED.category,
  title_hu   = EXCLUDED.title_hu,
  title_de   = EXCLUDED.title_de,
  summary_hu = EXCLUDED.summary_hu,
  summary_de = EXCLUDED.summary_de,
  location   = EXCLUDED.location,
  client     = EXCLUDED.client,
  year       = EXCLUDED.year,
  scope_hu   = EXCLUDED.scope_hu,
  scope_de   = EXCLUDED.scope_de,
  accent     = EXCLUDED.accent,
  featured   = EXCLUDED.featured,
  sort_order = EXCLUDED.sort_order;
