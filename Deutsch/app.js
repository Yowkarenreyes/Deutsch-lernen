// ====== DATA ======

const SCHEDULE = [
  { week:1, phase:0, theme:'Alphabet, pronunciation & greetings', days:[
    {name:'Monday',tasks:['Learn the German alphabet (A–Z + ä ö ü ß)','Practice saying each letter out loud 3x','Learn: Hallo, Guten Morgen, Guten Tag, Tschüss'],tags:['pronun','vocab']},
    {name:'Tuesday',tasks:['Learn numbers 1–20','Practice counting out loud','Memorize: Wie heißen Sie? / Ich heiße...'],tags:['vocab','speaking']},
    {name:'Wednesday',tasks:['Learn numbers 21–100','Drill: say your phone number in German','Write 5 sentences: Ich heiße ___, ich bin ___ Jahre alt'],tags:['vocab','writing']},
    {name:'Thursday',tasks:['Learn W-questions: Wie, Was, Wo, Woher, Wann','Practice: Woher kommen Sie? / Ich komme aus...','Learn the days of the week (Montag–Sonntag)'],tags:['grammar','speaking']},
    {name:'Friday',tasks:['Learn months (Januar–Dezember)','Write your birthday in German','Review everything from Mon–Thu with flashcards'],tags:['vocab','review']},
    {name:'Saturday',tasks:['Mini speaking: introduce yourself in 5 sentences','Record yourself and listen back','Write your self-introduction on paper'],tags:['speaking','writing']},
  ]},
  { week:2, phase:0, theme:'Articles (der/die/das) + verb sein', days:[
    {name:'Monday',tasks:['Learn der / die / das + ein / eine / ein','Memorize 10 nouns WITH their article','Rule: always learn article + noun together'],tags:['grammar']},
    {name:'Tuesday',tasks:['Conjugate sein: ich bin, du bist, er/sie/es ist...','Write 6 sentences using sein','Learn: Ich bin Filipino / Student / Krankenpfleger'],tags:['grammar','writing']},
    {name:'Wednesday',tasks:['Learn 15 family vocab with articles','Practice: Das ist mein Vater. / Das ist meine Mutter.','Quiz yourself on articles of new words'],tags:['vocab','grammar']},
    {name:'Thursday',tasks:['Learn adjectives: groß, klein, alt, jung, schön, nett','Write 5 sentences describing family members','Practice: Mein Vater ist groß und nett.'],tags:['vocab','writing']},
    {name:'Friday',tasks:['Review all vocab from this week using flashcards','Conjugation drill: sein with all pronouns (timed)','Write a short paragraph about your family'],tags:['review','writing']},
    {name:'Saturday',tasks:['Speaking: describe your family out loud','Read your paragraph aloud — check pronunciation','Reward yourself — Magaling!'],tags:['speaking']},
  ]},
  { week:3, phase:0, theme:'Verb haben + present tense verbs', days:[
    {name:'Monday',tasks:['Conjugate haben: ich habe, du hast, er hat...','Write 6 sentences using haben','Learn: Ich habe einen Bruder / ein Auto / eine Katze'],tags:['grammar','writing']},
    {name:'Tuesday',tasks:['Learn regular verb endings: -e, -st, -t, -en, -t, -en','Conjugate: spielen, wohnen, lernen, arbeiten','Write 3 sentences per verb'],tags:['grammar']},
    {name:'Wednesday',tasks:['Learn verbs: kommen, gehen, kaufen, trinken, essen','Practice conjugating each in all 6 pronouns','Write 1 sentence per verb about yourself'],tags:['vocab','grammar']},
    {name:'Thursday',tasks:['Learn places: das Haus, die Schule, der Supermarkt, der Bahnhof','Sentence: Ich gehe in die Schule. / Ich wohne in...','Practice: Wo wohnen Sie? / Ich wohne in Quezon City.'],tags:['vocab','speaking']},
    {name:'Friday',tasks:['Vocab review: 30 words from weeks 1–3','Grammar review: articles + sein + haben','Write 5 sentences combining everything'],tags:['review','writing']},
    {name:'Saturday',tasks:['Speaking: describe your daily routine in present tense','Include: Ich stehe um 7 Uhr auf. Ich trinke Kaffee.','Write it out then say it aloud 3 times'],tags:['speaking','writing']},
  ]},
  { week:4, phase:0, theme:'A1 vocabulary deep dive + sentence building', days:[
    {name:'Monday',tasks:['Learn food & drink vocab (20 words with articles)','Practice: Ich esse ___ / Ich trinke ___','Learn: im Restaurant bestellen (ordering food)'],tags:['vocab']},
    {name:'Tuesday',tasks:['Learn telling time: Es ist 3 Uhr / halb vier / Viertel nach zwei','Practice: Wann essen Sie? / Um wie viel Uhr...?','Write 5 sentences about your schedule with times'],tags:['vocab','writing']},
    {name:'Wednesday',tasks:['Learn colors and clothing vocab','Sentence: Ich trage ein blaues Hemd.','Describe what you are wearing right now in German'],tags:['vocab','speaking']},
    {name:'Thursday',tasks:['Learn weather: Es ist heiß / kalt / regnerisch','Practice: Wie ist das Wetter heute?','Learn seasons: Frühling, Sommer, Herbst, Winter'],tags:['vocab']},
    {name:'Friday',tasks:['A1 writing: fill in a personal form (Name, Alter, Herkunft)','Write a 5-sentence self-introduction message','Check your spelling carefully'],tags:['writing']},
    {name:'Saturday',tasks:['Full A1 vocabulary review: 50 words from weeks 1–4','Speaking drill: answer 10 A1 questions out loud','Week 4 done! Kaya mo!'],tags:['review','speaking']},
  ]},
  { week:5, phase:1, theme:'Daily routine + separable verbs', days:[
    {name:'Monday',tasks:['Learn separable verbs: aufstehen, anrufen, einkaufen, fernsehen','Rule: prefix goes to END in a sentence','Write 5 sentences: Ich stehe um 6 Uhr auf.'],tags:['grammar','writing']},
    {name:'Tuesday',tasks:['Learn daily routine vocabulary (20 words)','Build a full daily routine paragraph (8+ sentences)','Include times: um 7 Uhr, um 12 Uhr, abends...'],tags:['vocab','writing']},
    {name:'Wednesday',tasks:['Learn negation: nicht and kein/keine/kein','Practice: Ich trinke keinen Kaffee. / Ich gehe nicht.','Write 5 negative sentences about yourself'],tags:['grammar']},
    {name:'Thursday',tasks:['Learn question word order in questions','Practice Yes/No questions: Trinken Sie Tee?','W-questions: Wo arbeiten Sie? Was essen Sie gern?'],tags:['grammar','speaking']},
    {name:'Friday',tasks:['Review separable verbs + negation','Write a short diary: Was machen Sie heute?','5 sentences minimum'],tags:['writing','review']},
    {name:'Saturday',tasks:['Speaking: describe your full day from waking to sleeping','Use at least 3 separable verbs','Time yourself — aim for 1 minute of spoken German'],tags:['speaking']},
  ]},
  { week:6, phase:1, theme:'Accusative case + shopping', days:[
    {name:'Monday',tasks:['Learn accusative case: der → den (masculine changes)','Rule: only masculine changes in accusative','Memorize: ich sehe den Mann / die Frau / das Kind'],tags:['grammar']},
    {name:'Tuesday',tasks:['Learn shopping vocabulary (20 words: prices, items, Kasse)','Dialogue: Wie viel kostet das? / Das kostet 5 Euro.','Practice: Ich möchte ___ kaufen.'],tags:['vocab']},
    {name:'Wednesday',tasks:['Learn colours + clothing with accusative','Sentence: Ich kaufe einen roten Pullover.','Write 5 shopping sentences using accusative'],tags:['grammar','writing']},
    {name:'Thursday',tasks:['Learn: im Supermarkt dialogue','Role play: buying 5 items at a shop','Practice: Ich nehme das / Haben Sie...?'],tags:['speaking']},
    {name:'Friday',tasks:['Accusative drill: transform 10 nominative sentences','Review all shopping vocab','Write a short shopping list scene in German'],tags:['grammar','writing']},
    {name:'Saturday',tasks:['Speaking: act out a shopping conversation alone','Play both customer and shopkeeper','Write the dialogue out afterwards and check it'],tags:['speaking','writing']},
  ]},
  { week:7, phase:1, theme:'Hobbies, free time + gern', days:[
    {name:'Monday',tasks:['Learn hobbies: lesen, kochen, reisen, tanzen, schwimmen','Pattern: Ich ___ gern. (I like to ___)','Write 5 sentences about your hobbies'],tags:['vocab','writing']},
    {name:'Tuesday',tasks:['Learn: Ich spiele gern Gitarre / Ich sehe gern fern','Negation: Ich tanze nicht gern.','Ask and answer: Was machen Sie in der Freizeit?'],tags:['speaking']},
    {name:'Wednesday',tasks:['Learn sports vocab + nationalities','Practice: Ich komme aus den Philippinen. Ich bin Filipin/a.','Learn 10 country names in German'],tags:['vocab']},
    {name:'Thursday',tasks:['Learn how to make invitations: Möchten Sie...?','Practice: Möchten Sie ins Kino gehen? / Ja, gern!','Write a short invitation message to a friend'],tags:['writing','speaking']},
    {name:'Friday',tasks:['Review weeks 5–7 vocabulary (50 words flashcard drill)','Grammar review: accusative + separable verbs + negation','Write a paragraph about your hobbies and weekend'],tags:['review','writing']},
    {name:'Saturday',tasks:['Speaking: 2-minute talk about yourself, family and hobbies','This is your A1 speaking mock prep — take it seriously','Record and listen back to yourself'],tags:['speaking']},
  ]},
  { week:8, phase:1, theme:'A1 mock exam week', days:[
    {name:'Monday',tasks:['Full A1 Lesen (reading) practice test','Read short texts: signs, messages, ads','Check answers and review unknown words'],tags:['exam']},
    {name:'Tuesday',tasks:['Full A1 Hören (listening) practice','Use Goethe-Institut free sample materials','Write down what you understood — note gaps'],tags:['exam']},
    {name:'Wednesday',tasks:['Full A1 Schreiben (writing) practice','Task 1: fill in a form. Task 2: write a short message','Check grammar, spelling, and word order'],tags:['exam','writing']},
    {name:'Thursday',tasks:['Full A1 Sprechen (speaking) practice','Part 1: introduce yourself. Part 2: react to prompts','Record yourself and review'],tags:['exam','speaking']},
    {name:'Friday',tasks:['Review all errors from mock exam week','List words and grammar you got wrong','Study those gaps intensively'],tags:['review']},
    {name:'Saturday',tasks:['Confidence day: do only things you are good at','Re-read your self-introduction and all model texts','A1 prep done — Mabuhay!'],tags:['review']},
  ]},
  { week:9, phase:2, theme:'Perfekt — talking about the past', days:[
    {name:'Monday',tasks:['Learn Perfekt: haben/sein + past participle','Regular participles: ge___t (kaufen → gekauft)','Write 5 sentences about yesterday using Perfekt'],tags:['grammar','writing']},
    {name:'Tuesday',tasks:['Irregular participles: gegessen, getrunken, geschrieben, gesehen','Memorize 10 irregular verbs with their participles','Write 5 sentences using irregular Perfekt'],tags:['grammar']},
    {name:'Wednesday',tasks:['Movement verbs with sein: gehen, fahren, fliegen, kommen','Practice: Ich bin ins Kino gegangen.','Write 5 sentences using sein + participle'],tags:['grammar','writing']},
    {name:'Thursday',tasks:['Time expressions: gestern, letzte Woche, vor zwei Tagen','Write: Was haben Sie gestern gemacht? (6+ sentences)','Use a mix of haben and sein verbs'],tags:['vocab','writing']},
    {name:'Friday',tasks:['Perfekt drill: transform 15 present sentences to past','Review haben vs sein rule (movement = sein)','Quiz yourself on 10 irregular participles'],tags:['grammar','review']},
    {name:'Saturday',tasks:['Speaking: tell a story about your last weekend in German','Use Perfekt throughout — aim for 8+ sentences','Write it out first, then say it without notes'],tags:['speaking','writing']},
  ]},
  { week:10, phase:2, theme:'Modal verbs + future plans', days:[
    {name:'Monday',tasks:['Learn modals: können, müssen, wollen, dürfen, sollen','Rule: modal in position 2, main verb INFINITIVE at end','Write 1 sentence per modal verb about yourself'],tags:['grammar','writing']},
    {name:'Tuesday',tasks:['Practice all 6 modals conjugated (ich/du/er/wir/ihr/sie)','Phrases: Ich kann Deutsch sprechen. / Ich muss arbeiten.','Write a paragraph about plans using wollen'],tags:['grammar','writing']},
    {name:'Wednesday',tasks:['Future plans vocab: nächstes Jahr, bald, in der Zukunft','Practice: Ich will nach Deutschland fliegen.','Write 5 sentences about your future goals'],tags:['vocab','writing']},
    {name:'Thursday',tasks:['Health and body vocabulary (20 words)','Phrases: Ich habe Kopfschmerzen. / Mir geht es nicht gut.','Role play: visiting the doctor'],tags:['vocab','speaking']},
    {name:'Friday',tasks:['Modal verb drill: 10 sentence transformations','Example: Ich gehe → Ich muss gehen / Ich kann gehen','Review health vocabulary with flashcards'],tags:['grammar','review']},
    {name:'Saturday',tasks:['Speaking: explain why you cannot meet today','Ich kann nicht kommen, weil ich arbeiten muss.','Role play the doctor visit out loud'],tags:['speaking']},
  ]},
  { week:11, phase:2, theme:'Dative case + prepositions', days:[
    {name:'Monday',tasks:['Learn dative: dem (masc/neut) / der (fem)','Dative prepositions: mit, bei, nach, von, seit, aus, zu','Memorize the list: MIT-BEI-NACH-VON-SEIT-AUS-ZU'],tags:['grammar']},
    {name:'Tuesday',tasks:['Practice dative sentences: Ich fahre mit dem Bus.','Write 7 sentences — one per dative preposition','Focus on der → der and der → dem changes'],tags:['grammar','writing']},
    {name:'Wednesday',tasks:['Travel and transport vocabulary (20 words)','Combine with dative: Ich fahre mit dem Zug nach Berlin.','Learn: am Bahnhof, auf dem Flughafen, in der U-Bahn'],tags:['vocab','grammar']},
    {name:'Thursday',tasks:['Two-way prepositions: in, auf, an, neben, zwischen','Rule: location (dative) vs. movement (accusative)','Practice: Ich bin im Büro. / Ich gehe ins Büro.'],tags:['grammar']},
    {name:'Friday',tasks:['Dative drill: rewrite 10 sentences with correct forms','Preposition quiz: location or movement?','Review travel vocab with flashcards'],tags:['grammar','review']},
    {name:'Saturday',tasks:['Speaking: describe how you get to school or work','Use dative prepositions throughout','Write a short paragraph about your commute'],tags:['speaking','writing']},
  ]},
  { week:12, phase:2, theme:'Shopping, appointments + A2 vocabulary', days:[
    {name:'Monday',tasks:['Appointment phrases: Ich möchte einen Termin machen.','Wann haben Sie Zeit? / Passt Ihnen Dienstag um 10 Uhr?','Role play making an appointment by phone'],tags:['vocab','speaking']},
    {name:'Tuesday',tasks:['Work vocabulary: der Beruf, der Chef, die Pause, das Büro','Was sind Sie von Beruf? / Ich bin Krankenpfleger.','Write a short paragraph about your work or studies'],tags:['vocab','writing']},
    {name:'Wednesday',tasks:['A2 reading practice: read a short German text','Identify key words and meaning from context','Write 3 sentences summarizing what you read'],tags:['exam']},
    {name:'Thursday',tasks:['Directions: geradeaus, links, rechts, gegenüber','How do I get to...? / Gehen Sie geradeaus.','Draw a map and describe the route in German'],tags:['vocab','speaking']},
    {name:'Friday',tasks:['Review all A2 grammar: Perfekt, modals, dative','Vocabulary sprint: 40 A2 words in 20 minutes','Write a 10-sentence paragraph mixing all grammar'],tags:['review','writing']},
    {name:'Saturday',tasks:['Speaking: describe your ideal trip to Germany','Use Perfekt, modals, and dative prepositions','Aim for 10 sentences — record yourself'],tags:['speaking']},
  ]},
  { week:13, phase:3, theme:'Comparatives, superlatives + opinions', days:[
    {name:'Monday',tasks:['Comparatives: groß → größer, gut → besser, schnell → schneller','Pattern: ___ ist ___er als ___','Write 5 comparison sentences about your city vs another'],tags:['grammar','writing']},
    {name:'Tuesday',tasks:['Superlatives: am größten, am besten, am schnellsten','Manila ist die größte Stadt auf den Philippinen.','Write 5 superlative sentences about your life'],tags:['grammar','writing']},
    {name:'Wednesday',tasks:['Opinion phrases: Ich finde..., Ich denke..., Meiner Meinung nach...','Practice: Das gefällt mir (nicht). / Ich bin der Meinung, dass...','Give opinions on 5 different topics in German'],tags:['vocab','speaking']},
    {name:'Thursday',tasks:['A2 writing: formal email to a teacher (sick excuse)','Use correct opening: Sehr geehrte/r...','Correct closing: Mit freundlichen Grüßen'],tags:['writing']},
    {name:'Friday',tasks:['Comparatives drill: 10 adjectives to comparative and superlative','Review opinion phrases','Write a short text comparing two German cities'],tags:['grammar','review']},
    {name:'Saturday',tasks:['Speaking: compare life in Philippines vs Germany','Use comparatives, superlatives and opinion phrases','Aim for 2 minutes of continuous speech'],tags:['speaking']},
  ]},
  { week:14, phase:3, theme:'A2 writing mastery', days:[
    {name:'Monday',tasks:['A2 writing: invitation to your birthday party','Include: date, time, place, what to bring','Check grammar, articles and word order'],tags:['writing']},
    {name:'Tuesday',tasks:['A2 writing: reply to a job advertisement','Include: why you are interested, your experience','Use formal opening and closing correctly'],tags:['writing']},
    {name:'Wednesday',tasks:['Learn connectors: weil, aber, und, oder','Rule: weil sends the verb to the END','Write 5 sentences using weil'],tags:['grammar','writing']},
    {name:'Thursday',tasks:['A2 writing: describe your daily routine in past tense','Use Perfekt throughout: Gestern habe ich...','At least 8 sentences'],tags:['writing']},
    {name:'Friday',tasks:['Review all 4 writing tasks from this week','Fix errors, improve vocabulary variety','Memorize 5 useful connectors and phrases'],tags:['review','writing']},
    {name:'Saturday',tasks:['Speed writing: short message in 10 minutes','Topic: tell a friend about your last vacation','Time yourself — aim for 5+ complete sentences'],tags:['writing']},
  ]},
  { week:15, phase:3, theme:'A2 speaking mastery + listening', days:[
    {name:'Monday',tasks:['Speaking role play: at the doctor','Ich habe Kopfschmerzen seit drei Tagen. / Haben Sie Fieber?','Switch roles — practice both sides'],tags:['speaking']},
    {name:'Tuesday',tasks:['Speaking role play: at the train station','Buy a ticket, ask about platform and departure time','Einmal nach München, bitte. / Wann fährt der nächste Zug?'],tags:['speaking']},
    {name:'Wednesday',tasks:['A2 listening: listen to a German dialogue online','Goethe-Institut free A2 sample audio works well','Write 5 things you understood'],tags:['exam']},
    {name:'Thursday',tasks:['Speaking: making an appointment by phone','Guten Tag, ich möchte einen Termin machen.','Keep the conversation for at least 8 exchanges'],tags:['speaking']},
    {name:'Friday',tasks:['A2 listening: announcements and short messages','Practice catching names, times, places, numbers','Write a summary of what you heard'],tags:['exam','writing']},
    {name:'Saturday',tasks:['Full speaking mock: 5-minute unscripted conversation','Cover: who you are, routine, past events, future plans','Record and score yourself: fluency, grammar, vocab'],tags:['speaking']},
  ]},
  { week:16, phase:3, theme:'Final mock exams + exam day prep', days:[
    {name:'Monday',tasks:['Full A1 mock exam (all 4 skills: read, listen, write, speak)','Use official Goethe-Institut sample materials','Score yourself honestly — note remaining gaps'],tags:['exam']},
    {name:'Tuesday',tasks:['Full A2 mock exam (all 4 skills)','Time yourself strictly — exam conditions','Do not check answers until all 4 parts are done'],tags:['exam']},
    {name:'Wednesday',tasks:['Review ALL errors from both mock exams','Make final vocabulary list: words you still miss','Drill those words 20 times each'],tags:['review']},
    {name:'Thursday',tasks:['Light review only: read your model writing samples','Say your self-introduction 5 times out loud','Review your top 20 grammar rules — no new topics'],tags:['review','speaking']},
    {name:'Friday',tasks:['Rest your brain — do only fun German today','Watch a short German video or listen to German music','Light flashcard review: 20 minutes maximum'],tags:['review']},
    {name:'Saturday',tasks:['Prepare your documents and ID the night before','Sleep early. Eat a good breakfast.','You studied for 16 weeks — Kaya mo! Handa ka na!'],tags:['exam']},
  ]},
];

const VOCAB_DATA = [
  {cat:'Greetings',de:'Hallo',en:'Hello',fil:'Kumusta'},
  {cat:'Greetings',de:'Guten Morgen',en:'Good morning',fil:'Magandang umaga'},
  {cat:'Greetings',de:'Guten Tag',en:'Good day',fil:'Magandang araw'},
  {cat:'Greetings',de:'Tschüss',en:'Bye',fil:'Paalam'},
  {cat:'Greetings',de:'Danke',en:'Thank you',fil:'Salamat'},
  {cat:'Greetings',de:'Bitte',en:'Please / You\'re welcome',fil:'Pakiusap / Walang anuman'},
  {cat:'Greetings',de:'Entschuldigung',en:'Excuse me',fil:'Paumanhin'},
  {cat:'Greetings',de:'Wie geht\'s?',en:'How are you?',fil:'Kumusta ka?'},
  {cat:'Family',de:'die Mutter',en:'mother',fil:'Nanay / Inay'},
  {cat:'Family',de:'der Vater',en:'father',fil:'Tatay / Itay'},
  {cat:'Family',de:'die Schwester',en:'sister',fil:'Kapatid na babae'},
  {cat:'Family',de:'der Bruder',en:'brother',fil:'Kapatid na lalaki'},
  {cat:'Family',de:'die Großmutter',en:'grandmother',fil:'Lola'},
  {cat:'Family',de:'der Großvater',en:'grandfather',fil:'Lolo'},
  {cat:'Family',de:'das Kind',en:'child',fil:'Bata / Anak'},
  {cat:'Family',de:'der Mann',en:'husband / man',fil:'Asawang lalaki'},
  {cat:'Food',de:'das Brot',en:'bread',fil:'Tinapay'},
  {cat:'Food',de:'das Wasser',en:'water',fil:'Tubig'},
  {cat:'Food',de:'der Kaffee',en:'coffee',fil:'Kape'},
  {cat:'Food',de:'der Reis',en:'rice',fil:'Kanin / Bigas'},
  {cat:'Food',de:'das Fleisch',en:'meat',fil:'Karne'},
  {cat:'Food',de:'das Gemüse',en:'vegetables',fil:'Gulay'},
  {cat:'Food',de:'essen',en:'to eat',fil:'Kumain'},
  {cat:'Food',de:'trinken',en:'to drink',fil:'Uminom'},
  {cat:'Places',de:'das Haus',en:'house',fil:'Bahay'},
  {cat:'Places',de:'die Schule',en:'school',fil:'Paaralan'},
  {cat:'Places',de:'der Supermarkt',en:'supermarket',fil:'Supermarket'},
  {cat:'Places',de:'das Krankenhaus',en:'hospital',fil:'Ospital'},
  {cat:'Places',de:'der Bahnhof',en:'train station',fil:'Istasyon ng tren'},
  {cat:'Places',de:'die Kirche',en:'church',fil:'Simbahan'},
  {cat:'Shopping',de:'der Preis',en:'price',fil:'Presyo'},
  {cat:'Shopping',de:'günstig',en:'cheap',fil:'Mura'},
  {cat:'Shopping',de:'teuer',en:'expensive',fil:'Mahal'},
  {cat:'Shopping',de:'bezahlen',en:'to pay',fil:'Magbayad'},
  {cat:'Shopping',de:'die Quittung',en:'receipt',fil:'Resibo'},
  {cat:'Shopping',de:'der Rabatt',en:'discount',fil:'Diskwento'},
  {cat:'Shopping',de:'die Kasse',en:'checkout',fil:'Kahera'},
  {cat:'Shopping',de:'kaufen',en:'to buy',fil:'Bumili'},
  {cat:'Travel',de:'der Zug',en:'train',fil:'Tren'},
  {cat:'Travel',de:'die U-Bahn',en:'metro / subway',fil:'MRT / Subway'},
  {cat:'Travel',de:'der Flughafen',en:'airport',fil:'Paliparan'},
  {cat:'Travel',de:'abfahren',en:'to depart',fil:'Umalis'},
  {cat:'Travel',de:'ankommen',en:'to arrive',fil:'Dumating'},
  {cat:'Travel',de:'das Ticket',en:'ticket',fil:'Tiket'},
  {cat:'Travel',de:'umsteigen',en:'to transfer',fil:'Mag-transfer'},
  {cat:'Travel',de:'der Fahrplan',en:'timetable',fil:'Iskedyul'},
  {cat:'Health',de:'der Arzt',en:'doctor',fil:'Doktor'},
  {cat:'Health',de:'die Apotheke',en:'pharmacy',fil:'Botika'},
  {cat:'Health',de:'Kopfschmerzen',en:'headache',fil:'Sakit ng ulo'},
  {cat:'Health',de:'Fieber',en:'fever',fil:'Lagnat'},
  {cat:'Health',de:'Halsschmerzen',en:'sore throat',fil:'Sakit ng lalamunan'},
  {cat:'Health',de:'das Medikament',en:'medicine',fil:'Gamot'},
  {cat:'Health',de:'krank',en:'sick',fil:'Maysakit'},
  {cat:'Health',de:'der Termin',en:'appointment',fil:'Appointment'},
  {cat:'Work',de:'der Beruf',en:'profession',fil:'Propesyon'},
  {cat:'Work',de:'die Arbeit',en:'work',fil:'Trabaho'},
  {cat:'Work',de:'der Chef',en:'boss',fil:'Boss'},
  {cat:'Work',de:'das Büro',en:'office',fil:'Opisina'},
  {cat:'Work',de:'die Pause',en:'break',fil:'Pahinga'},
  {cat:'Work',de:'anfangen',en:'to start',fil:'Magsimula'},
  {cat:'Work',de:'aufhören',en:'to finish',fil:'Tapusin'},
  {cat:'Work',de:'arbeitslos',en:'unemployed',fil:'Walang trabaho'},
];

const TAG_COLORS = {
  grammar:['tag-grammar','tag-grammar-text'],
  vocab:['tag-vocab','tag-vocab-text'],
  writing:['tag-writing','tag-writing-text'],
  speaking:['tag-speaking','tag-speaking-text'],
  review:['tag-review','tag-review-text'],
  exam:['tag-exam','tag-exam-text'],
  pronun:['tag-vocab','tag-vocab-text'],
};

const QUIZ_BANK = [
  {lvl:'a1',q:'Ich ___ Ana. Ich komme aus den Philippinen.',opts:['heiße','heißen','heißt','bin'],ans:0},
  {lvl:'a1',q:'Correct article for "Mutter" (mother)?',opts:['der Mutter','die Mutter','das Mutter','ein Mutter'],ans:1},
  {lvl:'a1',q:'How do you say "I am 25 years old"?',opts:['Ich bin 25 Jahre.','Ich habe 25 Jahre alt.','Ich bin 25 Jahre alt.','Ich bin alt 25.'],ans:2},
  {lvl:'a1',q:'"Guten Morgen" means...',opts:['Good evening','Goodbye','Good morning','Good night'],ans:2},
  {lvl:'a1',q:'What does "Ich habe zwei Geschwister" mean?',opts:['I have two children.','I have two brothers.','I have two siblings.','I have two friends.'],ans:2},
  {lvl:'a1',q:'Which is correct? "I come from the Philippines."',opts:['Ich komme von Philippinen.','Ich komme aus den Philippinen.','Ich bin von Philippinen.','Ich komme in Philippinen.'],ans:1},
  {lvl:'a1',q:'"Wie viel Uhr ist es?" means...',opts:['How far is it?','What time is it?','How much does it cost?','Where is it?'],ans:1},
  {lvl:'a2',q:'Ich ___ gestern ins Kino gegangen.',opts:['habe','bin','hat','ist'],ans:1},
  {lvl:'a2',q:'"Ich muss morgen früh aufstehen." — muss means...',opts:['can','want','must','may'],ans:2},
  {lvl:'a2',q:'Complete: Ich fahre ___ dem Bus.',opts:['in','auf','mit','von'],ans:2},
  {lvl:'a2',q:'Manila ist ___ als Cebu. (groß)',opts:['mehr groß','großer','größer','am größten'],ans:2},
  {lvl:'a2',q:'"Sehr geehrte Damen und Herren" is used for...',opts:['Informal greeting to a friend','Formal letter/email opening','Saying goodbye','Asking for directions'],ans:1},
  {lvl:'a2',q:'Which is correct Perfekt?',opts:['Ich habe gegangen.','Ich bin gegessen.','Ich habe gekauft.','Ich sein gefahren.'],ans:2},
  {lvl:'a2',q:'"Ich lerne Deutsch, weil ich in Deutschland arbeiten ___."',opts:['will','wille','wollen','wollte'],ans:0},
];

const MOTIVATIONAL = [
  'Kaya mo! Keep going!', 'Magaling ka! You are doing great!',
  'Zeit zu lernen! Time to study!', 'Handa ka na ba? Let\'s go!',
  'Deutsch lernen macht Spaß! Learning German is fun!',
  'Mabuhay! Every lesson counts.', 'You are one step closer to Germany!',
  'Consistent ka — that\'s your superpower!', 'Ganda ng progress mo!',
  'Isang araw isang lesson — kaya yan!',
];

// ====== STATE ======
let doneIds = [];
let settings = { dailyReminder: false, studyTime: '19:00', popup: true, browser: false };
let currentPhase = 0;
let quizState = { questions: [], idx: 0, score: 0, answered: false };
let grammarLevel = 'a1';
let writingLevel = 'a1';
let vocabFilter = 'All';
let notifInterval = null;
let scheduledNotifTimeout = null;

// ====== STORAGE ======
function load() {
  try {
    doneIds = JSON.parse(localStorage.getItem('de_done') || '[]');
    const s = JSON.parse(localStorage.getItem('de_settings') || '{}');
    settings = { ...settings, ...s };
  } catch(e) {}
}

function save() {
  try {
    localStorage.setItem('de_done', JSON.stringify(doneIds));
    localStorage.setItem('de_settings', JSON.stringify(settings));
  } catch(e) {}
}

// ====== NAVIGATION ======
function gotoPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  const items = document.querySelectorAll('.nav-item');
  items.forEach(item => { if (item.textContent.toLowerCase().includes(id === 'dashboard' ? '⌂' : id.slice(0,4))) item.classList.add('active'); });
  document.querySelectorAll('.nav-item').forEach(item => {
    if ((id === 'dashboard' && item.textContent.includes('Dashboard')) ||
        (id !== 'dashboard' && item.textContent.toLowerCase().includes(id.toLowerCase()))) {
      item.classList.add('active');
    }
  });
  if (id === 'dashboard') renderDashboard();
  if (id === 'settings') applySettingsUI();
  closeSidebar();
}

function toggleMenu() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
}

// ====== SCHEDULE ======
function buildSchedule() {
  const container = document.getElementById('schedule-weeks');
  SCHEDULE.forEach((wk, wi) => {
    const card = document.createElement('div');
    card.className = 'week-card';
    card.id = 'wk-card-' + wk.week;
    card.style.display = wk.phase === 0 ? 'block' : 'none';
    const done = countWeekDone(wk.week);
    const total = countWeekTotal(wk.week);
    const pct = total > 0 ? Math.round(done / total * 100) : 0;
    const phaseColor = ['#2d6a4f','#2d6a4f','#9b5110','#9b5110'][wk.phase];
    card.innerHTML = `<div class="week-head" onclick="toggleWeek(${wk.week})">
      <span class="week-num">WEEK ${wk.week}</span>
      <div class="week-info"><div class="week-title">${wk.theme}</div></div>
      <div class="week-progress-wrap">
        <div class="week-prog-bar"><div class="week-prog-fill" id="wpf-${wk.week}" style="width:${pct}%;background:${phaseColor}"></div></div>
        <div class="week-prog-label" id="wpl-${wk.week}">${done}/${total}</div>
      </div>
      <span class="week-chevron" id="wchev-${wk.week}">▾</span>
    </div>
    <div class="week-body" id="wb-${wk.week}"></div>`;
    container.appendChild(card);
    buildWeekBody(wk);
  });
}

function buildWeekBody(wk) {
  const body = document.getElementById('wb-' + wk.week);
  wk.days.forEach(day => {
    const sec = document.createElement('div');
    sec.className = 'day-section';
    const label = document.createElement('div');
    label.className = 'day-label';
    label.textContent = day.name;
    sec.appendChild(label);
    day.tasks.forEach((t, ti) => {
      const id = `t-w${wk.week}-${day.name}-${ti}`;
      const item = document.createElement('div');
      item.className = 'task-item' + (doneIds.includes(id) ? ' done' : '');
      item.id = id + '-wrap';
      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.id = id;
      cb.checked = doneIds.includes(id);
      cb.onchange = () => toggleTask(id, cb.checked, wk.week);
      const lbl = document.createElement('label');
      lbl.htmlFor = id;
      lbl.textContent = t;
      item.appendChild(cb);
      item.appendChild(lbl);
      sec.appendChild(item);
    });
    const tagDiv = document.createElement('div');
    tagDiv.className = 'day-tags';
    day.tags.forEach(tag => {
      const b = document.createElement('span');
      const [bg, txt] = TAG_COLORS[tag] || ['tag-grammar','tag-grammar-text'];
      b.className = 'tag';
      b.style.background = `var(--${bg})`;
      b.style.color = `var(--${txt})`;
      b.textContent = tag.charAt(0).toUpperCase() + tag.slice(1);
      tagDiv.appendChild(b);
    });
    sec.appendChild(tagDiv);
    body.appendChild(sec);
  });
}

function toggleWeek(weekNum) {
  const body = document.getElementById('wb-' + weekNum);
  const chev = document.getElementById('wchev-' + weekNum);
  const isOpen = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  chev.classList.toggle('open', !isOpen);
}

function showPhase(phaseIdx, btn) {
  currentPhase = phaseIdx;
  document.querySelectorAll('.phase-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  SCHEDULE.forEach(wk => {
    document.getElementById('wk-card-' + wk.week).style.display = wk.phase === phaseIdx ? 'block' : 'none';
  });
}

function toggleTask(id, checked, weekNum) {
  if (checked) { if (!doneIds.includes(id)) doneIds.push(id); }
  else { doneIds = doneIds.filter(x => x !== id); }
  const wrap = document.getElementById(id + '-wrap');
  if (wrap) wrap.classList.toggle('done', checked);
  save();
  updateWeekProgress(weekNum);
  updateOverallProgress();
  if (checked && settings.popup && Math.random() > 0.6) showInAppNotif('Task complete!', MOTIVATIONAL[Math.floor(Math.random()*MOTIVATIONAL.length)]);
}

function countWeekDone(weekNum) {
  const wk = SCHEDULE.find(w => w.week === weekNum);
  if (!wk) return 0;
  let c = 0;
  wk.days.forEach(day => { day.tasks.forEach((t, ti) => { if (doneIds.includes(`t-w${weekNum}-${day.name}-${ti}`)) c++; }); });
  return c;
}

function countWeekTotal(weekNum) {
  const wk = SCHEDULE.find(w => w.week === weekNum);
  if (!wk) return 0;
  return wk.days.reduce((acc, d) => acc + d.tasks.length, 0);
}

function updateWeekProgress(weekNum) {
  const done = countWeekDone(weekNum);
  const total = countWeekTotal(weekNum);
  const pct = total > 0 ? Math.round(done / total * 100) : 0;
  const fill = document.getElementById('wpf-' + weekNum);
  const label = document.getElementById('wpl-' + weekNum);
  if (fill) fill.style.width = pct + '%';
  if (label) label.textContent = done + '/' + total;
}

function updateOverallProgress() {
  const total = SCHEDULE.reduce((acc, wk) => acc + countWeekTotal(wk.week), 0);
  const done = SCHEDULE.reduce((acc, wk) => acc + countWeekDone(wk.week), 0);
  const pct = total > 0 ? Math.round(done / total * 100) : 0;
  document.getElementById('sidebar-prog').style.width = pct + '%';
  document.getElementById('sidebar-pct').textContent = pct + '%';
  document.getElementById('stat-done').textContent = done;
  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-pct').textContent = pct + '%';
}

// ====== DASHBOARD ======
function renderDashboard() {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Magandang umaga' : hour < 18 ? 'Magandang hapon' : 'Magandang gabi';
  document.getElementById('dash-greeting').textContent = greeting + '! 👋';
  updateOverallProgress();

  const curWeekSetting = parseInt(localStorage.getItem('de_cur_week') || '1');
  document.getElementById('stat-week').textContent = curWeekSetting;
  const phase = curWeekSetting <= 4 ? 1 : curWeekSetting <= 8 ? 2 : curWeekSetting <= 12 ? 3 : 4;
  const phaseNames = {1:'A1 Foundations',2:'A1 Mastery',3:'A2 Launch',4:'A2 Exam Prep'};
  document.getElementById('stat-phase').textContent = phase;
  document.getElementById('stat-phase-name').textContent = phaseNames[phase];

  renderStreak();
  renderTodayTasks(curWeekSetting);
}

function renderStreak() {
  const row = document.getElementById('streak-row');
  row.innerHTML = '';
  const days = ['M','T','W','T','F','S','Su'];
  const today = new Date().getDay();
  const adjustedToday = today === 0 ? 6 : today - 1;
  days.forEach((d, i) => {
    const el = document.createElement('div');
    el.className = 'streak-day';
    el.textContent = d;
    const key = 'streak-day-' + i + '-' + getWeekKey();
    if (localStorage.getItem(key)) el.classList.add('done');
    if (i === adjustedToday) el.classList.add('today');
    row.appendChild(el);
  });
}

function getWeekKey() {
  const d = new Date();
  const jan = new Date(d.getFullYear(), 0, 1);
  return d.getFullYear() + '-W' + Math.ceil((((d - jan) / 86400000) + jan.getDay() + 1) / 7);
}

function renderTodayTasks(weekNum) {
  const container = document.getElementById('today-tasks');
  container.innerHTML = '';
  const wk = SCHEDULE.find(w => w.week === weekNum);
  if (!wk) { container.innerHTML = '<div class="empty-state"><div class="big">🎉</div><p>All 16 weeks complete! You are ready for the exam!</p></div>'; return; }

  const today = new Date().getDay();
  const dayNames = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  const todayName = dayNames[today];
  const todayDay = wk.days.find(d => d.name === todayName);

  if (!todayDay || todayName === 'Sunday') {
    container.innerHTML = '<div class="empty-state"><div class="big">😌</div><p>It\'s your rest day! Review flashcards casually or watch a German video.</p></div>';
    return;
  }

  todayDay.tasks.forEach((t, ti) => {
    const id = `t-w${weekNum}-${todayDay.name}-${ti}`;
    const item = document.createElement('div');
    item.className = 'today-task-item' + (doneIds.includes(id) ? ' done' : '');
    item.id = 'dash-' + id + '-wrap';
    const cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.id = 'dash-' + id;
    cb.checked = doneIds.includes(id);
    cb.onchange = () => {
      toggleTask(id, cb.checked, weekNum);
      const wrap = document.getElementById('dash-' + id + '-wrap');
      if (wrap) wrap.classList.toggle('done', cb.checked);
      markStreakDay();
    };
    const lbl = document.createElement('label');
    lbl.htmlFor = 'dash-' + id;
    const sub = document.createElement('div');
    sub.className = 'today-task-week';
    sub.textContent = `Week ${weekNum} — ${todayDay.name}`;
    lbl.textContent = t;
    const inner = document.createElement('div');
    inner.appendChild(lbl);
    inner.appendChild(sub);
    item.appendChild(cb);
    item.appendChild(inner);
    container.appendChild(item);
  });
}

function markStreakDay() {
  const today = new Date().getDay();
  const adjustedToday = today === 0 ? 6 : today - 1;
  localStorage.setItem('streak-day-' + adjustedToday + '-' + getWeekKey(), '1');
  renderStreak();
}

// ====== GRAMMAR ======
const GRAMMAR_A1 = [
  {
    title:'Articles — der / die / das',
    level:'a1',
    html:`<span class="level-badge lv-a1">A1</span>
    <p style="font-size:13px;color:var(--muted);margin-bottom:10px">German nouns have 3 genders. Like <em>ang</em> in Filipino — but 3 versions. Always learn the article with the word.</p>
    <table class="grammar-table">
      <tr><th>Gender</th><th>The</th><th>A/An</th><th>Example</th></tr>
      <tr><td>Masculine</td><td class="de">der</td><td>ein</td><td>der Mann (the man)</td></tr>
      <tr><td>Feminine</td><td class="de">die</td><td>eine</td><td>die Frau (the woman)</td></tr>
      <tr><td>Neuter</td><td class="de">das</td><td>ein</td><td>das Kind (the child)</td></tr>
      <tr><td>Plural</td><td class="de">die</td><td>—</td><td>die Kinder (the children)</td></tr>
    </table>
    <div class="warn-block" style="margin-top:10px">Never say just "Haus." Say "das Haus." Learn the article as part of every word — always!</div>`
  },
  {
    title:'Verb "sein" — to be',
    level:'a1',
    html:`<span class="level-badge lv-a1">A1</span>
    <table class="grammar-table">
      <tr><th>German</th><th>English</th><th>Filipino</th></tr>
      <tr><td class="de">Ich bin</td><td>I am</td><td>Ako ay</td></tr>
      <tr><td class="de">Du bist</td><td>You are (informal)</td><td>Ikaw ay</td></tr>
      <tr><td class="de">Er / Sie / Es ist</td><td>He / She / It is</td><td>Siya ay</td></tr>
      <tr><td class="de">Wir sind</td><td>We are</td><td>Tayo / Kami ay</td></tr>
      <tr><td class="de">Ihr seid</td><td>You all are</td><td>Kayo ay</td></tr>
      <tr><td class="de">Sie sind</td><td>They / You (formal) are</td><td>Sila ay</td></tr>
    </table>
    <div class="example-block"><div class="de">Ich bin Filipino. Ich bin 25 Jahre alt.</div><div class="en">I am Filipino. I am 25 years old.</div><div class="fil">Pilipino ako. Ako ay 25 taong gulang.</div></div>`
  },
  {
    title:'Verb "haben" — to have',
    level:'a1',
    html:`<span class="level-badge lv-a1">A1</span>
    <table class="grammar-table">
      <tr><th>German</th><th>English</th></tr>
      <tr><td class="de">Ich habe</td><td>I have</td></tr>
      <tr><td class="de">Du hast</td><td>You have</td></tr>
      <tr><td class="de">Er / Sie / Es hat</td><td>He / She / It has</td></tr>
      <tr><td class="de">Wir haben</td><td>We have</td></tr>
      <tr><td class="de">Sie haben</td><td>They / You (formal) have</td></tr>
    </table>
    <div class="example-block"><div class="de">Ich habe einen Bruder und zwei Schwestern.</div><div class="en">I have one brother and two sisters.</div><div class="fil">Mayroon akong isang kapatid na lalaki at dalawang kapatid na babae.</div></div>`
  },
  {
    title:'Word order — verb in position 2',
    level:'a1',
    html:`<span class="level-badge lv-a1">A1</span>
    <p style="font-size:13px;color:var(--muted);margin-bottom:10px">The verb is ALWAYS the 2nd element in a German sentence. This is the #1 rule.</p>
    <div class="example-block"><div class="de">Ich trinke Kaffee.</div><div class="en">I drink coffee.</div><div class="fil">Umiinom ako ng kape.</div></div>
    <div class="example-block"><div class="de">Ich komme aus den Philippinen.</div><div class="en">I come from the Philippines.</div><div class="fil">Ako ay galing sa Pilipinas.</div></div>
    <div class="tip-block">When a time word starts the sentence, the verb STILL comes second: <strong>Heute trinke ich Kaffee.</strong> (Today I drink coffee.)</div>`
  },
];

const GRAMMAR_A2 = [
  {
    title:'Perfekt — past tense',
    level:'a2',
    html:`<span class="level-badge lv-a2">A2</span>
    <p style="font-size:13px;color:var(--muted);margin-bottom:10px">Use <strong>haben/sein + past participle</strong> to talk about the past. Like saying "I have done" in English.</p>
    <table class="grammar-table">
      <tr><th>Verb</th><th>Participle</th><th>Example</th></tr>
      <tr><td>kaufen</td><td class="de">gekauft</td><td>Ich habe Brot gekauft.</td></tr>
      <tr><td>spielen</td><td class="de">gespielt</td><td>Ich habe Basketball gespielt.</td></tr>
      <tr><td>essen</td><td class="de">gegessen</td><td>Ich habe Adobo gegessen.</td></tr>
      <tr><td>gehen</td><td class="de">gegangen</td><td>Ich <em>bin</em> ins Mall gegangen.</td></tr>
      <tr><td>fahren</td><td class="de">gefahren</td><td>Ich <em>bin</em> mit dem Bus gefahren.</td></tr>
    </table>
    <div class="warn-block">Movement verbs (gehen, fahren, kommen, fliegen) use <strong>sein</strong>. All others use <strong>haben</strong>.</div>`
  },
  {
    title:'Modal verbs — can, must, want',
    level:'a2',
    html:`<span class="level-badge lv-a2">A2</span>
    <p style="font-size:13px;color:var(--muted);margin-bottom:10px">Modal goes in position 2. Main verb goes to the END as infinitive.</p>
    <table class="grammar-table">
      <tr><th>Modal</th><th>Meaning</th><th>Filipino</th><th>Example</th></tr>
      <tr><td class="de">können</td><td>can</td><td>kaya</td><td>Ich kann Tagalog sprechen.</td></tr>
      <tr><td class="de">müssen</td><td>must</td><td>kailangan</td><td>Ich muss arbeiten.</td></tr>
      <tr><td class="de">wollen</td><td>want</td><td>gusto</td><td>Ich will nach Deutschland fliegen.</td></tr>
      <tr><td class="de">dürfen</td><td>may / allowed</td><td>pwede</td><td>Darf ich fragen?</td></tr>
      <tr><td class="de">sollen</td><td>should</td><td>dapat</td><td>Du sollst pünktlich sein.</td></tr>
    </table>
    <div class="example-block"><div class="de">Ich kann nicht kommen, weil ich arbeiten muss.</div><div class="en">I can't come because I have to work.</div><div class="fil">Hindi ako makakapunta dahil kailangan ko pang magtrabaho.</div></div>`
  },
  {
    title:'Dative case',
    level:'a2',
    html:`<span class="level-badge lv-a2">A2</span>
    <p style="font-size:13px;color:var(--muted);margin-bottom:10px">Used after: <strong>mit, bei, nach, von, seit, aus, zu, gegenüber</strong></p>
    <table class="grammar-table">
      <tr><th></th><th>Masculine</th><th>Feminine</th><th>Neuter</th></tr>
      <tr><td>Nominative</td><td>der</td><td>die</td><td>das</td></tr>
      <tr><td>Dative</td><td class="de">dem</td><td class="de">der</td><td class="de">dem</td></tr>
    </table>
    <div class="example-block"><div class="de">Ich fahre mit dem Zug. / Sie kommt aus der Schule.</div><div class="en">I travel by train. / She comes from school.</div><div class="fil">Sumasakay ako ng tren. / Galing siya sa paaralan.</div></div>
    <div class="tip-block">Filipino tip: <em>mit</em> = kasama. <em>Ich gehe mit dem Freund</em> = Pumunta ako kasama ang kaibigan.</div>`
  },
  {
    title:'Comparatives and superlatives',
    level:'a2',
    html:`<span class="level-badge lv-a2">A2</span>
    <table class="grammar-table">
      <tr><th>Base</th><th>Comparative (+er)</th><th>Superlative (am ___sten)</th></tr>
      <tr><td>groß (big)</td><td class="de">größer</td><td>am größten</td></tr>
      <tr><td>klein (small)</td><td class="de">kleiner</td><td>am kleinsten</td></tr>
      <tr><td>gut (good)</td><td class="de">besser</td><td>am besten</td></tr>
      <tr><td>schnell (fast)</td><td class="de">schneller</td><td>am schnellsten</td></tr>
      <tr><td>teuer (expensive)</td><td class="de">teurer</td><td>am teuersten</td></tr>
    </table>
    <div class="example-block"><div class="de">Berlin ist größer als Manila. Aber Manila ist wärmer!</div><div class="en">Berlin is bigger than Manila. But Manila is warmer!</div><div class="fil">Mas malaki ang Berlin kaysa Manila. Pero mas mainit ang Manila!</div></div>`
  },
];

function buildGrammar() {
  renderGrammar('a1');
}

function renderGrammar(level) {
  const content = document.getElementById('grammar-content');
  content.innerHTML = '';
  const data = level === 'a1' ? GRAMMAR_A1 : GRAMMAR_A2;
  data.forEach(item => {
    const card = document.createElement('div');
    card.className = 'grammar-card';
    card.innerHTML = `<h3>${item.title}</h3>${item.html}`;
    content.appendChild(card);
  });
}

function showGrammarLevel(level, btn) {
  grammarLevel = level;
  document.querySelectorAll('#page-grammar .phase-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderGrammar(level);
}

// ====== VOCABULARY ======
function buildVocab() {
  const cats = ['All', ...new Set(VOCAB_DATA.map(v => v.cat))];
  const filters = document.getElementById('vocab-filters');
  cats.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'vocab-filter' + (cat === 'All' ? ' active' : '');
    btn.textContent = cat;
    btn.onclick = () => {
      vocabFilter = cat;
      document.querySelectorAll('.vocab-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderVocabCards();
    };
    filters.appendChild(btn);
  });
  renderVocabCards();
}

function renderVocabCards() {
  const grid = document.getElementById('vocab-grid');
  grid.innerHTML = '';
  const filtered = vocabFilter === 'All' ? VOCAB_DATA : VOCAB_DATA.filter(v => v.cat === vocabFilter);
  filtered.forEach(item => {
    const card = document.createElement('div');
    card.className = 'flash-card';
    card.innerHTML = `<div class="cat-badge">${item.cat}</div><div class="de">${item.de}</div><div class="en">${item.en}</div><div class="fil">${item.fil}</div>`;
    card.onclick = () => card.classList.toggle('revealed');
    grid.appendChild(card);
  });
}

// ====== WRITING ======
const WRITING_TASKS = {
  a1: [
    {
      title:'Task 1 — Fill in a personal form',
      level:'a1',
      prompt:'The A1 exam often asks you to complete a form with your personal details. Memorize these fields.',
      isForm: true,
      fields:[
        {label:'Vorname (first name)',example:'Juan'},
        {label:'Nachname (last name)',example:'dela Cruz'},
        {label:'Geburtsort (birthplace)',example:'Manila'},
        {label:'Geburtstag (birthday)',example:'15. März 1995'},
        {label:'Nationalität',example:'philippinisch'},
        {label:'Beruf (job)',example:'Krankenpfleger / Student'},
      ]
    },
    {
      title:'Task 2 — Short message to a friend',
      level:'a1',
      prompt:'Introduce yourself to a new classmate in a short message.',
      model:'Hallo! Ich heiße Ana. Ich komme aus den Philippinen, aus Quezon City. Ich bin 24 Jahre alt. Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte. Was ist dein Name?\n\nBis bald, Ana',
      phrases:['Ich heiße...','Ich komme aus...','Ich bin ... Jahre alt','Ich lerne Deutsch, weil...','Bis bald'],
    },
  ],
  a2: [
    {
      title:'Task 3 — Formal email to a teacher',
      level:'a2',
      prompt:'Write to your teacher: you were sick yesterday and cannot attend class.',
      model:'Sehr geehrte Frau Müller,\n\nich war gestern krank und konnte leider nicht in den Unterricht kommen. Ich hatte Fieber und Halsschmerzen. Heute geht es mir besser. Können Sie mir bitte die Hausaufgaben schicken?\n\nMit freundlichen Grüßen,\nAna Santos',
      phrases:['Sehr geehrte/r Frau/Herr...','ich war krank','konnte leider nicht...','Heute geht es mir besser','Mit freundlichen Grüßen'],
    },
    {
      title:'Task 4 — Invite a friend to a birthday party',
      level:'a2',
      prompt:'Write a casual message inviting your friend to your birthday party on Saturday.',
      model:'Hallo Miguel!\n\nIch mache am Samstag eine Geburtstagsparty! Sie beginnt um 18 Uhr bei mir zu Hause. Es gibt Essen, Musik und viele Freunde. Kannst du kommen? Ich würde mich sehr freuen!\n\nBis Samstag,\nAna',
      phrases:['am Samstag um...','bei mir zu Hause','Kannst du kommen?','Ich würde mich sehr freuen','Bis Samstag'],
    },
    {
      title:'Task 5 — Reply to a job advertisement',
      level:'a2',
      prompt:'Write a short formal message expressing interest in a job you saw advertised.',
      model:'Sehr geehrte Damen und Herren,\n\nich habe Ihre Stellenanzeige gelesen und interessiere mich sehr für die Stelle. Ich arbeite gern mit Menschen und habe zwei Jahre Erfahrung. Ich kann gerne ein Vorstellungsgespräch machen.\n\nMit freundlichen Grüßen,\nAna Santos',
      phrases:['Ich interessiere mich für...','Ich habe Erfahrung in...','Sehr geehrte Damen und Herren','Mit freundlichen Grüßen'],
    },
  ]
};

function buildWriting() {
  renderWriting('a1');
}

function renderWriting(level) {
  const content = document.getElementById('writing-content');
  content.innerHTML = '';
  WRITING_TASKS[level].forEach((task, ti) => {
    const div = document.createElement('div');
    div.className = 'writing-task';
    let inner = `<h3>${task.title}</h3><div class="task-prompt">${task.prompt}</div>`;
    if (task.isForm) {
      inner += '<table class="grammar-table">' + task.fields.map(f => `<tr><td style="font-weight:500;width:45%">${f.label}</td><td style="color:var(--muted)">${f.example}</td></tr>`).join('') + '</table>';
    } else {
      inner += `<div class="model-answer">${task.model.replace(/\n/g,'<br>')}</div>`;
      inner += `<div style="font-size:12px;font-weight:600;letter-spacing:.5px;text-transform:uppercase;color:var(--muted);margin-bottom:6px">Key phrases</div>`;
      inner += `<div class="key-phrases">${task.phrases.map(p=>`<span class="phrase">${p}</span>`).join('')}</div>`;
      inner += `<textarea class="writing-practice-area" placeholder="Your turn! Write your own version here..." id="practice-${level}-${ti}"></textarea>`;
    }
    div.innerHTML = inner;
    content.appendChild(div);
  });
}

function showWritingLevel(level, btn) {
  writingLevel = level;
  document.querySelectorAll('#page-writing .phase-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderWriting(level);
}

// ====== SPEAKING ======
function buildSpeaking() {
  const content = document.getElementById('speaking-content');
  const cards = [
    {
      title:'A1 — Self-introduction script',
      badge:'a1',
      html:`<div class="script-box">
        <strong>Hallo! Ich heiße Ana Santos.</strong><br>
        Ich komme aus den Philippinen. Ich wohne in Quezon City.<br>
        Ich bin 24 Jahre alt. Ich bin Krankenpflegerin von Beruf.<br>
        Ich spreche Tagalog, Englisch und ein bisschen Deutsch.<br>
        Ich lerne Deutsch, weil ich in Deutschland arbeiten möchte.<br>
        <strong>Ich freue mich, Sie kennenzulernen!</strong>
      </div>
      <div class="tip-block" style="margin-top:10px">Fill in your real details and practice this out loud 10 times. This covers 50% of the A1 speaking test!</div>`
    },
    {
      title:'A1 — Common examiner questions',
      badge:'a1',
      html:`<table class="grammar-table">
        <tr><th>Question</th><th>Model answer</th></tr>
        <tr><td>Wie heißen Sie?</td><td>Ich heiße Ana Santos.</td></tr>
        <tr><td>Woher kommen Sie?</td><td>Ich komme aus den Philippinen.</td></tr>
        <tr><td>Wie alt sind Sie?</td><td>Ich bin 24 Jahre alt.</td></tr>
        <tr><td>Was sind Sie von Beruf?</td><td>Ich bin Krankenpflegerin.</td></tr>
        <tr><td>Haben Sie Geschwister?</td><td>Ja, ich habe zwei Geschwister.</td></tr>
        <tr><td>Was machen Sie gern?</td><td>Ich koche gern und höre Musik.</td></tr>
        <tr><td>Wo wohnen Sie?</td><td>Ich wohne in Quezon City.</td></tr>
      </table>`
    },
    {
      title:'A2 — Role play: at the doctor',
      badge:'a2',
      html:`<div class="example-block"><div class="de">Patient: Guten Tag. Ich habe seit drei Tagen Kopfschmerzen.</div><div class="en">Good day. I have had a headache for three days.</div></div>
      <div class="example-block"><div class="de">Arzt: Haben Sie auch Fieber?</div><div class="en">Do you also have a fever?</div></div>
      <div class="example-block"><div class="de">Patient: Ja, ich glaube schon. Ich fühle mich nicht wohl.</div><div class="en">Yes, I think so. I don't feel well.</div></div>
      <div class="example-block"><div class="de">Arzt: Ich verschreibe Ihnen ein Medikament.</div><div class="en">I will prescribe you a medicine.</div></div>
      <div class="tip-block">Practice both roles — this exact scenario appears regularly in the A2 speaking exam.</div>`
    },
    {
      title:'A2 — Role play: at the train station',
      badge:'a2',
      html:`<div class="example-block"><div class="de">Kunde: Guten Tag. Einmal nach München, bitte. Hin und zurück.</div><div class="en">Hello. One ticket to Munich please. Return trip.</div></div>
      <div class="example-block"><div class="de">Mitarbeiter: Wann möchten Sie fahren?</div><div class="en">When would you like to travel?</div></div>
      <div class="example-block"><div class="de">Kunde: Am Samstag, um 9 Uhr. Wann kommt der Zug in München an?</div><div class="en">On Saturday at 9am. When does the train arrive in Munich?</div></div>
      <div class="example-block"><div class="de">Mitarbeiter: Der Zug kommt um 12:30 Uhr an. Das kostet 45 Euro.</div><div class="en">The train arrives at 12:30. That costs 45 Euro.</div></div>`
    },
  ];
  cards.forEach(c => {
    const div = document.createElement('div');
    div.className = 'speaking-card';
    div.innerHTML = `<h3><span class="level-badge lv-${c.badge}">${c.badge.toUpperCase()}</span> ${c.title}</h3>${c.html}`;
    content.appendChild(div);
  });
}

// ====== QUIZ ======
function buildQuiz() { startQuiz(); }

function startQuiz() {
  const qs = [...QUIZ_BANK].sort(() => Math.random() - 0.5).slice(0, 10);
  quizState = { questions: qs, idx: 0, score: 0, answered: false };
  document.getElementById('quiz-badge').textContent = '10';
  renderQuizQ();
}

function renderQuizQ() {
  quizState.answered = false;
  const card = document.getElementById('quiz-card');
  if (quizState.idx >= quizState.questions.length) {
    const pct = Math.round(quizState.score / quizState.questions.length * 100);
    const grade = pct >= 80 ? 'A' : pct >= 60 ? 'B' : 'C';
    const msg = pct >= 80 ? 'Magaling! Handa ka na sa exam! 🎉' : pct >= 60 ? 'Mabuti! Review the topics you missed.' : 'Kaya mo! Go back to grammar and vocab.';
    card.innerHTML = `<div class="quiz-result">
      <div class="quiz-score-big">${grade}</div>
      <div style="font-family:'Syne',sans-serif;font-size:18px;font-weight:700;margin-bottom:4px">${quizState.score} / ${quizState.questions.length}</div>
      <div class="quiz-result-msg">${msg}</div>
      <button class="quiz-restart" onclick="startQuiz()">Try again</button>
    </div>`;
    document.getElementById('quiz-badge').textContent = '✓';
    return;
  }
  const q = quizState.questions[quizState.idx];
  const progPct = Math.round(quizState.idx / quizState.questions.length * 100);
  card.innerHTML = `<div class="quiz-progress">
    <div class="quiz-prog-bar"><div class="quiz-prog-fill" style="width:${progPct}%"></div></div>
    <span class="quiz-prog-text">${quizState.idx + 1} / ${quizState.questions.length}</span>
  </div>
  <div style="margin-bottom:8px"><span class="level-badge lv-${q.lvl}">${q.lvl.toUpperCase()}</span></div>
  <div class="quiz-question">${q.q}</div>
  <div id="quiz-opts">${q.opts.map((o,i)=>`<button class="quiz-opt" onclick="answerQuiz(${i})">${o}</button>`).join('')}</div>
  <button class="quiz-next" id="quiz-next-btn" onclick="nextQuizQ()">${quizState.idx + 1 < quizState.questions.length ? 'Next question →' : 'See results →'}</button>`;
}

function answerQuiz(i) {
  if (quizState.answered) return;
  quizState.answered = true;
  const q = quizState.questions[quizState.idx];
  document.querySelectorAll('.quiz-opt').forEach((btn, j) => {
    btn.disabled = true;
    if (j === q.ans) btn.classList.add('correct');
    else if (j === i && i !== q.ans) btn.classList.add('wrong');
  });
  if (i === q.ans) quizState.score++;
  document.getElementById('quiz-next-btn').style.display = 'block';
}

function nextQuizQ() {
  quizState.idx++;
  renderQuizQ();
}

// ====== NOTIFICATIONS ======
function showInAppNotif(title, msg) {
  document.getElementById('notif-title').textContent = title;
  document.getElementById('notif-msg').textContent = msg;
  const banner = document.getElementById('notif-banner');
  banner.classList.add('show');
  setTimeout(() => banner.classList.remove('show'), 5000);
}

function closeNotif() {
  document.getElementById('notif-banner').classList.remove('show');
}

function requestNotifPermission() {
  const cb = document.getElementById('toggle-browser');
  if (!('Notification' in window)) {
    document.getElementById('notif-status').textContent = 'Browser notifications are not supported in this browser.';
    cb.checked = false;
    return;
  }
  Notification.requestPermission().then(perm => {
    if (perm === 'granted') {
      settings.browser = true;
      document.getElementById('notif-status').textContent = 'Browser notifications enabled!';
      saveSettings();
      scheduleStudyReminder();
    } else {
      cb.checked = false;
      settings.browser = false;
      document.getElementById('notif-status').textContent = 'Permission denied. Please enable notifications in your browser settings.';
      saveSettings();
    }
  });
}

function sendBrowserNotif(title, body) {
  if ('Notification' in window && Notification.permission === 'granted') {
    new Notification(title, { body, icon: '' });
  }
}

function scheduleStudyReminder() {
  if (scheduledNotifTimeout) clearTimeout(scheduledNotifTimeout);
  if (!settings.dailyReminder) return;
  const now = new Date();
  const [h, m] = settings.studyTime.split(':').map(Number);
  const target = new Date();
  target.setHours(h, m, 0, 0);
  if (target <= now) target.setDate(target.getDate() + 1);
  const ms = target - now;
  scheduledNotifTimeout = setTimeout(() => {
    const msg = MOTIVATIONAL[Math.floor(Math.random() * MOTIVATIONAL.length)];
    showInAppNotif('Zeit zu lernen! 🇩🇪', msg);
    if (settings.browser) sendBrowserNotif('Deutsch lernen — Zeit zu lernen!', msg);
    scheduleStudyReminder();
  }, ms);
}

// ====== SETTINGS ======
function applySettingsUI() {
  document.getElementById('toggle-daily').checked = settings.dailyReminder;
  document.getElementById('study-time').value = settings.studyTime;
  document.getElementById('toggle-popup').checked = settings.popup;
  document.getElementById('toggle-browser').checked = settings.browser;
  const curWeek = parseInt(localStorage.getItem('de_cur_week') || '1');
  document.getElementById('current-week').value = curWeek;
  if ('Notification' in window && Notification.permission === 'granted') {
    document.getElementById('notif-status').textContent = 'Browser notifications are enabled.';
  }
}

function saveSettings() {
  settings.dailyReminder = document.getElementById('toggle-daily').checked;
  settings.studyTime = document.getElementById('study-time').value;
  settings.popup = document.getElementById('toggle-popup').checked;
  settings.browser = document.getElementById('toggle-browser').checked;
  const curWeek = document.getElementById('current-week') ? document.getElementById('current-week').value : '1';
  localStorage.setItem('de_cur_week', curWeek);
  save();
  scheduleStudyReminder();
  if (settings.popup) showInAppNotif('Settings saved!', 'Your preferences have been updated.');
}

function resetProgress() {
  if (!confirm('Reset all progress? This cannot be undone.')) return;
  doneIds = [];
  save();
  location.reload();
}

// ====== INIT ======
function init() {
  load();
  buildSchedule();
  buildGrammar();
  buildVocab();
  buildWriting();
  buildSpeaking();
  buildQuiz();
  renderDashboard();
  applySettingsUI();
  scheduleStudyReminder();
  updateOverallProgress();

  // Greet on load
  setTimeout(() => {
    if (settings.popup) {
      showInAppNotif('Willkommen! 🇩🇪', 'Ready to study German today? Kaya mo!');
    }
  }, 1500);

  // Periodic reminder while app is open
  setInterval(() => {
    if (settings.popup && Math.random() > 0.85) {
      showInAppNotif('Deutsch lernen', MOTIVATIONAL[Math.floor(Math.random()*MOTIVATIONAL.length)]);
    }
  }, 15 * 60 * 1000);
}

document.addEventListener('DOMContentLoaded', init);
