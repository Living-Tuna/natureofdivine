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
  tagline: 'An exploration of the divine, consciousness, and the path to spiritual awakening.',
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
    'A quiet, honest book about God, consciousness, and what it really means to be human — written for people who like to think and long to feel.',
  category: 'Spiritual',
};

export const synopsis = `
<p class="mb-4 py-2 px-4 border-l-2 border-primary/20 italic text-xl md:text-2xl font-garamond leading-relaxed">
  "The ego is a heavy cloak. To know the Divine, one must learn to become as light as a feather."
</p>

<p class="mb-4">Most of us live with a noisy mind — replaying the past, planning the future, chasing answers that slip away the moment we reach for them. This book grew out of a quiet question: what if peace isn't something we need to earn, but something that is already here, underneath all that noise?</p>

<p class="mb-4"><i class="font-garamond">The Nature of the Divine</i> is not a religious book, and it isn't a philosophy lecture. It is a gentle, honest exploration of God, consciousness, and what it really means to be human — written for people who like to think, and who also long to feel.</p>

<p>Through simple reflections and short meditations, the author walks beside the reader rather than above them. If you have been searching for something real — something that stays steady when life gets heavy — this book is an invitation. Turn the page, and give yourself a quiet hour.</p>
`;

export const authorBio = `
<p class="mb-4">Alfas B writes the way he thinks — slowly, carefully, and from the heart. An engineer by training and a student of the inner life by calling, he spent years studying the great spiritual traditions and wondering why the wisdom so often felt far away from everyday living.</p>

<p>This book is his honest answer. No gurus, no jargon, no promises of instant enlightenment — just one person sharing what helped him find steadiness, clarity, and a deeper sense of purpose. He hopes it helps you find a little of the same.</p>
`;

export const sampleChapters = [
  {
    id: 'chapter-1',
    number: 1,
    title: "The Prime Mover (God)",
    content: `Chapter one looks honestly at the question most of us carry quietly: is there really something more? It steps away from old dogmas and worn-out arguments, and introduces a living, breathing understanding of the Divine — one you don't have to believe in, but can actually begin to feel.`,
    locked: false,
  },
  {
    id: 'chapter-2',
    number: 2,
    title: "The Divine Blueprint (Man)",
    content: `Chapter two turns the lens homeward. It asks what it truly means to be human, and why our inner world often feels so crowded. Through a simple, high-consequence habit of stillness, it shows that clarity is not something to chase — but something to uncover, moment by moment, breath by breath.`,
    locked: false,
  },
];

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
    badge: 'A quiet book for honest seekers',
    headlineTop: 'Nature of',
    headlineHighlight: 'the Divine',
    paragraph:
      'Sometimes the mind wants answers, and the heart wants peace. This book was written for people who need both — simple, honest, and deeply human, by',
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
    subtext: 'Pick a chapter. Take a deep breath. This is where it begins.',
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

// ── Header & navigation ─────────────────────────────────────────────────────
export const NAV = {
  brand: 'Nature of the Divine',
  links: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/#synopsis' },
    { label: 'Chapters', href: '/#chapters' },
  ],
  trackBooking: 'Track Booking',
  buyNow: 'Buy Now',
};

// ── Mobile bottom navigation ────────────────────────────────────────────────
export const BOTTOM_NAV = {
  home: 'Home',
  about: 'About',
  chapter: 'Chapter',
  track: 'Track',
  buyNow: 'Buy Now',
};

// ── Footer ──────────────────────────────────────────────────────────────────
export const FOOTER = {
  brand: 'Nature of the Divine',
  tagline: 'An exploration of the divine, consciousness, and the path to spiritual awakening.',
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
  defaultTitle: 'Nature of the Divine | A quiet book for honest seekers',
  titleTemplate: '%s | Nature of the Divine',
  description:
    'A quiet, honest book about God, consciousness, and being human — written by Alfas B for the thinking seeker.',
  keywords: [
    'Nature of the Divine',
    'Alfas B',
    'Spiritual Awakening',
    'Inner peace',
    'Meditation',
    'God and consciousness',
    'Meaning of life',
    'Self Realization',
    'Spiritual books',
  ],
  hashTags: '#NatureOfTheDivine #AlfasB',
  ogTitle: 'Nature of the Divine | Alfas B',
  ogDescription:
    'Sometimes the mind wants answers, and the heart wants peace. This book was written for people who need both.',
  ogImage: '/logo.svg',
  siteName: 'Nature of the Divine',
  locale: 'en_US',
  twitterTitle: 'Nature of the Divine — by Alfas B',
  twitterDescription: 'A quiet, honest book about God, consciousness, and being human.',
  twitterImage: '/logo.svg',
};

// ── Structured data (JSON-LD) ───────────────────────────────────────────────
export const SCHEMA = {
  isbn: '978-9334306514',
  publisher: 'Notion Press',
  datePublished: '2025-06-01',
  description:
    "A quiet, honest book about the mind, the divine, and what it means to be human. Written for people who like to think and long to feel — this is Alfas B's invitation to still the noise and begin.",
};

// ── Legal pages ─────────────────────────────────────────────────────────────
const contact = '<strong>' + SITE.name + '</strong><br />Email: ' + SITE.email + '<br />Phone: ' + SITE.phone;

export const LEGAL = {
  privacy: {
    title: 'Privacy Policy',
    body: `
<p>${contact}</p>
<p>At Nature of the Divine, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or engage with our services.</p>

<h2>1. Information We Collect</h2>
<p>We may collect the following types of personal information:</p>
<ul>
  <li>Name</li>
  <li>Email address</li>
  <li>Phone number</li>
  <li>Shipping and billing address</li>
  <li>Payment information (processed securely via third-party payment gateways)</li>
  <li>Any other information you provide voluntarily</li>
</ul>

<h2>2. How We Use Your Information</h2>
<p>We use the information we collect to:</p>
<ul>
  <li>Process your orders and payments</li>
  <li>Provide customer support and respond to inquiries</li>
  <li>Send order updates and promotional offers</li>
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
<p>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites.</p>

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
<p>Welcome to Nature of the Divine. By accessing or using our website or services, you agree to be bound by the following Terms and Conditions. Please read them carefully.</p>

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

<h2>5. Shipping and Delivery</h2>
<p>Shipping timelines and delivery estimates are provided on a best-effort basis.</p>
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
<p>At Nature of the Divine, we are committed to delivering your products in a timely and secure manner. Please read our shipping policy for details on how and when your order will be delivered.</p>

<h2>Shipping Coverage</h2>
<p>We currently ship across India. If your location is not serviceable, we will inform you promptly after order placement.</p>

<h2>Processing Time</h2>
<p>All orders are processed within 1–3 business days after receiving payment confirmation.</p>
<p>Orders are not shipped or delivered on Sundays or public holidays.</p>

<h2>Shipping Time</h2>
<p>Standard delivery takes 5–7 business days from the date of dispatch, depending on your location.</p>
<p>Delays may occur due to unforeseen circumstances or courier issues. We appreciate your understanding and patience in such cases.</p>

<h2>Shipping Charges</h2>
<p>Shipping charges, if any, will be mentioned at checkout before you complete your purchase.</p>
<p>We may offer free shipping on select products or order values from time to time.</p>

<h2>Order Tracking</h2>
<p>Once your order is shipped, you will receive a tracking ID and courier details via email or SMS to monitor the delivery status.</p>

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
<p>At Nature of the Divine, we strive to ensure that you are completely satisfied with your purchase. Please read our return and refund policy carefully to understand your rights and our obligations.</p>

<h2>Returns</h2>
<p>If you are not satisfied with your purchase, you may request a return within 7 days of receiving the product.</p>
<p>To be eligible for a return, the item must be unused, in its original condition, and in the original packaging.</p>
<p>You must provide proof of purchase (such as order confirmation or invoice).</p>
<p>As we will not provide any replacement or exchange, if you received any damaged or defective products, you should inform us within 48 hours of receiving the product to raise a return request. Once we approve the return, you should send back the product to the address from which it came to process the refund.</p>

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