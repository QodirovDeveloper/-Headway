// Answer keys, checked against the Teacher's Book.
// p = PDF page, x/y = centre of the exercise number in % of the page.
// kind: 'key' = exact answers, 'sample' = example answers (answers vary).
// Text in [brackets] is the answer itself and is shown in bold.
import type { Answer } from '../types';

export const ANSWERS: Answer[] = [
  // ---------- Unit 1 · book p6 ----------
  { p: 7, x: 55.0, y: 37.8, ex: '2', title: 'Complete the conversation', kind: 'key', items: [
    'C Hello. My [name\'s] Carla. What\'s [your] name?',
    'D David.',
    'C [Where] are you from, David?',
    'D [I\'m] from Bristol. Where [are] you from?',
    'C [I\'m] [from] Bristol, too!',
    'D Oh! Nice to meet you!',
  ] },

  // ---------- book p7 ----------
  { p: 8, x: 4.0, y: 53.8, ex: '2', title: 'Questions about Bill', kind: 'key', items: [
    '1 What\'s [his] surname? — Frasier',
    '2 [What\'s] his first name? — Bill',
    '3 Where[\'s] he from? — Chicago',
    '4 How old [is] he? — 30',
    '5 What\'s [his] phone number? — 312-555-0749',
    '6 [What\'s] [his] email address? — bfrasier@gmail.com',
    '7 Is [he] married? — No, he isn\'t.',
  ] },
  { p: 8, x: 50.4, y: 53.9, ex: '3', title: 'Questions about Sabine', kind: 'key', items: [
    '1 What\'s [her] surname? — Ganz',
    '2 What\'s [her] first name? — Sabine',
    '3 Where[\'s] she from? — Zurich',
    '4 How old [is] [she]? — 22',
    '5 What\'s [her] phone number? — 43 44 900 4754',
    '6 [What\'s] [her] email address? — sabinegz@swissmail.ch',
    '7 [Is] [she] married? — No, she isn\'t.',
  ] },
  { p: 8, x: 7.0, y: 77.0, ex: 'GS 1', title: 'Grammar Spot: the verb to be', kind: 'key', items: [
    'I am = I\'m — I [\'m not]',
    'you are = you\'re — you [aren\'t]',
    'he is = he\'s — he [isn\'t]',
    'she is = she\'s — she [isn\'t]',
  ] },
  { p: 8, x: 33.2, y: 77.0, ex: 'GS 2', title: 'Grammar Spot: possessive adjectives', kind: 'key', items: [
    'I — [my]', 'you — [your]', 'he — [his]', 'she — [her]',
  ] },

  // ---------- book p8 ----------
  { p: 9, x: 8.0, y: 15.2, ex: '2', title: 'Sentences about Rick', kind: 'key', items: [
    '1 I [go] to Kingston University.',
    '2 I [have] a brother and a sister.',
    '3 I [live] with my parents in a house in West London.',
    '4 My family really [like] Lily!',
  ] },
  { p: 9, x: 8.0, y: 43.4, ex: '4', title: '\'s — is or possession?', kind: 'key', items: [
    '[Possession]: my brother\'s name, my sister\'s name',
    '[\'s = is]: My name\'s Rick Wilson.',
    '[\'s = is]: He\'s 16 and he\'s at school.',
    '[\'s = is]: She\'s 23, and she\'s married.',
    '[\'s = is]: Her name\'s Lily. She\'s lovely!',
  ] },
  { p: 9, x: 8.0, y: 64.0, ex: '5', title: 'Answer the questions', kind: 'key', items: [
    '1 Who\'s Edward? — He\'s Rick\'s brother.',
    '2 Who\'s Rosie? — [She\'s Rick\'s sister.]',
    '   Who\'s Peter? — [He\'s Rick\'s father.]',
    '   Who\'s Helen? — [She\'s Rick\'s mother.]',
    '   Who\'s Lily? — [She\'s Rick\'s girlfriend.]',
    '3 What\'s his father\'s job? — [He\'s a salesman.]',
    '4 What\'s his mother\'s job? — [She\'s a teacher.]',
  ] },

  // ---------- book p9 ----------
  { p: 10, x: 4.5, y: 10.2, ex: '1', title: 'The verb to be', kind: 'key', items: [
    '1 Where [are] you from?',
    '2 \'[Are] you from London?\' \'Yes, I [am].\'',
    '3 \'How old [are] you?\' \'I[\'m] 15.\'',
    '4 \'[Are] your sisters married?\' \'No, they [aren\'t].\'',
    '5 I like you. You[\'re] my friend.',
    '6 Hans [isn\'t] from Germany, he\'s from Switzerland.',
    '7 \'[Is] your mother a doctor?\' \'No, she [isn\'t].\'',
    '8 I[\'m not] Italian. I\'m French.',
  ] },
  { p: 10, x: 4.3, y: 48.8, ex: '2', title: '\'s — is or possession?', kind: 'key', items: [
    '1 My name\'s Juan. — \'s = is',
    '2 My sister\'s friend isn\'t married. — \'s = possession',
    '3 Sonia\'s Italian. — [is]',
    '4 She\'s a teacher. — [is]',
    '5 Her brother\'s wife isn\'t English. — [possession]',
    '6 My brother\'s children are beautiful. — [possession]',
  ] },
  { p: 10, x: 4.4, y: 65.4, ex: '3', title: 'Pronunciation: tick what you hear', kind: 'key', items: [
    '1 [b] She\'s from Italy.',
    '2 [a] What\'s his name?',
    '3 [a] Your English is good.',
    '4 [a] Where\'s she from?',
    '5 [b] He\'s a teacher in England.',
    '6 [b] We aren\'t English.',
  ] },
  { p: 10, x: 50.6, y: 10.2, ex: '4', title: 'Spelling: names and emails', kind: 'key', items: [
    '1 [VANESSA]',
    '2 [JOSEPH BOWEN]',
    '3 [KATIE MATTHEWS]',
    '4 [g.hunt8@yahoo.com]',
    '5 [zac.yates@gmail.co.uk]',
  ] },
  { p: 10, x: 50.6, y: 33.0, ex: '5', title: 'True sentences about you', kind: 'sample', items: [
    '1 I [\'m not] / [\'m] at home.',
    '2 We [\'re] / [aren\'t] in class.',
    '3 We [\'re] / [aren\'t] in a café.',
    '4 It [\'s] / [isn\'t] Monday today.',
    '5 My teacher\'s name [is] / [isn\'t] Richard.',
    '6 My mother and father [are] / [aren\'t] at work.',
    '7 I [\'m] / [\'m not] married.',
    '8 My grandmother [is] / [isn\'t] seventy-five years old.',
  ] },

  // ---------- book p10 ----------
  { p: 11, x: 6.9, y: 15.0, ex: '2', title: 'Adjectives (possible answers)', kind: 'sample', items: [
    '1 London is/isn\'t a/an [big / small / nice / beautiful / expensive / interesting / friendly / cold / sunny] city.',
    '2 The people are/aren\'t [nice / interesting / friendly].',
    '3 The weather is/isn\'t [cold / sunny].',
    '4 English is/isn\'t a/an [beautiful / interesting / difficult / easy] language.',
  ] },
  { p: 11, x: 6.9, y: 37.0, ex: '3', title: 'True or false?', kind: 'key', items: [
    '1 ✓ Annalisa is from Italy.',
    '2 ✗ She isn\'t in Rome. She\'s in London.',
    '3 [✓]',
    '4 [✗] She isn\'t in a small school. She\'s in a big school.',
    '5 [✓]',
    '6 [✗] They aren\'t all from Europe. They\'re from Mexico, Japan, and Egypt, too.',
    '7 [✗] Rosie isn\'t Annalisa\'s teacher. She\'s Rick\'s sister.',
    '8 [✗] It isn\'t expensive. It\'s free.',
    '9 [✗] It isn\'t difficult. It\'s easy.',
    '10 [✓]',
  ] },
  { p: 11, x: 6.9, y: 63.3, ex: '4', title: 'Questions about Annalisa', kind: 'key', items: [
    '1 Where\'s Annalisa from? — Italy.',
    '2 [Where\'s] her school? — In the centre of London.',
    '3 What\'s [her teacher\'s] name? — Charlotte.',
    '4 [What\'s her family\'s] name? — Wilson.',
    '5 [Where\'s] their [house]? — In Notting Hill, in West London.',
    '6 How [old are] the two brothers? — Edward\'s 16 and Rick\'s 19.',
    '7 [Is the weather] OK? — Yes, it is. It\'s cold and sunny.',
  ] },
  { p: 11, x: 6.9, y: 90.8, ex: '5', title: 'What/Who can you see?', kind: 'sample', items: [
    'We can see [the Wilson family and their house], [her school], [some students], and [her teacher], and [Trafalgar Square and the National Gallery] in London.',
  ] },

  // ---------- book p11 ----------
  { p: 12, x: 60.4, y: 6.4, ex: '6', title: 'Where\'s Annalisa? Who is she with?', kind: 'key', items: [
    '1 [at home] — [Peter Wilson]',
    '2 [at school / in class] — [her teacher, Charlotte]',
    '3 [at school] — [another student]',
    '4 [at the National Gallery] — [a gallery assistant]',
    '5 [in a café] — [a waitress]',
  ] },
  { p: 12, x: 60.9, y: 34.0, ex: '7', title: 'Opposite adjectives', kind: 'key', items: [
    '1 a good student — a bad teacher',
    '2 a big city — a [small] town',
    '3 a hot day — [cold] weather',
    '4 horrible coffee — a [lovely / fantastic] meal',
    '5 a cheap café — an [expensive] restaurant',
    '6 an old man — a [young] girl',
    '7 a slow bus — a [fast] car',
    '8 an easy exercise — [difficult] homework',
  ] },
  { p: 12, x: 63.6, y: 55.4, ex: 'GS 1', title: 'Grammar Spot: the verb to be', kind: 'key', items: [
    'I am', 'you [are]', 'he [is]', 'she [is]', 'it [is]', 'we are', 'they [are]',
  ] },
  { p: 12, x: 63.6, y: 71.4, ex: 'GS 2', title: 'Grammar Spot: possessive adjectives', kind: 'key', items: [
    'I — my', 'you — [your]', 'he — [his]', 'she — [her]', 'we — [our]', 'they — their',
  ] },

  // ---------- book p12 ----------
  { p: 13, x: 7.0, y: 10.7, ex: '1', title: 'The family', kind: 'key', items: [
    'father and mother',
    'husband and [wife]',
    '[son] and daughter',
    '[brother] and sister',
    'grandfather and [grandmother]',
    'uncle and [aunt]',
    'nephew and [niece]',
    '[boyfriend] and girlfriend',
  ] },
  { p: 13, x: 7.0, y: 63.2, ex: '2', title: 'Complete the sentences', kind: 'key', items: [
    '1 My mother\'s father is my grandfather.',
    '2 My father\'s mother is my [grandmother].',
    '3 My mother\'s sister is my [aunt].',
    '4 My aunt\'s husband is my [uncle].',
    '5 My sister\'s son is my [nephew].',
    '6 My brother\'s daughter is my [niece].',
    '7 Your mother and father are your [parents].',
    '8 Your son and your daughter are your [children].',
    '9 Your aunt\'s children are your [cousins].',
  ] },
  { p: 13, x: 48.3, y: 10.7, ex: '3', title: 'Joseph\'s family', kind: 'key', items: [
    'Grandmother (top): [Marie]',
    'Father: [John]  ·  Mother: [Odile]',
    'Brother: [Richard]  ·  Sister: [Andrea]',
    'Joseph\'s wife: [Isabel]',
    'Daughter: [Nancy]  ·  Son (baby): [Tom]',
  ] },

  // ---------- book p13 ----------
  { p: 14, x: 4.4, y: 28.9, ex: '3', title: 'Complete the conversations', kind: 'key', items: [
    '1 A Bye, Mum! It\'s time for school. B Goodbye darling. Have [a good day]! A Thanks. See you [later].',
    '2 C Good morning! D [Good morning]! [Can] I have a coffee, an espresso, please? C Yes, [of course]. Anything else?',
    '3 E [Good afternoon]! Can I [help] you? F No, thank you. We\'re [just] looking.',
    '4 G Frank. [This is] Gina. She\'s from our New York office. H Hello, Gina. Nice [to meet] you. I Hello, Frank. [Pleased] to meet you, too.',
    '5 J Thank goodness it\'s Friday! [Bye], Ian. K Bye, Derek. Have [a good weekend]. J Thanks. Same [to you].',
    '6 L Good night! Sleep [well]! M Good night! [See you] in the morning.',
  ] },

  // ========== Unit 2 ==========
  // ---------- book p14 ----------
  { p: 15, x: 7.2, y: 40.2, ex: '1', title: 'What are their jobs? Where do they work?', kind: 'key', items: [
    'Andrew is an [engineer]. He works [on an oil rig] (near Aberdeen, Scotland).',
    'Claudia is a [zoologist]. She works [at the Research Centre in the Mojave Desert] (California).',
  ] },
  { p: 15, x: 7.2, y: 44.4, ex: '2', title: 'Verbs in the text', kind: 'key', items: [
    'is, comes, [lives], [works], [has], [earns], [goes], [plays], [teaches], [studies], [likes], [writes], [walks]',
    'The last letter is [-s].',
  ] },
  { p: 15, x: 7.2, y: 52.6, ex: '3', title: 'Pronunciation: /s/ /z/ /ɪz/', kind: 'key', items: [
    '/s/ — likes, [works], [writes], [walks]',
    '/z/ — comes, [goes], [earns], [plays]',
    '/ɪz/ — teaches',
  ] },
  { p: 15, x: 7.2, y: 66.8, ex: '4', title: 'Complete the sentences', kind: 'key', items: [
    '1 Andrew is an engineer. Claudia [is] a zoologist.',
    '2 She comes from the US. He [comes] from New Zealand.',
    '3 He lives in Scotland. She [lives] in California.',
    '4 She works in the desert. He [works] on an oil rig.',
    '5 He earns £200 a day. She [earns] $60,000 a year.',
    '6 She likes her job, and he [likes] his job, too.',
    '7 He [goes] to the gym in his free time. She [walks] her dog. Her dog\'s name [is] Brewer.',
    '8 She[\'s] married. Her husband\'s [name] is Jim. Andrew [isn\'t] married.',
  ] },

  // ---------- book p15 ----------
  { p: 16, x: 5.0, y: 3.6, ex: '5', title: 'Andrew and Claudia', kind: 'key', items: [
    'surname — Andrew: [Johnson] · Claudia: [Luke]',
    'age — [30] · [41]',
    'country — [New Zealand] · [the USA]',
    'job — [engineer] · [zoologist]',
    'salary — [£200 a day] · [$60,000 a year]',
    'free time — [goes to the gym, plays snooker] · [writes songs, walks her dog]',
    'married? — [no] · [yes]',
  ] },
  { p: 16, x: 53.0, y: 10.3, ex: '1', title: 'Lines about Andrew', kind: 'key', items: [
    '1 What does Andrew do? — He\'s an [engineer].',
    '2 Where does he come from? — New [Zealand].',
    '3 Does he live in Scotland? — [Yes], he does.',
    '4 Does he live in New Zealand? — [No], he doesn\'t.',
    '5 He [isn\'t] married. He doesn\'t have any children.',
  ] },
  { p: 16, x: 54.8, y: 28.4, ex: 'GP 1', title: 'The correct form of live', kind: 'key', items: [
    'Positive: He [lives] in Scotland.',
    'Negative: He [doesn\'t] [live] in New Zealand.',
    'Question: Where [does] he [live]? In Scotland.',
  ] },
  { p: 16, x: 53.0, y: 53.0, ex: '2', title: 'Questions and answers about Andrew', kind: 'key', items: [
    '1 \'Where does Andrew work?\' \'On an oil rig.\'',
    '2 \'[Does] he work hard?\' \'Yes, he [does].\'',
    '3 \'How much [does] he earn?\' \'£[200] a day.\'',
    '4 \'What [does] he do in his free time?\' \'He [goes to the gym] and he [plays snooker].\'',
    '5 \'[Does] he like his job?\' \'Yes, he [does].\'',
    '6 \'[Does] he have a dog?\' \'No, he [doesn\'t].\'',
  ] },
  { p: 16, x: 53.0, y: 84.5, ex: '3', title: 'Questions about Claudia', kind: 'sample', items: [
    'What does Claudia do? — [She\'s a zoologist and a teacher.]',
    'Where does she live? — [In California.]',
    'Does she work with her husband? — [Yes, she does.]',
    'Does she like her job? — [Yes, she does.]',
    'Does she have a dog? — [Yes, she does.]',
    'What does she do in her free time? — [She writes songs and walks her dog.]',
    'How much does she earn? — [About $60,000 a year.]',
  ] },

  // ---------- book p16 ----------
  { p: 17, x: 5.8, y: 77.7, ex: '3', title: 'Questions about Darcey or David', kind: 'key', items: [
    'What [does she/he] do?',
    'Where [does she/he] come from?',
    'Where [does she/he] live now?',
    'Where [does she/he] work?',
    '[Does she/he] speak French?',
    'How many children [does she/he have]?',
    'What [are her/his] children\'s names?',
    'What [does she/he do] in her/his free time?',
  ] },
  { p: 17, x: 56.0, y: 77.7, ex: '4', title: 'Correct the wrong sentences', kind: 'key', items: [
    '1 Darcey comes from London. — [Yes, that\'s right.]',
    '2 She lives in England. — [No, she doesn\'t. She lives in Australia.]',
    '3 She has two sons. — [No, she doesn\'t. She has two daughters.]',
    '4 She writes stories for children. — [Yes, that\'s right.]',
    '5 David\'s English. — [No, he isn\'t. He\'s French.]',
    '6 He works all over the world. — [Yes, that\'s right.]',
    '7 His wife comes from Miami. — [No, she doesn\'t. She comes from Senegal.]',
    '8 He writes songs in his free time. — [Yes, that\'s right.]',
  ] },

  // ---------- book p17 ----------
  { p: 18, x: 4.3, y: 5.5, ex: '5', title: 'Verbs in the correct form', kind: 'key', items: [
    '1 My husband comes from Belgium.',
    '2 My grandmother [lives] in the next town.',
    '3 My mother [loves] reading.',
    '4 My father [travels] a lot in his job.',
    '5 My sister [speaks] Spanish very well. She [wants] to learn French, too.',
    '6 My little brother [watches] TV a lot.',
    '7 My friend Tom [writes] a blog on the Internet.',
  ] },
  { p: 18, x: 4.3, y: 28.0, ex: '6', title: 'Match the questions', kind: 'key', items: [
    '1 My husband… — b Where exactly in Belgium?',
    '2 My grandmother… — [c] Does she visit you often?',
    '3 My mother… — [e] What does she read?',
    '4 My father… — [f] Where does he go?',
    '5 My sister… — [a] Does she want to be an interpreter?',
    '6 My little brother… — [g] What does he like watching?',
    '7 My friend Tom… — [d] What does he write about?',
  ] },
  { p: 18, x: 4.3, y: 48.4, ex: '7', title: 'Extra information', kind: 'key', items: [
    '1 [From the capital, Brussels.]',
    '2 [Yes, she does. Every Sunday.]',
    '3 [Detective stories.]',
    '4 [He\'s in Berlin this week.]',
    '5 [No, she doesn\'t. She wants to be a teacher.]',
    '6 [Sport, sport, sport and erm — football!]',
    '7 [Everything and everybody!]',
  ] },
  { p: 18, x: 51.5, y: 5.5, ex: '8', title: 'What are they about?', kind: 'key', items: [
    '1 [B\'s sister and her studies]',
    '2 [Peter\'s job]',
    '3 [a dog]',
    '4 [B\'s friend and her English]',
    '5 [B\'s grandfather and his free time]',
  ] },
  { p: 18, x: 51.5, y: 8.2, ex: '9', title: 'Verbs you hear', kind: 'key', items: [
    '1 do, [wants], [studies]',
    '2 [like], [works], [earn]',
    '3 [goes], [loves]',
    '4 [speaks], [goes]',
    '5 [do], [watches], [plays], [visits]',
  ] },
  { p: 18, x: 51.0, y: 42.6, ex: '11', title: 'Tick the sentence you hear', kind: 'key', items: [
    '1 [a] He likes his job.',
    '2 [b] She loves working.',
    '3 [b] He isn\'t married.',
    '4 [b] Does he have three children?',
    '5 [b] Where does he go?',
  ] },

  // ---------- book p18 ----------
  { p: 19, x: 6.3, y: 10.8, ex: '1', title: 'Babur Ali — what is true?', kind: 'key', items: [
    '1 Babur gets up at [5 a.m.]',
    '2 He helps his [mother in the house].',
    '3 He goes to school by [bus].',
    '4 He studies hard until [4 p.m.]',
    '5 He begins [the classes] at 5 p.m.',
    '6 He [likes] his work.',
    '7 He [speaks] English.',
    '8 He [wants] to go to university.',
  ] },
  { p: 19, x: 6.3, y: 28.5, ex: '2', title: 'Questions about Babur', kind: 'key', items: [
    '1 [West Bengal in India.]',
    '2 [In the small village of Bhabta.]',
    '3 [No, it doesn\'t.]',
    '4 Because [he goes to a private school.]',
    '5 [1,000 rupees a year.]',
    '6 [Everything that he learns.]',
    '7 [No, they aren\'t.]',
    '8 [Anand Shiksha Niketan School.] [Yes, it is.]',
  ] },
  { p: 19, x: 6.3, y: 46.3, ex: '3', title: 'Times in Babur\'s day', kind: 'key', items: [
    'What time does he get up? — At 5 o\'clock.',
    'What time does he go to school? — [At 8 o\'clock.]',
    'What time does he travel back to his village? — [At 4 o\'clock.]',
    'What time does he begin classes? — [At 5 o\'clock.]',
    'What time does he stop teaching? — [At 8 o\'clock.]',
  ] },
  { p: 19, x: 6.3, y: 55.0, ex: '4', title: 'Correct the sentences', kind: 'key', items: [
    '1 It doesn\'t have 60 students. It has [650].',
    '2 [It doesn\'t have five teachers. It has ten teachers.]',
    '3 [Babur doesn\'t want to stop teaching. He always wants to teach poor children.]',
    '4 [He doesn\'t want to be a doctor. He wants to study at university.]',
  ] },
  { p: 19, x: 6.3, y: 73.0, ex: '5', title: 'Roleplay: complete the questions', kind: 'key', items: [
    '1 How many students [does your school have / are in your school]?',
    '2 How many teachers [does your school have / are in your school]?',
    '3 What time [do your classes] start/finish?',
    '4 How much [do your classes / does your school] cost?',
    '5 [What\'s] your teacher\'s name?',
    '6 [Is your teacher] a good teacher?',
    '7 What [does he] teach?',
    '8 [Does] he work hard?',
  ] },

  // ---------- book p20 ----------
  { p: 21, x: 6.8, y: 11.7, ex: '1', title: 'Match a picture with a job', kind: 'key', items: [
    'a [nurse]', 'b [journalist]', 'c [pilot]', 'd [architect]', 'e [lawyer]',
    'f [hairdresser]', 'g [dentist]', 'h [receptionist]', 'i [taxi driver]', 'j [accountant]',
  ] },
  { p: 21, x: 6.8, y: 19.2, ex: '2', title: 'Complete with a job', kind: 'key', items: [
    '1 She\'s a [hairdresser]. She cuts hair.',
    '2 He\'s a [pilot]. He flies from Heathrow airport.',
    '3 She\'s a [receptionist]. She works in a hotel.',
    '4 He\'s an [architect]. He designs buildings.',
    '5 She\'s a [lawyer]. She works for a family law firm.',
    '6 He\'s a [taxi driver]. He knows all the streets of London.',
    '7 She\'s a [journalist]. She writes news stories.',
    '8 He\'s a [dentist]. He looks after people\'s teeth.',
    '9 She\'s a [nurse]. She works in the City Hospital.',
    '10 He\'s an [accountant]. He likes working with money.',
  ] },
  { p: 21, x: 6.8, y: 44.0, ex: '3', title: 'Conversations with jobs', kind: 'key', items: [
    '1 He\'s a [journalist].',
    '2 He\'s an [accountant]. … She\'s a [teacher].',
    '3 She\'s a [receptionist].',
    '4 Are you a [doctor]? — No, I\'m not. I\'m a [nurse]. — Oh, but I want to see a [doctor].',
    '5 I want to be a [pilot] … I want to be a [lawyer] … [Pilots] earn a lot too.',
  ] },

  // ---------- book p21 ----------
  { p: 22, x: 4.0, y: 10.9, ex: '1', title: 'Write the times', kind: 'key', items: [
    'It\'s five o\'clock. — It\'s [eight o\'clock].',
    'It\'s half past five. — It\'s [half past eleven].',
    'It\'s quarter past five. — It\'s [quarter past two].',
    'It\'s quarter to six. — It\'s [quarter to nine].',
    'It\'s five past five. — It\'s [ten past five].',
    'It\'s twenty past five. — It\'s [twenty-five past five].',
    'It\'s twenty-five to six. — It\'s [twenty to six].',
    'It\'s ten to six. — It\'s [five to six].',
  ] },
  { p: 22, x: 42.4, y: 55.5, ex: '4', title: 'Complete the conversations', kind: 'key', items: [
    '1 A Excuse me. Can you tell me the [time], please? B Yes, of course. It\'s [just] after [six] o\'clock. A Thank you [very] much.',
    '2 C [Excuse] me. Can you [tell] me the time, please? D I\'m [sorry]. I don\'t have a watch.',
    '3 F At [ten] [past] ten. … F It\'s [about] five past. … F No, no, five past [nine].',
    '4 G When does this lesson [end]? … G Oh dear! It\'s only [quarter] past three!',
  ] },

  // ========== Unit 3 ==========
  // ---------- book p22 ----------
  { p: 23, x: 8.0, y: 40.8, ex: '1', title: 'Lisa Parsons', kind: 'key', items: [
    'Where does she live? — [In New York.]',
    'Is she 24, 32, or 42? — [She\'s 24.]',
    'What are her two jobs? — [She works in a bookstore and she\'s a singer.]',
  ] },
  { p: 23, x: 47.5, y: 40.8, ex: '2', title: 'Lisa\'s two jobs', kind: 'key', items: [
    '1 live', '2 [work]', '3 [have]', '4 [love]', '5 [finish]', '6 [stay]',
    '7 [sing]', '8 [don\'t go]', '9 [don\'t do]', '10 [eat]', '11 [cook]',
  ] },

  // ---------- book p23 ----------
  { p: 24, x: 4.3, y: 6.5, ex: '3', title: 'Lisa\'s answers', kind: 'key', items: [
    '1 Where do you live? — [In] New York.',
    '2 Do you like your job? — Yes, I [do].',
    '3 Do you relax at weekends? — No, I [don\'t].',
    '4 Why don\'t you relax at weekends? — Because I [sing] in nightclubs.',
  ] },
  { p: 24, x: 4.3, y: 22.6, ex: '4', title: 'Roleplay: questions to Lisa', kind: 'key', items: [
    'How old [are you]? — I\'m 24.',
    '[Do] you live in New York? — Yes, I do.',
    'Where [do] you work? — In a bookstore.',
    'What time [do] you finish work? — Usually at 6 o\'clock.',
    'How many jobs [do] you have? — Just two.',
    '[Do] you like your jobs? — Oh, yes!',
    'Why [do] you like them? — Because I love singing and I love books.',
    'What [do] you do on Sundays? — I don\'t do much at all.',
    '[Do] you cook on Sundays? — Never! I\'m too tired.',
  ] },
  { p: 24, x: 57.2, y: 6.9, ex: 'GS 1', title: 'Grammar Spot: Present Simple', kind: 'key', items: [
    'I/you — work — don\'t work',
    'he/she/it — [works] — [doesn\'t work]',
    'we/they — [work] — [don\'t work]',
  ] },
  { p: 24, x: 57.2, y: 18.1, ex: 'GS 2', title: 'Grammar Spot: questions and answers', kind: 'key', items: [
    'Where [do] you work?',
    'Where [does] she work?',
    '[Do] you work in London? — Yes, I [do].',
    '[Does] he work in London? — No, he [doesn\'t].',
  ] },
  { p: 24, x: 57.2, y: 28.0, ex: 'GS 3', title: 'Grammar Spot: adverbs in the text', kind: 'key', items: [
    'I\'m [always] very busy…',
    'On weekdays I [usually] finish work at 6 o\'clock…',
    '…but [sometimes] I stay late…',
    'I [often] eat in a little restaurant…',
    'I [never] cook on a Sunday.',
  ] },
  { p: 24, x: 55.6, y: 41.8, ex: '5', title: 'Tick the sentence you hear', kind: 'key', items: [
    '1 [a] Lisa, why do you like your job?',
    '2 [b] Where do you live in New York?',
    '3 [a] What do you do on Tuesday evenings?',
    '4 [b] He really loves singing.',
    '5 [b] She eats a lot.',
    '6 [b] What does she do on Sundays?',
  ] },

  // ---------- book p24 ----------
  { p: 25, x: 6.8, y: 10.9, ex: '1', title: 'Complete and match', kind: 'key', items: [
    '1 What time do you get up? — d At about 7 o\'clock on weekdays.',
    '2 [Where] do you go on holiday? — [b] To Turkey or Egypt.',
    '3 [What] do you do on Sundays? — [e] I always relax.',
    '4 [When] do you do your homework? — [c] When I get home.',
    '5 [Who] do you live with? — [a] My mother and brothers.',
    '6 [Why] do you like your job? — [h] Because it\'s interesting.',
    '7 [How] do you travel to school? — [f] Usually by bus.',
    '8 [Do] you go out on Friday evenings? — [g] Yes, I do sometimes.',
  ] },
  { p: 25, x: 6.8, y: 56.4, ex: '4', title: 'Make the sentences opposite', kind: 'key', items: [
    '1 She isn\'t French.',
    '2 I like cooking.',
    '3 [She speaks Spanish.]',
    '4 [They don\'t want to learn English.]',
    '5 [We aren\'t tired and we don\'t want to go to bed.]',
    '6 [Roberto doesn\'t like watching football on TV, but he likes playing it.]',
    '7 [I don\'t work at home because I don\'t have a computer.]',
    '8 [Amelia is happy because she has a new car.]',
    '9 [I don\'t smoke, I don\'t drink, and I go to bed early.]',
    '10 [He smokes, he drinks, and he doesn\'t go to bed early.]',
  ] },
  { p: 25, x: 62.3, y: 11.3, ex: '1', title: 'Seasons and months', kind: 'key', items: [
    'Seasons: [spring, summer, autumn, winter]',
    'Months: [January, February, March, April, May, June, July, August, September, October, November, December]',
    'In Britain: spring — [March, April, May]; summer — [June, July, August]; autumn — [September, October, November]; winter — [December, January, February]',
  ] },
  { p: 25, x: 62.3, y: 22.0, ex: '2', title: 'Match the words and pictures', kind: 'key', items: [
    '[a] playing cards', '[b] watching TV', '[c] listening to music', '[d] going to the cinema',
    '[e] swimming', '[f] dancing', '[g] reading', '[h] playing computer games', '[i] sailing',
    '[j] cycling', '[k] playing tennis', '[l] going to the gym', '[m] playing golf', '[n] cooking',
    '[o] running', '[p] skiing', '[q] windsurfing',
    'Summer: [golf, swimming, windsurfing, tennis, sailing, cycling] · Winter: [skiing]',
  ] },

  // ---------- book p25 ----------
  { p: 26, x: 65.7, y: 6.1, ex: '3', title: 'What? When?', kind: 'key', items: [
    'Andy — [playing tennis] — [usually summer; spring and autumn if it\'s sunny]',
    'Roger — [skiing] — [January or February]',
    'Linda — [going to the gym, swimming] — [every morning]',
    'Ben & Josh — [windsurfing; golf and football; watching sport on TV; computer games] — [every summer; computer games after school]',
    'Sandra & Brian — [watching TV, cooking, playing cards] — [winter evenings; cards in summer on holiday]',
  ] },

  // ---------- book p26 ----------
  { p: 27, x: 6.8, y: 11.0, ex: '1', title: 'Match a verb with the words', kind: 'key', items: [
    'watch [TV], watch [French films]',
    'listen to [music]',
    'play [the piano], play [cards]',
    'go [dancing], go [shopping]',
    'get up [late]',
    'cook [dinner]',
  ] },
  { p: 27, x: 6.8, y: 33.8, ex: '2', title: 'What do they do?', kind: 'key', items: [
    'Jamie Cullum is [a songwriter and jazz pianist]. He enjoys [going to markets, French films, and playing cards] at weekends.',
    'Shilpa Shetty is [a film actress and model]. She enjoys [takeaway pizza, going to garden centres, and playing cards] at weekends.',
  ] },
  { p: 27, x: 6.8, y: 45.8, ex: '4', title: 'Questions about your person', kind: 'key', items: [
    'Jamie: 1 [In the town (London).] 2 [His wife and his brother.] 3 [He goes to a club — dancing.] 4 [Getting up late, making breakfast, playing the piano.] 5 [Portobello Market.] 6 [Sleeps late, cooks Sunday dinner, calls his parents and his nan.] 7 [Yes.] 8 [Yes.]',
    'Shilpa: 1 [In the country.] 2 [Her husband.] 3 [Watches TV, sometimes plays cards; takeaway pizza and green tea.] 4 [Getting up late, a long bath, walking barefoot on the grass, a pub lunch.] 5 [Small boutiques and garden centres.] 6 [Shopping, gardening, eating out, sometimes a spa hotel.] 7 [Yes.] 8 [Yes — Indian food, but not at weekends.]',
  ] },
  { p: 27, x: 6.8, y: 61.9, ex: '5', title: 'Compare Jamie and Shilpa', kind: 'sample', items: [
    'Both: [being with family and friends, getting up late, playing poker, shopping, cooking]',
    'Different: [Jamie stays in London, Shilpa goes to the country.] [Jamie goes dancing on Fridays, Shilpa stays at home.] [Jamie cooks at weekends, Shilpa doesn\'t.] [Jamie plays the piano, Shilpa listens to music.] [Shilpa watches TV, Jamie watches foreign films.] [Shilpa sometimes goes to a spa hotel.]',
  ] },

  // ---------- book p28 ----------
  { p: 29, x: 6.8, y: 36.6, ex: '4', title: 'Dr Susan Hall', kind: 'key', items: [
    '1 [It gives us money to live, and it gives structure to our everyday lives.]',
    '2 [It\'s important for a happy, balanced life — to relax with friends and family, not think about work all the time.]',
    '3 [You take your problems home too, so you never relax.]',
    '4 [Don\'t live to work, work to live! Life is more than work.]',
  ] },

  // ---------- book p29 ----------
  { p: 30, x: 3.6, y: 15.1, ex: '2', title: 'Who says the lines?', kind: 'key', items: [
    '1 [his host family]', '2 [Hakan]', '3 [his teacher]', '4 [Hakan]', '5 [Hakan]',
    '6 [the woman in the coffee bar]', '7 [Hakan]', '8 [another student]', '9 [his host family]',
  ] },
  { p: 30, x: 3.6, y: 45.0, ex: '3', title: 'Match a line in A with a line in B', kind: 'key', items: [
    '[2] Never mind. Come and sit down.',
    '1 Thanks. Same to you. See you later.',
    '[9] Good, thanks. Really interesting. How about you?',
    '[7] Yes, it is. Do sit down if you want.',
    '[3] Yes. I don\'t understand this exercise.',
    '[5] It means in two languages.',
    '[8] I\'m sorry. I don\'t speak French.',
    '[4] Sure. Good idea. It is hot in here, isn\'t it?',
    '[6] Pardon? Can you say that again?',
  ] },

  // ========== Unit 4 ==========
  // ---------- book p30 ----------
  { p: 31, x: 7.5, y: 25.9, ex: '1', title: 'Words in the correct column', kind: 'key', items: [
    'living room: [sofa, DVD player, armchair, bookshelves, mirror]',
    'kitchen: [cooker, fridge, table, oven, washing machine]',
    'street: [bus stop, post office, café, pavement, chemist\'s, traffic lights]',
  ] },
  { p: 31, x: 7.5, y: 52.0, ex: '1', title: 'Josie and Emily', kind: 'key', items: [
    'J [There\'s] a big living room.',
    'J And [there are] two bedrooms.',
    'J [There\'s] a new kitchen.',
    'E Wow! How many bathrooms [are there]?',
    'J Er … [there\'s] just one bathroom.',
    'E [Is there] a garden?',
    'J No, [there isn\'t] a garden.',
  ] },

  // ---------- book p31 ----------
  { p: 32, x: 5.4, y: 7.0, ex: 'GS', title: 'Grammar Spot: there is/are', kind: 'key', items: [
    'There is a shower. There [are] two bedrooms.',
    'There [isn\'t] a garden. There aren\'t any carpets.',
    '[Is] [there] a dining room?',
    'How many bathrooms [are] [there]?',
  ] },
  { p: 32, x: 4.0, y: 26.5, ex: '2', title: 'Describe the living room', kind: 'sample', items: [
    'There\'s a sofa. There are two armchairs.',
    '[There\'s a footstool.] [There\'s a plant.] [There are two windows.] [There are five bookshelves.]',
  ] },
  { p: 32, x: 4.0, y: 31.1, ex: '3', title: 'Questions about the flat', kind: 'key', items: [
    'Is there a shower? — [Yes, there is.]',
    'Is there a fridge? — [Yes, there is.]',
    'Is there a dining room? — [No, there isn\'t.]',
    'How many bedrooms are there? — [Two.]',
    'How many bathrooms are there? — [One.]',
    'How many armchairs are there? — [Two.]',
    'Are there any pictures? — [No, there aren\'t.]',
    'Are there any bookshelves? — [Yes, there are.]',
    'Are there any carpets? — [No, there aren\'t.]',
  ] },
  { p: 32, x: 50.9, y: 6.4, ex: '4', title: 'Prepositions', kind: 'key', items: [
    '1 The flat\'s in Queen\'s Road.',
    '2 It\'s [on] the first floor.',
    '3 It\'s [above] a chemist\'s.',
    '4 The chemist\'s is [next to] a clothes shop.',
    '5 There\'s a mobile phone shop [opposite] the clothes shop.',
    '6 There\'s a post office [near] the flat.',
    '7 The bus stop is [outside] the café.',
    '8 There\'s a bench [under] a tree.',
  ] },
  { p: 32, x: 50.5, y: 80.4, ex: '2', title: 'Nine mistakes', kind: 'key', items: [
    '[There aren\'t four bedrooms — there are only three.]',
    '[The view is of the park, not the town.]',
    '[There\'s only one bathroom.]',
    '[The kitchen is small, not very big.]',
    '[There isn\'t a dining room.]',
    '[The flat is on the third floor, not the second.]',
    '[There\'s only one sofa.]',
    '[There aren\'t any pictures on the wall.]',
    '[There isn\'t a TV or a DVD player.]',
  ] },

  // ---------- book p32 ----------
  { p: 33, x: 7.4, y: 11.0, ex: '1', title: 'What does Josie have?', kind: 'key', items: [
    '1 She has [some] plates.',
    '2 She has [a lot of] clothes.',
    '3 She [doesn\'t have any] glasses.',
    '4 She has [some] pictures.',
    '5 She has [a lot of] CDs.',
    '6 She [doesn\'t have any] mugs.',
    '7 She has [a lot of] shoes.',
    '8 She [doesn\'t have any] towels.',
    '9 She has [some] cups.',
  ] },
  { p: 33, x: 10.2, y: 77.2, ex: 'GS', title: 'Grammar Spot: some/any', kind: 'key', items: [
    '1 [Five plates gives the exact number. Some plates doesn\'t give the exact number. A lot of means a big number.]',
    '2 [We use some in positive sentences. We use any in negative sentences and questions.]',
  ] },
  { p: 33, x: 53.8, y: 8.4, ex: '2', title: 'What does she need?', kind: 'key', items: [
    'She needs [some glasses] and [some towels].',
    'She needs [a lamp], [a kettle], and [some mugs].',
  ] },
  { p: 33, x: 53.8, y: 19.2, ex: '3', title: 'Josie and Emily shopping', kind: 'key', items: [
    '1 How much is this [lamp], please?',
    '2 I like that [picture].',
    '3 How much are these [glasses]?',
    '4 I love those [towels]!',
    '5 Look at [those] [flowers]!',
    '6 Do you like [this] [kettle]?',
    '7 How much are [these] [mugs]?',
    '8 Look at [that] [coat]!',
  ] },

  // ---------- book p33 ----------
  { p: 34, x: 46.8, y: 10.0, ex: '1', title: 'some, any, or a', kind: 'key', items: [
    '1 I have a dictionary and some books on my table.',
    '2 There aren\'t [any] Chinese students in our class.',
    '3 Do we have [any] homework tonight?',
    '4 I need [some] help with this exercise.',
    '5 Is there [a] test this week?',
    '6 There are [some] difficult exercises in this book, but we have [a] very good teacher.',
  ] },
  { p: 34, x: 46.8, y: 37.0, ex: '3', title: 'Christina\'s handbag', kind: 'key', items: [
    '✓ [a phone, a diary, a lipstick, pens, keys, a purse]',
    '✗ [an address book, photos, an iPod, stamps]',
  ] },
  { p: 34, x: 46.8, y: 45.1, ex: '4', title: 'What does she have?', kind: 'key', items: [
    'She has [a phone, a purse, some pens, a diary, a lipstick, and some keys].',
    'She doesn\'t have [an address book, an iPod, any photos, or any stamps].',
  ] },
  { p: 34, x: 46.8, y: 67.0, ex: '6', title: 'Tick the correct sentence', kind: 'key', items: [
    '1 [Do you have a dictionary?]',
    '2 [Here are some photos of my children.]',
    '3 [I have a lot of books.]',
    '4 [Pete, this is Dave. Dave, this is Pete.]',
    '5 [I don\'t have any money.]',
    '6 [Look at those people over there.]',
  ] },

  // ---------- book p34 ----------
  { p: 35, x: 6.9, y: 15.5, ex: '2', title: 'True or false?', kind: 'key', items: [
    '1 ✓ The White House is more than 200 years old.',
    '2 [✗] (The President lives there with his family.)',
    '3 [✗] (The President\'s family lives there too.)',
    '4 [✓]',
    '5 [✓]',
    '6 [✓]',
  ] },
  { p: 35, x: 6.9, y: 36.4, ex: '4', title: 'Answer the questions', kind: 'key', items: [
    '1 [It\'s where the US President works, and it\'s also his private home.]',
    '2 [On the second and third floors.]',
    '3 [In the Oval Office.]',
    '4 [In the Queen\'s Bedroom or the Lincoln Bedroom.]',
    '5 [Three large windows behind the President\'s desk, and a fireplace at the other end.]',
    '6 [The curtains, the furniture, and the carpet.]',
    '7 [Nothing. It\'s free.]',
    '8 [About 250 (150 for the President and First Lady, and another 100 look after the building).]',
    '9 [Play tennis, go jogging, swim, watch a movie, play billiards, go bowling, read.]',
  ] },
  { p: 35, x: 6.9, y: 59.2, ex: '5', title: 'What do the numbers refer to?', kind: 'key', items: [
    '50 — There are fifty states.',
    '304 million — [the number of people in the US]',
    '6,000 — [people who visit the White House every day]',
    '132 — [rooms]',
    '35 — [bathrooms]',
    'five — [kitchens]',
    'six — [floors]',
    '140 — [guests in the State Dining Room]',
  ] },

  // ---------- book p35 ----------
  { p: 36, x: 59.0, y: 8.8, ex: '6', title: 'Things in the White House', kind: 'key', items: [
    'Is there a cinema? — [Yes, there is.]',
    'Are there many offices? — [Yes, there are a lot.]',
    'Are there many bathrooms? — [Yes, there are (35).]',
    'Is there a swimming pool? — [Yes, there is.]',
    'Is there a library? — [Yes, there is.]',
    'Are there any elevators? — [Yes, there are (three).]',
    'Is there a tennis court? — [Yes, there is.]',
    'Is there a vegetable garden? — [Yes, there is.]',
  ] },
  { p: 36, x: 59.0, y: 27.5, ex: '7', title: 'Match a verb with a place', kind: 'key', items: [
    'cook — kitchen',
    'sleep — [bedroom]',
    'have a shower — [bathroom]',
    'relax — [living room]',
    'eat — [dining room]',
    'work — [office]',
    'read — [library]',
    'grow vegetables — [garden]',
  ] },

  // ---------- book p36 ----------
  { p: 37, x: 6.8, y: 11.1, ex: '1', title: 'Words for good and bad', kind: 'key', items: [
    'good: excellent, [amazing], [lovely], [great], [fabulous], [wonderful], [fantastic]',
    'bad: [terrible], [horrible], [awful]',
  ] },
  { p: 37, x: 6.8, y: 51.0, ex: '3', title: 'Match the nouns with the adjectives', kind: 'key', items: [
    '1 Alice\'s new boyfriend — lovely',
    '2 Ben\'s new flat — [fantastic – fabulous]',
    '3 the weather — [horrible – terrible]',
    '4 the meal/the wine — [excellent – wonderful]',
    '5 new shoes — [great – amazing]',
    '6 the new teacher — [nice – awful]',
  ] },
  { p: 37, x: 53.7, y: 48.3, ex: '6', title: 'Adverb + adjective', kind: 'key', items: [
    '1 Angela\'s car — really expensive, [very fast]',
    '2 [Tom\'s house / Tom] — [really beautiful, very big, very rich]',
    '3 [new jeans] — [really nice, not very expensive]',
    '4 [Peter\'s new girlfriend] — [pretty, not very old]',
    '5 [Maria] — [very clever, really intelligent, not very nice]',
  ] },

  // ---------- book p37 ----------
  { p: 38, x: 3.5, y: 10.9, ex: '1', title: 'Say the numbers', kind: 'key', items: [
    '[one], [nineteen], [twenty-one], [thirty-six], [forty-five], [ninety-one], [ninety-four], [a hundred and seventy-one], [two hundred and fifteen], [a million]',
  ] },
  { p: 38, x: 3.5, y: 61.5, ex: '2', title: 'Say these numbers', kind: 'key', items: [
    '[eight], [ten], [twelve], [fifteen]',
    '[twenty], [thirty-two], [forty-five], [sixty]',
    '[seventy-six], [ninety-nine], [a hundred and eighty-seven], [two hundred and fifty]',
    '[three hundred], [a thousand], [a million]',
  ] },
  { p: 38, x: 3.5, y: 79.0, ex: '3', title: 'How do we say these numbers?', kind: 'key', items: [
    '1½ — [one and a half]',
    '2¼ — [two and a quarter]',
    '6.8 — [six point eight]',
    '17.5 — [seventeen point five]',
    '020 7481 6490 — [oh two oh, seven four eight one, six four nine oh]',
    '07861 56678 — [oh seven eight six one, five double six seven eight]',
  ] },
  { p: 38, x: 3.5, y: 87.2, ex: '4', title: 'Write the numbers you hear', kind: 'key', items: [
    '1 30', '2 [17]', '3 [13]', '4 [62]', '5 [07629 34480]', '6 [460]', '7 [16]', '8 [280,000]',
  ] },
  { p: 38, x: 50.6, y: 10.9, ex: '5', title: 'Say these prices', kind: 'key', items: [
    '1 £75 — [seventy-five pounds]',
    '2 £1.50 — [one pound fifty]',
    '3 45p — [forty-five p]',
    '4 $19.99 — [nineteen dollars ninety-nine (cents)]',
    '5 £270 — [two hundred and seventy pounds]',
    '6 €12 — [twelve euros]',
  ] },
  { p: 38, x: 50.6, y: 48.5, ex: '6', title: 'Numbers and prices you hear', kind: 'key', items: [
    '1 [£6.50]', '2 [£24]', '3 [£18,000]', '4 [£9,500]', '5 [60p]', '6 [$49]', '7 [€150]', '8 [1.4]',
  ] },

  // ========== Unit 5 ==========
  // ---------- book p38 ----------
  { p: 39, x: 6.3, y: 40.6, ex: '1', title: 'What Alfie says', kind: 'key', items: [
    'Yes, he can. He [can] [fly] at the speed of light,',
    'he [can] [see] through buildings,',
    'and he [can] [speak] every language in the world!',
  ] },
  { p: 39, x: 6.3, y: 63.0, ex: '2', title: 'The rest of the conversation', kind: 'key', items: [
    'Languages: [French and Spanish]',
    'Sports: [skateboarding and skiing]',
  ] },
  { p: 39, x: 6.3, y: 69.7, ex: '3', title: 'can or can\'t + verb', kind: 'key', items: [
    '1 \'Can you [speak] any languages?\' \'Yes, I can. I [can] [speak] French and Spanish.\'',
    '2 \'You [can\'t] [speak] French at all!\'',
    '3 \'I [can] skateboard! You [can\'t]!\'',
    '4 \'[Can] you [ski]?\' \'I [can] [ski] a bit, but my mum and dad [can] [ski] brilliantly.\'',
    '5 \'Superman [can] [do] everything. There\'s nothing Superman [can\'t] [do]!\'',
  ] },

  // ---------- book p39 ----------
  { p: 40, x: 7.0, y: 13.2, ex: 'GP 1', title: 'Grammar: can and can\'t', kind: 'key', items: [
    'I can, you can, he [can], she [can], it [can], we [can], they [can]',
    '[Can/can\'t is the same for all persons — no -s, and no do/don\'t.]',
  ] },
  { p: 40, x: 45.4, y: 10.3, ex: '1', title: 'Can Ivy…?', kind: 'key', items: [
    'speak a foreign language — ✓',
    'cook — ✗',
    'skateboard — [✗]',
    'swim — [✓]',
    'play tennis — [✓]',
    'ski — [✓]',
    'play any musical instruments — [✗]',
  ] },
  { p: 40, x: 45.4, y: 37.0, ex: '3', title: 'Adverbs about Ivy', kind: 'key', items: [
    '1 She can speak Spanish a little bit.',
    '2 She can\'t cook [at all].',
    '3 She can swim [very well].',
    '4 She can play tennis [quite well].',
    '5 She can ski [really well].',
    '6 Her dad can play the guitar [brilliantly].',
    '7 Her mum can play the piano [a bit].',
    '8 She can\'t play anything [at all].',
  ] },
  { p: 40, x: 45.4, y: 78.5, ex: '6', title: 'Underline what you hear', kind: 'key', items: [
    '1 She [can] cook.',
    '2 I [can\'t] hear you.',
    '3 They [can\'t] come to the party.',
    '4 [Can] you see my glasses anywhere?',
    '5 You [can\'t] always get what you want.',
    '6 [Can] you do the homework?',
  ] },

  // ---------- book p40 ----------
  { p: 41, x: 6.6, y: 11.8, ex: '1', title: 'Present and past', kind: 'sample', items: [
    '1 It\'s [Monday]. — It was [Sunday].',
    '2 It\'s [May]. — It was [April].',
    '3 [Yes], it is. / [No], it isn\'t. — [Yes], it was. / [No], it wasn\'t.',
    '4 I\'m in/at [school]. — I was in/at [home].',
    '5 They\'re in/at [work]. — They were in/at [home].',
    '6 [Yes], I am. / [No], I\'m not. — [Yes], I was. / [No], I wasn\'t.',
    '7 [Yes], I can. / [No], I can\'t. — [Yes], I could. / [No], I couldn\'t.',
    '8 Yes, [he/she] can. / No, [he/she] can\'t. — Yes, [he/she] could. / No, [he/she] couldn\'t.',
  ] },
  { p: 41, x: 9.0, y: 61.0, ex: 'GP 1', title: 'Past Simple of to be', kind: 'key', items: [
    'I — was — wasn\'t',
    'you — were — weren\'t',
    'he/she/it — [was] — [wasn\'t]',
    'we — were — [weren\'t]',
    'they — [were] — [weren\'t]',
  ] },
  { p: 41, x: 9.0, y: 76.5, ex: 'GP 2', title: 'The past of can', kind: 'key', items: [
    'Positive: [could]   Negative: [couldn\'t] (all persons)',
  ] },
  { p: 41, x: 48.6, y: 66.0, ex: '3', title: 'Past of to be and can', kind: 'key', items: [
    '1 I wasn\'t at school yesterday because I [was] ill.',
    '2 My parents [weren\'t] at work last week. They [were] on holiday in Spain.',
    '3 Where [were] you last night? I phoned, but you [weren\'t] at home.',
    '4 I [could] read and write when I [was] just five.',
    '5 My sister [couldn\'t] read until she [was] seven.',
  ] },

  // ---------- book p41 ----------
  { p: 42, x: 4.5, y: 9.8, ex: '1', title: 'Child prodigies', kind: 'key', items: [
    '[Marc Yu can play the piano. Cleopatra Stratan can sing.]',
    '[They are very young, but they have special talents.]',
  ] },
  { p: 42, x: 6.0, y: 43.0, ex: '2', title: 'Marc Yu', kind: 'key', items: [
    '1 He was born on January [5], 19[99], in California, USA.',
    '2 He [can] [play] the piano and the cello.',
    '3 He [could] [play] the piano when he [was] [three].',
    '4 He [could] [play] the cello when he [was] [four].',
    'They [were] a big success.',
  ] },
  { p: 42, x: 4.5, y: 65.3, ex: '3', title: 'Sentences about Cleopatra', kind: 'key', items: [
    '1 [She was born on October 7th, 2002, in Moldova, near Romania.]',
    '2 [She could sing beautifully when she was just two years old.]',
    '3 [When she was three, she made an album, La vârsta de trei ani.]',
    '4 [Her album was a big success. 150,000 were sold round the world.]',
  ] },
  { p: 42, x: 56.0, y: 6.8, ex: '5', title: 'Pablo Picasso', kind: 'key', items: [
    '1 was … born', '2 [was]', '3 [was]', '4 [Were]', '5 [weren\'t]', '6 [weren\'t]', '7 [was]',
    '8 [was]', '9 [was]', '10 [was]', '11 [was]', '12 [could]', '13 [could]', '14 [was]',
  ] },

  // ---------- book p42 ----------
  { p: 43, x: 6.8, y: 16.4, ex: '2', title: 'Nicola Benedetti', kind: 'key', items: [
    '1 [She\'s a violinist.]',
    '2 [She was BBC Young Musician of the Year.]',
    '3 [In Chiswick, west London, near her sister.]',
    '4 [She\'s a violinist too.]',
    '5 [He\'s a businessman.]',
  ] },
  { p: 43, x: 6.8, y: 28.9, ex: '3', title: 'Group A / Group B', kind: 'key', items: [
    'Nicola: 1 [No, it wasn\'t.] 2 [Four.] 3 [Yes, he did.] 4 [Poor.] 5 [It\'s important to Gio, but for Nicola success isn\'t about money.] 6 [No, he doesn\'t.] 7 [She teaches him about music, he teaches her about business.] 8 [At family occasions, like weddings and Christmas.]',
    'Gio: 1 [Near Lucca in Italy.] 2 [He couldn\'t afford it.] 3 [Dry cleaning.] 4 [Four.] 5 [No, he can\'t.] 6 [He likes country and western music. He doesn\'t like classical music.] 7 [Yes, she does.] 8 [He\'s very sentimental — he cries when he sees Nicola play.]',
  ] },
  { p: 43, x: 6.8, y: 71.5, ex: '5', title: 'Who or what do the adjectives refer to?', kind: 'key', items: [
    'busy — Nicola\'s father was always busy.',
    'hard-working — [Gio / Nicola\'s father]',
    'poor — [Gio\'s family]',
    'important — [money, to Gio]',
    'classical — [music — Gio doesn\'t like it much]',
    'close — [Nicola and her sister]',
    'difficult — [life for Gio when he first came to Scotland]',
    'expensive — [the Jaguar car]',
    'independent — [Nicola]',
    'proud — [Gio is proud of Nicola; Scotland is proud of her]',
    'passionate — [Nicola, when she plays]',
    'sentimental — [Gio — he cries]',
  ] },

  // ---------- book p44 ----------
  { p: 45, x: 6.0, y: 13.8, ex: '1', title: 'Noun + noun', kind: 'key', items: [
    '[bookshop/bookstore], [motorway], [motorbike], [sunglasses], [living room], [bus stop],',
    '[handbag], [railway station], [car park], [traffic lights], [petrol station]',
  ] },
  { p: 45, x: 6.0, y: 51.0, ex: '3', title: 'Noun + noun you hear', kind: 'key', items: [
    '1 post office, [bus stop], [traffic lights]',
    '2 [sunglasses], [handbag], [living room]',
    '3 [petrol station], [railway station], [car park], [motorway]',
  ] },
  { p: 45, x: 52.8, y: 13.4, ex: '5', title: 'Verb + noun', kind: 'key', items: [
    'send — a lot of text messages',
    'drive — [a car]',
    'ride — [a motorbike]',
    'speak — [three languages]',
    'earn — [a lot of money]',
    'live — [on the third floor]',
    'play — [the guitar]',
    'wear — [a suit and tie]',
    'look after — [children]',
    'watch — [TV a lot]',
  ] },
  { p: 45, x: 52.8, y: 51.9, ex: '7', title: 'Verb + noun you hear', kind: 'key', items: [
    '1 [send a lot of text messages]', '2 [earn a lot of money]', '3 [live on the third floor]',
    '4 [wear a suit and tie]', '5 [play the guitar]', '6 [ride a motorbike]', '7 [drive a car]',
    '8 [look after children]', '9 [watch TV a lot]', '10 [speak foreign languages]',
  ] },
  { p: 45, x: 52.8, y: 64.6, ex: '9', title: 'Prepositions', kind: 'key', items: [
    '1 Do you like listening to music?',
    '2 What sort [of] music do you like?',
    '3 Where\'s your girlfriend [from]? Is she Mexican?',
    '4 Is Paula married [to] Mike?',
    '5 Do you want to come shopping [with] me?',
    '6 Were there any good programmes [on] television last night?',
    '7 What do you want [for] your birthday?',
    '8 Can I speak [to] Dave? Is he [at] work today?',
  ] },

  // ---------- book p45 ----------
  { p: 46, x: 2.6, y: 10.3, ex: '1', title: 'Complete the conversations', kind: 'key', items: [
    '1 A Can I have a [coffee], please? — [in a café]',
    '2 A Can you open the [door] for me, please? C Sure. No [problem]. — [at a hospital entrance]',
    '3 A Could I have the [menu], please? — [in a restaurant]',
    '4 A Could you [tell] me the [time], please? — [at a station / in the street]',
  ] },
  { p: 46, x: 2.6, y: 50.5, ex: '2', title: 'Differences in A\'s requests', kind: 'key', items: [
    '[In 1 and 2 the speaker uses Can I/you…?; in 3 and 4, Could I/you…?]',
    '[Could…? is a little more polite than Can…?]',
  ] },
  { p: 46, x: 2.6, y: 76.0, ex: '4', title: 'Can/Could I…? or Can/Could you…?', kind: 'key', items: [
    '1 Can I have a cheese sandwich, please?',
    '2 [Could you] post this letter for me, please?',
    '3 [Can you] give me your email address?',
    '4 [Can I] speak to you for a moment?',
    '5 [Could you] lend me £20 till tomorrow?',
    '6 [Can you] give me a hand with this box?',
  ] },

  // ========== Unit 6 ==========
  // ---------- book p46 ----------
  { p: 47, x: 6.2, y: 54.5, ex: '2', title: 'Text A: The woman', kind: 'key', items: [
    '1 is', '2 [lives]', '3 [has]', '4 [works]', '5 [earns]', '6 [gives]',
    'Is she rich? — [Yes, she is.]',
    'Where does she live and work? — [She lives in California. She works in Chicago.]',
    'How much does she earn? — [Millions of dollars every year.]',
  ] },
  { p: 47, x: 6.2, y: 64.0, ex: '3', title: 'Text B: Her childhood', kind: 'key', items: [
    'Where and when was she born? — [In Kosciusko, Mississippi, on January 29, 1954.]',
    'Were her parents rich? — [No, they weren\'t. They were very poor.]',
    'Was she clever? — [Yes, she was. She could read before she was three.]',
  ] },
  { p: 47, x: 7.8, y: 76.4, ex: 'GS', title: 'Grammar Spot: Past Simple', kind: 'key', items: [
    '1 Now she [lives] in California. When she was a child, she [lived] with her grandmother.',
    '2 [worked], [cleaned], [received], [studied], [started]',
    '[Add -ed or -d to the verb.]',
  ] },

  // ---------- book p47 ----------
  { p: 48, x: 61.6, y: 3.9, ex: '4', title: 'Past Simple of these verbs', kind: 'key', items: [
    'watch — [watched]', 'interview — [interviewed]', 'study — [studied]', 'talk — [talked]',
    'move — [moved]', 'start — [started]', 'earn — [earned]', 'open — [opened]',
  ] },
  { p: 48, x: 61.6, y: 14.2, ex: '5', title: 'Text C: Her success', kind: 'key', items: [
    '1 moved', '2 [talked]', '3 [watched]', '4 [interviewed]', '5 [watched]',
    '6 [earned]', '7 [started]', '8 [opened]', '9 [studied]',
  ] },
  { p: 48, x: 64.8, y: 21.4, ex: 'GS 1', title: 'A question and a negative', kind: 'key', items: [
    'Question: [So what did I do?]',
    'Negatives: [We didn\'t have much money.] […the children she didn\'t have in real life.]',
  ] },
  { p: 48, x: 61.6, y: 40.1, ex: '6', title: 'Questions about Oprah', kind: 'key', items: [
    '1 Where did her father work?',
    '2 What [did] her mother do?',
    '3 Who [did] Oprah [live] with?',
    '4 What [did] she [study]?',
    '5 When [did] she [interview] Michael Jackson?',
    '6 How much [did] she [earn] last year?',
    '7 When [did] she [open] the girls\' school?',
    '8 [Did] her parents [have] much money?',
  ] },

  // ---------- book p48 ----------
  { p: 49, x: 5.6, y: 10.0, ex: '1', title: 'did, was, or were', kind: 'key', items: [
    '1 Where were your parents born?',
    '2 Where [did] you live when you [were] a child?',
    '3 [Did] you live in a house or a flat?',
    '4 When [did] you start school?',
    '5 Who [was] your first teacher?',
    '6 Who [was] your best friend?',
    '7 When [did] you learn to read and write?',
    '8 When [did] you get your first mobile phone?',
  ] },
  { p: 49, x: 5.6, y: 58.6, ex: '5', title: '/t/ /d/ /ɪd/', kind: 'key', items: [
    '/t/ — [talked], [watched]',
    '/d/ — [cleaned], [received], [studied], [moved], [interviewed], [opened]',
    '/ɪd/ — [wanted], [decided]',
  ] },
  { p: 49, x: 54.3, y: 10.6, ex: '1', title: 'Irregular verbs', kind: 'key', items: [
    'be — was/were', 'begin — [began]', 'can — [could]', 'catch — [caught]', 'come — [came]',
    'get — [got]', 'give — [gave]', 'go — [went]', 'have — [had]', 'leave — [left]',
    'lose — [lost]', 'make — [made]', 'meet — [met]', 'send — [sent]', 'take — [took]',
    'win — [won]', 'write — [wrote]',
  ] },
  { p: 49, x: 54.3, y: 37.1, ex: '2', title: 'Ben\'s ups and downs', kind: 'key', items: [
    'Up: [He made his first million at 17 — one of the first dotcom millionaires.]',
    'Down: [Then he lost it all.]',
    'Up: [Now he\'s a millionaire again.]',
  ] },
  { p: 49, x: 54.3, y: 77.0, ex: '5', title: 'Questions about Ben', kind: 'key', items: [
    '1 [What did Ben\'s parents do?] — [His father was an accountant and his mother was an artist.]',
    '2 [Where did he go to school?] — [A small village school in Devon.]',
    '3 [Why did he have problems at school?] — [He was dyslexic.]',
    '4 [What did his dad give him in 1989?] — [A computer.]',
    '5 [Who did he help with their computers?] — [His friends and his parents\' friends.]',
    '6 [Why did he leave school at 16?] — [His computer company was very successful.]',
    '7 [When did he win \'Young Entrepreneur of the Year\'?] — [In 2000.]',
    '8 [Why did he lose his money?] — [Dotcom businesses everywhere went down.]',
  ] },

  // ---------- book p49 ----------
  { p: 50, x: 4.5, y: 39.5, ex: '3', title: 'Profile of Ben Way', kind: 'key', items: [
    '1 was', '2 [went]', '3 [couldn\'t]', '4 [gave]', '5 [took]', '6 [wrote]',
    '7 [began]', '8 [left]', '9 [made]', '10 [had]', '11 [won]', '12 [lost]',
  ] },
  { p: 50, x: 46.0, y: 10.0, ex: '1', title: 'Verbs in the Past Simple', kind: 'key', items: [
    '1 My granddad was born in 1932. He [died] in 2009.',
    '2 My parents [met] in London in 1983. They [got] married in 1985.',
    '3 I [arrived] late for the lesson. It [began] at 2 o\'clock.',
    '4 I [caught] the bus to school today. It [took] just 40 minutes.',
    '5 I [had] a very busy morning. I [sent] 30 emails before 10 o\'clock.',
    '6 Our football team [won] the match 3–0. Your team [lost] again.',
    '7 My brother [earned] a lot of money in his last job, but he [left] because he [didn\'t like] it.',
    '8 I [studied] Chinese for four years, but when I [went] to Shanghai, I [couldn\'t] understand a word.',
  ] },

  // ---------- book p50 ----------
  { p: 51, x: 5.9, y: 10.8, ex: '1', title: 'The Businessman and the Fisherman', kind: 'key', items: [
    'Where was the businessman? — [On holiday in a fishing village in the south of Mexico.]',
    'Who did he meet? — [A young fisherman.]',
    'Did he like the fish? — [Yes, he did.]',
    'What did he say? — [\'What beautiful tuna!\']',
    'What nationality were the two men? — [The businessman was American; the fisherman was Mexican.]',
  ] },
  { p: 51, x: 5.9, y: 33.1, ex: '3', title: 'True or false?', kind: 'key', items: [
    '1 [✓]',
    '2 [✗] It took him two hours.',
    '3 [✓]',
    '4 [✗] He is never bored.',
    '5 [✓]',
    '6 [✓]',
    '7 [✓]',
    '8 [✗] He went home with his family.',
  ] },
  { p: 51, x: 5.9, y: 64.0, ex: '4', title: 'Complete the story', kind: 'key', items: [
    '1 [two]', '2 [didn\'t]', '3 [have]', '4 [late]', '5 [some]', '6 [went]',
    '7 [studied]', '8 [earn]', '9 [about]', '10 [stop]', '11 [did]', '12 [caught]',
  ] },
  { p: 51, x: 5.9, y: 79.5, ex: '?', title: 'The moral of the story', kind: 'sample', items: [
    '[\'Understand what really matters in life.\']',
  ] },

  // ---------- book p52 ----------
  { p: 53, x: 7.0, y: 10.2, ex: '1', title: 'Feelings and pictures', kind: 'key', items: [
    'a [bored]', 'b [excited]', 'c [tired]', 'd [interested]', 'e [worried]', 'f [annoyed]',
  ] },
  { p: 53, x: 7.0, y: 66.5, ex: '2', title: 'Complete the sentences', kind: 'key', items: [
    '1 I went to bed late last night, so I\'m very [tired] today.',
    '2 My football team lost again. I\'m really [annoyed]!',
    '3 I won £20,000 in the lottery. I\'m so [excited]!',
    '4 I can\'t find my house keys. I\'m really [worried].',
    '5 I have nothing to do and nowhere to go. I am so [bored]!',
    '6 The professor gave a great lecture. I was really [interested].',
  ] },
  { p: 53, x: 51.0, y: 14.6, ex: '3', title: '-ed or -ing?', kind: 'key', items: [
    '1 Life in New York is very [exciting]. It\'s my birthday tomorrow. I\'m really [excited].',
    '2 The marathon runners were very [tired]. That game of tennis was very [tiring].',
    '3 The child\'s behaviour was really [annoying]. The teacher was [annoyed] because nobody did the homework.',
    '4 We were very [worried] when we heard the news. The news is very [worrying].',
  ] },
  { p: 53, x: 51.0, y: 38.6, ex: '4', title: 'Complete the conversations', kind: 'key', items: [
    '1 It was [boring]. … It was really [interesting], and very funny.',
    '2 I\'m very [worried]. … I was so [tired] today…',
    '3 Really [exciting]! … I was [bored]. … But it wasn\'t [boring] at all! … now I\'m [annoyed]…',
    '4 Was she [annoyed] that I forgot? … she was just [worried]…',
  ] },
  { p: 53, x: 51.0, y: 91.0, ex: '5', title: '-ed and -ing on p51', kind: 'key', items: [
    '[Aren\'t you bored?]',
    '[Why, that\'s the exciting part!]',
    '[The young fisherman didn\'t look excited.]',
  ] },

  // ---------- book p53 ----------
  { p: 54, x: 3.6, y: 10.6, ex: '1', title: 'Ordinal numbers', kind: 'key', items: [
    '1st first', '2nd [second]', '3rd [third]', '4th [fourth]', '5th [fifth]', '6th [sixth]',
    '10th [tenth]', '12th [twelfth]', '13th [thirteenth]', '16th [sixteenth]', '17th [seventeenth]',
    '20th [twentieth]', '22nd [twenty-second]', '30th [thirtieth]', '31st [thirty-first]',
  ] },
  { p: 54, x: 43.6, y: 37.0, ex: '4', title: 'Say the dates', kind: 'key', items: [
    '1 April — [the first of April / April the first]',
    '2 March — [the second of March / March the second]',
    '17 September — [the seventeenth of September]',
    '9 November — [the ninth of November]',
    '29/2/76 — [the twenty-ninth of February, nineteen seventy-six]',
    '9/12/83 — [the ninth of December, nineteen eighty-three]',
    '3/10/99 — [the third of October, nineteen ninety-nine]',
    '31/5/2005 — [the thirty-first of May, two thousand and five]',
    '15/7/2015 — [the fifteenth of July, two thousand and fifteen / twenty fifteen]',
  ] },
  { p: 54, x: 43.6, y: 58.2, ex: '5', title: 'Dates you hear', kind: 'key', items: [
    '1 [October the 31st]', '2 [the 23rd of June]', '3 [July the 15th]',
    '4 [March the 4th, 2012]', '5 [the 18th of February, 2020]', '6 [the 17th of September, 1960]',
  ] },
  { p: 54, x: 43.6, y: 72.2, ex: '6', title: 'Questions about dates', kind: 'sample', items: [
    '3 Christmas Day — [the 25th of December]',
    '4 Valentine\'s Day — [the 14th of February]',
    '7 [the 21st century]',
  ] },

  // ========== Unit 7 ==========
  // ---------- book p54 ----------
  { p: 55, x: 6.5, y: 25.6, ex: '1', title: '20th century quiz', kind: 'key', items: [
    '1 [b] in 1908',
    '2 [c] in 1927',
    '3 [a] about 100 years ago',
    '4 [c] in 1917',
    '5 [b] about 60 years ago',
    '6 [b] about 60 million',
    '7 [c] in 1989',
    '8 [a] on 20 July',
    '9 [b] 17',
    '10 [b] at midnight on 31/12/2000',
  ] },

  // ---------- book p55 ----------
  { p: 56, x: 3.5, y: 10.8, ex: '1', title: 'Things they talk about', kind: 'key', items: [
    '✓ [programmes on TV], [pocket money], [housework], [comics], [holidays]',
    '✗ [sport]',
  ] },
  { p: 56, x: 3.5, y: 57.8, ex: '2', title: 'Tommy\'s questions', kind: 'key', items: [
    '1 How many TV channels were there? — [Only two.]',
    '2 [What] [time] did programmes begin? — [At 4.30.]',
    '3 [How] [much] pocket money [did] you get? — [Sixpence a week.]',
    '4 [What] [sort] of comics [did] you [buy]? — [The Eagle — adventure stories — and Superman.]',
    '5 [Where] [did] you [go] on holiday? — [To the seaside, in England.]',
    '6 [How] [did] you [get] there? — [My father drove.]',
    '7 [Why] [did] you go to the same place? — [Because we all liked it there.]',
  ] },
  { p: 56, x: 3.5, y: 78.4, ex: '3', title: 'What did Bill say?', kind: 'key', items: [
    'colour TV — It wasn\'t a colour TV like now.',
    'TV programmes — [There weren\'t programmes all day long.]',
    'dishwashers — [We didn\'t have dishwashers in those days!]',
    'planes — [I never took a plane like people do now!]',
    'holidays — [People didn\'t go abroad.]',
    'pocket money — [He didn\'t give me much, did he?]',
  ] },
  { p: 56, x: 3.5, y: 86.1, ex: '4', title: 'Imagine what Bill said', kind: 'key', items: [
    'We didn\'t have computers in those days!',
    '[We didn\'t have mobile phones in those days!]',
    '[We didn\'t have fast food in those days!]',
    '[We didn\'t have theme parks in those days!]',
  ] },
  { p: 56, x: 53.8, y: 60.8, ex: 'GS 1', title: 'Past Simple forms', kind: 'key', items: [
    'I want to go. — I wanted to go.',
    'He loves it. — [He loved it.]',
    'Do you watch TV? — [Did you watch TV?]',
    'Where does she work? — [Where did she work?]',
    'I don\'t buy sweets. — [I didn\'t buy sweets.]',
    'They don\'t go on holiday. — [They didn\'t go on holiday.]',
  ] },
  { p: 56, x: 53.8, y: 78.8, ex: 'GS 2', title: 'Time expressions', kind: 'key', items: [
    'Henry Ford sold the first Model-T [in] 1908.',
    'I was born [on] 17 April 1991.',
    'Our lessons begin [at] nine o\'clock.',
    'Tommy saw Bill two days [ago].',
  ] },

  // ---------- book p56 ----------
  { p: 57, x: 6.5, y: 7.4, ex: '1', title: 'Questions and answers', kind: 'key', items: [
    '1 Where did you go? — To the shops.',
    '2 [When] [did you go]? — [Yesterday.]',
    '3 [Who] [did you go with]? — [A friend from work.]',
    '4 [How] [did you get there]? — [By bus.]',
    '5 [Why] [did you go]? — [Because I wanted to.]',
    '6 [What] [did you buy]? — [A shirt.]',
    '7 [How many] [did you buy]? — [Only one.]',
    '8 [How much] [did you pay]? — [£29.]',
  ] },
  { p: 57, x: 56.8, y: 7.4, ex: '3', title: 'in, at, or on', kind: 'key', items: [
    '[at] seven o\'clock', '[on] Saturday', '[at] night', '[in] 2009', '[in] summer',
    '[in] the morning', '[on] Sunday morning', '[in] July', '[at] the weekend', '[in] the twentieth century',
  ] },
  { p: 57, x: 56.8, y: 61.6, ex: '6', title: 'Tick the sentence you hear', kind: 'key', items: [
    '1 [a] Where do you want to go?',
    '2 [b] I didn\'t go to college.',
    '3 [b] Where was he?',
    '4 [a] Do you like it?',
    '5 [a] Why did he come?',
    '6 [a] She doesn\'t work there.',
  ] },

  // ---------- book p57 ----------
  { p: 58, x: 2.4, y: 10.4, ex: '1', title: 'Alisa\'s answers', kind: 'key', items: [
    '[No, I\'m Russian. I was born in St Petersburg.]',
    '[Yes, I lived with my parents and two sisters in a house near the university. My father worked at the university.]',
    '[Yes, he was a professor of psychology.]',
    '[She was a doctor. She worked in a hospital.]',
    '[I went to a High School. I was there for ten years, then when I was 18 I went to university.]',
    '[I studied philosophy and education at university in Moscow. I was there for four years.]',
    '[No, I travelled in the States for six months. I worked in a summer camp near Yellowstone National Park. It was amazing!]',
    '[I work in a junior high school in Paris. I teach Russian and English.]',
    '[Nice to meet you too. Bye!]',
  ] },

  // ---------- book p58 ----------
  { p: 59, x: 6.4, y: 10.8, ex: '1', title: 'Who are the men?', kind: 'key', items: [
    '[Louis Blériot made the first air journey in 1909.]',
    '[Neil Armstrong was the first man on the moon in 1969.]',
  ] },
  { p: 59, x: 6.4, y: 15.4, ex: '2', title: 'What was \'phenomenal\'?', kind: 'key', items: [
    '[The progress in aviation in the 20th century.]',
  ] },
  { p: 59, x: 6.4, y: 18.0, ex: '3', title: 'Group A / Group B', kind: 'key', items: [
    'Blériot: 1 [In Calais, France, on July 25, 1909.] 2 [37 minutes.] 3 [22 miles.] 4 [40 miles per hour.] 5 [In Dover, England.] 6 [It was the start of modern aviation.]',
    'Apollo 11: 1 [At the Kennedy Space Center, Florida, on 16 July 1969, at 9.30 a.m.] 2 [Three days.] 3 [250,000 miles.] 4 [21,600 miles per hour.] 5 [On the Sea of Tranquility on the moon.] 6 [It was the beginning of man\'s exploration of space.]',
  ] },
  { p: 59, x: 6.4, y: 42.6, ex: '5', title: 'Blériot and Apollo 11', kind: 'key', items: [
    '1 [He couldn\'t swim, he couldn\'t walk well (an injury to his leg), and he didn\'t have a compass.]',
    '2 [No, it was foggy.]',
    '3 [He saw a French journalist waving a flag.]',
    '4 [£1,000.]',
    '5 [They were too excited.]',
    '6 [\'That\'s one small step for man, one giant leap for mankind.\']',
    '7 [Two and a half hours.]',
    '8 [A US flag.]',
  ] },
  { p: 59, x: 6.4, y: 71.6, ex: '6', title: 'What do the numbers refer to?', kind: 'key', items: [
    '37 — [Blériot\'s age, and the minutes the flight took]',
    '4.30 — [the time he took off]',
    '40 — [miles per hour]',
    '250 — [feet above the sea]',
    '1,000 — [the prize in pounds]',
    'three — [astronauts; days to get to the moon]',
    '30 — [times it circled the moon]',
    '8.17 — [the time it landed (a.m., 20 July 1969)]',
    '600 million — [people who watched on TV]',
    'one — [\'one small step… one giant leap\']',
    '22 — [hours on the moon]',
  ] },

  // ---------- book p60 ----------
  { p: 61, x: 6.0, y: 42.7, ex: '2', title: 'Adjective or adverb?', kind: 'key', items: [
    '1 a bad — [adjective]   b badly — [adverb]',
    '2 a carefully — [adverb]   b careful — [adjective]',
    '3 a hard — [adjective]   b hard, hard — [adverb] (irregular)',
  ] },
  { p: 61, x: 6.0, y: 56.6, ex: '3', title: 'Match a verb with an adverb', kind: 'key', items: [
    'work — [carefully / fast / hard]',
    'speak English — [fluently / carefully / fast]',
    'breathe — [deeply / hard]',
    'do my homework — [carefully / fast / late]',
    'drive — [carefully / fast]',
    'arrive — [late]',
  ] },
  { p: 61, x: 6.0, y: 74.9, ex: '4', title: 'Put the word in brackets in', kind: 'key', items: [
    '1 We had a [terrible] holiday in Italy.',
    '2 [Unfortunately], I lost my passport.',
    '3 I contacted the police [immediately].',
    '4 It was a [long] journey because the traffic was bad.',
    '5 Fortunately, Sally\'s a [good] driver.',
    '6 She speaks Italian [well].',
  ] },
  { p: 61, x: 51.8, y: 9.2, ex: '5', title: 'Complete with your own ideas', kind: 'sample', items: [
    '1 It started to rain, but fortunately, I had an umbrella.',
    '2 …but unfortunately, [I couldn\'t go / I was ill].',
    '3 Fortunately, [we had enough food].',
    '4 Unfortunately, [they were very expensive / they didn\'t have my size].',
    '5 …when suddenly [the phone rang / I heard a loud noise].',
    '6 Immediately, [I called an ambulance].',
    '7 I really [liked her].',
    '8 …and went slowly [downstairs].',
  ] },
  { p: 61, x: 51.8, y: 74.5, ex: '6', title: 'What did he hear?', kind: 'key', items: [
    '[He heard a noise — two men talking quietly downstairs. It was the television!]',
  ] },
  { p: 61, x: 51.8, y: 78.8, ex: '7', title: 'Order of the adverbs', kind: 'key', items: [
    '[1] suddenly', '[2] slowly', '[3] carefully', '[4] quietly',
    '[5] immediately', '[6] really', '[7] fortunately', '[8] quickly',
  ] },

  // ---------- book p61 ----------
  { p: 62, x: 3.7, y: 10.7, ex: '1', title: 'Special days and pictures', kind: 'key', items: [
    'Special days: [birthday, Valentine\'s Day, Easter Day, Mother\'s Day, Hallowe\'en, wedding day, New Year\'s Eve, Christmas Day]',
    'Pictures (left to right): [wedding day], [Mother\'s Day], [Valentine\'s Day], [Easter Day], [Hallowe\'en], [birthday], [New Year\'s Eve], [Christmas Day]',
  ] },
  { p: 62, x: 3.7, y: 52.4, ex: '3', title: 'Complete the lines', kind: 'key', items: [
    '1 Happy [birthday] to you… — [birthday]',
    '2 Did you get any [Valentine] cards? … You are my [Valentine] — [Valentine\'s Day]',
    '3 It\'s [Christmas]! … Father [Christmas] … Merry [Christmas] — [Christmas Day]',
    '4 Your [wedding] day! — [wedding day]',
    '5 Happy [New] [Year] … [Happy] [New] [Year]! — [New Year\'s Eve]',
    '6 Happy [Mother\'s Day]! — [Mother\'s Day]',
    '7 Have a good [weekend]! — [Friday / the weekend]',
  ] },

  // ========== Unit 8 ==========
  // ---------- book p62 ----------
  { p: 63, x: 6.0, y: 40.2, ex: '2', title: 'Match the food and drink', kind: 'key', items: [
    'A: tea [l], coffee [p], wine [j], cheese [v], yoghurt [n], pasta [d], ice-cream [w], apple juice [k], bread [h], milk [u], chocolate [o], broccoli [s]',
    'B: bananas [i], apples [a], strawberries [f], potatoes [t], carrots [r], peas [x], onions [e], tomatoes [c], eggs [q], biscuits [b], crisps [g], chips [m]',
  ] },
  { p: 63, x: 6.0, y: 73.8, ex: '3', title: 'is or are?', kind: 'key', items: [
    'List [B] has plural nouns.',
    'Broccoli [is] good for you.',
    'Tomatoes [are] good for you.',
    'Apple juice [is] delicious.',
    'Apples [are] delicious.',
    '[We can\'t count broccoli. We can count tomatoes.]',
  ] },

  // ---------- book p63 ----------
  { p: 64, x: 5.2, y: 10.6, ex: '1', title: 'Duncan and Nick', kind: 'key', items: [
    'Who is the fussy eater? — [Duncan]',
    'He didn\'t like: [green vegetables, other vegetables except potatoes, bananas, coffee, tea]',
    'He liked: [chips, fruit juice, ice-cream, chocolate, crisps, biscuits, pasta]',
    'Where do they go to eat? — [Romano\'s Italian restaurant]',
  ] },
  { p: 64, x: 5.2, y: 58.5, ex: '2', title: 'Complete the lines', kind: 'key', items: [
    '1 \'Oh, good, we have some tomatoes.\'',
    '2 \'I didn\'t like a [lot] of things when I was a kid.\'',
    '3 \'I didn\'t like [any] green vegetables.\'',
    '4 \'Did you like [any] vegetables at all?\'',
    '5 \'I liked [some] fruit, but not all.\'',
    '6 \'I drank a [lot] of apple juice.\'',
    '7 \'I liked [all] the usual things kids like.\'',
  ] },
  { p: 64, x: 54.8, y: 58.6, ex: '4', title: 'True or false?', kind: 'key', items: [
    '1 [✓]',
    '2 [✗] He really likes spaghetti.',
    '3 [✗] Duncan would like red wine; Nick would like white.',
    '4 [✓]',
    '5 [✗] They ask for some water.',
    '6 [✗] He would like some tap water.',
  ] },
  { p: 64, x: 57.6, y: 78.6, ex: 'GS 1', title: 'Grammar Spot: like / would like', kind: 'key', items: [
    '[Would you like some wine? / I\'d like some red wine.] = Do you want…? / I want…',
  ] },

  // ---------- book p64 ----------
  { p: 65, x: 7.0, y: 10.6, ex: '1', title: 'Would/Do you like or I/I\'d like', kind: 'key', items: [
    '1 Yes. [I\'d like] a steak, please.',
    '2 [Would] you like a sandwich?',
    '3 [Do] you like Ella?',
    '4 [Would] you like a cold drink?',
    '5 Yes. [I\'d like] some stamps, please.',
    '6 Well, [I like] skiing very much.',
  ] },
  { p: 65, x: 7.0, y: 39.5, ex: '2', title: 'The correct replies', kind: 'key', items: [
    '1 [I like French wine, especially red wine.]',
    '2 [Just cheese, please. I don\'t like ham.]',
    '3 [I like books by Patricia Cornwell.]',
    '4 [I\'d like a new computer.]',
    '5 [No, but I\'d like a dog.]',
    '6 [No, thanks. I don\'t like ice-cream.]',
  ] },
  { p: 65, x: 7.0, y: 76.4, ex: '3', title: 'a, an, or some', kind: 'key', items: [
    '1 a banana', '2 some fruit', '3 [an] egg', '4 [some] bread', '5 [some] milk', '6 [some] meat',
    '7 [an] apple', '8 [some] toast', '9 [some] sandwiches', '10 [some] biscuits', '11 [a] cup of coffee', '12 [some] apple juice',
  ] },
  { p: 65, x: 50.5, y: 10.6, ex: '1', title: 'What do they need?', kind: 'key', items: [
    'They need [onions, minced beef, oil, carrots, tomatoes, thyme, salt and pepper, potatoes, butter, Cheddar cheese, and milk].',
  ] },
  { p: 65, x: 50.5, y: 86.8, ex: '2', title: 'What is there for the recipe?', kind: 'key', items: [
    '[There are some onions.]',
    '[There isn\'t any minced beef.]',
    '[There isn\'t much oil.]',
    '[There aren\'t any carrots.]',
    '[There aren\'t many tomatoes.]',
    '[There isn\'t much thyme.]',
    '[There aren\'t many potatoes.]',
    '[There isn\'t much butter.]',
    '[There isn\'t much cheese.]',
    '[There\'s some milk.]',
  ] },

  // ---------- book p65 ----------
  { p: 66, x: 4.6, y: 10.2, ex: '3', title: 'Duncan and Nick\'s conversation', kind: 'key', items: [
    'N …do we have any onions? Are there [any] carrots or potatoes?',
    'D …there are [some] onions, but there aren\'t [any] carrots, and we don\'t have [many] potatoes. How [many] do we need?',
    'N And how [many] tomatoes are there?',
    'N How [much] milk is there?',
    'D There\'s a lot but there isn\'t [much] cheese or butter.',
    'N Do we have [any] thyme?',
    'D How [much] do we need?',
    'D …there\'s [some] left in the bottle.',
  ] },
  { p: 66, x: 53.0, y: 10.3, ex: '1', title: 'much or many?', kind: 'key', items: [
    '1 How much toast would you like?',
    '2 How [much] yoghurt do we have left?',
    '3 How [many] people were at the wedding?',
    '4 How [much] money do you have in your pocket?',
    '5 How [much] petrol is there in the car?',
    '6 How [many] children does your brother have?',
    '7 How [many] days is it until your birthday?',
    '8 How [much] time do you need for this exercise?',
  ] },
  { p: 66, x: 53.0, y: 28.3, ex: '2', title: 'Choose an answer', kind: 'key', items: [
    'a [4]', 'b [7]', 'c 1', 'd [2]', 'e [8]', 'f [6]', 'g [3]', 'h [5]',
  ] },
  { p: 66, x: 53.0, y: 48.7, ex: '3', title: 'Underline the correct word', kind: 'key', items: [
    '1 How many [eggs] do you need?',
    '2 We don\'t have much [cheese] left.',
    '3 I\'m hungry. I\'d like a [sandwich].',
    '4 I\'d like [some] fruit, please.',
    '5 I don\'t like [broccoli].',
    '6 Would you like some [tea]?',
    '7 How many [cousins] do you have?',
    '8 We have [no] homework today.',
  ] },

  // ---------- book p66 ----------
  { p: 67, x: 6.0, y: 15.5, ex: '2', title: 'Who are the people?', kind: 'key', items: [
    'Hillel the Elder — [a rabbi who made the first recorded sandwich]',
    'John Montague — [the Fourth Earl of Sandwich; the chefs put beef between bread so he could eat while he gambled — the \'sandwich\']',
    'Eliza Leslie — [an American writer; her 1837 cookbook had a recipe for ham sandwiches]',
    'Dagwood Bumstead — [an American cartoon character; the huge \'Dagwood\' sandwich is named after him]',
  ] },
  { p: 67, x: 6.0, y: 29.3, ex: '3', title: 'Complete the lines', kind: 'key', items: [
    '1 …and [some wine, and put it between two matzohs (pieces of flat bread)].',
    '2 \'Trenchers\' were the first [open sandwiches].',
    '3 …liked to [eat and gamble] at the same time.',
    '4 …put [some beef between] two slices of bread.',
    '5 Eliza Leslie\'s recipe for [ham sandwiches]…',
    '6 …because [they were easy to make, and a cheap, portable meal for workers and school children].',
    '7 Dagwood Bumstead is [an American cartoon character].',
    '8 …made with a [great many layers] of meat, cheese, and vegetables.',
  ] },

  // ---------- book p67 ----------
  { p: 68, x: 49.8, y: 26.5, ex: '5', title: 'Favourite sandwiches', kind: 'key', items: [
    'Angus — ham and mustard',
    'Ulla — [beef and onions]',
    'Tom — [bacon and tomato ketchup]',
    'Marianne — [tomatoes, mozzarella cheese, olives, and basil]',
    'John — [mackerel and onions]',
  ] },

  // ---------- book p68 ----------
  { p: 69, x: 7.5, y: 11.1, ex: '1', title: 'Shopping list and pictures', kind: 'key', items: [
    'n aspirin', '[b] chocolate', '[c] notebook', '[k] scissors', '[l] adaptor', '[f] envelopes', '[j] plasters',
    '[e] sellotape', '[m] toothpaste', '[i] shampoo', '[d] batteries', '[a] screwdriver', '[g] magazine', '[h] newspaper',
  ] },
  { p: 69, x: 7.5, y: 43.6, ex: '2', title: 'Word stress', kind: 'key', items: [
    'Oo — aspirin, [chocolate], [notebook], [scissors], [plasters], [toothpaste]',
    'oO — [shampoo]',
    'Ooo — [envelopes], [sellotape], [batteries], [screwdriver], [newspaper]',
    'oOo — [adaptor]',
    'ooO — [magazine]',
  ] },
  { p: 69, x: 7.5, y: 68.1, ex: '3', title: 'Which High Street shop?', kind: 'key', items: [
    'newsagent\'s — [chocolate, magazine, newspaper]',
    'hardware shop — [adaptor, scissors, batteries, screwdriver]',
    'chemist\'s — [aspirin, plasters, toothpaste, shampoo]',
    'stationer\'s — [notebook, envelopes, sellotape]',
  ] },

  // ---------- book p69 ----------
  { p: 70, x: 3.0, y: 10.3, ex: '1', title: 'Complete the conversations', kind: 'key', items: [
    '1 What sort do you want? … Six is [too many]. Four is [enough]. … That\'s [all], thanks.',
    '2 Small or [large]? … The large is [too big]. … Anything [else]?',
    '3 No, that\'s [too much]. … That\'s [better]. … But I [only] want two!',
  ] },
  { p: 70, x: 50.2, y: 22.9, ex: '4', title: 'Which sound more polite?', kind: 'key', items: [
    '[I\'d like a coffee, please.]',
    '[Can I have a sandwich?]',
    '[Could you bring me a smoothie?]',
  ] },
  { p: 70, x: 50.2, y: 32.8, ex: '5', title: 'In a café', kind: 'key', items: [
    'B I\'d like a latte, please.',
    'B [Large], please.',
    'B [I\'d like] some toast, please.',
    'B [Can I have] some honey with the toast?',
  ] },

  // ========== Unit 9 ==========
  // ---------- book p70 ----------
  { p: 71, x: 5.2, y: 30.6, ex: '2', title: 'Which cities are they?', kind: 'key', items: [
    '1 [London]',
    '2 [Paris]',
  ] },
  { p: 71, x: 5.2, y: 43.0, ex: '1', title: 'Differences between London and Paris', kind: 'key', items: [
    'London\'s bigger than Paris.',
    '[Paris is much smaller.]',
    '[Paris is more romantic.]',
    '[The food (in Paris) is better.]',
  ] },
  { p: 71, x: 9.0, y: 71.7, ex: 'GS', title: 'Grammar Spot: comparatives', kind: 'key', items: [
    'big — bigger, romantic — [more romantic], small — [smaller]',
    '[-er with short adjectives; more with longer adjectives. One vowel + one consonant → double it (big → bigger).]',
    'good — better, bad — [worse]',
  ] },
  { p: 71, x: 5.2, y: 85.5, ex: '2', title: 'Comparative forms', kind: 'key', items: [
    'tall — taller', 'expensive — more expensive', 'hot — [hotter]', 'cheap — [cheaper]',
    'nice — [nicer]', 'wet — [wetter]', 'warm — [warmer]', 'cold — [colder]',
    'polite — [more polite]', 'beautiful — [more beautiful]', 'bad — [worse]', 'good — [better]',
  ] },

  // ---------- book p71 ----------
  { p: 72, x: 6.0, y: 3.4, ex: '3', title: 'Compare London and Paris', kind: 'sample', items: [
    'I think the Eiffel Tower is taller than the Gherkin.',
    '[I think the Underground\'s more expensive than the Metro.]',
    '[I think Paris is warmer / wetter than London.]',
    '[I think the buildings in Paris are more beautiful.]',
    '[I think the people in London are nicer.]',
  ] },
  { p: 72, x: 47.5, y: 3.4, ex: '4', title: 'What Rob says', kind: 'key', items: [
    '1 The Metro is cheaper and easier to use than the Underground.',
    '2 Paris is certainly [hotter] than London.',
    '3 Paris, in fact, is [wetter] than London; but in London there are [more] wet days.',
    '4 The architecture in Paris is [more] [beautiful], but the buildings in London are [more] [interesting].',
    '5 Life is [faster] in London.',
    '6 Londoners are generally [more] [polite] than Parisians.',
    '7 People in London work [harder] and they earn [more].',
    '8 In Paris, having a good time is [more] [important].',
  ] },
  { p: 72, x: 46.0, y: 48.4, ex: '1', title: 'Comparing cities', kind: 'key', items: [
    '1 A New York is older than London. B …much more modern!',
    '2 A Tokyo is [cheaper] [than] Bangkok. B …much [more] [expensive]!',
    '3 A Seoul is [bigger] [than] Beijing. B …much [smaller]!',
    '4 A Johannesburg is [safer] [than] Cape Town. B …much [more] [dangerous]!',
    '5 A Taxi drivers in New York are [better] [than] … B …much [worse]!',
  ] },

  // ---------- book p72 ----------
  { p: 73, x: 6.6, y: 10.8, ex: '1', title: 'Chantal', kind: 'key', items: [
    'She lives in [London] (Camden). She works [in a bank]. Is she married? — [Yes. Her husband is André.]',
  ] },
  { p: 73, x: 6.6, y: 15.1, ex: '2', title: 'Questions and answers', kind: 'key', items: [
    'Q Have you got a flat?',
    'C We[\'ve got] a nice flat in Camden.',
    'Q [Has] André [got] a job?',
    'C He[\'s got] a shop in Camden.',
    'Q [Have] you [got] a car?',
    'C No, I [haven\'t got] a car.',
  ] },
  { p: 73, x: 6.6, y: 61.6, ex: '3', title: 'Rewrite with have got', kind: 'key', items: [
    '1 [We\'ve got a nice flat.]',
    '2 [I\'ve got a French husband.]',
    '3 [He\'s got a business in Camden.]',
    '4 [Have you got a lot of friends?]',
    '5 [How many brothers and sisters have you got?]',
    '6 [I haven\'t got any brothers. I\'ve got a sister called Natalie.]',
    '7 [Natalie\'s got a big house.]',
    '8 [You\'ve got a good English accent.]',
  ] },
  { p: 73, x: 63.0, y: 14.2, ex: '1', title: 'Superlatives', kind: 'key', items: [
    'big — biggest', 'popular — [most popular]', 'busy — [busiest]', 'good — [best]',
  ] },
  { p: 73, x: 63.0, y: 28.6, ex: '2', title: 'Camden Market', kind: 'key', items: [
    '1 [most famous]', '2 [largest]', '3 [cheapest]', '4 [most amazing]', '5 [oldest]', '6 [latest]', '7 [coolest]',
  ] },
  { p: 73, x: 63.0, y: 33.1, ex: '3', title: 'What\'s special about…?', kind: 'key', items: [
    'Camden — It\'s got the largest street market in the UK.',
    'the weekend — [The market\'s busiest (and best) at the weekend.]',
    'the food — [It\'s the cheapest in north London.]',
    'the clothes — [It\'s got the most amazing clothes.]',
    'the Electric Ballroom — [It\'s the oldest nightclub in Camden.]',
    'Proud — [It\'s one of the coolest clubs in Camden.]',
  ] },
  { p: 73, x: 67.0, y: 48.1, ex: 'GS', title: 'Grammar Spot: superlatives', kind: 'key', items: [
    '1 [the + -est with short adjectives (big → biggest, busy → busiest); the most with longer adjectives; good → best is irregular.]',
    'small — [smaller] — [the smallest]',
    'expensive — [more expensive] — [the most expensive]',
    'hot — [hotter] — [the hottest]',
    'easy — [easier] — [the easiest]',
    'beautiful — [more beautiful] — [the most beautiful]',
  ] },

  // ---------- book p73 ----------
  { p: 74, x: 46.0, y: 9.5, ex: '1', title: 'It\'s the biggest!', kind: 'key', items: [
    '1 The tallest building…',
    '2 The [most expensive] hotel…',
    '3 The [biggest] park…',
    '4 The [most popular] tourist attraction…',
    '5 The [most famous] building…',
    '6 The [best] restaurant for spotting celebrities…',
  ] },
  { p: 74, x: 46.0, y: 41.7, ex: '2', title: 'Opposite comparatives', kind: 'key', items: [
    '1 …somewhere quieter?',
    '2 Is the 11.30 train a [faster] one?',
    '3 Why weren\'t you here [earlier]?',
    '4 I need somewhere [nearer].',
    '5 We need a [longer] one.',
    '6 Can I do something [harder / more difficult]?',
  ] },
  { p: 74, x: 46.0, y: 62.6, ex: '3', title: 'Tick the correct sentence', kind: 'key', items: [
    '1 [Yesterday was hotter than today.]',
    '2 [She\'s taller than her brother.]',
    '3 [I am the youngest in the class.]',
    '4 [This exercise is the most difficult in the book.]',
    '5 [I\'ve got three sisters.]',
    '6 [Have you got any money?]',
    '7 [She hasn\'t got a good job.]',
  ] },

  // ---------- book p74 ----------
  { p: 75, x: 6.6, y: 10.6, ex: '1', title: 'Megacities by population', kind: 'key', items: [
    '1 [Tokyo]', '2 [Mexico City]', '3 [Mumbai]', '4 [New York]', '5 [Shanghai]',
    'A megacity is [a city with more than ten million people].',
    'In 2008 [for the first time, more people on earth lived in cities than in the country].',
  ] },
  { p: 75, x: 6.6, y: 23.2, ex: '2', title: 'Which city…?', kind: 'key', items: [
    'is very fast — [Tokyo]',
    'has a mix of cultures — [Mexico City]',
    'has a lot of poverty — [Mumbai]',
  ] },

  // ---------- book p76 ----------
  { p: 77, x: 6.0, y: 10.6, ex: '1', title: 'Town or village?', kind: 'key', items: [
    '[The top picture is the town. The bottom picture is the village.]',
  ] },
  { p: 77, x: 6.0, y: 14.8, ex: '2', title: 'Find the words', kind: 'key', items: [
    'square 6 · shopping centre [2] · statue [7] · market [5] · town hall [8] · street [3]',
    'library [11] · car park [9] · cathedral [12] · pavement [4] · office block [1] · petrol station [10]',
    'field [13] · farm [16] · wood [23] · bridge [21] · path [24] · river [20]',
    'cottage [15] · hill [19] · church [22] · mountain [17] · pub [14] · lake [18]',
  ] },
  { p: 77, x: 6.0, y: 77.0, ex: '3', title: 'Town and country words', kind: 'key', items: [
    '1 A cathedral is bigger than a church.',
    '2 A mountain is higher than a [hill].',
    '3 A [cottage] is smaller than a house.',
    '4 A town is bigger than a [village].',
    '5 …there\'s a [statue] of King Leopold II… It\'s in the main [square].',
    '6 The mayor has an office in the [town hall].',
    '7 Cars drive on the [street]. Pedestrians walk on the [pavement].',
  ] },
  { p: 77, x: 55.4, y: 77.0, ex: '4', title: 'What can you do…?', kind: 'sample', items: [
    'at a petrol station — You can buy petrol.',
    'in a library — [You can borrow books.]',
    'in a shopping centre — [You can buy clothes and gifts.]',
    'at a market — [You can buy fruit and vegetables.]',
    'in a car park — [You can park your car.]',
    'on a farm — [You can see animals.]',
  ] },

  // ---------- book p77 ----------
  { p: 78, x: 3.6, y: 64.0, ex: '2', title: 'Directions to the A312', kind: 'key', items: [
    'Go along George Street, [past] the Bristol Hotel on your left, and [over] the bridge.',
    'At the roundabout, turn left and go [up] Park Avenue.',
    'Go [round] the corner, [through] the wood, and [down] the hill.',
    'Then go [under] the railway bridge…',
  ] },
  { p: 78, x: 3.6, y: 83.0, ex: '3', title: 'Where do you finish?', kind: 'key', items: [
    '1 [King\'s Castle]', '2 [the church]', '3 [the hotel]',
  ] },

  // ========== Unit 10 ==========
  // ---------- book p78 ----------
  { p: 79, x: 4.5, y: 25.5, ex: 'S', title: 'in, at, or on?', kind: 'key', items: [
    'in — [a meeting, my car, bed, a café, my office, town, the pub, the kitchen]',
    'at — [a party, work, home, the airport, the bus stop, school, university, Jenny\'s house]',
    'on — [my way home, the train, holiday, the bus]',
  ] },
  { p: 79, x: 6.2, y: 43.0, ex: '1', title: 'Who is speaking?', kind: 'key', items: [
    '1 Fiona (I\'m cooking.)',
    '2 [Tony] (I\'m reading the paper.)',
    '3 [Tim] (I\'m watching the football.)',
    '4 [Alice] (I\'m working on my laptop.)',
  ] },
  { p: 79, x: 6.2, y: 45.8, ex: '2', title: 'Complete the conversations', kind: 'key', items: [
    'Tony We\'re going to Birmingham… Fine. I[\'m reading] the paper and Alice [is doing] something on her laptop.',
    'Pete What [are] you [doing]?',
    'Fiona I[\'m] just [cooking] some dinner.',
    'Pete What [\'s] Tim [doing]?',
    'Fiona He[\'s watching] the football.',
  ] },
  { p: 79, x: 6.2, y: 86.1, ex: '3', title: 'Questions about the people', kind: 'key', items: [
    'What\'s Tony doing? — He\'s reading the paper.',
    '[What\'s Alice doing?] — [She\'s doing something on her laptop.]',
    '[Where are Tony and Alice going?] — [They\'re going to Birmingham.]',
    '[What\'s Fiona cooking?] — [She\'s cooking dinner.]',
    '[What\'s Tim watching?] — [He\'s watching the football.]',
  ] },

  // ---------- book p79 ----------
  { p: 80, x: 3.4, y: 6.7, ex: '4', title: 'What is the truth?', kind: 'key', items: [
    'Is she telling the truth? — [No, she isn\'t.]',
    'They aren\'t sitting in Ellie\'s bedroom.',
    '[They aren\'t working on the Internet.]',
    '[She isn\'t doing her homework.]',
    '[They aren\'t looking after Ellie\'s sister.]',
  ] },
  { p: 80, x: 3.4, y: 48.2, ex: '5', title: 'Correct the false sentences', kind: 'key', items: [
    '1 Alice isn\'t sleeping! She\'s working on her laptop!',
    '2 [Alice and Tony aren\'t going to Manchester. They\'re going to Birmingham.]',
    '3 [Fiona isn\'t cooking lunch. She\'s cooking dinner.]',
    '4 [Tim isn\'t watching a film. He\'s watching the football.]',
    '5 [Beth isn\'t doing her homework. She\'s shopping.]',
    '6 [Beth and Ellie aren\'t sitting in Ellie\'s bedroom. They\'re sitting in the High Street.]',
  ] },
  { p: 80, x: 5.6, y: 63.9, ex: 'GS', title: 'Grammar Spot: Present Continuous', kind: 'key', items: [
    'I [\'m] · You [\'re] · He/She [\'s] · We [\'re] · They [\'re] … learning English.',
    'Questions: [Am I / Are you / Is he / Are we / Are they learning…?]',
    'Negatives: [I\'m not / You aren\'t / He isn\'t / We aren\'t / They aren\'t…]',
    '3 [She speaks Spanish = always true. She\'s speaking Spanish = happening now.]',
  ] },
  { p: 80, x: 45.0, y: 10.4, ex: '1', title: 'Make the questions', kind: 'key', items: [
    '1 What are you reading?',
    '2 [What are you watching?]',
    '3 [Where are you going?]',
    '4 [Who are you talking to?]',
    '5 [What are you wearing?]',
    '6 [Why are you crying?]',
  ] },
  { p: 80, x: 45.0, y: 61.0, ex: '2', title: 'Negative sentences', kind: 'key', items: [
    '1 She isn\'t reading a detective story.',
    '2 [He isn\'t watching a film.]',
    '3 [He isn\'t going out with his friends.]',
    '4 [He isn\'t talking to his mother.]',
    '5 [She isn\'t wearing a dress.]',
    '6 [She isn\'t watching a romantic comedy.]',
  ] },

  // ---------- book p80 ----------
  { p: 81, x: 7.0, y: 41.0, ex: '1', title: 'Names in the boxes', kind: 'key', items: [
    'From left to right: [Helena] (champagne), [Roger] (crisps), [Penny and Sam] (photo on the phone), [Paul] (banker), [Sophie] (laughing)',
  ] },
  { p: 81, x: 7.0, y: 43.6, ex: '2', title: 'Doing now / job', kind: 'key', items: [
    'Paul — He\'s talking to Sophie. — He\'s a banker. He works in New York.',
    'Sophie — [She\'s laughing at Paul\'s jokes.] — [She\'s a professor at Bristol University. She teaches business studies.]',
    'Helena — [She\'s drinking champagne.] — [She\'s a writer. She writes stories for children.]',
    'Roger — [He\'s eating crisps.] — [He\'s an art dealer. He works for the British Museum.]',
    'Sam and Penny — [They\'re looking at a photo on Sam\'s phone.] — [They\'re designers. They make clothes for children.]',
  ] },
  { p: 81, x: 7.0, y: 60.5, ex: '3', title: 'Two questions about the people', kind: 'key', items: [
    '1 Where does Paul work? / Who\'s he talking to?',
    '2 Why [is] Sophie [laughing]? / Where [does] she [teach]?',
    '3 What [is] Helena [drinking]? / What [does] she [write]?',
    '4 Who [does] Roger [work] for? / What [is] he [eating]?',
    '5 What [do] Sam and Penny [make]? / What [are] they [looking] at?',
  ] },
  { p: 81, x: 53.3, y: 60.5, ex: '4', title: 'Present Simple or Continuous?', kind: 'key', items: [
    '1 My father [works] in a bank.',
    '2 I[\'m working] very hard at the moment.',
    '3 Where [are] you [going]?',
    '4 I always [go] to the cinema every Friday.',
    '5 I usually [have] lunch at 1.00.',
    '6 [Are] you [having] lunch?',
    '7 Sh! I[\'m doing] my homework. You[\'re making] too much noise!',
    '8 …my mum usually [makes] the dinner, and my dad usually [does] the washing-up.',
  ] },

  // ---------- book p81 ----------
  { p: 82, x: 2.6, y: 9.5, ex: '1', title: 'Complete the sentences', kind: 'key', items: [
    '1 He\'s doing [something] on the computer.',
    '2 He isn\'t wearing [anything].',
    '3 She\'s buying [everything].',
    '4 \'[Nothing]. I\'m not hungry.\'',
  ] },
  { p: 82, x: 5.6, y: 61.4, ex: 'GS', title: 'Grammar Spot: complete the chart', kind: 'key', items: [
    'some — something, somebody, [somewhere]',
    'any — [anything], anybody, anywhere',
    'every — [everything], [everybody], everywhere',
    'no — [nothing], nobody, [nowhere]',
  ] },
  { p: 82, x: 2.6, y: 77.5, ex: '2', title: 'Underline the correct word', kind: 'key', items: [
    '1 I want [something] to eat.',
    '2 I can\'t find my phone [anywhere].',
    '3 [Everybody\'s] enjoying the party!',
    '4 I don\'t know [anybody].',
    '5 [Nobody\'s] at home.',
    '6 He knows [everything]!',
  ] },
  { p: 82, x: 51.3, y: 9.5, ex: '1', title: 'Complete the conversations', kind: 'key', items: [
    '1 Did you buy anything…? No. [Nothing]. … [Everything] was too expensive. … But I bought [something] for you.',
    '2 Did you talk to [anybody] interesting…? No. [Nobody]. … [Everybody] was dancing… But I danced with [somebody] beautiful…',
    '3 Did you go [anywhere]…? No. [Nowhere]. … [Everywhere] was closed. … I\'m going [somewhere] more interesting.',
  ] },
  { p: 82, x: 51.3, y: 70.3, ex: '3', title: 'Tick the correct sentence', kind: 'key', items: [
    '1 [Somebody is on the phone for you.]',
    '2 [I don\'t have anything for your birthday.]',
    '3 [I want to go somewhere hot for my holidays.]',
    '4 [I\'m learning English.]',
    '5 [She isn\'t working hard.]',
  ] },

  // ---------- book p82 ----------
  { p: 83, x: 6.2, y: 13.4, ex: '2', title: 'True or false?', kind: 'key', items: [
    '1 [✓]',
    '2 [✗] It\'s only 360 km from Earth.',
    '3 [✓]',
    '4 [✗] Supply ships arrive about eight times a year.',
    '5 [✗] They are working together.',
    '6 [✓]',
    '7 [✗] They are studying the Earth\'s weather and geography.',
    '8 [✗] They are looking at planets and stars to understand the origin of the universe.',
  ] },
  { p: 83, x: 6.2, y: 31.3, ex: '3', title: 'Questions to an astronaut', kind: 'key', items: [
    '[Do you work every day?] [What time do you wake up?] [What do you do in your free time?] [What do you eat?] [Where do you sleep?] [How do you wash?] [What exercise do you do?]',
  ] },
  { p: 83, x: 6.2, y: 43.2, ex: '5', title: 'The future of the ISS', kind: 'key', items: [
    '[A manned trip to Mars.]',
  ] },
  { p: 83, x: 6.2, y: 45.9, ex: '6', title: 'What do the numbers refer to?', kind: 'key', items: [
    '100 billion — [the cost of the station in dollars]',
    '1998 — [the first part of the station went into space]',
    'six — [months the astronauts stay]',
    '200 — [visitors]',
    '15 — [countries the visitors came from]',
    'eight — [supply ships a year]',
    'zero — [zero gravity]',
  ] },
  { p: 83, x: 6.2, y: 56.7, ex: '7', title: 'Soichi Noguchi', kind: 'key', items: [
    '1 [JAXA — the Japan Aerospace Exploration Agency.]',
    '2 [Aeronautical engineering at the University of Tokyo.]',
    '3 [Yokohama, Kanagawa (part of Tokyo). Yes, he\'s married with three children.]',
    '4 [Jogging, basketball, skiing, and camping with his kids.]',
    '5 [Space walks, checking instruments, studying weather, experiments with plants.]',
    '6 [He spends a lot of time looking down at the Earth.]',
    '7 [How lucky he is; maybe people would stop fighting if they saw how beautiful our planet is.]',
  ] },

  // ---------- book p84 ----------
  { p: 85, x: 6.0, y: 10.9, ex: '1', title: 'Who is being described?', kind: 'key', items: [
    '1 [Tanya]', '2 [Simon]', '3 [Stephanie]', '4 [Giles]',
  ] },

  // ---------- book p85 ----------
  { p: 86, x: 2.6, y: 10.3, ex: '2', title: 'Match the replies', kind: 'key', items: [
    '1 B Wow! That\'s fantastic! Congratulations!',
    '2 D [No, I\'m just looking, thanks.]',
    '3 F [Sorry, what does that mean?]',
    '4 H [Oh, lovely! Well, I hope you enjoy the film!]',
    '5 J [I\'m sorry. Let me have a look. Ah! It isn\'t switched on. That\'s why!]',
    '6 L [I\'m afraid he isn\'t here at the moment. Can I take a message?]',
    '7 N [What a pity! Never mind!]',
    '8 Q/R [Thanks. We\'ll see you in a couple of days!]',
  ] },

  // ========== Unit 11 ==========
  // ---------- book p86 ----------
  { p: 87, x: 5.0, y: 26.5, ex: 'S', title: 'How many sentences?', kind: 'key', items: [
    'I\'m going to India [soon / next month / in a year\'s time / when I retire].',
    'I went to India [when I was a student / two years ago].',
  ] },
  { p: 87, x: 37.0, y: 29.0, ex: '1', title: 'What are they thinking about?', kind: 'key', items: [
    'Alan — [going home; thinking about his evening after work]',
    'Brendan — [at his desk at work; thinking about money]',
    'George — [teaching a class; thinking about his retirement]',
    'Leila — [on a plane; thinking about her holiday]',
    'Yvonne — [looking after her children; thinking about her evening]',
    'Jason — [playing in his bedroom; thinking about his future job]',
    'Ayesha — [in class at school; thinking about after the lesson]',
  ] },

  // ---------- book p87 ----------
  { p: 88, x: 3.5, y: 3.7, ex: '2', title: 'Whose plans?', kind: 'key', items: [
    '1 Alan — I\'m going to relax with my wife.',
    '2 [Jason] — I\'m going to be a racing driver.',
    '3 [Yvonne] — I\'m going to sit down and have a glass of wine.',
    '4 [Brendan] — [I\'m going to] buy my girlfriend a ring.',
    '5 [Leila] — [I\'m going to] lie on the beach.',
    '6 [George] — [I\'m going to] learn to play golf.',
    '7 [Ayesha] — [I\'m going to] meet my friends for coffee.',
  ] },
  { p: 88, x: 46.0, y: 4.0, ex: '3', title: 'Questions about all the people', kind: 'key', items: [
    'What\'s Alan going to do? — He\'s going to relax.',
    'What\'s Jason going to do? — He\'s going to be a racing driver.',
    '[What\'s Yvonne going to do?] — [She\'s going to sit down and have a glass of wine.]',
    '[What\'s Brendan going to do?] — [He\'s going to buy his girlfriend a ring.]',
    '[What\'s Leila going to do?] — [She\'s going to lie on the beach.]',
    '[What\'s George going to do?] — [He\'s going to learn to play golf.]',
    '[What\'s Ayesha going to do?] — [She\'s going to meet her friends for coffee.]',
  ] },
  { p: 88, x: 46.0, y: 21.3, ex: '4', title: 'What aren\'t they going to do?', kind: 'key', items: [
    'Alan isn\'t going to talk about work.',
    '[Jason isn\'t going to work in an office like his dad.]',
    '[Yvonne isn\'t going to do the washing.]',
    '[Brendan isn\'t going to buy a new car.]',
    '[Leila isn\'t going to check emails for a week.]',
    '[George isn\'t going to stay at home and do nothing.]',
    '[Ayesha isn\'t going to do her homework.]',
  ] },
  { p: 88, x: 49.0, y: 71.4, ex: 'GS', title: 'Grammar Spot: going to', kind: 'key', items: [
    'I [\'m] · He/She [\'s] · You/We/They [\'re] … going to cook tonight.',
    'Question: [Am I / Is he / Are you going to cook tonight?]',
    'Negative: [I\'m not / He isn\'t / You aren\'t going to cook tonight.]',
    '3 [No real difference in meaning.]',
  ] },

  // ---------- book p88 ----------
  { p: 89, x: 6.0, y: 10.6, ex: '1', title: 'What is going to happen?', kind: 'key', items: [
    '1 It\'s going to rain.',
    '2 [He\'s going to be late.]',
    '3 [She\'s going to win.]',
    '4 [He\'s going to fall.]',
    '5 [She\'s going to drop it (the vase).]',
    '6 [They\'re going to have a baby.]',
    '7 [They\'re going to kiss.]',
    '8 [He\'s going to sneeze.]',
  ] },
  { p: 89, x: 6.0, y: 71.9, ex: '3', title: 'Tick the correct sentence', kind: 'key', items: [
    '1 [He\'s going to watch the football.]',
    '2 [We\'re going to the cinema tonight.]',
    '3 [She isn\'t going to cook.]',
    '4 [Is it going to rain?]',
    '5 [When are they going to get married?]',
    '6 [I\'m going to the pub.]',
  ] },

  // ---------- book p89 ----------
  { p: 90, x: 3.0, y: 35.6, ex: '1', title: 'Places, activities, photos', kind: 'key', items: [
    'Australia — [take photos of Ayers Rock at sunset] — [a]',
    'The US — [see the supervolcano at Yellowstone Park] — [f]',
    'Peru — [visit Machu Picchu] — [c]',
    'Antarctica — [fly over the coldest place on earth] — [h]',
    'Egypt — [take a cruise down the River Nile] — [g]',
    'Cambodia — [visit the temples of Angkor Wat] — [b]',
    'Tanzania — [climb Mount Kilimanjaro] — [e]',
    'India — [go on a tiger safari] — [d]',
  ] },
  { p: 90, x: 3.0, y: 55.8, ex: '2', title: 'Rob and Becky', kind: 'key', items: [
    'Becky …we want to [take a cruise] down the Nile.',
    'Rob …we\'re going to Tanzania to [climb Kilimanjaro].',
  ] },
  { p: 90, x: 53.2, y: 38.3, ex: '1', title: 'Order of places', kind: 'key', items: [
    'Egypt, Tanzania, [India], [Cambodia], [Australia], [Antarctica], [Australia], [Peru], [the US]',
  ] },
  { p: 90, x: 52.6, y: 10.4, ex: 'GS 2', title: 'Do they mean the same?', kind: 'key', items: [
    '[Yes, they mean the same.]',
  ] },

  // ---------- book p90 ----------
  { p: 91, x: 6.6, y: 15.4, ex: '2', title: 'Three young men', kind: 'key', items: [
    'Where? — [In the street of a small town; on top of a hill; on a country road.]',
    'Wearing? — [Green and brown jackets, hats, and boots.]',
    'Doing? — [Singing; walking.]',
    'Carrying? — [Backpacks and walking sticks.]',
  ] },
  { p: 91, x: 6.6, y: 21.0, ex: '3', title: 'Correct the false statements', kind: 'key', items: [
    '1 [It\'s a sunny Saturday afternoon.]',
    '2 [They\'re carrying backpacks and walking sticks and wearing jackets, hats, and boots.]',
    '3 [They start singing traditional folk songs.]',
    '4 [The people are interested. They stop to listen and smile.]',
    '5 [They give them money. The hat is soon full.]',
  ] },
  { p: 91, x: 6.6, y: 37.8, ex: '4', title: 'Questions about the singers', kind: 'key', items: [
    '1 [Ed is 27, Ginger is 25, Will is 26.]',
    '2 [Ed and Ginger.]',
    '3 [In good and bad weather, in all seasons.]',
    '4 [Anywhere — in woods, fields, and sometimes houses.]',
    '5 [At school in Canterbury.]',
    '6 [Ed was an artist, Ginger a gardener, Will a bookseller.]',
    '7 [In streets, pubs, and market squares.]',
    '8 [They worry about their futures.]',
    '9 [They started a website and made a CD of 16 songs.]',
    '10 [Make podcasts, another CD, and start a charity for traditional country activities.]',
  ] },

  // ---------- book p92 ----------
  { p: 93, x: 7.0, y: 11.0, ex: '1', title: 'Temperatures and season', kind: 'key', items: [
    'Oslo [17] · London [19] · Berlin [20] · Warsaw [20] · Moscow [15] · Paris [20] · Budapest [23]',
    'Nice [29] · Madrid [32] · Lisbon [32] · Rome [24] · Istanbul [21] · Athens [28]',
    'Season: [late summer]',
  ] },
  { p: 93, x: 7.0, y: 51.8, ex: '2', title: 'Adjectives and symbols', kind: 'key', items: [
    '[sunny, rainy, windy, cloudy, stormy] are on the map.',
    'Not in the forecast: [snowy] and [foggy]',
  ] },
  { p: 93, x: 7.0, y: 59.8, ex: '3', title: 'Which words go together?', kind: 'sample', items: [
    'It\'s hot and sunny. It\'s cool and rainy.',
    '[warm and sunny], [cold and windy], [cool and cloudy], [cold and snowy], [cold and foggy], [wet and windy], [dry and sunny]',
  ] },
  { p: 93, x: 55.4, y: 51.8, ex: '5', title: 'Today, yesterday, tomorrow', kind: 'key', items: [
    'Today: It\'s [cool] and [cloudy].',
    'Yesterday: It was [wet] and [windy].',
    'Tomorrow: It\'s going to be [warm] and [sunny].',
  ] },

  // ---------- book p93 ----------
  { p: 94, x: 4.0, y: 34.4, ex: '2', title: 'Complete the conversations', kind: 'key', items: [
    '1 It\'s really [warm] and [sunny]. … Let\'s [go for a walk]!',
    '2 It\'s so [cold] and [wet]! … Let\'s [stay in] and [watch a DVD].',
  ] },
  { p: 94, x: 50.5, y: 24.7, ex: '3', title: 'Continue the conversations', kind: 'key', items: [
    'Good weather: [Oh no! It\'s too hot to walk.] → [OK, let\'s go to the beach.] → [Good idea! Why don\'t we take a picnic?]',
    'Bad weather: [Oh no, that\'s boring! We did that last night.] → [OK then, shall we go out for a coffee?] → [Great! I\'ll get my coat and an umbrella!]',
  ] },

  // ========== Unit 12 ==========
  // ---------- book p94 ----------
  { p: 95, x: 6.0, y: 26.4, ex: 'S', title: 'Countries, flags, capitals', kind: 'key', items: [
    'a [Italy — Rome]', 'b [Switzerland — Bern]', 'c [Spain — Madrid]', 'd [Egypt — Cairo]',
    'e [Great Britain — London]', 'f [Greece — Athens]', 'g [Australia — Canberra]', 'h [Brazil — Brasília]',
    'i [China — Beijing]', 'j [Japan — Tokyo]', 'k [the US — Washington DC]', 'l [Hungary — Budapest]',
  ] },
  { p: 95, x: 37.0, y: 29.8, ex: '1', title: 'Lara and Kyle', kind: 'key', items: [
    'What are they talking about? — [Lara and Mel\'s trip to Europe.]',
    'Who is Mel? — [Lara\'s friend.]',
    'Why does Lara want to end the conversation? — [Mel is waiting for her and they\'ve got a lot to do.]',
  ] },
  { p: 95, x: 37.0, y: 75.6, ex: '2', title: 'Lara, Kyle, or Mel?', kind: 'key', items: [
    '1 I\'ve been to Rome many times. — Kyle',
    '2 I\'ve never been there. — [Lara]',
    '3 She\'s been to London and Paris. — [Mel]',
    '4 She hasn\'t been to Rome. — [Mel]',
    '5 I haven\'t travelled much at all. — [Lara]',
    '6 I\'ve been to North and South America. — [Kyle]',
  ] },

  // ---------- book p95 ----------
  { p: 96, x: 3.0, y: 19.6, ex: '4', title: 'Complete the replies', kind: 'key', items: [
    'B No, I [haven\'t].',
    'B Yes, I [have].',
    'B Two years [ago].',
    'B Yes, I [did]. It was great!',
  ] },
  { p: 96, x: 52.6, y: 20.6, ex: 'GS 3', title: 'Grammar Spot: Present Perfect', kind: 'key', items: [
    'Positive: I/You/We/They [have] · He/She [has] been to Paris.',
    'Negative: I/You/We/They [haven\'t] · He/She [hasn\'t] been to Paris.',
    '4 Has he [ever] been to London? He\'s [never] been to Paris.',
  ] },
  { p: 96, x: 49.6, y: 49.3, ex: '7', title: 'Infinitives', kind: 'key', items: [
    'been — [be / go]', 'lived — [live]', 'flown — [fly]', 'met — [meet]', 'eaten — [eat]',
    'failed — [fail]', 'seen — [see]', 'slept — [sleep]', 'run — [run]', 'bought — [buy]',
    'given — [give]', 'made — [make]', 'had — [have]', 'taken — [take]', 'done — [do]',
    'Regular: [lived, failed]',
  ] },
  { p: 96, x: 49.6, y: 69.0, ex: '8', title: 'Past Simple forms', kind: 'key', items: [
    '[was/were (went)], [lived], [flew], [met], [ate], [failed], [saw], [slept], [ran], [bought], [gave], [made], [had], [took], [did]',
  ] },

  // ---------- book p96 ----------
  { p: 97, x: 44.0, y: 11.1, ex: '1', title: 'What have they done?', kind: 'key', items: [
    '1 buy new backpacks ✓',
    '2 finish packing [✗]',
    '3 collect euros from bank [✓]',
    '4 email Mel\'s aunt in London [✓]',
    '5 find out weather forecast for Rome [✓]',
    '6 print e-tickets [✓]',
    '7 check in online [✗]',
  ] },
  { p: 97, x: 44.0, y: 65.0, ex: '2', title: 'Done / not done yet', kind: 'key', items: [
    'They\'ve bought new backpacks.',
    'They haven\'t finished packing yet.',
    '[They\'ve collected euros from the bank.]',
    '[They\'ve emailed Mel\'s aunt in London.]',
    '[They\'ve found out the weather forecast for Rome.]',
    '[They\'ve printed the e-tickets.]',
    '[They haven\'t checked in online yet.]',
  ] },
  { p: 97, x: 48.0, y: 79.5, ex: 'GS', title: 'Grammar Spot: yet and just', kind: 'key', items: [
    '1 They [haven\'t] finished packing yet. · [Have] you emailed your aunt yet? · She[\'s] just emailed back.',
    '2 [yet — at the end of the sentence; just — before the past participle]',
    '3 [questions] and [negative sentences]',
  ] },

  // ---------- book p97 ----------
  { p: 98, x: 2.6, y: 9.6, ex: '1', title: 'Lara\'s trip — verb tenses', kind: 'key', items: [
    '1 [haven\'t travelled]', '2 [went]', '3 [\'ve never been]', '4 [travel]', '5 [flew]', '6 [lives]', '7 [live]',
    '8 [\'ve been]', '9 [learned]', '10 [\'ve just finished]', '11 [\'re waiting]', '12 [\'ve never flown]', '13 [takes]', '14 [\'m going to watch]',
  ] },
  { p: 98, x: 55.0, y: 6.7, ex: '2', title: 'Questions about Lara', kind: 'key', items: [
    '1 [Because she\'s going on a trip to Europe.]',
    '2 [Yes, once — to Bali two years ago.]',
    '3 [Yes, she often travels inside Australia.]',
    '4 [To visit her cousin.]',
    '5 [In Sydney.]',
    '6 [Three times.]',
    '7 [She learned to scuba dive.]',
    '8 [By taxi.]',
    '9 [20 hours.]',
    '10 [Watch films all the way.]',
  ] },
  { p: 98, x: 55.0, y: 59.4, ex: '4', title: 'Tick the correct sentence', kind: 'key', items: [
    '1 [I saw Kyle yesterday.]',
    '2 [Have you ever met my cousin?]',
    '3 [When did she go to Bali?]',
    '4 [What are you going to do in Rome?]',
    '5 [He doesn\'t like flying.]',
    '6 [Has Lara finished packing yet?]',
    '7 [Have you ever been to a rock concert?]',
  ] },

  // ---------- book p98 ----------
  { p: 99, x: 7.0, y: 26.8, ex: '3', title: 'Facts about Glastonbury', kind: 'key', items: [
    '1 [On 1,000 acres of farmland in south-west England, in June, for four days.]',
    '2 [21 hours — from 9 a.m. to 6 a.m. the next morning.]',
    '3 [1970: 1,500 people paid £1. Last year: 190,000 people paid £200.]',
    '5 [News of Michael Jackson\'s death came in the middle of the festival; T-shirts went on sale.]',
    '6 [It rained every day and people danced in the mud. The festival is famous for its rain — they can\'t buy the sunshine.]',
  ] },

  // ---------- book p99 ----------
  { p: 100, x: 61.6, y: 3.9, ex: '4', title: 'Four people\'s experiences', kind: 'key', items: [
    '1 [Marina (six times)]',
    '2 [Dave and Izzi]',
    '3 [Marina, Len, and Izzi]',
    '4 [Dave — too many mobile phones]',
    '5 [Len]',
    '6 [Izzi — 10,000 miles from New Zealand]',
  ] },
  { p: 100, x: 61.6, y: 20.0, ex: '5', title: 'True or false?', kind: 'key', items: [
    '1 [✗] She danced in the mud up to her knees.',
    '2 [✓]',
    '3 [✓]',
    '4 [✗] He complained about the mobile phones.',
    '5 [✓]',
    '6 [✗] The crowd moved back so he could see better.',
    '7 [✗] She\'s been to festivals in Australia and Europe (Sónar, Barcelona).',
    '8 [✗] She travelled from New Zealand.',
  ] },
  { p: 100, x: 61.6, y: 58.6, ex: '6', title: 'Elsa and Daniel', kind: 'key', items: [
    'Elsa — food: [the best sausages and chips ever]; drink: [pear cider]; music: [disappointed — rubbish house music on Saturday]; people: [finished the cider with friends in her tent]',
    'Daniel — music: [brilliant]; people: [100,000 friendly people, good conversations]',
    'Best experience: [Daniel]',
  ] },

  // ---------- book p100 ----------
  { p: 101, x: 6.0, y: 22.6, ex: '2', title: 'take and get', kind: 'key', items: [
    '1 Why don\'t you [take] [off] your jumper?',
    '2 No, it [takes] [a long] time to [get] [to] work.',
    '3 We all [get] [on] really [well].',
    '4 They [take] [place] regularly…',
    '5 …sometimes I [get] really [bored]!',
  ] },
  { p: 101, x: 53.0, y: 10.6, ex: '3', title: 'take or get?', kind: 'key', items: [
    'take — a test, [photos], [a long time], [it easy], [a taxi]',
    'get — [home late], [on/off the bus], [married], [ready], [a lot of emails], [better soon], [very wet]',
  ] },
  { p: 101, x: 53.0, y: 33.5, ex: '4', title: 'take or get in the correct form', kind: 'key', items: [
    '1 The best way to [get] to the airport is to [take] a taxi.',
    '2 How long [does] it [take] if you go by train?',
    '3 I haven\'t [got] a camera. I [take] photos with my iPhone.',
    '4 Sue [has taken] her driving test three times…',
    '5 Are you still [getting] ready?',
    '6 …to [take] it easy if I want to [get] better soon.',
    '7 …the day we [got] married. We [got] very wet…',
    '8 You can\'t [get] on the bus with that big dog. Please, [get] off!',
  ] },
  { p: 101, x: 53.0, y: 71.4, ex: '5', title: 'Questions about you', kind: 'key', items: [
    '1 How long does it [take] you to [get] to school?',
    '2 What time do you [get] back home…?',
    '3 What time do you usually [get] up…?',
    '4 Have you [taken] any exams recently?',
    '5 Does it [take] you a long time to [get] ready…?',
    '6 Are you [getting] tired of this exercise?',
  ] },

  // ---------- book p101 ----------
  { p: 102, x: 2.6, y: 10.6, ex: '1', title: 'bus, train, or plane?', kind: 'key', items: [
    'bus — [return ticket, ticket office, bus stop]',
    'train — [return ticket, ticket office, railway station, arrivals, platform, departures]',
    'plane — [airport, return ticket, arrivals, boarding pass, customs, security check, hand luggage, flight, departures]',
  ] },
  { p: 102, x: 2.6, y: 21.8, ex: '2', title: 'Three announcements', kind: 'key', items: [
    '1 [train]', '2 [bus]', '3 [plane]',
  ] },
  { p: 102, x: 2.6, y: 24.5, ex: '3', title: 'Numbers and places', kind: 'key', items: [
    '1 [11.55 — train time; 10 — platform] · [Newcastle, Peterborough, York, Darlington]',
    '2 [22 — bus number] · [Piccadilly Circus, Green Park]',
    '3 [BA1536 — flight; 58 — gate; rows 12 to 20] · [New York]',
  ] },
  { p: 102, x: 2.6, y: 27.2, ex: '4', title: 'Bus, train, or plane?', kind: 'key', items: [
    '1 [bus]', '2 [train]', '3 [bus]', '4 [plane]', '5 [plane]', '6 [train]',
  ] },
  { p: 102, x: 2.6, y: 40.0, ex: '5', title: 'Order the conversations', kind: 'key', items: [
    'Conversation 1: [Next, please!] → [A day return to Oxford, please.] → [That\'s £12.70.] → [Thank you. What time does the next train leave?] → [At 9.55. The platform number has just gone up…] → [Oh, yes. I can see. Thank you very much.] → [Have a good journey!]',
    'Conversation 2: [Excuse me, does the number 24 go to the Natural History Museum?] → [No, it doesn\'t. You need the 360.] → [Where can I get it?] → [From that bus stop over there.] → [Oh, thanks for your help.] → [Don\'t mention it.]',
  ] },
  { p: 102, x: 2.6, y: 62.0, ex: '6', title: 'At the airport', kind: 'key', items: [
    'Where are they? — [At the airport (check-in).]',
    'A Have you [checked] [in] online?',
    'A How many [suitcases] have you got?',
    'L We haven\'t got [suitcases], just [backpacks].',
    'A …how many pieces of [hand] [luggage]?',
    'L Just these [bags].',
    'A You [board] from Gate 9 at 10.20.',
    'A To the departure gate and [security] [check]. … Have a nice [flight]!',
  ] },

  // ========== WRITING ==========
  // ---------- Unit 1 · book p104 ----------
  { p: 105, x: 5.4, y: 10.6, ex: '1', title: 'What is a blog?', kind: 'sample', items: [
    '[A blog is a kind of online diary or journal. People write about their life, interests, and ideas, and others read it on the Internet.]',
  ] },
  { p: 105, x: 5.4, y: 13.3, ex: '2', title: 'Complete the blog about you', kind: 'sample', items: [
    'Day 1: Hello! My name\'s [Anna]. I\'m from [Madrid] and I\'m [17] years old. I\'m a student. I go to [City School]. I want to learn English because [I want to travel / study abroad].',
    'Day 2: …It isn\'t very [big]. My [mother]\'s name is [Maria]. She\'s [a teacher]. My [father]\'s name is [Carlos]. He\'s [an engineer]. I have [a brother and a sister]. We live in [a flat] near [the park].',
    'Day 3: My school is in [the centre of town]. It\'s very [big] and it\'s near [the metro]. My teacher\'s name is [Mr Brown]. The students\' names are [Tom, Lucy, and Sam]. They are from [Spain, Italy, and Brazil]. After class, I [go home and do my homework].',
  ] },

  // ---------- Unit 2 · book p105 ----------
  { p: 106, x: 3.4, y: 9.8, ex: '1', title: 'Complete the charts', kind: 'key', items: [
    'I — me — my',
    '[you] — you — [your]',
    'he — him — his',
    '[she] — her — [her]',
    'it — it — its',
    'we — us — [our]',
    '[they] — them — their',
  ] },
  { p: 106, x: 3.4, y: 27.1, ex: '2', title: 'Possessive adjectives and pronouns', kind: 'key', items: [
    '1 pronouns: [I, him]; possessive adjectives: [Her, my]',
    '2 pronouns: [She, it]; possessive adjective: [Our]',
    '3 pronouns: [They, He, them]; possessive adjective: [their]',
  ] },
  { p: 106, x: 3.4, y: 39.2, ex: '3', title: 'The correct pronoun', kind: 'key', items: [
    '1 …but she doesn\'t like me.',
    '2 [He] often plays football with [them].',
    '3 Can I have [it] back, please?',
    '4 We like [him] a lot.',
    '5 [We] like our teacher and she likes [us].',
    '6 Our teacher gives [us] a lot of homework.',
    '7 …but Maria doesn\'t like [her] at all.',
    '8 [He] reads [it] on the train.',
    '9 This is a photo of [me] with my family.',
    '10 [She] has lunch with [them] every day.',
  ] },
  { p: 106, x: 3.4, y: 71.3, ex: '4', title: 'David Guetta', kind: 'key', items: [
    'His job? — [He\'s a DJ.]',
    'Who does he work with? — [A lot of pop stars, such as Britney Spears, Celine Dion, and Madonna.]',
    'Who does he want to work with? — [Lady Gaga.]',
    'His wife? — [Cathy comes from Senegal. She\'s a businesswoman and an actress.]',
    'YouTube hits? — [70 million.]',
  ] },
  { p: 106, x: 3.4, y: 82.0, ex: '5', title: 'Rewrite the text', kind: 'key', items: [
    'David Guetta is French. [He] lives in Paris, but [he] works all over the world. [He\'s] a very famous DJ. [He\'s] number 3 in the \'Top 100 DJs\' poll.',
    '[He] works with a lot of pop stars… [He] sometimes writes songs for [them]. [He] really likes Lady Gaga, and [he] wants to work with [her].',
    '[His] job is very exciting, and [he] likes [it] a lot. [He\'s] married to Cathy. [She] comes from Senegal. [She\'s] a businesswoman and an actress.',
    '[They] often go to Ibiza. Every year, [they] have parties there. People love [their] parties. Cathy and David have two young children, and they love to spend time with [them].',
  ] },

  // ---------- Unit 3 · book p106 ----------
  { p: 107, x: 6.0, y: 10.6, ex: '1', title: 'Talk about Lena', kind: 'key', items: [
    'Her name\'s [Lena Prentis].',
    'She [isn\'t] married. (Miss)',
    'She\'s [26 / 27] years old. (born 02/07/84)',
    'She\'s [Australian].',
    'She [lives at 23A Park Road, Sheffield, S1 4AX].',
    'Her email address is [Len.pren@talktalk.com]. Her phone numbers are [0114 496 0154] and [0770 900687].',
    'She likes [swimming, outdoor tennis, squash, the gym, and exercise classes].',
  ] },

  // ---------- Unit 4 · book p107 ----------
  { p: 108, x: 3.0, y: 9.7, ex: '1', title: 'Four sentences', kind: 'key', items: [
    'I love my new flat [and] [I like your flat too.]',
    'I love my new flat, [so] [please come and see it soon.]',
    'I love my new flat, [but] [unfortunately there isn\'t a garden.]',
    'I love my new flat [because] [it\'s very beautiful.]',
  ] },
  { p: 108, x: 3.0, y: 29.6, ex: '3', title: 'and, so, but, or because', kind: 'key', items: [
    '1 because', '2 [but]', '3 [because]', '4 [so]', '5 [because]', '6 [but]', '7 [and]', '8 [so]',
  ] },
  { p: 108, x: 3.0, y: 64.6, ex: '4', title: 'Megan\'s new flat', kind: 'key', items: [
    '1 [so]', '2 [but]', '3 [and]', '4 [because]', '5 [and]', '6 [so]',
    '7 [but]', '8 [because]', '9 [but]', '10 [so]', '11 [but]', '12 [because]',
  ] },

  // ---------- Unit 5 · book p108 ----------
  { p: 109, x: 6.0, y: 10.4, ex: '1', title: 'Questions about Carl', kind: 'key', items: [
    'What\'s his name? — [Carl Hampton.]',
    'How old is he? — [22.]',
    'What\'s his address / email / mobile? — [17 Park Street, Bath; carl.ham6@yoohoo.com; 07557 888453.]',
    'What was his last job? — [He was a ski instructor in Austria.]',
    'Can he speak any languages? — [Yes, French and German.]',
    'What does he like doing? — [Skiing, travelling, and playing the guitar.]',
  ] },
  { p: 109, x: 6.0, y: 46.0, ex: '2', title: 'Why is Carl interested?', kind: 'key', items: [
    '[He\'s over 18 (22). He lives in Bath, so he knows it well. He can speak French and German. He likes travel and people.]',
  ] },
  { p: 109, x: 59.6, y: 10.4, ex: '3', title: 'Carl\'s email', kind: 'key', items: [
    '1 [tourist guide]', '2 [22]', '3 [live]', '4 [student]', '5 [free]',
    '6 [ski instructor]', '7 [can]', '8 [languages]', '9 [like]', '10 [was]',
  ] },
  { p: 109, x: 59.6, y: 57.8, ex: '4', title: 'What is the job?', kind: 'key', items: [
    '[A receptionist at the International School.]',
  ] },

  // ---------- Unit 6 · book p109 ----------
  { p: 110, x: 3.0, y: 9.6, ex: '1', title: 'Ben Way — join the lines', kind: 'key', items: [
    'Ben Way is 35 years old, [and] he runs a company called \'Rainmakers\'.',
    'Ben\'s a computer millionaire. [However], he wasn\'t always so successful.',
    'As a child, he was dyslexic, [so] he didn\'t do well at school.',
    'He didn\'t learn to read or write [until] he was nine and his father gave him a computer.',
    'He wrote his first software program [when] he was only 11.',
    'He didn\'t go to university [because] at 15 he started his own company.',
    'He first became a millionaire [when] he was just 17.',
    'He continued to be very successful [until] he was 21.',
    'He won a business award in 2000, [but] then in 2001 he lost everything.',
    'One year later he started \'Rainmakers\', [and] now he\'s a millionaire again.',
  ] },
  { p: 110, x: 3.0, y: 49.2, ex: '3', title: 'Gabriella', kind: 'key', items: [
    '1 [and]', '2 [when]', '3 [because]', '4 [until]', '5 [However]', '6 [so]',
    '7 [because]', '8 [but]', '9 [when]', '10 [so]', '11 [However]', '12 [because]',
  ] },

  // ---------- Unit 7 · book p110–111 ----------
  { p: 112, x: 60.0, y: 10.4, ex: '2', title: 'Match the lines with the pictures', kind: 'key', items: [
    'a [3]', 'b [1]', 'c [2]', 'd [7]', 'e [5]', 'f [4]', 'g [8]', 'h [6]',
  ] },
  { p: 112, x: 60.0, y: 49.0, ex: '3', title: 'Complete the story', kind: 'key', items: [
    '1 [b] the Norseman, Leif Ericson, landed there 500 years before Columbus.',
    '2 [c] he worked with his father, who was a wool worker.',
    '3 [a] He learned to read and write Spanish during his early travels.',
    '4 [f] he begged King Ferdinand and Queen Isabella of Spain to give him money…',
    '5 [e] his sailors became tired and ill.',
    '6 [h] Columbus named it San Salvador, and its people, Indians.',
    '7 [d] The Spanish people gave Columbus a hero\'s welcome.',
    '8 [g] he was in great pain with arthritis and couldn\'t leave his bed.',
  ] },
  { p: 112, x: 60.0, y: 53.4, ex: '4', title: 'Time expressions', kind: 'key', items: [
    'For a long time — [people believed he discovered America]',
    'in 1451 — [Columbus was born]',
    'Between 1477 and 1485 — [he visited many countries]',
    'For eight years — [he asked the King and Queen for money]',
    'Finally — [after a long time]',
    'on 3 August, 1492 — [he left Spain]',
    'After three months — [time at sea]',
    'Two days later — [they saw land]',
    'Next / Then — [the next things that happened]',
    'Between 1492 and 1504 — [three more voyages]',
    'In the last years — [the end of his life]',
    'on 20 May, 1506 — [he died]',
  ] },

  // ---------- Unit 8 · book p112–113 ----------
  { p: 113, x: 7.0, y: 10.4, ex: '1', title: 'Sally\'s email to Duncan', kind: 'key', items: [
    '1 [Yes, she did. It was really great.]',
    '2 [Yes — the meal was fantastic (but she\'s joking: \'didn\'t know you could cook!\').]',
    '3 [She wants to make cottage pie for her friends in Edinburgh.]',
    '4 [By coach.]',
    '5 [Because they danced all night and she went to bed at 4.]',
    '6 [He got up early to take her to the coach station.]',
    '7 [Soon — she says \'Come and visit me soon\'.]',
    '8 [Informal.]',
    '9 [Before — the exams start next week.]',
  ] },
  { p: 114, x: 31.6, y: 9.7, ex: '2', title: 'Sally\'s email to Duncan\'s parents', kind: 'key', items: [
    '1 [The weekend before 21 April (19–20 April).]',
    '2 [Yes, it was — \'I was so pleased to meet you at last.\']',
    '3 [She ate a delicious meal and went for a walk in the countryside.]',
    '4 [No. She visited him on 1–2 May, before the exams.]',
  ] },
  { p: 114, x: 31.6, y: 20.8, ex: '3', title: 'Informal vs more formal', kind: 'key', items: [
    'Beginnings/endings: [Hi Duncan / Lots of love, Sal xxxx] vs [Dear Mr and Mrs Owen / Best wishes, Sally]',
    'Informal: [short sentences without I (didn\'t know you could cook), direct words (Email me), slang (just kidding, you\'re a star), emoticons, CAPITALS, Yuk!]',
    'More formal: [full sentences, polite phrases (I\'d like to thank you so much…, It was very kind of you…), positive adjectives, more linking words, no emoticons]',
  ] },

  // ---------- Unit 9 · book p114 ----------
  { p: 115, x: 57.6, y: 13.8, ex: 'GS', title: 'Relative pronouns', kind: 'key', items: [
    '1 We use which for [things].',
    '2 We use where for [places].',
    '3 We use who for [people].',
  ] },
  { p: 115, x: 7.8, y: 13.2, ex: '2', title: 'Join the sentences', kind: 'key', items: [
    '1 [Jack wrote the letter which arrived this morning.]',
    '2 [There\'s the park where we play football.]',
    '3 [This is the hotel where I always stay.]',
    '4 [Barbara\'s got a car which is faster than yours.]',
    '5 [I met the man who lives in the house on the corner.]',
  ] },
  { p: 115, x: 7.8, y: 37.6, ex: '3', title: 'My capital city: London', kind: 'key', items: [
    '1 [e] where the Romans landed', '2 [c] which are much bigger', '3 [a] where the Queen lives',
    '4 [h] where you can see', '5 [f] where you can buy anything', '6 [d] who want to drive',
    '7 [g] which costs £8 a day', '8 [b] which is the biggest',
  ] },

  // ---------- Unit 10 · book p115 ----------
  { p: 116, x: 3.4, y: 10.6, ex: '1', title: 'Which two are most formal?', kind: 'key', items: [
    '[2 (However…) and 3 (Although…)]',
  ] },
  { p: 116, x: 50.6, y: 10.6, ex: '2', title: 'Join in three ways', kind: 'key', items: [
    '1 [I like Peter, but I don\'t love him.] [I like Peter. However, I don\'t love him.] [Although I like Peter, I don\'t love him.]',
    '2 [My flat has a balcony, but it doesn\'t have a garden.] [My flat has a balcony. However, it doesn\'t have a garden.] [Although my flat has a balcony, it doesn\'t have a garden.]',
    '3 [My brother\'s older than me, but he\'s smaller than me.] [My brother\'s older than me. However, he\'s smaller than me.] [Although my brother\'s older than me, he\'s smaller than me.]',
  ] },
  { p: 116, x: 50.6, y: 20.6, ex: '3', title: 'My Brothers', kind: 'key', items: [
    '1 [although]', '2 [because]', '3 [However]', '4 [because]', '5 [when]', '6 [when]',
    '7 [However]', '8 [so]', '9 [but]', '10 [Although]', '11 [but]', '12 [However]',
  ] },

  // ---------- Unit 11 · book p116 ----------
  { p: 117, x: 7.6, y: 27.6, ex: '2', title: 'Questions about the holiday', kind: 'key', items: [
    'Where are they going? — To the South of France.',
    '[When are they going?] — [On 21 May.]',
    '[How are they travelling?] — [By plane and hired car.]',
    '[How long are they staying?] — [For ten days.]',
    '[Where are they staying?] — [In a house in a village.]',
    '[What are they going to do?] — [Swim, shop in the markets, read and relax, and eat in good restaurants.]',
  ] },
  { p: 117, x: 7.6, y: 56.6, ex: '3', title: 'The postcard', kind: 'key', items: [
    '1 [wonderful]', '2 [old]', '3 [beautiful]', '4 [hot]', '5 [warmer]', '6 [huge]', '7 [loud]', '8 [frightened]',
    '9 [sunny]', '10 [colourful]', '11 [expensive]', '12 [delicious]', '13 [peaceful]', '14 [relaxed]', '15 [busy]',
  ] },

  // ---------- Unit 12 · book p117 ----------
  { p: 118, x: 3.6, y: 8.9, ex: '1', title: 'Question words and answers', kind: 'key', items: [
    'What…? — [A suitcase.] ([What are you taking on holiday?])',
    'Where…? — [Spain.] ([Where are you going on holiday?])',
    'When…? — [Last September.] ([When did you go to the US?])',
    'Why…? — [Because I needed a holiday.] ([Why did you go to Italy?])',
    'Who…? — [Nobody.] ([Who are you travelling with?])',
    'How…? — [By boat.] ([How are you going to travel?])',
    'Which…? — [The small brown one.] ([Which backpack is yours?])',
    'Whose…? — [It\'s mine.] ([Whose suitcase is this?])',
  ] },
  { p: 118, x: 3.6, y: 39.3, ex: '3', title: 'Why did you leave? (one possible version)', kind: 'sample', items: [
    'I left at four in the [morning]. … When the house was [asleep].',
    'To a [noisy], crowded city. … To a [place] where no one knows me.',
    'Some money. Not my [photographs]. … Not much. Just [memories].',
    'By [land]. By [sea]. … I travelled alone. I have [always] travelled alone.',
    'Because I wanted to see [the world]. … No one has ever listened to [me].',
    'I have never [understood]. … Because I have very little to [say].',
    'When I have become [somebody]. Do not wait.',
  ] },
];
