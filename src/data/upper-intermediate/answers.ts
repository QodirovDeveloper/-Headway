// Answer keys, worked out from the Student's Book and its tapescripts.
// p = PDF page, x/y = centre of the exercise number in % of the page.
// kind: 'key' = exact answers, 'sample' = example answers (answers vary).
// Text in [brackets] is the answer itself and is shown in bold.
import type { Answer } from '../types';

export const ANSWERS: Answer[] = [

  // ========== Unit 1 ==========
  // ---------- book p6 ----------
  { p: 7, x: 8.9, y: 25.7, ex: 'Test your grammar', title: 'Which time expressions go with the sentences?', kind: 'sample', items: [
    '1 My parents met in Paris [ages ago / in the 1980s / during a snowstorm].',
    '2 They travel abroad [frequently / sometimes / never].',
    '3 They were working in Canada [when I was born / in the 1980s].',
    '4 I was born in Montreal [in the 1980s / during a snowstorm].',
    '5 My grandparents have lived in Ireland [since 1972 / for ages / for a year].',
    '6 I wrote to my grandmother [the other day / ages ago / recently].',
    '7 My brother\'s flying to Brazil on business [tonight / in a fortnight\'s time / later].',
    '8 He\'s been learning Portuguese [for ages / for a year / since 1972 / recently].',
    '9 I\'ll see you [later / tonight / in a fortnight\'s time].',
  ] },
  { p: 7, x: 40.0, y: 29.6, ex: '1', title: 'Tyler\'s Tweets', kind: 'key', items: [
    'The style is [informal].', 'Tyler is from [the US (New York)].',
    'He finds strange: [Chalk Farm isn\'t a farm; a flat is an apartment; a bathroom means a room with a bath; people drive on the left; people say \'cheers\' all the time; the subway is called \'the Tube\'.]',
  ] },

  // ---------- book p7 ----------
  { p: 8, x: 8.2, y: 5.4, ex: '2', title: 'Complete the questions and answers', kind: 'key', items: [
    '1 \'Where is Tyler spending the year?\' \'In London.\'',
    '2 \'Is this his first trip abroad?\' \'No, it [isn\'t]. He[\'s been] abroad once before. Last year he [went] to Mexico.\'',
    '3 \'Where [does] Dave [live]?\' \'In north London.\'',
    '4 \'How long [is] Tyler [going] to stay with Dave?\' \'A few days.\'',
    '5 \'Why [did] the guy say \'cheers\' to Tyler?\' \'Because he[\'d let] him pass.\'',
    '6 \'[Does] he like his host family?\' \'Yes, he [does]. He [thinks] they\'re very nice.\'',
    '7 \'What [are] they [doing] on Sunday?\' \'They[\'re visiting] Shakespeare\'s hometown.\'',
  ] },
  { p: 8, x: 8.8, y: 42.6, ex: '4', title: 'Teresa\'s email', kind: 'key', items: [
    'Where? — [In Tanga, Tanzania (East Africa).]', 'Working or on holiday? — [Working – she starts work early and rides to school.]',
    'Likes: [her piki-piki, the beach, collecting shells, barbecues, the sunsets, news from home]', 'Dislikes: [the heat, no air conditioning, the \'rubbish\' fans]',
  ] },
  { p: 8, x: 8.6, y: 46.9, ex: '5', title: 'Form the questions', kind: 'key', items: [
    '1 [How long has Teresa been in Africa?] — [Since last September.]', '2 [What time does she start work?] — [At 7.00.]',
    '3 [What has she just bought?] — [A piki-piki, a kind of little motorbike.]', '4 [Where did she go last Sunday?] — [To Pangani Beach.]',
    '5 [What is she going to take home?] — [Some shells.]', '6 [How many shells has she collected already?] — [Hundreds.]',
    '7 [What did they do at the beach?] — [They barbecued fish and swam until the sun went down.]', '8 [What is she sending to her parents?] — [Some photos.]',
  ] },
  { p: 8, x: 58.2, y: 5.7, ex: 'Language focus', title: 'Tenses and informal language', kind: 'key', items: [
    '1 Tenses: [Present Simple] (facts, habits); [Present Continuous] (now, and future arrangements); [Present Perfect Simple/Continuous] (past to now); [Past Simple] (finished past); [Past Perfect] (earlier past); [going to] (future plans).',
    '3.1 my buddy = [my friend]; I don\'t get it = [I don\'t understand]; hanging out together = [spending time together]; stuff = [things]; mega famous = [very famous]',
    '3.2 rubbish = [useless]; cool = [great]; Don\'t freak = [don\'t panic/worry]; \'specially = [especially]; awesome = [wonderful]; headed up = [went up]; a load of picnic stuff = [a lot of picnic food/things]; Missing you millions = [I miss you very much]',
    '3.3 Tyler: [(I\'m) Still sitting … (I\'ve) Been waiting … but (it) seems … (I\'ve) Just boarded … (This is) My first trip … (We) Just drove past … (That\'s) Crazy! … (It\'s a) Big day tomorrow.]',
    '3.3 Teresa: [(I) Wish we had … (I\'m) Missing you millions. (I) Can\'t wait to see you.]',
  ] },

  // ---------- book p8 ----------
  { p: 9, x: 9.2, y: 10.8, ex: '1', title: 'Complete the tense charts', kind: 'key', items: [
    'Active — Present: he works / we are working', 'Past: [she worked / she was working]', 'Future: [they will work / you will be working]',
    'Present Perfect: [she has worked / she has been working]', 'Past Perfect: [you had worked / you had been working]',
    'Future Perfect: they will have worked / he will have been working',
    'Passive — Present: they are made / it is being made', 'Past: [it was made / it was being made]', 'Future: [they will be made]',
    'Present Perfect: [they have been made]', 'Past Perfect: [it had been made]', 'Future Perfect: they will have been made',
  ] },
  { p: 9, x: 8.5, y: 59.1, ex: '4', title: 'Compare the meaning', kind: 'key', items: [
    '1 [comes = Present Simple: his home town. is coming = Present Continuous: he\'s travelling from Berlin now / a future arrangement.]',
    '2 [were you doing = Past Continuous: an activity in progress when it happened. did you do = Past Simple: your reaction after it happened.]',
    '3 [I\'ve lived = Present Perfect: I still live there. I lived = Past Simple: finished, I don\'t live there now.]',
    '4 [tidied = Past Simple: he tidied after we arrived. he\'d tidied = Past Perfect: it was already tidy when we arrived.]',
    '5 [We\'ll have = will: a suggestion/decision. We\'ll be having = Future Continuous: in progress at 8.00.]',
    '6 [I didn\'t teach = active: I was the teacher. I wasn\'t taught = passive: I was the student.]',
    '7 [paying to have the house painted = causative: someone else paints it for you. being paid to paint = passive: you are the painter.]',
    '8 [You\'re very kind = your character, always. You\'re being very kind = your behaviour now, unusual (you want something).]',
  ] },
  { p: 9, x: 56.8, y: 59.7, ex: 'Spoken English', title: 'Missing words', kind: 'key', items: [
    '1 [Have you] heard about Jane and John? [I] Thought not.', '2 [Are you] leaving already?', '3 [Have you] failed again?',
    '4 [I\'m] sorry I\'m late. [Have you] been waiting long?', '5 [Are you] doing anything interesting this weekend?', '6 [I] like the car!',
    '7 Bye Jo! [I\'ll] see you later.', '8 [I\'m] just coming!', '9 [Do you] want a lift?', '10 [Have you] seen Jim lately?',
  ] },

  // ---------- book p10 ----------
  { p: 11, x: 8.6, y: 18.9, ex: '2', title: 'Saroo\'s story', kind: 'key', items: [
    '1 [At a train station.]', '2 [Five years old.]', '3 [He was lost and alone in Calcutta, with crowds of people speaking a language he didn\'t know.]',
    '4 [He was taken into an orphanage and adopted by an Australian couple.]', '5 [He was on the train for about 14 hours, so he calculated his hometown was about 1,200km from Calcutta.]',
    '6 [He used Google Earth and found the waterfall where he used to play.]', '7 [She looked much older – 25 years had passed.]',
    '8 [She grabbed his hand and took him into her house. She couldn\'t say anything.]',
  ] },
  { p: 11, x: 8.6, y: 46.6, ex: '3', title: 'True or false?', kind: 'key', items: [
    '1 [✓]', '2 [✗] [He fell asleep at a station near home and woke up in Calcutta 14 hours later.]', '3 [✗] [He lived on the streets as a beggar.]',
    '4 [✗] [A man offered him food and shelter, but Saroo ran away.]', '5 [✓]', '6 [✓]',
    '7 [✗] [The family had moved; a neighbour took him to his mother.]', '8 [✗] [He keeps in touch with his birth family.]',
  ] },

  // ---------- book p12 ----------
  { p: 13, x: 9.3, y: 15.6, ex: 'Compounds', title: 'Nouns or adjectives?', kind: 'key', items: [
    'Nouns: [lifestyle, life expectancy, life insurance]', 'Adjectives: [lifelong, life-size]',
  ] },
  { p: 13, x: 8.2, y: 31.4, ex: '1', title: 'Compounds with home and house', kind: 'key', items: [
    'Nouns: [homework, homecoming, home town, homepage, housewife, housework, houseplant, housewarming]',
    'Adjectives: [homemade, homesick, homeless, home-grown, house-proud, housebound]',
  ] },
  { p: 13, x: 52.9, y: 31.4, ex: '3', title: 'Complete the lines', kind: 'key', items: [
    '1 [houseplants]', '2 [house-proud]', '3 [homecoming]', '4 [housewife … homemade … home-grown]', '5 [housewarming]',
    '6 [housework]', '7 [homesick]', '8 [housebound]',
  ] },
  { p: 13, x: 52.7, y: 71.8, ex: '5', title: 'Compounds from A and B', kind: 'sample', items: [
    'book: [bookcase, bookshelf]', 'tea: [teapot, tea bag]', 'computer: [computer program, computer software]', 'sleeping: [sleeping pill, sleeping bag]',
    'air: [airline, airway, airport, air conditioning]', 'door: [doorbell, doorway, doorstep]', 'junk: [junk food]', 'open: [open-air]',
    'food: [food poisoning]', 'fire: [fire escape, fire alarm, firelight]', 'head: [headline, headlight, head office, headrest]',
  ] },

  // ---------- book p13 ----------
  { p: 14, x: 8.6, y: 12.5, ex: '1', title: 'Match the lines in A and B', kind: 'key', items: [
    '1 [b]', '2 [d]', '3 [e]', '4 [a]', '5 [c]', '6 [g]', '7 [h]', '8 [f]',
  ] },
  { p: 14, x: 8.6, y: 31.1, ex: '3', title: 'Who are the people?', kind: 'key', items: [
    '[Two strangers on a train. They don\'t know each other. A is getting off at Bristol; B is going all the way to London.]',
  ] },
  { p: 9, x: 8.7, y: 27.6, ex: '2', title: 'What are the contexts?', kind: 'sample', items: [
    '1 [A shop assistant talking to a customer.]', '2 [Two friends gossiping about a woman and Patrick.]', '3 [A colleague promising to pass on good news to Bill.]',
    '4 [Someone talking about a driver who was stopped by the police.]', '5 [Someone describing a relative they hadn\'t seen for years.]',
    '6 [Someone talking about a man nobody believes.]', '7 [Someone waiting to hear about a job application.]', '8 [A wife complaining about her husband\'s working hours.]',
  ] },
  { p: 9, x: 8.7, y: 50.8, ex: '3', title: 'Identify the tenses', kind: 'key', items: [
    '1 [Present Continuous Passive, Present Continuous]', '2 [Present Perfect, Present Perfect Continuous]', '3 [Future Continuous, will]',
    '4 [Past Continuous, Past Simple]', '5 [Past Perfect, Past Perfect]', '6 [will, Present Simple, Present Simple Passive]',
    '7 [Present Perfect Passive, Present Perfect, Future Simple Passive]', '8 [Present Perfect Continuous, Present Simple]',
  ] },
  { p: 10, x: 8.1, y: 18.0, ex: '2', title: 'Where are they from? Where are they now?', kind: 'key', items: [
    'Margaret — [from Yorkshire, England; lives in Germany]', 'Mairie — [from Scotland; lives in Madrid]', 'Rob — [from Britain; lives in France]',
    'Joe — [from the UK; lives in the US]', 'Tetyana and Sem — [from Ukraine; live in England]', 'Shaun — [lives with his dad on the east coast (US); visits his mom in Florida]',
  ] },
  { p: 10, x: 8.1, y: 24.0, ex: '3', title: 'What they miss', kind: 'key', items: [
    'Margaret — [the sea] — [she\'s lived in Germany for 30 years; there\'s a river where she lives; the sea changes all the time]',
    'Mairie — [the weather] — [in Scotland the air is crisp, clear, and cooler; Madrid is hot, humid, and sticky in summer]',
    'Rob — [English food, the chat and banter in pubs, British humour, having a vote] — [he\'s lived in France for 20 years; Brits lose their vote after 15 years abroad]',
    'Joe — [British bread (for toast); British modesty at work] — [in the US you\'re expected to sell yourself]',
    'Tetyana and Sem — [the food (cottage cheese, fruit, watermelons), the language, national holidays] — [fruit doesn\'t taste right in England]',
    'Shaun — [his drums] — [he\'s in a rock band and can\'t travel with his kit]',
  ] },
  { p: 10, x: 8.1, y: 68.6, ex: '4', title: 'Who is speaking?', kind: 'key', items: [
    '1 [Joe] – here = [the US]; he\'s expected to sell [himself and his abilities].', '2 [Margaret] – [the river near her home] isn\'t the same as [the sea].',
    '3 [Tetyana] – [watermelons]; [apricots, melons, and tomatoes] are also disappointing.', '4 [Shaun] – [his drums]; he\'s in a rock band and can\'t take his kit.',
    '5 [Rob] – [Britain]; you lose [your vote].', '6 [Mairie] – there = [Scotland]; [Madrid is hot, humid, and sticky in summer].',
  ] },
  { p: 13, x: 7.3, y: 82.1, ex: '2', title: 'Five conversations', kind: 'key', items: [
    '1 [Two friends/neighbours – watering the plants while A is away] – [houseplants, house-proud]',
    '2 [A mother and her daughter Julie – Anna is coming home from the States] – [homecoming, housewife, homemade, home-grown]',
    '3 [Two friends – a party in a new flat] – [house-warming, housework]', '4 [Max, at camp, and his mum] – [homesick]',
    '5 [Two teenagers – Carly\'s party] – [housebound]',
  ] },
  { p: 14, x: 8.6, y: 69.9, ex: '5', title: 'Complete the lines', kind: 'key', items: [
    'A Excuse [me, don\'t I] know you [from] somewhere? B Actually, [I don\'t] think so. A [Weren\'t you at] Gavin\'s party last week? B Not me. [I don\'t] know anyone [called] Gavin. A Well, someone [who] looked just [like you was] there. B Well, that\'s [as maybe but it] certainly wasn\'t me. A [I] am sorry!',
    'A Tony! Hi! Great [to] see [you]! B Well[, I was] just passing [and I thought I\'d] drop in [and say] \'hello\'. A [Come on] in! Have [a] drink! B [You] sure? [You\'re not] too busy? A Never [too] busy [to] talk [to] you. B Thanks, Jo. [It\'d be r]eally nice [to have a] chat. A Fantastic! Let [me take your] coat.',
  ] },

  // ========== Unit 2 ==========
  // ---------- book p14 ----------
  { p: 15, x: 8.3, y: 26.3, ex: 'Test your grammar', title: 'What is strange? Simple or continuous?', kind: 'key', items: [
    '1.1 [Columbus discovered America.] (finished past – he\'s dead)', '1.2 [I\'ve travelled all my life. I\'ve been everywhere.] (my life isn\'t over)',
    '1.3 [I\'ve been learning English.] (you never finish learning a language)', '1.4 [Ouch! I\'ve cut my thumb.] (one sudden, complete action)',
    '2.1 [What are you doing at the weekend?] (a plan, not a habit)', '2.2 [no change – like is a state verb]',
    '2.3 [I was having a shower at 7.00.] (in progress at 7.00, not started at 7.00)', '2.4 [Someone\'s been eating my sandwich.] (some of it is left, not all gone)',
  ] },
  { p: 15, x: 7.9, y: 53.4, ex: '2', title: 'Marco Polo or Jake Ellis?', kind: 'key', items: [
    '[MP] He was born in Venice, the son of a merchant …', '[JE] He\'s learnt a lot about history in Vietnam …', '[JE] He\'s been staying in cheap hostels …',
    '[MP] His route led him through Persia and Afghanistan.', '[MP] He was met by the emperor Kublai Khan …', '[JE] \'I\'ve had diarrhoea a few times …\'',
    '[MP] He stayed in China for seventeen years …', '[JE] He\'s been travelling mainly by public transport.',
  ] },

  // ---------- book p15 ----------
  { p: 16, x: 8.2, y: 5.6, ex: '3', title: 'Match the lines about Jake', kind: 'key', items: [
    'He\'s been stung [all over his body].', 'He\'s visited [ancient temples].', 'He\'s been staying [in cheap hostels].', 'I\'ve been [mugged].',
    'I\'ve met [a lot of really great people].', 'He\'s been to [Laos and Vietnam].',
  ] },
  { p: 16, x: 62.5, y: 5.9, ex: 'Language focus', title: 'Present Perfect Simple and Continuous', kind: 'key', items: [
    '1 Marco Polo: [Past Simple] – his life and travels are finished. Jake Ellis: [Present Perfect Simple and Continuous] – his trip isn\'t finished; we talk about his experiences up to now.',
    '2.1 [been writing = an activity continuing from 16 to now; has written three novels = completed results, a number]',
    '2.2 [I\'ve read = completed, an experience; I\'ve been reading … nearly finished = incomplete; been reading a lot lately = repeated activity; read three = number completed]',
    '2.3 [little difference in meaning; the continuous emphasises the activity and how long it has lasted]',
  ] },
  { p: 16, x: 61.5, y: 43.6, ex: '1', title: 'Marco Polo or Jake Ellis?', kind: 'key', items: [
    '1 Where did he go? [MP] / Where has he been? [JE]', '2 How long has he been travelling? [JE] / How long did he travel? [MP]',
    '3 How did he travel? [MP] / How has he been travelling? [JE]', '4 Who has he met? [JE] / Who did he meet? [MP]',
    '5 Did he have any problems? [MP] / Has he had any problems? [JE]',
  ] },
  { p: 16, x: 61.6, y: 66.9, ex: '2', title: 'Write the questions', kind: 'key', items: [
    '1 [When and where was he born?]', '2 [How long did the journey to China take?]', '3 [How long did he stay in China?]', '4 [What did he bring back?]',
    '5 [What was the title of his book?]', '6 [How has he been travelling?]', '7 [Which countries has he been to?]', '8 [Where has he been staying?]',
    '9 [How much money has he raised?]', '10 [Has he been ill?]',
  ] },

  // ---------- book p16 ----------
  { p: 17, x: 9.4, y: 7.0, ex: '3', title: 'Put the verbs in the correct tense', kind: 'key', items: [
    '1 We [drove] over 500 miles yesterday. We[\'ve] already [driven] 200 miles today. We[\'ve been driving] for hours without a break.',
    '2 [Have] you ever [tried] Korean food? [Did] you [try] kimchee when you were in Seoul?',
    '3 How many times [have] you [been] to America? How many times [did] Christopher Columbus [go] to America?',
    '4 My aunt [has lived] in the same house since she was born. [I\'ve been living] with her for the past month while I look for a job.',
  ] },
  { p: 17, x: 10.1, y: 38.8, ex: 'Language focus', title: 'State verbs', kind: 'sample', items: [
    '[know, like, love, hate, want, need, prefer, understand, believe, mean, own, belong, seem, cost, contain]',
  ] },
  { p: 17, x: 8.7, y: 60.1, ex: '4', title: 'Match a line in A with a line in B', kind: 'key', items: [
    'Peter comes [1 from Switzerland]. / Peter is coming [2 round at 8.00 tonight].',
    'I wrote a report this morning. [1 I sent it off this afternoon.] / I was writing a report this morning. [2 I\'ll finish it this afternoon.]',
    'What have you done [2 with my bag?] / What have you been doing [1 since I last saw you?]',
    'I\'ve had [1 a headache all day]. / I\'ve been having [2 headaches for weeks].',
    'I\'ve known [2 Anna for over ten years]. / I\'ve been getting to know [1 my new neighbours].',
    'I\'ve cut [1 my finger. It hurts.] / I\'ve been cutting [2 wood all morning].',
  ] },

  // ---------- book p18 ----------
  { p: 19, x: 8.4, y: 45.2, ex: '3', title: 'Read the article quickly', kind: 'key', items: [
    '1 [A TV adventurer (presenter).]', '2 [toothbrushes, combs, shoes, belts, bicycle helmets, food packaging, water bottles, plastic bags]',
    '4 [Hawaii, the Pacific Ocean, Britain (Dorset, south Wales), the North Atlantic, Bangladesh, England, Modbury in Devon]',
    '5 [Small plastic pellets – the raw material factories use to make plastic products.]',
  ] },
  { p: 19, x: 8.4, y: 61.3, ex: '4', title: 'True or false?', kind: 'key', items: [
    '1 [✗] [Its beaches are covered in plastic rubbish washed up from around the world.]', '2 [✗] [Volunteers remove the larger pieces by hand; nurdles are too small.]',
    '3 [✓]', '4 [✗] [600,000 plastic containers are dumped by ships every day; at least 100 million tons of plastic are in our seas.]',
    '5 [✗] [They produced more plastic in the first decade of this century than in the whole 20th century.]', '6 [✓] [ruining beaches, choking the oceans, poisoning the food chain]',
    '7 [✓]', '8 [✓] [Both have got rid of plastic bags.]',
  ] },

  // ---------- book p19 ----------
  { p: 20, x: 68.0, y: 66.3, ex: '1', title: 'Words meaning \'rubbish\'', kind: 'key', items: [
    '[rubbish, garbage, litter, waste, debris]',
  ] },
  { p: 20, x: 68.2, y: 74.9, ex: '3', title: 'Match the words in A and B', kind: 'key', items: [
    '1 [f] turquoise sea', '2 [a] infinite number', '3 [h] grains of sand', '4 [c] food chain', '5 [g] mountain of rubbish', '6 [e] sea currents',
    '7 [b] single-use water bottles', '8 [d] throwaway society',
  ] },

  // ---------- book p20 ----------
  { p: 21, x: 9.7, y: 22.4, ex: '2', title: 'make or do?', kind: 'key', items: [
    'MAKE: a decision, [a good impression], [arrangements], [a profit/a loss], [a start/a move], [an effort], [a difference], [sth clear], [a suggestion]',
    'DO: [business], [research], [your best], [a good job], [a degree], [sb a favour]',
  ] },
  { p: 21, x: 9.5, y: 45.8, ex: '3', title: 'Complete the sentences', kind: 'key', items: [
    '1 [make a good impression]', '2 Can I [make a suggestion]?', '3 A lot of [research] has been [done]', '4 [doing a good job]', '5 [make it clear]',
    '6 [make a start]', '7 It [makes] no [difference].', '8 Could you [do] me [a favour]',
  ] },
  { p: 21, x: 9.3, y: 69.6, ex: '4', title: 'Match and underline', kind: 'key', items: [
    '1 She\'s [made the big time] … — She can command $20 million a movie.', '2 We\'ll never [make] the airport in time. — The traffic\'s too bad.',
    '3 What does she [do for a living]? — She\'s a corporate lawyer.', '4 You\'ll all have to [do more overtime] … — [That does it]! I\'m going to look for another job!',
    '5 How much do you want to borrow? £20? — Great. [That\'ll do] fine.', '6 How much Spanish do you speak? — Well, I can [make myself understood].',
    '7 I hear the boss said you\'d [done really well]. — Yeah. It really [made my day].',
    'Extra comments: 1 [$20 million? Nobody\'s worth that!] 2 [Look! I think it\'s starting to move.] 3 [That sounds boring. – Boring it may be but it\'s really well paid!] 4 [Leave if you like but it\'s the only way this business will survive.] 5 [Just pay it back when you can. No hurry.] 6 [Really? You sound pretty fluent to me.] 7 [But did you get a bonus as well as a compliment? – No, just a pat on the back.]',
  ] },
  { p: 21, x: 68.2, y: 27.3, ex: '5', title: 'Phrasal verbs with do', kind: 'key', items: [
    '1 I [could do with] a cup of tea.', '2 We\'re going to [do] it [up]', '3 we should [do away with] the monarchy', '4 I could never [do without] my personal assistant.',
  ] },
  { p: 21, x: 68.0, y: 60.9, ex: '6', title: 'Phrasal verbs with make', kind: 'key', items: [
    '1 Thieves … [made off with] jewellery and antique paintings.', '2 They\'re trying to [make up for] always being at work.',
    '3 What do you [make of] the new boss?', '4 He [made] the whole thing [up].',
  ] },

  // ---------- book p21 ----------
  { p: 22, x: 8.3, y: 13.9, ex: '1', title: 'Which preposition?', kind: 'key', items: [
    '[in] the middle of nowhere / the heart of the countryside / the far south of Japan / the French quarter of the city',
    '[on] the outskirts of the city / the beach by the sea / the bank of the river / the edge of the forest',
    '[at] the top of the mountain / the corner of the street / the back of the hotel / the end of the track',
  ] },
  { p: 22, x: 9.6, y: 72.0, ex: 'Spoken English', title: 'Adding emphasis', kind: 'key', items: [
    'We rented a flat [right] in the centre. The Grand Canal was [just] at the end of the street. It was wonderful to be in the [very] heart of the city.',
  ] },
  { p: 22, x: 42.0, y: 13.9, ex: '4', title: 'Two texts about the hotel', kind: 'key', items: [
    'Text 1 is from [a holiday brochure/website]; text 2 is from [a letter of complaint].',
    '1 [14-night]', '2 [20-square]-mile', '3 [360-degree]', '4 [four-bedroom]', '5 [50-minute]',
    '6 [five-star]', '7 [20-mile-an-hour]', '8 [two-hour]', '9 [100-metre-tall]', '10 [five-minute]',
  ] },
  { p: 18, x: 40.2, y: 52.7, ex: '3', title: 'Which activity? How did it affect them?', kind: 'key', items: [
    'Alan — [seeing the Northern Lights] — [a sense of wonder and awe; he felt small]',
    'Bernie — [whale-watching] — [they felt emotional, exhilarated – a joyful experience]',
    'Carol — [walking the Great Wall of China] — [she was terrified; at the end she felt huge relief]',
  ] },
  { p: 18, x: 40.2, y: 56.7, ex: '4', title: 'Alan, Bernie, or Carol?', kind: 'key', items: [
    '[B] – nothing happened for the first 20 minutes; they just sailed around.', '[C] – she was so scared in the wind and rain that she had to turn back.',
    '[A] – a kind of buzzing noise.', '[B] – the whale was massive, really massive.', '[A] – the second time was best: they covered the whole sky.',
    '[C] – it was raining and windy, freezing and slippery.',
  ] },
  { p: 18, x: 41.0, y: 77.1, ex: 'Spoken English', title: 'Fillers', kind: 'sample', items: [
    '[a kind of shimmering curtain / a kind of er buzzing noise / I just kind of sat there / I mean, really massive / you know / like er only a summer dress / er, erm]',
  ] },
  { p: 22, x: 8.3, y: 47.0, ex: '2', title: 'Where are they talking about?', kind: 'key', items: [
    '1 [The pyramids at Giza, Egypt]', '2 [Berlin (the Reichstag)]', '3 [Washington DC (the Mall)]', '4 [The Taj Mahal, India (and Jaipur)]',
  ] },
  { p: 22, x: 8.3, y: 53.0, ex: '3', title: 'Complete the lines', kind: 'key', items: [
    '1 They stand just [on the edge of the desert]. I kind of expected them to be right [in the middle of nowhere].',
    '2 There\'s a viewing terrace right [at the very top of the building].', '3 We were staying [on the outskirts of the city].',
    '4 It\'s a magnificent white building, right [on the banks of the river]. I loved the colourful streets [in the very heart of the Old City].',
  ] },

  // ========== Unit 3 ==========
  // ---------- book p22 ----------
  { p: 23, x: 8.7, y: 25.0, ex: 'Test your grammar', title: 'Match the tense names', kind: 'key', items: [
    'Past Simple — [They crashed the car.]', 'Past Continuous — [Ellen and George were driving home.]', 'Past Perfect Simple — [They\'d been on holiday.]',
    'Past Simple Passive — [Fortunately they weren\'t injured.]', 'Past Perfect Continuous — [They\'d been driving for hours.]',
  ] },
  { p: 23, x: 8.1, y: 61.9, ex: '3', title: 'Why are experts sceptical?', kind: 'key', items: [
    '[It seems impossible to survive for 60 days with nothing to eat but snow, at temperatures as low as -30°C.]',
  ] },

  // ---------- book p23 ----------
  { p: 24, x: 8.6, y: 41.7, ex: '7', title: 'Match a line in A with a line in B', kind: 'key', items: [
    '1 He disappeared [ten months ago].', '2 He\'d been living in the forest [since May].', '3 The car looked [like an igloo].',
    '4 He\'d fallen out [with his family].', '5 They hadn\'t been trying [to find him].', '6 He wasn\'t discovered [until February].',
  ] },
  { p: 24, x: 11.9, y: 61.6, ex: 'Language focus', title: 'Narrative tenses', kind: 'key', items: [
    '1 Paragraph 1: [Past Simple only – events one after another in order.] Paragraph 2: [Past Continuous (background), Past Perfect (earlier events).] [Paragraph 2] sounds more like the beginning of a story.',
    '2 [had become trapped, was recovering, had been driving, had kept, had eaten, had run out, had been trying]',
    '3 [was reported, was wrapped, (after) being pulled out]',
  ] },
  { p: 24, x: 53.1, y: 11.3, ex: '1', title: 'Compare the use of tenses', kind: 'key', items: [
    '1 [read = the whole book, finished; was reading = in progress, maybe not finished]',
    '2 [opened = after the guests arrived; was opening = in progress as they arrived; had opened = before they arrived]',
    '3 [started = as we arrived; had started = before we arrived – we missed the beginning]',
    '4 [had stolen = one occasion; had been stealing = repeatedly, over a long period]',
    '5 [was being repaired = in progress, not ready; had been repaired = finished, ready]',
  ] },
  { p: 24, x: 53.3, y: 61.3, ex: '2', title: 'Rewrite as one sentence', kind: 'sample', items: [
    '1 [Peter was tired when he arrived home because he\'d got up at dawn and had been driving for ten hours.]',
    '2 [When I went to get my car, it wasn\'t there because I\'d parked it on a yellow line and it had been towed away.]',
    '3 [Last night Sally was celebrating because she\'d won £2,000 in a competition.]',
    '4 [When Jane and Peter arrived home they were broke because they\'d been shopping all day and had spent all their money on clothes.]',
    '5 [Last week John moved to a house in Scotland which he\'d first seen while he was driving on holiday.]',
  ] },

  // ---------- book p24 ----------
  { p: 25, x: 54.8, y: 53.5, ex: 'Spoken English', title: 'Giving and receiving news', kind: 'key', items: [
    'Giving news: [Did you hear about …? It says here that … The incredible thing was that … What happened next was … Apparently what happened was … Anyway, in the end …]',
    'Reacting to news: [You\'re kidding! That\'s amazing! Really? I don\'t believe it. That\'s such a shame.]',
    'Asking for more information: [Where did this happen? Who called the police? How did it happen?]',
  ] },

  // ---------- book p25 ----------
  { p: 26, x: 8.2, y: 12.2, ex: '1', title: 'Write the questions', kind: 'key', items: [
    '1 Who wrote it?', '2 [What kind of book is it?]', '3 [What\'s it about?]', '4 [Where and when is it set?]', '5 [Who are the main characters?]',
    '6 [Has it been made into a film?]', '7 [How does it end?]', '8 [Would you recommend it?]', '9 [What did the critics say? / What were the reviews like?]',
    '10 [Has it won any awards?]',
  ] },
  { p: 26, x: 7.9, y: 74.7, ex: '2', title: 'Questions about a film', kind: 'sample', items: [
    '[All of them except \'Who wrote it?\' and \'Has it been made into a film?\']', 'Other questions: [Who directed it? Who\'s in it? Where was it filmed? Is it worth seeing?]',
  ] },
  { p: 26, x: 8.1, y: 79.0, ex: '3', title: 'Ruth Rendell', kind: 'key', items: [
    'Kind of stories: [crime/mystery stories, psychological thrillers]',
    'Words: [spine-chilling, a page-turner, makes the heart pound, twisted, unbalanced, haunting, suspense at its best]',
    'Awards: [Yes – an Edgar from the Mystery Writers of America.]',
  ] },
  { p: 26, x: 7.9, y: 86.5, ex: '4', title: 'Match the synopses with the titles', kind: 'key', items: [
    'Lisa meets her exact double — [2 The Double]', 'A cautious woman and a roommate who leaves the doors unlocked — [3 You Can\'t Be Too Careful]',
    'A suburban couple and their new friend Reeve — [4 People Don\'t Do Such Things]', 'Mothers who reject their children — [1 The Vinegar Mother]',
    'A man rescues a young woman from suicide — [6 The Clinging Woman]', 'A stranger lures 8-year-old Richard into his car — [5 The Fallen Curtain]',
  ] },

  // ---------- book p26 ----------
  { p: 27, x: 9.1, y: 25.9, ex: '2', title: 'The facts in Part 1', kind: 'key', items: [
    'There are two characters, a man and [a girl].', 'He lives [on the ninth floor of a high-rise block].', 'She lives [on the twelfth floor of the block next to his].',
    'It is [half past six] in the morning.', 'The weather [is fine – the sky is blue and empty of clouds].', 'He sees [a girl hanging from the rail of a balcony].',
  ] },

  // ---------- book p27 ----------
  { p: 28, x: 56.8, y: 6.0, ex: '3', title: 'Part 2', kind: 'key', items: [
    '1 [He thinks he must be dreaming.]',
    '2 [It must be a stunt for a film and the girl is a dummy. He knows it\'s wrong because there is nobody down below, and the \'dummy\'s\' hand moves, clutching the rail more tightly.]',
    '3 [The girl is trying to kill herself but has lost her nerve. He phones the police.]',
    '4 [They gossip about it and treat him as a hero – they point at him and congratulate him.]',
    '5 [He dislikes being in the limelight and is relieved when the talk dies away. He is modest and quiet.]',
    '6 [The girl comes to his flat to thank him.]', '7 [He has never seen her face.]',
  ] },
  { p: 28, x: 57.0, y: 77.1, ex: 'Vocabulary work', title: 'Synonyms', kind: 'key', items: [
    'notified — [alerted]', 'courage — [nerve]', 'woken up — [awakened]', 'disappearing — [vanishing]', 'clearly — [obviously]', 'final — [ultimate]',
    'centre — [focus]', 'empty — [deserted]', 'look — [gaze]', 'faded — [wore off]', 'holding tightly — [clutching]',
  ] },
  { p: 22, x: 43.2, y: 87.6, ex: '6', title: 'What is the problem in each one?', kind: 'key', items: [
    '1 [Leo\'s house is in the middle of nowhere, so the sat nav (GPS) can\'t find it – he gives complicated directions.]',
    '2 [A visitor is lost in a building that is like a maze and gets the directions to reception wrong.]',
    '3 [Phil says he knows the way to the pub, but they\'re lost – the \'pub\' is a hairdresser\'s.]',
  ] },
  { p: 24, x: 8.4, y: 5.6, ex: '5', title: 'Complete the lines', kind: 'key', items: [
    '1 [Was] he [buried] by an avalanche while he [was] skiing?', '2 No, he [hadn\'t been] skiing.', '3 He [was driving] his car and he [got stuck] in snowdrifts.',
    '4 How come nobody [found] him?', '5 He[\'d brought] a sleeping bag and he [was lying] in that.', '6 Why [didn\'t] anyone [report] him missing?',
    '7 He said he[\'d eaten] nothing but snow.', '8 I think there\'s more to this story than [meets] the eye.',
  ] },
  { p: 25, x: 9.2, y: 11.3, ex: '4', title: 'Correct the statements', kind: 'key', items: [
    '1 [He\'s a billionaire mobile phone tycoon.]', '2 [He was beaten with a crowbar during a robbery at his 16th-century mansion; he had a gash and bruises.]',
    '3 [He had been chatting with his fiancée in the kitchen.]', '4 [They escaped on foot across fields with money and jewels.]',
    '5 [They were treated by paramedics at the scene before being taken to a private hospital.]', '6 [A 48-year-old man has been arrested.]',
  ] },
  { p: 25, x: 9.2, y: 30.7, ex: '5', title: 'Nik Wallenda', kind: 'key', items: [
    '1 [What did he do that was so amazing?] — [He crossed a gorge near the Grand Canyon on a tightrope.]', '2 [Has anyone done this before?] — [No, never. He\'s the first.]',
    '3 [What was he wearing?] — [Special shoes his mother had made for him.]', '4 [What wasn\'t he wearing?] — [A safety harness.]',
    '5 [How long did it take?] — [Just 22 minutes.]', '6 [What was the weather like?] — [Not good – strong winds and a lot of dust.]',
    '7 [How many people watched him?] — [A global TV audience of several million.]', '8 [What did he do the year before?] — [He walked across the Niagara Falls.]',
  ] },
  { p: 28, x: 57.0, y: 27.1, ex: '4', title: 'Part 3', kind: 'key', items: [
    '1 [Very embarrassed. \'You shouldn\'t have … I only did what anyone would have done.\' \'It was nothing.\' \'I\'ve almost forgotten it.\']',
    '2 [Either come in or go away – quickly.]', '3 [He doesn\'t want his neighbours to hear and make a fuss of him again.]',
    '4 [He feels relieved. She seems calm yet intense, smiling pensively.]',
  ] },
  { p: 29, x: 8.8, y: 25.1, ex: '3', title: 'Which title? How do you know?', kind: 'key', items: [
    'Amy — [Pride and Prejudice] (Elizabeth Bennett and Mr Darcy)', 'Lucas — [The Dark Knight] (the Joker, Batman, Gotham City)',
    'Martina — [The Matrix] (a warning about technology, pioneering special effects)', 'Adam — [The Da Vinci Code] (the Professor, the curator\'s body in the Louvre)',
  ] },
  { p: 29, x: 8.8, y: 31.1, ex: '4', title: 'Lucy and Rachel', kind: 'key', items: [
    'Relationship: [Rachel is Lucy\'s aunt.]', 'Surprised: [Rachel always said she hated reading on a screen and liked turning proper pages.]',
    'Benefits: [a whole library in your handbag; light for travelling; downloads cost about half the price; no need to plan what to read; great in bed]',
    'Limitations: [screens aren\'t much good in the sun]', 'Lucy: [she spends all day on screens and likes a break – curling up with a real book or reading in the sun]',
  ] },
  { p: 29, x: 8.8, y: 62.4, ex: '5', title: 'Greg and Eddie', kind: 'key', items: [
    '4D films: [the cinema seats move and vibrate to match the action]',
    'Cinema: [+ the group experience, the big screen, colour, and sound; – it costs a fortune, people talk and eat crisps or popcorn]',
    'Downloading/streaming: [+ watch when it suits you, in peace and quiet; – many films were made for the big screen]',
    'Greg: [his girlfriend likes black and white foreign films – too heavy, and the subtitles are distracting]', 'Eddie: [offers to lend him some DVDs of foreign comedies and thrillers]',
  ] },
  { p: 30, x: 7.9, y: 12.0, ex: '1', title: 'B\'s answers', kind: 'key', items: [
    '[A new boyfriend?] Good for her!', '[Does he?] How amazing!', '[In Slovenia?] That\'s interesting.', '[Can\'t he?] I thought everyone could these days!',
  ] },
  { p: 30, x: 7.9, y: 31.7, ex: '2', title: 'Echo or reply questions?', kind: 'key', items: [
    'Echo questions: [A new boyfriend? In Slovenia?]', 'Reply questions: [Does he? Can\'t he?]',
  ] },
  { p: 30, x: 7.9, y: 36.0, ex: '3', title: 'Echo or reply questions', kind: 'key', items: [
    '1 [Does he?] … [My precious Chinese vase?] Oh, no!', '2 [Did you?] … [Did it?] … [Was it?] What a drag!', '3 [Are you?] How come? … [£500?] Why so much? … [Do you?] How interesting!',
    '4 [Did it?] … [Ten miles long?] That\'s awful! … [Have you?] Poor darling.', '5 [Are you?] … [Have you?] What is it? … [Marry me?] Wow!',
  ] },

  // ========== Unit 4 ==========
  // ---------- book p30 ----------
  { p: 31, x: 9.9, y: 26.0, ex: 'Test your grammar', title: 'The missing word', kind: 'key', items: [
    '1 What [kind/sort] of music do you like?', '2 How [often] do you wash your hair?', '3 Who do you look [like]?',
    '4 What were you talking to the teacher [about]?', '5 Do you know what the time [is]?',
  ] },
  { p: 31, x: 51.5, y: 26.1, ex: 'Test your grammar', title: 'Make the sentences negative', kind: 'key', items: [
    '1 [I don\'t agree with you.]', '2 [I don\'t think you\'re right.]', '3 [I told her not to go home. / I didn\'t tell her to go home.]',
    '4 [I didn\'t know anybody at the party. / I knew nobody at the party.]', '5 [I haven\'t done my homework yet.]', '6 [My sister doesn\'t like jazz either.]',
  ] },

  // ---------- book p31 ----------
  { p: 32, x: 8.2, y: 12.1, ex: '4', title: 'Which question was each person asked?', kind: 'key', items: [
    'Don\'t you like my new dress? — [\'Honestly! It looks great! It really suits you.\']',
    'Can I speak to Harriet Jones, please? It\'s urgent. — [\'I\'m afraid Ms Jones is in a meeting at the moment.\']',
    'How come you\'re not at work today? — [\'Believe me, Mr Dixon, I am ill.\']',
    'Who gave you that black eye? — [\'Nobody hit me. I fell down in the playground.\']',
    'Tell me where you are going and who with. — [\'Look, Dad, I\'m just going over to Emma\'s …\']',
    'Why won\'t you marry me? — [\'Sorry Craig. It\'s not that I don\'t love you …\']',
  ] },
  { p: 32, x: 11.2, y: 35.9, ex: 'Language focus', title: 'Questions and negatives', kind: 'key', items: [
    'questions with auxiliary verbs: [Don\'t you like …? Can I speak …? Why won\'t you marry me?]',
    'a question without an auxiliary verb: [Who gave you that black eye?]', 'two ways of asking \'Why?\': [How come …? / Why …?]',
    'negative questions: [Don\'t you like my new dress? Why won\'t you marry me?]', 'an indirect question: [Tell me where you are going …]',
    'a question with a preposition at the end: [… and who with?]', 'negative statements: [I don\'t think you fell. I can\'t believe you don\'t love me!]',
  ] },
  { p: 32, x: 51.3, y: 19.4, ex: '2', title: 'Surprise or checking?', kind: 'key', items: [
    '1 [Don\'t you like pizza? – expresses surprise]', '2 [Haven\'t we met somewhere before? – checking information]',
  ] },
  { p: 32, x: 51.1, y: 39.1, ex: '3', title: 'Negative questions', kind: 'key', items: [
    'I\'m surprised: [Don\'t you like ice-cream? Haven\'t you got a mobile phone? Can\'t you swim?]',
    'I\'m just checking: [Isn\'t it your birthday today? Didn\'t you work in New York for a while? Don\'t you live in Baker Street?]',
  ] },

  // ---------- book p32 ----------
  { p: 33, x: 10.1, y: 7.1, ex: '4', title: 'Negative sentences about these people', kind: 'key', items: [
    'vegans — [don\'t eat meat or any animal products]', 'atheists — [don\'t believe in God]', 'teetotallers — [don\'t drink alcohol]',
    'insomniacs — [can\'t sleep]', 'dyslexics — [can\'t read or spell easily]', 'pacifists — [don\'t believe in war or violence]', 'naturists — [don\'t wear clothes]',
  ] },
  { p: 33, x: 9.3, y: 64.3, ex: '7', title: 'Short questions with a preposition', kind: 'key', items: [
    '1 [Who to?]', '2 [What about?]', '3 [Who with?]', '4 [Where to?]', '5 [Who from?]', '6 [Who for?]', '7 [What about?]', '8 [What for?]',
  ] },
  { p: 33, x: 9.1, y: 87.5, ex: '8', title: 'Longer questions', kind: 'key', items: [
    '1 [Who did she give it all to?]', '2 [What do you want to have a word about?]', '3 [Who did you dance with?]', '4 [Where do you want a lift to?]',
    '5 [Who did you get it from?]', '6 [Who did you buy it for?]', '7 [What are you thinking about?]', '8 [What do you need it for?]',
  ] },

  // ---------- book p34 ----------
  { p: 35, x: 8.6, y: 36.8, ex: '4', title: 'Answer the questions about your conspiracy', kind: 'key', items: [
    'Diana – 1 Theories: [an MI6 plot to protect the monarchy; a murder plot by the world\'s florists; Diana and Dodi faked their deaths and live on a tropical island; a royal plot to tamper with the car\'s brakes]',
    'Diana – 2 Proof: [\'we never actually saw her body\'; a letter to Paul Burrell in which she predicted her death]',
    'Diana – 3 Reasons: [to protect the monarchy; to sell flowers; to escape intrusion into her private life; so the Prince of Wales could marry again]',
    'Diana – 4 Internet: [the first site appeared hours after her death; there are about 36,000 Diana conspiracy websites; the Internet feeds global paranoia]',
    'Moon – 1 Theories: [the landings were filmed in a studio on a US military base; astronauts found evidence of an ancient alien civilisation]',
    'Moon – 2 Proof: [the flag flutters but there\'s no breeze; no stars in the photos; shadows from more than one angle; a Moon rock marked with a \'C\']',
    'Moon – 3 Reasons: [to prove America won the space race; to hide terrifying evidence of alien life]',
    'Moon – 4 Media: [the 2001 Fox TV programme \'Did We Land on the Moon?\' – then the Internet went crazy with theories]',
  ] },
  { p: 35, x: 8.4, y: 51.2, ex: 'Vocabulary work', title: 'Words in the texts', kind: 'key', items: [
    'Diana: 1 [breathtaking] 2 [fiendish … thought up] 3 [elaborate hoax … mundane] 4 [buy into] 5 [hatched … tampered with]',
    'Moon landings: 1 [circulating] 2 [fluttering … breeze] 3 [stunning array] 4 [unanimously … don\'t have even the beginnings of a case] 5 [conceal]',
  ] },

  // ---------- book p36 ----------
  { p: 37, x: 10.0, y: 13.7, ex: 'Antonyms', title: 'Antonyms and prefixes', kind: 'key', items: [
    '1 [plausible / implausible; plausible / ridiculous – the second sounds better, more natural and stronger]',
    '2 [unbelievable, incredible, dishonest, illegal, improbable, irresponsible]',
  ] },
  { p: 37, x: 9.0, y: 34.3, ex: '1', title: 'Parts of speech and antonyms', kind: 'key', items: [
    'fake adj — genuine, real, authentic', 'like vb — dislike, hate, loathe, can\'t stand', 'tiny [adj — huge, enormous, massive]',
    'happiness [n — unhappiness, sadness, misery]', 'guilty [adj — innocent]', 'safe [adj — unsafe, dangerous]', 'admit [vb — deny]',
    'improve [vb — get worse, deteriorate]', 'sincere [adj — insincere]', 'success [n — failure]', 'mature [adj — immature]',
    'encourage [vb — discourage]', 'kind/generous [adj — unkind, mean]', 'appear [vb — disappear]',
  ] },
  { p: 37, x: 47.2, y: 11.4, ex: '2', title: 'Complete the conversations', kind: 'key', items: [
    '1 Gary\'s a really [successful] businessman. — … he\'s a complete [failure] as a family man.',
    '2 My grandad\'s so [generous] … — My grandad\'s famed for his [meanness].',
    '3 … there\'s been some [improvement] in your behaviour … but unfortunately your work has [got worse].',
    '4 It sounds really [dangerous]! — No, honestly, it\'s [safe] enough as long as you\'re careful.',
    '5 Our teacher is always [criticizing] us. … he should give us more [encouragement] …',
  ] },
  { p: 37, x: 46.1, y: 72.5, ex: '4', title: 'What\'s the opposite?', kind: 'key', items: [
    '1 [an easy question / tender meat]', '2 [a cloudy sky / a guilty conscience]', '3 [dark hair / an unfair decision]',
    '4 [a soft mattress / an easy exam]', '5 [a dead animal / recorded music]', '6 [a dark colour / a deep sleep]',
  ] },
  { p: 37, x: 46.1, y: 80.8, ex: '5', title: 'Match the words and meanings', kind: 'key', items: [
    '1 abused — [used cruelly or badly]', '2 disused — [not used any more]', '3 unused — [not ever used]', '4 misused — [used in the wrong way]',
    '5 overused — [used too much]', '6 underused — [not used enough]',
  ] },

  // ---------- book p37 ----------
  { p: 38, x: 8.1, y: 12.2, ex: '1', title: 'Which lines are more polite?', kind: 'key', items: [
    '[I\'m sorry to bother you, but could you possibly change a ten-pound note?]', '[Could you tell me where the station is, please?]',
  ] },
  { p: 38, x: 8.1, y: 42.5, ex: '3', title: 'Make the requests and offers more polite', kind: 'sample', items: [
    '1 [Could you possibly give me a lift?]', '2 [I wonder if you could help me find my glasses?]', '3 [Would you like to come for a meal tomorrow evening?]',
    '4 [Do you think you could lend me your dictionary?]', '5 [Would you mind looking after my dog while I\'m on holiday?]',
    '6 [Do you happen to know where the toilet is?]', '7 [Would you like me to help you with this exercise?]',
  ] },
  { p: 32, x: 8.2, y: 5.8, ex: '3', title: 'What is the truth? Why did they lie?', kind: 'key', items: [
    '1 [She doesn\'t love him – she fancies his best friend. She doesn\'t want to hurt his feelings.]',
    '2 [A group of lads keep chasing him. If he tells his parents they\'ll complain to the headteacher and make it worse.]',
    '3 [The dress looks awful and doesn\'t suit her, but she doesn\'t know how to tell her friend.]',
    '4 [She\'s going clubbing with Emma; her dad would kill her – she has an exam next week and hasn\'t studied.]',
    '5 [He isn\'t ill – it\'s a beautiful day and he\'s going to play golf.]', '6 [She had a late night, feels rough, and doesn\'t want to be disturbed.]',
  ] },
  { p: 33, x: 10.1, y: 13.6, ex: '5', title: 'Milton', kind: 'key', items: [
    'Words: [insomniac, dyslexic, atheist, teetotal(ler)] – he\'s also vegetarian, single, unemployed, and anti-social.',
    '[He can\'t sleep. He can\'t read or spell well. He doesn\'t believe in God. He doesn\'t drink alcohol. He doesn\'t eat meat. He hasn\'t got a job, a wife, or a pet.]',
  ] },
  { p: 33, x: 10.1, y: 36.0, ex: '6', title: 'How come …?', kind: 'key', items: [
    'He\'s single, so [how come his wife answered the door?]', 'He hasn\'t got any pets, so [how come his dog started barking?]',
    'He\'s an atheist, so [how come he was late for church?]', 'He\'s dyslexic, so [how come he does crosswords?]',
    'He\'s unemployed, so [how come he spends every lunch break at work?]', 'He\'s teetotal, so [how come he had a hangover?]',
    'He\'s vegetarian, so [how come they had steaks and burgers?]', 'He\'s anti-social, so [how come they had a wild party?]',
  ] },
  { p: 34, x: 8.2, y: 16.5, ex: '2', title: 'Correct the statements', kind: 'key', items: [
    '1 [They all passed the exam – some became captains of industry, MPs, and judges.]', '2 [His four-year-old daughter said she supported Chelsea.]',
    '3 [She burnt her own mouth tasting the soup, spat it back, and served it to the diners.]', '4 [She said nothing and the man was left behind at a stop between Calais and Paris.]',
  ] },
  { p: 34, x: 8.2, y: 29.0, ex: '3', title: 'Answer the questions', kind: 'key', items: [
    '1 [His classmates – he was reading out the exam questions. 30 students got a certificate they didn\'t deserve.]',
    '2 [\'Father Christmas does not visit children who support Chelsea.\' He may have given his daughter sleepless nights.]',
    '3 [She heard footsteps from the kitchen. She had spat the soup back into the dish. She served it to the diners.]',
    '4 [About the man missing from the coach. She wanted some peace and quiet – he was large, smelly, and chatty. He was left stranded at night.]',
  ] },
  { p: 34, x: 8.6, y: 84.5, ex: '4', title: 'Which extract?', kind: 'key', items: [
    'Robert: [glistening treasure] (the exam paper), [eager audience] (his classmates)',
    'Kevin: [diehard supporter] (his wife\'s Chelsea family), [made my blood run cold] (his daughter\'s words), [scarred for life] (his daughter)',
    'Jane: [scalding hot] (the soup), [extra ingredient] (what she spat back)',
    'Maggie: [stretch their legs] (the passengers at the stop), [waving frantically] (the man running after the coach)',
  ] },
  { p: 37, x: 47.0, y: 52.0, ex: '3', title: 'The effect of using antonyms', kind: 'key', items: [
    '[It sounds more tactful and polite – an understatement instead of a direct criticism.]',
    'A boring party — [it wasn\'t exactly an exciting evening]', 'An awful holiday — [it wasn\'t the most fun I\'ve had]',
    'A mean friend — [she\'s not famous for her generosity]', 'A hopeless football team — [they\'re not the most talented around]',
  ] },
  { p: 38, x: 8.1, y: 34.9, ex: '2', title: 'Which is more polite?', kind: 'key', items: [
    '1 [the first – \'For me! Oh, how kind! You shouldn\'t have.\']', '2 [the second – \'Oh, what a pity! I\'m already going out, I\'m afraid.\']',
    '3 [the first – \'Excuse me! Do you mind if I sit down here?\']', '4 [the second – \'I wonder if I could possibly ask you a favour?\']',
    '5 [the first – \'Pardon? I couldn\'t catch that.\']', '6 [the first – \'Thanks for a lovely evening … So glad you could make it.\']',
  ] },
  { p: 38, x: 8.2, y: 81.0, ex: '4', title: 'Refuse politely', kind: 'sample', items: [
    '1 [I\'m terribly sorry, I can\'t. I have to be at work by 8.30.]', '2 [Sorry! I\'m afraid I have to dash or I\'ll miss the bus.]',
    '3 [Oh, I\'d love to, but I\'m afraid I\'m already going out.]', '4 [I would if I could but I\'m afraid I forgot to bring it with me today.]',
    '5 [I\'m terribly sorry, but I can\'t. I\'m going away myself.]', '6 [Sorry. I\'m afraid I\'ve no idea.]',
    '7 [That\'s really kind of you, but I want to try and work it out for myself.]',
  ] },
  { p: 38, x: 49.1, y: 28.1, ex: '5', title: 'Luciana\'s lines', kind: 'sample', items: [
    '[Thanks so much. Oh, these are for you.]', '[Oh, I hope it was all good!]', '[Well, I\'m Argentinian … but I\'ve been working in the US for the last couple of years.]',
    '[Work, I\'m afraid. I\'m on my way to Amsterdam for a conference …]', '[Well, it is very different … I always love it here.]',
    '[Oh, have you got a beer? … I\'ll have a glass of white wine, if that\'s OK.]', '[Thanks.]', '[Yes, of course.]', '[Cheers! It\'s great to be here.]',
    '[Cheesy parsnips? … What are they?]', '[Well, I\'d love to but I\'d better not – cheese doesn\'t always agree with me.]',
    '[No, thanks … But do you think I could have a glass of water?]', '[Er, just tap water will do. Thanks a lot.]',
  ] },

  // ========== Unit 5 ==========
  // ---------- book p38 ----------
  { p: 39, x: 8.8, y: 26.1, ex: 'Test your grammar', title: 'Which future form expresses …?', kind: 'key', items: [
    '1 Tomorrow\'s weather will be warm and sunny. — [a prediction] ([will])', '2 The train to Dover leaves at ten past ten. — [a future fact based on a timetable] ([Present Simple])',
    '3 I\'m going to be a racing driver … — [an intention] ([going to])', '4 We\'re seeing Sue on Thursday. — [an arrangement between two people] ([Present Continuous])',
    '5 Shall we have a break now? — [a suggestion] ([shall])', '6 I\'ll make some coffee. — [a spontaneous decision] ([will])',
  ] },

  // ---------- book p39 ----------
  { p: 40, x: 9.6, y: 6.0, ex: 'Language focus', title: 'Present or future?', kind: 'key', items: [
    '1 Marie\'s having a baby soon — [future]; I work in the City — [present]; At the moment I\'m packing — [present]; The plane leaves at 10.30 — [future]',
    '2 [What do you do … = a habit; What are you doing this evening? = an arrangement]',
    '[I\'ll give you a lift = a spontaneous offer; I\'m going to give Dave a lift = a plan]',
    '[We\'ll have supper at 8.00 = a decision/fact; We\'ll be having supper at 8.00 = in progress at 8.00]',
    '[I\'ll write the report tonight = I\'ll do it then; I\'ll have written it by tonight = finished before tonight]',
  ] },
  { p: 40, x: 55.7, y: 11.6, ex: '1', title: 'Choose the correct form', kind: 'key', items: [
    '1 I[\'m going to see] all my family this weekend. / I don\'t know if I have time … [I\'ll see].',
    '2 What [are you going to do] there? / … but what [will you do] if you don\'t?',
    '3 [I\'ll come] with you if you like. / [I\'m coming] with you whether you like it or not.',
    '4 What [are you going to do] about it? / What [are you doing] this evening?',
    '5 I[\'m going to give] her a good talking to. / I[\'m giving] a presentation at 3.00 this afternoon.',
    '6 Peter [is leaving] now. / The coach [leaves] at 9.00.',
    '7 [I\'ll see] you outside the cinema at 8.00. / [I\'ll be seeing] Peter this afternoon …',
    '8 You[\'ll have seen] enough of me by the end of this holiday. / … You[\'ll see]!',
  ] },

  // ---------- book p40 ----------
  { p: 41, x: 53.4, y: 7.3, ex: '3', title: 'Complete the questions', kind: 'sample', items: [
    '1 Where [are you going] on holiday this year?', '2 How [are you getting] there?', '3 How long [are you going to be / will you be] away for?',
    '4 Which hotel [are you staying] in?', '5 What time [does your flight arrive]?', '6 What [are you going to do] while you\'re on holiday?',
  ] },

  // ---------- book p42 ----------
  { p: 43, x: 8.2, y: 29.7, ex: '3', title: 'Nick D\'Aloisio and Jake Bugg', kind: 'key', items: [
    'Nick – 1 [At 16 he created Summly, an app that summarises webpages, and he has sold it to Yahoo for $30m.]',
    'Nick – 2 [He grew up in Perth, Australia; his dad is a banker and his mum a lawyer; they moved to London when he was 7.]',
    'Nick – 3 [Steve Jobs, his idol; the billionaire Li Ka-Shing, who invested in Summly.]',
    'Nick – 4 [9: his own computer, making movies; 12: an iPhone and his first apps (Facemood); 16: Summly – 100,000 downloads in a month; then the sale to Yahoo.]',
    'Nick – 5 [To summarise the entire web.]', 'Nick – 6 [He enjoys school and being with his friends.]',
    'Jake – 1 [He grew up on a council estate but has already had success as a singer-songwriter.]',
    'Jake – 2 [He grew up in Nottingham; his mum played old records; his uncle gave him a guitar at 12.]',
    'Jake – 3 [His uncle, his mum\'s records, The Beatles, Donovan, Don McLean, Jimi Hendrix, and the BBC.]',
    'Jake – 4 [12: started playing the guitar; 14: writing his own songs; 17: played at Glastonbury; songs on BBC radio and a TV advert; \'Later … with Jools Holland\'; debut album.]',
    'Jake – 5 [A number one hit, and a jamming session with Noel Gallagher or working with Donovan.]', 'Jake – 6 [His musical tastes go beyond the Top 40, unlike his school friends\'.]',
  ] },
  { p: 43, x: 8.1, y: 57.7, ex: '4', title: 'Sarah Thomas', kind: 'key', items: [
    '1 [From a young age she has cared for her parents, mainly her mum who has MS, and she campaigns for young carers.]',
    '2 [She\'s an only child from Shrewsbury; her mum has had MS for 30 years and her dad has arthritis.]',
    '3 [The British Red Cross young carers project.]',
    '4 [8: joined the Red Cross project; 12: posted a YouTube video about young carers; Olympic torchbearer in 2012; met the Prime Minister.]',
    '5 [To carry on caring for her mum for as long as necessary.]', '6 [She doesn\'t have much time for school friends.]',
  ] },
  { p: 43, x: 8.1, y: 62.0, ex: '5', title: 'Who might have said …?', kind: 'key', items: [
    '\'I know I\'ll still be writing and playing when I\'m an old man.\' — [Jake]', '\'She won\'t be able to walk at all in a few years.\' — [Sarah]',
    '\'By the time I\'m 40 I\'ll have found a way to do it.\' — [Nick]',
  ] },

  // ---------- book p44 ----------
  { p: 45, x: 8.9, y: 20.5, ex: '2', title: 'take or put?', kind: 'key', items: [
    'TAKE: ages, part, a risk, [sb/sth for granted], [my advice], [offence], [criticism], [place], [no notice]',
    'PUT: [my arm round her], [somebody in charge of], [pressure on sb], [a stop to sth], [a plan into practice], [his work first]',
  ] },
  { p: 45, x: 8.6, y: 39.9, ex: '3', title: 'Complete the sentences', kind: 'key', items: [
    '1 The wedding [took place] … It [took ages] to get there.', '2 I\'ll soon [put a stop] to that.', '3 Please don\'t [take offence], but …',
    '4 You should have [taken my advice]', '5 … learn to [take responsibility] for your own life.', '6 My boss is [putting pressure on] me to resign',
    '7 … but she [took no notice] of me at all.', '8 They just [take] them [for granted].',
  ] },
  { p: 45, x: 8.4, y: 77.3, ex: '4', title: 'Match the lines in A and B', kind: 'key', items: [
    '1 [Take your time]. — We\'re not in a hurry.', '2 The party\'s on the 21st. — [Put it in your diary].',
    '3 I told her a joke about the French … — Whoops! You really [put your foot in it], didn\'t you?', '4 [Take it easy]. — There\'s no need to panic.',
    '5 [Put yourself in my shoes]. — What would you do?', '6 You always [take things too personally]. — Calm down. Not everything is your fault.',
  ] },
  { p: 45, x: 62.4, y: 40.1, ex: '5', title: 'Phrasal verbs with take and put', kind: 'key', items: [
    '1 The shop [takes on] a lot of extra staff', '2 … couldn\'t [take] it all [in]', '3 My business really [took off]', '4 [Take] that [back] and say sorry!',
    '5 [Put on] some music …', '6 The disgusting smell of the cheese [put] me [off] eating it.', '7 Could you [put away] your clothes', '8 [Put] your cigarette [out].',
  ] },

  // ---------- book p45 ----------
  { p: 46, x: 8.9, y: 21.4, ex: '2', title: 'Complete the text with lines a–e', kind: 'key', items: [
    '1 [e]', '2 [b]', '3 [c]', '4 [d]', '5 [a]',
  ] },
  { p: 46, x: 53.4, y: 14.6, ex: '3', title: 'Put the lines in order', kind: 'key', items: [
    'A So, Barry. It was good to talk to you. Thanks very much for phoning.', 'B [My pleasure. By the way, how\'s your golf these days? Still playing?]',
    'A [No, not much. I just don\'t seem to find the time these days. Anyway, Barry …]', 'B [What a shame! You used to enjoy it so much.]',
    'A [It\'s true. Right, Barry. I must fly. I\'m late for a meeting.]', 'B [OK. Don\'t want to keep you. So, you\'ll give me a ring when you\'re back, right?]',
    'A [I certainly will. And you\'ll email me a copy of the report?]', 'B [It\'ll be with you first thing tomorrow.]',
    'A [That\'s great, Barry. Have a good weekend!]', 'B [Same to you, too! Bye, Andy.]', 'A [Bye, Barry.]',
  ] },
  { p: 46, x: 53.5, y: 77.9, ex: '4', title: 'Discuss the questions', kind: 'key', items: [
    'Trying to end it: [Andy]', 'Wants to chat: [Barry]',
    'Andy\'s signals: [It was good to talk to you. Thanks very much for phoning. / Anyway, Barry … / Right, Barry. I must fly. I\'m late for a meeting.]',
    'Confirming arrangements: [you\'ll give me a ring when you\'re back, right? / you\'ll email me a copy of the report? / It\'ll be with you first thing tomorrow.]',
  ] },
  { p: 39, x: 8.4, y: 51.0, ex: '1', title: 'Who says what?', kind: 'key', items: [
    '1 [Laura]', '2 [Mickey]', '3 [Tony and Marie]', '4 [Elsie]', '5 [Janine]', '6 [Theo]',
  ] },
  { p: 39, x: 8.4, y: 55.3, ex: '2', title: 'Answer the questions', kind: 'key', items: [
    '1 [She\'s going to study geography at Cambridge. The course lasts three years.]',
    '2 [He\'s going to a football match with some mates – Oxford United against Bristol Rovers. It starts at 3.00.]',
    '3 [Because they\'re going to have a baby – it\'s due in five weeks.]',
    '4 [Her daughter and grandchildren will be visiting. They\'ll have a cup of tea and a chat, and she\'ll bake a cake.]',
    '5 [Because she\'s going to France for a year to study literature at the Sorbonne. Her mum and dad are taking her.]',
    '6 [He\'s going to be even more successful – earning twice what he earns now – and he\'ll have made a million before he\'s 25.]',
  ] },
  { p: 39, x: 8.2, y: 74.0, ex: '3', title: 'What are the questions?', kind: 'key', items: [
    '1 [Which university is she going to?]', '2 [Who\'s he going to the match with? Who\'s playing?]', '3 [What are they going to call the baby?]',
    '4 [What sort of cake is she going to bake?]', '5 [What time does her plane leave?]', '6 [How much will he be earning?]',
  ] },
  { p: 41, x: 8.9, y: 4.7, ex: '2', title: 'This is your captain speaking', kind: 'key', items: [
    '1 [\'ll be taking off]', '2 [\'ve reached]', '3 [\'ll be flying]', '4 [\'ll be coming]', '5 [arrive]', '6 [will be serving]', '7 [need]',
    '8 [will come]', '9 [will] you please [keep]', '10 [will be coming]', '11 [will] also [be giving out]', '12 [need]', '13 [will be starting]',
    '14 [has come]', '15 [will fly]',
  ] },
  { p: 41, x: 53.3, y: 33.9, ex: '4', title: 'Complete the responses', kind: 'key', items: [
    '1 [I hope so.] / [I might] one day. / It\'s possible, but I [doubt] it. / I\'m sure I [will]. / I\'m sure I [won\'t].',
    '2 Yes, I am. / I think [so], but I\'m not sure. / I [might] be.',
    '3 I [don\'t think] so. / I hope [not]. / Who [knows]? Maybe.',
  ] },
  { p: 42, x: 8.6, y: 12.2, ex: '1', title: 'NEETs – the facts and figures', kind: 'key', items: [
    'NEET = [Not in Employment, Education, or Training]', 'UK: [15.1%]', 'EU average: [15.4%]', 'From 5.5% in [the Netherlands] to about 25% in [Bulgaria]',
    'Annual cost to the EU: [120bn]', '[Japan] 9.7%', 'UK graduates aged 21 unable to find work: [a quarter]',
  ] },
  { p: 42, x: 8.4, y: 25.7, ex: '3', title: 'Three young people', kind: 'key', items: [
    'Darrell – [left school at 16 with no qualifications and never had a job; loved cars but needed maths and English] – [a personal adviser, Martin, on a NEETs programme] – [now has qualifications and an apprenticeship in a car factory; would like to train in Germany]',
    'Kara – [two years out of university (journalism and economics); countless applications, only part-time jobs; lost a newspaper internship to someone who\'d work for nothing] – [she started thinking creatively about volunteering abroad] – [going to Malawi to work on a literacy programme and do some reporting]',
    'Loukas – [business degree in Athens; only part-time contracts; his benefits stopped] – [he had to make a decision: a masters seemed pointless and he didn\'t want to leave his family] – [a farming course in Thessaloniki, then a farm on family land: lamb, cheese, honey, maybe ecotourism]',
  ] },
  { p: 42, x: 9.6, y: 68.7, ex: 'Spoken English', title: 'thing', kind: 'sample', items: [
    '[the one thing that did interest me was cars / take things one step at a time / the usual thing / things like that]',
  ] },
  { p: 46, x: 8.9, y: 12.3, ex: '1', title: 'Three phone calls', kind: 'sample', items: [
    '[1 a formal business call to a company; 2 an informal call between friends, with small talk; 3 an automatic caller menu]',
    'Small talk: [with friends, family, and colleagues – about health, family, work, how things are – to be friendly before getting to the point]',
    'Caller menus: [to deal with calls more efficiently and cheaply]', 'Frustrating: [you can\'t speak to a real person, you wait a long time, and the options don\'t fit your problem]',
  ] },

  // ========== Unit 6 ==========
  // ---------- book p46 ----------
  { p: 47, x: 10.1, y: 25.6, ex: 'Test your grammar', title: 'Expressions of quantity', kind: 'key', items: [
    'a few … [cars, hold-ups]', 'not many … [crimes, criminals, accidents]', 'several … [times, letters, people]', 'very little … [time, room, hope]',
    'not much … [unemployment, work, success]', 'a bit of … [luck, knowledge, fun]', 'a lot of … [all four]', 'enough … [all four]', 'plenty of … [all four]',
    'hardly any … [all four]',
    '2 [a few, not many, several + countable nouns; very little, not much, a bit of + uncountable nouns; a lot of, enough, plenty of, hardly any + both]',
  ] },
  { p: 47, x: 46.0, y: 29.6, ex: '1', title: 'How did he \'hit the big time\'?', kind: 'key', items: [
    '[A TV producer spotted him when he was 21. His first TV programme attracted a completely new audience and he became an overnight success.]',
  ] },
  { p: 47, x: 46.0, y: 33.9, ex: '2', title: 'Complete the questions', kind: 'key', items: [
    '1 How [many] countries broadcast his TV shows? — [Over 100.]', '2 How [much] time has he spent improving diets in schools? — [A great deal.]',
    '3 How [much money] did he earn cooking at his parents\' pub? — [A few pounds of pocket money.]', '4 How [long] did he spend at catering college? — [Two years.]',
    '5 How [many] chefs did he work under in London? — [Three.]', '6 How [much] experience did he have when he was first on TV? — [Hardly any.]',
    '7 How [many] fresh ingredients and herbs did he use? — [Plenty.]', '8 How [much] interest in food programmes did his new audience have previously? — [None.]',
  ] },

  // ---------- book p47 ----------
  { p: 48, x: 8.4, y: 5.8, ex: '3', title: 'Reading text and listening text', kind: 'key', items: [
    'numerous — [many]', '100 countries — [a great number of countries]', '30 languages — [a great many languages]', 'a great deal of time — [a lot of time]',
    'a few pounds of pocket money — [a little pocket money]', 'two years — [a couple of years]', 'a short time — [some time]', 'three famous chefs — [a few famous chefs]',
    'hardly any experience — [very little experience]', 'a lot of enthusiasm — [a huge amount of enthusiasm]', 'plenty of fresh ingredients — [lots of fresh ingredients]',
    'no interest in food — [didn\'t have any interest]', 'four children — [several children]',
  ] },
  { p: 48, x: 11.8, y: 37.5, ex: 'Language focus', title: 'Why do we say …?', kind: 'key', items: [
    '1 [a few / a great number of + countable nouns; a little / a great deal of + uncountable nouns; a lot of / plenty of + both]',
    '2 [A is happier – a few and a little are positive (some); few and little are negative (not many, not much).]',
  ] },
  { p: 48, x: 56.1, y: 11.6, ex: '1', title: 'How much …? How many …?', kind: 'key', items: [
    '1 [How much money have you got in your pocket?]', '2 [How many cups of coffee do you drink a day?]', '3 [How many times have you been on a plane?]',
    '4 [How much time do you spend watching TV?]', '5 [How much sugar do you have in your coffee?]', '6 [How many pairs of jeans do you have?]',
    '7 [How many books do you read in one year?]', '8 [How much homework do you get a night?]', '9 [How many English teachers have you had?]',
    '10 [How many films do you watch a month?]',
  ] },
  { p: 48, x: 56.1, y: 27.6, ex: '2', title: 'a or nothing?', kind: 'key', items: [
    '1 I\'d like [a] single room … / Is there [–] room for me to sit down?', '2 … play with [–] fire. / Can we light [a] fire?',
    '3 … a land of [–] great beauty. / It\'s [a] beauty.', '4 There was [a] youth standing in front of me. / [–] Youth is wasted on the young.',
  ] },
  { p: 48, x: 56.1, y: 56.5, ex: '3', title: 'Count and uncount nouns', kind: 'key', items: [
    'dollar — money', '[suitcase] — [luggage]', '[job] — [work]', '[chair] — [furniture]', '[suggestion] — [advice]', '[apple] — [fruit]',
    '[problem] — [trouble]', '[fact] — [information]', '[lorry] — [traffic]', '[journey] — [travel]',
  ] },

  // ---------- book p48 ----------
  { p: 49, x: 9.1, y: 6.8, ex: '4', title: 'Rephrase the sentences', kind: 'key', items: [
    '1 [She hasn\'t got many friends. / She\'s got very few friends. / She\'s got hardly any friends.]',
    '2 [There are some eggs … / There are a few eggs … / There are enough eggs …]', '3 [There aren\'t many eggs … / There are only a couple of eggs …]',
    '4 [There are no tomatoes. / There isn\'t a single tomato.]', '5 [Did you spend much time in France? / Did you spend a lot of time in France?]',
    '6 [I don\'t have much holiday. / I have hardly any holiday.]', '7 [I\'ve put on a huge amount of / far too much / loads of weight!]',
    '8 [Almost all / Most / The majority of my friends have a car.]', '9 [Very few / Hardly any / Not many of them smoke.]',
    '10 [None / Not one of my friends is married.]', '11 [Ken works all the time. / Ken works the whole time.]',
    '12 [Yesterday I didn\'t eat much / ate very little / ate almost nothing.]',
  ] },
  { p: 49, x: 8.2, y: 61.7, ex: '5', title: 'Choose the correct alternative', kind: 'key', items: [
    '1 [a few]', '2 [very little]', '3 [less]', '4 [Fewer]', '5 [Everyone]', '6 [Everything]', '7 [Everyone]', '8 [whole]',
  ] },
  { p: 49, x: 47.2, y: 69.2, ex: 'Spoken English', title: 'Expressing quantity informally', kind: 'key', items: [
    '[masses] of time', '[loads] of money', '[heaps] of food', '[piles] of washing', '[tons] of things', '[millions] of people',
  ] },

  // ---------- book p49 ----------
  { p: 50, x: 8.4, y: 41.1, ex: '4', title: 'Body advertising', kind: 'key', items: [
    '1 [Less effective – people are becoming immune to it; 50% of smartphone users don\'t notice ads and only 7% buy as a result.]',
    '2 [A bald American entrepreneur – he had the idea of using bald heads as advertising space (Baldlogo.com).]',
    '3 [Two British graduates – they painted company logos on their faces and foreheads and raised £50,000 to pay off their student debts.]',
    '4 [the head, the face, the forehead, the eyelids, the thighs]',
    '5 [They had the web address of an online beauty store tattooed on their eyelids.]',
    '6 [Stickers or transfers – on teenage boys\' faces and teenage girls\' thighs.]',
  ] },
  { p: 50, x: 8.4, y: 65.5, ex: '5', title: 'What do these numbers refer to?', kind: 'key', items: [
    '250–3,000 — [advertising messages a person sees every day]', '50% — [smartphone users who don\'t notice ads on their phones]',
    '7% — [smartphone users who buy something because of an ad]', '$320 — [the price of a logo on a bald head for a day]',
    '50,000 — [pounds raised by Ross Harper and Ed Moyse]', '6,000 — [people who applied for the winking job]',
    '100 — [pounds paid to each winker]', '1,000 — [times each person had to wink]',
  ] },

  // ---------- book p50 ----------
  { p: 51, x: 8.8, y: 17.5, ex: '2', title: 'Apple and Starbucks', kind: 'key', items: [
    'Apple – 1 [1976, Silicon Valley, California] 2 [Steve Jobs and Steven Wozniak] 3 [Jobs\' favourite fruit] 4 [the user-friendly Macintosh and great attention to design] 5 [No – Jobs was forced to resign, and by 1996 Apple was in trouble] 6 [stylish design and devoted fans] 7 [the computers are expensive and have a limited range of software] 8 [Apple I, Macintosh, iMac, iPod, iPhone, iPad, iCloud]',
    'Starbucks – 1 [1971, Seattle] 2 [Baldwin, Siegel, and Bowker] 3 [a character in the novel Moby Dick] 4 [the best quality coffee; Schultz made the stores comfortable, like Italian espresso bars] 5 [No – protests, 900 stores closed in a recession, criticism about tax] 6 [quality coffee and comfy sofas] 7 [big corporations put small independent companies out of business; little tax paid in the UK] 8 [speciality coffees (Skinny Latte, Frappuccino …), Refreshers]',
  ] },
  { p: 51, x: 8.7, y: 48.0, ex: '4', title: 'Write the questions', kind: 'key', items: [
    'Apple: In Silicon Valley. — [Where did Jobs and Wozniak found Apple?]', 'Apple: In 1997. — [When was the multi-coloured iMac launched?]',
    'Apple: Because he argued with his partner. — [Why did Jobs resign?]', 'Apple: By selling some of their possessions. — [How did they raise the capital?]',
    'Starbucks: About 900. — [How many stores did Starbucks close?]', 'Starbucks: $13 billion. — [How much is the company worth?]',
    'Starbucks: Ten years. — [How long did it take Schultz to open 150 stores and buy the company?]',
    'Starbucks: Because they can\'t compete. — [Why do small independent companies go out of business?]',
  ] },

  // ---------- book p51 ----------
  { p: 52, x: 62.8, y: 52.4, ex: 'Vocabulary work', title: 'Adverbs ending in -ly', kind: 'key', items: [
    'Apple: a [gradually] b [vitally] c [reluctantly] d [effectively] e [truly] f [bitterly]',
    'Starbucks: a [originally] c [eventually] d [currently] e [initially] f [passionately]',
  ] },

  // ---------- book p52 ----------
  { p: 53, x: 10.1, y: 10.6, ex: '1', title: 'Nouns and verbs', kind: 'key', items: [
    '[Nouns are stressed on the first syllable (\'export), verbs on the second (ex\'port).]',
  ] },
  { p: 53, x: 9.9, y: 26.0, ex: '3', title: 'Complete the sentences', kind: 'key', items: [
    '1 Scotland [imports] … Its [exports] include …', '2 I\'m making a lot of [progress].', '3 There has been an [increase] in the number of unemployed.',
    '4 … the number of crimes has [decreased] …', '5 What an [insult]!', '6 People were [protesting] about blood sports.', '7 … broke the world [record].',
    '8 I\'m [recording] a film.', '9 Britain [produces] about 40% of the EU\'s oil.',
  ] },
  { p: 53, x: 8.9, y: 75.5, ex: '6', title: 'Answer the questions', kind: 'key', items: [
    '1 [A \'refuse collector.]', '2 [An unidentified flying \'object.]', '3 [A \'desert in northern Africa.]', '4 [\'Presents!]', '5 [The \'contents pages.]',
    '6 happy = [con\'tent]; incorrect = [in\'valid]; to say you won\'t do something = [re\'fuse]; a written agreement = [\'contract]; very small = [mi\'nute]',
  ] },

  // ---------- book p53 ----------
  { p: 54, x: 8.2, y: 12.4, ex: '1', title: 'Match a line in A with a reply in B', kind: 'key', items: [
    '1 [f]', '2 [h]', '3 [e]', '4 [b]', '5 [a]', '6 [g]', '7 [i]', '8 [j]', '9 [c]', '10 [d]',
  ] },
  { p: 54, x: 8.1, y: 67.9, ex: '3', title: 'The phone number', kind: 'sample', items: [
    '0800 205080: [oh eight hundred, two oh five oh eight oh] / [oh eight double oh, two oh five, oh eight oh]',
  ] },
  { p: 54, x: 52.7, y: 57.7, ex: '4', title: 'Say these numbers', kind: 'key', items: [
    '[three hundred and seventy-five; one thousand two hundred and fifty; thirteen thousand nine hundred and sixty-two; twenty-three thousand eight hundred and six; a hundred and fifty thousand; five million, three hundred and seventy-eight thousand, two hundred and twelve]',
    '[a half; three quarters; a third; a quarter; two thirds]', '[four point three; seven point oh eight; ten point five; three point one four two; (nought) point oh five]',
    '[the seventeenth of September; February the third; the twenty-second of November; August the fourteenth]',
    '[the nineteenth century; the twenty-first century; the nineteen sixties]', '[two thousand and seven; nineteen eighty; seventeen eighty-six; nineteen oh two]',
    '[twelve noon / midday; twelve midnight; fourteen oh five; twenty-two thirty]', '[phone numbers: say each digit; 0 = \'oh\'; 22 = \'double two\']',
    '[two nil; thirty love]',
  ] },

  // ========== Unit 7 ==========
  // ---------- book p54 ----------
  { p: 55, x: 9.6, y: 25.5, ex: 'Test your grammar', title: 'Match the sentences and meanings', kind: 'key', items: [
    'He can ski. — [d ability]', 'You can\'t pay by cheque. — [a permission]', 'You must stop at the crossroads. — [c obligation]', 'You must see the film. — [b advice]',
    'He must be rich. — [e probability]', 'I\'ll help / I won\'t help you. — [f (un)willingness]', 'You should do more exercise. — [b advice]',
    'It will be a good party. — [e probability]', 'It might rain. — [e probability]',
  ] },
  { p: 55, x: 8.8, y: 58.9, ex: '1', title: 'Who are the people?', kind: 'sample', items: [
    '1 [Two drivers – one has turned into a No Entry street.]', '2 [Two women – one is advising her friend to forgive her partner, for the sake of the children.]',
  ] },
  { p: 55, x: 8.8, y: 63.1, ex: '2', title: 'Modal verbs and their meanings', kind: 'key', items: [
    '1 [can\'t (permission) … can\'t (permission) … Can\'t (ability) … couldn\'t (ability) … should (advice)]',
    '2 [should (advice) … will not (refusal) … \'ll have to (obligation) … can\'t (ability/possibility) … might (possibility) … can never (ability) … must (deduction) … will (willingness)]',
  ] },
  { p: 55, x: 8.8, y: 67.5, ex: '3', title: 'Expressions instead of modals', kind: 'key', items: [
    '1 [you\'re not allowed to … Who says it\'s not allowed? … you ought to be able to read that … It\'s impossible to see … You\'d better get your eyes tested]',
    '2 [If I were you, I\'d … I refuse to … You\'ll have no choice … You won\'t be able to ignore … Maybe I\'ll forgive him but I\'ll never be able to forget … Surely it\'s possible … You have to]',
  ] },
  { p: 55, x: 9.9, y: 72.1, ex: 'Language focus', title: 'Modals and related verbs', kind: 'key', items: [
    '1 can — [be able to, be allowed to]', 'could — [manage to, be able to]', 'must — [have (got) to]', 'should / ought to — [If I were you, I\'d …, Why don\'t you …?, had better]',
    'may — [be allowed to]', 'won\'t — [refuse to]', 'will — [promise to, be bound to, be likely to]', 'might — [be likely to]',
    '2 [She could speak Spanish. / She\'ll be able to speak Spanish. He was able to … / He\'ll be able to … I had to go. / I\'ll have to go.]',
  ] },

  // ---------- book p55 ----------
  { p: 56, x: 43.4, y: 11.8, ex: '1', title: 'Cross out the verbs which cannot fill the gap', kind: 'key', items: [
    '1 [can\'t]', '2 [could, able to]', '3 [can, had better]', '4 [mustn\'t, aren\'t supposed to]', '5 [should not, might not]', '6 [May you]', '7 [can, may]',
    '8 [mustn\'t]', '9 [can\'t]', '10 [all are possible]',
  ] },
  { p: 56, x: 43.4, y: 64.3, ex: '2', title: 'What are they talking about?', kind: 'key', items: [
    '1 [Two friends – A has a secret: a big surprise event (David is invited too) – and asks what to wear.] [You won\'t tell anyone, will you? You mustn\'t tell a soul. I won\'t say a word. You\'re bound to tell someone. I really can keep a secret. Is it OK if I tell David? What do you think I should wear? If I were you I\'d buy something new.]',
    '2 [Two teammates – A can\'t play in tonight\'s match because his parents won\'t let him go out during his exams.] [I don\'t know if I can play. You have to. You promised to. I\'m not allowed to go out. My parents won\'t let me. Somebody might see me. You\'d better find somebody else. We\'ll just have to cancel the match.]',
  ] },

  // ---------- book p56 ----------
  { p: 57, x: 9.1, y: 7.3, ex: '4', title: 'Rephrase the sentences', kind: 'key', items: [
    '1 [It\'s bound to rain at the weekend.]', '2 [He managed to give up smoking / He succeeded in giving up smoking after three attempts.]',
    '3 [Are you able to tell which twin is which?]', '4 [I\'m not allowed to have a puppy. / My parents won\'t let me have a puppy.]',
    '5 [If I were you, I\'d take it back and complain. / You\'d better take it back and complain.]', '6 [I\'m supposed to wear a suit for work, but I often don\'t.]',
    '7 [You\'d better not tell anyone about it.]', '8 [He refused to put out his cigarette.]',
  ] },
  { p: 57, x: 8.8, y: 35.9, ex: '5', title: 'Underline the modal verbs', kind: 'key', items: [
    '1 [can]', '2 [May]', '3 [can]', '4 [shouldn\'t]', '5 [must]', '6 [should]', '7 [\'ll]', '8 [mustn\'t]', '9 [couldn\'t]', '10 [won\'t]',
  ] },
  { p: 57, x: 8.6, y: 61.0, ex: '6', title: 'Match the expressions', kind: 'key', items: [
    '1 [b I\'ll be able to take you to the airport after all.]', '2 [f Is it OK if I make a suggestion?]', '3 [g You\'re allowed to smoke in the designated area only.]',
    '4 [c If I were you I wouldn\'t wear red.]', '5 [e You are required to obtain a visa …]', '6 [i It\'s always a good idea to make an appointment.]',
    '7 [d You\'re bound to pass.]', '8 [j You aren\'t permitted to walk on the grass.]', '9 [a I didn\'t manage to get through …]', '10 [h I refuse to discuss the matter any further.]',
  ] },
  { p: 57, x: 46.7, y: 7.3, ex: '8', title: 'Exciting news', kind: 'key', items: [
    'Why excited? [She has won a competition in the Daily Sun – naming capital cities.]',
    'Where? [To New York, for three days at the Ritz Carlton.]', 'Who with? [Rick – she has split up with David.]',
  ] },
  { p: 57, x: 46.7, y: 88.5, ex: '9', title: 'What does Isabel say?', kind: 'sample', items: [
    '[Rick, is that you? I\'ve got to talk to you. / Can you remember that competition I entered …? / I\'ve won! I came first! / A trip to New York. / Just three days – but in the Ritz Carlton! / Yes, it does. / Well, you can now. / It\'s a trip for two and I\'d really love it if you would come with me. / David and I have split up. / A couple of weeks ago. / You\'ll come then?]',
  ] },

  // ---------- book p57 ----------
  { p: 58, x: 8.3, y: 32.0, ex: '5', title: 'An arranged marriage', kind: 'key', items: [
    '1 [He asked friends and relatives if they knew anyone suitable.]', '2 [Their education and background – and, most importantly, the family\'s background.]',
    '3 [The first was very wealthy, well-dressed, and well-mannered but not well-educated; the second (Shyam, 22) wasn\'t very wealthy but was well-educated, studying law, from a good family.]',
    '4 [He thought education was more important than money – an educated man will earn in the end.]', '5 [He didn\'t want to get married and hoped her father would refuse him.]',
    '6 [There was an engagement party; they phoned every day and met regularly with a chaperone; after ten months they got married.]',
    '7 [She says so; her husband is planning their sons\' marriages; she thinks couples don\'t expect too much, so there are fewer divorces.]',
  ] },
  { p: 58, x: 9.4, y: 64.8, ex: 'Spoken English', title: 'Other question forms', kind: 'key', items: [
    '1 [They are statements said as questions, or have the question word at the end. They express surprise, disbelief, or shock.]',
    '2 [You got home at 5.00 this morning? You got home when?] [You paid £300 for a pair of jeans? You paid how much?] [You met the president while you were out shopping? You met who?] [He invited you to the palace for a drink? He did what?]',
  ] },

  // ---------- book p58 ----------
  { p: 59, x: 10.3, y: 15.4, ex: '2', title: 'The first part of the article', kind: 'key', items: [
    '1 [Her plans for life – settling down, starting a family, saving to buy a house, her career.]', '2 [Because it\'s amazing he hasn\'t asked her before – she\'s 34.]',
    '3 [Sank = drank quickly – he was nervous.]', '4 [\'I don\'t know\' – it\'s what teenagers say, but she is 34.]',
  ] },
  { p: 59, x: 10.3, y: 28.0, ex: '3', title: 'The rest of the article', kind: 'key', items: [
    '1 [He had three daughters, had run a business for ten years, owned a house, and had a pension. He was about 26 when she was born.]',
    '2 [She lives in a rented flat with her sister, has few savings, no pension, no husband or children.]', '3 [Her life plan goes as far as this weekend.]',
    '4 [She pays taxes, votes, and gives money to charity.]', '5 [25- to 40-year-olds who avoid marriage, a mortgage, and children for as long as possible.]',
    '6 [Someone who refuses to settle down and would rather go on partying into middle age – adult + adolescent.]',
    '7 [In the 1970s men married at 24 and women at 22; now it\'s 32 and 30. Women start a family at 28 now, up from 24.]',
    '8 [Houses are expensive, so many young adults live with their parents. Also fear of getting old, and too much choice.]',
    '9 [Whether (for a woman) to have a child.]', '10 [More and more of her friends have bought houses and started families, and they are very happy.]',
  ] },
  { p: 59, x: 9.8, y: 55.5, ex: 'Vocabulary work', title: 'Words from the text', kind: 'key', items: [
    '1 [shrugged]', '2 [muttering]', '3 [savings]', '4 [settle]', '5 [cling]', '6 [blame]', '7 [spoilt]', '8 [denial]',
  ] },

  // ---------- book p60 ----------
  { p: 61, x: 8.3, y: 11.3, ex: '1', title: 'Replace the words in bold', kind: 'key', items: [
    '1 got started — [began]', '2 gets — [becomes]', '3 getting old — [ageing]', '4 gets on my nerves — [annoys me]', '5 get in touch with — [contact]',
    '6 get on — [have a good relationship]',
  ] },
  { p: 61, x: 8.1, y: 28.1, ex: '2', title: 'Phrasal verbs with get', kind: 'key', items: [
    '1 [out]', '2 [at]', '3 [over]', '4 [up]', '5 [through]', '6 [round]',
  ] },

  // ---------- book p61 ----------
  { p: 62, x: 8.3, y: 21.4, ex: '2', title: 'Exaggerated or understated?', kind: 'key', items: [
    'Exaggerated: [I\'m absolutely crazy about you. / I worship the ground you walk on.]', 'Understated: [We get on pretty well, don\'t you think? / I\'m really rather fond of you.]',
  ] },
  { p: 62, x: 8.2, y: 42.1, ex: '3', title: 'Match a line in A with a line in B', kind: 'key', items: [
    '1 [f]', '2 [i]', '3 [h]', '4 [d]', '5 [j]', '6 [b]', '7 [e]', '8 [a]', '9 [g]', '10 [c]',
  ] },
  { p: 62, x: 8.2, y: 69.4, ex: '4', title: 'Exaggeration or understatement?', kind: 'key', items: [
    'Exaggeration: [madly in love, absolutely loaded, hit the roof, totally out of order, can\'t stand the sight of him, as thick as two short planks, freezing, fantastic, knackered, dying for a drink]',
    'Understatement: [get on quite well, pretty well off, a bit upset, a bit rude, not too keen on him, isn\'t very bright, a bit chilly, a nice little break, a bit out of breath, a bit dry]',
  ] },
  { p: 62, x: 8.1, y: 76.9, ex: '5', title: 'Give an exaggerated reply', kind: 'sample', items: [
    '1 [A bit? It cost a fortune!]', '2 [You can say that again! I\'m absolutely freezing!]', '3 [They\'re gorgeous! I want them!]', '4 [Me too. I\'m starving!]',
    '5 [They\'re obviously crazy about each other.]', '6 [Me? Upset? I only cried myself to sleep!]',
  ] },

  // ========== Unit 8 ==========
  // ---------- book p62 ----------
  { p: 63, x: 9.3, y: 26.0, ex: 'Test your grammar', title: 'Relative pronouns', kind: 'key', items: [
    '1 [who]', '2 [who]', '3 [which]', '4 [what]', '5 [whose]', '6 [where]', '7 [which]', '8 [which] (or no pronoun)',
  ] },
  { p: 63, x: 56.1, y: 26.1, ex: 'Test your grammar', title: 'that and participles', kind: 'key', items: [
    '2 [Sentences 1 and 8.]', '3.1 [standing] – The woman [who is standing] next to him is his wife.',
    '3.2 [built] – Most houses [which were built] in the sixteenth century are listed buildings.',
  ] },
  { p: 63, x: 8.6, y: 56.4, ex: '1', title: 'Who is Susan Boyle?', kind: 'sample', items: [
    '[A singer from a small town in Scotland who became internationally famous on Britain\'s Got Talent.]', 'Impression: [ordinary, modest, brave, very talented]',
  ] },
  { p: 63, x: 8.5, y: 64.0, ex: '2', title: 'Complete the text with clauses a–j', kind: 'key', items: [
    '1 [b]', '2 [i]', '3 [a]', '4 [f]', '5 [c]', '6 [g]', '7 [h]', '8 [e]', '9 [j]', '10 [d]',
  ] },

  // ---------- book p63 ----------
  { p: 64, x: 8.3, y: 5.7, ex: '3', title: 'Answer the questions', kind: 'key', items: [
    '1 [She sang \'I dreamed a dream\' on Britain\'s Got Talent and the video became a YouTube sensation.]',
    '2 [Her father was a miner; she was the youngest of eight children in a musical family.]', '3 [She had learning difficulties.]',
    '4 [Her teachers and her mother, Bridget.]', '5 [Her mother died in 2007.]', '6 [She was a plump, ordinary-looking 48-year-old woman.]',
    '7 [She made four best-selling albums, there\'s a stage musical about her life, and she travels the world singing.]',
    'Adjectives: [talented, modest, humble, ordinary, loyal]',
  ] },
  { p: 64, x: 58.7, y: 6.2, ex: 'Language focus', title: 'Relative clauses and participles', kind: 'key', items: [
    '1 [who sings in clubs / who lives in London / which you saw / which I don\'t like] – [Non-defining clauses have commas; we pause at the commas.]',
    '2 [The house (which) you saw is my aunt\'s. – which is the object of the clause.]',
    'Participles: [boring (adjective), standing, included, worn (adjective), including, ruined (adjective)]',
  ] },
  { p: 64, x: 57.0, y: 64.5, ex: '1', title: 'Punctuation', kind: 'key', items: [
    '1 [no commas]', '2 [My father, who\'s a doctor, plays the drums.]', '3 [no commas]', '4 [Paul passed his driving test first time, which surprised everybody.]',
    '5 [no commas]', '6 [no commas]', '7 [The Channel Tunnel, which opened in 1995, is a great way …]', '8 [no commas]', '9 [A short, bald man seen running away … (comma between the adjectives)]',
  ] },

  // ---------- book p64 ----------
  { p: 65, x: 9.2, y: 7.2, ex: '2', title: 'Which need more information?', kind: 'key', items: [
    '[✓ 2, 3, 5, 6, 7, 8] – [1 and 4 make sense alone]',
  ] },
  { p: 65, x: 8.9, y: 31.9, ex: '3', title: 'Rewrite as relative clauses', kind: 'key', items: [
    '1 [The apple tree in our garden, which my grandfather planted sixty years ago, needs to be cut down.]', '2 [People who do regular exercise live longer.]',
    '3 [She married a man she met on holiday in Turkey.]', '4 [The Great Barrier Reef, which is situated off the north-east coast of Australia, is the largest coral reef in the world.]',
    '5 [Did I show you the photographs we took in Barbados?]', '6 [Let me introduce you to Petra James, who works in our Paris office.]',
    '7 [I\'m looking for a book that practises German grammar.]', '8 [I was speaking to someone you know.]',
  ] },
  { p: 65, x: 8.7, y: 55.3, ex: '4', title: '-ed or -ing?', kind: 'key', items: [
    '[The -ing adjectives (B) go with the topics:] 1 mistake – [embarrassing]', '2 a holiday – [relaxing]', '3 gossip – [shocking]', '4 a journey – [exhausting]',
    '5 a job – [challenging]', '6 the weather – [depressing]', '7 a TV documentary – [boring]',
  ] },
  { p: 65, x: 8.7, y: 74.6, ex: '5', title: 'How does the woman feel?', kind: 'key', items: [
    '1 [depressed – the weather is depressing]', '2 [relaxed – the holiday was relaxing]', '3 [shocked – the gossip about Dave and Maggie is shocking]',
    '4 [exhausted – the 30-hour journey was exhausting]', '5 [challenged – the new job is challenging]', '6 [bored – the TV is boring]',
    '7 [embarrassed – she asked a lady when her baby was due]',
  ] },
  { p: 65, x: 51.1, y: 4.9, ex: '6', title: 'Present or past participle', kind: 'key', items: [
    '1 [playing] / [played]', '2 [made] / [making]', '3 [writing] / [written]', '4 [bought] / [buying]', '5 [breaking] / [broken]',
  ] },
  { p: 65, x: 50.8, y: 35.4, ex: '7', title: 'Make the sentence longer', kind: 'key', items: [
    '[A cool, young man was walking slowly down the busy street lost in thought, listening to music and humming to himself.]',
  ] },
  { p: 65, x: 50.6, y: 72.9, ex: '8', title: 'Longer sentences', kind: 'sample', items: [
    '1 [A beautiful, long-haired girl was sunbathing drowsily on the wide, white, sandy beach, wearing a fashionable polka-dot bikini.]',
    '2 [A huge, bald, angry-looking policeman came running into the crowded room brandishing a gun.]',
    '3 [A ten-year-old English boy found a black leather wallet containing £1,000 on the Paris Metro.]',
    '4 [The once-famous, ageing actor Kirk Power was seen entertaining a young blonde lady in the expensive French restaurant frequented by many glamorous film stars.]',
    '5 [The much-longed-for skiing holiday in Austria was a complete success, enjoyed by every member of the family.]',
  ] },

  // ---------- book p65 ----------
  { p: 66, x: 8.0, y: 15.5, ex: '1', title: 'very or absolutely?', kind: 'key', items: [
    '[very + the gradable adjectives in A; absolutely + the extreme adjectives in B]',
    'good — [marvellous, fantastic, excellent, spectacular]', 'bad — [awful, dreadful]', 'big — [huge, enormous]', 'wet — [soaking]', 'nice — [gorgeous]',
    'unusual — [extraordinary]', 'surprised — [amazed]', 'excited — [thrilled]', 'valuable — [priceless]', 'silly — [ridiculous]', 'interesting — [fascinating]',
    'tired — [exhausted]', 'pleased — [delighted]', 'clever — [brilliant]', 'funny — [hilarious]',
  ] },
  { p: 66, x: 8.0, y: 46.3, ex: '2', title: 'Complete the conversations', kind: 'key', items: [
    '1 [soaking]', '2 [thrilled]', '3 [delighted]', '4 [enormous]', '5 [ridiculous]', '6 [awful]',
  ] },
  { p: 66, x: 49.5, y: 15.3, ex: '4', title: 'quite – which is more positive?', kind: 'key', items: [
    '[When the adjective is stressed (quite CLEVER), quite means \'fairly\' and is positive. When quite is stressed (QUITE clever), it means \'not very\' and is less positive.]',
    '[1a and 2a stress the adjective; 1b and 2b stress quite.]',
  ] },
  { p: 66, x: 49.5, y: 40.3, ex: '6', title: 'A night at the Oscars', kind: 'sample', items: [
    'Who? [The director/producer of the musical \'Angel Voice\', accepting the Oscar for best movie.]',
    '[I am absolutely amazed and delighted to receive this award. I am truly grateful to all those wonderful people who voted for me. It is extremely rare for a musical to win best movie, so this is a huge honour … an enormous success … an absolutely fantastic movie … brilliant people … stunning new talent … the gifted writer … fascinating characters and hilarious script … the excellent musical director … marvellous songs and thrilling musical score … truly amazing creativity … priceless support. I absolutely adore you all.]',
  ] },

  // ---------- book p66 ----------
  { p: 67, x: 8.6, y: 37.3, ex: '3', title: 'The title and introduction', kind: 'key', items: [
    '1 [A fictional man brought up by apes in the jungle, who lived in the trees.]',
    '2 [Take a room high up in a hotel at the southern end of Central Park – the view is extraordinary.]', '3 [The skyscrapers on each side of the park.]',
  ] },
  { p: 67, x: 8.5, y: 52.7, ex: '5', title: 'True or false?', kind: 'key', items: [
    '1 [✓]', '2 [✗] [He was brought up by his mother in a tiny Manhattan apartment.]', '3 [✗] [He built 13.]', '4 [✓]',
    '5 [✗] [He likes the solitude and loves looking at the stars at night.]', '6 [✗] [He lived in it himself.]', '7 [✓] [They had to obey his rules.]',
    '8 [✗] [They often went undetected for long periods – some for a whole year.]', '9 [✓]', '10 [✗] [He was offered a job as a pruner and tree climber.]',
  ] },

  // ---------- book p68 ----------
  { p: 69, x: 8.5, y: 28.0, ex: '3', title: 'Simone', kind: 'key', items: [
    '1 [In Cairo, Egypt.]', '2 [Between 40 and 45°C.]', '3 [She danced for hours in a hot nightclub, then went to the pyramids at sunrise.]',
    '4 [A taxi and a motorbike.]', '5 [To the pyramids – to see the sunrise.]', '6 [The sun was just coming up.]',
    '7 [A man who hired them his motorbike – not helpful: it broke down in the desert and they had to push it back.]',
    '8 [She got heat exhaustion – a headache, confusion, and sickness.]', '9 [She went to bed; now she always carries rehydration salts.]',
  ] },
  { p: 69, x: 8.5, y: 55.1, ex: '5', title: 'Anna', kind: 'key', items: [
    '1 [In a small town in central Russia.]', '2 [Minus 30°C or colder.]', '3 [She told her friends not to meet her at the tram stop.]', '4 [A tram.]',
    '5 [To her friends\' flat on the outskirts of town.]', '6 [An anonymous landscape of huge snow-covered blocks of flats that all looked the same.]',
    '7 [An old lady – not helpful: she didn\'t understand Anna\'s Russian.]', '8 [Her nostrils froze, her hands and feet hurt and then went numb, it was hard to breathe, and she began to panic.]',
    '9 [Her friends came to find her and took her home.]',
  ] },
  { p: 69, x: 8.2, y: 65.0, ex: '6', title: 'Adverbs used by Simone and Anna', kind: 'key', items: [
    '1 It was [extremely] hot and [stupidly] we decided to go dancing.', '2 We were sweating [profusely].', '3 The temperature rises [dramatically].',
    '4 My brain wasn\'t working [properly].', '5 It was [completely] anonymous, this landscape.', '6 They all looked [exactly] the same.',
    '7 I was beginning to [really, seriously] panic.',
  ] },
  { p: 69, x: 43.1, y: 57.4, ex: 'Spoken English', title: 'Adding a comment', kind: 'key', items: [
    '1 [which was rather a stupid thing to do]', '2 [which was understandable]', '3 [which was just amazing]', '4 [which is hard to believe]',
    '5 [which was no laughing matter / no joke]', '6 [which is hardly surprising because my Russian\'s lousy]',
  ] },

  // ---------- book p69 ----------
  { p: 70, x: 8.3, y: 30.4, ex: '1', title: 'What …, What a …, or How …?', kind: 'key', items: [
    '1 [What a] silly mistake!', '2 [What a] brilliant idea!', '3 [How] utterly ridiculous!', '4 [What] dreadful weather!', '5 [What] rubbish!', '6 [What a] mess!',
    '7 [How] awful!', '8 [How] wonderful!', '9 [What a] relief!', '10 [What a] terrible thing to happen!',
    'Positive: [brilliant idea, wonderful, relief]', 'Negative: [the others]',
  ] },
  { p: 70, x: 8.3, y: 59.6, ex: '2', title: 'Respond with an exclamation', kind: 'sample', items: [
    '1 [How wonderful!]', '2 [What a brilliant idea!]', '3 [What a silly mistake!]', '4 [What a terrible thing to happen!]', '5 [What a mess!]',
    '6 [What dreadful weather!]', '7 [How utterly ridiculous!]', '8 [What a relief!]', '9 [What rubbish!]', '10 [How awful!]',
  ] },
  { p: 70, x: 8.7, y: 63.9, ex: '3', title: 'Write an exclamation on each line', kind: 'key', items: [
    '[Whoops!] I dropped it!', 'Mmm! It\'s absolutely delicious!', '[Phew!] What a relief!', '[Wow!] How amazing!', '[Yuck!] That\'s disgusting!',
    '[Oh dear!] What a shame!', '[Ouch!] That really hurt!', '[Hey, Peter!] Come over here and sit with us!',
  ] },
  { p: 70, x: 49.9, y: 57.0, ex: '5', title: 'Complete the extra lines', kind: 'key', items: [
    '1 Just the [way] I like it.', '2 You [must] be so disappointed!', '3 That\'ll [keep] them busy!', '4 I told you that [would] happen.',
    '5 I\'ll [get] you a new one.', '6 You wouldn\'t [catch] me eating that!', '7 Let\'s have a [chat].', '8 I hadn\'t done any [revising] for it at all.',
  ] },

  // ========== Unit 9 ==========
  // ---------- book p70 ----------
  { p: 71, x: 8.2, y: 26.4, ex: 'Test your grammar', title: 'Expressing habit', kind: 'key', items: [
    '1 A reliable friend [c will never let you down]. (present)', '2 In Victorian times men [e used to wear top hats]. (past)',
    '3 I think my sister\'s in love. [d She\'ll spend hours staring into the fire, sighing.] (present)', '4 When I was very small [a my Dad would read me a story at bedtime]. (past)',
    '5 My first girlfriend was Alice. [f We used to go to the cinema on a Friday, and then we\'d go for a pizza afterwards.] (past)',
    '6 Big-headed people [b are always talking about themselves]. (present)',
    '2 [He used to work hard but now he\'s retired. / He\'s used to working hard because he\'s a builder.]',
  ] },
  { p: 71, x: 7.9, y: 57.1, ex: '2', title: 'Complete the message with lines a–l', kind: 'key', items: [
    '1 [e used to go]', '2 [c got]', '3 [a used to sit]', '4 [k were always giggling]', '5 [f \'d go]', '6 [b \'d get]', '7 [h was]', '8 [g went]',
    '9 [i used to call]', '10 [l \'ll always end up]', '11 [d \'s always talking]', '12 [j used to calling]',
  ] },
  { p: 71, x: 7.9, y: 77.0, ex: '3', title: 'Again and again, or only once?', kind: 'key', items: [
    'Again and again: [going to school together, sitting next to each other, giggling, going back to Sally\'s house, getting the CDs, calling the teacher \'Homer Simpson\', meeting up with Penny and chatting, Penny talking about a reunion]',
    'Only once: [eating all the food in the fridge, Sally\'s mother being furious, nearly blowing up the science lab, the teacher going crazy]',
  ] },

  // ---------- book p71 ----------
  { p: 72, x: 8.5, y: 5.6, ex: '4', title: 'Factual or nostalgic?', kind: 'key', items: [
    'More factual: [We used to go to school together …]', 'More nostalgic: [We\'d go back to your house …]',
  ] },
  { p: 72, x: 8.2, y: 16.9, ex: '5', title: 'Match a line in A with a line in B', kind: 'key', items: [
    '[We used to go to school together.]', '[We used to sit next to each other.]', '[We were always giggling so much.]', '[We\'d go back to your house.]',
    '[We used to call him \'Homer Simpson\'.]', '[I\'m not used to calling you Sally Davies.]',
  ] },
  { p: 72, x: 51.3, y: 6.2, ex: 'Language focus', title: 'Present and past habit', kind: 'key', items: [
    '1 my attitude – [b]; a simple fact – [a]; characteristic behaviour – [c]',
    '2 [a My sister worked / used to work in a bank. b She was always borrowing my clothes … c She\'d go out on a Friday night and wouldn\'t be back till morning.]',
    '3 [used is a verb in b and an adjective in a and c.] past habit now finished – [b]; familiar, no longer strange – [a]; still strange but becoming easier – [c]',
  ] },
  { p: 72, x: 50.0, y: 52.5, ex: '1', title: 'What\'s she like?', kind: 'key', items: [
    '1 [absent-minded]', '2 [sensitive]', '3 [easy-going]', '4 [clumsy]', '5 [sensible]', '6 [stubborn]', '7 [mean]', '8 [argumentative]',
  ] },

  // ---------- book p72 ----------
  { p: 73, x: 9.1, y: 7.0, ex: '3', title: 'Which line in B continues the line in A?', kind: 'key', items: [
    '1 [c]', '2 [a]', '3 [b]', '4 [b]', '5 [c]', '6 [a]', '7 [d]', '8 [c]', '9 [a]', '10 [b]',
  ] },
  { p: 73, x: 8.7, y: 39.7, ex: '4', title: 'My parents', kind: 'key', items: [
    '1 [Good – her mother was her best friend; they talked openly (her dad left when she was three).]',
    '2 [Mixed – his dad drove him mad about his hair and clothes; his mum was more lenient but got angry when he picked at food.]',
    '3 [Not easy – her mum was always nagging and didn\'t realise how hard school was for her.]',
    '4 [Good – very fond memories of security and doing a lot together as a family.]',
  ] },
  { p: 73, x: 8.7, y: 45.6, ex: '5', title: 'Their actual words', kind: 'key', items: [
    '1 [she\'d talk to me very openly … we\'d go out shopping]', '2 [He was always telling me to have my hair cut … she would get angry when I picked at food]',
    '3 [My mum was always nagging me … she\'d be all put out]', '4 [We used to do a lot together as a family … he\'d bring us each a treat]',
  ] },
  { p: 73, x: 8.1, y: 74.0, ex: '7', title: 'used to do / be used to / get used to', kind: 'key', items: [
    '1 … but we\'re getting used to her.', '2 [I\'m used to it.]', '3 [I used to] live there.', '4 Difficult, but [I\'m getting used to] it bit by bit.',
    '5 I [used to] when I was young, but not any more.', '6 After twenty years\' marriage we[\'re used to] each other.',
  ] },

  // ---------- book p73 ----------
  { p: 74, x: 8.3, y: 47.4, ex: '2', title: 'A teacher to remember', kind: 'key', items: [
    'Sean – Mr Lang: [Latin and Greek; formal, serious, dark suit, long black moustache; probably in his 50s; positive – clear, entertaining, a razor sharp wit; yes – Sean studied philosophy at university]',
    'Samantha – Mrs Chapman: [English and drama; short, plump, mousy-brown hair; middle-aged; negative – loud, poked students with a ruler; yes – Samantha is a barrister and still hears \'speak up\']',
    'Rupert – Mr Biggs: [maths; big, with a booming voice; probably late 30s; sarcastic and embarrassing, but his explanations were crystal clear; yes – Rupert passed and got into university]',
    'Charlotte – Miss Wilkinson: [chemistry and biology; tall and gangly; probably early 30s; memorable because she fell for Charlotte\'s dad; no]',
  ] },
  { p: 74, x: 8.3, y: 66.8, ex: '3', title: 'Which teacher …?', kind: 'key', items: [
    'poked students — [Mrs Chapman, with a wooden ruler, when they looked sleepy or bored]', 'taught \'dry subjects\' — [Mr Lang: Latin and Greek]',
    'had to \'crouch\' — [Miss Wilkinson, over the steering wheel of her mini – she was too big for it]', 'had a \'mission in life\' — [Mr Biggs: to embarrass his students]',
    'slammed something down — [Mrs Chapman: her ruler, because a student was asleep]', 'had a razor sharp wit — [Mr Lang: there were jokes hidden in his words]',
    'glowed with gratitude — [Miss Wilkinson, because Charlotte\'s dad helped start her car]', 'gave crystal clear explanations — [Mr Biggs, about maths]',
  ] },
  { p: 74, x: 48.2, y: 47.4, ex: 'Spoken English', title: 'Adjective intensifiers', kind: 'key', items: [
    '1 [dead easy, razor sharp]', '2 1 [great] big 2 [tiny] little 3 [boiling] hot 4 [freezing] cold 5 [brand] new 6 [fast] asleep 7 [wide] awake 8 bored [stiff]',
  ] },

  // ---------- book p74 ----------
  { p: 75, x: 8.9, y: 24.7, ex: '3', title: 'Living in the past', kind: 'key', items: [
    'Peter – 1 [Victorian times; his mum and sister are interested too] 2 [a waistcoat and flat cap] 3 [car boot sales, antique fairs, eBay; his mum finds things] 4 [modern plastic things that all look the same; waste] 5 [people entertained themselves, sing-songs round the piano, things built to last, comfort] 6 [a microwave, TV, central heating, fridge freezer, hot water – hidden in cupboards or behind curtains] 7 [dinner parties with the old glasses and cutlery] 8 [his friends are supportive; experts say it\'s genuine] 9 [his mum and sister share his passion]',
    'Joanne – 1 [the 1950s; she loved old movies as a teenager] 2 [1950s clothes – tight pencil skirts, a white blouse, a wide belt, a pinny] 3 [e.g. an advert in an antiques magazine for the kitchen] 4 [it\'s too hectic; supermarkets are an ordeal; newspapers are distressing] 5 [women were more feminine and men more protective; clear roles] 6 [a television hidden in a retro cabinet] 7 [tea and cakes with like-minded friends] 8 [some women ask if she feels patronised; Kevin\'s colleagues tease him] 9 [Kevin, 42, a graphic designer – they met at a Fifties Convention]',
  ] },

  // ---------- book p76 ----------
  { p: 77, x: 8.1, y: 16.9, ex: '2', title: 'Write down the words you hear', kind: 'key', items: [
    '[where / wear, nose / knows, wood / would, war / wore, through / threw] – each pair sounds the same.',
  ] },
  { p: 77, x: 8.1, y: 29.6, ex: '4', title: 'Homonyms', kind: 'key', items: [
    '1 [fan]', '2 [flat]', '3 [date]', '4 [fit]', '5 [fair]',
  ] },
  { p: 77, x: 50.2, y: 13.5, ex: '6', title: 'Homophones', kind: 'key', items: [
    '1 [whole] the world / a [hole] in the ground', '2 a [piece] of cake / war and [peace]', '3 a rose is a [flower] / [flour] to make bread',
    '4 a yacht has [sails] / buy clothes in the [sales]', '5 shops [sell] things / a prisoner lives in a [cell]',
  ] },
  { p: 77, x: 50.2, y: 48.3, ex: '7', title: 'Same pronunciation, different spelling', kind: 'key', items: [
    'bored — [board]', 'caught — [court]', 'hire — [higher]', 'pair — [pear]', 'maid — [made]', 'plain — [plane]', 'waist — [waste]', 'seas — [sees, seize]', 'write — [right]',
  ] },
  { p: 77, x: 50.0, y: 57.9, ex: '8', title: 'Which word makes the joke?', kind: 'key', items: [
    '[lettuce / let us]', '[horns – a cow\'s horns / a bicycle or car horn]',
  ] },
  { p: 77, x: 50.0, y: 88.6, ex: '9', title: 'More jokes', kind: 'key', items: [
    '1 [weak / week]', '2 [flat – no power / a shape]', '3 [sand which is / sandwiches]', '4 [laid – laid the table / laid an egg]',
    '5 [jam – a traffic jam / strawberry jam]', '6 [funny – strange / amusing]', '7 [lemon aid / lemonade]', '8 [flushed – red in the face / a toilet flush]',
    '9 [ball – a football / a dance]',
  ] },

  // ---------- book p77 ----------
  { p: 78, x: 8.5, y: 22.9, ex: '2', title: 'For, against, or undecided?', kind: 'key', items: [
    'Pat — [against]', 'Ian — [undecided]', 'Helen — [for]',
  ] },
  { p: 78, x: 8.5, y: 30.5, ex: '3', title: 'Pat and Ian', kind: 'key', items: [
    'Pat: 1 If you [ask] me … 2 [Firstly] … 3 Another [thing] is … 4 [Personally] … 5 The [point] I\'m trying to make is …',
    'Ian: 1 To tell you the [truth] … 2 I [suppose] … 3 As [far] as I\'m concerned … 4 [Actually] … 5 [Anyway], as I was saying …',
  ] },
  { p: 78, x: 8.5, y: 71.2, ex: '4', title: 'Helen\'s phrases', kind: 'key', items: [
    '[If you want my opinion … Basically … As I understand it … But the main point is that … What really worries me is that … In conclusion …]',
  ] },
  { p: 78, x: 8.5, y: 75.5, ex: '5', title: 'Match the lines in A and B', kind: 'key', items: [
    '1 [c]', '2 [f]', '3 [a]', '4 [h]', '5 [d]', '6 [g]', '7 [e]', '8 [b]', 'Topic: [diet, exercise, and healthy lifestyles]',
  ] },

  // ========== Unit 10 ==========
  // ---------- book p78 ----------
  { p: 79, x: 8.2, y: 25.8, ex: 'Test your grammar', title: 'Probability or not?', kind: 'key', items: [
    '1 [✓]', '2 [✗]', '3 [✗]', '4 [✓]', '5 [✓]', '6 [✗]', '7 [✓]',
    '2 [She must have been very rich. / I had to do my homework. / I couldn\'t sleep because of the noise. / They can\'t have been in. There were no lights on. / I thought that was Jane but I might have been wrong. / You should have seen a doctor. / The train may have been late due to bad weather.]',
  ] },
  { p: 79, x: 7.6, y: 85.7, ex: '2', title: 'Alice and Bill', kind: 'key', items: [
    '[He was King Richard III. He was killed in a battle (Bosworth Field, 1485). The car park was built on an old church graveyard. He was in his early 30s.]',
    'How they know: [tests show the man died at that time from battle wounds, at the right age; the deformed spine (a hunchback); DNA from descendants in Canada matches.]',
  ] },
  { p: 79, x: 40.5, y: 72.6, ex: '3', title: 'Answer using the words in italics', kind: 'key', items: [
    '1 [He must have died in the 15th century.]', '2 [He could have been riding a horse. He must have been fighting.]', '3 [He can\'t have been buried in a car park.]',
    '4 [He may have been 32 or 33. He can\'t have been 40.]', '5 [That he would have been a hunchback.]', '6 [Builders in the 16th century might have chopped them off.]',
    '7 [They must have been surprised and excited.]', '8 [He can\'t have been fighting Henry VIII. He would have been fighting Henry VII.]',
  ] },

  // ---------- book p79 ----------
  { p: 80, x: 54.2, y: 58.5, ex: 'Language focus', title: 'Modal verbs in the past', kind: 'key', items: [
    '1 \'ll have – [certain]; must have – [certain]; might have – [possible]; could have – [possible]; may have – [possible]; can\'t have – [certain]; won\'t have – [certain]',
    '2 You shouldn\'t have told a lie. – [You did this but it was wrong.]', 'You needn\'t have cooked. – [You did this but it wasn\'t necessary.]',
    'You could have killed yourself! – [This was possible but you didn\'t do it.]',
  ] },

  // ---------- book p80 ----------
  { p: 81, x: 8.6, y: 10.5, ex: '1', title: 'Underline the correct answer', kind: 'key', items: [
    '1 [had to go]', '2 [couldn\'t find]', '3 [must have gone]', '4 [had to work]', '5 [shouldn\'t have said]', '6 [needn\'t have bought]',
    '7 [should have asked … would have given]', '8 [can\'t have done]', '9 [could have told … wouldn\'t have got]', '10 [could have been]',
  ] },
  { p: 81, x: 7.9, y: 50.1, ex: '2', title: 'A modal verb in the past', kind: 'key', items: [
    '1 You [can\'t have been] listening.', '2 I [couldn\'t have] managed without you.', '3 … but really you [shouldn\'t have].', '4 The film [won\'t have] started yet.',
    '5 She[\'d have] told me …', '6 … but we [needn\'t have] worried.', '7 The postman [must have] delivered it by mistake.',
    '8 You [shouldn\'t have] gone swimming in such rough sea. You [could have] drowned!',
  ] },
  { p: 81, x: 50.7, y: 10.7, ex: '3', title: 'Who is Robert talking to?', kind: 'key', items: [
    '[Donna Goldberg, an American woman from Wisconsin. Robert and his friend Alistair met Donna and her friend Marlene on holiday in Greece nearly ten years ago. Now she\'s in London and wants to come and stay.]',
  ] },
  { p: 81, x: 50.2, y: 88.0, ex: '4', title: 'What is Donna saying?', kind: 'sample', items: [
    '[Hi, can I speak to Robert Johnson, please? / Hi, Bob! It\'s me, Donna. / Donna Goldberg. / You do! We met on vacation – or holiday as you say. / In Greece. Me and my friend Marlene were staying in the same hotel. / … We had a great time … You and Alistair were such great guys. / Well, I\'m here in London at the moment. / Marlene and I are on holiday together again … going round Europe. / … so we wondered if we could come and visit. Maybe stay a couple of nights? / But you said we could visit if we were ever in London! / Bobby, are you married now? That\'s so cool. When did you marry? / Bob, I see, no worries … / I\'m not sure your wife would be too pleased. / Thank you Robert. Have a nice life.]',
  ] },

  // ---------- book p81 ----------
  { p: 82, x: 9.6, y: 8.9, ex: 'Spoken English', title: 'Expressions with modals', kind: 'key', items: [
    '1 [b]', '2 [d]', '3 [c]', '4 [e]', '5 [a]', '6 [g]', '7 [h]', '8 [i]', '9 [j]', '10 [f]',
  ] },

  // ---------- book p82 ----------
  { p: 83, x: 7.9, y: 15.4, ex: '2', title: 'The introduction', kind: 'key', items: [
    'When? [For nearly 300 years, from the 8th to the 11th century AD.]', 'Three things: [raids, voyages of discovery, and colonization]',
    'How do we know? [From the archaeology of their settlements and the literature of their sagas.]',
  ] },
  { p: 83, x: 7.8, y: 23.0, ex: '3', title: 'What else were the Vikings?', kind: 'key', items: [
    '[farmers, fishermen, craftsmen, traders, shipbuilders, navigators, explorers, and settlers]',
  ] },
  { p: 83, x: 7.9, y: 29.0, ex: '4', title: 'Information about the Vikings', kind: 'key', items: [
    '1 work: [mostly farmers and fishermen – they grew vegetables and cereals and tended livestock]', '2 skills: [blacksmiths, leather-workers, jewellers; skilful shipbuilders and navigators]',
    '3 appearance: [striking-looking, with blond hair and blue eyes]', '4 religion: [Odin, Thor, and Frey (Wednesday, Thursday, Friday); Odin created the Runes]',
    '5 trade: [iron, furs, and grindstones for silk, glass, and silver]', '6 brutality: [surprise attacks on monasteries (Lindisfarne, 793); protection money (Danegeld); Erik the Red killed two men]',
    '7 exploration: [from Britain to Baghdad; Leif Erikson reached North America (Vinland) in 1003]', '8 settlements: [Iceland in 870 – the Althing, the oldest parliament; Greenland in 982]',
  ] },
  { p: 83, x: 7.6, y: 42.3, ex: '5', title: 'Match words in A and B', kind: 'key', items: [
    '[tended livestock]', '[carved stone]', '[traded goods]', '[raided monasteries]', '[worshipped gods]', '[extorted money]', '[settled in many lands]',
    '[mounted expeditions]', '[explored far and wide]',
  ] },

  // ---------- book p84 ----------
  { p: 85, x: 8.6, y: 38.9, ex: '1', title: 'Jim and the lion', kind: 'key', items: [
    '1 [To the zoo.]', '2 [No – he always ran away when he could.]', '3 [A lion ate him.]', '4 [The keeper – no, it was too late.]',
    '5 [Not very upset: his mother said it gave her no surprise; his father told all the children to keep hold of their nurse.]',
  ] },
  { p: 85, x: 8.1, y: 57.6, ex: '3', title: 'Complete the lines', kind: 'key', items: [
    '[friends, delicious, stories, dreadful, relate, often, allowed, inauspicious, ran, sprang, beginning, imagine, first, slowly]',
    '[detested, shouted, fat, angry, miserable, informed, concerned, surprise, self-controlled, children, end]',
  ] },
  { p: 85, x: 7.8, y: 71.0, ex: '5', title: 'The moral and the tone', kind: 'sample', items: [
    'Moral: [Children should always do as they are told and stay with their nurse.]', 'Tone: [humorous, mock-serious]',
    'Why funny: [They don\'t seem upset at all – his mother isn\'t surprised and his father just gives the other children a lesson.]',
  ] },

  // ---------- book p85 ----------
  { p: 86, x: 55.4, y: 14.2, ex: '1', title: 'Which part of the body?', kind: 'key', items: [
    'intelligence — [head]', 'manual skills — [hands]', 'emotions — [heart]',
  ] },
  { p: 86, x: 55.3, y: 25.7, ex: '2', title: 'Rephrase the metaphors', kind: 'key', items: [
    '1 [I\'m very busy.]', '2 [Help me]', '3 [She\'s going to be very successful.]', '4 [she isn\'t at all arrogant]', '5 [She\'s very good at business.]',
    '6 [she\'s very kind]', '7 [We had an honest, open talk]', '8 [I didn\'t really want to do it.]',
  ] },
  { p: 86, x: 55.1, y: 48.1, ex: '3', title: 'Complete the sentences', kind: 'key', items: [
    '1 [on its last legs]', '2 [goes to their head]', '3 [putting on a brave face]', '4 [finding my feet]', '5 [a sharp tongue]', '6 [pulling your leg]',
  ] },
  { p: 86, x: 55.2, y: 81.9, ex: '4', title: 'Replace the phrases', kind: 'key', items: [
    '1 [getting used to it → finding my feet; very kind and generous → a heart of gold; understands … very well → a very good head for]',
    '2 [help me → give me a hand; accept → face; about to stop working → on its last legs; Are you joking? → Are you pulling my leg?]',
    '3 [made her feel more important → gone to her head; spoken in a harsh and unkind way → had a sharp tongue; talk honestly and openly → have a heart-to-heart]',
  ] },

  // ========== Unit 11 ==========
  // ---------- book p86 ----------
  { p: 87, x: 19.3, y: 25.6, ex: 'Test your grammar', title: 'Bridget\'s problems and wishes', kind: 'key', items: [
    '1 It\'s raining again. [I wish it wasn\'t.]', '2 I\'m not going out tonight. [I wish I was.]', '3 There\'s nothing good on TV. [I wish there was.]',
    '4 I don\'t like my job. [I wish I did.]', '5 My boyfriend and I split up last week. [I wish we hadn\'t.]', '6 I know he won\'t call me. [I wish he would.]',
    '7 I feel really depressed. [I wish I didn\'t.]', '8 I can\'t talk to anyone about it. [I wish I could.]',
  ] },
  { p: 87, x: 8.2, y: 52.9, ex: '2', title: 'Who says what?', kind: 'key', items: [
    '1 [A driver asking a traffic warden to cancel a parking ticket]', '2 [A student with an exam tomorrow who went out last night]',
    '3 [Two tired parents dreaming of a holiday on an island]', '4 [A father and son watching Charlie play football]', '5 [Two friends looking at sports cars]',
  ] },
  { p: 87, x: 8.2, y: 57.1, ex: '3', title: 'Complete the lines', kind: 'key', items: [
    '1 I shouldn\'t have [parked here] … Surely you could [cancel it if you wanted]? … Supposing you [cancelled it just this once]?',
    '2 I shouldn\'t have [gone out last night]. … If only I hadn\'t [left all my revision \'til the last minute]. … I wouldn\'t worry [if I were you].',
    '3 If only we could [just fly off to that island]. … That would [be fantastic]. … I\'d just [sleep forever]. … Sometimes I wish [I\'d never had kids].',
    '4 Don\'t you wish you [still played football, Dad]? … But you could have [been a brilliant player if you\'d wanted].',
    '5 What would you give [to drive one of those]? … Which one would you choose if [you had the money]? … if I won the lottery I\'d [buy the Aston Martin].',
  ] },

  // ---------- book p87 ----------
  { p: 88, x: 8.2, y: 5.5, ex: '5', title: 'The facts behind the statements', kind: 'key', items: [
    'a [I don\'t know the answer.]', 'b [I can\'t come.]', 'c [I get nervous, so I don\'t get good results.]', 'd [You didn\'t help us, so we haven\'t finished.]',
    'e [I didn\'t listen to your advice.]', 'f [I didn\'t tell the truth.]', 'g [I don\'t speak French well.]', 'h [You won\'t speak to him.]',
  ] },
  { p: 88, x: 9.3, y: 24.7, ex: 'Language focus', title: 'Hypothesizing', kind: 'key', items: [
    '1 Present: [a, b, c, g, h]; past: [d, e, f]', '2 [c I\'d = I would; d you\'d = you had, we\'d = we would]',
    '3 [The fact is that you don\'t know the truth. / The fact is that you smoke. / Fortunately you didn\'t fall and hurt yourself.]',
  ] },
  { p: 88, x: 60.6, y: 8.4, ex: '1', title: 'Express a wish or regret', kind: 'key', items: [
    '1 [I wish I spoke English fluently.]', '2 [If you didn\'t speak so fast, I\'d understand.]', '3 [I wish I had a brother or sister.]',
    '4 [If only we had enough money for a holiday.]', '5 [I wouldn\'t get up at six o\'clock if I didn\'t have to go to work.]',
    '6 [If I\'d learned to ski earlier, I\'d be better.]', '7 [She wishes she was older.]', '8 [I\'d rather my best friend didn\'t borrow my things without asking.]',
    '9 [If I knew about computers, I could help you.]', '10 [It\'s time we had a break.]',
  ] },

  // ---------- book p88 ----------
  { p: 89, x: 8.9, y: 6.3, ex: '2', title: 'Broken dreams', kind: 'key', items: [
    '[They bought their dream holiday home, but an earthquake made the cliff fall into the sea and they lost everything – their dreams were broken.]',
  ] },
  { p: 89, x: 8.6, y: 10.5, ex: '3', title: 'Form sentences', kind: 'key', items: [
    '1 [If the house hadn\'t been on a cliff, it wouldn\'t have fallen into the sea.]', '2 [Marty and Carrie wish they hadn\'t bought it.]',
    '3 [They shouldn\'t have acted so quickly.]', '4 [They should have hired a surveyor.]', '5 [If they had hired a surveyor, he might have warned them not to buy it.]',
    '6 [If only they hadn\'t lost all their money.]', '7 [Supposing the earthquake hadn\'t happened?]', '8 [They wish they hadn\'t gone on holiday to Vanuatu.]',
  ] },
  { p: 89, x: 8.2, y: 36.7, ex: '4', title: 'Form the question and answer it', kind: 'sample', items: [
    '[What would have happened if there hadn\'t been an earthquake?] — [They would have had their dream holiday home.]',
  ] },
  { p: 89, x: 42.0, y: 59.9, ex: 'Spoken English', title: 'Expressions with if', kind: 'key', items: [
    '1 [d]', '2 [i]', '3 [f]', '4 [a]', '5 [b]', '6 [h]', '7 [j]', '8 [e]', '9 [g]', '10 [c]',
  ] },

  // ---------- book p89 ----------
  { p: 90, x: 9.0, y: 16.5, ex: 'Word pairs', title: 'Well-known pairs', kind: 'key', items: [
    'ups and [downs]', 'sooner or [later]', 'pros and [cons]',
  ] },
  { p: 90, x: 8.1, y: 24.5, ex: '1', title: 'Match the word pairs and definitions', kind: 'key', items: [
    'ifs or buts — [excuses or arguments]', 'wait and see — [be patient and find out later]', 'ins and outs — [exact details]', 'give and take — [compromise/be flexible]',
    'by and large — [generally speaking]', 'grin and bear it — [tolerate it as best you can]', 'odds and ends — [a variety of things]',
    'take it or leave it — [accept it or refuse, I don\'t care]',
  ] },
  { p: 90, x: 8.2, y: 47.5, ex: '2', title: 'Complete the sentences', kind: 'key', items: [
    '1 [give and take]', '2 [odds and ends]', '3 [ifs or buts]', '4 [ins and outs]', '5 [wait and see]', '6 [grin and bear it]', '7 [take it or leave it]', '8 [by and large]',
  ] },
  { p: 90, x: 8.1, y: 75.7, ex: '3', title: 'Join the words', kind: 'key', items: [
    '[now and then, sick and tired, more or less, touch and go, peace and quiet, safe and sound, slowly but surely, there and then]',
  ] },

  // ---------- book p90 ----------
  { p: 91, x: 8.2, y: 7.0, ex: '3', title: 'Which text does each line come from?', kind: 'key', items: [
    'a [the @ symbol (5)]', 'b [songs stuck in your head (4)]', 'c [the Internet (1)]', 'd [leap years (3)]', 'e [species on the human body (2)]',
  ] },
  { p: 91, x: 8.0, y: 27.8, ex: '4', title: 'Answer the questions', kind: 'key', items: [
    '1 [No one machine or cable keeps it going – if one connection is damaged, other routes can be found.]',
    '2 [TV, mobile phones, email, texts, blogs, social media; business and the financial markets would be in chaos.]',
    '3 [All the bacteria on the skin of an average person, stuck together.]', '4 [It\'s harmless – it eats dead skin cells.]', '5 [About 500 years ago.]',
    '6 [2400 (2200 is divisible by 100 but not by 400).]', '7 [A song that gets stuck in your head (from German \'Ohrwurm\').]',
    '8 [Start another activity, go for a run, watch TV, or think of another song.]', '9 [To save strokes of the pen when copying the common word \'at\' by hand.]',
    '10 [They compare the shape to an animal – a monkey\'s tail, a little dog, a snail, a little duck, an elephant\'s trunk …]',
  ] },

  // ---------- book p92 ----------
  { p: 93, x: 8.4, y: 28.4, ex: '3', title: 'Dream:ON – true or false?', kind: 'key', items: [
    '1 [✗] [It looks at how we can influence dreams, not what they mean.]', '2 [✓]', '3 [✓] [Thousands have downloaded it.]', '4 [✗] [You choose the type of dream.]',
    '5 [✗] [You put it next to your head on the pillow.]', '6 [✓]', '7 [✗] [The description goes into a database, the \'Dream Bank\'; you can tag friends on Facebook and Twitter.]',
    '8 [✗] [21% had trouble sleeping and 15% had unpleasant dreams.]', '9 [✗] [The results are mixed.]',
  ] },
  { p: 93, x: 7.8, y: 59.0, ex: '4', title: 'Match a line in A with a line in B', kind: 'key', items: [
    '1 [f]', '2 [b]', '3 [e]', '4 [c]', '5 [a]', '6 [d]',
  ] },
  { p: 93, x: 59.3, y: 61.3, ex: '5', title: 'Expressions with dream', kind: 'key', items: [
    '1 [exactly what you have always wanted]', '2 [thank you and goodbye (as if to someone going to bed)]', '3 [It went perfectly.]', '4 [I would never do that!]',
    '5 [It\'s better than we ever imagined.]', '6 [They\'re doing what they always wanted to do.]', '7 [the perfect group of people]',
    '8 [That will never happen – you\'re dreaming! (sarcastic)]',
  ] },

  // ---------- book p93 ----------
  { p: 94, x: 7.9, y: 29.8, ex: '1', title: 'Moans and groans', kind: 'key', items: [
    '1 [e – an exam]', '2 [a – email]', '3 [g – a bookcase]', '4 [h – a TV programme]', '5 [b – boots]', '6 [c – a dishwasher]', '7 [f – a leather jacket]',
    '8 [d – ordering by phone]',
  ] },

  // ========== Unit 12 ==========
  // ---------- book p94 ----------
  { p: 95, x: 8.6, y: 25.7, ex: 'Test your grammar', title: 'The correct article', kind: 'key', items: [
    '1 [a] judge', '2 [the] year before last', '3 [a] sea cruise', '4 [the] cruise', '5 [the] world', '6 [an] attractive widow', '7 [–] dinner',
    '8 [one] another', '9 [–] love … [–] any age', '10 [the] captain',
  ] },
  { p: 95, x: 7.9, y: 61.4, ex: '2', title: 'Determiners in the quiz', kind: 'key', items: [
    '[enough time, the whole time, all the rest, each day / item, plenty of things, a great deal of enthusiasm, hardly any, several things, no uncompleted projects, none, each of my projects, a few hobbies, a little leisure time, few hobbies, little leisure time, the whole of my life]',
    'Followed by of: [plenty of, a great deal of, each of, none (of), the whole of]',
  ] },
  { p: 95, x: 7.8, y: 70.7, ex: '3', title: 'Lines in the quiz', kind: 'key', items: [
    '1 [I leave enough time for relaxation.]', '2 [Non-stop the whole time.]', '3 [Plenty of things.]', '4 [A great deal of enthusiasm.]',
    '5 [Hardly any, just one or two minor things.]', '6 [There are no uncompleted projects.]', '7 [I see each of my projects through.]', '8 [I have no patience …]',
    '9 [I have few hobbies and little leisure time.]', '10 [In several ways.]', '11 [In any way I can.]', '12 [Most of the time I text.]',
  ] },

  // ---------- book p95 ----------
  { p: 96, x: 52.8, y: 5.8, ex: '4', title: 'a few / few, a little / little', kind: 'key', items: [
    '[a few / a little = some – positive; few / little = not many / not much – negative]',
  ] },
  { p: 96, x: 52.8, y: 12.6, ex: '5', title: 'each or every?', kind: 'key', items: [
    '[Each sees the projects one by one; every sees them all together.] [Each can mean only two projects; every can\'t (it means three or more). Both can mean lots of projects.]',
  ] },
  { p: 96, x: 53.9, y: 24.1, ex: 'Language focus', title: 'Determiners', kind: 'key', items: [
    '1 [the other book(s), another book, many other books, his only book, such a good book, what a good book; both books, neither book, each/every book, little time, all books / all time, the whole book, no book(s) / no time] – Quantity: [both, neither, each, every, little, all, the whole, no]',
    '2 [both of / neither of / each of / all of / some of / none of + the/my/those books; all of / some of / none of + the/my/that time; the whole of the book / my time]',
  ] },

  // ---------- book p96 ----------
  { p: 97, x: 8.4, y: 7.0, ex: '2', title: 'What is the difference?', kind: 'key', items: [
    '1 [all = the group together; each = one by one]', '2 [none = of three or more; neither = of two]', '3 [the doctor = a doctor we know/expect; a doctor = any doctor]',
    '4 [a man = one we don\'t know; some man = one we don\'t know, slightly dismissive]', '5 [a pair = two that go together; a couple = two (or about two), not necessarily matching]',
    '6 [whole families = complete families, every member; all the families = every family]',
  ] },
  { p: 97, x: 8.2, y: 33.2, ex: '3', title: 'The correct lines', kind: 'key', items: [
    '[Would you like an egg?]', '[Do all birds lay eggs?]', '[Where did I put the eggs?]',
    '[I have two cars. Borrow either one.]', '[It was great to see everyone.]', '[I have five nieces. I gave £10 to each one.]',
    '[Love is everything.]', '[A love of animals is vital for a vet.]', '[The love I have for you is forever.]',
    '[Both my parents are Scottish.]', '[All my friends like dancing.]', '[Every person in my class is friendly.]',
  ] },
  { p: 97, x: 54.4, y: 5.1, ex: 'Spoken English', title: 'Demonstratives', kind: 'key', items: [
    '1 [that]', '2 [that]', '3 [These]', '4 [those]', '5 [this]', '6 [that] … [this]', '7 [Those]', '8 [these]',
  ] },
  { p: 97, x: 52.8, y: 51.1, ex: '6', title: 'each, every, or all', kind: 'key', items: [
    '1 [It was revolting, every bit as bad as you said it would be.]', '2 [Each and every one of them.]', '3 [All but three did.]', '4 [Every little helps.]',
    '5 [All being well, we should be there about six.]', '6 [If it\'s all the same to you, I\'d rather not.]',
  ] },

  // ---------- book p97 ----------
  { p: 98, x: 7.8, y: 57.3, ex: '2', title: 'Stages of life', kind: 'key', items: [
    'Dan — [teenage years (16) – stressed and exhausted; disagreeing with his parents, leaving school]',
    'Abi — [childhood (4) – starting primary school; she doesn\'t want to go]',
    'Derek — [middle age (mid-fifties) – made redundant; setting up a business]',
    'Jilly — [young adult (23) – starting her first job; nervous but happy; wants her own home]',
    'Frances — [retired – busier than ever, going travelling on her own]',
    'Nat and Louis — [young adults (35) – married with twins; owning their own home at last]',
  ] },
  { p: 98, x: 7.8, y: 64.8, ex: '3', title: 'Who said these things?', kind: 'key', items: [
    '1 [Derek – seeing redundancy as a new opportunity; it isn\'t easy at his age.]', '2 [Jilly – presenting ideas for a washing powder advert; her area is fashion.]',
    '3 [Abi – primary school; she doesn\'t want to go.]', '4 [Dan – becoming a lawyer like his dad.]',
    '5 [Frances – ladies of her age; she wants challenges and ambitions.]', '6 [Louis\'s mum – she moved to a smaller house, so they had to move in with Nat\'s parents.]',
  ] },
  { p: 98, x: 52.6, y: 42.0, ex: 'Language work', title: 'What do the phrases mean?', kind: 'key', items: [
    '1 [helped me to relax and stop feeling shy]', '2 [be independent]', '3 [became very keen on travelling]', '4 [doesn\'t interest me]',
    '5 [a nuisance]', '6 [shocked me very badly]', '7 [go wherever I like, without a plan]',
  ] },

  // ---------- book p98 ----------
  { p: 99, x: 8.2, y: 18.6, ex: '2', title: 'Who are they?', kind: 'key', items: [
    'Catherine Murray-John — [is leaving the island with her four children]', 'Caledonian MacBrayne — [the ferry company]',
    'Lawrence MacEwen — [the Laird who owns the island; Colin\'s father]', 'Sandy — [the postman and fisherman]',
    'Colin MacEwen — [decides who can move into the houses]', 'Dave — [runs the B&B]',
  ] },
  { p: 99, x: 8.2, y: 27.6, ex: '3', title: 'Answer the questions', kind: 'key', items: [
    '1 [Her second child is starting secondary school. She wants to go, but it\'s a huge wrench (and there were other reasons).]',
    '2 [No church, pub, police, or post office; electricity only since 1970; TV only at certain times.]', '3 [Everyone comes to meet it and collect their provisions.]',
    '4 [The MacEwens own the island and all the houses, and Colin decides.]', '5 [Idealistic people from the south who think they can escape their problems.]',
    '6 [There were only between 13 and 19 people.]',
    '7 [In 1821 320 people lived there; the MacEwens bought it in 1896; when Lawrence was a boy everyone else spoke Gaelic; the last crime was in the Sixties.]',
    '8 [1970 – electricity arrived; 2 – the ferry journey in hours; 35 – the population; 8 – MacEwens / children; 13 – houses; 320 – people in 1821; 1,500 – acres]',
    'Has: [a guest house (B&B), sharks, a primary school, TV] – Hasn\'t: [a post office, a church, a pub, a hotel, a police officer, a secondary school]',
  ] },
  { p: 99, x: 7.9, y: 66.8, ex: 'Vocabulary work', title: 'Synonyms from the text', kind: 'key', items: [
    '1 [teeny … tranquil]', '2 [jog]', '3 [doubles as]', '4 [blissfully remote]', '5 [notions … beware]', '6 [a huge bear of a man, bursting with vitality]',
    '7 [guts]', '8 [bump into]', '9 [the hustle and bustle]',
  ] },

  // ---------- book p100 ----------
  { p: 101, x: 8.2, y: 11.4, ex: '1', title: 'life or time?', kind: 'key', items: [
    'life: [not on your life, you can bet your life, get a life, get a new lease of life, that\'s life, a cushy life, anything for a quiet life, the time of your life]',
    'time: [take your time, better luck next time, kill time, it\'s high time, third time lucky, for the time being, no time to lose, stand the test of time, not before time, in the nick of time, any old time, dead on time]',
  ] },
  { p: 101, x: 7.9, y: 43.0, ex: '2', title: 'Complete the lines', kind: 'key', items: [
    '1 [your time]', '2 [time to lose]', '3 [lease of life]', '4 [the test of time]', '5 [nick of time]', '6 [old time]', '7 [for a quiet life]',
  ] },
  { p: 101, x: 7.9, y: 62.4, ex: '3', title: 'What are the conversations about?', kind: 'key', items: [
    '1 [failing a driving test – better luck next time]', '2 [someone who watches TV all day – get a life, it\'s high time]',
    '3 [missing a train – dead on time, two hours to kill, not on your life]', '4 [building work at home – not before time, you can bet your life, for the time being]',
    '5 [a friend who won the lottery – a cushy life, that\'s life]',
  ] },
  { p: 101, x: 7.9, y: 72.3, ex: '4', title: 'No time to think', kind: 'key', items: [
    '[Modern life is so busy that we have no time to stop, think, and enjoy life.]',
  ] },
  { p: 101, x: 7.8, y: 76.3, ex: '5', title: 'Differences between the poems', kind: 'key', items: [
    '[muse / dreams; but news / it seems; pause, feed / stop, waste; speed / haste; wander in / wonder at; the flowers / our children; dash / race; screech / scream; love / rush; shove / push; laugh or have some fun / care or to smile; dawdle in the sun / ramble for a while; rest and take a seat / sit, stand; chat to folks you meet / shake you by the hand; eat, drink / stop, blink]',
  ] },

  // ---------- book p101 ----------
  { p: 102, x: 8.4, y: 25.3, ex: '2', title: 'Choose the correct expression', kind: 'key', items: [
    '1 [apparently … Actually]', '2 [Personally … However … Anyway]', '3 [Hopefully … After all … Basically]', '4 [All the same … If you ask me … Honestly]',
    '5 [Definitely … surely … Obviously … basically … Ideally]',
  ] },

  // ========== Writing ==========
  // ---------- book p103 ----------
  { p: 104, x: 8.5, y: 11.5, ex: '1', title: 'Correct the mistakes', kind: 'key', items: [
    '1 [I was born in 1991 in a small town in Mexico.]', '2 [My father is a diplomat, so all my life I have lived in different countries.]',
    '3 [After school, I went to a business college for four years.]', '4 [I\'ve been married for five years. I met my wife while I was a student.]',
    '5 [My town isn\'t as exciting as London. It\'s very quiet in the evening.]', '6 [I\'ve been learning English for five years. I started when I was eleven.]',
    '7 [My father wants me to work in a bank because it\'s a good job.]', '8 [I\'m doing an evening course in English. I really enjoy learning languages.]',
  ] },
  { p: 104, x: 7.9, y: 35.6, ex: '2', title: 'Fernando\'s letter', kind: 'key', items: [
    '1 [In São Paulo, Brazil.]', '2 [Fernando is the guest; James (in England) is the host.]',
    '3 [São Paulo – the biggest and noisiest city in Brazil: a commercial centre with lots of pollution and traffic, but lots to do and bars open all night.]',
    '4 [Winter in England – it\'s December, just before Christmas.]',
  ] },
  { p: 104, x: 7.9, y: 45.2, ex: '3', title: 'The corrected letter', kind: 'key', items: [
    '[Thank you for your letter. I received it last week. Sorry I didn\'t reply before, but I\'ve been very busy. It\'s Christmas soon, and everyone is very excited!]',
    '[In two weeks I\'ll be with you in England. I can\'t believe it! I\'m looking forward to meeting you and your family very much. I\'m sure we\'ll like each other very much.]',
    '[My city, São Paulo, is the biggest and noisiest city in Brazil. It isn\'t really for tourists. It\'s a commercial centre. It also has a lot of pollution and traffic. But there are lots of things to do. I really like listening to music. There are bars which stay open all night!]',
    '[My friend went to London last year, and he saw a football match at Arsenal. He told me it was wonderful. I\'d like to do that too.]',
    '[My plane arrives at Heathrow at 6.30 a.m. on 3 January. It\'s very kind of you to meet me so early in the morning.]',
    '[I really hope to improve my English while I\'m with you! See you soon, and Happy New Year!]',
  ] },

  // ---------- book p104 ----------
  { p: 105, x: 8.2, y: 10.3, ex: '1', title: 'Formal writing', kind: 'key', items: [
    '1 [Dear Mr Smith, / Dear Sir/Madam, / Dear Ms Jones,]', '2 [Yours sincerely, / Yours faithfully,]', '3 [I\'m / I won\'t / they\'re] (contractions)', '4 [your full name]',
    '5 [I\'m writing to express my …]', '6 [I\'d be grateful if you could … / Would it be possible for you to …]', '7 [Please find attached …]', '8 [Please find enclosed …]',
    '9 [I look forward to hearing from you at your earliest convenience.]',
  ] },
  { p: 105, x: 7.9, y: 41.5, ex: '2', title: 'Adjectives for a letter of complaint', kind: 'key', items: [
    '[dismayed, distressed, disappointed, upset, shocked, disgusted]',
  ] },
  { p: 105, x: 8.0, y: 52.7, ex: '3', title: 'The letter to the airline', kind: 'key', items: [
    '1 [In Antigua.]', '2 [Their son Tom, aged 7 – he had spent too long in the sun and had a slight temperature.]',
    '3 [The crew made Tom\'s family leave the plane because of his temperature, and the next day there were no guaranteed seats.]',
    '4 [Their daughter flew back to Gatwick with her grandparents; Ben, Susan, and Tom flew to Heathrow via New York with Delta Airlines.]',
  ] },
  { p: 105, x: 7.9, y: 65.4, ex: '4', title: 'More formal expressions', kind: 'key', items: [
    '[the direct result of your airline\'s mishandling of the situation]', '[was feeling a little unwell]', '[None of the adults present were overly concerned.]',
    '[We explained the situation]', '[the aircraft would not depart until we disembarked]', '[This news caused great distress to my entire family]',
    '[we were reassured by the offer of]', '[I would ask you to provide a detailed explanation of your airline\'s lack of assistance]',
  ] },

  // ---------- book p106 ----------
  { p: 107, x: 7.9, y: 17.5, ex: '2', title: 'My skiing disaster', kind: 'sample', items: [
    '1 [In winter I frequently used to go skiing.]', '2 [I especially enjoyed going to Colorado with my family.]', '3 [Then, two years ago, I had a really bad accident.]',
    '4 [I skied headfirst into a tree.]', '5 [Unfortunately, I broke my leg in three places.]', '6 [I\'d definitely like to go skiing again one day.]',
    '7 [But I don\'t feel confident enough yet.]', '8 [However, my family still go skiing every February.]',
  ] },
  { p: 107, x: 50.0, y: 10.0, ex: '3', title: 'Texting to the rescue', kind: 'key', items: [
    'Where? [In the Swiss Alps.]', 'What went wrong? [An electric storm and heavy snow struck as they climbed down; they were stuck on a ledge at -10°C.]',
    'How were they saved? [Rachel texted five friends in the UK; Avery Cunliffe called the Swiss rescue services, and a helicopter lifted them off.]',
    'The text means: [We need a helicopter to rescue us from the north ridge of Piz Badile, Switzerland.]',
  ] },
  { p: 107, x: 50.0, y: 17.5, ex: '4', title: 'Place the adverbs', kind: 'sample', items: [
    '[Several years ago, on a mid-September day, British climbers Rachel Kelsey and Jeremy Colenso were climbing high in the Swiss Alps. They were both relatively experienced climbers. They left their base with great confidence and the weather was good. They reached the summit easily, but as they started the climb down, an electric storm suddenly struck the mountain. Snow began to fall heavily, making it extremely difficult to see where they could safely put their hands and feet on the rock. After several frightening minutes, they found a narrow ledge and gratefully climbed on to it, desperately hoping the snow would stop …]',
    '[However, the snow did not stop and the temperature dropped dangerously to -10°C. \'We had to stay awake,\' said Rachel afterwards, \'because it was so cold that we would undoubtedly have died. So we continuously told stories …\']',
    '[Eventually, they decided that they had to get help. But what could they possibly do? Fortunately, Rachel had brought her mobile phone … Unfortunately, the only number contacts she had were in London. In fact, … She urgently sent a text message … They were all asleep, so for hours nothing happened. Then at 5.00 a.m. … He immediately jumped into action … and then called Rachel …]',
    '[… for the next 24 hours Avery kept sending text messages … Finally, at about 10.00 p.m. they were safely lifted off the mountain. \'We owe our lives to Avery,\' they said exhaustedly …]',
  ] },
  { p: 107, x: 50.0, y: 23.7, ex: '5', title: 'Background information', kind: 'key', items: [
    '[Who they were (experienced British climbers), where (the Swiss Alps), when (a mid-September day), and that the weather was good.]',
    'The story starts: [\'… as they started the climb down, an electric storm struck the mountain.\']',
  ] },

  // ---------- book p107 ----------
  { p: 108, x: 8.8, y: 11.6, ex: '1', title: 'but, although, however', kind: 'key', items: [
    '[She\'s rich and famous, but she\'s unhappy.]', '[Although she\'s rich and famous, she\'s unhappy.]', '[She\'s rich and famous. However, she\'s unhappy.]',
  ] },
  { p: 108, x: 8.7, y: 15.9, ex: '2', title: 'Conjunctions', kind: 'key', items: [
    'Contrast: 1 [Although] 2 [However] 3 [even though] 4 [Despite]',
    'Reason and result: 1 [so] 2 [because] 3 [as] 4 [As] 5 [so … that] 6 [such … that]',
    'Time: 1 [as soon as] 2 [until] 3 [whenever] 4 [while] 5 [since] 6 [after]',
    'Condition: 1 [If] 2 [unless] 3 [in case] 4 [as long as]',
  ] },
  { p: 108, x: 7.2, y: 75.7, ex: '4', title: 'The death of a star', kind: 'key', items: [
    'Theories: [She was murdered by the Mafia or the FBI; the Kennedys had her killed.]',
    '1 [since] 2 [but] 3 [Whenever] 4 [although] 5 [such] 6 [However] 7 [even though] 8 [When] 9 [as] 10 [However] 11 [even though] 12 [after] 13 [unless] 14 [so] 15 [while] 16 [in case] 17 [as soon as]',
  ] },

  // ---------- book p108 ----------
  { p: 109, x: 7.7, y: 10.1, ex: '1', title: 'What is a CV?', kind: 'key', items: [
    '[CV = curriculum vitae – a summary of your personal details, education, work experience, and skills, which you send when you apply for a job.]',
  ] },
  { p: 109, x: 7.6, y: 16.2, ex: '2', title: 'A covering letter', kind: 'key', items: [
    '[To introduce yourself and your CV, say which job you are applying for, and explain why you are suitable.]',
  ] },
  { p: 109, x: 7.6, y: 18.8, ex: '3', title: 'Headings in the CV', kind: 'key', items: [
    '[Personal details – Profile – Education – Employment history – Interests – Additional information – References]',
  ] },
  { p: 109, x: 7.6, y: 39.0, ex: '4', title: 'Answer the questions', kind: 'key', items: [
    '1 [Watford Grammar School.]', '2 [Psychology and Education (at Bristol University).]', '3 [One of her referees – from the Department of Education at Bristol University.]',
    '4 [Not much – a lifeguard and supervisor, an athletics coach, and a teaching assistant.]',
  ] },

  // ---------- book p109 ----------
  { p: 110, x: 8.4, y: 11.5, ex: '5', title: 'Is she well qualified?', kind: 'key', items: [
    '[Yes – she\'s the right age, has experience of working with children, loves sport, is energetic, and has organized sports events.]',
  ] },
  { p: 110, x: 7.9, y: 42.1, ex: '6', title: 'Make the letter more formal', kind: 'key', items: [
    'Dear Mark → [Dear Mr Sullivan]', 'somewhere recently → [in the March edition of the magazine Holiday Jobs for Graduates]', 'Here\'s my CV → [Please find enclosed my CV]',
    'I reckon I have just about everything needed → [I believe I have many of the relevant qualifications]', 'worked loads with kids → [worked extensively with young adults]',
    'doing all kinds of stuff → [organizing a variety of activities]', 'They generally do what I tell them → [They respect my leadership abilities]',
    'we manage to have a great time together → [we establish a good working relationship]', 'I know quite a bit about → [I have a certain understanding of]',
    'I am really into sport → [I am very interested in sport]', 'lots of experience → [considerable experience]', 'it\'s no problem for me to make friends → [I find it easy to make friends]',
    'I\'ve been all over the place → [I have travelled widely]', 'I can\'t wait to hear from you → [I look forward to hearing from you]', 'Best wishes → [Yours sincerely]',
  ] },

  // ---------- book p110 ----------
  { p: 111, x: 8.2, y: 17.9, ex: '2', title: 'The consumer survey', kind: 'key', items: [
    '1 [For the attention of]', '2 [In Nottingham, a medium-sized English town.]', '3 [Young people.]',
    '4 [Young people\'s tastes are changing and there is a growing demand for organic, stylish fast food, but not enough evidence yet of a large market; more research is needed.]',
  ] },
  { p: 111, x: 8.2, y: 33.7, ex: '3', title: 'Complete the report', kind: 'key', items: [
    '1 [d]', '2 [b]', '3 [j]', '4 [h]', '5 [f]', '6 [c]', '7 [k]', '8 [a]', '9 [e / g]', '10 [g / e]', '11 [i]',
  ] },

  // ---------- book p112 ----------
  { p: 113, x: 52.6, y: 10.0, ex: '4', title: 'Study the article', kind: 'key', items: [
    '1 [With a general statement: email is important but has both advantages and disadvantages.]',
    '2 [He can\'t believe regular mail takes days; his great aunt in Galashiels, Scotland uses email.]',
    '3 [First of all … A second point is that … not only … also … Also … In addition to this … Last but not least]',
    '4 [Firstly … Secondly … Another point is that … Although, as stated above … A final and very important point is that] – similar: [First of all / Firstly; A second point / Secondly; Last but not least / A final point]',
    '5 [Overall, however, to my mind the pros of email easily outweigh the cons.]',
  ] },

  // ---------- book p113 ----------
  { p: 114, x: 8.4, y: 17.3, ex: '2', title: 'Positive, negative, or neutral?', kind: 'sample', items: [
    '[picturesque + (place); intellectual + (person, place); brand-new + (place, thing); snoring – (person); a down-and-out – (person); a haven + (place); twisting (streets); boutiques (place); mouth-watering + (food); aromas + (food); a magnet + (place); flock (people)]',
  ] },
  { p: 114, x: 8.3, y: 39.6, ex: '4', title: 'Paragraphs', kind: 'key', items: [
    '1 [I live in Greenwich Village … paparazzi and fans.] – [general/personal impressions]', '2 [A sense of history … every weekend.] – [its history]',
    '3 [The heart of the Village … youth.] – [its character]', '4 [My mother … the real New York.] – [conclusion / final anecdote]',
  ] },
  { p: 114, x: 8.2, y: 53.0, ex: '6', title: 'Relative clauses and participles', kind: 'sample', items: [
    'Relative clauses: [which is in the \'downtown\' part of Manhattan; who in 1713 named it; when people escaping outbreaks of disease began moving there; where there are endless theatres; who grew up in New York City]',
    'Participles: [playing, selling, discussing, snoring, sleeping, being pursued, escaping, looking for, mentioned, talking, celebrating]',
  ] },

  // ---------- book p114 ----------
  { p: 115, x: 7.9, y: 19.0, ex: '2', title: 'An early memory', kind: 'key', items: [
    '1 [Four. An early memory of school; her name is Elizabeth.]', '2 [Taking her little sister to school – she wanted to meet her \'cool\' friends.]',
    '3 [She tugged at her sleeve and fretted about being late.]', '4 [The rain ruined the older sister\'s hair and put her in a bad mood; the younger one struggled with her wellies.]',
    '5 [She was late, so she couldn\'t make the mosaic picture of her cat – she had to do a jigsaw in the corner.]', '6 [Telling tales about her sister.]',
    '7 [Not close – the older sister didn\'t care, and the younger one still blames her.]',
  ] },
  { p: 115, x: 7.7, y: 36.2, ex: '3', title: 'The structure of the talk', kind: 'key', items: [
    '1 [1 introduce the topic; 2 background; 3 the particular memory; 4 conclusion]',
    '2 [She was four and had just started school; she had to walk; her sister was eleven years older and went to the school next door.]',
    '3 [It was pouring with rain; her sister was moaning; her sister ran off; she struggled with her wellies; she was very late; she had to do a jigsaw.]',
    '4 [Her sister can\'t remember it, but it\'s why she always arrives on time.]',
  ] },

  // ---------- book p116 ----------
  { p: 117, x: 8.8, y: 15.6, ex: '2', title: 'Two texts about Michelangelo', kind: 'key', items: [
    '1 Word order: [Initially, he concentrated … / In 1501 he began … / Later, he was asked by Pope Julius II …]', '2 Words: [a great influence → a tremendous influence]',
    '3 It was … / What …: [it was Florence that he considered … / What he loved above all … / it was his work at St Peter\'s Basilica that … / What is difficult to appreciate nowadays is …]',
    '4 this: [This he finished in 1504 / To do this / Michelangelo belongs to this group.]', '[Text B sounds better – it is more varied, emphatic, and cohesive.]',
  ] },
  { p: 117, x: 42.2, y: 9.9, ex: '3', title: 'Make the sentences more emphatic', kind: 'key', items: [
    '1 [What I love about my grandfather is his kind, wrinkly smile.]', '2 [It\'s the President\'s policies that they don\'t understand. / What they don\'t understand is the President\'s policies.]',
    '3 [What makes Norah Jones\' voice special is its softness. / It\'s the softness of her voice that makes it special.]',
    '4 [What I admired about Mother Teresa was her courage. / It was her courage that I admired.]', '5 [What amazed me was the way Pele could head a football.]',
  ] },

  // ---------- book p117 ----------
  { p: 118, x: 7.6, y: 52.8, ex: '3', title: 'Match the headings', kind: 'key', items: [
    '1 [Larry and his dream]', '2 [Preparing for take-off]', '3 [Flying high]', '4 [Serious problems]', '5 [Down to earth with a bump]',
  ] },
  { p: 118, x: 7.1, y: 68.6, ex: '4', title: 'Linking words', kind: 'key', items: [
    '1 [All day long]', '2 [Then, one day]', '3 [However]', '4 [first of all]', '5 [Next]', '6 [Finally]', '7 [in order to]', '8 [Unfortunately]',
    '9 [until]', '10 [so]', '11 [By this time]', '12 [Fortunately / Just at that moment]', '13 [Immediately]', '14 [because]', '15 [Eventually]', '16 [As soon as]',
  ] },

  // ---------- book p118 ----------
  { p: 119, x: 8.3, y: 17.7, ex: '2', title: 'Which text has the best style?', kind: 'key', items: [
    '[Text B – it uses more interesting vocabulary, joins sentences, and avoids repetition.]',
  ] },
  { p: 119, x: 8.1, y: 40.8, ex: '4', title: 'Join the sentences', kind: 'key', items: [
    '1 [After I got my degree, I went to work in London. / As soon as I got my degree, …]', '2 [Being an architect, I notice a lot about the buildings around me.]',
    '3 [Although I wasn\'t feeling well, I went to work yesterday. / Despite not feeling well, … / I wasn\'t feeling well. Nevertheless, I went to work.]',
    '4 [I\'ve bought a flat nearer my office so that I spend less time commuting. / … in order to spend less time commuting.]',
    '5 [Since I came to London, I\'ve made a lot of friends.]', '6 [Whenever I work in Rome, I like to visit the Coliseum.]',
    '7 [Having done some Italian classes, I can speak Italian with my colleagues now.]', '8 [Completed in 2012, the Shard is the tallest building in London.]',
  ] },
];
