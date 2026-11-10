/* ------------------------------------------------------------------
   BakeLoveAffair: everything you might want to edit lives in this file.
   No prices anywhere, on purpose.
------------------------------------------------------------------- */
window.SITE = {
  // WhatsApp number in international format, digits only, no "+" or spaces.
  // Example for a German mobile: '4915112345678'
  whatsapp: '4915165026942',
  instagram: 'https://www.instagram.com/bakeloveaffair/',
  handle: '@bakeloveaffair',
  defaultMessage: 'Hi BakeLoveAffair! I found you through your website and would love to ask about a cake.',
};

/* Categories shown as filter chips. */
window.CATEGORIES = [
  { id: 'theme', label: 'Theme cakes' },
  { id: 'cheesecake', label: 'Cheesecakes' },
  { id: 'celebration', label: 'Celebration cakes' },
];

/* The cakes.
   To add one: put a photo in assets/img/ and copy a block below.
   - id      = photo file name without ".jpg"
   - cat     = one of the category ids above
   - facts   = short label/value pairs shown in the detail card
   - reel    = the code from the Instagram link (instagram.com/reel/THIS_PART/), optional
   - hero    = true to include it in the rotating photo at the top */
window.CAKES = [
  {
    id: 'stitch-cake', cat: 'theme', hero: true, tint: 'lav',
    title: 'Stitch + Angel', tag: 'Theme cake',
    quote: 'Double the mischief, double the love.',
    desc: 'A blush-pink buttercream cake with Stitch and Angel toppers, piped purple borders, sugar flowers and a shower of sprinkles. Made for a birthday, and easy to re-dress with any favourite character.',
    facts: [
      ['Style', 'Character theme cake'],
      ['Finish', 'Buttercream with handmade decorations'],
      ['Flavour', 'Your choice. Tell her your favourite'],
      ['Lovely for', 'Kids’ birthdays, fans of all ages'],
    ],
    reel: 'DZ79R3bKUqP',
  },
  {
    id: 'pistachio-cheesecake', cat: 'cheesecake', hero: true, tint: 'mint',
    title: 'Pistachio Cheesecake', tag: 'No-bake cheesecake',
    quote: 'Smooth cheesecake, nutty flavor, and pure dessert bliss in every bite.',
    desc: 'A no-bake cheesecake on a buttery biscuit base. The filling is cream cheese and cream whipped with pistachio spread, topped with a glossy pistachio swirl and a ring of chopped pistachios.',
    facts: [
      ['Style', 'No-bake cheesecake'],
      ['Flavour', 'Pistachio'],
      ['Base', 'Butter biscuit'],
      ['Lovely for', 'Dinner parties, pistachio lovers'],
    ],
    reel: 'DaLlMyuqBod',
  },
  {
    id: 'pink-cake', cat: 'celebration', hero: true, tint: 'pink',
    title: 'Pretty in Pink', tag: 'Birthday cake',
    quote: 'Pretty in pink.',
    desc: 'A tall, softly ridged buttercream cake crowned with piped pink rosettes, pearls, gold details and fresh baby’s breath, finished with a golden number topper.',
    facts: [
      ['Style', 'Floral buttercream cake'],
      ['Finish', 'Rosettes, pearls, baby’s breath'],
      ['Flavour', 'Your choice. Tell her your favourite'],
      ['Lovely for', 'Birthdays and milestones'],
    ],
    reel: 'De4jOLKifKE',
  },
  {
    id: 'minions-cake', cat: 'theme', hero: true, tint: 'butter',
    title: 'Minion Kit Kat Cake', tag: 'Theme cake',
    quote: 'Minions + Kit Kat = the ultimate sweet chaos!',
    desc: 'A fluffy Kit Kat-flavoured cake packed with chocolate crunch, dressed up as a Minion with goggles, dungarees and a burst of stars around the birthday number.',
    facts: [
      ['Style', 'Character theme cake'],
      ['Flavour', 'Kit Kat and chocolate crunch'],
      ['Finish', 'Handmade Minion details'],
      ['Lovely for', 'Birthday parties, your inner kid'],
    ],
    reel: 'DZp6SlUCOdP',
  },
  {
    id: 'coconut-cake', cat: 'celebration', tint: 'butter',
    title: 'Coconut Mascarpone', tag: 'Cream cake',
    quote: 'Coconut + mascarpone = pure cake happiness.',
    desc: 'A soft coconut cake layered with mascarpone cream and finished in a simple swirl of coconut. Light, creamy and not too sweet.',
    facts: [
      ['Style', 'Cream cake'],
      ['Flavour', 'Coconut and mascarpone'],
      ['Finish', 'Coconut swirl'],
      ['Lovely for', 'Anniversaries, family coffee and cake'],
    ],
    reel: 'DZR3CutiwzS',
  },
  {
    id: 'brain-cake', cat: 'theme', tint: 'pink',
    title: 'The Brain Cake', tag: 'Halloween theme cake',
    quote: 'Serving some serious food for thought this spooky season.',
    desc: 'A Halloween showpiece: hand-piped pink “brain” swirls over a domed cake, glazed with a glossy red drizzle. Spooky to look at, sweet to slice.',
    facts: [
      ['Style', 'Halloween theme cake'],
      ['Finish', 'Hand-piped, glossy red glaze'],
      ['Flavour', 'Your choice. Tell her your favourite'],
      ['Lovely for', 'Halloween parties, brave guests'],
    ],
    reel: 'DehiXPAC76V',
  },
];
