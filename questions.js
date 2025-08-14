// In dieser Datei werden alle 236 Quizfragen aus den Dokumenten
// "Musterprüfungsfragen.pdf" und "Quiz LF .pdf" gespeichert.
// Jede Frage wurde zur Überprüfung auskommentiert durchnummeriert.

const initialRawQuestions = [
    // --- Fragen aus Musterprüfungsfragen.pdf (101 Fragen) ---
    { // 1
        name: "Musterprüfung A.1-Frage 03",
        question: "Im Gegensatz zur klassischen TV-Werbung, wo sich der Kunde passiv beschallen lässt, sucht der Online-Kunde aktiv nach Produkten und Dienstleistungen. Mit welchem Fachbegriff wird das Verhalten des Online-Kunden betitelt?",
        answers: ["Pushing", "Lean forward"],
        correct: ["Lean forward"]
    },
    { // 2
        name: "Musterprüfung G.1- Frage 03",
        question: "Worin liegt der Schwerpunkt von Social Media Analytics?",
        answers: ["Erstellung von Social Ads auf Meta", "Beobachtung der Konkurrenz auf X (Twitter) und Foren", "Analyse der Performance der eigenen Social-Media-Kanäle", "Analyse von Kommentaren und Stimmungen auf Bewertungsportalen"],
        correct: ["Analyse der Performance der eigenen Social-Media-Kanäle"]
    },
    { // 3
        name: "Musterprüfung C.1-Frage 02",
        question: "Welche Formel veranschaulicht die Werbewirkung im Marketing?",
        answers: ["VERDI", "FISH", "AIDA", "RADAR"],
        correct: ["AIDA"]
    },
    { // 4
        name: "Musterprüfung F.2 - Frage 03",
        question: "Welche sozialen Netzwerke bieten uns die Möglichkeit, über ein eigenes Pixel Website-Tracking zu betreiben?",
        answers: ["Tik Tok", "Linkedin", "Pinterest", "XING"],
        correct: ["Tik Tok", "Linkedin", "Pinterest", "XING"]
    },
    { // 5
        name: "Musterprüfung F.3 - Frage 06",
        question: "Ordne die Kampagnenstufen des TOFU-/MOFU-/BOFU-Prinzips den Bewusstseinsstufen der Zielgruppe richtig zu.",
        answers: [
            {"BOFU": "Nutzende, die wahrscheinlich großes Kaufinteresse haben, und die Reaktivierung von Bestandskundinnen und -kunden"},
            {"TOFU": "Potenzielle Kundinnen und Kunden, die noch keinen Kontakt mit der Marke hatten"},
            {"MOFU": "Nutzende, die bereits Kontakt mit der Marke oder den Produkten hatten und ein grundsätzliches Interesse haben"}
        ],
        correct: [
            {"BOFU": "Nutzende, die wahrscheinlich großes Kaufinteresse haben, und die Reaktivierung von Bestandskundinnen und -kunden"},
            {"TOFU": "Potenzielle Kundinnen und Kunden, die noch keinen Kontakt mit der Marke hatten"},
            {"MOFU": "Nutzende, die bereits Kontakt mit der Marke oder den Produkten hatten und ein grundsätzliches Interesse haben"}
        ]
    },
    { // 6
        name: "Musterprüfung D.1 - Frage 02",
        question: "Wofür steht FISH im FISH-Modell?",
        answers: ["Flag - Inbound - Significant - Highlight", "Follow - Inbound - Search - Highend", "False - Intensive - Super - Honest", "Follow - Inbound - Search - Highlight"],
        correct: ["Follow - Inbound - Search - Highlight"]
    },
    { // 7
        name: "Musterprüfung C.5 - Frage 03",
        question: "Welche Arten von Tools und Lizenzen können im Rahmen einer Ressourcenplanung relevant sein?",
        answers: ["Social-Media-Management-Tools", "Content-Creation-Tools", "Analyse-Tools", "Lizenzgebühren für Personas"],
        correct: ["Social-Media-Management-Tools", "Content-Creation-Tools", "Analyse-Tools"]
    },
    { // 8
        name: "Musterprüfung G.2- Frage 05",
        question: "Welche Aussage in Bezug auf qualitative und quantitative Kennzahlen im Social Listening ist korrekt?",
        answers: ["Qualitative Kennzahlen sind zu bevorzugen.", "Nur zusammen fördern sie ein umfassendes Verständnis der Markenperformance.", "Quantitative Kennzahlen sind zu bevorzugen."],
        correct: ["Nur zusammen fördern sie ein umfassendes Verständnis der Markenperformance."]
    },
    { // 9
        name: "Musterprüfung C.3 - Frage 02",
        question: "Was kann man in der Limbic Map positionieren?",
        answers: ["Zielgruppen", "Marken", "Unternehmen", "Personen"],
        correct: ["Zielgruppen", "Marken", "Unternehmen", "Personen"]
    },
    { // 10
        name: "Musterprüfung F.3 - Frage 02",
        question: "Was ist ein „Creative\"?",
        answers: ["Creative bezeichnet das Foto oder Video, welches in einer Anzeige genutzt wird.", "Creative bezeichnet die visuellen, auditiven und textlichen Elemente einer Anzeige."],
        correct: ["Creative bezeichnet die visuellen, auditiven und textlichen Elemente einer Anzeige."]
    },
    { // 11
        name: "Musterprüfung A.1-Frage 02",
        question: "Welches P aus dem Marketing-Mix entwickelt sich durch die Digitalisierung in Richtung \"Vermarktung\"?",
        answers: ["Price", "Product", "Promotion", "Place"],
        correct: ["Promotion"]
    },
    { // 12
        name: "Musterprüfung E.3 - Frage 01",
        question: "Welche sozialen Netzwerke und Plattformen gelten als B2B-Communitys?",
        answers: ["Google Business Profile", "Meta Business Manager", "XING", "Linkedin"],
        correct: ["XING", "Linkedin"]
    },
    { // 13
        name: "Musterprüfung F.1- Frage 09",
        question: "Was ist ein Pixel im Kontext von Social Media Ads?",
        answers: ["Ein Pixel ist eine bestimmte Zielgruppe, die wir sowohl für Custom Audiences als auch für Lookalike Audiences nutzen können.", "Ein Pixel ist ein Trackingcode, den man auf einer Website, einem Onlineshop oder auch in einer eigenen App implementieren kann."],
        correct: ["Ein Pixel ist ein Trackingcode, den man auf einer Website, einem Onlineshop oder auch in einer eigenen App implementieren kann."]
    },
    { // 14
        name: "Musterprüfung D.2 - Frage 01",
        question: "Was gilt bei der Art und Qualität des Contents, den wir über Social Networks veröffentlichen?",
        answers: ["Content sollte immer das gleiche Format (z. B. Bild, Video, Text) haben.", "Content sollte auch interaktiv sein.", "Content sollte vielfältig gestaltet sein.", "Content sollte immer einen Mehrwert haben."],
        correct: ["Content sollte auch interaktiv sein.", "Content sollte vielfältig gestaltet sein.", "Content sollte immer einen Mehrwert haben."]
    },
    { // 15
        name: "Musterprüfung A.1-Frage 04",
        question: "Wie beeinflusst der demografische Wandel das Online-Marketing?",
        answers: ["Der demografische Wandel hat keinen Einfluss auf das Online-Marketing, da sich Nutzer unabhängig von ihrer Altersgruppe online ähnlich verhalten.", "Er hat Auswirkungen auf die Zielgruppenzusammensetzung. So sollte man sich der wachsenden älteren Bevölkerung anpassen."],
        correct: ["Er hat Auswirkungen auf die Zielgruppenzusammensetzung. So sollte man sich der wachsenden älteren Bevölkerung anpassen."]
    },
    { // 16
        name: "Musterprüfung F.1- Frage 04",
        question: "Was spricht für den Einsatz von Social Media Ads?",
        answers: ["Einfache Handhabung", "Interaktive Möglichkeiten", "Kontrolle über Kosten", "Höhere Streuverluste"],
        correct: ["Einfache Handhabung", "Interaktive Möglichkeiten", "Kontrolle über Kosten"]
    },
    { // 17
        name: "Musterprüfung E.2-Frage 04",
        question: "Von welchen Faktoren wird die Lebensdauer eines Posts maßgeblich beeinflusst?",
        answers: ["Von den plattformspezifischen Algorithmen", "Von der Interaktion mit dem Beitrag", "Von der Art des Inhalts"],
        correct: ["Von den plattformspezifischen Algorithmen", "Von der Interaktion mit dem Beitrag", "Von der Art des Inhalts"]
    },
    { // 18
        name: "Musterprüfung G.2- Frage 03",
        question: "Welche Vorteile haben Social-Media-Monitoring- und Social-Listening-Tools in der Regel?",
        answers: ["Sie bieten zeitsparende Automatisierungen.", "Sie sind auch mit wenig Know-how leicht zu bedienen.", "Sie bieten netzwerkübergreifende Datenerfassung.", "Sie sind als professionelle Tools kostenfrei."],
        correct: ["Sie bieten zeitsparende Automatisierungen.", "Sie bieten netzwerkübergreifende Datenerfassung."]
    },
    { // 19
        name: "Musterprüfung E.4- Frage 05",
        question: "Was sind für viele Unternehmen noch immer Herausforderungen und Hindernisse bei der Nutzung von Social Media?",
        answers: ["Möglicher Kontrollverlust", "Zu viele Ressourcen", "Datensicherheit", "Zu hohe Reichweite"],
        correct: ["Möglicher Kontrollverlust", "Datensicherheit"]
    },
    { // 20
        name: "Musterprüfung E.4-Frage 04",
        question: "Ordne die folgenden Schwerpunkte dem Beschwerdemanagement und dem Krisenmanagement richtig zu.",
        answers: [
            {"Krisenmanagement": "Behebt unternehmensweite Notlagen"},
            {"Beschwerde Management": "Fokussiert auf individuelle Kundenprobleme"}
        ],
        correct: [
            {"Krisenmanagement": "Behebt unternehmensweite Notlagen"},
            {"Beschwerde Management": "Fokussiert auf individuelle Kundenprobleme"}
        ]
    },
    { // 21
        name: "Musterprüfung D.1 - Frage 05",
        question: "Auf welcher Ebene wirkt Storytelling vorrangig?",
        answers: ["Auf der informativen Ebene", "Auf der emotionalen Ebene"],
        correct: ["Auf der emotionalen Ebene"]
    },
    { // 22
        name: "Musterprüfung B.1-Frage 01",
        question: "Welche \"Features\" bietet uns Facebook?",
        answers: ["Gruppen", "Unternehmensseiten", "Veranstaltungen", "Profile"],
        correct: ["Gruppen", "Unternehmensseiten", "Veranstaltungen", "Profile"]
    },
    { // 23
        name: "Musterprüfung E.4- Frage 03",
        question: "Was ist laut einer Umfrage der überwiegende Grund für Kunden, sich von einem Unternehmen oder einer Marke zu trennen?",
        answers: ["Fehlende Aufmerksamkeit", "Neue Kaufgewohnheiten", "Hoher Preis", "Schlechte Qualität"],
        correct: ["Fehlende Aufmerksamkeit"]
    },
    { // 24
        name: "Musterprüfung F.1 - Frage 06",
        question: "Was sind Ziele von Retargeting?",
        answers: ["Eine möglichst hohe Bounce Rate zu erreichen", "Daten zu sammeln, um eine Lookalike Audience zu erstellen", "Website-Besuchende erneut mit einer Anzeige anzusprechen", "Nutzende erstmalig auf eine Website zu bringen"],
        correct: ["Daten zu sammeln, um eine Lookalike Audience zu erstellen", "Website-Besuchende erneut mit einer Anzeige anzusprechen"]
    },
    { // 25
        name: "Musterprüfung A.2-Frage 05",
        question: "Welche Aussage passt am besten zur Wahl von Social-Media-Kanälen für dein Unternehmen?",
        answers: ["Ich nutze stets die großen sozialen Medien.", "Ich wähle die Kanäle entsprechend ihrer Nutzergruppe und der medialen Möglichkeiten aus.", "Ich nutze stets die sozialen Medien mit dem größten Wachstum.", "Ich nutze die sozialen Medien, die mir am besten gefallen."],
        correct: ["Ich wähle die Kanäle entsprechend ihrer Nutzergruppe und der medialen Möglichkeiten aus."]
    },
    { // 26
        name: "Musterprüfung D.3 - Frage 05",
        question: "Welche Bestandteile sollte eine Redaktionsplanung haben?",
        answers: ["Verantwortlichkeiten", "Veröffentlichungsdaten", "KPIs zur Erfolgsmessung", "Themen"],
        correct: ["Verantwortlichkeiten", "Veröffentlichungsdaten", "Themen"]
    },
    { // 27
        name: "Musterprüfung A.3-Frage 02",
        question: "Welche Aussage trifft auf das AIDA-Modell im Marketing zu?",
        answers: ["Das AIDA-Modell ist eine Methode, die sich auf die Steigerung der Kundenbindung bezieht.", "Beim AIDA-Modell geht es darum, das Interesse der Zielgruppe zu erwecken und sie zu einer gewünschten Handlung zu führen."],
        correct: ["Beim AIDA-Modell geht es darum, das Interesse der Zielgruppe zu erwecken und sie zu einer gewünschten Handlung zu führen."]
    },
    { // 28
        name: "Musterprüfung B.3-Frage 03",
        question: "Was bedeutet der Begriff \"Social Selling\"?",
        answers: ["Social Selling zielt darauf ab, vor allem physische Produkte über soziale Netzwerke zu verkaufen.", "Social Selling zielt darauf ab, sich als Experte in einem bestimmten Bereich zu positionieren und den Mehrwert für potenzielle Kunden zu betonen."],
        correct: ["Social Selling zielt darauf ab, sich als Experte in einem bestimmten Bereich zu positionieren und den Mehrwert für potenzielle Kunden zu betonen."]
    },
    { // 29
        name: "Musterprüfung B.3-Frage 02",
        question: "Warum spielt Xing im Content-Marketing häufig eine untergeordnete Rolle?",
        answers: ["Das Veröffentlichen von Beiträgen ist auf Xing generell nicht möglich.", "Die Nutzer sind auf der Plattform eher passiv, es wird eher wenig mit Content interagiert."],
        correct: ["Die Nutzer sind auf der Plattform eher passiv, es wird eher wenig mit Content interagiert."]
    },
    { // 30
        name: "Musterprüfung F.1 - Frage 07",
        question: "Was ist unter dem Begriff „Impressionen“ zu verstehen?",
        answers: ["Impressionen sind Vorschaubilder für Werbeanzeigen.", "Impressionen sind die potenziellen Reichweiten bei Werbeanzeigen.", "Impressionen geben an, wie oft eine Werbeanzeige für eine Zielgruppe auf dem Bildschirm zu sehen war.", "Impressionen sind Abrechnungsformate von Werbeanzeigen."],
        correct: ["Impressionen geben an, wie oft eine Werbeanzeige für eine Zielgruppe auf dem Bildschirm zu sehen war."]
    },
    { // 31
        name: "Musterprüfung G.3- Frage 06",
        question: "Warum sollten wir regelmäßig analysieren, welche Beiträge unsere Top-Performing-Posts waren?",
        answers: ["Um diese Beiträge ggf. mit Social Media Ads noch weiter zu promoten", "Um zu erfahren, was unsere beliebtesten Posts gemeinsam haben (z. B. Art des Inhalts, Content-Format, Plattformen), und um unsere zukünftigen Beiträge danach ausrichten zu können", "Um Zielgruppen-Account für unser externes Community-Management zu identifizieren"],
        correct: ["Um diese Beiträge ggf. mit Social Media Ads noch weiter zu promoten", "Um zu erfahren, was unsere beliebtesten Posts gemeinsam haben (z. B. Art des Inhalts, Content-Format, Plattformen), und um unsere zukünftigen Beiträge danach ausrichten zu können"]
    },
    { // 32
        name: "Musterprüfung A.4 - Frage 01",
        question: "Wofür stehen die Buchstaben P, O und E im POE-Modell?",
        answers: ["Product, Order, Exit", "Paid Media, Owned Media, Earned Media"],
        correct: ["Paid Media, Owned Media, Earned Media"]
    },
    { // 33
        name: "Musterprüfung E.2-Frage 02",
        question: "Was ist unter dem Begriff proaktive Redaktionsplanung zu verstehen?",
        answers: ["Inhalte und Kommunikationsmaßnahmen sollen reaktiv auf aktuelle Ereignisse geplant werden.", "Inhalte und Kommunikationsmaßnahmen sollen vorausschauend geplant werden."],
        correct: ["Inhalte und Kommunikationsmaßnahmen sollen vorausschauend geplant werden."]
    },
    { // 34
        name: "Musterprüfung G.2 - Frage 04",
        question: "Welche Kennzahl gibt den Anteil der Markenerwähnungen im Vergleich zu Mitbewerbenden an?",
        answers: ["Anzahl der Mentions", "Sentiment Ratio", "Share of Voice"],
        correct: ["Share of Voice"]
    },
    { // 35
        name: "Musterprüfung B.1-Frage 03",
        question: "Welche Funktionen bietet WhatsApp Business gegenüber dem normalen WhatsApp zusätzlich?",
        answers: ["Shopping-Funktion", "Unternehmenssteckbrief", "Umfragen", "Automatisierte Nachrichten"],
        correct: ["Shopping-Funktion", "Unternehmenssteckbrief", "Automatisierte Nachrichten"]
    },
    { // 36
        name: "Musterprüfung D.2 - Frage 03",
        question: "Ordne die folgenden Content-Arten den entsprechenden Formaten zu.",
        answers: [
            {"Audio": "Podcast"},
            {"Video": "Vlog"},
            {"Text": "Whitepaper"},
            {"Bild": "Infografik"}
        ],
        correct: [
            {"Audio": "Podcast"},
            {"Video": "Vlog"},
            {"Text": "Whitepaper"},
            {"Bild": "Infografik"}
        ]
    },
    { // 37
        name: "Musterprüfung B.2-Frage 07",
        question: "Welche Aussage beschreibt die Nutzung von Facebook-Gruppen richtig?",
        answers: ["Sie sind kostenpflichtig und nur für Unternehmen nutzbar.", "Sie fördern den Community-Austausch zu spezifischen Themen.", "Sie ersetzen klassische Fanseiten vollständig.", "Sie dienen ausschließlich zur Bewerbung von Events."],
        correct: ["Sie fördern den Community-Austausch zu spezifischen Themen."]
    },
    { // 38
        name: "Musterprüfung B.1-Frage 05",
        question: "Was sind die Vorteile des Video-Formats im Social-Media-Marketing?",
        answers: ["Video sind sehr einfach in der Produktion.", "Video können Emotionen gut transportieren.", "Mit Videos lassen sich komplexe Zusammenhänge schnell und einfach erklären.", "Videos wirken glaubwürdig und authentisch."],
        correct: ["Video können Emotionen gut transportieren.", "Mit Videos lassen sich komplexe Zusammenhänge schnell und einfach erklären.", "Videos wirken glaubwürdig und authentisch."]
    },
    { // 39
        name: "Musterprüfung G.3- Frage 07",
        question: "Warum ist die Anzahl der Beiträge bei Social Media Analytics eine wichtige Kennzahl?",
        answers: ["Um zu messen, ob über das Unternehmen in den sozialen Netzwerken gesprochen wird", "Um zu messen, ob wir in einer ausreichenden Frequenz gepostet haben"],
        correct: ["Um zu messen, ob wir in einer ausreichenden Frequenz gepostet haben"]
    },
    { // 40
        name: "Musterprüfung C.1- Frage 01",
        question: "Was ist ein wichtiger erster Schritt zur Entwicklung einer Social-Media-Strategie?",
        answers: ["Durchführung eines Social-Media-Audits", "Einstellung eines neuen Teams", "Gestaltung des Corporate Designs", "Auswahl eines Content-Management-Tools"],
        correct: ["Durchführung eines Social-Media-Audits"]
    },
    { // 41
        name: "Musterprüfung E.4- Frage 02",
        question: "Was sind „Zielgruppen-Accounts“?",
        answers: ["Bestehende Communitys, die die eigene Zielgruppe repräsentieren", "Eine eigene Zielgruppe, die man beim Retargeting in Social Media Ads einsetzt"],
        correct: ["Bestehende Communitys, die die eigene Zielgruppe repräsentieren"]
    },
    { // 42
        name: "Musterprüfung B.2-Frage 02",
        question: "Wofür eignet sich YouTube als Plattform?",
        answers: ["Shopping", "Tutorials", "Imagefilme", "Musikvideos"],
        correct: ["Tutorials", "Imagefilme", "Musikvideos"]
    },
    { // 43
        name: "Musterprüfung F.1- Frage 08",
        question: "Was wird zunächst benötigt, um eine Lookalike Audience zu erstellen?",
        answers: ["Meta-Pixel", "Eine Custom Audience"],
        correct: ["Eine Custom Audience"]
    },
    { // 44
        name: "Musterprüfung B.1-Frage 02",
        question: "Welche Netzwerke gehören zum Konzern Meta (ehemals Facebook)?",
        answers: ["Facebook", "WhatsApp", "X", "Instagram"],
        correct: ["Facebook", "WhatsApp", "Instagram"]
    },
    { // 45
        name: "Musterprüfung E.1-Frage 02",
        question: "Was sind Social-Media-Guidelines?",
        answers: ["Interne Richtlinien, die einen Verhaltenskodex für die Online-Kommunikation darstellen", "Ein fester Ablaufplan, um Social-Media-Management-Tools in ein Unternehmen zu integrieren"],
        correct: ["Interne Richtlinien, die einen Verhaltenskodex für die Online-Kommunikation darstellen"]
    },
    { // 46
        name: "Musterprüfung A.3-Frage 05",
        question: "Zwischen welchen Arten von Touchpoints wird im Touchpoint-Management unterschieden?",
        answers: ["Zwischen der Website und Social Media", "Zwischen Zielgruppenfaktoren", "Zwischen Kanälen und Formaten", "Zwischen Arten und Formaten"],
        correct: ["Zwischen Kanälen und Formaten"]
    },
    { // 47
        name: "Musterprüfung A.2-Frage 02",
        question: "Wofür steht die Kategorisierung in kurzfristige, mittelfristige und langfristige Ziele im Social Media Marketing?",
        answers: ["Für Werbeziele, Analyseziele und Reportingziele", "Für operative, taktische und strategische Zielarten", "Für Zielgruppen, Contentarten und Plattformen", "Für Erfolg, Misserfolg und Neutralität"],
        correct: ["Für operative, taktische und strategische Zielarten"]
    },
    { // 48
        name: "Musterprüfung C.3 - Frage 03",
        question: "Wie könnte man eine Persona beschreiben?",
        answers: ["Eine Sammlung demografischer Merkmale", "Nutzermodell, das Personen einer Zielgruppe in ihren Merkmalen charakterisiert", "Eine oberflächliche Betrachtung einer Personengruppe", "Eine Personengruppe, die besonders für Werbeanzeigen interessant ist"],
        correct: ["Nutzermodell, das Personen einer Zielgruppe in ihren Merkmalen charakterisiert"]
    },
    { // 49
        name: "Musterprüfung B.2-Frage 04",
        question: "Was ist ein Thumbnail?",
        answers: ["Social-Media-Tool", "Vorschaubild", "Verschlagwortung", "News-Portal"],
        correct: ["Vorschaubild"]
    },
    { // 50
        name: "Musterprüfung C.2 - Frage 02",
        question: "Was sind Social-Media-Benchmarks?",
        answers: ["Standardwerte für bestimmte Metriken im Social-Media-Marketing", "Modelle für die Entwicklung einer Unternehmensmission", "Eine digitale Währung in sozialen Netzwerken"],
        correct: ["Standardwerte für bestimmte Metriken im Social-Media-Marketing"]
    },
    { // 51
        name: "Musterprüfung D.3 - Frage 03",
        question: "Welche Recherchen und Analysen können uns bei der Erstellung einer Content-Strategie behilflich sein?",
        answers: ["Konkurrenz- und Wettbewerbsanalyse", "Keyword-Recherche", "Content-Audit", "Trendscouting"],
        correct: ["Konkurrenz- und Wettbewerbsanalyse", "Keyword-Recherche", "Content-Audit", "Trendscouting"]
    },
    { // 52
        name: "Musterprüfung F.1- Frage 05",
        question: "Welche Möglichkeiten bietet uns Meta, um unser Budget einzuplanen?",
        answers: ["Likebudget", "Wochenbudget", "Tagesbudget", "Laufzeitbudget"],
        correct: ["Tagesbudget", "Laufzeitbudget"]
    },
    { // 53
        name: "Musterprüfung A.3 - Frage 01",
        question: "Um Buyer-Personas zu erstellen, solltest du dir einzelne potenzielle Kunden konkret vorstellen. Was sind die wichtigsten Fragen, die dabei hilfreich sind?",
        answers: ["Wie ist die Lebenssituation der Kunden hinsichtlich Wohnort und Familienleben?", "Welches Alter und welchen Beruf haben die Kunden?", "Welches Geschlecht haben die Kunden?", "Wie heißen die Kunden (Vor- und Nachname)?"],
        correct: ["Wie ist die Lebenssituation der Kunden hinsichtlich Wohnort und Familienleben?", "Welches Alter und welchen Beruf haben die Kunden?", "Welches Geschlecht haben die Kunden?"]
    },
    { // 54
        name: "Musterprüfung G.2 - Frage 02",
        question: "Welche Möglichkeiten zur Datenerfassung stehen uns im Social Media Monitoring und Social Listening zur Verfügung?",
        answers: ["Alert-Services", "Meta Talk Library", "Social-Media-Monitoring-Tools", "Hashtag- und Erwähnungs-Tracking"],
        correct: ["Alert-Services", "Social-Media-Monitoring-Tools", "Hashtag- und Erwähnungs-Tracking"]
    },
    { // 55
        name: "Musterprüfung C.3 - Frage 06",
        question: "Was sind gängige Zielgruppenfaktoren?",
        answers: ["Psychografische Merkmale", "Informationsverhalten", "Kommunikationsverhalten", "Demografische Merkmale"],
        correct: ["Psychografische Merkmale", "Informationsverhalten", "Kommunikationsverhalten", "Demografische Merkmale"]
    },
    { // 56
        name: "Musterprüfung D.2 - Frage 06",
        question: "Welche Aussagen in Bezug auf User Generated Content sind korrekt?",
        answers: ["User Generated Content ist nicht planbar.", "User Generated Content ist häufig kostenintensiv.", "User Generated Content wird häufiger geteilt.", "User Generated Content wirkt glaubwürdiger."],
        correct: ["User Generated Content wird häufiger geteilt.", "User Generated Content wirkt glaubwürdiger."]
    },
    { // 57
        name: "Musterprüfung D.2 - Frage 02",
        question: "In welcher Form kann uns Content begegnen?",
        answers: ["Text", "Audio", "Video", "Bild"],
        correct: ["Text", "Audio", "Video", "Bild"]
    },
    { // 58
        name: "Musterprüfung A.1-Frage 08",
        question: "Welcher Aspekt gehört nicht zu den Grundprinzipien des Datenschutzes?",
        answers: ["Zweckbindung", "Monetarisierung", "Datensicherheit", "Einwilligung"],
        correct: ["Monetarisierung"]
    },
    { // 59
        name: "Musterprüfung G.1- Frage 06",
        question: "Was ist das Ziel von Social Listening?",
        answers: ["Tieferes Verständnis von Meinungen, Motiven und Stimmungen gewinnen", "Nutzer für E-Mail-Kampagnen identifizieren", "Zahl der Erwähnungen pro Marke zählen", "Likes und Shares auswerten"],
        correct: ["Tieferes Verständnis von Meinungen, Motiven und Stimmungen gewinnen"]
    },
    { // 60
        name: "Musterprüfung G.1-Frage 01",
        question: "Nach welchen Bereichen lässt sich eine Social-Media-Analyse generell klassifizieren?",
        answers: ["Social Bookmarking", "Social Media Analytics", "Social Media Monitoring", "Social Listening"],
        correct: ["Social Media Analytics", "Social Media Monitoring", "Social Listening"]
    },
    { // 61
        name: "Musterprüfung C.4 - Frage 01",
        question: "Was bezeichnet man als „Active Sourcing“?",
        answers: ["Ein Handelsmodell, um die Kaufentscheidungen der Kundinnen und Kunden zu beeinflussen", "Den Einsatz von Personal Branding in einem Unternehmen", "Die aktive Suche, Ansprache und Bindung von qualifizierten Kandidaten"],
        correct: ["Die aktive Suche, Ansprache und Bindung von qualifizierten Kandidaten"]
    },
    { // 62
        name: "Musterprüfung D.3 - Frage 04",
        question: "Vor welchen Herausforderungen stehen Unternehmen im Content-Marketing häufig?",
        answers: ["Social-Media-Content ist sehr teuer in der Produktion.", "Eine erfolgreiche Content-Marketing-Strategie erfordert die Zusammenarbeit verschiedener Abteilungen.", "Content sollte über verschiedene Kanäle hinweg konsistent sein.", "Content ist nur in Verbindung mit Werbebudget erfolgreich einsetzbar."],
        correct: ["Eine erfolgreiche Content-Marketing-Strategie erfordert die Zusammenarbeit verschiedener Abteilungen.", "Content sollte über verschiedene Kanäle hinweg konsistent sein."]
    },
    { // 63
        name: "Musterprüfung G.3- Frage 05",
        question: "Welche Maßnahmen können wir nutzen, um das Wachstum von aktiven und relevanten Followern zu beschleunigen?",
        answers: ["Follower online kaufen", "Externes Community-Management leisten", "Kooperationen mit Influencern eingehen"],
        correct: ["Externes Community-Management leisten", "Kooperationen mit Influencern eingehen"]
    },
    { // 64
        name: "Musterprüfung A.1 - Frage 01",
        question: "Was bedeutet das Akronym USP?",
        answers: ["Ein Modell für die Zielgruppendefinition", "Logistikmethode eines Unternehmens", "Alleinstellungsmerkmal eines Unternehmens oder eines Produktes", "Einzigartiger Verkaufspreis eines Produktes"],
        correct: ["Alleinstellungsmerkmal eines Unternehmens oder eines Produktes"]
    },
    { // 65
        name: "Musterprüfung C.2 - Frage 01",
        question: "Was ist mit dem Begriff „Social Commerce“ gemeint?",
        answers: ["Der direkte Verkauf von Produkten über soziale Medien", "Marktforschung in sozialen Netzwerken", "Eine Art des Empfehlungs-Marketings", "Die Steigerung des Bekanntheitsgrades"],
        correct: ["Der direkte Verkauf von Produkten über soziale Medien"]
    },
    { // 66
        name: "Musterprüfung F.1 - Frage 10",
        question: "Welche Möglichkeiten stehen uns zur Verfügung, um ein Pixel mit einer Website zu verknüpfen?",
        answers: ["Verknüpfung über den Social Hub", "Spezielle Plugins", "Einbettung über einen HTML-Quellcode"],
        correct: ["Spezielle Plugins", "Einbettung über einen HTML-Quellcode"]
    },
    { // 67
        name: "Musterprüfung E.3 - Frage 02",
        question: "Mit welchen Maßnahmen können wir uns auf mögliche Krisensituationen vorbereiten?",
        answers: ["Erstellung eines Ablaufplans", "Gute interne Organisation", "Einsatz von Monitoring-Tools", "Frühzeitiges Blockieren von Kritikern"],
        correct: ["Erstellung eines Ablaufplans", "Gute interne Organisation", "Einsatz von Monitoring-Tools"]
    },
    { // 68
        name: "Musterprüfung D.1 - Frage 04",
        question: "Was ist mit dem Begriff „Viralität“ gemeint?",
        answers: ["Viralität bedeutet, dass Inhalte immer auf einer emotionalen Ebene wirken müssen, um ihre Wirkung zu entfalten.", "Viralität bedeutet, dass Inhalte durch Interaktionen wie Likes, Kommentare, Shares und selbst das Abspeichern weiterverbreitet werden."],
        correct: ["Viralität bedeutet, dass Inhalte durch Interaktionen wie Likes, Kommentare, Shares und selbst das Abspeichern weiterverbreitet werden."]
    },
    { // 69
        name: "Musterprüfung E.3 - Frage 03",
        question: "Warum gestaltet sich die Erfolgskontrolle im Community-Management in der Praxis oft schwierig?",
        answers: ["Weil die meisten sozialen Netzwerke kaum Insights zur Verfügung stellen", "Weil sie nicht nur von quantifizierbaren Daten, sondern auch von qualitativen Aspekten abhängt"],
        correct: ["Weil sie nicht nur von quantifizierbaren Daten, sondern auch von qualitativen Aspekten abhängt"]
    },
    { // 70
        name: "Musterprüfung D.2 - Frage 05",
        question: "Was sind GIFs?",
        answers: ["Animierte Bilder", "Live-Übertragungen von Bild und Ton", "Ein spezielles Content-Format bei Instagram", "besonders umfangreiche Kommentare von Fans"],
        correct: ["Animierte Bilder"]
    },
    { // 71
        name: "Musterprüfung G.3 - Frage 01",
        question: "Was sind Insights?",
        answers: ["Einsichten in die Statistiken unserer Social-Media-Channels", "Eine Nutzer-Typologie", "Ein Modell zur Relevanzbewertung von Zielgruppen", "Eine spezielle Social-Media-Nutzergruppe"],
        correct: ["Einsichten in die Statistiken unserer Social-Media-Channels"]
    },
    { // 72
        name: "Musterprüfung F.2 - Frage 01",
        question: "Ordne die Begriffe zur Klassifizierung von Social Media Ads richtig zu.",
        answers: [
            {"Format": "Carousel Ad"},
            {"Platzierung": "Facebook Feed"},
            {"Ziel": "Markenbekanntheit"}
        ],
        correct: [
            {"Format": "Carousel Ad"},
            {"Platzierung": "Facebook Feed"},
            {"Ziel": "Markenbekanntheit"}
        ]
    },
    { // 73
        name: "Musterprüfung B.2-Frage 06",
        question: "Was ist für Reels in der Regel kennzeichnend?",
        answers: ["Meistens kürzer als 1:00 Minute", "Für die stationäre Nutzung optimiert", "Vertikales Format (9:16)", "Oft mit Musik/Audio hinterlegt"],
        correct: ["Meistens kürzer als 1:00 Minute", "Vertikales Format (9:16)", "Oft mit Musik/Audio hinterlegt"]
    },
    { // 74
        name: "Musterprüfung F.3 - Frage 05",
        question: "Ordne die Faustformeln, die man beim strategischen Aufbau von Social-Media-Ad-Kampagnen berücksichtigen sollte, richtig zu.",
        answers: [
            {"Je wärmer die Zielgruppe ist, ...": "desto spezifischer kann man werben."},
            {"Je kälter eine Zielgruppe ist, ...": "desto allgemeiner sollte man kommunizieren."}
        ],
        correct: [
            {"Je wärmer die Zielgruppe ist, ...": "desto spezifischer kann man werben."},
            {"Je kälter eine Zielgruppe ist, ...": "desto allgemeiner sollte man kommunizieren."}
        ]
    },
    { // 75
        name: "Musterprüfung G.3-Frage 04",
        question: "Was ist bei der Einrichtung eines Webtracking-Tools wie Google Analytics oder Matomo zu beachten?",
        answers: ["Ein Mindest-Traffic von 100 Sitzungen pro Tag", "Ein entsprechender Hinweis in der Datenschutzbestimmung", "Eine vorherige Umwandlung auf eine Business-Website", "Ein DSGVO-konformes Cookie-Banner"],
        correct: ["Ein entsprechender Hinweis in der Datenschutzbestimmung", "Ein DSGVO-konformes Cookie-Banner"]
    },
    { // 76
        name: "Musterprüfung C.1- Frage 03",
        question: "Wie sind die verschiedenen Bereiche einer Social-Media-Strategie in der Regel aufgebaut?",
        answers: [
            {"1.": "Ziele"},
            {"2.": "Zielgruppen"},
            {"3.": "Auswahl der Kanäle"},
            {"4.": "Maßnahmen"},
            {"5.": "Erfolgskontrolle"}
        ],
        correct: [
            {"1.": "Ziele"},
            {"2.": "Zielgruppen"},
            {"3.": "Auswahl der Kanäle"},
            {"4.": "Maßnahmen"},
            {"5.": "Erfolgskontrolle"}
        ]
    },
    { // 77
        name: "Musterprüfung C.3 - Frage 07",
        question: "Was wird mit der Limbic Map ermittelt?",
        answers: ["Die Positionierung einer Marke oder eines Unternehmens", "Die Werte, nach der eine Person/Zielgruppe lebt und handelt", "Demografische Merkmale einer Zielgruppe", "Wie viel Geld eine Person zur Verfügung hat"],
        correct: ["Die Positionierung einer Marke oder eines Unternehmens", "Die Werte, nach der eine Person/Zielgruppe lebt und handelt"]
    },
    { // 78
        name: "Musterprüfung E.4- Frage 06",
        question: "Über welche Merkmale lässt sich ein Shitstorm identifizieren und klassifizieren?",
        answers: ["Die Geschwindigkeit der Verbreitung", "Die eigene Unternehmensgröße", "Das Medien-Echo", "Die Menge und Intensität der negativen Kommentare"],
        correct: ["Die Geschwindigkeit der Verbreitung", "Das Medien-Echo", "Die Menge und Intensität der negativen Kommentare"]
    },
    { // 79
        name: "Musterprüfung G.3 - Frage 02",
        question: "Wo finden wir die Meta-Insights?",
        answers: ["Bekommen wir auf Anfrage von den sozialen Netzwerken", "In der Meta Business Suite", "Direkt über unsere Seite", "Nur über ein externes Monitoring-Tool"],
        correct: ["In der Meta Business Suite", "Direkt über unsere Seite"]
    },
    { // 80
        name: "Musterprüfung A.3-Frage 04",
        question: "Welche gängigen Modelle beschreiben Teile der oder die gesamte Customer Journey?",
        answers: ["Sales Funnel", "AIDA-Modell", "FISH-Modell", "SMART-Modell"],
        correct: ["Sales Funnel", "AIDA-Modell", "FISH-Modell"]
    },
    { // 81
        name: "Musterprüfung D.4 - Frage 03",
        question: "In welcher Reihenfolge erfolgen die fünf grundlegenden Schritte der Videobearbeitung?",
        answers: [
            {"1.": "Importieren des Videomaterials"},
            {"2.": "Rohschnitt"},
            {"3.": "Feinschnitt"},
            {"4.": "Tonbearbeitung"},
            {"5.": "Exportieren der Videos"}
        ],
        correct: [
            {"1.": "Importieren des Videomaterials"},
            {"2.": "Rohschnitt"},
            {"3.": "Feinschnitt"},
            {"4.": "Tonbearbeitung"},
            {"5.": "Exportieren der Videos"}
        ]
    },
    { // 82
        name: "Musterprüfung B.4-Frage 03",
        question: "Welche Aussage zu Foren ist korrekt?",
        answers: ["Unternehmen nutzen fremde Foren für ihre Marketing-Aktivitäten.", "Foren gehören eigentlich nicht zu den sozialen Netzwerken", "Foren können von Unternehmen selbst betrieben werden."],
        correct: ["Unternehmen nutzen fremde Foren für ihre Marketing-Aktivitäten.", "Foren können von Unternehmen selbst betrieben werden."]
    },
    { // 83
        name: "Musterprüfung B.4-Frage 02",
        question: "Welche Altersgruppe verbringt eher Zeit auf Social Networks wie Snapchat?",
        answers: ["Eher ältere Nutzer", "Alle Altersgruppen verbringen ähnlich viel Zeit auf diesen Social Networks.", "Sehr junge und sehr alte Nutzer", "Eher jüngere Nutzer"],
        correct: ["Eher jüngere Nutzer"]
    },
    { // 84
        name: "Musterprüfung E.1-Frage 01",
        question: "Ordne die folgenden Rollen ihren entsprechenden Aufgaben zu.",
        answers: [
            {"Content Creator": "Erstellung von visuellen und textbasierten Inhalten"},
            {"Social-Media-Manager": "Entwicklung und Umsetzung von Social-Media- Strategien"},
            {"Community-Manager": "Interaktion mit Kundinnen und Kunden, das Lösen von Problemen, das Sammeln von Feedback"}
        ],
        correct: [
            {"Content Creator": "Erstellung von visuellen und textbasierten Inhalten"},
            {"Social-Media-Manager": "Entwicklung und Umsetzung von Social-Media- Strategien"},
            {"Community-Manager": "Interaktion mit Kundinnen und Kunden, das Lösen von Problemen, das Sammeln von Feedback"}
        ]
    },
    { // 85
        name: "Musterprüfung E.2-Frage 03",
        question: "Warum sollten wir eine regelmäßige Redaktionsplanung durchführen?",
        answers: ["Um die finanziellen Ressourcen zu analysieren", "Um eine Statusübersicht aller Beiträge zu haben", "Um einen Überblick über die jeweiligen Aufgaben im Team zu bekommen"],
        correct: ["Um eine Statusübersicht aller Beiträge zu haben", "Um einen Überblick über die jeweiligen Aufgaben im Team zu bekommen"]
    },
    { // 86
        name: "Musterprüfung E.3- Frage 04",
        question: "Wie bezeichnet man eine Sammlung von Hausregeln und Verhaltensregeln, um einen angenehmen Umgangston innerhalb einer Online-Community zu gewährleisten?",
        answers: ["Guidelines", "Community-Education", "Netiquette"],
        correct: ["Netiquette"]
    },
    { // 87
        name: "Musterprüfung D.3 - Frage 02",
        question: "Welche Fragen sollten im Rahmen einer Content-Strategie gestellt und beantwortet werden?",
        answers: ["Wie viel Werbebudget setzen wir ein?", "Wie wird die Content-Verbreitung organisiert?", "Welche Monitoring-Tools setzen wir ein?", "Was sind die Ziele des Contents?"],
        correct: ["Wie wird die Content-Verbreitung organisiert?", "Was sind die Ziele des Contents?"]
    },
    { // 88
        name: "Musterprüfung C.2 - Frage 03",
        question: "Warum bietet Social Media auch für Human Resources gute Möglichkeiten?",
        answers: ["Bewerberinnen und Bewerber informieren sich gerne via Social Media über ein Unternehmen.", "Wir können via Social Media potenzielle Bewerberinnen und Bewerber finden.", "Wir können via Social Media Crowdfunding-Kampagnen durchführen.", "Social Media bietet tolle Möglichkeiten für einen schnellen Erstkontakt."],
        correct: ["Bewerberinnen und Bewerber informieren sich gerne via Social Media über ein Unternehmen.", "Wir können via Social Media potenzielle Bewerberinnen und Bewerber finden.", "Social Media bietet tolle Möglichkeiten für einen schnellen Erstkontakt."]
    },
    { // 89
        name: "Musterprüfung B.3-Frage 01",
        question: "Welche Aussage zu Xing ist richtig?",
        answers: ["Xing wird überhaupt nicht in der Region DACH genutzt.", "Gruppen- und Eventfunktionen sind sehr relevant.", "Xing wird vor allem in der Region DACH genutzt.", "Xing ist für das Video-Marketing sehr gut geeignet."],
        correct: ["Xing wird vor allem in der Region DACH genutzt."]
    },
    { // 90
        name: "Musterprüfung A.2 - Frage 03",
        question: "Welcher Vorteil ergibt sich durch die Unterscheidung von Zielarten (kurz-, mittel-, langfristig)?",
        answers: ["Die Konkurrenz hat weniger Einfluss auf die Reichweite.", "Die Zielgruppe segmentiert sich automatisch.", "Die Maßnahmen lassen sich gezielter planen und aufeinander abstimmen.", "Die Planung von Postings wird automatisiert."],
        correct: ["Die Maßnahmen lassen sich gezielter planen und aufeinander abstimmen."]
    },
    { // 91
        name: "Musterprüfung D.4 - Frage 01",
        question: "Welche Vorteile hat Content Curation?",
        answers: ["Transportieren von Fachkenntnissen", "Zeitersparnis", "Mehr Unabhängigkeit von anderen Quellen", "Mehr Originalität"],
        correct: ["Transportieren von Fachkenntnissen", "Zeitersparnis"]
    },
    { // 92
        name: "Musterprüfung A.1-Frage 05",
        question: "Worin besteht der Unterschied zwischen einer Unternehmens-Vision und einer -Mission?",
        answers: [
            {"Mission": "Folgt dem Muster „Das erreichen wir, indem wir ...“."},
            {"Vision": "Kann sozial und unternehmerisch formuliert sein."}
        ],
        correct: [
            {"Mission": "Folgt dem Muster „Das erreichen wir, indem wir ...“."},
            {"Vision": "Kann sozial und unternehmerisch formuliert sein."}
        ]
    },
    { // 93
        name: "Musterprüfung C.4 - Frage 02",
        question: "Welche Fragen sollten wir uns bei der Auswahl der richtigen Social Networks stellen?",
        answers: ["Welche Relevanz haben einzelne Social Networks für meine Zielgruppe?", "Welche Ressourcen sind für das Bespielen notwendig?", "Wie ist das (Nutzungs-) Verhalten meiner Zielgruppe?"],
        correct: ["Welche Relevanz haben einzelne Social Networks für meine Zielgruppe?", "Welche Ressourcen sind für das Bespielen notwendig?", "Wie ist das (Nutzungs-) Verhalten meiner Zielgruppe?"]
    },
    { // 94
        name: "Musterprüfung F.1- Frage 03",
        question: "Was ist eine Custom Audience?",
        answers: ["Eine Zielgruppe, die aus vorhandenen Kundinnen und Kunden oder Kontakten eines Unternehmens erstellt wird", "Eine Zielgruppe, die vor allem über demografische Faktoren erstellt wird"],
        correct: ["Eine Zielgruppe, die aus vorhandenen Kundinnen und Kunden oder Kontakten eines Unternehmens erstellt wird"]
    },
    { // 95
        name: "Musterprüfung B.1-Frage 04",
        question: "Über welches Tool lassen sich die Geschäftsaktivitäten im Meta-Ökosystem verwalten?",
        answers: ["Meta Business Manager", "Facebook Watch", "Facebook Studio", "Instagram Cirect"],
        correct: ["Meta Business Manager"]
    },
    { // 96
        name: "Musterprüfung G.1- Frage 05",
        question: "Was unterscheidet Social Media Monitoring von Social Media Analytics?",
        answers: ["Analytics wird ausschließlich manuell durchgeführt", "Monitoring analysiert die eigene Zielgruppe", "Analytics wertet nur negative Kommentare aus", "Monitoring beobachtet externe Inhalte und Nutzergespräche"],
        correct: ["Monitoring beobachtet externe Inhalte und Nutzergespräche"]
    },
    { // 97
        name: "Musterprüfung A.1-Frage 07",
        question: "Welche Aussage zu den AGBs sozialer Netzwerke ist korrekt?",
        answers: ["AGBs sind nur bei kommerzieller Nutzung relevant.", "Verstöße gegen AGBs können lediglich zur Löschung einzelner Beiträge führen.", "Die AGBs eines sozialen Netzwerkes geben vor, welche Inhalte auf der Plattform erlaubt sind und was nicht.", "AGBs sind im Social-Media-Marketing irrelevant, da sie nur Nutzerverhalten regeln."],
        correct: ["Die AGBs eines sozialen Netzwerkes geben vor, welche Inhalte auf der Plattform erlaubt sind und was nicht."]
    },
    { // 98
        name: "Musterprüfung C.5 - Frage 02",
        question: "Welche Art von Ressourcen gilt es bei einer Strategie zu berücksichtigen?",
        answers: ["Budget", "Zeit", "Technische Infrastruktur", "Tools"],
        correct: ["Budget", "Zeit", "Technische Infrastruktur", "Tools"]
    },
    { // 99
        name: "Musterprüfung F.3 - Frage 07",
        question: "Welche Kennzahlen und KPIs sollten beim Einsatz von Social Media Ads regelmäßig ausgewertet werden?",
        answers: ["CTR (Click-Through-Rate)", "POI (Perfect Order Index)", "Kosten pro Conversion", "Reichweite"],
        correct: ["CTR (Click-Through-Rate)", "Kosten pro Conversion", "Reichweite"]
    },
    { // 100
        name: "Musterprüfung C.5 - Frage 01",
        question: "Was sind gängige technische Ressourcen, die es zu beachten gilt?",
        answers: ["Lizenzen", "Tools", "Zielgruppen", "Endgeräte"],
        correct: ["Lizenzen", "Tools", "Endgeräte"]
    },
    { // 101
        name: "Musterprüfung A.1-Frage 01",
        question: "Was bedeutet das Akronym USP?",
        answers: ["Ein Modell für die Zielgruppendefinition", "Logistikmethode eines Unternehmens", "Alleinstellungsmerkmal eines Unternehmens oder eines Produktes", "Einzigartiger Verkaufspreis eines Produktes"],
        correct: ["Alleinstellungsmerkmal eines Unternehmens oder eines Produktes"]
    },
    // --- Fragen aus Quiz LF .pdf (135 Fragen) ---
    { // 102
        name: "Quiz LF A.1 Frage 01",
        question: "Was beinhaltet die Impressumspflicht?",
        answers: ["Name und Anschrift des Diensteanbieters.", "Kontaktinformationen, einschließlich einer Telefonnummer und E-Mail-Adresse.", "Angaben zum Registereintrag bei juristischen Personen.", "Rechtsform des Unternehmens.", "Umsatzsteuer-Identifikationsnummer, wenn sie auf Antrag erteilt wurde.", "Zusätzliche Informationen für bestimmte Berufe."],
        correct: ["Name und Anschrift des Diensteanbieters.", "Kontaktinformationen, einschließlich einer Telefonnummer und E-Mail-Adresse.", "Angaben zum Registereintrag bei juristischen Personen.", "Rechtsform des Unternehmens.", "Umsatzsteuer-Identifikationsnummer, wenn sie auf Antrag erteilt wurde.", "Zusätzliche Informationen für bestimmte Berufe."]
    },
    { // 103
        name: "Quiz LF A.1 Frage 02",
        question: "Was ist ein Supply Chain Manager?",
        answers: ["Ein Supply Chain Manager ist ein Fachmann, der für die Planung, Ausführung und Überwachung aller Aktivitäten innerhalb der Lieferkette eines Unternehmens verantwortlich ist.", "Dies umfasst die Beschaffung von Rohmaterialien, die Produktion, die Lagerung und die Distribution von Produkten bis hin zur Auslieferung an den Endkunden."],
        correct: ["Ein Supply Chain Manager ist ein Fachmann, der für die Planung, Ausführung und Überwachung aller Aktivitäten innerhalb der Lieferkette eines Unternehmens verantwortlich ist.", "Dies umfasst die Beschaffung von Rohmaterialien, die Produktion, die Lagerung und die Distribution von Produkten bis hin zur Auslieferung an den Endkunden."]
    },
    { // 104
        name: "Quiz LF A.1 Frage 03",
        question: "Was ist Content Curation?",
        answers: ["Content Curation bezeichnet den Prozess des Sammelns, Auswählens und Teilens von relevanten Inhalten aus verschiedenen Quellen im Social Media Marketing.", "Diese Strategie hilft Marken, ihre Online-Präsenz zu stärken und Autorität aufzubauen, ohne ständig neue Inhalte erstellen zu müssen."],
        correct: ["Content Curation bezeichnet den Prozess des Sammelns, Auswählens und Teilens von relevanten Inhalten aus verschiedenen Quellen im Social Media Marketing."]
    },
    { // 105
        name: "Quiz LF A.1 Frage 04",
        question: "Was ist der Unterschied zwischen Cross- und Upselling?",
        answers: ["Cross-Selling: Bietet zusätzliche Produkte oder Dienstleistungen an, die das ursprüngliche Produkt ergänzen.", "Upselling: Bewegt Kunden zu einem teureren oder höherwertigen Produkt."],
        correct: ["Cross-Selling: Bietet zusätzliche Produkte oder Dienstleistungen an, die das ursprüngliche Produkt ergänzen.", "Upselling: Bewegt Kunden zu einem teureren oder höherwertigen Produkt."]
    },
    { // 106
        name: "Quiz LF A.1 Frage 05",
        question: "Was sind First Party Daten?",
        answers: ["First Party Daten sind Informationen, die ein Unternehmen direkt von seinen Kunden oder Zielgruppen über eigene Kanäle sammelt.", "Sie entstehen durch Interaktionen wie Website-Besuche, Käufe, Umfragen und andere direkte Engagements.", "Da sie direkt vom Nutzer stammen, gelten sie als besonders wertvoll und zuverlässig."],
        correct: ["First Party Daten sind Informationen, die ein Unternehmen direkt von seinen Kunden oder Zielgruppen über eigene Kanäle sammelt."]
    },
    { // 107
        name: "Quiz LF A.1 Frage 06",
        question: "Wie viele Menschen erschaffen nach der 90-9-1 Regel aktiv Content in den Sozialen Medien?",
        answers: ["90% der Nutzer sind \"Lurker\", die Inhalte konsumieren, ohne aktiv zu interagieren.", "9% der Nutzer sind aktive Teilnehmer, die kommentieren, aber keine eigenen Inhalte erstellen.", "1% der Nutzer sind Inhaltsersteller, die die Mehrheit der Inhalte produzieren."],
        correct: ["1% der Nutzer sind Inhaltsersteller, die die Mehrheit der Inhalte produzieren."]
    },
    { // 108
        name: "Quiz LF A.1 Frage 07",
        question: "Wie kann man auf Youtube Geld verdienen?",
        answers: ["Monetarisierung durch Werbung (Anzeigenschaltung).", "Sponsoren / Kooperationspartner.", "Bezahlte Kanalmitgliedschaften."],
        correct: ["Monetarisierung durch Werbung (Anzeigenschaltung).", "Sponsoren / Kooperationspartner.", "Bezahlte Kanalmitgliedschaften."]
    },
    { // 109
        name: "Quiz LF A1 Frage 08",
        question: "Welcher Kanal ist in den meisten Fällen nach wie vor das Herzstück einer Online-Marketing-Strategie? (SC)",
        answers: ["Website", "X (Twitter)", "Facebook", "TV"],
        correct: ["Website"]
    },
    { // 110
        name: "Quiz LF A1 Frage 09",
        question: "Wie verhält es sich mit der Kennzeichnungspflicht von Werbeinhalten? (SC)",
        answers: ["Werbe-Posts von Influencerinnen/Influencern und Unternehmen sind von einer genauen Kennzeichnungspflicht der Werbung befreit, wenn die Accounts durch den blauen Haken als kommerziell gekennzeichnet sind.", "Die Kennzeichnungspflicht gilt nur für Marketing-Unternehmen, nicht aber für Influencerinnen/Influencer oder Affiliate-Partnerinnen/-partner.", "Online-Marketer sowie Influencerinnen/Influencer müssen kommerzielle Inhalte auf Social Media klar als Werbung kennzeichnen."],
        correct: ["Online-Marketer sowie Influencerinnen/Influencer müssen kommerzielle Inhalte auf Social Media klar als Werbung kennzeichnen."]
    },
    { // 111
        name: "Quiz LF A1 Frage 10",
        question: "Was bedeutet das Akronym SMART? (SC)",
        answers: ["Spezifisch, messbar, ambitioniert & attraktiv, realistisch, terminiert", "Spezifisch, messbar, ambitioniert & attraktiv, reaktionär, terminiert"],
        correct: ["Spezifisch, messbar, ambitioniert & attraktiv, realistisch, terminiert"]
    },
    { // 112
        name: "Quiz LF A.1 Frage 11",
        question: "Welche Maßnahme zeigt einen rechtlich korrekten Umgang mit User Generated Content (UGC) auf Instagram? (SC)",
        answers: ["Ein Reel mit Kundenkommentaren wird veröffentlicht, solange nur der Vorname erscheint.", "Wenn ein Bild von der Community gepostet wurde, darf es automatisch für Ads verwendet werden.", "Vor der Veröffentlichung eines Kundenbilds wird eine schriftliche Einwilligung zur Nutzung eingeholt."],
        correct: ["Vor der Veröffentlichung eines Kundenbilds wird eine schriftliche Einwilligung zur Nutzung eingeholt."]
    },
    { // 113
        name: "Quiz LF A.1 Frage 12",
        question: "Wofür steht das Akronym POE im Kontext des Online- und Social-Media-Marketings? (SC)",
        answers: ["Public Opinion Engagement", "Performance, Outreach, Engagement.", "Promotion, Optimization, Engagement", "Paid, Owned, Earned"],
        correct: ["Paid, Owned, Earned"]
    },
    { // 114
        name: "Quiz LF A.2 Frage 01",
        question: "Was ist der Unterschied zwischen Zielgruppe und Persona?",
        answers: ["Eine Zielgruppe umfasst eine breitere Gruppe von Personen mit bestimmten gemeinsamen Merkmalen (demografisch, psychografisch), die für ein Produkt relevant sind.", "Eine Persona ist eine fiktive, detaillierte Darstellung eines idealen Kunden innerhalb der Zielgruppe."],
        correct: ["Eine Zielgruppe umfasst eine breitere Gruppe von Personen mit bestimmten gemeinsamen Merkmalen (demografisch, psychografisch), die für ein Produkt relevant sind.", "Eine Persona ist eine fiktive, detaillierte Darstellung eines idealen Kunden innerhalb der Zielgruppe."]
    },
    { // 115
        name: "Quiz LF A.2 Frage 02",
        question: "Was ist das Hauptziel bei der Erstellung von Buyer Personas im Social-Media-Marketing? (SC)",
        answers: ["Die Zielgruppe nach Budgethöhe zu filtern", "Die Zielgruppe vollständig durch reale Kundendaten zu ersetzen", "Nur neue Zielgruppen anzusprechen und bestehende zu ignorieren", "Die Zielgruppe durch fiktive, aber realitätsnahe Profile greifbar zu machen"],
        correct: ["Die Zielgruppe durch fiktive, aber realitätsnahe Profile greifbar zu machen"]
    },
    { // 116
        name: "Quiz LF A.3 Frage 01",
        question: "Warum ist die Customer Experience wichtig?",
        answers: ["Die Customer Experience (CX) ist entscheidend für den Erfolg eines Unternehmens, da sie einen direkten Einfluss auf die Kundenzufriedenheit hat.", "Eine positive CX fördert nicht nur die Loyalität der Kunden, sondern ermöglicht auch die Sammlung wertvollen Feedbacks.", "Darüber hinaus kann eine durchdachte Customer Experience gezielt in die Mundpropaganda der Kunden eingreifen."],
        correct: ["Die Customer Experience (CX) ist entscheidend für den Erfolg eines Unternehmens, da sie einen direkten Einfluss auf die Kundenzufriedenheit hat.", "Eine positive CX fördert nicht nur die Loyalität der Kunden, sondern ermöglicht auch die Sammlung wertvollen Feedbacks.", "Darüber hinaus kann eine durchdachte Customer Experience gezielt in die Mundpropaganda der Kunden eingreifen."]
    },
    { // 117
        name: "Quiz LF A.3 Frage 02",
        question: "Content sollte auf die Nutzerbedürfnisse entsprechend der jeweiligen Customer Journey ausgerichtet werden. Bringe die englischen Begriffe in die richtige Reihenfolge, sodass die Anfangsbuchstaben das Akronym für das entsprechende Modell ergeben. (MPC)",
        answers: ["1= Awareness", "2= Consideration", "3= Purchase", "4= Retention", "5= Advocacy"],
        correct: ["1= Awareness", "2= Consideration", "3= Purchase", "4= Retention", "5= Advocacy"]
    },
    { // 118
        name: "Quiz LF A.3 Frage 03",
        question: "Worin unterscheiden sich der Sales Funnel und die Customer Journey? (SC)",
        answers: ["Mit der Customer Journey wird die Kundenreise über den Kaufprozess hinaus gezeigt, der Sales Funnel endet oft mit dem Kauf.", "Die Customer Journey betrachtet aus rein betriebswirtschaftlicher Sicht den Kaufprozess bis hin zum Moment des erfolgreichen Vertriebs. Der Sales Funnel kümmert sich auch um die Kundenbeziehung."],
        correct: ["Mit der Customer Journey wird die Kundenreise über den Kaufprozess hinaus gezeigt, der Sales Funnel endet oft mit dem Kauf."]
    },
    { // 119
        name: "Quiz LF A.3 Frage 04",
        question: "Warum ist das Customer-Experience-Management wichtig für ein Unternehmen? (SC)",
        answers: ["Es hat einen direkten Einfluss auf die Kundenzufriedenheit. Zudem kann wertvolles Feedback gesammelt werden, um Produkte und Dienstleistungen stetig zu verbessern.", "Es ist darauf ausgerichtet, den Gewinn des Unternehmens unabhängig von den Kundenbedürfnissen gezielt zu steigern.", "Es kann gezielt in die Mundpropaganda von Kundinnen und Kunden eingreifen und Shitstorms verhindern.", "Es hat keine nennenswerte Relevanz."],
        correct: ["Es hat einen direkten Einfluss auf die Kundenzufriedenheit. Zudem kann wertvolles Feedback gesammelt werden, um Produkte und Dienstleistungen stetig zu verbessern.", "Es kann gezielt in die Mundpropaganda von Kundinnen und Kunden eingreifen und Shitstorms verhindern."]
    },
    { // 120
        name: "Quiz LF A.3 Frage 05",
        question: "Wie stehen die Begriffe \"Usability\" und \"User Experience\" (UX) zueinander? (SC)",
        answers: ["Die Begriffe meinen das Gleiche und können synonym verwendet werden.", "Mit der Usability ist die Nutzbarkeit und Funktionalität gemeint, die User Experience bezieht sich auf das persönliche Nutzungserlebnis."],
        correct: ["Mit der Usability ist die Nutzbarkeit und Funktionalität gemeint, die User Experience bezieht sich auf das persönliche Nutzungserlebnis."]
    },
    { // 121
        name: "Quiz LF A.3 Frage 06",
        question: "Warum ist Social Media besonders wichtig in der Customer Journey? (SC)",
        answers: ["Es ersetzt vollständig alle anderen Kanäle", "Es hat keinen Einfluss auf die Kaufentscheidung", "Es ist nur für B2C-Unternehmen relevant", "Es ermöglicht direkte Interaktion und Beeinflussung in mehreren Journey-Phasen"],
        correct: ["Es ermöglicht direkte Interaktion und Beeinflussung in mehreren Journey-Phasen"]
    },
    { // 122
        name: "Quiz LF A.3 Frage 07",
        question: "Wofür stehen die Abkürzungen in AIDA? (SC)",
        answers: ["Action, Interaction, Desire, Awareness", "Attention, Interest, Desire, Action", "Action, Interest, Desire, Awareness", "Action, Interest, Dislike, Awareness"],
        correct: ["Attention, Interest, Desire, Action"]
    },
    { // 123
        name: "Quiz LF A.3 Frage 08",
        question: "Wofür steht die Abkürzung CTA? (SC)",
        answers: ["Es handelt sich um das Akronym für \"Call-to-Action\".", "Es handelt sich um das Modell Content-Marketing, Targeting, A/B-Tests."],
        correct: ["Es handelt sich um das Akronym für \"Call-to-Action\"."]
    },
    { // 124
        name: "Quiz LF A.4 Frage 01",
        question: "Wie entsteht eine Streulücke?",
        answers: ["Eine Streulücke entsteht, indem Touchpoints in der Customer Journey übersehen werden."],
        correct: ["Eine Streulücke entsteht, indem Touchpoints in der Customer Journey übersehen werden."]
    },
    { // 125
        name: "Quiz LF A.4 Frage 02",
        question: "Was bedeutet der Begriff \"Streulücke\"? (SC)",
        answers: ["Er bezeichnet Touchpoints, die übersehen wurden.", "Er bezeichnet die ungewollte Ansprache von Personen mit Werbemaßnahmen, die nicht zur Zielgruppe gehören."],
        correct: ["Er bezeichnet Touchpoints, die übersehen wurden."]
    },
    { // 126
        name: "Quiz LF A.4 Frage 03",
        question: "Ordne die Beispiele für Touchpoints den entsprechenden Kategorien zu.",
        answers: [{"Kanäle": "Website, Social Media"}, {"Formate": "Blogbeitrag, Reel"}],
        correct: [{"Kanäle": "Website, Social Media"}, {"Formate": "Blogbeitrag, Reel"}]
    },
    { // 127
        name: "Quiz LF B.1 Frage 01",
        question: "Was ist ein zentraler Erfolgsfaktor für das Community Building auf Facebook? (SC)",
        answers: ["Quantität vor Qualität - Hauptsache viele Fans.", "Influencer-Marketing mit TikTok-Creators.", "Nur Beiträge mit Gewinnspielen posten.", "Relevanter und hochwertiger Content für die Zielgruppe."],
        correct: ["Relevanter und hochwertiger Content für die Zielgruppe."]
    },
    { // 128
        name: "Quiz LF B.1 Frage 02",
        question: "Wie lautet der Grundtyp von Facebook? (SC)",
        answers: ["Business-Plattform", "Videoplattform", "Suchmaschine", "Soziales Netzwerk"],
        correct: ["Soziales Netzwerk"]
    },
    { // 129
        name: "Quiz LF B.1 Frage 03",
        question: "Wie heißt das Kurzvideoformat bei Instagram? (SC)",
        answers: ["Reels", "Snaps", "Vidz", "IGTV"],
        correct: ["Reels"]
    },
    { // 130
        name: "Quiz LF B.1 Frage 04",
        question: "Was ist der Meta Business Manager? (SC)",
        answers: ["Ein reines Analysetool für Instagram-Profile", "Ein Tool zur zentralen Verwaltung von Unternehmensressourcen im Meta-Ökosystem", "Ein Kl-gesteuerter Avatar-Generator für Meta", "Eine kostenpflichtige Werbeanzeigenplattform"],
        correct: ["Ein Tool zur zentralen Verwaltung von Unternehmensressourcen im Meta-Ökosystem"]
    },
    { // 131
        name: "Quiz LF B.1 Frage 05",
        question: "Was ist WhatsApp Business? (SC)",
        answers: ["Ein soziales Netzwerk mit Fokus auf Karrierenetzwerke", "Eine klassische Newsletter-App", "Eine App zur Organisation interner Teamkommunikation", "Eine spezielle Version von WhatsApp für Unternehmen zur direkten Kundenkommunikation"],
        correct: ["Eine spezielle Version von WhatsApp für Unternehmen zur direkten Kundenkommunikation"]
    },
    { // 132
        name: "Quiz LF B.2 Frage 02",
        question: "Was unterscheidet Vimeo von YouTube? (MPC)",
        answers: ["Die Rechte am hochgeladenen Material bleiben vollständig beim Erstellenden.", "Der Fokus liegt auf künstlerisch anspruchsvollen Videos.", "Es besticht in seinem Aufbau durch eine große Schlichtheit.", "Es bietet mehr Monetarisierungsmöglichkeiten."],
        correct: ["Die Rechte am hochgeladenen Material bleiben vollständig beim Erstellenden.", "Der Fokus liegt auf künstlerisch anspruchsvollen Videos.", "Es besticht in seinem Aufbau durch eine große Schlichtheit."]
    },
    { // 133
        name: "Quiz LF B.2 Frage 03",
        question: "Was bedeutet der Discovery-Faktor in Bezug auf TikTok? (SC)",
        answers: ["Nutzende gehen auf \"Entdeckungsreise\" und lassen sich durch neue Inhalte überraschen und inspirieren.", "Nutzende schauen sich Inhalte von Creators und Kanälen an, die sie bereits kennen und abonniert haben."],
        correct: ["Nutzende gehen auf \"Entdeckungsreise\" und lassen sich durch neue Inhalte überraschen und inspirieren."]
    },
    { // 134
        name: "Quiz LF B.2 Frage 04",
        question: "Ordne die folgenden Aspekte dem Hero-Hub-Help-Modell zu.",
        answers: ["Hero: Die Videos sind aufwendig produzierte, spektakuläre Videos, die das Potenzial haben, zu viralen Videos zu werden.", "Hub: Die Videos richten sich an bestehende und potentielle Abonnenten eines Video-Kanals.", "Help: Die Videos bieten nützliche Informationen und werden häufig über Suchmaschinen gefunden."],
        correct: ["Hero: Die Videos sind aufwendig produzierte, spektakuläre Videos, die das Potenzial haben, zu viralen Videos zu werden.", "Hub: Die Videos richten sich an bestehende und potentielle Abonnenten eines Video-Kanals.", "Help: Die Videos bieten nützliche Informationen und werden häufig über Suchmaschinen gefunden."]
    },
    { // 135
        name: "Quiz LF B.2 Frage 05",
        question: "Zu welchem Unternehmen gehört Youtube? (SC)",
        answers: ["Google", "Facebook", "Microsoft", "X (Twitter)"],
        correct: ["Google"]
    },
    { // 136
        name: "Quiz LF B.3 Frage 01",
        question: "Was lässt sich auf Business- und Karrierenetzwerken gut umsetzen? (MPC)",
        answers: ["Personal Branding.", "Social Shopping.", "Social Selling.", "Recruiting."],
        correct: ["Personal Branding.", "Social Selling.", "Recruiting."]
    },
    { // 137
        name: "Quiz LF B.3 Frage 02",
        question: "Was ist der Unterschied zwischen Social Selling und Personal Branding?",
        answers: ["Social Selling bezieht sich auf die Nutzung sozialer Medien, um Beziehungen zu potenziellen Kunden aufzubauen und Verkaufschancen zu fördern.", "Personal Branding hingegen konzentriert sich darauf, eine individuelle Marke zu entwickeln, die die eigene Identität und Expertise widerspiegelt."],
        correct: ["Social Selling bezieht sich auf die Nutzung sozialer Medien, um Beziehungen zu potenziellen Kunden aufzubauen und Verkaufschancen zu fördern.", "Personal Branding hingegen konzentriert sich darauf, eine individuelle Marke zu entwickeln, die die eigene Identität und Expertise widerspiegelt."]
    },
    { // 138
        name: "Quiz LF B.3 Frage 03",
        question: "Warum spielt Xing im Content-Marketing häufig eine untergeordnete Rolle?",
        answers: ["Die Nutzer sind auf der Plattform eher passiv, es wird eher wenig mit Content interagiert.", "Das Veröffentlichen von Beiträgen ist auf Xing generell nicht möglich."],
        correct: ["Die Nutzer sind auf der Plattform eher passiv, es wird eher wenig mit Content interagiert."]
    },
    { // 139
        name: "Quiz LF B.3 Frage 04",
        question: "Wie wird der Verkauf bzw. Vertrieb von B2B-Produkten und Dienstleistungen in sozialen Netzwerken häufig genannt? (SC)",
        answers: ["Social Services", "Social Business", "Social Commerce", "Social Selling"],
        correct: ["Social Selling"]
    },
    { // 140
        name: "Quiz LF B.3 Frage 05",
        question: "Warum ist Xing im Recruiting weiterhin sehr beliebt? (MPC)",
        answers: ["Xing bietet viele Tools und Möglichkeiten im Recruiting.", "Der Eventmarkt bietet tolle Möglichkeiten für Recruiter.", "Über die Gruppenfunktion kann gezielt nach Bewerbenden gesucht werden.", "Über die Jobbörse können Stellen direkt auf der Plattform geteilt werden."],
        correct: ["Xing bietet viele Tools und Möglichkeiten im Recruiting.", "Über die Jobbörse können Stellen direkt auf der Plattform geteilt werden."]
    },
    { // 141
        name: "Quiz LF B.3 Frage 06",
        question: "Zu welchem Unternehmen gehört LinkedIn? (SC)",
        answers: ["Apple", "Meta", "Microsoft", "Google"],
        correct: ["Microsoft"]
    },
    { // 142
        name: "Quiz LF B.4 Frage 05",
        question: "Ordne die nachfolgenden Plattformen nach Alter der Nutzer aufsteigend: Facebook, TikTok, Instagram, Snapchat",
        answers: ["1= Snapchat", "2= TikTok", "3= Instagram", "4= Facebook"],
        correct: ["1= Snapchat", "2= TikTok", "3= Instagram", "4= Facebook"]
    },
    { // 143
        name: "Quiz LF C.1 Frage 01",
        question: "Was ist mit Purpose Marketing gemeint?",
        answers: ["Purpose Marketing, oder zweckgetriebenes Marketing, ist eine Marketingstrategie, die darauf abzielt, die Mission und den gesellschaftlichen Einfluss eines Unternehmens in den Mittelpunkt seiner Kommunikationsbemühungen zu stellen.", "Diese Strategie geht über den reinen Verkauf von Produkten oder Dienstleistungen hinaus und konzentriert sich darauf, eine tiefere Verbindung zu den Verbrauchern herzustellen."],
        correct: ["Purpose Marketing, oder zweckgetriebenes Marketing, ist eine Marketingstrategie, die darauf abzielt, die Mission und den gesellschaftlichen Einfluss eines Unternehmens in den Mittelpunkt seiner Kommunikationsbemühungen zu stellen."]
    },
    { // 144
        name: "Quiz LF C.1 Frage 02",
        question: "Was sind Benchmarks und wofür verwende ich sie?",
        answers: ["Ein Benchmark ist ein Vergleichsmaßstab, der als Referenzpunkt dient, um die Leistung von Produkten, Dienstleistungen oder Prozessen zu messen.", "Beispiele im Social Media Management sind: Engagement-Rate, Follower-Wachstum, Klickrate (CTR) und Post-Frequenz."],
        correct: ["Ein Benchmark ist ein Vergleichsmaßstab, der als Referenzpunkt dient, um die Leistung von Produkten, Dienstleistungen oder Prozessen zu messen."]
    },
    { // 145
        name: "Quiz LF C.1 Frage 03",
        question: "Warum sollte man eigentlich in Social Media Recruiting investieren?",
        answers: ["Die Zielgruppe (Bewerber und Talente) nutzt Social Media Netzwerke täglich.", "Social Media Recruiting bringt den direkten Kontakt zum Bewerber und die wechselseitige Interaktion.", "Interessenten können auf eine Stellenanzeige reagieren und Rückfragen stellen.", "Es entsteht eine wichtige Verbindung zwischen den beiden Parteien.", "Potenzielle Bewerber können sich sehr einfach und schnell ein Bild von einem Unternehmen machen."],
        correct: ["Die Zielgruppe (Bewerber und Talente) nutzt Social Media Netzwerke täglich.", "Social Media Recruiting bringt den direkten Kontakt zum Bewerber und die wechselseitige Interaktion.", "Potenzielle Bewerber können sich sehr einfach und schnell ein Bild von einem Unternehmen machen."]
    },
    { // 146
        name: "Quiz LF C.1 Frage 04",
        question: "Ordne die nachfolgenden Begriffe in eine sinnvolle Reihenfolge",
        answers: ["1.= Ziele", "2.= Zielgruppe", "3= Maßnahmen", "4.= Zeit-, Projekt- und Budgetbedarfsplanung", "5.= Erfolgsmessung"],
        correct: ["1.= Ziele", "2.= Zielgruppe", "3= Maßnahmen", "4.= Zeit-, Projekt- und Budgetbedarfsplanung", "5.= Erfolgsmessung"]
    },
    { // 147
        name: "Quiz LF C.2 Frage 01",
        question: "Welche Aspekte sollte eine Social-Media-Strategie immer beinhalten? (MP)",
        answers: ["Klare Ziele.", "Zielgruppenverständnis.", "Supply-Chain-Audit.", "Effiziente Ressourcennutzung."],
        correct: ["Klare Ziele.", "Zielgruppenverständnis.", "Effiziente Ressourcennutzung."]
    },
    { // 148
        name: "Quiz LF C.2 Frage 02",
        question: "Wofür stehen die einzelnen Buchstaben der SMART-Formel?",
        answers: ["S für Spezifisch: Das Ziel wird klar benannt.", "M für Messbar: Die Zielerreichung muss messbar sein (Kennzahlen).", "A für Attraktiv: Das Ziel muss Lust darauf machen, es zu erreichen.", "R für Realistisch: Das Ziel darf aber auch nicht frustrierend hoch gehängt werden.", "T für Terminiert: Bis wann soll das Ziel erreicht werden?."],
        correct: ["S für Spezifisch: Das Ziel wird klar benannt.", "M für Messbar: Die Zielerreichung muss messbar sein (Kennzahlen).", "A für Attraktiv: Das Ziel muss Lust darauf machen, es zu erreichen.", "R für Realistisch: Das Ziel darf aber auch nicht frustrierend hoch gehängt werden.", "T für Terminiert: Bis wann soll das Ziel erreicht werden?."]
    },
    { // 149
        name: "Quiz LF C.2 Frage 03",
        question: "Welches dieser Ziele ist deiner Meinung nach SMART definiert? (SC)",
        answers: ["Wir erhöhen die Reichweite unserer YouTube-Videos.", "Wir gewinnen bis Ende 2024 mehr Instagram-Follower.", "Wir generieren durch eine LinkedIn-Ad-Kampagne 20 Bewerbungen bis Ende Q1/2024."],
        correct: ["Wir generieren durch eine LinkedIn-Ad-Kampagne 20 Bewerbungen bis Ende Q1/2024."]
    },
    { // 150
        name: "Quiz LF C.3 Frage 01",
        question: "Welche Informationen sollte eine Persona enthalten? (MC)",
        answers: ["Name.", "Foto oder Bild.", "Kauf- und Konsumverhalten.", "Bevorzugte Marken."],
        correct: ["Name.", "Foto oder Bild.", "Kauf- und Konsumverhalten.", "Bevorzugte Marken."]
    },
    { // 151
        name: "Quiz LF C.3 Frage 02",
        question: "Was sind demografische Merkmale einer Zielgruppe? (MP)",
        answers: ["Alter.", "Geschlecht.", "Psyche.", "Kaufverhalten."],
        correct: ["Alter.", "Geschlecht."]
    },
    { // 152
        name: "Quiz LF C.3 Frage 03",
        question: "Was ist der Unterschied zwischen einer Zielgruppe und einer Persona?",
        answers: ["Personas sind fiktive Charaktere, die auf realen Daten und Verhaltensmustern basieren und eine Zielgruppe repräsentieren.", "Personas sind ein effektives Mittel, um abstrakte Daten über Zielgruppen zu personifizieren und lebendiger zu gestalten."],
        correct: ["Personas sind fiktive Charaktere, die auf realen Daten und Verhaltensmustern basieren und eine Zielgruppe repräsentieren.", "Personas sind ein effektives Mittel, um abstrakte Daten über Zielgruppen zu personifizieren und lebendiger zu gestalten."]
    },
    { // 153
        name: "Quiz LF C.3 Frage 04",
        question: "Ordne den Performer und den Harmoniser ein. Nenne 2-3 Eigenschaften der jeweiligen Zielgruppen.",
        answers: ["Der Performer ist dem Bereich Dominanz zugeordnet. Mögliche Eigenschaften sind: ehrgeizig, zielstrebig, statusorientiert.", "Der Harmoniser ist dem Bereich Balance zugeordnet. Mögliche Eigenschaften sind: familien- und sozialorientiert, herzlich, engagiert."],
        correct: ["Der Performer ist dem Bereich Dominanz zugeordnet. Mögliche Eigenschaften sind: ehrgeizig, zielstrebig, statusorientiert.", "Der Harmoniser ist dem Bereich Balance zugeordnet. Mögliche Eigenschaften sind: familien- und sozialorientiert, herzlich, engagiert."]
    },
    { // 154
        name: "Quiz LF C.3 Frage 05",
        question: "Welche Informationen sollte eine Persona enthalten? (MC)",
        answers: ["Name", "Foto oder Bild", "Kauf- und Konsumverhalten", "Bevorzugte Marken"],
        correct: ["Name", "Foto oder Bild", "Kauf- und Konsumverhalten", "Bevorzugte Marken"]
    },
    { // 155
        name: "Quiz LF C.4 Frage 01",
        question: "Was gilt bei der Auswahl von passenden Social Networks? (SC)",
        answers: ["Wir sollten auf allen Channels aktiv sein.", "Maximal ein bis zwei Networks sind genug.", "Wir sollten dort aktiv werden, wo auch die Zielgruppe aktiv ist.", "Social Networks sollten auch zum eigenen Nutzungsverhalten passen."],
        correct: ["Wir sollten dort aktiv werden, wo auch die Zielgruppe aktiv ist."]
    },
    { // 156
        name: "Quiz LF C.4 Frage 02",
        question: "Was gilt bei der Auswahl der richtigen Social Network? (SC)",
        answers: ["Je größer das Network, desto relevanter ist es.", "Wir berücksichtigen vor allem unsere eigenen Präferenzen.", "Auch sehr kleine Networks können ggf. relevant für uns und unsere Zielgruppe sein.", "Wir sollten immer so viele Networks wie möglich bespielen."],
        correct: ["Auch sehr kleine Networks können ggf. relevant für uns und unsere Zielgruppe sein."]
    },
    { // 157
        name: "Quiz LF C.4 Frage 03",
        question: "Wonach sollte man die sozialen Netzwerke für die eigenen Social-Media Aktivitäten idealerweise auswählen? (SC)",
        answers: ["Nach der bestmöglichen Reichweite des Netzwerkes.", "Nach dem POST-Modell.", "Nach den Vorlieben der Zielgruppe."],
        correct: ["Nach den Vorlieben der Zielgruppe."]
    },
    { // 158
        name: "Quiz LF C.5 Frage 01",
        question: "Was sind gängige externe Ressourcen, die es zu beachten gilt? (MP)",
        answers: ["Texterinnen und Texter", "Supply Chain Managerinnen und Manager", "Fans sowie Followerinnen und Follower", "Influencerinnen und Influencer"],
        correct: ["Texterinnen und Texter", "Influencerinnen und Influencer"]
    },
    { // 159
        name: "Quiz LF D.1 Frage 01",
        question: "Welche Aussagen in Bezug auf guten Content sind korrekt? (MPC)",
        answers: ["Qualität sollte dabei immer vor Quantität stehen.", "Es sollte immer einen Mehrwert für die Userin oder den User geben.", "Content sollte mit mindestens einem konkreten Ziel verknüpft sein.", "Content soll ausschließlich informieren."],
        correct: ["Qualität sollte dabei immer vor Quantität stehen.", "Es sollte immer einen Mehrwert für die Userin oder den User geben.", "Content sollte mit mindestens einem konkreten Ziel verknüpft sein."]
    },
    { // 160
        name: "Quiz LF D.1 Frage 02",
        question: "Was soll ein „Call to Action“ bewirken? (SC)",
        answers: ["Mehr Ideen für die Redaktionsplanung.", "Eine Interaktion seitens der Userinnen und User.", "Effektiveres Ausspielen von Beiträgen.", "Erhöhte Werbeausgaben."],
        correct: ["Eine Interaktion seitens der Userinnen und User."]
    },
    { // 161
        name: "Quiz LF D.1 Frage 03",
        question: "Was ist beim Einsatz von Videoformaten generell zu beachten? (MPC)",
        answers: ["Die richtige Bild-/ Videogröße.", "Untertitel und Barrierefreiheit.", "Die maximale Länge von einer Minute.", "Die minimale Länge von zehn Sekunden."],
        correct: ["Die richtige Bild-/ Videogröße.", "Untertitel und Barrierefreiheit."]
    },
    { // 162
        name: "Quiz LF D.1 Frage 04",
        question: "Was zeichnet User Generated Content (UGC) aus? (MPC)",
        answers: ["Hohe Authentizität und Ehrlichkeit.", "Unterstützt unsere SEO-Aktivitäten.", "Mit hohem Aufwand für uns verbunden.", "Sollte nur im Rahmen von Werbeanzeigen verwendet werden."],
        correct: ["Hohe Authentizität und Ehrlichkeit.", "Unterstützt unsere SEO-Aktivitäten."]
    },
    { // 163
        name: "Quiz LF D.1 Frage 05",
        question: "Was ist mit User Generated Content gemeint? (SC)",
        answers: ["Content, der jeweils einer User-Gruppe zuzuordnen ist.", "Inhalte, die wir der Userin oder dem User bereitstellen.", "Eine besondere Form von vordergründigem Content.", "Content, der von Userin oder User erstellt wird."],
        correct: ["Content, der von Userin oder User erstellt wird."]
    },
    { // 164
        name: "Quiz LF D.1 Frage 06",
        question: "Was ist A/B-Testing? (SC)",
        answers: ["Eine Methode, um verschiedene Varianten von Inhalten zu vergleichen und die wirkungsvollste Option zu identifizieren.", "Eine Methode, um relevante Kennzahlen und KPIs zu identifizieren."],
        correct: ["Eine Methode, um verschiedene Varianten von Inhalten zu vergleichen und die wirkungsvollste Option zu identifizieren."]
    },
    { // 165
        name: "Quiz LF D.1 Frage 07",
        question: "Was ist Content Curation? (SC)",
        answers: ["Das Sammeln und Aufbereiten von Content.", "Das reine Reposten bzw. Teilen von Beiträgen.", "Das Generieren von eigenen Inhalten.", "Das Aufbauen eines Content-Pools."],
        correct: ["Das Sammeln und Aufbereiten von Content."]
    },
    { // 166
        name: "Quiz LF D.1 Frage 08",
        question: "Was ist bei der Nutzung von KI bei der Content Creation zu beachten? (MPC)",
        answers: ["Geltende Datenschutzrichtlinien sind zu beachten.", "Verluste des Kundenvertrauens sind möglich.", "Es gilt kein Urheberrecht.", "Falschaussagen seitens der Kl sind quasi ausgeschlossen."],
        correct: ["Geltende Datenschutzrichtlinien sind zu beachten.", "Verluste des Kundenvertrauens sind möglich."]
    },
    { // 167
        name: "Quiz LF D.1 Frage 09",
        question: "Was soll mit der Aussage „Content is King“ ausgedrückt werden? (SC)",
        answers: ["Gute Inhalte sind die Basis für alle Online-Marketing-Maßnahmen.", "Inhalte müssen einen sehr hohen Wertbeitrag für den Umsatz eines Unternehmens bringen."],
        correct: ["Gute Inhalte sind die Basis für alle Online-Marketing-Maßnahmen."]
    },
    { // 168
        name: "Quiz LF D.2 Frage 01",
        question: "Was ist ein CTA und was soll er bewirken?",
        answers: ["Ein Call to Action (CTA) ist eine Aufforderung, die das Publikum zu einer bestimmten Handlung bewegen soll.", "Ein CTA ist entscheidend, um die Interaktion zu fördern und die Nutzer durch ihre Customer Journey zu leiten.", "Ein effektiver CTA kann die Engagement-Rate steigern und zu höheren Konversionen führen."],
        correct: ["Ein Call to Action (CTA) ist eine Aufforderung, die das Publikum zu einer bestimmten Handlung bewegen soll."]
    },
    { // 169
        name: "Quiz LF D.2 Frage 02",
        question: "Welche sozialen Netzwerke bieten kein Livestreaming an?",
        answers: ["LinkedIn", "Pinterest", "Facebook", "Instagram", "TikTok", "X"],
        correct: ["LinkedIn", "Pinterest"]
    },
    { // 170
        name: "Quiz LF D.2 Frage 03",
        question: "Was ist UGC und warum ist er besonders interessant für Unternehmen?",
        answers: ["User-Generated Content (UGC) sind Inhalte, die von Nutzern erstellt und geteilt werden.", "UGC ist für Unternehmen besonders interessant, weil er Authentizität und Vertrauen schafft.", "UGC ist kosteneffektiv, da er oft kostenlos erstellt wird.", "Er kann sich ebenfalls positiv auf SEO-Aktivitäten auswirken."],
        correct: ["User-Generated Content (UGC) sind Inhalte, die von Nutzern erstellt und geteilt werden.", "UGC ist für Unternehmen besonders interessant, weil er Authentizität und Vertrauen schafft.", "UGC ist kosteneffektiv, da er oft kostenlos erstellt wird."]
    },
    { // 171
        name: "Quiz LF D.2 Frage 04",
        question: "Was ist ein A/B Test?",
        answers: ["Ein A/B-Test ist eine Methode, bei der zwei Versionen eines digitalen Inhalts verglichen werden, um herauszufinden, welche Version besser abschneidet.", "Im Kontext des Social Media Marketings wird das Publikum in zwei Gruppen aufgeteilt, wobei jede Gruppe eine unterschiedliche Variante des Inhalts sieht."],
        correct: ["Ein A/B-Test ist eine Methode, bei der zwei Versionen eines digitalen Inhalts verglichen werden, um herauszufinden, welche Version besser abschneidet."]
    },
    { // 172
        name: "Quiz LF D.2 Frage 05",
        question: "Was ist der Unterschied zwischen Content Recycling und Content Curation?",
        answers: ["Content Recycling bezieht sich auf die Wiederverwendung bereits veröffentlichter (eigener) Inhalte.", "Content Curation ist der Prozess, bei dem relevante und qualitativ hochwertige Inhalte von anderen Quellen ausgewählt und geteilt werden."],
        correct: ["Content Recycling bezieht sich auf die Wiederverwendung bereits veröffentlichter (eigener) Inhalte.", "Content Curation ist der Prozess, bei dem relevante und qualitativ hochwertige Inhalte von anderen Quellen ausgewählt und geteilt werden."]
    },
    { // 173
        name: "Quiz LF D.2 Frage 06",
        question: "Welche Hauptformate für Content gibt es?",
        answers: ["Video.", "Text.", "Audio.", "Bild."],
        correct: ["Video.", "Text.", "Audio.", "Bild."]
    },
    { // 174
        name: "Quiz LF E.1 Frage 01",
        question: "Was sollten Social-Media-Guidelines enthalten? (MPC)",
        answers: ["Unternehmenswerte, Unternehmenskultur.", "Budgetplanung für Social Media Ads.", "Inhalt und Form der Kommunikation.", "Rechtliche Hinweise."],
        correct: ["Unternehmenswerte, Unternehmenskultur.", "Inhalt und Form der Kommunikation.", "Rechtliche Hinweise."]
    },
    { // 175
        name: "Quiz LF E.1 Frage 02",
        question: "Welche Monetarisierungsoptionen bietet YouTube über das YouTube Studio? (MPC)",
        answers: ["Anzeigenumsatz.", "App-Entwicklung.", "Kanalmitgliedschaften."],
        correct: ["Anzeigenumsatz.", "Kanalmitgliedschaften."]
    },
    { // 176
        name: "Quiz LF E.1 Frage 03",
        question: "Warum sollten wir Feiertage und Thementage in unserem Redaktionsplan vermerken? (SC)",
        answers: ["Damit wir wissen, welche Tage postfrei bleiben.", "Es erleichtert die Urlaubsplanung.", "An Feiertagen ist das Schalten von Werbeanzeigen günstiger.", "Feiertage und Thementage bieten gute Ansätze für abwechslungsreichen und aktuellen Content."],
        correct: ["Feiertage und Thementage bieten gute Ansätze für abwechslungsreichen und aktuellen Content."]
    },
    { // 177
        name: "Quiz LF E.1 Frage 04",
        question: "Was ist mit C2C-Communitys gemeint? (SC)",
        answers: ["Company to Company, also Plattformen, auf denen Unternehmen mit anderen Unternehmen interagieren.", "Consumer-to-Consumer, also Plattformen, auf denen Kundinnen/Kunden miteinander interagieren, ohne dass ein Unternehmen als Mittler fungiert."],
        correct: ["Consumer-to-Consumer, also Plattformen, auf denen Kundinnen/Kunden miteinander interagieren, ohne dass ein Unternehmen als Mittler fungiert."]
    },
    { // 178
        name: "Quiz LF E.1 Frage 05",
        question: "Was sollte eine Netiquette enthalten? (MPC)",
        answers: ["Hinweise zum Schutz der Privatsphäre.", "Hinweise, in welcher Form Spam formuliert sein soll.", "Klare Richtlinien, die Mobbing und Belästigung verbieten.", "Verweise auf mögliche Sanktionen."],
        correct: ["Hinweise zum Schutz der Privatsphäre.", "Klare Richtlinien, die Mobbing und Belästigung verbieten.", "Verweise auf mögliche Sanktionen."]
    },
    { // 179
        name: "Quiz LF E.1 Frage 06",
        question: "Welche sozialen Netzwerke werden im Community-Service besonders gerne genutzt? (MPC)",
        answers: ["X (Twitter).", "Pinterest.", "WhatsApp.", "Tik Tok."],
        correct: ["X (Twitter).", "WhatsApp."]
    },
    { // 180
        name: "Quiz LF E.1 Frage 07",
        question: "Ordne die folgenden Aspekte eines Krisenkonzepts externen und internen Perspektiven zu?",
        answers: ["Interne Perspektive = Risikobewertung.", "Externe Perspektive = Markt- und Umfeldanalyse."],
        correct: ["Interne Perspektive = Risikobewertung.", "Externe Perspektive = Markt- und Umfeldanalyse."]
    },
    { // 181
        name: "Quiz LF E.1 Frage 08",
        question: "Wie kann man die optimalen Uhrzeiten für die Veröffentlichung von Beiträgen finden? (MC)",
        answers: ["Analyse von Insights der Plattformen selbst.", "Eigenes Austesten und Auswerten.", "Über Social-Media-Management-Tools.", "Über eine Google-Trend-Analyse."],
        correct: ["Analyse von Insights der Plattformen selbst.", "Eigenes Austesten und Auswerten.", "Über Social-Media-Management-Tools."]
    },
    { // 182
        name: "Quiz LF E.1 Frage 09",
        question: "Was ist das Hauptziel von Community-Engagement im Social-Media-Management? (SC)",
        answers: ["Die Erstellung möglichst vieler Werbeanzeigen.", "Die Reichweite rein organisch zu steigern.", "Die Community zu kostenpflichtigen Aktionen bewegen.", "Die aktive Beteiligung der Community fördern und erhalten."],
        correct: ["Die aktive Beteiligung der Community fördern und erhalten."]
    },
    { // 183
        name: "Quiz LF E.2 Frage 01",
        question: "Was sind Social Media Guidelines?",
        answers: ["Social Media Guidelines sind Regeln und Empfehlungen, die Unternehmen ihren Mitarbeitern geben, um ein angemessenes Verhalten in sozialen Medien zu fördern.", "Sie helfen dabei, die Markenreputation zu schützen und rechtliche Risiken zu minimieren.", "Die Richtlinien können für die berufliche und persönliche Nutzung gelten."],
        correct: ["Social Media Guidelines sind Regeln und Empfehlungen, die Unternehmen ihren Mitarbeitern geben, um ein angemessenes Verhalten in sozialen Medien zu fördern."]
    },
    { // 184
        name: "Quiz LF E.2 Frage 02",
        question: "Was ist eine Netiquette?",
        answers: ["Netiquette bezeichnet die Verhaltensregeln und Höflichkeitsstandards, die Nutzer beim Kommunizieren online einhalten sollten.", "Dazu gehört, andere Nutzer mit Respekt zu behandeln, beleidigende Sprache zu vermeiden und die Privatsphäre sowie Meinungen anderer zu respektieren."],
        correct: ["Netiquette bezeichnet die Verhaltensregeln und Höflichkeitsstandards, die Nutzer beim Kommunizieren online einhalten sollten."]
    },
    { // 185
        name: "Quiz LF E.2 Frage 03",
        question: "Was sollte ein Redaktionsplan beinhalten?",
        answers: ["Thema des Beitrags.", "Termin der Veröffentlichung.", "Aktueller Bearbeitungsstand.", "Format des Beitrags.", "Freigaben & Zuständigkeiten."],
        correct: ["Thema des Beitrags.", "Termin der Veröffentlichung.", "Aktueller Bearbeitungsstand.", "Format des Beitrags.", "Freigaben & Zuständigkeiten."]
    },
    { // 186
        name: "Quiz LF E.2 Frage 04",
        question: "Was sind Gründe, warum Kunden Communities verlassen?",
        answers: ["Tod.", "Umzug.", "Änderung der Lebensumstände.", "Fehlende Aufmerksamkeit.", "Preis- oder Qualitätsänderungen."],
        correct: ["Tod.", "Umzug.", "Änderung der Lebensumstände.", "Fehlende Aufmerksamkeit.", "Preis- oder Qualitätsänderungen."]
    },
    { // 187
        name: "Quiz LF E.2 Frage 05",
        question: "Wie finde ich die optimale Postingzeiten?",
        answers: ["Es ist wichtig, die Engagement-Muster der Zielgruppe zu analysieren.", "Plattformen wie Facebook, Instagram und Linkedin bieten Analyse-Tools, die zeigen, wann die Follower am aktivsten sind.", "Letztendlich hilft nur Testen und Auswerten der eigenen Zielgruppenaktivitäten."],
        correct: ["Es ist wichtig, die Engagement-Muster der Zielgruppe zu analysieren.", "Plattformen wie Facebook, Instagram und Linkedin bieten Analyse-Tools, die zeigen, wann die Follower am aktivsten sind.", "Letztendlich hilft nur Testen und Auswerten der eigenen Zielgruppenaktivitäten."]
    },
    { // 188
        name: "Quiz LF E.2 Frage 06",
        question: "Was ist eine C2C Community?",
        answers: ["Eine C2C-Community (Consumer-to-Consumer) ist ein Geschäftsmodell, das den direkten Austausch von Waren oder Dienstleistungen zwischen Privatpersonen fördert.", "In solchen Communities können Nutzer sowohl Käufer als auch Verkäufer sein."],
        correct: ["Eine C2C-Community (Consumer-to-Consumer) ist ein Geschäftsmodell, das den direkten Austausch von Waren oder Dienstleistungen zwischen Privatpersonen fördert."]
    },
    { // 189
        name: "Quiz LF F.1 Frage 01",
        question: "Was ist eine Lookalike Audience?",
        answers: ["„Statistische Zwillinge“ einer bestimmten Zielgruppe", "Eine Zielgruppe, die vor allem in Retargeting-Kampagnen genutzt wird"],
        correct: ["„Statistische Zwillinge“ einer bestimmten Zielgruppe"]
    },
    { // 190
        name: "Quiz LF F.1 Frage 02",
        question: "Was ist im Kontext der DSGVO mit dem Begriff \"Datenminimierung\" gemeint?",
        answers: ["Unternehmen sollen nur die Daten sammeln und speichern, die sie tatsächlich benötigen.", "Unternehmen sollen das Sammeln von Daten für die Nutzenden möglichst einfach gestalten"],
        correct: ["Unternehmen sollen nur die Daten sammeln und speichern, die sie tatsächlich benötigen."]
    },
    { // 191
        name: "Quiz LF F.1 Frage 03",
        question: "Was ist unter dem Begriff \"First Party-Daten\" zu verstehen?",
        answers: ["Aktuelle Daten, die vor allem über Pixel generiert werden", "Daten, die von den Nutzenden selbst bereitgestellt werden"],
        correct: ["Daten, die von den Nutzenden selbst bereitgestellt werden"]
    },
    { // 192
        name: "Quiz LF F.1 Frage 04",
        question: "Warum ist Pinterest gerade im E-Commerce ein interessantes Netzwerk?",
        answers: ["Pinterest bietet in Deutschland eine integrierte Zahlungs- und Versandabwicklung an.", "Pinterest hat von Natur aus eine starke Verbindung zu Websites und Onlineshops.", "Pinterest bietet einen eigenen Shop-Pixel.", "Pinterest spielt eine wichtige Rolle, da es Nutzenden in der Inspirations- und Planungsphase ermöglicht, Ideen effektiv zu sammeln und zu organisieren."],
        correct: ["Pinterest hat von Natur aus eine starke Verbindung zu Websites und Onlineshops.", "Pinterest spielt eine wichtige Rolle, da es Nutzenden in der Inspirations- und Planungsphase ermöglicht, Ideen effektiv zu sammeln und zu organisieren."]
    },
    { // 193
        name: "Quiz LF F.1 Frage 05",
        question: "Welche Gründe haben dazu geführt, dass die Effektivität von Social Media Ads in den letzten Jahren spürbar geringer geworden ist?",
        answers: ["Eine generelle Marktsättigung", "Datenschutzbestimmungen", "Mehr Wettbewerb in den Netzwerken", "Rückläufige Nutzerzahlen in vielen Netzwerken"],
        correct: ["Eine generelle Marktsättigung", "Datenschutzbestimmungen", "Mehr Wettbewerb in den Netzwerken"]
    },
    { // 194
        name: "Quiz LF F.2 Frage 01",
        question: "Welches soziale Netzwerk gilt auch als die zweitgrößte Suchmaschine?",
        answers: ["Pinterest", "YouTube", "Tik Tok"],
        correct: ["YouTube"]
    },
    { // 195
        name: "Quiz LF F.3 Frage 01",
        question: "Warum eignen sich Social Networks sehr gut, um Werbeanzeigen einzusetzen?",
        answers: ["Fokussierung auf reine Textanzeigen", "Kaum gesetzliche Regelungen und AGB", "Haben in der Regel hohe Reichweiten", "Genaues Targeting aufgrund von Nutzerdaten möglich"],
        correct: ["Haben in der Regel hohe Reichweiten", "Genaues Targeting aufgrund von Nutzerdaten möglich"]
    },
    { // 196
        name: "Quiz LF F.3 Frage 02",
        question: "Ordne die Begriffe korrekt ihrer Bedeutung im Marketing zu.",
        answers: ["Cross-Selling = Kundinnen und Kunden ergänzende Produkte zum ursprünglichen Kauf anbieten", "Upselling = Kundinnen und Kunden eine teurere Version eines Produkts anbieten"],
        correct: ["Cross-Selling = Kundinnen und Kunden ergänzende Produkte zum ursprünglichen Kauf anbieten", "Upselling = Kundinnen und Kunden eine teurere Version eines Produkts anbieten"]
    },
    { // 197
        name: "Quiz LF F.3 Frage 03",
        question: "Was ist eine \"Hook\" in Bezug auf den Einsatz von Creatives?",
        answers: ["Eine Hook ist ein Element in deinem Creative, das sofort Aufmerksamkeit erregt.", "Eine Hook schafft Wiedererkennungswert, also Farbe, Stil und Schriftart, die in einer Ad verwendet werden."],
        correct: ["Eine Hook ist ein Element in deinem Creative, das sofort Aufmerksamkeit erregt."]
    },
    { // 198
        name: "Quiz LF G.1 Frage 01",
        question: "Nach welchen drei grundlegenden Analyse-Ansätzen wird Social Media Analyse generell unterschieden?",
        answers: ["Social Media Analyse", "Social Media Monitoring", "Social Media Monitoring, Social Media Measurement, Social Media Analytics", "Social Listening"],
        correct: ["Social Media Monitoring", "Social Media Analytics", "Social Listening"]
    },
    { // 199
        name: "Quiz LF G.1 Frage 02",
        question: "Ordne die folgenden KPIs den entsprechenden Ebenen der Key Performance-Indicator-Pyramide zu.",
        answers: ["1. Ebene = Follower.", "2. Ebene = Share of Buzz.", "3. Ebene = Kundenzufriedenheit."],
        correct: ["1. Ebene = Follower.", "2. Ebene = Share of Buzz.", "3. Ebene = Kundenzufriedenheit."]
    },
    { // 200
        name: "Quiz LF G.1 Frage 03",
        question: "Warum ist beim Social Listening eine gründliche Keyword-Analyse entscheidend? (MPC)",
        answers: ["Nutzende können ganz unterschiedliche Wörter verwenden, wenn sie über unser Unternehmen schreiben.", "Wir können damit die Auffindbarkeit unserer Beiträge deutlich erhöhen.", "Mit einer komplexen Suchanfrage und entsprechenden Keywords können wir die Ergebnisse verfeinern."],
        correct: ["Nutzende können ganz unterschiedliche Wörter verwenden, wenn sie über unser Unternehmen schreiben.", "Mit einer komplexen Suchanfrage und entsprechenden Keywords können wir die Ergebnisse verfeinern."]
    },
    { // 201
        name: "Quiz LF G.1 Frage 04",
        question: "Was wird im Rahmen einer Sentiment-Analyse analysiert? (SC)",
        answers: ["Es geht dabei vorrangig um das Verständnis spezifischer Themen oder Diskussionen in sozialen Medien.", "Es werden Stimmungen und Meinungen in sozialen Medien analysiert, um ein allgemeines Stimmungsbild bezüglich eines Produkts, einer Marke oder eines Themas zu erhalten."],
        correct: ["Es werden Stimmungen und Meinungen in sozialen Medien analysiert, um ein allgemeines Stimmungsbild bezüglich eines Produkts, einer Marke oder eines Themas zu erhalten."]
    },
    { // 202
        name: "Quiz LF G.2 Frage 01",
        question: "Was wird beim Social Media Monitoring getan?",
        answers: ["Die Partner unserer eigenen Beiträge", "Die Entwicklung unserer Fan-/Follower-Anzahl", "Das Sammeln und Aufbereiten von für unsere Marke/ unser Unternehmen o. Ä. relevanten Beiträgen", "Die Performance von Werbeanzeigen"],
        correct: ["Das Sammeln und Aufbereiten von für unsere Marke/ unser Unternehmen o. Ä. relevanten Beiträgen"]
    },
    { // 203
        name: "Quiz LF G.2 Frage 03",
        question: "Was ist mit Social-Listening gemeint?",
        answers: ["Im Social-Listening versucht man, direkten Dialog/ Einblick in die Zielgruppe zu erhalten, um das \"Warum\" der Monitoring-Aktivitäten besser zu verstehen.", "Im Social-Listening konzentriert man sich auf die Performance der eigenen Social-Media-Aktivitäten."],
        correct: ["Im Social-Listening versucht man, direkten Dialog/ Einblick in die Zielgruppe zu erhalten, um das \"Warum\" der Monitoring-Aktivitäten besser zu verstehen."]
    },
    { // 204
        name: "Quiz LF G.2 Frage 04",
        question: "Ordne die folgenden Aussagen den beiden Bereichen \"Social Media Monitoring\" und \"Social Listening\" korrekt zu.",
        answers: ["Social Media Monitoring = Schaut zurück, Social Listening = Schaut in die Zukunft", "Social Media Monitoring = Betrachtet Details, Social Listening = Betrachtet das große Ganze"],
        correct: ["Social Media Monitoring = Schaut zurück, Social Listening = Schaut in die Zukunft", "Social Media Monitoring = Betrachtet Details, Social Listening = Betrachtet das große Ganze"]
    },
    { // 205
        name: "Quiz LF G.2 Frage 05",
        question: "Welche kostenlosen Tools von Google können für die Durchführung von Social Media Monitoring genutzt werden?",
        answers: ["Google Alerts", "Google Trends"],
        correct: ["Google Alerts", "Google Trends"]
    },
    { // 206
        name: "Quiz LF G.2 Frage 06",
        question: "Was sind die Grenzen einer Sentiment-Analyse?",
        answers: ["Es geht dabei vorrangig um die Verständlichkeit einzelner Themen oder Diskussionen in sozialen Medien.", "Werden Stimmungen und Meinungen in sozialen Medien analysiert, um ein allgemeines Stimmungsbild bezüglich eines Themas, einer Marke, eines Services etc. zu erhalten."],
        correct: ["Werden Stimmungen und Meinungen in sozialen Medien analysiert, um ein allgemeines Stimmungsbild bezüglich eines Themas, einer Marke, eines Services etc. zu erhalten."]
    },
    { // 207
        name: "Quiz LF G.2 Frage 07",
        question: "Wofür werden Alert-Services wie etwa Google Alerts im Social Media Monitoring eingesetzt?",
        answers: ["Alert-Services sind hilfreich, um aktuelle Ereignisse und Ad-hoc-Beiträge zu unserem Monitor zu verfolgen.", "Alert-Services werden genutzt, um spezifische Beiträge zu unserem Thema oder Service zu finden."],
        correct: ["Alert-Services sind hilfreich, um aktuelle Ereignisse und Ad-hoc-Beiträge zu unserem Monitor zu verfolgen."]
    },
    { // 208
        name: "Quiz LF G.2 Frage 08",
        question: "Welche Möglichkeiten zur Rationalisierung stehen uns im Social Media Monitoring und Social-Listening zur Verfügung?",
        answers: ["Alert-Services", "Media Talk Library", "Nutzung und anderweitige Tocking Social-Media-Analytics-Tools"],
        correct: ["Alert-Services", "Nutzung und anderweitige Tocking Social-Media-Analytics-Tools"]
    },
    { // 209
        name: "Quiz LF G.2 Frage 9",
        question: "Welche Nachteile hat Social-Media-Monitoring- und Social-Listening-Tools in der Praxis?",
        answers: ["Sie sind als professionelle Tools kostenfrei", "Sie bieten nutzerorientierte Datenanalyse an.", "Sie sind auch mit wenig Know-how leicht zu bedienen.", "Sie haben teilweise sehr hohe Lizenzgebühren."],
        correct: ["Sie haben teilweise sehr hohe Lizenzgebühren."]
    },
    { // 210
        name: "Quiz LF G.2 Frage 10",
        question: "Worauf ist beim Social Listening eine gründliche Keyword-Analyse entscheidend?",
        answers: ["Keywords sind wichtige Instrumente, um zu erkennen, wann, wie über unser Unternehmen und unsere Dienstleistungen gesprochen wird, und um relevante Beiträge daraus abzuleiten.", "Keywords sind die Schlagwörter, die mit unseren Keywords in den relevanten Artikeln verknüpft werden."],
        correct: ["Keywords sind wichtige Instrumente, um zu erkennen, wann, wie über unser Unternehmen und unsere Dienstleistungen gesprochen wird, und um relevante Beiträge daraus abzuleiten."]
    },
    { // 211
        name: "Quiz LF G.2 Frage 11",
        question: "Wofür kann ein neues Set an Keywords den Suchfokus genutzt werden?",
        answers: ["Zur Neuausrichtung des Markenbildes oder zur Einführung neuer Produkte.", "Zur Berücksichtigung des Wettbewerbs mit den neuen Keywords.", "Als UKG-Verknüpfung."],
        correct: ["Zur Neuausrichtung des Markenbildes oder zur Einführung neuer Produkte."]
    },
    { // 212
        name: "Quiz LF G.2 Frage 12",
        question: "Mit welchem booleschen Operator können wir die Suchergebnisse auf ein bestimmtes und maximal 10 Wörter begrenzen?",
        answers: ["AROUND", "OR/10", "CJUS/10", "NEAR/10"],
        correct: ["NEAR/10"]
    },
    { // 213
        name: "Quiz LF G.2 Frage 13",
        question: "Was ist der größte Vorteil des Social-Media-Monitorings?",
        answers: ["Die gesammelten Daten von Personen, die zu einer bestimmten Marke oder einem bestimmten Thema Beiträge generiert haben.", "Die gesammelten Daten der Markenerwähnungen im Vergleich zu Wettbewerbern."],
        correct: ["Die gesammelten Daten der Markenerwähnungen im Vergleich zu Wettbewerbern."]
    },
    { // 214
        name: "Quiz LF G.2 Frage 14",
        question: "Worin besteht der größte Vorteil der Markenwertberechnungen im Vergleich zu Wettbewerbsanalysen?",
        answers: ["Share of Voice", "Google Trends"],
        correct: ["Share of Voice"]
    },
    { // 215
        name: "Quiz LF G.2 Frage 15",
        question: "Welche Tool-Anbieter von Newslettern gibt es, um die Informationen an die einzelnen Fachabteilungen zu steuern?",
        answers: ["Talkwalker free Search", "Google Trends", "Meltwater"],
        correct: ["Meltwater"]
    },
    { // 216
        name: "Quiz LF G.2 Frage 16",
        question: "Welche Aussage in Bezug auf qualitative und quantitative Beiträge in sozialen Medien ist am Ehesten korrekt?",
        answers: ["Zur besseren Einordnung ist es oft entscheidend, Verhältnisse der Kennzahlen und nicht nur absolute Zahlen zu betrachten.", "Qualitative Kennzahlen sind zu bevorzugen."],
        correct: ["Zur besseren Einordnung ist es oft entscheidend, Verhältnisse der Kennzahlen und nicht nur absolute Zahlen zu betrachten."]
    },
    { // 217
        name: "Quiz LF G.2 Frage 17",
        question: "Welche Vorteile bietet der Ansatz des Social Media Monitorings für das gesamte Unternehmen?",
        answers: ["Datensammlung", "Integration in bestehende Systeme", "Fokus auf neue Zielgruppen."],
        correct: ["Datensammlung", "Integration in bestehende Systeme"]
    },
    { // 218
        name: "Quiz LF G.2 Frage 18",
        question: "Wie oft sollte die Erfolgskontrolle der eigenen Maßnahmen idealerweise erfolgen? (SC)",
        answers: ["Mindestens einmal täglich.", "Mindestens einmal monatlich.", "Lediglich im Rahmen einer Strategieentwicklung.", "Maximal einmal im Jahr."],
        correct: ["Mindestens einmal monatlich."]
    },
    { // 219
        name: "Quiz LF G.2 Frage 19",
        question: "Was sagt ein ROI mit einem Faktor von 0,8 aus? (SC)",
        answers: ["Dass die Investitionen in eine Kampagne mehr Kosten verursacht haben, als sie an Gewinn gebracht haben.", "Dass die Investitionen in eine Kampagne mehr Gewinn gebracht haben, als sie Kosten verursacht haben."],
        correct: ["Dass die Investitionen in eine Kampagne mehr Kosten verursacht haben, als sie an Gewinn gebracht haben."]
    },
    { // 220
        name: "Quiz LF G.2 Frage 20",
        question: "Was ist mit dem Begriff „Learning-Aspekt“ in Bezug auf Social Media Analytics gemeint? (SC)",
        answers: ["Mit jeder Analyse kann sich der Algorithmus besser auf unsere Zielgruppe und unser Vorhaben einstellen.", "Man sollte im Rahmen einer Analyse immer aus den Ergebnissen lernen und Erkenntnisse zur Optimierung zukünftiger Maßnahmen nutzen."],
        correct: ["Man sollte im Rahmen einer Analyse immer aus den Ergebnissen lernen und Erkenntnisse zur Optimierung zukünftiger Maßnahmen nutzen."]
    },
    { // 221
        name: "Quiz LF G.2 Frage 21",
        question: "Was gibt die Bounce Rate im Kontext von Web Analytics an? (SC)",
        answers: ["Den Anteil der Nutzenden, die das Webtracking abgelehnt haben.", "Den Anteil der Besuchenden, die die Website nach kurzer Zeit wieder verlassen haben."],
        correct: ["Den Anteil der Besuchenden, die die Website nach kurzer Zeit wieder verlassen haben."]
    },
    { // 222
        name: "Quiz LF G.2 Frage 22",
        question: "Welcher KPI gibt an, wie viele Nutzende nach dem Klicken auf einen Link eine gewünschte Aktion, wie einen Kauf, durchgeführt haben? (SC)",
        answers: ["Sentiment Rate.", "Interaktionsrate.", "Conversion Rate."],
        correct: ["Conversion Rate."]
    },
    { // 223
        name: "Quiz LF G.2 Frage 23",
        question: "Was ist beim Einsatz des Social Media Tools Later zu beachten? (MPC)",
        answers: ["Es ist nicht DSGVO-konform.", "Es bietet neben einem Analytics-Tool auch ein Planungstool an.", "Es unterstützt lediglich Instagram."],
        correct: ["Es ist nicht DSGVO-konform.", "Es bietet neben einem Analytics-Tool auch ein Planungstool an."]
    },
    { // 224
        name: "Quiz LF G.3 Frage 01",
        question: "Wie viele Suchbegriffe (als Operatoren, bei der wir „finden“) unter Berücksichtigung boolescher Operatoren können im „Kundenmonitor“ verbunden werden?",
        answers: ["bei den Operatoren AND gibt es keine Beschränkungen", "bei dem Operator (OR) Kundenmonitor"],
        correct: ["bei den Operatoren AND gibt es keine Beschränkungen"]
    },
    { // 225
        name: "Quiz LF G.3 Frage 02",
        question: "Was wird bei der Social Media Analytics betrachtet?",
        answers: ["Die Reichweite unserer Beiträge", "Im Social-Listening versucht man, direkten Dialog/ Einblick in die Zielgruppe zu erhalten, um das \"Warum\" der Monitoring-Aktivitäten besser zu verstehen.", "Metriken in Euro", "Die Interaktionsrate unserer Beiträge"],
        correct: ["Die Reichweite unserer Beiträge", "Die Interaktionsrate unserer Beiträge"]
    },
    { // 226
        name: "Quiz LF G.3 Frage 03",
        question: "Was ist die Grundvoraussetzung dafür, dass wir Instagram Insights nutzen dürfen?",
        answers: ["Die Umwandlung in ein privates Profil", "Die Verknüpfung mit einem Facebook-Konto", "Die Verifizierung des Profils", "Die Umwandlung in ein Unternehmensprofil"],
        correct: ["Die Umwandlung in ein Unternehmensprofil"]
    },
    { // 227
        name: "Quiz LF A.1 Frage 01",
        question: "Was beinhaltet die Impressumspflicht?",
        answers: ["Name und Anschrift des Diensteanbieters.", "Kontaktinformationen, einschließlich einer Telefonnummer und E-Mail-Adresse.", "Angaben zum Registereintrag bei juristischen Personen.", "Rechtsform des Unternehmens.", "Umsatzsteuer-Identifikationsnummer, wenn sie auf Antrag erteilt wurde.", "Zusätzliche Informationen für bestimmte Berufe."],
        correct: ["Name und Anschrift des Diensteanbieters.", "Kontaktinformationen, einschließlich einer Telefonnummer und E-Mail-Adresse.", "Angaben zum Registereintrag bei juristischen Personen.", "Rechtsform des Unternehmens.", "Umsatzsteuer-Identifikationsnummer, wenn sie auf Antrag erteilt wurde.", "Zusätzliche Informationen für bestimmte Berufe."]
    },
    { // 228
        name: "Quiz LF A.1 Frage 02",
        question: "Was ist ein Supply Chain Manager?",
        answers: ["Ein Supply Chain Manager ist ein Fachmann, der für die Planung, Ausführung und Überwachung aller Aktivitäten innerhalb der Lieferkette eines Unternehmens verantwortlich ist.", "Dies umfasst die Beschaffung von Rohmaterialien, die Produktion, die Lagerung und die Distribution von Produkten bis hin zur Auslieferung an den Endkunden."],
        correct: ["Ein Supply Chain Manager ist ein Fachmann, der für die Planung, Ausführung und Überwachung aller Aktivitäten innerhalb der Lieferkette eines Unternehmens verantwortlich ist.", "Dies umfasst die Beschaffung von Rohmaterialien, die Produktion, die Lagerung und die Distribution von Produkten bis hin zur Auslieferung an den Endkunden."]
    },
    { // 229
        name: "Quiz LF A.1 Frage 03",
        question: "Was ist Content Curation?",
        answers: ["Content Curation bezeichnet den Prozess des Sammelns, Auswählens und Teilens von relevanten Inhalten aus verschiedenen Quellen im Social Media Marketing.", "Diese Strategie hilft Marken, ihre Online-Präsenz zu stärken und Autorität aufzubauen, ohne ständig neue Inhalte erstellen zu müssen."],
        correct: ["Content Curation bezeichnet den Prozess des Sammelns, Auswählens und Teilens von relevanten Inhalten aus verschiedenen Quellen im Social Media Marketing."]
    },
    { // 230
        name: "Quiz LF A.1 Frage 04",
        question: "Was ist der Unterschied zwischen Cross- und Upselling?",
        answers: ["Cross-Selling: Bietet zusätzliche Produkte oder Dienstleistungen an, die das ursprüngliche Produkt ergänzen.", "Upselling: Bewegt Kunden zu einem teureren oder höherwertigen Produkt."],
        correct: ["Cross-Selling: Bietet zusätzliche Produkte oder Dienstleistungen an, die das ursprüngliche Produkt ergänzen.", "Upselling: Bewegt Kunden zu einem teureren oder höherwertigen Produkt."]
    },
    { // 231
        name: "Quiz LF A.1 Frage 05",
        question: "Was sind First Party Daten?",
        answers: ["First Party Daten sind Informationen, die ein Unternehmen direkt von seinen Kunden oder Zielgruppen über eigene Kanäle sammelt.", "Sie entstehen durch Interaktionen wie Website-Besuche, Käufe, Umfragen und andere direkte Engagements.", "Da sie direkt vom Nutzer stammen, gelten sie als besonders wertvoll und zuverlässig."],
        correct: ["First Party Daten sind Informationen, die ein Unternehmen direkt von seinen Kunden oder Zielgruppen über eigene Kanäle sammelt."]
    },
    { // 232
        name: "Quiz LF A.1 Frage 06",
        question: "Wie viele Menschen erschaffen nach der 90-9-1 Regel aktiv Content in den Sozialen Medien?",
        answers: ["90% der Nutzer sind \"Lurker\", die Inhalte konsumieren, ohne aktiv zu interagieren.", "9% der Nutzer sind aktive Teilnehmer, die kommentieren, aber keine eigenen Inhalte erstellen.", "1% der Nutzer sind Inhaltsersteller, die die Mehrheit der Inhalte produzieren."],
        correct: ["1% der Nutzer sind Inhaltsersteller, die die Mehrheit der Inhalte produzieren."]
    },
    { // 233
        name: "Quiz LF A.1 Frage 07",
        question: "Wie kann man auf Youtube Geld verdienen?",
        answers: ["Monetarisierung durch Werbung (Anzeigenschaltung).", "Sponsoren / Kooperationspartner.", "Bezahlte Kanalmitgliedschaften."],
        correct: ["Monetarisierung durch Werbung (Anzeigenschaltung).", "Sponsoren / Kooperationspartner.", "Bezahlte Kanalmitgliedschaften."]
    },
    { // 234
        name: "Quiz LF A1 Frage 08",
        question: "Welcher Kanal ist in den meisten Fällen nach wie vor das Herzstück einer Online-Marketing-Strategie? (SC)",
        answers: ["Website", "X (Twitter)", "Facebook", "TV"],
        correct: ["Website"]
    },
    { // 235
        name: "Quiz LF A1 Frage 09",
        question: "Wie verhält es sich mit der Kennzeichnungspflicht von Werbeinhalten? (SC)",
        answers: ["Werbe-Posts von Influencerinnen/Influencern und Unternehmen sind von einer genauen Kennzeichnungspflicht der Werbung befreit, wenn die Accounts durch den blauen Haken als kommerziell gekennzeichnet sind.", "Die Kennzeichnungspflicht gilt nur für Marketing-Unternehmen, nicht aber für Influencerinnen/Influencer oder Affiliate-Partnerinnen/-partner.", "Online-Marketer sowie Influencerinnen/Influencer müssen kommerzielle Inhalte auf Social Media klar als Werbung kennzeichnen."],
        correct: ["Online-Marketer sowie Influencerinnen/Influencer müssen kommerzielle Inhalte auf Social Media klar als Werbung kennzeichnen."]
    },
    { // 236
        name: "Quiz LF A1 Frage 10",
        question: "Was bedeutet das Akronym SMART? (SC)",
        answers: ["Spezifisch, messbar, ambitioniert & attraktiv, realistisch, terminiert", "Spezifisch, messbar, ambitioniert & attraktiv, reaktionär, terminiert"],
        correct: ["Spezifisch, messbar, ambitioniert & attraktiv, realistisch, terminiert"]
    }
];
