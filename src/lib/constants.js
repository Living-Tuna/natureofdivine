// ─────────────────────────────────────────────────────────────────────────────
//  SITE CONTENT — edit everything about the site from this single file.
//  Plain JavaScript on purpose, so you can change any word without touching code.
// ─────────────────────────────────────────────────────────────────────────────

// ── Site identity ───────────────────────────────────────────────────────────
export const SITE = {
  name: 'Nature of the Divine',
  domain: 'natureofthedivine.com',
  email: 'natureofthedivine@gmail.com',
  phone: '8606281125',
  author: 'Alfas B',
  tagline: 'A spiritual philosophy book exploring God, consciousness, the soul journey, and the path to inner peace and spiritual awakening.',
};

// ── The book ────────────────────────────────────────────────────────────────
export const BOOK = {
  id: 'nature-of-the-divine',
  title: 'Nature of the Divine',
  author: 'Alfas B',
  price: 199,
  currency: 'INR',
  coverImage: 'https://res.cloudinary.com/dj2w2phri/image/upload/v1751279827/1_3_qzfmjp.png',
  description:
    'Nature of the Divine is a spiritual philosophy book about God, consciousness, the soul journey, and what it truly means to be human — written by Alfas B for the thinking, feeling seeker of inner peace and spiritual awakening.',
  category: 'Spiritual Philosophy',
};

// ── Synopsis ────────────────────────────────────────────────────────────────
export const synopsis = `
<p class="mb-4 py-2 px-4 border-l-2 border-primary/20 italic text-xl md:text-2xl font-garamond leading-relaxed">
  "The ego is a heavy cloak. To know the Divine, one must learn to become as light as a feather."
</p>

<p class="mb-4">Most of us carry a noisy mind — replaying the past, rehearsing the future, chasing answers that slip away the moment we reach for them. This book was born from a quiet question: <strong>what if peace is not something we must earn, but something that is already here, waiting beneath all that noise?</strong> That single question opens the door to a deeper study of consciousness, the soul journey, and divine intelligence.</p>

<p class="mb-4"><i class="font-garamond">Nature of the Divine</i> by Alfas B is not a religious book, and it is not an abstract philosophy lecture. It is a gentle, honest exploration of <strong>God, consciousness, and what it really means to be human</strong> — written for people who like to think, and who also long to feel. Whether you practice mindfulness meditation, want to understand the connection between science and spirituality, or are searching for guidance on your spiritual awakening, this book meets you where you are.</p>

<p class="mb-4">Through short reflections, simple meditations, and a practical approach to inner peace, the author walks beside the reader rather than above them. You will learn how stilling the mind can reveal clarity, how aligning with the divine can transform habit, and why the journey of self-realization is so much simpler than most spiritual books make it sound.</p>

<p>If you have been searching for something real — something that stays steady when life gets heavy — this book is an invitation to begin. Turn the page, give yourself a quiet hour, and discover what has been waiting underneath your own thoughts all along.</p>
`;

// ── Author bio ───────────────────────────────────────────────────────────────
export const authorBio = `
<p class="mb-4"><strong>Alfas B</strong> writes the way he thinks — slowly, carefully, and from the heart. An engineer by training and a student of the inner life by calling, he spent years studying the great spiritual traditions, from eastern meditation and mindfulness to the contemplative wisdom of the west. Along the way he kept asking one honest question: <em>why does spiritual wisdom so often feel far away from everyday living?</em></p>

<p class="mb-4">This book is his answer. No gurus, no jargon, no promises of instant enlightenment — just one person sharing what helped him find steadiness, clarity, and a deeper sense of purpose. Alfas writes in a warm, grounded, non-preachy voice, speaking to the reader as a fellow traveler on the soul journey rather than a teacher standing above them.</p>

<p>His work is built on the belief that spiritual awakening is not reserved for monks and mystics — it belongs to everyone willing to look inward. Through <i class="font-garamond">Nature of the Divine</i>, he hopes to help you still the noise, understand your own divine nature, and live with a little more peace. He hopes it helps you find a little of the same clarity he found.</p>
`;

// ── Sample / full chapters ──────────────────────────────────────────────────
// Every chapter drives a dedicated /chapters/[id] page for SEO.
export const allChapters = [
  {
    id: 'chapter-1',
    number: 1,
    title: 'The Prime Mover (God)',
    slug: 'the-prime-mover-god',
    tagline: 'A living, breathing understanding of the Divine that you can begin to feel.',
    content: `Chapter one looks honestly at the question most of us carry quietly: is there really something more? It steps away from old dogmas and worn-out arguments, and introduces a living, breathing understanding of the Divine — one you don't have to believe in, but can actually begin to feel.`,
    body: `
## Is there something more?

Most of us have stood at the edge of an ordinary evening and felt, for a moment, that there is more to this world than what the eye can see. This chapter begins there — not with arguments to be won, but with a question to be sat with.

We explore what the great traditions meant when they spoke of a Prime Mover, and why that idea still matters to a modern, scientifically-minded seeker. The divine, as described here, is not a distant judge but a quiet presence — closer to you than your own thoughts.

> "You do not need to climb toward the Divine. You need only to stop running from it."

## A God you can feel

The chapter clears away the noise of debate and dogma, and points instead to direct experience. Meditation, stillness, and honest attention are framed not as religious rituals but as practical technologies for meeting what is already within you.
`,
    locked: false,
  },
  {
    id: 'chapter-2',
    number: 2,
    title: 'The Divine Blueprint (Man)',
    slug: 'the-divine-blueprint-man',
    tagline: 'What it truly means to be human, and why the inner world feels so crowded.',
    content: `Chapter two turns the lens homeward. It asks what it truly means to be human, and why our inner world often feels so crowded. Through a simple, high-consequence habit of stillness, it shows that clarity is not something to chase — but something to uncover, moment by moment, breath by breath.`,
    body: `
## The crowded inner room

We rarely pause to ask: why is the mind so full? This chapter looks at human nature with honesty and warmth, exploring the ego, conditioning, and the endless inner commentary that keeps us from peace.

Understanding how the inner world is built is the first step toward transforming it. You will see why your thoughts run on repeat, and how that habit shapes everything — your mood, your relationships, and your sense of self.

> "Clarity is not added to the mind. It is uncovered from beneath the clutter."

## The habit of stillness

The chapter closes with a simple, high-consequence practice: a few minutes of true stillness each day. It shows that personal transformation does not require dramatic change — only gentle, consistent attention to what is already here, breath by breath.
`,
    locked: false,
  },
  {
    id: 'chapter-3',
    number: 3,
    title: 'The Theatre of the Mind',
    slug: 'the-theatre-of-the-mind',
    tagline: 'Observing your own thoughts from the seat of awareness.',
    content: `Chapter three invites you into the theatre of your own mind. Here the seeker learns to sit back and observe thoughts as they rise and fall, rather than being carried away by them — a doorway into mindfulness meditation and real inner peace.`,
    body: `
## Thoughts as passing players

Imagine your thoughts as actors on a stage. This chapter teaches you to recognize that you are not the thoughts — you are the one watching them. That shift, from being lost in thought to observing thought, is the heart of consciousness expansion.

We explore practical mindfulness meditation techniques for noticing the space between thoughts, and why that space is where clarity and peace actually live.

> "You are not your thoughts. You are the awareness in which they appear."
`,
    locked: true,
  },
  {
    id: 'chapter-4',
    number: 4,
    title: 'The Stillness Within',
    slug: 'the-stillness-within',
    tagline: 'Discovering the peace that has been there all along.',
    content: `Chapter four is a homecoming. After learning to observe the mind, the reader now turns toward the stillness beneath it — the quiet, unchanging presence that many traditions call the soul. Here, inner peace stops being a goal and becomes a discovered home.`,
    body: `
## Beneath the noise, stillness

This chapter guides the reader beneath the surface of thinking to the silent ground of being. It reframes meditation for inner peace not as effort, but as return — coming home to what was never lost.

Through simple reflection, you begin to sense the presence that remains steady when everything else moves.
`,
    locked: true,
  },
  {
    id: 'chapter-5',
    number: 5,
    title: 'The Soul Journey',
    slug: 'the-soul-journey',
    tagline: 'Life as a path of growth, not a problem to be solved.',
    content: `Chapter five reframes your whole life as a sacred journey. The soul journey is not about escaping the world but moving through it with awareness — turning setbacks into growth and daily life into practice.`,
    body: `
## Life as a path

This chapter re-frames the struggles of ordinary life as essential steps on the soul journey. Where most self-help asks you to fix yourself, this book invites you to discover who you have been all along.

You will learn how to meet challenges with curiosity rather than resistance, and how every moment becomes material for spiritual growth.
`,
    locked: true,
  },
  {
    id: 'chapter-6',
    number: 6,
    title: 'Divine Intelligence',
    slug: 'divine-intelligence',
    tagline: 'The quiet order that runs through all of life.',
    content: `Chapter six explores divine intelligence — the quiet, ordered intelligence that runs through nature, the body, and the universe. It dissolves the false war between faith and reason, showing how science and spirituality point to the same truth.`,
    body: `
## The intelligence in everything

From the turning of the seasons to the healing of a wound, an unfathomable intelligence is at work in all things. This chapter looks at that ordering principle and how we can align with it rather than fight it.

Aligning with the divine, the book argues, is not superstition — it is the art of living in harmony with the way things already work.
`,
    locked: true,
  },
  {
    id: 'chapter-7',
    number: 7,
    title: 'The Practice of Presence',
    slug: 'the-practice-of-presence',
    tagline: 'Bringing meditation off the cushion and into daily life.',
    content: `Chapter seven carries the wisdom into everyday living. Here the seeker learns how mindful living, attention, and compassion turn an ordinary day into a continuous meditation and a life aligned with the divine.`,
    body: `
## Meditation off the cushion

Meditation is not only something you sit down to do — it is a way of meeting every moment. This chapter offers practical guidance for bringing presence into work, relationships, and the small routines that fill a day.

It shows how the theory of the earlier chapters becomes a lived, integrated path.
`,
    locked: true,
  },
  {
    id: 'chapter-8',
    number: 8,
    title: 'Becoming Light',
    slug: 'becoming-light',
    tagline: 'The quiet culmination of the soul journey.',
    content: `In the final chapter, the journey reaches its natural end: a life lived lightly, from awareness rather than from the ego. Readers discover what it means to become 'as light as a feather' — free, present, and at peace.`,
    body: `
## The feather's freedom

The book returns to its opening image: the ego as a heavy cloak, the divine as lightness. By now the reader has the tools to set that cloak down. This chapter is an invitation to live not as a separate, striving self but as aware, aligned presence.

It ends where every genuine spiritual teaching ends — with the reader turned back toward their own life, ready to begin.
`,
    locked: true,
  },
];

// Keep `sampleChapters` for backwards compatibility on the homepage (first two chapters).
export const sampleChapters = allChapters.filter((c) => c.locked === false).map(({ body, ...rest }) => rest);

// ── Buy links ────────────────────────────────────────────────────────────────
export const buyLinks = [
  { name: 'Amazon', url: 'https://amzn.in/d/iPmewQL', visible: true },
  {
    name: 'Flipkart',
    url: 'https://www.flipkart.com/nature-divine-align/p/itm2433ecc20ab88?pid=9789334306514',
    visible: true,
  },
];

// ── Home / landing page ─────────────────────────────────────────────────────
export const HOME = {
  hero: {
    badge: 'A gentle spiritual guide for honest seekers',
    headlineTop: 'Nature of',
    headlineHighlight: 'the Divine',
    paragraph:
      'A spiritual philosophy book about God, consciousness, and the soul journey. Written for the thinking seeker who wants inner peace, clarity, and genuine spiritual awakening — simple, honest, and deeply human, by',
    byline: 'Alfas B',
    buyButton: 'Buy the Book',
    exploreButton: 'Explore the Wisdom',
    priceSuffix: 'Paperback · Free shipping, everywhere',
    features: [
      { icon: 'star', label: 'For the thinking seeker' },
      { icon: 'truck', label: 'Free shipping, worldwide' },
      { icon: 'shield', label: 'Paperback & Hardcover' },
    ],
  },
  quote:
    '"The ego is a heavy cloak. To know the Divine, one must learn to become as light as a feather."',
  synopsis: {
    label: 'A little about this book',
    heading: 'What it is really about',
  },
  chapters: {
    label: 'Have a look inside',
    heading: 'A few pages to start',
    subtext:
      'Pick a chapter. Take a deep breath. Explore the full chapter pages for meditation, consciousness, and spiritual awakening insights.',
  },
  author: {
    label: 'About the author',
    heading: 'Alfas B',
  },
  buy: {
    heading: 'Start with page one',
    subtext:
      "You don't have to read it all today. Just open the book and begin — the rest tends to unfold on its own.",
    buyNow: 'Buy Now',
    sample: 'Read a Sample',
    alsoOn: 'Also on',
  },
};

// ── FAQ section (SEO) ────────────────────────────────────────────────────────
export const HOME_FAQ = [
  {
    question: 'What is Nature of the Divine about?',
    answer:
      'Nature of the Divine is a spiritual philosophy book by Alfas B that explores God, consciousness, the soul journey, and what it truly means to be human. It is written for people who are spiritual but not necessarily religious, offering meditation practices and reflections for inner peace and spiritual awakening.',
  },
  {
    question: 'Who is Nature of the Divine written for?',
    answer:
      'It is written for the thinking, feeling seeker — anyone interested in meditation, mindfulness, consciousness, divine intelligence, and personal transformation. If you have ever searched for meaning beyond dogma and wanted practical inner peace, this book is for you.',
  },
  {
    question: 'Is this a religious book?',
    answer:
      'No. Nature of the Divine is not a religious book. It draws on the universal wisdom of the contemplative traditions and explores the connection between science and spirituality, but it stands outside any single religion and welcomes readers from every background.',
  },
  {
    question: 'What will I learn from reading it?',
    answer:
      'You will learn how to still a noisy mind, observe your thoughts instead of being carried by them, and uncover the inner peace and clarity that are already present beneath the mental chatter. The book offers both understanding and practical meditation for daily life.',
  },
  {
    question: 'How can I buy Nature of the Divine?',
    answer:
      'You can order the paperback or hardcover directly from this website with free worldwide shipping, or buy it from Amazon and Flipkart. Your order from this site is guaranteed to arrive in perfect condition.',
  },
];

// ── Blog ─────────────────────────────────────────────────────────────────────
export const BLOG = {
  title: 'Reflections on the Divine',
  tagline:
    'Thoughts on meditation, consciousness, the soul journey, and the questions most of us carry quietly — written by Alfas B for the thinking seeker.',
};

// Evergreen, SEO-focused blog posts (each drives a /blog/[slug] page).
export const blogPosts = [
  {
    slug: 'how-to-meditate-for-clarity',
    title: 'How to Meditate for Clarity: A Gentle 10-Minute Practice',
    excerpt:
      'A simple, honest guide to meditation for inner peace and mental clarity — no jargon, no religion, just a practical practice you can begin today.',
    coverImage:
      'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop',
    category: 'Meditation',
    date: '2026-06-10',
    readTime: '6 min read',
    keywords: ['meditation for clarity', 'mindfulness meditation', 'inner peace', 'meditation guide'],
    body: `
## Why meditation feels hard at first

If you have tried to meditate and given up, you are in good company. The mind rebels against stillness. But clarity is not something you force — it is something you uncover, gently, moment by moment.

This article offers a simple 10-minute practice for anyone who wants to meditate for mental clarity and inner peace, without any spiritual jargon.

## The 10-minute practice

1. **Sit comfortably** — on a chair or cushion. Let your spine be tall but relaxed.
2. **Close your eyes** — take three slow breaths, letting your shoulders drop.
3. **Rest attention on the breath** — feel the cool air entering, the warm air leaving.
4. **Notice your thoughts** — when the mind wanders (it will), simply begin again. No judgment.
5. **Return, again and again** — each return is a rep. That is the practice.

## Why it works

You are not trying to empty your mind. You are training awareness to notice when it has drifted — and that noticing is where clarity lives. Over time, the space between your thoughts grows, and peace becomes your default rather than your exception.

## Bring it into daily life

The same skill applies off the cushion. When you feel scattered, return to the breath for sixty seconds. That small act of return is mindfulness meditation in action, and it is the foundation of a spiritual awakening grounded in everyday experience.

*This reflection is drawn from the themes of* Nature of the Divine *by Alfas B — a spiritual philosophy book on consciousness, the soul journey, and inner peace.*
`,
  },
  {
    slug: 'signs-of-spiritual-growth',
    title: 'Signs of Spiritual Growth: How to Know You Are Changing',
    excerpt:
      'Spiritual awakening rarely arrives as a thunderbolt. Learn the quiet, unmistakable signs of spiritual growth and why the soul journey is measured in peace, not spectacle.',
    coverImage:
      'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1200&auto=format&fit=crop',
    category: 'Spiritual Awakening',
    date: '2026-05-22',
    readTime: '7 min read',
    keywords: ['signs of spiritual growth', 'spiritual awakening', 'soul journey', 'personal transformation'],
    body: `
## Growth speaks softly

We expect spiritual awakening to announce itself loudly — lights, revelations, a changed life overnight. In reality, genuine growth is quieter. It shows up not in what you feel during a meditation session, but in how you meet an ordinary Tuesday.

## Seven quiet signs

- **The mind is a little quieter** — you catch yourself before spiraling into worry.
- **Old triggers lose their sting** — people and events that once shook you now pass more gently.
- **You react less, respond more** — there is a pause between a stimulus and your reply.
- **Solitude feels fuller** — being alone no longer feels like being empty.
- **Compassion grows naturally** — you see the suffering in others without judgment.
- **You want less, not more** — inner peace starts to matter more than outer gain.
- **The present moment feels enough** — you are less anxious about the future, less haunted by the past.

## Progress is not a straight line

Spiritual growth is a spiral, not a line. You will revisit the same lessons at deeper levels. What matters is the overall direction: toward more awareness, more peace, more alignment with the divine.

## Measure peace, not spectacle

If you are wondering whether you are changing, do not ask how dramatic you feel. Ask whether you are more peaceful, more present, and more compassionate than you were a year ago. That is the real metric of the soul journey.

*This reflection expands on themes explored in* Nature of the Divine *by Alfas B — a book about consciousness, divine intelligence, and the path of spiritual awakening.*
`,
  },
  {
    slug: 'what-does-it-mean-to-know-god',
    title: 'What Does It Mean to \'Know God\'?',
    excerpt:
      'Knowing the divine is not the same as knowing facts about it. Explore the difference between intellectual belief and direct experience — and why transformation always follows the latter.',
    coverImage:
      'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1200&auto=format&fit=crop',
    category: 'Consciousness',
    date: '2026-04-15',
    readTime: '6 min read',
    keywords: ['knowing god', 'divine consciousness', 'spiritual experience', 'God and consciousness'],
    body: `
## Knowing about, versus knowing

There is a difference between knowing about the divine and knowing the divine — the same gap between reading about the ocean and standing in it. Most of us have only ever been handed information. This article is about the other kind of knowing.

## The limits of the mind

The mind thinks in concepts. It can catalogue religions, compare philosophies, and build theories about God. But the divine, as the great traditions all insist, is not an idea to be captured — it is a presence to be encountered.

> "You cannot think your way to the divine. You can only be present enough to meet it."

## Direct experience is the only doorway

This is where meditation, stillness, and honest attention become essential. They are not rituals or superstitions — they are the practical conditions under which direct spiritual experience becomes possible. When the noise of the mind settles, what remains is not nothing. It is presence.

## Why this matters for your life

Knowing about the divine changes your opinions. Knowing the divine changes your life. It alters how you handle stress, how you treat people, and most of all, how you see yourself. That is why the soul journey is not about collecting beliefs — it is about deepening direct experience.

*This essay is a companion to* Nature of the Divine *by Alfas B, a spiritual philosophy book exploring God, consciousness, and being human.*
`,
  },
  {
    slug: 'science-and-spirituality-connection',
    title: 'The Science and Spirituality Connection: Two Windows on One Truth',
    excerpt:
      'Modern science and ancient spirituality are not enemies — they are two languages describing the same reality. Explore how cosmology, meditation research, and divine intelligence converge.',
    coverImage:
      'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop',
    category: 'Science & Spirituality',
    date: '2026-03-03',
    readTime: '8 min read',
    keywords: ['science and spirituality connection', 'consciousness and the universe', 'divine intelligence', 'mindfulness research'],
    body: `
## A false war

For too long we have been told to choose: science or spirit. But this is a false choice. The deepest discoveries of physics describe an astonishingly ordered universe, while contemplative traditions have mapped the inner universe with remarkable precision. Both point toward the same truth — that reality is more subtle, and more whole, than our ordinary view suggests.

## What the contemplative traditions knew

The great meditation traditions described consciousness as the ground of experience thousands of years ago. They insisted that the observer and the observed are not separate, and that a deeper intelligence runs through all things — what Nature of the Divine calls divine intelligence.

## What modern science is discovering

Research into mindfulness meditation now shows measurable changes in the brain: reduced stress, improved focus, greater emotional balance. Cosmology reveals a universe fine-tuned for life in ways that still surprise physicists. The convergence is striking.

## Aligning with the whole

When science and spirituality are honoured together, they stop being rivals and become allies. You can be both deeply rational and genuinely spiritual. You can interrogate everything and still bow before the mystery. In fact, that combination is the most honest position of all.

## A quiet harmony

The soul journey does not ask you to abandon your reason. It asks you to expand it — to include what the heart and the stillness reveal, alongside what the laboratory confirms. That wider view is where peace, clarity, and meaning are found.

*This reflection is drawn from themes in* Nature of the Divine *by Alfas B, a spiritual philosophy book on consciousness and divine intelligence.*
`,
  },
  {
    slug: 'how-to-align-with-the-divine',
    title: 'How to Align with the Divine: A Practical Guide to Daily Life',
    excerpt:
      'Alignment is not about perfecting your circumstances — it is about harmonizing your inner state with the quiet intelligence that already runs through all of life.',
    coverImage:
      'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=1200&auto=format&fit=crop',
    category: 'Mindful Living',
    date: '2026-02-14',
    readTime: '7 min read',
    keywords: ['how to align with the divine', 'daily spiritual habits', 'mindful living', 'inner peace'],
    body: `
## What alignment really means

To align with the divine is not to force your life into a perfect shape. It is to bring your inner state into harmony with the intelligence that already runs through nature, your body, and the whole of life. Alignment is a matter of inner order, not outer control.

## Four daily spiritual habits

1. **Begin with stillness** — take three minutes of silence before you pick up your phone.
2. **Meet one thing fully** — drink your tea, or walk, or listen, with complete attention.
3. **Pause before reacting** — breathe once before responding to anything that stirs you.
4. **End with gratitude** — close the day by naming one quiet thing you are thankful for.

## Why small habits matter

Transformation does not arrive in dramatic episodes. It accumulates in the small, repeated choices of an ordinary day. These habits are not chores — they are ways of reminding yourself, again and again, of what you truly are.

## The peace that follows

When your inner state is aligned, your outer life settles. Problems remain, but they no longer shake you. You discover an inner peace that does not depend on circumstances — the peace that Nature of the Divine describes as already present beneath the noise of the mind.

*This guide expands on themes in* Nature of the Divine *by Alfas B, a spiritual philosophy book about mindfulness, consciousness, and the soul journey.*
`,
  },
];

// ── Header & navigation ─────────────────────────────────────────────────────
export const NAV = {
  brand: 'Nature of the Divine',
  links: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#synopsis' },
    { label: 'Chapters', href: '/chapters' },
    { label: 'Blog', href: '/blog' },
  ],
  trackBooking: 'Track Booking',
  buyNow: 'Buy Now',
};

// ── Mobile bottom navigation ────────────────────────────────────────────────
export const BOTTOM_NAV = {
  home: 'Home',
  about: 'About',
  chapter: 'Chapters',
  blog: 'Blog',
  track: 'Track',
  buyNow: 'Buy Now',
};

// ── Footer ──────────────────────────────────────────────────────────────────
export const FOOTER = {
  brand: 'Nature of the Divine',
  tagline: 'A spiritual philosophy book exploring God, consciousness, the soul journey, and the path to inner peace and spiritual awakening.',
  legalHeading: 'Legal & Support',
  connect: 'Connect',
  socials: [
    { platform: 'Twitter', href: '#' },
    { platform: 'Facebook', href: '#' },
    { platform: 'Instagram', href: '#' },
  ],
  contactLabel: 'Email',
  rightsNote:
    'All content on this website, including the text of the book, is the intellectual property of its author.',
  designedBy: 'Crafted with care.',
};

// ── SEO / metadata ──────────────────────────────────────────────────────────
export const META = {
  defaultTitle: 'Nature of the Divine | A Spiritual Philosophy Book by Alfas B',
  titleTemplate: '%s | Nature of the Divine',
  description:
    'Nature of the Divine is a spiritual philosophy book by Alfas B about God, consciousness, the soul journey, and inner peace. Explore meditation, mindfulness, and spiritual awakening — read the book, journal, or start today.',
  keywords: [
    'Nature of the Divine',
    'Nature of the Divine book Alfas B',
    'spiritual philosophy book',
    'book on consciousness',
    'spiritual awakening',
    'meditation for inner peace',
    'mindfulness meditation',
    'divine intelligence',
    'cosmic consciousness',
    'soul journey',
    'personal transformation',
    'how to meditate for clarity',
    'signs of spiritual growth',
    'science and spirituality connection',
    'self realization',
    'inner peace',
    'mindful living',
    'meaning of life',
  ],
  hashTags: '#NatureOfTheDivine #AlfasB',
  ogTitle: 'Nature of the Divine | A Spiritual Philosophy Book by Alfas B',
  ogDescription:
    'A gentle, honest book about God, consciousness, and being human — written by Alfas B for the thinking, feeling seeker of inner peace and spiritual awakening.',
  ogImage: '/logo.svg',
  siteName: 'Nature of the Divine',
  locale: 'en_US',
  twitterTitle: 'Nature of the Divine — by Alfas B',
  twitterDescription:
    'A spiritual philosophy book about God, consciousness, the soul journey, and inner peace.',
  twitterImage: '/logo.svg',
};

// ── Structured data (JSON-LD) ───────────────────────────────────────────────
export const SCHEMA = {
  isbn: '978-9334306514',
  publisher: 'Notion Press',
  datePublished: '2025-06-01',
  description:
    'Nature of the Divine is a spiritual philosophy book by Alfas B exploring God, consciousness, the soul journey, and what it means to be human. A guide to meditation, inner peace, and spiritual awakening — written for people who like to think and long to feel.',
  bookGenre: 'Religion & Spirituality',
  audience: 'Spiritual seekers, meditators, the spiritually curious',
};

// ── Legal pages ─────────────────────────────────────────────────────────────
const contact = '<strong>' + SITE.name + '</strong><br />Email: ' + SITE.email + '<br />Phone: ' + SITE.phone;

export const LEGAL = {
  privacy: {
    title: 'Privacy Policy',
    body: `
<p>${contact}</p>
<p>At Nature of the Divine, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or engage with our services, including when you purchase the book <em>"Nature of the Divine"</em> by Alfas B.</p>

<h2>1. Information We Collect</h2>
<p>To process orders and improve our spiritual book website, we may collect the following types of personal information:</p>
<ul>
  <li>Your name</li>
  <li>Email address</li>
  <li>Phone number</li>
  <li>Shipping and billing address</li>
  <li>Payment information (processed securely via third-party payment gateways such as PhonePe)</li>
  <li>Order history and booking IDs for tracking your purchase</li>
  <li>Any other information you provide voluntarily</li>
</ul>

<h2>2. How We Use Your Information</h2>
<p>We use the information we collect to:</p>
<ul>
  <li>Process your orders and payments securely</li>
  <li>Provide customer support and respond to inquiries</li>
  <li>Send order updates, shipping tracking, and, with your consent, occasional reflections</li>
  <li>Improve our website, products, and services</li>
  <li>Comply with legal requirements</li>
</ul>

<h2>3. Sharing of Information</h2>
<p>We do not sell, trade, or rent your personal information to others. Your information may be shared with:</p>
<ul>
  <li>Trusted third-party service providers (e.g., courier companies, payment processors) strictly for order fulfillment and related services</li>
  <li>Government or legal authorities, if required by law</li>
</ul>

<h2>4. Data Security</h2>
<p>We implement appropriate technical and organizational measures to protect your personal data from unauthorized access, loss, misuse, or disclosure.</p>

<h2>5. Cookies and Tracking</h2>
<p>Our website may use cookies and similar technologies to enhance user experience, analyze website traffic, and personalize content. You can manage cookie preferences through your browser settings.</p>

<h2>6. Third-Party Links</h2>
<p>Our website may contain links to third-party websites (such as Amazon and Flipkart). We are not responsible for the privacy practices or content of those sites.</p>

<h2>7. Your Rights</h2>
<p>You have the right to:</p>
<ul>
  <li>Access the personal information we hold about you</li>
  <li>Request correction or deletion of your information</li>
  <li>Opt out of receiving marketing communications at any time</li>
</ul>

<h2>8. Changes to This Policy</h2>
<p>We reserve the right to update or change this Privacy Policy at any time. Any changes will be posted on this page, and your continued use of the website constitutes acceptance of the revised policy.</p>

<h2>9. Contact Us</h2>
<p>If you have any questions or concerns regarding this Privacy Policy or the handling of your information, please contact us at:<br />
Email: ${SITE.email}<br />
Phone: ${SITE.phone}</p>
`,
  },
  terms: {
    title: 'Terms and Conditions',
    body: `
<p>${contact}</p>
<p>Welcome to Nature of the Divine. By accessing or using our website or services — including ordering the spiritual book <em>"Nature of the Divine"</em> by Alfas B — you agree to be bound by the following Terms and Conditions. Please read them carefully.</p>

<h2>1. Acceptance of Terms</h2>
<p>By accessing this website and/or placing an order, you agree to be legally bound by these terms. If you do not agree with any of these terms, you should not use our website or services.</p>

<h2>2. Use of the Website</h2>
<p>You agree to use the website only for lawful purposes and in a way that does not infringe the rights of others.</p>
<p>You must not misuse this website by introducing viruses, trojans, or other malicious material.</p>

<h2>3. Product and Service Information</h2>
<p>We strive to ensure all product descriptions, pricing, and availability are accurate. However, we do not guarantee the accuracy of all content and reserve the right to correct errors or update information at any time without prior notice.</p>
<p>Product colors may slightly vary due to screen settings.</p>

<h2>4. Orders and Payments</h2>
<p>All orders are subject to acceptance and availability.</p>
<p>Prices for products are subject to change without notice.</p>
<p>We reserve the right to refuse or cancel any order for any reason, including errors in pricing or stock availability.</p>
<p>Payments are processed securely and may include Cash on Delivery (COD) or prepaid options such as UPI, cards, and net banking.</p>

<h2>5. Shipping and Delivery</h2>
<p>Shipping timelines and delivery estimates are provided on a best-effort basis. Refer to our Shipping Policy for full details, including free worldwide shipping on eligible orders.</p>
<p>Delays caused by courier services or unforeseen events are beyond our control.</p>

<h2>6. Returns and Refunds</h2>
<p>Please refer to our Return and Refund Policy for detailed information. Any return request must comply with our stated return guidelines.</p>

<h2>7. Intellectual Property</h2>
<p>All content on this website (text, images, logos, etc.) is the property of the author and is protected under applicable intellectual property laws.</p>
<p>You may not reproduce, duplicate, copy, sell, or exploit any portion of the site without express written permission.</p>

<h2>8. Limitation of Liability</h2>
<p>We shall not be held liable for any direct, indirect, incidental, or consequential damages arising from your use of our website or products.</p>

<h2>9. Privacy</h2>
<p>Please refer to our Privacy Policy to understand how we collect, use, and protect your information.</p>

<h2>10. Changes to Terms</h2>
<p>We reserve the right to modify or replace these Terms at any time. Your continued use of the website following changes constitutes acceptance of those changes.</p>

<h2>11. Governing Law</h2>
<p>These terms and conditions shall be governed by and construed in accordance with the laws of India.</p>

<p class="mt-6"><em>Written and managed by ${SITE.author}.</em></p>
`,
  },
  shipping: {
    title: 'Shipping Policy',
    body: `
<p>${contact}</p>
<p>At Nature of the Divine, we are committed to delivering your copy of the spiritual book <em>"Nature of the Divine"</em> in a timely and secure manner. Please read our shipping policy for details on how and when your order will be delivered.</p>

<h2>Shipping Coverage</h2>
<p>We currently ship across India with free worldwide shipping also available on eligible orders. If your location is not serviceable, we will inform you promptly after order placement.</p>

<h2>Processing Time</h2>
<p>All orders are processed within 1–3 business days after receiving payment confirmation (or after order placement for Cash on Delivery).</p>
<p>Orders are not shipped or delivered on Sundays or public holidays.</p>

<h2>Shipping Time</h2>
<p>Standard delivery takes 5–7 business days from the date of dispatch, depending on your location.</p>
<p>Delays may occur due to unforeseen circumstances or courier issues. We appreciate your understanding and patience in such cases.</p>

<h2>Shipping Charges</h2>
<p>We offer <strong>free shipping</strong> on orders placed through this website. Shipping charges, if any, will be mentioned at checkout before you complete your purchase.</p>

<h2>Order Tracking</h2>
<p>Once your order is shipped, you will receive a tracking ID and courier details via email or SMS to monitor the delivery status. You can also track your booking at any time using your Booking ID.</p>

<h2>Incorrect Address or Delivery Issues</h2>
<p>Please ensure that the shipping address and contact details provided are accurate.</p>
<p>We are not responsible for orders delivered to incorrectly provided addresses or unclaimed deliveries.</p>

<h2>Damaged Packages</h2>
<p>If the package appears damaged or tampered with upon delivery, please do not accept it and contact us immediately.</p>

<h2>Contact Us</h2>
<p>For any questions or concerns about your order or shipping, please contact:<br/>
Email: ${SITE.email}<br/>
Phone: ${SITE.phone}</p>
`,
  },
  returns: {
    title: 'Return and Refund Policy',
    body: `
<p>${contact}</p>
<p>At Nature of the Divine, we strive to ensure that you are completely satisfied with your purchase of <em>"Nature of the Divine"</em> by Alfas B. Please read our return and refund policy carefully to understand your rights and our obligations.</p>

<h2>Returns</h2>
<p>If you are not satisfied with your purchase, you may request a return within 7 days of receiving the product.</p>
<p>To be eligible for a return, the item must be unused, in its original condition, and in the original packaging.</p>
<p>You must provide proof of purchase (such as order confirmation or invoice).</p>
<p>If you received any damaged or defective products, please inform us within 48 hours of receiving the product to raise a return request. Once we approve the return, you should send back the product to the address from which it came to process the refund.</p>

<h2>Refunds</h2>
<p>Once we receive and inspect the returned product, we will notify you about the approval or rejection of your refund.</p>
<p>If approved, your refund will be credited to your original method of payment within 7–10 business days.</p>
<p>Shipping charges are non-refundable unless the return is due to our error or a defective product.</p>

<h2>Cancellations</h2>
<p>Orders once placed can only be canceled within 12 hours or before dispatch, whichever is earlier.</p>

<h2>Contact Us</h2>
<p>For any queries related to returns or refunds, you may reach us at:<br/>
Email: ${SITE.email}<br/>
Phone: ${SITE.phone}</p>
`,
  },
};
