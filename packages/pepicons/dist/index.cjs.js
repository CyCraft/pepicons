'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/** Do not edit! This file is auto-generated. */
const pepiconArray = ['airplane', 'alarm', 'angle-down', 'angle-left', 'angle-right', 'angle-up', 'arrow-down', 'arrow-down-left', 'arrow-down-right', 'arrow-left', 'arrow-right', 'arrow-up', 'arrow-up-left', 'arrow-up-right', 'bank', 'battery', 'bell', 'bell-off', 'bicycle', 'bluetooth', 'book', 'bookmark', 'bookmark-filled', 'briefcase', 'building', 'calculator', 'calendar', 'camera', 'can', 'car', 'cart', 'cellphone-eye', 'cellphone-loop', 'chain', 'checkmark', 'circle', 'circle-filled', 'clipboard', 'clipboard-check', 'clipboard-check-circle', 'clock', 'cloud', 'cloud-down', 'cloud-down-filled', 'cloud-filled', 'cloud-up', 'cloud-up-filled', 'coctail', 'code', 'color-picker', 'contract', 'controller', 'countdown', 'credit-card', 'crown', 'cup', 'cv', 'division', 'dots-x', 'dots-y', 'dress', 'duplicate', 'electricity', 'enter', 'exclamation', 'exclamation-circle', 'exclamation-filled', 'expand', 'eye', 'eye-closed', 'eye-frame', 'eye-off', 'fast-forward', 'file', 'file-loop', 'film-frame', 'fire', 'flag', 'flag-straight', 'flower', 'flower-bud', 'folder', 'folding-stool', 'gear', 'gear-filled', 'gift', 'grab', 'hamburger', 'hand-grab', 'hand-open', 'hand-point', 'hand-point-open', 'handshake', 'hash', 'headphone', 'heart', 'hourglass', 'house', 'identification', 'info', 'info-circle', 'info-filled', 'internet', 'key', 'knive-fork', 'label', 'leave', 'letter', 'letter-open', 'list', 'lock-closed', 'lock-open', 'loop', 'loop-minus', 'loop-plus', 'magnet', 'map', 'megaphone', 'menu', 'microphone', 'microphone2', 'minus', 'monitor', 'monitor-eye', 'monitor-loop', 'monitor2', 'moon', 'moon-filled', 'motorcycle', 'move-x', 'move-y', 'music-note-double', 'music-note-single', 'next-track', 'open', 'paint-pallet', 'pause', 'pen', 'people', 'person', 'person-checkmark', 'person-filled', 'person-plus', 'persons', 'phone', 'photo', 'photo-camera', 'photo-studio', 'pill', 'pin', 'pinpoint', 'pinpoint-filled', 'pinpoint-off', 'pinpoint-off-filled', 'play', 'plus', 'power', 'previous-track', 'printer', 'qr-code', 'question', 'question-circle', 'question-filled', 'radio', 'refresh', 'reload', 'repeat', 'rewind', 'rewind-time', 'scissors', 'send', 'share-android', 'share-ios', 'shuffle', 'sliders', 'smartphone', 'smartphone-notch', 'smartphone2', 'soft-drink', 'sort', 'speaker-high', 'speaker-low', 'speaker-off', 'square', 'square-filled', 'star', 'star-filled', 'stopwatch', 'studio-backdrop', 'studio-light-front', 'studio-light-side', 'sun', 'sun-filled', 'syringe', 't-shirt', 'taxi', 'television', 'text-bubble', 'thumbs-down', 'thumbs-up', 'times', 'tool', 'train', 'trash', 'triangle-down', 'triangle-down-filled', 'triangle-left', 'triangle-left-filled', 'triangle-right', 'triangle-right-filled', 'triangle-up', 'triangle-up-filled', 'trophy', 'truck', 'umbrella', 'watch', 'water-drop', 'wifi'];

/** Do not edit! This file is auto-generated. */
const categories = ['ui', 'transport', 'time', 'text', 'sound', 'social', 'shape', 'nature', 'location', 'leisure', 'item', 'hand', 'food-drinks', 'device', 'arrows'];
const pepiconCategoryDic = {
    'airplane': 'transport',
    'alarm': 'time',
    'angle-down': 'arrows',
    'angle-left': 'arrows',
    'angle-right': 'arrows',
    'angle-up': 'arrows',
    'arrow-down': 'arrows',
    'arrow-down-left': 'arrows',
    'arrow-down-right': 'arrows',
    'arrow-left': 'arrows',
    'arrow-right': 'arrows',
    'arrow-up': 'arrows',
    'arrow-up-left': 'arrows',
    'arrow-up-right': 'arrows',
    'bank': 'location',
    'battery': 'device',
    'bell': 'sound',
    'bell-off': 'sound',
    'bicycle': 'transport',
    'bluetooth': 'ui',
    'book': 'leisure',
    'bookmark': 'text',
    'bookmark-filled': 'text',
    'briefcase': 'item',
    'building': 'location',
    'calculator': 'device',
    'calendar': 'time',
    'camera': 'device',
    'can': 'food-drinks',
    'car': 'transport',
    'cart': 'leisure',
    'cellphone-eye': 'ui',
    'cellphone-loop': 'ui',
    'chain': 'ui',
    'checkmark': 'ui',
    'circle': 'shape',
    'circle-filled': 'shape',
    'clipboard': 'text',
    'clipboard-check': 'text',
    'clipboard-check-circle': 'text',
    'clock': 'time',
    'cloud': 'ui',
    'cloud-down': 'ui',
    'cloud-down-filled': 'ui',
    'cloud-filled': 'ui',
    'cloud-up': 'ui',
    'cloud-up-filled': 'ui',
    'coctail': 'food-drinks',
    'code': 'ui',
    'color-picker': 'ui',
    'contract': 'arrows',
    'controller': 'leisure',
    'countdown': 'time',
    'credit-card': 'item',
    'crown': 'item',
    'cup': 'food-drinks',
    'cv': 'social',
    'division': 'shape',
    'dots-x': 'ui',
    'dots-y': 'ui',
    'dress': 'item',
    'duplicate': 'ui',
    'electricity': 'nature',
    'enter': 'ui',
    'exclamation': 'text',
    'exclamation-circle': 'text',
    'exclamation-filled': 'text',
    'expand': 'arrows',
    'eye': 'ui',
    'eye-closed': 'ui',
    'eye-frame': 'ui',
    'eye-off': 'ui',
    'fast-forward': 'sound',
    'file': 'ui',
    'file-loop': 'ui',
    'film-frame': 'leisure',
    'fire': 'nature',
    'flag': 'location',
    'flag-straight': 'location',
    'flower': 'nature',
    'flower-bud': 'nature',
    'folder': 'ui',
    'folding-stool': 'device',
    'gear': 'ui',
    'gear-filled': 'ui',
    'gift': 'social',
    'grab': 'ui',
    'hamburger': 'food-drinks',
    'hand-grab': 'hand',
    'hand-open': 'hand',
    'hand-point': 'hand',
    'hand-point-open': 'hand',
    'handshake': 'hand',
    'hash': 'ui',
    'headphone': 'sound',
    'heart': 'social',
    'hourglass': 'time',
    'house': 'location',
    'identification': 'item',
    'info': 'text',
    'info-circle': 'text',
    'info-filled': 'text',
    'internet': 'location',
    'key': 'item',
    'knive-fork': 'food-drinks',
    'label': 'ui',
    'leave': 'ui',
    'letter': 'social',
    'letter-open': 'social',
    'list': 'ui',
    'lock-closed': 'item',
    'lock-open': 'item',
    'loop': 'ui',
    'loop-minus': 'ui',
    'loop-plus': 'ui',
    'magnet': 'item',
    'map': 'transport',
    'megaphone': 'item',
    'menu': 'ui',
    'microphone': 'sound',
    'microphone2': 'leisure',
    'minus': 'shape',
    'monitor': 'device',
    'monitor-eye': 'ui',
    'monitor-loop': 'ui',
    'monitor2': 'device',
    'moon': 'nature',
    'moon-filled': 'nature',
    'motorcycle': 'transport',
    'move-x': 'arrows',
    'move-y': 'arrows',
    'music-note-double': 'sound',
    'music-note-single': 'sound',
    'next-track': 'sound',
    'open': 'ui',
    'paint-pallet': 'leisure',
    'pause': 'sound',
    'pen': 'text',
    'people': 'social',
    'person': 'social',
    'person-checkmark': 'social',
    'person-filled': 'social',
    'person-plus': 'social',
    'persons': 'social',
    'phone': 'social',
    'photo': 'item',
    'photo-camera': 'device',
    'photo-studio': 'location',
    'pill': 'item',
    'pin': 'item',
    'pinpoint': 'location',
    'pinpoint-filled': 'location',
    'pinpoint-off': 'location',
    'pinpoint-off-filled': 'location',
    'play': 'sound',
    'plus': 'shape',
    'power': 'ui',
    'previous-track': 'sound',
    'printer': 'device',
    'qr-code': 'ui',
    'question': 'text',
    'question-circle': 'text',
    'question-filled': 'text',
    'radio': 'sound',
    'refresh': 'arrows',
    'reload': 'arrows',
    'repeat': 'sound',
    'rewind': 'sound',
    'rewind-time': 'time',
    'scissors': 'item',
    'send': 'social',
    'share-android': 'social',
    'share-ios': 'social',
    'shuffle': 'sound',
    'sliders': 'ui',
    'smartphone': 'device',
    'smartphone-notch': 'device',
    'smartphone2': 'device',
    'soft-drink': 'food-drinks',
    'sort': 'arrows',
    'speaker-high': 'sound',
    'speaker-low': 'sound',
    'speaker-off': 'sound',
    'square': 'shape',
    'square-filled': 'shape',
    'star': 'nature',
    'star-filled': 'nature',
    'stopwatch': 'time',
    'studio-backdrop': 'location',
    'studio-light-front': 'device',
    'studio-light-side': 'device',
    'sun': 'nature',
    'sun-filled': 'nature',
    'syringe': 'item',
    't-shirt': 'item',
    'taxi': 'transport',
    'television': 'device',
    'text-bubble': 'social',
    'thumbs-down': 'social',
    'thumbs-up': 'social',
    'times': 'shape',
    'tool': 'ui',
    'train': 'transport',
    'trash': 'ui',
    'triangle-down': 'shape',
    'triangle-down-filled': 'shape',
    'triangle-left': 'shape',
    'triangle-left-filled': 'shape',
    'triangle-right': 'shape',
    'triangle-right-filled': 'shape',
    'triangle-up': 'shape',
    'triangle-up-filled': 'shape',
    'trophy': 'item',
    'truck': 'transport',
    'umbrella': 'item',
    'watch': 'time',
    'water-drop': 'nature',
    'wifi': 'ui',
};

/** Do not edit! This file is auto-generated. */
const synonyms$1 = {
    'airplane': ['aeroplane', 'fly', 'travel', 'vacation', 'trip', 'flight', 'airport'],
    'alarm': ['alarm-clock', 'siren', 'bell', 'wake-up', 'early', 'timer'],
    'angle-down': ['arrow-down', 'chevron-down', 'bracket-down', 'to-bottom', 'go-down'],
    'angle-left': ['arrow-left', 'chevron-left', 'bracket-left', 'bracket-open', 'opening-bracket', 'less-than', 'back', 'previous', 'before'],
    'angle-right': ['arrow-right', 'chevron-right', 'bracket-right', 'bracket-close', 'closing-bracket', 'greater-than', 'more-than', 'next', 'after', 'forward'],
    'angle-up': ['arrow-up', 'chevron-up', 'bracket-up', 'to-top', 'go-up'],
    'arrow-down': ['south', 'point', 'bolt', 'dart', 'compass', 'direction', 'needle', 'orientation', 'to-bottom', 'go-down'],
    'arrow-down-left': ['south-west', 'point', 'bolt', 'dart', 'compass', 'direction', 'needle', 'orientation'],
    'arrow-down-right': ['south-east', 'point', 'bolt', 'dart', 'compass', 'direction', 'needle', 'orientation'],
    'arrow-left': ['west', 'point', 'bolt', 'dart', 'compass', 'direction', 'needle', 'orientation', 'previous', 'back', 'before'],
    'arrow-right': ['east', 'point', 'bolt', 'dart', 'compass', 'direction', 'needle', 'orientation', 'next', 'after', '', 'next', 'after', 'forward'],
    'arrow-up': ['north', 'point', 'bolt', 'dart', 'compass', 'direction', 'needle', 'orientation', 'to-top', 'go-up'],
    'arrow-up-left': ['north-west', 'point', 'bolt', 'dart', 'compass', 'direction', 'needle', 'orientation'],
    'arrow-up-right': ['north-east', 'point', 'bolt', 'dart', 'compass', 'direction', 'needle', 'orientation'],
    'bank': ['finance', 'financial-institution', 'money', 'cash', 'savings', 'investment', 'lending', 'loans', 'reserve', 'stock-market', 'payment', 'deposit'],
    'battery': ['charge'],
    'bell': ['notification', 'attention', 'alert'],
    'bell-off': ['no-notification', 'no-attention', 'quiet', 'silent', 'no-alert'],
    'bicycle': ['bike'],
    'bluetooth': [],
    'book': ['read', 'bookmark'],
    'bookmark': ['flag', 'clip'],
    'bookmark-filled': ['flag', 'clip'],
    'briefcase': ['handbag', 'shoulder-bag', 'container', 'luggage', 'travel', 'work'],
    'building': ['office', 'sky-scraper', 'business', 'work', 'workplace', 'headquarters', 'enterprise', 'company', 'firm', 'bureau', 'agency', 'corporation'],
    'calculator': ['calculate'],
    'calendar': ['date', 'when', 'event', 'deadline'],
    'camera': ['record', 'video'],
    'can': ['pepsi', 'soft-drink', 'fizzy', 'cola', 'cold-drink', 'refresher', 'juice'],
    'car': ['automobile', 'drive'],
    'cart': ['shopping', 'payout', 'commerce', 'transaction', 'buy', 'purchase'],
    'cellphone-eye': ['preview', 'document', 'analysis', 'evaluation', 'assessment', 'examination', 'check', 'inspection', 'probe', 'audit', 'survey', 'browse'],
    'cellphone-loop': ['preview', 'document', 'analysis', 'evaluation', 'assessment', 'examination', 'check', 'inspection', 'probe', 'audit', 'survey', 'browse'],
    'chain': ['link', 'url', 'anchor', 'open', 'website', 'shackle', 'connect', 'bond', 'bind', 'joint', 'knot'],
    'checkmark': ['check', 'toggle', 'tick', 'ok', 'confirmed'],
    'circle': ['bullet', 'ball'],
    'circle-filled': ['bullet', 'ball'],
    'clipboard': ['copy', 'duplicate', 'paste'],
    'clipboard-check': ['copy', 'duplicate', 'paste'],
    'clipboard-check-circle': ['copy', 'duplicate', 'paste'],
    'clock': ['time', 'timer', 'countdown', 'deadline', 'hour', 'watch'],
    'cloud': ['upload', 'online', 'storage', 'save'],
    'cloud-down': ['download', 'storage', 'retrieve', 'fetch', 'local', 'load'],
    'cloud-down-filled': ['download', 'storage', 'retrieve', 'fetch', 'local', 'load'],
    'cloud-filled': ['upload', 'online', 'storage', 'save'],
    'cloud-up': ['upload', 'storage', 'save'],
    'cloud-up-filled': ['upload', 'storage', 'save'],
    'coctail': ['alcohol', 'tropical'],
    'code': ['programming', 'coding', 'html', 'xml'],
    'color-picker': [],
    'contract': ['shrink', 'close', 'zoom-out', 'minimize'],
    'controller': ['video-game', 'console'],
    'countdown': ['timer', 'clock', 'stopwatch'],
    'credit-card': ['master-card', 'visa', 'cashless', 'payment', 'checkout'],
    'crown': ['coronet', 'diadem', 'tiara', 'circlet', 'title', 'award', 'accolade', 'honor', 'honour', 'distinction', 'glory', 'kudos', 'trophy', 'cup', 'medal', 'monarch', 'sovereign', 'king', 'queen', 'emperor', 'empress'],
    'cup': ['coffee', 'hot-drink'],
    'cv': ['life-history', 'biography', 'details', 'curriculum-vitae', 'entry', 'participation', 'candidate', 'applicant', 'submission', 'submit', 'apply', 'enter', 'interview'],
    'division': ['divide'],
    'dots-x': ['dots-horizontal', 'more', 'details', 'menu'],
    'dots-y': ['dots-vertical', 'more', 'details', 'menu'],
    'dress': ['one-piece', 'clothing', 'gown', 'frock', 'garment'],
    'duplicate': ['copy'],
    'electricity': ['thunder', 'lightning'],
    'enter': ['login', 'log-in', 'signin', 'sign-in', 'join', 'embark', 'start', 'begin', 'into', 'enlist', 'entrance', 'submit', 'advance', 'register'],
    'exclamation': ['bang', 'exclamation-mark', 'exclamation-point', 'shriek', 'pling', 'note-of-admiration', 'warning', 'danger', 'error'],
    'exclamation-circle': ['bang', 'exclamation-mark', 'exclamation-point', 'shriek', 'pling', 'note-of-admiration', 'warning', 'danger', 'error'],
    'exclamation-filled': ['bang', 'exclamation-mark', 'exclamation-point', 'shriek', 'pling', 'note-of-admiration', 'warning', 'danger', 'error'],
    'expand': ['fullscreen', 'open', 'zoom-in', 'maximize'],
    'eye': ['password-visible', 'see', 'watch', 'awake'],
    'eye-closed': ['password-hidden', 'invisible', 'hide', 'secret', 'asleep'],
    'eye-frame': ['preview', 'document', 'analysis', 'evaluation', 'assessment', 'examination', 'check', 'inspection', 'probe', 'audit', 'survey', 'browse'],
    'eye-off': ['password-hidden', 'invisible', 'hide', 'secret', 'not-allowed', 'no-access'],
    'fast-forward': ['audio', 'media-controls', 'music'],
    'file': ['document', 'record', 'note', 'data', 'archive'],
    'file-loop': ['preview', 'document', 'analysis', 'evaluation', 'assessment', 'examination', 'check', 'inspection', 'probe', 'audit', 'survey', 'browse'],
    'film-frame': ['picture', 'movie', 'roll', 'feature', 'tv', 'television', 'programme', 'motion-picture', 'animation', 'flick', 'cinema'],
    'fire': ['inferno', 'ablaze', 'combustion', 'flames', 'heat', 'warmth', 'ignite', 'burn', 'fiery', 'popular', 'trending', 'attention', 'important', 'dangerous'],
    'flag': ['banner', 'country', 'important', 'pin'],
    'flag-straight': ['banner', 'country', 'important', 'pin'],
    'flower': ['tulip'],
    'flower-bud': ['daisy'],
    'folder': ['container', 'binder', 'files', 'archive', 'save', 'record', 'keep'],
    'folding-stool': ['directors-chair', 'seat', 'photo-shoot', 'modelling', 'filming'],
    'gear': ['settings', 'cogwheel', 'configuration', 'mechanical', 'machinery'],
    'gear-filled': ['settings', 'cogwheel', 'configuration', 'mechanical', 'machinery'],
    'gift': ['present', 'surprise', 'give'],
    'grab': ['handle', 'move', 'drag'],
    'hamburger': ['fast-food'],
    'hand-grab': ['hold', 'take', 'move', 'drag'],
    'hand-open': ['hello', 'greeting', 'salutation', 'raise-hand'],
    'hand-point': ['direction', 'extend', 'finger', 'touch'],
    'hand-point-open': ['direction', 'extend', 'finger', 'thumb', 'touch'],
    'handshake': ['grasp', 'greeting', 'touch', 'agreement', 'deal', 'pact', 'arrangement', 'business', 'friendship'],
    'hash': ['hashtag', 'tag', 'pound-key'],
    'headphone': ['headset', 'earphone', 'music', 'listen', 'anc'],
    'heart': ['love', 'like'],
    'hourglass': ['sandglass', 'countdown', 'stopwatch', 'clock'],
    'house': ['home', 'residence'],
    'identification': ['id', 'papers', 'identity', 'bona fides', 'credentials', 'id-card', 'pass', 'badge', 'warrant', 'licence', 'permit', 'passport', 'proof-of-identity', 'certificate', 'diploma'],
    'info': ['information', 'help', 'hint', 'guide', 'tooltip'],
    'info-circle': ['information', 'help', 'hint', 'guide', 'tooltip'],
    'info-filled': ['information', 'help', 'hint', 'guide', 'tooltip'],
    'internet': ['web', 'cyber', 'remote'],
    'key': ['lock', 'unlock', 'encrypt', 'decrypt', 'safe', 'secret', 'solution', 'answer'],
    'knive-fork': ['eat', 'cutlery'],
    'label': ['tag', 'flag', 'ticket', 'badge'],
    'leave': ['logout', 'log-out', 'sign-out', 'signout', 'stop', 'depart', 'retire', 'withdraw', 'exit', 'abandon', 'quit', 'resign', 'retire', 'gone'],
    'letter': ['email', 'post', 'inbox'],
    'letter-open': ['offered', 'offer-letter', 'invitation', 'message', 'written', 'communication', 'note', 'report', 'correspondence', 'information', 'intelligence', 'mail', 'post'],
    'list': ['to-do', 'todo', 'items', 'sort', 'organise', 'organize', 'tasks', 'sheet', 'entries', 'register', 'directory', 'catalogue', 'inventory', 'index', 'checklist', 'table'],
    'lock-closed': ['lock', 'encrypt'],
    'lock-open': ['unlock', 'decrypt'],
    'loop': ['zoom', 'magnify', 'detective'],
    'loop-minus': ['zoom-out', 'magnify-out', 'farther', 'further'],
    'loop-plus': ['zoom-in', 'magnify-in', 'closer'],
    'magnet': ['attraction', 'repel', 'repulsion'],
    'map': ['location', 'directions'],
    'megaphone': ['public-speaker', 'speech', 'lecture', 'yell', 'shout', 'announce', 'broadcast', 'proclaim', 'disclose'],
    'menu': ['hamburger', 'list', 'align', 'text', 'show-more'],
    'microphone': ['record', 'voice', 'radio'],
    'microphone2': ['record', 'voice', 'radio', 'talent', 'idol', 'music', 'dance', 'singing', 'performance', 'live'],
    'minus': ['dash', 'hyphen', 'line'],
    'monitor': ['computer', 'desktop', 'screen'],
    'monitor-eye': ['preview', 'document', 'analysis', 'evaluation', 'assessment', 'examination', 'check', 'inspection', 'probe', 'audit', 'survey', 'browse'],
    'monitor-loop': ['preview', 'document', 'analysis', 'evaluation', 'assessment', 'examination', 'check', 'inspection', 'probe', 'audit', 'survey', 'browse'],
    'monitor2': ['computer', 'desktop', 'screen'],
    'moon': ['dark-mode', 'night', 'lights-out'],
    'moon-filled': ['dark-mode', 'lights-out'],
    'motorcycle': ['bike'],
    'move-x': ['x-axis', 'width', 'drag', 'left-right', 'expand', 'grow', 'stretch'],
    'move-y': ['y-axis', 'height', 'drag', 'up-down', 'expand', 'grow', 'stretch'],
    'music-note-double': ['score', 'solfege', 'song'],
    'music-note-single': ['score', 'solfege', 'song'],
    'next-track': ['audio', 'media-controls', 'music'],
    'open': ['link', 'new-tab', 'external', 'go'],
    'paint-pallet': ['painter', 'art'],
    'pause': ['audio', 'media-controls', 'music'],
    'pen': ['edit', 'write', 'pencil', 'draw', 'modify', 'update'],
    'people': ['3-persons', '3-people', 'group', 'following', 'crowd', 'band', 'gathering', 'company', 'assembly', 'association', 'club', 'society', 'guild', 'league', 'union', 'mass', 'triplet', 'accounts'],
    'person': ['human', 'man', 'someone', 'unknown', 'identity', 'profile', 'you', 'account'],
    'person-checkmark': ['added', 'friends', 'know', 'following'],
    'person-filled': ['human', 'man', 'someone', 'unknown', 'identity', 'profile', 'you', 'account'],
    'person-plus': ['friend', 'plus', 'cross', 'add', 'new', 'follow'],
    'persons': ['human', 'man', 'someone', 'unknown', 'identity', 'profile', 'you', '2-persons', '2-people', 'pair', 'partnership', 'couple', 'duo', 'duplet', 'accounts'],
    'phone': ['call', 'talk', 'telephone'],
    'photo': ['photograph', 'picture', 'shot', 'snap', 'image', 'camera-roll'],
    'photo-camera': ['photography', 'shutter', 'picture'],
    'photo-studio': ['backdrop', 'photo-shoot', 'modelling', 'filming'],
    'pill': ['medicine', 'capsule', 'pellet', 'doctor', 'sick', 'disease', 'cure', 'drugs'],
    'pin': ['nail', 'peg', 'stick', 'attach', 'fix', 'keep'],
    'pinpoint': ['location-marker', 'pin', 'position', 'map', 'here', 'where'],
    'pinpoint-filled': ['location-marker', 'pin', 'position', 'map', 'here', 'where'],
    'pinpoint-off': ['location-marker-off', 'pin', 'position', 'map', 'here', 'where'],
    'pinpoint-off-filled': ['location-marker-off', 'pin', 'position', 'map', 'here', 'where'],
    'play': ['audio', 'media-controls', 'music'],
    'plus': ['cross', 'add', 'new'],
    'power': ['turn-off', 'shut-down'],
    'previous-track': ['audio', 'media-controls', 'music'],
    'printer': ['pdf'],
    'qr-code': ['bar-code', 'barcode', 'scan'],
    'question': ['inquiry', 'query', 'interrogate', 'doubt', 'quiz', 'help', 'hint', 'tooltip'],
    'question-circle': ['inquiry', 'query', 'interrogate', 'doubt', 'quiz', 'help', 'hint', 'tooltip'],
    'question-filled': ['inquiry', 'query', 'interrogate', 'doubt', 'quiz', 'help', 'hint', 'tooltip'],
    'radio': ['music', 'listening', 'podcast'],
    'refresh': ['reload', 'fetch', 'twist', 'turn', 'go-round', 'spin'],
    'reload': ['refresh', 'turn', 'start-over', 'back', 'around', 'spin'],
    'repeat': ['audio', 'media-controls', 'music'],
    'rewind': ['audio', 'media-controls', 'music'],
    'rewind-time': ['turn-back-time', 'go-back', 'previous'],
    'scissors': ['cut', 'hair', 'clippers', 'shears', 'trimmer', 'barber', 'stylist', 'beauty-parlor', 'coiffeuse', 'coiffeur'],
    'send': ['email', 'paper-plane'],
    'share-android': ['forward', 'connect'],
    'share-ios': ['forward', 'connect'],
    'shuffle': ['audio', 'media-controls', 'music'],
    'sliders': ['settings', 'options', 'configuration', 'toggles', 'filters', 'knobs'],
    'smartphone': ['iphone', 'mobile-phone', 'cell-phone', 'gsm'],
    'smartphone-notch': ['iphone', 'mobile-phone', 'cell-phone', 'gsm'],
    'smartphone2': ['iphone', 'mobile-phone', 'cell-phone', 'gsm'],
    'soft-drink': ['cold-drink', 'refresher', 'juice'],
    'sort': ['order', 'arrows', 'arrange', 'organise', 'organize', 'rate', 'tabulate'],
    'speaker-high': ['high-volume', 'loud'],
    'speaker-low': ['low-volume', 'quiet'],
    'speaker-off': ['no-volume', 'silent'],
    'square': [],
    'square-filled': [],
    'star': ['favourite', 'favorite', 'rate', 'rating', 'score', 'flag'],
    'star-filled': ['favourite', 'favorite', 'rate', 'rating', 'score', 'flag'],
    'stopwatch': ['alarm', 'timer', 'clock', 'countdown', 'race', 'track', 'pedometer'],
    'studio-backdrop': ['photo-shoot', 'modelling', 'filming'],
    'studio-light-front': ['lamp', 'beacon', 'photo-shoot', 'modelling', 'filming'],
    'studio-light-side': ['lamp', 'beacon', 'photo-shoot', 'modelling', 'filming'],
    'sun': ['light-mode', 'day', 'lights-on', 'brightness'],
    'sun-filled': ['light-mode', 'lights-on', 'brightness'],
    'syringe': ['hypodermic', 'injection', 'vaccine', 'vaccination', 'doctor', 'sick', 'disease', 'cure', 'drugs'],
    't-shirt': ['clothing'],
    'taxi': ['cab'],
    'television': ['tv', 'telly'],
    'text-bubble': ['message', 'chat', 'say', 'typing'],
    'thumbs-down': ['dislike', 'hate', 'vote', 'downvote', 'gesture', 'block'],
    'thumbs-up': ['like', 'love', 'vote', 'upvote', 'gesture', 'favorite', 'favourite'],
    'times': ['cross', 'x', 'wrong', 'close', 'stop'],
    'tool': ['wrench', 'hardware', 'fix', 'repair', 'bolt'],
    'train': ['tube', 'metro'],
    'trash': ['delete', 'remove', 'dispense', 'trashcan', 'can', 'garbage'],
    'triangle-down': ['arrow-down'],
    'triangle-down-filled': ['arrow-down'],
    'triangle-left': ['arrow-left'],
    'triangle-left-filled': ['arrow-left'],
    'triangle-right': ['arrow-right'],
    'triangle-right-filled': ['arrow-right'],
    'triangle-up': ['arrow-up'],
    'triangle-up-filled': ['arrow-up'],
    'trophy': ['cup', 'medal', 'prize', 'award', 'accolade', 'honour', 'distinction', 'glory', 'kudos', 'holy-grail'],
    'truck': ['heavy-goods-vehicle', 'juggernaut', 'van', 'pickup', 'lorry', 'move', 'wares', 'deliver', 'haul', 'distribution', 'delivery'],
    'umbrella': ['parasol', 'rain'],
    'watch': ['wristwatch', 'time', 'clock', 'pocket-watch'],
    'water-drop': ['aqua', 'liquid', 'drip', 'sprinkle', 'wet', 'damp', 'moist', 'spray', 'soak', 'splash', 'dilute'],
    'wifi': ['internet', 'reception', 'connection', 'sonic', 'waves'],
};

/** This file is to be manually edited. */
const synonyms = {
    'airplane': ['飛行機', '飛ぶ', '飛行', '旅行', '休暇', '旅'],
    'angle-down': ['下矢印', '下', 'やじるし', '矢印', '下がる'],
    'angle-left': ['左矢印', '左', '矢印', 'やじるし', '戻る', '小なり', '山かっこ', '山括弧'],
    'angle-right': ['右矢印', '右', '矢印', 'やじるし', '大なり', '進む', '山かっこ', '山括弧'],
    'angle-up': ['上矢印', '上', '矢印', 'やじるし'],
    'arrow-down': ['下矢印'],
    'arrow-down-left': ['左下矢印'],
    'arrow-down-right': ['右下矢印'],
    'arrow-left': ['左矢印'],
    'arrow-right': ['右矢印'],
    'arrow-up': ['上矢印'],
    'arrow-up-left': ['左上矢印'],
    'arrow-up-right': ['右上矢印'],
    'battery': ['充電', 'バッテリー', '電池'],
    'bell': ['ベル', '通知', '警告', '注意', '鐘', '鈴'],
    'bell-off': ['ベル', '消音', '静か', 'サイレント', '鐘', '鈴'],
    'bicycle': ['自転車', '乗り物', 'サイクリング'],
    'bluetooth': ['ブルートゥース'],
    'book': ['本', '読書', 'ブックマーク', '読む'],
    'bookmark': ['ブックマーク', 'クリップ', 'お気に入り'],
    'bookmark-filled': ['ブックマーク', 'クリップ', 'お気に入り'],
    'building': [
        'ビル',
        'オフィス',
        'ビジネス',
        '仕事',
        '会社',
        '企業',
        '職場',
        '法人',
        '事務所',
        '建物',
    ],
    'calculator': ['電卓', '計算', '会計'],
    'calendar': ['カレンダー', '予定', 'スケジュール', 'いつ'],
    'camera': ['ビデオカメラ', '記録', 'ビデオ', '動画', 'ムービー', '映画'],
    'can': [
        'カン',
        '缶',
        'ペプシ',
        'ソフトドリンク',
        '炭酸',
        'コーラ',
        'コールドドリンク',
        'リフレッシュ',
        '缶ジュース',
        '飲み物',
    ],
    'car': ['車', '乗り物', '自動車', '運転'],
    'cart': ['カート', 'ショッピングカート', '買い物', '支払い', '通販', '買う', '購入'],
    'chain': ['チェーン', 'リンク'],
    'checkmark': ['チェック', 'チェックマーク', 'しるし', 'ok', '確認済み'],
    'circle': ['丸', '円', 'ボール'],
    'circle-filled': ['丸', '円', 'ボール'],
    'clipboard': ['クリップボード', 'コピー'],
    'clock': ['時計', '時間', 'アラーム', 'タイマー', 'カウントダウン'],
    'cloud': [
        '雲',
        'アップロード',
        'オンライン',
        '容量',
        'ストレージ',
        '保存',
        'クラウド',
        '天気',
        'くもり',
    ],
    'cloud-down': ['ダウンロード', '容量', 'ストレージ', '保存', 'クラウド', '天気', 'くもり'],
    'cloud-down-filled': ['ダウンロード', 'ストレージ', '保存', 'クラウド'],
    'cloud-filled': [
        '雲',
        'アップロード',
        'オンライン',
        'ストレージ',
        '保存',
        'クラウド',
        '天気',
        'くもり',
    ],
    'cloud-up': ['アップロード', 'ストレージ', '保存', 'クラウド'],
    'cloud-up-filled': ['アップロード', 'ストレージ', '保存', 'クラウド'],
    'coctail': [
        'カクテル',
        'お酒',
        'トロピカル',
        'アルコール',
        'バー',
        '飲み物',
        'ドリンク',
        'グラス',
    ],
    'color-picker': ['スポイト', 'カラーピッカー'],
    'contract': ['縮小', '閉じる', 'ズームアウト'],
    'controller': ['コントローラー', 'ゲーム', '遊び'],
    'credit-card': [
        'クレジットカード',
        'マスターカード',
        'visa',
        'キャッシュレス',
        '支払い',
        'チェックアウト',
        'カード',
    ],
    'code': ['コード'],
    'cv': ['履歴'],
    'flag-straight': ['旗'],
    'letter-open': ['手紙'],
    'crown': ['王冠'],
    'cup': ['カップ', 'コーヒー', 'ホットドリンク', '飲み物', 'カフェ', 'ティーカップ'],
    'division': ['割る', '計算'],
    'dots-x': ['三点リーダー', '点', '詳細', 'メニュー'],
    'dots-y': ['三点リーダー', '点', '詳細', 'メニュー'],
    'dress': ['ワンピース', '服', 'ドレス'],
    'duplicate': ['コピー', '複製'],
    'electricity': ['カミナリ', '雷', '稲妻', '天気'],
    'enter': ['入る', 'サインイン', 'ログイン'],
    'exclamation': ['ビックリマーク', 'エクスクラメーションマーク', '注意', '警告', '危険', '注目'],
    'exclamation-filled': [
        'ビックリマーク',
        'エクスクラメーションマーク',
        '注意',
        '警告',
        '危険',
        '注目',
    ],
    'expand': ['拡大', 'フルスクリーン', '開く', 'ズームイン', '最大化'],
    'eye': ['目', 'パスワードを見る', '見る', '気づく', '起きる'],
    'eye-closed': ['目', 'パスワードを隠す', '見える', '隠す', '秘密', '寝る'],
    'eye-off': ['非表示', '目', '隠す', '秘密', '見えない'],
    'file': ['ファイル', '記録', 'ノート', 'データ', 'アーカイブ', 'ドキュメント', '文書'],
    'film-frame': ['映画', '動画', 'ムービー', '再生', 'プログラム', 'ドラマ', 'シネマ'],
    'flag': ['旗', '国', '重要', 'ピン'],
    'flower': ['花', 'チューリップ'],
    'flower-bud': ['花', 'つぼみ'],
    'folder': ['ファイル', 'フォルダー', 'アーカイブ', '保存', '記録'],
    'gear': ['歯車', '設定', 'コンフィグ', 'ギア', 'セッティング'],
    'gift': [
        'ギフト',
        'プレゼント',
        'サプライズ',
        '贈る',
        '贈り物',
        '誕生日',
        'バースデープレゼント',
    ],
    'grab': ['メニュー', 'インターフェース', 'ナビゲーション'],
    'hamburger': ['ハンバーガー', 'ファストフード', '食事'],
    'hash': ['ハッシュタグ'],
    'headphone': ['ヘッドホン', 'ヘッドセット', 'イヤホン', 'ミュージック', '音楽', '聴く', '視聴'],
    'heart': ['ハート', 'ラブ', '好き'],
    'house': ['家', '住宅', '家庭', 'ホーム'],
    'identification': ['身分証明'],
    'info': ['インフォメーション', 'ヘルプ', 'ヒント', 'ガイド'],
    'info-filled': ['インフォメーション', 'ヘルプ', 'ヒント', 'ガイド'],
    'internet': ['地球', 'インターネット', 'サイバー', 'ネット'],
    'key': ['鍵', 'カギ', 'ロック', 'アンロック', '暗号化', '複合化', '安全', '秘密', '解決', '答え'],
    'knive-fork': ['カトラリー', 'ナイフ', 'フォーク', '食事'],
    'label': ['ラベル', 'タグ'],
    'leave': ['出る', 'ログアウト', 'サインアウト'],
    'letter': ['手紙', 'メール', '送信', '受信', 'コンタクト', '封筒'],
    'list': ['リスト'],
    'lock-closed': ['ロック', '暗号化', 'セキュリティ', '南京錠', 'パスワード'],
    'lock-open': ['アンロック', '複合化', '南京錠', 'セキュリティ', 'パスワード'],
    'loop': ['虫眼鏡', 'ズーム', '拡大', '検索', '調査'],
    'loop-minus': ['ズームアウト', '縮小'],
    'loop-plus': ['ズームイン', '拡大'],
    'magnet': ['マグネット', '磁石'],
    'map': ['地図', '現在地', '目的地', '位置', '場所'],
    'megaphone': ['メガホン'],
    'microphone': ['マイク', '録音', '音声', 'ラジオ'],
    'minus': ['マイナス', '引く', 'ハイフン', '線', '計算'],
    'monitor': ['モニター', 'パソコン', 'コンピューター', 'デスクトップ', 'スクリーン'],
    'monitor2': ['モニター', 'パソコン', 'コンピューター', 'デスクトップ', 'スクリーン'],
    'moon': ['月', 'ダークモード', '夜', '消灯', 'おやすみ', '天気'],
    'moon-filled': ['月', 'ダークモード', '夜', '消灯', 'おやすみ'],
    'motorcycle': ['バイク', '乗り物', '運転'],
    'move-x': ['横ドラッグ'],
    'move-y': ['縦ドラッグ'],
    'music-note-double': ['８分音符', '音符', '曲', '歌', '音楽', 'ミュージック'],
    'music-note-single': ['８分音符', '音符', '曲', '歌', '音楽', 'ミュージック'],
    'open': ['開く', '新しいウィンドウ'],
    'paint-pallet': ['パレット', 'ペイント', 'アート'],
    'pen': ['ペン', '編集', '書く', '鉛筆', '描く'],
    'people': ['三人', '人々'],
    'person': ['人', '人間', '人物', '誰か', '個性', 'プロフィール', '君'],
    'person-checkmark': ['人チェックマーク'],
    'person-filled': ['人', '人間', '人物', '誰か', '個性', 'プロフィール', '君'],
    'person-plus': ['人プラス'],
    'persons': ['二人', '人々'],
    'phone': ['受話器', '電話', '通話'],
    'photo': ['写真'],
    'photo-camera': ['カメラ', 'シャッター', '写真'],
    'pill': ['薬', 'カプセル', '錠剤', 'ドクター', '病気', '治す', 'ドラッグ', '治療'],
    'pinpoint': ['ピン', '現在地', ' 位置', '地図', 'ここ', '場所', 'マップ'],
    'pinpoint-filled': ['ピン', '現在地', ' 位置', '地図', 'ここ', '場所', 'マップ'],
    'pinpoint-off': ['現在地オフ', 'ピン', '現在地', ' 位置', '地図', 'ここ', '場所', 'マップ'],
    'pinpoint-off-filled': [
        '現在地オフ',
        'ピン',
        '現在地',
        ' 位置',
        '地図',
        'ここ',
        '場所',
        'マップ',
    ],
    'plus': ['プラス', '足す', '加える', '新しい', '計算'],
    'power': ['電源', 'オフ', 'シャットダウン', 'ボタン'],
    'printer': ['プリンター', '印刷'],
    'qr-code': ['QRコード'],
    'refresh': ['更新', 'リロード', 'アップデート'],
    'reload': ['更新', 'やり直し', '再読み込み', '戻る'],
    'scissors': [
        'ハサミ',
        'はさみ',
        'カット',
        '切る',
        '髪',
        '切り取り',
        'トリミング',
        '理容室',
        'ヘアサロン',
        '美容室',
        'スタイリスト',
        '美容師',
    ],
    'send': ['紙飛行機', 'メール', '送信', '送る'],
    'share-android': ['シェア', '共有'],
    'share-ios': ['シェア', '共有'],
    'smartphone': ['スマートフォン', 'スマホ', 'アイフォン', '携帯電話', '電話'],
    'smartphone2': ['スマートフォン', 'スマホ', 'アイフォン', '携帯電話', '電話'],
    'smartphone-notch': ['スマートフォン', 'スマホ', 'アイフォン', '携帯電話', '電話'],
    'soft-drink': ['ソフトドリンク', 'コールドドリンク', 'リフレッシュ', 'ジュース', '飲み物'],
    'sort': ['ソート'],
    'speaker-high': ['音量', 'スピーカー', '大きく', 'ボリューム', '音声', 'サウンド'],
    'speaker-low': ['音量', 'スピーカー', '小さく', 'ボリューム', '音声', 'サウンド'],
    'speaker-off': [
        '音量オフ',
        'サイレント',
        'スピーカー',
        '小さく',
        'ボリューム',
        '音声',
        'サウンド',
    ],
    'square': ['四角'],
    'square-filled': ['四角'],
    'star': ['星', 'お気に入り', 'スター', 'ブックマーク'],
    'star-filled': ['星', 'お気に入り', 'スター', 'ブックマーク'],
    'sun': ['太陽', 'ライトモード', '日', 'おはよう', '明るい', '天気'],
    'sun-filled': ['太陽', 'ライトモード', '日', 'おはよう', '明るい', '天気'],
    'syringe': ['注射器', 'ワクチン', '予防接種', '医者', '病気', '治療', '薬'],
    't-shirt': ['Tシャツ', '服', '着る'],
    'taxi': ['タクシー', '乗り物'],
    'television': ['テレビ', 'モニター'],
    'text-bubble': ['吹き出し', 'メッセージ', 'チャット', '言う', 'タイピング'],
    'thumbs-down': ['いいね'],
    'thumbs-up': ['好きじゃない'],
    'times': ['クロス', 'エックス', '不正解', '間違い', 'クローズ', '止める', '計算', '掛ける'],
    'tool': ['レンチ', '工具', '修理', '直す', 'ボルト'],
    'train': ['電車', 'メトロ', '地下鉄', '乗り物'],
    'trash': ['ゴミ箱', '消去', '捨てる', '分別', '廃棄物'],
    'triangle-down': ['三角', '下矢印'],
    'triangle-down-filled': ['三角', '下矢印'],
    'triangle-left': ['三角', '左矢印'],
    'triangle-left-filled': ['三角', '左矢印'],
    'triangle-right': ['三角', '右矢印'],
    'triangle-right-filled': ['三角', '右矢印'],
    'triangle-up': ['三角', '上矢印'],
    'triangle-up-filled': ['三角', '上矢印'],
    'trophy': ['トロフィー', '賞品', '景品'],
    'truck': ['トラック', 'バン', 'ピックアップ', '運送', '荷物', '配送', '運搬', '流通', '乗り物'],
    'umbrella': ['傘', 'パラソル', '雨', '天気'],
    'wifi': ['ワイファイ', 'インターネット', '通信', '電波'],
    'alarm': [],
    'bank': [],
    'briefcase': [],
    'cellphone-eye': [],
    'cellphone-loop': [],
    'countdown': [],
    'exclamation-circle': [],
    'eye-frame': [],
    'fast-forward': [],
    'file-loop': [],
    'fire': [],
    'folding-stool': [],
    'gear-filled': [],
    'hand-grab': [],
    'hand-open': [],
    'hand-point': [],
    'hand-point-open': [],
    'handshake': [],
    'hourglass': [],
    'menu': [],
    'microphone2': [],
    'monitor-eye': [],
    'monitor-loop': [],
    'next-track': [],
    'photo-studio': [],
    'pin': [],
    'play': [],
    'previous-track': [],
    'shuffle': [],
    'sliders': [],
    'stopwatch': [],
    'studio-backdrop': [],
    'studio-light-front': [],
    'studio-light-side': [],
    'watch': [],
    'water-drop': [],
    'repeat': [],
    'rewind': [],
    'rewind-time': [],
    'question': [],
    'question-circle': [],
    'question-filled': [],
    'radio': [],
    'clipboard-check': [],
    'clipboard-check-circle': [],
    'info-circle': [],
    'pause': [],
};

const Airplane$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7549 12.9963L12.6137 11.2918L14.0858 16.5607C14.2873 17.2817 15.1804 17.5338 15.7291 17.0246C17.3078 15.5597 18.1699 14.2058 18.2479 12.8948C18.3038 11.9539 17.8659 10.1553 16.9294 7.33446L17.1593 7.12366C19.4079 4.87645 20.0577 2.91564 18.5923 1.45023C17.1271 -0.0150314 15.1661 0.634362 12.9482 2.85086L12.7079 3.11245C9.88669 2.17579 8.08782 1.73782 7.14683 1.79379C5.83588 1.87176 4.48194 2.73388 3.01704 4.31253C2.50783 4.86128 2.75997 5.75441 3.48097 5.95585L8.75056 7.42815L7.0465 9.28692C5.32628 9.0514 4.24908 8.94907 3.72656 8.98019C2.78982 9.03596 1.86795 9.623 0.89294 10.6737C0.38371 11.2225 0.635886 12.1156 1.35692 12.317L6.01025 13.6169L6.42478 14.0314L7.72462 18.6847C7.92603 19.4058 8.81919 19.658 9.36796 19.1487C10.4187 18.1737 11.0057 17.2518 11.0615 16.3151C11.0926 15.7927 10.9903 14.7159 10.7549 12.9963ZM9.01615 11.8772C8.77322 12.0999 8.65566 12.4281 8.70187 12.7544C8.94065 14.4405 9.06247 15.5704 9.06757 16.0585L8.28047 13.2407C8.23421 13.0751 8.14604 12.9242 8.02445 12.8027L7.239 12.0172C7.11742 11.8956 6.96654 11.8075 6.80093 11.7612L3.98319 10.9741C4.47143 10.9792 5.60166 11.1011 7.28845 11.34C7.61484 11.3862 7.94304 11.2686 8.16579 11.0256L11.3255 7.57908C11.8296 7.02922 11.5759 6.14093 10.8574 5.9402L5.73365 4.50864C6.33268 4.04943 6.84845 3.81507 7.26558 3.79026C7.90809 3.75204 9.78145 4.2286 12.6835 5.21408C13.059 5.34156 13.4743 5.2352 13.7422 4.94295L14.3922 4.23396C15.8992 2.7292 16.7584 2.44469 17.1781 2.86445C17.5977 3.28405 17.3131 4.14277 15.7764 5.67951L15.0987 6.29966C14.8065 6.5676 14.7002 6.98285 14.8276 7.35825C15.8131 10.2603 16.2896 12.1336 16.2514 12.7761C16.2266 13.1932 15.9922 13.709 15.533 14.308L14.1016 9.18478C13.9009 8.46628 13.0125 8.21263 12.4627 8.71682L9.01615 11.8772Z" fill="currentColor"/>
</svg>
`;

const Alarm$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 5.5C6.96243 5.5 4.5 7.96243 4.5 11C4.5 14.0376 6.96243 16.5 10 16.5C13.0376 16.5 15.5 14.0376 15.5 11C15.5 7.96243 13.0376 5.5 10 5.5ZM2.5 11C2.5 6.85786 5.85786 3.5 10 3.5C14.1421 3.5 17.5 6.85786 17.5 11C17.5 15.1421 14.1421 18.5 10 18.5C5.85786 18.5 2.5 15.1421 2.5 11Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.79289 18.2071C3.18342 18.5976 3.81658 18.5976 4.20711 18.2071L5.70711 16.7071C6.09763 16.3166 6.09763 15.6834 5.70711 15.2929C5.31658 14.9023 4.68342 14.9023 4.29289 15.2929L2.79289 16.7929C2.40237 17.1834 2.40237 17.8166 2.79289 18.2071Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2929 15.2929C14.6834 14.9024 15.3166 14.9024 15.7071 15.2929L17.2071 16.7929C17.5976 17.1834 17.5976 17.8166 17.2071 18.2071C16.8166 18.5977 16.1834 18.5977 15.7929 18.2071L14.2929 16.7071C13.9024 16.3166 13.9024 15.6834 14.2929 15.2929Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 7C10.5523 7 11 7.44772 11 8V11C11 11.5523 10.5523 12 10 12C9.44772 12 9 11.5523 9 11V8C9 7.44772 9.44772 7 10 7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 11C14 11.5523 13.5523 12 13 12H10C9.44772 12 9 11.5523 9 11C9 10.4477 9.44772 10 10 10H13C13.5523 10 14 10.4477 14 11Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.33196 3.17163L2.57422 6.76042C2.57422 6.76042 2.49689 6.6895 2.38431 6.56157C2.12745 6.26968 1.68708 5.68098 1.56299 4.9606C1.45034 4.30659 1.59837 3.54403 2.3811 2.79649C3.16383 2.04896 3.93239 1.93613 4.58053 2.07874C5.29445 2.23581 5.86228 2.70277 6.14205 2.97278C6.26467 3.09112 6.33196 3.17163 6.33196 3.17163Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.668 3.17163L17.4258 6.76042C17.4258 6.76042 17.5031 6.6895 17.6157 6.56157C17.8726 6.26968 18.3129 5.68098 18.437 4.9606C18.5497 4.30659 18.4016 3.54403 17.6189 2.79649C16.8362 2.04896 16.0676 1.93613 15.4195 2.07874C14.7056 2.23581 14.1377 2.70277 13.858 2.97278C13.7353 3.09112 13.668 3.17163 13.668 3.17163Z" fill="currentColor"/>
</svg>
`;

const AngleDown$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.6402 8.26824L10.6402 13.2682C9.61589 14.1218 8.33552 12.5854 9.35982 11.7318L15.3598 6.7318C16.3841 5.87822 17.6645 7.41466 16.6402 8.26824Z" fill="currentColor"/>
<path d="M4.64019 6.7318L10.6402 11.7318C11.6645 12.5854 10.3841 14.1218 9.35982 13.2682L3.35982 8.26824C2.33552 7.41466 3.61589 5.87822 4.64019 6.7318Z" fill="currentColor"/>
</svg>
`;

const AngleLeft$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.73177 10.6402C6.37821 10.2159 6.43553 9.58537 6.85981 9.2318C7.28409 8.87824 7.91465 8.93556 8.26822 9.35984L13.2682 15.3598C13.6218 15.7841 13.5645 16.4147 13.1402 16.7682C12.7159 17.1218 12.0853 17.0645 11.7318 16.6402L6.73177 10.6402Z" fill="currentColor"/>
<path d="M8.26822 10.6402C7.91465 11.0645 7.28409 11.1218 6.85981 10.7682C6.43553 10.4147 6.37821 9.78412 6.73177 9.35984L11.7318 3.35984C12.0853 2.93556 12.7159 2.87824 13.1402 3.2318C13.5645 3.58537 13.6218 4.21593 13.2682 4.64021L8.26822 10.6402Z" fill="currentColor"/>
</svg>
`;

const AngleRight$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7318 9.35984C12.0854 8.93556 12.7159 8.87824 13.1402 9.2318C13.5645 9.58537 13.6218 10.2159 13.2682 10.6402L8.26825 16.6402C7.91468 17.0645 7.28412 17.1218 6.85984 16.7682C6.43556 16.4147 6.37824 15.7841 6.7318 15.3598L11.7318 9.35984Z" fill="currentColor"/>
<path d="M6.7318 4.64021C6.37824 4.21593 6.43556 3.58537 6.85984 3.2318C7.28412 2.87824 7.91468 2.93556 8.26825 3.35984L13.2682 9.35984C13.6218 9.78412 13.5645 10.4147 13.1402 10.7682C12.7159 11.1218 12.0854 11.0645 11.7318 10.6402L6.7318 4.64021Z" fill="currentColor"/>
</svg>
`;

const AngleUp$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3598 13.2682L9.35979 8.26824C8.33549 7.41466 9.61586 5.87822 10.6402 6.7318L16.6402 11.7318C17.6645 12.5854 16.3841 14.1218 15.3598 13.2682Z" fill="currentColor"/>
<path d="M3.35979 11.7318L9.35979 6.7318C10.3841 5.87822 11.6645 7.41466 10.6402 8.26824L4.64016 13.2682C3.61586 14.1218 2.33549 12.5854 3.35979 11.7318Z" fill="currentColor"/>
</svg>
`;

const ArrowDown$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7682 11.0265C15.1218 11.4507 15.0645 12.0813 14.6402 12.4349L10.6402 15.7682C10.2159 16.1218 9.58535 16.0644 9.23179 15.6402C8.87822 15.2159 8.93555 14.5853 9.35983 14.2318L13.3598 10.8984C13.7841 10.5449 14.4147 10.6022 14.7682 11.0265Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.23179 11.0265C5.58535 10.6022 6.21592 10.5449 6.64019 10.8984L10.6402 14.2318C11.0645 14.5853 11.1218 15.2159 10.7682 15.6402C10.4147 16.0644 9.7841 16.1218 9.35983 15.7682L5.35983 12.4349C4.93555 12.0813 4.87822 11.4507 5.23179 11.0265Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 14C9.44772 14 9 13.5523 9 13V5C9 4.44771 9.44772 4 10 4C10.5523 4 11 4.44771 11 5V13C11 13.5523 10.5523 14 10 14Z" fill="currentColor"/>
</svg>
`;

const ArrowDownLeft$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6458 14.0975C12.5958 14.6475 12.1094 15.0529 11.5594 15.0029L6.37394 14.5314C5.82393 14.4814 5.41859 13.995 5.46859 13.445C5.51859 12.895 6.005 12.4897 6.55502 12.5397L11.7405 13.0111C12.2905 13.0611 12.6958 13.5475 12.6458 14.0975Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.90254 7.35427C6.45255 7.30427 6.93896 7.70961 6.98897 8.25963L7.46037 13.4451C7.51037 13.9951 7.10503 14.4815 6.55501 14.5315C6.005 14.5815 5.51859 14.1762 5.46858 13.6261L4.99718 8.4407C4.94718 7.89068 5.35252 7.40427 5.90254 7.35427Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.17155 12.8286C6.78103 12.438 6.78103 11.8049 7.17155 11.4144L12.8284 5.7575C13.2189 5.36697 13.8521 5.36697 14.2426 5.7575C14.6331 6.14802 14.6331 6.78119 14.2426 7.17171L8.58577 12.8286C8.19524 13.2191 7.56208 13.2191 7.17155 12.8286Z" fill="currentColor"/>
</svg>
`;

const ArrowDownRight$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0975 7.35427C14.6475 7.40427 15.0528 7.89068 15.0028 8.4407L14.5314 13.6261C14.4814 14.1762 13.995 14.5815 13.445 14.5315C12.895 14.4815 12.4896 13.9951 12.5396 13.4451L13.011 8.25963C13.061 7.70961 13.5474 7.30427 14.0975 7.35427Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.35418 14.0975C7.30418 13.5475 7.70952 13.0611 8.25953 13.0111L13.445 12.5397C13.995 12.4897 14.4814 12.895 14.5314 13.445C14.5814 13.995 14.1761 14.4814 13.6261 14.5314L8.44061 15.0029C7.89059 15.0529 7.40418 14.6475 7.35418 14.0975Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8284 12.8285C12.4379 13.2191 11.8048 13.2191 11.4142 12.8285L5.75738 7.17168C5.36685 6.78116 5.36685 6.14799 5.75738 5.75747C6.1479 5.36695 6.78107 5.36695 7.17159 5.75747L12.8284 11.4143C13.219 11.8048 13.219 12.438 12.8284 12.8285Z" fill="currentColor"/>
</svg>
`;

const ArrowLeft$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.97353 14.7682C8.54926 15.1218 7.91869 15.0645 7.56513 14.6402L4.23179 10.6402C3.87823 10.2159 3.93555 9.58537 4.35983 9.2318C4.78411 8.87824 5.41467 8.93556 5.76824 9.35984L9.10157 13.3598C9.45513 13.7841 9.39781 14.4147 8.97353 14.7682Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.97353 5.2318C9.39781 5.58537 9.45513 6.21593 9.10157 6.64021L5.76824 10.6402C5.41467 11.0645 4.78411 11.1218 4.35983 10.7682C3.93555 10.4147 3.87823 9.78412 4.23179 9.35984L7.56513 5.35984C7.91869 4.93556 8.54926 4.87824 8.97353 5.2318Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.99997 10C5.99997 9.44772 6.44768 9 6.99997 9L15 9C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11L6.99997 11C6.44768 11 5.99997 10.5523 5.99997 10Z" fill="currentColor"/>
</svg>
`;

const ArrowRight$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0264 5.23175C11.4507 4.87819 12.0813 4.93551 12.4348 5.35979L15.7682 9.35979C16.1217 9.78407 16.0644 10.4146 15.6401 10.7682C15.2159 11.1218 14.5853 11.0644 14.2317 10.6402L10.8984 6.64016C10.5448 6.21588 10.6022 5.58532 11.0264 5.23175Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0264 14.7682C10.6022 14.4146 10.5448 13.7841 10.8984 13.3598L14.2317 9.35979C14.5853 8.93551 15.2159 8.87819 15.6401 9.23175C16.0644 9.58532 16.1217 10.2159 15.7682 10.6402L12.4348 14.6402C12.0813 15.0644 11.4507 15.1218 11.0264 14.7682Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 10C14 10.5523 13.5523 11 13 11L5 11C4.44771 11 4 10.5523 4 10C4 9.44772 4.44771 9 5 9L13 9C13.5523 9 14 9.44772 14 10Z" fill="currentColor"/>
</svg>
`;

const ArrowUp$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.23178 8.97353C4.87822 8.54926 4.93554 7.91869 5.35982 7.56513L9.35982 4.23179C9.7841 3.87823 10.4147 3.93555 10.7682 4.35983C11.1218 4.78411 11.0645 5.41467 10.6402 5.76824L6.64019 9.10157C6.21591 9.45513 5.58535 9.39781 5.23178 8.97353Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7682 8.97353C14.4147 9.39781 13.7841 9.45513 13.3598 9.10157L9.35982 5.76824C8.93554 5.41467 8.87822 4.78411 9.23178 4.35983C9.58535 3.93555 10.2159 3.87823 10.6402 4.23179L14.6402 7.56513C15.0645 7.91869 15.1218 8.54926 14.7682 8.97353Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 6C10.5523 6 11 6.44772 11 7V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V7C9 6.44772 9.44772 6 10 6Z" fill="currentColor"/>
</svg>
`;

const ArrowUpLeft$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.90254 12.6459C5.35252 12.5959 4.94718 12.1094 4.99718 11.5594L5.46858 6.37397C5.51858 5.82396 6.005 5.41862 6.55501 5.46862C7.10503 5.51862 7.51037 6.00503 7.46037 6.55505L6.98897 11.7405C6.93896 12.2905 6.45255 12.6959 5.90254 12.6459Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6458 5.90263C12.6958 6.45264 12.2905 6.93906 11.7405 6.98906L6.55502 7.46046C6.005 7.51046 5.51859 7.10512 5.46859 6.5551C5.41858 6.00509 5.82393 5.51868 6.37394 5.46868L11.5594 4.99727C12.1094 4.94727 12.5958 5.35261 12.6458 5.90263Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.17156 7.17158C7.56208 6.78106 8.19524 6.78106 8.58577 7.17158L14.2426 12.8284C14.6331 13.219 14.6331 13.8521 14.2426 14.2427C13.8521 14.6332 13.2189 14.6332 12.8284 14.2427L7.17156 8.5858C6.78103 8.19527 6.78103 7.56211 7.17156 7.17158Z" fill="currentColor"/>
</svg>
`;

const ArrowUpRight$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.35412 5.90263C7.40412 5.35261 7.89053 4.94727 8.44054 4.99727L13.626 5.46868C14.176 5.51868 14.5814 6.00509 14.5314 6.5551C14.4814 7.10512 13.9949 7.51046 13.4449 7.46046L8.25947 6.98906C7.70946 6.93906 7.30411 6.45264 7.35412 5.90263Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0974 12.6459C13.5474 12.6959 13.061 12.2905 13.011 11.7405L12.5396 6.55505C12.4896 6.00503 12.8949 5.51862 13.4449 5.46862C13.9949 5.41862 14.4814 5.82396 14.5314 6.37397L15.0028 11.5594C15.0528 12.1094 14.6474 12.5959 14.0974 12.6459Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8284 7.17156C13.2189 7.56208 13.2189 8.19524 12.8284 8.58577L7.17153 14.2426C6.78101 14.6331 6.14784 14.6331 5.75732 14.2426C5.36679 13.8521 5.36679 13.2189 5.75732 12.8284L11.4142 7.17156C11.8047 6.78103 12.4379 6.78103 12.8284 7.17156Z" fill="currentColor"/>
</svg>
`;

const Bank$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.86364L7.40193 5.5H12.5981L10 3.86364ZM10.2665 1.66783C10.1036 1.56527 9.89637 1.56527 9.73353 1.66783L1.9393 6.57693C1.51501 6.84416 1.70433 7.5 2.20577 7.5H17.7942C18.2957 7.5 18.485 6.84416 18.0607 6.57693L10.2665 1.66783Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 17C1.5 16.4477 1.94772 16 2.5 16H17.5C18.0523 16 18.5 16.4477 18.5 17C18.5 17.5523 18.0523 18 17.5 18H2.5C1.94772 18 1.5 17.5523 1.5 17Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 8.5C4.55228 8.5 5 8.94772 5 9.5V14.5C5 15.0523 4.55228 15.5 4 15.5C3.44772 15.5 3 15.0523 3 14.5L3 9.5C3 8.94772 3.44772 8.5 4 8.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 8.5C7.55228 8.5 8 8.94772 8 9.5V14.5C8 15.0523 7.55228 15.5 7 15.5C6.44772 15.5 6 15.0523 6 14.5V9.5C6 8.94772 6.44772 8.5 7 8.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 8.5C10.5523 8.5 11 8.94772 11 9.5V14.5C11 15.0523 10.5523 15.5 10 15.5C9.44772 15.5 9 15.0523 9 14.5V9.5C9 8.94772 9.44772 8.5 10 8.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 8.5C13.5523 8.5 14 8.94772 14 9.5V14.5C14 15.0523 13.5523 15.5 13 15.5C12.4477 15.5 12 15.0523 12 14.5V9.5C12 8.94772 12.4477 8.5 13 8.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 8.5C16.5523 8.5 17 8.94772 17 9.5V14.5C17 15.0523 16.5523 15.5 16 15.5C15.4477 15.5 15 15.0523 15 14.5V9.5C15 8.94772 15.4477 8.5 16 8.5Z" fill="currentColor"/>
</svg>
`;

const Battery$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="17" y="7.5" width="2" height="5" rx="0.5" fill="currentColor"/>
<path d="M4 7.5H7V12.5H4V7.5Z" fill="currentColor"/>
<path d="M7.5 7.5H10.5V12.5H7.5V7.5Z" fill="currentColor"/>
<path d="M11 7.5H14V12.5H11V7.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4.5H4C2.34315 4.5 1 5.84315 1 7.5V12.5C1 14.1569 2.34315 15.5 4 15.5H14C15.6569 15.5 17 14.1569 17 12.5V7.5C17 5.84315 15.6569 4.5 14 4.5ZM3 7.5C3 6.94772 3.44772 6.5 4 6.5H14C14.5523 6.5 15 6.94772 15 7.5V12.5C15 13.0523 14.5523 13.5 14 13.5H4C3.44772 13.5 3 13.0523 3 12.5V7.5Z" fill="currentColor"/>
</svg>
`;

const Bell$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 17C7.5 16.4477 7.94772 16 8.5 16C9.05228 16 9.5 16.4477 9.5 17C9.5 17.2761 9.72386 17.5 10 17.5C10.2761 17.5 10.5 17.2761 10.5 17C10.5 16.4477 10.9477 16 11.5 16C12.0523 16 12.5 16.4477 12.5 17C12.5 18.3807 11.3807 19.5 10 19.5C8.61929 19.5 7.5 18.3807 7.5 17Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 14.5C18 13.3482 17.4284 12.2866 16.5 11.6488V9C16.5 5.68629 13.8137 3 10.5 3H9.5C6.18629 3 3.5 5.68629 3.5 9V11.6488C2.57159 12.2867 2 13.3482 2 14.5C2 15.8807 3.11929 17 4.5 17H15.5C16.8807 17 18 15.8807 18 14.5ZM14.5 12.8819L15.0904 13.147L15.1434 13.1709C15.665 13.4075 16 13.9273 16 14.5C16 14.7761 15.7761 15 15.5 15H4.5C4.22386 15 4 14.7761 4 14.5C4 13.9273 4.335 13.4075 4.85658 13.1709L4.90959 13.147L5.5 12.8819V9C5.5 6.79086 7.29086 5 9.5 5H10.5C12.7091 5 14.5 6.79086 14.5 9V12.8819Z" fill="currentColor"/>
<path d="M9 1.5C9 0.947715 9.44772 0.5 10 0.5C10.5523 0.5 11 0.947716 11 1.5L11 4C11 4.55229 10.5523 5 10 5C9.44771 5 9 4.55228 9 4L9 1.5Z" fill="currentColor"/>
</svg>
`;

const BellOff$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 17C7.5 16.4477 7.94772 16 8.5 16C9.05229 16 9.5 16.4477 9.5 17C9.5 17.2761 9.72386 17.5 10 17.5C10.2761 17.5 10.5 17.2761 10.5 17C10.5 16.4477 10.9477 16 11.5 16C12.0523 16 12.5 16.4477 12.5 17C12.5 18.3807 11.3807 19.5 10 19.5C8.61929 19.5 7.5 18.3807 7.5 17Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 14.5C18 13.3482 17.4284 12.2866 16.5 11.6488V9C16.5 5.68629 13.8137 3 10.5 3H9.5C6.18629 3 3.5 5.68629 3.5 9V11.6488C2.57159 12.2867 2 13.3482 2 14.5C2 15.8807 3.11929 17 4.5 17H15.5C16.8807 17 18 15.8807 18 14.5ZM14.5 12.8819L15.0904 13.147L15.1434 13.1709C15.665 13.4075 16 13.9273 16 14.5C16 14.7761 15.7761 15 15.5 15H4.5C4.22386 15 4 14.7761 4 14.5C4 13.9273 4.335 13.4075 4.85658 13.1709L4.90959 13.147L5.5 12.8819V9C5.5 6.79086 7.29086 5 9.5 5H10.5C12.7091 5 14.5 6.79086 14.5 9V12.8819Z" fill="currentColor"/>
<path d="M9 1.5C9 0.947715 9.44772 0.5 10 0.5C10.5523 0.5 11 0.947716 11 1.5L11 4C11 4.55229 10.5523 5 10 5C9.44771 5 9 4.55228 9 4L9 1.5Z" fill="currentColor"/>
<path d="M0.81933 4.52526C0.415414 4.14861 0.393317 3.51583 0.769974 3.11191C1.14663 2.708 1.77941 2.6859 2.18333 3.06256L18.2232 18.0199C18.6271 18.3966 18.6492 19.0294 18.2725 19.4333C17.8959 19.8372 17.2631 19.8593 16.8592 19.4827L0.81933 4.52526Z" fill="currentColor"/>
</svg>
`;

const Bicycle$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0616 3.93632C12.5103 3.97032 12.0359 3.55102 12.0019 2.99978C11.9679 2.44854 12.3872 1.97411 12.9384 1.94011C16.8273 1.70025 19 2.46051 19 4.44073C19 6.01406 18.0221 6.71355 16.1454 6.9894C15.599 7.06971 15.0909 6.69187 15.0106 6.14545C14.9303 5.59904 15.3082 5.09098 15.8546 5.01066C16.8709 4.86127 17 4.76892 17 4.44073C17 4.14373 15.9059 3.76088 13.0616 3.93632Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 20C17.9853 20 20 17.9853 20 15.5C20 13.0147 17.9853 11 15.5 11C13.0147 11 11 13.0147 11 15.5C11 17.9853 13.0147 20 15.5 20ZM15.5 13C16.8807 13 18 14.1193 18 15.5C18 16.8807 16.8807 18 15.5 18C14.1193 18 13 16.8807 13 15.5C13 14.1193 14.1193 13 15.5 13Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 20C6.98528 20 9 17.9853 9 15.5C9 13.0147 6.98528 11 4.5 11C2.01472 11 0 13.0147 0 15.5C0 17.9853 2.01472 20 4.5 20ZM4.5 13C5.88071 13 7 14.1193 7 15.5C7 16.8807 5.88071 18 4.5 18C3.11929 18 2 16.8807 2 15.5C2 14.1193 3.11929 13 4.5 13Z" fill="currentColor"/>
<path d="M5 6.5C4.44772 6.5 4 6.05228 4 5.5C4 4.94772 4.44772 4.5 5 4.5H9C9.55228 4.5 10 4.94772 10 5.5C10 6.05228 9.55228 6.5 9 6.5H5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.49999 16.5004H9.99999C10.6363 16.5004 11.0986 15.9191 10.983 15.3153L14.8473 9.14984C15.2647 8.48384 14.786 7.61876 14 7.61876H8.45062L7.64761 5.18682C7.47444 4.66239 6.90893 4.37763 6.38449 4.55079C5.86006 4.72396 5.5753 5.28948 5.74846 5.81391L6.75471 8.86133L3.60865 15.047C3.27029 15.7123 3.75361 16.5004 4.49999 16.5004ZM7.63799 11.5364L6.1305 14.5004H8.61669L7.63799 11.5364ZM10.1744 12.8394L12.193 9.61876H9.11102L10.1744 12.8394Z" fill="currentColor"/>
<path d="M13.9808 2.74302L16.4808 15.3048C16.741 16.6125 14.7795 17.0029 14.5192 15.6952L12.0192 3.13339C11.759 1.8257 13.7205 1.43533 13.9808 2.74302Z" fill="currentColor"/>
</svg>
`;

const Bluetooth$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5351 10.7951L17.1065 6.54508C17.6312 6.14486 17.6312 5.35514 17.1065 4.95492L11.5351 0.704921C10.8769 0.202853 9.92857 0.672195 9.92857 1.5L9.92857 10C9.92857 10.8278 10.8769 11.2971 11.5351 10.7951ZM11.9286 3.52056L14.8512 5.75L11.9286 7.97945L11.9286 3.52056Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5351 19.2951L17.1065 15.0451C17.6312 14.6449 17.6312 13.8551 17.1065 13.4549L11.5351 9.20492C10.8769 8.70285 9.92857 9.1722 9.92857 10L9.92857 18.5C9.92857 19.3278 10.8769 19.7971 11.5351 19.2951ZM11.9286 12.0206L14.8512 14.25L11.9286 16.4794L11.9286 12.0206Z" fill="currentColor"/>
<path d="M11.5264 9.19846C11.9692 9.52866 12.0604 10.1552 11.7302 10.5979C11.4 11.0406 10.7734 11.1318 10.3307 10.8016L3.36641 5.60719C2.9237 5.27699 2.8325 4.65043 3.1627 4.20772C3.4929 3.76502 4.11946 3.67382 4.56216 4.00402L11.5264 9.19846Z" fill="currentColor"/>
<path d="M11.5264 10.8015C11.9692 10.4713 12.0604 9.84478 11.7302 9.40207C11.4 8.95937 10.7734 8.86817 10.3307 9.19837L3.36641 14.3928C2.9237 14.723 2.8325 15.3496 3.1627 15.7923C3.4929 16.235 4.11946 16.3262 4.56216 15.996L11.5264 10.8015Z" fill="currentColor"/>
</svg>
`;

const Book$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 5.29733C11 4.80746 10.6451 4.38971 10.1617 4.31049L2.32344 3.02599C2.21652 3.00847 2.10835 2.99966 2 2.99966C0.89543 2.99966 0 3.89509 0 4.99966V14.7366C0 15.7218 0.717527 16.5603 1.69094 16.7125L9.84547 17.988C10.452 18.0829 11 17.6139 11 17V5.29733ZM2 14.7366V4.99966L9 6.14679V15.8314L2 14.7366Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20 4.99966C20 3.89509 19.1046 2.99966 18 2.99966C17.8917 2.99966 17.7835 3.00847 17.6766 3.02599L9.83828 4.31049C9.35486 4.38971 9 4.80746 9 5.29733V17C9 17.6139 9.54801 18.0829 10.1545 17.988L18.3091 16.7125C19.2825 16.5603 20 15.7218 20 14.7366V4.99966ZM18 14.7366L11 15.8314V6.14679L18 4.99966V14.7366Z" fill="currentColor"/>
</svg>
`;

const Bookmark$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.24548 17.6665L10 13.4673L13.7545 17.6665C14.3665 18.3509 15.5 17.9181 15.5 17V3C15.5 2.44772 15.0523 2 14.5 2H5.5C4.94772 2 4.5 2.44772 4.5 3V17C4.5 17.9181 5.63355 18.3509 6.24548 17.6665ZM6.5 14.3812V4H13.5V14.3812L10.7455 11.3004C10.3479 10.8558 9.65206 10.8558 9.25452 11.3004L6.5 14.3812Z" fill="currentColor"/>
</svg>
`;

const BookmarkFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 13.4673L6.24548 17.6665C5.63355 18.3509 4.5 17.9181 4.5 17V3C4.5 2.44772 4.94772 2 5.5 2H14.5C15.0523 2 15.5 2.44772 15.5 3V17C15.5 17.9181 14.3665 18.3509 13.7545 17.6665L10 13.4673Z" fill="currentColor"/>
</svg>
`;

const Briefcase$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 11V15C3.5 15.5523 3.94772 16 4.5 16H15.5C16.0523 16 16.5 15.5523 16.5 15V11H18.5V15C18.5 16.6569 17.1569 18 15.5 18H4.5C2.84315 18 1.5 16.6569 1.5 15V11H3.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 7C1 5.89543 1.89543 5 3 5H17C18.1046 5 19 5.89543 19 7V10C19 11.6569 17.6569 13 16 13H4C2.34315 13 1 11.6569 1 10V7ZM17 7H3V10C3 10.5523 3.44772 11 4 11H16C16.5523 11 17 10.5523 17 10V7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 4.74621V6.5H5V4.74621C5 4.50093 5.03008 4.25657 5.08957 4.0186L5.15113 3.77239C5.485 2.43689 6.68495 1.5 8.06155 1.5H11.9384C13.3151 1.5 14.515 2.43689 14.8489 3.77239L14.9104 4.0186C14.9699 4.25657 15 4.50093 15 4.74621V6.5H13V4.74621C13 4.66445 12.99 4.583 12.9701 4.50368L12.9086 4.25746C12.7973 3.8123 12.3973 3.5 11.9384 3.5L8.06155 3.5C7.60268 3.5 7.2027 3.8123 7.09141 4.25746L7.02986 4.50368C7.01003 4.583 7 4.66445 7 4.74621Z" fill="currentColor"/>
<path d="M7.866 11.5C7.4811 12.1667 6.51885 12.1667 6.13395 11.5L5.26793 10C4.88302 9.33333 5.36415 8.5 6.13395 8.5H7.866C8.6358 8.5 9.11693 9.33333 8.73203 10L7.866 11.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 10.75C7.55228 10.75 8 11.1977 8 11.75V13.5C8 14.0523 7.55228 14.5 7 14.5C6.44772 14.5 6 14.0523 6 13.5V11.75C6 11.1977 6.44772 10.75 7 10.75Z" fill="currentColor"/>
<path d="M13.866 11.5C13.4811 12.1667 12.5189 12.1667 12.1339 11.5L11.2679 10C10.883 9.33333 11.3641 8.5 12.134 8.5H13.866C14.6358 8.5 15.1169 9.33333 14.732 10L13.866 11.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 10.75C13.5523 10.75 14 11.1977 14 11.75V13.5C14 14.0523 13.5523 14.5 13 14.5C12.4477 14.5 12 14.0523 12 13.5V11.75C12 11.1977 12.4477 10.75 13 10.75Z" fill="currentColor"/>
</svg>
`;

const Building$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 18.5C1.44772 18.5 1 18.0523 1 17.5C1 16.9477 1.44772 16.5 2 16.5H18C18.5523 16.5 19 16.9477 19 17.5C19 18.0523 18.5523 18.5 18 18.5H2Z" fill="currentColor"/>
<path d="M6.5 17C6.5 17.5523 6.05228 18 5.5 18C4.94772 18 4.5 17.5523 4.5 17V4.30769C4.5 2.51017 5.80881 1 7.5 1H12.5C14.1912 1 15.5 2.51017 15.5 4.30769V17C15.5 17.5523 15.0523 18 14.5 18C13.9477 18 13.5 17.5523 13.5 17V4.30769C13.5 3.55621 13.018 3 12.5 3H7.5C6.98205 3 6.5 3.55621 6.5 4.30769V17Z" fill="currentColor"/>
<path d="M8 4H9C9.27614 4 9.5 4.22386 9.5 4.5V5.5C9.5 5.77614 9.27614 6 9 6H8C7.72386 6 7.5 5.77614 7.5 5.5V4.5C7.5 4.22386 7.72386 4 8 4Z" fill="currentColor"/>
<path d="M11 4H12C12.2761 4 12.5 4.22386 12.5 4.5V5.5C12.5 5.77614 12.2761 6 12 6H11C10.7239 6 10.5 5.77614 10.5 5.5V4.5C10.5 4.22386 10.7239 4 11 4Z" fill="currentColor"/>
<path d="M11 7H12C12.2761 7 12.5 7.22386 12.5 7.5V8.5C12.5 8.77614 12.2761 9 12 9H11C10.7239 9 10.5 8.77614 10.5 8.5V7.5C10.5 7.22386 10.7239 7 11 7Z" fill="currentColor"/>
<path d="M11 10H12C12.2761 10 12.5 10.2239 12.5 10.5V11.5C12.5 11.7761 12.2761 12 12 12H11C10.7239 12 10.5 11.7761 10.5 11.5V10.5C10.5 10.2239 10.7239 10 11 10Z" fill="currentColor"/>
<path d="M11 13H12C12.2761 13 12.5 13.2239 12.5 13.5V14.5C12.5 14.7761 12.2761 15 12 15H11C10.7239 15 10.5 14.7761 10.5 14.5V13.5C10.5 13.2239 10.7239 13 11 13Z" fill="currentColor"/>
<path d="M8 7H9C9.27614 7 9.5 7.22386 9.5 7.5V8.5C9.5 8.77614 9.27614 9 9 9H8C7.72386 9 7.5 8.77614 7.5 8.5V7.5C7.5 7.22386 7.72386 7 8 7Z" fill="currentColor"/>
<path d="M8 13H9C9.27614 13 9.5 13.2239 9.5 13.5V14.5C9.5 14.7761 9.27614 15 9 15H8C7.72386 15 7.5 14.7761 7.5 14.5V13.5C7.5 13.2239 7.72386 13 8 13Z" fill="currentColor"/>
<path d="M8 10H9C9.27614 10 9.5 10.2239 9.5 10.5V11.5C9.5 11.7761 9.27614 12 9 12H8C7.72386 12 7.5 11.7761 7.5 11.5V10.5C7.5 10.2239 7.72386 10 8 10Z" fill="currentColor"/>
</svg>
`;

const Calculator$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3L2 17C2 18.6569 3.34315 20 5 20H15C16.6569 20 18 18.6569 18 17V3C18 1.34315 16.6569 0 15 0H5C3.34315 0 2 1.34315 2 3ZM5 18C4.44772 18 4 17.5523 4 17L4 3C4 2.44772 4.44772 2 5 2H15C15.5523 2 16 2.44772 16 3V17C16 17.5523 15.5523 18 15 18H5Z" fill="currentColor"/>
<path d="M5 7.5V3.5C5 3.22386 5.22386 3 5.5 3L14.5 3C14.7761 3 15 3.22386 15 3.5V7.5C15 7.77614 14.7761 8 14.5 8H5.5C5.22386 8 5 7.77614 5 7.5Z" fill="currentColor"/>
<path d="M12 15.7V10.8C12 10.3582 12.3582 10 12.8 10H14.2C14.6418 10 15 10.3582 15 10.8V15.7C15 16.1418 14.6418 16.5 14.2 16.5H12.8C12.3582 16.5 12 16.1418 12 15.7Z" fill="currentColor"/>
<path d="M5 12V10.5C5 10.2239 5.22386 10 5.5 10H7C7.27614 10 7.5 10.2239 7.5 10.5V12C7.5 12.2761 7.27614 12.5 7 12.5H5.5C5.22386 12.5 5 12.2761 5 12Z" fill="currentColor"/>
<path d="M8.5 12V10.5C8.5 10.2239 8.72386 10 9 10H10.5C10.7761 10 11 10.2239 11 10.5V12C11 12.2761 10.7761 12.5 10.5 12.5H9C8.72386 12.5 8.5 12.2761 8.5 12Z" fill="currentColor"/>
<path d="M5 16V14.5C5 14.2239 5.22386 14 5.5 14H7C7.27614 14 7.5 14.2239 7.5 14.5V16C7.5 16.2761 7.27614 16.5 7 16.5H5.5C5.22386 16.5 5 16.2761 5 16Z" fill="currentColor"/>
<path d="M8.5 16V14.5C8.5 14.2239 8.72386 14 9 14H10.5C10.7761 14 11 14.2239 11 14.5V16C11 16.2761 10.7761 16.5 10.5 16.5H9C8.72386 16.5 8.5 16.2761 8.5 16Z" fill="currentColor"/>
</svg>
`;

const Calendar$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4H17C17.5523 4 18 4.44772 18 5V17C18 17.5523 17.5523 18 17 18H3C2.44772 18 2 17.5523 2 17V5C2 4.44772 2.44772 4 3 4ZM4 8V16H16V8H4Z" fill="currentColor"/>
<circle cx="6.5" cy="10.5" r="1.5" fill="currentColor"/>
<circle cx="5.5" cy="4.5" r="1.5" fill="currentColor"/>
<circle cx="14.5" cy="4.5" r="1.5" fill="currentColor"/>
</svg>
`;

const Camera$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 4H4.5C2.84315 4 1.5 5.34315 1.5 7V13C1.5 14.6569 2.84315 16 4.5 16H11.5C13.1569 16 14.5 14.6569 14.5 13V7C14.5 5.34315 13.1569 4 11.5 4ZM3.5 7C3.5 6.44772 3.94772 6 4.5 6H11.5C12.0523 6 12.5 6.44772 12.5 7V13C12.5 13.5523 12.0523 14 11.5 14H4.5C3.94772 14 3.5 13.5523 3.5 13V7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9339 5.17564L13.4659 7.55708C13.1971 7.74161 13.0352 8.04554 13.032 8.37151L13 11.5867C12.9967 11.9197 13.1594 12.2325 13.4339 12.421L16.9339 14.8244C17.5975 15.28 18.5 14.8049 18.5 14V6C18.5 5.19508 17.5975 4.72 16.9339 5.17564ZM16.5 12.1003L15.0052 11.0739L15.0267 8.91141L16.5 7.89974V12.1003Z" fill="currentColor"/>
</svg>
`;

const Can$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 2H7.5C5.83333 2.66667 4.83333 3.66667 4.5 5V15C4.5 16.6569 5.84315 18 7.5 18H12.5C14.1569 18 15.5 16.6569 15.5 15V5C15.1667 3.66667 14.1667 2.66667 12.5 2ZM6.5 15V5.29379C6.68962 4.79195 7.1237 4.36779 7.91138 4H12.0886C12.8763 4.36779 13.3104 4.79195 13.5 5.29379V15C13.5 15.5523 13.0523 16 12.5 16H7.5C6.94772 16 6.5 15.5523 6.5 15Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 9.5C7 11.7091 8.79086 13.5 11 13.5C13.2091 13.5 15 11.7091 15 9.5C15 7.29086 13.2091 5.5 11 5.5C8.79086 5.5 7 7.29086 7 9.5ZM9.80484 10.9055C9.55673 10.9664 9.15223 11.09 8.58357 11.2782C8.56278 11.25 8.54246 11.2214 8.52264 11.1925C9.78121 10.8145 10.7946 10.2379 11.5554 9.45908C12.2367 8.7617 12.6995 8.01039 12.9365 7.20862C13.0856 7.33479 13.2223 7.47526 13.3443 7.62791C13.4677 8.46285 13.3733 9.08532 13.0855 9.51186C12.7303 10.0384 12.1353 10.3668 11.5805 10.5122C11.5089 10.5309 11.3794 10.5603 11.1777 10.6038C11.1136 10.6176 10.9312 10.6565 10.7798 10.6887C10.683 10.7093 10.5989 10.7273 10.5665 10.7342L10.4542 10.7584C10.1799 10.8176 9.9714 10.8646 9.80484 10.9055Z" fill="currentColor"/>
</svg>
`;

const Car$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.65265 2.78967C4.74897 3.00861 4.04146 3.71098 3.81595 4.61304L2.68528 9.1357C1.70458 9.47358 1 10.4045 1 11.4999V14.4999C1 15.8807 2.11929 16.9999 3.5 16.9999H16.5C17.8807 16.9999 19 15.8807 19 14.4999V11.4999C19 10.4045 18.2954 9.47358 17.3147 9.1357L16.184 4.61293C15.9585 3.71099 15.2512 3.00867 14.3476 2.78962C12.9007 2.43894 11.4512 2.26331 10.0007 2.26331C8.55011 2.26331 7.10023 2.43896 5.65265 2.78967ZM3.5 10.9999C3.95887 10.9999 4.35885 10.6876 4.47014 10.2425L5.75623 5.09811C5.80133 4.9177 5.94284 4.77722 6.12357 4.73344C7.41806 4.41982 8.70992 4.26331 10.0007 4.26331C11.2914 4.26331 12.5828 4.41978 13.8765 4.73333C14.0572 4.77714 14.1986 4.91761 14.2437 5.09801L15.5299 10.2425C15.6411 10.6876 16.0411 10.9999 16.5 10.9999C16.7761 10.9999 17 11.2238 17 11.4999V14.4999C17 14.7761 16.7761 14.9999 16.5 14.9999H3.5C3.22386 14.9999 3 14.7761 3 14.4999V11.4999C3 11.2238 3.22386 10.9999 3.5 10.9999Z" fill="currentColor"/>
<path d="M16.5 13C16.5 13.8284 15.8284 14.5 15 14.5C14.1716 14.5 13.5 13.8284 13.5 13C13.5 12.1716 14.1716 11.5 15 11.5C15.8284 11.5 16.5 12.1716 16.5 13Z" fill="currentColor"/>
<path d="M6.5 13C6.5 13.8284 5.82843 14.5 5 14.5C4.17157 14.5 3.5 13.8284 3.5 13C3.5 12.1716 4.17157 11.5 5 11.5C5.82843 11.5 6.5 12.1716 6.5 13Z" fill="currentColor"/>
<path d="M4 15.5C4.82843 15.5 5.5 16.1716 5.5 17V18C5.5 18.8284 4.82843 19.5 4 19.5C3.17157 19.5 2.5 18.8284 2.5 18V17C2.5 16.1716 3.17157 15.5 4 15.5Z" fill="currentColor"/>
<path d="M16 15.5C16.8284 15.5 17.5 16.1716 17.5 17V18C17.5 18.8284 16.8284 19.5 16 19.5C15.1716 19.5 14.5 18.8284 14.5 18V17C14.5 16.1716 15.1716 15.5 16 15.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1948 5H7.80491C6.862 5 6.04716 5.65858 5.8494 6.58052L5.42037 8.58052C5.3908 8.71839 5.37589 8.859 5.37589 9C5.37589 10.1046 6.27132 11 7.37589 11H12.6238C12.7648 11 12.9054 10.9851 13.0433 10.9555C14.1233 10.7238 14.811 9.66052 14.5793 8.58052L14.1503 6.58052C13.9525 5.65858 13.1377 5 12.1948 5ZM7.37589 9L7.80491 7H12.1948L12.6238 9H7.37589Z" fill="currentColor"/>
</svg>
`;

const Cart$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_978)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5131 6L7.48727 6C7.29999 6 7.11329 6.02105 6.9307 6.06274C5.58464 6.37013 4.74263 7.71051 5.05002 9.05657L5.96345 13.0566C6.2231 14.1936 7.23443 15 8.40071 15L15.5996 15C16.7659 15 17.7772 14.1936 18.0369 13.0566L18.9503 9.05657C18.992 8.87398 19.0131 8.68729 19.0131 8.5C19.0131 7.11929 17.8938 6 16.5131 6ZM7.37596 8.01255C7.41248 8.00421 7.44982 8 7.48727 8L16.5131 8C16.7892 8 17.0131 8.22386 17.0131 8.5C17.0131 8.53746 17.0089 8.5748 17.0005 8.61131L16.0871 12.6113C16.0352 12.8387 15.8329 13 15.5996 13L8.40071 13C8.16745 13 7.96519 12.8387 7.91326 12.6113L6.99982 8.61131C6.93835 8.3421 7.10675 8.07403 7.37596 8.01255Z" fill="currentColor"/>
<path d="M3.49044 2L2 2C1.44772 2 1 1.55228 1 1C1 0.447715 1.44772 0 2 0L4.28977 0C4.75718 0 5.16223 0.323776 5.2652 0.779696L7.97543 12.7797C8.0971 13.3184 7.75902 13.8538 7.2203 13.9754C6.68159 14.0971 6.14624 13.759 6.02457 13.2203L3.49044 2Z" fill="currentColor"/>
<path d="M10 17.25C10 18.2165 9.2165 19 8.25 19C7.2835 19 6.5 18.2165 6.5 17.25C6.5 16.2835 7.2835 15.5 8.25 15.5C9.2165 15.5 10 16.2835 10 17.25Z" fill="currentColor"/>
<path d="M17 17.25C17 18.2165 16.2165 19 15.25 19C14.2835 19 13.5 18.2165 13.5 17.25C13.5 16.2835 14.2835 15.5 15.25 15.5C16.2165 15.5 17 16.2835 17 17.25Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_0_978">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const CellphoneEye$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.675 15.1375C12.675 15.5103 12.3727 15.8125 12 15.8125C11.6272 15.8125 11.325 15.5103 11.325 15.1375C11.325 14.7647 11.6272 14.4625 12 14.4625C12.3727 14.4625 12.675 14.7647 12.675 15.1375Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.9625C11.9033 14.9625 11.825 15.0409 11.825 15.1375C11.825 15.2342 11.9033 15.3125 12 15.3125C12.0966 15.3125 12.175 15.2342 12.175 15.1375C12.175 15.0409 12.0966 14.9625 12 14.9625ZM10.825 15.1375C10.825 14.4886 11.351 13.9625 12 13.9625C12.6489 13.9625 13.175 14.4886 13.175 15.1375C13.175 15.7865 12.6489 16.3125 12 16.3125C11.351 16.3125 10.825 15.7865 10.825 15.1375Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 3.5C5.5 1.84315 6.84315 0.5 8.5 0.5H15.5C17.1569 0.5 18.5 1.84315 18.5 3.5V16.5C18.5 18.1569 17.1569 19.5 15.5 19.5H8C6.61929 19.5 5.5 18.3807 5.5 17V16.5C5.5 15.9477 5.94772 15.5 6.5 15.5C7.05228 15.5 7.5 15.9477 7.5 16.5V17C7.5 17.2761 7.72386 17.5 8 17.5H15.5C16.0523 17.5 16.5 17.0523 16.5 16.5V3.5C16.5 2.94772 16.0523 2.5 15.5 2.5H8.5C7.94772 2.5 7.5 2.94772 7.5 3.5V5.75C7.5 6.30228 7.05228 6.75 6.5 6.75C5.94772 6.75 5.5 6.30228 5.5 5.75V3.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.13766 12.3592C3.67091 12.6592 4.47491 12.8762 5.41748 12.8762C6.36005 12.8762 7.16405 12.6592 7.6973 12.3592C8.26189 12.0416 8.33496 11.7594 8.33496 11.6726C8.33496 11.5859 8.26189 11.3036 7.6973 10.986C7.16405 10.6861 6.36005 10.4691 5.41748 10.4691C4.47491 10.4691 3.67091 10.6861 3.13766 10.986C2.57308 11.3036 2.5 11.5859 2.5 11.6726C2.5 11.7594 2.57308 12.0416 3.13766 12.3592ZM2.15714 14.1024C1.30388 13.6224 0.5 12.8029 0.5 11.6726C0.5 10.5424 1.30388 9.72285 2.15714 9.24289C3.04175 8.7453 4.19648 8.46906 5.41748 8.46906C6.63848 8.46906 7.79321 8.7453 8.67782 9.24289C9.53108 9.72285 10.335 10.5424 10.335 11.6726C10.335 12.8029 9.53108 13.6224 8.67782 14.1024C7.79321 14.6 6.63848 14.8762 5.41748 14.8762C4.19648 14.8762 3.04175 14.6 2.15714 14.1024Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.41746 7.09998C5.91451 7.09998 6.31746 7.50292 6.31746 7.99998L6.31746 9.46903C6.31746 9.96609 5.91451 10.369 5.41746 10.369C4.9204 10.369 4.51746 9.96609 4.51746 9.46903L4.51746 7.99998C4.51746 7.50292 4.9204 7.09998 5.41746 7.09998Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.55272 7.36238C8.04013 7.45986 8.35622 7.934 8.25874 8.4214L8.0139 9.64562C7.91642 10.133 7.44227 10.4491 6.95487 10.3516C6.46747 10.2542 6.15137 9.78001 6.24885 9.29261L6.49369 8.0684C6.59118 7.58099 7.06532 7.2649 7.55272 7.36238Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.28224 7.36238C2.79484 7.45986 2.47874 7.934 2.57622 8.4214L2.82106 9.64562C2.91854 10.133 3.39269 10.4491 3.88009 10.3516C4.36749 10.2542 4.68359 9.78001 4.58611 9.29261L4.34127 8.0684C4.24379 7.58099 3.76964 7.2649 3.28224 7.36238Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.03693 8.20762C0.610712 8.46335 0.472503 9.01618 0.728236 9.44241L1.46276 10.6666C1.7185 11.0928 2.27133 11.231 2.69755 10.9753C3.12378 10.7196 3.26198 10.1667 3.00625 9.74053L2.27172 8.51631C2.01599 8.09009 1.46316 7.95188 1.03693 8.20762Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.7979 8.20762C10.2241 8.46335 10.3623 9.01618 10.1066 9.44241L9.37207 10.6666C9.11634 11.0928 8.56351 11.231 8.13729 10.9753C7.71106 10.7196 7.57285 10.1667 7.82859 9.74053L8.56312 8.51631C8.81885 8.09009 9.37168 7.95188 9.7979 8.20762Z" fill="currentColor"/>
<path d="M5.41504 10.88C5.82925 10.88 6.16504 11.2158 6.16504 11.63C6.16504 12.0442 5.82925 12.38 5.41504 12.38C5.00083 12.38 4.66504 12.0442 4.66504 11.63C4.66504 11.2158 5.00083 10.88 5.41504 10.88Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.66504 11.63C5.66504 11.4919 5.55311 11.38 5.41504 11.38C5.27697 11.38 5.16504 11.4919 5.16504 11.63C5.16504 11.7681 5.27697 11.88 5.41504 11.88C5.55311 11.88 5.66504 11.7681 5.66504 11.63ZM5.41504 13.38C4.44854 13.38 3.66504 12.5965 3.66504 11.63C3.66504 10.6635 4.44854 9.88 5.41504 9.88C6.38154 9.88 7.16504 10.6635 7.16504 11.63C7.16504 12.5965 6.38154 13.38 5.41504 13.38Z" fill="currentColor"/>
</svg>
`;

const CellphoneLoop$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1213_2307)">
<path d="M12.675 15.1375C12.675 15.5103 12.3727 15.8125 12 15.8125C11.6272 15.8125 11.325 15.5103 11.325 15.1375C11.325 14.7647 11.6272 14.4625 12 14.4625C12.3727 14.4625 12.675 14.7647 12.675 15.1375Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.9625C11.9033 14.9625 11.825 15.0409 11.825 15.1375C11.825 15.2342 11.9033 15.3125 12 15.3125C12.0966 15.3125 12.175 15.2342 12.175 15.1375C12.175 15.0409 12.0966 14.9625 12 14.9625ZM10.825 15.1375C10.825 14.4886 11.351 13.9625 12 13.9625C12.6489 13.9625 13.175 14.4886 13.175 15.1375C13.175 15.7865 12.6489 16.3125 12 16.3125C11.351 16.3125 10.825 15.7865 10.825 15.1375Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 3.5C5.5 1.84315 6.84315 0.5 8.5 0.5H15.5C17.1569 0.5 18.5 1.84315 18.5 3.5V16.5C18.5 18.1569 17.1569 19.5 15.5 19.5H8C6.61929 19.5 5.5 18.3807 5.5 17V16.5C5.5 15.9477 5.94772 15.5 6.5 15.5C7.05228 15.5 7.5 15.9477 7.5 16.5V17C7.5 17.2761 7.72386 17.5 8 17.5H15.5C16.0523 17.5 16.5 17.0523 16.5 16.5V3.5C16.5 2.94772 16.0523 2.5 15.5 2.5H8.5C7.94772 2.5 7.5 2.94772 7.5 3.5V5.75C7.5 6.30228 7.05228 6.75 6.5 6.75C5.94772 6.75 5.5 6.30228 5.5 5.75V3.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.34728 9.37952C6.36534 8.67069 4.9947 8.89209 4.28587 9.87403C3.57704 10.856 3.79844 12.2266 4.78038 12.9355C5.76232 13.6443 7.13297 13.4229 7.8418 12.4409C8.55063 11.459 8.32923 10.0883 7.34728 9.37952ZM2.66423 8.70343C4.01957 6.82589 6.64034 6.40255 8.51789 7.75789C10.3954 9.11322 10.8188 11.734 9.46343 13.6115C8.30981 15.2097 6.23938 15.7542 4.49083 15.0451L2.39955 17.9421C2.0763 18.3899 1.45124 18.4909 1.00344 18.1677C0.555634 17.8444 0.454667 17.2193 0.77792 16.7715L2.8692 13.8745C1.64562 12.4381 1.51061 10.3016 2.66423 8.70343Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_1213_2307">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Chain$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="12.7835" y="2.38351" width="6" height="10" rx="3" transform="rotate(33.0385 12.7835 2.38351)" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<rect x="7.83558" y="6.32284" width="6" height="10" rx="3" transform="rotate(33.0385 7.83558 6.32284)" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;

const Checkmark$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.3742 5.98559L10.3742 14.9856C9.72664 16.1511 7.97832 15.1798 8.62585 14.0143L13.6258 5.01431C14.2734 3.84876 16.0217 4.82005 15.3742 5.98559Z" fill="currentColor"/>
<path d="M5.1247 9.71907L10.1247 13.7191C11.1659 14.552 9.91647 16.1137 8.87531 15.2808L3.87531 11.2808C2.83415 10.4479 4.08354 8.88615 5.1247 9.71907Z" fill="currentColor"/>
</svg>
`;

const Circle$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 10C4.5 13.0376 6.96243 15.5 10 15.5C13.0376 15.5 15.5 13.0376 15.5 10C15.5 6.96243 13.0376 4.5 10 4.5C6.96243 4.5 4.5 6.96243 4.5 10ZM13.5 10C13.5 11.933 11.933 13.5 10 13.5C8.067 13.5 6.5 11.933 6.5 10C6.5 8.067 8.067 6.5 10 6.5C11.933 6.5 13.5 8.067 13.5 10Z" fill="currentColor"/>
</svg>
`;

const CircleFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="10" r="6" fill="currentColor"/>
</svg>
`;

const Clipboard$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.67499 2.5C5.67499 1.94772 6.1227 1.5 6.67499 1.5H13.3178C13.8701 1.5 14.3178 1.94772 14.3178 2.5V6.375C14.3178 6.92728 13.8701 7.375 13.3178 7.375H6.67499C6.1227 7.375 5.67499 6.92728 5.67499 6.375V2.5ZM7.67499 3.5V5.375H12.3178V3.5H7.67499Z" fill="currentColor"/>
<path d="M16.0857 18H3.90713C3.29567 18 2.79999 17.5043 2.79999 16.8929V3.60714C2.79999 2.99568 3.29567 2.5 3.90713 2.5H7.22856V4.71429H5.01427V15.7857H14.9786V4.71429H12.7643V2.5H16.0857C16.6972 2.5 17.1928 2.99568 17.1928 3.60714V16.8929C17.1928 17.5043 16.6972 18 16.0857 18Z" fill="currentColor"/>
</svg>
`;

const ClipboardCheck$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.67499 2.5C5.67499 1.94772 6.1227 1.5 6.67499 1.5H13.3178C13.8701 1.5 14.3178 1.94772 14.3178 2.5V6.375C14.3178 6.92728 13.8701 7.375 13.3178 7.375H6.67499C6.1227 7.375 5.67499 6.92728 5.67499 6.375V2.5ZM7.67499 3.5V5.375H12.3178V3.5H7.67499Z" fill="currentColor"/>
<path d="M16.0857 18H3.90713C3.29567 18 2.79999 17.5043 2.79999 16.8929V3.60714C2.79999 2.99568 3.29567 2.5 3.90713 2.5H7.22856V4.71429H5.01427V15.7857H14.9786V4.71429H12.7643V2.5H16.0857C16.6972 2.5 17.1928 2.99568 17.1928 3.60714V16.8929C17.1928 17.5043 16.6972 18 16.0857 18Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5674 8.67659C13.0221 8.98997 13.1368 9.61267 12.8234 10.0674L11.0564 12.6317C10.5674 13.3413 9.58243 13.494 8.90161 12.9656L7.38689 11.79C6.95059 11.4514 6.87139 10.8232 7.21001 10.3869C7.54862 9.95059 8.17682 9.8714 8.61312 10.21L9.70981 11.0612L11.1765 8.93262C11.4899 8.47785 12.1126 8.36322 12.5674 8.67659Z" fill="currentColor"/>
</svg>
`;

const ClipboardCheckCircle$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.67999 2.5C5.67999 1.94772 6.12771 1.5 6.67999 1.5H13.3228C13.8751 1.5 14.3228 1.94772 14.3228 2.5V6.375C14.3228 6.92728 13.8751 7.375 13.3228 7.375H6.67999C6.12771 7.375 5.67999 6.92728 5.67999 6.375V2.5ZM7.67999 3.5V5.375H12.3228V3.5H7.67999Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.1979 9.4286V3.60714C17.1979 2.99568 16.7022 2.5 16.0907 2.5H12.7693V4.71429H14.9836V8.20241C15.8188 8.43582 16.5738 8.86145 17.1979 9.4286ZM5.01928 15.7857H8.49598C8.90391 16.6773 9.54315 17.441 10.3369 18H3.91214C3.30068 18 2.80499 17.5043 2.80499 16.8929V3.60714C2.80499 2.99568 3.30068 2.5 3.91214 2.5H7.23356V4.71429H5.01928V15.7857Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 17C15.433 17 17 15.433 17 13.5C17 11.567 15.433 10 13.5 10C11.567 10 10 11.567 10 13.5C10 15.433 11.567 17 13.5 17ZM13.5 19C16.5376 19 19 16.5376 19 13.5C19 10.4624 16.5376 8 13.5 8C10.4624 8 8 10.4624 8 13.5C8 16.5376 10.4624 19 13.5 19Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8703 11.7191C16.3016 12.0641 16.3715 12.6934 16.0265 13.1246L14.3755 15.1885C13.817 15.8866 12.7757 15.9443 12.1435 15.3121L11.0385 14.2071C10.648 13.8166 10.648 13.1834 11.0385 12.7929C11.429 12.4024 12.0622 12.4024 12.4527 12.7929L13.1627 13.5029L14.4648 11.8752C14.8098 11.444 15.4391 11.3741 15.8703 11.7191Z" fill="currentColor"/>
</svg>
`;

const Clock$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 6C10.5523 6 11 6.44772 11 7V10C11 10.5523 10.5523 11 10 11C9.44772 11 9 10.5523 9 10V7C9 6.44772 9.44772 6 10 6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 10C14 10.5523 13.5523 11 13 11H10C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9H13C13.5523 9 14 9.44772 14 10Z" fill="currentColor"/>
</svg>
`;

const Cloud$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 3H10C8.13616 3 6.57006 4.27477 6.12602 6H6C3.79086 6 2 7.79086 2 10C2 12.2091 3.79086 14 6 14H14C16.2091 14 18 12.2091 18 10C18 8.09985 16.6751 6.50915 14.8987 6.10135C14.4909 4.32493 12.9002 3 11 3ZM7.67644 8L8.06289 6.49852C8.28793 5.62419 9.08228 5 10 5H11C11.9367 5 12.7431 5.65018 12.9494 6.54883L13.2297 7.77025L14.4512 8.05064C15.3498 8.25694 16 9.06327 16 10C16 11.1046 15.1046 12 14 12H6C4.89543 12 4 11.1046 4 10C4 8.89543 4.89543 8 6 8H7.67644Z" fill="currentColor"/>
</svg>
`;

const CloudDown$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 3H10C8.13616 3 6.57006 4.27477 6.12602 6H6C3.79086 6 2 7.79086 2 10C2 12.2091 3.79086 14 6 14H14C16.2091 14 18 12.2091 18 10C18 8.09985 16.6751 6.50915 14.8987 6.10135C14.4909 4.32493 12.9002 3 11 3ZM7.67644 8L8.06289 6.49852C8.28793 5.62419 9.08228 5 10 5H11C11.9367 5 12.7431 5.65018 12.9494 6.54883L13.2297 7.77025L14.4512 8.05064C15.3498 8.25694 16 9.06327 16 10C16 11.1046 15.1046 12 14 12H6C4.89543 12 4 11.1046 4 10C4 8.89543 4.89543 8 6 8H7.67644Z" fill="currentColor"/>
<path d="M9.5 10C9.5 9.44772 9.94772 9 10.5 9C11.0523 9 11.5 9.44772 11.5 10L11.5 17.5C11.5 18.0523 11.0523 18.5 10.5 18.5C9.94772 18.5 9.5 18.0523 9.5 17.5V10Z" fill="currentColor"/>
<path d="M12.3753 14.7191C12.8065 14.3741 13.4358 14.444 13.7808 14.8753C14.1258 15.3065 14.0559 15.9358 13.6247 16.2808L11.1247 18.2808C10.6934 18.6258 10.0641 18.5559 9.71909 18.1247C9.37408 17.6934 9.44401 17.0641 9.87527 16.7191L12.3753 14.7191Z" fill="currentColor"/>
<path d="M7.37527 16.2808C6.94401 15.9358 6.87408 15.3065 7.21909 14.8753C7.5641 14.444 8.1934 14.3741 8.62466 14.7191L11.1247 16.7191C11.5559 17.0641 11.6258 17.6934 11.2808 18.1247C10.9358 18.5559 10.3065 18.6258 9.87527 18.2808L7.37527 16.2808Z" fill="currentColor"/>
</svg>
`;

const CloudDownFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 14V9.25C12 8.42157 11.3284 7.75 10.5 7.75C9.67157 7.75 9 8.42157 9 9.25V14H6C3.79086 14 2 12.2091 2 10C2 7.79086 3.79086 6 6 6H6.12602C6.57006 4.27477 8.13616 3 10 3H11C12.9002 3 14.4909 4.32493 14.8987 6.10135C16.6751 6.50915 18 8.09985 18 10C18 12.2091 16.2091 14 14 14H12Z" fill="currentColor"/>
<path d="M9.5 9.5C9.5 8.94772 9.94772 8.5 10.5 8.5C11.0523 8.5 11.5 8.94772 11.5 9.5L11.5 17C11.5 17.5523 11.0523 18 10.5 18C9.94772 18 9.5 17.5523 9.5 17V9.5Z" fill="currentColor"/>
<path d="M12.3753 14.7191C12.8065 14.3741 13.4358 14.444 13.7808 14.8753C14.1258 15.3065 14.0559 15.9358 13.6247 16.2808L11.1247 18.2808C10.6934 18.6258 10.0641 18.5559 9.71909 18.1247C9.37408 17.6934 9.44401 17.0641 9.87527 16.7191L12.3753 14.7191Z" fill="currentColor"/>
<path d="M7.37527 16.2808C6.94401 15.9358 6.87408 15.3065 7.21909 14.8753C7.5641 14.444 8.1934 14.3741 8.62466 14.7191L11.1247 16.7191C11.5559 17.0641 11.6258 17.6934 11.2808 18.1247C10.9358 18.5559 10.3065 18.6258 9.87527 18.2808L7.37527 16.2808Z" fill="currentColor"/>
</svg>
`;

const CloudFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2" y="6" width="16" height="8" rx="4" fill="currentColor"/>
<rect x="6" y="3" width="9" height="8" rx="4" fill="currentColor"/>
</svg>
`;

const CloudUp$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 3H10C8.13616 3 6.57006 4.27477 6.12602 6H6C3.79086 6 2 7.79086 2 10C2 12.2091 3.79086 14 6 14H14C16.2091 14 18 12.2091 18 10C18 8.09985 16.6751 6.50915 14.8987 6.10135C14.4909 4.32493 12.9002 3 11 3ZM7.67644 8L8.06289 6.49852C8.28793 5.62419 9.08228 5 10 5H11C11.9367 5 12.7431 5.65018 12.9494 6.54883L13.2297 7.77025L14.4512 8.05064C15.3498 8.25694 16 9.06327 16 10C16 11.1046 15.1046 12 14 12H6C4.89543 12 4 11.1046 4 10C4 8.89543 4.89543 8 6 8H7.67644Z" fill="currentColor"/>
<path d="M11.5 16C11.5 16.5523 11.0523 17 10.5 17C9.94772 17 9.5 16.5523 9.5 16V8.5C9.5 7.94772 9.94772 7.5 10.5 7.5C11.0523 7.5 11.5 7.94772 11.5 8.5V16Z" fill="currentColor"/>
<path d="M8.62473 11.2809C8.19347 11.6259 7.56418 11.556 7.21917 11.1247C6.87416 10.6935 6.94408 10.0642 7.37534 9.71917L9.87534 7.71917C10.3066 7.37416 10.9359 7.44408 11.2809 7.87534C11.6259 8.3066 11.556 8.9359 11.1247 9.28091L8.62473 11.2809Z" fill="currentColor"/>
<path d="M13.6247 9.71917C14.056 10.0642 14.1259 10.6935 13.7809 11.1247C13.4359 11.556 12.8066 11.6259 12.3753 11.2809L9.87534 9.28091C9.44408 8.9359 9.37416 8.3066 9.71917 7.87534C10.0642 7.44408 10.6935 7.37416 11.1247 7.71917L13.6247 9.71917Z" fill="currentColor"/>
</svg>
`;

const CloudUpFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 14V10.6777L12.252 11.2653C12.6872 11.6053 13.3157 11.5281 13.6557 11.0929C13.9957 10.6577 13.9186 10.0293 13.4834 9.68924L11.1791 7.88897C10.9911 7.71827 10.7494 7.6299 10.5057 7.63022C10.262 7.6299 10.0203 7.71827 9.83225 7.88897L7.52801 9.68924C7.0928 10.0293 7.01564 10.6577 7.35566 11.0929C7.69568 11.5281 8.32413 11.6053 8.75933 11.2653L9.5 10.6866V14H6C3.79086 14 2 12.2091 2 10C2 7.79086 3.79086 6 6 6H6.12602C6.57006 4.27477 8.13616 3 10 3H11C12.9002 3 14.4909 4.32493 14.8987 6.10135C16.6751 6.50915 18 8.09985 18 10C18 12.2091 16.2091 14 14 14H11.5Z" fill="currentColor"/>
</svg>
`;

const Coctail$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_384)">
<path d="M6 8C5.72386 8 5.5 7.77614 5.5 7.5C5.5 7.22386 5.72386 7 6 7H14C14.2761 7 14.5 7.22386 14.5 7.5C14.5 7.77614 14.2761 8 14 8H6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.7672 5.68045L9.2672 12.6805C9.66284 13.1065 10.3372 13.1065 10.7328 12.6805L17.2328 5.68045C17.8269 5.0406 17.3732 4 16.5 4L3.5 4C2.62683 4 2.17306 5.0406 2.7672 5.68045ZM14.2068 6L10 10.5304L5.79321 6L14.2068 6Z" fill="currentColor"/>
<path d="M11 11.5V18.5H9V11.5H11Z" fill="currentColor"/>
<path d="M14.5 20H5.5C5.5 18.5251 7.55015 17.5 10 17.5C12.4499 17.5 14.5 18.5251 14.5 20Z" fill="currentColor"/>
<path d="M12.8181 1.7276C12.4163 1.62714 12.1719 1.21994 12.2724 0.818093C12.3729 0.416246 12.7801 0.171926 13.1819 0.272387L17.1819 1.27239C17.5837 1.37285 17.8281 1.78005 17.7276 2.1819C17.6271 2.58374 17.2199 2.82806 16.8181 2.7276L12.8181 1.7276Z" fill="currentColor"/>
<path d="M11.2115 8.73717C11.0805 9.13013 10.6558 9.3425 10.2628 9.21151C9.86987 9.08052 9.6575 8.65578 9.78849 8.26283L12.2885 0.762827C12.4195 0.369869 12.8442 0.157499 13.2372 0.288485C13.6301 0.419471 13.8425 0.844211 13.7115 1.23717L11.2115 8.73717Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_0_384">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Code$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.59009 9.33104C1.95955 8.92053 2.59184 8.88726 3.00235 9.25671L6.33568 12.2567C6.74619 12.6262 6.77947 13.2585 6.41001 13.669C6.04055 14.0795 5.40826 14.1128 4.99775 13.7433L1.66442 10.7433C1.25391 10.3738 1.22063 9.74155 1.59009 9.33104Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.41001 6.33104C6.77947 6.74155 6.74619 7.37384 6.33568 7.7433L3.00235 10.7433C2.59184 11.1128 1.95955 11.0795 1.59009 10.669C1.22063 10.2585 1.25391 9.62617 1.66442 9.25671L4.99775 6.25671C5.40826 5.88726 6.04055 5.92053 6.41001 6.33104Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.41 9.33104C18.7795 9.74155 18.7462 10.3738 18.3357 10.7433L15.0023 13.7433C14.5918 14.1128 13.9595 14.0795 13.5901 13.669C13.2206 13.2585 13.2539 12.6262 13.6644 12.2567L16.9978 9.25671C17.4083 8.88726 18.0406 8.92053 18.41 9.33104Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5901 6.33104C13.9595 5.92053 14.5918 5.88726 15.0023 6.25671L18.3357 9.25671C18.7462 9.62617 18.7795 10.2585 18.41 10.669C18.0406 11.0795 17.4083 11.1128 16.9978 10.7433L13.6644 7.7433C13.2539 7.37384 13.2206 6.74155 13.5901 6.33104Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7631 3.53524C12.2959 3.68056 12.6101 4.2303 12.4648 4.76312L9.46477 15.7631C9.31945 16.2959 8.76971 16.6101 8.23689 16.4648C7.70406 16.3195 7.38993 15.7697 7.53524 15.2369L10.5352 4.23689C10.6806 3.70406 11.2303 3.38993 11.7631 3.53524Z" fill="currentColor"/>
</svg>
`;

const ColorPicker$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_3113)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5356 15.2365C5.97633 15.853 3.27902 17.6075 2.80762 17.1361C2.50215 16.8306 3.13133 15.5905 3.77986 14.331L8.44113 14.331C8.2399 14.5322 7.93805 14.8341 7.5356 15.2365Z" fill="currentColor"/>
<path d="M15.8033 5.55458C16.1938 5.16405 16.827 5.16405 17.2175 5.55458C17.608 5.9451 17.608 6.57827 17.2175 6.96879L8.2427 15.9436C8.14598 16.0403 8.03045 16.1162 7.90325 16.1665C7.50693 16.3231 7.10375 16.5206 6.15047 17.0117C5.67929 17.2544 5.47123 17.3604 5.21668 17.4858C3.46858 18.3471 2.81156 18.5542 2.10051 17.8432C1.3908 17.1334 1.59727 16.4757 2.45235 14.7382C2.57905 14.4807 2.68634 14.2702 2.93201 13.7932C3.42303 12.8399 3.62052 12.4367 3.77721 12.0404C3.82749 11.9132 3.90334 11.7977 4.00006 11.701L12.9749 2.72615C13.3654 2.33563 13.9986 2.33563 14.3891 2.72615C14.7796 3.11667 14.7796 3.74984 14.3891 4.14036L5.55695 12.9725C5.38269 13.3873 5.16356 13.8285 4.71001 14.709C4.47005 15.1749 4.36624 15.3786 4.24682 15.6213C4.22195 15.6718 4.19798 15.721 4.17491 15.7688C4.22595 15.7441 4.27855 15.7184 4.33275 15.6917C4.57289 15.5734 4.77428 15.4708 5.23465 15.2337C6.11519 14.7801 6.55635 14.561 6.97116 14.3867L15.8033 5.55458Z" fill="currentColor"/>
<path d="M14.3891 4.14039C13.9986 4.53092 13.3654 4.53092 12.9749 4.14039C12.5843 3.74987 12.5843 3.1167 12.9749 2.72618C14.1464 1.55461 16.0459 1.55461 17.2175 2.72618C18.3891 3.89775 18.3891 5.79725 17.2175 6.96882C16.827 7.35934 16.1938 7.35934 15.8033 6.96882C15.4128 6.5783 15.4128 5.94513 15.8033 5.55461C16.1938 5.16408 16.1938 4.53092 15.8033 4.14039C15.4128 3.74987 14.7796 3.74987 14.3891 4.14039Z" fill="currentColor"/>
<path d="M9.43729 4.84541C9.04677 4.45489 9.04677 3.82172 9.43729 3.4312C9.82782 3.04067 10.461 3.04067 10.8515 3.4312L16.5084 9.08805C16.8989 9.47858 16.8989 10.1117 16.5084 10.5023C16.1178 10.8928 15.4847 10.8928 15.0941 10.5023L9.43729 4.84541Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_0_3113">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Contract$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7071 9.70711C11.3166 10.0976 10.6834 10.0976 10.2929 9.70711C9.90237 9.31658 9.90237 8.68342 10.2929 8.29289L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.7071 9.70711Z" fill="currentColor"/>
<path d="M11 10C10.4477 10 10 9.55228 10 9C10 8.44772 10.4477 8 11 8H15C15.5523 8 16 8.44772 16 9C16 9.55228 15.5523 10 15 10H11Z" fill="currentColor"/>
<path d="M12 9C12 9.55228 11.5523 10 11 10C10.4477 10 10 9.55228 10 9V5C10 4.44772 10.4477 4 11 4C11.5523 4 12 4.44772 12 5V9Z" fill="currentColor"/>
<path d="M5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.29289 10.2929C8.68342 9.90237 9.31658 9.90237 9.70711 10.2929C10.0976 10.6834 10.0976 11.3166 9.70711 11.7071L5.70711 15.7071Z" fill="currentColor"/>
<path d="M10 15C10 15.5523 9.55228 16 9 16C8.44772 16 8 15.5523 8 15V11C8 10.4477 8.44772 10 9 10C9.55228 10 10 10.4477 10 11V15Z" fill="currentColor"/>
<path d="M5 12C4.44772 12 4 11.5523 4 11C4 10.4477 4.44772 10 5 10H9C9.55228 10 10 10.4477 10 11C10 11.5523 9.55228 12 9 12H5Z" fill="currentColor"/>
</svg>
`;

const Controller$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.25 10C11.5596 10 11 9.44036 11 8.75C11 8.05964 11.5596 7.5 12.25 7.5C12.9404 7.5 13.5 8.05964 13.5 8.75C13.5 9.44036 12.9404 10 12.25 10Z" fill="currentColor"/>
<path d="M14.25 12.5C13.5596 12.5 13 11.9404 13 11.25C13 10.5596 13.5596 10 14.25 10C14.9404 10 15.5 10.5596 15.5 11.25C15.5 11.9404 14.9404 12.5 14.25 12.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 4H5.5C2.73858 4 0.5 6.23858 0.5 9V11C0.5 13.7614 2.73858 16 5.5 16H14.5C17.2614 16 19.5 13.7614 19.5 11V9C19.5 6.23858 17.2614 4 14.5 4ZM2.5 9C2.5 7.34315 3.84315 6 5.5 6H14.5C16.1569 6 17.5 7.34315 17.5 9V11C17.5 12.6569 16.1569 14 14.5 14H5.5C3.84315 14 2.5 12.6569 2.5 11V9Z" fill="currentColor"/>
<path d="M4 11C3.44772 11 3 10.5523 3 10C3 9.44772 3.44772 9 4 9H8C8.55228 9 9 9.44772 9 10C9 10.5523 8.55228 11 8 11H4Z" fill="currentColor"/>
<path d="M7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12V8C5 7.44772 5.44772 7 6 7C6.55228 7 7 7.44772 7 8V12Z" fill="currentColor"/>
</svg>
`;

const Countdown$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 3C9.5 2.44772 9.94772 2 10.5 2C14.9183 2 18.5 5.58172 18.5 10C18.5 14.4183 14.9183 18 10.5 18C6.08172 18 2.5 14.4183 2.5 10C2.5 9.44772 2.94772 9 3.5 9C4.05228 9 4.5 9.44772 4.5 10C4.5 13.3137 7.18629 16 10.5 16C13.8137 16 16.5 13.3137 16.5 10C16.5 6.68629 13.8137 4 10.5 4C9.94772 4 9.5 3.55228 9.5 3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.39443 11.4472C6.64142 10.9533 6.44119 10.3526 5.94721 10.1056L3.94721 9.1056C3.45324 8.85861 2.85256 9.05883 2.60557 9.55281C2.35858 10.0468 2.55881 10.6475 3.05279 10.8945L5.05279 11.8945C5.54677 12.1414 6.14744 11.9412 6.39443 11.4472Z" fill="currentColor"/>
<path d="M8.5 3.5C8.5 4.05228 8.05228 4.5 7.5 4.5C6.94772 4.5 6.5 4.05228 6.5 3.5C6.5 2.94772 6.94772 2.5 7.5 2.5C8.05228 2.5 8.5 2.94772 8.5 3.5Z" fill="currentColor"/>
<path d="M6 5C6 5.55228 5.55228 6 5 6C4.44772 6 4 5.55228 4 5C4 4.44772 4.44772 4 5 4C5.55228 4 6 4.44772 6 5Z" fill="currentColor"/>
<path d="M4.5 7.5C4.5 8.05228 4.05228 8.5 3.5 8.5C2.94772 8.5 2.5 8.05228 2.5 7.5C2.5 6.94772 2.94772 6.5 3.5 6.5C4.05228 6.5 4.5 6.94772 4.5 7.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.20711 9.29284C4.59764 9.68336 4.59764 10.3165 4.20711 10.7071L2.70711 12.2071C2.31659 12.5976 1.68342 12.5976 1.2929 12.2071C0.902375 11.8165 0.902375 11.1834 1.2929 10.7928L2.7929 9.29284C3.18342 8.90232 3.81659 8.90232 4.20711 9.29284Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 6C11.0523 6 11.5 6.44772 11.5 7V10C11.5 10.5523 11.0523 11 10.5 11C9.94772 11 9.5 10.5523 9.5 10V7C9.5 6.44772 9.94772 6 10.5 6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 10C14.5 10.5523 14.0523 11 13.5 11H10.5C9.94772 11 9.5 10.5523 9.5 10C9.5 9.44772 9.94772 9 10.5 9H13.5C14.0523 9 14.5 9.44772 14.5 10Z" fill="currentColor"/>
</svg>
`;

const CreditCard$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 3.5H4C2.34315 3.5 1 4.84315 1 6.5V13.5C1 15.1569 2.34315 16.5 4 16.5H16C17.6569 16.5 19 15.1569 19 13.5V6.5C19 4.84315 17.6569 3.5 16 3.5ZM3 6.5C3 5.94772 3.44772 5.5 4 5.5H16C16.5523 5.5 17 5.94772 17 6.5V13.5C17 14.0523 16.5523 14.5 16 14.5H4C3.44772 14.5 3 14.0523 3 13.5V6.5Z" fill="currentColor"/>
<path d="M2.5 6.5H17.5C17.7761 6.5 18 6.72386 18 7V8C18 8.27614 17.7761 8.5 17.5 8.5H2.5C2.22386 8.5 2 8.27614 2 8V7C2 6.72386 2.22386 6.5 2.5 6.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 9.5H5C4.44772 9.5 4 9.94772 4 10.5V11.5C4 12.0523 4.44772 12.5 5 12.5H6C6.55228 12.5 7 12.0523 7 11.5V10.5C7 9.94772 6.55228 9.5 6 9.5ZM5 11.5V10.5H6V11.5H5Z" fill="currentColor"/>
</svg>
`;

const Crown$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2666 9.92826L14.8997 10.1618C13.5228 11.0379 11.6981 10.6528 10.7929 9.29487L10 8.10556L9.20712 9.29487C8.30186 10.6528 6.47719 11.0379 5.10034 10.1618L4.73342 9.92826L5.54178 13H14.4582L15.2666 9.92826ZM3.65358 6.87047C2.88614 6.38209 1.91813 7.08891 2.14963 7.96862L3.80381 14.2545C3.91942 14.6938 4.31662 15 4.77089 15H15.2291C15.6834 15 16.0806 14.6938 16.1962 14.2545L17.8504 7.96862C18.0819 7.08891 17.1139 6.38209 16.3464 6.87047L13.8259 8.47443C13.367 8.76649 12.7587 8.6381 12.457 8.18547L10.832 5.74808C10.4362 5.15435 9.56377 5.15435 9.16795 5.74808L7.54302 8.18547C7.24127 8.6381 6.63304 8.76649 6.1741 8.47443L3.65358 6.87047Z" fill="currentColor"/>
<path d="M11 3.5C11 4.05228 10.5523 4.5 10 4.5C9.44772 4.5 9 4.05228 9 3.5C9 2.94772 9.44772 2.5 10 2.5C10.5523 2.5 11 2.94772 11 3.5Z" fill="currentColor"/>
<path d="M19 5.5C19 6.05228 18.5523 6.5 18 6.5C17.4477 6.5 17 6.05228 17 5.5C17 4.94772 17.4477 4.5 18 4.5C18.5523 4.5 19 4.94772 19 5.5Z" fill="currentColor"/>
<path d="M3 5.5C3 6.05228 2.55228 6.5 2 6.5C1.44772 6.5 1 6.05228 1 5.5C1 4.94772 1.44772 4.5 2 4.5C2.55228 4.5 3 4.94772 3 5.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 16.25C4.5 15.6977 4.94772 15.25 5.5 15.25H14.7513C15.3036 15.25 15.7513 15.6977 15.7513 16.25C15.7513 16.8023 15.3036 17.25 14.7513 17.25H5.5C4.94772 17.25 4.5 16.8023 4.5 16.25Z" fill="currentColor"/>
</svg>
`;

const Cup$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 4H3.5C2.94772 4 2.5 4.44772 2.5 5C2.5 9.91828 5.56129 14 9.5 14C13.4387 14 16.5 9.91828 16.5 5C16.5 4.44772 16.0523 4 15.5 4ZM9.5 12C7.04469 12 4.90411 9.43007 4.55098 6H14.449C14.0959 9.43007 11.9553 12 9.5 12Z" fill="currentColor"/>
<path d="M4 14.5H15C15.5523 14.5 16 14.9477 16 15.5C16 16.0523 15.5523 16.5 15 16.5H4C3.44772 16.5 3 16.0523 3 15.5C3 14.9477 3.44772 14.5 4 14.5Z" fill="currentColor"/>
<path d="M14.0244 10.8095L14.5756 8.88698C14.8334 8.96088 15.115 9 15.4073 9C16.5144 9 17.3 8.45687 17.3 8C17.3 7.54313 16.5144 7 15.4073 7V5C17.4953 5 19.3 6.24773 19.3 8C19.3 9.75227 17.4953 11 15.4073 11C14.9297 11 14.4625 10.9351 14.0244 10.8095Z" fill="currentColor"/>
</svg>
`;

const Cv$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.3334 5.94669C17.3467 5.47335 17.1667 5.00669 16.82 4.66002L13.34 1.18002C13 0.846687 12.5467 0.666687 12.0934 0.666687H4.00002C3.26669 0.666687 2.66669 1.26002 2.66669 2.00002V18C2.66669 18.7334 3.26669 19.3334 4.00002 19.3334H16C16.7334 19.3334 17.3334 18.7334 17.3334 18V5.94669ZM12.3334 3.00669L14.9934 5.66669H12.3334V3.00669V3.00669ZM15.3334 17.3334H4.66669V2.66669H10.3334V5.90669C10.3334 6.87335 11.12 7.66669 12.0934 7.66669H15.3334V17.3334Z" fill="currentColor"/>
<path d="M8.00152 6.79986C8.59058 6.79986 9.06811 6.32233 9.06811 5.73327C9.06811 5.14421 8.59058 4.66669 8.00152 4.66669C7.41246 4.66669 6.93494 5.14421 6.93494 5.73327C6.93494 6.32233 7.41246 6.79986 8.00152 6.79986Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.1335 9.11105C10.1335 7.97656 9.17859 7.15564 8.00036 7.15564C6.82214 7.15564 5.86719 7.97656 5.86719 9.11105L5.8679 9.64434C5.8679 9.73864 5.90536 9.82907 5.97203 9.89574C6.03871 9.96241 6.12914 9.99987 6.22343 9.99987H9.77801C9.8723 9.99987 9.96273 9.96241 10.0294 9.89574C10.0961 9.82907 10.1335 9.73864 10.1335 9.64434V9.11105Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.16669 12.5C6.16669 12.2239 6.39054 12 6.66669 12H13.3334C13.6095 12 13.8334 12.2239 13.8334 12.5C13.8334 12.7761 13.6095 13 13.3334 13H6.66669C6.39054 13 6.16669 12.7761 6.16669 12.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.16669 14.8334C6.16669 14.5572 6.39054 14.3334 6.66669 14.3334H13.3334C13.6095 14.3334 13.8334 14.5572 13.8334 14.8334C13.8334 15.1095 13.6095 15.3334 13.3334 15.3334H6.66669C6.39054 15.3334 6.16669 15.1095 6.16669 14.8334Z" fill="currentColor"/>
</svg>
`;

const Division$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 11C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H5Z" fill="currentColor"/>
<circle cx="10" cy="5.5" r="1.5" fill="currentColor"/>
<circle cx="10" cy="14.5" r="1.5" fill="currentColor"/>
</svg>
`;

const DotsX$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5" cy="10" r="2" fill="currentColor"/>
<circle cx="10" cy="10" r="2" fill="currentColor"/>
<circle cx="15" cy="10" r="2" fill="currentColor"/>
</svg>
`;

const DotsY$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="15" r="2" fill="currentColor"/>
<circle cx="10" cy="10" r="2" fill="currentColor"/>
<circle cx="10" cy="5" r="2" fill="currentColor"/>
</svg>
`;

const Dress$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_631)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99927 2.70211L9.64627 2.5941C9.28672 2.48409 8.90774 2.45252 8.53495 2.50153C7.09604 2.69069 6.08292 4.01049 6.27208 5.4494L6.46159 6.89101C6.65785 8.38388 7.93029 9.5 9.436 9.5H10.563C12.0687 9.5 13.3412 8.38388 13.5374 6.89101L13.7269 5.4494C13.7759 5.07661 13.7444 4.69765 13.6344 4.33811C13.2098 2.95027 11.7405 2.1694 10.3527 2.59398L9.99927 2.70211ZM8.79562 4.48447C8.88468 4.47276 8.97522 4.48031 9.06112 4.50659L9.99924 4.79362L10.9378 4.50648C11.2694 4.40504 11.6204 4.59161 11.7219 4.9232C11.7482 5.00911 11.7557 5.09965 11.744 5.18872L11.5545 6.63033C11.4891 7.12796 11.0649 7.5 10.563 7.5H9.436C8.9341 7.5 8.50995 7.12796 8.44453 6.63033L8.25502 5.18872C8.20983 4.84496 8.45187 4.52966 8.79562 4.48447Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9944 8L7.76658 8C7.22684 8 6.69709 8.14562 6.23318 8.42149C4.53499 9.43138 3.28005 10.5679 2.46835 11.8311C2.20882 12.235 1.94566 12.6035 1.69984 12.9477C0.629095 14.4468 -0.112874 15.4856 1.20518 16.9893C2.82583 18.8381 6.25948 20 9.62895 20C12.9984 20 16.355 19.3152 18.5339 16.9893C20.1469 15.2674 19.4765 14.4997 18.4337 13.3053C18.0679 12.8863 17.6561 12.4148 17.2811 11.8311C16.4381 10.5193 15.1772 9.37695 13.4983 8.40423C13.0413 8.13944 12.5225 8 11.9944 8ZM15.5985 12.9123C15.791 13.2119 15.9976 13.4982 16.2256 13.7871C16.2732 13.8474 16.4182 14.0186 16.5949 14.2274C16.8774 14.5611 17.2411 14.9907 17.4184 15.2167C17.3498 15.31 17.2393 15.4458 17.0743 15.622C15.557 17.2417 13.041 18 9.62895 18C6.72121 18 3.87183 16.9973 2.70916 15.6709C2.51428 15.4486 2.49949 15.4439 2.49975 15.4404C2.49978 15.44 2.50002 15.4396 2.50019 15.4389C2.52953 15.3206 2.64581 15.0964 2.89442 14.7271C2.92791 14.6773 3.04237 14.5151 3.18785 14.309C3.45827 13.9257 3.83589 13.3906 3.99994 13.1434C4.05145 13.0658 4.10169 12.9889 4.15093 12.9123C4.78162 11.9308 5.8079 11.0013 7.25545 10.1405C7.41006 10.0485 7.58667 10 7.76658 10L11.9944 10C12.1704 10 12.3434 10.0465 12.4957 10.1347C13.9132 10.9561 14.9381 11.8845 15.5985 12.9123Z" fill="currentColor"/>
<path d="M5.80364 1.27854C5.64981 0.893957 5.83687 0.457479 6.22146 0.303644C6.60605 0.149809 7.04252 0.33687 7.19636 0.721458L8.19636 3.22146C8.35019 3.60605 8.16313 4.04252 7.77854 4.19636C7.39396 4.35019 6.95748 4.16313 6.80364 3.77854L5.80364 1.27854Z" fill="currentColor"/>
<path d="M12.8036 0.721458C12.9575 0.33687 13.394 0.149809 13.7785 0.303644C14.1631 0.457479 14.3502 0.893957 14.1964 1.27854L13.1964 3.77854C13.0425 4.16313 12.606 4.35019 12.2215 4.19636C11.8369 4.04252 11.6498 3.60605 11.8036 3.22146L12.8036 0.721458Z" fill="currentColor"/>
<path d="M9.5 12.5C9.5 12.2239 9.72386 12 10 12C10.2761 12 10.5 12.2239 10.5 12.5V16.5C10.5 16.7761 10.2761 17 10 17C9.72386 17 9.5 16.7761 9.5 16.5V12.5Z" fill="currentColor"/>
<path d="M7.05257 12.2768C7.17582 12.0297 7.47606 11.9293 7.72317 12.0526C7.97028 12.1758 8.07069 12.4761 7.94744 12.7232L6.44744 15.7306C6.32418 15.9777 6.02395 16.0781 5.77684 15.9549C5.52973 15.8316 5.42932 15.5314 5.55257 15.2843L7.05257 12.2768Z" fill="currentColor"/>
<path d="M12.9472 12.2764C12.8237 12.0294 12.5234 11.9293 12.2764 12.0528C12.0294 12.1763 11.9293 12.4766 12.0528 12.7236L13.5528 15.7236C13.6763 15.9706 13.9766 16.0707 14.2236 15.9472C14.4706 15.8237 14.5707 15.5234 14.4472 15.2764L12.9472 12.2764Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_0_631">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Duplicate$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 6.5H7.5C6.94772 6.5 6.5 6.94772 6.5 7.5V15.5C6.5 16.0523 6.94772 16.5 7.5 16.5H15.5C16.0523 16.5 16.5 16.0523 16.5 15.5V7.5C16.5 6.94772 16.0523 6.5 15.5 6.5ZM8.5 14.5V8.5H14.5V14.5H8.5Z" fill="currentColor"/>
<path d="M6.5 13.5H4.5C3.94772 13.5 3.5 13.0523 3.5 12.5V4.5C3.5 3.94772 3.94772 3.5 4.5 3.5H12.5C13.0523 3.5 13.5 3.94772 13.5 4.5V6.5H11.5V5.5H5.5V11.5H6.5V13.5Z" fill="currentColor"/>
</svg>
`;

const Electricity$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 8H11.9451L13.9191 3.39392C14.2019 2.73405 13.7179 2 13 2H8C7.59997 2 7.23843 2.2384 7.08086 2.60608L4.08086 9.60608C3.79805 10.2659 4.28208 11 5 11H6.73423L4.07207 17.6273C3.67234 18.6223 4.90667 19.4633 5.68646 18.7272L10.7099 13.9849L15.6501 9.75985C16.3559 9.156 15.9289 8 15 8ZM9.50943 8.60608C9.22663 9.26595 9.71066 10 10.4286 10H12.2929L9.37334 12.4979L7.62514 14.1477L9.14152 10.3727C9.40546 9.71569 8.92168 9 8.21359 9H6.51654L8.6594 4H11.4835L9.50943 8.60608Z" fill="currentColor"/>
</svg>
`;

const Enter$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.86676 8L10.9501 10.5L8.86676 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.8667 13L10.95 10.5L8.8667 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.70001 10.5L3.20001 10.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<line x1="15.25" y1="17.5" x2="6.25" y2="17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<line x1="15.25" y1="3.5" x2="6.25" y2="3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M6.25 17.5V13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M6.25 7.5V3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M15.6 17.5V3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;

const Exclamation$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2C11.1046 2 12 2.89543 12 4V11C12 12.1046 11.1046 13 10 13C8.89543 13 8 12.1046 8 11V4C8 2.89543 8.89543 2 10 2Z" fill="currentColor"/>
<path d="M12 16C12 17.1046 11.1046 18 10 18C8.89543 18 8 17.1046 8 16C8 14.8954 8.89543 14 10 14C11.1046 14 12 14.8954 12 16Z" fill="currentColor"/>
</svg>
`;

const ExclamationCircle$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 7C9 6.44772 9.44772 6 10 6C10.5523 6 11 6.44772 11 7V11C11 11.5523 10.5523 12 10 12C9.44772 12 9 11.5523 9 11V7Z" fill="currentColor"/>
<circle cx="10" cy="14" r="1" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z" fill="currentColor"/>
</svg>
`;

const ExclamationFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18ZM10 6C9.44772 6 9 6.44772 9 7V11C9 11.5523 9.44772 12 10 12C10.5523 12 11 11.5523 11 11V7C11 6.44772 10.5523 6 10 6ZM10 15C10.5523 15 11 14.5523 11 14C11 13.4477 10.5523 13 10 13C9.44772 13 9 13.4477 9 14C9 14.5523 9.44772 15 10 15Z" fill="currentColor"/>
</svg>
`;

const Expand$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.29289 10.2929C8.68342 9.90237 9.31658 9.90237 9.70711 10.2929C10.0976 10.6834 10.0976 11.3166 9.70711 11.7071L5.70711 15.7071Z" fill="currentColor"/>
<path d="M5 16C4.44772 16 4 15.5523 4 15C4 14.4477 4.44772 14 5 14H9C9.55228 14 10 14.4477 10 15C10 15.5523 9.55228 16 9 16H5Z" fill="currentColor"/>
<path d="M6 15C6 15.5523 5.55228 16 5 16C4.44772 16 4 15.5523 4 15V11C4 10.4477 4.44772 10 5 10C5.55228 10 6 10.4477 6 11V15Z" fill="currentColor"/>
<path d="M11.7071 9.70711C11.3166 10.0976 10.6834 10.0976 10.2929 9.70711C9.90237 9.31658 9.90237 8.68342 10.2929 8.29289L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.7071 9.70711Z" fill="currentColor"/>
<path d="M16 9C16 9.55228 15.5523 10 15 10C14.4477 10 14 9.55228 14 9V5C14 4.44772 14.4477 4 15 4C15.5523 4 16 4.44772 16 5V9Z" fill="currentColor"/>
<path d="M11 6C10.4477 6 10 5.55228 10 5C10 4.44772 10.4477 4 11 4H15C15.5523 4 16 4.44772 16 5C16 5.55228 15.5523 6 15 6H11Z" fill="currentColor"/>
</svg>
`;

const Eye$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.5C14.8972 16.5 19 14.1922 19 11C19 7.80784 14.8972 5.5 10 5.5C5.10282 5.5 1 7.80784 1 11C1 14.1922 5.10282 16.5 10 16.5ZM10 7.5C13.9394 7.5 17 9.2216 17 11C17 12.7784 13.9394 14.5 10 14.5C6.06062 14.5 3 12.7784 3 11C3 9.2216 6.06062 7.5 10 7.5Z" fill="currentColor"/>
<path d="M9 3.5C9 2.94772 9.44772 2.5 10 2.5C10.5523 2.5 11 2.94772 11 3.5L11 6.5C11 7.05228 10.5523 7.5 10 7.5C9.44772 7.5 9 7.05228 9 6.5L9 3.5Z" fill="currentColor"/>
<path d="M13.0194 3.80383C13.1277 3.26227 13.6546 2.91106 14.1961 3.01937C14.7377 3.12768 15.0889 3.65451 14.9806 4.19606L14.4806 6.69606C14.3723 7.23762 13.8455 7.58884 13.3039 7.48053C12.7623 7.37222 12.4111 6.84539 12.5194 6.30383L13.0194 3.80383Z" fill="currentColor"/>
<path d="M6.98057 3.80383C6.87226 3.26227 6.34543 2.91106 5.80387 3.01937C5.26231 3.12768 4.9111 3.65451 5.01941 4.19606L5.51941 6.69606C5.62772 7.23762 6.15455 7.58884 6.69611 7.48053C7.23767 7.37222 7.58888 6.84539 7.48057 6.30383L6.98057 3.80383Z" fill="currentColor"/>
<path d="M2.85749 4.98553C2.57335 4.51195 1.95909 4.35839 1.48551 4.64254C1.01193 4.92668 0.85836 5.54094 1.14251 6.01452L2.64251 8.51452C2.92666 8.98811 3.54092 9.14167 4.0145 8.85752C4.48808 8.57337 4.64164 7.95911 4.35749 7.48553L2.85749 4.98553Z" fill="currentColor"/>
<path d="M17.1425 4.98553C17.4267 4.51195 18.0409 4.35839 18.5145 4.64254C18.9881 4.92668 19.1416 5.54094 18.8575 6.01452L17.3575 8.51452C17.0733 8.98811 16.4591 9.14167 15.9855 8.85752C15.5119 8.57337 15.3584 7.95911 15.6425 7.48553L17.1425 4.98553Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 14C11.933 14 13.5 12.433 13.5 10.5C13.5 8.567 11.933 7 10 7C8.067 7 6.5 8.567 6.5 10.5C6.5 12.433 8.067 14 10 14ZM10 9C10.8284 9 11.5 9.67157 11.5 10.5C11.5 11.3284 10.8284 12 10 12C9.17157 12 8.5 11.3284 8.5 10.5C8.5 9.67157 9.17157 9 10 9Z" fill="currentColor"/>
</svg>
`;

const EyeClosed$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.68788 8.3059C1.36566 7.85735 1.46807 7.23252 1.91662 6.9103C2.36517 6.58809 2.99 6.6905 3.31221 7.13905C3.61607 7.56204 4.08478 7.96552 4.6918 8.31591C5.98518 9.0625 7.7771 9.5 9.7043 9.5C11.6315 9.5 13.4234 9.0625 14.7168 8.31591C15.3238 7.96552 15.7925 7.56204 16.0964 7.13905C16.4186 6.6905 17.0434 6.58809 17.492 6.9103C17.9405 7.23252 18.0429 7.85735 17.7207 8.3059C17.2402 8.97475 16.5568 9.56308 15.7167 10.048C14.1049 10.9784 11.9685 11.5 9.7043 11.5C7.44007 11.5 5.30367 10.9784 3.69195 10.048C2.85179 9.56308 2.16836 8.97475 1.68788 8.3059Z" fill="currentColor"/>
<path d="M11 11C11 10.4477 10.5523 10 10 10C9.44772 10 9 10.4477 9 11L9 13.5C9 14.0523 9.44772 14.5 10 14.5C10.5523 14.5 11 14.0523 11 13.5L11 11Z" fill="currentColor"/>
<path d="M5.52987 10.7575C5.66381 10.2217 6.20675 9.8959 6.74254 10.0298C7.27834 10.1638 7.6041 10.7067 7.47015 11.2425L6.97015 13.2425C6.8362 13.7783 6.29327 14.1041 5.75747 13.9701C5.22168 13.8362 4.89592 13.2933 5.02987 12.7575L5.52987 10.7575Z" fill="currentColor"/>
<path d="M13.9702 10.7575C13.8362 10.2217 13.2933 9.8959 12.7575 10.0298C12.2217 10.1638 11.8959 10.7067 12.0299 11.2425L12.5299 13.2425C12.6638 13.7783 13.2067 14.1041 13.7425 13.9701C14.2783 13.8362 14.6041 13.2933 14.4702 12.7575L13.9702 10.7575Z" fill="currentColor"/>
<path d="M16.5249 8.29289C16.1344 7.90237 15.5012 7.90237 15.1107 8.29289C14.7201 8.68342 14.7201 9.31658 15.1107 9.70711L17.1107 11.7071C17.5012 12.0976 18.1344 12.0976 18.5249 11.7071C18.9154 11.3166 18.9154 10.6834 18.5249 10.2929L16.5249 8.29289Z" fill="currentColor"/>
<path d="M3.07775 8.32742C3.44921 7.91872 4.08165 7.88853 4.49036 8.25999C4.89906 8.63145 4.92925 9.26389 4.55779 9.67259L2.74002 11.6726C2.36857 12.0813 1.73612 12.1115 1.32742 11.74C0.918719 11.3686 0.88853 10.7361 1.25999 10.3274L3.07775 8.32742Z" fill="currentColor"/>
</svg>
`;

const EyeFrame$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.07095 12.0821C7.76993 12.4753 8.8029 12.75 9.99837 12.75C11.1938 12.75 12.2268 12.4753 12.9258 12.0821C13.6561 11.6713 13.8317 11.2603 13.8317 11.0312C13.8317 10.8022 13.6561 10.3912 12.9258 9.98038C12.2268 9.5872 11.1938 9.3125 9.99837 9.3125C8.8029 9.3125 7.76993 9.5872 7.07095 9.98038C6.34063 10.3912 6.16504 10.8022 6.16504 11.0312C6.16504 11.2603 6.34063 11.6713 7.07095 12.0821ZM6.09043 13.8253C5.07143 13.2521 4.16504 12.3037 4.16504 11.0312C4.16504 9.75876 5.07143 8.81041 6.09043 8.23723C7.14077 7.64641 8.52447 7.3125 9.99837 7.3125C11.4723 7.3125 12.856 7.64641 13.9063 8.23723C14.9253 8.81041 15.8317 9.75876 15.8317 11.0312C15.8317 12.3037 14.9253 13.2521 13.9063 13.8253C12.856 14.4161 11.4723 14.75 9.99837 14.75C8.52447 14.75 7.14077 14.4161 6.09043 13.8253Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99841 5.5C10.5507 5.5 10.9984 5.94772 10.9984 6.5L10.9984 8.3125C10.9984 8.86478 10.5507 9.3125 9.99841 9.3125C9.44613 9.3125 8.99841 8.86478 8.99841 8.3125L8.99841 6.5C8.99841 5.94772 9.44613 5.5 9.99841 5.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6112 5.82149C13.1527 5.9298 13.504 6.45663 13.3956 6.99819L13.0936 8.50861C12.9853 9.05017 12.4584 9.40138 11.9169 9.29307C11.3753 9.18476 11.0241 8.65793 11.1324 8.11637L11.4345 6.60596C11.5428 6.0644 12.0696 5.71318 12.6112 5.82149Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.38564 5.82149C6.84408 5.9298 6.49286 6.45663 6.60118 6.99819L6.90326 8.50861C7.01157 9.05017 7.5384 9.40138 8.07996 9.29307C8.62152 9.18476 8.97273 8.65793 8.86442 8.11637L8.56234 6.60596C8.45403 6.0644 7.9272 5.71318 7.38564 5.82149Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.65051 6.85079C4.17693 7.13494 4.02337 7.7492 4.30752 8.22278L5.21377 9.73319C5.49792 10.2068 6.11218 10.3603 6.58576 10.0762C7.05934 9.79204 7.2129 9.17778 6.92875 8.7042L6.0225 7.19379C5.73835 6.72021 5.12409 6.56664 4.65051 6.85079Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3462 6.85079C15.8198 7.13494 15.9733 7.7492 15.6892 8.22278L14.7829 9.73319C14.4988 10.2068 13.8845 10.3603 13.4109 10.0762C12.9374 9.79204 12.7838 9.17778 13.068 8.7042L13.9742 7.19379C14.2583 6.72021 14.8726 6.56664 15.3462 6.85079Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.48792 10.7292C9.48792 11.0111 9.71644 11.2396 9.99833 11.2396C10.2802 11.2396 10.5087 11.0111 10.5087 10.7292C10.5087 10.4473 10.2802 10.2188 9.99833 10.2188C9.71644 10.2188 9.48792 10.4473 9.48792 10.7292ZM9.99833 13.2396C8.61187 13.2396 7.48792 12.1157 7.48792 10.7292C7.48792 9.34274 8.61187 8.21879 9.99833 8.21879C11.3848 8.21879 12.5087 9.34274 12.5087 10.7292C12.5087 12.1157 11.3848 13.2396 9.99833 13.2396Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 4C1.5 2.61929 2.61929 1.5 4 1.5H5.96154C6.51382 1.5 6.96154 1.94772 6.96154 2.5C6.96154 3.05228 6.51382 3.5 5.96154 3.5H4C3.72386 3.5 3.5 3.72386 3.5 4V6.25C3.5 6.80228 3.05228 7.25 2.5 7.25C1.94772 7.25 1.5 6.80228 1.5 6.25V4ZM12.75 2.5C12.75 1.94772 13.1977 1.5 13.75 1.5H16C17.3807 1.5 18.5 2.61929 18.5 4V6.25C18.5 6.80228 18.0523 7.25 17.5 7.25C16.9477 7.25 16.5 6.80228 16.5 6.25V4C16.5 3.72386 16.2761 3.5 16 3.5H13.75C13.1977 3.5 12.75 3.05228 12.75 2.5ZM2.5 12.4615C3.05228 12.4615 3.5 12.9093 3.5 13.4615V16C3.5 16.2761 3.72386 16.5 4 16.5H6.25C6.80228 16.5 7.25 16.9477 7.25 17.5C7.25 18.0523 6.80228 18.5 6.25 18.5H4C2.61929 18.5 1.5 17.3807 1.5 16V13.4615C1.5 12.9093 1.94772 12.4615 2.5 12.4615ZM17.5 12.75C18.0523 12.75 18.5 13.1977 18.5 13.75V16C18.5 17.3807 17.3807 18.5 16 18.5H13.75C13.1977 18.5 12.75 18.0523 12.75 17.5C12.75 16.9477 13.1977 16.5 13.75 16.5H16C16.2761 16.5 16.5 16.2761 16.5 16V13.75C16.5 13.1977 16.9477 12.75 17.5 12.75Z" fill="currentColor"/>
</svg>
`;

const EyeOff$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.5C14.8972 16.5 19 14.1922 19 11C19 7.80784 14.8972 5.5 10 5.5C5.10282 5.5 1 7.80784 1 11C1 14.1922 5.10282 16.5 10 16.5ZM10 7.5C13.9394 7.5 17 9.2216 17 11C17 12.7784 13.9394 14.5 10 14.5C6.06062 14.5 3 12.7784 3 11C3 9.2216 6.06062 7.5 10 7.5Z" fill="currentColor"/>
<path d="M9 3.5C9 2.94772 9.44772 2.5 10 2.5C10.5523 2.5 11 2.94772 11 3.5L11 6.5C11 7.05228 10.5523 7.5 10 7.5C9.44772 7.5 9 7.05228 9 6.5L9 3.5Z" fill="currentColor"/>
<path d="M13.0194 3.80383C13.1277 3.26227 13.6546 2.91106 14.1961 3.01937C14.7377 3.12768 15.0889 3.65451 14.9806 4.19606L14.4806 6.69606C14.3723 7.23762 13.8455 7.58884 13.3039 7.48053C12.7623 7.37222 12.4111 6.84539 12.5194 6.30383L13.0194 3.80383Z" fill="currentColor"/>
<path d="M6.98057 3.80383C6.87226 3.26227 6.34543 2.91106 5.80387 3.01937C5.26231 3.12768 4.9111 3.65451 5.01941 4.19606L5.51941 6.69606C5.62772 7.23762 6.15455 7.58884 6.69611 7.48053C7.23767 7.37222 7.58888 6.84539 7.48057 6.30383L6.98057 3.80383Z" fill="currentColor"/>
<path d="M2.85749 4.98553C2.57335 4.51195 1.95909 4.35839 1.48551 4.64254C1.01193 4.92668 0.85836 5.54094 1.14251 6.01452L2.64251 8.51452C2.92666 8.98811 3.54092 9.14167 4.0145 8.85752C4.48808 8.57337 4.64164 7.95911 4.35749 7.48553L2.85749 4.98553Z" fill="currentColor"/>
<path d="M17.1425 4.98553C17.4267 4.51195 18.0409 4.35839 18.5145 4.64254C18.9881 4.92668 19.1416 5.54094 18.8575 6.01452L17.3575 8.51452C17.0733 8.98811 16.4591 9.14167 15.9855 8.85752C15.5119 8.57337 15.3584 7.95911 15.6425 7.48553L17.1425 4.98553Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 14C11.933 14 13.5 12.433 13.5 10.5C13.5 8.567 11.933 7 10 7C8.067 7 6.5 8.567 6.5 10.5C6.5 12.433 8.067 14 10 14ZM10 9C10.8284 9 11.5 9.67157 11.5 10.5C11.5 11.3284 10.8284 12 10 12C9.17157 12 8.5 11.3284 8.5 10.5C8.5 9.67157 9.17157 9 10 9Z" fill="currentColor"/>
<path d="M17.9739 17.3101C18.3549 17.7098 18.3397 18.3428 17.9399 18.7239C17.5402 19.1049 16.9072 19.0897 16.5261 18.6899L1.27613 2.68994C0.895091 2.29016 0.910282 1.65717 1.31006 1.27613C1.70985 0.895091 2.34283 0.910282 2.72387 1.31006L17.9739 17.3101Z" fill="currentColor"/>
</svg>
`;

const FastForward$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3632 9.31771C11.7218 9.70192 11.7218 10.2981 11.3632 10.6823L6.73105 15.6453C6.11176 16.3088 5 15.8706 5 14.963L5 5.03705C5 4.12943 6.11176 3.69121 6.73105 4.35473L11.3632 9.31771Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.26422 10L7 7.57407L7 12.426L9.26422 10ZM11.3632 10.6823C11.7218 10.2981 11.7218 9.70192 11.3632 9.31771L6.73105 4.35473C6.11176 3.69121 5 4.12943 5 5.03705L5 14.963C5 15.8706 6.11176 16.3088 6.73105 15.6453L11.3632 10.6823Z" fill="currentColor"/>
<path d="M16.3632 9.31771C16.7218 9.70192 16.7218 10.2981 16.3632 10.6823L11.731 15.6453C11.1118 16.3088 10 15.8706 10 14.963V5.03705C10 4.12943 11.1118 3.69121 11.7311 4.35473L16.3632 9.31771Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2642 10L12 7.57407V12.426L14.2642 10ZM16.3632 10.6823C16.7218 10.2981 16.7218 9.70192 16.3632 9.31771L11.7311 4.35473C11.1118 3.69121 10 4.12943 10 5.03705V14.963C10 15.8706 11.1118 16.3088 11.731 15.6453L16.3632 10.6823Z" fill="currentColor"/>
</svg>
`;

const File$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 11.25C6.08579 11.25 5.75 10.9142 5.75 10.5C5.75 10.0858 6.08579 9.75 6.5 9.75H13.5C13.9142 9.75 14.25 10.0858 14.25 10.5C14.25 10.9142 13.9142 11.25 13.5 11.25H6.5Z" fill="currentColor"/>
<path d="M6.5 14.25C6.08579 14.25 5.75 13.9142 5.75 13.5C5.75 13.0858 6.08579 12.75 6.5 12.75H13.5C13.9142 12.75 14.25 13.0858 14.25 13.5C14.25 13.9142 13.9142 14.25 13.5 14.25H6.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1854 0.5H4.5C3.39543 0.5 2.5 1.39543 2.5 2.5V17.5C2.5 18.6046 3.39543 19.5 4.5 19.5H15.5C16.6046 19.5 17.5 18.6046 17.5 17.5V7.20179C17.5 6.70104 17.3122 6.21851 16.9736 5.84956L12.659 1.14777C12.2802 0.734983 11.7457 0.5 11.1854 0.5ZM4.5 17.5V2.5H11.1854L15.5 7.20179V17.5H4.5Z" fill="currentColor"/>
<path d="M11.5 6.5H16.5C17.0523 6.5 17.5 6.94772 17.5 7.5C17.5 8.05228 17.0523 8.5 16.5 8.5H10.5C9.94772 8.5 9.5 8.05228 9.5 7.5V1.5C9.5 0.947715 9.94772 0.5 10.5 0.5C11.0523 0.5 11.5 0.947715 11.5 1.5V6.5Z" fill="currentColor"/>
</svg>
`;

const FileLoop$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1213_1995)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00012 4C5.00012 2.61929 6.11941 1.5 7.50012 1.5H12.6001C12.8627 1.5 13.1147 1.60327 13.3018 1.78752L17.7018 6.12085C17.8927 6.30881 18.0001 6.56547 18.0001 6.83333V14C18.0001 15.3807 16.8808 16.5 15.5001 16.5H9.00012C8.44784 16.5 8.00012 16.0523 8.00012 15.5C8.00012 14.9477 8.44784 14.5 9.00012 14.5H15.5001C15.7763 14.5 16.0001 14.2761 16.0001 14V7.83333H13.6001C12.4956 7.83333 11.6001 6.9379 11.6001 5.83333V3.5H7.50012C7.22398 3.5 7.00012 3.72386 7.00012 4V5.5C7.00012 6.05228 6.55241 6.5 6.00012 6.5C5.44784 6.5 5.00012 6.05228 5.00012 5.5V4ZM13.6001 4.88839L14.5596 5.83333H13.6001V4.88839Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.04893 8.67825C6.97953 8.10989 5.65186 8.51607 5.0835 9.58547C4.51514 10.6549 4.92131 11.9825 5.99071 12.5509C7.06012 13.1193 8.38779 12.7131 8.95614 11.6437C9.5245 10.5743 9.11833 9.24661 8.04893 8.67825ZM3.31743 8.64685C4.40418 6.60207 6.94277 5.82544 8.98755 6.91218C11.0323 7.99893 11.809 10.5375 10.7222 12.5823C9.7972 14.3228 7.82033 15.1445 5.99144 14.6803L4.3146 17.8354C4.05541 18.3231 3.44994 18.5083 2.96226 18.2491C2.47457 17.9899 2.28934 17.3845 2.54853 16.8968L4.22537 13.7417C2.81743 12.4855 2.39242 10.3873 3.31743 8.64685Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_1213_1995">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const FilmFrame$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 2.5C0.947715 2.5 0.5 2.94772 0.5 3.5V16.5C0.5 17.0523 0.947715 17.5 1.5 17.5H18.5C19.0523 17.5 19.5 17.0523 19.5 16.5V3.5C19.5 2.94772 19.0523 2.5 18.5 2.5H1.5ZM15.5 4.5H16.5C16.7761 4.5 17 4.72386 17 5V6C17 6.27614 16.7761 6.5 16.5 6.5H15.5C15.2239 6.5 15 6.27614 15 6V5C15 4.72386 15.2239 4.5 15.5 4.5ZM16.5 7.5H15.5C15.2239 7.5 15 7.72386 15 8V9C15 9.27614 15.2239 9.5 15.5 9.5H16.5C16.7761 9.5 17 9.27614 17 9V8C17 7.72386 16.7761 7.5 16.5 7.5ZM15.5 10.5H16.5C16.7761 10.5 17 10.7239 17 11V12C17 12.2761 16.7761 12.5 16.5 12.5H15.5C15.2239 12.5 15 12.2761 15 12V11C15 10.7239 15.2239 10.5 15.5 10.5ZM16.5 13.5H15.5C15.2239 13.5 15 13.7239 15 14V15C15 15.2761 15.2239 15.5 15.5 15.5H16.5C16.7761 15.5 17 15.2761 17 15V14C17 13.7239 16.7761 13.5 16.5 13.5ZM3.5 4.5H4.5C4.77614 4.5 5 4.72386 5 5V6C5 6.27614 4.77614 6.5 4.5 6.5H3.5C3.22386 6.5 3 6.27614 3 6V5C3 4.72386 3.22386 4.5 3.5 4.5ZM4.5 7.5H3.5C3.22386 7.5 3 7.72386 3 8V9C3 9.27614 3.22386 9.5 3.5 9.5H4.5C4.77614 9.5 5 9.27614 5 9V8C5 7.72386 4.77614 7.5 4.5 7.5ZM3.5 10.5H4.5C4.77614 10.5 5 10.7239 5 11V12C5 12.2761 4.77614 12.5 4.5 12.5H3.5C3.22386 12.5 3 12.2761 3 12V11C3 10.7239 3.22386 10.5 3.5 10.5ZM4.5 13.5H3.5C3.22386 13.5 3 13.7239 3 14V15C3 15.2761 3.22386 15.5 3.5 15.5H4.5C4.77614 15.5 5 15.2761 5 15V14C5 13.7239 4.77614 13.5 4.5 13.5ZM6.5 15.5V4.5H13.5V15.5H6.5Z" fill="currentColor"/>
</svg>
`;

const Fire$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.95969 13.1C7.45675 13.1 7.85969 13.5029 7.85969 14C7.85969 15.182 8.81794 16.1403 10 16.1403C11.1821 16.1403 12.1403 15.182 12.1403 14C12.1403 13.5029 12.5433 13.1 13.0403 13.1C13.5374 13.1 13.9403 13.5029 13.9403 14C13.9403 16.1761 12.1762 17.9403 10 17.9403C7.82383 17.9403 6.05969 16.1761 6.05969 14C6.05969 13.5029 6.46264 13.1 6.95969 13.1Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0425 9.69343C10.2838 9.25893 10.8318 9.10238 11.2663 9.34377C12.748 10.1669 13.431 11.3437 13.7286 12.3214C13.8751 12.8029 13.9276 13.2318 13.9435 13.544C13.9515 13.7008 13.9503 13.8302 13.9467 13.9247C13.9449 13.9721 13.9425 14.0109 13.9402 14.0402C13.9391 14.0549 13.938 14.0673 13.9371 14.0772L13.9358 14.0901L13.9353 14.0952L13.935 14.0974L13.9349 14.0984C13.9349 14.0989 13.9348 14.0994 13.0403 14L13.9348 14.0994C13.8799 14.5934 13.435 14.9494 12.9409 14.8945C12.4493 14.8399 12.0943 14.3988 12.1451 13.9076C12.145 13.9084 12.145 13.9086 12.145 13.9085M12.1451 13.9076C12.1452 13.9067 12.1453 13.9053 12.1454 13.9032C12.146 13.8954 12.1471 13.8795 12.148 13.8561C12.1498 13.8092 12.1508 13.7335 12.1458 13.6354C12.1358 13.438 12.1019 13.1587 12.0066 12.8455C11.8205 12.234 11.3979 11.476 10.3921 10.9173C9.95761 10.6759 9.80106 10.1279 10.0425 9.69343" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.84936 10.2165C8.5047 9.8583 7.93496 9.84736 7.5768 10.192C6.69733 11.0384 6.31831 12.0064 6.16035 12.7531C6.08149 13.1258 6.05649 13.4481 6.05153 13.6819C6.04905 13.7993 6.05158 13.8956 6.05515 13.9663C6.05694 14.0018 6.05899 14.0309 6.06082 14.0533L6.06334 14.0816L6.06437 14.0918L6.06481 14.096L6.065 14.0978L6.06509 14.0986C6.06514 14.099 6.06518 14.0994 6.93883 14.0023L6.06518 14.0994C6.12007 14.5934 6.56505 14.9494 7.05907 14.8945C7.55075 14.8399 7.9057 14.3988 7.85492 13.9076M7.8548 13.9062C7.85485 13.9068 7.85489 13.9072 7.85492 13.9076C7.85495 13.908 7.85498 13.9082 7.85499 13.9084C7.85501 13.9086 7.85501 13.9086 7.85497 13.9081L7.8548 13.9062ZM7.85434 13.9021L7.85448 13.9034L7.85471 13.9056L7.8548 13.9062C7.85445 13.9018 7.85367 13.8915 7.85287 13.8757C7.85127 13.844 7.84963 13.7908 7.85113 13.72C7.85414 13.5778 7.86974 13.3697 7.92137 13.1256C8.02439 12.6386 8.26596 12.0269 8.82493 11.489C9.18309 11.1443 9.19402 10.5746 8.84936 10.2165M7.85426 13.9014C7.85426 13.9014 7.85426 13.9014 7.85426 13.9014L7.85429 13.9016C7.85428 13.9016 7.85427 13.9015 7.85426 13.9014Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.62979 10.1447C8.01279 9.82783 8.5801 9.88148 8.89693 10.2645L10.1407 11.768C10.4575 12.151 10.4039 12.7183 10.0209 13.0352C9.63787 13.352 9.07055 13.2983 8.75373 12.9153L7.50996 11.4118C7.19314 11.0288 7.24679 10.4615 7.62979 10.1447Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3062 9.36733C11.7277 9.63077 11.8558 10.186 11.5924 10.6075L10.2104 12.8187C9.94697 13.2402 9.39171 13.3683 8.97021 13.1049C8.54871 12.8414 8.42057 12.2862 8.68401 11.8647L10.066 9.65353C10.3294 9.23203 10.8847 9.10389 11.3062 9.36733Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.50002 10C4.0523 10 4.50002 10.4477 4.50002 11C4.50002 14.0893 6.93695 16.5683 9.9983 16.5683C13.0603 16.5683 15.5 14.0886 15.5 11C15.5 10.4477 15.9477 10 16.5 10C17.0523 10 17.5 10.4477 17.5 11C17.5 15.1665 14.1914 18.5683 9.9983 18.5683C5.80452 18.5683 2.50002 15.1658 2.50002 11C2.50002 10.4477 2.94773 10 3.50002 10Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.10005 4.70003C5.65822 4.36866 5.03142 4.4582 4.70005 4.90003C3.05477 7.09374 2.50005 9.81092 2.50005 11C2.50005 11.5523 2.94776 12 3.50005 12C4.05233 12 4.50005 11.5523 4.50005 11C4.50005 10.1891 4.94533 7.90632 6.30005 6.10003C6.63142 5.6582 6.54188 5.0314 6.10005 4.70003Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3599 3.73176C13.7841 3.3782 14.4147 3.43552 14.7683 3.8598C16.1403 5.50629 16.8198 7.28109 17.1577 8.63245C17.3271 9.31004 17.4125 9.88847 17.4556 10.3026C17.4772 10.51 17.4883 10.677 17.494 10.7957C17.4969 10.8551 17.4984 10.9024 17.4992 10.9368L17.4999 10.9785L17.5 10.9918L17.5 10.9965L17.5 10.9984L17.5 10.9992C17.5 10.9996 17.5 11 16.5 11L17.5 11C17.5 11.5523 17.0523 12 16.5 12C15.9487 12 15.5015 11.5538 15.5 11.0028C15.5 11.0024 15.5 11.0019 15.5 11.0012L15.4997 10.9831C15.4993 10.9647 15.4983 10.9339 15.4963 10.8918C15.4923 10.8073 15.4838 10.6775 15.4664 10.5098C15.4314 10.174 15.3605 9.68992 15.2174 9.11752C14.9302 7.96888 14.3597 6.49368 13.2318 5.14017C12.8783 4.71589 12.9356 4.08533 13.3599 3.73176Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.98549 4.6425C5.45907 4.35836 6.07333 4.51192 6.35748 4.9855L7.85748 7.4855C8.14163 7.95908 7.98806 8.57334 7.51448 8.85749C7.0409 9.14164 6.42664 8.98807 6.14249 8.51449L4.64249 6.01449C4.35834 5.54091 4.51191 4.92665 4.98549 4.6425Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.78847 1.29747C9.1765 0.904466 9.80965 0.900439 10.2027 1.28847L9.50006 2.00006C10.2027 1.28847 10.2026 1.2884 10.2027 1.28847L10.2047 1.29053L10.209 1.29474L10.2237 1.30943L10.2766 1.36264C10.3217 1.40823 10.3857 1.47358 10.4636 1.55485C10.6191 1.717 10.8322 1.94461 11.0626 2.20671C11.5016 2.70614 12.0819 3.41763 12.3973 4.05851C12.6515 4.57517 12.9153 5.23722 13.1094 5.74978C13.208 6.01026 13.2916 6.24021 13.3506 6.40524C13.3802 6.48784 13.4037 6.55442 13.4199 6.60069L13.4386 6.65441L13.4454 6.67401C13.6251 7.19623 13.3477 7.76586 12.8255 7.9456C12.3033 8.12534 11.7343 7.84773 11.5545 7.32555L11.5534 7.32221L11.5492 7.31026L11.5324 7.26194C11.5175 7.21941 11.4954 7.15701 11.4675 7.07894C11.4116 6.92264 11.3323 6.70448 11.2389 6.4579C11.049 5.95631 10.8128 5.36835 10.6028 4.94153C10.4155 4.56082 9.99576 4.02233 9.56049 3.52718C9.35373 3.29199 9.16108 3.08616 9.02012 2.93918C8.94984 2.8659 8.89291 2.80777 8.85412 2.76852L8.81027 2.7244L8.79975 2.71392L8.79755 2.71174C8.40466 2.3237 8.40047 1.69043 8.78847 1.29747Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.54528 1.22522C10.1141 1.30473 10.5108 1.83034 10.4313 2.39918L9.40131 2.25521C10.4313 2.39918 10.4313 2.39908 10.4313 2.39918L10.4309 2.40221L10.43 2.40836L10.4269 2.42977L10.4154 2.50696C10.4053 2.57286 10.3906 2.66682 10.3712 2.78232C10.3326 3.01275 10.2751 3.33187 10.1996 3.68687C10.0558 4.36333 9.82283 5.28933 9.48418 5.95049C9.21118 6.4835 8.82284 7.11479 8.51586 7.59505C8.35985 7.83912 8.22 8.05172 8.11903 8.20348C8.06849 8.27944 8.02755 8.34038 7.99902 8.38265L7.96586 8.43165L7.95373 8.44948C7.62981 8.92381 6.98234 9.04628 6.50801 8.72236C6.0337 8.39846 5.91176 7.75138 6.23563 7.27706L6.2377 7.27402L6.2451 7.26314L6.27493 7.21907C6.30115 7.18022 6.33953 7.1231 6.38729 7.05131C6.48293 6.90757 6.6156 6.70588 6.76328 6.47483C7.06369 6.00485 7.40736 5.44258 7.6329 5.00225C7.83406 4.60951 8.0225 3.92492 8.16509 3.25428C8.23283 2.93573 8.28483 2.64716 8.31986 2.4383C8.33732 2.33415 8.35045 2.25055 8.35909 2.19382L8.36864 2.12983L8.37085 2.11455L8.3713 2.11136C8.45089 1.54259 8.97649 1.14571 9.54528 1.22522Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5145 3.6425C14.041 3.35836 13.4267 3.51192 13.1426 3.9855L11.6426 6.4855C11.3584 6.95908 11.512 7.57334 11.9856 7.85749C12.4591 8.14164 13.0734 7.98807 13.3575 7.51449L14.8575 5.01449C15.1417 4.54091 14.9881 3.92665 14.5145 3.6425Z" fill="currentColor"/>
</svg>
`;

const Flag$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.80448 2.63235L6.16667 2.89616C4.85526 3.43858 4 4.71786 4 6.13702V10.5225C4 10.7701 4.06299 11.0136 4.18304 11.2301C4.57382 11.9348 5.46192 12.1894 6.16667 11.7986L6.39359 11.6727C7.60021 11.0037 9.06646 11.0037 10.2731 11.6727L10.7269 11.9244C11.9335 12.5935 13.3998 12.5935 14.6064 11.9244L15.3405 11.5173C16.3646 10.9495 17 9.87065 17 8.69964V4.63805C17 4.47989 16.9766 4.3226 16.9306 4.17129C16.6728 3.32398 15.7769 2.84607 14.9296 3.10386L14.0366 3.37555C13.1508 3.64503 12.199 3.5989 11.3435 3.24503L9.86219 2.63235C8.88317 2.22741 7.78349 2.22741 6.80448 2.63235ZM11.6968 10.1753L11.243 9.92365C9.6212 9.02438 7.68677 8.93089 6 9.64316V6.13702C6 5.52716 6.36754 4.9774 6.93109 4.74431L7.56891 4.4805C8.05841 4.27803 8.60825 4.27803 9.09776 4.4805L10.579 5.09318C11.8624 5.62399 13.2901 5.69318 14.6187 5.28896L15 5.17296V8.69964C15 9.14374 14.759 9.55287 14.3707 9.76823L13.6365 10.1753C13.0332 10.5098 12.3001 10.5098 11.6968 10.1753Z" fill="currentColor"/>
<rect x="4" y="2" width="2" height="16" rx="1" fill="currentColor"/>
</svg>
`;

const FlagStraight$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 4V10H14.6587L13.4619 8.29029C12.9196 7.51557 12.9196 6.48443 13.4619 5.70971L14.6587 4H4.5ZM3.5 2C2.94772 2 2.5 2.44772 2.5 3V11C2.5 11.5523 2.94772 12 3.5 12H16.5793C17.3884 12 17.8625 11.0893 17.3986 10.4265L15.1004 7.14337C15.0401 7.05729 15.0401 6.94271 15.1004 6.85663L17.3986 3.57346C17.8625 2.91068 17.3884 2 16.5793 2H3.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 3C4.05228 3 4.5 3.44772 4.5 4L4.5 17C4.5 17.5523 4.05228 18 3.5 18C2.94772 18 2.5 17.5523 2.5 17L2.5 4C2.5 3.44772 2.94772 3 3.5 3Z" fill="currentColor"/>
</svg>
`;

const Flower$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_1397)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5883 2.36575L12.5166 2.44429C12.4102 2.5604 12.3177 2.65963 12.2363 2.7445C12.1783 2.6674 12.131 2.60442 12.1069 2.57222C12.0962 2.55804 12.0901 2.54982 12.0895 2.54901C11.781 2.14919 11.521 1.85543 11.2421 1.61995C10.8599 1.29718 10.4625 1.10176 10 1.10176C9.75073 1.10176 9.51343 1.16296 9.29033 1.27123C8.80211 1.50815 8.44017 1.90299 7.95721 2.57792C7.93063 2.61506 7.88552 2.67912 7.83669 2.74871C7.74548 2.6579 7.64046 2.55003 7.51765 2.42149L7.44953 2.35008C6.89581 1.76866 6.74857 1.6202 6.50141 1.4188C6.26666 1.22751 6.05621 1.09922 5.79569 1.03537C5.22149 0.894639 4.64828 1.18504 4.43938 1.76057C4.1503 2.55696 4 3.41174 4 4.28812C4 8.2285 6.21172 11 10 11C13.7883 11 16 8.2285 16 4.28812C16 3.41174 15.8497 2.55696 15.5606 1.76057C15.3529 1.18826 14.7801 0.89035 14.2009 1.03736C13.938 1.10408 13.7302 1.23584 13.4994 1.43184C13.2609 1.63445 13.1249 1.77767 12.5883 2.36575ZM10 9.00002C7.42805 9.00002 6 7.21053 6 4.28812C6 4.10858 6.00853 3.93059 6.02539 3.75471L6.07157 3.80311C6.48039 4.23101 6.73147 4.4747 6.99228 4.67463C7.63975 5.17099 8.29621 5.36404 8.89641 4.67838C9.00414 4.55531 9.10967 4.4156 9.25158 4.21495C9.26057 4.20223 9.28944 4.16095 9.32703 4.10721C9.41014 3.98838 9.53586 3.80861 9.58368 3.74178C9.75942 3.4962 9.90624 3.31505 10.0126 3.20218C10.1467 3.32743 10.3081 3.51428 10.5059 3.77068C10.4612 3.71264 11.0562 4.50836 11.2051 4.67838C11.8078 5.36697 12.4722 5.16831 13.1048 4.66706C13.3559 4.46807 13.5972 4.22516 13.9795 3.80818C13.9931 3.96663 14 4.12675 14 4.28812C14 7.21053 12.572 9.00002 10 9.00002Z" fill="currentColor"/>
<path d="M9 11C9 10.4477 9.44772 10 10 10C10.5523 10 11 10.4477 11 11V17.5C11 18.0523 10.5523 18.5 10 18.5C9.44772 18.5 9 18.0523 9 17.5V11Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7672 13.015C9.58159 14.8489 8.14539 17.1796 9.32942 18.5906C10.4954 19.9802 13.7081 19.2188 15.6239 17.6112C17.4921 16.0436 18.344 13.7765 17.18 12.3893C16.016 11.0021 13.6354 11.4474 11.7672 13.015ZM10.9199 17.3432C10.9062 17.3379 10.8943 17.3318 10.8841 17.325L10.9024 17.3544C10.9103 17.3611 10.915 17.3586 10.9199 17.3432ZM14.3383 16.0792C13.2305 17.0087 11.3237 17.5007 10.9199 17.3432C10.9221 17.3361 10.9244 17.3262 10.927 17.3132C10.9648 17.1241 11.0828 16.8557 11.2748 16.5442C11.6794 15.8876 12.3519 15.1352 13.0528 14.5471C14.1872 13.5951 15.3919 13.3698 15.6479 13.6749C15.9039 13.98 15.4728 15.1272 14.3383 16.0792Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.93234 13.015C10.1179 14.8489 11.5541 17.1796 10.3701 18.5906C9.20411 19.9802 5.99142 19.2188 4.07561 17.6112C2.20741 16.0436 1.35552 13.7765 2.51954 12.3893C3.68355 11.0021 6.06414 11.4474 7.93234 13.015ZM8.77963 17.3432C8.79329 17.3379 8.80524 17.3318 8.81537 17.325L8.79712 17.3544C8.78924 17.3611 8.78449 17.3586 8.77963 17.3432ZM5.36119 16.0792C6.46901 17.0087 8.37582 17.5007 8.77963 17.3432C8.77738 17.3361 8.77511 17.3262 8.7725 17.3132C8.73467 17.1241 8.61671 16.8557 8.42471 16.5442C8.02015 15.8876 7.34762 15.1352 6.64676 14.5471C5.5123 13.5951 4.30762 13.3698 4.05162 13.6749C3.79563 13.98 4.22673 15.1272 5.36119 16.0792Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_0_1397">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const FlowerBud$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.4899 13.7135C17.9689 13.1201 19 11.6725 19 10C19 8.32751 17.9689 6.87985 16.4899 6.28652C16.4966 6.19151 16.5 6.09596 16.5 6C16.5 3.79086 14.7091 2 12.5 2C11.5711 2 10.6958 2.31953 10 2.87701C9.30417 2.31953 8.42887 2 7.5 2C5.29086 2 3.5 3.79086 3.5 6C3.5 6.09596 3.5034 6.19151 3.51015 6.28652C2.03108 6.87985 1 8.32751 1 10C1 11.6725 2.03108 13.1201 3.51015 13.7135C3.5034 13.8085 3.5 13.904 3.5 14C3.5 16.2091 5.29086 18 7.5 18C8.42887 18 9.30417 17.6805 10 17.123C10.6958 17.6805 11.5711 18 12.5 18C14.7091 18 16.5 16.2091 16.5 14C16.5 13.904 16.4966 13.8085 16.4899 13.7135ZM14.3824 6.67818C14.1626 7.28797 14.5722 7.94249 15.2167 8.01152C16.2258 8.1196 17 8.97583 17 10C17 11.0242 16.2258 11.8804 15.2167 11.9885C14.5722 12.0575 14.1626 12.712 14.3824 13.3218C14.4599 13.5369 14.5 13.765 14.5 14C14.5 15.1046 13.6046 16 12.5 16C11.8214 16 11.2019 15.6605 10.8327 15.1052C10.4371 14.5101 9.56294 14.5101 9.16727 15.1052C8.79807 15.6605 8.17862 16 7.5 16C6.39543 16 5.5 15.1046 5.5 14C5.5 13.765 5.54013 13.5369 5.61762 13.3218C5.83737 12.712 5.42783 12.0575 4.78334 11.9885C3.77418 11.8804 3 11.0242 3 10C3 8.97583 3.77418 8.1196 4.78334 8.01152C5.42783 7.94249 5.83737 7.28797 5.61762 6.67818C5.54013 6.46315 5.5 6.23504 5.5 6C5.5 4.89543 6.39543 4 7.5 4C8.17862 4 8.79807 4.3395 9.16727 4.89478C9.56294 5.48988 10.4371 5.48988 10.8327 4.89478C11.2019 4.3395 11.8214 4 12.5 4C13.6046 4 14.5 4.89543 14.5 6C14.5 6.23504 14.4599 6.46315 14.3824 6.67818Z" fill="currentColor"/>
<path d="M13.5 10C13.5 11.933 11.933 13.5 10 13.5C8.067 13.5 6.5 11.933 6.5 10C6.5 8.067 8.067 6.5 10 6.5C11.933 6.5 13.5 8.067 13.5 10Z" fill="currentColor"/>
</svg>
`;

const Folder$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 5H10.5089L9.94408 4.01158C9.40996 3.07686 8.41593 2.5 7.33935 2.5H4.5C2.84315 2.5 1.5 3.84315 1.5 5.5V15C1.5 16.6569 2.84315 18 4.5 18H15.5C17.1569 18 18.5 16.6569 18.5 15V8C18.5 6.34315 17.1569 5 15.5 5ZM4.5 16C3.94772 16 3.5 15.5523 3.5 15V5.5C3.5 4.94772 3.94772 4.5 4.5 4.5H7.33935C7.69821 4.5 8.02956 4.69229 8.2076 5.00386L9.06033 6.49614C9.23837 6.80771 9.56971 7 9.92857 7H15.5C16.0523 7 16.5 7.44772 16.5 8V15C16.5 15.5523 16.0523 16 15.5 16H4.5Z" fill="currentColor"/>
</svg>
`;

const FoldingStool$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 11C3.5 10.1716 4.17157 9.5 5 9.5H15C15.8284 9.5 16.5 10.1716 16.5 11C16.5 11.8284 15.8284 12.5 15 12.5H5C4.17157 12.5 3.5 11.8284 3.5 11Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 1C6.55228 1 7 1.44772 7 2V7C7 7.55228 6.55228 8 6 8C5.44772 8 5 7.55228 5 7V2C5 1.44772 5.44772 1 6 1Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 6C6.55228 6 7 6.44772 7 7V9.5C7 10.0523 6.55228 10.5 6 10.5C5.44772 10.5 5 10.0523 5 9.5V7C5 6.44772 5.44772 6 6 6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 6C14.5523 6 15 6.44772 15 7V9.5C15 10.0523 14.5523 10.5 14 10.5C13.4477 10.5 13 10.0523 13 9.5V7C13 6.44772 13.4477 6 14 6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 1C14.5523 1 15 1.44772 15 2V7C15 7.55228 14.5523 8 14 8C13.4477 8 13 7.55228 13 7V2C13 1.44772 13.4477 1 14 1Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8253 18.5647C15.5134 19.0205 14.8911 19.1372 14.4353 18.8253L4.93529 12.3253C4.47949 12.0134 4.3628 11.3911 4.67467 10.9353C4.98653 10.4795 5.60885 10.3628 6.06466 10.6747L15.5647 17.1747C16.0205 17.4866 16.1372 18.1089 15.8253 18.5647Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.1747 18.5647C4.48656 19.0205 5.10888 19.1372 5.56469 18.8253L15.0647 12.3253C15.5205 12.0134 15.6372 11.3911 15.3253 10.9353C15.0135 10.4795 14.3912 10.3628 13.9353 10.6747L4.43532 17.1747C3.97952 17.4866 3.86283 18.1089 4.1747 18.5647Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4H6V2H14V4Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 7H6V5H14V7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 7.44772 2.44772 7 3 7H5C5.55228 7 6 7.44772 6 8C6 8.55228 5.55228 9 5 9H3C2.44772 9 2 8.55228 2 8Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 8C14 7.44772 14.4477 7 15 7H17C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9H15C14.4477 9 14 8.55228 14 8Z" fill="currentColor"/>
</svg>
`;

const Gear$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5043 2.71039C14.2743 2.3254 15.2042 2.47631 15.8129 3.08503L16.915 4.18705C17.5237 4.79577 17.6746 5.72571 17.2896 6.49569L16.9048 7.26523C16.6578 7.75921 16.0572 7.95944 15.5632 7.71245C15.0692 7.46546 14.869 6.86478 15.116 6.37081L15.5007 5.60126L14.3987 4.49925L13.6292 4.88402C13.1352 5.13101 12.5345 4.93078 12.2875 4.43681C12.0405 3.94283 12.2408 3.34215 12.7347 3.09516L13.5043 2.71039Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6439 5.88763C16.1577 5.68521 16.7384 5.93767 16.9408 6.45153L17.4004 7.61832C17.6029 8.13217 17.3504 8.71283 16.8366 8.91525C16.3227 9.11767 15.742 8.86521 15.5396 8.35136L15.08 7.18456C14.8776 6.67071 15.13 6.09006 15.6439 5.88763Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6325 7.32342C18.4491 7.59565 19 8.35993 19 9.22079V10.7793C19 11.6401 18.4491 12.4044 17.6325 12.6766L16.8162 12.9487C16.2923 13.1234 15.726 12.8402 15.5513 12.3163C15.3767 11.7923 15.6598 11.226 16.1838 11.0513L17 10.7793V9.22079L16.1838 8.94871C15.6598 8.77406 15.3767 8.20774 15.5513 7.6838C15.726 7.15986 16.2923 6.8767 16.8162 7.05134L17.6325 7.32342Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.8987 11.0828C17.4052 11.303 17.6373 11.8922 17.4171 12.3986L16.917 13.5487C16.6968 14.0552 16.1077 14.2872 15.6012 14.067C15.0948 13.8468 14.8627 13.2577 15.0829 12.7512L15.583 11.6012C15.8032 11.0947 16.3923 10.8626 16.8987 11.0828Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.2896 13.5043C17.6746 14.2743 17.5237 15.2042 16.915 15.8129L15.813 16.915C15.2042 17.5237 14.2743 17.6746 13.5043 17.2896L12.7348 16.9048C12.2408 16.6578 12.0406 16.0572 12.2876 15.5632C12.5345 15.0692 13.1352 14.869 13.6292 15.116L14.3987 15.5007L15.5008 14.3987L15.116 13.6292C14.869 13.1352 15.0692 12.5345 15.5632 12.2875C16.0572 12.0405 16.6578 12.2408 16.9048 12.7347L17.2896 13.5043Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1124 15.6439C14.3148 16.1577 14.0623 16.7384 13.5485 16.9408L12.3817 17.4004C11.8678 17.6029 11.2872 17.3504 11.0847 16.8366C10.8823 16.3227 11.1348 15.742 11.6486 15.5396L12.8154 15.08C13.3293 14.8776 13.9099 15.13 14.1124 15.6439Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6766 17.6325C12.4044 18.4491 11.6401 19 10.7792 19H9.22073C8.35987 19 7.59559 18.4491 7.32337 17.6325L7.05129 16.8162C6.87664 16.2923 7.1598 15.726 7.68374 15.5513C8.20769 15.3767 8.77401 15.6598 8.94866 16.1838L9.22073 17H10.7792L11.0513 16.1838C11.2259 15.6598 11.7923 15.3767 12.3162 15.5513C12.8401 15.726 13.1233 16.2923 12.9487 16.8162L12.6766 17.6325Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.91717 16.8987C8.69695 17.4052 8.10785 17.6373 7.60137 17.4171L6.4513 16.917C5.94482 16.6968 5.71275 16.1077 5.93297 15.6012C6.15318 15.0948 6.74229 14.8627 7.24877 15.0829L8.39883 15.583C8.90531 15.8032 9.13738 16.3923 8.91717 16.8987Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.4957 17.2896C5.72573 17.6746 4.79578 17.5237 4.18706 16.915L3.08505 15.813C2.47633 15.2042 2.32542 14.2743 2.71041 13.5043L3.09518 12.7348C3.34217 12.2408 3.94284 12.0406 4.43682 12.2876C4.9308 12.5345 5.13103 13.1352 4.88404 13.6292L4.49926 14.3987L5.60128 15.5008L6.37082 15.116C6.8648 14.869 7.46547 15.0692 7.71246 15.5632C7.95945 16.0572 7.75923 16.6578 7.26525 16.9048L6.4957 17.2896Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.35612 14.1124C3.84227 14.3148 3.26161 14.0623 3.05919 13.5485L2.59955 12.3817C2.39713 11.8678 2.64959 11.2872 3.16344 11.0847C3.6773 10.8823 4.25795 11.1348 4.46037 11.6486L4.92001 12.8154C5.12243 13.3293 4.86997 13.9099 4.35612 14.1124Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.36754 12.6766C1.55086 12.4044 1 11.6401 1 10.7792V9.22073C1 8.35987 1.55086 7.59559 2.36754 7.32337L3.18377 7.05129C3.70772 6.87664 4.27404 7.1598 4.44868 7.68374C4.62333 8.20769 4.34017 8.77401 3.81623 8.94866L3 9.22073L3 10.7792L3.81623 11.0513C4.34017 11.2259 4.62333 11.7923 4.44868 12.3162C4.27404 12.8401 3.70772 13.1233 3.18377 12.9487L2.36754 12.6766Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.10125 8.91717C2.59477 8.69695 2.3627 8.10785 2.58292 7.60137L3.08295 6.4513C3.30317 5.94482 3.89227 5.71275 4.39875 5.93297C4.90523 6.15318 5.1373 6.74229 4.91709 7.24877L4.41705 8.39883C4.19684 8.90531 3.60773 9.13738 3.10125 8.91717Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.71027 6.4957C2.32528 5.72573 2.47619 4.79578 3.08491 4.18706L4.18692 3.08505C4.79564 2.47633 5.72559 2.32542 6.49556 2.71041L7.26511 3.09518C7.75909 3.34217 7.95931 3.94284 7.71232 4.43682C7.46534 4.9308 6.86466 5.13103 6.37068 4.88404L5.60114 4.49926L4.49912 5.60128L4.8839 6.37082C5.13089 6.8648 4.93066 7.46547 4.43668 7.71246C3.94271 7.95945 3.34203 7.75923 3.09504 7.26525L2.71027 6.4957Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.88751 4.35612C5.68509 3.84227 5.93755 3.26161 6.4514 3.05919L7.6182 2.59955C8.13205 2.39713 8.71271 2.64959 8.91513 3.16344C9.11755 3.6773 8.86509 4.25795 8.35124 4.46037L7.18444 4.92001C6.67059 5.12243 6.08993 4.86997 5.88751 4.35612Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.32342 2.36754C7.59565 1.55086 8.35993 1 9.22079 1H10.7793C11.6401 1 12.4044 1.55086 12.6766 2.36754L12.9487 3.18377C13.1234 3.70772 12.8402 4.27404 12.3163 4.44868C11.7923 4.62333 11.226 4.34017 11.0513 3.81623L10.7793 3H9.22079L8.94871 3.81623C8.77406 4.34017 8.20774 4.62333 7.6838 4.44868C7.15986 4.27404 6.8767 3.70772 7.05134 3.18377L7.32342 2.36754Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.0828 3.10125C11.303 2.59477 11.8922 2.3627 12.3986 2.58292L13.5487 3.08295C14.0552 3.30317 14.2872 3.89227 14.067 4.39875C13.8468 4.90523 13.2577 5.1373 12.7512 4.91709L11.6012 4.41705C11.0947 4.19684 10.8626 3.60773 11.0828 3.10125Z" fill="currentColor"/>
</svg>
`;

const GearFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5577 2.25C10.8545 2.25 11.1234 2.42509 11.2435 2.69656L11.6859 3.69656C11.9053 4.1924 11.5423 4.75 11.0001 4.75L9.00006 4.75C8.477 4.75 8.11458 4.22806 8.29733 3.73796L8.67022 2.73796C8.77963 2.44455 9.05981 2.25 9.37295 2.25H10.5577Z" fill="currentColor"/>
<path d="M9.44259 17.75C9.14574 17.75 8.87682 17.5749 8.75672 17.3034L8.31431 16.3034C8.09494 15.8076 8.45799 15.25 9.00018 15.25H11.0002C11.5232 15.25 11.8857 15.7719 11.7029 16.262L11.33 17.262C11.2206 17.5554 10.9404 17.75 10.6273 17.75H9.44259Z" fill="currentColor"/>
<path d="M17.7501 10.5575C17.7501 10.8544 17.575 11.1233 17.3036 11.2434L16.3036 11.6858C15.8077 11.9052 15.2501 11.5421 15.2501 10.9999V8.99994C15.2501 8.47688 15.7721 8.11445 16.2622 8.29721L17.2622 8.6701C17.5556 8.77951 17.7501 9.05969 17.7501 9.37283V10.5575Z" fill="currentColor"/>
<path d="M2.25012 9.44247C2.25012 9.14562 2.42521 8.8767 2.69668 8.7566L3.69668 8.31418C4.19252 8.09482 4.75012 8.45786 4.75012 9.00006V11.0001C4.75012 11.5231 4.22818 11.8855 3.73808 11.7028L2.73808 11.3299C2.44467 11.2205 2.25012 10.9403 2.25012 10.6272V9.44247Z" fill="currentColor"/>
<path d="M15.8744 4.91417C16.0843 5.12408 16.1506 5.43804 16.0436 5.71492L15.6493 6.73486C15.4538 7.24059 14.8028 7.37816 14.4194 6.99477L13.0052 5.58056C12.6354 5.21069 12.7482 4.58535 13.2239 4.36803L14.1947 3.92459C14.4796 3.79449 14.8152 3.85504 15.0367 4.07646L15.8744 4.91417Z" fill="currentColor"/>
<path d="M4.12587 15.0858C3.91596 14.8759 3.84961 14.562 3.95665 14.2851L4.35092 13.2651C4.54642 12.7594 5.19741 12.6218 5.5808 13.0052L6.99502 14.4194C7.36488 14.7893 7.25208 15.4146 6.7763 15.632L5.80552 16.0754C5.52069 16.2055 5.185 16.145 4.96358 15.9235L4.12587 15.0858Z" fill="currentColor"/>
<path d="M15.086 15.8743C14.876 16.0842 14.5621 16.1505 14.2852 16.0435L13.2653 15.6492C12.7595 15.4537 12.622 14.8027 13.0054 14.4193L14.4196 13.0051C14.7894 12.6352 15.4148 12.748 15.6321 13.2238L16.0755 14.1946C16.2056 14.4794 16.1451 14.8151 15.9237 15.0365L15.086 15.8743Z" fill="currentColor"/>
<path d="M4.91429 4.12575C5.1242 3.91584 5.43816 3.84949 5.71505 3.95653L6.73498 4.3508C7.24071 4.5463 7.37828 5.19729 6.99489 5.58068L5.58068 6.9949C5.21081 7.36476 4.58548 7.25196 4.36815 6.77618L3.92471 5.8054C3.79461 5.52057 3.85516 5.18488 4.07658 4.96346L4.91429 4.12575Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.58058 14.4194C6.74366 15.5825 8.32182 16.25 10 16.25C11.6782 16.25 13.2563 15.5825 14.4194 14.4194C15.5825 13.2563 16.25 11.6782 16.25 10C16.25 8.32182 15.5825 6.74366 14.4194 5.58058C13.2563 4.4175 11.6782 3.75 10 3.75C8.32182 3.75 6.74366 4.4175 5.58058 5.58058C4.4175 6.74366 3.75 8.32182 3.75 10C3.75 11.6782 4.4175 13.2563 5.58058 14.4194ZM11.2374 11.2374C10.9099 11.565 10.4724 11.75 10 11.75C9.52756 11.75 9.09009 11.565 8.76256 11.2374C8.43503 10.9099 8.25 10.4724 8.25 10C8.25 9.52756 8.43503 9.09009 8.76256 8.76256C9.09009 8.43503 9.52756 8.25 10 8.25C10.4724 8.25 10.9099 8.43503 11.2374 8.76256C11.565 9.09009 11.75 9.52756 11.75 10C11.75 10.4724 11.565 10.9099 11.2374 11.2374Z" fill="currentColor"/>
</svg>
`;

const Gift$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="9" y="7" width="2" height="11" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3558 6.99849C11.3338 5.87341 10.5775 3.56252 9.27135 2.4271C7.99198 1.31497 6.1989 1.1107 5.22938 2.22601C4.25986 3.34132 4.71168 5.08851 5.99105 6.20065C7.4709 7.48706 9.33813 8.1692 10.3558 6.99849ZM8.8514 5.68071C8.90578 5.62028 8.96325 5.5902 8.99267 5.58096C8.96386 5.57852 8.91045 5.57208 8.8458 5.55793C8.85778 5.62324 8.85887 5.66785 8.84798 5.68427L8.8514 5.68071ZM7.30317 4.69123C7.69096 5.02833 8.19021 5.33453 8.60456 5.4859C8.69553 5.51913 8.77703 5.54289 8.8458 5.55793C8.78479 5.22531 8.44136 4.35563 7.95923 3.93652C7.41925 3.46713 6.85627 3.40299 6.7388 3.53813C6.62133 3.67326 6.76319 4.22184 7.30317 4.69123Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.88591 6.99849C8.90789 5.87341 9.66423 3.56252 10.9704 2.4271C12.2497 1.31497 14.0428 1.1107 15.0123 2.22601C15.9819 3.34132 15.53 5.08851 14.2507 6.20065C12.7708 7.48706 10.9036 8.1692 9.88591 6.99849ZM11.3903 5.68071C11.3359 5.62028 11.2785 5.5902 11.2491 5.58096C11.2779 5.57852 11.3313 5.57208 11.3959 5.55793C11.3839 5.62324 11.3829 5.66785 11.3937 5.68427L11.3903 5.68071ZM12.9386 4.69123C12.5508 5.02833 12.0515 5.33453 11.6372 5.4859C11.5462 5.51913 11.4647 5.54289 11.3959 5.55793C11.4569 5.22531 11.8004 4.35563 12.2825 3.93652C12.8225 3.46713 13.3855 3.40299 13.5029 3.53813C13.6204 3.67326 13.4785 4.22184 12.9386 4.69123Z" fill="currentColor"/>
<rect x="17" y="11" width="2" height="14" transform="rotate(90 17 11)" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6H17C17.5523 6 18 6.44772 18 7V18C18 18.5523 17.5523 19 17 19H3C2.44771 19 2 18.5523 2 18V7C2 6.44772 2.44771 6 3 6ZM16 17V8H4V17H16Z" fill="currentColor"/>
</svg>
`;

const Grab$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 8C1.94772 8 1.5 7.55228 1.5 7C1.5 6.44772 1.94772 6 2.5 6H17.5C18.0523 6 18.5 6.44772 18.5 7C18.5 7.55228 18.0523 8 17.5 8H2.5Z" fill="currentColor"/>
<path d="M2.5 11.25C1.94772 11.25 1.5 10.8023 1.5 10.25C1.5 9.69772 1.94772 9.25 2.5 9.25H17.5C18.0523 9.25 18.5 9.69772 18.5 10.25C18.5 10.8023 18.0523 11.25 17.5 11.25H2.5Z" fill="currentColor"/>
<path d="M2.5 14.5C1.94772 14.5 1.5 14.0523 1.5 13.5C1.5 12.9477 1.94772 12.5 2.5 12.5H17.5C18.0523 12.5 18.5 12.9477 18.5 13.5C18.5 14.0523 18.0523 14.5 17.5 14.5H2.5Z" fill="currentColor"/>
</svg>
`;

const Hamburger$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3926 13.8047C17.6807 13.977 18.496 14.6978 18.496 15.9707C18.496 17.4603 17.3825 18.2975 15.5789 18.6781C14.3977 18.9273 13.0457 18.9984 10.7025 19.0035C10.5147 19.0039 10.3642 19.004 10.0282 19.004H9.99603H9.96381C9.62786 19.004 9.47739 19.0039 9.28951 19.0035C6.94638 18.9984 5.59438 18.9273 4.4132 18.6781C2.60956 18.2975 1.49603 17.4603 1.49603 15.9707C1.49603 14.6978 2.31131 13.977 3.5994 13.8047C4.34932 13.7043 4.77922 13.7271 7.01146 13.9165C8.28024 14.0242 9.10265 14.0719 9.99603 14.0719C10.8894 14.0719 11.7118 14.0242 12.9806 13.9165C15.2128 13.7271 15.6427 13.7043 16.3926 13.8047ZM10.6982 17.0035C14.762 16.9948 16.496 16.6289 16.496 15.9707C16.496 15.92 16.4979 15.8886 16.4842 15.867C16.4585 15.8264 16.378 15.8205 16.1274 15.787C15.594 15.7157 15.1646 15.7384 13.1497 15.9094C11.829 16.0214 10.9591 16.0719 9.99603 16.0719C9.03294 16.0719 8.16309 16.0214 6.84237 15.9094C4.82745 15.7384 4.39803 15.7157 3.86462 15.787C3.61407 15.8205 3.53356 15.8264 3.50786 15.867C3.49418 15.8886 3.49603 15.92 3.49603 15.9707C3.49603 16.6289 5.23006 16.9948 9.29381 17.0035C9.47977 17.0039 9.62857 17.004 9.9638 17.004L9.99603 17.004L10.0283 17.004C10.3635 17.004 10.5123 17.0039 10.6982 17.0035Z" fill="currentColor"/>
<path d="M2.887 10.6424C2.53219 10.8562 2.07129 10.7418 1.85756 10.387C1.64382 10.0322 1.75819 9.57129 2.113 9.35756C2.78226 8.9544 3.50608 8.75 4.27059 8.75C4.79146 8.75 5.10019 8.84247 5.56693 9.0701L5.57882 9.0759C5.86725 9.21658 5.97953 9.25 6.25 9.25C6.51337 9.25 6.60676 9.22083 6.85951 9.08709L6.87097 9.08102C7.31358 8.84682 7.62078 8.75 8.14729 8.75C8.68251 8.75 8.99072 8.84947 9.43542 9.09084C9.68104 9.22415 9.7609 9.25 10 9.25C10.2388 9.25 10.3183 9.22426 10.5589 9.09345C11.0075 8.84961 11.3161 8.75 11.852 8.75C12.3817 8.75 12.6885 8.8467 13.139 9.08311L13.1443 9.08587C13.4023 9.22123 13.4939 9.25 13.75 9.25C14.0073 9.25 14.1022 9.22045 14.3653 9.08409C14.8249 8.84597 15.1316 8.75 15.6591 8.75C16.4138 8.75 17.1516 8.95039 17.8629 9.34364C18.2254 9.54405 18.3568 10.0004 18.1564 10.3629C17.9559 10.7254 17.4996 10.8568 17.1371 10.6564C16.6426 10.3829 16.1531 10.25 15.6591 10.25C15.4117 10.25 15.3206 10.2785 15.0615 10.4128L15.0554 10.4159C14.5978 10.653 14.2866 10.75 13.75 10.75C13.2122 10.75 12.9015 10.6524 12.4474 10.4141L12.4421 10.4114C12.1876 10.2778 12.0993 10.25 11.852 10.25C11.6055 10.25 11.5232 10.2766 11.2797 10.4089C10.8341 10.6512 10.5289 10.75 10 10.75C9.47095 10.75 9.16586 10.6512 8.72379 10.4113C8.47563 10.2766 8.39322 10.25 8.14729 10.25C7.90366 10.25 7.81782 10.2771 7.57252 10.4069L7.56106 10.4129C7.11071 10.6512 6.79449 10.75 6.25 10.75C5.71275 10.75 5.39638 10.6558 4.92128 10.4241L4.9094 10.4183C4.62925 10.2817 4.5235 10.25 4.27059 10.25C3.78102 10.25 3.32443 10.3789 2.887 10.6424Z" fill="currentColor"/>
<path d="M3 11.25H17C18.3333 11.25 18.3333 13.25 17 13.25H3C1.66667 13.25 1.66667 11.25 3 11.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1732 8.20945C17.6372 7.87771 18.4999 6.98233 18.4999 5.51412C18.4999 2.40364 14.7363 0.401175 9.99988 0.401175C5.26346 0.401175 1.49988 2.40364 1.49988 5.51412C1.49988 6.98233 2.3626 7.87771 3.82652 8.20945C4.75693 8.4203 5.55609 8.43314 7.98584 8.36359C8.90621 8.33724 9.41604 8.32682 9.99988 8.32682C10.5837 8.32682 11.0935 8.33724 12.0139 8.36359C14.4437 8.43314 15.2428 8.4203 16.1732 8.20945ZM9.99988 2.40118C13.7779 2.40118 16.4999 3.84946 16.4999 5.51412C16.4999 5.96226 16.3489 6.11893 15.7312 6.25891C15.0385 6.41589 14.2899 6.42792 12.0711 6.36441C11.1327 6.33755 10.6081 6.32682 9.99988 6.32682C9.39164 6.32682 8.86703 6.33755 7.92861 6.36441C5.7099 6.42792 4.96125 6.41589 4.26854 6.25891C3.65083 6.11893 3.49988 5.96226 3.49988 5.51412C3.49988 3.84946 6.22188 2.40118 9.99988 2.40118Z" fill="currentColor"/>
<path d="M6.1 5C6.1 5.33137 5.83137 5.6 5.5 5.6C5.16863 5.6 4.9 5.33137 4.9 5C4.9 4.66863 5.16863 4.4 5.5 4.4C5.83137 4.4 6.1 4.66863 6.1 5Z" fill="currentColor"/>
<path d="M8.6 4C8.6 4.33137 8.33137 4.6 8 4.6C7.66863 4.6 7.4 4.33137 7.4 4C7.4 3.66863 7.66863 3.4 8 3.4C8.33137 3.4 8.6 3.66863 8.6 4Z" fill="currentColor"/>
<path d="M10.6 5.5C10.6 5.83137 10.3314 6.1 9.99999 6.1C9.66862 6.1 9.39999 5.83137 9.39999 5.5C9.39999 5.16863 9.66862 4.9 9.99999 4.9C10.3314 4.9 10.6 5.16863 10.6 5.5Z" fill="currentColor"/>
<path d="M12.6 4C12.6 4.33137 12.3314 4.6 12 4.6C11.6686 4.6 11.4 4.33137 11.4 4C11.4 3.66863 11.6686 3.4 12 3.4C12.3314 3.4 12.6 3.66863 12.6 4Z" fill="currentColor"/>
<path d="M15.1 5C15.1 5.33137 14.8314 5.6 14.5 5.6C14.1686 5.6 13.9 5.33137 13.9 5C13.9 4.66863 14.1686 4.4 14.5 4.4C14.8314 4.4 15.1 4.66863 15.1 5Z" fill="currentColor"/>
</svg>
`;

const HandGrab$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.37071 4.75C7.71589 4.75 7.99571 5.02982 7.99571 5.375V7V7.5C7.99571 7.91421 8.3315 8.25 8.74571 8.25C9.15992 8.25 9.49571 7.91421 9.49571 7.5V7V5.375V3.875C9.49571 3.52982 9.77553 3.25 10.1207 3.25C10.4659 3.25 10.7457 3.52982 10.7457 3.875V4.87296L10.7457 4.875V5L10.7457 5.00121V7C10.7457 7.41421 11.0815 7.75 11.4957 7.75C11.9099 7.75 12.2457 7.41421 12.2457 7L12.2457 5V4.875L12.2457 4.8739C12.2463 4.52923 12.5259 4.25 12.8707 4.25C13.2159 4.25 13.4957 4.52982 13.4957 4.875V6.5V7.5C13.4957 7.91421 13.8315 8.25 14.2457 8.25C14.6599 8.25 14.9957 7.91421 14.9957 7.5V6.5C14.9957 6.36193 15.1076 6.25 15.2457 6.25H15.6207C15.9659 6.25 16.2457 6.52982 16.2457 6.875V11.5C16.2457 11.5259 16.247 11.5515 16.2496 11.5768C16.2309 13.3334 15.5701 14.6009 14.6267 15.4394C13.6559 16.3024 12.3402 16.75 11 16.75C8.40357 16.75 6.60085 15.0421 5.14586 12.6187C5.14194 12.6121 5.13791 12.6055 5.13376 12.5989C5.12962 12.5924 5.12538 12.5859 5.12107 12.5795C4.85962 12.1871 4.52304 11.6466 4.16761 11.0603C3.59987 10.1238 4.18642 8.93556 5.24571 8.76958V10C5.24571 10.4142 5.5815 10.75 5.99571 10.75C6.40992 10.75 6.74571 10.4142 6.74571 10V5.375C6.74571 5.02982 7.02553 4.75 7.37071 4.75ZM3.86607 13.4012C3.58752 12.9825 3.24035 12.4242 2.88492 11.8379C1.69385 9.87328 3.04487 7.43579 5.24571 7.26008V5.375C5.24571 4.2014 6.1971 3.25 7.37071 3.25C7.61111 3.25 7.84219 3.28992 8.05768 3.36349C8.28664 2.43697 9.12345 1.75 10.1207 1.75C10.9533 1.75 11.674 2.22878 12.0226 2.92601C12.2824 2.81279 12.5692 2.75 12.8707 2.75C14.0085 2.75 14.9374 3.64416 14.9931 4.7681C15.0756 4.75618 15.1599 4.75 15.2457 4.75H15.6207C16.7943 4.75 17.7457 5.7014 17.7457 6.875V11.4193C17.7485 11.4458 17.75 11.4727 17.75 11.5C17.75 13.7035 16.9162 15.4113 15.6233 16.5606C14.3441 17.6976 12.6598 18.25 11 18.25C7.6048 18.25 5.41012 15.9692 3.86607 13.4012Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.44345 13.6686C3.16009 13.2421 2.81114 12.6807 2.45735 12.0971C1.15022 9.94105 2.46741 7.31244 4.74571 6.82848V5.375C4.74571 3.92525 5.92096 2.75 7.37071 2.75C7.49471 2.75 7.61688 2.75863 7.73661 2.77536C8.15256 1.875 9.06319 1.25 10.1207 1.25C10.9918 1.25 11.7632 1.67439 12.2403 2.32631C12.4426 2.27642 12.6538 2.25 12.8707 2.25C14.1051 2.25 15.1403 3.10186 15.4208 4.25H15.6207C17.0705 4.25 18.2457 5.42525 18.2457 6.875V11.396C18.2486 11.4304 18.25 11.4651 18.25 11.5C18.25 13.8391 17.3604 15.6854 15.9555 16.9343C14.5735 18.1627 12.7663 18.75 11 18.75C7.3415 18.75 5.01698 16.2821 3.44345 13.6686ZM3.86607 13.4012C3.58752 12.9825 3.24035 12.4242 2.88492 11.8379C1.69385 9.87328 3.04487 7.43579 5.24571 7.26008V5.375C5.24571 4.2014 6.1971 3.25 7.37071 3.25C7.48368 3.25 7.59458 3.25882 7.70278 3.2758C7.82484 3.29495 7.94345 3.32449 8.05767 3.36349C8.08723 3.2439 8.12691 3.12829 8.17576 3.01764C8.50534 2.27107 9.25217 1.75 10.1207 1.75C10.9533 1.75 11.674 2.22878 12.0226 2.92601C12.2824 2.81279 12.5692 2.75 12.8707 2.75C13.8709 2.75 14.7097 3.441 14.9357 4.37164C14.9668 4.49966 14.9863 4.6322 14.9931 4.7681C15.0756 4.75618 15.1599 4.75 15.2457 4.75H15.6207C16.7943 4.75 17.7457 5.7014 17.7457 6.875V11.4193C17.7485 11.4458 17.75 11.4727 17.75 11.5C17.75 13.7035 16.9162 15.4113 15.6233 16.5606C14.3441 17.6976 12.6598 18.25 11 18.25C7.6048 18.25 5.41012 15.9692 3.86607 13.4012Z" fill="currentColor"/>
</svg>
`;

const HandOpen$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.9383 13.9407C3.94402 13.9523 3.94995 13.9639 3.95609 13.9753L3.9562 13.9755C3.96227 13.9869 3.96853 13.9981 3.97495 14.0092C4.15462 14.3238 4.32925 14.6405 4.50028 14.9508L4.50277 14.9553C4.73656 15.3795 4.96496 15.7938 5.18341 16.1593C5.57624 16.8165 6.01207 17.4506 6.58352 17.9863C7.7924 19.1196 9.3843 19.6106 11.8252 19.6106C14.1053 19.6106 15.7086 18.462 16.6877 16.8661C17.6336 15.3242 18 13.3802 18 11.6062V6.0031C18 4.67689 16.9249 3.60178 15.5987 3.60178C15.5604 3.60178 15.5222 3.60268 15.4843 3.60446V3.25873C15.4843 1.93252 14.4092 0.857418 13.083 0.857418C12.7673 0.857418 12.4652 0.918563 12.1884 1.02975C11.7615 0.639087 11.1923 0.400024 10.5673 0.400024C9.77046 0.400024 9.06483 0.788251 8.62837 1.38462C8.44336 1.33898 8.25014 1.31481 8.05168 1.31481C6.72547 1.31481 5.65037 2.38992 5.65037 3.71613V7.50938C5.02547 7.10977 4.22538 7.01101 3.49107 7.30473C2.20326 7.81986 1.63077 9.32564 2.25106 10.5662L3.93743 13.9389L3.9383 13.9407ZM15.5987 4.05918C15.5603 4.05918 15.5222 4.06029 15.4843 4.06248C15.5222 4.06029 15.5603 4.05918 15.5987 4.05918ZM4.9009 14.7301C4.9009 14.7301 4.9009 14.7301 4.9009 14.7301L4.90087 14.7301C4.90088 14.7301 4.90089 14.7301 4.9009 14.7301ZM8.62343 3.71613C8.62343 3.40036 8.36745 3.14439 8.05168 3.14439C7.73592 3.14439 7.47994 3.40036 7.47994 3.71613V11.5913C7.48067 11.6258 7.47877 11.6602 7.47434 11.6942C7.46208 11.79 7.43007 11.8796 7.38254 11.9588C7.29184 12.1099 7.14461 12.2232 6.9701 12.2694C6.87823 12.2939 6.78409 12.2985 6.69327 12.2849C6.60392 12.2718 6.52017 12.2415 6.4455 12.1974C6.32787 12.1279 6.23277 12.0243 6.17382 11.9003L4.85565 9.26392C4.72977 9.01216 4.43191 8.89891 4.17056 9.00345C3.87657 9.12105 3.74587 9.4648 3.88748 9.74801L5.56945 13.1119C5.77573 13.4733 5.95613 13.8012 6.12446 14.1071L6.12448 14.1071C6.3446 14.5072 6.54409 14.8697 6.75385 15.2206C7.11279 15.8212 7.4459 16.2869 7.83484 16.6515C8.57323 17.3438 9.63069 17.781 11.8252 17.781C13.3846 17.781 14.4351 17.0392 15.1282 15.9093C15.8414 14.7469 16.1704 13.1689 16.1704 11.6062V6.0031C16.1704 5.68733 15.9144 5.43136 15.5987 5.43136C15.2829 5.43136 15.0269 5.68733 15.0269 6.0031V7.12371V9.99184C15.0269 10.3708 14.7198 10.6779 14.3408 10.6779C13.9619 10.6779 13.6548 10.3708 13.6548 9.99184V7.12371V6.0031V3.25873C13.6548 2.94297 13.3988 2.68699 13.083 2.68699C12.7673 2.68699 12.5113 2.94297 12.5113 3.25874V8.40442V9.3192C12.5113 9.69812 12.2041 10.0053 11.8252 10.0053C11.4463 10.0053 11.1391 9.69812 11.1391 9.3192V8.40442V3.25874V2.80134C11.1391 2.48558 10.8831 2.2296 10.5673 2.2296C10.2516 2.2296 9.99561 2.48558 9.99561 2.80134V3.71613V7.94702V9.7766C9.99561 10.1555 9.68843 10.4627 9.30952 10.4627C8.9306 10.4627 8.62343 10.1555 8.62343 9.7766V7.94702V3.71613Z" fill="currentColor"/>
</svg>
`;

const HandPoint$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1213_2440)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.375 0.25C6.2014 0.25 5.25 1.2014 5.25 2.375V9.25974C3.04663 9.43262 1.69308 11.872 2.88492 13.8379C3.24037 14.4242 3.58755 14.9825 3.8661 15.4012C4.6545 16.7115 5.5996 17.8033 6.78006 18.5672C7.97296 19.3391 9.36656 19.75 11 19.75C12.611 19.75 14.2906 19.3491 15.5855 18.342C16.9089 17.3127 17.75 15.7107 17.75 13.5C17.75 13.4727 17.7485 13.4458 17.7457 13.4193V9.875C17.7457 8.7014 16.7943 7.75 15.6207 7.75H15.2457C15.1599 7.75 15.0756 7.75617 14.9931 7.76809C14.9382 6.64428 14.0096 5.75 12.8722 5.75C12.5702 5.75 12.283 5.81303 12.0229 5.92665C11.6744 5.22907 10.9535 4.75 10.1207 4.75C9.90477 4.75 9.69635 4.78221 9.5 4.84209V2.375C9.5 1.2014 8.54861 0.25 7.375 0.25ZM16.2496 13.5768C16.247 13.5515 16.2457 13.5259 16.2457 13.5V9.875C16.2457 9.52982 15.9659 9.25 15.6207 9.25H15.2457C15.1076 9.25 14.9957 9.36193 14.9957 9.5V10C14.9957 10.4142 14.6599 10.75 14.2457 10.75C13.8315 10.75 13.4957 10.4142 13.4957 10V9.5V7.87353C13.4957 7.52916 13.2166 7.25 12.8722 7.25C12.5273 7.25 12.2479 7.52998 12.2487 7.87486L12.25 8.49839C12.2501 8.5262 12.2486 8.55365 12.2457 8.58068V9.1C12.2457 9.51421 11.9099 9.85 11.4957 9.85C11.0815 9.85 10.7457 9.51421 10.7457 9.1V6.875C10.7457 6.52982 10.4659 6.25 10.1207 6.25C9.77554 6.25 9.49571 6.52982 9.49571 6.875V9.5C9.49571 9.91421 9.15993 10.25 8.74571 10.25C8.3315 10.25 7.99571 9.91421 7.99571 9.5V6.875C7.99571 6.79029 8.00067 6.70674 8.01031 6.62463C8.00353 6.58409 8 6.54246 8 6.5V2.375C8 2.02982 7.72018 1.75 7.375 1.75C7.02982 1.75 6.75 2.02982 6.75 2.375V12C6.75 12.4142 6.41422 12.75 6 12.75C5.58579 12.75 5.25 12.4142 5.25 12V10.7689C4.188 10.9323 3.5991 12.1226 4.16761 13.0603C4.52304 13.6466 4.85962 14.1871 5.12107 14.5795C5.12538 14.5859 5.12962 14.5924 5.13376 14.5989C5.1379 14.6055 5.14193 14.612 5.14584 14.6187C5.85493 15.7994 6.65621 16.7004 7.59494 17.3078C8.52705 17.9109 9.63345 18.25 11 18.25C12.3891 18.25 13.7094 17.9009 14.6645 17.158C15.5778 16.4477 16.231 15.3222 16.2496 13.5768Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 2.375C4.75 0.925253 5.92525 -0.25 7.375 -0.25C8.82475 -0.25 10 0.925253 10 2.375V4.25274C10.04 4.25092 10.0803 4.25 10.1207 4.25C10.992 4.25 11.7635 4.67454 12.2406 5.32665C12.4432 5.27654 12.6548 5.25 12.8722 5.25C14.1063 5.25 15.1412 6.10194 15.4211 7.25H15.6207C17.0705 7.25 18.2457 8.42525 18.2457 9.875V13.396C18.2486 13.4304 18.25 13.4651 18.25 13.5C18.25 15.8511 17.3482 17.6044 15.8924 18.7367C14.4843 19.8319 12.6848 20.25 11 20.25C9.27762 20.25 7.78828 19.8151 6.50844 18.987C5.24959 18.1724 4.25771 17.0195 3.44355 15.6688C3.16017 15.2423 2.81118 14.6808 2.45736 14.0971C1.1494 11.9397 2.46905 9.30914 4.75 8.82757V2.375ZM5.25 9.25974V2.375C5.25 1.2014 6.2014 0.25 7.375 0.25C8.54861 0.25 9.5 1.2014 9.5 2.375V4.84209C9.65952 4.79344 9.82699 4.76306 10 4.75337C10.04 4.75113 10.0802 4.75 10.1207 4.75C10.9535 4.75 11.6744 5.22907 12.0229 5.92665C12.283 5.81303 12.5702 5.75 12.8722 5.75C13.8713 5.75 14.7092 6.43993 14.9355 7.36933C14.9668 7.49806 14.9865 7.63138 14.9931 7.76809C15.0756 7.75617 15.1599 7.75 15.2457 7.75H15.6207C16.7943 7.75 17.7457 8.7014 17.7457 9.875V13.4193C17.7485 13.4458 17.75 13.4727 17.75 13.5C17.75 15.7107 16.9089 17.3127 15.5855 18.342C14.2906 19.3491 12.611 19.75 11 19.75C9.36656 19.75 7.97295 19.3391 6.78006 18.5672C5.5996 17.8033 4.6545 16.7115 3.8661 15.4012C3.58755 14.9825 3.24037 14.4242 2.88492 13.8379C1.69308 11.872 3.04663 9.43262 5.25 9.25974Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_1213_2440">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const HandPointOpen$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1213_2486)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.375 0.25C6.2014 0.25 5.25 1.2014 5.25 2.375V9.9725L4.36973 8.94553C3.66233 8.12022 2.43583 7.98558 1.56622 8.63775C0.675955 9.30542 0.475845 10.5589 1.114 11.4706L3.87065 15.4088C4.65813 16.7157 5.60187 17.8048 6.78006 18.5672C7.97296 19.3391 9.36656 19.75 11 19.75C12.611 19.75 14.2906 19.3491 15.5855 18.342C16.9089 17.3127 17.75 15.7107 17.75 13.5C17.75 13.4727 17.7485 13.4458 17.7457 13.4193V9.875C17.7457 8.7014 16.7943 7.75 15.6207 7.75H15.2457C15.1599 7.75 15.0756 7.75617 14.9931 7.76809C14.9382 6.64428 14.0096 5.75 12.8722 5.75C12.5702 5.75 12.283 5.81303 12.0229 5.92665C11.6744 5.22907 10.9535 4.75 10.1207 4.75C9.90477 4.75 9.69635 4.78221 9.5 4.84209V2.375C9.5 1.2014 8.54861 0.25 7.375 0.25ZM16.2496 13.5768C16.247 13.5515 16.2457 13.5259 16.2457 13.5V9.875C16.2457 9.52982 15.9659 9.25 15.6207 9.25H15.2457C15.1076 9.25 14.9957 9.36193 14.9957 9.5V10C14.9957 10.4142 14.6599 10.75 14.2457 10.75C13.8315 10.75 13.4957 10.4142 13.4957 10V9.5V7.87353C13.4957 7.52916 13.2166 7.25 12.8722 7.25C12.5273 7.25 12.2479 7.52998 12.2487 7.87486L12.25 8.49839C12.2501 8.5262 12.2486 8.55366 12.2457 8.58069V9.1C12.2457 9.51421 11.9099 9.85 11.4957 9.85C11.0815 9.85 10.7457 9.51421 10.7457 9.1V6.875C10.7457 6.52982 10.4659 6.25 10.1207 6.25C9.77554 6.25 9.49571 6.52982 9.49571 6.875V9.5C9.49571 9.91421 9.15993 10.25 8.74571 10.25C8.3315 10.25 7.99571 9.91421 7.99571 9.5V6.875C7.99571 6.79029 8.00067 6.70674 8.01031 6.62463C8.00353 6.58409 8 6.54246 8 6.5V2.375C8 2.02982 7.72018 1.75 7.375 1.75C7.34787 1.75 7.32113 1.75173 7.29491 1.75508C6.98756 1.7944 6.75 2.05696 6.75 2.375V11.9949L6.74995 12.0094L6.74973 12.0204C6.74674 12.1321 6.71936 12.2376 6.67273 12.3319C6.6376 12.4032 6.59061 12.4698 6.532 12.5287C6.39615 12.6654 6.20796 12.75 6 12.75C5.87353 12.75 5.75436 12.7187 5.64984 12.6634C5.58542 12.6294 5.52513 12.5856 5.47131 12.532C5.45501 12.5158 5.43945 12.4988 5.42468 12.4812L3.23085 9.92172C3.03791 9.69662 2.70338 9.65989 2.4662 9.83777C2.22338 10.0199 2.1688 10.3618 2.34285 10.6104L5.11006 14.5637C5.11661 14.5728 5.12298 14.5822 5.12917 14.5918C5.13534 14.6013 5.14126 14.6108 5.14695 14.6205C5.85576 15.8003 6.6567 16.7007 7.59494 17.3078C8.52705 17.9109 9.63345 18.25 11 18.25C12.3891 18.25 13.7094 17.9009 14.6645 17.158C15.5778 16.4477 16.231 15.3222 16.2496 13.5768Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.75 2.375C4.75 0.925253 5.92526 -0.25 7.375 -0.25C8.82475 -0.25 10 0.925253 10 2.375V4.25274C10.04 4.25092 10.0803 4.25 10.1207 4.25C10.992 4.25 11.7635 4.67454 12.2406 5.32665C12.4432 5.27654 12.6548 5.25 12.8722 5.25C14.1063 5.25 15.1412 6.10194 15.4211 7.25H15.6207C17.0705 7.25 18.2457 8.42525 18.2457 9.875V13.3961C18.2486 13.4304 18.25 13.4651 18.25 13.5C18.25 15.8511 17.3482 17.6044 15.8924 18.7367C14.4843 19.8319 12.6848 20.25 11 20.25C9.27762 20.25 7.78828 19.8151 6.50844 18.987C5.25358 18.175 4.26401 17.0268 3.45131 15.6816L0.704379 11.7573C-0.0884702 10.6247 0.16015 9.06727 1.26623 8.23775C2.34665 7.42747 3.87047 7.59476 4.74936 8.62013L4.75 2.375ZM5.25 9.9725L4.36974 8.94553C3.66233 8.12022 2.43583 7.98558 1.56623 8.63775C0.675958 9.30542 0.475848 10.5589 1.114 11.4706L3.87066 15.4088C4.65813 16.7157 5.60187 17.8048 6.78007 18.5672C7.97296 19.339 9.36656 19.75 11 19.75C12.611 19.75 14.2906 19.3491 15.5855 18.342C16.9089 17.3127 17.75 15.7107 17.75 13.5C17.75 13.4727 17.7486 13.4458 17.7457 13.4193V9.875C17.7457 8.7014 16.7943 7.75 15.6207 7.75H15.2457C15.1599 7.75 15.0756 7.75617 14.9931 7.76809C14.9865 7.63138 14.9668 7.49806 14.9355 7.36933C14.7092 6.43993 13.8713 5.75 12.8722 5.75C12.5702 5.75 12.283 5.81303 12.0229 5.92665C11.6744 5.22907 10.9535 4.75 10.1207 4.75C10.0802 4.75 10.04 4.75113 10 4.75337C9.827 4.76306 9.65952 4.79344 9.5 4.84209V2.375C9.5 1.2014 8.54861 0.25 7.375 0.25C6.2014 0.25 5.25 1.2014 5.25 2.375V9.9725Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_1213_2486">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Handshake$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1213_2541)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5981 9.42822C20.0764 9.15208 20.2403 8.54049 19.9641 8.0622L16.9641 2.86604C16.688 2.38775 16.0764 2.22388 15.5981 2.50002L13.866 3.50002C13.3877 3.77616 13.2239 4.38775 13.5 4.86605L16.5 10.0622C16.7762 10.5405 17.3877 10.7044 17.866 10.4282L19.5981 9.42822ZM15.3571 4.08255C14.9983 4.28966 14.8754 4.74835 15.0825 5.10707C15.2896 5.46579 15.7483 5.5887 16.1071 5.38159C16.4658 5.17448 16.5887 4.71579 16.3816 4.35707C16.1745 3.99835 15.7158 3.87544 15.3571 4.08255Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.36603 2.75C3.88773 2.47386 3.27614 2.63773 3 3.11603L2.08616e-07 8.31218C-0.276142 8.79047 -0.112267 9.40206 0.366026 9.6782L2.09808 10.6782C2.57637 10.9543 3.18796 10.7905 3.4641 10.3122L6.4641 5.11603C6.74024 4.63773 6.57637 4.02614 6.09808 3.75L4.36603 2.75ZM1.85705 9.09567C2.21577 9.30278 2.67446 9.17987 2.88157 8.82115C3.08868 8.46243 2.96577 8.00374 2.60705 7.79663C2.24833 7.58953 1.78964 7.71243 1.58253 8.07115C1.37543 8.42987 1.49833 8.88856 1.85705 9.09567Z" fill="currentColor"/>
<path d="M14.9916 4.37025C15.0632 4.91782 14.6774 5.41981 14.1299 5.49153L14.1265 5.49198L14.1125 5.49386L14.0544 5.50189C14.0029 5.50914 13.9267 5.52012 13.8306 5.53474C13.6381 5.56403 13.3672 5.6077 13.0559 5.66487C12.4236 5.781 11.6627 5.94603 11.0554 6.14851C10.9206 6.19345 10.6955 6.31376 10.3854 6.54033C10.0877 6.75786 9.76145 7.03625 9.42909 7.34548C8.81276 7.91893 8.21757 8.55894 7.80481 9.02154C8.01058 9.21723 8.23896 9.37384 8.46498 9.44192C8.67663 9.50567 8.96894 9.52329 9.40001 9.19998L9.42803 9.17896L10.4711 8.50528C10.7397 8.33178 11.3371 8.06141 11.9703 8.40814C12.2532 8.56306 12.569 8.80874 12.846 9.04095C13.1376 9.28536 13.443 9.56359 13.7165 9.82127C13.9912 10.0801 14.2404 10.3246 14.4205 10.504L14.4628 10.5461L14.4862 10.5385C14.6668 10.4775 14.8982 10.3541 15.1517 10.1854C15.3973 10.022 15.6249 9.84227 15.7939 9.70027C15.8774 9.63013 15.9442 9.57116 15.9891 9.53074C16.0115 9.51057 16.0283 9.49515 16.0388 9.4854L16.0498 9.4752L16.0508 9.47429C16.4514 9.09438 17.0844 9.11083 17.4645 9.51138C17.8446 9.91202 17.828 10.545 17.4274 10.9251L17.426 10.9264L17.4239 10.9284L17.4177 10.9342L17.3975 10.9531C17.3806 10.9687 17.3569 10.9904 17.3272 11.0172C17.2678 11.0706 17.1837 11.1448 17.0804 11.2315C16.8759 11.4034 16.5868 11.6327 16.2597 11.8505C15.9404 12.0629 15.5431 12.2925 15.1261 12.4334C14.7364 12.5649 14.1337 12.6849 13.5528 12.3944L13.4012 12.3187L13.2831 12.1972L13.0094 11.9212C12.838 11.7506 12.6025 11.5196 12.3449 11.2769C12.0861 11.033 11.8117 10.7836 11.5612 10.5737C11.4598 10.4886 11.3695 10.4163 11.2913 10.3564L10.57 10.8223C9.65388 11.4966 8.71601 11.6063 7.88814 11.3569C7.11706 11.1247 6.54261 10.6128 6.19662 10.237C5.49949 9.47973 5.65726 8.4304 6.21352 7.80141C6.64586 7.31255 7.33428 6.56273 8.06674 5.88124C8.43281 5.54064 8.8221 5.20563 9.20539 4.92554C9.57632 4.65448 9.99759 4.39295 10.4228 4.25118C11.164 4.00407 12.0336 3.81917 12.6946 3.69777C13.03 3.63618 13.3215 3.58919 13.5297 3.5575C13.6339 3.54164 13.7177 3.52956 13.776 3.52136L13.8439 3.51197L13.8625 3.50948L13.8694 3.50857C14.417 3.43691 14.9199 3.82263 14.9916 4.37025Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.62862 4.07152C5.11583 4.27664 4.86642 4.85861 5.07153 5.37139C5.27664 5.88416 5.85859 6.13358 6.37136 5.92849L6.39747 5.91809L6.47527 5.8873C6.54293 5.86062 6.64057 5.82233 6.75944 5.77632C6.99765 5.68411 7.31898 5.56171 7.65425 5.43979C7.99171 5.31708 8.3331 5.19858 8.6144 5.11203C8.75567 5.06856 8.87075 5.03658 8.95659 5.01639C8.98632 5.00939 9.00766 5.005 9.02167 5.00232C9.03458 5.00376 9.05295 5.00609 9.07742 5.00986C9.13786 5.01915 9.21471 5.03392 9.30649 5.05432C9.49027 5.09516 9.70356 5.15177 9.91275 5.21155C10.1201 5.2708 10.314 5.33046 10.4567 5.3755C10.5277 5.39794 10.5854 5.41656 10.625 5.42944L10.6699 5.44416L10.6809 5.44781L10.6834 5.44862C11.2073 5.62321 11.774 5.34023 11.9487 4.81633C12.1233 4.29239 11.8402 3.72606 11.3163 3.55139L11.007 4.47898C11.3163 3.55139 11.3163 3.55141 11.3163 3.55139L11.3104 3.54945L11.2962 3.54474L11.2442 3.52772C11.1998 3.51324 11.1364 3.4928 11.059 3.46836C10.9047 3.41963 10.6924 3.35428 10.4623 3.28852C10.234 3.22328 9.97849 3.15487 9.7404 3.10195C9.52612 3.05433 9.2446 3 9.00001 3C8.81329 3 8.62301 3.04026 8.49851 3.06955C8.35192 3.10404 8.18966 3.15019 8.02623 3.20047C7.69816 3.30142 7.32081 3.43292 6.97076 3.56021C6.61853 3.68829 6.28362 3.81589 6.03745 3.91118C5.91413 3.95892 5.81255 3.99875 5.74154 4.02676L5.65894 4.05945L5.62862 4.07152Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.18332 9.76989C4.18332 9.76989 4.18332 9.76989 4.18332 9.76989L4.21444 9.79894L4.30513 9.88336C4.38379 9.95645 4.49712 10.0614 4.63517 10.1885C4.91155 10.4429 5.28577 10.7846 5.67874 11.1354C6.07301 11.4873 6.48011 11.843 6.82385 12.1274C6.99611 12.27 7.14576 12.3891 7.26597 12.4788C7.34717 12.5393 7.3987 12.5741 7.42541 12.5915L10.262 13.6553C10.5987 13.7815 10.9772 13.7173 11.2534 13.4872L13.3598 11.7318C13.7841 11.3782 14.4147 11.4355 14.7682 11.8598C15.1218 12.2841 15.0645 12.9147 14.6402 13.2682L12.5337 15.0236C11.7051 15.7141 10.5697 15.9066 9.5598 15.5279L6.59973 14.4179L6.55278 14.3944C6.27173 14.2539 5.88128 13.9434 5.54875 13.6683C5.17695 13.3606 4.74859 12.986 4.34691 12.6274C3.94393 12.2677 3.56174 11.9187 3.28069 11.66C3.14003 11.5306 3.02439 11.4234 2.94377 11.3485L2.85027 11.2615L2.81734 11.2307C2.41411 10.8534 2.39249 10.2199 2.76988 9.81668C3.14727 9.41345 3.78009 9.3925 4.18332 9.76989Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.43537 14.8588C3.78945 14.435 4.42009 14.3784 4.84393 14.7325L5.80216 15.533C5.94547 15.6527 6.11945 15.7299 6.30438 15.7559L7.54087 15.9293C8.0878 16.006 8.46899 16.5116 8.39227 17.0585C8.31556 17.6054 7.80999 17.9866 7.26306 17.9099L6.02657 17.7365C5.47178 17.6586 4.94986 17.427 4.51993 17.0679L3.5617 16.2674C3.13785 15.9133 3.08129 15.2827 3.43537 14.8588Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_1213_2541">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Hash$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="4" y1="7.25" x2="16" y2="7.25" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<line x1="4" y1="12.75" x2="16" y2="12.75" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M7.75 4L6.75 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M13.25 4L12.25 16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;

const Headphone$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8801 15.0685C17.7061 15.5927 17.1402 15.8766 16.616 15.7027C16.0918 15.5287 15.8079 14.9628 15.9818 14.4386C16.3221 13.4132 16.5 12.3064 16.5 11.166C16.5 6.71008 13.7442 3.75354 10 3.75354C6.25581 3.75354 3.5 6.71008 3.5 11.166C3.5 12.3064 3.67791 13.4132 4.01817 14.4386C4.1921 14.9628 3.90817 15.5287 3.38399 15.7027C2.85981 15.8766 2.29387 15.5927 2.11994 15.0685C1.71209 13.8394 1.5 12.5199 1.5 11.166C1.5 5.63571 5.11859 1.75354 10 1.75354C14.8814 1.75354 18.5 5.63571 18.5 11.166C18.5 12.5199 18.2879 13.8394 17.8801 15.0685Z" fill="currentColor"/>
<path d="M5.97747 17.0341C4.32744 17.0028 3.01262 15.6445 3.03496 13.9943L3.03526 13.972C3.05752 12.3274 4.40876 11.0123 6.05335 11.0345C6.06146 11.0346 6.06146 11.0346 6.06958 11.0348C6.61963 11.0452 7.05795 11.498 7.0505 12.0481L6.99636 16.0478C6.98886 16.6022 6.53179 17.0446 5.97747 17.0341Z" fill="currentColor"/>
<path d="M14.0888 11.0002C15.7388 11.0315 17.0536 12.3898 17.0313 14.04L17.031 14.0623C17.0087 15.7069 15.6575 17.022 14.0129 16.9998C14.0048 16.9997 14.0048 16.9997 13.9967 16.9995C13.4466 16.9891 13.0083 16.5363 13.0158 15.9862L13.0699 11.9865C13.0774 11.4321 13.5345 10.9897 14.0888 11.0002Z" fill="currentColor"/>
</svg>
`;

const Heart$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 5.72187C11.6893 2.69854 17.5 3.75425 17.5 8.12206C17.5 11.0398 15 13.7042 10 16.1154C5 13.7042 2.5 11.0398 2.5 8.12206C2.5 3.75425 8.31066 2.69854 10 5.72187Z" fill="currentColor"/>
</svg>
`;

const Hourglass$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.20299 4C7.33379 4.81869 7.52606 5.59514 7.77794 6.08409C7.97599 6.46853 8.36428 6.95849 8.89645 7.49121C9.26075 7.85589 9.64792 8.19679 10 8.48728C10.3521 8.19679 10.7392 7.85589 11.1035 7.49121C11.6357 6.95849 12.024 6.46853 12.222 6.08409C12.4739 5.59514 12.6662 4.81869 12.797 4H7.20299ZM6.54146 2C5.69701 2 5.02278 2.69677 5.12064 3.53553C5.24621 4.6119 5.49855 6.02661 6 7C6.67249 8.30543 8.21838 9.6428 9.17938 10.3928C9.66546 10.7722 10.3345 10.7722 10.8206 10.3928C11.7816 9.6428 13.3275 8.30543 14 7C14.5014 6.02661 14.7538 4.6119 14.8794 3.53553C14.9772 2.69677 14.303 2 13.4585 2H6.54146Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.797 16C12.6662 15.1813 12.4739 14.4049 12.2221 13.9159C12.024 13.5315 11.6357 13.0415 11.1036 12.5088C10.7393 12.1441 10.3521 11.8032 10 11.5127C9.64792 11.8032 9.26076 12.1441 8.89646 12.5088C8.36428 13.0415 7.976 13.5315 7.77795 13.9159C7.52607 14.4049 7.3338 15.1813 7.203 16H12.797ZM13.4585 18C14.303 18 14.9772 17.3032 14.8794 16.4645C14.7538 15.3881 14.5014 13.9734 14 13C13.3275 11.6946 11.7816 10.3572 10.8206 9.60718C10.3345 9.22781 9.66547 9.22781 9.17938 9.60718C8.21839 10.3572 6.6725 11.6946 6 13C5.49856 13.9734 5.24622 15.3881 5.12064 16.4645C5.02279 17.3032 5.69702 18 6.54147 18L13.4585 18Z" fill="currentColor"/>
<path d="M7 15.7502C7 15.7502 9 14.25 10 14.25C11 14.25 13 15.7502 13 15.7502V16.25H7V15.7502Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.5C4 1.94772 4.44772 1.5 5 1.5H15C15.5523 1.5 16 1.94772 16 2.5C16 3.05228 15.5523 3.5 15 3.5H5C4.44772 3.5 4 3.05228 4 2.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 17.5C4 16.9477 4.44772 16.5 5 16.5H15C15.5523 16.5 16 16.9477 16 17.5C16 18.0523 15.5523 18.5 15 18.5H5C4.44772 18.5 4 18.0523 4 17.5Z" fill="currentColor"/>
</svg>
`;

const House$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_1203)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 11C0.0804861 11 -0.351616 9.86349 0.335639 9.25259L9.33564 1.25259C9.71453 0.915803 10.2855 0.915803 10.6644 1.25259L19.6644 9.25259C20.3516 9.86349 19.9195 11 19 11H18V18C18 18.5523 17.5523 19 17 19H3C2.44772 19 2 18.5523 2 18V11H1ZM7 17V12C7 11.4477 7.44772 11 8 11H12C12.5523 11 13 11.4477 13 12V17H16V10C16 9.62477 16.2067 9.29781 16.5124 9.12674L10 3.33795L3.48762 9.12674C3.79334 9.29781 4 9.62477 4 10V17H7ZM9 17V13H11V17H9Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_0_1203">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Identification$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 8C9 7.72386 9.22386 7.5 9.5 7.5H12C12.2761 7.5 12.5 7.72386 12.5 8C12.5 8.27614 12.2761 8.5 12 8.5H9.5C9.22386 8.5 9 8.27614 9 8Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 11.75C9 11.4739 9.22386 11.25 9.5 11.25L14.5 11.25C14.7761 11.25 15 11.4739 15 11.75C15 12.0261 14.7761 12.25 14.5 12.25L9.5 12.25C9.22386 12.25 9 12.0261 9 11.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 9.25C9 8.97386 9.22386 8.75 9.5 8.75H14.5C14.7761 8.75 15 8.97386 15 9.25C15 9.52614 14.7761 9.75 14.5 9.75H9.5C9.22386 9.75 9 9.52614 9 9.25ZM9 10.5C9 10.2239 9.22386 10 9.5 10H14.5C14.7761 10 15 10.2239 15 10.5C15 10.7761 14.7761 11 14.5 11H9.5C9.22386 11 9 10.7761 9 10.5Z" fill="currentColor"/>
<path d="M7.75 9.25C7.75 9.94036 7.19036 10.5 6.5 10.5C5.80964 10.5 5.25 9.94036 5.25 9.25C5.25 8.55964 5.80964 8 6.5 8C7.19036 8 7.75 8.55964 7.75 9.25Z" fill="currentColor"/>
<path d="M8 11.6275C8 12.2582 7.32843 12.1985 6.5 12.1985C5.67157 12.1985 5 12.2582 5 11.6275C5 10.9968 5.67157 10.2 6.5 10.2C7.32843 10.2 8 10.9968 8 11.6275Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 6.5C1 4.84315 2.34315 3.5 4 3.5H16C17.6569 3.5 19 4.84315 19 6.5V13.5C19 15.1569 17.6569 16.5 16 16.5H4C2.34315 16.5 1 15.1569 1 13.5V6.5ZM4 5.5C3.44772 5.5 3 5.94772 3 6.5V13.5C3 14.0523 3.44772 14.5 4 14.5H16C16.5523 14.5 17 14.0523 17 13.5V6.5C17 5.94772 16.5523 5.5 16 5.5H4Z" fill="currentColor"/>
</svg>
`;

const Info$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 7C11.1046 7 12 7.89543 12 9V16C12 17.1046 11.1046 18 10 18C8.89543 18 8 17.1046 8 16V9C8 7.89543 8.89543 7 10 7Z" fill="currentColor"/>
<path d="M12 4C12 5.10457 11.1046 6 10 6C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4Z" fill="currentColor"/>
</svg>
`;

const InfoCircle$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10V14C11 14.5523 10.5523 15 10 15C9.44772 15 9 14.5523 9 14V10Z" fill="currentColor"/>
<circle cx="10" cy="7" r="1" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 10C2 14.4183 5.58172 18 10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z" fill="currentColor"/>
</svg>
`;

const InfoFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18ZM10 8.92857C9.44772 8.92857 9 9.37629 9 9.92857V13.9286C9 14.4809 9.44772 14.9286 10 14.9286C10.5523 14.9286 11 14.4809 11 13.9286V9.92857C11 9.37629 10.5523 8.92857 10 8.92857ZM10 7.5C10.5523 7.5 11 7.05228 11 6.5C11 5.94772 10.5523 5.5 10 5.5C9.44772 5.5 9 5.94772 9 6.5C9 7.05228 9.44772 7.5 10 7.5Z" fill="currentColor"/>
</svg>
`;

const Internet$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.25 10C1.25 14.8325 5.16751 18.75 10 18.75C14.8325 18.75 18.75 14.8325 18.75 10C18.75 5.16751 14.8325 1.25 10 1.25C5.16751 1.25 1.25 5.16751 1.25 10ZM17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 10C6.25 14.5222 7.74111 18.25 10 18.25C12.2589 18.25 13.75 14.5222 13.75 10C13.75 5.47778 12.2589 1.75 10 1.75C7.74111 1.75 6.25 5.47778 6.25 10ZM12.25 10C12.25 13.7621 11.0548 16.75 10 16.75C8.94518 16.75 7.75 13.7621 7.75 10C7.75 6.23795 8.94518 3.25 10 3.25C11.0548 3.25 12.25 6.23795 12.25 10Z" fill="currentColor"/>
<path d="M3.60174 5.46733L4.60789 4.35483C4.70859 4.4459 4.817 4.53499 4.9328 4.62175C6.2041 5.57424 8.2323 6.16108 10.4482 6.16108C12.3391 6.16108 14.1005 5.73495 15.3792 5.00363C15.687 4.82759 15.9613 4.63663 16.1979 4.43451L17.1722 5.57496C16.8622 5.83981 16.511 6.08431 16.1239 6.3057C14.6076 7.17293 12.5898 7.66108 10.4482 7.66108C7.92613 7.66108 5.58282 6.98307 4.03339 5.82219C3.88117 5.70814 3.73712 5.58977 3.60174 5.46733Z" fill="currentColor"/>
<path d="M3.60174 14.5486L4.60789 15.6611C4.70859 15.57 4.817 15.4809 4.9328 15.3941C6.2041 14.4417 8.2323 13.8548 10.4482 13.8548C12.3391 13.8548 14.1005 14.2809 15.3792 15.0123C15.687 15.1883 15.9613 15.3793 16.1979 15.5814L17.1722 14.4409C16.8622 14.1761 16.511 13.9316 16.1239 13.7102C14.6076 12.843 12.5898 12.3548 10.4482 12.3548C7.92613 12.3548 5.58282 13.0328 4.03339 14.1937C3.88117 14.3078 3.73712 14.4261 3.60174 14.5486Z" fill="currentColor"/>
<path d="M1.75 10.75V9.25H18.25V10.75H1.75Z" fill="currentColor"/>
</svg>
`;

const Key$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.7184 12.3066C12.899 12.1201 13 11.8707 13 11.6111V9.00059C14.2398 8.07058 15 6.60167 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 6.60167 5.76016 8.07058 7 9.00059V17C7 18.6569 8.34315 20 10 20C11.6569 20 13 18.6569 13 17C13 16.701 12.8662 16.4178 12.6354 16.2278L12.4094 16.0419L12.4966 15.9919C12.8079 15.8138 13 15.4826 13 15.124V14.3488C13 14.0841 12.8951 13.8302 12.7082 13.6427L12.0571 12.9897L12.7184 12.3066ZM10.9686 8.7495C10.9894 8.83017 11 8.91395 11 9V11.2063L9.93681 12.3044C9.55743 12.6963 9.56201 13.3198 9.94709 13.706L10.8616 14.6233L10.1586 15.0255C9.55121 15.373 9.47947 16.221 10.0198 16.6656L10.9156 17.4027C10.7607 17.7544 10.409 18 10 18C9.44772 18 9 17.5523 9 17V9C9 8.91395 9.01064 8.83017 9.03138 8.7495C9.14475 8.30859 8.94599 7.84676 8.54786 7.62597C7.59988 7.10025 7 6.10326 7 5C7 3.34315 8.34315 2 10 2C11.6569 2 13 3.34315 13 5C13 6.10326 12.4001 7.10025 11.4521 7.62597C11.054 7.84676 10.8553 8.30859 10.9686 8.7495Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 5.5C10.8284 5.5 11.5 4.82843 11.5 4C11.5 3.17157 10.8284 2.5 10 2.5C9.17157 2.5 8.5 3.17157 8.5 4C8.5 4.82843 9.17157 5.5 10 5.5ZM10 3.5C10.2761 3.5 10.5 3.72386 10.5 4C10.5 4.27614 10.2761 4.5 10 4.5C9.72386 4.5 9.5 4.27614 9.5 4C9.5 3.72386 9.72386 3.5 10 3.5Z" fill="currentColor"/>
</svg>
`;

const KniveFork$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2703 5.50648C11.2703 7.44763 12.333 8.81357 14.2703 9.50037V11C14.2703 11.5523 14.718 12 15.2703 12C15.8225 12 16.2703 11.5523 16.2703 11V8.77387C16.2706 8.75962 16.2706 8.74541 16.2703 8.73125V1.5C16.2703 0.759224 15.4929 0.275595 14.8284 0.602925C12.5118 1.74402 11.2703 3.40205 11.2703 5.50648ZM13.2703 5.50648C13.2703 4.6856 13.5885 3.97142 14.2703 3.34478V7.31599C13.5752 6.90454 13.2703 6.31705 13.2703 5.50648Z" fill="currentColor"/>
<path d="M13.2703 17.5V12.5C13.2703 11.3954 14.1657 10.5 15.2703 10.5C16.3748 10.5 17.2703 11.3954 17.2703 12.5V17.5C17.2703 18.6046 16.3748 19.5 15.2703 19.5C14.1657 19.5 13.2703 18.6046 13.2703 17.5Z" fill="currentColor"/>
<path d="M3.28304 2.4501C3.3106 1.8985 3.7801 1.47369 4.33169 1.50125C4.88329 1.5288 5.30811 1.9983 5.28055 2.5499C5.20048 4.15251 5.28317 5.23192 5.48057 5.7078C5.57632 5.93862 5.73403 6.02281 6.19257 5.99644C6.74395 5.96472 7.21664 6.38598 7.24836 6.93735C7.28007 7.48873 6.85881 7.96142 6.30744 7.99313C5.04935 8.06551 4.07832 7.54715 3.6332 6.47411C3.28974 5.64613 3.18904 4.33157 3.28304 2.4501Z" fill="currentColor"/>
<path d="M10.7166 2.4501C10.6891 1.8985 10.2196 1.47369 9.66799 1.50125C9.11639 1.5288 8.69157 1.9983 8.71913 2.5499C8.7992 4.15251 8.71651 5.23192 8.51911 5.7078C8.42336 5.93862 8.26565 6.02281 7.80711 5.99644C7.25573 5.96472 6.78304 6.38598 6.75132 6.93735C6.71961 7.48873 7.14087 7.96142 7.69224 7.99313C8.95033 8.06551 9.92136 7.54715 10.3665 6.47411C10.7099 5.64613 10.8106 4.33157 10.7166 2.4501Z" fill="currentColor"/>
<path d="M6 2.5C6 1.94772 6.44772 1.5 7 1.5C7.55228 1.5 8 1.94772 8 2.5V11.4998C8 12.0521 7.55228 12.4998 7 12.4998C6.44772 12.4998 6 12.0521 6 11.4998L6 2.5Z" fill="currentColor"/>
<path d="M5 17.5V12.5C5 11.3954 5.89543 10.5 7 10.5C8.10457 10.5 9 11.3954 9 12.5V17.5C9 18.6046 8.10457 19.5 7 19.5C5.89543 19.5 5 18.6046 5 17.5Z" fill="currentColor"/>
</svg>
`;

const Label$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_303_4974)">
<path d="M2.97872 2.63551C2.97881 2.63462 2.97889 2.63373 2.97897 2.63284C2.97986 2.63276 2.98075 2.63267 2.98164 2.63259C3.43843 2.59036 4.07526 2.54622 4.79712 2.51753C6.25646 2.45955 7.9903 2.46795 9.2767 2.65973C9.3352 2.66845 9.41101 2.70095 9.48715 2.77708L17.2405 10.5304C17.4358 10.7257 17.4358 11.0423 17.2405 11.2375L11.5836 16.8944C11.3884 17.0897 11.0718 17.0897 10.8765 16.8944L3.12319 9.14104C3.04705 9.06491 3.01455 8.98909 3.00583 8.9306C2.81406 7.6442 2.80567 5.91035 2.86367 4.451C2.89235 3.72913 2.9365 3.0923 2.97872 2.63551Z" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<circle cx="7.4346" cy="7.17334" r="1" transform="rotate(-45 7.4346 7.17334)" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_303_4974">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Leave$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6667 8L17.7501 10.5L15.6667 8Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6667 13L17.75 10.5L15.6667 13Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.5 10.5L10 10.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<line x1="4" y1="3.5" x2="13" y2="3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<line x1="4" y1="17.5" x2="13" y2="17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M13 3.5V7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M13 13.5V17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M4 3.5L4 17.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;

const Letter$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 3.5H3C2.44772 3.5 2 3.94772 2 4.5V15.5C2 16.0523 2.44772 16.5 3 16.5H17C17.5523 16.5 18 16.0523 18 15.5V4.5C18 3.94772 17.5523 3.5 17 3.5ZM4 14.5V5.5H16V14.5H4Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.6484 5.26131L10.6034 11.2613C10.2279 11.5811 9.67524 11.5794 9.30177 11.2572L2.34679 5.25718C1.64501 4.65176 2.07317 3.5 3 3.5H17C17.93 3.5 18.3564 4.65833 17.6484 5.26131ZM5.69006 5.5L9.95917 9.18292L14.2835 5.5H5.69006Z" fill="currentColor"/>
</svg>
`;

const LetterOpen$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.4706 18.3375H2.53952C2.30966 18.3375 2.08979 18.2475 1.92989 18.0775C1.76998 17.9275 1.67004 17.6975 1.67004 17.4675V8.43748C1.67004 7.84748 1.94988 7.27748 2.42959 6.91748L2.69943 6.70748V5.33748C2.69943 4.85748 3.08919 4.46748 3.5689 4.46748H5.64766L8.86573 2.03748C9.51534 1.54748 10.4947 1.54748 11.1444 2.03748L14.3624 4.47748H16.4412C16.671 4.47748 16.9009 4.56748 17.0508 4.73748C17.2007 4.89748 17.3107 5.11748 17.3107 5.34748V6.71748L17.5805 6.92748C18.0502 7.28748 18.34 7.84748 18.34 8.43748V17.4675C18.34 17.6975 18.2501 17.9275 18.0802 18.0875C17.9203 18.2475 17.7004 18.3375 17.4706 18.3375V18.3375ZM3.39901 16.5975H16.6011V11.2175L11.1444 15.3775C10.4848 15.8675 9.52533 15.8675 8.86573 15.3775L3.39901 11.2175V16.5975ZM4.42839 9.82748L9.89511 13.9875C9.95507 14.0275 10.045 14.0275 10.095 13.9875L15.5717 9.82748V6.21748H4.42839V9.82748ZM11.4842 4.47748L10.095 3.40748C10.035 3.36748 9.94508 3.36748 9.89511 3.40748L8.50594 4.47748H11.4842Z" fill="currentColor"/>
<path d="M13.3631 8.0876H6.61712C6.38726 8.0876 6.18738 7.8976 6.18738 7.6576C6.18738 7.4176 6.37726 7.2276 6.61712 7.2276H13.3631C13.5929 7.2276 13.7928 7.4176 13.7928 7.6576C13.7928 7.8976 13.6029 8.0876 13.3631 8.0876Z" fill="currentColor"/>
<path d="M11.6541 11.5275H8.34606C8.1162 11.5275 7.91632 11.3375 7.91632 11.0975C7.91632 10.8575 8.10621 10.6675 8.34606 10.6675H11.6541C11.8839 10.6675 12.0838 10.8575 12.0838 11.0975C12.0838 11.3375 11.8939 11.5275 11.6541 11.5275Z" fill="currentColor"/>
<path d="M13.3631 9.80757H6.61712C6.38726 9.80757 6.18738 9.61757 6.18738 9.37757C6.18738 9.13757 6.37726 8.94757 6.61712 8.94757H13.3631C13.5929 8.94757 13.7928 9.13757 13.7928 9.37757C13.7928 9.61757 13.6029 9.80757 13.3631 9.80757Z" fill="currentColor"/>
</svg>
`;

const List$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="5" cy="6" r="1.5" fill="currentColor"/>
<circle cx="5" cy="10" r="1.5" fill="currentColor"/>
<circle cx="5" cy="14" r="1.5" fill="currentColor"/>
<line x1="8.5" y1="6" x2="15.5" y2="6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<line x1="8.5" y1="10" x2="15.5" y2="10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<line x1="8.5" y1="14" x2="15.5" y2="14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;

const LockClosed$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 13C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13C12 11.8954 11.1046 11 10 11C8.89543 11 8 11.8954 8 13ZM10.5 13C10.5 13.2761 10.2761 13.5 10 13.5C9.72386 13.5 9.5 13.2761 9.5 13C9.5 12.7239 9.72386 12.5 10 12.5C10.2761 12.5 10.5 12.7239 10.5 13Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 7H7C4.79086 7 3 8.79086 3 11V15C3 17.2091 4.79086 19 7 19H13C15.2091 19 17 17.2091 17 15V11C17 8.79086 15.2091 7 13 7ZM5 11C5 9.89543 5.89543 9 7 9H13C14.1046 9 15 9.89543 15 11V15C15 16.1046 14.1046 17 13 17H7C5.89543 17 5 16.1046 5 15V11Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4C14 1.79086 12.2091 0 10 0C7.79086 0 6 1.79086 6 4V9H14V4ZM12 4V7H8V4C8 2.89543 8.89543 2 10 2C11.1046 2 12 2.89543 12 4Z" fill="currentColor"/>
</svg>
`;

const LockOpen$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 7H7C4.79086 7 3 8.79086 3 11V15C3 17.2091 4.79086 19 7 19H13C15.2091 19 17 17.2091 17 15V11C17 8.79086 15.2091 7 13 7ZM5 11C5 9.89543 5.89543 9 7 9H13C14.1046 9 15 9.89543 15 11V15C15 16.1046 14.1046 17 13 17H7C5.89543 17 5 16.1046 5 15V11Z" fill="currentColor"/>
<path d="M8 8C8 8.55228 7.55228 9 7 9C6.44772 9 6 8.55228 6 8V4C6 1.79086 7.79086 0 10 0C12.2091 0 14 1.79086 14 4V4.5C14 5.05228 13.5523 5.5 13 5.5C12.4477 5.5 12 5.05228 12 4.5V4C12 2.89543 11.1046 2 10 2C8.89543 2 8 2.89543 8 4V8Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 13C8 14.1046 8.89543 15 10 15C11.1046 15 12 14.1046 12 13C12 11.8954 11.1046 11 10 11C8.89543 11 8 11.8954 8 13ZM10.5 13C10.5 13.2761 10.2761 13.5 10 13.5C9.72386 13.5 9.5 13.2761 9.5 13C9.5 12.7239 9.72386 12.5 10 12.5C10.2761 12.5 10.5 12.7239 10.5 13Z" fill="currentColor"/>
</svg>
`;

const Loop$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_3316)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.47487 4.4749C2.32698 6.62279 2.32698 10.1052 4.47487 12.2531C6.62275 14.401 10.1052 14.401 12.253 12.2531C14.4009 10.1052 14.4009 6.62279 12.253 4.4749C10.1052 2.32702 6.62275 2.32702 4.47487 4.4749ZM10.8388 10.8389C9.47199 12.2057 7.25591 12.2057 5.88908 10.8389C4.52224 9.47203 4.52224 7.25595 5.88908 5.88912C7.25591 4.52228 9.47199 4.52228 10.8388 5.88912C12.2057 7.25595 12.2057 9.47203 10.8388 10.8389Z" fill="currentColor"/>
<path d="M11.1924 13.3137C10.6066 12.7279 10.6066 11.7782 11.1924 11.1924C11.7782 10.6066 12.7279 10.6066 13.3137 11.1924L16.8492 14.7279C17.435 15.3137 17.435 16.2635 16.8492 16.8492C16.2635 17.435 15.3137 17.435 14.7279 16.8492L11.1924 13.3137Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_0_3316">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const LoopMinus$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.82843 4.82846C2.48529 7.1716 2.48529 10.9706 4.82843 13.3137C7.17158 15.6569 10.9706 15.6569 13.3137 13.3137C15.6569 10.9706 15.6569 7.1716 13.3137 4.82846C10.9706 2.48531 7.17158 2.48531 4.82843 4.82846ZM11.8995 11.8995C10.3374 13.4616 7.80475 13.4616 6.24265 11.8995C4.68055 10.3374 4.68055 7.80477 6.24265 6.24267C7.80475 4.68057 10.3374 4.68057 11.8995 6.24267C13.4616 7.80477 13.4616 10.3374 11.8995 11.8995Z" fill="currentColor"/>
<path d="M11.8995 14.7279C11.3137 14.1421 11.3137 13.1924 11.8995 12.6066C12.4853 12.0208 13.435 12.0208 14.0208 12.6066L17.5563 16.1421C18.1421 16.7279 18.1421 17.6776 17.5563 18.2634C16.9706 18.8492 16.0208 18.8492 15.435 18.2634L11.8995 14.7279Z" fill="currentColor"/>
<path d="M6.70709 9.91418C6.15481 9.91418 5.70709 9.46647 5.70709 8.91418C5.70709 8.3619 6.15481 7.91418 6.70709 7.91418H11.1924C11.7447 7.91418 12.1924 8.3619 12.1924 8.91418C12.1924 9.46647 11.7447 9.91418 11.1924 9.91418H6.70709Z" fill="currentColor"/>
</svg>
`;

const LoopPlus$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.82847 4.82846C2.48532 7.1716 2.48532 10.9706 4.82847 13.3137C7.17161 15.6569 10.9706 15.6569 13.3137 13.3137C15.6569 10.9706 15.6569 7.1716 13.3137 4.82846C10.9706 2.48531 7.17161 2.48531 4.82847 4.82846ZM11.8995 11.8995C10.3374 13.4616 7.80478 13.4616 6.24268 11.8995C4.68058 10.3374 4.68058 7.80477 6.24268 6.24267C7.80478 4.68057 10.3374 4.68057 11.8995 6.24267C13.4616 7.80477 13.4616 10.3374 11.8995 11.8995Z" fill="currentColor"/>
<path d="M11.8995 14.7279C11.3138 14.1421 11.3138 13.1924 11.8995 12.6066C12.4853 12.0208 13.4351 12.0208 14.0209 12.6066L17.5564 16.1421C18.1422 16.7279 18.1422 17.6776 17.5564 18.2634C16.9706 18.8492 16.0209 18.8492 15.4351 18.2634L11.8995 14.7279Z" fill="currentColor"/>
<path d="M7.20715 10.1642C6.65487 10.1642 6.20715 9.71647 6.20715 9.16418C6.20715 8.6119 6.65487 8.16418 7.20715 8.16418H11.2072C11.7594 8.16418 12.2072 8.6119 12.2072 9.16418C12.2072 9.71647 11.7594 10.1642 11.2072 10.1642H7.20715Z" fill="currentColor"/>
<path d="M8.20715 7.16418C8.20715 6.6119 8.65487 6.16418 9.20715 6.16418C9.75944 6.16418 10.2072 6.6119 10.2072 7.16418V11.1642C10.2072 11.7165 9.75944 12.1642 9.20715 12.1642C8.65487 12.1642 8.20715 11.7165 8.20715 11.1642V7.16418Z" fill="currentColor"/>
</svg>
`;

const Magnet$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8_1)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.29286 1.39339C7.68339 1.00286 8.31655 1.00286 8.70708 1.39339L12.2426 4.92892C12.6331 5.31944 12.6331 5.95261 12.2426 6.34313L7.29286 11.2929C6.90234 11.6834 6.90234 12.3166 7.29286 12.7071C7.68339 13.0976 8.31655 13.0976 8.70708 12.7071L13.6568 7.75735C14.0473 7.36682 14.6805 7.36682 15.071 7.75735L18.6066 11.2929C18.9971 11.6834 18.9971 12.3166 18.6066 12.7071L13.6568 17.6568C10.5326 20.781 5.46732 20.781 2.34312 17.6568C-0.781075 14.5326 -0.781077 9.46733 2.34312 6.34313L7.29286 1.39339ZM7.99997 3.51471L3.75733 7.75734C1.41419 10.1005 1.41419 13.8995 3.75734 16.2426C6.10048 18.5858 9.89947 18.5858 12.2426 16.2426L16.4853 12L14.3639 9.87867L10.1213 14.1213C8.94972 15.2929 7.05022 15.2929 5.87865 14.1213C4.70708 12.9497 4.70708 11.0502 5.87865 9.87867L10.1213 5.63603L7.99997 3.51471Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.29286 8.46446L5.17154 6.34314L6.58575 4.92892L8.70707 7.05024L7.29286 8.46446Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6568 14.8284L11.5355 12.7071L12.9497 11.2929L15.071 13.4142L13.6568 14.8284Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.6286 6.42847C14.1158 6.22336 13.8664 5.64139 14.0715 5.1286L15.4217 1.75314L16.98 2.27258L17.7988 0.567164C18.0379 0.06929 18.6352 -0.140537 19.1331 0.0985035C19.631 0.337543 19.8408 0.93493 19.6018 1.4328L18.02 4.72741L16.5783 4.24685L15.9285 5.87139C15.7233 6.38417 15.1414 6.63359 14.6286 6.42847Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_8_1">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Map$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 10C11.3807 10 12.5 8.88071 12.5 7.5C12.5 6.11929 11.3807 5 10 5C8.61929 5 7.5 6.11929 7.5 7.5C7.5 8.88071 8.61929 10 10 10ZM10 7C10.2761 7 10.5 7.22386 10.5 7.5C10.5 7.77614 10.2761 8 10 8C9.72386 8 9.5 7.77614 9.5 7.5C9.5 7.22386 9.72386 7 10 7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 7.28555C5 10.1987 7.80453 15 10 15C12.1955 15 15 10.1987 15 7.28555C15 4.38124 12.7774 2 10 2C7.22258 2 5 4.38124 5 7.28555ZM13 7.28555C13 9.2396 10.8035 13 10 13C9.19652 13 7 9.2396 7 7.28555C7 5.45617 8.35914 4 10 4C11.6409 4 13 5.45617 13 7.28555Z" fill="currentColor"/>
<path d="M13.7298 10C13.1775 10 12.7298 9.55228 12.7298 9C12.7298 8.44772 13.1775 8 13.7298 8C15.0774 8 16.2597 8.89861 16.6204 10.1971L18.0093 15.1971C18.4527 16.7935 17.5181 18.4471 15.9216 18.8906C15.6602 18.9632 15.3901 19 15.1187 19H4.88128C3.22442 19 1.88128 17.6569 1.88128 16C1.88128 15.7286 1.9181 15.4585 1.99073 15.1971L3.37961 10.1971C3.7403 8.89861 4.92254 8 6.27017 8C6.82245 8 7.27017 8.44772 7.27017 9C7.27017 9.55228 6.82245 10 6.27017 10C5.82096 10 5.42688 10.2995 5.30665 10.7324L3.91776 15.7324C3.89355 15.8195 3.88128 15.9095 3.88128 16C3.88128 16.5523 4.32899 17 4.88128 17H15.1187C15.2092 17 15.2992 16.9877 15.3864 16.9635C15.9185 16.8157 16.23 16.2645 16.0822 15.7324L14.6933 10.7324C14.5731 10.2995 14.179 10 13.7298 10Z" fill="currentColor"/>
</svg>
`;

const Megaphone$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.39996 10.0542L13 11.5815V5.6185L7.39996 7.14578V10.0542ZM5.39996 10.818C5.39996 11.269 5.70178 11.6642 6.13685 11.7828L13.7369 13.8555C14.373 14.029 15 13.5501 15 12.8908V4.30925C15 3.64988 14.373 3.171 13.7369 3.34449L6.13685 5.41722C5.70178 5.53588 5.39996 5.93104 5.39996 6.38199L5.39996 10.818Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.01605 9.80002V7.4H3.96888C3.54859 8.13534 3.54744 9.0554 3.9729 9.80002H5.01605ZM6.01605 11.8C6.56834 11.8 7.01605 11.3523 7.01605 10.8L7.01605 6.4C7.01605 5.84772 6.56834 5.4 6.01605 5.4L3.25275 5.4C3.10164 5.4 2.95718 5.46215 2.85326 5.57185C1.25087 7.26348 1.25751 9.9249 2.85144 11.6245C2.95597 11.736 3.10274 11.8 3.25555 11.8H6.01605Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.42422 12H5.83956L5.07426 15H5.65708L6.42422 12ZM5.83956 10C4.9254 10 4.1276 10.6198 3.90163 11.5056L2.81816 15.7528C2.65686 16.3851 3.13458 17 3.78713 17H5.65708C6.57081 17 7.36836 16.3807 7.59473 15.4955L8.36187 12.4955C8.68532 11.2306 7.7298 10 6.42422 10H5.83956Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.0319 4.44523C19.3383 4.90473 19.2142 5.52561 18.7547 5.832L17.2548 6.83211C16.7953 7.1385 16.1744 7.01438 15.868 6.55488C15.5616 6.09537 15.6857 5.4745 16.1452 5.1681L17.6451 4.16799C18.1046 3.8616 18.7255 3.98572 19.0319 4.44523Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6999 8.60002C15.6999 8.04774 16.1476 7.60003 16.6999 7.60003L18.1998 7.60003C18.752 7.60003 19.1998 8.04775 19.1998 8.60004C19.1998 9.15232 18.752 9.60003 18.1998 9.60003L16.6999 9.60003C16.1476 9.60003 15.6999 9.15231 15.6999 8.60002Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9341 10.5089C16.2893 10.086 16.9201 10.0311 17.343 10.3863L18.7235 11.5457C19.1464 11.9009 19.2013 12.5317 18.8462 12.9546C18.491 13.3775 17.8602 13.4324 17.4373 13.0772L16.0568 11.9178C15.6339 11.5626 15.579 10.9318 15.9341 10.5089Z" fill="currentColor"/>
</svg>
`;

const Menu$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 8C2 7.44772 2.44772 7 3 7H13.3077C13.86 7 14.3077 7.44772 14.3077 8C14.3077 8.55228 13.86 9 13.3077 9H3C2.44772 9 2 8.55228 2 8Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 3.44772 2.44772 3 3 3H17C17.5523 3 18 3.44772 18 4C18 4.55228 17.5523 5 17 5H3C2.44772 5 2 4.55228 2 4Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 11.4477 2.44772 11 3 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H3C2.44772 13 2 12.5523 2 12Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 16C2 15.4477 2.44772 15 3 15H13.3077C13.86 15 14.3077 15.4477 14.3077 16C14.3077 16.5523 13.86 17 13.3077 17H3C2.44772 17 2 16.5523 2 16Z" fill="currentColor"/>
</svg>
`;

const Microphone$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 4.5C7.5 3.11929 8.61929 2 10 2V2C11.3807 2 12.5 3.11929 12.5 4.5V8.5C12.5 9.88071 11.3807 11 10 11V11C8.61929 11 7.5 9.88071 7.5 8.5V4.5Z" fill="currentColor"/>
<path d="M10 18.5C7.16602 18.5 5.5 18.2917 5.5 17.5C5.5 16.7083 7.16602 16.5 10 16.5C12.834 16.5 14.5 16.7083 14.5 17.5C14.5 18.2917 12.834 18.5 10 18.5Z" fill="currentColor"/>
<path d="M9.03572 13.5H11.0357V18H9.03572V13.5Z" fill="currentColor"/>
<path d="M14 8C14 7.44772 14.4477 7 15 7C15.5523 7 16 7.44772 16 8V9.8C16 12.7142 13.2789 15 10 15C6.72114 15 4 12.7142 4 9.8V8C4 7.44772 4.44772 7 5 7C5.55228 7 6 7.44772 6 8V9.8C6 11.5249 7.75601 13 10 13C12.244 13 14 11.5249 14 9.8V8Z" fill="currentColor"/>
</svg>
`;

const Microphone2$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1232_1628)">
<circle cx="11.6629" cy="5.11788" r="3" transform="rotate(38.2702 11.6629 5.11788)" stroke="currentColor" stroke-width="2"/>
<path d="M8.54428 5.84189L3.98186 12.4324" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M11.6847 8.31937L6.33716 14.2905" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M3.98186 12.4323L6.33715 14.2905" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M9.61729 2.86722L10.4383 4.11733C11.0322 5.02161 11.9033 5.70887 12.921 6.07596L14.3279 6.58345" stroke="currentColor" stroke-width="1.5"/>
<path d="M4.7 14C4.7 14 3.66601 15.328 3.54163 16C3.39837 16.774 3.6772 17.2869 4.05595 17.5857C4.4347 17.8845 5.26724 17.9742 6.04924 17.8845C8.18314 17.6397 9.47204 14.4473 11.3997 13.5C12.8868 12.7693 12.7844 12.8683 14.3997 12.5C15.7726 12.187 17.0975 11.9527 17.0975 11.9527" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="clip0_1232_1628">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Minus$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 11C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H5Z" fill="currentColor"/>
</svg>
`;

const Monitor$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 1H2.5C1.11929 1 0 2.11929 0 3.5V13.5C0 14.8807 1.11929 16 2.5 16H17.5C18.8807 16 20 14.8807 20 13.5V3.5C20 2.11929 18.8807 1 17.5 1ZM2 3.5C2 3.22386 2.22386 3 2.5 3H17.5C17.7761 3 18 3.22386 18 3.5V13.5C18 13.7761 17.7761 14 17.5 14H2.5C2.22386 14 2 13.7761 2 13.5V3.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 14.5H8.5C7.94772 14.5 7.5 14.9477 7.5 15.5V18C7.5 18.5523 7.94772 19 8.5 19H11.5C12.0523 19 12.5 18.5523 12.5 18V15.5C12.5 14.9477 12.0523 14.5 11.5 14.5ZM9 17.5V16H11V17.5H9Z" fill="currentColor"/>
<path d="M5.5 19.5C4.94772 19.5 4.5 19.0523 4.5 18.5C4.5 17.9477 4.94772 17.5 5.5 17.5H14.5C15.0523 17.5 15.5 17.9477 15.5 18.5C15.5 19.0523 15.0523 19.5 14.5 19.5H5.5Z" fill="currentColor"/>
<path d="M3.5 4H16.5C16.7761 4 17 4.22386 17 4.5V12.5C17 12.7761 16.7761 13 16.5 13H3.5C3.22386 13 3 12.7761 3 12.5V4.5C3 4.22386 3.22386 4 3.5 4Z" fill="currentColor"/>
</svg>
`;

const MonitorEye$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 4.5C4.5 3.11929 5.61929 2 7 2H16.7816C18.1623 2 19.2816 3.11929 19.2816 4.5V11.7311C19.2816 13.1118 18.1623 14.2311 16.7816 14.2311H12.8908V16.0714C12.8908 16.6237 12.4431 17.0714 11.8908 17.0714C11.3385 17.0714 10.8908 16.6237 10.8908 16.0714V14.2252C10.3899 14.1708 10 13.7465 10 13.2311C10 12.6788 10.4477 12.2311 11 12.2311H16.7816C17.0577 12.2311 17.2816 12.0073 17.2816 11.7311V4.5C17.2816 4.22386 17.0577 4 16.7816 4H7C6.72386 4 6.5 4.22386 6.5 4.5V5.75842C6.5 6.3107 6.05228 6.75842 5.5 6.75842C4.94772 6.75842 4.5 6.3107 4.5 5.75842V4.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.69543 16.6451C7.69543 16.0929 8.14315 15.6451 8.69543 15.6451H15.0862C15.6385 15.6451 16.0862 16.0929 16.0862 16.6451C16.0862 17.1974 15.6385 17.6451 15.0862 17.6451H8.69543C8.14315 17.6451 7.69543 17.1974 7.69543 16.6451Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.13766 12.3592C3.67091 12.6592 4.47491 12.8762 5.41748 12.8762C6.36005 12.8762 7.16405 12.6592 7.6973 12.3592C8.26189 12.0416 8.33496 11.7594 8.33496 11.6726C8.33496 11.5859 8.26189 11.3036 7.6973 10.986C7.16405 10.6861 6.36005 10.4691 5.41748 10.4691C4.47491 10.4691 3.67091 10.6861 3.13766 10.986C2.57308 11.3036 2.5 11.5859 2.5 11.6726C2.5 11.7594 2.57308 12.0416 3.13766 12.3592ZM2.15714 14.1024C1.30388 13.6224 0.5 12.8029 0.5 11.6726C0.5 10.5424 1.30388 9.72285 2.15714 9.24289C3.04175 8.7453 4.19648 8.46906 5.41748 8.46906C6.63848 8.46906 7.79321 8.7453 8.67782 9.24289C9.53108 9.72285 10.335 10.5424 10.335 11.6726C10.335 12.8029 9.53108 13.6224 8.67782 14.1024C7.79321 14.6 6.63848 14.8762 5.41748 14.8762C4.19648 14.8762 3.04175 14.6 2.15714 14.1024Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.41746 7.09998C5.91451 7.09998 6.31746 7.50292 6.31746 7.99998L6.31746 9.46903C6.31746 9.96609 5.91451 10.369 5.41746 10.369C4.9204 10.369 4.51746 9.96609 4.51746 9.46903L4.51746 7.99998C4.51746 7.50292 4.9204 7.09998 5.41746 7.09998Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.55272 7.36238C8.04013 7.45986 8.35622 7.934 8.25874 8.4214L8.0139 9.64562C7.91642 10.133 7.44227 10.4491 6.95487 10.3516C6.46747 10.2542 6.15137 9.78001 6.24885 9.29261L6.49369 8.0684C6.59118 7.58099 7.06532 7.2649 7.55272 7.36238Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.28224 7.36238C2.79484 7.45986 2.47874 7.934 2.57622 8.4214L2.82106 9.64562C2.91854 10.133 3.39269 10.4491 3.88009 10.3516C4.36749 10.2542 4.68359 9.78001 4.58611 9.29261L4.34127 8.0684C4.24379 7.58099 3.76964 7.2649 3.28224 7.36238Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.03693 8.20762C0.610712 8.46335 0.472503 9.01618 0.728236 9.44241L1.46276 10.6666C1.7185 11.0928 2.27133 11.231 2.69755 10.9753C3.12378 10.7196 3.26198 10.1667 3.00625 9.74053L2.27172 8.51631C2.01599 8.09009 1.46316 7.95188 1.03693 8.20762Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.7979 8.20762C10.2241 8.46335 10.3623 9.01618 10.1066 9.44241L9.37207 10.6666C9.11634 11.0928 8.56351 11.231 8.13729 10.9753C7.71106 10.7196 7.57285 10.1667 7.82859 9.74053L8.56312 8.51631C8.81885 8.09009 9.37168 7.95188 9.7979 8.20762Z" fill="currentColor"/>
<path d="M5.41504 10.88C5.82925 10.88 6.16504 11.2158 6.16504 11.63C6.16504 12.0442 5.82925 12.38 5.41504 12.38C5.00083 12.38 4.66504 12.0442 4.66504 11.63C4.66504 11.2158 5.00083 10.88 5.41504 10.88Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.66504 11.63C5.66504 11.4919 5.55311 11.38 5.41504 11.38C5.27697 11.38 5.16504 11.4919 5.16504 11.63C5.16504 11.7681 5.27697 11.88 5.41504 11.88C5.55311 11.88 5.66504 11.7681 5.66504 11.63ZM5.41504 13.38C4.44854 13.38 3.66504 12.5965 3.66504 11.63C3.66504 10.6635 4.44854 9.88 5.41504 9.88C6.38154 9.88 7.16504 10.6635 7.16504 11.63C7.16504 12.5965 6.38154 13.38 5.41504 13.38Z" fill="currentColor"/>
</svg>
`;

const MonitorLoop$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1213_2209)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 4.5C1.5 3.11929 2.61929 2 4 2H15.7479C17.1287 2 18.2479 3.11929 18.2479 4.5V12.1513C18.2479 13.532 17.1287 14.6513 15.7479 14.6513H10.874V16.9286C10.874 17.4809 10.4263 17.9286 9.87397 17.9286C9.32169 17.9286 8.87397 17.4809 8.87397 16.9286V14.4311C8.64595 14.2479 8.5 13.9666 8.5 13.6513C8.5 13.099 8.94772 12.6513 9.5 12.6513H15.7479C16.0241 12.6513 16.2479 12.4274 16.2479 12.1513V4.5C16.2479 4.22386 16.0241 4 15.7479 4H4C3.72386 4 3.5 4.22386 3.5 4.5V6C3.5 6.55228 3.05228 7 2.5 7C1.94772 7 1.5 6.55228 1.5 6V4.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.18701 17.5905C5.18701 17.0382 5.63473 16.5905 6.18701 16.5905H13.561C14.1133 16.5905 14.561 17.0382 14.561 17.5905C14.561 18.1427 14.1133 18.5905 13.561 18.5905H6.18701C5.63473 18.5905 5.18701 18.1427 5.18701 17.5905Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.43675 9.3815C4.36734 8.81314 3.03967 9.21931 2.47131 10.2887C1.90295 11.3581 2.30913 12.6858 3.37853 13.2541C4.44793 13.8225 5.7756 13.4163 6.34396 12.3469C6.91232 11.2775 6.50615 9.94986 5.43675 9.3815ZM0.705247 9.3501C1.79199 7.30532 4.33059 6.52869 6.37536 7.61543C8.42014 8.70218 9.19677 11.2408 8.11003 13.2855C7.18502 15.026 5.20815 15.8477 3.37926 15.3836L1.70242 18.5386C1.44322 19.0263 0.837759 19.2116 0.350073 18.9524C-0.137613 18.6932 -0.322843 18.0877 -0.0636506 17.6L1.61319 14.4449C0.205243 13.1888 -0.219762 11.0906 0.705247 9.3501Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_1213_2209">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Monitor2$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 1H2.5C1.11929 1 0 2.11929 0 3.5V13.5C0 14.8807 1.11929 16 2.5 16H17.5C18.8807 16 20 14.8807 20 13.5V3.5C20 2.11929 18.8807 1 17.5 1ZM2 3.5C2 3.22386 2.22386 3 2.5 3H17.5C17.7761 3 18 3.22386 18 3.5V13.5C18 13.7761 17.7761 14 17.5 14H2.5C2.22386 14 2 13.7761 2 13.5V3.5Z" fill="currentColor"/>
<path d="M10 13.75C9.58579 13.75 9.25 13.4142 9.25 13C9.25 12.5858 9.58579 12.25 10 12.25C10.4142 12.25 10.75 12.5858 10.75 13C10.75 13.4142 10.4142 13.75 10 13.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 14.5H8.5C7.94772 14.5 7.5 14.9477 7.5 15.5V18C7.5 18.5523 7.94772 19 8.5 19H11.5C12.0523 19 12.5 18.5523 12.5 18V15.5C12.5 14.9477 12.0523 14.5 11.5 14.5ZM9 17.5V16H11V17.5H9Z" fill="currentColor"/>
<path d="M5.5 19.5C4.94772 19.5 4.5 19.0523 4.5 18.5C4.5 17.9477 4.94772 17.5 5.5 17.5H14.5C15.0523 17.5 15.5 17.9477 15.5 18.5C15.5 19.0523 15.0523 19.5 14.5 19.5H5.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 12H1V11H19V12Z" fill="currentColor"/>
</svg>
`;

const Moon$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.76447 6.1275C9.07052 4.68767 10.0433 3.51293 11.3637 2.93174C12.2938 2.52236 12.0913 1.14759 11.0826 1.02391C6.47122 0.458427 2.16189 3.52205 1.18835 8.10223C0.15323 12.9721 3.2549 17.7583 8.11727 18.7918C12.9796 19.8254 17.7599 16.7145 18.795 11.8446C18.9477 11.1264 19.0122 10.4004 18.9896 9.67855C18.9577 8.66019 17.6015 8.33612 17.1127 9.23007C16.1656 10.9622 14.1849 11.891 12.2283 11.4751C9.79778 10.9585 8.24645 8.56461 8.76447 6.1275ZM8.53309 16.8355C4.752 16.0318 2.339 12.3083 3.14464 8.51805C3.68521 5.97489 5.54698 4.0327 7.871 3.28807C7.36391 4.00107 6.99737 4.82159 6.80818 5.71168C6.06068 9.22838 8.30068 12.685 11.8125 13.4314C13.445 13.7784 15.0883 13.478 16.449 12.6805C15.176 15.7335 11.8789 17.5467 8.53309 16.8355Z" fill="currentColor"/>
</svg>
`;

const MoonFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3637 2.93174C10.0433 3.51293 9.07052 4.68767 8.76447 6.1275C8.24645 8.56461 9.79778 10.9585 12.2283 11.4751C14.1849 11.891 16.1656 10.9622 17.1127 9.23007C17.6015 8.33612 18.9577 8.66019 18.9896 9.67855C19.0122 10.4004 18.9477 11.1264 18.795 11.8446C17.7599 16.7145 12.9796 19.8254 8.11727 18.7918C3.2549 17.7583 0.15323 12.9721 1.18835 8.10223C2.16189 3.52205 6.47122 0.458427 11.0826 1.02391C12.0913 1.14759 12.2938 2.52236 11.3637 2.93174Z" fill="currentColor"/>
</svg>
`;

const Motorcycle$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.75 12.5C12.75 13.0523 12.3023 13.5 11.75 13.5C11.1977 13.5 10.75 13.0523 10.75 12.5C10.75 11.9477 11.1977 11.5 11.75 11.5C12.3023 11.5 12.75 11.9477 12.75 12.5Z" fill="currentColor"/>
<path d="M9.25 12.5C9.25 13.0523 8.80228 13.5 8.25 13.5C7.69772 13.5 7.25 13.0523 7.25 12.5C7.25 11.9477 7.69772 11.5 8.25 11.5C8.80228 11.5 9.25 11.9477 9.25 12.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C11.933 8 13.5 6.433 13.5 4.5C13.5 2.567 11.933 1 10 1C8.067 1 6.5 2.567 6.5 4.5C6.5 6.433 8.067 8 10 8ZM10 3C10.8284 3 11.5 3.67157 11.5 4.5C11.5 5.32843 10.8284 6 10 6C9.17157 6 8.5 5.32843 8.5 4.5C8.5 3.67157 9.17157 3 10 3Z" fill="currentColor"/>
<path d="M10 14C11.1046 14 12 14.8954 12 16V17.5C12 18.6046 11.1046 19.5 10 19.5C8.89543 19.5 8 18.6046 8 17.5V16C8 14.8954 8.89543 14 10 14Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 11C15 8.23858 12.7614 6 10 6C7.23858 6 5 8.23858 5 11V13.5C5 14.8807 6.11929 16 7.5 16H12.5C13.8807 16 15 14.8807 15 13.5V11ZM7 11C7 9.34315 8.34315 8 10 8C11.6569 8 13 9.34315 13 11V13.5C13 13.7761 12.7761 14 12.5 14H7.5C7.22386 14 7 13.7761 7 13.5V11Z" fill="currentColor"/>
<path d="M15.5 4.5C14.9477 4.5 14.5 4.05228 14.5 3.5C14.5 2.94772 14.9477 2.5 15.5 2.5H17.5C18.0523 2.5 18.5 2.94772 18.5 3.5C18.5 4.05228 18.0523 4.5 17.5 4.5H15.5Z" fill="currentColor"/>
<path d="M2.5 4.5C1.94772 4.5 1.5 4.05228 1.5 3.5C1.5 2.94772 1.94772 2.5 2.5 2.5H4.5C5.05228 2.5 5.5 2.94772 5.5 3.5C5.5 4.05228 5.05228 4.5 4.5 4.5H2.5Z" fill="currentColor"/>
<path d="M3.40952 4.04579L3.88582 2.59058L8.40952 3.45438L7.93321 4.90959L3.40952 4.04579Z" fill="currentColor"/>
<path d="M11.5905 3.45433L12.0668 4.90955L16.5905 4.04574L16.1142 2.59053L11.5905 3.45433Z" fill="currentColor"/>
</svg>
`;

const MoveX$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0265 5.23175C13.4508 4.87819 14.0813 4.93551 14.4349 5.35979L17.7682 9.35979C18.1218 9.78407 18.0645 10.4146 17.6402 10.7682C17.2159 11.1218 16.5853 11.0644 16.2318 10.6402L12.8984 6.64016C12.5449 6.21588 12.6022 5.58532 13.0265 5.23175Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0265 14.7682C12.6022 14.4146 12.5449 13.7841 12.8984 13.3598L16.2318 9.35979C16.5853 8.93551 17.2159 8.87819 17.6402 9.23175C18.0645 9.58532 18.1218 10.2159 17.7682 10.6402L14.4349 14.6402C14.0813 15.0644 13.4508 15.1218 13.0265 14.7682Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 10C16 10.5523 15.5523 11 15 11L7.00004 11C6.44775 11 6.00004 10.5523 6.00004 10C6.00004 9.44771 6.44775 9 7.00004 9L15 9C15.5523 9 16 9.44772 16 10Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.97351 14.7682C6.54923 15.1218 5.91867 15.0645 5.5651 14.6402L2.23177 10.6402C1.87821 10.2159 1.93553 9.58537 2.35981 9.2318C2.78409 8.87824 3.41465 8.93556 3.76821 9.35984L7.10155 13.3598C7.45511 13.7841 7.39779 14.4147 6.97351 14.7682Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.97351 5.2318C7.39779 5.58537 7.45511 6.21593 7.10155 6.64021L3.76821 10.6402C3.41465 11.0645 2.78409 11.1218 2.35981 10.7682C1.93553 10.4147 1.87821 9.78412 2.23177 9.35984L5.5651 5.35984C5.91867 4.93556 6.54923 4.87824 6.97351 5.2318Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.99995 10C3.99995 9.44772 4.44767 9 4.99995 9L13 9C13.5522 9 14 9.44772 14 10C14 10.5523 13.5522 11 13 11L4.99995 11C4.44767 11 3.99995 10.5523 3.99995 10Z" fill="currentColor"/>
</svg>
`;

const MoveY$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.23178 6.97353C4.87822 6.54926 4.93554 5.91869 5.35982 5.56513L9.35982 2.23179C9.78409 1.87823 10.4147 1.93555 10.7682 2.35983C11.1218 2.78411 11.0645 3.41467 10.6402 3.76824L6.64019 7.10157C6.21591 7.45513 5.58534 7.39781 5.23178 6.97353Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7682 6.97353C14.4147 7.39781 13.7841 7.45513 13.3598 7.10157L9.35982 3.76824C8.93554 3.41467 8.87822 2.78411 9.23178 2.35983C9.58534 1.93555 10.2159 1.87823 10.6402 2.23179L14.6402 5.56513C15.0645 5.91869 15.1218 6.54926 14.7682 6.97353Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 4C10.5523 4 11 4.44772 11 5V13C11 13.5523 10.5523 14 10 14C9.44772 14 9 13.5523 9 13V5C9 4.44772 9.44772 4 10 4Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7682 13.0265C15.1218 13.4507 15.0645 14.0813 14.6402 14.4349L10.6402 17.7682C10.2159 18.1218 9.58534 18.0644 9.23178 17.6402C8.87822 17.2159 8.93554 16.5853 9.35982 16.2318L13.3598 12.8984C13.7841 12.5449 14.4147 12.6022 14.7682 13.0265Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.23178 13.0265C5.58534 12.6022 6.21591 12.5449 6.64019 12.8984L10.6402 16.2318C11.0645 16.5853 11.1218 17.2159 10.7682 17.6402C10.4147 18.0644 9.78409 18.1218 9.35982 17.7682L5.35982 14.4349C4.93554 14.0813 4.87822 13.4507 5.23178 13.0265Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 16C9.44772 16 9 15.5523 9 15V7C9 6.44771 9.44772 6 10 6C10.5523 6 11 6.44771 11 7V15C11 15.5523 10.5523 16 10 16Z" fill="currentColor"/>
</svg>
`;

const MusicNoteDouble$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 3.80989C6.75 3.29386 7.14265 2.86257 7.65642 2.81428L16.6564 1.96832C17.2431 1.91318 17.75 2.37468 17.75 2.96393V5.14519C17.75 5.65923 17.3603 6.08955 16.8487 6.1403L7.84873 7.03323C7.26031 7.09161 6.75 6.62943 6.75 6.03812V3.80989Z" fill="currentColor"/>
<ellipse cx="14.75" cy="15" rx="3" ry="2.5" fill="currentColor"/>
<ellipse cx="5.75" cy="16" rx="3" ry="2.5" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 5H17.75V15H15.75V5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 6H8.75V16H6.75V6Z" fill="currentColor"/>
</svg>
`;

const MusicNoteSingle$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.78103 1.69759C14.1038 4.63512 16.25 6.76176 16.25 8.30413C16.25 9.79646 15.4291 11.0034 13.8541 11.8872C13.418 12.132 12.9324 11.6555 13.1688 11.2148C13.5756 10.4565 13.4416 9.60793 12.7079 8.59803C11.934 7.53285 10.8174 6.75731 9.34301 6.26969C9.13826 6.20198 9 6.01063 9 5.79498V2.11114C9 1.70978 9.44906 1.47201 9.78103 1.69759Z" fill="currentColor"/>
<path d="M7.75 17.75C5.97914 17.75 4.5 16.607 4.5 15.125C4.5 13.643 5.97914 12.5 7.75 12.5C9.52086 12.5 11 13.643 11 15.125C11 16.607 9.52086 17.75 7.75 17.75Z" fill="currentColor"/>
<path d="M10 4C10.5523 4 11 4.44772 11 5V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V5C9 4.44772 9.44772 4 10 4Z" fill="currentColor"/>
</svg>
`;

const NextTrack$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.8632 9.31771C10.2218 9.70192 10.2218 10.2981 9.8632 10.6823L5.23108 15.6453C4.61179 16.3088 3.50003 15.8706 3.50003 14.963L3.50003 5.03705C3.50003 4.12943 4.6118 3.69121 5.23108 4.35473L9.8632 9.31771Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.76425 10L5.50003 7.57407L5.50003 12.426L7.76425 10ZM9.8632 10.6823C10.2218 10.2981 10.2218 9.70192 9.8632 9.31771L5.23108 4.35473C4.6118 3.69121 3.50003 4.12943 3.50003 5.03705L3.50003 14.963C3.50003 15.8706 4.61179 16.3088 5.23108 15.6453L9.8632 10.6823Z" fill="currentColor"/>
<path d="M14.8632 9.31771C15.2218 9.70192 15.2218 10.2981 14.8632 10.6823L10.2311 15.6453C9.61179 16.3088 8.50003 15.8706 8.50003 14.963V5.03705C8.50003 4.12943 9.6118 3.69121 10.2311 4.35473L14.8632 9.31771Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.7643 10L10.5 7.57407V12.426L12.7643 10ZM14.8632 10.6823C15.2218 10.2981 15.2218 9.70192 14.8632 9.31771L10.2311 4.35473C9.6118 3.69121 8.50003 4.12943 8.50003 5.03705V14.963C8.50003 15.8706 9.61179 16.3088 10.2311 15.6453L14.8632 10.6823Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 4C16.0523 4 16.5 4.44772 16.5 5V15C16.5 15.5523 16.0523 16 15.5 16C14.9477 16 14.5 15.5523 14.5 15V5C14.5 4.44772 14.9477 4 15.5 4Z" fill="currentColor"/>
</svg>
`;

const Open$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7071 10.7071C10.3166 11.0976 9.68342 11.0976 9.29289 10.7071C8.90237 10.3166 8.90237 9.68342 9.29289 9.29289L15.2929 3.29289C15.6834 2.90237 16.3166 2.90237 16.7071 3.29289C17.0976 3.68342 17.0976 4.31658 16.7071 4.70711L10.7071 10.7071Z" fill="currentColor"/>
<path d="M15 15V11.5C15 10.9477 15.4477 10.5 16 10.5C16.5523 10.5 17 10.9477 17 11.5V16C17 16.5523 16.5523 17 16 17H4C3.44772 17 3 16.5523 3 16V4C3 3.44772 3.44772 3 4 3H8.5C9.05228 3 9.5 3.44772 9.5 4C9.5 4.55228 9.05228 5 8.5 5H5V15H15Z" fill="currentColor"/>
<path d="M17 8C17 8.55228 16.5523 9 16 9C15.4477 9 15 8.55228 15 8V4C15 3.44772 15.4477 3 16 3C16.5523 3 17 3.44772 17 4V8Z" fill="currentColor"/>
<path d="M12 5C11.4477 5 11 4.55228 11 4C11 3.44772 11.4477 3 12 3H16C16.5523 3 17 3.44772 17 4C17 4.55228 16.5523 5 16 5H12Z" fill="currentColor"/>
</svg>
`;

const PaintPallet$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_1031)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.2196 13.9555C17.2636 10.0595 14.7915 6.03562 10.731 4.94761C6.14492 3.71877 -0.364424 6.91181 1.08416 11.0092C1.56325 12.3643 2.48817 12.6814 4.23088 12.7061L4.33978 12.7075C5.26123 12.7191 5.52041 12.7792 5.59794 12.9054C5.72536 13.1128 5.72679 13.4439 5.58387 14.3543C5.51634 14.7845 5.49418 14.9355 5.46808 15.1703C5.30897 16.6011 5.55075 17.7169 6.48838 18.7268C9.41611 21.8802 15.0412 18.3535 16.2196 13.9555ZM2.96979 10.3425C2.24104 8.28126 6.9056 5.99314 10.2134 6.87946C13.2298 7.68772 15.0393 10.6331 14.2878 13.4379C13.4497 16.5656 9.50636 19.0379 7.95406 17.366C7.47464 16.8496 7.35504 16.2977 7.45583 15.3913C7.47737 15.1975 7.49709 15.0631 7.55967 14.6645C7.77887 13.2683 7.77611 12.6302 7.30206 11.8585C6.70834 10.8921 6.00236 10.7282 4.36491 10.7076L4.25922 10.7063C3.29465 10.6926 3.06582 10.6141 2.96979 10.3425Z" fill="currentColor"/>
<path d="M6 10C5.30964 10 4.75 9.44036 4.75 8.75C4.75 8.05964 5.30964 7.5 6 7.5C6.69036 7.5 7.25 8.05964 7.25 8.75C7.25 9.44036 6.69036 10 6 10Z" fill="currentColor"/>
<path d="M9.75 10C9.05964 10 8.5 9.44036 8.5 8.75C8.5 8.05964 9.05964 7.5 9.75 7.5C10.4404 7.5 11 8.05964 11 8.75C11 9.44036 10.4404 10 9.75 10Z" fill="currentColor"/>
<path d="M12.25 13C11.5596 13 11 12.4404 11 11.75C11 11.0596 11.5596 10.5 12.25 10.5C12.9404 10.5 13.5 11.0596 13.5 11.75C13.5 12.4404 12.9404 13 12.25 13Z" fill="currentColor"/>
<path d="M10.75 16.5C10.0596 16.5 9.5 15.9404 9.5 15.25C9.5 14.5596 10.0596 14 10.75 14C11.4404 14 12 14.5596 12 15.25C12 15.9404 11.4404 16.5 10.75 16.5Z" fill="currentColor"/>
<path d="M14.3707 3.60451C14.8605 3.34411 15.466 3.52923 15.7253 4.01686C15.7308 4.02727 15.7362 4.03777 15.7413 4.04836L19.8336 12.4482C19.9869 12.7628 19.8635 13.1422 19.5545 13.3065C19.2452 13.471 18.8612 13.3618 18.6847 13.0592L13.9771 4.98893C13.6993 4.5127 13.8602 3.90144 14.3364 3.62364C14.3477 3.61704 14.3592 3.61066 14.3707 3.60451Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5375 3.48434C13.0238 4.39897 13.8434 4.65522 14.6347 4.23444C15.4262 3.81362 15.6726 2.99053 15.1863 2.07592C14.6289 1.0276 13.438 0.0775719 12.6482 0.497483C11.8585 0.917395 11.9801 2.43602 12.5375 3.48434ZM13.4204 3.01486C13.2581 2.70947 13.1315 2.26269 13.1007 1.8773C13.0806 1.62643 13.1063 1.45889 13.1151 1.40204C13.1171 1.38903 13.1182 1.38181 13.1176 1.38073C13.1183 1.38172 13.1245 1.38462 13.1356 1.38985C13.1866 1.41372 13.3408 1.48594 13.5391 1.64416C13.8414 1.88525 14.141 2.24 14.3034 2.54539C14.5316 2.97464 14.4668 3.19118 14.1653 3.3515C13.8641 3.51165 13.6488 3.44435 13.4204 3.01486Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_0_1031">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Pause$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 3C5.64543 3 4.75 3.89543 4.75 5V15C4.75 16.1046 5.64543 17 6.75 17C7.85457 17 8.75 16.1046 8.75 15V5C8.75 3.89543 7.85457 3 6.75 3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 3C12.1454 3 11.25 3.89543 11.25 5V15C11.25 16.1046 12.1454 17 13.25 17C14.3546 17 15.25 16.1046 15.25 15V5C15.25 3.89543 14.3546 3 13.25 3Z" fill="currentColor"/>
</svg>
`;

const Pen$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_2439)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1976 1.21963L3.11966 11.2976C2.96919 11.448 2.87064 11.6426 2.83835 11.8529L2.1329 16.4474C2.0304 17.115 2.6055 17.6901 3.27308 17.5876L7.86761 16.8822C8.07794 16.8499 8.27249 16.7513 8.42296 16.6009L18.5009 6.52294C18.8914 6.13241 18.8914 5.49925 18.5009 5.10872L14.6118 1.21963C14.2213 0.82911 13.5881 0.829111 13.1976 1.21963ZM4.31655 15.404L4.76547 12.4802L13.9047 3.34095L16.3796 5.81583L7.24035 14.9551L4.31655 15.404Z" fill="currentColor"/>
<path d="M11.442 5.24658L12.5027 4.18592L15.7436 7.42683L14.6829 8.48749L11.442 5.24658Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_0_2439">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const People$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 8.25C4.55228 8.25 5 7.80228 5 7.25C5 6.69772 4.55228 6.25 4 6.25C3.44772 6.25 3 6.69772 3 7.25C3 7.80228 3.44772 8.25 4 8.25ZM4 10.25C5.65685 10.25 7 8.90685 7 7.25C7 5.59315 5.65685 4.25 4 4.25C2.34315 4.25 1 5.59315 1 7.25C1 8.90685 2.34315 10.25 4 10.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.05007 11C3.22162 11 2.55003 11.6716 2.55003 12.5L2.55002 14C2.55001 14.5523 2.1023 15 1.55001 15C0.997727 15 0.550015 14.5523 0.550018 14L0.550027 12.5C0.550039 10.567 2.11706 9 4.05007 9C5.98305 9 7.55004 10.567 7.55004 12.5V14C7.55004 14.5523 7.10233 15 6.55004 15C5.99776 15 5.55004 14.5523 5.55004 14V12.5C5.55004 11.6716 4.87848 11 4.05007 11Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 8.25C15.4477 8.25 15 7.80228 15 7.25C15 6.69772 15.4477 6.25 16 6.25C16.5523 6.25 17 6.69772 17 7.25C17 7.80228 16.5523 8.25 16 8.25ZM16 10.25C14.3431 10.25 13 8.90685 13 7.25C13 5.59315 14.3431 4.25 16 4.25C17.6569 4.25 19 5.59315 19 7.25C19 8.90685 17.6569 10.25 16 10.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9499 11C16.7784 11 17.45 11.6716 17.45 12.5L17.45 14C17.45 14.5523 17.8977 15 18.45 15C19.0023 15 19.45 14.5523 19.45 14L19.45 12.5C19.45 10.567 17.8829 9 15.9499 9C14.0169 9 12.45 10.567 12.45 12.5V14C12.45 14.5523 12.8977 15 13.45 15C14.0022 15 14.45 14.5523 14.45 14V12.5C14.45 11.6716 15.1215 11 15.9499 11Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.05 13.75C8.66929 13.75 7.54998 14.8693 7.54997 16.25L7.54996 17.75C7.54995 18.3023 7.10224 18.75 6.54995 18.75C5.99767 18.75 5.54995 18.3023 5.54996 17.75L5.54997 16.25C5.54998 13.7647 7.56473 11.75 10.05 11.75C12.5353 11.75 14.55 13.7647 14.55 16.25V17.75C14.55 18.3023 14.1023 18.75 13.55 18.75C12.9977 18.75 12.55 18.3023 12.55 17.75V16.25C12.55 14.8693 11.4307 13.75 10.05 13.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11ZM10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z" fill="currentColor"/>
</svg>
`;

const Person$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 6C6 8.20914 7.79086 10 10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6ZM12 6C12 7.10457 11.1046 8 10 8C8.89543 8 8 7.10457 8 6C8 4.89543 8.89543 4 10 4C11.1046 4 12 4.89543 12 6Z" fill="currentColor"/>
<path d="M17 18C17 18.5523 16.5523 19 16 19C15.4477 19 15 18.5523 15 18V15.5C15 13.0059 12.7945 11 10.0162 11C7.23004 11 5 13.0132 5 15.4992L5.00204 17.9992C5.0025 18.5515 4.55515 18.9995 4.00286 19C3.45058 19.0005 3.0025 18.5531 3.00205 18.0008L3 15.5C3 11.8604 6.16851 9 10.0162 9C13.859 9 17 11.8567 17 15.5V18Z" fill="currentColor"/>
</svg>
`;

const PersonCheckmark$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C6.20818 5 5.5 5.67902 5.5 6.6C5.5 7.52098 6.20818 8.2 7 8.2C7.79182 8.2 8.5 7.52098 8.5 6.6C8.5 5.67902 7.79182 5 7 5ZM3.5 6.6C3.5 4.6491 5.0304 3 7 3C8.9696 3 10.5 4.6491 10.5 6.6C10.5 8.5509 8.9696 10.2 7 10.2C5.0304 10.2 3.5 8.5509 3.5 6.6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 14.8333C1 11.538 3.78924 9.06665 7.01348 9.06665C10.2449 9.06665 13 11.5447 13 14.8333V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V14.8333C11 12.7527 9.24668 11.0667 7.01348 11.0667C4.77323 11.0667 3.00022 12.7593 3 14.8329C3 14.8331 3 14.8328 3 14.8329L3.0017 16.9992C3.00214 17.5515 2.55478 17.9995 2.00249 18C1.45021 18.0004 1.00214 17.5531 1.0017 17.0008L1 14.8333Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5968 4.12584C19.0795 4.39405 19.2535 5.00286 18.9853 5.48564L16.2075 10.4856C15.9393 10.9684 15.3305 11.1424 14.8477 10.8742C14.3649 10.6059 14.191 9.99714 14.4592 9.51436L17.237 4.51436C17.5052 4.03157 18.114 3.85763 18.5968 4.12584Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.7747 7.15311C12.1197 6.72185 12.749 6.65193 13.1802 6.99694L15.958 9.21916C16.3893 9.56417 16.4592 10.1935 16.1142 10.6247C15.7692 11.056 15.1399 11.1259 14.7086 10.7809L11.9309 8.55868C11.4996 8.21367 11.4297 7.58437 11.7747 7.15311Z" fill="currentColor"/>
</svg>
`;

const PersonFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 15.5C16 12.309 13.314 10 10 10C6.686 10 4 12.309 4 15.5L4.002 17C4.002 17.2652 4.10736 17.5196 4.29489 17.7071C4.48243 17.8946 4.73678 18 5.002 18H15C15.2652 18 15.5196 17.8946 15.7071 17.7071C15.8946 17.5196 16 17.2652 16 17V15.5Z" fill="currentColor"/>
</svg>
`;

const PersonPlus$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.45 7.75C11.45 7.19772 11.8977 6.75 12.45 6.75H17.7C18.2523 6.75 18.7 7.19772 18.7 7.75C18.7 8.30228 18.2523 8.75 17.7 8.75H12.45C11.8977 8.75 11.45 8.30228 11.45 7.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 11.5C14.4477 11.5 14 11.0523 14 10.5V5.25001C14 4.69772 14.4477 4.25001 15 4.25001C15.5523 4.25001 16 4.69772 16 5.25001V10.5C16 11.0523 15.5523 11.5 15 11.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C6.20818 5 5.5 5.67902 5.5 6.6C5.5 7.52098 6.20818 8.2 7 8.2C7.79182 8.2 8.5 7.52098 8.5 6.6C8.5 5.67902 7.79182 5 7 5ZM3.5 6.6C3.5 4.6491 5.0304 3 7 3C8.9696 3 10.5 4.6491 10.5 6.6C10.5 8.5509 8.9696 10.2 7 10.2C5.0304 10.2 3.5 8.5509 3.5 6.6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 14.8333C1 11.538 3.78924 9.06665 7.01348 9.06665C10.2449 9.06665 13 11.5447 13 14.8333V17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17V14.8333C11 12.7527 9.24668 11.0667 7.01348 11.0667C4.77323 11.0667 3.00022 12.7593 3 14.8329C3 14.8331 3 14.8328 3 14.8329L3.0017 16.9992C3.00214 17.5515 2.55478 17.9995 2.00249 18C1.45021 18.0004 1.00214 17.5531 1.0017 17.0008L1 14.8333Z" fill="currentColor"/>
</svg>
`;

const Persons$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_303_4950)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.2359 10.0547C3.69336 10.8685 3.40385 11.8247 3.40385 12.8028L3.40385 13.5C3.40385 14.0522 2.95614 14.5 2.40385 14.5C1.85157 14.5 1.40385 14.0522 1.40385 13.5L1.40385 12.8028C1.40385 11.4299 1.81023 10.0877 2.5718 8.94531L4.2359 10.0547Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.20663 9C5.41471 9 4.67519 9.39578 4.23591 10.0547L2.57181 8.9453C3.38202 7.72998 4.74601 7 6.20663 7H6.40386C6.95614 7 7.40386 7.44772 7.40386 8C7.40386 8.55228 6.95614 9 6.40386 9H6.20663Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.41797 10.0547C8.96051 10.8685 9.25002 11.8247 9.25002 12.8028L9.25002 13.5C9.25002 14.0522 9.69773 14.5 10.25 14.5C10.8023 14.5 11.25 14.0522 11.25 13.5L11.25 12.8028C11.25 11.4299 10.8436 10.0877 10.0821 8.94531L8.41797 10.0547Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.44724 9C7.23916 9 7.97868 9.39578 8.41796 10.0547L10.0821 8.9453C9.27185 7.72998 7.90786 7 6.44724 7H6.25001C5.69773 7 5.25001 7.44772 5.25001 8C5.25001 8.55228 5.69773 9 6.25001 9H6.44724Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 6.25C6.94036 6.25 7.5 5.69036 7.5 5C7.5 4.30964 6.94036 3.75 6.25 3.75C5.55964 3.75 5 4.30964 5 5C5 5.69036 5.55964 6.25 6.25 6.25ZM6.25 8.25C8.04493 8.25 9.5 6.79493 9.5 5C9.5 3.20507 8.04493 1.75 6.25 1.75C4.45507 1.75 3 3.20507 3 5C3 6.79493 4.45507 8.25 6.25 8.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4859 13.3047C10.9434 14.1185 10.6538 15.0747 10.6539 16.0528L10.6539 16.75C10.6539 17.3022 10.2061 17.75 9.65385 17.75C9.10157 17.75 8.65385 17.3022 8.65385 16.75L8.65385 16.0528C8.65385 14.6799 9.06023 13.3377 9.8218 12.1953L11.4859 13.3047Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4566 12.25C12.6647 12.25 11.9252 12.6458 11.4859 13.3047L9.82181 12.1953C10.632 10.98 11.996 10.25 13.4566 10.25H13.6539C14.2061 10.25 14.6539 10.6977 14.6539 11.25C14.6539 11.8023 14.2061 12.25 13.6539 12.25H13.4566Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.668 13.3047C16.2105 14.1185 16.5 15.0747 16.5 16.0528L16.5 16.75C16.5 17.3022 16.9477 17.75 17.5 17.75C18.0523 17.75 18.5 17.3022 18.5 16.75L18.5 16.0528C18.5 14.6799 18.0936 13.3377 17.3321 12.1953L15.668 13.3047Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6972 12.25C14.4892 12.25 15.2287 12.6458 15.668 13.3047L17.3321 12.1953C16.5219 10.98 15.1579 10.25 13.6972 10.25H13.5C12.9477 10.25 12.5 10.6977 12.5 11.25C12.5 11.8023 12.9477 12.25 13.5 12.25H13.6972Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 9.5C14.1904 9.5 14.75 8.94036 14.75 8.25C14.75 7.55964 14.1904 7 13.5 7C12.8096 7 12.25 7.55964 12.25 8.25C12.25 8.94036 12.8096 9.5 13.5 9.5ZM13.5 11.5C15.2949 11.5 16.75 10.0449 16.75 8.25C16.75 6.45507 15.2949 5 13.5 5C11.7051 5 10.25 6.45507 10.25 8.25C10.25 10.0449 11.7051 11.5 13.5 11.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_303_4950">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Phone$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5208 10.1924L11.9389 10.7743C10.9366 9.8925 9.99425 8.94935 9.11168 7.94467L9.69239 7.36396C10.864 6.19239 10.864 4.2929 9.69239 3.12132L8.27818 1.70711C7.1066 0.535537 5.20711 0.535537 4.03554 1.70711L1.22986 4.51278C0.952963 4.78968 0.863168 5.20273 1.00011 5.5696C3.37438 11.9301 7.81798 16.4042 14.3082 18.882C14.6766 19.0227 15.0932 18.9337 15.372 18.6549L18.1777 15.8492C19.3492 14.6777 19.3492 12.7782 18.1777 11.6066L16.7635 10.1924C15.5919 9.02082 13.6924 9.02082 12.5208 10.1924ZM16.7635 13.0208C17.154 13.4113 17.154 14.0445 16.7635 14.435L14.4224 16.7761C8.99792 14.5464 5.24854 10.7759 3.10516 5.46592L5.44975 3.12132C5.84027 2.7308 6.47344 2.7308 6.86396 3.12132L8.27818 4.53554C8.6687 4.92606 8.6687 5.55923 8.27818 5.94975L7.04425 7.18368C6.6793 7.54863 6.65204 8.13136 6.98132 8.52879C8.30406 10.1253 9.76179 11.5841 11.3539 12.9048C11.7513 13.2344 12.3343 13.2073 12.6994 12.8422L13.935 11.6066C14.3256 11.2161 14.9587 11.2161 15.3492 11.6066L16.7635 13.0208Z" fill="currentColor"/>
</svg>
`;

const Photo$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z" fill="currentColor"/>
<path d="M6.69703 10.0817C7.09685 9.54308 7.90313 9.54308 8.30294 10.0817L10.2123 12.654C10.7022 13.3138 10.2312 14.25 9.40939 14.25H5.59058C4.76881 14.25 4.29782 13.3138 4.78763 12.654L6.69703 10.0817Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.49999 11.5166L6.58443 12.75H8.41554L7.49999 11.5166ZM8.30294 10.0817C7.90313 9.54308 7.09685 9.54308 6.69703 10.0817L4.78763 12.654C4.29782 13.3138 4.76881 14.25 5.59058 14.25H9.40939C10.2312 14.25 10.7022 13.3138 10.2123 12.654L8.30294 10.0817Z" fill="currentColor"/>
<path d="M10.4941 9.12287C10.8928 8.66241 11.6072 8.66241 12.0059 9.12287L15.0132 12.5953C15.5741 13.243 15.114 14.25 14.2573 14.25H8.24275C7.386 14.25 6.92595 13.243 7.48682 12.5953L10.4941 9.12287Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 10.5413L9.3372 12.75H13.1628L11.25 10.5413ZM12.0059 9.12287C11.6072 8.66241 10.8928 8.66241 10.4941 9.12287L7.48682 12.5953C6.92595 13.243 7.386 14.25 8.24275 14.25H14.2573C15.114 14.25 15.5741 13.243 15.0132 12.5953L12.0059 9.12287Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 3.5V16.5H16.5V3.5H3.5ZM3 1.5C2.17157 1.5 1.5 2.17157 1.5 3V17C1.5 17.8284 2.17157 18.5 3 18.5H17C17.8284 18.5 18.5 17.8284 18.5 17V3C18.5 2.17157 17.8284 1.5 17 1.5H3Z" fill="currentColor"/>
</svg>
`;

const PhotoCamera$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.69572 5.07845L5.39825 6H4.5C2.84315 6 1.5 7.34315 1.5 9V15C1.5 16.6569 2.84315 18 4.5 18H15.5C17.1569 18 18.5 16.6569 18.5 15V9C18.5 7.34315 17.1569 6 15.5 6H14.6013L14.3038 5.07845C13.9039 3.83958 12.7507 3 11.4489 3H8.55067C7.24886 3 6.09561 3.83958 5.69572 5.07845ZM4.5 8H6.85428L7.59902 5.69282C7.73232 5.27986 8.11673 5 8.55067 5H11.4489C11.8828 5 12.2672 5.27986 12.4005 5.69282L13.1453 8H15.5C16.0523 8 16.5 8.44772 16.5 9V15C16.5 15.5523 16.0523 16 15.5 16H4.5C3.94772 16 3.5 15.5523 3.5 15V9C3.5 8.44772 3.94772 8 4.5 8Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 11.5C6.5 13.433 8.067 15 10 15C11.933 15 13.5 13.433 13.5 11.5C13.5 9.567 11.933 8 10 8C8.067 8 6.5 9.567 6.5 11.5ZM11.5 11.5C11.5 12.3284 10.8284 13 10 13C9.17157 13 8.5 12.3284 8.5 11.5C8.5 10.6716 9.17157 10 10 10C10.8284 10 11.5 10.6716 11.5 11.5Z" fill="currentColor"/>
</svg>
`;

const PhotoStudio$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.900055 2.5C0.900055 1.67157 1.57163 1 2.40005 1H8.60005C9.42848 1 10.1001 1.67157 10.1001 2.5V6.3C10.1001 7.12843 9.42848 7.8 8.60005 7.8H2.40006C1.57163 7.8 0.900055 7.12843 0.900055 6.3V2.5ZM2.90005 3V5.8H8.10005V3H2.90005Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.149994 2C0.149994 1.44772 0.597709 1 1.14999 1H9.84999C10.4023 1 10.85 1.44772 10.85 2C10.85 2.55228 10.4023 3 9.84999 3H1.14999C0.597709 3 0.149994 2.55228 0.149994 2Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.21982 10L2.88059 6.69613L0.919433 6.30389L0.139044 10.2058C-0.0465934 11.134 0.663346 12 1.60992 12H9.39011C10.3367 12 11.0466 11.134 10.861 10.2058L10.0806 6.30389L8.11943 6.69613L8.78021 10H2.21982Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.25 17C19.25 16.4477 18.8023 16 18.25 16H15.25C14.6977 16 14.25 16.4477 14.25 17C14.25 17.5523 14.6977 18 15.25 18H18.25C18.8023 18 19.25 17.5523 19.25 17Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2967 7.99999C14.6099 8.16557 15.0266 8.42148 15.3548 8.731C15.7394 9.09381 15.75 9.2836 15.75 9.29411C15.75 9.30461 15.7394 9.49441 15.3548 9.85722C15.0266 10.1667 14.6099 10.4226 14.2967 10.5882L13.75 10.5882V7.99999H14.2967ZM15.1076 12.4204C14.8745 12.5384 14.6156 12.5882 14.3543 12.5882H13.75C12.6454 12.5882 11.75 11.6928 11.75 10.5882V7.99999C11.75 6.89542 12.6454 5.99999 13.75 5.99999H14.3543C14.6156 5.99999 14.8745 6.04986 15.1076 6.1678C15.9032 6.57033 17.75 7.67873 17.75 9.29411C17.75 10.9095 15.9032 12.0179 15.1076 12.4204Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.75 8.70587C16.1977 8.70587 15.75 9.15359 15.75 9.70587V16.7647C15.75 17.317 16.1977 17.7647 16.75 17.7647C17.3023 17.7647 17.75 17.317 17.75 16.7647V9.70587C17.75 9.15359 17.3023 8.70587 16.75 8.70587Z" fill="currentColor"/>
</svg>
`;

const Pill$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5459 4.18199L16.9099 10.5459C18.6673 12.3033 18.6673 15.1525 16.9099 16.9099C15.1525 18.6673 12.3033 18.6673 10.5459 16.9099L4.18199 10.5459C2.42463 8.78859 2.42463 5.93935 4.18199 4.18199C5.93935 2.42463 8.78859 2.42463 10.5459 4.18199ZM13 9.50001C12.3333 8.83334 11.5 8.66667 10.5 9.00001C9.50001 9.33334 8.83334 10.3333 8.50001 12L11.9203 15.4437C11.9223 15.4457 11.9243 15.4477 11.9263 15.4498C12.8993 16.4227 14.4768 16.4227 15.4498 15.4498C15.4522 15.4473 15.4547 15.4448 15.4572 15.4423C16.4253 14.466 16.4186 12.8898 15.4423 11.9217L13 9.50001Z" fill="currentColor"/>
</svg>
`;

const Pin$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1210_796)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6847 3.90256C11.2262 3.59468 10.6049 3.71679 10.297 4.17529L7.78845 7.9112L6.12805 6.79628L8.63663 3.06037C9.56027 1.68484 11.4241 1.31852 12.7996 2.24215L16.1204 4.472C17.496 5.39564 17.8623 7.25948 16.9386 8.635L14.4301 12.3709L12.7697 11.256L15.2782 7.52007C15.5861 7.06157 15.464 6.44029 15.0055 6.13241L11.6847 3.90256Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.51657 8.58705C2.82445 8.12855 3.44573 8.00644 3.90424 8.31431L13.8667 15.0039C14.3252 15.3118 14.4473 15.933 14.1394 16.3915C13.8315 16.85 13.2102 16.9722 12.7517 16.6643L2.78931 9.97472C2.3308 9.66684 2.20869 9.04556 2.51657 8.58705Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.32347 8.40978C5.91316 8.46302 5.53683 8.54966 5.32812 8.65521C5.12509 8.7579 4.83864 9.0008 4.55814 9.28829C4.42921 9.42044 4.31924 9.54347 4.2418 9.63318C4.20331 9.67777 4.17344 9.71344 4.15394 9.73705L4.13282 9.76283L4.12881 9.76778C3.78456 10.1995 3.15537 10.2707 2.72353 9.92655C2.29163 9.58234 2.22055 8.95318 2.56476 8.52128L3.34678 9.14453C2.56476 8.52128 2.56468 8.52139 2.56476 8.52128L2.56662 8.51895L2.56969 8.51513L2.57933 8.50319L2.61218 8.46308C2.63987 8.42958 2.67902 8.38286 2.72784 8.3263C2.82502 8.21372 2.96285 8.05946 3.12662 7.89161C3.43152 7.57909 3.91008 7.13116 4.42548 6.87049C4.95603 6.60216 5.62045 6.48424 6.06608 6.42641C6.30548 6.39534 6.51778 6.37747 6.67062 6.3673C6.74741 6.36219 6.81012 6.35896 6.85484 6.35697L6.90819 6.35484L6.92399 6.35432L6.92902 6.35417L6.9308 6.35413L6.9318 6.3541C6.93194 6.35409 6.93207 6.35409 6.95709 7.30741L6.9318 6.3541C7.4839 6.33961 7.94348 6.77542 7.95796 7.32752C7.97244 7.87928 7.53716 8.33836 6.98554 8.35338C6.9852 8.35339 6.98487 8.35339 6.98454 8.3534L6.95831 7.35375C6.98454 8.3534 6.98542 8.35338 6.98554 8.35338L6.97791 8.35363L6.94353 8.35501C6.91196 8.35641 6.86404 8.35885 6.80344 8.36288C6.68151 8.371 6.51204 8.3853 6.32347 8.40978Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8665 12.8033C12.9725 13.2033 13.0348 13.5844 13.0161 13.8175C12.9979 14.0443 12.8814 14.4014 12.7215 14.7698C12.648 14.9392 12.5757 15.0875 12.522 15.1932C12.4953 15.2457 12.4736 15.2868 12.4591 15.3138L12.4432 15.3431L12.4402 15.3487C12.1708 15.8307 12.3431 16.4401 12.8251 16.7095C13.3071 16.979 13.9164 16.8067 14.1859 16.3246L13.313 15.8367C14.1859 16.3246 14.1858 16.3247 14.1859 16.3246L14.1873 16.322L14.1897 16.3177L14.1971 16.3043L14.2218 16.2587C14.2423 16.2204 14.2708 16.1665 14.3046 16.0999C14.3721 15.9673 14.4627 15.7814 14.5561 15.5663C14.73 15.1657 14.9634 14.5533 15.0097 13.9775C15.0572 13.3849 14.9149 12.7253 14.7998 12.2909C14.7379 12.0576 14.6741 11.8543 14.6257 11.709C14.6014 11.636 14.5806 11.5767 14.5655 11.5345L14.5473 11.4844L14.5418 11.4695L14.5401 11.4648L14.5394 11.4632L14.5391 11.4622C14.539 11.4621 14.539 11.462 13.6471 11.7996L14.5391 11.4622C14.3435 10.9457 13.7662 10.6853 13.2497 10.8808C12.7335 11.0762 12.4733 11.6529 12.6682 12.1692C12.6683 12.1695 12.6684 12.1698 12.6685 12.1701L13.6038 11.816C12.6685 12.1701 12.6682 12.1693 12.6682 12.1692L12.6708 12.1763L12.6826 12.2086C12.6932 12.2384 12.7091 12.2837 12.7283 12.3413C12.7669 12.4572 12.8178 12.6195 12.8665 12.8033Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.32794 12.4893C8.78645 12.7972 8.90856 13.4185 8.60068 13.877L6.92829 16.3676C6.62041 16.8261 5.99913 16.9482 5.54062 16.6403C5.08212 16.3324 4.96001 15.7112 5.26789 15.2526L6.94028 12.762C7.24815 12.3035 7.86943 12.1814 8.32794 12.4893Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_1210_796">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Pinpoint$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 11.5C11.933 11.5 13.5 9.933 13.5 8C13.5 6.067 11.933 4.5 10 4.5C8.067 4.5 6.5 6.067 6.5 8C6.5 9.933 8.067 11.5 10 11.5ZM10 6.5C10.8284 6.5 11.5 7.17157 11.5 8C11.5 8.82843 10.8284 9.5 10 9.5C9.17157 9.5 8.5 8.82843 8.5 8C8.5 7.17157 9.17157 6.5 10 6.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 8.12313C2.5 12.3656 6.88183 19.5 10 19.5C13.1182 19.5 17.5 12.3656 17.5 8.12313C17.5 3.91715 14.1464 0.5 10 0.5C5.85362 0.5 2.5 3.91715 2.5 8.12313ZM15.5 8.12313C15.5 11.4027 11.7551 17.5 10 17.5C8.24487 17.5 4.5 11.4027 4.5 8.12313C4.5 5.0134 6.96668 2.5 10 2.5C13.0333 2.5 15.5 5.0134 15.5 8.12313Z" fill="currentColor"/>
</svg>
`;

const PinpointFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 8.12313C2.5 12.3656 6.88183 19.5 10 19.5C13.1182 19.5 17.5 12.3656 17.5 8.12313C17.5 3.91715 14.1464 0.5 10 0.5C5.85362 0.5 2.5 3.91715 2.5 8.12313ZM10 5.5C11.3807 5.5 12.5 6.61929 12.5 8C12.5 9.38071 11.3807 10.5 10 10.5C8.61929 10.5 7.5 9.38071 7.5 8C7.5 6.61929 8.61929 5.5 10 5.5Z" fill="currentColor"/>
</svg>
`;

const PinpointOff$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289C1.68342 0.902368 2.31658 0.902368 2.70711 1.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L1.29289 2.70711Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 11.5C11.933 11.5 13.5 9.933 13.5 8C13.5 6.067 11.933 4.5 10 4.5C8.067 4.5 6.5 6.067 6.5 8C6.5 9.933 8.067 11.5 10 11.5ZM10 6.5C10.8284 6.5 11.5 7.17157 11.5 8C11.5 8.82843 10.8284 9.5 10 9.5C9.17157 9.5 8.5 8.82843 8.5 8C8.5 7.17157 9.17157 6.5 10 6.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 8.12313C2.5 12.3656 6.88183 19.5 10 19.5C13.1182 19.5 17.5 12.3656 17.5 8.12313C17.5 3.91715 14.1464 0.5 10 0.5C5.85362 0.5 2.5 3.91715 2.5 8.12313ZM15.5 8.12313C15.5 11.4027 11.7551 17.5 10 17.5C8.24487 17.5 4.5 11.4027 4.5 8.12313C4.5 5.0134 6.96668 2.5 10 2.5C13.0333 2.5 15.5 5.0134 15.5 8.12313Z" fill="currentColor"/>
</svg>
`;

const PinpointOffFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 8.12313C2.5 12.3656 6.88183 19.5 10 19.5C13.1182 19.5 17.5 12.3656 17.5 8.12313C17.5 3.91715 14.1464 0.5 10 0.5C5.85362 0.5 2.5 3.91715 2.5 8.12313ZM10 5.5C11.3807 5.5 12.5 6.61929 12.5 8C12.5 9.38071 11.3807 10.5 10 10.5C8.61929 10.5 7.5 9.38071 7.5 8C7.5 6.61929 8.61929 5.5 10 5.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.29289 1.29289C1.68342 0.902369 2.31658 0.902369 2.70711 1.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L1.29289 2.70711C0.902369 2.31658 0.902369 1.68342 1.29289 1.29289Z" fill="currentColor"/>
</svg>
`;

const Play$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.5444 9.59028C16.1942 9.99643 16.1645 10.9526 15.4907 11.3176L6.47627 16.2004C5.80997 16.5613 4.99999 16.0788 4.99999 15.3211V10V4.80427C4.99999 4.01884 5.86394 3.53999 6.52999 3.95627L15.5444 9.59028Z" fill="currentColor"/>
</svg>
`;

const Plus$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 11C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H5Z" fill="currentColor"/>
<path d="M9 5C9 4.44772 9.44772 4 10 4C10.5523 4 11 4.44772 11 5V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V5Z" fill="currentColor"/>
</svg>
`;

const Power$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.33819 5.17875C4.72595 4.78548 5.3591 4.78103 5.75236 5.16879C6.14563 5.55656 6.15008 6.18971 5.76232 6.58297C4.64106 7.72013 4 9.25726 4 10.9008C4 14.2724 6.68947 17 10 17C13.3105 17 16 14.2724 16 10.9008C16 9.25726 15.3589 7.72013 14.2377 6.58297C13.8499 6.18971 13.8544 5.55656 14.2476 5.16879C14.6409 4.78103 15.274 4.78548 15.6618 5.17875C17.1491 6.68714 18 8.72737 18 10.9008C18 15.3708 14.4215 19 10 19C5.57855 19 2 15.3708 2 10.9008C2 8.72737 2.85088 6.68714 4.33819 5.17875Z" fill="currentColor"/>
<rect x="9" y="1" width="2" height="10.5" rx="1" fill="currentColor"/>
</svg>
`;

const PreviousTrack$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1368 9.31771C9.77821 9.70192 9.77821 10.2981 10.1368 10.6823L14.7689 15.6453C15.3882 16.3088 16.5 15.8706 16.5 14.963V5.03705C16.5 4.12943 15.3882 3.69121 14.7689 4.35473L10.1368 9.31771Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2357 10L14.5 7.57407V12.426L12.2357 10ZM10.1368 10.6823C9.77821 10.2981 9.77821 9.70192 10.1368 9.31771L14.7689 4.35473C15.3882 3.69121 16.5 4.12943 16.5 5.03705V14.963C16.5 15.8706 15.3882 16.3088 14.7689 15.6453L10.1368 10.6823Z" fill="currentColor"/>
<path d="M5.1368 9.31771C4.77821 9.70192 4.77821 10.2981 5.1368 10.6823L9.76892 15.6453C10.3882 16.3088 11.5 15.8706 11.5 14.963V5.03705C11.5 4.12943 10.3882 3.69121 9.76892 4.35473L5.1368 9.31771Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.23575 10L9.49997 7.57407V12.426L7.23575 10ZM5.1368 10.6823C4.77821 10.2981 4.77821 9.70192 5.1368 9.31771L9.76892 4.35473C10.3882 3.69121 11.5 4.12943 11.5 5.03705V14.963C11.5 15.8706 10.3882 16.3088 9.76892 15.6453L5.1368 10.6823Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 4C3.94772 4 3.5 4.44772 3.5 5L3.5 15C3.5 15.5523 3.94772 16 4.5 16C5.05228 16 5.5 15.5523 5.5 15L5.5 5C5.5 4.44772 5.05228 4 4.5 4Z" fill="currentColor"/>
</svg>
`;

const Printer$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 7V3C5 2.44772 5.3731 2 5.83333 2V2H14.1667C14.6269 2 15 2.44772 15 3V7" fill="white"/>
<path d="M6 3V7C6 7.55228 5.55228 8 5 8C4.44772 8 4 7.55228 4 7V3C4 1.93165 4.77637 1 5.83333 1H14.1667C15.2236 1 16 1.93165 16 3V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V3H6Z" fill="currentColor"/>
<path d="M4 6H16C17.6569 6 19 7.34315 19 9V14C19 15.6569 17.6569 17 16 17H4C2.34315 17 1 15.6569 1 14L1 9C1 7.34315 2.34315 6 4 6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 12V16.8C5 17.4627 5.3731 18 5.83333 18V18H14.1667C14.6269 18 15 17.4627 15 16.8V12" fill="white"/>
<path d="M6 16.8V12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12V16.8C4 17.9536 4.72664 19 5.83333 19H14.1667C15.2734 19 16 17.9536 16 16.8V12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12V16.8C14 16.8775 13.9883 16.9466 13.971 17H6.02904C6.0117 16.9466 6 16.8775 6 16.8Z" fill="currentColor"/>
<path d="M7 16C6.72386 16 6.5 15.7761 6.5 15.5C6.5 15.2239 6.72386 15 7 15H13C13.2761 15 13.5 15.2239 13.5 15.5C13.5 15.7761 13.2761 16 13 16H7Z" fill="currentColor"/>
<path d="M7 14C6.72386 14 6.5 13.7761 6.5 13.5C6.5 13.2239 6.72386 13 7 13H13C13.2761 13 13.5 13.2239 13.5 13.5C13.5 13.7761 13.2761 14 13 14H7Z" fill="currentColor"/>
</svg>
`;

const QrCode$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_303_4977" fill="white">
<rect x="4.5" y="4.5" width="5" height="5" rx="0.5"/>
</mask>
<rect x="4.5" y="4.5" width="5" height="5" rx="0.5" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="round" mask="url(#path-1-inside-1_303_4977)"/>
<mask id="path-2-inside-2_303_4977" fill="white">
<rect x="10.5" y="4.5" width="5" height="5" rx="0.5"/>
</mask>
<rect x="10.5" y="4.5" width="5" height="5" rx="0.5" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="round" mask="url(#path-2-inside-2_303_4977)"/>
<mask id="path-3-inside-3_303_4977" fill="white">
<rect x="4.5" y="10.5" width="5" height="5" rx="0.5"/>
</mask>
<rect x="4.5" y="10.5" width="5" height="5" rx="0.5" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="round" mask="url(#path-3-inside-3_303_4977)"/>
<mask id="path-4-inside-4_303_4977" fill="white">
<rect x="10.5" y="10.5" width="5" height="5" rx="0.5"/>
</mask>
<rect x="10.5" y="10.5" width="5" height="5" rx="0.5" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="round" mask="url(#path-4-inside-4_303_4977)"/>
<path d="M3 3H6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M3 3V6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M3 17L3 13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M3 17H6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M17 17H13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M17 17V13.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M17 3V6.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M17 3L13.5 3" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</svg>
`;

const Question$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.7387 16.2133C11.7387 17.3178 10.8432 18.2133 9.73868 18.2133C8.63411 18.2133 7.73868 17.3178 7.73868 16.2133C7.73868 15.1087 8.63411 14.2133 9.73868 14.2133C10.8432 14.2133 11.7387 15.1087 11.7387 16.2133Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.70982 4.76475C9.03953 4.76475 8.46488 4.96522 8.06038 5.25085C7.66959 5.52678 7.47719 5.84837 7.42132 6.1251C7.26284 6.91007 6.49802 7.41795 5.71305 7.25947C4.92807 7.101 4.42019 6.33618 4.57867 5.5512C4.80607 4.42486 5.5038 3.50597 6.38766 2.88188C7.30812 2.23194 8.47392 1.86475 9.70982 1.86475C12.2675 1.86475 14.9179 3.57476 14.9179 6.32121C14.9179 7.91038 13.9731 9.19715 12.7492 9.94661C12.0662 10.3648 11.1736 10.1502 10.7554 9.46724C10.3372 8.7843 10.5518 7.89165 11.2348 7.47345C11.8053 7.12405 12.0179 6.67955 12.0179 6.32121C12.0179 5.74681 11.3032 4.76475 9.70982 4.76475Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.70979 8.62927C10.5106 8.62927 11.1598 9.27846 11.1598 10.0793V11.5825C11.1598 12.3833 10.5106 13.0325 9.70979 13.0325C8.90898 13.0325 8.25979 12.3833 8.25979 11.5825V10.0793C8.25979 9.27846 8.90898 8.62927 9.70979 8.62927Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2388 7.96651C13.6502 8.6536 13.4266 9.54407 12.7395 9.95542L10.4546 11.3234C9.76754 11.7347 8.87708 11.5112 8.46573 10.8241C8.05438 10.137 8.27791 9.24653 8.965 8.83518L11.2499 7.46724C11.937 7.05589 12.8275 7.27942 13.2388 7.96651Z" fill="currentColor"/>
</svg>
`;

const QuestionCircle$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="10" cy="14.25" r="1" fill="currentColor"/>
<circle cx="10" cy="10" r="7" stroke="currentColor" stroke-width="2"/>
<path d="M10.996 8.73631C10.525 9.02473 10.3769 9.64035 10.6654 10.1113C10.9538 10.5823 11.5694 10.7304 12.0404 10.4419L10.996 8.73631ZM8.34637 6.5L8.92316 7.31689H8.92316L8.34637 6.5ZM6.55188 7.48076C6.44259 8.02212 6.79285 8.54958 7.33421 8.65888C7.87557 8.76817 8.40303 8.41791 8.51233 7.87655L6.55188 7.48076ZM10 7C11.0482 7 11.5 7.64441 11.5 8H13.5C13.5 6.14645 11.7132 5 10 5V7ZM11.5 8C11.5 8.22335 11.3676 8.50877 10.996 8.73631L12.0404 10.4419C12.8625 9.93849 13.5 9.07221 13.5 8H11.5ZM8.92316 7.31689C9.18596 7.13133 9.56102 7 10 7V5C9.17094 5 8.38819 5.24631 7.76957 5.68311L8.92316 7.31689ZM8.51233 7.87655C8.5474 7.70283 8.66922 7.49619 8.92316 7.31689L7.76957 5.68311C7.17557 6.10253 6.70525 6.72111 6.55188 7.48076L8.51233 7.87655Z" fill="currentColor"/>
<path d="M10 10.5V11.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M9.99999 10.5L11.52 9.58997" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M11 14.25C11 14.8023 10.5523 15.25 10 15.25C9.44772 15.25 9 14.8023 9 14.25C9 13.6977 9.44772 13.25 10 13.25C10.5523 13.25 11 13.6977 11 14.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4ZM2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 7C9.56103 7 9.18597 7.13133 8.92318 7.31689C8.66923 7.49619 8.54741 7.70283 8.51234 7.87655C8.40304 8.41791 7.87558 8.76817 7.33422 8.65888C6.79286 8.54958 6.4426 8.02212 6.55189 7.48076C6.70526 6.72111 7.17558 6.10253 7.76958 5.68311C8.3882 5.24631 9.17095 5 10 5C11.7132 5 13.5 6.14645 13.5 8C13.5 9.07221 12.8626 9.93849 12.0404 10.4419C11.5694 10.7304 10.9538 10.5823 10.6654 10.1113C10.377 9.64035 10.525 9.02473 10.996 8.73631C11.3676 8.50877 11.5 8.22335 11.5 8C11.5 7.64441 11.0482 7 10 7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 9.5C10.5523 9.5 11 9.94772 11 10.5V11.5C11 12.0523 10.5523 12.5 10 12.5C9.44772 12.5 9 12.0523 9 11.5V10.5C9 9.94772 9.44772 9.5 10 9.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.378 9.07633C12.6617 9.55019 12.5075 10.1643 12.0337 10.448L10.5137 11.358C10.0398 11.6417 9.42569 11.4875 9.142 11.0137C8.85831 10.5398 9.01247 9.92569 9.48632 9.64201L11.0063 8.73201C11.4802 8.44832 12.0943 8.60248 12.378 9.07633Z" fill="currentColor"/>
</svg>
`;

const QuestionFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 14.4183 14.4183 18 10 18ZM11 14.25C11 14.8023 10.5523 15.25 10 15.25C9.44772 15.25 9 14.8023 9 14.25C9 13.6977 9.44772 13.25 10 13.25C10.5523 13.25 11 13.6977 11 14.25ZM8.92316 7.31689C9.18596 7.13133 9.56102 7 10 7C11.0482 7 11.5 7.64441 11.5 8C11.5 8.22335 11.3676 8.50877 10.996 8.73631C10.9823 8.74469 10.9689 8.75334 10.9557 8.76226L9.50025 9.63364C9.34172 9.72528 9.21068 9.85919 9.12253 10.02C9.03922 10.1726 8.99686 10.345 9 10.519V11.5C9 12.0523 9.44772 12.5 10 12.5C10.5523 12.5 11 12.0523 11 11.5V11.0668L12.0337 10.448C12.0567 10.4341 12.0791 10.4195 12.1006 10.4042C12.8935 9.89581 13.5 9.04587 13.5 8C13.5 6.14645 11.7132 5 10 5C9.17094 5 8.38819 5.24631 7.76957 5.68311C7.17557 6.10253 6.70525 6.72111 6.55188 7.48076C6.44259 8.02212 6.79285 8.54958 7.33421 8.65888C7.87557 8.76817 8.40303 8.41791 8.51233 7.87655C8.5474 7.70283 8.66922 7.49619 8.92316 7.31689Z" fill="currentColor"/>
</svg>
`;

const Radio$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 8H5C4.44772 8 4 8.44772 4 9V15C4 15.5523 4.44772 16 5 16H15C15.5523 16 16 15.5523 16 15V9C16 8.44772 15.5523 8 15 8ZM5 6C3.34315 6 2 7.34315 2 9V15C2 16.6569 3.34315 18 5 18H15C16.6569 18 18 16.6569 18 15V9C18 7.34315 16.6569 6 15 6H5Z" fill="currentColor"/>
<path d="M10 12C10 13.3807 8.88071 14.5 7.5 14.5C6.11929 14.5 5 13.3807 5 12C5 10.6193 6.11929 9.5 7.5 9.5C8.88071 9.5 10 10.6193 10 12Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.6708 1.66457C14.8561 2.03505 14.7059 2.48556 14.3354 2.6708L4.33541 7.67083C3.96492 7.85607 3.51442 7.7059 3.32917 7.33542C3.14393 6.96493 3.2941 6.51443 3.66458 6.32919L13.6646 1.32916C14.0351 1.14392 14.4856 1.29408 14.6708 1.66457Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 10.5C11 10.2239 11.2239 10 11.5 10H14.5C14.7761 10 15 10.2239 15 10.5C15 10.7761 14.7761 11 14.5 11H11.5C11.2239 11 11 10.7761 11 10.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 12C11 11.7239 11.2239 11.5 11.5 11.5H14.5C14.7761 11.5 15 11.7239 15 12C15 12.2761 14.7761 12.5 14.5 12.5H11.5C11.2239 12.5 11 12.2761 11 12Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 13.5C11 13.2239 11.2239 13 11.5 13H14.5C14.7761 13 15 13.2239 15 13.5C15 13.7761 14.7761 14 14.5 14H11.5C11.2239 14 11 13.7761 11 13.5Z" fill="currentColor"/>
</svg>
`;

const Refresh$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.05028 14.9497C4.65975 14.5592 4.65975 13.9261 5.05028 13.5355C5.4408 13.145 6.07397 13.145 6.46449 13.5355C7.39677 14.4678 8.655 15 10 15C12.7614 15 15 12.7614 15 10C15 9.44772 15.4477 9 16 9C16.5523 9 17 9.44772 17 10C17 13.866 13.866 17 10 17C8.11912 17 6.35391 16.2534 5.05028 14.9497Z" fill="currentColor"/>
<path d="M13.5585 12.832C13.099 13.1384 12.4781 13.0141 12.1718 12.5546C11.8655 12.0951 11.9897 11.4742 12.4492 11.1679L15.4496 9.16787C15.9091 8.86154 16.53 8.98575 16.8363 9.4453C17.1426 9.90484 17.0184 10.5257 16.5589 10.832L13.5585 12.832Z" fill="currentColor"/>
<path d="M18.8321 12.4452C19.1384 12.9048 19.0143 13.5256 18.5547 13.832C18.0952 14.1383 17.4743 14.0142 17.168 13.5546L15.168 10.5546C14.8616 10.0951 14.9858 9.47424 15.4453 9.16789C15.9049 8.86153 16.5257 8.98571 16.8321 9.44524L18.8321 12.4452Z" fill="currentColor"/>
<path d="M14.8571 4.85116C15.2477 5.24168 15.2477 5.87485 14.8571 6.26537C14.4666 6.65589 13.8334 6.65589 13.4429 6.26537C12.5106 5.33309 11.2524 4.8009 9.90738 4.8009C7.14596 4.8009 4.90738 7.03948 4.90738 9.8009C4.90738 10.3532 4.45967 10.8009 3.90738 10.8009C3.3551 10.8009 2.90738 10.3532 2.90738 9.8009C2.90738 5.93491 6.04139 2.8009 9.90738 2.8009C11.7883 2.8009 13.5535 3.54752 14.8571 4.85116Z" fill="currentColor"/>
<path d="M6.34889 6.96887C6.80844 6.66255 7.4293 6.78676 7.73563 7.2463C8.04195 7.70585 7.91775 8.32671 7.4582 8.63304L4.45782 10.633C3.99828 10.9394 3.37741 10.8152 3.07109 10.3556C2.76476 9.89606 2.88897 9.2752 3.34852 8.96887L6.34889 6.96887Z" fill="currentColor"/>
<path d="M1.07533 7.35567C0.768977 6.89614 0.893151 6.27527 1.35268 5.96892C1.81221 5.66256 2.43308 5.78674 2.73943 6.24627L4.73943 9.24627C5.04578 9.7058 4.92161 10.3267 4.46208 10.633C4.00255 10.9394 3.38168 10.8152 3.07533 10.3557L1.07533 7.35567Z" fill="currentColor"/>
</svg>
`;

const Reload$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9372 4.21148C14.3936 4.52244 14.5115 5.14453 14.2005 5.60095C13.8896 6.05738 13.2675 6.1753 12.8111 5.86434C11.9885 5.30394 11.0183 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10C15 9.44772 15.4477 9 16 9C16.5523 9 17 9.44772 17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C11.4232 3 12.7852 3.42666 13.9372 4.21148Z" fill="currentColor"/>
<path d="M13.5385 12.5062C13.0732 12.8038 12.4548 12.6679 12.1572 12.2026C11.8596 11.7373 11.9955 11.1189 12.4608 10.8214L15.9426 8.59426C16.4079 8.29667 17.0263 8.43258 17.3239 8.89784C17.6215 9.36309 17.4855 9.98149 17.0203 10.2791L13.5385 12.5062Z" fill="currentColor"/>
<path d="M18.9034 12.4104C19.1284 12.9147 18.9019 13.506 18.3976 13.731C17.8932 13.956 17.3019 13.7295 17.0769 13.2252L15.5688 9.84436C15.3438 9.33999 15.5702 8.74871 16.0746 8.52371C16.579 8.29871 17.1703 8.52519 17.3953 9.02957L18.9034 12.4104Z" fill="currentColor"/>
</svg>
`;

const Repeat$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5187 2.74864C14.8453 2.49387 15.3165 2.5521 15.5713 2.8787L17.1178 4.86126C17.3726 5.18786 17.3144 5.65915 16.9878 5.91392C16.6612 6.16868 16.1899 6.11045 15.9351 5.78385L14.3886 3.8013C14.1338 3.4747 14.1921 3.00341 14.5187 2.74864Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9827 4.72731C16.654 4.47531 16.1832 4.53752 15.9312 4.86626L14.3847 6.88372C14.1327 7.21246 14.1949 7.68324 14.5237 7.93524C14.8524 8.18724 15.3232 8.12503 15.5752 7.79629L17.1217 5.77883C17.3737 5.45009 17.3115 4.97931 16.9827 4.72731Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.47998 9.32257C2.47998 6.56115 4.71856 4.32257 7.47998 4.32257H15.3404C15.8927 4.32257 16.3404 4.77029 16.3404 5.32257C16.3404 5.87486 15.8927 6.32257 15.3404 6.32257H7.47998C5.82313 6.32257 4.47998 7.66572 4.47998 9.32257V10.3226C4.47998 10.8749 4.03227 11.3226 3.47998 11.3226C2.9277 11.3226 2.47998 10.8749 2.47998 10.3226V9.32257Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.48781 17.2512C5.16122 17.506 4.68993 17.4478 4.43516 17.1212L2.88864 15.1386C2.63387 14.812 2.6921 14.3407 3.0187 14.086C3.3453 13.8312 3.81659 13.8894 4.07136 14.216L5.61788 16.1986C5.87264 16.5252 5.81441 16.9965 5.48781 17.2512Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.02373 15.2726C3.35247 15.5246 3.82325 15.4624 4.07525 15.1336L5.62176 13.1162C5.87376 12.7874 5.81155 12.3166 5.48281 12.0646C5.15407 11.8126 4.68329 11.8749 4.43129 12.2036L2.88478 14.221C2.63279 14.5498 2.69499 15.0206 3.02373 15.2726Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5265 10.6773C17.5265 13.4387 15.2879 15.6773 12.5265 15.6773H4.66602C4.11374 15.6773 3.66602 15.2296 3.66602 14.6773C3.66602 14.125 4.11374 13.6773 4.66602 13.6773H12.5265C14.1833 13.6773 15.5265 12.3342 15.5265 10.6773V9.67731C15.5265 9.12502 15.9742 8.67731 16.5265 8.67731C17.0788 8.67731 17.5265 9.12502 17.5265 9.67731V10.6773Z" fill="currentColor"/>
</svg>
`;

const Rewind$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.6368 9.31771C8.27821 9.70192 8.27821 10.2981 8.6368 10.6823L13.2689 15.6453C13.8882 16.3088 15 15.8706 15 14.963V5.03705C15 4.12943 13.8882 3.69121 13.2689 4.35473L8.6368 9.31771Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7357 10L13 7.57407V12.426L10.7357 10ZM8.6368 10.6823C8.27821 10.2981 8.27821 9.70192 8.6368 9.31771L13.2689 4.35473C13.8882 3.69121 15 4.12943 15 5.03705V14.963C15 15.8706 13.8882 16.3088 13.2689 15.6453L8.6368 10.6823Z" fill="currentColor"/>
<path d="M3.6368 9.31771C3.27821 9.70192 3.27821 10.2981 3.6368 10.6823L8.26892 15.6453C8.88821 16.3088 9.99997 15.8706 9.99997 14.963V5.03705C9.99997 4.12943 8.8882 3.69121 8.26892 4.35473L3.6368 9.31771Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.73575 10L7.99997 7.57407L7.99997 12.426L5.73575 10ZM3.6368 10.6823C3.27821 10.2981 3.27821 9.70192 3.6368 9.31771L8.26892 4.35473C8.8882 3.69121 9.99997 4.12943 9.99997 5.03705V14.963C9.99997 15.8706 8.88821 16.3088 8.26892 15.6453L3.6368 10.6823Z" fill="currentColor"/>
</svg>
`;

const RewindTime$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1213_1889)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.95519 5.80495C4.61543 7.12621 4.03442 8.92824 4.21873 10.6756C4.27667 11.2248 3.87839 11.717 3.32915 11.775C2.77991 11.8329 2.2877 11.4346 2.22977 10.8854C1.9846 8.56104 2.75801 6.14902 4.55083 4.38094C7.68655 1.28851 12.7409 1.34092 15.84 4.48348C18.9392 7.62603 18.9214 12.6806 15.7856 15.773C14.2745 17.2633 12.3143 18.0239 10.3456 18.0589C9.57816 18.0726 8.80873 17.9762 8.06284 17.7697C7.53056 17.6224 7.2185 17.0715 7.36582 16.5392C7.51315 16.0069 8.06407 15.6949 8.59634 15.8422C9.15593 15.9971 9.73363 16.0695 10.31 16.0593C11.7873 16.033 13.2509 15.4638 14.3813 14.349C16.724 12.0386 16.7461 8.25048 14.416 5.88783C12.086 3.52518 8.29791 3.49457 5.95519 5.80495Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.96719 11.6946C3.60013 12.1073 2.96805 12.1442 2.55539 11.7772L0.835358 10.2472C0.422704 9.88011 0.385745 9.24802 0.752808 8.83537C1.11987 8.42272 1.75196 8.38576 2.16461 8.75282L3.88464 10.2828C4.2973 10.6499 4.33426 11.282 3.96719 11.6946Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.41998 11.5999C2.75135 12.0418 3.37815 12.1313 3.81998 11.8L5.81998 10.3C6.26181 9.96862 6.35136 9.34182 6.01999 8.89999C5.68863 8.45816 5.06183 8.36861 4.62 8.69998L2.61999 10.1999C2.17816 10.5313 2.08861 11.1581 2.41998 11.5999Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 6C10.5523 6 11 6.44772 11 7V10.5C11 11.0523 10.5523 11.5 10 11.5C9.44772 11.5 9 11.0523 9 10.5V7C9 6.44772 9.44772 6 10 6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 10.5C14 11.0523 13.5523 11.5 13 11.5H10C9.44772 11.5 9 11.0523 9 10.5C9 9.94772 9.44772 9.5 10 9.5H13C13.5523 9.5 14 9.94772 14 10.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_1213_1889">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Scissors$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5.5C2 7.433 3.567 9 5.5 9C7.433 9 9 7.433 9 5.5C9 3.567 7.433 2 5.5 2C3.567 2 2 3.567 2 5.5ZM7 5.5C7 6.32843 6.32843 7 5.5 7C4.67157 7 4 6.32843 4 5.5C4 4.67157 4.67157 4 5.5 4C6.32843 4 7 4.67157 7 5.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 14C2 15.933 3.567 17.5 5.5 17.5C7.433 17.5 9 15.933 9 14C9 12.067 7.433 10.5 5.5 10.5C3.567 10.5 2 12.067 2 14ZM7 14C7 14.8284 6.32843 15.5 5.5 15.5C4.67157 15.5 4 14.8284 4 14C4 13.1716 4.67157 12.5 5.5 12.5C6.32843 12.5 7 13.1716 7 14Z" fill="currentColor"/>
<path d="M16.7071 15.2929C17.0976 15.6834 17.0976 16.3166 16.7071 16.7071C16.3166 17.0976 15.6834 17.0976 15.2929 16.7071L6.79289 8.20711C6.40237 7.81658 6.40237 7.18342 6.79289 6.79289C7.18342 6.40237 7.81658 6.40237 8.20711 6.79289L16.7071 15.2929Z" fill="currentColor"/>
<path d="M6.79289 11.2929C6.40237 11.6834 6.40237 12.3166 6.79289 12.7071C7.18342 13.0976 7.81658 13.0976 8.20711 12.7071L16.7071 4.20711C17.0976 3.81658 17.0976 3.18342 16.7071 2.79289C16.3166 2.40237 15.6834 2.40237 15.2929 2.79289L6.79289 11.2929Z" fill="currentColor"/>
</svg>
`;

const Send$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_1876)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.68542 6.65868C0.758716 6.96758 0.779177 8.28543 1.71502 8.56541L9.20844 10.8072L11.6551 18.5165C11.948 19.4394 13.2507 19.4488 13.5569 18.5302L18.8602 2.62029C19.1208 1.83853 18.3771 1.09479 17.5953 1.35538L1.68542 6.65868ZM5.31842 7.55586L16.3304 3.8852L12.6316 14.9817L10.9548 9.69826C10.8547 9.38295 10.6052 9.13754 10.2883 9.04272L5.31842 7.55586Z" fill="currentColor"/>
<path d="M17.7674 1.43951L18.8105 2.51742L9.98262 11.0605L8.93948 9.98265L17.7674 1.43951Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_0_1876">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const ShareAndroid$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 13C6.65685 13 8 11.6569 8 10C8 8.34315 6.65685 7 5 7C3.34315 7 2 8.34315 2 10C2 11.6569 3.34315 13 5 13ZM5 9C5.55228 9 6 9.44772 6 10C6 10.5523 5.55228 11 5 11C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 8C15.6569 8 17 6.65685 17 5C17 3.34315 15.6569 2 14 2C12.3431 2 11 3.34315 11 5C11 6.65685 12.3431 8 14 8ZM14 4C14.5523 4 15 4.44772 15 5C15 5.55228 14.5523 6 14 6C13.4477 6 13 5.55228 13 5C13 4.44772 13.4477 4 14 4Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 18C15.6569 18 17 16.6569 17 15C17 13.3431 15.6569 12 14 12C12.3431 12 11 13.3431 11 15C11 16.6569 12.3431 18 14 18ZM14 14C14.5523 14 15 14.4477 15 15C15 15.5523 14.5523 16 14 16C13.4477 16 13 15.5523 13 15C13 14.4477 13.4477 14 14 14Z" fill="currentColor"/>
<path d="M6.23586 9.77722L5.47276 8.48583L12.2642 4.47274L13.0272 5.76413L6.23586 9.77722Z" fill="currentColor"/>
<path d="M12.2572 15.529L13.029 14.2428L6.74275 10.471L5.97101 11.7572L12.2572 15.529Z" fill="currentColor"/>
</svg>
`;

const ShareIos$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 3C9 2.44772 9.44772 2 10 2C10.5523 2 11 2.44772 11 3L11 13.5C11 14.0523 10.5523 14.5 10 14.5C9.44772 14.5 9 14.0523 9 13.5L9 3Z" fill="currentColor"/>
<path d="M10.6402 2.76826C11.0645 2.41469 11.1218 1.78413 10.7682 1.35985C10.4147 0.935574 9.7841 0.878251 9.35982 1.23181L6.35982 3.73181C5.93554 4.08538 5.87822 4.71594 6.23178 5.14022C6.58535 5.5645 7.21591 5.62182 7.64019 5.26826L10.6402 2.76826Z" fill="currentColor"/>
<path d="M9.35981 2.76826C8.93553 2.41469 8.87821 1.78413 9.23177 1.35985C9.58534 0.935574 10.2159 0.878251 10.6402 1.23181L13.6402 3.73181C14.0645 4.08538 14.1218 4.71594 13.7682 5.14022C13.4147 5.5645 12.7841 5.62182 12.3598 5.26826L9.35981 2.76826Z" fill="currentColor"/>
<path d="M13 9C12.4477 9 12 8.55228 12 8C12 7.44772 12.4477 7 13 7H14C15.6233 7 17 8.16491 17 9.69231V17.3077C17 18.8351 15.6233 20 14 20L6 20C4.37672 20 3 18.8351 3 17.3077L3 9.69231C3 8.16491 4.37672 7 6 7H7C7.55228 7 8 7.44772 8 8C8 8.55228 7.55228 9 7 9H6C5.41414 9 5 9.35043 5 9.69231L5 17.3077C5 17.6496 5.41414 18 6 18L14 18C14.5859 18 15 17.6496 15 17.3077L15 9.69231C15 9.35043 14.5859 9 14 9L13 9Z" fill="currentColor"/>
</svg>
`;

const Shuffle$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 5.75C3 5.19772 3.44772 4.75 4 4.75C7.33476 4.75 10.5 6.87603 10.5 10C10.5 13.124 7.33476 15.25 4 15.25C3.44772 15.25 3 14.8023 3 14.25C3 13.6977 3.44772 13.25 4 13.25C6.74037 13.25 8.5 11.5705 8.5 10C8.5 8.42955 6.74037 6.75 4 6.75C3.44772 6.75 3 6.30228 3 5.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 5.75C16 5.19772 15.5523 4.75 15 4.75C11.6652 4.75 8.5 6.87603 8.5 10C8.5 13.124 11.6652 15.25 15 15.25C15.5523 15.25 16 14.8023 16 14.25C16 13.6977 15.5523 13.25 15 13.25C12.2596 13.25 10.5 11.5705 10.5 10C10.5 8.42955 12.2596 6.75 15 6.75C15.5523 6.75 16 6.30228 16 5.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.4594 14.7783C16.132 15.0321 15.6609 14.9723 15.4071 14.6449L13.9071 12.7094C13.6534 12.382 13.7131 11.9109 14.0405 11.6571C14.3679 11.4034 14.8391 11.4631 15.0928 11.7905L16.5928 13.7261C16.8465 14.0535 16.7868 14.5246 16.4594 14.7783Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.05 16.7855C13.7186 16.537 13.6515 16.0669 13.9 15.7355L15.4 13.7355C15.6485 13.4041 16.1186 13.337 16.45 13.5855C16.7814 13.834 16.8485 14.3041 16.6 14.6355L15.1 16.6355C14.8515 16.9669 14.3814 17.034 14.05 16.7855Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.4594 5.22161C16.132 4.96788 15.6609 5.0276 15.4071 5.35501L13.9071 7.29056C13.6534 7.61796 13.7131 8.08906 14.0405 8.34279C14.3679 8.59652 14.8391 8.5368 15.0928 8.20939L16.5928 6.27385C16.8465 5.94644 16.7868 5.47534 16.4594 5.22161Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.05 3.14998C13.7186 3.39851 13.6515 3.86861 13.9 4.19998L15.4 6.19998C15.6485 6.53135 16.1186 6.59851 16.45 6.34998C16.7814 6.10145 16.8485 5.63135 16.6 5.29998L15.1 3.29998C14.8515 2.96861 14.3814 2.90145 14.05 3.14998Z" fill="currentColor"/>
</svg>
`;

const Sliders$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 4.75H10M16.5 4.75H14.875" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<circle cx="12.75" cy="5" r="1.75" stroke="currentColor" stroke-width="2"/>
<path d="M3.5 14.75H10M16.5 14.75H14.875" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<circle cx="12.75" cy="15" r="1.75" stroke="currentColor" stroke-width="2"/>
<path d="M3.5 9.75H5.125M16.5 9.75H10" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<circle cx="7.75" cy="10" r="1.75" stroke="currentColor" stroke-width="2"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 4.75C2.5 4.19772 2.94772 3.75 3.5 3.75H10C10.5523 3.75 11 4.19772 11 4.75C11 5.30228 10.5523 5.75 10 5.75H3.5C2.94772 5.75 2.5 5.30228 2.5 4.75ZM13.875 4.75C13.875 4.19772 14.3227 3.75 14.875 3.75H16.5C17.0523 3.75 17.5 4.19772 17.5 4.75C17.5 5.30228 17.0523 5.75 16.5 5.75H14.875C14.3227 5.75 13.875 5.30228 13.875 4.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 5.75C13.1642 5.75 13.5 5.41421 13.5 5C13.5 4.58579 13.1642 4.25 12.75 4.25C12.3358 4.25 12 4.58579 12 5C12 5.41421 12.3358 5.75 12.75 5.75ZM12.75 7.75C14.2688 7.75 15.5 6.51878 15.5 5C15.5 3.48122 14.2688 2.25 12.75 2.25C11.2312 2.25 10 3.48122 10 5C10 6.51878 11.2312 7.75 12.75 7.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 14.75C2.5 14.1977 2.94772 13.75 3.5 13.75H10C10.5523 13.75 11 14.1977 11 14.75C11 15.3023 10.5523 15.75 10 15.75H3.5C2.94772 15.75 2.5 15.3023 2.5 14.75ZM13.875 14.75C13.875 14.1977 14.3227 13.75 14.875 13.75H16.5C17.0523 13.75 17.5 14.1977 17.5 14.75C17.5 15.3023 17.0523 15.75 16.5 15.75H14.875C14.3227 15.75 13.875 15.3023 13.875 14.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 15.75C13.1642 15.75 13.5 15.4142 13.5 15C13.5 14.5858 13.1642 14.25 12.75 14.25C12.3358 14.25 12 14.5858 12 15C12 15.4142 12.3358 15.75 12.75 15.75ZM12.75 17.75C14.2688 17.75 15.5 16.5188 15.5 15C15.5 13.4812 14.2688 12.25 12.75 12.25C11.2312 12.25 10 13.4812 10 15C10 16.5188 11.2312 17.75 12.75 17.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 9.75C2.5 9.19772 2.94772 8.75 3.5 8.75H5.125C5.67728 8.75 6.125 9.19772 6.125 9.75C6.125 10.3023 5.67728 10.75 5.125 10.75H3.5C2.94772 10.75 2.5 10.3023 2.5 9.75ZM9 9.75C9 9.19772 9.44772 8.75 10 8.75H16.5C17.0523 8.75 17.5 9.19772 17.5 9.75C17.5 10.3023 17.0523 10.75 16.5 10.75H10C9.44772 10.75 9 10.3023 9 9.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 10.75C8.16421 10.75 8.5 10.4142 8.5 10C8.5 9.58579 8.16421 9.25 7.75 9.25C7.33579 9.25 7 9.58579 7 10C7 10.4142 7.33579 10.75 7.75 10.75ZM7.75 12.75C9.26878 12.75 10.5 11.5188 10.5 10C10.5 8.48122 9.26878 7.25 7.75 7.25C6.23122 7.25 5 8.48122 5 10C5 11.5188 6.23122 12.75 7.75 12.75Z" fill="currentColor"/>
</svg>
`;

const Smartphone$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 3C6.25 2.86193 6.36193 2.75 6.5 2.75H13.5C13.6381 2.75 13.75 2.86193 13.75 3V15C13.75 15.1381 13.6381 15.25 13.5 15.25H6.5C6.36193 15.25 6.25 15.1381 6.25 15V3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 0H5.5C4.39543 0 3.5 0.942558 3.5 2.10526V17.8947C3.5 19.0574 4.39543 20 5.5 20H14.5C15.6046 20 16.5 19.0574 16.5 17.8947V2.10526C16.5 0.942558 15.6046 0 14.5 0ZM5.5 18V2H14.5V18H5.5Z" fill="currentColor"/>
<path d="M10.5 16.5C10.5 16.7761 10.2761 17 10 17C9.72386 17 9.5 16.7761 9.5 16.5C9.5 16.2239 9.72386 16 10 16C10.2761 16 10.5 16.2239 10.5 16.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 16.5C9 15.9477 9.44772 15.5 10 15.5C10.5523 15.5 11 15.9477 11 16.5C11 17.0523 10.5523 17.5 10 17.5C9.44772 17.5 9 17.0523 9 16.5Z" fill="currentColor"/>
</svg>
`;

const SmartphoneNotch$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 0H15C16.1046 0 17 0.942558 17 2.10526V17.8947C17 19.0574 16.1046 20 15 20H6C4.89543 20 4 19.0574 4 17.8947V2.10526C4 0.942558 4.89543 0 6 0ZM7 2C6.44772 2 6 2.44772 6 3V17C6 17.5523 6.44772 18 7 18H14C14.5523 18 15 17.5523 15 17V3C15 2.44772 14.5523 2 14 2H13V3.5C13 3.77614 12.7761 4 12.5 4H8.5C8.22386 4 8 3.77614 8 3.5V2H7Z" fill="currentColor"/>
</svg>
`;

const Smartphone2$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_144)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 0H5.5C4.39543 0 3.5 0.89543 3.5 2V18C3.5 19.1046 4.39543 20 5.5 20H14.5C15.6046 20 16.5 19.1046 16.5 18V2C16.5 0.89543 15.6046 0 14.5 0ZM5.5 18V2H14.5V18H5.5Z" fill="currentColor"/>
<path d="M10 17.25C9.30964 17.25 8.75 16.6904 8.75 16C8.75 15.3096 9.30964 14.75 10 14.75C10.6904 14.75 11.25 15.3096 11.25 16C11.25 16.6904 10.6904 17.25 10 17.25Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_0_144">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const SoftDrink$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.411 4H6.58933C6.48813 4 6.38701 4.00615 6.28655 4.0184C4.916 4.18563 3.94052 5.43224 4.10774 6.80278L5.32785 16.8028C5.48089 18.0571 6.54584 19 7.80945 19H12.1937C13.4576 19 14.5227 18.0567 14.6754 16.8021L15.8927 6.80209C15.9049 6.70186 15.911 6.60097 15.911 6.5C15.911 5.11929 14.7917 4 13.411 4ZM6.52878 6.00368C6.54887 6.00123 6.56909 6 6.58933 6H13.411C13.6871 6 13.911 6.22386 13.911 6.5C13.911 6.52019 13.9097 6.54037 13.9073 6.56042L12.69 16.5604C12.6595 16.8113 12.4465 17 12.1937 17H7.80945C7.55673 17 7.34374 16.8114 7.31313 16.5606L6.09302 6.56056C6.05957 6.28645 6.25467 6.03713 6.52878 6.00368Z" fill="currentColor"/>
<path d="M9.21684 14.7206C9.09502 15.1165 8.67533 15.3386 8.27944 15.2168C7.88354 15.095 7.66135 14.6753 7.78317 14.2794L11.7832 1.27944C11.905 0.88354 12.3247 0.661352 12.7206 0.783167C13.1165 0.904981 13.3386 1.32467 13.2168 1.72057L9.21684 14.7206Z" fill="currentColor"/>
<path d="M5.5 10.25C5.08579 10.25 4.75 9.91421 4.75 9.5C4.75 9.08579 5.08579 8.75 5.5 8.75H14.5C14.9142 8.75 15.25 9.08579 15.25 9.5C15.25 9.91421 14.9142 10.25 14.5 10.25H5.5Z" fill="currentColor"/>
<path d="M12.3181 2.22761C11.9163 2.12715 11.6719 1.71995 11.7724 1.3181C11.8729 0.916254 12.2801 0.671934 12.6819 0.772395L16.6819 1.7724C17.0838 1.87286 17.3281 2.28006 17.2276 2.6819C17.1272 3.08375 16.72 3.32807 16.3181 3.22761L12.3181 2.22761Z" fill="currentColor"/>
</svg>
`;

const Sort$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2929 7.70711C9.90237 7.31658 9.90237 6.68342 10.2929 6.29289L13.2929 3.29289C13.6834 2.90237 14.3166 2.90237 14.7071 3.29289C15.0976 3.68342 15.0976 4.31658 14.7071 4.70711L11.7071 7.70711C11.3166 8.09763 10.6834 8.09763 10.2929 7.70711Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7071 7.70711C17.3166 8.09763 16.6834 8.09763 16.2929 7.70711L13.2929 4.70711C12.9024 4.31658 12.9024 3.68342 13.2929 3.29289C13.6834 2.90237 14.3166 2.90237 14.7071 3.29289L17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 5C14.5523 5 15 5.44772 15 6V14C15 14.5523 14.5523 15 14 15C13.4477 15 13 14.5523 13 14V6C13 5.44772 13.4477 5 14 5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.70711 12.2929C10.0976 12.6834 10.0976 13.3166 9.70711 13.7071L6.70711 16.7071C6.31658 17.0976 5.68342 17.0976 5.29289 16.7071C4.90237 16.3166 4.90237 15.6834 5.29289 15.2929L8.29289 12.2929C8.68342 11.9024 9.31658 11.9024 9.70711 12.2929Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.29289 12.2929C2.68342 11.9024 3.31658 11.9024 3.70711 12.2929L6.70711 15.2929C7.09763 15.6834 7.09763 16.3166 6.70711 16.7071C6.31658 17.0976 5.68342 17.0976 5.29289 16.7071L2.29289 13.7071C1.90237 13.3166 1.90237 12.6834 2.29289 12.2929Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 15C5.44772 15 5 14.5523 5 14L5 6C5 5.44771 5.44772 5 6 5C6.55228 5 7 5.44771 7 6V14C7 14.5523 6.55228 15 6 15Z" fill="currentColor"/>
</svg>
`;

const SpeakerHigh$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3341 1.75396L5.6534 5.93183H2C1.44772 5.93183 1 6.37954 1 6.93183V12.9318C1 13.4841 1.44772 13.9318 2 13.9318H5.53532L10.3314 18.2437C10.9751 18.8223 12 18.3655 12 17.5V2.5C12 1.63618 10.9785 1.17875 10.3341 1.75396ZM6.6659 7.70891L10 4.73298V15.2563L6.87443 12.4463C6.70368 12.1394 6.37609 11.9318 6 11.9318H3V7.93183H5.75114C6.05292 8.01082 6.39317 7.95234 6.6659 7.70891Z" fill="currentColor"/>
<path d="M15.4888 13.0688C15.1747 13.3388 14.7012 13.303 14.4312 12.9889C14.1612 12.6747 14.197 12.2012 14.5112 11.9312C14.545 11.9021 14.5784 11.8705 14.6111 11.8366C14.7486 11.6941 14.872 11.5127 14.9728 11.3008C15.1512 10.9258 15.25 10.4758 15.25 10C15.25 9.24552 15.0002 8.56671 14.6111 8.16341C14.5784 8.12949 14.545 8.09794 14.5112 8.06882C14.197 7.79884 14.1612 7.32532 14.4312 7.01118C14.7012 6.69703 15.1747 6.66123 15.4888 6.93121C15.5585 6.99105 15.6258 7.05473 15.6907 7.12202C16.3619 7.8178 16.75 8.87235 16.75 10C16.75 10.6958 16.6028 11.3662 16.3272 11.9454C16.1586 12.2997 15.9438 12.6156 15.6907 12.878C15.6258 12.9453 15.5585 13.009 15.4888 13.0688Z" fill="currentColor"/>
<path d="M16.4113 16.1272C16.065 16.3543 15.6 16.2577 15.3729 15.9114C15.1457 15.565 15.2423 15.1001 15.5887 14.8729C15.7519 14.7658 15.9098 14.6509 16.0616 14.5287C16.2134 14.4065 16.359 14.2771 16.4979 14.1411C16.6367 14.005 16.7687 13.8625 16.8933 13.7139C17.0178 13.5654 17.1348 13.4111 17.2438 13.2516C17.3527 13.0921 17.4536 12.9276 17.5461 12.7585C17.6384 12.5896 17.7222 12.4164 17.7971 12.2393C17.8719 12.0626 17.9378 11.8823 17.9945 11.6989C18.051 11.5161 18.0984 11.3304 18.1363 11.1423C18.1741 10.9551 18.2026 10.7656 18.2216 10.5744C18.2405 10.3844 18.25 10.1929 18.25 10C18.25 9.80718 18.2405 9.6156 18.2216 9.42568C18.2026 9.23441 18.1741 9.04493 18.1363 8.85772C18.0984 8.66962 18.051 8.48393 17.9945 8.30115C17.9378 8.11775 17.8719 7.93743 17.7971 7.76072C17.7222 7.58369 17.6384 7.41043 17.5461 7.24153C17.4536 7.07247 17.3527 6.90792 17.2438 6.74848C17.1348 6.58891 17.0178 6.43461 16.8933 6.28613C16.7687 6.13758 16.6367 5.99502 16.4979 5.859C16.359 5.72293 16.2134 5.59354 16.0616 5.47135C15.9098 5.34914 15.7519 5.23426 15.5887 5.12716C15.2423 4.89999 15.1457 4.43505 15.3729 4.08869C15.6 3.74233 16.065 3.64571 16.4113 3.87289C16.6153 4.00666 16.8125 4.15018 17.0022 4.30288C17.1919 4.45561 17.374 4.61737 17.5477 4.78755C17.7214 4.95777 17.8866 5.13625 18.0426 5.32231C18.1987 5.50844 18.3455 5.70199 18.4823 5.90223C18.6192 6.10255 18.746 6.30939 18.8622 6.52202C18.9785 6.73469 19.0841 6.95295 19.1785 7.17608C19.2728 7.39899 19.356 7.62654 19.4275 7.85804C19.4989 8.08883 19.5587 8.32333 19.6067 8.56084C19.6544 8.79714 19.6903 9.03622 19.7143 9.27743C19.738 9.51659 19.75 9.75765 19.75 10C19.75 10.2424 19.738 10.4835 19.7143 10.7226C19.6903 10.9638 19.6544 11.2029 19.6067 11.4392C19.5587 11.6767 19.4989 11.9112 19.4275 12.142C19.356 12.3735 19.2728 12.6011 19.1785 12.824C19.0841 13.0471 18.9785 13.2654 18.8622 13.478C18.746 13.6907 18.6192 13.8975 18.4823 14.0978C18.3455 14.2981 18.1987 14.4916 18.0426 14.6777C17.8866 14.8638 17.7214 15.0423 17.5477 15.2125C17.374 15.3827 17.1919 15.5444 17.0022 15.6972C16.8125 15.8499 16.6153 15.9934 16.4113 16.1272Z" fill="currentColor"/>
</svg>
`;

const SpeakerLow$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3341 1.75396L5.6534 5.93183H2C1.44772 5.93183 1 6.37954 1 6.93183V12.9318C1 13.4841 1.44772 13.9318 2 13.9318H5.53532L10.3314 18.2437C10.9751 18.8223 12 18.3655 12 17.5V2.5C12 1.63618 10.9785 1.17875 10.3341 1.75396ZM6.6659 7.70891L10 4.73298V15.2563L6.87443 12.4463C6.70368 12.1394 6.37609 11.9318 6 11.9318H3V7.93183H5.75114C6.05292 8.01082 6.39317 7.95234 6.6659 7.70891Z" fill="currentColor"/>
<path d="M15.4889 13.0688C15.1747 13.3388 14.7012 13.303 14.4312 12.9889C14.1612 12.6747 14.197 12.2012 14.5112 11.9312C14.5451 11.9021 14.5784 11.8705 14.6111 11.8366C14.7486 11.6941 14.872 11.5127 14.9728 11.3008C15.1512 10.9258 15.25 10.4758 15.25 10C15.25 9.24552 15.0002 8.56671 14.6111 8.16341C14.5784 8.12949 14.5451 8.09794 14.5112 8.06882C14.197 7.79884 14.1612 7.32532 14.4312 7.01118C14.7012 6.69703 15.1747 6.66123 15.4889 6.93121C15.5585 6.99105 15.6258 7.05473 15.6907 7.12202C16.3619 7.8178 16.75 8.87235 16.75 10C16.75 10.6958 16.6028 11.3662 16.3272 11.9454C16.1586 12.2997 15.9439 12.6156 15.6907 12.878C15.6258 12.9453 15.5585 13.009 15.4889 13.0688Z" fill="currentColor"/>
</svg>
`;

const SpeakerOff$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_2158)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3341 1.75396L5.6534 5.93183H2C1.44772 5.93183 1 6.37954 1 6.93183V12.9318C1 13.4841 1.44772 13.9318 2 13.9318H5.53532L10.3314 18.2437C10.9751 18.8223 12 18.3655 12 17.5V2.5C12 1.63618 10.9785 1.17875 10.3341 1.75396ZM6.6659 7.70891L10 4.73298V15.2563L6.87443 12.4463C6.70368 12.1394 6.37609 11.9318 6 11.9318H3V7.93183H5.75114C6.05292 8.01082 6.39317 7.95234 6.6659 7.70891Z" fill="currentColor"/>
<path d="M15.4889 13.0688C15.1747 13.3388 14.7012 13.303 14.4312 12.9889C14.1612 12.6747 14.197 12.2012 14.5112 11.9312C14.5451 11.9021 14.5784 11.8705 14.6111 11.8366C14.7486 11.6941 14.872 11.5127 14.9728 11.3008C15.1512 10.9258 15.25 10.4758 15.25 10C15.25 9.24552 15.0002 8.56671 14.6111 8.16341C14.5784 8.12949 14.5451 8.09794 14.5112 8.06882C14.197 7.79884 14.1612 7.32532 14.4312 7.01118C14.7012 6.69703 15.1747 6.66123 15.4889 6.93121C15.5585 6.99105 15.6258 7.05473 15.6907 7.12202C16.3619 7.8178 16.75 8.87235 16.75 10C16.75 10.6958 16.6028 11.3662 16.3272 11.9454C16.1586 12.2997 15.9439 12.6156 15.6907 12.878C15.6258 12.9453 15.5585 13.009 15.4889 13.0688Z" fill="currentColor"/>
<path d="M16.4113 16.1272C16.065 16.3543 15.6 16.2577 15.3729 15.9114C15.1457 15.565 15.2423 15.1001 15.5887 14.8729C15.7519 14.7658 15.9098 14.6509 16.0616 14.5287C16.2134 14.4065 16.359 14.2771 16.4979 14.1411C16.6367 14.005 16.7687 13.8625 16.8933 13.7139C17.0178 13.5654 17.1348 13.4111 17.2438 13.2516C17.3527 13.0921 17.4536 12.9276 17.5461 12.7585C17.6384 12.5896 17.7222 12.4164 17.7971 12.2393C17.8719 12.0626 17.9378 11.8823 17.9945 11.6989C18.051 11.5161 18.0984 11.3304 18.1363 11.1423C18.1741 10.9551 18.2026 10.7656 18.2216 10.5744C18.2405 10.3844 18.25 10.1929 18.25 10C18.25 9.80718 18.2405 9.6156 18.2216 9.42568C18.2026 9.23441 18.1741 9.04493 18.1363 8.85772C18.0984 8.66962 18.051 8.48393 17.9945 8.30115C17.9378 8.11775 17.8719 7.93743 17.7971 7.76072C17.7222 7.58369 17.6384 7.41043 17.5461 7.24153C17.4536 7.07247 17.3527 6.90792 17.2438 6.74848C17.1348 6.58891 17.0178 6.43461 16.8933 6.28613C16.7687 6.13758 16.6367 5.99502 16.4979 5.859C16.359 5.72293 16.2134 5.59354 16.0616 5.47135C15.9098 5.34914 15.7519 5.23426 15.5887 5.12716C15.2423 4.89999 15.1457 4.43505 15.3729 4.08869C15.6 3.74233 16.065 3.64571 16.4113 3.87289C16.6153 4.00666 16.8125 4.15018 17.0022 4.30288C17.1919 4.45561 17.374 4.61737 17.5477 4.78755C17.7214 4.95777 17.8866 5.13625 18.0426 5.32231C18.1987 5.50844 18.3455 5.70199 18.4823 5.90223C18.6192 6.10255 18.746 6.30939 18.8622 6.52202C18.9785 6.73469 19.0841 6.95295 19.1785 7.17608C19.2728 7.39899 19.356 7.62654 19.4275 7.85804C19.4989 8.08883 19.5587 8.32333 19.6067 8.56084C19.6544 8.79714 19.6903 9.03622 19.7143 9.27743C19.738 9.51659 19.75 9.75765 19.75 10C19.75 10.2424 19.738 10.4835 19.7143 10.7226C19.6903 10.9638 19.6544 11.2029 19.6067 11.4392C19.5587 11.6767 19.4989 11.9112 19.4275 12.142C19.356 12.3735 19.2728 12.6011 19.1785 12.824C19.0841 13.0471 18.9785 13.2654 18.8622 13.478C18.746 13.6907 18.6192 13.8975 18.4823 14.0978C18.3455 14.2981 18.1987 14.4916 18.0426 14.6777C17.8866 14.8638 17.7214 15.0423 17.5477 15.2125C17.374 15.3827 17.1919 15.5444 17.0022 15.6972C16.8125 15.8499 16.6153 15.9934 16.4113 16.1272Z" fill="currentColor"/>
<path d="M1.36429 3.77196C0.937965 3.42087 0.876976 2.79065 1.22807 2.36432C1.57916 1.938 2.20938 1.87701 2.6357 2.2281L19.6357 16.2281C20.062 16.5792 20.123 17.2094 19.7719 17.6357C19.4208 18.0621 18.7906 18.123 18.3643 17.772L1.36429 3.77196Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_0_2158">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Square$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 5H6C5.44772 5 5 5.44772 5 6V14C5 14.5523 5.44772 15 6 15H14C14.5523 15 15 14.5523 15 14V6C15 5.44772 14.5523 5 14 5ZM7 13V7H13V13H7Z" fill="currentColor"/>
</svg>
`;

const SquareFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 4.5H14C14.8284 4.5 15.5 5.17157 15.5 6V14C15.5 14.8284 14.8284 15.5 14 15.5H6C5.17157 15.5 4.5 14.8284 4.5 14V6C4.5 5.17157 5.17157 4.5 6 4.5Z" fill="currentColor"/>
</svg>
`;

const Star$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.70492 17.8855L10 15.9706L14.2951 17.8855C14.9986 18.1991 15.7777 17.6331 15.6967 16.8671L15.2028 12.1905L18.3513 8.69737C18.8669 8.12523 18.5694 7.20937 17.8159 7.04961L13.2155 6.07423L10.8663 2.00044C10.4815 1.33319 9.5185 1.33319 9.13372 2.00044L6.78449 6.07423L2.18413 7.04961C1.43063 7.20937 1.13305 8.12523 1.64874 8.69737L4.79719 12.1905L4.30325 16.8671C4.22234 17.6331 5.00142 18.1991 5.70492 17.8855ZM9.5928 13.9623L6.47433 15.3527L6.83295 11.9572C6.86276 11.675 6.77127 11.3934 6.58129 11.1826L4.29534 8.64644L7.63546 7.93826C7.91305 7.8794 8.15257 7.70538 8.29432 7.45957L10 4.50177L11.7057 7.45957C11.8474 7.70538 12.0869 7.8794 12.3645 7.93826L15.7047 8.64644L13.4187 11.1826C13.2287 11.3934 13.1372 11.675 13.167 11.9572L13.5257 15.3527L10.4072 13.9623C10.148 13.8468 9.85197 13.8468 9.5928 13.9623Z" fill="currentColor"/>
</svg>
`;

const StarFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 15.9706L5.70492 17.8855C5.00142 18.1991 4.22234 17.6331 4.30325 16.8671L4.79719 12.1905L1.64874 8.69737C1.13305 8.12523 1.43063 7.20937 2.18413 7.04961L6.78449 6.07423L9.13372 2.00044C9.5185 1.33319 10.4815 1.33319 10.8663 2.00044L13.2155 6.07423L17.8159 7.04961C18.5694 7.20937 18.8669 8.12523 18.3513 8.69737L15.2028 12.1905L15.6967 16.8671C15.7777 17.6331 14.9986 18.1991 14.2951 17.8855L10 15.9706Z" fill="currentColor"/>
</svg>
`;

const Stopwatch$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 5.5C6.96243 5.5 4.5 7.96243 4.5 11C4.5 14.0376 6.96243 16.5 10 16.5C13.0376 16.5 15.5 14.0376 15.5 11C15.5 7.96243 13.0376 5.5 10 5.5ZM2.5 11C2.5 6.85786 5.85786 3.5 10 3.5C14.1421 3.5 17.5 6.85786 17.5 11C17.5 15.1421 14.1421 18.5 10 18.5C5.85786 18.5 2.5 15.1421 2.5 11Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.79289 3.79292C3.18342 3.4024 3.81658 3.4024 4.20711 3.79292L5.70711 5.29292C6.09763 5.68345 6.09763 6.31661 5.70711 6.70714C5.31658 7.09766 4.68342 7.09766 4.29289 6.70714L2.79289 5.20714C2.40237 4.81661 2.40237 4.18345 2.79289 3.79292Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2929 6.70708C14.6834 7.0976 15.3166 7.0976 15.7071 6.70708L17.2071 5.20708C17.5976 4.81655 17.5976 4.18339 17.2071 3.79286C16.8166 3.40234 16.1834 3.40234 15.7929 3.79286L14.2929 5.29286C13.9024 5.68339 13.9024 6.31655 14.2929 6.70708Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2809 8.37534C13.6259 8.8066 13.556 9.4359 13.1247 9.78091L10.6247 11.7809C10.1934 12.1259 9.56413 12.056 9.21912 11.6247C8.87412 11.1935 8.94404 10.5642 9.3753 10.2192L11.8753 8.21917C12.3066 7.87416 12.9359 7.94408 13.2809 8.37534Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 4V2H11V4H9Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 2C7.5 1.44772 7.94772 1 8.5 1H11.5C12.0523 1 12.5 1.44772 12.5 2C12.5 2.55228 12.0523 3 11.5 3H8.5C7.94772 3 7.5 2.55228 7.5 2Z" fill="currentColor"/>
</svg>
`;

const StudioBackdrop$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3C3 2.17157 3.67157 1.5 4.5 1.5H15.5C16.3284 1.5 17 2.17157 17 3V10C17 10.8284 16.3284 11.5 15.5 11.5H4.5C3.67157 11.5 3 10.8284 3 10V3ZM5 3.5V9.5H15V3.5H5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 2.5C1.75 1.94772 2.19772 1.5 2.75 1.5H17.25C17.8023 1.5 18.25 1.94772 18.25 2.5C18.25 3.05228 17.8023 3.5 17.25 3.5H2.75C2.19772 3.5 1.75 3.05228 1.75 2.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.7198 16.5L4.98058 10.1961L3.01942 9.80389L1.63903 16.7058C1.45339 17.634 2.16333 18.5 3.1099 18.5H16.8901C17.8367 18.5 18.5466 17.634 18.361 16.7058L16.9806 9.80389L15.0194 10.1961L16.2802 16.5H3.7198Z" fill="currentColor"/>
</svg>
`;

const StudioLightFront$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C10.5523 8 11 7.55228 11 7C11 6.44772 10.5523 6 10 6C9.44772 6 9 6.44772 9 7C9 7.55228 9.44772 8 10 8ZM10 10C11.6569 10 13 8.65685 13 7C13 5.34315 11.6569 4 10 4C8.34315 4 7 5.34315 7 7C7 8.65685 8.34315 10 10 10Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.01349 3.50774C5.23572 2.17443 6.19747 0.5 7.74105 0.5H12.259C13.8026 0.5 14.7643 2.17443 13.9865 3.50774L12.2388 6.50387L10.5112 5.49613L12.259 2.5H7.74105L9.48879 5.49613L7.76123 6.50387L6.01349 3.50774Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9865 10.4923C14.7643 11.8256 13.8025 13.5 12.259 13.5H7.74102C6.19744 13.5 5.2357 11.8256 6.01347 10.4923L7.76121 7.49613L9.48877 8.50387L7.74102 11.5H12.259L10.5112 8.50387L12.2388 7.49613L13.9865 10.4923Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.6094 10.2956C5.28029 11.1817 3.5 10.2289 3.5 8.63148L3.5 5.36852C3.5 3.77113 5.28029 2.81834 6.6094 3.70442L9.5547 5.66795L8.66667 7L9.5547 8.33205L6.6094 10.2956ZM7.94722 7L5.5 5.36852L5.5 8.63148L7.94722 7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3906 3.70442C14.7197 2.81834 16.5 3.77113 16.5 5.36852V8.63148C16.5 10.2289 14.7197 11.1817 13.3906 10.2956L10.4453 8.33205L11.3333 7L10.4453 5.66795L13.3906 3.70442ZM12.0528 7L14.5 8.63148L14.5 5.36852L12.0528 7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4138 18.4061C15.1895 18.9108 14.5985 19.1381 14.0939 18.9138L11 17.5388V18.5C11 19.0523 10.5523 19.5 9.99999 19.5C9.44771 19.5 8.99999 19.0523 8.99999 18.5V17.5388L5.90613 18.9138C5.40145 19.1381 4.81049 18.9108 4.58618 18.4061C4.36188 17.9015 4.58917 17.3105 5.09386 17.0862L8.99999 15.3501V13C8.99999 12.4477 9.44771 12 9.99999 12C10.5523 12 11 12.4477 11 13V15.3501L14.9061 17.0862C15.4108 17.3105 15.6381 17.9015 15.4138 18.4061Z" fill="currentColor"/>
</svg>
`;

const StudioLightSide$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8906 4.45595C15.2197 3.56988 17 4.52266 17 6.12006V9.38302C17 10.9804 15.2197 11.9332 13.8906 11.0471L10.9453 9.08359L11.8333 7.75154L10.9453 6.41949L13.8906 4.45595ZM12.5528 7.75154L15 9.38302L15 6.12006L12.5528 7.75154Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9138 18.1577C13.6895 18.6624 13.0985 18.8897 12.5939 18.6653L9.49999 17.2903V18.2515C9.49999 18.8038 9.05228 19.2515 8.49999 19.2515C7.94771 19.2515 7.49999 18.8038 7.49999 18.2515L7.49999 17.2903L4.40613 18.6653C3.90145 18.8897 3.31049 18.6624 3.08618 18.1577C2.86188 17.653 3.08917 17.062 3.59386 16.8377L7.49999 15.1017V11.2515C7.49999 10.6993 7.94771 10.2515 8.49999 10.2515C9.05228 10.2515 9.49999 10.6993 9.49999 11.2515V15.1017L13.4061 16.8377C13.9108 17.062 14.1381 17.653 13.9138 18.1577Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 5.75154C4.5 4.64697 5.39543 3.75154 6.5 3.75154H10.5C11.6046 3.75154 12.5 4.64697 12.5 5.75154V9.75154C12.5 10.8561 11.6046 11.7515 10.5 11.7515H6.5C5.39543 11.7515 4.5 10.8561 4.5 9.75154V5.75154ZM10.5 5.75154H6.5V9.75154H10.5V5.75154Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7929 5.95864C10.4024 5.56812 10.4024 4.93496 10.7929 4.54443L13.7929 1.54443C14.1834 1.15391 14.8166 1.15391 15.2071 1.54443C15.5976 1.93496 15.5976 2.56812 15.2071 2.95864L12.2071 5.95864C11.8166 6.34917 11.1834 6.34917 10.7929 5.95864Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2071 13.9586C14.8166 14.3492 14.1834 14.3492 13.7929 13.9586L10.7929 10.9586C10.4024 10.5681 10.4024 9.93496 10.7929 9.54443C11.1834 9.15391 11.8166 9.15391 12.2071 9.54443L15.2071 12.5444C15.5976 12.935 15.5976 13.5681 15.2071 13.9586Z" fill="currentColor"/>
</svg>
`;

const Sun$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14ZM10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8Z" fill="currentColor"/>
<path d="M0.5 10C0.5 9.44772 0.947715 9 1.5 9H3.5C4.05228 9 4.5 9.44772 4.5 10C4.5 10.5523 4.05228 11 3.5 11H1.5C0.947715 11 0.5 10.5523 0.5 10Z" fill="currentColor"/>
<path d="M15.5 10C15.5 9.44772 15.9477 9 16.5 9H18.5C19.0523 9 19.5 9.44772 19.5 10C19.5 10.5523 19.0523 11 18.5 11H16.5C15.9477 11 15.5 10.5523 15.5 10Z" fill="currentColor"/>
<path d="M14 14C14.3905 13.6095 15.0237 13.6095 15.4142 14L16.8284 15.4142C17.219 15.8047 17.219 16.4379 16.8284 16.8284C16.4379 17.2189 15.8048 17.2189 15.4142 16.8284L14 15.4142C13.6095 15.0237 13.6095 14.3905 14 14Z" fill="currentColor"/>
<path d="M2.99999 2.99999C3.39051 2.60946 4.02367 2.60946 4.4142 2.99999L5.82841 4.4142C6.21894 4.80472 6.21894 5.43789 5.82841 5.82841C5.43789 6.21894 4.80472 6.21894 4.4142 5.82841L2.99999 4.4142C2.60946 4.02367 2.60946 3.39051 2.99999 2.99999Z" fill="currentColor"/>
<path d="M10 15.5C10.5523 15.5 11 15.9477 11 16.5V18.5C11 19.0523 10.5523 19.5 10 19.5C9.44772 19.5 9 19.0523 9 18.5V16.5C9 15.9477 9.44772 15.5 10 15.5Z" fill="currentColor"/>
<path d="M10 0.5C10.5523 0.5 11 0.947715 11 1.5V3.5C11 4.05228 10.5523 4.5 10 4.5C9.44772 4.5 9 4.05228 9 3.5V1.5C9 0.947715 9.44772 0.5 10 0.5Z" fill="currentColor"/>
<path d="M16.8284 2.99999C17.2189 3.39051 17.2189 4.02367 16.8284 4.4142L15.4142 5.82841C15.0237 6.21894 14.3905 6.21894 14 5.82841C13.6095 5.43789 13.6095 4.80472 14 4.4142L15.4142 2.99999C15.8047 2.60946 16.4379 2.60946 16.8284 2.99999Z" fill="currentColor"/>
<path d="M5.82841 15.4142L4.4142 16.8284C4.02368 17.219 3.39051 17.219 2.99999 16.8284C2.60946 16.4379 2.60946 15.8048 2.99999 15.4142L4.4142 14C4.80472 13.6095 5.43789 13.6095 5.82841 14C6.21894 14.3905 6.21894 15.0237 5.82841 15.4142Z" fill="currentColor"/>
</svg>
`;

const SunFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 10C13.5 11.933 11.933 13.5 10 13.5C8.067 13.5 6.5 11.933 6.5 10C6.5 8.067 8.067 6.5 10 6.5C11.933 6.5 13.5 8.067 13.5 10Z" fill="currentColor"/>
<path d="M0.5 10C0.5 9.44772 0.947715 9 1.5 9H3.5C4.05228 9 4.5 9.44772 4.5 10C4.5 10.5523 4.05228 11 3.5 11H1.5C0.947715 11 0.5 10.5523 0.5 10Z" fill="currentColor"/>
<path d="M15.5 10C15.5 9.44772 15.9477 9 16.5 9H18.5C19.0523 9 19.5 9.44772 19.5 10C19.5 10.5523 19.0523 11 18.5 11H16.5C15.9477 11 15.5 10.5523 15.5 10Z" fill="currentColor"/>
<path d="M15.4142 14L16.8284 15.4142C17.2189 15.8047 17.2189 16.4379 16.8284 16.8284C16.4379 17.2189 15.8047 17.2189 15.4142 16.8284L14 15.4142C13.6095 15.0237 13.6095 14.3905 14 14C14.3905 13.6095 15.0237 13.6095 15.4142 14Z" fill="currentColor"/>
<path d="M2.99999 2.99999C3.39051 2.60946 4.02367 2.60946 4.4142 2.99999L5.82841 4.4142C6.21894 4.80472 6.21894 5.43789 5.82841 5.82841C5.43789 6.21894 4.80472 6.21894 4.4142 5.82841L2.99999 4.4142C2.60946 4.02367 2.60946 3.39051 2.99999 2.99999Z" fill="currentColor"/>
<path d="M10 15.5C10.5523 15.5 11 15.9477 11 16.5V18.5C11 19.0523 10.5523 19.5 10 19.5C9.44772 19.5 9 19.0523 9 18.5V16.5C9 15.9477 9.44772 15.5 10 15.5Z" fill="currentColor"/>
<path d="M10 0.5C10.5523 0.5 11 0.947715 11 1.5V3.5C11 4.05228 10.5523 4.5 10 4.5C9.44772 4.5 9 4.05228 9 3.5V1.5C9 0.947715 9.44772 0.5 10 0.5Z" fill="currentColor"/>
<path d="M16.8284 2.99999C17.2189 3.39051 17.2189 4.02367 16.8284 4.4142L15.4142 5.82841C15.0237 6.21894 14.3905 6.21894 14 5.82841C13.6095 5.43789 13.6095 4.80472 14 4.4142L15.4142 2.99999C15.8047 2.60946 16.4379 2.60946 16.8284 2.99999Z" fill="currentColor"/>
<path d="M5.82841 14C6.21894 14.3905 6.21894 15.0237 5.82841 15.4142L4.4142 16.8284C4.02367 17.2189 3.39051 17.2189 2.99999 16.8284C2.60946 16.4379 2.60946 15.8047 2.99999 15.4142L4.4142 14C4.80472 13.6095 5.43789 13.6095 5.82841 14Z" fill="currentColor"/>
</svg>
`;

const Syringe$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.35354 10.7175C3.37723 11.6938 3.37723 13.2767 4.35354 14.253L5.76776 15.6673C6.74407 16.6436 8.32698 16.6436 9.30329 15.6673L16.2744 8.69611C16.7572 8.21339 17.0215 7.55425 17.006 6.87175L16.9742 5.46465C16.9436 4.11666 15.8497 3.03572 14.5014 3.02138L13.1266 3.00676C12.4543 2.99961 11.8076 3.2635 11.3322 3.73885L4.35354 10.7175ZM14.8602 7.2819L7.88908 14.253C7.69381 14.4483 7.37723 14.4483 7.18197 14.253L5.76776 12.8388C5.57249 12.6436 5.57249 12.327 5.76776 12.1317L12.7464 5.15307C12.8415 5.058 12.9708 5.00522 13.1053 5.00665L14.4801 5.02127C14.7498 5.02414 14.9686 5.24033 14.9747 5.50992L15.0065 6.91703C15.0096 7.05353 14.9568 7.18536 14.8602 7.2819Z" fill="currentColor"/>
<path d="M11.0208 11.6066C11.2161 11.8019 11.2161 12.1185 11.0208 12.3137C10.8256 12.509 10.509 12.509 10.3137 12.3137L8.8995 10.8995C8.70424 10.7042 8.70424 10.3877 8.8995 10.1924C9.09476 9.99713 9.41134 9.99713 9.60661 10.1924L11.0208 11.6066Z" fill="currentColor"/>
<path d="M5.71751 16.9099C6.10804 17.3004 6.10804 17.9336 5.71751 18.3241C5.32699 18.7146 4.69382 18.7146 4.3033 18.3241L1.47487 15.4957C1.08435 15.1052 1.08435 14.472 1.47487 14.0815C1.8654 13.6909 2.49856 13.6909 2.88909 14.0815L5.71751 16.9099Z" fill="currentColor"/>
<path d="M9.38505 16.6709C9.77558 17.0614 9.77558 17.6945 9.38505 18.0851C8.99453 18.4756 8.36137 18.4756 7.97084 18.0851L2.00709 12.1213C1.61656 11.7308 1.61656 11.0976 2.00709 10.7071C2.39761 10.3166 3.03078 10.3166 3.4213 10.7071L9.38505 16.6709Z" fill="currentColor"/>
<path d="M13.1421 9.48528C13.3374 9.68055 13.3374 9.99713 13.1421 10.1924C12.9469 10.3877 12.6303 10.3877 12.435 10.1924L11.0208 8.77818C10.8255 8.58292 10.8255 8.26633 11.0208 8.07107C11.2161 7.87581 11.5327 7.87581 11.7279 8.07107L13.1421 9.48528Z" fill="currentColor"/>
<path d="M5 16.4142L3.58578 15L5 13.5858L6.41421 15L5 16.4142Z" fill="currentColor"/>
<path d="M17.9703 0.970326C18.2632 0.677433 18.7381 0.677433 19.031 0.970326C19.3239 1.26322 19.3239 1.73809 19.031 2.03099L16.031 5.03099C15.7381 5.32388 15.2632 5.32388 14.9703 5.03099C14.6774 4.73809 14.6774 4.26322 14.9703 3.97033L17.9703 0.970326Z" fill="currentColor"/>
</svg>
`;

const TShirt$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_734)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.4481 10.3965L2.99999 10.1199V17C2.99999 18.6569 4.34314 20 5.99999 20H14C15.6568 20 17 18.6569 17 17V10.118L17.5528 10.3944C18.1347 10.6854 18.835 10.352 18.9762 9.71693L19.9762 5.21693C20.0503 4.88317 19.9489 4.53465 19.7071 4.29289L17.2929 1.87868C16.7303 1.31607 15.9672 1 15.1716 1H13C12.5133 1 12.0973 1.35042 12.0145 1.83004C11.7469 3.3817 11.1284 4 9.99902 4C8.86986 4 8.25211 3.38205 7.98555 1.83066C7.90309 1.35075 7.48694 1 6.99999 1H4.82884C4.03282 1 3.26943 1.31637 2.70676 1.87945L0.294793 4.29315C0.0533553 4.53476 -0.0480615 4.88289 0.0258427 5.21637L1.02368 9.71889C1.16458 10.3547 1.86593 10.6883 2.4481 10.3965ZM4.12148 3.29315C4.30904 3.10546 4.5635 3 4.82884 3H6.20588C6.77637 4.92818 8.07723 6 9.99902 6C11.9208 6 13.2221 4.92825 13.7936 3H15.1716C15.4368 3 15.6911 3.10536 15.8787 3.29289L17.9047 5.31894L17.3016 8.03279L16.4472 7.60557C15.7823 7.27312 15 7.75662 15 8.5V17C15 17.5523 14.5523 18 14 18H5.99999C5.44771 18 4.99999 17.5523 4.99999 17V8.5C4.99999 7.75618 4.21684 7.27271 3.55188 7.60602L2.69873 8.03367L2.09711 5.31898L4.12148 3.29315Z" fill="currentColor"/>
<path d="M11.5 10.5C10.9477 10.5 10.5 10.0523 10.5 9.5C10.5 8.94772 10.9477 8.5 11.5 8.5H13.5C14.0523 8.5 14.5 8.94772 14.5 9.5C14.5 10.0523 14.0523 10.5 13.5 10.5H11.5Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_0_734">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Taxi$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.17116 3C5.024 3 4.02404 3.78074 3.74581 4.89366L2.68528 9.13576C1.70458 9.47364 1 10.4045 1 11.5V14.5C1 15.8807 2.11929 17 3.5 17H16.5C17.8807 17 19 15.8807 19 14.5V11.5C19 10.4045 18.2954 9.47364 17.3147 9.13576L16.2542 4.89366C15.976 3.78074 14.976 3 13.8288 3H6.17116ZM3.5 11C3.95887 11 4.35885 10.6877 4.47014 10.2425L5.68609 5.37873C5.74174 5.15615 5.94173 5 6.17116 5H10.0007H13.8288C14.0583 5 14.2583 5.15615 14.3139 5.37873L15.5299 10.2425C15.6411 10.6877 16.0411 11 16.5 11C16.7761 11 17 11.2239 17 11.5V14.5C17 14.7761 16.7761 15 16.5 15H3.5C3.22386 15 3 14.7761 3 14.5V11.5C3 11.2239 3.22386 11 3.5 11Z" fill="currentColor"/>
<path d="M16.5 13C16.5 13.8284 15.8284 14.5 15 14.5C14.1716 14.5 13.5 13.8284 13.5 13C13.5 12.1716 14.1716 11.5 15 11.5C15.8284 11.5 16.5 12.1716 16.5 13Z" fill="currentColor"/>
<path d="M6.5 13C6.5 13.8284 5.82843 14.5 5 14.5C4.17157 14.5 3.5 13.8284 3.5 13C3.5 12.1716 4.17157 11.5 5 11.5C5.82843 11.5 6.5 12.1716 6.5 13Z" fill="currentColor"/>
<path d="M4 15.5C4.82843 15.5 5.5 16.1716 5.5 17V18C5.5 18.8284 4.82843 19.5 4 19.5C3.17157 19.5 2.5 18.8284 2.5 18V17C2.5 16.1716 3.17157 15.5 4 15.5Z" fill="currentColor"/>
<path d="M16 15.5C16.8284 15.5 17.5 16.1716 17.5 17V18C17.5 18.8284 16.8284 19.5 16 19.5C15.1716 19.5 14.5 18.8284 14.5 18V17C14.5 16.1716 15.1716 15.5 16 15.5Z" fill="currentColor"/>
<path d="M10 1C11.1046 1 12 1.89543 12 3C12 4.10457 11.1046 5 10 5C8.89543 5 8 4.10457 8 3C8 1.89543 8.89543 1 10 1Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1503 7.08052C13.9525 6.15858 13.1377 5.5 12.1948 5.5H7.80491C6.862 5.5 6.04716 6.15858 5.8494 7.08052L5.42037 9.08052C5.3908 9.21839 5.37589 9.359 5.37589 9.5C5.37589 10.6046 6.27132 11.5 7.37589 11.5H12.6238C12.7648 11.5 12.9054 11.4851 13.0433 11.4555C14.1233 11.2238 14.811 10.1605 14.5793 9.08052L14.1503 7.08052ZM12.6238 9.5H7.37589L7.80491 7.5H12.1948L12.6238 9.5Z" fill="currentColor"/>
</svg>
`;

const Television$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 8L2 15C2 16.6569 3.34315 18 5 18H15C16.6569 18 18 16.6569 18 15V8C18 6.34315 16.6569 5 15 5H5C3.34315 5 2 6.34315 2 8ZM5 16C4.44772 16 4 15.5523 4 15V8C4 7.44771 4.44772 7 5 7H15C15.5523 7 16 7.44771 16 8V15C16 15.5523 15.5523 16 15 16H5Z" fill="currentColor"/>
<path d="M11.2809 5.62469C10.9359 6.05596 10.3066 6.12588 9.87531 5.78087C9.44405 5.43586 9.37413 4.80657 9.71914 4.3753L11.7191 1.8753C12.0641 1.44404 12.6934 1.37412 13.1247 1.71913C13.556 2.06414 13.6259 2.69343 13.2809 3.12469L11.2809 5.62469Z" fill="currentColor"/>
<path d="M8.71912 5.62469C9.06413 6.05596 9.69343 6.12588 10.1247 5.78087C10.556 5.43586 10.6259 4.80657 10.2809 4.3753L8.28086 1.8753C7.93585 1.44404 7.30656 1.37412 6.8753 1.71913C6.44404 2.06414 6.37412 2.69343 6.71912 3.12469L8.71912 5.62469Z" fill="currentColor"/>
</svg>
`;

const TextBubble$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="7" cy="9" r="1" fill="currentColor"/>
<circle cx="10" cy="9" r="1" fill="currentColor"/>
<circle cx="13" cy="9" r="1" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 6V12.1024C1 13.7138 2.27046 15.0285 3.86436 15.0994C4.22426 16.3232 4.75773 17 5.70388 17C6.46059 17 7.38816 16.3911 8.83458 15.1024H16C17.6569 15.1024 19 13.7593 19 12.1024V6C19 4.34315 17.6569 3 16 3H4C2.34315 3 1 4.34315 1 6ZM8.06421 13.1024L7.77816 13.3625C6.91423 14.1477 6.23474 14.6664 5.90912 14.8838C5.81363 14.6587 5.71621 14.3271 5.62633 13.8976L5.45993 13.1024H4C3.44772 13.1024 3 12.6547 3 12.1024V6C3 5.44772 3.44772 5 4 5H16C16.5523 5 17 5.44772 17 6V12.1024C17 12.6547 16.5523 13.1024 16 13.1024H8.06421Z" fill="currentColor"/>
</svg>
`;

const ThumbsDown$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.8107 12.1077C17.363 12.1077 17.8107 11.66 17.8107 11.1077V9.10773V5.60773C17.8107 5.05544 17.363 4.60773 16.8107 4.60773H14.3107C13.7584 4.60773 13.3107 5.05544 13.3107 5.60773V11.1077C13.3107 11.66 13.7584 12.1077 14.3107 12.1077H16.8107ZM15.5607 6.10773C15.0084 6.10773 14.5607 6.55544 14.5607 7.10773C14.5607 7.66001 15.0084 8.10773 15.5607 8.10773C16.113 8.10773 16.5607 7.66001 16.5607 7.10773C16.5607 6.55544 16.113 6.10773 15.5607 6.10773Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.82937 15.4429C8.91585 15.5294 9.05999 15.496 9.10299 15.3867L9.29719 14.2216C9.50109 12.9982 10.1373 11.8957 11.08 11.1085L11.08 6.42753L6.88389 5.58831C6.85816 5.58316 6.83285 5.57707 6.808 5.57008L6.808 5.57011C6.19161 5.39591 5.53451 5.65219 5.19882 6.19771L4.9814 6.55105L4.47473 7.88886C4.13143 8.79532 4.13826 9.79671 4.49301 10.6978L4.80359 11.3189C5.04451 11.8008 5.53616 12.1057 6.07457 12.1077L6.07999 12.1077H7.57999C7.62215 12.1077 7.66371 12.1103 7.7045 12.1154C7.82413 12.1002 7.94855 12.1066 8.07257 12.1376C8.60836 12.2716 8.9341 12.8146 8.80013 13.3503L8.65161 13.9443C8.60687 14.1233 8.58737 14.3076 8.59368 14.4919L8.60773 14.9022C8.61429 15.0939 8.68558 15.2775 8.80962 15.4232L8.82937 15.4429ZM12.2581 4.62355L7.30993 3.63391C5.84497 3.23971 4.29234 3.85458 3.49548 5.14956L3.23993 5.56485C3.21619 5.60166 3.19466 5.64039 3.17558 5.68093C3.16162 5.71041 3.14923 5.74031 3.13837 5.77052L2.60437 7.18051C2.07955 8.56625 2.09556 10.0986 2.64896 11.4729C2.65983 11.5005 2.67201 11.5279 2.68554 11.555L3.01474 12.2134C3.59524 13.3744 4.78189 14.1078 6.07994 14.1078V14.1077H6.07999H6.60513C6.59313 14.2581 6.58968 14.4092 6.59486 14.5603L6.6089 14.9706C6.63178 15.639 6.88907 16.2779 7.3357 16.7756C7.34768 16.789 7.36007 16.802 7.37289 16.8149L7.41515 16.8571C8.60633 18.0483 10.6416 17.4846 11.0501 15.8503L11.0501 15.8503C11.0565 15.8247 11.0619 15.7986 11.0663 15.7721L11.27 14.5504C11.4129 13.6928 11.9027 12.9321 12.6239 12.447C12.8984 12.2688 13.08 11.9594 13.08 11.6077L13.08 5.62726C13.0819 5.53328 13.0705 5.44113 13.0473 5.35301C12.9721 5.06864 12.7734 4.82629 12.5004 4.70012C12.4243 4.66483 12.3431 4.63882 12.2581 4.62355Z" fill="currentColor"/>
</svg>
`;

const ThumbsUp$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 8C2.94772 8 2.5 8.44772 2.5 9V11V14.5C2.5 15.0523 2.94772 15.5 3.5 15.5H6C6.55228 15.5 7 15.0523 7 14.5V9C7 8.44772 6.55228 8 6 8H3.5ZM4.75 14C5.30228 14 5.75 13.5523 5.75 13C5.75 12.4477 5.30228 12 4.75 12C4.19772 12 3.75 12.4477 3.75 13C3.75 13.5523 4.19772 14 4.75 14Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4813 4.66482C11.3948 4.57833 11.2507 4.61173 11.2077 4.72103L11.0135 5.88612C10.8096 7.10949 10.1734 8.21206 9.23071 8.99921V13.6802L13.4268 14.5194C13.4546 14.525 13.4819 14.5316 13.5086 14.5393C14.1233 14.7102 14.7773 14.4538 15.1119 13.9101L15.3292 13.5568L15.836 12.2189C16.1793 11.3124 16.1724 10.311 15.8177 9.40995L15.5071 8.78878C15.2662 8.30694 14.7745 8.00199 14.2361 7.99999L14.2307 8H12.7307C12.6885 8 12.647 7.99739 12.6062 7.99232C12.4866 8.00748 12.3622 8.0011 12.2381 7.97009C11.7023 7.83612 11.3766 7.29317 11.5106 6.75738L11.6591 6.1634C11.7038 5.98448 11.7233 5.80018 11.717 5.61585L11.703 5.2055C11.6964 5.01383 11.6251 4.83027 11.5011 4.68456L11.4813 4.66482ZM8.05258 15.4842L12.9999 16.4736C14.4651 16.8683 16.0182 16.2535 16.8152 14.9582L17.0716 14.5416C17.0931 14.5081 17.1128 14.4731 17.1305 14.4365C17.1465 14.4035 17.1606 14.37 17.1727 14.3361L17.7063 12.9272C18.2311 11.5415 18.2151 10.0091 17.6617 8.6348C17.6509 8.60718 17.6387 8.57981 17.6252 8.55275L17.296 7.89436C16.7155 6.73335 15.5288 5.99996 14.2308 5.99998V6H14.2307H13.7056C13.7176 5.84964 13.721 5.69853 13.7158 5.54743L13.7018 5.13708C13.6789 4.46875 13.4216 3.82978 12.975 3.33208C12.963 3.31876 12.9506 3.30568 12.9378 3.29287L12.8955 3.2506C11.7044 2.05943 9.66913 2.62316 9.26056 4.25744L9.26057 4.25744C9.25419 4.28306 9.24877 4.30913 9.24436 4.33562L9.04073 5.5573C8.89778 6.41494 8.40796 7.17565 7.68682 7.6607C7.41229 7.83897 7.23071 8.14828 7.23071 8.5V14.4805C7.22877 14.5744 7.24017 14.6666 7.26344 14.7547C7.33856 15.0391 7.53733 15.2814 7.81032 15.4076C7.88637 15.4429 7.96761 15.4689 8.05258 15.4842Z" fill="currentColor"/>
</svg>
`;

const Times$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.17158 14.2426C6.78105 14.6332 6.14789 14.6332 5.75736 14.2426C5.36684 13.8521 5.36684 13.2189 5.75736 12.8284L12.8284 5.75735C13.219 5.36682 13.8521 5.36682 14.2426 5.75735C14.6332 6.14787 14.6332 6.78104 14.2426 7.17156L7.17158 14.2426Z" fill="currentColor"/>
<path d="M5.75736 7.17152C5.36684 6.781 5.36684 6.14783 5.75736 5.75731C6.14789 5.36679 6.78105 5.36679 7.17158 5.75731L14.2426 12.8284C14.6332 13.2189 14.6332 13.8521 14.2426 14.2426C13.8521 14.6331 13.219 14.6331 12.8284 14.2426L5.75736 7.17152Z" fill="currentColor"/>
</svg>
`;

const Tool$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5617 13.5712L12.2594 7.2522C12.1884 7.16762 12.1136 7.08658 12.0352 7.00933C12.2547 5.6013 11.8405 4.10669 10.8614 2.93989C9.55326 1.38087 7.50228 0.72522 5.67031 1.2589C4.97701 1.46088 4.71979 2.30861 5.18396 2.86178L6.92543 4.93718L6.34416 5.42492L4.60269 3.34953C4.13852 2.79635 3.259 2.90246 2.93971 3.55015C2.09601 5.26161 2.38555 7.39529 3.69372 8.95431C4.65968 10.1055 6.03568 10.7711 7.44204 10.8155C7.51041 10.9169 7.58419 11.0149 7.66312 11.1089L12.9654 17.4279C14.0304 18.6972 15.9227 18.8627 17.1919 17.7977C18.4611 16.7327 18.6267 14.8404 17.5617 13.5712ZM5.22581 7.66873C4.90858 7.29067 4.68922 6.86235 4.56962 6.42156L4.81207 6.7105C5.52207 7.55665 6.78358 7.66702 7.62973 6.95701L8.211 6.46927C9.05715 5.75927 9.16752 4.49776 8.45752 3.65161L8.21507 3.36267C8.62839 3.557 9.01211 3.84739 9.32935 4.22546C10.034 5.06518 10.261 6.15832 9.96754 7.09453C9.83235 7.52578 10.0032 7.9941 10.3843 8.23698C10.5132 8.31907 10.6288 8.42045 10.7273 8.53778L16.0296 14.8568C16.3846 15.2799 16.3294 15.9106 15.9063 16.2656C15.4832 16.6206 14.8525 16.5654 14.4975 16.1424L9.19521 9.82335C9.09345 9.70209 9.01169 9.56568 8.95274 9.41921C8.7843 9.00068 8.35647 8.74677 7.90839 8.79941C6.94383 8.91271 5.92226 8.49873 5.22581 7.66873Z" fill="currentColor"/>
</svg>
`;

const Train$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_2681)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 5C17.5 2.79086 15.7092 1 13.5 1L6.5 1C4.29086 1 2.5 2.79086 2.5 5V11.9894C2.5 13.7416 3.64042 15.2898 5.31383 15.8095C6.87197 16.2933 8.43504 16.5359 10 16.5359C11.565 16.5359 13.128 16.2933 14.6862 15.8095C16.3596 15.2898 17.5 13.7416 17.5 11.9894L17.5 5ZM4.5 11.9894V5C4.5 3.89543 5.39543 3 6.5 3L13.5 3C14.6046 3 15.5 3.89543 15.5 5L15.5 11.9894C15.5 12.8655 14.9298 13.6396 14.0931 13.8994C12.7248 14.3243 11.3615 14.5359 10 14.5359C8.63854 14.5359 7.2752 14.3243 5.90691 13.8994C5.07021 13.6396 4.5 12.8655 4.5 11.9894Z" fill="currentColor"/>
<path d="M8 12C8 12.8284 7.32843 13.5 6.5 13.5C5.67157 13.5 5 12.8284 5 12C5 11.1716 5.67157 10.5 6.5 10.5C7.32843 10.5 8 11.1716 8 12Z" fill="currentColor"/>
<path d="M15 12C15 12.8284 14.3284 13.5 13.5 13.5C12.6716 13.5 12 12.8284 12 12C12 11.1716 12.6716 10.5 13.5 10.5C14.3284 10.5 15 11.1716 15 12Z" fill="currentColor"/>
<path d="M4.58137 15.147C4.79717 14.6386 5.38423 14.4014 5.89261 14.6172C6.40099 14.833 6.63818 15.4201 6.42238 15.9285L4.94741 19.4033C4.73161 19.9117 4.14455 20.1489 3.63617 19.9331C3.12779 19.7173 2.8906 19.1302 3.1064 18.6218L4.58137 15.147Z" fill="currentColor"/>
<path d="M15.4678 14.6528C15.276 14.1349 14.7007 13.8705 14.1828 14.0623C13.6648 14.254 13.4004 14.8294 13.5922 15.3473L15.0622 19.3173C15.254 19.8352 15.8293 20.0996 16.3472 19.9078C16.8652 19.716 17.1295 19.1407 16.9378 18.6228L15.4678 14.6528Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 6C15 4.61929 13.8807 3.5 12.5 3.5L7.5 3.5C6.11929 3.5 5 4.61929 5 6V7.53465C5 8.75174 5.87647 9.79198 7.07592 9.99842C8.04987 10.1661 9.02477 10.25 10 10.25C10.9752 10.25 11.9502 10.1661 12.9242 9.99841C14.1236 9.79192 15 8.7517 15 7.53464L15 6ZM7 7.53465V6C7 5.72386 7.22386 5.5 7.5 5.5L12.5 5.5C12.7762 5.5 13 5.72386 13 6L13 7.53464C13 7.77805 12.8247 7.9861 12.5848 8.0274C11.7225 8.17586 10.8611 8.25 10 8.25C9.13892 8.25 8.27752 8.17586 7.4152 8.02741C7.17529 7.98611 7 7.77808 7 7.53465Z" fill="currentColor"/>
<path d="M4.75 18.25V16.75H15.2514V18.25H4.75Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_0_2681">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Trash$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.937 4.5H11.9362H8.0632C8.02115 4.33649 8.00031 4.16864 8.00031 4.00049C8.00031 2.89728 8.8974 1.99976 10.0001 1.99976C11.1028 1.99976 11.9999 2.89728 11.9999 4.00049C11.9999 4.16937 11.9788 4.33716 11.9372 4.49927L11.937 4.5Z" fill="currentColor"/>
<path d="M4.5 5.5C3.94772 5.5 3.5 5.05228 3.5 4.5C3.5 3.94772 3.94772 3.5 4.5 3.5H15.5C16.0523 3.5 16.5 3.94772 16.5 4.5C16.5 5.05228 16.0523 5.5 15.5 5.5H4.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 18.5C15.0523 18.5 15.5 18.0523 15.5 17.5V7C15.5 6.44772 15.0523 6 14.5 6H5.5C4.94772 6 4.5 6.44772 4.5 7V17.5C4.5 18.0523 4.94772 18.5 5.5 18.5H14.5ZM12.5 8.5C12.5 8.22386 12.7239 8 13 8C13.2761 8 13.5 8.22386 13.5 8.5V15.5C13.5 15.7761 13.2761 16 13 16C12.7239 16 12.5 15.7761 12.5 15.5V8.5ZM10 8C9.72386 8 9.5 8.22386 9.5 8.5V15.5C9.5 15.7761 9.72386 16 10 16C10.2761 16 10.5 15.7761 10.5 15.5V8.5C10.5 8.22386 10.2761 8 10 8ZM6.5 8.5C6.5 8.22386 6.72386 8 7 8C7.27614 8 7.5 8.22386 7.5 8.5V15.5C7.5 15.7761 7.27614 16 7 16C6.72386 16 6.5 15.7761 6.5 15.5V8.5Z" fill="currentColor"/>
</svg>
`;

const TriangleDown$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.15199 7.53L9.15199 15.53C9.54366 16.1567 10.4563 16.1567 10.848 15.53L15.848 7.53C16.2643 6.86395 15.7854 6 15 6L4.99999 6C4.21455 6 3.73571 6.86395 4.15199 7.53ZM13.1957 8L9.99999 13.1132L6.80424 8H13.1957Z" fill="currentColor"/>
</svg>
`;

const TriangleDownFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.72805 15.795L3.72805 7.795C3.10363 6.79593 3.82189 5.5 5.00004 5.5L15 5.5C16.1782 5.5 16.8965 6.79593 16.272 7.795L11.272 15.795C10.6845 16.735 9.31555 16.735 8.72805 15.795Z" fill="currentColor"/>
</svg>
`;

const TriangleLeft$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.47 4.15199L4.47 9.15199C3.84333 9.54366 3.84333 10.4563 4.47 10.848L12.47 15.848C13.136 16.2643 14 15.7854 14 15V4.99999C14 4.21455 13.136 3.73571 12.47 4.15199ZM12 6.80424V13.1957L6.8868 9.99999L12 6.80424Z" fill="currentColor"/>
</svg>
`;

const TriangleLeftFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.205 8.72805L12.205 3.72805C13.2041 3.10363 14.5 3.82189 14.5 5.00004V15C14.5 16.1782 13.2041 16.8965 12.205 16.272L4.205 11.272C3.265 10.6845 3.265 9.31555 4.205 8.72805Z" fill="currentColor"/>
</svg>
`;

const TriangleRight$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.53 15.848L15.53 10.848C16.1567 10.4563 16.1567 9.54368 15.53 9.15201L7.53 4.15201C6.86395 3.73573 6 4.21458 6 5.00001L6 15C6 15.7854 6.86395 16.2643 7.53 15.848ZM8 13.1958L8 6.80426L13.1132 10L8 13.1958Z" fill="currentColor"/>
</svg>
`;

const TriangleRightFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.795 11.272L7.795 16.272C6.79593 16.8964 5.5 16.1782 5.5 15L5.5 5.00002C5.5 3.82186 6.79593 3.1036 7.795 3.72802L15.795 8.72802C16.735 9.31552 16.735 10.6845 15.795 11.272Z" fill="currentColor"/>
</svg>
`;

const TriangleUp$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.848 13.47L10.848 5.47C10.4563 4.84333 9.54368 4.84333 9.15201 5.47L4.15201 13.47C3.73573 14.136 4.21458 15 5.00001 15H15C15.7854 15 16.2643 14.136 15.848 13.47ZM6.80426 13L10 7.8868L13.1958 13H6.80426Z" fill="currentColor"/>
</svg>
`;

const TriangleUpFilled = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.272 5.205L16.272 13.205C16.8964 14.2041 16.1782 15.5 15 15.5H5.00002C3.82186 15.5 3.1036 14.2041 3.72802 13.205L8.72802 5.205C9.31552 4.265 10.6845 4.265 11.272 5.205Z" fill="currentColor"/>
</svg>
`;

const Trophy$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6753 4.5H6.22664L6.22664 4.5L6.86235 8.91807C8.08378 11.5412 11.8181 11.5412 13.0395 8.91807L13.6753 4.5ZM6.22664 2.5C5.00872 2.5 4.07357 3.57935 4.24703 4.78485L4.88683 9.23134C4.91129 9.40134 4.95992 9.56698 5.03125 9.72322C6.95602 13.9395 12.9459 13.9395 14.8707 9.72322C14.942 9.56698 14.9906 9.40134 15.0151 9.23134L15.6549 4.78484C15.8283 3.57935 14.8932 2.5 13.6753 2.5H6.22664Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.95093 15.5V12.5H10.9509V15.5H8.95093Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.0584 16.5C9.12351 15.5072 10.7785 15.5072 11.8436 16.5H8.0584ZM12.9673 15.5C11.2988 13.8405 8.60316 13.8405 6.93464 15.5L6.13935 16.291C5.50675 16.9201 5.95232 18 6.84453 18H13.0574C13.9496 18 14.3952 16.9202 13.7626 16.291L12.9673 15.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.42096 5.5C5.42096 6.05228 4.97324 6.5 4.42096 6.5H2.41006C1.85778 6.5 1.41006 6.05228 1.41006 5.5C1.41006 4.94772 1.85778 4.5 2.41006 4.5H4.42096C4.97324 4.5 5.42096 4.94772 5.42096 5.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.26823 4.51246C2.81637 4.43516 3.32423 4.81463 3.40257 5.36004L3.47274 5.84855C3.66836 7.21045 4.72871 8.29005 6.09281 8.51617L5.76549 10.4838C3.53835 10.1147 1.80713 8.35204 1.48775 6.12849L1.41758 5.63997C1.33924 5.09456 1.72009 4.58976 2.26823 4.51246Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.579 5.5C14.579 6.05228 15.0268 6.5 15.579 6.5H17.5899C18.1422 6.5 18.5899 6.05228 18.5899 5.5C18.5899 4.94772 18.1422 4.5 17.5899 4.5H15.579C15.0268 4.5 14.579 4.94772 14.579 5.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.7318 4.51246C17.1836 4.43516 16.6758 4.81463 16.5974 5.36004L16.5273 5.84855C16.3316 7.21045 15.2713 8.29005 13.9072 8.51617L14.2345 10.4838C16.4616 10.1147 18.1929 8.35204 18.5123 6.12849L18.5824 5.63997C18.6608 5.09456 18.2799 4.58976 17.7318 4.51246Z" fill="currentColor"/>
</svg>
`;

const Truck$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 18.75C6.25736 18.75 5.25 17.7426 5.25 16.5C5.25 15.2574 6.25736 14.25 7.5 14.25C8.74264 14.25 9.75 15.2574 9.75 16.5C9.75 17.7426 8.74264 18.75 7.5 18.75Z" fill="currentColor"/>
<path d="M16.5 18.75C15.2574 18.75 14.25 17.7426 14.25 16.5C14.25 15.2574 15.2574 14.25 16.5 14.25C17.7426 14.25 18.75 15.2574 18.75 16.5C18.75 17.7426 17.7426 18.75 16.5 18.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 4.5H8C6.89543 4.5 6 5.39543 6 6.5V14C6 15.1046 6.89543 16 8 16H18C19.1046 16 20 15.1046 20 14V6.5C20 5.39543 19.1046 4.5 18 4.5ZM8 14V6.5H18V14H8Z" fill="currentColor"/>
<path d="M10.25 8.75C9.97386 8.75 9.75 8.52614 9.75 8.25C9.75 7.97386 9.97386 7.75 10.25 7.75H15.75C16.0261 7.75 16.25 7.97386 16.25 8.25C16.25 8.52614 16.0261 8.75 15.75 8.75H10.25Z" fill="currentColor"/>
<path d="M10.25 10.75C9.97386 10.75 9.75 10.5261 9.75 10.25C9.75 9.97386 9.97386 9.75 10.25 9.75H15.75C16.0261 9.75 16.25 9.97386 16.25 10.25C16.25 10.5261 16.0261 10.75 15.75 10.75H10.25Z" fill="currentColor"/>
<path d="M10.25 12.75C9.97386 12.75 9.75 12.5261 9.75 12.25C9.75 11.9739 9.97386 11.75 10.25 11.75H15.75C16.0261 11.75 16.25 11.9739 16.25 12.25C16.25 12.5261 16.0261 12.75 15.75 12.75H10.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7.5H2.73605C1.8463 7.5 1.06354 8.08778 0.815401 8.94223L0 11.75V14C0 15.1046 0.89543 16 2 16H6C7.10457 16 8 15.1046 8 14V9.5C8 8.39543 7.10457 7.5 6 7.5ZM2 14V12.0345L2.73605 9.5H6V14H2Z" fill="currentColor"/>
<path d="M3.29046 10.1H5C5.27614 10.1 5.5 10.3238 5.5 10.6V12.6C5.5 12.8761 5.27614 13.1 5 13.1H3C2.72386 13.1 2.5 12.8761 2.5 12.6V11.75L2.51522 11.6276L2.80568 10.4775C2.86175 10.2555 3.06147 10.1 3.29046 10.1Z" fill="currentColor"/>
</svg>
`;

const Umbrella$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3863 17.3581C11.515 17.3581 11.6111 17.1982 11.6111 16.3198C11.6111 15.7676 12.0588 15.3198 12.6111 15.3198C13.1634 15.3198 13.6111 15.7676 13.6111 16.3198C13.6111 18.1592 12.8907 19.3581 11.3863 19.3581C10.0411 19.3581 9.17227 18.507 9.00701 17.1182L9 17V10.5C9 9.94772 9.44772 9.5 10 9.5C10.5523 9.5 11 9.94772 11 10.5V16.9379C11.0488 17.3087 11.1119 17.3581 11.3863 17.3581Z" fill="currentColor"/>
<path d="M9 1.5C9 0.947715 9.44772 0.5 10 0.5C10.5523 0.5 11 0.947715 11 1.5V3C11 3.55228 10.5523 4 10 4C9.44772 4 9 3.55228 9 3L9 1.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.66803 11.2348C5.70837 11.1785 5.74282 11.1304 5.75566 11.1127C5.91724 10.8896 6.04642 10.7345 6.12513 10.6432C6.1774 10.6826 6.24691 10.737 6.34702 10.8162C7.06596 11.3853 7.47315 11.6014 8.16417 11.4864C8.56768 11.4193 8.88935 11.2531 9.3036 10.964C9.36217 10.9231 9.41133 10.888 9.50965 10.817C9.851 10.571 9.98417 10.5004 10.0162 10.4999C10.017 10.4999 10.1455 10.5685 10.4822 10.8134L10.5664 10.8745C11.0756 11.2426 11.3943 11.4194 11.8497 11.4886C12.543 11.5941 12.9334 11.3718 13.6611 10.7686C13.755 10.6908 13.8227 10.6353 13.875 10.5938C13.8792 10.5992 13.8837 10.6048 13.8882 10.6105C13.9659 10.7084 14.0873 10.8613 14.2344 11.0701C14.2391 11.0768 14.2556 11.1004 14.2783 11.1329C14.342 11.224 14.4546 11.3853 14.4962 11.4435C14.6062 11.5979 14.6973 11.7186 14.7894 11.8282C15.1433 12.2496 15.4778 12.4979 15.9962 12.4999C17.2043 12.5045 18 11.6884 18 10.5C18 6.00945 14.5737 2.5 10.1135 2.5C5.61932 2.5 2 6.04373 2 10.5C2 11.691 2.80684 12.4653 3.97058 12.4996C4.49773 12.5151 4.84171 12.2702 5.20109 11.8524C5.29327 11.7452 5.38393 11.6278 5.49488 11.4756C5.52617 11.4327 5.60443 11.3235 5.66803 11.2348ZM4.0123 10.1117C4.21305 6.95433 6.84728 4.5 10.1135 4.5C13.3213 4.5 15.7905 6.89462 15.9873 10.0869L15.8695 9.91849C15.2637 9.05819 14.8777 8.65893 14.2005 8.52031C13.7705 8.43229 13.384 8.53828 13.0099 8.76164C12.8134 8.879 12.7042 8.96398 12.3847 9.22882C12.2299 9.35714 12.1385 9.42855 12.0688 9.47431C12.0017 9.43641 11.8947 9.36694 11.7382 9.25373L11.6585 9.19592C10.9452 8.67711 10.5954 8.49025 9.98384 8.50013C9.38495 8.50981 9.02693 8.69953 8.34016 9.19458C8.2447 9.26343 8.20591 9.29119 8.15893 9.32398C8.04542 9.40321 7.96278 9.45402 7.90806 9.48298C7.83841 9.4411 7.74687 9.37356 7.58824 9.248C7.26436 8.99166 7.16224 8.91568 6.96646 8.80468C6.59508 8.59412 6.21204 8.49791 5.79041 8.58829C5.12256 8.73144 4.72218 9.13005 4.13588 9.93956C4.11944 9.96226 4.07861 10.0192 4.03366 10.0819L4.0123 10.1117Z" fill="currentColor"/>
</svg>
`;

const Watch$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.5C8.067 6.5 6.5 8.067 6.5 10C6.5 11.933 8.067 13.5 10 13.5C11.933 13.5 13.5 11.933 13.5 10C13.5 8.067 11.933 6.5 10 6.5ZM4.5 10C4.5 6.96243 6.96243 4.5 10 4.5C13.0376 4.5 15.5 6.96243 15.5 10C15.5 13.0376 13.0376 15.5 10 15.5C6.96243 15.5 4.5 13.0376 4.5 10Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 7.75C10.4142 7.75 10.75 8.08579 10.75 8.5V10C10.75 10.4142 10.4142 10.75 10 10.75C9.58579 10.75 9.25 10.4142 9.25 10V8.5C9.25 8.08579 9.58579 7.75 10 7.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.25 10C12.25 10.4142 11.9142 10.75 11.5 10.75H10C9.58579 10.75 9.25 10.4142 9.25 10C9.25 9.58579 9.58579 9.25 10 9.25H11.5C11.9142 9.25 12.25 9.58579 12.25 10Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 2.5C7.5 1.94772 7.94772 1.5 8.5 1.5H11.5C12.0523 1.5 12.5 1.94772 12.5 2.5C12.5 3.05228 12.0523 3.5 11.5 3.5H8.5C7.94772 3.5 7.5 3.05228 7.5 2.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.77472 1.53849C9.30575 1.69021 9.61325 2.2437 9.46152 2.77473L8.46152 6.27473C8.3098 6.80577 7.75631 7.11326 7.22528 6.96154C6.69424 6.80981 6.38675 6.25633 6.53847 5.72529L7.53847 2.22529C7.6902 1.69426 8.24368 1.38677 8.77472 1.53849Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.77472 18.4615C9.30575 18.3098 9.61325 17.7563 9.46152 17.2253L8.46152 13.7253C8.3098 13.1942 7.75631 12.8867 7.22528 13.0385C6.69424 13.1902 6.38675 13.7437 6.53847 14.2747L7.53847 17.7747C7.6902 18.3057 8.24368 18.6132 8.77472 18.4615Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2253 18.4615C10.6942 18.3098 10.3868 17.7563 10.5385 17.2253L11.5385 13.7253C11.6902 13.1942 12.2437 12.8867 12.7747 13.0385C13.3058 13.1902 13.6133 13.7437 13.4615 14.2747L12.4615 17.7747C12.3098 18.3057 11.7563 18.6132 11.2253 18.4615Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2253 1.53849C10.6942 1.69021 10.3868 2.2437 10.5385 2.77473L11.5385 6.27473C11.6902 6.80577 12.2437 7.11326 12.7747 6.96154C13.3058 6.80981 13.6133 6.25633 13.4615 5.72529L12.4615 2.22529C12.3098 1.69426 11.7563 1.38677 11.2253 1.53849Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 17.5C7.5 16.9477 7.94772 16.5 8.5 16.5H11.5C12.0523 16.5 12.5 16.9477 12.5 17.5C12.5 18.0523 12.0523 18.5 11.5 18.5H8.5C7.94772 18.5 7.5 18.0523 7.5 17.5Z" fill="currentColor"/>
</svg>
`;

const WaterDrop$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1210_972)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0246 4.40211C12.6555 4.21159 12.5566 3.96243 12.5853 3.68921C12.6118 3.43679 12.7472 3.16384 12.8793 2.89762C12.9035 2.84894 12.9275 2.80048 12.9508 2.75241C13.1688 2.30174 13.3165 1.88554 12.828 1.64128C12.4889 1.67875 12.1581 1.72751 11.8358 1.78652C11.6087 1.82811 11.3857 1.87479 11.167 1.92619C11.1525 1.92961 11.1379 1.93306 11.1234 1.93652C7.00751 2.91817 4.39166 5.57417 3.41378 7.46836C1.60656 10.969 2.97937 15.2719 6.48004 17.0792C9.98071 18.8864 14.2836 17.5136 16.0908 14.0129C17.8981 10.5122 16.5253 6.20933 13.0246 4.40211ZM10.6085 4.16232C7.66402 5.14998 5.84596 7.117 5.19094 8.38582C3.89041 10.905 4.87832 14.0015 7.3975 15.302C9.91668 16.6025 13.0132 15.6146 14.3137 13.0954C15.6142 10.5763 14.6263 7.47979 12.1071 6.17926C11.7102 5.97432 11.2914 5.65969 10.9857 5.17924C10.7717 4.84304 10.6568 4.49408 10.6085 4.16232Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.45759 10.1833C7.55826 9.64401 7.20519 9.1235 6.6657 9.01843C6.1236 8.91286 5.59856 9.26673 5.49298 9.80883L6.47454 9.99999C5.49298 9.80883 5.49304 9.80855 5.49298 9.80883L5.49252 9.81121L5.492 9.81394L5.49079 9.8204L5.48774 9.8373C5.48546 9.8503 5.48271 9.86677 5.47967 9.88646C5.47359 9.92578 5.46633 9.97828 5.45946 10.0419C5.44581 10.1685 5.43333 10.343 5.43583 10.5483C5.44071 10.9485 5.50303 11.521 5.77236 12.0895C6.04052 12.6555 6.43851 13.0639 6.74266 13.3205C6.89836 13.4518 7.0398 13.552 7.14544 13.6212C7.19854 13.656 7.24339 13.6835 7.27747 13.7036C7.29453 13.7137 7.30897 13.722 7.32046 13.7284L7.3355 13.7368L7.34131 13.74L7.34378 13.7413L7.3449 13.7419C7.34516 13.7421 7.34595 13.7425 7.81978 12.8619L7.34595 13.7425C7.8323 14.0042 8.4387 13.822 8.70039 13.3357C8.96081 12.8517 8.78171 12.2488 8.30067 11.9851C8.30067 11.9851 8.30067 11.9851 8.30067 11.9851C8.29955 11.9844 8.2974 11.9832 8.29432 11.9814C8.28474 11.9757 8.26641 11.9646 8.24136 11.9482C8.19069 11.915 8.11597 11.8624 8.03225 11.7918C7.85757 11.6444 7.6837 11.4525 7.57976 11.2331C7.47697 11.0162 7.43854 10.758 7.43568 10.5239C7.43432 10.4121 7.44123 10.3185 7.44794 10.2563C7.45125 10.2256 7.45441 10.2035 7.45621 10.1919L7.45759 10.1833Z" fill="currentColor"/>
</g>
<defs>
<clipPath id="clip0_1210_972">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Wifi$1 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.6961 11.2821C14.0926 11.6665 14.1024 12.2996 13.7179 12.6961C13.3335 13.0926 12.7004 13.1024 12.3039 12.7179C12.273 12.688 12.2391 12.6581 12.2022 12.6285C12.0406 12.4986 11.8292 12.3788 11.5791 12.2796C11.1265 12.1001 10.5793 12 10 12C9.08603 12 8.26716 12.2511 7.79777 12.6285C7.76089 12.6581 7.72699 12.688 7.69613 12.7179C7.29964 13.1024 6.66655 13.0926 6.28209 12.6961C5.89762 12.2996 5.90738 11.6665 6.30387 11.2821C6.37977 11.2085 6.46015 11.1377 6.54472 11.0697C7.39422 10.3868 8.65538 10 10 10C10.8267 10 11.6239 10.1459 12.3163 10.4204C12.7456 10.5907 13.131 10.809 13.4553 11.0697C13.5399 11.1377 13.6202 11.2085 13.6961 11.2821Z" fill="currentColor"/>
<path d="M16.2128 8.68869C16.6002 9.08238 16.595 9.71553 16.2013 10.1029C15.8076 10.4902 15.1745 10.485 14.7872 10.0913C14.6908 9.99338 14.5866 9.89798 14.4751 9.80557C14.362 9.71196 14.2416 9.62159 14.1142 9.53491C13.9855 9.44731 13.8498 9.36361 13.7078 9.28424C13.5647 9.20419 13.4152 9.12866 13.2601 9.05801C13.104 8.9869 12.9424 8.92084 12.7758 8.86013C12.6085 8.79914 12.4364 8.74364 12.2601 8.6939C12.0833 8.64404 11.9026 8.60002 11.7185 8.56207C11.5345 8.52413 11.3472 8.49229 11.1573 8.46673C10.968 8.44124 10.7762 8.42202 10.5824 8.40919C10.3899 8.39644 10.1956 8.39001 10 8.39001C9.80443 8.39001 9.61014 8.39644 9.4176 8.40919C9.22385 8.42202 9.03203 8.44124 8.84266 8.46673C8.65277 8.49229 8.46551 8.52413 8.28146 8.56207C8.09736 8.60002 7.91666 8.64404 7.73993 8.6939C7.56364 8.74364 7.39152 8.79914 7.22416 8.86013C7.0576 8.92084 6.89597 8.9869 6.73987 9.05801C6.58477 9.12866 6.43534 9.20419 6.29217 9.28424C6.15018 9.36361 6.01455 9.44731 5.88581 9.53491C5.75842 9.62159 5.63797 9.71196 5.52494 9.80557C5.41338 9.89798 5.30922 9.99338 5.21284 10.0913C4.82551 10.485 4.19237 10.4902 3.79868 10.1029C3.40498 9.71553 3.39983 9.08238 3.78716 8.68869C3.93166 8.54182 4.0859 8.40053 4.24924 8.26525C4.41113 8.13118 4.58183 8.0031 4.76069 7.8814C4.93819 7.76061 5.12361 7.6462 5.31623 7.53851C5.50766 7.4315 5.70608 7.3312 5.91079 7.23795C6.11446 7.14517 6.32421 7.05944 6.53934 6.98104C6.75355 6.90297 6.97295 6.83222 7.19683 6.76905C7.41971 6.70617 7.64688 6.65083 7.87767 6.60326C8.10719 6.55594 8.34013 6.51634 8.57585 6.48461C8.80999 6.45309 9.04673 6.42936 9.28546 6.41356C9.522 6.39789 9.76036 6.39001 10 6.39001C10.2396 6.39001 10.478 6.39789 10.7145 6.41356C10.9533 6.42936 11.19 6.45309 11.4241 6.48461C11.6599 6.51634 11.8928 6.55594 12.1223 6.60326C12.3531 6.65083 12.5803 6.70617 12.8032 6.76905C13.0271 6.83222 13.2464 6.90297 13.4607 6.98104C13.6758 7.05944 13.8855 7.14517 14.0892 7.23795C14.2939 7.3312 14.4923 7.4315 14.6838 7.53851C14.8764 7.6462 15.0618 7.76061 15.2393 7.8814C15.4182 8.0031 15.5889 8.13118 15.7508 8.26525C15.9141 8.40053 16.0683 8.54182 16.2128 8.68869Z" fill="currentColor"/>
<path d="M18.2454 6.22201C18.6136 6.63366 18.5783 7.26584 18.1667 7.63403C17.755 8.00221 17.1228 7.96697 16.7546 7.55532C16.6133 7.3973 16.4611 7.24398 16.2987 7.09599C16.1352 6.94702 15.9614 6.80363 15.7782 6.66645C15.5939 6.5285 15.4001 6.397 15.1977 6.27253C14.9944 6.14748 14.7825 6.02968 14.5629 5.91965C14.3426 5.80922 14.1147 5.70676 13.8801 5.61271C13.6448 5.51841 13.4031 5.43268 13.1558 5.35591C12.9082 5.27907 12.6552 5.21129 12.3976 5.15288C12.1404 5.09455 11.8788 5.04562 11.6136 5.00636C11.3494 4.96723 11.0818 4.93773 10.8116 4.91805C10.5433 4.89851 10.2725 4.88866 10 4.88866C9.72751 4.88866 9.45676 4.89851 9.18838 4.91805C8.91819 4.93773 8.65062 4.96723 8.38638 5.00636C8.12121 5.04562 7.85962 5.09455 7.60238 5.15288C7.34479 5.21129 7.0918 5.27907 6.84422 5.35591C6.59687 5.43268 6.35518 5.51841 6.11995 5.61271C5.88536 5.70676 5.65746 5.80922 5.43708 5.91965C5.2175 6.02968 5.00564 6.14748 4.80229 6.27253C4.59988 6.397 4.40615 6.5285 4.22185 6.66645C4.03857 6.80363 3.86484 6.94702 3.70132 7.09599C3.53888 7.24398 3.38671 7.3973 3.24538 7.55532C2.87719 7.96697 2.24501 8.00221 1.83335 7.63403C1.4217 7.26584 1.38646 6.63366 1.75464 6.22201C1.94178 6.01278 2.14198 5.81106 2.35441 5.61753C2.56577 5.42498 2.78906 5.24069 3.02339 5.06529C3.2567 4.89067 3.50075 4.725 3.75463 4.56888C4.00756 4.41334 4.27004 4.26739 4.54111 4.13157C4.81132 3.99617 5.08986 3.87094 5.37575 3.75633C5.66085 3.64203 5.95304 3.53839 6.25138 3.4458C6.54872 3.35351 6.85193 3.27227 7.1601 3.20239C7.46682 3.13284 7.77822 3.0746 8.09344 3.02793C8.40671 2.98154 8.72353 2.94661 9.04309 2.92334C9.35982 2.90027 9.67904 2.88866 10 2.88866C10.321 2.88866 10.6402 2.90027 10.9569 2.92334C11.2765 2.94661 11.5933 2.98154 11.9066 3.02793C12.2218 3.0746 12.5332 3.13284 12.8399 3.20239C13.1481 3.27227 13.4513 3.35351 13.7486 3.4458C14.047 3.53839 14.3392 3.64203 14.6243 3.75633C14.9102 3.87094 15.1887 3.99617 15.4589 4.13157C15.73 4.26739 15.9925 4.41334 16.2454 4.56888C16.4993 4.725 16.7433 4.89067 16.9766 5.06529C17.211 5.24069 17.4342 5.42498 17.6456 5.61753C17.858 5.81106 18.0582 6.01278 18.2454 6.22201Z" fill="currentColor"/>
<path d="M12 15.25C12 16.3546 11.1046 17.25 10 17.25C8.89543 17.25 8 16.3546 8 15.25C8 14.1454 8.89543 13.25 10 13.25C11.1046 13.25 12 14.1454 12 15.25Z" fill="currentColor"/>
</svg>
`;

/** Do not edit! This file is auto-generated. */
// ======= //
/* EXPORTS */
// ======= //
const popAirplane = Airplane$1;
const popAlarm = Alarm$1;
const popAngleDown = AngleDown$1;
const popAngleLeft = AngleLeft$1;
const popAngleRight = AngleRight$1;
const popAngleUp = AngleUp$1;
const popArrowDown = ArrowDown$1;
const popArrowDownLeft = ArrowDownLeft$1;
const popArrowDownRight = ArrowDownRight$1;
const popArrowLeft = ArrowLeft$1;
const popArrowRight = ArrowRight$1;
const popArrowUp = ArrowUp$1;
const popArrowUpLeft = ArrowUpLeft$1;
const popArrowUpRight = ArrowUpRight$1;
const popBank = Bank$1;
const popBattery = Battery$1;
const popBell = Bell$1;
const popBellOff = BellOff$1;
const popBicycle = Bicycle$1;
const popBluetooth = Bluetooth$1;
const popBook = Book$1;
const popBookmark = Bookmark$1;
const popBookmarkFilled = BookmarkFilled;
const popBriefcase = Briefcase$1;
const popBuilding = Building$1;
const popCalculator = Calculator$1;
const popCalendar = Calendar$1;
const popCamera = Camera$1;
const popCan = Can$1;
const popCar = Car$1;
const popCart = Cart$1;
const popCellphoneEye = CellphoneEye$1;
const popCellphoneLoop = CellphoneLoop$1;
const popChain = Chain$1;
const popCheckmark = Checkmark$1;
const popCircle = Circle$1;
const popCircleFilled = CircleFilled;
const popClipboard = Clipboard$1;
const popClipboardCheck = ClipboardCheck$1;
const popClipboardCheckCircle = ClipboardCheckCircle$1;
const popClock = Clock$1;
const popCloud = Cloud$1;
const popCloudDown = CloudDown$1;
const popCloudDownFilled = CloudDownFilled;
const popCloudFilled = CloudFilled;
const popCloudUp = CloudUp$1;
const popCloudUpFilled = CloudUpFilled;
const popCoctail = Coctail$1;
const popCode = Code$1;
const popColorPicker = ColorPicker$1;
const popContract = Contract$1;
const popController = Controller$1;
const popCountdown = Countdown$1;
const popCreditCard = CreditCard$1;
const popCrown = Crown$1;
const popCup = Cup$1;
const popCv = Cv$1;
const popDivision = Division$1;
const popDotsX = DotsX$1;
const popDotsY = DotsY$1;
const popDress = Dress$1;
const popDuplicate = Duplicate$1;
const popElectricity = Electricity$1;
const popEnter = Enter$1;
const popExclamation = Exclamation$1;
const popExclamationCircle = ExclamationCircle$1;
const popExclamationFilled = ExclamationFilled;
const popExpand = Expand$1;
const popEye = Eye$1;
const popEyeClosed = EyeClosed$1;
const popEyeFrame = EyeFrame$1;
const popEyeOff = EyeOff$1;
const popFastForward = FastForward$1;
const popFile = File$1;
const popFileLoop = FileLoop$1;
const popFilmFrame = FilmFrame$1;
const popFire = Fire$1;
const popFlag = Flag$1;
const popFlagStraight = FlagStraight$1;
const popFlower = Flower$1;
const popFlowerBud = FlowerBud$1;
const popFolder = Folder$1;
const popFoldingStool = FoldingStool$1;
const popGear = Gear$1;
const popGearFilled = GearFilled;
const popGift = Gift$1;
const popGrab = Grab$1;
const popHamburger = Hamburger$1;
const popHandGrab = HandGrab$1;
const popHandOpen = HandOpen$1;
const popHandPoint = HandPoint$1;
const popHandPointOpen = HandPointOpen$1;
const popHandshake = Handshake$1;
const popHash = Hash$1;
const popHeadphone = Headphone$1;
const popHeart = Heart$1;
const popHourglass = Hourglass$1;
const popHouse = House$1;
const popIdentification = Identification$1;
const popInfo = Info$1;
const popInfoCircle = InfoCircle$1;
const popInfoFilled = InfoFilled;
const popInternet = Internet$1;
const popKey = Key$1;
const popKniveFork = KniveFork$1;
const popLabel = Label$1;
const popLeave = Leave$1;
const popLetter = Letter$1;
const popLetterOpen = LetterOpen$1;
const popList = List$1;
const popLockClosed = LockClosed$1;
const popLockOpen = LockOpen$1;
const popLoop = Loop$1;
const popLoopMinus = LoopMinus$1;
const popLoopPlus = LoopPlus$1;
const popMagnet = Magnet$1;
const popMap = Map$1;
const popMegaphone = Megaphone$1;
const popMenu = Menu$1;
const popMicrophone = Microphone$1;
const popMicrophone2 = Microphone2$1;
const popMinus = Minus$1;
const popMonitor = Monitor$1;
const popMonitorEye = MonitorEye$1;
const popMonitorLoop = MonitorLoop$1;
const popMonitor2 = Monitor2$1;
const popMoon = Moon$1;
const popMoonFilled = MoonFilled;
const popMotorcycle = Motorcycle$1;
const popMoveX = MoveX$1;
const popMoveY = MoveY$1;
const popMusicNoteDouble = MusicNoteDouble$1;
const popMusicNoteSingle = MusicNoteSingle$1;
const popNextTrack = NextTrack$1;
const popOpen = Open$1;
const popPaintPallet = PaintPallet$1;
const popPause = Pause$1;
const popPen = Pen$1;
const popPeople = People$1;
const popPerson = Person$1;
const popPersonCheckmark = PersonCheckmark$1;
const popPersonFilled = PersonFilled;
const popPersonPlus = PersonPlus$1;
const popPersons = Persons$1;
const popPhone = Phone$1;
const popPhoto = Photo$1;
const popPhotoCamera = PhotoCamera$1;
const popPhotoStudio = PhotoStudio$1;
const popPill = Pill$1;
const popPin = Pin$1;
const popPinpoint = Pinpoint$1;
const popPinpointFilled = PinpointFilled;
const popPinpointOff = PinpointOff$1;
const popPinpointOffFilled = PinpointOffFilled;
const popPlay = Play$1;
const popPlus = Plus$1;
const popPower = Power$1;
const popPreviousTrack = PreviousTrack$1;
const popPrinter = Printer$1;
const popQrCode = QrCode$1;
const popQuestion = Question$1;
const popQuestionCircle = QuestionCircle$1;
const popQuestionFilled = QuestionFilled;
const popRadio = Radio$1;
const popRefresh = Refresh$1;
const popReload = Reload$1;
const popRepeat = Repeat$1;
const popRewind = Rewind$1;
const popRewindTime = RewindTime$1;
const popScissors = Scissors$1;
const popSend = Send$1;
const popShareAndroid = ShareAndroid$1;
const popShareIos = ShareIos$1;
const popShuffle = Shuffle$1;
const popSliders = Sliders$1;
const popSmartphone = Smartphone$1;
const popSmartphoneNotch = SmartphoneNotch$1;
const popSmartphone2 = Smartphone2$1;
const popSoftDrink = SoftDrink$1;
const popSort = Sort$1;
const popSpeakerHigh = SpeakerHigh$1;
const popSpeakerLow = SpeakerLow$1;
const popSpeakerOff = SpeakerOff$1;
const popSquare = Square$1;
const popSquareFilled = SquareFilled;
const popStar = Star$1;
const popStarFilled = StarFilled;
const popStopwatch = Stopwatch$1;
const popStudioBackdrop = StudioBackdrop$1;
const popStudioLightFront = StudioLightFront$1;
const popStudioLightSide = StudioLightSide$1;
const popSun = Sun$1;
const popSunFilled = SunFilled;
const popSyringe = Syringe$1;
const popTShirt = TShirt$1;
const popTaxi = Taxi$1;
const popTelevision = Television$1;
const popTextBubble = TextBubble$1;
const popThumbsDown = ThumbsDown$1;
const popThumbsUp = ThumbsUp$1;
const popTimes = Times$1;
const popTool = Tool$1;
const popTrain = Train$1;
const popTrash = Trash$1;
const popTriangleDown = TriangleDown$1;
const popTriangleDownFilled = TriangleDownFilled;
const popTriangleLeft = TriangleLeft$1;
const popTriangleLeftFilled = TriangleLeftFilled;
const popTriangleRight = TriangleRight$1;
const popTriangleRightFilled = TriangleRightFilled;
const popTriangleUp = TriangleUp$1;
const popTriangleUpFilled = TriangleUpFilled;
const popTrophy = Trophy$1;
const popTruck = Truck$1;
const popUmbrella = Umbrella$1;
const popWatch = Watch$1;
const popWaterDrop = WaterDrop$1;
const popWifi = Wifi$1;
const pop = {
    'airplane': Airplane$1,
    'alarm': Alarm$1,
    'angle-down': AngleDown$1,
    'angle-left': AngleLeft$1,
    'angle-right': AngleRight$1,
    'angle-up': AngleUp$1,
    'arrow-down': ArrowDown$1,
    'arrow-down-left': ArrowDownLeft$1,
    'arrow-down-right': ArrowDownRight$1,
    'arrow-left': ArrowLeft$1,
    'arrow-right': ArrowRight$1,
    'arrow-up': ArrowUp$1,
    'arrow-up-left': ArrowUpLeft$1,
    'arrow-up-right': ArrowUpRight$1,
    'bank': Bank$1,
    'battery': Battery$1,
    'bell': Bell$1,
    'bell-off': BellOff$1,
    'bicycle': Bicycle$1,
    'bluetooth': Bluetooth$1,
    'book': Book$1,
    'bookmark': Bookmark$1,
    'bookmark-filled': BookmarkFilled,
    'briefcase': Briefcase$1,
    'building': Building$1,
    'calculator': Calculator$1,
    'calendar': Calendar$1,
    'camera': Camera$1,
    'can': Can$1,
    'car': Car$1,
    'cart': Cart$1,
    'cellphone-eye': CellphoneEye$1,
    'cellphone-loop': CellphoneLoop$1,
    'chain': Chain$1,
    'checkmark': Checkmark$1,
    'circle': Circle$1,
    'circle-filled': CircleFilled,
    'clipboard': Clipboard$1,
    'clipboard-check': ClipboardCheck$1,
    'clipboard-check-circle': ClipboardCheckCircle$1,
    'clock': Clock$1,
    'cloud': Cloud$1,
    'cloud-down': CloudDown$1,
    'cloud-down-filled': CloudDownFilled,
    'cloud-filled': CloudFilled,
    'cloud-up': CloudUp$1,
    'cloud-up-filled': CloudUpFilled,
    'coctail': Coctail$1,
    'code': Code$1,
    'color-picker': ColorPicker$1,
    'contract': Contract$1,
    'controller': Controller$1,
    'countdown': Countdown$1,
    'credit-card': CreditCard$1,
    'crown': Crown$1,
    'cup': Cup$1,
    'cv': Cv$1,
    'division': Division$1,
    'dots-x': DotsX$1,
    'dots-y': DotsY$1,
    'dress': Dress$1,
    'duplicate': Duplicate$1,
    'electricity': Electricity$1,
    'enter': Enter$1,
    'exclamation': Exclamation$1,
    'exclamation-circle': ExclamationCircle$1,
    'exclamation-filled': ExclamationFilled,
    'expand': Expand$1,
    'eye': Eye$1,
    'eye-closed': EyeClosed$1,
    'eye-frame': EyeFrame$1,
    'eye-off': EyeOff$1,
    'fast-forward': FastForward$1,
    'file': File$1,
    'file-loop': FileLoop$1,
    'film-frame': FilmFrame$1,
    'fire': Fire$1,
    'flag': Flag$1,
    'flag-straight': FlagStraight$1,
    'flower': Flower$1,
    'flower-bud': FlowerBud$1,
    'folder': Folder$1,
    'folding-stool': FoldingStool$1,
    'gear': Gear$1,
    'gear-filled': GearFilled,
    'gift': Gift$1,
    'grab': Grab$1,
    'hamburger': Hamburger$1,
    'hand-grab': HandGrab$1,
    'hand-open': HandOpen$1,
    'hand-point': HandPoint$1,
    'hand-point-open': HandPointOpen$1,
    'handshake': Handshake$1,
    'hash': Hash$1,
    'headphone': Headphone$1,
    'heart': Heart$1,
    'hourglass': Hourglass$1,
    'house': House$1,
    'identification': Identification$1,
    'info': Info$1,
    'info-circle': InfoCircle$1,
    'info-filled': InfoFilled,
    'internet': Internet$1,
    'key': Key$1,
    'knive-fork': KniveFork$1,
    'label': Label$1,
    'leave': Leave$1,
    'letter': Letter$1,
    'letter-open': LetterOpen$1,
    'list': List$1,
    'lock-closed': LockClosed$1,
    'lock-open': LockOpen$1,
    'loop': Loop$1,
    'loop-minus': LoopMinus$1,
    'loop-plus': LoopPlus$1,
    'magnet': Magnet$1,
    'map': Map$1,
    'megaphone': Megaphone$1,
    'menu': Menu$1,
    'microphone': Microphone$1,
    'microphone2': Microphone2$1,
    'minus': Minus$1,
    'monitor': Monitor$1,
    'monitor-eye': MonitorEye$1,
    'monitor-loop': MonitorLoop$1,
    'monitor2': Monitor2$1,
    'moon': Moon$1,
    'moon-filled': MoonFilled,
    'motorcycle': Motorcycle$1,
    'move-x': MoveX$1,
    'move-y': MoveY$1,
    'music-note-double': MusicNoteDouble$1,
    'music-note-single': MusicNoteSingle$1,
    'next-track': NextTrack$1,
    'open': Open$1,
    'paint-pallet': PaintPallet$1,
    'pause': Pause$1,
    'pen': Pen$1,
    'people': People$1,
    'person': Person$1,
    'person-checkmark': PersonCheckmark$1,
    'person-filled': PersonFilled,
    'person-plus': PersonPlus$1,
    'persons': Persons$1,
    'phone': Phone$1,
    'photo': Photo$1,
    'photo-camera': PhotoCamera$1,
    'photo-studio': PhotoStudio$1,
    'pill': Pill$1,
    'pin': Pin$1,
    'pinpoint': Pinpoint$1,
    'pinpoint-filled': PinpointFilled,
    'pinpoint-off': PinpointOff$1,
    'pinpoint-off-filled': PinpointOffFilled,
    'play': Play$1,
    'plus': Plus$1,
    'power': Power$1,
    'previous-track': PreviousTrack$1,
    'printer': Printer$1,
    'qr-code': QrCode$1,
    'question': Question$1,
    'question-circle': QuestionCircle$1,
    'question-filled': QuestionFilled,
    'radio': Radio$1,
    'refresh': Refresh$1,
    'reload': Reload$1,
    'repeat': Repeat$1,
    'rewind': Rewind$1,
    'rewind-time': RewindTime$1,
    'scissors': Scissors$1,
    'send': Send$1,
    'share-android': ShareAndroid$1,
    'share-ios': ShareIos$1,
    'shuffle': Shuffle$1,
    'sliders': Sliders$1,
    'smartphone': Smartphone$1,
    'smartphone-notch': SmartphoneNotch$1,
    'smartphone2': Smartphone2$1,
    'soft-drink': SoftDrink$1,
    'sort': Sort$1,
    'speaker-high': SpeakerHigh$1,
    'speaker-low': SpeakerLow$1,
    'speaker-off': SpeakerOff$1,
    'square': Square$1,
    'square-filled': SquareFilled,
    'star': Star$1,
    'star-filled': StarFilled,
    'stopwatch': Stopwatch$1,
    'studio-backdrop': StudioBackdrop$1,
    'studio-light-front': StudioLightFront$1,
    'studio-light-side': StudioLightSide$1,
    'sun': Sun$1,
    'sun-filled': SunFilled,
    'syringe': Syringe$1,
    't-shirt': TShirt$1,
    'taxi': Taxi$1,
    'television': Television$1,
    'text-bubble': TextBubble$1,
    'thumbs-down': ThumbsDown$1,
    'thumbs-up': ThumbsUp$1,
    'times': Times$1,
    'tool': Tool$1,
    'train': Train$1,
    'trash': Trash$1,
    'triangle-down': TriangleDown$1,
    'triangle-down-filled': TriangleDownFilled,
    'triangle-left': TriangleLeft$1,
    'triangle-left-filled': TriangleLeftFilled,
    'triangle-right': TriangleRight$1,
    'triangle-right-filled': TriangleRightFilled,
    'triangle-up': TriangleUp$1,
    'triangle-up-filled': TriangleUpFilled,
    'trophy': Trophy$1,
    'truck': Truck$1,
    'umbrella': Umbrella$1,
    'watch': Watch$1,
    'water-drop': WaterDrop$1,
    'wifi': Wifi$1,
};

const Airplane = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M11.2237 13.805C11.4794 15.6396 11.5923 16.7828 11.5624 17.2854C11.5159 18.0655 10.9931 18.8865 10.0279 19.7822C9.75347 20.0369 9.30689 19.9108 9.20619 19.5502L7.87106 14.7706L7.27107 14.1706L2.49144 12.8355C2.13092 12.7348 2.00483 12.2882 2.25945 12.0138C3.15519 11.0485 3.97614 10.5258 4.75628 10.4793C5.25901 10.4494 6.40254 10.5624 8.23783 10.8181L10.6694 8.16575L4.61552 6.47431C4.25502 6.37359 4.12895 5.92703 4.38355 5.65265C5.76919 4.15943 7.02217 3.36158 8.17652 3.29293C9.06242 3.24023 10.9254 3.70483 13.8567 4.68935L14.3016 4.20455C16.3494 2.15809 18.0349 1.59992 19.2388 2.80381C20.4427 4.00777 19.8842 5.69305 17.8214 7.75516L17.3524 8.1852C18.3369 11.1164 18.8014 12.9793 18.7488 13.8652C18.6801 15.0195 17.8823 16.2725 16.389 17.6581C16.1147 17.9127 15.6681 17.7867 15.5674 17.4262L13.8761 11.3729L11.2237 13.805Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5624 16.2854C10.5923 15.7828 10.4794 14.6396 10.2237 12.805L12.8761 10.3729L14.5674 16.4262C14.6681 16.7867 15.1147 16.9127 15.389 16.6581C16.8823 15.2725 17.6801 14.0195 17.7488 12.8652C17.8014 11.9793 17.3369 10.1164 16.3524 7.1852L16.8214 6.75516C18.8842 4.69305 19.4427 3.00777 18.2388 1.80381C17.0349 0.59992 15.3494 1.15809 13.3016 3.20455L12.8567 3.68935C9.92541 2.70483 8.06242 2.24023 7.17652 2.29293C6.02218 2.36158 4.76919 3.15943 3.38355 4.65265C3.12895 4.92703 3.25502 5.37359 3.61552 5.47431L9.66945 7.16575L7.23783 9.81814C5.40254 9.56238 4.25901 9.44939 3.75628 9.47932C2.97614 9.52577 2.15519 10.0485 1.25945 11.0138C1.00483 11.2882 1.13092 11.7348 1.49144 11.8355L6.27107 13.1706L6.87106 13.7706L8.20619 18.5502C8.30689 18.9108 8.75347 19.0369 9.02786 18.7822C9.99314 17.8865 10.5159 17.0655 10.5624 16.2854ZM9.19693 12.6843C9.46746 14.5947 9.58981 15.7947 9.56413 16.226C9.54433 16.5585 9.33872 16.9682 8.93509 17.4427L7.79891 13.3753C7.77578 13.2925 7.73169 13.217 7.6709 13.1562L6.88545 12.3708C6.82466 12.31 6.74922 12.2659 6.66642 12.2428L2.599 11.1066C3.07353 10.703 3.4832 10.4974 3.81571 10.4776C4.24707 10.4519 5.44749 10.5743 7.35857 10.8449C7.52176 10.868 7.68586 10.8092 7.79724 10.6877L10.9569 7.24122C11.2089 6.96629 11.0821 6.52215 10.7229 6.42178L4.70117 4.73934C5.68001 3.80916 6.53157 3.33305 7.23589 3.29116C7.96978 3.24751 9.87294 3.73165 12.8443 4.74065C13.032 4.80439 13.2397 4.75121 13.3736 4.60508L14.0236 3.8961C15.7159 2.20551 16.8505 1.82978 17.5317 2.51091C18.2127 3.19197 17.8368 4.32621 16.1299 6.03309L15.4366 6.66821C15.2905 6.80217 15.2373 7.0098 15.3011 7.1975C16.31 10.1688 16.7942 12.0719 16.7505 12.8058C16.7086 13.5101 16.2325 14.3617 15.3023 15.3405L13.6201 9.31934C13.5197 8.96009 13.0755 8.83327 12.8006 9.08536L9.35407 12.2457C9.23261 12.3571 9.17383 12.5212 9.19693 12.6843Z" fill="black"/>
</svg>
`;

const Alarm = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path opacity="0.8" d="M18 11.25C18 14.8399 15.0899 17.75 11.5 17.75C7.91015 17.75 5 14.8399 5 11.25C5 7.66015 7.91015 4.75 11.5 4.75C15.0899 4.75 18 7.66015 18 11.25Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.75C6.68629 4.75 4 7.43629 4 10.75C4 14.0637 6.68629 16.75 10 16.75C13.3137 16.75 16 14.0637 16 10.75C16 7.43629 13.3137 4.75 10 4.75ZM3 10.75C3 6.88401 6.13401 3.75 10 3.75C13.866 3.75 17 6.88401 17 10.75C17 14.616 13.866 17.75 10 17.75C6.13401 17.75 3 14.616 3 10.75Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.14645 17.6036C3.34171 17.7989 3.65829 17.7989 3.85355 17.6036L5.35355 16.1036C5.54882 15.9083 5.54882 15.5918 5.35355 15.3965C5.15829 15.2012 4.84171 15.2012 4.64645 15.3965L3.14645 16.8965C2.95118 17.0918 2.95118 17.4083 3.14645 17.6036Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.6464 15.3965C14.8417 15.2013 15.1583 15.2013 15.3536 15.3965L16.8536 16.8965C17.0488 17.0918 17.0488 17.4084 16.8536 17.6036C16.6583 17.7989 16.3417 17.7989 16.1464 17.6036L14.6464 16.1036C14.4512 15.9084 14.4512 15.5918 14.6464 15.3965Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 7.25C10.2761 7.25 10.5 7.47386 10.5 7.75V10.75C10.5 11.0261 10.2761 11.25 10 11.25C9.72386 11.25 9.5 11.0261 9.5 10.75V7.75C9.5 7.47386 9.72386 7.25 10 7.25Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 10.75C13.5 11.0261 13.2761 11.25 13 11.25H10C9.72386 11.25 9.5 11.0261 9.5 10.75C9.5 10.4739 9.72386 10.25 10 10.25H13C13.2761 10.25 13.5 10.4739 13.5 10.75Z" fill="black"/>
<path d="M2.3811 2.54649C4.40385 0.614695 6.33196 2.92163 6.33196 2.92163L2.57422 6.51042C2.57422 6.51042 0.358357 4.47829 2.3811 2.54649Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.96998 2.78312C3.74526 2.80987 3.44051 2.9175 3.07176 3.26967C2.70301 3.62184 2.58149 3.92131 2.54443 4.14457C2.50534 4.38013 2.54516 4.62649 2.64704 4.88008C2.66414 4.92263 2.68262 4.96446 2.7022 5.00541L4.82266 2.98029C4.78265 2.95885 4.74172 2.93847 4.7 2.91943C4.45136 2.806 4.20709 2.75489 3.96998 2.78312ZM5.57205 2.26459C4.82557 1.77094 3.62112 1.36223 2.3811 2.54649C1.14108 3.73076 1.494 4.95273 1.9528 5.72111C2.1026 5.97198 2.26369 6.1745 2.38431 6.31157C2.49689 6.4395 2.57422 6.51042 2.57422 6.51042L6.33196 2.92163C6.33196 2.92163 6.26467 2.84112 6.14205 2.72278C6.01067 2.59599 5.81577 2.42576 5.57205 2.26459Z" fill="black"/>
<path d="M17.6189 2.54649C15.5962 0.614695 13.668 2.92163 13.668 2.92163L17.4258 6.51042C17.4258 6.51042 19.6416 4.47829 17.6189 2.54649Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.03 2.78312C16.2547 2.80987 16.5595 2.9175 16.9282 3.26967C17.297 3.62184 17.4185 3.92131 17.4556 4.14457C17.4947 4.38013 17.4548 4.62649 17.353 4.88008C17.3359 4.92263 17.3174 4.96446 17.2978 5.00541L15.1773 2.98029C15.2174 2.95885 15.2583 2.93847 15.3 2.91943C15.5486 2.806 15.7929 2.75489 16.03 2.78312ZM14.428 2.26459C15.1744 1.77094 16.3789 1.36223 17.6189 2.54649C18.8589 3.73076 18.506 4.95273 18.0472 5.72111C17.8974 5.97198 17.7363 6.1745 17.6157 6.31157C17.5031 6.4395 17.4258 6.51042 17.4258 6.51042L13.668 2.92163C13.668 2.92163 13.7353 2.84112 13.858 2.72278C13.9893 2.59599 14.1842 2.42576 14.428 2.26459Z" fill="black"/>
</svg>
`;

const AngleDown = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 11.5475L6.96027 7.34769C5.42382 6.06732 3.50327 8.37199 5.03971 9.65236L10.9878 14.6091C11.2603 14.8652 11.6176 15.0286 12 15.0275C12.3824 15.0286 12.7397 14.8652 13.0122 14.6091L18.9603 9.65236C20.4967 8.37199 18.5762 6.06732 17.0397 7.34769L12 11.5475Z" fill="currentColor"/>
</g>
<path d="M15.6799 7.11597L9.6799 12.116L10.3201 12.8842L16.3201 7.88419L15.6799 7.11597Z" fill="black"/>
<path d="M16.3201 7.88412L10.3201 12.8841C9.80793 13.3109 9.16775 12.5427 9.67989 12.1159L15.6799 7.1159C16.192 6.68911 16.8322 7.45733 16.3201 7.88412Z" fill="black"/>
<path d="M3.6799 7.88419L9.6799 12.8842L10.3201 12.116L4.32009 7.11597L3.6799 7.88419Z" fill="black"/>
<path d="M4.32008 7.1159L10.3201 12.1159C10.8322 12.5427 10.192 13.3109 9.67989 12.8841L3.67989 7.88412C3.16775 7.45733 3.80793 6.68911 4.32008 7.1159Z" fill="black"/>
</svg>
`;

const AngleLeft = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4526 11L15.6523 5.96027C16.9327 4.42382 14.628 2.50327 13.3477 4.03971L8.39095 9.98776C8.13482 10.2603 7.97147 10.6176 7.97251 11C7.97147 11.3824 8.13482 11.7397 8.39095 12.0122L13.3477 17.9603C14.628 19.4967 16.9327 17.5762 15.6523 16.0397L11.4526 11Z" fill="currentColor"/>
</g>
<path d="M12.3841 15.6799L7.38412 9.67993L6.6159 10.3201L11.6159 16.3201L12.3841 15.6799Z" fill="black"/>
<path d="M11.6159 16.32L6.61591 10.32C6.18912 9.8079 6.95734 9.16772 7.38413 9.67986L12.3841 15.6799C12.8109 16.192 12.0427 16.8322 11.6159 16.32Z" fill="black"/>
<path d="M11.6159 3.67993L6.6159 9.67993L7.38412 10.3201L12.3841 4.32012L11.6159 3.67993Z" fill="black"/>
<path d="M12.3841 4.32005L7.38413 10.32C6.95734 10.8322 6.18912 10.192 6.61591 9.67986L11.6159 3.67986C12.0427 3.16772 12.8109 3.8079 12.3841 4.32005Z" fill="black"/>
</svg>
`;

const AngleRight = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M15.8116 11.7288C15.7624 11.8174 15.7036 11.9018 15.6355 11.9805L10.6524 17.9603C10.122 18.5967 9.17618 18.6827 8.53976 18.1524C7.90335 17.622 7.81736 16.6762 8.34771 16.0398L12.5475 11L8.34771 5.96031C7.81736 5.3239 7.90335 4.37805 8.53976 3.84771C9.17618 3.31736 10.122 3.40335 10.6524 4.03976L15.6524 10.0398C16.0606 10.5296 16.1036 11.2028 15.8116 11.7288L15.8116 11.7288Z" fill="currentColor"/>
</g>
<path d="M7.1159 4.3201C6.93912 4.10797 6.96778 3.79268 7.17992 3.6159C7.39206 3.43912 7.70734 3.46778 7.88412 3.67992L12.8841 9.67992C13.0609 9.89206 13.0322 10.2073 12.8201 10.3841C12.608 10.5609 12.2927 10.5322 12.1159 10.3201L7.1159 4.3201Z" fill="black"/>
<path d="M7.88412 16.3201C7.70734 16.5322 7.39206 16.5609 7.17992 16.3841C6.96778 16.2073 6.93912 15.8921 7.1159 15.6799L12.1159 9.67992C12.2927 9.46778 12.608 9.43912 12.8201 9.6159C13.0322 9.79268 13.0609 10.108 12.8841 10.3201L7.88412 16.3201Z" fill="black"/>
</svg>
`;

const AngleUp = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.9878 7.39098L5.03971 12.3477C3.50327 13.6281 5.42382 15.9327 6.96027 14.6524L12 10.4526L17.0397 14.6524C18.5762 15.9327 20.4967 13.6281 18.9603 12.3477L13.0122 7.39098C12.7397 7.13485 12.3824 6.9715 12 6.97254C11.6176 6.9715 11.2603 7.13485 10.9878 7.39098Z" fill="currentColor"/>
</g>
<path d="M16.3201 12.116L10.3201 7.11597L9.67993 7.88419L15.6799 12.8842L16.3201 12.116Z" fill="black"/>
<path d="M15.6799 12.8841L9.67992 7.88412C9.16778 7.45733 9.80796 6.68911 10.3201 7.1159L16.3201 12.1159C16.8323 12.5427 16.1921 13.3109 15.6799 12.8841Z" fill="black"/>
<path d="M4.32012 12.8842L10.3201 7.88419L9.67993 7.11597L3.67993 12.116L4.32012 12.8842Z" fill="black"/>
<path d="M3.67992 12.1159L9.67992 7.1159C10.1921 6.68911 10.8323 7.45733 10.3201 7.88412L4.32011 12.8841C3.80796 13.3109 3.16778 12.5427 3.67992 12.1159Z" fill="black"/>
</svg>
`;

const ArrowDown = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.1523 11.2064C17.6827 11.8428 17.5967 12.7886 16.9603 13.319L12.9603 16.6523C12.3239 17.1827 11.378 17.0967 10.8477 16.4603C10.3173 15.8239 10.4033 14.878 11.0397 14.3477L15.0397 11.0143C15.6761 10.484 16.622 10.57 17.1523 11.2064Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.84766 11.2064C7.37801 10.57 8.32385 10.484 8.96027 11.0143L12.9603 14.3477C13.5967 14.878 13.6827 15.8239 13.1523 16.4603C12.622 17.0967 11.6761 17.1827 11.0397 16.6523L7.03972 13.319C6.4033 12.7886 6.31731 11.8428 6.84766 11.2064Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 15C11.1716 15 10.5 14.3284 10.5 13.5V5.5C10.5 4.67157 11.1716 4 12 4C12.8284 4 13.5 4.67157 13.5 5.5V13.5C13.5 14.3284 12.8284 15 12 15Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3841 11.3465C14.5609 11.5587 14.5322 11.874 14.3201 12.0507L10.3201 15.3841C10.108 15.5609 9.79267 15.5322 9.61589 15.3201C9.4391 15.1079 9.46777 14.7926 9.67991 14.6159L13.6799 11.2825C13.892 11.1057 14.2073 11.1344 14.3841 11.3465Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.61589 11.3465C5.79267 11.1344 6.10795 11.1057 6.32009 11.2825L10.3201 14.6159C10.5322 14.7926 10.5609 15.1079 10.3841 15.3201C10.2073 15.5322 9.89204 15.5609 9.67991 15.3841L5.67991 12.0507C5.46777 11.874 5.4391 11.5587 5.61589 11.3465Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 15C9.72386 15 9.5 14.7761 9.5 14.5V5C9.5 4.72386 9.72386 4.5 10 4.5C10.2761 4.5 10.5 4.72386 10.5 5V14.5C10.5 14.7761 10.2761 15 10 15Z" fill="black"/>
</svg>
`;

const ArrowDownLeft = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_303_4997)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1438 14.1427C15.0688 14.9678 14.3392 15.5758 13.5142 15.5008L8.32874 15.0294C7.50371 14.9544 6.8957 14.2247 6.9707 13.3997C7.0457 12.5747 7.77532 11.9667 8.60034 12.0417L13.7858 12.5131C14.6108 12.5881 15.2188 13.3177 15.1438 14.1427Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.85733 6.85629C8.68235 6.78129 9.41197 7.3893 9.48697 8.21433L9.95838 13.3998C10.0334 14.2248 9.42537 14.9544 8.60034 15.0294C7.77532 15.1044 7.0457 14.4964 6.9707 13.6714L6.49929 8.48594C6.42429 7.66091 7.0323 6.9313 7.85733 6.85629Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.81808 13.182C8.23229 12.5962 8.23229 11.6465 8.81808 11.0607L14.4749 5.40382C15.0607 4.81804 16.0105 4.81804 16.5963 5.40382C17.182 5.98961 17.182 6.93936 16.5963 7.52514L10.9394 13.182C10.3536 13.7678 9.40386 13.7678 8.81808 13.182Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1479 14.0523C12.1229 14.3273 11.8797 14.5299 11.6047 14.5049L6.41927 14.0335C6.14427 14.0085 5.94159 13.7653 5.96659 13.4903C5.9916 13.2153 6.2348 13.0126 6.50981 13.0376L11.6953 13.509C11.9703 13.534 12.1729 13.7772 12.1479 14.0523Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.94787 7.85224C6.22287 7.82724 6.46608 8.02991 6.49108 8.30492L6.96248 13.4904C6.98749 13.7654 6.78481 14.0086 6.50981 14.0336C6.2348 14.0586 5.99159 13.8559 5.96659 13.5809L5.49519 8.39546C5.47019 8.12045 5.67286 7.87725 5.94787 7.85224Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.64639 13.3535C6.45113 13.1583 6.45114 12.8417 6.64641 12.6464L13.182 6.11105C13.3773 5.91579 13.6939 5.91579 13.8892 6.11106C14.0844 6.30632 14.0844 6.62291 13.8891 6.81817L7.3535 13.3536C7.15823 13.5488 6.84165 13.5488 6.64639 13.3535Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_303_4997">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const ArrowDownRight = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_303_4996)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1426 6.85632C16.9677 6.93132 17.5757 7.66094 17.5007 8.48597L17.0293 13.6714C16.9543 14.4964 16.2247 15.1045 15.3996 15.0295C14.5746 14.9544 13.9666 14.2248 14.0416 13.3998L14.513 8.21436C14.588 7.38933 15.3176 6.78132 16.1426 6.85632Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.85614 14.1428C8.78114 13.3177 9.38915 12.5881 10.2142 12.5131L15.3996 12.0417C16.2247 11.9667 16.9543 12.5747 17.0293 13.3997C17.1043 14.2248 16.4963 14.9544 15.6712 15.0294L10.4858 15.5008C9.66076 15.5758 8.93114 14.9678 8.85614 14.1428Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1819 13.182C14.5961 13.7678 13.6464 13.7678 13.0606 13.182L7.40373 7.52516C6.81795 6.93937 6.81795 5.98963 7.40373 5.40384C7.98952 4.81805 8.93927 4.81805 9.52505 5.40384L15.1819 11.0607C15.7677 11.6465 15.7677 12.5962 15.1819 13.182Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0521 7.85222C14.3271 7.87722 14.5298 8.12042 14.5048 8.39543L14.0334 13.5809C14.0084 13.8559 13.7652 14.0586 13.4902 14.0336C13.2152 14.0086 13.0125 13.7654 13.0375 13.4903L13.5089 8.30489C13.5339 8.02989 13.7771 7.82721 14.0521 7.85222Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.85203 14.0522C7.82703 13.7772 8.0297 13.534 8.30471 13.509L13.4902 13.0376C13.7652 13.0126 14.0084 13.2153 14.0334 13.4903C14.0584 13.7653 13.8557 14.0085 13.5807 14.0335L8.39525 14.5049C8.12024 14.5299 7.87703 14.3272 7.85203 14.0522Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3535 13.3536C13.1582 13.5489 12.8416 13.5489 12.6464 13.3536L6.11084 6.81808C5.91558 6.62282 5.91558 6.30624 6.11084 6.11098C6.3061 5.91571 6.62268 5.91572 6.81795 6.11098L13.3535 12.6465C13.5487 12.8418 13.5487 13.1583 13.3535 13.3536Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_303_4996">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const ArrowLeft = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2936 15.6524C10.6572 16.1827 9.71134 16.0967 9.18099 15.4603L5.84766 11.4603C5.31731 10.8239 5.4033 9.87805 6.03971 9.34771C6.67613 8.81736 7.62197 8.90335 8.15232 9.53976L11.4857 13.5398C12.016 14.1762 11.93 15.122 11.2936 15.6524Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2936 5.34771C11.93 5.87805 12.016 6.8239 11.4857 7.46031L8.15232 11.4603C7.62197 12.0967 6.67613 12.1827 6.03971 11.6524C5.4033 11.122 5.31731 10.1762 5.84766 9.53976L9.18099 5.53976C9.71134 4.90335 10.6572 4.81736 11.2936 5.34771Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.49995 10.5001C7.49995 9.67169 8.17153 9.00012 8.99995 9.00012L17 9.00012C17.8284 9.00012 18.5 9.67169 18.5 10.5001C18.5 11.3285 17.8284 12.0001 17 12.0001L8.99995 12.0001C8.17153 12.0001 7.49995 11.3285 7.49995 10.5001Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.65342 14.3841C8.44128 14.5609 8.126 14.5322 7.94922 14.3201L4.61589 10.3201C4.43911 10.108 4.46777 9.79268 4.67991 9.6159C4.89204 9.43912 5.20733 9.46778 5.38411 9.67992L8.71744 13.6799C8.89422 13.8921 8.86556 14.2073 8.65342 14.3841Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.65342 5.6159C8.86556 5.79268 8.89422 6.10797 8.71744 6.3201L5.38411 10.3201C5.20733 10.5322 4.89204 10.5609 4.67991 10.3841C4.46777 10.2073 4.43911 9.89206 4.61589 9.67992L7.94922 5.67992C8.126 5.46778 8.44128 5.43912 8.65342 5.6159Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.99995 10C4.99995 9.72386 5.22381 9.5 5.49995 9.5L15 9.5C15.2761 9.5 15.5 9.72386 15.5 10C15.5 10.2761 15.2761 10.5 15 10.5L5.49995 10.5C5.22381 10.5 4.99995 10.2761 4.99995 10Z" fill="black"/>
</svg>
`;

const ArrowRight = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2064 5.84775C12.8428 5.31741 13.7886 5.40339 14.319 6.03981L17.6523 10.0398C18.1826 10.6762 18.0967 11.6221 17.4602 12.1524C16.8238 12.6828 15.878 12.5968 15.3476 11.9604L12.0143 7.96036C11.484 7.32395 11.5699 6.3781 12.2064 5.84775Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2064 16.1524C11.5699 15.6221 11.484 14.6762 12.0143 14.0398L15.3476 10.0398C15.878 9.40339 16.8238 9.31741 17.4602 9.84775C18.0967 10.3781 18.1826 11.3239 17.6523 11.9604L14.319 15.9604C13.7886 16.5968 12.8428 16.6828 12.2064 16.1524Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 11C16 11.8284 15.3284 12.5 14.5 12.5L6.5 12.5C5.67157 12.5 5 11.8284 5 11C5 10.1716 5.67157 9.5 6.5 9.5L14.5 9.5C15.3284 9.5 16 10.1716 16 11Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3465 5.61588C11.5587 5.4391 11.874 5.46776 12.0507 5.6799L15.3841 9.6799C15.5608 9.89203 15.5322 10.2073 15.32 10.3841C15.1079 10.5609 14.7926 10.5322 14.6158 10.3201L11.2825 6.32008C11.1057 6.10794 11.1344 5.79266 11.3465 5.61588Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3465 14.3841C11.1344 14.2073 11.1057 13.892 11.2825 13.6799L14.6158 9.6799C14.7926 9.46776 15.1079 9.4391 15.32 9.61588C15.5322 9.79266 15.5608 10.1079 15.3841 10.3201L12.0507 14.3201C11.874 14.5322 11.5587 14.5609 11.3465 14.3841Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 10C15.5 10.2761 15.2761 10.5 15 10.5L5 10.5C4.72386 10.5 4.5 10.2761 4.5 10C4.5 9.72386 4.72386 9.5 5 9.5L15 9.5C15.2761 9.5 15.5 9.72386 15.5 10Z" fill="black"/>
</svg>
`;

const ArrowUp = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.84766 9.79361C6.31731 9.1572 6.4033 8.21135 7.03972 7.681L11.0397 4.34767C11.6761 3.81733 12.622 3.90331 13.1523 4.53973C13.6827 5.17614 13.5967 6.12199 12.9603 6.65234L8.96027 9.98567C8.32385 10.516 7.37801 10.43 6.84766 9.79361Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.1523 9.79361C16.622 10.43 15.6761 10.516 15.0397 9.98567L11.0397 6.65234C10.4033 6.12199 10.3173 5.17614 10.8477 4.53973C11.378 3.90331 12.3239 3.81733 12.9603 4.34767L16.9603 7.681C17.5967 8.21135 17.6827 9.1572 17.1523 9.79361Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C12.8284 6 13.5 6.67157 13.5 7.5V15.5C13.5 16.3284 12.8284 17 12 17C11.1716 17 10.5 16.3284 10.5 15.5V7.5C10.5 6.67157 11.1716 6 12 6Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.61589 8.65345C5.43911 8.44132 5.46777 8.12603 5.67991 7.94925L9.67991 4.61592C9.89205 4.43914 10.2073 4.4678 10.3841 4.67994C10.5609 4.89207 10.5322 5.20736 10.3201 5.38414L6.32009 8.71747C6.10796 8.89425 5.79267 8.86559 5.61589 8.65345Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3841 8.65345C14.2073 8.86559 13.892 8.89425 13.6799 8.71747L9.67991 5.38414C9.46777 5.20736 9.43911 4.89207 9.61589 4.67994C9.79267 4.4678 10.108 4.43914 10.3201 4.61592L14.3201 7.94925C14.5322 8.12603 14.5609 8.44132 14.3841 8.65345Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 5C10.2761 5 10.5 5.22386 10.5 5.5V15C10.5 15.2761 10.2761 15.5 10 15.5C9.72386 15.5 9.5 15.2761 9.5 15V5.5C9.5 5.22386 9.72386 5 10 5Z" fill="black"/>
</svg>
`;

const ArrowUpLeft = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_303_4999)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.85721 13.6409C7.03218 13.5659 6.42417 12.8363 6.49917 12.0112L6.97057 6.82578C7.04558 6.00075 7.77519 5.39274 8.60022 5.46774C9.42524 5.54274 10.0333 6.27236 9.95825 7.09738L9.48685 12.2828C9.41185 13.1079 8.68223 13.7159 7.85721 13.6409Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1437 6.35443C15.2187 7.17946 14.6107 7.90907 13.7857 7.98407L8.60022 8.45548C7.7752 8.53048 7.04558 7.92247 6.97058 7.09744C6.89558 6.27242 7.50359 5.5428 8.32861 5.4678L13.5141 4.99639C14.3391 4.92139 15.0687 5.52941 15.1437 6.35443Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.81794 7.31518C9.40373 6.72939 10.3535 6.72939 10.9393 7.31518L16.5961 12.972C17.1819 13.5578 17.1819 14.5076 16.5961 15.0934C16.0103 15.6791 15.0606 15.6791 14.4748 15.0934L8.81794 9.4365C8.23215 8.85071 8.23215 7.90096 8.81794 7.31518Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.94774 12.145C5.67274 12.12 5.47007 11.8768 5.49507 11.6018L5.96647 6.41631C5.99147 6.1413 6.23468 5.93863 6.50969 5.96363C6.78469 5.98864 6.98736 6.23184 6.96236 6.50685L6.49096 11.6923C6.46596 11.9673 6.22275 12.17 5.94774 12.145Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1478 5.94497C12.1728 6.21997 11.9701 6.46318 11.6951 6.48818L6.50969 6.95959C6.23468 6.98459 5.99148 6.78192 5.96647 6.50691C5.94147 6.2319 6.14414 5.98869 6.41915 5.96369L11.6046 5.49229C11.8796 5.46729 12.1228 5.66996 12.1478 5.94497Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.64651 6.64346C6.84178 6.44821 7.15836 6.44821 7.35362 6.64348L13.889 13.1791C14.0843 13.3744 14.0843 13.691 13.889 13.8862C13.6937 14.0815 13.3772 14.0815 13.1819 13.8862L6.6465 7.35057C6.45124 7.1553 6.45125 6.83872 6.64651 6.64346Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_303_4999">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const ArrowUpRight = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_303_4998)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.85617 6.35739C8.93117 5.53236 9.66079 4.92435 10.4858 4.99935L15.6713 5.47076C16.4963 5.54576 17.1043 6.27538 17.0293 7.1004C16.9543 7.92543 16.2247 8.53344 15.3997 8.45844L10.2142 7.98703C9.38918 7.91203 8.78117 7.18241 8.85617 6.35739Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.1427 13.6438C15.3176 13.7188 14.588 13.1108 14.513 12.2858L14.0416 7.10034C13.9666 6.27532 14.5746 5.5457 15.3997 5.4707C16.2247 5.3957 16.9543 6.00371 17.0293 6.82874L17.5007 12.0142C17.5757 12.8392 16.9677 13.5688 16.1427 13.6438Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1819 7.31812C15.7677 7.90391 15.7677 8.85366 15.1819 9.43944L9.52507 15.0963C8.93928 15.6821 7.98954 15.6821 7.40375 15.0963C6.81796 14.5105 6.81796 13.5608 7.40375 12.975L13.0606 7.31812C13.6464 6.73234 14.5961 6.73234 15.1819 7.31812Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.85206 5.9519C7.87706 5.67689 8.12027 5.47422 8.39528 5.49922L13.5807 5.97062C13.8557 5.99562 14.0584 6.23883 14.0334 6.51384C14.0084 6.78884 13.7652 6.99152 13.4902 6.96651L8.30474 6.49511C8.02973 6.47011 7.82706 6.2269 7.85206 5.9519Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0521 12.1519C13.7771 12.1769 13.5339 11.9742 13.5089 11.6992L13.0375 6.51378C13.0125 6.23877 13.2152 5.99556 13.4902 5.97056C13.7652 5.94556 14.0084 6.14823 14.0334 6.42324L14.5048 11.6087C14.5298 11.8837 14.3271 12.1269 14.0521 12.1519Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3535 6.65047C13.5488 6.84574 13.5488 7.16232 13.3535 7.35758L6.81796 13.8932C6.6227 14.0884 6.30612 14.0884 6.11085 13.8932C5.91559 13.6979 5.91559 13.3813 6.11085 13.1861L12.6464 6.65047C12.8417 6.45521 13.1583 6.45521 13.3535 6.65047Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_303_4998">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Bank = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M9.98353 2.1678C10.1464 2.06524 10.3536 2.06524 10.5165 2.1678L18.3107 7.0769C18.735 7.34413 18.5457 7.99997 18.0442 7.99997H2.45577C1.95433 7.99997 1.76501 7.34413 2.1893 7.0769L9.98353 2.1678Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 4.36361L7.65193 5.99997H12.8481L10.25 4.36361ZM10.5165 2.1678C10.3536 2.06524 10.1464 2.06524 9.98353 2.1678L2.1893 7.0769C1.76501 7.34413 1.95433 7.99997 2.45577 7.99997H18.0442C18.5457 7.99997 18.735 7.34413 18.3107 7.0769L10.5165 2.1678Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 17.5C1.75 16.9477 2.19772 16.5 2.75 16.5H17.75C18.3023 16.5 18.75 16.9477 18.75 17.5C18.75 18.0523 18.3023 18.5 17.75 18.5H2.75C2.19772 18.5 1.75 18.0523 1.75 17.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.25 9C4.80228 9 5.25 9.44772 5.25 10V15C5.25 15.5523 4.80228 16 4.25 16C3.69772 16 3.25 15.5523 3.25 15L3.25 10C3.25 9.44772 3.69772 9 4.25 9Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 9C7.80228 9 8.25 9.44772 8.25 10V15C8.25 15.5523 7.80228 16 7.25 16C6.69772 16 6.25 15.5523 6.25 15V10C6.25 9.44772 6.69772 9 7.25 9Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 9C10.8023 9 11.25 9.44772 11.25 10V15C11.25 15.5523 10.8023 16 10.25 16C9.69772 16 9.25 15.5523 9.25 15V10C9.25 9.44772 9.69772 9 10.25 9Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 9C13.8023 9 14.25 9.44772 14.25 10V15C14.25 15.5523 13.8023 16 13.25 16C12.6977 16 12.25 15.5523 12.25 15V10C12.25 9.44772 12.6977 9 13.25 9Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.25 9C16.8023 9 17.25 9.44772 17.25 10V15C17.25 15.5523 16.8023 16 16.25 16C15.6977 16 15.25 15.5523 15.25 15V10C15.25 9.44772 15.6977 9 16.25 9Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 2.68179L3.93782 6.49997H16.0622L10 2.68179ZM10.2665 1.6678C10.1036 1.56524 9.89637 1.56524 9.73353 1.6678L1.9393 6.5769C1.51501 6.84413 1.70433 7.49997 2.20577 7.49997H17.7942C18.2957 7.49997 18.485 6.84413 18.0607 6.5769L10.2665 1.6678Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 17C2 16.7239 2.22386 16.5 2.5 16.5H17.5C17.7761 16.5 18 16.7239 18 17C18 17.2761 17.7761 17.5 17.5 17.5H2.5C2.22386 17.5 2 17.2761 2 17Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 8.5C3.77614 8.5 4 8.72386 4 9V15C4 15.2761 3.77614 15.5 3.5 15.5C3.22386 15.5 3 15.2761 3 15L3 9C3 8.72386 3.22386 8.5 3.5 8.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 8.5C6.77614 8.5 7 8.72386 7 9V15C7 15.2761 6.77614 15.5 6.5 15.5C6.22386 15.5 6 15.2761 6 15V9C6 8.72386 6.22386 8.5 6.5 8.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 8.5C9.77614 8.5 10 8.72386 10 9V15C10 15.2761 9.77614 15.5 9.5 15.5C9.22386 15.5 9 15.2761 9 15V9C9 8.72386 9.22386 8.5 9.5 8.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 8.5C12.7761 8.5 13 8.72386 13 9V15C13 15.2761 12.7761 15.5 12.5 15.5C12.2239 15.5 12 15.2761 12 15V9C12 8.72386 12.2239 8.5 12.5 8.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 8.5C15.7761 8.5 16 8.72386 16 9V15C16 15.2761 15.7761 15.5 15.5 15.5C15.2239 15.5 15 15.2761 15 15V9C15 8.72386 15.2239 8.5 15.5 8.5Z" fill="black"/>
</svg>
`;

const Battery = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<rect x="3" y="7" width="13" height="8" rx="1" fill="currentColor"/>
<rect x="16.5" y="8.5" width="2" height="5" rx="0.5" fill="currentColor"/>
</g>
<rect x="16" y="7.5" width="2" height="5" rx="0.5" fill="black"/>
<path d="M4 7.5H6.5V12.5H4V7.5Z" fill="black"/>
<path d="M7.25 7.5H9.75V12.5H7.25V7.5Z" fill="black"/>
<rect x="10.5" y="7.5" width="2.5" height="5" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 5.5H3C2.17157 5.5 1.5 6.17157 1.5 7V13C1.5 13.8284 2.17157 14.5 3 14.5H14C14.8284 14.5 15.5 13.8284 15.5 13V7C15.5 6.17157 14.8284 5.5 14 5.5ZM2.5 7C2.5 6.72386 2.72386 6.5 3 6.5H14C14.2761 6.5 14.5 6.72386 14.5 7V13C14.5 13.2761 14.2761 13.5 14 13.5H3C2.72386 13.5 2.5 13.2761 2.5 13V7Z" fill="black"/>
</svg>
`;

const Bell = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M12.5 5.02242C15.3033 5.27504 17.5 7.63098 17.5 10.5V13.4254C18.4211 13.9472 19 14.9279 19 16C19 17.1046 18.1046 18 17 18H13.5C13.5 19.1046 12.6046 20 11.5 20C10.3954 20 9.5 19.1046 9.5 18H6C4.89543 18 4 17.1046 4 16C4 14.9279 4.5789 13.9472 5.5 13.4254V10.5C5.5 7.63098 7.69675 5.27504 10.5 5.02242L10.5 3C10.5 2.44771 10.9477 2 11.5 2C12.0523 2 12.5 2.44772 12.5 3L12.5 5.02242V5.02242Z" fill="currentColor"/>
<path d="M8 17C8 16.7239 8.22386 16.5 8.5 16.5C8.77614 16.5 9 16.7239 9 17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17C11 16.7239 11.2239 16.5 11.5 16.5C11.7761 16.5 12 16.7239 12 17C12 18.1046 11.1046 19 10 19C8.89543 19 8 18.1046 8 17Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 14.5C17.5 13.4279 16.9211 12.4472 16 11.9254V9C16 5.96243 13.5376 3.5 10.5 3.5H9.5C6.46243 3.5 4 5.96243 4 9V11.9254C3.0789 12.4472 2.5 13.4279 2.5 14.5C2.5 15.6046 3.39543 16.5 4.5 16.5H15.5C16.6046 16.5 17.5 15.6046 17.5 14.5ZM15 12.5583L15.2952 12.6908L15.35 12.7155C16.0502 13.0332 16.5 13.7311 16.5 14.5C16.5 15.0523 16.0523 15.5 15.5 15.5H4.5C3.94772 15.5 3.5 15.0523 3.5 14.5C3.5 13.7311 3.94976 13.0332 4.65004 12.7155L4.7048 12.6908L5 12.5583V9C5 6.51472 7.01472 4.5 9.5 4.5H10.5C12.9853 4.5 15 6.51472 15 9V12.5583Z" fill="black"/>
<path d="M9.5 1.5C9.5 1.22386 9.72386 1 10 1C10.2761 1 10.5 1.22386 10.5 1.5L10.5 4C10.5 4.27614 10.2761 4.5 10 4.5C9.72386 4.5 9.5 4.27614 9.5 4L9.5 1.5Z" fill="black"/>
</svg>
`;

const BellOff = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M12.5 5.02242C15.3033 5.27504 17.5 7.63098 17.5 10.5V13.4254C18.4211 13.9472 19 14.9279 19 16C19 17.1046 18.1046 18 17 18H13.5C13.5 19.1046 12.6046 20 11.5 20C10.3954 20 9.5 19.1046 9.5 18H6C4.89543 18 4 17.1046 4 16C4 14.9279 4.5789 13.9472 5.5 13.4254V10.5C5.5 7.63098 7.69675 5.27504 10.5 5.02242L10.5 3C10.5 2.44771 10.9477 2 11.5 2C12.0523 2 12.5 2.44772 12.5 3L12.5 5.02242V5.02242Z" fill="currentColor"/>
<path d="M8 17C8 16.7239 8.22386 16.5 8.5 16.5C8.77614 16.5 9 16.7239 9 17C9 17.5523 9.44772 18 10 18C10.5523 18 11 17.5523 11 17C11 16.7239 11.2239 16.5 11.5 16.5C11.7761 16.5 12 16.7239 12 17C12 18.1046 11.1046 19 10 19C8.89543 19 8 18.1046 8 17Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 14.5C17.5 13.4279 16.9211 12.4472 16 11.9254V9C16 5.96243 13.5376 3.5 10.5 3.5H9.5C6.46243 3.5 4 5.96243 4 9V11.9254C3.0789 12.4472 2.5 13.4279 2.5 14.5C2.5 15.6046 3.39543 16.5 4.5 16.5H15.5C16.6046 16.5 17.5 15.6046 17.5 14.5ZM15 12.5583L15.2952 12.6908L15.35 12.7155C16.0502 13.0332 16.5 13.7311 16.5 14.5C16.5 15.0523 16.0523 15.5 15.5 15.5H4.5C3.94772 15.5 3.5 15.0523 3.5 14.5C3.5 13.7311 3.94976 13.0332 4.65004 12.7155L4.7048 12.6908L5 12.5583V9C5 6.51472 7.01472 4.5 9.5 4.5H10.5C12.9853 4.5 15 6.51472 15 9V12.5583Z" fill="black"/>
<path d="M9.5 1.5C9.5 1.22386 9.72386 1 10 1C10.2761 1 10.5 1.22386 10.5 1.5L10.5 4C10.5 4.27614 10.2761 4.5 10 4.5C9.72386 4.5 9.5 4.27614 9.5 4L9.5 1.5Z" fill="black"/>
<path d="M2.64772 2.88933C2.45246 2.69407 2.45246 2.37748 2.64772 2.18222C2.84298 1.98696 3.15956 1.98696 3.35482 2.18222L19.3548 18.1822C19.5501 18.3775 19.5501 18.6941 19.3548 18.8893C19.1596 19.0846 18.843 19.0846 18.6477 18.8893L2.64772 2.88933Z" fill="black"/>
</svg>
`;

const Bicycle = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 20C7.03981 20 8.723 18.4732 8.96905 16.5H10.7105C11.0479 16.5 11.2884 16.1727 11.1877 15.8507L11.1519 15.7363L14.3662 10.323L14.8118 12.1794C13.1829 12.6855 12 14.2046 12 16C12 18.2091 13.7909 20 16 20C18.2091 20 20 18.2091 20 16C20 13.8966 18.3765 12.1724 16.3142 12.0122L14.4395 4.20066C15.5947 4.15838 16.4782 4.21095 17.078 4.35228C17.6121 4.47813 17.75 4.59459 17.75 4.67811C17.75 5.18897 17.51 5.34761 16.5749 5.25375C16.1628 5.21238 15.7951 5.51295 15.7537 5.9251C15.7124 6.33724 16.013 6.70488 16.4251 6.74625C18.1567 6.92006 19.25 6.19744 19.25 4.67811C19.25 2.97369 17.2603 2.49573 13.5094 2.74763C13.4582 2.74825 13.407 2.7537 13.3567 2.76375C13.3302 2.76887 13.3042 2.77537 13.2788 2.78317C12.9408 2.88486 12.6683 3.19872 12.7654 3.65171C12.768 3.66423 12.7709 3.67662 12.774 3.68888L13.9571 8.61839H8.92533L8.34087 6.75H9.5C9.91421 6.75 10.25 6.41421 10.25 6C10.25 5.58579 9.91421 5.25 9.5 5.25H5.5C5.08579 5.25 4.75 5.58579 4.75 6C4.75 6.41421 5.08579 6.75 5.5 6.75H7.29308L8.12324 9.40383L6.69192 12.3744C6.17806 12.1342 5.6047 12 5 12C2.79086 12 1 13.7909 1 16C1 18.2091 2.79086 20 5 20Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 18.5C17.7091 18.5 19.5 16.7091 19.5 14.5C19.5 12.2909 17.7091 10.5 15.5 10.5C13.2909 10.5 11.5 12.2909 11.5 14.5C11.5 16.7091 13.2909 18.5 15.5 18.5ZM15.5 11.5C17.1569 11.5 18.5 12.8431 18.5 14.5C18.5 16.1569 17.1569 17.5 15.5 17.5C13.8431 17.5 12.5 16.1569 12.5 14.5C12.5 12.8431 13.8431 11.5 15.5 11.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 18.5C6.70914 18.5 8.5 16.7091 8.5 14.5C8.5 12.2909 6.70914 10.5 4.5 10.5C2.29086 10.5 0.5 12.2909 0.5 14.5C0.5 16.7091 2.29086 18.5 4.5 18.5ZM4.5 11.5C6.15685 11.5 7.5 12.8431 7.5 14.5C7.5 16.1569 6.15685 17.5 4.5 17.5C2.84315 17.5 1.5 16.1569 1.5 14.5C1.5 12.8431 2.84315 11.5 4.5 11.5Z" fill="black"/>
<path d="M5 5C4.72386 5 4.5 4.77614 4.5 4.5C4.5 4.22386 4.72386 4 5 4H9C9.27614 4 9.5 4.22386 9.5 4.5C9.5 4.77614 9.27614 5 9 5H5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4748 14.3433L10.4404 14.2392L14.4237 7.88405C14.6324 7.55105 14.393 7.11852 14 7.11852L8.08918 7.11852L7.17283 4.34335C7.08625 4.08113 6.80349 3.93875 6.54127 4.02534C6.27905 4.11192 6.13667 4.39468 6.22326 4.65689L7.29481 7.9021L4.05433 14.2735C3.88515 14.6061 4.12681 15.0001 4.5 15.0001H10C10.3407 15.0001 10.5816 14.6669 10.4748 14.3433ZM5.31525 14.0001H9.30835L7.73645 9.23962L5.31525 14.0001ZM8.41937 8.11852L10.0332 13.006L13.0965 8.11852H8.41937Z" fill="black"/>
<path d="M13.5441 2.99899C13.2689 3.02279 13.0266 2.81906 13.0028 2.54394C12.979 2.26883 13.1828 2.02651 13.4579 2.00271C17.1126 1.68654 19.001 2.0642 19.001 3.50085C19.001 4.76632 18.0928 5.44744 16.5178 5.50056C16.2418 5.50987 16.0106 5.29369 16.0013 5.0177C15.9919 4.74172 16.2081 4.51044 16.4841 4.50113C17.5758 4.46431 18.001 4.14544 18.001 3.50085C18.001 3.02744 16.556 2.73843 13.5441 2.99899Z" fill="black"/>
<path d="M13.9932 2.41771L15.9932 14.4177C16.1028 15.0753 15.1164 15.2397 15.0068 14.5821L13.0068 2.58211C12.8972 1.92451 13.8836 1.76011 13.9932 2.41771Z" fill="black"/>
</svg>
`;

const Bluetooth = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_3466)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 11.7967L5.44352 16.6048C5.1095 16.8497 4.64015 16.7775 4.3952 16.4435C4.15025 16.1094 4.22245 15.6401 4.55648 15.3951L11.2317 10.5L4.55648 5.6048C4.22245 5.35985 4.15025 4.8905 4.3952 4.55647C4.64015 4.22245 5.1095 4.15024 5.44352 4.39519L12 9.20328L12 1.49995C12 1.08792 12.4704 0.852734 12.8 1.09995L18.8 5.59995C19.0667 5.79995 19.0667 6.19995 18.8 6.39995L13.3333 10.4999L18.8 14.5999C19.0667 14.7999 19.0667 15.1999 18.8 15.3999L12.8 19.8999C12.4704 20.1472 12 19.912 12 19.4999L12 11.7967Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2318 10.3975L16.8033 6.14748C17.0656 5.94737 17.0656 5.55251 16.8033 5.3524L11.2318 1.1024C10.9027 0.851366 10.4286 1.08604 10.4286 1.49994L10.4286 9.99994C10.4286 10.4138 10.9027 10.6485 11.2318 10.3975ZM11.4286 8.98966L11.4286 2.51022L15.6756 5.74994L11.4286 8.98966Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2318 18.8975L16.8033 14.6475C17.0656 14.4474 17.0656 14.0525 16.8033 13.8524L11.2318 9.6024C10.9027 9.35137 10.4286 9.58604 10.4286 9.99994L10.4286 18.4999C10.4286 18.9138 10.9027 19.1485 11.2318 18.8975ZM11.4286 11.0102L15.6756 14.2499L11.4286 17.4897L11.4286 11.0102Z" fill="black"/>
<path d="M11.2275 9.5991C11.4489 9.7642 11.4945 10.0775 11.3294 10.2988C11.1643 10.5202 10.851 10.5658 10.6296 10.4007L3.66535 5.20624C3.44399 5.04114 3.39839 4.72786 3.56349 4.50651C3.72859 4.28516 4.04187 4.23956 4.26323 4.40466L11.2275 9.5991Z" fill="black"/>
<path d="M11.2275 10.4008C11.4489 10.2357 11.4945 9.9224 11.3294 9.70104C11.1643 9.47969 10.851 9.43409 10.6296 9.59919L3.66535 14.7936C3.44399 14.9587 3.39839 15.272 3.56349 15.4934C3.72859 15.7147 4.04187 15.7603 4.26323 15.5952L11.2275 10.4008Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_3466">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Book = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M11 5.78986L18.3136 4.52084C18.3935 4.50697 18.4745 4.5 18.5556 4.5C19.357 4.5 20 5.164 20 5.97522V15.761C20 16.4819 19.489 17.1009 18.7868 17.2172L11.0817 18.4933C11.0203 18.5035 10.9599 18.502 10.9028 18.4907L3.25492 17.2241C2.53094 17.1042 2 16.4781 2 15.7443V6.01091C2 5.18248 2.67157 4.51091 3.5 4.51091C3.58596 4.51091 3.67175 4.5183 3.75644 4.53299L11 5.78986V5.78986Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0809 4.30391L2.24258 3.01941C2.16239 3.00627 2.08126 2.99966 2 2.99966C1.17157 2.99966 0.5 3.67124 0.5 4.49966V14.2366C0.5 14.9755 1.03815 15.6043 1.7682 15.7185L9.92273 16.994C10.226 17.0414 10.5 16.8069 10.5 16.5V4.79733C10.5 4.5524 10.3226 4.34352 10.0809 4.30391ZM2.08086 4.00625L9.5 5.22206V15.9157L1.92273 14.7305C1.67938 14.6925 1.5 14.4829 1.5 14.2366V4.49966C1.5 4.22352 1.72386 3.99966 2 3.99966C2.02709 3.99966 2.05413 4.00187 2.08086 4.00625Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 2.99966C17.9187 2.99966 17.8376 3.00627 17.7574 3.01941L9.91914 4.30391C9.67743 4.34352 9.5 4.5524 9.5 4.79733V16.5C9.5 16.8069 9.774 17.0414 10.0773 16.994L18.2318 15.7185C18.9619 15.6043 19.5 14.9755 19.5 14.2366V4.49966C19.5 3.67124 18.8284 2.99966 18 2.99966ZM18.0773 14.7305L10.5 15.9157V5.22206L17.9191 4.00625C17.9459 4.00187 17.9729 3.99966 18 3.99966C18.2761 3.99966 18.5 4.22352 18.5 4.49966V14.2366C18.5 14.4829 18.3206 14.6925 18.0773 14.7305Z" fill="black"/>
</svg>
`;

const Bookmark = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M12 14.6764L7.35472 19.3524C7.04021 19.669 6.5 19.4462 6.5 19V5C6.5 4.72386 6.72386 4.5 7 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5V19C17.5 19.4462 16.9598 19.669 16.6453 19.3524L12 14.6764Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.35472 17.3524L10 12.6764L14.6453 17.3524C14.9598 17.669 15.5 17.4462 15.5 17V3C15.5 2.72386 15.2761 2.5 15 2.5H5C4.72386 2.5 4.5 2.72386 4.5 3V17C4.5 17.4462 5.04021 17.669 5.35472 17.3524ZM5.5 15.7872V3.5H14.5V15.7872L10.3547 11.6146C10.1592 11.4178 9.84081 11.4178 9.64528 11.6146L5.5 15.7872Z" fill="black"/>
</svg>
`;

const Briefcase = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1210_869)">
<g opacity="0.8">
<path d="M6.4906 17.5H17.2094C18.3139 17.5 19.2094 16.6046 19.2094 15.5V13.5C19.2094 12.3954 18.3139 11.5 17.2094 11.5H6.4906C5.38603 11.5 4.4906 12.3954 4.4906 13.5V15.5C4.4906 16.6046 5.38603 17.5 6.4906 17.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.4906 12.5C5.93832 12.5 5.4906 12.9477 5.4906 13.5V15.5C5.4906 16.0523 5.93832 16.5 6.4906 16.5H17.2094C17.7616 16.5 18.2094 16.0523 18.2094 15.5V13.5C18.2094 12.9477 17.7616 12.5 17.2094 12.5H6.4906ZM3.4906 13.5C3.4906 11.8431 4.83375 10.5 6.4906 10.5H17.2094C18.8662 10.5 20.2094 11.8431 20.2094 13.5V15.5C20.2094 17.1569 18.8662 18.5 17.2094 18.5H6.4906C4.83375 18.5 3.4906 17.1569 3.4906 15.5V13.5Z" fill="currentColor"/>
<path d="M4 7.5C4 6.94772 4.44772 6.5 5 6.5H18.7C19.2523 6.5 19.7 6.94772 19.7 7.5V10.5C19.7 11.6046 18.8046 12.5 17.7 12.5H6C4.89543 12.5 4 11.6046 4 10.5V7.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 7.5C3 6.39543 3.89543 5.5 5 5.5H18.7C19.8046 5.5 20.7 6.39543 20.7 7.5V10.5C20.7 12.1569 19.3569 13.5 17.7 13.5H6C4.34315 13.5 3 12.1569 3 10.5V7.5ZM18.7 7.5H5V10.5C5 11.0523 5.44772 11.5 6 11.5H17.7C18.2523 11.5 18.7 11.0523 18.7 10.5V7.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.92499 5.24173V7H6.92499V5.24173C6.92499 5.00088 6.95399 4.7609 7.01138 4.52698L7.07067 4.28525C7.39983 2.94349 8.60274 2 9.98429 2H13.7157C15.0972 2 16.3002 2.94349 16.6293 4.28525L16.6886 4.52698C16.746 4.7609 16.775 5.00088 16.775 5.24173V7H14.775V5.24173C14.775 5.16144 14.7653 5.08145 14.7462 5.00348L14.6869 4.76175C14.5772 4.3145 14.1762 4 13.7157 4H9.98429C9.52377 4 9.1228 4.3145 9.01308 4.76175L8.95378 5.00348C8.93466 5.08145 8.92499 5.16144 8.92499 5.24173Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 11.5V15C3 15.8284 3.67157 16.5 4.5 16.5H15.5C16.3284 16.5 17 15.8284 17 15V11.5H18V15C18 16.3807 16.8807 17.5 15.5 17.5H4.5C3.11929 17.5 2 16.3807 2 15V11.5H3Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 7C1.5 6.17157 2.17157 5.5 3 5.5H17C17.8284 5.5 18.5 6.17157 18.5 7V10C18.5 11.3807 17.3807 12.5 16 12.5H4C2.61929 12.5 1.5 11.3807 1.5 10V7ZM3 6.5C2.72386 6.5 2.5 6.72386 2.5 7V10C2.5 10.8284 3.17157 11.5 4 11.5H16C16.8284 11.5 17.5 10.8284 17.5 10V7C17.5 6.72386 17.2761 6.5 17 6.5H3Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 4.74621V6.5H5.5V4.74621C5.5 4.54181 5.52507 4.33817 5.57464 4.13987L5.6362 3.89366C5.91443 2.78074 6.91438 2 8.06155 2H11.9384C13.0856 2 14.0856 2.78074 14.3638 3.89366L14.4254 4.13987C14.4749 4.33817 14.5 4.54181 14.5 4.74621V6.5H13.5V4.74621C13.5 4.62357 13.485 4.50139 13.4552 4.38241L13.3937 4.1362C13.2267 3.46845 12.6267 3 11.9384 3L8.06155 3C7.37325 3 6.77328 3.46845 6.60634 4.1362L6.54479 4.38241C6.51504 4.50139 6.5 4.62357 6.5 4.74621Z" fill="black"/>
<path d="M7.866 11.5C7.4811 12.1667 6.51885 12.1667 6.13395 11.5L5.26793 10C4.88302 9.33333 5.36415 8.5 6.13395 8.5H7.866C8.6358 8.5 9.11693 9.33333 8.73203 10L7.866 11.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 11C7.41421 11 7.75 11.3358 7.75 11.75V13.5C7.75 13.9142 7.41421 14.25 7 14.25C6.58579 14.25 6.25 13.9142 6.25 13.5V11.75C6.25 11.3358 6.58579 11 7 11Z" fill="black"/>
<path d="M13.866 11.5C13.4811 12.1667 12.5189 12.1667 12.1339 11.5L11.2679 10C10.883 9.33333 11.3641 8.5 12.134 8.5H13.866C14.6358 8.5 15.1169 9.33333 14.732 10L13.866 11.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 11C13.4142 11 13.75 11.3358 13.75 11.75V13.5C13.75 13.9142 13.4142 14.25 13 14.25C12.5858 14.25 12.25 13.9142 12.25 13.5V11.75C12.25 11.3358 12.5858 11 13 11Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1210_869">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Building = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 18.25H19C19.4142 18.25 19.75 18.5858 19.75 19C19.75 19.4142 19.4142 19.75 19 19.75H5C4.58579 19.75 4.25 19.4142 4.25 19C4.25 18.5858 4.58579 18.25 5 18.25H7V6.30769C7 4.77168 8.10212 3.5 9.5 3.5H14.5C15.8979 3.5 17 4.77168 17 6.30769V18.25Z" fill="currentColor"/>
</g>
<path d="M2.5 18.5C2.22386 18.5 2 18.2761 2 18C2 17.7239 2.22386 17.5 2.5 17.5H18.5C18.7761 17.5 19 17.7239 19 18C19 18.2761 18.7761 18.5 18.5 18.5H2.5Z" fill="black"/>
<path d="M6.5 17.5C6.5 17.7761 6.27614 18 6 18C5.72386 18 5.5 17.7761 5.5 17.5V4.80769C5.5 3.27168 6.60212 2 8 2H13C14.3979 2 15.5 3.27168 15.5 4.80769V17.5C15.5 17.7761 15.2761 18 15 18C14.7239 18 14.5 17.7761 14.5 17.5V4.80769C14.5 3.7947 13.8113 3 13 3H8C7.18874 3 6.5 3.7947 6.5 4.80769V17.5Z" fill="black"/>
<path d="M8.5 4.5H9.5C9.77614 4.5 10 4.72386 10 5V6C10 6.27614 9.77614 6.5 9.5 6.5H8.5C8.22386 6.5 8 6.27614 8 6V5C8 4.72386 8.22386 4.5 8.5 4.5Z" fill="black"/>
<path d="M11.5 4.5H12.5C12.7761 4.5 13 4.72386 13 5V6C13 6.27614 12.7761 6.5 12.5 6.5H11.5C11.2239 6.5 11 6.27614 11 6V5C11 4.72386 11.2239 4.5 11.5 4.5Z" fill="black"/>
<path d="M11.5 7.5H12.5C12.7761 7.5 13 7.72386 13 8V9C13 9.27614 12.7761 9.5 12.5 9.5H11.5C11.2239 9.5 11 9.27614 11 9V8C11 7.72386 11.2239 7.5 11.5 7.5Z" fill="black"/>
<path d="M11.5 10.5H12.5C12.7761 10.5 13 10.7239 13 11V12C13 12.2761 12.7761 12.5 12.5 12.5H11.5C11.2239 12.5 11 12.2761 11 12V11C11 10.7239 11.2239 10.5 11.5 10.5Z" fill="black"/>
<path d="M11.5 13.5H12.5C12.7761 13.5 13 13.7239 13 14V15C13 15.2761 12.7761 15.5 12.5 15.5H11.5C11.2239 15.5 11 15.2761 11 15V14C11 13.7239 11.2239 13.5 11.5 13.5Z" fill="black"/>
<path d="M8.5 7.5H9.5C9.77614 7.5 10 7.72386 10 8V9C10 9.27614 9.77614 9.5 9.5 9.5H8.5C8.22386 9.5 8 9.27614 8 9V8C8 7.72386 8.22386 7.5 8.5 7.5Z" fill="black"/>
<path d="M8.5 13.5H9.5C9.77614 13.5 10 13.7239 10 14V15C10 15.2761 9.77614 15.5 9.5 15.5H8.5C8.22386 15.5 8 15.2761 8 15V14C8 13.7239 8.22386 13.5 8.5 13.5Z" fill="black"/>
<path d="M8.5 10.5H9.5C9.77614 10.5 10 10.7239 10 11V12C10 12.2761 9.77614 12.5 9.5 12.5H8.5C8.22386 12.5 8 12.2761 8 12V11C8 10.7239 8.22386 10.5 8.5 10.5Z" fill="black"/>
</svg>
`;

const Calculator = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M4 18.1053L4 3.89474C4 2.8483 4.86558 2 5.93333 2H16.5667C17.6344 2 18.5 2.8483 18.5 3.89474V18.1053C18.5 19.1517 17.6344 20 16.5667 20H5.93333C4.86558 20 4 19.1517 4 18.1053Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 3V17C2.5 18.3807 3.61929 19.5 5 19.5H15C16.3807 19.5 17.5 18.3807 17.5 17V3C17.5 1.61929 16.3807 0.5 15 0.5H5C3.61929 0.5 2.5 1.61929 2.5 3ZM5 18.5C4.17157 18.5 3.5 17.8284 3.5 17V3C3.5 2.17157 4.17157 1.5 5 1.5H15C15.8284 1.5 16.5 2.17157 16.5 3V17C16.5 17.8284 15.8284 18.5 15 18.5H5Z" fill="black"/>
<path d="M5 7.5V3.5C5 3.22386 5.22386 3 5.5 3H14.5C14.7761 3 15 3.22386 15 3.5V7.5C15 7.77614 14.7761 8 14.5 8H5.5C5.22386 8 5 7.77614 5 7.5Z" fill="black"/>
<path d="M12 15.7V10.8C12 10.3582 12.3582 10 12.8 10H14.2C14.6418 10 15 10.3582 15 10.8V15.7C15 16.1418 14.6418 16.5 14.2 16.5H12.8C12.3582 16.5 12 16.1418 12 15.7Z" fill="black"/>
<path d="M5 12V10.5C5 10.2239 5.22386 10 5.5 10H7C7.27614 10 7.5 10.2239 7.5 10.5V12C7.5 12.2761 7.27614 12.5 7 12.5H5.5C5.22386 12.5 5 12.2761 5 12Z" fill="black"/>
<path d="M8.5 12V10.5C8.5 10.2239 8.72386 10 9 10H10.5C10.7761 10 11 10.2239 11 10.5V12C11 12.2761 10.7761 12.5 10.5 12.5H9C8.72386 12.5 8.5 12.2761 8.5 12Z" fill="black"/>
<path d="M5 16V14.5C5 14.2239 5.22386 14 5.5 14H7C7.27614 14 7.5 14.2239 7.5 14.5V16C7.5 16.2761 7.27614 16.5 7 16.5H5.5C5.22386 16.5 5 16.2761 5 16Z" fill="black"/>
<path d="M8.5 16V14.5C8.5 14.2239 8.72386 14 9 14H10.5C10.7761 14 11 14.2239 11 14.5V16C11 16.2761 10.7761 16.5 10.5 16.5H9C8.72386 16.5 8.5 16.2761 8.5 16Z" fill="black"/>
</svg>
`;

const Calendar = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.8" x="5" y="6" width="14" height="12" rx="1" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 4.5H3.5C3.22386 4.5 3 4.72386 3 5V16C3 16.2761 3.22386 16.5 3.5 16.5H16.5C16.7761 16.5 17 16.2761 17 16V5C17 4.72386 16.7761 4.5 16.5 4.5ZM4 15.5V5.5H16V15.5H4Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 4.5H3.5C3.22386 4.5 3 4.72386 3 5V8C3 8.27614 3.22386 8.5 3.5 8.5H16.5C16.7761 8.5 17 8.27614 17 8V5C17 4.72386 16.7761 4.5 16.5 4.5ZM4 7.5V5.5H16V7.5H4Z" fill="black"/>
<path d="M5.5 5.5H6.5C6.77614 5.5 7 5.27614 7 5V4C7 3.72386 6.77614 3.5 6.5 3.5H5.5C5.22386 3.5 5 3.72386 5 4V5C5 5.27614 5.22386 5.5 5.5 5.5Z" fill="black"/>
<path d="M13.5 5.5H14.5C14.7761 5.5 15 5.27614 15 5V4C15 3.72386 14.7761 3.5 14.5 3.5H13.5C13.2239 3.5 13 3.72386 13 4V5C13 5.27614 13.2239 5.5 13.5 5.5Z" fill="black"/>
<path d="M6 11.5C5.44772 11.5 5 11.0523 5 10.5C5 9.94772 5.44772 9.5 6 9.5C6.55228 9.5 7 9.94772 7 10.5C7 11.0523 6.55228 11.5 6 11.5Z" fill="black"/>
</svg>
`;

const Camera = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 6.5H7C5.61929 6.5 4.5 7.61929 4.5 9V14C4.5 15.3807 5.61929 16.5 7 16.5H13C14.3807 16.5 15.5 15.3807 15.5 14V13.9759L17.8477 15.541C18.1799 15.7625 18.625 15.5243 18.625 15.125V8.125C18.625 7.72565 18.1799 7.48746 17.8477 7.70897L15.5 9.27408V9C15.5 7.61929 14.3807 6.5 13 6.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 4.5H5C3.61929 4.5 2.5 5.61929 2.5 7V12C2.5 13.3807 3.61929 14.5 5 14.5H11C12.3807 14.5 13.5 13.3807 13.5 12V7C13.5 5.61929 12.3807 4.5 11 4.5ZM3.5 7C3.5 6.17157 4.17157 5.5 5 5.5H11C11.8284 5.5 12.5 6.17157 12.5 7V12C12.5 12.8284 11.8284 13.5 11 13.5H5C4.17157 13.5 3.5 12.8284 3.5 12V7Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7275 5.58078L12.7507 7.5157C12.6104 7.60692 12.525 7.76231 12.5232 7.92968L12.4958 10.542C12.494 10.7131 12.5799 10.8732 12.7233 10.9665L15.7275 12.9192C16.0601 13.1354 16.5 12.8967 16.5 12.5V6C16.5 5.60328 16.0601 5.36457 15.7275 5.58078ZM15.5 11.5787L13.4987 10.2778L13.5204 8.20811L15.5 6.92134V11.5787Z" fill="black"/>
</svg>
`;

const Can = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M9 3H14C15.6667 3.66667 16.6667 4.66667 17 6V16C17 17.6569 15.6569 19 14 19H9C7.34315 19 6 17.6569 6 16V6C6.33333 4.66667 7.33333 3.66667 9 3Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 2H7.5C5.83333 2.66667 4.83333 3.66667 4.5 5V15C4.5 16.6569 5.84315 18 7.5 18H12.5C14.1569 18 15.5 16.6569 15.5 15V5C15.1667 3.66667 14.1667 2.66667 12.5 2ZM5.5 15V5.13263C5.76428 4.2329 6.46901 3.52753 7.69872 3H12.3013C13.531 3.52753 14.2357 4.2329 14.5 5.13263V15C14.5 16.1046 13.6046 17 12.5 17H7.5C6.39543 17 5.5 16.1046 5.5 15Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 9.5C7 11.7091 8.79086 13.5 11 13.5C13.2091 13.5 15 11.7091 15 9.5C15 7.29086 13.2091 5.5 11 5.5C8.79086 5.5 7 7.29086 7 9.5ZM14 9.5C14 11.1569 12.6569 12.5 11 12.5C9.34315 12.5 8 11.1569 8 9.5C8 7.84315 9.34315 6.5 11 6.5C12.6569 6.5 14 7.84315 14 9.5Z" fill="black"/>
<path d="M12.074 6.50549L13.0605 6.66932C12.8934 7.67545 12.3874 8.60748 11.5554 9.45909C10.7241 10.3101 9.59116 10.9196 8.16632 11.2925L7.91317 10.325C9.17196 9.99565 10.1444 9.47247 10.8401 8.76028C11.5353 8.0487 11.9422 7.29921 12.074 6.50549Z" fill="black"/>
<path d="M13.342 7.61187C13.3008 7.3388 13.4889 7.08411 13.762 7.04301C14.035 7.0019 14.2897 7.18994 14.3308 7.46301C14.492 8.53379 14.3614 9.40881 13.9145 10.0712C13.3957 10.84 12.6016 11.2783 11.834 11.4795C11.7433 11.5033 11.6048 11.5346 11.3885 11.5813C11.2817 11.6043 10.8578 11.6945 10.7761 11.712C10.7206 11.7239 10.7206 11.7239 10.6653 11.7358C10.3994 11.7933 10.1986 11.8385 10.0432 11.8767C9.81481 11.9327 9.3984 12.0609 8.80309 12.259C8.54108 12.3462 8.25798 12.2045 8.17078 11.9425C8.08357 11.6805 8.22528 11.3974 8.48729 11.3102C9.10681 11.104 9.54295 10.9698 9.80484 10.9055C9.9714 10.8646 10.1799 10.8176 10.4542 10.7584C10.5103 10.7463 10.5103 10.7463 10.5665 10.7342C10.6495 10.7164 11.0726 10.6264 11.1777 10.6038C11.3794 10.5603 11.5089 10.5309 11.5805 10.5122C12.1353 10.3668 12.7303 10.0384 13.0855 9.51186C13.3752 9.08259 13.4689 8.45488 13.342 7.61187Z" fill="black"/>
</svg>
`;

const Car = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.27323 4.00237C6.54965 4.17438 5.98127 4.73371 5.79768 5.45445L4.60127 10.1512C3.68774 10.336 3 11.1434 3 12.1115V15C3 15.8061 3.4769 16.5008 4.16395 16.8174C4.05913 17.0222 4 17.2542 4 17.5V18.5C4 19.3284 4.67157 20 5.5 20C6.32843 20 7 19.3284 7 18.5V17.5C7 17.3247 6.96992 17.1564 6.91465 17H16.0854C16.0301 17.1564 16 17.3247 16 17.5V18.5C16 19.3284 16.6716 20 17.5 20C18.3284 20 19 19.3284 19 18.5V17.5C19 17.2542 18.9409 17.0222 18.836 16.8174C19.5231 16.5008 20 15.8061 20 15V12.1115C20 11.1434 19.3123 10.336 18.3987 10.1512L17.2023 5.45433C17.0187 4.73367 16.4504 4.17437 15.7269 4.00229C14.3193 3.66752 12.9103 3.5 11.5007 3.5C10.0911 3.5 8.68164 3.66755 7.27323 4.00237Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.29768 3.95445L3.10127 8.65122C2.18774 8.83604 1.5 9.64344 1.5 10.6115V13.5C1.5 14.6046 2.39543 15.5 3.5 15.5L16.5 15.5C17.6046 15.5 18.5 14.6046 18.5 13.5V10.6115C18.5 9.64344 17.8123 8.83604 16.8987 8.65122L15.7023 3.95433C15.5187 3.23367 14.9504 2.67437 14.2269 2.50229C12.8193 2.16752 11.4103 2 10.0007 2C8.59105 2 7.18164 2.16755 5.77323 2.50237C5.04965 2.67438 4.48127 3.23371 4.29768 3.95445ZM3.5 9.61147C3.72861 9.61147 3.9281 9.45643 3.98453 9.2349L5.26673 4.2013C5.35853 3.84093 5.64272 3.56126 6.00452 3.47525C7.33767 3.15832 8.66949 3 10.0007 3C11.3318 3 12.6632 3.15829 13.9955 3.47515C14.3573 3.56119 14.6414 3.84085 14.7332 4.20118L16.0155 9.2349C16.0719 9.45643 16.2714 9.61147 16.5 9.61147C17.0523 9.61147 17.5 10.0592 17.5 10.6115V13.5C17.5 14.0523 17.0523 14.5 16.5 14.5H3.5C2.94772 14.5 2.5 14.0523 2.5 13.5V10.6115C2.5 10.0592 2.94772 9.61147 3.5 9.61147Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 16C5.5 15.1716 4.82843 14.5 4 14.5C3.17157 14.5 2.5 15.1716 2.5 16V17C2.5 17.8284 3.17157 18.5 4 18.5C4.82843 18.5 5.5 17.8284 5.5 17V16ZM3.5 16C3.5 15.7239 3.72386 15.5 4 15.5C4.27614 15.5 4.5 15.7239 4.5 16V17C4.5 17.2761 4.27614 17.5 4 17.5C3.72386 17.5 3.5 17.2761 3.5 17V16Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 16C17.5 15.1716 16.8284 14.5 16 14.5C15.1716 14.5 14.5 15.1716 14.5 16V17C14.5 17.8284 15.1716 18.5 16 18.5C16.8284 18.5 17.5 17.8284 17.5 17V16ZM15.5 16C15.5 15.7239 15.7239 15.5 16 15.5C16.2761 15.5 16.5 15.7239 16.5 16V17C16.5 17.2761 16.2761 17.5 16 17.5C15.7239 17.5 15.5 17.2761 15.5 17V16Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 13.5C15.8284 13.5 16.5 12.8284 16.5 12C16.5 11.1716 15.8284 10.5 15 10.5C14.1716 10.5 13.5 11.1716 13.5 12C13.5 12.8284 14.1716 13.5 15 13.5ZM15 11.5C15.2761 11.5 15.5 11.7239 15.5 12C15.5 12.2761 15.2761 12.5 15 12.5C14.7239 12.5 14.5 12.2761 14.5 12C14.5 11.7239 14.7239 11.5 15 11.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 13.5C5.82843 13.5 6.5 12.8284 6.5 12C6.5 11.1716 5.82843 10.5 5 10.5C4.17157 10.5 3.5 11.1716 3.5 12C3.5 12.8284 4.17157 13.5 5 13.5ZM5 11.5C5.27614 11.5 5.5 11.7239 5.5 12C5.5 12.2761 5.27614 12.5 5 12.5C4.72386 12.5 4.5 12.2761 4.5 12C4.5 11.7239 4.72386 11.5 5 11.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6476 4.5H7.35208C6.66122 4.5 6.05972 4.97186 5.89522 5.64284L5.4049 7.64284C5.37625 7.75973 5.36176 7.87965 5.36176 8C5.36176 8.82843 6.03334 9.5 6.86176 9.5H13.1379C13.2582 9.5 13.3782 9.48552 13.495 9.45686C14.2996 9.2596 14.792 8.44744 14.5947 7.64284L14.1044 5.64284C13.9399 4.97186 13.3384 4.5 12.6476 4.5ZM6.86646 5.88095C6.92129 5.65729 7.12179 5.5 7.35208 5.5H12.6476C12.8779 5.5 13.0784 5.65729 13.1332 5.88095L13.6235 7.88095C13.6893 8.14915 13.5251 8.41987 13.2569 8.48562C13.218 8.49517 13.178 8.5 13.1379 8.5H6.86176C6.58562 8.5 6.36176 8.27614 6.36176 8C6.36176 7.95988 6.36659 7.91991 6.37614 7.88095L6.86646 5.88095Z" fill="black"/>
</svg>
`;

const Cart = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.21893 2.75H4.2C3.78579 2.75 3.45 2.41421 3.45 2C3.45 1.58579 3.78579 1.25 4.2 1.25H5.80284C6.14621 1.25 6.44573 1.48319 6.52994 1.81608L8.03184 7.7535C8.19308 7.66344 8.36948 7.59443 8.5583 7.55091C8.70507 7.51708 8.85517 7.5 9.00574 7.5H16.9946C18.1032 7.5 19 8.40519 19 9.51948C19 9.67043 18.9832 9.82091 18.9499 9.96809L18.1669 13.4291C17.9591 14.3474 17.1482 15 16.2115 15H9.78879C8.85212 15 8.04122 14.3474 7.83348 13.4291L7.05044 9.96809C7.0395 9.91977 7.03039 9.87144 7.02305 9.8232C7.00217 9.77935 6.98527 9.73281 6.9729 9.68392L5.21893 2.75ZM9.25 18.5C10.2165 18.5 11 17.7165 11 16.75C11 15.7835 10.2165 15 9.25 15C8.2835 15 7.5 15.7835 7.5 16.75C7.5 17.7165 8.2835 18.5 9.25 18.5ZM16.25 18.5C17.2165 18.5 18 17.7165 18 16.75C18 15.7835 17.2165 15 16.25 15C15.2835 15 14.5 15.7835 14.5 16.75C14.5 17.7165 15.2835 18.5 16.25 18.5Z" fill="currentColor"/>
</g>
<path d="M3.71231 2.5L2.5 2.5C2.22386 2.5 2 2.27614 2 2C2 1.72386 2.22386 1.5 2.5 1.5L4.10284 1.5C4.33234 1.5 4.53237 1.65624 4.58795 1.8789L6.48511 9.4789C6.55199 9.74682 6.38902 10.0182 6.1211 10.0851C5.85318 10.152 5.58177 9.98902 5.51489 9.7211L3.71231 2.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4946 7.5H7.50575C7.35517 7.5 7.20507 7.51708 7.0583 7.55091C5.97851 7.79979 5.30478 8.88231 5.55044 9.96809L6.33348 13.4291C6.54122 14.3474 7.35212 15 8.28879 15H14.7115C15.6482 15 16.4591 14.3474 16.6669 13.4291L17.4499 9.96809C17.4832 9.82091 17.5 9.67043 17.5 9.51948C17.5 8.40519 16.6032 7.5 15.4946 7.5ZM7.2829 8.52536C7.35602 8.5085 7.43077 8.5 7.50575 8.5H15.4946C16.0488 8.5 16.5 8.9554 16.5 9.51948C16.5 9.5962 16.4915 9.67266 16.4745 9.74743L15.6915 13.2085C15.5865 13.6724 15.1795 14 14.7115 14H8.28879C7.82086 14 7.41379 13.6724 7.30883 13.2085L6.52579 9.74743C6.40125 9.19696 6.74158 8.65013 7.2829 8.52536Z" fill="black"/>
<path d="M17 16.75C17 17.7165 16.2165 18.5 15.25 18.5C14.2835 18.5 13.5 17.7165 13.5 16.75C13.5 15.7835 14.2835 15 15.25 15C16.2165 15 17 15.7835 17 16.75Z" fill="black"/>
<path d="M10 16.75C10 17.7165 9.2165 18.5 8.25 18.5C7.2835 18.5 6.5 17.7165 6.5 16.75C6.5 15.7835 7.2835 15 8.25 15C9.2165 15 10 15.7835 10 16.75Z" fill="black"/>
</svg>
`;

const CellphoneEye = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1213_2298)">
<g opacity="0.8">
<path d="M17 3H10C8.89543 3 8 3.89543 8 5V18V18.5C8 19.3284 8.67157 20 9.5 20H17C18.1046 20 19 19.1046 19 18V5C19 3.89543 18.1046 3 17 3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H17C18.6569 2 20 3.34315 20 5V18C20 19.6569 18.6569 21 17 21H9.5C8.11929 21 7 19.8807 7 18.5V5ZM10 4C9.44772 4 9 4.44772 9 5V18.5C9 18.7761 9.22386 19 9.5 19H17C17.5523 19 18 18.5523 18 18V5C18 4.44772 17.5523 4 17 4H10Z" fill="currentColor"/>
<path d="M6.91748 10.9691C9.08105 10.9691 10.835 11.9556 10.835 13.1726C10.835 14.3896 9.08105 15.3762 6.91748 15.3762C4.75392 15.3762 3 14.3896 3 13.1726C3 11.9556 4.75392 10.9691 6.91748 10.9691Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.63766 13.8592C5.17091 14.1592 5.97491 14.3762 6.91748 14.3762C7.86005 14.3762 8.66405 14.1592 9.1973 13.8592C9.76189 13.5416 9.83496 13.2594 9.83496 13.1726C9.83496 13.0859 9.76189 12.8036 9.1973 12.486C8.66405 12.1861 7.86005 11.9691 6.91748 11.9691C5.97491 11.9691 5.17091 12.1861 4.63766 12.486C4.07308 12.8036 4 13.0859 4 13.1726C4 13.2594 4.07308 13.5416 4.63766 13.8592ZM3.65714 15.6024C2.80388 15.1224 2 14.3029 2 13.1726C2 12.0424 2.80388 11.2229 3.65714 10.7429C4.54175 10.2453 5.69648 9.96906 6.91748 9.96906C8.13848 9.96906 9.29321 10.2453 10.1778 10.7429C11.0311 11.2229 11.835 12.0424 11.835 13.1726C11.835 14.3029 11.0311 15.1224 10.1778 15.6024C9.29321 16.1 8.13848 16.3762 6.91748 16.3762C5.69648 16.3762 4.54175 16.1 3.65714 15.6024Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.91746 8.59998C7.41451 8.59998 7.81746 9.00292 7.81746 9.49998L7.81746 10.969C7.81746 11.4661 7.41451 11.869 6.91746 11.869C6.4204 11.869 6.01746 11.4661 6.01746 10.969L6.01746 9.49998C6.01746 9.00292 6.4204 8.59998 6.91746 8.59998Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.05272 8.86238C9.54013 8.95986 9.85622 9.434 9.75874 9.9214L9.5139 11.1456C9.41642 11.633 8.94227 11.9491 8.45487 11.8516C7.96747 11.7542 7.65137 11.28 7.74885 10.7926L7.99369 9.5684C8.09118 9.08099 8.56532 8.7649 9.05272 8.86238Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.78224 8.86238C4.29484 8.95986 3.97874 9.434 4.07622 9.9214L4.32106 11.1456C4.41854 11.633 4.89269 11.9491 5.38009 11.8516C5.86749 11.7542 6.18359 11.28 6.08611 10.7926L5.84127 9.5684C5.74379 9.08099 5.26964 8.7649 4.78224 8.86238Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.53693 9.70762C2.11071 9.96335 1.9725 10.5162 2.22824 10.9424L2.96276 12.1666C3.2185 12.5928 3.77133 12.731 4.19755 12.4753C4.62378 12.2196 4.76198 11.6667 4.50625 11.2405L3.77172 10.0163C3.51599 9.59009 2.96316 9.45188 2.53693 9.70762Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2979 9.70762C11.7241 9.96335 11.8623 10.5162 11.6066 10.9424L10.8721 12.1666C10.6163 12.5928 10.0635 12.731 9.63729 12.4753C9.21106 12.2196 9.07285 11.6667 9.32859 11.2405L10.0631 10.0163C10.3188 9.59009 10.8717 9.45188 11.2979 9.70762Z" fill="currentColor"/>
</g>
<path d="M12.675 15.1375C12.675 15.5103 12.3727 15.8125 12 15.8125C11.6272 15.8125 11.325 15.5103 11.325 15.1375C11.325 14.7647 11.6272 14.4625 12 14.4625C12.3727 14.4625 12.675 14.7647 12.675 15.1375Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.9625C11.9033 14.9625 11.825 15.0409 11.825 15.1375C11.825 15.2342 11.9033 15.3125 12 15.3125C12.0966 15.3125 12.175 15.2342 12.175 15.1375C12.175 15.0409 12.0966 14.9625 12 14.9625ZM10.825 15.1375C10.825 14.4886 11.351 13.9625 12 13.9625C12.6489 13.9625 13.175 14.4886 13.175 15.1375C13.175 15.7865 12.6489 16.3125 12 16.3125C11.351 16.3125 10.825 15.7865 10.825 15.1375Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 3.5C6 2.11929 7.11929 1 8.5 1H15.5C16.8807 1 18 2.11929 18 3.5V16.5C18 17.8807 16.8807 19 15.5 19H8C6.89543 19 6 18.1046 6 17V15.5C6 15.2239 6.22386 15 6.5 15C6.77614 15 7 15.2239 7 15.5V17C7 17.5523 7.44772 18 8 18H15.5C16.3284 18 17 17.3284 17 16.5V3.5C17 2.67157 16.3284 2 15.5 2H8.5C7.67157 2 7 2.67157 7 3.5V6.75C7 7.02614 6.77614 7.25 6.5 7.25C6.22386 7.25 6 7.02614 6 6.75V3.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.89253 12.795C3.51362 13.1444 4.40531 13.3762 5.41748 13.3762C6.42965 13.3762 7.32134 13.1444 7.94243 12.795C8.57918 12.4368 8.83496 12.0203 8.83496 11.6726C8.83496 11.325 8.57918 10.9084 7.94243 10.5503C7.32134 10.2009 6.42965 9.96906 5.41748 9.96906C4.40531 9.96906 3.51362 10.2009 2.89253 10.5503C2.25578 10.9084 2 11.325 2 11.6726C2 12.0203 2.25578 12.4368 2.89253 12.795ZM2.40227 13.6666C1.62118 13.2272 1 12.542 1 11.6726C1 10.8033 1.62118 10.118 2.40227 9.67868C3.19904 9.2305 4.26609 8.96906 5.41748 8.96906C6.56887 8.96906 7.63592 9.2305 8.43269 9.67868C9.21378 10.118 9.83496 10.8033 9.83496 11.6726C9.83496 12.542 9.21378 13.2272 8.43269 13.6666C7.63592 14.1148 6.56887 14.3762 5.41748 14.3762C4.26609 14.3762 3.19904 14.1148 2.40227 13.6666Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.41748 7.5C5.69362 7.5 5.91748 7.72386 5.91748 8L5.91748 9.46906C5.91748 9.7452 5.69362 9.96906 5.41748 9.96906C5.14134 9.96906 4.91748 9.7452 4.91748 9.46906L4.91748 8C4.91748 7.72386 5.14134 7.5 5.41748 7.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.47422 7.75456C7.745 7.80871 7.92061 8.07213 7.86645 8.34291L7.62161 9.56712C7.56746 9.8379 7.30404 10.0135 7.03326 9.95935C6.76248 9.90519 6.58688 9.64178 6.64103 9.371L6.88587 8.14679C6.94003 7.87601 7.20344 7.7004 7.47422 7.75456Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.36062 7.75456C3.08984 7.80871 2.91423 8.07213 2.96838 8.34291L3.21323 9.56712C3.26738 9.8379 3.5308 10.0135 3.80157 9.95935C4.07235 9.90519 4.24796 9.64178 4.19381 9.371L3.94896 8.14679C3.89481 7.87601 3.6314 7.7004 3.36062 7.75456Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.24265 8.5507C1.00586 8.69277 0.929073 8.9999 1.07115 9.23669L1.80568 10.4609C1.94775 10.6977 2.25488 10.7745 2.49167 10.6324C2.72846 10.4903 2.80524 10.1832 2.66317 9.94641L1.92864 8.7222C1.78657 8.48541 1.47944 8.40863 1.24265 8.5507Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.59207 8.55058C9.82886 8.69265 9.90564 8.99978 9.76357 9.23657L9.02904 10.4608C8.88697 10.6976 8.57984 10.7744 8.34305 10.6323C8.10626 10.4902 8.02947 10.1831 8.17155 9.94629L8.90608 8.72208C9.04815 8.48529 9.35528 8.4085 9.59207 8.55058Z" fill="black"/>
<path d="M5.42004 10.4C6.1104 10.4 6.67004 10.9597 6.67004 11.65C6.67004 12.3404 6.1104 12.9 5.42004 12.9C4.72969 12.9 4.17004 12.3404 4.17004 11.65C4.17004 10.9597 4.72969 10.4 5.42004 10.4Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.67004 11.65C4.67004 12.0642 5.00583 12.4 5.42004 12.4C5.83426 12.4 6.17004 12.0642 6.17004 11.65C6.17004 11.2358 5.83426 10.9 5.42004 10.9C5.00583 10.9 4.67004 11.2358 4.67004 11.65ZM5.42004 13.4C4.45355 13.4 3.67004 12.6165 3.67004 11.65C3.67004 10.6835 4.45355 9.90002 5.42004 9.90002C6.38654 9.90002 7.17004 10.6835 7.17004 11.65C7.17004 12.6165 6.38654 13.4 5.42004 13.4Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1213_2298">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const CellphoneLoop = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1213_2325)">
<g opacity="0.8">
<path d="M17.0001 2.5H10.0001C8.89555 2.5 8.00012 3.39543 8.00012 4.5V17.5V18C8.00012 18.8284 8.67169 19.5 9.50012 19.5H17.0001C18.1047 19.5 19.0001 18.6046 19.0001 17.5V4.5C19.0001 3.39543 18.1047 2.5 17.0001 2.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.00012 4.5C7.00012 2.84315 8.34327 1.5 10.0001 1.5H17.0001C18.657 1.5 20.0001 2.84315 20.0001 4.5V17.5C20.0001 19.1569 18.657 20.5 17.0001 20.5H9.50012C8.11941 20.5 7.00012 19.3807 7.00012 18V4.5ZM10.0001 3.5C9.44784 3.5 9.00012 3.94772 9.00012 4.5V18C9.00012 18.2761 9.22398 18.5 9.50012 18.5H17.0001C17.5524 18.5 18.0001 18.0523 18.0001 17.5V4.5C18.0001 3.94772 17.5524 3.5 17.0001 3.5H10.0001Z" fill="currentColor"/>
<path d="M10.1528 14.0262C9.12072 15.456 7.12502 15.7784 5.69527 14.7463C4.26553 13.7142 3.94316 11.7185 4.97524 10.2887C6.00733 8.85899 8.00303 8.53662 9.43278 9.5687C10.8625 10.6008 11.1849 12.5965 10.1528 14.0262Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.84741 10.3795C7.86546 9.67069 6.49482 9.89209 5.78599 10.874C5.07716 11.856 5.29856 13.2266 6.2805 13.9355C7.26245 14.6443 8.63309 14.4229 9.34192 13.4409C10.0508 12.459 9.82935 11.0883 8.84741 10.3795ZM4.16436 9.70343C5.51969 7.82589 8.14046 7.40255 10.018 8.75789C11.8956 10.1132 12.3189 12.734 10.9636 14.6115C9.80993 16.2097 7.7395 16.7542 5.99095 16.0451L3.89967 18.9421C3.57642 19.3899 2.95136 19.4909 2.50356 19.1677C2.05576 18.8444 1.95479 18.2193 2.27804 17.7715L4.36932 14.8745C3.14575 13.4381 3.01073 11.3016 4.16436 9.70343Z" fill="currentColor"/>
</g>
<path d="M12.675 15.1375C12.675 15.5103 12.3727 15.8125 12 15.8125C11.6272 15.8125 11.325 15.5103 11.325 15.1375C11.325 14.7647 11.6272 14.4625 12 14.4625C12.3727 14.4625 12.675 14.7647 12.675 15.1375Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 14.9625C11.9033 14.9625 11.825 15.0409 11.825 15.1375C11.825 15.2342 11.9033 15.3125 12 15.3125C12.0966 15.3125 12.175 15.2342 12.175 15.1375C12.175 15.0409 12.0966 14.9625 12 14.9625ZM10.825 15.1375C10.825 14.4886 11.351 13.9625 12 13.9625C12.6489 13.9625 13.175 14.4886 13.175 15.1375C13.175 15.7865 12.6489 16.3125 12 16.3125C11.351 16.3125 10.825 15.7865 10.825 15.1375Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 3.5C6 2.11929 7.11929 1 8.5 1H15.5C16.8807 1 18 2.11929 18 3.5V16.5C18 17.8807 16.8807 19 15.5 19H8C6.89543 19 6 18.1046 6 17V16C6 15.7239 6.22386 15.5 6.5 15.5C6.77614 15.5 7 15.7239 7 16V17C7 17.5523 7.44772 18 8 18H15.5C16.3284 18 17 17.3284 17 16.5V3.5C17 2.67157 16.3284 2 15.5 2H8.5C7.67157 2 7 2.67157 7 3.5V6.5C7 6.77614 6.77614 7 6.5 7C6.22386 7 6 6.77614 6 6.5V3.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.64009 8.97417C6.43425 8.10371 4.75107 8.3756 3.88062 9.58144C3.01016 10.7873 3.28204 12.4705 4.48789 13.3409C5.69373 14.2114 7.37691 13.9395 8.24736 12.7336C9.11782 11.5278 8.84594 9.84463 7.64009 8.97417ZM3.0698 8.99614C4.26351 7.3425 6.57175 6.96965 8.22539 8.16336C9.87904 9.35706 10.2519 11.6653 9.05818 13.3189C7.96373 14.8351 5.93238 15.2746 4.32764 14.4172L1.9943 17.6495C1.83268 17.8735 1.52014 17.9239 1.29624 17.7623C1.07234 17.6007 1.02186 17.2881 1.18348 17.0642L3.51682 13.8319C2.19777 12.5787 1.97534 10.5123 3.0698 8.99614Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1213_2325">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Chain = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_303_4993)">
<g opacity="0.8">
<rect x="14.7836" y="3.38351" width="6" height="10" rx="3" transform="rotate(33.0385 14.7836 3.38351)" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<rect x="9.8357" y="7.32284" width="6" height="10" rx="3" transform="rotate(33.0385 9.8357 7.32284)" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</g>
<rect x="13.1369" y="1.19175" width="7" height="11" rx="3.5" transform="rotate(33.0385 13.1369 1.19175)" stroke="black" stroke-linecap="round"/>
<rect x="8.18903" y="5.13108" width="7" height="11" rx="3.5" transform="rotate(33.0385 8.18903 5.13108)" stroke="black" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="clip0_303_4993">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Checkmark = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8699 17.1228L17.8112 8.22845C18.7825 6.48013 16.1601 5.0232 15.1888 6.77152L11.0509 14.2197L7.43705 11.3287C5.87531 10.0793 4.00122 12.4219 5.56296 13.6713L10.4686 17.5958C10.524 17.6454 10.5829 17.6914 10.6446 17.7332C11.0317 18.0105 11.4337 18.0749 11.7947 17.9963C12.1586 17.9321 12.5062 17.7201 12.7591 17.3167C12.8004 17.2546 12.8375 17.1897 12.8699 17.1228Z" fill="currentColor"/>
</g>
<path d="M14.9371 5.74286L9.93708 14.7429C9.61332 15.3256 8.73916 14.84 9.06292 14.2572L14.0629 5.25721C14.3867 4.67444 15.2608 5.16009 14.9371 5.74286Z" fill="black"/>
<path d="M4.81235 10.1097L9.81235 14.1097C10.3329 14.5261 9.70823 15.307 9.18765 14.8905L4.18765 10.8905C3.66707 10.4741 4.29177 9.6932 4.81235 10.1097Z" fill="black"/>
</svg>
`;

const Circle = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.8" cx="12" cy="11" r="6" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 10C4 13.3137 6.68629 16 10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10ZM15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10Z" fill="black"/>
</svg>
`;

const Clipboard = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 4.35106C8 3.88103 8.41441 3.5 8.92562 3.5H15.0744C15.5856 3.5 16 3.88103 16 4.35106V7.64894C16 8.11897 15.5856 8.5 15.0744 8.5H8.92562C8.41441 8.5 8 8.11897 8 7.64894V4.35106Z" fill="currentColor"/>
<path d="M6.46154 19H17.0385C17.5695 19 18 18.5523 18 18V6C18 5.44772 17.5695 5 17.0385 5H14.1538H9.34615H6.46154C5.9305 5 5.5 5.44772 5.5 6V18C5.5 18.5523 5.9305 19 6.46154 19Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.17499 2.5C6.17499 2.22386 6.39885 2 6.67499 2H13.3178C13.594 2 13.8178 2.22386 13.8178 2.5V6.375C13.8178 6.65114 13.594 6.875 13.3178 6.875H6.67499C6.39885 6.875 6.17499 6.65114 6.17499 6.375V2.5ZM7.17499 3V5.875H12.8178V3H7.17499Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.90713 3.90002C3.57181 3.90002 3.29999 4.17185 3.29999 4.50717V17.7929C3.29999 18.1282 3.57181 18.4 3.90713 18.4H16.0857C16.421 18.4 16.6928 18.1282 16.6928 17.7929V4.50717C16.6928 4.17185 16.421 3.90002 16.0857 3.90002H13.2643V5.11431H15.4786V17.1857H4.51427V5.11431H6.72856V3.90002H3.90713Z" fill="black"/>
</svg>
`;

const ClipboardCheck = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 4.35106C8 3.88103 8.41441 3.5 8.92562 3.5H15.0744C15.5856 3.5 16 3.88103 16 4.35106V7.64894C16 8.11897 15.5856 8.5 15.0744 8.5H8.92562C8.41441 8.5 8 8.11897 8 7.64894V4.35106Z" fill="currentColor"/>
<path d="M6.46154 19H17.0385C17.5695 19 18 18.5523 18 18V6C18 5.44772 17.5695 5 17.0385 5H14.1538H9.34615H6.46154C5.9305 5 5.5 5.44772 5.5 6V18C5.5 18.5523 5.9305 19 6.46154 19Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.17499 2.5C6.17499 2.22386 6.39885 2 6.67499 2H13.3178C13.594 2 13.8178 2.22386 13.8178 2.5V6.375C13.8178 6.65114 13.594 6.875 13.3178 6.875H6.67499C6.39885 6.875 6.17499 6.65114 6.17499 6.375V2.5ZM7.17499 3V5.875H12.8178V3H7.17499Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.90713 3.90002C3.57181 3.90002 3.29999 4.17185 3.29999 4.50717V17.7929C3.29999 18.1282 3.57181 18.4 3.90713 18.4H16.0857C16.421 18.4 16.6928 18.1282 16.6928 17.7929V4.50717C16.6928 4.17185 16.421 3.90002 16.0857 3.90002H13.2643V5.11431H15.4786V17.1857H4.51427V5.11431H6.72856V3.90002H3.90713Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2837 9.08825C12.5111 9.24494 12.5684 9.55629 12.4117 9.78367L10.6447 12.3479C10.3187 12.821 9.66204 12.9228 9.20816 12.5705L7.69344 11.3949C7.47529 11.2256 7.4357 10.9115 7.605 10.6934C7.77431 10.4752 8.08841 10.4356 8.30656 10.6049L9.82128 11.7805L11.5882 9.21627C11.7449 8.98888 12.0563 8.93157 12.2837 9.08825Z" fill="black"/>
</svg>
`;

const ClipboardCheckCircle = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 4.35106C8 3.88103 8.41441 3.5 8.92562 3.5H15.0744C15.5856 3.5 16 3.88103 16 4.35106V7.64894C16 8.11897 15.5856 8.5 15.0744 8.5H8.92562C8.41441 8.5 8 8.11897 8 7.64894V4.35106Z" fill="currentColor"/>
<path d="M6.46154 19H17.0385C17.5695 19 18 18.5523 18 18V6C18 5.44772 17.5695 5 17.0385 5H14.1538H9.34615H6.46154C5.9305 5 5.5 5.44772 5.5 6V18C5.5 18.5523 5.9305 19 6.46154 19Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8396 20C17.6896 20 20 17.6782 20 14.8143C20 11.9503 17.6896 9.62854 14.8396 9.62854C11.9896 9.62854 9.6792 11.9503 9.6792 14.8143C9.6792 17.6782 11.9896 20 14.8396 20Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.17999 2.5C6.17999 2.22386 6.40385 2 6.67999 2H13.3228C13.599 2 13.8228 2.22386 13.8228 2.5V6.375C13.8228 6.65114 13.599 6.875 13.3228 6.875H6.67999C6.40385 6.875 6.17999 6.65114 6.17999 6.375V2.5ZM7.17999 3V5.875H12.8228V3H7.17999Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.30499 4.50717C3.30499 4.17185 3.57682 3.90002 3.91214 3.90002H6.73356V5.11431H4.51928V17.1857H11.6494C11.9696 17.6756 12.3943 18.0909 12.8919 18.4H3.91214C3.57682 18.4 3.30499 18.1282 3.30499 17.7929V4.50717ZM16.6979 11.3772V4.50717C16.6979 4.17185 16.426 3.90002 16.0907 3.90002H13.2693V5.11431H15.4836V11.0289C15.913 11.0807 16.3214 11.2005 16.6979 11.3772Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 18C16.6569 18 18 16.6569 18 15C18 13.3431 16.6569 12 15 12C13.3431 12 12 13.3431 12 15C12 16.6569 13.3431 18 15 18ZM15 19C17.2091 19 19 17.2091 19 15C19 12.7909 17.2091 11 15 11C12.7909 11 11 12.7909 11 15C11 17.2091 12.7909 19 15 19Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5819 13.8823C16.7975 14.0548 16.8325 14.3694 16.66 14.5851L15.5544 15.9671C15.1821 16.4325 14.4879 16.4709 14.0664 16.0495L13.3705 15.3536C13.1753 15.1584 13.1753 14.8418 13.3705 14.6465C13.5658 14.4513 13.8824 14.4513 14.0776 14.6465L14.7735 15.3424L15.8791 13.9604C16.0516 13.7448 16.3663 13.7098 16.5819 13.8823Z" fill="black"/>
</svg>
`;

const Clock = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M18.75 11C18.75 14.866 15.616 18 11.75 18C7.88401 18 4.75 14.866 4.75 11C4.75 7.13401 7.88401 4 11.75 4C15.616 4 18.75 7.13401 18.75 11Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 16C13.3137 16 16 13.3137 16 10C16 6.68629 13.3137 4 10 4C6.68629 4 4 6.68629 4 10C4 13.3137 6.68629 16 10 16ZM10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.5C10.2761 6.5 10.5 6.72386 10.5 7V10C10.5 10.2761 10.2761 10.5 10 10.5C9.72386 10.5 9.5 10.2761 9.5 10V7C9.5 6.72386 9.72386 6.5 10 6.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 10C13.5 10.2761 13.2761 10.5 13 10.5H10C9.72386 10.5 9.5 10.2761 9.5 10C9.5 9.72386 9.72386 9.5 10 9.5H13C13.2761 9.5 13.5 9.72386 13.5 10Z" fill="black"/>
</svg>
`;

const Cloud = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 4H12C10.1362 4 8.57006 5.27477 8.12602 7H8C5.79086 7 4 8.79086 4 11C4 13.2091 5.79086 15 8 15H16C18.2091 15 20 13.2091 20 11C20 9.09985 18.6751 7.50915 16.8987 7.10135C16.4909 5.32493 14.9002 4 13 4Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 3H9C7.13616 3 5.57006 4.27477 5.12602 6H5C2.79086 6 1 7.79086 1 10C1 12.2091 2.79086 14 5 14H13C15.2091 14 17 12.2091 17 10C17 8.09985 15.6751 6.50915 13.8987 6.10135C13.4909 4.32493 11.9002 3 10 3ZM5.90123 7L6.09445 6.24926C6.43255 4.93565 7.62326 4 9 4H10C11.4053 4 12.614 4.97458 12.924 6.32509L13.0642 6.9358L13.6749 7.07599C15.0254 7.38602 16 8.59467 16 10C16 11.6569 14.6569 13 13 13H5C3.34315 13 2 11.6569 2 10C2 8.34315 3.34315 7 5 7H5.90123Z" fill="black"/>
</svg>
`;

const CloudDown = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 4H12C10.1362 4 8.57006 5.27477 8.12602 7H8C5.79086 7 4 8.79086 4 11C4 13.2091 5.79086 15 8 15H16C18.2091 15 20 13.2091 20 11C20 9.09985 18.6751 7.50915 16.8987 7.10135C16.4909 5.32493 14.9002 4 13 4Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 3H9C7.13616 3 5.57006 4.27477 5.12602 6H5C2.79086 6 1 7.79086 1 10C1 12.2091 2.79086 14 5 14H13C15.2091 14 17 12.2091 17 10C17 8.09985 15.6751 6.50915 13.8987 6.10135C13.4909 4.32493 11.9002 3 10 3ZM5.90123 7L6.09445 6.24926C6.43255 4.93565 7.62326 4 9 4H10C11.4053 4 12.614 4.97458 12.924 6.32509L13.0642 6.9358L13.6749 7.07599C15.0254 7.38602 16 8.59467 16 10C16 11.6569 14.6569 13 13 13H5C3.34315 13 2 11.6569 2 10C2 8.34315 3.34315 7 5 7H5.90123Z" fill="black"/>
<path d="M9 10C9 9.72386 9.22386 9.5 9.5 9.5C9.77614 9.5 10 9.72386 10 10L10 17.5C10 17.7761 9.77614 18 9.5 18C9.22386 18 9 17.7761 9 17.5V10Z" fill="black"/>
<path d="M11.6876 15.1095C11.9033 14.937 12.2179 14.972 12.3904 15.1876C12.5629 15.4033 12.528 15.7179 12.3123 15.8904L9.81233 17.8904C9.5967 18.0629 9.28205 18.028 9.10955 17.8123C8.93704 17.5967 8.972 17.2821 9.18763 17.1095L11.6876 15.1095Z" fill="black"/>
<path d="M6.68763 15.8904C6.472 15.7179 6.43704 15.4033 6.60955 15.1876C6.78205 14.972 7.0967 14.937 7.31233 15.1095L9.81233 17.1095C10.028 17.2821 10.0629 17.5967 9.89042 17.8123C9.71791 18.028 9.40327 18.0629 9.18763 17.8904L6.68763 15.8904Z" fill="black"/>
</svg>
`;

const CloudUp = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 4H12C10.1362 4 8.57006 5.27477 8.12602 7H8C5.79086 7 4 8.79086 4 11C4 13.2091 5.79086 15 8 15H16C18.2091 15 20 13.2091 20 11C20 9.09985 18.6751 7.50915 16.8987 7.10135C16.4909 5.32493 14.9002 4 13 4Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 3H9C7.13616 3 5.57006 4.27477 5.12602 6H5C2.79086 6 1 7.79086 1 10C1 12.2091 2.79086 14 5 14H13C15.2091 14 17 12.2091 17 10C17 8.09985 15.6751 6.50915 13.8987 6.10135C13.4909 4.32493 11.9002 3 10 3ZM5.90123 7L6.09445 6.24926C6.43255 4.93565 7.62326 4 9 4H10C11.4053 4 12.614 4.97458 12.924 6.32509L13.0642 6.9358L13.6749 7.07599C15.0254 7.38602 16 8.59467 16 10C16 11.6569 14.6569 13 13 13H5C3.34315 13 2 11.6569 2 10C2 8.34315 3.34315 7 5 7H5.90123Z" fill="black"/>
<path d="M10 16.5C10 16.7761 9.77614 17 9.5 17C9.22386 17 9 16.7761 9 16.5V9C9 8.72386 9.22386 8.5 9.5 8.5C9.77614 8.5 10 8.72386 10 9V16.5Z" fill="black"/>
<path d="M7.31237 11.3905C7.09673 11.563 6.78209 11.528 6.60958 11.3124C6.43708 11.0967 6.47204 10.7821 6.68767 10.6096L9.18767 8.60958C9.4033 8.43708 9.71795 8.47204 9.89045 8.68767C10.063 8.9033 10.028 9.21795 9.81237 9.39045L7.31237 11.3905Z" fill="black"/>
<path d="M12.3124 10.6096C12.528 10.7821 12.563 11.0967 12.3905 11.3124C12.2179 11.528 11.9033 11.563 11.6877 11.3905L9.18767 9.39045C8.97204 9.21795 8.93708 8.9033 9.10958 8.68767C9.28209 8.47204 9.59673 8.43708 9.81237 8.60958L12.3124 10.6096Z" fill="black"/>
</svg>
`;

const Coctail = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_488)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 18.0241V12.9271L18.8664 6.34023C19.1635 6.0203 18.9366 5.5 18.5 5.5H5.5C5.06342 5.5 4.83653 6.0203 5.13361 6.34023L11.25 12.9271V18.0241C9.1328 18.1626 7.5 18.8897 7.5 20H16.5C16.5 18.8897 14.8672 18.1626 12.75 18.0241Z" fill="currentColor"/>
</g>
<path d="M6 8C5.72386 8 5.5 7.77614 5.5 7.5C5.5 7.22386 5.72386 7 6 7H14C14.2761 7 14.5 7.22386 14.5 7.5C14.5 7.77614 14.2761 8 14 8H6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.13361 5.34023L9.63361 12.3402C9.83142 12.5533 10.1686 12.5533 10.3664 12.3402L16.8664 5.34023C17.1635 5.0203 16.9366 4.5 16.5 4.5L3.5 4.5C3.06342 4.5 2.83653 5.0203 3.13361 5.34023ZM4.64661 5.5L15.3534 5.5L10 11.2652L4.64661 5.5Z" fill="black"/>
<path d="M9.5 11.875H10.5L10.625 12V18L10.5 18.125H9.5L9.375 18V12L9.5 11.875Z" fill="black"/>
<path d="M14.5 20H5.5C5.5 18.5251 7.55015 17.5 10 17.5C12.4499 17.5 14.5 18.5251 14.5 20Z" fill="black"/>
<path d="M12.8787 1.56669C12.6108 1.49971 12.448 1.22825 12.5149 0.960348C12.5819 0.69245 12.8534 0.52957 13.1213 0.596544L17.1213 1.59654C17.3892 1.66352 17.552 1.93499 17.4851 2.20288C17.4181 2.47078 17.1466 2.63366 16.8787 2.56669L12.8787 1.56669Z" fill="black"/>
<path d="M10.2031 9.74651C10.1086 10.006 9.82165 10.1398 9.56217 10.0453C9.3027 9.9508 9.16893 9.66387 9.26341 9.40439L12.356 0.910556C12.4505 0.651077 12.7374 0.517316 12.9969 0.611791C13.2563 0.706266 13.3901 0.993202 13.2956 1.25268L10.2031 9.74651Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_488">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Code = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.58997 10.331C2.95943 9.92053 3.59172 9.88726 4.00223 10.2567L7.33556 13.2567C7.74607 13.6262 7.77935 14.2585 7.40989 14.669C7.04043 15.0795 6.40814 15.1128 5.99763 14.7433L2.6643 11.7433C2.25379 11.3738 2.22051 10.7416 2.58997 10.331Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.40989 7.33104C7.77935 7.74155 7.74607 8.37384 7.33556 8.7433L4.00223 11.7433C3.59172 12.1128 2.95943 12.0795 2.58997 11.669C2.22051 11.2585 2.25379 10.6262 2.6643 10.2567L5.99763 7.25671C6.40814 6.88726 7.04043 6.92053 7.40989 7.33104Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.4099 10.331C19.7793 10.7416 19.7461 11.3738 19.3356 11.7433L16.0022 14.7433C15.5917 15.1128 14.9594 15.0795 14.59 14.669C14.2205 14.2585 14.2538 13.6262 14.6643 13.2567L17.9976 10.2567C18.4081 9.88726 19.0404 9.92053 19.4099 10.331Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.59 7.33104C14.9594 6.92053 15.5917 6.88726 16.0022 7.25671L19.3356 10.2567C19.7461 10.6262 19.7793 11.2585 19.4099 11.669C19.0404 12.0795 18.4081 12.1128 17.9976 11.7433L14.6643 8.7433C14.2538 8.37384 14.2205 7.74155 14.59 7.33104Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.763 4.53524C13.2958 4.68056 13.61 5.2303 13.4646 5.76312L10.4646 16.7631C10.3193 17.2959 9.76959 17.6101 9.23677 17.4648C8.70394 17.3195 8.38981 16.7697 8.53512 16.2369L11.5351 5.23689C11.6804 4.70406 12.2302 4.38993 12.763 4.53524Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.96173 9.66552C2.14646 9.46027 2.46261 9.44363 2.66786 9.62836L6.00119 12.6284C6.20645 12.8131 6.22309 13.1292 6.03836 13.3345C5.85363 13.5397 5.53748 13.5564 5.33223 13.3717L1.9989 10.3717C1.79364 10.1869 1.777 9.87078 1.96173 9.66552Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.03836 6.66552C6.22309 6.87078 6.20645 7.18692 6.00119 7.37165L2.66786 10.3717C2.46261 10.5564 2.14646 10.5397 1.96173 10.3345C1.777 10.1292 1.79364 9.81309 1.9989 9.62836L5.33223 6.62836C5.53748 6.44363 5.85363 6.46027 6.03836 6.66552Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.0384 9.66552C18.2231 9.87078 18.2064 10.1869 18.0012 10.3717L14.6679 13.3717C14.4626 13.5564 14.1465 13.5397 13.9617 13.3345C13.777 13.1292 13.7936 12.8131 13.9989 12.6284L17.3322 9.62836C17.5375 9.44363 17.8536 9.46027 18.0384 9.66552Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.9617 6.66552C14.1465 6.46027 14.4626 6.44363 14.6679 6.62836L18.0012 9.62836C18.2064 9.81309 18.2231 10.1292 18.0384 10.3345C17.8536 10.5397 17.5375 10.5564 17.3322 10.3717L13.9989 7.37165C13.7936 7.18692 13.777 6.87078 13.9617 6.66552Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6316 4.01762C11.898 4.09028 12.055 4.36515 11.9824 4.63156L8.98239 15.6316C8.90973 15.898 8.63486 16.055 8.36844 15.9824C8.10203 15.9097 7.94496 15.6349 8.01762 15.3684L11.0176 4.36844C11.0903 4.10203 11.3651 3.94496 11.6316 4.01762Z" fill="black"/>
</svg>
`;

const ColorPicker = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M17.9277 3.76777C18.904 4.74409 18.7457 6.48529 17.5741 7.65686L8.5993 16.6317C8.50258 16.7284 8.39036 16.8076 8.26957 16.8642C7.89322 17.0409 7.50717 17.2555 6.59242 17.7851C6.13998 18.047 5.94029 18.1616 5.69635 18.2979C4.02271 19.2327 3.40315 19.4773 2.81066 18.8848C2.21914 18.2933 2.46327 17.6732 3.39241 16.0084C3.52989 15.762 3.64568 15.5603 3.91037 15.103C4.43991 14.1883 4.65454 13.8022 4.8312 13.4259C4.88789 13.3051 4.96705 13.1929 5.06377 13.0961L14.0386 4.12133C15.2102 2.94976 16.9514 2.79146 17.9277 3.76777Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3241 6.71747C17.3004 5.74116 17.3004 4.15825 16.3241 3.18194C15.3478 2.20563 13.7649 2.20563 12.7886 3.18194L3.81377 12.1568L3.70234 12.3265C3.5371 12.7444 3.33627 13.1544 2.83666 14.1244C1.58211 16.56 1.38155 17.0592 1.91421 17.5918C2.44688 18.1245 2.94604 17.9239 5.38167 16.6694C6.35163 16.1698 6.76162 15.969 7.17957 15.8037L7.3493 15.6923L16.3241 6.71747ZM15.617 3.88905C16.2028 4.47483 16.2028 5.42458 15.617 6.01037L6.71449 14.9129C6.28793 15.087 5.85619 15.3001 4.92376 15.7804C3.97451 16.2693 3.57256 16.4667 3.15836 16.6331C2.98657 16.7021 2.84067 16.7521 2.72339 16.7827C2.75395 16.6654 2.80392 16.5195 2.87295 16.3477C3.03937 15.9335 3.23672 15.5315 3.72566 14.5823C4.20594 13.6499 4.41909 13.2181 4.59317 12.7916L13.4957 3.88905C14.0815 3.30326 15.0312 3.30326 15.617 3.88905Z" fill="black"/>
<path d="M9.85103 3.82413C9.65577 3.62887 9.65577 3.31229 9.85103 3.11703C10.0463 2.92177 10.3629 2.92177 10.5581 3.11703L16.215 8.77388C16.4103 8.96914 16.4103 9.28573 16.215 9.48099C16.0197 9.67625 15.7031 9.67625 15.5079 9.48099L9.85103 3.82413Z" fill="black"/>
</svg>
`;

const Contract = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M13 5.5H17C17.2761 5.5 17.5 5.72386 17.5 6V10C17.5 10.2761 17.2761 10.5 17 10.5H13C12.7239 10.5 12.5 10.2761 12.5 10V6C12.5 5.72386 12.7239 5.5 13 5.5Z" fill="currentColor"/>
<path d="M7 11H11C11.5523 11 12 11.4477 12 12V16C12 16.5523 11.5523 17 11 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11Z" fill="currentColor"/>
</g>
<path d="M5.35355 15.3536C5.15829 15.5488 4.84171 15.5488 4.64645 15.3536C4.45118 15.1583 4.45118 14.8417 4.64645 14.6464L8.64645 10.6464C8.84171 10.4512 9.15829 10.4512 9.35355 10.6464C9.54882 10.8417 9.54882 11.1583 9.35355 11.3536L5.35355 15.3536Z" fill="black"/>
<path d="M9.5 15C9.5 15.2761 9.27614 15.5 9 15.5C8.72386 15.5 8.5 15.2761 8.5 15V11C8.5 10.7239 8.72386 10.5 9 10.5C9.27614 10.5 9.5 10.7239 9.5 11V15Z" fill="black"/>
<path d="M5 11.5C4.72386 11.5 4.5 11.2761 4.5 11C4.5 10.7239 4.72386 10.5 5 10.5H9C9.27614 10.5 9.5 10.7239 9.5 11C9.5 11.2761 9.27614 11.5 9 11.5H5Z" fill="black"/>
<path d="M11.3536 9.35355C11.1583 9.54882 10.8417 9.54882 10.6464 9.35355C10.4512 9.15829 10.4512 8.84171 10.6464 8.64645L14.6464 4.64645C14.8417 4.45118 15.1583 4.45118 15.3536 4.64645C15.5488 4.84171 15.5488 5.15829 15.3536 5.35355L11.3536 9.35355Z" fill="black"/>
<path d="M11 9.5C10.7239 9.5 10.5 9.27614 10.5 9C10.5 8.72386 10.7239 8.5 11 8.5H15C15.2761 8.5 15.5 8.72386 15.5 9C15.5 9.27614 15.2761 9.5 15 9.5H11Z" fill="black"/>
<path d="M11.5 9C11.5 9.27614 11.2761 9.5 11 9.5C10.7239 9.5 10.5 9.27614 10.5 9V5C10.5 4.72386 10.7239 4.5 11 4.5C11.2761 4.5 11.5 4.72386 11.5 5V9Z" fill="black"/>
</svg>
`;

const Controller = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M6.5 6.5H15.5C17.9853 6.5 20 8.51472 20 11V13C20 15.4853 17.9853 17.5 15.5 17.5H6.5C4.01472 17.5 2 15.4853 2 13V11C2 8.51472 4.01472 6.5 6.5 6.5Z" fill="currentColor"/>
</g>
<path d="M12.25 10C11.5596 10 11 9.44036 11 8.75C11 8.05964 11.5596 7.5 12.25 7.5C12.9404 7.5 13.5 8.05964 13.5 8.75C13.5 9.44036 12.9404 10 12.25 10Z" fill="black"/>
<path d="M14.25 12.5C13.5596 12.5 13 11.9404 13 11.25C13 10.5596 13.5596 10 14.25 10C14.9404 10 15.5 10.5596 15.5 11.25C15.5 11.9404 14.9404 12.5 14.25 12.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 4.5H5.5C3.01472 4.5 1 6.51472 1 9V11C1 13.4853 3.01472 15.5 5.5 15.5H14.5C16.9853 15.5 19 13.4853 19 11V9C19 6.51472 16.9853 4.5 14.5 4.5ZM2 9C2 7.067 3.567 5.5 5.5 5.5H14.5C16.433 5.5 18 7.067 18 9V11C18 12.933 16.433 14.5 14.5 14.5H5.5C3.567 14.5 2 12.933 2 11V9Z" fill="black"/>
<path d="M4 11C3.44772 11 3 10.5523 3 10C3 9.44772 3.44772 9 4 9H8C8.55228 9 9 9.44772 9 10C9 10.5523 8.55228 11 8 11H4Z" fill="black"/>
<path d="M7 12C7 12.5523 6.55228 13 6 13C5.44772 13 5 12.5523 5 12V8C5 7.44772 5.44772 7 6 7C6.55228 7 7 7.44772 7 8V12Z" fill="black"/>
</svg>
`;

const Countdown = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M19 11C19 14.866 15.866 18 12 18C8.13401 18 5 14.866 5 11C5 7.13401 8.13401 4 12 4C15.866 4 19 7.13401 19 11Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 3C10 2.72386 10.2239 2.5 10.5 2.5C14.6421 2.5 18 5.85786 18 10C18 14.1421 14.6421 17.5 10.5 17.5C6.35786 17.5 3 14.1421 3 10C3 9.72386 3.22386 9.5 3.5 9.5C3.77614 9.5 4 9.72386 4 10C4 13.5899 6.91015 16.5 10.5 16.5C14.0899 16.5 17 13.5899 17 10C17 6.41015 14.0899 3.5 10.5 3.5C10.2239 3.5 10 3.27614 10 3Z" fill="black"/>
<path d="M8 3.25C8 3.66421 7.66421 4 7.25 4C6.83579 4 6.5 3.66421 6.5 3.25C6.5 2.83579 6.83579 2.5 7.25 2.5C7.66421 2.5 8 2.83579 8 3.25Z" fill="black"/>
<path d="M5.5 4.75C5.5 5.16421 5.16421 5.5 4.75 5.5C4.33579 5.5 4 5.16421 4 4.75C4 4.33579 4.33579 4 4.75 4C5.16421 4 5.5 4.33579 5.5 4.75Z" fill="black"/>
<path d="M4 7.25C4 7.66421 3.66421 8 3.25 8C2.83579 8 2.5 7.66421 2.5 7.25C2.5 6.83579 2.83579 6.5 3.25 6.5C3.66421 6.5 4 6.83579 4 7.25Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.94721 11.2236C6.07071 10.9766 5.9706 10.6763 5.72361 10.5528L3.72361 9.5528C3.47662 9.4293 3.17628 9.52942 3.05279 9.77641C2.92929 10.0234 3.0294 10.3237 3.27639 10.4472L5.27639 11.4472C5.52338 11.5707 5.82372 11.4706 5.94721 11.2236Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.85355 9.64648C4.04881 9.84174 4.04881 10.1583 3.85355 10.3536L2.35355 11.8536C2.15829 12.0489 1.8417 12.0489 1.64644 11.8536C1.45118 11.6583 1.45118 11.3417 1.64644 11.1465L3.14644 9.64648C3.3417 9.45122 3.65829 9.45122 3.85355 9.64648Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 6.5C10.7761 6.5 11 6.72386 11 7V10C11 10.2761 10.7761 10.5 10.5 10.5C10.2239 10.5 10 10.2761 10 10V7C10 6.72386 10.2239 6.5 10.5 6.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 10C14 10.2761 13.7761 10.5 13.5 10.5H10.5C10.2239 10.5 10 10.2761 10 10C10 9.72386 10.2239 9.5 10.5 9.5H13.5C13.7761 9.5 14 9.72386 14 10Z" fill="black"/>
</svg>
`;

const CreditCard = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M5.5 6H17.5C18.8807 6 20 7.11929 20 8.5V15.5C20 16.8807 18.8807 18 17.5 18H5.5C4.11929 18 3 16.8807 3 15.5V8.5C3 7.11929 4.11929 6 5.5 6Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 4H4C2.61929 4 1.5 5.11929 1.5 6.5V13.5C1.5 14.8807 2.61929 16 4 16H16C17.3807 16 18.5 14.8807 18.5 13.5V6.5C18.5 5.11929 17.3807 4 16 4ZM2.5 6.5C2.5 5.67157 3.17157 5 4 5H16C16.8284 5 17.5 5.67157 17.5 6.5V13.5C17.5 14.3284 16.8284 15 16 15H4C3.17157 15 2.5 14.3284 2.5 13.5V6.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 6.5H17.5C17.7761 6.5 18 6.72386 18 7V8C18 8.27614 17.7761 8.5 17.5 8.5H2.5C2.22386 8.5 2 8.27614 2 8V7C2 6.72386 2.22386 6.5 2.5 6.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 9.5H5C4.44772 9.5 4 9.94772 4 10.5V11.5C4 12.0523 4.44772 12.5 5 12.5H6C6.55228 12.5 7 12.0523 7 11.5V10.5C7 9.94772 6.55228 9.5 6 9.5ZM5 11.5V10.5H6V11.5H5Z" fill="black"/>
</svg>
`;

const Crown = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M4.62008 8.49566C4.40264 7.60382 5.40113 6.91478 6.1578 7.43451L7.98763 8.69136C8.45858 9.01484 9.10437 8.87867 9.40461 8.39257L10.6492 6.37749C11.04 5.74482 11.96 5.74482 12.3508 6.37749L13.5954 8.39257C13.8957 8.87867 14.5414 9.01485 15.0124 8.69136L16.8422 7.43451C17.5989 6.91478 18.5974 7.60382 18.3799 8.49566L16.9802 14.2369C16.871 14.6848 16.4697 15 16.0086 15H6.99138C6.53033 15 6.12904 14.6848 6.01984 14.2369L4.62008 8.49566Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8249 10.5319C14.4523 11.2446 12.7283 10.7945 11.8938 9.44356L11.5 8.80596L11.1062 9.44356C10.2718 10.7945 8.54768 11.2446 7.17512 10.5319L7.77686 13H15.2232L15.8249 10.5319ZM6.1578 7.43451C5.40113 6.91478 4.40264 7.60382 4.62008 8.49566L6.01984 14.2369C6.12904 14.6848 6.53033 15 6.99138 15H16.0086C16.4697 15 16.871 14.6848 16.9802 14.2369L18.3799 8.49566C18.5974 7.60382 17.5989 6.91478 16.8422 7.43451L15.0124 8.69136C14.5414 9.01485 13.8957 8.87867 13.5954 8.39257L12.3508 6.37749C11.96 5.74482 11.04 5.74482 10.6492 6.37749L9.40461 8.39257C9.10437 8.87867 8.45858 9.01484 7.98763 8.69136L6.1578 7.43451Z" fill="currentColor"/>
<path d="M12.5 4C12.5 4.55228 12.0523 5 11.5 5C10.9477 5 10.5 4.55228 10.5 4C10.5 3.44772 10.9477 3 11.5 3C12.0523 3 12.5 3.44772 12.5 4Z" fill="currentColor"/>
<path d="M20 6C20 6.55228 19.5523 7 19 7C18.4477 7 18 6.55228 18 6C18 5.44772 18.4477 5 19 5C19.5523 5 20 5.44772 20 6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 16.5C6.25 16.0858 6.58579 15.75 7 15.75H15.7373C16.1515 15.75 16.4873 16.0858 16.4873 16.5C16.4873 16.9142 16.1515 17.25 15.7373 17.25H7C6.58579 17.25 6.25 16.9142 6.25 16.5Z" fill="currentColor"/>
<path d="M5 6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5C4.55228 5 5 5.44772 5 6Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8956 13.8182L16.4114 8.05171L14.1971 9.46236C13.2788 10.0473 12.0613 9.79033 11.4579 8.88413L10 6.69501L8.54215 8.88413C7.93867 9.79033 6.72119 10.0473 5.80293 9.46235L3.58857 8.05171L5.10444 13.8182L14.8956 13.8182ZM4.12585 7.20831C3.35855 6.7195 2.39013 7.42607 2.62143 8.30594L4.1373 14.0724C4.25282 14.5118 4.65007 14.8182 5.10444 14.8182H14.8956C15.3499 14.8182 15.7472 14.5118 15.8627 14.0724L17.3786 8.30595C17.6099 7.42607 16.6415 6.7195 15.8742 7.20831L13.6598 8.61895C13.2007 8.91144 12.5919 8.78294 12.2902 8.32984L10.8323 6.14072C10.4366 5.54644 9.56345 5.54644 9.16768 6.14072L7.70983 8.32984C7.40809 8.78294 6.79935 8.91144 6.34022 8.61895L4.12585 7.20831Z" fill="black"/>
<path d="M10.9444 3.94545C10.9444 4.46761 10.5216 4.89091 9.99999 4.89091C9.47838 4.89091 9.05554 4.46761 9.05554 3.94545C9.05554 3.42329 9.47838 3 9.99999 3C10.5216 3 10.9444 3.42329 10.9444 3.94545Z" fill="black"/>
<path d="M18.5 5.83635C18.5 6.35851 18.0771 6.78181 17.5555 6.78181C17.0339 6.78181 16.6111 6.35851 16.6111 5.83635C16.6111 5.31419 17.0339 4.8909 17.5555 4.8909C18.0771 4.8909 18.5 5.31419 18.5 5.83635Z" fill="black"/>
<path d="M3.38889 5.83635C3.38889 6.35851 2.96605 6.78181 2.44444 6.78181C1.92284 6.78181 1.5 6.35851 1.5 5.83635C1.5 5.31419 1.92284 4.8909 2.44444 4.8909C2.96605 4.8909 3.38889 5.31419 3.38889 5.83635Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 16C5.25 15.7239 5.47386 15.5 5.75 15.5H14.4873C14.7635 15.5 14.9873 15.7239 14.9873 16C14.9873 16.2761 14.7635 16.5 14.4873 16.5H5.75C5.47386 16.5 5.25 16.2761 5.25 16Z" fill="black"/>
</svg>
`;

const Cup = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M5.5 16H16.5C17.0523 16 17.5 16.4477 17.5 17C17.5 17.5523 17.0523 18 16.5 18H5.5C4.94772 18 4.5 17.5523 4.5 17C4.5 16.4477 4.94772 16 5.5 16Z" fill="currentColor"/>
<path d="M17.4778 7.20915C18.6708 7.59201 19.5 8.46066 19.5 9.5C19.5 10.9284 17.9501 12 16.1073 12C16.0589 12 16.0107 11.9993 15.9627 11.9978C14.7459 13.8773 12.9524 15 11 15C7.37379 15 4.5 11.1683 4.5 6.5C4.5 6.22386 4.72386 6 5 6H17C17.2761 6 17.5 6.22386 17.5 6.5C17.5 6.7377 17.4926 6.97422 17.4778 7.20915Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 4.5H3C2.72386 4.5 2.5 4.72386 2.5 5C2.5 9.66828 5.37379 13.5 9 13.5C12.6262 13.5 15.5 9.66828 15.5 5C15.5 4.72386 15.2761 4.5 15 4.5ZM14.4879 5.5C14.2977 9.43156 11.8802 12.5 9 12.5C6.11981 12.5 3.70234 9.43156 3.51206 5.5H14.4879Z" fill="black"/>
<path d="M13.8622 10.3289L14.1378 9.36761C14.4407 9.45444 14.7687 9.5 15.1073 9.5C16.4597 9.5 17.5 8.78072 17.5 8C17.5 7.21928 16.4597 6.5 15.1073 6.5V5.5C16.9501 5.5 18.5 6.57158 18.5 8C18.5 9.42842 16.9501 10.5 15.1073 10.5C14.676 10.5 14.2552 10.4416 13.8622 10.3289Z" fill="black"/>
<path d="M3.5 14.75H14.5C14.9142 14.75 15.25 15.0858 15.25 15.5C15.25 15.9142 14.9142 16.25 14.5 16.25H3.5C3.08579 16.25 2.75 15.9142 2.75 15.5C2.75 15.0858 3.08579 14.75 3.5 14.75Z" fill="black"/>
</svg>
`;

const Cv = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M6.5 2L13.1854 2C13.6056 2 14.0065 2.17624 14.2906 2.48582L18.6052 7.18761C18.8591 7.46433 19 7.82623 19 8.20179V18.5C19 19.3284 18.3284 20 17.5 20H6.5C5.67157 20 5 19.3284 5 18.5V3.5C5 2.67157 5.67157 2 6.5 2Z" fill="currentColor"/>
</g>
<path d="M6.5 12.5C6.22386 12.5 6 12.2761 6 12C6 11.7239 6.22386 11.5 6.5 11.5H13.5C13.7761 11.5 14 11.7239 14 12C14 12.2761 13.7761 12.5 13.5 12.5H6.5Z" fill="black"/>
<path d="M6.5 15C6.22386 15 6 14.7761 6 14.5C6 14.2239 6.22386 14 6.5 14H13.5C13.7761 14 14 14.2239 14 14.5C14 14.7761 13.7761 15 13.5 15H6.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1854 1H4.5C3.67157 1 3 1.67157 3 2.5V17.5C3 18.3284 3.67157 19 4.5 19H15.5C16.3284 19 17 18.3284 17 17.5V7.20179C17 6.82623 16.8591 6.46433 16.6052 6.18761L12.2906 1.48582C12.0065 1.17624 11.6056 1 11.1854 1ZM4 2.5C4 2.22386 4.22386 2 4.5 2H11.1854C11.3255 2 11.4591 2.05875 11.5538 2.16194L15.8684 6.86373C15.953 6.95597 16 7.0766 16 7.20179V17.5C16 17.7761 15.7761 18 15.5 18H4.5C4.22386 18 4 17.7761 4 17.5V2.5Z" fill="black"/>
<path d="M11.5 2.09998V6.79998H16.2" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8.13421 6.13317C8.72327 6.13317 9.2008 5.65565 9.2008 5.06659C9.2008 4.47753 8.72327 4 8.13421 4C7.54515 4 7.06763 4.47753 7.06763 5.06659C7.06763 5.65565 7.54515 6.13317 8.13421 6.13317Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2663 8.4443C10.2663 7.30981 9.3114 6.48889 8.13317 6.48889C6.95495 6.48889 6 7.30981 6 8.4443L6.00071 8.9776C6.00071 9.07189 6.03817 9.16232 6.10484 9.22899C6.17152 9.29567 6.26195 9.33312 6.35624 9.33312H9.91082C10.0051 9.33312 10.0955 9.29567 10.1622 9.22899C10.2289 9.16232 10.2663 9.07189 10.2663 8.9776V8.4443Z" fill="black"/>
</svg>
`;

const Division = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M6.5 12.5C5.67157 12.5 5 11.8284 5 11C5 10.1716 5.67157 9.5 6.5 9.5H16.5C17.3284 9.5 18 10.1716 18 11C18 11.8284 17.3284 12.5 16.5 12.5H6.5Z" fill="currentColor"/>
<circle cx="11" cy="7" r="2" fill="currentColor"/>
<circle cx="11" cy="15" r="2" fill="currentColor"/>
</g>
<path d="M5 10.5C4.72386 10.5 4.5 10.2761 4.5 10C4.5 9.72386 4.72386 9.5 5 9.5H15C15.2761 9.5 15.5 9.72386 15.5 10C15.5 10.2761 15.2761 10.5 15 10.5H5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 6C8.5 6.82843 9.17157 7.5 10 7.5C10.8284 7.5 11.5 6.82843 11.5 6C11.5 5.17157 10.8284 4.5 10 4.5C9.17157 4.5 8.5 5.17157 8.5 6ZM10.5 6C10.5 6.27614 10.2761 6.5 10 6.5C9.72386 6.5 9.5 6.27614 9.5 6C9.5 5.72386 9.72386 5.5 10 5.5C10.2761 5.5 10.5 5.72386 10.5 6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 14C8.5 14.8284 9.17157 15.5 10 15.5C10.8284 15.5 11.5 14.8284 11.5 14C11.5 13.1716 10.8284 12.5 10 12.5C9.17157 12.5 8.5 13.1716 8.5 14ZM10.5 14C10.5 14.2761 10.2761 14.5 10 14.5C9.72386 14.5 9.5 14.2761 9.5 14C9.5 13.7239 9.72386 13.5 10 13.5C10.2761 13.5 10.5 13.7239 10.5 14Z" fill="black"/>
</svg>
`;

const DotsX = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M6.5 13C5.67157 13 5 12.3284 5 11.5C5 10.6716 5.67157 10 6.5 10H17.5C18.3284 10 19 10.6716 19 11.5C19 12.3284 18.3284 13 17.5 13H6.5Z" fill="currentColor"/>
</g>
<path d="M14 10.25C14 9.55964 14.5596 9 15.25 9C15.5814 9 15.8993 9.13173 16.1335 9.36618C16.3678 9.60063 16.4993 9.91857 16.499 10.25C16.4993 10.5814 16.3678 10.8994 16.1335 11.1338C15.8993 11.3683 15.5814 11.5 15.25 11.5C14.9185 11.5 14.6005 11.3683 14.3661 11.1339C14.1317 10.8995 14 10.5815 14 10.25H14Z" fill="black"/>
<path d="M9 10.25C9 9.55964 9.55964 9 10.25 9C10.9404 9 11.5 9.55964 11.5 10.25C11.5 10.9404 10.9404 11.5 10.25 11.5C9.55964 11.5 9 10.9404 9 10.25H9Z" fill="black"/>
<path d="M4 10.25C3.99973 9.9184 4.13135 9.6003 4.36582 9.36582C4.6003 9.13135 4.9184 8.99973 5.25 9C5.94036 9 6.5 9.55964 6.5 10.25C6.5 10.9404 5.94036 11.5 5.25 11.5C4.9184 11.5003 4.6003 11.3687 4.36582 11.1342C4.13135 10.8997 3.99973 10.5816 4 10.25H4Z" fill="black"/>
</svg>
`;

const DotsY = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M11 6.5C11 5.67157 11.6716 5 12.5 5C13.3284 5 14 5.67157 14 6.5L14 17.5C14 18.3284 13.3284 19 12.5 19C11.6716 19 11 18.3284 11 17.5L11 6.5Z" fill="currentColor"/>
</g>
<path d="M9 15.25C9 14.5596 9.55964 14 10.25 14C10.5814 14 10.8993 14.1317 11.1335 14.3662C11.3678 14.6006 11.4993 14.9186 11.499 15.25C11.4993 15.5814 11.3678 15.8994 11.1335 16.1338C10.8993 16.3683 10.5814 16.5 10.25 16.5C9.91848 16.5 9.60054 16.3683 9.36612 16.1339C9.1317 15.8995 9 15.5815 9 15.25H9Z" fill="black"/>
<path d="M9 10.25C9 9.55964 9.55964 9 10.25 9C10.9404 9 11.5 9.55964 11.5 10.25C11.5 10.9404 10.9404 11.5 10.25 11.5C9.55964 11.5 9 10.9404 9 10.25H9Z" fill="black"/>
<path d="M9 5.25C8.99973 4.9184 9.13135 4.6003 9.36582 4.36582C9.6003 4.13135 9.9184 3.99973 10.25 4C10.9404 4 11.5 4.55964 11.5 5.25C11.5 5.94036 10.9404 6.5 10.25 6.5C9.9184 6.50027 9.6003 6.36866 9.36582 6.13418C9.13135 5.8997 8.99973 5.5816 9 5.25H9Z" fill="black"/>
</svg>
`;

const Dress = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5369 0.8076C14.1545 0.648426 13.7155 0.829394 13.5563 1.2118L12.35 4.10993C11.9475 4.00207 11.5101 4.00605 11.0846 4.1455L10.9999 4.17325L10.9156 4.14561C10.6054 4.04395 10.2767 4.01186 9.95275 4.05162C9.84916 4.06433 9.74811 4.08398 9.65001 4.11004L8.44231 1.21155C8.283 0.8292 7.84389 0.648392 7.46154 0.807705C7.07919 0.967018 6.89838 1.40612 7.05769 1.78847L8.30769 4.78847C8.33521 4.8545 8.37106 4.91452 8.41353 4.96782C8.10234 5.40433 7.94722 5.95405 8.01767 6.52807L8.13236 7.46266C8.20459 8.05129 8.45059 8.58048 8.81514 9.00134C8.31895 9.01612 7.83367 9.15382 7.40309 9.40272C5.80865 10.3244 4.62921 11.3608 3.86476 12.5119C3.61888 12.8821 3.36958 13.2199 3.13669 13.5354C2.1223 14.9096 1.41938 15.8618 2.66806 17.2402C4.20342 18.935 7.45634 20 10.6485 20C13.8406 20 17.0206 19.3723 19.0847 17.2402C20.6128 15.6618 19.9778 14.9581 18.9898 13.8632C18.6432 13.4791 18.2532 13.0469 17.8979 12.5119C17.104 11.3164 15.9187 10.2745 14.3422 9.3863C13.9812 9.1829 13.583 9.05704 13.1729 9.01537C13.5441 8.59226 13.7948 8.05785 13.8679 7.46266L13.9826 6.52807C14.0223 6.20413 13.9902 5.8754 13.8886 5.56526C13.8168 5.34608 13.7141 5.14564 13.587 4.96718C13.6293 4.91397 13.665 4.85409 13.6924 4.78822L14.9411 1.78822C15.1003 1.40581 14.9193 0.966774 14.5369 0.8076Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0846 3.14548L9.99993 3.17323L9.9156 3.14559C9.60545 3.04394 9.27671 3.01185 8.95275 3.0516C7.73454 3.2011 6.86817 4.30984 7.01767 5.52805L7.13236 6.46265C7.31014 7.91138 8.54051 9 10.0001 9C11.4597 9 12.6901 7.91138 12.8679 6.46265L12.9826 5.52805C13.0223 5.20411 12.9902 4.87539 12.8886 4.56524C12.5063 3.39889 11.251 2.76324 10.0846 3.14548ZM9.07455 4.04416C9.25274 4.02229 9.43355 4.03994 9.60414 4.09585L9.99991 4.22557L10.396 4.09575C11.0376 3.88551 11.7281 4.23513 11.9383 4.87667C11.9942 5.04726 12.0119 5.22807 11.99 5.40625L11.8753 6.34084C11.7591 7.28816 10.9545 8 10.0001 8C9.04569 8 8.24116 7.28816 8.12491 6.34084L8.01022 5.40625C7.928 4.73621 8.40451 4.12638 9.07455 4.04416Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8696 8L7.90444 8.00001C7.3773 8.00001 6.85947 8.13891 6.40309 8.40272C4.80865 9.32437 3.62921 10.3608 2.86476 11.5119C2.61888 11.8821 2.36958 12.2199 2.13669 12.5354C1.1223 13.9096 0.419383 14.8618 1.66806 16.2402C3.20342 17.935 6.45634 19 9.64848 19C12.8406 19 16.0206 18.3723 18.0847 16.2402C19.6128 14.6618 18.9778 13.958 17.9898 12.8632C17.6432 12.4791 17.2532 12.0469 16.8979 11.5119C16.104 10.3164 14.9187 9.27454 13.3422 8.3863C12.8927 8.13305 12.3855 8 11.8696 8ZM6.90354 9.26848C7.20779 9.09261 7.55301 9.00001 7.90444 9.00001L11.8696 9C12.2136 9 12.5517 9.0887 12.8514 9.25753C14.2975 10.0723 15.3641 11.0099 16.0648 12.0651C16.2313 12.3157 16.4108 12.5565 16.6103 12.8011C16.6332 12.8291 16.716 12.9236 16.8296 13.0533C17.1712 13.4432 17.7914 14.1513 17.8985 14.326C18.0925 14.6424 18.0488 14.8396 17.3663 15.5446C15.7285 17.2363 13.1097 18 9.64848 18C6.65197 18 3.70161 16.9954 2.40917 15.5688C2.02828 15.1483 1.9535 14.9033 2.02458 14.626C2.08114 14.4053 2.23125 14.1252 2.51751 13.7138C2.55413 13.6612 2.67316 13.4979 2.8206 13.2957C3.07602 12.9453 3.41668 12.4781 3.56171 12.2666C3.60821 12.1989 3.65349 12.1318 3.69779 12.0651C4.36984 11.0531 5.43432 10.1178 6.90354 9.26848Z" fill="black"/>
<path d="M6.53576 1.18571C6.4332 0.929314 6.55791 0.638329 6.8143 0.535773C7.0707 0.433216 7.36168 0.557924 7.46424 0.814316L8.46424 3.31432C8.56679 3.57071 8.44209 3.86169 8.18569 3.96425C7.9293 4.06681 7.63832 3.9421 7.53576 3.68571L6.53576 1.18571Z" fill="black"/>
<path d="M12.5358 0.814316C12.6383 0.557924 12.9293 0.433216 13.1857 0.535773C13.4421 0.638329 13.5668 0.929314 13.4642 1.18571L12.4642 3.68571C12.3617 3.9421 12.0707 4.06681 11.8143 3.96425C11.5579 3.86169 11.4332 3.57071 11.5358 3.31432L12.5358 0.814316Z" fill="black"/>
<path d="M9.5 11.5C9.5 11.2239 9.72386 11 10 11C10.2761 11 10.5 11.2239 10.5 11.5V15.5C10.5 15.7761 10.2761 16 10 16C9.72386 16 9.5 15.7761 9.5 15.5V11.5Z" fill="black"/>
<path d="M7.08397 11.2227C7.23715 10.9929 7.54759 10.9308 7.77735 11.084C8.00711 11.2372 8.0692 11.5476 7.91603 11.7774L5.91602 14.7774C5.76285 15.0071 5.45241 15.0692 5.22265 14.916C4.99289 14.7629 4.9308 14.4524 5.08397 14.2227L7.08397 11.2227Z" fill="black"/>
<path d="M12.916 11.2227C12.7628 10.9929 12.4524 10.9308 12.2227 11.084C11.9929 11.2372 11.9308 11.5476 12.084 11.7774L14.084 14.7774C14.2372 15.0071 14.5476 15.0692 14.7774 14.916C15.0071 14.7629 15.0692 14.4524 14.916 14.2227L12.916 11.2227Z" fill="black"/>
</svg>
`;

const Duplicate = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M15 9H17C17.5523 9 18 9.44772 18 10V17C18 17.5523 17.5523 18 17 18H10C9.44772 18 9 17.5523 9 17V15H7C6.44772 15 6 14.5523 6 14V7C6 6.44772 6.44772 6 7 6H14C14.5523 6 15 6.44772 15 7V9Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 7.5H8C7.72386 7.5 7.5 7.72386 7.5 8V15C7.5 15.2761 7.72386 15.5 8 15.5H15C15.2761 15.5 15.5 15.2761 15.5 15V8C15.5 7.72386 15.2761 7.5 15 7.5ZM8.5 14.5V8.5H14.5V14.5H8.5Z" fill="black"/>
<path d="M5.5 11.5H8.5V12.5H5C4.72386 12.5 4.5 12.2761 4.5 12V5C4.5 4.72386 4.72386 4.5 5 4.5H12C12.2761 4.5 12.5 4.72386 12.5 5V8.5H11.5V5.5H5.5V11.5Z" fill="black"/>
</svg>
`;

const Electricity = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_1482)">
<g opacity="0.8">
<path d="M12.1868 10H16C16.4644 10 16.6779 10.578 16.325 10.8799L11.3667 15.1213L6.34323 19.8636C5.95334 20.2317 5.33617 19.8112 5.53603 19.3136L8.47391 12H6C5.64104 12 5.39903 11.633 5.54043 11.303L8.54043 4.30304C8.61922 4.1192 8.79999 4 9 4H14C14.359 4 14.601 4.36703 14.4596 4.69696L12.1868 10Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 8.5H11.1868L13.4596 3.19696C13.601 2.86703 13.359 2.5 13 2.5H8C7.79999 2.5 7.61922 2.6192 7.54043 2.80304L4.54043 9.80304C4.39903 10.133 4.64104 10.5 5 10.5H7.47391L4.53603 17.8136C4.33617 18.3112 4.95334 18.7317 5.34323 18.3636L10.3667 13.6213L15.325 9.37993C15.6779 9.078 15.4644 8.5 15 8.5ZM10.4286 9.5H13.6465L9.69839 12.8778L6.31274 16.0734L8.67756 10.1864C8.80953 9.85784 8.56764 9.5 8.21359 9.5H5.75827L8.3297 3.5H12.2417L9.969 8.80304C9.8276 9.13297 10.0696 9.5 10.4286 9.5Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_1482">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Enter = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<rect x="8.25" y="4" width="10" height="15" rx="1" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.8667 7.5L10.95 10L8.8667 7.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.86664 12.5L10.95 10L8.86664 12.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M10.5 10L3 10" stroke="black" stroke-linecap="round"/>
<path d="M15.5 17H6.3" stroke="black" stroke-linecap="round"/>
<path d="M15.5 3L6.32626 3" stroke="black" stroke-linecap="round"/>
<path d="M6.25 17V13" stroke="black" stroke-linecap="round"/>
<path d="M6.25 7V3" stroke="black" stroke-linecap="round"/>
<path d="M15.6 17V3" stroke="black" stroke-linecap="round"/>
</svg>
`;

const Exclamation = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 3C12.1046 3 13 3.89543 13 5V12C13 13.1046 12.1046 14 11 14C9.89543 14 9 13.1046 9 12V5C9 3.89543 9.89543 3 11 3Z" fill="currentColor"/>
<path d="M13 17C13 18.1046 12.1046 19 11 19C9.89543 19 9 18.1046 9 17C9 15.8954 9.89543 15 11 15C12.1046 15 13 15.8954 13 17Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 2.25C10.6642 2.25 11 2.58579 11 3V12C11 12.4142 10.6642 12.75 10.25 12.75C9.83579 12.75 9.5 12.4142 9.5 12V3C9.5 2.58579 9.83579 2.25 10.25 2.25Z" fill="black"/>
<path d="M11.5 16.25C11.5 16.9404 10.9404 17.5 10.25 17.5C9.55964 17.5 9 16.9404 9 16.25C9 15.5596 9.55964 15 10.25 15C10.9404 15 11.5 15.5596 11.5 16.25Z" fill="black"/>
</svg>
`;

const ExclamationCircle = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.8" cx="12" cy="11" r="7" fill="currentColor"/>
<path d="M9.5 6.5C9.5 6.22386 9.72386 6 10 6C10.2761 6 10.5 6.22386 10.5 6.5V11.5C10.5 11.7761 10.2761 12 10 12C9.72386 12 9.5 11.7761 9.5 11.5V6.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z" fill="black"/>
<circle cx="10" cy="13.75" r="0.75" fill="black"/>
</svg>
`;

const Expand = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M13 5H17C17.5523 5 18 5.44772 18 6V10C18 10.5523 17.5523 11 17 11H13C12.4477 11 12 10.5523 12 10V6C12 5.44772 12.4477 5 13 5Z" fill="currentColor"/>
<path d="M7 11H11C11.5523 11 12 11.4477 12 12V16C12 16.5523 11.5523 17 11 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11Z" fill="currentColor"/>
</g>
<path d="M11.3536 9.35355C11.1583 9.54882 10.8417 9.54882 10.6464 9.35355C10.4512 9.15829 10.4512 8.84171 10.6464 8.64645L14.6464 4.64645C14.8417 4.45118 15.1583 4.45118 15.3536 4.64645C15.5488 4.84171 15.5488 5.15829 15.3536 5.35355L11.3536 9.35355Z" fill="black"/>
<path d="M5.35355 15.3536C5.15829 15.5488 4.84171 15.5488 4.64645 15.3536C4.45118 15.1583 4.45118 14.8417 4.64645 14.6464L8.64645 10.6464C8.84171 10.4512 9.15829 10.4512 9.35355 10.6464C9.54882 10.8417 9.54882 11.1583 9.35355 11.3536L5.35355 15.3536Z" fill="black"/>
<path d="M5 15.5C4.72386 15.5 4.5 15.2761 4.5 15C4.5 14.7239 4.72386 14.5 5 14.5H9C9.27614 14.5 9.5 14.7239 9.5 15C9.5 15.2761 9.27614 15.5 9 15.5H5Z" fill="black"/>
<path d="M5.5 15C5.5 15.2761 5.27614 15.5 5 15.5C4.72386 15.5 4.5 15.2761 4.5 15V11C4.5 10.7239 4.72386 10.5 5 10.5C5.27614 10.5 5.5 10.7239 5.5 11V15Z" fill="black"/>
<path d="M15.5 9C15.5 9.27614 15.2761 9.5 15 9.5C14.7239 9.5 14.5 9.27614 14.5 9V5C14.5 4.72386 14.7239 4.5 15 4.5C15.2761 4.5 15.5 4.72386 15.5 5V9Z" fill="black"/>
<path d="M11 5.5C10.7239 5.5 10.5 5.27614 10.5 5C10.5 4.72386 10.7239 4.5 11 4.5H15C15.2761 4.5 15.5 4.72386 15.5 5C15.5 5.27614 15.2761 5.5 15 5.5H11Z" fill="black"/>
</svg>
`;

const Eye = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_3729)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.5C10 3.94772 10.4477 3.5 11 3.5C11.5523 3.5 12 3.94772 12 4.5V6.53241C12.5606 6.56898 13.107 6.63604 13.634 6.73128L14.0194 4.80388C14.1278 4.26232 14.6546 3.91111 15.1961 4.01942C15.7377 4.12773 16.0889 4.65456 15.9806 5.19612L15.5722 7.23826C16.0866 7.41912 16.569 7.63048 17.0123 7.86926L18.1425 5.9855C18.4267 5.51192 19.0409 5.35836 19.5145 5.64251C19.9881 5.92666 20.1417 6.54092 19.8575 7.0145L18.6414 9.04137C19.5003 9.87952 20 10.8859 20 12C20 15.1922 15.8972 17.5 11 17.5C6.10285 17.5 2.00003 15.1922 2.00003 12C2.00003 10.8859 2.49979 9.87952 3.35866 9.04137L2.14254 7.0145C1.85839 6.54092 2.01195 5.92666 2.48553 5.64251C2.95911 5.35836 3.57337 5.51192 3.85752 5.9855L4.98777 7.86926C5.43107 7.63048 5.91349 7.41912 6.42788 7.23826L6.01945 5.19612C5.91114 4.65456 6.26235 4.12773 6.80391 4.01942C7.34547 3.91111 7.8723 4.26232 7.98061 4.80388L8.36609 6.73128C8.89305 6.63604 9.43949 6.56898 10 6.53241V4.5ZM7.99948 8.85479C5.61088 9.44952 4.00003 10.7098 4.00003 12C4.00003 13.7784 7.06065 15.5 11 15.5C14.9394 15.5 18 13.7784 18 12C18 10.7098 16.3892 9.44952 14.0006 8.85479C14.6226 9.55985 15 10.4859 15 11.5C15 13.7091 13.2092 15.5 11 15.5C8.79089 15.5 7.00003 13.7091 7.00003 11.5C7.00003 10.4859 7.37745 9.55985 7.99948 8.85479Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 16C14.6577 16 18.5 13.8387 18.5 11C18.5 8.16128 14.6577 6 10 6C5.34227 6 1.5 8.16128 1.5 11C1.5 13.8387 5.34227 16 10 16ZM10 7C14.1788 7 17.5 8.86816 17.5 11C17.5 13.1318 14.1788 15 10 15C5.82117 15 2.5 13.1318 2.5 11C2.5 8.86816 5.82117 7 10 7Z" fill="black"/>
<path d="M9.5 3.5C9.5 3.22386 9.72386 3 10 3C10.2761 3 10.5 3.22386 10.5 3.5L10.5 6.5C10.5 6.77614 10.2761 7 10 7C9.72386 7 9.5 6.77614 9.5 6.5L9.5 3.5Z" fill="black"/>
<path d="M13.5097 3.90192C13.5639 3.63114 13.8273 3.45553 14.0981 3.50968C14.3688 3.56384 14.5445 3.82725 14.4903 4.09803L13.9903 6.59803C13.9361 6.86881 13.6727 7.04442 13.4019 6.99026C13.1312 6.93611 12.9556 6.6727 13.0097 6.40192L13.5097 3.90192Z" fill="black"/>
<path d="M6.49032 3.90192C6.43616 3.63114 6.17275 3.45553 5.90197 3.50968C5.63119 3.56384 5.45558 3.82725 5.50974 4.09803L6.00974 6.59803C6.06389 6.86881 6.3273 7.04442 6.59808 6.99026C6.86886 6.93611 7.04447 6.6727 6.99032 6.40192L6.49032 3.90192Z" fill="black"/>
<path d="M2.42876 5.24271C2.28669 5.00592 1.97956 4.92913 1.74277 5.07121C1.50598 5.21328 1.4292 5.52041 1.57127 5.7572L3.07127 8.2572C3.21334 8.49399 3.52047 8.57077 3.75726 8.4287C3.99405 8.28663 4.07084 7.9795 3.92876 7.74271L2.42876 5.24271Z" fill="black"/>
<path d="M17.5713 5.24271C17.7133 5.00592 18.0205 4.92913 18.2573 5.07121C18.4941 5.21328 18.5708 5.52041 18.4288 5.7572L16.9288 8.2572C16.7867 8.49399 16.4796 8.57077 16.2428 8.4287C16.006 8.28663 15.9292 7.9795 16.0713 7.74271L17.5713 5.24271Z" fill="black"/>
<path d="M13 10.5C13 12.1569 11.6569 13.5 10 13.5C8.34315 13.5 7 12.1569 7 10.5C7 8.84315 8.34315 7.5 10 7.5C11.6569 7.5 13 8.84315 13 10.5Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_3729">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const EyeClosed = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_3659)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.91662 8.91032C2.46807 9.23254 2.36566 9.85737 2.68788 10.3059C2.88621 10.582 3.11912 10.8444 3.38335 11.0914L2.25999 12.3274C1.88853 12.7361 1.91872 13.3685 2.32742 13.74C2.73612 14.1115 3.36857 14.0813 3.74002 13.6726L5.04237 12.2397C5.49676 12.4749 5.9873 12.6798 6.50619 12.8521L6.02986 14.7574C5.89592 15.2932 6.22168 15.8362 6.75747 15.9701C7.29327 16.1041 7.8362 15.7783 7.97015 15.2425L8.45007 13.3228C8.95377 13.4037 9.47216 13.4577 10 13.4831V15.5C10 16.0523 10.4477 16.5 11 16.5C11.5523 16.5 12 16.0523 12 15.5V13.4424C12.5215 13.3956 13.0314 13.3207 13.5246 13.2193L13.5301 13.2425L14.0301 15.2425C14.1641 15.7783 14.707 16.1041 15.2428 15.9701C15.7786 15.8362 16.1043 15.2932 15.9704 14.7574L15.4704 12.7574C15.4619 12.7234 15.4517 12.6902 15.44 12.6579C15.8733 12.4883 16.283 12.2945 16.664 12.0782L18.2929 13.7071C18.6834 14.0976 19.3166 14.0976 19.7071 13.7071C20.0976 13.3166 20.0976 12.6834 19.7071 12.2929L18.2666 10.8523C18.4334 10.6769 18.5851 10.4946 18.7207 10.3059C19.0429 9.85737 18.9405 9.23254 18.492 8.91032C18.0434 8.5881 17.4186 8.69052 17.0964 9.13906C16.7925 9.56205 16.3238 9.96553 15.7168 10.3159C14.4234 11.0625 12.6315 11.5 10.7043 11.5C8.7771 11.5 6.98518 11.0625 5.6918 10.3159C5.08478 9.96553 4.61607 9.56205 4.31221 9.13906C3.99 8.69052 3.36517 8.5881 2.91662 8.91032Z" fill="currentColor"/>
</g>
<path d="M2.09394 8.01418C1.93283 7.78991 1.98404 7.4775 2.20831 7.31639C2.43258 7.15528 2.745 7.20648 2.90611 7.43076C3.25412 7.91522 3.77651 8.36491 4.44182 8.74895C5.81478 9.54147 7.69282 10 9.70428 10C11.7157 10 13.5938 9.54147 14.9667 8.74895C15.632 8.36491 16.1544 7.91522 16.5024 7.43076C16.6636 7.20648 16.976 7.15528 17.2002 7.31639C17.4245 7.4775 17.4757 7.78991 17.3146 8.01418C16.8783 8.62157 16.2485 9.16369 15.4667 9.61501C13.9345 10.4994 11.8842 11 9.70428 11C7.52431 11 5.47403 10.4994 3.94189 9.61501C3.16002 9.16369 2.53026 8.62157 2.09394 8.01418Z" fill="black"/>
<path d="M10.5 11C10.5 10.7239 10.2761 10.5 10 10.5C9.72386 10.5 9.5 10.7239 9.5 11L9.5 13.5C9.5 13.7761 9.72386 14 10 14C10.2761 14 10.5 13.7761 10.5 13.5L10.5 11Z" fill="black"/>
<path d="M6.00971 10.4019C6.06387 10.1311 6.32728 9.95553 6.59806 10.0097C6.86884 10.0638 7.04445 10.3273 6.9903 10.598L6.4903 13.098C6.43614 13.3688 6.17273 13.5444 5.90195 13.4903C5.63117 13.4361 5.45556 13.1727 5.50971 12.9019L6.00971 10.4019Z" fill="black"/>
<path d="M13.9904 10.4019C13.9362 10.1311 13.6728 9.95553 13.402 10.0097C13.1313 10.0638 12.9557 10.3273 13.0098 10.598L13.5098 13.098C13.564 13.3688 13.8274 13.5444 14.0982 13.4903C14.3689 13.4361 14.5445 13.1727 14.4904 12.9019L13.9904 10.4019Z" fill="black"/>
<path d="M16.3536 8.64645C16.1583 8.45118 15.8417 8.45118 15.6464 8.64645C15.4512 8.84171 15.4512 9.15829 15.6464 9.35355L17.6464 11.3536C17.8417 11.5488 18.1583 11.5488 18.3536 11.3536C18.5488 11.1583 18.5488 10.8417 18.3536 10.6464L16.3536 8.64645Z" fill="black"/>
<path d="M3.44776 8.66371C3.63349 8.45936 3.94971 8.44426 4.15406 8.62999C4.35841 8.81572 4.3735 9.13195 4.18777 9.3363L2.37001 11.3363C2.18428 11.5406 1.86806 11.5557 1.66371 11.37C1.45936 11.1843 1.44426 10.8681 1.62999 10.6637L3.44776 8.66371Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_3659">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const EyeFrame = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1213_2106)">
<g opacity="0.8">
<path d="M11.6983 8.8125C14.3677 8.8125 16.5317 10.0297 16.5317 11.5312C16.5317 13.0328 14.3677 14.25 11.6983 14.25C9.02895 14.25 6.86499 13.0328 6.86499 11.5312C6.86499 10.0297 9.02895 8.8125 11.6983 8.8125Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.7709 12.5821C9.46988 12.9753 10.5029 13.25 11.6983 13.25C12.8938 13.25 13.9268 12.9753 14.6257 12.5821C15.3561 12.1713 15.5317 11.7603 15.5317 11.5312C15.5317 11.3022 15.3561 10.8912 14.6257 10.4804C13.9268 10.0872 12.8938 9.8125 11.6983 9.8125C10.5029 9.8125 9.46988 10.0872 8.7709 10.4804C8.04058 10.8912 7.86499 11.3022 7.86499 11.5312C7.86499 11.7603 8.04058 12.1713 8.7709 12.5821ZM7.79038 14.3253C6.77138 13.7521 5.86499 12.8037 5.86499 11.5312C5.86499 10.2588 6.77138 9.31041 7.79038 8.73723C8.84072 8.14641 10.2244 7.8125 11.6983 7.8125C13.1722 7.8125 14.5559 8.14641 15.6063 8.73723C16.6253 9.31041 17.5317 10.2588 17.5317 11.5312C17.5317 12.8037 16.6253 13.7521 15.6063 14.3253C14.5559 14.9161 13.1722 15.25 11.6983 15.25C10.2244 15.25 8.84072 14.9161 7.79038 14.3253Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.19995 4.5C3.19995 3.11929 4.31924 2 5.69995 2H7.66149C8.21377 2 8.66149 2.44772 8.66149 3C8.66149 3.55228 8.21377 4 7.66149 4H5.69995C5.42381 4 5.19995 4.22386 5.19995 4.5V6.75C5.19995 7.30228 4.75224 7.75 4.19995 7.75C3.64767 7.75 3.19995 7.30228 3.19995 6.75V4.5ZM14.45 3C14.45 2.44772 14.8977 2 15.45 2H17.7C19.0807 2 20.2 3.11929 20.2 4.5V6.75C20.2 7.30228 19.7522 7.75 19.2 7.75C18.6477 7.75 18.2 7.30228 18.2 6.75V4.5C18.2 4.22386 17.9761 4 17.7 4H15.45C14.8977 4 14.45 3.55228 14.45 3ZM4.19995 12.9615C4.75224 12.9615 5.19995 13.4093 5.19995 13.9615V16.5C5.19995 16.7761 5.42381 17 5.69995 17H7.94995C8.50224 17 8.94995 17.4477 8.94995 18C8.94995 18.5523 8.50224 19 7.94995 19H5.69995C4.31924 19 3.19995 17.8807 3.19995 16.5V13.9615C3.19995 13.4093 3.64767 12.9615 4.19995 12.9615ZM19.2 13.25C19.7522 13.25 20.2 13.6977 20.2 14.25V16.5C20.2 17.8807 19.0807 19 17.7 19H15.45C14.8977 19 14.45 18.5523 14.45 18C14.45 17.4477 14.8977 17 15.45 17H17.7C17.9761 17 18.2 16.7761 18.2 16.5V14.25C18.2 13.6977 18.6477 13.25 19.2 13.25Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.82582 12.5179C7.61264 12.9605 8.73329 13.25 9.99837 13.25C11.2635 13.25 12.3841 12.9605 13.1709 12.5179C13.9734 12.0665 14.3317 11.5211 14.3317 11.0312C14.3317 10.5414 13.9734 9.99599 13.1709 9.54459C12.3841 9.102 11.2635 8.8125 9.99837 8.8125C8.73329 8.8125 7.61264 9.102 6.82582 9.54459C6.02333 9.99599 5.66504 10.5414 5.66504 11.0312C5.66504 11.5211 6.02333 12.0665 6.82582 12.5179ZM6.33556 13.3895C5.38873 12.8569 4.66504 12.0429 4.66504 11.0312C4.66504 10.0196 5.38873 9.20561 6.33556 8.67302C7.29806 8.13161 8.59408 7.8125 9.99837 7.8125C11.4027 7.8125 12.6987 8.13161 13.6612 8.67302C14.608 9.20561 15.3317 10.0196 15.3317 11.0312C15.3317 12.0429 14.608 12.8569 13.6612 13.3895C12.6987 13.9309 11.4027 14.25 9.99837 14.25C8.59408 14.25 7.29806 13.9309 6.33556 13.3895Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99841 6C10.2746 6 10.4984 6.22386 10.4984 6.5L10.4984 8.3125C10.4984 8.58864 10.2746 8.8125 9.99841 8.8125C9.72227 8.8125 9.49841 8.58864 9.49841 8.3125L9.49841 6.5C9.49841 6.22386 9.72227 6 9.99841 6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5132 6.31181C12.7839 6.36596 12.9595 6.62938 12.9054 6.90016L12.6033 8.41057C12.5491 8.68135 12.2857 8.85696 12.015 8.80281C11.7442 8.74865 11.5686 8.48524 11.6227 8.21446L11.9248 6.70404C11.979 6.43326 12.2424 6.25765 12.5132 6.31181Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.48367 6.31181C7.21289 6.36596 7.03729 6.62938 7.09144 6.90016L7.39352 8.41057C7.44768 8.68135 7.71109 8.85696 7.98187 8.80281C8.25265 8.74865 8.42826 8.48524 8.37411 8.21446L8.07202 6.70404C8.01787 6.43326 7.75445 6.25765 7.48367 6.31181Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.90784 7.27958C4.67105 7.42166 4.59426 7.72879 4.73634 7.96558L5.64259 9.47599C5.78466 9.71278 6.09179 9.78956 6.32858 9.64749C6.56537 9.50542 6.64216 9.19829 6.50008 8.9615L5.59383 7.45108C5.45176 7.21429 5.14463 7.13751 4.90784 7.27958Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.089 7.27958C15.3258 7.42166 15.4026 7.72879 15.2605 7.96558L14.3542 9.47599C14.2122 9.71278 13.905 9.78956 13.6682 9.64749C13.4315 9.50542 13.3547 9.19829 13.4967 8.9615L14.403 7.45108C14.5451 7.21429 14.8522 7.13751 15.089 7.27958Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.98792 10.7292C8.98792 11.2872 9.44029 11.7396 9.99833 11.7396C10.5564 11.7396 11.0087 11.2872 11.0087 10.7292C11.0087 10.1712 10.5564 9.71879 9.99833 9.71879C9.44029 9.71879 8.98792 10.1712 8.98792 10.7292ZM9.99833 12.7396C8.88801 12.7396 7.98792 11.8395 7.98792 10.7292C7.98792 9.61889 8.88801 8.71879 9.99833 8.71879C11.1087 8.71879 12.0087 9.61889 12.0087 10.7292C12.0087 11.8395 11.1087 12.7396 9.99833 12.7396Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4C2 2.89543 2.89543 2 4 2H5.96154C6.23768 2 6.46154 2.22386 6.46154 2.5C6.46154 2.77614 6.23768 3 5.96154 3H4C3.44772 3 3 3.44772 3 4V6.25C3 6.52614 2.77614 6.75 2.5 6.75C2.22386 6.75 2 6.52614 2 6.25V4ZM13.25 2.5C13.25 2.22386 13.4739 2 13.75 2H16C17.1046 2 18 2.89543 18 4V6.25C18 6.52614 17.7761 6.75 17.5 6.75C17.2239 6.75 17 6.52614 17 6.25V4C17 3.44772 16.5523 3 16 3H13.75C13.4739 3 13.25 2.77614 13.25 2.5ZM2.5 12.9615C2.77614 12.9615 3 13.1854 3 13.4615V16C3 16.5523 3.44772 17 4 17H6.25C6.52614 17 6.75 17.2239 6.75 17.5C6.75 17.7761 6.52614 18 6.25 18H4C2.89543 18 2 17.1046 2 16V13.4615C2 13.1854 2.22386 12.9615 2.5 12.9615ZM17.5 13.25C17.7761 13.25 18 13.4739 18 13.75V16C18 17.1046 17.1046 18 16 18H13.75C13.4739 18 13.25 17.7761 13.25 17.5C13.25 17.2239 13.4739 17 13.75 17H16C16.5523 17 17 16.5523 17 16V13.75C17 13.4739 17.2239 13.25 17.5 13.25Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1213_2106">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const EyeOff = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_3689)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.5C10 3.94772 10.4477 3.5 11 3.5C11.5523 3.5 12 3.94772 12 4.5V6.53241C12.5605 6.56898 13.107 6.63604 13.6339 6.73128L14.0194 4.80388C14.1277 4.26232 14.6546 3.91111 15.1961 4.01942C15.7377 4.12773 16.0889 4.65456 15.9806 5.19612L15.5722 7.23826C16.0865 7.41912 16.569 7.63048 17.0123 7.86926L18.1425 5.9855C18.4267 5.51192 19.0409 5.35836 19.5145 5.64251C19.9881 5.92666 20.1416 6.54092 19.8575 7.0145L18.6414 9.04137C19.5002 9.87952 20 10.8859 20 12C20 15.1922 15.8972 17.5 11 17.5C6.10282 17.5 2 15.1922 2 12C2 10.8859 2.49976 9.87952 3.35863 9.04137L2.14251 7.0145C1.85836 6.54092 2.01192 5.92666 2.4855 5.64251C2.95908 5.35836 3.57334 5.51192 3.85749 5.9855L4.98774 7.86926C5.43104 7.63048 5.91346 7.41912 6.42785 7.23826L6.01942 5.19612C5.91111 4.65456 6.26232 4.12773 6.80388 4.01942C7.34544 3.91111 7.87227 4.26232 7.98058 4.80388L8.36606 6.73128C8.89302 6.63604 9.43946 6.56898 10 6.53241V4.5ZM7.99945 8.85479C5.61085 9.44952 4 10.7098 4 12C4 13.7784 7.06062 15.5 11 15.5C14.9394 15.5 18 13.7784 18 12C18 10.7098 16.3891 9.44952 14.0005 8.85479C14.6226 9.55985 15 10.4859 15 11.5C15 13.7091 13.2091 15.5 11 15.5C8.79086 15.5 7 13.7091 7 11.5C7 10.4859 7.37742 9.55985 7.99945 8.85479Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 16C14.6577 16 18.5 13.8387 18.5 11C18.5 8.16128 14.6577 6 10 6C5.34227 6 1.5 8.16128 1.5 11C1.5 13.8387 5.34227 16 10 16ZM10 7C14.1788 7 17.5 8.86816 17.5 11C17.5 13.1318 14.1788 15 10 15C5.82117 15 2.5 13.1318 2.5 11C2.5 8.86816 5.82117 7 10 7Z" fill="black"/>
<path d="M9.5 3.5C9.5 3.22386 9.72386 3 10 3C10.2761 3 10.5 3.22386 10.5 3.5L10.5 6.5C10.5 6.77614 10.2761 7 10 7C9.72386 7 9.5 6.77614 9.5 6.5L9.5 3.5Z" fill="black"/>
<path d="M13.5097 3.90192C13.5639 3.63114 13.8273 3.45553 14.0981 3.50968C14.3688 3.56384 14.5445 3.82725 14.4903 4.09803L13.9903 6.59803C13.9361 6.86881 13.6727 7.04442 13.4019 6.99026C13.1312 6.93611 12.9556 6.6727 13.0097 6.40192L13.5097 3.90192Z" fill="black"/>
<path d="M6.49029 3.90192C6.43613 3.63114 6.17272 3.45553 5.90194 3.50968C5.63116 3.56384 5.45555 3.82725 5.5097 4.09803L6.0097 6.59803C6.06386 6.86881 6.32727 7.04442 6.59805 6.99026C6.86883 6.93611 7.04444 6.6727 6.99029 6.40192L6.49029 3.90192Z" fill="black"/>
<path d="M2.42873 5.24271C2.28666 5.00592 1.97953 4.92913 1.74274 5.07121C1.50595 5.21328 1.42916 5.52041 1.57124 5.7572L3.07124 8.2572C3.21331 8.49399 3.52044 8.57077 3.75723 8.4287C3.99402 8.28663 4.07081 7.9795 3.92873 7.74271L2.42873 5.24271Z" fill="black"/>
<path d="M17.5713 5.24271C17.7133 5.00592 18.0205 4.92913 18.2573 5.07121C18.4941 5.21328 18.5708 5.52041 18.4288 5.7572L16.9288 8.2572C16.7867 8.49399 16.4796 8.57077 16.2428 8.4287C16.006 8.28663 15.9292 7.9795 16.0713 7.74271L17.5713 5.24271Z" fill="black"/>
<path d="M13 10.5C13 12.1569 11.6569 13.5 10 13.5C8.34315 13.5 7 12.1569 7 10.5C7 8.84315 8.34315 7.5 10 7.5C11.6569 7.5 13 8.84315 13 10.5Z" fill="black"/>
<path d="M17.6117 17.6548C17.8023 17.8545 17.795 18.171 17.5952 18.3617C17.3955 18.5523 17.079 18.545 16.8883 18.3452L1.13832 1.84524C0.947653 1.64549 0.955014 1.32899 1.15476 1.13832C1.35451 0.947653 1.67101 0.955014 1.86168 1.15476L17.6117 17.6548Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_3689">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const FastForward = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M11.8071 9.31684C12.1657 9.70105 12.1657 10.2973 11.8071 10.6815L5.63107 17.2986C5.01179 17.9621 3.90002 17.5239 3.90002 16.6163V3.38202C3.90002 2.4744 5.01179 2.03618 5.63107 2.6997L11.8071 9.31684Z" fill="currentColor"/>
<path d="M18.9632 9.31684C19.3218 9.70105 19.3218 10.2973 18.9632 10.6815L12.7872 17.2986C12.1679 17.9621 11.0561 17.5239 11.0561 16.6163V3.38202C11.0561 2.4744 12.1679 2.03618 12.7872 2.6997L18.9632 9.31684Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.40002 16.6163L9.57602 9.99916L3.40002 3.38202L3.40002 16.6163ZM10.3071 10.6815C10.6657 10.2973 10.6657 9.70105 10.3071 9.31684L4.13107 2.6997C3.51179 2.03618 2.40002 2.4744 2.40002 3.38202V16.6163C2.40002 17.5239 3.51179 17.9621 4.13107 17.2986L10.3071 10.6815Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5561 16.6163L16.7321 9.99916L10.5561 3.38202V16.6163ZM17.4632 10.6815C17.8218 10.2973 17.8218 9.70105 17.4632 9.31684L11.2872 2.6997C10.6679 2.03618 9.55614 2.4744 9.55614 3.38202V16.6163C9.55614 17.5239 10.6679 17.9621 11.2872 17.2986L17.4632 10.6815Z" fill="black"/>
</svg>
`;

const File = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M6.5 2L13.1854 2C13.6056 2 14.0065 2.17624 14.2906 2.48582L18.6052 7.18761C18.8591 7.46433 19 7.82623 19 8.20179V18.5C19 19.3284 18.3284 20 17.5 20H6.5C5.67157 20 5 19.3284 5 18.5V3.5C5 2.67157 5.67157 2 6.5 2Z" fill="currentColor"/>
</g>
<path d="M6.5 11C6.22386 11 6 10.7761 6 10.5C6 10.2239 6.22386 10 6.5 10H13.5C13.7761 10 14 10.2239 14 10.5C14 10.7761 13.7761 11 13.5 11H6.5Z" fill="black"/>
<path d="M6.5 14C6.22386 14 6 13.7761 6 13.5C6 13.2239 6.22386 13 6.5 13H13.5C13.7761 13 14 13.2239 14 13.5C14 13.7761 13.7761 14 13.5 14H6.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1854 1H4.5C3.67157 1 3 1.67157 3 2.5V17.5C3 18.3284 3.67157 19 4.5 19H15.5C16.3284 19 17 18.3284 17 17.5V7.20179C17 6.82623 16.8591 6.46433 16.6052 6.18761L12.2906 1.48582C12.0065 1.17624 11.6056 1 11.1854 1ZM4 2.5C4 2.22386 4.22386 2 4.5 2H11.1854C11.3255 2 11.4591 2.05875 11.5538 2.16194L15.8684 6.86373C15.953 6.95597 16 7.0766 16 7.20179V17.5C16 17.7761 15.7761 18 15.5 18H4.5C4.22386 18 4 17.7761 4 17.5V2.5Z" fill="black"/>
<path d="M11 7H16.5C16.7761 7 17 7.22386 17 7.5C17 7.77614 16.7761 8 16.5 8H10.5C10.2239 8 10 7.77614 10 7.5V1.5C10 1.22386 10.2239 1 10.5 1C10.7761 1 11 1.22386 11 1.5V7Z" fill="black"/>
</svg>
`;

const FileLoop = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1213_2010)">
<g opacity="0.8">
<path d="M12.1431 4H8.59314C8.04086 4 7.59314 4.44772 7.59314 5V7L8.04067 15.0555C8.07011 15.5854 8.50839 16 9.03913 16H16.5931C17.1454 16 17.5931 15.5523 17.5931 15V10.5V8.21073C17.5931 8.07598 17.5388 7.94694 17.4423 7.85284L13.6388 4.14211C13.5454 4.051 13.4201 4 13.2896 4H12.1431Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.59314 5C6.59314 3.89543 7.48857 3 8.59314 3H13.2896C13.6811 3 14.057 3.15299 14.3371 3.42633L18.1406 7.13706C18.43 7.41935 18.5931 7.80649 18.5931 8.21073V15C18.5931 16.1046 17.6977 17 16.5931 17H9.03913C7.97766 17 7.10109 16.1708 7.04221 15.1109L6.59314 7.02776V5ZM8.59314 5V6.97224L9.03913 15H16.5931V8.42146L13.0861 5H8.59314Z" fill="currentColor"/>
<path d="M11.66 13.6933C10.8404 15.1233 8.80908 15.4991 7.12286 14.5327C5.43664 13.5663 4.73408 11.6236 5.55364 10.1936C6.37321 8.76362 8.40455 8.3878 10.0908 9.35421C11.777 10.3206 12.4796 12.2633 11.66 13.6933Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.59353 10.2218C8.24692 9.45003 6.89252 9.86857 6.42126 10.6909C5.94999 11.5131 6.2735 12.8933 7.62011 13.6651C8.96672 14.4369 10.3211 14.0183 10.7924 13.196C11.2636 12.3738 10.9401 10.9936 9.59353 10.2218ZM4.68604 9.69636C5.8539 7.65864 8.56219 7.32554 10.588 8.48658C12.6138 9.64763 13.6955 12.1528 12.5276 14.1905C11.5291 15.9328 9.40447 16.4289 7.54313 15.8105L5.92081 18.6412C5.64619 19.1203 5.03512 19.2862 4.55595 19.0115C4.07678 18.7369 3.91097 18.1258 4.18559 17.6467L5.80791 14.816C4.33342 13.5226 3.68751 11.4386 4.68604 9.69636Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.50012 4C5.50012 2.89543 6.39555 2 7.50012 2H12.6001C12.7314 2 12.8574 2.05164 12.951 2.14376L17.351 6.47709C17.4464 6.57107 17.5001 6.6994 17.5001 6.83333V14C17.5001 15.1046 16.6047 16 15.5001 16H6.50012C6.22398 16 6.00012 15.7761 6.00012 15.5C6.00012 15.2239 6.22398 15 6.50012 15H15.5001C16.0524 15 16.5001 14.5523 16.5001 14V7.33333H13.6001C12.7717 7.33333 12.1001 6.66176 12.1001 5.83333V3H7.50012C6.94784 3 6.50012 3.44772 6.50012 4V6.5C6.50012 6.77614 6.27626 7 6.00012 7C5.72398 7 5.50012 6.77614 5.50012 6.5V4ZM13.1001 3.69419L15.7799 6.33333H13.6001C13.324 6.33333 13.1001 6.10948 13.1001 5.83333V3.69419Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.99841 8.62841C6.88091 8.03449 5.49354 8.45894 4.89962 9.57643C4.3057 10.6939 4.73014 12.0813 5.84763 12.6752C6.96513 13.2691 8.3525 12.8447 8.94642 11.7272C9.54034 10.6097 9.1159 9.22233 7.99841 8.62841ZM4.01658 9.10712C4.86969 7.50194 6.86254 6.89227 8.46772 7.74538C10.0729 8.59849 10.6826 10.5913 9.82946 12.1965C9.05612 13.6516 7.34624 14.2886 5.83755 13.7596L4.22738 16.7892C4.09778 17.0331 3.79505 17.1257 3.55121 16.9961C3.30737 16.8665 3.21475 16.5637 3.34435 16.3199L4.95451 13.2903C3.67191 12.3358 3.24325 10.5622 4.01658 9.10712Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1213_2010">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const FilmFrame = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M2 6.5C2 5.94772 2.44772 5.5 3 5.5H19C19.5523 5.5 20 5.94772 20 6.5V18.5C20 19.0523 19.5523 19.5 19 19.5H3C2.44772 19.5 2 19.0523 2 18.5V6.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 3C1.44772 3 1 3.44772 1 4V16C1 16.5523 1.44772 17 2 17H18C18.5523 17 19 16.5523 19 16V4C19 3.44772 18.5523 3 18 3H2ZM15.5 4.5H16.5C16.7761 4.5 17 4.72386 17 5V6C17 6.27614 16.7761 6.5 16.5 6.5H15.5C15.2239 6.5 15 6.27614 15 6V5C15 4.72386 15.2239 4.5 15.5 4.5ZM16.5 7.5H15.5C15.2239 7.5 15 7.72386 15 8V9C15 9.27614 15.2239 9.5 15.5 9.5H16.5C16.7761 9.5 17 9.27614 17 9V8C17 7.72386 16.7761 7.5 16.5 7.5ZM15.5 10.5H16.5C16.7761 10.5 17 10.7239 17 11V12C17 12.2761 16.7761 12.5 16.5 12.5H15.5C15.2239 12.5 15 12.2761 15 12V11C15 10.7239 15.2239 10.5 15.5 10.5ZM16.5 13.5H15.5C15.2239 13.5 15 13.7239 15 14V15C15 15.2761 15.2239 15.5 15.5 15.5H16.5C16.7761 15.5 17 15.2761 17 15V14C17 13.7239 16.7761 13.5 16.5 13.5ZM3.5 4.5H4.5C4.77614 4.5 5 4.72386 5 5V6C5 6.27614 4.77614 6.5 4.5 6.5H3.5C3.22386 6.5 3 6.27614 3 6V5C3 4.72386 3.22386 4.5 3.5 4.5ZM4.5 7.5H3.5C3.22386 7.5 3 7.72386 3 8V9C3 9.27614 3.22386 9.5 3.5 9.5H4.5C4.77614 9.5 5 9.27614 5 9V8C5 7.72386 4.77614 7.5 4.5 7.5ZM3.5 10.5H4.5C4.77614 10.5 5 10.7239 5 11V12C5 12.2761 4.77614 12.5 4.5 12.5H3.5C3.22386 12.5 3 12.2761 3 12V11C3 10.7239 3.22386 10.5 3.5 10.5ZM4.5 13.5H3.5C3.22386 13.5 3 13.7239 3 14V15C3 15.2761 3.22386 15.5 3.5 15.5H4.5C4.77614 15.5 5 15.2761 5 15V14C5 13.7239 4.77614 13.5 4.5 13.5ZM6.5 16V4H13.5V16H6.5Z" fill="black"/>
</svg>
`;

const Fire = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M11.4983 18.5682C15.1259 18.5682 18 15.6275 18 11.9999C18 11.9999 18 8.58436 15.5899 5.60936C15.5466 5.55587 15.463 5.56162 15.4276 5.62065L14.1104 7.81588C14.0667 7.88874 13.9573 7.87759 13.9289 7.79753C13.768 7.34554 13.3622 6.2361 13 5.49992C12.5886 4.66393 11.5112 3.52205 11.1333 3.13474C11.0771 3.07709 10.9804 3.10661 10.9651 3.18569C10.8538 3.76019 10.4859 5.52807 10 6.49992C9.5233 7.45332 8.8291 8.5106 8.58709 8.87131C8.54654 8.93174 8.45745 8.92901 8.42001 8.86661L7.07652 6.62745C7.03998 6.56655 6.95334 6.56224 6.91172 6.61979C5.48032 8.59873 5 11.0198 5 11.9999C5 15.6275 7.87072 18.5682 11.4983 18.5682Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.4742 3.0906C10.5652 2.62114 11.1491 2.43493 11.4912 2.78558C11.6848 2.98397 12.058 3.37607 12.4371 3.82761C12.8094 4.27117 13.2148 4.80401 13.4486 5.27919C13.677 5.74335 13.9193 6.34339 14.1104 6.8442L14.9988 5.36342C15.2134 5.00572 15.7173 4.97233 15.9784 5.29464C17.2421 6.85452 17.8708 8.52547 18.1843 9.80095C18.3413 10.4396 18.4201 10.9827 18.4597 11.3687C18.4796 11.5618 18.4896 11.716 18.4947 11.8237C18.4973 11.8775 18.4986 11.9197 18.4993 11.9494L18.4999 11.9844L18.5 11.9947L18.5 11.9979L18.5 11.9991C18.5 11.9993 18.5 11.9999 18 11.9999L18.5 11.9991C18.5 15.8961 15.4086 19.0682 11.4983 19.0682C7.58761 19.0682 4.5 15.8966 4.5 11.9999C4.5 10.9258 5.00727 8.39961 6.50659 6.32677C6.76183 5.97389 7.28706 6.00654 7.50526 6.37022L8.51965 8.06086C8.82795 7.57793 9.24023 6.90145 9.55279 6.27633C10.0026 5.37675 10.3601 3.67949 10.4742 3.0906Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0896 14.0235C13.1138 13.7295 13.2436 11.2132 10.713 9.74544C10.4354 9.58442 10.0764 9.67043 9.90418 9.94599L8.93994 11.4887L8.13804 10.5193C7.96202 10.3066 7.64685 10.2768 7.43407 10.4528C7.42359 10.4614 7.41308 10.4709 7.4035 10.4802C5.88882 11.9378 5.98835 13.7752 6.00911 14.0237C6.02193 15.968 7.60202 17.5402 9.54934 17.5402C11.4967 17.5402 13.0769 15.9679 13.0896 14.0235ZM7.73685 11.6033C7.71579 11.6308 7.69532 11.6583 7.67543 11.6859C6.90622 12.7533 7.00068 13.8897 7.00616 13.9465C7.0079 13.9645 7.00899 13.9839 7.00902 14.0046C7.01154 15.4054 8.14791 16.5402 9.54933 16.5402C10.9507 16.5402 12.0871 15.4054 12.0896 14.0046C12.0897 13.9907 12.0901 13.9713 12.0925 13.9468C12.0988 13.8818 12.2555 12.0938 10.6188 10.8781C10.5922 10.8584 10.5651 10.8388 10.5376 10.8193L9.494 12.489C9.27704 12.8362 8.78381 12.8689 8.52288 12.5535L7.73685 11.6033Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.97424 2.0906C9.06519 1.62114 9.64907 1.43493 9.9912 1.78558C10.1848 1.98397 10.558 2.37607 10.9371 2.82761C11.3094 3.27117 11.7148 3.80401 11.9486 4.27919C12.177 4.74335 12.4193 5.34339 12.6104 5.8442L13.4988 4.36342C13.7134 4.00572 14.2173 3.97233 14.4784 4.29464C15.7421 5.85452 16.3708 7.52547 16.6843 8.80095C16.8413 9.43964 16.9201 9.98272 16.9597 10.3687C16.9796 10.5618 16.9896 10.716 16.9947 10.8237C16.9973 10.8775 16.9986 10.9197 16.9993 10.9494L16.9999 10.9844L17 10.9947L17 10.9979L17 10.9991C17 14.8961 13.9086 18.0682 9.99829 18.0682C6.08761 18.0682 3 14.8966 3 10.9999C3 9.92577 3.50727 7.39961 5.00659 5.32677C5.26183 4.97389 5.78706 5.00654 6.00526 5.37022L7.01965 7.06086C7.32795 6.57793 7.74023 5.90145 8.05279 5.27633C8.50258 4.37675 8.86014 2.67949 8.97424 2.0906ZM9.79656 3.04028C9.61597 3.84062 9.31785 4.98227 8.94721 5.72355C8.45525 6.70748 7.74565 7.7872 7.50229 8.14991C7.25501 8.51847 6.71483 8.49648 6.49127 8.12387L5.47303 6.42681C4.37601 8.20011 4 10.193 4 10.9999C4 14.3584 6.65383 17.0682 9.99829 17.0682C13.3429 17.0682 15.9997 14.3584 16 11.0005C16 11.0003 16 11.0007 16 11.0005L16 10.9957L15.9995 10.9723C15.999 10.9505 15.998 10.9164 15.9959 10.8711C15.9915 10.7803 15.9828 10.6444 15.965 10.4709C15.9293 10.1234 15.8575 9.62669 15.7132 9.03962C15.4553 7.99022 14.9686 6.66353 14.0523 5.38456L13.0392 7.07314C12.7767 7.51065 12.127 7.44063 11.9578 6.96516C11.7962 6.51107 11.3991 5.42747 11.0514 4.72069C10.8738 4.35987 10.5348 3.90378 10.1712 3.47057C10.0434 3.31838 9.91598 3.17296 9.79656 3.04028Z" fill="black"/>
</svg>
`;

const Flag = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M7.99957 4.97042L8.95446 4.57383C9.89482 4.22847 10.9329 4.24798 11.8622 4.63236L13.3435 5.24505C14.199 5.59892 15.1508 5.64505 16.0366 5.37556L16.9296 5.10387C17.7769 4.84609 18.6728 5.32399 18.9306 6.1713C18.9766 6.32261 19 6.4799 19 6.63806V10.6997C19 11.8707 18.3646 12.9495 17.3405 13.5173L16.6064 13.9244C15.3998 14.5935 13.9335 14.5935 12.7269 13.9244L12.2731 13.6728C11.0665 13.0037 9.60021 13.0037 8.39359 13.6728L8.16667 13.7986C8.1121 13.8288 8.05644 13.8552 8 13.8778V19C8 19.5523 7.55228 20 7 20C6.44772 20 6 19.5523 6 19V5C6 4.44772 6.44772 4 7 4C7.81074 4 7.99957 4.97042 7.99957 4.97042Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.80448 2.63238L6.16667 2.89619C4.85526 3.43861 4 4.7179 4 6.13705V10.5225C4 10.7701 4.06299 11.0136 4.18304 11.2301C4.57382 11.9349 5.46192 12.1894 6.16667 11.7986L6.39359 11.6728C7.60021 11.0037 9.06646 11.0037 10.2731 11.6728L10.7269 11.9244C11.9335 12.5935 13.3998 12.5935 14.6064 11.9244L15.3405 11.5174C16.3646 10.9495 17 9.87068 17 8.69967V4.63808C17 4.47992 16.9766 4.32263 16.9306 4.17132C16.6728 3.32401 15.7769 2.8461 14.9296 3.10389L14.0366 3.37558C13.1508 3.64506 12.199 3.59893 11.3435 3.24506L9.86219 2.63238C8.88317 2.22744 7.78349 2.22744 6.80448 2.63238ZM5 6.13705C5 5.12254 5.6114 4.20802 6.54888 3.82026L7.18669 3.55645C7.92095 3.25275 8.74571 3.25275 9.47998 3.55645L10.9613 4.16914C12.0307 4.61148 13.2205 4.66914 14.3277 4.33228L15.2207 4.06059C15.5396 3.96356 15.8768 4.14345 15.9739 4.46238C15.9912 4.51934 16 4.57854 16 4.63808V8.69967C16 9.50723 15.5618 10.2512 14.8556 10.6428L14.1215 11.0499C13.2165 11.5517 12.1168 11.5517 11.2119 11.0499L10.758 10.7982C9.24974 9.96189 7.41693 9.96189 5.90865 10.7982L5.68173 10.9241C5.45999 11.047 5.18055 10.9669 5.05759 10.7452C5.01982 10.6771 5 10.6004 5 10.5225V6.13705Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 2C5.55228 2 6 2.44772 6 3V17C6 17.5523 5.55228 18 5 18C4.44772 18 4 17.5523 4 17V3C4 2.44772 4.44772 2 5 2Z" fill="black"/>
</svg>
`;

const FlagStraight = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M4 4.5C4 3.94772 4.44772 3.5 5 3.5H18.0793C18.8884 3.5 19.3625 4.41068 18.8986 5.07346L16.6004 8.35663C16.5401 8.44271 16.5401 8.55729 16.6004 8.64337L18.8986 11.9265C19.3625 12.5893 18.8884 13.5 18.0793 13.5H5C4.44772 13.5 4 13.0523 4 12.5V4.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.5C5.55228 4.5 6 4.94772 6 5.5L6 18.5C6 19.0523 5.55228 19.5 5 19.5C4.44772 19.5 4 19.0523 4 18.5L4 5.5C4 4.94772 4.44772 4.5 5 4.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5793 3L3.5 3V11H16.5793L14.2811 7.71683C13.9798 7.28643 13.9798 6.71357 14.2811 6.28317L16.5793 3ZM3.5 2C2.94772 2 2.5 2.44772 2.5 3V11C2.5 11.5523 2.94772 12 3.5 12H16.5793C17.3884 12 17.8625 11.0893 17.3986 10.4265L15.1004 7.14337C15.0401 7.05729 15.0401 6.94271 15.1004 6.85663L17.3986 3.57346C17.8625 2.91068 17.3884 2 16.5793 2H3.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 3C3.27614 3 3.5 3.22386 3.5 3.5L3.5 17.5C3.5 17.7761 3.27614 18 3 18C2.72386 18 2.5 17.7761 2.5 17.5L2.5 3.5C2.5 3.22386 2.72386 3 3 3Z" fill="black"/>
</svg>
`;

const Flower = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_1505)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.9577 3.70271L14.8853 3.78196C14.5511 4.14683 14.3446 4.35528 14.1748 4.49015C13.9784 4.23554 13.6887 3.84808 13.6936 3.8544C13.4051 3.48043 13.165 3.20924 12.9195 3.00194C12.619 2.74817 12.3212 2.60174 12 2.60174C11.8313 2.60174 11.6672 2.64406 11.5086 2.72103C11.122 2.90864 10.798 3.26211 10.3638 3.86885C10.3094 3.94494 10.1721 4.14121 10.09 4.2587L10.0269 4.34878C9.98779 4.40411 9.95266 4.45293 9.92077 4.4962L9.90489 4.48417C9.72623 4.3472 9.51116 4.13846 9.15613 3.76687L9.08747 3.69487C8.55371 3.13443 8.40866 2.98816 8.18558 2.80638C8.00393 2.65837 7.84702 2.56272 7.67667 2.52097C7.34592 2.43991 7.0295 2.60022 6.90938 2.93114C6.64016 3.67283 6.5 4.46989 6.5 5.28809C6.5 8.66894 8.19597 11.074 11.1655 11.4489C11.0609 11.6069 11 11.7963 11 12V15.7721C10.6014 15.2998 10.1289 14.8326 9.61094 14.398C7.92618 12.9843 5.83957 12.594 4.90256 13.7107C3.96555 14.8274 4.71224 16.8145 6.397 18.2282C8.00906 19.5809 10.6602 20.2761 11.7674 19.4728C11.8328 19.4884 11.9007 19.4975 11.9704 19.4996C13.0994 20.2603 15.7087 19.5655 17.3025 18.2282C18.9873 16.8145 19.734 14.8274 18.797 13.7107C17.8599 12.594 15.7733 12.9843 14.0886 14.398C13.6953 14.7279 13.3284 15.0766 13 15.4321V12C13 11.7963 12.9391 11.6069 12.8346 11.4489C15.804 11.074 17.5 8.66894 17.5 5.28809C17.5 4.46989 17.3599 3.67283 17.0906 2.93114C16.9711 2.60183 16.6556 2.43776 16.3239 2.52196C16.1538 2.56515 16.0002 2.66253 15.8231 2.8129C15.6085 2.99518 15.4743 3.13653 14.9577 3.70271Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9577 2.70271L12.8853 2.78196C12.5511 3.14683 12.3446 3.35528 12.1748 3.49015C11.9784 3.23554 11.6887 2.84808 11.6936 2.8544C11.4051 2.48043 11.165 2.20924 10.9195 2.00194C10.619 1.74817 10.3212 1.60174 10 1.60174C9.83135 1.60174 9.66724 1.64406 9.50862 1.72103C9.12201 1.90864 8.798 2.26211 8.36383 2.86885C8.30938 2.94494 8.17213 3.14122 8.08998 3.2587C8.05753 3.3051 8.03368 3.33921 8.02692 3.34878C7.98778 3.40411 7.95265 3.45293 7.92076 3.4962L7.90489 3.48417C7.72623 3.3472 7.51115 3.13846 7.15613 2.76687L7.08746 2.69487C6.55371 2.13443 6.40865 1.98816 6.18557 1.80638C6.00392 1.65837 5.84702 1.56272 5.67667 1.52097C5.34592 1.43991 5.02949 1.60022 4.90937 1.93114C4.64015 2.67283 4.5 3.46989 4.5 4.28809C4.5 7.97398 6.51581 10.5 10 10.5C13.4842 10.5 15.5 7.97398 15.5 4.28809C15.5 3.46989 15.3598 2.67283 15.0906 1.93114C14.9711 1.60183 14.6556 1.43776 14.3239 1.52196C14.1538 1.56515 14.0002 1.66253 13.8231 1.8129C13.6085 1.99518 13.4742 2.13653 12.9577 2.70271ZM5.5 4.28809C5.5 3.74768 5.57105 3.21929 5.70851 2.71616C5.84152 2.83956 6.01414 3.01788 6.36332 3.38453L6.43309 3.45768C6.82398 3.86681 7.06306 4.09885 7.29648 4.27779C7.7511 4.62631 8.16971 4.74941 8.52019 4.34902C8.61368 4.24222 8.71072 4.11375 8.84336 3.92621C8.85158 3.91458 8.87876 3.87572 8.91466 3.82438C8.99759 3.7058 9.12708 3.52063 9.17706 3.45079C9.51365 2.98042 9.76183 2.70968 9.94521 2.62069C9.97484 2.60631 9.99258 2.60174 10 2.60174C10.0387 2.60174 10.1373 2.65022 10.2743 2.76597C10.4531 2.91693 10.6532 3.14297 10.9018 3.46524C10.8697 3.42366 11.4473 4.19598 11.5813 4.34902C11.9329 4.75066 12.3526 4.62516 12.7943 4.27514C13.0202 4.09616 13.2515 3.86269 13.6227 3.45736L13.6965 3.37669C14.0099 3.03318 14.1737 2.85605 14.2965 2.73475C14.4307 3.2323 14.5 3.75433 14.5 4.28809C14.5 7.46499 12.876 9.49999 10 9.49999C7.12397 9.49999 5.5 7.46499 5.5 4.28809Z" fill="black"/>
<path d="M9.5 11C9.5 10.7239 9.72386 10.5 10 10.5C10.2761 10.5 10.5 10.7239 10.5 11V17.5C10.5 17.7761 10.2761 18 10 18C9.72386 18 9.5 17.7761 9.5 17.5V11Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.0886 13.398C10.114 15.0548 8.80192 17.1841 9.71244 18.2692C10.6408 19.3756 13.571 18.6811 15.3025 17.2282C16.9873 15.8145 17.734 13.8274 16.797 12.7107C15.8599 11.594 13.7733 11.9843 12.0886 13.398ZM14.6597 16.4622C13.2968 17.6058 10.9315 18.1663 10.4785 17.6264C10.115 17.1932 11.1789 15.4667 12.7314 14.164C14.0493 13.0582 15.5479 12.7779 16.0309 13.3535C16.5139 13.9291 15.9776 15.3563 14.6597 16.4622Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.61094 13.398C9.58547 15.0548 10.8976 17.1841 9.98706 18.2692C9.05874 19.3756 6.1285 18.6811 4.397 17.2282C2.71224 15.8145 1.96554 13.8274 2.90255 12.7107C3.83956 11.594 5.92617 11.9843 7.61094 13.398ZM5.03979 16.4622C6.40267 17.6058 8.768 18.1663 9.22102 17.6264C9.58452 17.1932 8.52056 15.4667 6.96815 14.164C5.65026 13.0582 4.15159 12.7779 3.6686 13.3535C3.1856 13.9291 3.72189 15.3563 5.03979 16.4622Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_1505">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const FlowerBud = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.1559 7.80414C18.7548 7.97683 20 9.34178 20 11C20 12.6582 18.7548 14.0232 17.1559 14.1959C17.2775 14.5362 17.3438 14.9031 17.3438 15.2857C17.3438 17.0609 15.9167 18.5 14.1562 18.5C13.0475 18.5 12.0711 17.9292 11.5 17.0631C10.9289 17.9292 9.95245 18.5 8.84375 18.5C7.08334 18.5 5.65625 17.0609 5.65625 15.2857C5.65625 14.9031 5.72253 14.5362 5.84415 14.1959C4.24521 14.0232 3 12.6582 3 11C3 9.34178 4.24521 7.97683 5.84415 7.80414C5.72253 7.46383 5.65625 7.09686 5.65625 6.71429C5.65625 4.93908 7.08334 3.5 8.84375 3.5C9.95245 3.5 10.9289 4.07081 11.5 4.9369C12.0711 4.07081 13.0475 3.5 14.1563 3.5C15.9167 3.5 17.3438 4.93908 17.3438 6.71429C17.3438 7.09686 17.2775 7.46383 17.1559 7.80414V7.80414Z" fill="currentColor"/>
</g>
<path d="M13 10C13 11.6569 11.6569 13 10 13C8.34315 13 7 11.6569 7 10C7 8.34315 8.34315 7 10 7C11.6569 7 13 8.34315 13 10Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9436 13.3714C17.4272 12.9576 18.5 11.5957 18.5 10C18.5 8.40432 17.4272 7.04239 15.9436 6.62862C15.981 6.42276 16 6.21259 16 6C16 4.067 14.433 2.5 12.5 2.5C11.541 2.5 10.6476 2.889 10 3.55019C9.35243 2.889 8.45901 2.5 7.5 2.5C5.567 2.5 4 4.067 4 6C4 6.21259 4.01902 6.42276 4.05638 6.62862C2.57281 7.04239 1.5 8.40432 1.5 10C1.5 11.5957 2.57281 12.9576 4.05638 13.3714C4.01902 13.5772 4 13.7874 4 14C4 15.933 5.567 17.5 7.5 17.5C8.45901 17.5 9.35243 17.111 10 16.4498C10.6476 17.111 11.541 17.5 12.5 17.5C14.433 17.5 16 15.933 16 14C16 13.7874 15.981 13.5772 15.9436 13.3714ZM14.8528 6.84769C14.7429 7.15259 14.9477 7.47985 15.2699 7.51436C16.5325 7.64958 17.5 8.71964 17.5 10C17.5 11.2804 16.5325 12.3504 15.2699 12.4856C14.9477 12.5202 14.7429 12.8474 14.8528 13.1523C14.9498 13.4215 15 13.707 15 14C15 15.3807 13.8807 16.5 12.5 16.5C11.6522 16.5 10.8773 16.0753 10.4164 15.3821C10.2185 15.0845 9.78147 15.0845 9.58363 15.3821C9.1227 16.0753 8.3478 16.5 7.5 16.5C6.11929 16.5 5 15.3807 5 14C5 13.707 5.05022 13.4215 5.14723 13.1523C5.25711 12.8474 5.05234 12.5202 4.73009 12.4856C3.46751 12.3504 2.5 11.2804 2.5 10C2.5 8.71964 3.46751 7.64958 4.73009 7.51436C5.05234 7.47985 5.25711 7.15259 5.14723 6.84769C5.05022 6.57848 5 6.29304 5 6C5 4.61929 6.11929 3.5 7.5 3.5C8.3478 3.5 9.1227 3.9247 9.58363 4.61794C9.78147 4.91549 10.2185 4.91549 10.4164 4.61794C10.8773 3.9247 11.6522 3.5 12.5 3.5C13.8807 3.5 15 4.61929 15 6C15 6.29304 14.9498 6.57848 14.8528 6.84769Z" fill="black"/>
</svg>
`;

const Folder = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M12.2187 7.5H17.5C18.8807 7.5 20 8.61929 20 10V17C20 18.3807 18.8807 19.5 17.5 19.5H6.5C5.11929 19.5 4 18.3807 4 17L4 7.5C4 6.11929 5.11929 5 6.5 5H9.33935C10.2365 5 11.0649 5.48072 11.51 6.25965L12.2187 7.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 5.5H10.2187L9.50996 4.25965C9.06486 3.48072 8.2365 3 7.33935 3H4.5C3.11929 3 2 4.11929 2 5.5V15C2 16.3807 3.11929 17.5 4.5 17.5H15.5C16.8807 17.5 18 16.3807 18 15V8C18 6.61929 16.8807 5.5 15.5 5.5ZM4.5 16.5C3.67157 16.5 3 15.8284 3 15V5.5C3 4.67157 3.67157 4 4.5 4H7.33935C7.87764 4 8.37466 4.28843 8.64172 4.75579L9.49445 6.24807C9.58347 6.40386 9.74914 6.5 9.92857 6.5H15.5C16.3284 6.5 17 7.17157 17 8V15C17 15.8284 16.3284 16.5 15.5 16.5H4.5Z" fill="black"/>
</svg>
`;

const FoldingStool = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1210_784)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.25 11.5C5.25 10.6716 5.92157 10 6.75 10H16.75C17.5784 10 18.25 10.6716 18.25 11.5C18.25 12.3284 17.5784 13 16.75 13H6.75C5.92157 13 5.25 12.3284 5.25 11.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 1.5C8.30228 1.5 8.75 1.94772 8.75 2.5V7.5C8.75 8.05228 8.30228 8.5 7.75 8.5C7.19772 8.5 6.75 8.05228 6.75 7.5V2.5C6.75 1.94772 7.19772 1.5 7.75 1.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 6.5C8.30228 6.5 8.75 6.94772 8.75 7.5V10C8.75 10.5523 8.30228 11 7.75 11C7.19772 11 6.75 10.5523 6.75 10V7.5C6.75 6.94772 7.19772 6.5 7.75 6.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 6.5C16.3023 6.5 16.75 6.94772 16.75 7.5V10C16.75 10.5523 16.3023 11 15.75 11C15.1977 11 14.75 10.5523 14.75 10V7.5C14.75 6.94772 15.1977 6.5 15.75 6.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 1.5C16.3023 1.5 16.75 1.94772 16.75 2.5V7.5C16.75 8.05228 16.3023 8.5 15.75 8.5C15.1977 8.5 14.75 8.05228 14.75 7.5V2.5C14.75 1.94772 15.1977 1.5 15.75 1.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5753 19.0647C17.2634 19.5205 16.6411 19.6372 16.1853 19.3253L6.68529 12.8253C6.22949 12.5134 6.1128 11.8911 6.42467 11.4353C6.73653 10.9795 7.35885 10.8628 7.81466 11.1747L17.3147 17.6747C17.7705 17.9866 17.8872 18.6089 17.5753 19.0647Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.9247 19.0647C6.23656 19.5205 6.85888 19.6372 7.31469 19.3253L16.8147 12.8253C17.2705 12.5134 17.3872 11.8911 17.0753 11.4353C16.7635 10.9795 16.1412 10.8628 15.6853 11.1747L6.18532 17.6747C5.72952 17.9866 5.61283 18.6089 5.9247 19.0647Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 5H7.75V3H15.75V5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 7.5H7.75V5.5H15.75V7.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 8.5C3.75 7.94772 4.19772 7.5 4.75 7.5H6.75C7.30228 7.5 7.75 7.94772 7.75 8.5C7.75 9.05228 7.30228 9.5 6.75 9.5H4.75C4.19772 9.5 3.75 9.05228 3.75 8.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 8.5C15.75 7.94772 16.1977 7.5 16.75 7.5H18.75C19.3023 7.5 19.75 7.94772 19.75 8.5C19.75 9.05228 19.3023 9.5 18.75 9.5H16.75C16.1977 9.5 15.75 9.05228 15.75 8.5Z" fill="currentColor"/>
<path d="M7.75 7.5H15.75V10.5H7.75V7.5Z" fill="currentColor"/>
<path d="M7.75 3.5H15.75V6.5H7.75V3.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 11C4 10.4477 4.44772 10 5 10H15C15.5523 10 16 10.4477 16 11C16 11.5523 15.5523 12 15 12H5C4.44772 12 4 11.5523 4 11Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 1.5C6.27614 1.5 6.5 1.72386 6.5 2V7C6.5 7.27614 6.27614 7.5 6 7.5C5.72386 7.5 5.5 7.27614 5.5 7V2C5.5 1.72386 5.72386 1.5 6 1.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 6.5C6.27614 6.5 6.5 6.72386 6.5 7V10.5C6.5 10.7761 6.27614 11 6 11C5.72386 11 5.5 10.7761 5.5 10.5V7C5.5 6.72386 5.72386 6.5 6 6.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 6.5C14.2761 6.5 14.5 6.72386 14.5 7V10.5C14.5 10.7761 14.2761 11 14 11C13.7239 11 13.5 10.7761 13.5 10.5V7C13.5 6.72386 13.7239 6.5 14 6.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 1.5C14.2761 1.5 14.5 1.72386 14.5 2V7C14.5 7.27614 14.2761 7.5 14 7.5C13.7239 7.5 13.5 7.27614 13.5 7V2C13.5 1.72386 13.7239 1.5 14 1.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4127 18.2823C15.2567 18.5102 14.9456 18.5686 14.7177 18.4127L5.21767 11.9127C4.98976 11.7567 4.93142 11.4456 5.08735 11.2177C5.24329 10.9898 5.55445 10.9314 5.78235 11.0873L15.2824 17.5873C15.5103 17.7433 15.5686 18.0544 15.4127 18.2823Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.58732 18.2823C4.74325 18.5102 5.05441 18.5686 5.28231 18.4127L14.7823 11.9127C15.0102 11.7567 15.0686 11.4456 14.9126 11.2177C14.7567 10.9898 14.4456 10.9314 14.2177 11.0873L4.71763 17.5873C4.48973 17.7433 4.43139 18.0544 4.58732 18.2823Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4H6V3H14V4Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 7H6V6H14V7Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 8C2.5 7.72386 2.72386 7.5 3 7.5H6C6.27614 7.5 6.5 7.72386 6.5 8C6.5 8.27614 6.27614 8.5 6 8.5H3C2.72386 8.5 2.5 8.27614 2.5 8Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 8C13.5 7.72386 13.7239 7.5 14 7.5H17C17.2761 7.5 17.5 7.72386 17.5 8C17.5 8.27614 17.2761 8.5 17 8.5H14C13.7239 8.5 13.5 8.27614 13.5 8Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1210_784">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Gear = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5576 3.25C11.8545 3.25 12.1234 3.42509 12.2435 3.69656L12.6859 4.69656C12.7302 4.79661 12.7507 4.89918 12.7509 4.99917C13.1879 5.12648 13.6083 5.30097 14.0053 5.5189C14.0663 5.45819 14.1394 5.40664 14.224 5.36799L15.1948 4.92456C15.4796 4.79445 15.8153 4.85501 16.0367 5.07643L16.8744 5.91414C17.0843 6.12405 17.1507 6.43801 17.0436 6.71489L16.6494 7.73483C16.6099 7.83694 16.5519 7.92404 16.4812 7.99487C16.6991 8.39186 16.8736 8.81226 17.0009 9.24925C17.0869 9.24944 17.175 9.2647 17.2622 9.29718L18.2622 9.67007C18.5556 9.77948 18.7501 10.0597 18.7501 10.3728V11.5575C18.7501 11.8544 18.575 12.1233 18.3036 12.2434L17.3036 12.6858C17.2035 12.7301 17.1009 12.7506 17.0009 12.7508C16.8736 13.1877 16.6991 13.6081 16.4812 14.0051C16.5419 14.0661 16.5935 14.1392 16.6321 14.2239L17.0756 15.1946C17.2057 15.4795 17.1451 15.8152 16.9237 16.0366L16.086 16.8743C15.8761 17.0842 15.5621 17.1505 15.2852 17.0435L14.2653 16.6492C14.1632 16.6098 14.0761 16.5517 14.0053 16.4811C13.6083 16.699 13.1879 16.8735 12.7509 17.0008C12.7507 17.0868 12.7354 17.1749 12.7029 17.262L12.33 18.262C12.2206 18.5554 11.9405 18.75 11.6273 18.75H10.4426C10.1458 18.75 9.87684 18.5749 9.75674 18.3034L9.31433 17.3034C9.27007 17.2034 9.24952 17.1009 9.24937 17.0009C8.81235 16.8736 8.39192 16.6991 7.99491 16.4812C7.93394 16.5418 7.86084 16.5934 7.77626 16.632L6.80548 17.0754C6.52065 17.2055 6.18496 17.145 5.96354 16.9236L5.12583 16.0859C4.91592 15.876 4.84957 15.562 4.95661 15.2851L5.35088 14.2652C5.39033 14.1631 5.44833 14.0761 5.51894 14.0052C5.30099 13.6082 5.1265 13.1878 4.99918 12.7508C4.91321 12.7505 4.82514 12.7353 4.73808 12.7028L3.73808 12.3299C3.44467 12.2205 3.25012 11.9403 3.25012 11.6272V10.4425C3.25012 10.1456 3.42521 9.87672 3.69668 9.75662L4.69668 9.31421C4.7967 9.26996 4.89922 9.24941 4.99918 9.24924C5.1265 8.81222 5.30099 8.39178 5.51894 7.99476C5.45826 7.9338 5.40674 7.8607 5.36812 7.77614L4.92468 6.80536C4.79458 6.52053 4.85513 6.18484 5.07655 5.96341L5.91426 5.12571C6.12417 4.9158 6.43813 4.84945 6.71501 4.95649L7.73495 5.35076C7.83702 5.39022 7.92409 5.44822 7.99491 5.51884C8.39192 5.30091 8.81235 5.12642 9.24937 4.99912C9.24957 4.91313 9.26483 4.82504 9.29731 4.73796L9.6702 3.73796C9.7796 3.44455 10.0598 3.25 10.3729 3.25H11.5576Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.23223 11.5178C8.69772 11.9833 9.32837 12.25 10 12.25C10.6716 12.25 11.3023 11.9833 11.7678 11.5178C12.2333 11.0523 12.5 10.4216 12.5 9.75C12.5 9.07837 12.2333 8.44772 11.7678 7.98223C11.3023 7.51674 10.6716 7.25 10 7.25C9.32837 7.25 8.69772 7.51674 8.23223 7.98223C7.76674 8.44772 7.5 9.07837 7.5 9.75C7.5 10.4216 7.76674 11.0523 8.23223 11.5178ZM11.0607 10.8107C10.7808 11.0905 10.4037 11.25 10 11.25C9.59632 11.25 9.21915 11.0905 8.93934 10.8107C8.65953 10.5308 8.5 10.1537 8.5 9.75C8.5 9.34632 8.65953 8.96915 8.93934 8.68934C9.21915 8.40953 9.59632 8.25 10 8.25C10.4037 8.25 10.7808 8.40953 11.0607 8.68934C11.3405 8.96915 11.5 9.34632 11.5 9.75C11.5 10.1537 11.3405 10.5308 11.0607 10.8107Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2161 3.52261L12.9469 4.23706C12.5759 4.03836 12.1853 3.8775 11.7804 3.75738L11.3109 2.34254C11.2431 2.13803 11.0519 2 10.8364 2H9.05934C8.83506 2 8.63822 2.14934 8.57781 2.36533L8.18566 3.76755C7.78153 3.88997 7.39185 4.05304 7.02195 4.25387L5.68911 3.58516C5.49652 3.48853 5.26369 3.52615 5.11133 3.67851L3.85477 4.93507C3.69618 5.09366 3.6626 5.33845 3.77261 5.53389L4.48706 6.80311C4.28836 7.17412 4.1275 7.56472 4.00738 7.9696L2.59254 8.43906C2.38803 8.50692 2.25 8.69815 2.25 8.91362V10.6907C2.25 10.9149 2.39934 11.1118 2.61533 11.1722L4.01755 11.5643C4.13997 11.9685 4.30304 12.3581 4.50387 12.7281L3.83516 14.0609C3.73853 14.2535 3.77615 14.4863 3.92851 14.6387L5.18507 15.8952C5.34366 16.0538 5.58845 16.0874 5.78389 15.9774L7.05311 15.2629C7.42412 15.4616 7.81472 15.6225 8.2196 15.7426L8.68906 17.1575C8.75692 17.362 8.94815 17.5 9.16362 17.5H10.9407C11.1649 17.5 11.3618 17.3507 11.4222 17.1347L11.8143 15.7324C12.2185 15.61 12.6081 15.447 12.9781 15.2461L14.3109 15.9148C14.5035 16.0115 14.7363 15.9738 14.8887 15.8215L16.1452 14.5649C16.3038 14.4063 16.3374 14.1616 16.2274 13.9661L15.5129 12.6969C15.7116 12.3259 15.8725 11.9353 15.9926 11.5304L17.4075 11.0609C17.612 10.9931 17.75 10.8019 17.75 10.5864V8.80934C17.75 8.58506 17.6007 8.38822 17.3847 8.32781L15.9824 7.93566C15.86 7.53153 15.697 7.14185 15.4961 6.77195L16.1648 5.43911C16.2615 5.24652 16.2238 5.01369 16.0715 4.86133L14.8149 3.60477C14.6563 3.44618 14.4116 3.4126 14.2161 3.52261ZM13.1916 5.24689L14.3761 4.58012L15.1092 5.31325L14.4821 6.56313C14.4052 6.71642 14.4122 6.89843 14.5007 7.04534C14.7659 7.48564 14.9652 7.96281 15.0913 8.46333C15.1351 8.63728 15.2687 8.77443 15.4415 8.82274L16.75 9.18869V10.2255L15.4233 10.6657C15.2606 10.7197 15.1369 10.8533 15.0955 11.0197C14.9711 11.5207 14.7734 11.9986 14.5097 12.4397C14.4176 12.5937 14.4151 12.7852 14.5031 12.9416L15.1699 14.1261L14.4368 14.8592L13.1869 14.2321C13.0336 14.1552 12.8516 14.1622 12.7047 14.2507C12.2644 14.5159 11.7872 14.7152 11.2867 14.8413C11.1127 14.8851 10.9756 15.0187 10.9273 15.1915L10.5613 16.5H9.52452L9.08432 15.1733C9.03032 15.0106 8.89668 14.8869 8.73025 14.8455C8.22926 14.7211 7.75144 14.5234 7.31028 14.2597C7.15629 14.1676 6.96478 14.1651 6.80844 14.2531L5.62394 14.9199L4.89081 14.1868L5.5179 12.9369C5.59481 12.7836 5.58779 12.6016 5.49929 12.4547C5.23408 12.0144 5.03476 11.5372 4.9087 11.0367C4.86489 10.8627 4.73126 10.7256 4.5585 10.6773L3.25 10.3113V9.27452L4.57666 8.83432C4.73942 8.78032 4.86314 8.64668 4.90447 8.48025C5.02886 7.97926 5.22658 7.50144 5.49033 7.06028C5.58239 6.90629 5.58489 6.71478 5.49689 6.55844L4.83012 5.37394L5.56325 4.64081L6.81313 5.2679C6.96642 5.34481 7.14843 5.33779 7.29534 5.24929C7.73564 4.98408 8.21281 4.78476 8.71333 4.6587C8.88728 4.61489 9.02443 4.48126 9.07274 4.3085L9.43869 3H10.4755L10.9157 4.32666C10.9697 4.48942 11.1033 4.61314 11.2697 4.65447C11.7707 4.77886 12.2486 4.97658 12.6897 5.24033C12.8437 5.33239 13.0352 5.33489 13.1916 5.24689Z" fill="black"/>
</svg>
`;

const Gift = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_1928)">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M20 8C20 7.44772 19.5523 7 19 7H5C4.44772 7 4 7.44772 4 8V9.58065V19C4 19.5523 4.44772 20 5 20H19C19.5523 20 20 19.5523 20 19V8Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 5H17C17.5523 5 18 5.44772 18 6V17C18 17.5523 17.5523 18 17 18H3C2.44771 18 2 17.5523 2 17V6C2 5.44772 2.44771 5 3 5ZM17 17V6H3V17H17Z" fill="black"/>
<rect x="9.5" y="5.5" width="1" height="12" fill="black"/>
<rect x="2" y="10.5" width="16" height="1" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.94332 1.55446C10.0682 2.53232 10.7304 4.55547 9.97846 5.42046C9.228 6.28377 7.60446 5.69065 6.31908 4.5733C5.22456 3.62184 4.85022 2.1743 5.60673 1.30404C6.36324 0.43377 7.8488 0.603005 8.94332 1.55446ZM6.97514 3.81859C7.87157 4.59784 9.00773 5.0129 9.22375 4.7644C9.52349 4.41959 9.04968 2.97193 8.28726 2.30917C7.56243 1.67908 6.69193 1.57992 6.36144 1.96009C6.03096 2.34027 6.25031 3.1885 6.97514 3.81859Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2984 1.55446C10.1735 2.53232 9.51134 4.55547 10.2633 5.42046C11.0137 6.28377 12.6373 5.69065 13.9226 4.5733C15.0172 3.62184 15.3915 2.1743 14.635 1.30404C13.8785 0.43377 12.3929 0.603005 11.2984 1.55446ZM13.2666 3.81859C12.3702 4.59784 11.234 5.0129 11.018 4.7644C10.7182 4.41959 11.192 2.97193 11.9545 2.30917C12.6793 1.67908 13.5498 1.57992 13.8803 1.96009C14.2108 2.34027 13.9914 3.1885 13.2666 3.81859Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_1928">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Grab = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M3.5 8C2.94772 8 2.5 7.55228 2.5 7C2.5 6.44772 2.94772 6 3.5 6H17.9231C18.4754 6 18.9231 6.44772 18.9231 7C18.9231 7.55228 18.4754 8 17.9231 8H3.5Z" fill="currentColor"/>
<path d="M3.5 11.75C2.94772 11.75 2.5 11.3023 2.5 10.75C2.5 10.1977 2.94772 9.75 3.5 9.75H17.9231C18.4754 9.75 18.9231 10.1977 18.9231 10.75C18.9231 11.3023 18.4754 11.75 17.9231 11.75H3.5Z" fill="currentColor"/>
<path d="M3.5 15C2.94772 15 2.5 14.5523 2.5 14C2.5 13.4477 2.94772 13 3.5 13H17.9231C18.4754 13 18.9231 13.4477 18.9231 14C18.9231 14.5523 18.4754 15 17.9231 15H3.5Z" fill="currentColor"/>
</g>
<path d="M2.5 7C2.22386 7 2 6.77614 2 6.5C2 6.22386 2.22386 6 2.5 6H17.5C17.7761 6 18 6.22386 18 6.5C18 6.77614 17.7761 7 17.5 7H2.5Z" fill="black"/>
<path d="M2.5 10.25C2.22386 10.25 2 10.0261 2 9.75C2 9.47386 2.22386 9.25 2.5 9.25H17.5C17.7761 9.25 18 9.47386 18 9.75C18 10.0261 17.7761 10.25 17.5 10.25H2.5Z" fill="black"/>
<path d="M2.5 13.5C2.22386 13.5 2 13.2761 2 13C2 12.7239 2.22386 12.5 2.5 12.5H17.5C17.7761 12.5 18 12.7239 18 13C18 13.2761 17.7761 13.5 17.5 13.5H2.5Z" fill="black"/>
</svg>
`;

const Hamburger = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_531)">
<g opacity="0.8">
<path d="M19 7.61295C19 8.82615 18.3152 9.53685 17.0629 9.82065C16.1919 10.018 15.4053 10.0307 13.0284 9.96263C12.1035 9.93615 11.59 9.92566 11 9.92566C10.4101 9.92566 9.89655 9.93615 8.97167 9.96263C6.59468 10.0307 5.80815 10.018 4.93716 9.82065C3.68479 9.53685 3.00002 8.82615 3.00002 7.61295C3.00002 4.86393 6.5032 3.00001 11 3.00001C15.4968 3.00001 19 4.86393 19 7.61295Z" fill="currentColor"/>
<path d="M2.99673 18.3736C2.99673 19.3218 3.61135 19.8234 4.67144 19.9543C5.36314 20.0397 5.79286 20.0187 7.96666 19.8485C9.24942 19.748 10.0846 19.7033 10.9967 19.7033C11.9089 19.7033 12.744 19.748 14.0268 19.8485C16.2006 20.0187 16.6303 20.0397 17.322 19.9543C18.3821 19.8234 18.9967 19.3218 18.9967 18.3736C18.9967 16.4071 16.9454 16.0076 11.7021 15.9972C11.5147 15.9968 11.3647 15.9967 11.029 15.9967H10.9967H10.9645C10.6288 15.9967 10.4787 15.9968 10.2914 15.9972C5.0481 16.0076 2.99673 16.4071 2.99673 18.3736Z" fill="currentColor"/>
<path d="M3.75362 12.6139C3.2765 12.8921 2.66422 12.7308 2.38608 12.2536C2.10793 11.7765 2.26924 11.1642 2.74637 10.8861C3.47019 10.4641 4.2537 10.25 5.07961 10.25C5.6526 10.25 5.99872 10.3503 6.50625 10.5899L6.51855 10.5957C6.79134 10.7244 6.88012 10.75 7.125 10.75C7.36062 10.75 7.42729 10.7298 7.6615 10.6099L7.67334 10.6038C8.15762 10.3559 8.50471 10.25 9.08553 10.25C9.67619 10.25 10.025 10.3589 10.5119 10.6147L10.516 10.6168C10.7383 10.7336 10.7906 10.75 11 10.75C11.209 10.75 11.2609 10.7338 11.4821 10.6174L11.4866 10.615C11.9731 10.3591 12.3224 10.25 12.9137 10.25C13.4978 10.25 13.844 10.3556 14.3363 10.6056C14.5816 10.7302 14.6469 10.75 14.875 10.75C15.1046 10.75 15.1737 10.7292 15.4191 10.6061L15.4254 10.603C15.9204 10.3547 16.2663 10.25 16.8478 10.25C17.6616 10.25 18.4569 10.4591 19.2218 10.8683C19.7087 11.1288 19.8923 11.7348 19.6317 12.2218C19.3712 12.7087 18.7652 12.8923 18.2782 12.6317C17.7971 12.3743 17.3242 12.25 16.8478 12.25C16.6285 12.25 16.5632 12.2698 16.3219 12.3908C15.8163 12.6443 15.4658 12.75 14.875 12.75C14.2827 12.75 13.9323 12.6435 13.4363 12.3916L13.4308 12.3889C13.1945 12.2689 13.1326 12.25 12.9137 12.25C12.6967 12.25 12.6419 12.2671 12.4178 12.385L12.4132 12.3874C11.9299 12.6417 11.5843 12.75 11 12.75C10.4156 12.75 10.0701 12.6418 9.58594 12.3874L9.58189 12.3853C9.35691 12.2671 9.30206 12.25 9.08553 12.25C8.87053 12.25 8.81148 12.268 8.58493 12.384L8.57308 12.3901C8.08075 12.6422 7.72416 12.75 7.125 12.75C6.53523 12.75 6.18108 12.648 5.66488 12.4043L5.65261 12.3985C5.38837 12.2738 5.30618 12.25 5.07961 12.25C4.60962 12.25 4.17339 12.3692 3.75362 12.6139Z" fill="currentColor"/>
<path d="M3.99999 15.25C3.44771 15.25 2.99999 14.8023 2.99999 14.25C2.99999 13.6977 3.44771 13.25 3.99999 13.25H18C18.5523 13.25 19 13.6977 19 14.25C19 14.8023 18.5523 15.25 18 15.25H3.99999Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.67144 18.2043C2.61135 18.0734 1.99673 17.5718 1.99673 16.6236C1.99673 14.6571 4.04811 14.2576 9.29138 14.2472C9.47874 14.2468 9.62876 14.2467 9.96451 14.2467H9.99673H10.029C10.3647 14.2467 10.5147 14.2468 10.7021 14.2472C15.9454 14.2576 17.9967 14.6571 17.9967 16.6236C17.9967 17.5718 17.3821 18.0734 16.322 18.2043C15.6303 18.2897 15.2006 18.2687 13.0268 18.0985C11.744 17.998 10.9089 17.9533 9.99673 17.9533C9.08459 17.9533 8.24942 17.998 6.96666 18.0985C4.79286 18.2687 4.36314 18.2897 3.67144 18.2043ZM9.29336 15.2472C4.87383 15.2559 2.99673 15.6216 2.99673 16.6236C2.99673 16.985 3.18209 17.1363 3.794 17.2118C4.38562 17.2849 4.81523 17.2639 6.88859 17.1015C8.19533 16.9992 9.05242 16.9533 9.99673 16.9533C10.9411 16.9533 11.7981 16.9992 13.1049 17.1015C15.1782 17.2639 15.6078 17.2849 16.1995 17.2118C16.8114 17.1363 16.9967 16.985 16.9967 16.6236C16.9967 15.6216 15.1196 15.2559 10.7001 15.2472C10.5136 15.2468 10.3644 15.2467 10.029 15.2467H9.99673H9.96451C9.62909 15.2467 9.47984 15.2468 9.29336 15.2472Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0629 8.07065C17.3152 7.78685 18 7.07615 18 5.86295C18 3.11393 14.4968 1.25001 10 1.25001C5.5032 1.25001 2.00002 3.11393 2.00002 5.86295C2.00002 7.07615 2.68479 7.78685 3.93716 8.07065C4.80815 8.26803 5.59468 8.28067 7.97167 8.21263C8.89655 8.18615 9.41008 8.17566 10 8.17566C10.59 8.17566 11.1035 8.18615 12.0284 8.21263C14.4053 8.28067 15.1919 8.26803 16.0629 8.07065ZM10 2.25001C14.0176 2.25001 17 3.83684 17 5.86295C17 6.56612 16.6711 6.90746 15.8419 7.09538C15.0897 7.26583 14.3284 7.27806 12.057 7.21304C11.1231 7.18631 10.6021 7.17566 10 7.17566C9.39788 7.17566 8.87696 7.18631 7.94306 7.21304C5.67158 7.27806 4.91031 7.26583 4.15817 7.09538C3.32891 6.90746 3.00002 6.56612 3.00002 5.86295C3.00002 3.83684 5.98241 2.25001 10 2.25001Z" fill="black"/>
<path d="M2.50181 10.432C2.26325 10.571 1.95711 10.4904 1.81804 10.2518C1.67896 10.0133 1.75962 9.70711 1.99818 9.56804C2.64599 9.19039 3.34268 9 4.07961 9C4.566 9 4.84614 9.0812 5.29285 9.29203L5.30514 9.29783C5.63877 9.45531 5.7939 9.5 6.125 9.5C6.45151 9.5 6.59066 9.45793 6.8894 9.30496L6.90124 9.29889C7.32109 9.0839 7.59617 9 8.08553 9C8.58266 9 8.85797 9.08598 9.27941 9.30735C9.57128 9.46065 9.69687 9.5 10 9.5C10.3028 9.5 10.4281 9.46073 10.7149 9.30988L10.7194 9.30749C11.1403 9.0861 11.4159 9 11.9137 9C12.4065 9 12.6817 9.08395 13.11 9.30142L13.1154 9.30418C13.4193 9.45849 13.5559 9.5 13.875 9.5C14.1949 9.5 14.3343 9.45796 14.6432 9.30305L14.6495 9.29991C15.0811 9.08347 15.3568 9 15.8478 9C16.5773 9 17.292 9.18786 17.9859 9.55914C18.2294 9.68941 18.3211 9.9924 18.1909 10.2359C18.0606 10.4794 17.7576 10.5711 17.5141 10.4409C16.962 10.1455 16.4086 10 15.8478 10C15.5379 10 15.4025 10.041 15.0978 10.1938L15.0915 10.197C14.6556 10.4155 14.3755 10.5 13.875 10.5C13.3738 10.5 13.0946 10.4152 12.6626 10.1958L12.6572 10.1931C12.3569 10.0406 12.2239 10 11.9137 10C11.6031 10 11.4747 10.0401 11.185 10.1925L11.1804 10.1949C10.7626 10.4147 10.4904 10.5 10 10.5C9.50938 10.5 9.23718 10.4147 8.81845 10.1948L8.8144 10.1927C8.52393 10.0401 8.39559 10 8.08553 10C7.77908 10 7.64802 10.04 7.35703 10.189L7.34519 10.195C6.91739 10.4141 6.63328 10.5 6.125 10.5C5.62146 10.5 5.33365 10.4171 4.8783 10.2022L4.86602 10.1964C4.54096 10.0429 4.39279 10 4.07961 10C3.52065 10 2.99759 10.1429 2.50181 10.432Z" fill="black"/>
<path d="M3 13C2.72386 13 2.5 12.7761 2.5 12.5C2.5 12.2239 2.72386 12 3 12H17C17.2761 12 17.5 12.2239 17.5 12.5C17.5 12.7761 17.2761 13 17 13H3Z" fill="black"/>
<path d="M6.09999 5.24999C6.09999 5.58136 5.83136 5.84999 5.49999 5.84999C5.16862 5.84999 4.89999 5.58136 4.89999 5.24999C4.89999 4.91862 5.16862 4.64999 5.49999 4.64999C5.83136 4.64999 6.09999 4.91862 6.09999 5.24999Z" fill="black"/>
<path d="M8.59999 4.24999C8.59999 4.58136 8.33136 4.84999 7.99999 4.84999C7.66862 4.84999 7.39999 4.58136 7.39999 4.24999C7.39999 3.91862 7.66862 3.64999 7.99999 3.64999C8.33136 3.64999 8.59999 3.91862 8.59999 4.24999Z" fill="black"/>
<path d="M10.6 5.74999C10.6 6.08136 10.3314 6.34999 9.99999 6.34999C9.66862 6.34999 9.39999 6.08136 9.39999 5.74999C9.39999 5.41862 9.66862 5.14999 9.99999 5.14999C10.3314 5.14999 10.6 5.41862 10.6 5.74999Z" fill="black"/>
<path d="M12.6 4.24999C12.6 4.58136 12.3314 4.84999 12 4.84999C11.6686 4.84999 11.4 4.58136 11.4 4.24999C11.4 3.91862 11.6686 3.64999 12 3.64999C12.3314 3.64999 12.6 3.91862 12.6 4.24999Z" fill="black"/>
<path d="M15.1 5.24999C15.1 5.58136 14.8314 5.84999 14.5 5.84999C14.1686 5.84999 13.9 5.58136 13.9 5.24999C13.9 4.91862 14.1686 4.64999 14.5 4.64999C14.8314 4.64999 15.1 4.91862 15.1 5.24999Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_531">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const HandGrab = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.45551 13.2674C4.17944 12.8528 3.83317 12.2961 3.47683 11.7083C2.34539 9.84202 3.71629 7.5031 5.87384 7.5V5.375C5.87384 4.33947 6.71331 3.5 7.74884 3.5C8.06743 3.5 8.36745 3.57946 8.63019 3.71963C8.70917 2.75679 9.51563 2 10.4988 2C11.3236 2 12.024 2.53251 12.2749 3.27246C12.5588 3.09958 12.8922 3 13.2488 3C14.2844 3 15.1238 3.83947 15.1238 4.875V5.08535C15.2802 5.03008 15.4485 5 15.6238 5H15.9988C17.0344 5 17.8738 5.83947 17.8738 6.875V11.4342C17.8767 11.4557 17.8781 11.4777 17.8781 11.5C17.8781 13.6357 17.0723 15.2742 15.8353 16.3737C14.6076 17.4651 12.9847 18 11.3781 18C8.11453 18 5.98476 15.8126 4.45551 13.2674ZM7.74884 4.5C8.23209 4.5 8.62384 4.89175 8.62384 5.375V7.5C8.62384 7.77614 8.8477 8 9.12384 8C9.39999 8 9.62384 7.77614 9.62384 7.5V3.875C9.62384 3.39175 10.0156 3 10.4988 3C10.9821 3 11.3738 3.39175 11.3738 3.875V7C11.3738 7.27614 11.5977 7.5 11.8738 7.5C12.15 7.5 12.3738 7.27614 12.3738 7V4.875C12.3738 4.39175 12.7656 4 13.2488 4C13.7321 4 14.1238 4.39175 14.1238 4.875V7.5C14.1238 7.77614 14.3477 8 14.6238 8C14.9 8 15.1238 7.77614 15.1238 7.5V6.5C15.1238 6.22386 15.3477 6 15.6238 6H15.9988C16.4821 6 16.8738 6.39175 16.8738 6.875V11.5C16.8738 11.5216 16.8752 11.5428 16.8779 11.5637C16.8622 13.3954 16.1724 14.7361 15.171 15.6263C14.1487 16.5349 12.7716 17 11.3781 17C8.64722 17 6.77874 15.1948 5.3087 12.7458C5.30609 12.7414 5.30341 12.737 5.30064 12.7326C5.29787 12.7282 5.29503 12.7239 5.29214 12.7196C5.02751 12.3225 4.68831 11.7777 4.33196 11.1899C3.61689 10.0104 4.47174 8.50308 5.87384 8.5V10C5.87384 10.2761 6.0977 10.5 6.37384 10.5C6.64999 10.5 6.87384 10.2761 6.87384 10V5.375C6.87384 4.89175 7.26559 4.5 7.74884 4.5Z" fill="currentColor"/>
<path d="M17.3179 11.75C17.3179 14.7875 13.8032 17.2164 11.3179 17.2164C8.83259 17.2164 3.81787 13.7875 3.81787 10.75C3.81787 8.8145 4.05081 8.77036 6.31787 8.25002C6.78845 8.14201 6.52625 4.47509 7.31787 4.25005C8.81787 3.8236 10.1993 2.92416 10.8179 2.75C11.8179 3.25 13.0219 3.8092 13.3179 3.75C14.9828 3.41703 14.3179 6.25 16.3179 5.75C17.7368 6.62761 17.3179 9.83627 17.3179 11.75Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.18289 3.71963C7.26187 2.75679 8.06833 2 9.05155 2C9.8763 2 10.5767 2.53251 10.8276 3.27246C11.1115 3.09958 11.4449 3 11.8015 3C12.8371 3 13.6765 3.83947 13.6765 4.875V5.08535C13.8329 5.03008 14.0012 5 14.1765 5H14.5515C15.5871 5 16.4265 5.83947 16.4265 6.875V11.4342C16.4294 11.4557 16.4308 11.4777 16.4308 11.5C16.4308 13.6357 15.625 15.2742 14.388 16.3737C13.1603 17.4651 11.5374 18 9.93084 18C6.66724 18 4.53747 15.8126 3.00822 13.2674C2.73214 12.8528 2.38587 12.2961 2.02954 11.7083C0.898091 9.84202 2.269 7.5031 4.42655 7.5V5.375C4.42655 4.33947 5.26601 3.5 6.30155 3.5C6.62013 3.5 6.92016 3.57946 7.18289 3.71963ZM7.17655 5.375C7.17655 4.89175 6.7848 4.5 6.30155 4.5C5.8183 4.5 5.42655 4.89175 5.42655 5.375V10C5.42655 10.2761 5.20269 10.5 4.92655 10.5C4.6504 10.5 4.42655 10.2761 4.42655 10V8.5C3.02444 8.50308 2.16959 10.0104 2.88466 11.1899C3.24192 11.7792 3.58194 12.3253 3.84686 12.7226L3.85346 12.7325L3.85959 12.7428C5.3299 15.1933 7.1988 17 9.93084 17C11.3243 17 12.7014 16.5349 13.7237 15.6263C14.7251 14.7361 15.4149 13.3954 15.4306 11.5637C15.4279 11.5428 15.4265 11.5216 15.4265 11.5V6.875C15.4265 6.39175 15.0348 6 14.5515 6H14.1765C13.9004 6 13.6765 6.22386 13.6765 6.5V7.5C13.6765 7.77614 13.4527 8 13.1765 8C12.9004 8 12.6765 7.77614 12.6765 7.5V4.875C12.6765 4.39175 12.2848 4 11.8015 4C11.3183 4 10.9265 4.39175 10.9265 4.875V7C10.9265 7.27614 10.7027 7.5 10.4265 7.5C10.1504 7.5 9.92655 7.27614 9.92655 7V3.875C9.92655 3.39175 9.5348 3 9.05155 3C8.5683 3 8.17655 3.39175 8.17655 3.875V7.5C8.17655 7.77614 7.95269 8 7.67655 8C7.4004 8 7.17655 7.77614 7.17655 7.5V5.375Z" fill="black"/>
</svg>
`;

const HandOpen = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1213_2395)">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M9.96867 2.02246C10.2196 1.28251 10.92 0.75 11.7448 0.75C12.421 0.75 13.0137 1.10805 13.3435 1.64493C13.6613 1.39743 14.0608 1.25 14.4948 1.25C15.5303 1.25 16.3698 2.08946 16.3698 3.125V4.46626C16.631 4.32818 16.9287 4.25 17.2448 4.25C18.2803 4.25 19.1198 5.08947 19.1198 6.125V12.25C19.1198 14.1027 18.7345 16.0777 17.7959 17.6077C16.8427 19.1614 15.3166 20.25 13.1198 20.25C10.5524 20.25 9.03133 19.7353 7.90278 18.6773C7.3529 18.1618 6.91857 17.5376 6.50307 16.8425C6.26964 16.4519 6.02838 16.0141 5.77357 15.5517C5.58572 15.2108 5.3905 14.8566 5.18563 14.4981L5.17875 14.486L3.32462 10.7778C2.84278 9.81408 3.28749 8.64439 4.28786 8.24424C5.17717 7.88851 6.1907 8.27386 6.61904 9.13056L7.11975 10.132L7.11975 3.625C7.11975 2.58947 7.95922 1.75 8.99475 1.75C9.35141 1.75 9.68481 1.84958 9.96867 2.02246Z" fill="currentColor"/>
<path d="M3.87027 13.2502L3.87138 13.2521L3.87037 13.2504L3.87027 13.2502ZM5.8699 11.2497L5.86999 11.2497L5.86562 11.241L4.92294 9.35559L5.87016 9.13198V11.2391H5.87004L5.87027 11.2496L5.87027 11.2497L5.8702 11.2501L5.86954 11.25L5.87019 11.2502L5.87013 11.2506L5.87027 11.2502L5.87051 11.2503L5.8699 11.2497ZM5.87047 11.2501L5.87031 11.2501L5.87045 11.2497L5.87046 11.2496L5.87046 11.2497L5.87045 11.25L5.86966 11.2503L5.87048 11.2502L5.87057 11.2501L5.87047 11.2501ZM14.1202 4.29612L14.8538 3.9083C15.0448 3.80737 15.2625 3.75 15.4952 3.75C14.7358 3.75 14.1202 4.36561 14.1202 5.125V4.29612ZM11.1679 0.906647L11.4604 1.38274L11.9012 1.03938C12.1342 0.857856 12.4264 0.75 12.7452 0.75C11.9864 0.75 11.3713 1.3645 11.3702 2.12296V1.625C11.3702 0.867407 10.7575 0.252917 10.0005 0.25001C10.4937 0.251904 10.9261 0.51307 11.1679 0.906647ZM7.95899 1.4495L8.4921 1.77418L8.69258 1.18305C8.86234 0.682495 9.31234 0.312192 9.85457 0.257099C9.16122 0.327513 8.62016 0.91307 8.62016 1.625L8.62016 2.625C8.62016 1.86561 8.00455 1.25 7.24516 1.25C7.5075 1.25 7.75127 1.32298 7.95899 1.4495ZM4.47768 14.3389L4.48022 14.3435C4.5063 14.3909 4.5322 14.4379 4.55795 14.4847C4.52622 14.4271 4.4942 14.369 4.46188 14.3104L4.46106 14.3089C4.27652 13.974 4.08283 13.6226 3.87943 13.2662C4.0982 13.6494 4.293 14.0033 4.47768 14.3389ZM3.87223 13.2536L3.87698 13.262L3.87223 13.2536Z" fill="currentColor" stroke="black" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="clip0_1213_2395">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const HandPoint = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M6.65084 11.85V9.84998M12.1466 8.94998V6.72498C12.1466 5.96558 11.5309 5.34998 10.7716 5.34998C10.0122 5.34998 9.39655 5.96558 9.39655 6.72498M9.39655 9.34998V6.72498M9.39655 6.72498L9.40084 6.34998V2.22498C9.40084 1.46558 8.78523 0.849976 8.02584 0.849976C7.26645 0.849976 6.65084 1.46558 6.65084 2.22498V9.84998M12.1508 8.34998L12.1495 7.72645C12.1479 6.96672 12.7633 6.34998 13.523 6.34998C14.2816 6.34998 14.8966 6.96492 14.8966 7.7235V9.84998M17.6466 13.35V9.72498C17.6466 8.96558 17.0309 8.34998 16.2716 8.34998H15.8966C15.3443 8.34998 14.8966 8.79769 14.8966 9.34998M17.6508 13.35C17.6508 17.35 14.6508 18.85 11.6508 18.85C8.65084 18.85 6.65084 17.35 5.15084 14.85C4.87981 14.4434 4.53532 13.89 4.1771 13.2991C3.2531 11.775 4.3685 9.84998 6.15084 9.84998H6.65084" stroke="currentColor" stroke-linecap="round"/>
<path d="M6.65084 1.84998L8.15084 0.849976L9.15084 1.84998V5.59998H10.6508L11.6508 5.84998L12.6508 6.84998H14.1508L14.6508 8.34998H16.6508L17.1508 8.84998L17.6508 12.35L16.6508 16.85L11.6508 19.35L6.65084 16.85L3.65084 11.85L5.15084 10.35L6.65084 9.34998V5.59998V1.84998Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.65084 2.02502C4.65084 0.989491 5.4903 0.150024 6.52584 0.150024C7.56137 0.150024 8.40084 0.989491 8.40084 2.02502V4.86402C8.66101 4.72735 8.95724 4.65002 9.27155 4.65002C10.0967 4.65002 10.7973 5.18299 11.048 5.92344C11.332 5.74999 11.6658 5.65002 12.023 5.65002C13.0577 5.65002 13.8965 6.48883 13.8965 7.52355V7.73538C14.0529 7.6801 14.2212 7.65002 14.3965 7.65002H14.7715C15.8071 7.65002 16.6465 8.48949 16.6465 9.52502V13.0842C16.6494 13.1058 16.6508 13.1277 16.6508 13.15C16.6508 15.2905 15.8401 16.8168 14.5828 17.7947C13.3446 18.7578 11.7248 19.15 10.1508 19.15C8.56187 19.15 7.21614 18.7511 6.06671 18.0073C4.92551 17.2689 4.00378 16.2076 3.22823 14.9175C2.95216 14.5028 2.60588 13.9461 2.24954 13.3584C1.11734 11.4908 2.49081 9.15002 4.65084 9.15002L4.65084 2.02502ZM4.03217 14.4087C4.02962 14.4062 4.0273 14.4034 4.02526 14.4004C3.75973 14.0021 3.41926 13.4553 3.0619 12.8658C2.32541 11.651 3.20816 10.1 4.65083 10.1H4.70083L4.70083 11.65C4.70083 11.8985 4.90231 12.1 5.15083 12.1C5.39936 12.1 5.60083 11.8985 5.60083 11.65V2.02498C5.60083 1.51411 6.01497 1.09998 6.52583 1.09998C7.0367 1.09998 7.45083 1.51411 7.45083 2.02498L7.44655 9.14998C7.44656 9.39849 7.64803 9.59998 7.89655 9.59998C8.14507 9.59998 8.34655 9.3985 8.34655 9.14998V6.52781L8.34685 6.50123C8.35971 6.00178 8.76886 5.59998 9.27155 5.59998C9.78241 5.59998 10.1965 6.01411 10.1965 6.52498V8.74998C10.1965 8.9985 10.398 9.19998 10.6465 9.19998C10.8951 9.19998 11.0965 8.9985 11.0965 8.74998V8.20918C11.0991 8.1895 11.1009 8.16946 11.1008 8.14901L11.0995 7.52548C11.0984 7.01466 11.5122 6.59998 12.023 6.59998C12.5331 6.59998 12.9465 7.01345 12.9465 7.5235V9.64998C12.9465 9.8985 13.148 10.1 13.3965 10.1C13.6451 10.1 13.8465 9.8985 13.8465 9.64998V9.14998C13.8465 8.84622 14.0928 8.59998 14.3965 8.59998H14.7715C15.2824 8.59998 15.6965 9.01411 15.6965 9.52498V13.15C15.6965 13.1694 15.6978 13.1886 15.7002 13.2074L15.701 13.2141C15.6853 15.0519 14.9939 16.2714 13.9996 17.0448C12.9765 17.8405 11.5843 18.2 10.1508 18.2C8.7309 18.2 7.56706 17.8465 6.5828 17.2097C5.59384 16.5698 4.76256 15.6282 4.03671 14.4185C4.03481 14.4153 4.0333 14.412 4.03217 14.4087Z" fill="black"/>
</svg>
`;

const HandPointOpen = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.52395 2.375C6.52395 1.33947 7.36341 0.5 8.39895 0.5C9.43448 0.5 10.2739 1.33947 10.2739 2.375V6.5C10.2739 6.77614 10.0501 7 9.77395 7C9.49781 7 9.27395 6.77614 9.27395 6.5V2.375C9.27395 1.89175 8.8822 1.5 8.39895 1.5C7.9157 1.5 7.52395 1.89175 7.52395 2.375V12C7.52395 12.2761 7.30009 12.5 7.02395 12.5C6.74781 12.5 6.52395 12.2761 6.52395 12V2.375Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.44461 9.75896C4.16593 9.43383 3.68274 9.38079 3.34015 9.63771C2.98942 9.90075 2.91059 10.3946 3.16199 10.7537L5.93357 14.7132C6.09193 14.9394 6.0369 15.2512 5.81068 15.4096C5.58445 15.5679 5.27269 15.5129 5.11433 15.2867L2.34275 11.3272C1.78195 10.526 1.95781 9.42445 2.74017 8.8377C3.50437 8.26457 4.58221 8.3829 5.20387 9.10817L7.40358 11.6745C7.58329 11.8842 7.55901 12.1998 7.34935 12.3795C7.13969 12.5592 6.82404 12.535 6.64432 12.3253L4.44461 9.75896Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.26967 6.875C9.26967 5.83947 10.1091 5 11.1447 5C12.1802 5 13.0197 5.83947 13.0197 6.875V9.1C13.0197 9.37614 12.7958 9.6 12.5197 9.6C12.2435 9.6 12.0197 9.37614 12.0197 9.1V6.875C12.0197 6.39175 11.6279 6 11.1447 6C10.6614 6 10.2697 6.39175 10.2697 6.875V9.5C10.2697 9.77614 10.0458 10 9.76967 10C9.49353 10 9.26967 9.77614 9.26967 9.5V6.875Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.7697 7.87353C15.7697 6.83881 14.9309 6 13.8961 6C12.8599 6 12.0204 6.84126 12.0226 7.87754L12.024 8.50107C12.0245 8.77721 12.2489 9.00059 12.525 9C12.8012 8.99941 13.0245 8.77507 13.024 8.49893L13.0226 7.8754C13.0216 7.39223 13.413 7 13.8961 7C14.3786 7 14.7697 7.39109 14.7697 7.87353V10C14.7697 10.2761 14.9935 10.5 15.2697 10.5C15.5458 10.5 15.7697 10.2761 15.7697 10V7.87353Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5197 9.875C18.5197 8.83947 17.6802 8 16.6447 8H16.2697C15.4412 8 14.7697 8.67157 14.7697 9.5H15.7697C15.7697 9.22386 15.9935 9 16.2697 9H16.6447C17.1279 9 17.5197 9.39175 17.5197 9.875V13.5C17.5197 13.7761 17.7435 14 18.0197 14C18.2958 14 18.5197 13.7761 18.5197 13.5V9.875Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.0239 13C18.3001 13 18.5239 13.2239 18.5239 13.5C18.5239 15.6405 17.7132 17.1668 16.4559 18.1447C15.2177 19.1077 13.5979 19.5 12.0239 19.5C10.435 19.5 9.08925 19.101 7.93982 18.3573C6.79561 17.6169 5.87203 16.552 5.0952 15.2572C4.95313 15.0205 5.02991 14.7133 5.2667 14.5713C5.50349 14.4292 5.81062 14.506 5.95269 14.7428C6.67587 15.948 7.50229 16.8831 8.48307 17.5177C9.45865 18.149 10.6129 18.5 12.0239 18.5C13.45 18.5 14.8302 18.1423 15.842 17.3553C16.8347 16.5832 17.5239 15.3595 17.5239 13.5C17.5239 13.2239 17.7478 13 18.0239 13Z" fill="currentColor"/>
<path d="M7.02395 7L7.52395 1L9.52395 1.5L10.0239 6.5L11.0239 5.5L12.0239 6L13.0239 7H15.0239V8.5L17.5239 9L18.0239 14L16.5239 17.5L11.5239 19L7.02395 17L2.52395 10L4.02395 9L7.02395 12V7Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.09698 2.375C5.09698 1.33947 5.93644 0.5 6.97198 0.5C8.00751 0.5 8.84698 1.33947 8.84698 2.375V6.5C8.84698 6.77614 8.62312 7 8.34698 7C8.07083 7 7.84698 6.77614 7.84698 6.5V2.375C7.84698 1.89175 7.45523 1.5 6.97198 1.5C6.48873 1.5 6.09698 1.89175 6.09698 2.375V12C6.09698 12.2761 5.87312 12.5 5.59698 12.5C5.32083 12.5 5.09698 12.2761 5.09698 12V2.375Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.01764 9.75896C2.73895 9.43383 2.25577 9.38079 1.91318 9.63771C1.56245 9.90075 1.48362 10.3946 1.73502 10.7537L4.5066 14.7132C4.66495 14.9394 4.60993 15.2512 4.38371 15.4096C4.15748 15.5679 3.84572 15.5129 3.68736 15.2867L0.915784 11.3272C0.354983 10.526 0.530837 9.42445 1.3132 8.8377C2.0774 8.26457 3.15524 8.3829 3.7769 9.10817L5.97661 11.6745C6.15632 11.8842 6.13204 12.1998 5.92238 12.3795C5.71271 12.5592 5.39706 12.535 5.21735 12.3253L3.01764 9.75896Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.84269 6.875C7.84269 5.83947 8.68216 5 9.71769 5C10.7532 5 11.5927 5.83947 11.5927 6.875V9.1C11.5927 9.37614 11.3688 9.6 11.0927 9.6C10.8165 9.6 10.5927 9.37614 10.5927 9.1V6.875C10.5927 6.39175 10.2009 6 9.71769 6C9.23444 6 8.84269 6.39175 8.84269 6.875V9.5C8.84269 9.77614 8.61883 10 8.34269 10C8.06655 10 7.84269 9.77614 7.84269 9.5V6.875Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3427 7.87353C14.3427 6.83881 13.5039 6 12.4692 6C11.4329 6 10.5934 6.84126 10.5956 7.87754L10.597 8.50107C10.5976 8.77721 10.8219 9.00059 11.0981 9C11.3742 8.99941 11.5976 8.77507 11.597 8.49893L11.5956 7.8754C11.5946 7.39223 11.986 7 12.4692 7C12.9516 7 13.3427 7.39109 13.3427 7.87353V10C13.3427 10.2761 13.5666 10.5 13.8427 10.5C14.1188 10.5 14.3427 10.2761 14.3427 10V7.87353Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.0927 9.875C17.0927 8.83947 16.2532 8 15.2177 8H14.8427C14.0143 8 13.3427 8.67157 13.3427 9.5H14.3427C14.3427 9.22386 14.5666 9 14.8427 9H15.2177C15.7009 9 16.0927 9.39175 16.0927 9.875V13.5C16.0927 13.7761 16.3166 14 16.5927 14C16.8688 14 17.0927 13.7761 17.0927 13.5V9.875Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.597 13C16.8731 13 17.097 13.2239 17.097 13.5C17.097 15.6405 16.2862 17.1668 15.0289 18.1447C13.7907 19.1077 12.1709 19.5 10.597 19.5C9.00801 19.5 7.66228 19.101 6.51285 18.3573C5.36864 17.6169 4.44506 16.552 3.66823 15.2572C3.52616 15.0205 3.60294 14.7133 3.83973 14.5713C4.07652 14.4292 4.38365 14.506 4.52572 14.7428C5.24889 15.948 6.07532 16.8831 7.0561 17.5177C8.03167 18.149 9.18594 18.5 10.597 18.5C12.023 18.5 13.4032 18.1423 14.415 17.3553C15.4077 16.5832 16.097 15.3595 16.097 13.5C16.097 13.2239 16.3208 13 16.597 13Z" fill="black"/>
</svg>
`;

const Handshake = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1213_2579)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.24646 3.91896C3.74289 3.69216 3.15081 3.91652 2.92401 4.42009L0.760673 9.22329C0.533869 9.72686 0.758231 10.3189 1.2618 10.5457L2.75161 11.2167C3.25518 11.4436 3.84726 11.2192 4.07406 10.7156L6.2374 5.91242C6.4642 5.40885 6.23984 4.81677 5.73627 4.58997L4.24646 3.91896ZM2.47306 9.84575C2.81617 10.0003 3.2196 9.84741 3.37413 9.5043C3.52867 9.16119 3.3758 8.75776 3.03268 8.60323C2.68957 8.44869 2.28615 8.60156 2.13161 8.94468C1.97707 9.28779 2.12995 9.69121 2.47306 9.84575Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.6149 10.6767C20.1313 10.481 20.3914 9.90371 20.1957 9.38725L18.3294 4.46105C18.1337 3.94459 17.5564 3.68454 17.0399 3.88021L15.512 4.4591C14.9955 4.65477 14.7355 5.23207 14.9311 5.74853L16.7975 10.6747C16.9932 11.1912 17.5705 11.4512 18.0869 11.2556L19.6149 10.6767ZM16.6783 5.23165C16.3264 5.36497 16.1492 5.75832 16.2826 6.11022C16.4159 6.46212 16.8092 6.63931 17.1611 6.50599C17.513 6.37266 17.6902 5.97931 17.5569 5.62742C17.4236 5.27552 17.0302 5.09833 16.6783 5.23165Z" fill="currentColor"/>
<path d="M15.4853 5.5354L15.4617 5.53751L15.369 5.54603C15.2881 5.55362 15.1707 5.565 15.0254 5.58006C14.7347 5.6102 14.3334 5.65501 13.8909 5.71362C12.9921 5.83269 11.9708 6.00296 11.3472 6.21085C11.1398 6.28 10.8657 6.43562 10.5404 6.67331C10.2213 6.90648 9.87929 7.19903 9.53851 7.51609C8.85711 8.15008 8.20515 8.85915 7.78716 9.3318C7.64335 9.4944 7.66735 9.66771 7.75017 9.75767C8.01547 10.0458 8.36988 10.3366 8.77077 10.4573C9.13874 10.5682 9.59531 10.5527 10.15 10.1367L10.164 10.1261L11.1924 9.46197C11.4005 9.32753 11.7864 9.16779 12.1801 9.38337C12.4168 9.51298 12.7008 9.73111 12.9748 9.9608C13.2561 10.1966 13.5538 10.4676 13.8236 10.7218C14.094 10.9766 14.3398 11.2178 14.5178 11.395C14.6057 11.4825 14.6773 11.5547 14.7274 11.6055C14.794 11.6164 14.9101 11.6117 15.0962 11.5489C15.3359 11.4679 15.6088 11.3179 15.8787 11.1383C16.1447 10.9614 16.3876 10.7692 16.5655 10.6198C16.654 10.5455 16.7251 10.4827 16.7736 10.439C16.7979 10.4172 16.8164 10.4002 16.8285 10.389L17.5078 11.1228C17.4925 11.137 17.4706 11.1571 17.4427 11.1822C17.3869 11.2324 17.3071 11.3028 17.2088 11.3854C17.0132 11.5498 16.7394 11.7667 16.4327 11.9709C16.1299 12.1723 15.774 12.3754 15.4161 12.4963C15.0719 12.6125 14.6289 12.6851 14.2264 12.4839L14.1506 12.446L14.0916 12.3853L14.0174 12.3097C13.9691 12.2607 13.8989 12.1899 13.8122 12.1036C13.6386 11.9307 13.3997 11.6964 13.1378 11.4497C12.8754 11.2023 12.5932 10.9457 12.3324 10.7272C12.0953 10.5284 11.8956 10.378 11.7528 10.2912C11.7474 10.2942 11.7414 10.2978 11.7349 10.302L10.7355 10.9475C9.93854 11.5391 9.15884 11.6186 8.48235 11.4148C7.83467 11.2198 7.33357 10.7816 7.01447 10.435C6.52211 9.90018 6.6193 9.14285 7.03807 8.66932C7.46563 8.18587 8.14189 7.44963 8.85733 6.78397C9.21497 6.45122 9.58851 6.13036 9.9504 5.86591C10.3061 5.60598 10.6783 5.37975 11.0309 5.26219C11.7559 5.02048 12.8651 4.84078 13.7596 4.72228C14.2138 4.66212 14.6248 4.61623 14.9223 4.58539C15.0712 4.56996 15.1918 4.55827 15.2755 4.55041L15.3723 4.54151L15.3979 4.53923L15.4064 4.53849C15.6816 4.51484 15.9245 4.71864 15.9482 4.99377C15.9718 5.26889 15.7679 5.51109 15.4928 5.53475L15.4853 5.5354Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.64698 6.49619L5.45001 6.03662L5.25311 5.57702L5.29327 5.55987L5.4061 5.51188C5.50341 5.4706 5.64282 5.41169 5.81163 5.34103C6.14905 5.19978 6.60478 5.01119 7.07681 4.82238C7.54781 4.63399 8.03959 4.44353 8.44766 4.2995C8.65118 4.22767 8.83967 4.16532 8.99722 4.12031C9.13377 4.0813 9.30752 4.03662 9.45001 4.03662C9.57966 4.03662 9.71681 4.06634 9.82982 4.09647C9.95173 4.12898 10.0859 4.17332 10.2224 4.22297C10.496 4.32244 10.8048 4.45271 11.0906 4.57972C11.3777 4.70731 11.648 4.83452 11.8461 4.92961C11.9453 4.97723 12.0267 5.01696 12.0835 5.04488L12.1495 5.07744L12.1671 5.08618L12.1731 5.08914C12.4201 5.21263 12.5207 5.51324 12.3972 5.76023C12.2737 6.00721 11.9734 6.10732 11.7264 5.98385C11.7264 5.98384 11.7264 5.98385 11.7264 5.98385L11.7214 5.98132L11.7053 5.97334L11.6426 5.94243C11.5881 5.91566 11.5094 5.87727 11.4133 5.83113C11.2208 5.73872 10.9598 5.61593 10.6844 5.49353C10.4077 5.37053 10.1228 5.2508 9.8807 5.16277C9.75944 5.11867 9.65531 5.08488 9.57215 5.06271C9.50072 5.04366 9.4638 5.03846 9.45302 5.03709C9.45191 5.03743 9.44912 5.03798 9.44448 5.0389C9.42469 5.04284 9.3713 5.05345 9.27194 5.08184C9.14237 5.11886 8.9754 5.1737 8.78048 5.24249C8.39168 5.37972 7.91471 5.56426 7.4482 5.75086C6.98273 5.93705 6.53222 6.12346 6.19776 6.26347C6.03063 6.33343 5.8927 6.39171 5.79665 6.43246L5.68561 6.47969L5.64698 6.49619ZM4.99044 6.23358C4.88166 5.97977 4.9993 5.6858 5.25311 5.57702L5.45001 6.03662L5.64698 6.49619C5.39317 6.60496 5.09921 6.4874 4.99044 6.23358Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.08669 10.1931C3.2764 9.99246 3.59285 9.98358 3.79351 10.1733L3.45001 10.5366L3.10651 10.9C2.90585 10.7102 2.89698 10.3938 3.08669 10.1931ZM7.65682 13.5802L10.4197 14.6163C10.9705 14.8228 11.5912 14.6884 12.0071 14.2724L14.0965 12.1831C14.2917 11.9878 14.6083 11.9878 14.8036 12.1831C14.9988 12.3783 14.9988 12.6949 14.8036 12.8902L12.7142 14.9795C12.021 15.6728 10.9866 15.8968 10.0686 15.5526L7.24988 14.4956L7.22641 14.4838C7.09942 14.4203 6.94336 14.3083 6.79182 14.1918C6.63032 14.0677 6.44015 13.9117 6.23492 13.7378C5.82395 13.3895 5.33892 12.9575 4.87689 12.5384C4.41423 12.1186 3.97178 11.7092 3.64519 11.4048C3.48184 11.2526 3.34732 11.1265 3.25358 11.0384L3.14502 10.9363L3.10651 10.9L3.45001 10.5366L3.79351 10.1733L3.83095 10.2086L3.93831 10.3096C4.03121 10.3969 4.16472 10.5221 4.32695 10.6732C4.65154 10.9757 5.09051 11.382 5.54879 11.7977C6.00771 12.214 6.48315 12.6373 6.88147 12.9749C7.08089 13.1439 7.25757 13.2886 7.40129 13.399C7.53303 13.5003 7.61616 13.5564 7.65682 13.5802Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.88539 15.3956C4.23947 14.9717 4.8701 14.9152 5.29395 15.2692L6.25217 16.0697C6.39549 16.1895 6.56946 16.2667 6.75439 16.2926L7.99088 16.466C8.53781 16.5427 8.919 17.0483 8.84228 17.5952C8.76557 18.1422 8.26 18.5234 7.71307 18.4466L6.47658 18.2732C5.92179 18.1954 5.39987 17.9638 4.96994 17.6046L4.01171 16.8041C3.58786 16.45 3.53131 15.8194 3.88539 15.3956Z" fill="currentColor"/>
<path d="M5.07712 5.99524L7.57712 4.99524H10.0771L14.95 5.53662L15.95 8.03662L16.95 10.5366L14.95 12.0366L11.45 15.0366L7.57712 14.1647L5.45001 12.5366L3.45001 10.5366L5.07712 5.99524Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.64645 2.49062C3.14289 2.26382 2.5508 2.48818 2.324 2.99174L0.160666 7.79495C-0.0661367 8.29851 0.158225 8.8906 0.661791 9.1174L2.15161 9.7884C2.65517 10.0152 3.24725 9.79085 3.47406 9.28728L5.63739 4.48407C5.8642 3.98051 5.63983 3.38843 5.13627 3.16162L3.64645 2.49062ZM1.87305 8.4174C2.21617 8.57194 2.61959 8.41907 2.77413 8.07596C2.92866 7.73284 2.77579 7.32942 2.43268 7.17488C2.08956 7.02035 1.68614 7.17322 1.5316 7.51633C1.37707 7.85944 1.52994 8.26287 1.87305 8.4174Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.0149 9.24833C19.5313 9.05266 19.7914 8.47537 19.5957 7.95891L17.7294 3.03271C17.5337 2.51625 16.9564 2.25619 16.4399 2.45186L14.912 3.03076C14.3955 3.22643 14.1354 3.80372 14.3311 4.32018L16.1975 9.24638C16.3932 9.76285 16.9705 10.0229 17.4869 9.82723L19.0149 9.24833ZM16.0783 3.8033C15.7264 3.93663 15.5492 4.32998 15.6826 4.68187C15.8159 5.03377 16.2092 5.21096 16.5611 5.07764C16.913 4.94432 17.0902 4.55097 16.9569 4.19907C16.8236 3.84717 16.4302 3.66998 16.0783 3.8033Z" fill="black"/>
<path d="M14.8853 4.10706L14.8616 4.10916L14.769 4.11769C14.6881 4.12528 14.5707 4.13665 14.4254 4.15171C14.1347 4.18186 13.7334 4.22666 13.2909 4.28528C12.3921 4.40434 11.3708 4.57462 10.7472 4.78251C10.5398 4.85166 10.2657 5.00727 9.9404 5.24496C9.62132 5.47814 9.27928 5.77068 8.9385 6.08775C8.2571 6.72173 7.60515 7.43081 7.18715 7.90345C7.04335 8.06606 7.06735 8.23936 7.15016 8.32932C7.41547 8.61749 7.76988 8.90824 8.17077 9.029C8.53874 9.13984 8.9953 9.12434 9.55001 8.70831L9.56402 8.6978L10.5924 8.03362C10.8005 7.89918 11.1864 7.73944 11.5801 7.95503C11.8168 8.08463 12.1008 8.30276 12.3748 8.53246C12.6561 8.76826 12.9538 9.03928 13.2236 9.2935C13.494 9.5483 13.7398 9.78941 13.9178 9.96663C14.0057 10.0542 14.0773 10.1263 14.1274 10.1771C14.194 10.1881 14.31 10.1834 14.4962 10.1205C14.7359 10.0396 15.0088 9.88959 15.2787 9.70998C15.5447 9.53301 15.7876 9.34087 15.9655 9.19142C16.0539 9.11711 16.1251 9.05436 16.1736 9.01068C16.1979 8.98886 16.2285 8.96065 16.2285 8.96065L16.9078 9.69447C16.8925 9.70864 16.8706 9.72878 16.8427 9.75389C16.7869 9.80408 16.7071 9.87443 16.6088 9.95704C16.4132 10.1214 16.1394 10.3384 15.8327 10.5425C15.5299 10.744 15.174 10.9471 14.8161 11.068C14.4719 11.1842 14.0289 11.2568 13.6264 11.0555L13.5506 11.0177L13.4915 10.9569L13.2122 10.6753C13.0386 10.5024 12.7997 10.268 12.5378 10.0213C12.2754 9.774 11.9932 9.5174 11.7324 9.29883C11.4953 9.1001 11.2956 8.94962 11.1528 8.86284C11.1474 8.86588 11.1414 8.86946 11.1349 8.87365L10.1355 9.51917C9.33854 10.1108 8.55883 10.1903 7.88235 9.9865C7.23466 9.79141 6.73356 9.35323 6.41447 9.00663C5.92211 8.47183 6.01929 7.7145 6.43806 7.24098C6.86562 6.75752 7.54188 6.02129 8.25733 5.35563C8.61496 5.02288 8.9885 4.70202 9.35039 4.43757C9.7061 4.17763 10.0783 3.9514 10.4309 3.83384C11.1559 3.59214 12.2651 3.41244 13.1596 3.29394C13.6138 3.23377 14.0248 3.18789 14.3223 3.15705C14.4711 3.14161 14.5918 3.12992 14.6755 3.12206L14.7723 3.11316L14.7979 3.11089L14.8064 3.11014C15.0816 3.08649 15.3245 3.29029 15.3482 3.56542C15.3718 3.84054 15.1679 4.08274 14.8928 4.1064L14.8853 4.10706Z" fill="black" stroke="black" stroke-width="0.1" stroke-linecap="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.04698 5.06784L4.85 4.60828L4.65311 4.14868L4.69326 4.13152L4.80609 4.08353C4.9034 4.04225 5.04281 3.98334 5.21162 3.91268C5.54904 3.77144 6.00478 3.58285 6.47681 3.39404C6.9478 3.20564 7.43958 3.01518 7.84765 2.87116C8.05117 2.79933 8.23967 2.73698 8.39721 2.69197C8.53376 2.65295 8.70752 2.60828 8.85 2.60828C8.97965 2.60828 9.1168 2.63799 9.22981 2.66813C9.35173 2.70064 9.48589 2.74498 9.62244 2.79463C9.89597 2.8941 10.2048 3.02437 10.4906 3.15137C10.7777 3.27897 11.048 3.40618 11.2461 3.50126C11.3453 3.54888 11.4267 3.58861 11.4835 3.61653L11.5495 3.64909L11.5671 3.65784L11.5731 3.66079C11.8201 3.78429 11.9207 4.08489 11.7972 4.33188C11.6737 4.57887 11.3734 4.67898 11.1264 4.5555C11.1264 4.5555 11.1264 4.5555 11.1264 4.5555L11.1214 4.55298L11.1053 4.545L11.0426 4.51408C10.9881 4.48732 10.9094 4.44892 10.8133 4.40279C10.6208 4.31037 10.3598 4.18758 10.0844 4.06518C9.80769 3.94218 9.52279 3.82246 9.28069 3.73442C9.15943 3.69033 9.05531 3.65654 8.97215 3.63436C8.90071 3.61531 8.8638 3.61012 8.85301 3.60875C8.8519 3.60908 8.84911 3.60964 8.84447 3.61056C8.82468 3.61449 8.7713 3.6251 8.67193 3.65349C8.54237 3.69051 8.3754 3.74535 8.18047 3.81415C7.79167 3.95137 7.3147 4.13591 6.8482 4.32251C6.38273 4.5087 5.93221 4.69512 5.59776 4.83512C5.43063 4.90508 5.2927 4.96336 5.19664 5.00411L5.0856 5.05134L5.04698 5.06784ZM4.39043 4.80524C4.28165 4.55142 4.39929 4.25745 4.65311 4.14868L4.85 4.60828L5.04698 5.06784C4.79316 5.17662 4.49921 5.05905 4.39043 4.80524Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.48668 8.76478C2.67639 8.56412 2.99285 8.55524 3.19351 8.74495L2.85001 9.10828L2.50651 9.47161C2.30585 9.2819 2.29697 8.96544 2.48668 8.76478ZM7.05681 12.1518L9.81974 13.1879C10.3705 13.3945 10.9912 13.26 11.4071 12.8441L13.4965 10.7547C13.6917 10.5595 14.0083 10.5595 14.2036 10.7547C14.3988 10.95 14.3988 11.2666 14.2036 11.4618L12.1142 13.5512C11.421 14.2444 10.3866 14.4685 9.46862 14.1243L6.64987 13.0672L6.6264 13.0555C6.49941 12.992 6.34336 12.88 6.19181 12.7635C6.03031 12.6393 5.84014 12.4834 5.63491 12.3094C5.22395 11.9611 4.73892 11.5292 4.27689 11.11C3.81423 10.6903 3.37178 10.2808 3.04519 9.97647C2.88183 9.82424 2.74732 9.69817 2.65358 9.6101L2.54501 9.50794L2.50651 9.47161L2.85001 9.10828L3.19351 8.74495L3.23095 8.78028L3.33831 8.8813C3.4312 8.96858 3.56472 9.09371 3.72695 9.2449C4.05154 9.54738 4.4905 9.95362 4.94879 10.3694C5.4077 10.7857 5.88314 11.209 6.28147 11.5466C6.48088 11.7156 6.65757 11.8602 6.80129 11.9707C6.93302 12.072 7.01616 12.1281 7.05681 12.1518Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.66911 14.2878C3.84615 14.0759 4.16147 14.0476 4.37339 14.2246L5.33162 15.0251C5.54659 15.2047 5.80754 15.3205 6.08494 15.3594L7.32143 15.5329C7.5949 15.5712 7.78549 15.824 7.74713 16.0975C7.70878 16.3709 7.45599 16.5615 7.18253 16.5232L5.94603 16.3497C5.48371 16.2849 5.04878 16.0919 4.6905 15.7926L3.73227 14.9921C3.52035 14.815 3.49207 14.4997 3.66911 14.2878Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1213_2579">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Hash = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<line x1="5.5" y1="8.75" x2="16.5" y2="8.75" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
<line x1="5.5" y1="14.25" x2="16.5" y2="14.25" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
<path d="M8.75 5L7.75 17" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
<path d="M14.25 5L13.25 17" stroke="currentColor" stroke-width="3" stroke-linecap="round"/>
</g>
<line x1="3.5" y1="7.75" x2="16.5" y2="7.75" stroke="black" stroke-linecap="round"/>
<line x1="3.5" y1="13.25" x2="16.5" y2="13.25" stroke="black" stroke-linecap="round"/>
<path d="M7.75 4L6.75 16" stroke="black" stroke-linecap="round"/>
<path d="M13.25 4L12.25 16" stroke="black" stroke-linecap="round"/>
</svg>
`;

const Headphone = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.8801 17.0685C18.7061 17.5927 18.1402 17.8766 17.616 17.7027C17.5878 17.6933 17.5602 17.6828 17.5334 17.6712C16.9918 18.4839 16.0621 19.014 15.0129 18.9998L14.9967 18.9995C14.4466 18.989 14.0083 18.5362 14.0158 17.9861L14.0699 13.9865C14.0774 13.4321 14.5345 12.9897 15.0888 13.0002C16.0593 13.0186 16.9138 13.4961 17.4485 14.222C17.4827 13.8743 17.5 13.5218 17.5 13.166C17.5 8.71008 14.7442 5.75354 11 5.75354C7.25581 5.75354 4.5 8.71008 4.5 13.166C4.5 13.5555 4.52075 13.941 4.56163 14.3208C5.10693 13.5321 6.02251 13.0206 7.05335 13.0345L7.06957 13.0348C7.61963 13.0452 8.05794 13.498 8.0505 14.0481L7.99636 18.0478C7.98886 18.6021 7.53178 19.0446 6.97747 19.0341C5.93738 19.0143 5.03048 18.4673 4.50772 17.6523C4.46817 17.6716 4.42688 17.6884 4.38399 17.7027C3.85981 17.8766 3.29387 17.5927 3.11994 17.0685C2.71209 15.8394 2.5 14.5199 2.5 13.166C2.5 7.63571 6.11859 3.75354 11 3.75354C15.8814 3.75354 19.5 7.63571 19.5 13.166C19.5 14.5199 19.2879 15.8394 18.8801 17.0685Z" fill="currentColor"/>
</g>
<path d="M17.4055 14.911C17.3185 15.1731 17.0356 15.3151 16.7735 15.2281C16.5114 15.1411 16.3694 14.8582 16.4564 14.5961C16.8135 13.5197 17 12.3598 17 11.166C17 6.44149 14.0285 3.25354 10 3.25354C5.9715 3.25354 3 6.44149 3 11.166C3 12.3598 3.18645 13.5197 3.54361 14.5961C3.63058 14.8582 3.48861 15.1411 3.22652 15.2281C2.96443 15.3151 2.68146 15.1731 2.5945 14.911C2.20355 13.7328 2 12.4665 2 11.166C2 5.9043 5.40289 2.25354 10 2.25354C14.5971 2.25354 18 5.9043 18 11.166C18 12.4665 17.7965 13.7328 17.4055 14.911Z" fill="black"/>
<path d="M5.97747 17.034C4.32744 17.0027 3.01262 15.6444 3.03496 13.9942L3.03526 13.9719C3.05752 12.3274 4.40876 11.0122 6.05335 11.0345C6.06146 11.0346 6.06146 11.0346 6.06958 11.0347C6.61963 11.0452 7.05795 11.498 7.0505 12.0481L6.99636 16.0477C6.98886 16.6021 6.53179 17.0446 5.97747 17.034Z" fill="black"/>
<path d="M14.0888 11.0001C15.7388 11.0315 17.0536 12.3898 17.0313 14.0399L17.031 14.0622C17.0087 15.7068 15.6575 17.022 14.0129 16.9997C14.0048 16.9996 14.0048 16.9996 13.9967 16.9994C13.4466 16.989 13.0083 16.5362 13.0158 15.9861L13.0699 11.9864C13.0774 11.4321 13.5345 10.9896 14.0888 11.0001Z" fill="black"/>
</svg>
`;

const Heart = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M11 6.72187C12.6893 3.69854 18.5 4.75425 18.5 9.12206C18.5 12.0398 16 14.7042 11 17.1154C6 14.7042 3.5 12.0398 3.5 9.12206C3.5 4.75425 9.31066 3.69854 11 6.72187Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.74215 4.63427C4.25621 5.02007 3 6.2071 3 8.12209C3 10.6822 5.16835 13.1872 10 15.5594C14.8317 13.1872 17 10.6822 17 8.12209C17 6.2071 15.7438 5.02007 14.2579 4.63427C12.741 4.24045 11.1372 4.71177 10.4365 5.96579C10.3481 6.12392 10.1811 6.22189 10 6.22189C9.81886 6.22189 9.65188 6.12392 9.56352 5.96579C8.86281 4.71177 7.25895 4.24045 5.74215 4.63427ZM10 4.85624C8.9005 3.59296 7.06844 3.25676 5.49084 3.66636C3.64912 4.14453 2 5.66926 2 8.12209C2 11.3594 4.76672 14.1469 9.78282 16.5658C9.92005 16.632 10.08 16.632 10.2172 16.5658C15.2333 14.1469 18 11.3594 18 8.12209C18 5.66926 16.3509 4.14453 14.5092 3.66636C12.9316 3.25676 11.0995 3.59296 10 4.85624Z" fill="black"/>
</svg>
`;

const Hourglass = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M7.25 2.5H16.25C16.25 2.5 16.1707 5.72979 15.35 7.5C14.4395 9.46387 11.75 11.5 11.75 11.5C11.75 11.5 9.06052 9.46387 8.15 7.5C7.32927 5.72979 7.25 2.5 7.25 2.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 2.5C7.25 2.5 7.26563 3.13687 7.35487 4C7.46661 5.08061 7.69372 6.51586 8.15 7.5C9.06052 9.46387 11.75 11.5 11.75 11.5C11.75 11.5 14.4395 9.46387 15.35 7.5C15.8063 6.51586 16.0334 5.08061 16.1451 4C16.2344 3.13687 16.25 2.5 16.25 2.5H7.25ZM8.86345 4C8.86925 4.05229 8.87534 4.1053 8.88172 4.15894C9.00157 5.16622 9.20697 6.21362 9.51085 6.86906C9.84273 7.58487 10.5702 8.4249 11.3301 9.15422C11.4755 9.29376 11.6169 9.42439 11.75 9.54402C11.8831 9.42439 12.0245 9.29376 12.1699 9.15422C12.9298 8.4249 13.6573 7.58487 13.9891 6.86906C14.293 6.21362 14.4984 5.16622 14.6183 4.15894C14.6247 4.1053 14.6307 4.05229 14.6365 4H8.86345Z" fill="currentColor"/>
<path d="M16.25 18.5L7.25 18.5C7.25 18.5 7.32927 15.6291 8.15 14.0556C9.06052 12.3099 11.75 10.5 11.75 10.5C11.75 10.5 14.4395 12.3099 15.35 14.0556C16.1707 15.6291 16.25 18.5 16.25 18.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.25 18.5C16.25 18.5 16.2247 17.5822 16.0543 16.5C15.9233 15.6682 15.7067 14.7394 15.35 14.0556C14.4395 12.3099 11.75 10.5 11.75 10.5C11.75 10.5 9.06052 12.3099 8.15 14.0556C7.79332 14.7394 7.57668 15.6682 7.44573 16.5C7.27534 17.5822 7.25 18.5 7.25 18.5L16.25 18.5ZM14.0255 16.5C13.9105 15.875 13.7572 15.3264 13.5767 14.9805C13.3112 14.4714 12.6687 13.7915 11.9105 13.1447C11.8564 13.0985 11.8028 13.0535 11.75 13.0096C11.6972 13.0535 11.6436 13.0985 11.5895 13.1447C10.8313 13.7915 10.1888 14.4714 9.92328 14.9805C9.74284 15.3264 9.58946 15.875 9.47454 16.5H14.0255Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 3.00525C5.75 2.45296 6.19772 2.00525 6.75 2.00525H16.8125C17.3648 2.00525 17.8125 2.45296 17.8125 3.00525C17.8125 3.55753 17.3648 4.00525 16.8125 4.00525H6.75C6.19772 4.00525 5.75 3.55753 5.75 3.00525Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.75 18.0834C5.75 17.5311 6.19772 17.0834 6.75 17.0834H16.8125C17.3648 17.0834 17.8125 17.5311 17.8125 18.0834C17.8125 18.6357 17.3648 19.0834 16.8125 19.0834H6.75C6.19772 19.0834 5.75 18.6357 5.75 18.0834Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9605 3H7.03949C6.74001 3 6.58929 3.22714 6.6115 3.41953C6.72626 4.4134 6.94003 5.55301 7.29767 6.28155C7.77541 7.25472 8.92594 8.34847 9.79535 9.07066C9.91836 9.17284 10.0817 9.17284 10.2047 9.07066C11.0741 8.34847 12.2246 7.25472 12.7023 6.28155C13.06 5.55301 13.2738 4.41341 13.3885 3.41953C13.4107 3.22714 13.26 3 12.9605 3ZM7.03949 2C6.1958 2 5.52133 2.69612 5.6181 3.53424C5.73417 4.53949 5.96104 5.82803 6.40001 6.72222C6.9813 7.90634 8.28767 9.11828 9.15638 9.83989C9.64981 10.2498 10.3502 10.2498 10.8436 9.83989C11.7123 9.11828 13.0187 7.90634 13.6 6.72222C14.039 5.82803 14.2658 4.53949 14.3819 3.53424C14.4787 2.69612 13.8042 2 12.9605 2H7.03949Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.03948 17H12.9605C13.26 17 13.4107 16.7729 13.3885 16.5805C13.2737 15.5866 13.06 14.447 12.7023 13.7185C12.2246 12.7453 11.0741 11.6515 10.2046 10.9293C10.0816 10.8272 9.91835 10.8272 9.79534 10.9293C8.92592 11.6515 7.7754 12.7453 7.29766 13.7185C6.94002 14.447 6.72625 15.5866 6.61149 16.5805C6.58928 16.7729 6.74 17 7.03948 17ZM12.9605 18C13.8042 18 14.4787 17.3039 14.3819 16.4658C14.2658 15.4605 14.039 14.172 13.6 13.2778C13.0187 12.0937 11.7123 10.8817 10.8436 10.1601C10.3502 9.75023 9.64979 9.75023 9.15636 10.1601C8.28765 10.8817 6.98129 12.0937 6.39999 13.2778C5.96102 14.172 5.73416 15.4605 5.61809 16.4658C5.52132 17.3039 6.19579 18 7.03948 18H12.9605Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.5C4 2.22386 4.22386 2 4.5 2H15.5C15.7761 2 16 2.22386 16 2.5C16 2.77614 15.7761 3 15.5 3H4.5C4.22386 3 4 2.77614 4 2.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 17.5C4 17.2239 4.22386 17 4.5 17H15.5C15.7761 17 16 17.2239 16 17.5C16 17.7761 15.7761 18 15.5 18H4.5C4.22386 18 4 17.7761 4 17.5Z" fill="black"/>
</svg>
`;

const House = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_1317)">
<g opacity="0.8">
<path d="M3.88889 11H2.5C2.03934 11 1.82377 10.4299 2.16919 10.1251L10.6692 2.62508C10.8582 2.45831 11.1418 2.45831 11.3308 2.62508L19.8308 10.1251C20.1762 10.4299 19.9607 11 19.5 11H18.1111V18C18.1111 18.2761 17.8873 18.5 17.6111 18.5H4.38889C4.11274 18.5 3.88889 18.2761 3.88889 18V11Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.999997 10H2.38889V17C2.38889 17.2761 2.61274 17.5 2.88889 17.5H16.1111C16.3873 17.5 16.6111 17.2761 16.6111 17V10H18C18.4607 10 18.6762 9.42986 18.3308 9.12508L9.83081 1.62508C9.6418 1.45831 9.3582 1.45831 9.16919 1.62508L0.669186 9.12508C0.323766 9.42986 0.539337 10 0.999997 10ZM2.88889 9H2.32238L9.5 2.66681L16.6776 9H16.1111C15.835 9 15.6111 9.22386 15.6111 9.5V16.5H3.38889V9.5C3.38889 9.22386 3.16503 9 2.88889 9Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7083 11.5H8.20833C7.65604 11.5 7.20833 11.9477 7.20833 12.5V16.5C7.20833 17.0523 7.65604 17.5 8.20833 17.5H10.7083C11.2606 17.5 11.7083 17.0523 11.7083 16.5V12.5C11.7083 11.9477 11.2606 11.5 10.7083 11.5ZM8.20833 16.5V12.5H10.7083V16.5H8.20833Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_1317">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Identification = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M3 7.5C3 6.11929 4.11929 5 5.5 5H17.5C18.8807 5 20 6.11929 20 7.5V14.5C20 15.8807 18.8807 17 17.5 17H5.5C4.11929 17 3 15.8807 3 14.5V7.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 4C3.17157 4 2.5 4.67157 2.5 5.5V12.5C2.5 13.3284 3.17157 14 4 14H16C16.8284 14 17.5 13.3284 17.5 12.5V5.5C17.5 4.67157 16.8284 4 16 4H4ZM1.5 5.5C1.5 4.11929 2.61929 3 4 3H16C17.3807 3 18.5 4.11929 18.5 5.5V12.5C18.5 13.8807 17.3807 15 16 15H4C2.61929 15 1.5 13.8807 1.5 12.5V5.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.18182 6.81818C9.18182 6.54203 9.40568 6.31818 9.68182 6.31818H12.4091C12.6852 6.31818 12.9091 6.54203 12.9091 6.81818C12.9091 7.09432 12.6852 7.31818 12.4091 7.31818H9.68182C9.40568 7.31818 9.18182 7.09432 9.18182 6.81818Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.18182 10.9091C9.18182 10.6329 9.40568 10.4091 9.68182 10.4091L15.1364 10.4091C15.4125 10.4091 15.6364 10.6329 15.6364 10.9091C15.6364 11.1852 15.4125 11.4091 15.1364 11.4091L9.68182 11.4091C9.40568 11.4091 9.18182 11.1852 9.18182 10.9091Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.18182 8.18182C9.18182 7.90568 9.40568 7.68182 9.68182 7.68182H15.1364C15.4125 7.68182 15.6364 7.90568 15.6364 8.18182C15.6364 8.45797 15.4125 8.68182 15.1364 8.68182H9.68182C9.40568 8.68182 9.18182 8.45797 9.18182 8.18182ZM9.18182 9.54546C9.18182 9.26932 9.40568 9.04546 9.68182 9.04546H15.1364C15.4125 9.04546 15.6364 9.26932 15.6364 9.54546C15.6364 9.8216 15.4125 10.0455 15.1364 10.0455H9.68182C9.40568 10.0455 9.18182 9.8216 9.18182 9.54546Z" fill="black"/>
<path d="M7.77271 8.18181C7.77271 8.93493 7.16219 9.54545 6.40908 9.54545C5.65596 9.54545 5.04544 8.93493 5.04544 8.18181C5.04544 7.4287 5.65596 6.81818 6.40908 6.81818C7.16219 6.81818 7.77271 7.4287 7.77271 8.18181Z" fill="black"/>
<path d="M8.04546 10.7755C8.04546 11.4635 7.31284 11.3984 6.4091 11.3984C5.50536 11.3984 4.77274 11.4635 4.77274 10.7755C4.77274 10.0874 5.50536 9.2182 6.4091 9.2182C7.31284 9.2182 8.04546 10.0874 8.04546 10.7755Z" fill="black"/>
</svg>
`;

const Info = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 8C12.1046 8 13 8.89543 13 10V17C13 18.1046 12.1046 19 11 19C9.89543 19 9 18.1046 9 17V10C9 8.89543 9.89543 8 11 8Z" fill="currentColor"/>
<path d="M13 5C13 6.10457 12.1046 7 11 7C9.89543 7 9 6.10457 9 5C9 3.89543 9.89543 3 11 3C12.1046 3 13 3.89543 13 5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.25 7.75C10.6642 7.75 11 8.08579 11 8.5V17.5C11 17.9142 10.6642 18.25 10.25 18.25C9.83579 18.25 9.5 17.9142 9.5 17.5V8.5C9.5 8.08579 9.83579 7.75 10.25 7.75Z" fill="black"/>
<path d="M11.5 4.25C11.5 4.94036 10.9404 5.5 10.25 5.5C9.55964 5.5 9 4.94036 9 4.25C9 3.55964 9.55964 3 10.25 3C10.9404 3 11.5 3.55964 11.5 4.25Z" fill="black"/>
</svg>
`;

const InfoCircle = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.8" cx="12" cy="11" r="7" fill="currentColor"/>
<path d="M9.5 9C9.5 8.72386 9.72386 8.5 10 8.5C10.2761 8.5 10.5 8.72386 10.5 9V14C10.5 14.2761 10.2761 14.5 10 14.5C9.72386 14.5 9.5 14.2761 9.5 14V9Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 10C3 13.866 6.13401 17 10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10ZM16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C13.3137 4 16 6.68629 16 10Z" fill="black"/>
<circle cx="10" cy="6.75" r="0.75" fill="black"/>
</svg>
`;

const Internet = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M11.5 20C6.80558 20 3 16.1944 3 11.5C3 6.80558 6.80558 3 11.5 3C16.1944 3 20 6.80558 20 11.5C20 16.1944 16.1944 20 11.5 20Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 10C1.5 14.6944 5.30558 18.5 10 18.5C14.6944 18.5 18.5 14.6944 18.5 10C18.5 5.30558 14.6944 1.5 10 1.5C5.30558 1.5 1.5 5.30558 1.5 10ZM17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 10C6.5 14.3955 7.94179 18 10 18C12.0582 18 13.5 14.3955 13.5 10C13.5 5.60448 12.0582 2 10 2C7.94179 2 6.5 5.60448 6.5 10ZM12.5 10C12.5 13.8887 11.2555 17 10 17C8.7445 17 7.5 13.8887 7.5 10C7.5 6.11125 8.7445 3 10 3C11.2555 3 12.5 6.11125 12.5 10Z" fill="black"/>
<path d="M3.7345 5.31155L4.40527 4.56989C4.51174 4.66618 4.6261 4.76016 4.74797 4.85146C6.06562 5.83869 8.14634 6.44072 10.4133 6.44072C12.3459 6.44072 14.1501 6.00426 15.4683 5.25028C15.7894 5.06668 16.0765 4.8668 16.3253 4.65423L16.9749 5.41453C16.6772 5.66892 16.3387 5.9045 15.9648 6.11833C14.4882 6.96291 12.5131 7.44072 10.4133 7.44072C7.94222 7.44072 5.65144 6.77791 4.14836 5.65176C4.0022 5.54226 3.8641 5.42876 3.7345 5.31155Z" fill="black"/>
<path d="M3.7345 14.6991L4.40527 15.4407C4.51174 15.3444 4.6261 15.2505 4.74797 15.1592C6.06562 14.1719 8.14634 13.5699 10.4133 13.5699C12.3459 13.5699 14.1501 14.0064 15.4683 14.7603C15.7894 14.9439 16.0765 15.1438 16.3253 15.3564L16.9749 14.5961C16.6772 14.3417 16.3387 14.1061 15.9648 13.8923C14.4882 13.0477 12.5131 12.5699 10.4133 12.5699C7.94222 12.5699 5.65144 13.2327 4.14836 14.3589C4.0022 14.4684 3.8641 14.5819 3.7345 14.6991Z" fill="black"/>
<path d="M2 10.5V9.5H18V10.5H2Z" fill="black"/>
</svg>
`;

const Key = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M14.5 9V11.6111C14.5 11.7409 14.4495 11.8656 14.3592 11.9589L13.3562 12.9949L14.3541 13.9958C14.4475 14.0895 14.5 14.2164 14.5 14.3488V15.124C14.5 15.3033 14.404 15.4689 14.2483 15.558L13.5323 15.9677L14.3177 16.6139C14.4331 16.7089 14.5 16.8505 14.5 17C14.5 18.3807 13.3807 19.5 12 19.5C10.6193 19.5 9.5 18.3807 9.5 17V9C9.5 8.91628 9.50413 8.83304 9.51233 8.75051C8.27138 7.92679 7.5 6.53091 7.5 5C7.5 2.51472 9.51472 0.5 12 0.5C14.4853 0.5 16.5 2.51472 16.5 5C16.5 6.53091 15.7286 7.92679 14.4877 8.75051C14.4959 8.83304 14.5 8.91628 14.5 9Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 11.6111V9C12.5 8.91628 12.4959 8.83304 12.4877 8.75051C13.7286 7.92679 14.5 6.53091 14.5 5C14.5 2.51472 12.4853 0.5 10 0.5C7.51472 0.5 5.5 2.51472 5.5 5C5.5 6.53091 6.27138 7.92679 7.51233 8.75051C7.50413 8.83304 7.5 8.91628 7.5 9V17C7.5 18.3807 8.61929 19.5 10 19.5C11.3807 19.5 12.5 18.3807 12.5 17C12.5 16.8505 12.4331 16.7089 12.3177 16.6139L11.5323 15.9677L12.2483 15.558C12.404 15.4689 12.5 15.3033 12.5 15.124V14.3488C12.5 14.2164 12.4475 14.0895 12.3541 13.9958L11.3562 12.9949L12.3592 11.9589C12.4495 11.8656 12.5 11.7409 12.5 11.6111ZM11.4529 8.625C11.484 8.74626 11.5 8.87186 11.5 9V11.4087L10.296 12.6522C10.1063 12.8481 10.1086 13.1599 10.3012 13.353L11.5 14.5555V14.834L10.4069 15.4595C10.1032 15.6332 10.0674 16.0572 10.3375 16.2795L11.4836 17.2226C11.3761 17.9455 10.7528 18.5 10 18.5C9.17157 18.5 8.5 17.8284 8.5 17V9C8.5 8.87186 8.51595 8.74626 8.54713 8.625C8.60381 8.40454 8.50444 8.17362 8.30537 8.06323C7.20003 7.45024 6.5 6.28681 6.5 5C6.5 3.067 8.067 1.5 10 1.5C11.933 1.5 13.5 3.067 13.5 5C13.5 6.28681 12.8 7.45024 11.6946 8.06323C11.4956 8.17362 11.3962 8.40454 11.4529 8.625Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 5.5C10.8284 5.5 11.5 4.82843 11.5 4C11.5 3.17157 10.8284 2.5 10 2.5C9.17157 2.5 8.5 3.17157 8.5 4C8.5 4.82843 9.17157 5.5 10 5.5ZM10 3.5C10.2761 3.5 10.5 3.72386 10.5 4C10.5 4.27614 10.2761 4.5 10 4.5C9.72386 4.5 9.5 4.27614 9.5 4C9.5 3.72386 9.72386 3.5 10 3.5Z" fill="black"/>
</svg>
`;

const KniveFork = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9048 0.834176C13.6721 1.99181 12.5 3.63951 12.5 5.71735C12.5 7.67355 13.5465 9.03178 15.5 9.69569V11.2007C15.0516 11.46 14.75 11.9448 14.75 12.5V17.5C14.75 18.3284 15.4216 19 16.25 19C17.0784 19 17.75 18.3284 17.75 17.5V12.5C17.75 11.9448 17.4484 11.46 17 11.2007V9.15088C17.0002 9.13999 17.0002 9.12912 17 9.11828V1.5C17 0.93764 16.404 0.575323 15.9048 0.834176ZM5.78272 2.46257C5.80339 2.04888 6.15551 1.73026 6.56921 1.75093C6.98291 1.7716 7.30152 2.12373 7.28085 2.53742C7.19904 4.17489 7.28398 5.28369 7.49964 5.80358C7.59363 6.03015 7.74212 6.16691 8 6.22214V2.5C8 2.08579 8.33579 1.75 8.75 1.75C9.16421 1.75 9.5 2.08579 9.5 2.5V6.22209C9.75773 6.16682 9.90616 6.03008 10.0001 5.80358C10.2158 5.28369 10.3007 4.17489 10.2189 2.53742C10.1982 2.12373 10.5169 1.7716 10.9306 1.75093C11.3442 1.73026 11.6964 2.04888 11.717 2.46257C11.8093 4.30918 11.7108 5.59435 11.3856 6.37832C11.0497 7.1881 10.3862 7.64523 9.5 7.73386V11.2007C9.94835 11.46 10.25 11.9448 10.25 12.5V17.5C10.25 18.3284 9.57843 19 8.75 19C7.92157 19 7.25 18.3284 7.25 17.5V12.5C7.25 11.9448 7.55165 11.46 8 11.2007V7.73389C7.11368 7.64531 6.45006 7.18817 6.11412 6.37832C5.78892 5.59435 5.69046 4.30918 5.78272 2.46257Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2791 1.05145C12.1208 2.11457 11 3.61133 11 5.50647C11 7.32619 12.0372 8.557 14 9.13733V11C14 11.2761 14.2239 11.5 14.5 11.5C14.7761 11.5 15 11.2761 15 11V8.76362C15.0002 8.75649 15.0002 8.74939 15 8.74231V1.49999C15 1.1296 14.6113 0.88779 14.2791 1.05145ZM12 5.50647C12 4.23782 12.6491 3.19236 14 2.34771V8.08786C12.6365 7.61052 12 6.7667 12 5.50647Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 12.5V17.5C13 18.3284 13.6716 19 14.5 19C15.3284 19 16 18.3284 16 17.5V12.5C16 11.6716 15.3284 11 14.5 11C13.6716 11 13 11.6716 13 12.5ZM14.5 18C14.2239 18 14 17.7761 14 17.5V12.5C14 12.2239 14.2239 12 14.5 12C14.7761 12 15 12.2239 15 12.5V17.5C15 17.7761 14.7761 18 14.5 18Z" fill="black"/>
<path d="M4.53241 2.47505C4.54619 2.19925 4.78094 1.98684 5.05674 2.00062C5.33253 2.0144 5.54494 2.24915 5.53116 2.52495C5.44761 4.19727 5.53481 5.33547 5.76872 5.89937C5.95181 6.34075 6.31286 6.53348 6.97128 6.49561C7.24697 6.47975 7.48331 6.69038 7.49917 6.96607C7.51503 7.24175 7.3044 7.4781 7.02872 7.49396C5.97051 7.55483 5.20281 7.14501 4.84504 6.28253C4.53809 5.54257 4.44189 4.2868 4.53241 2.47505Z" fill="black"/>
<path d="M9.46744 2.47505C9.45366 2.19925 9.21891 1.98684 8.94311 2.00062C8.66731 2.0144 8.45491 2.24915 8.46868 2.52495C8.55224 4.19727 8.46504 5.33547 8.23113 5.89937C8.04803 6.34075 7.68699 6.53348 7.02856 6.49561C6.75288 6.47975 6.51653 6.69038 6.50067 6.96607C6.48481 7.24175 6.69545 7.4781 6.97113 7.49396C8.02933 7.55483 8.79704 7.14501 9.15481 6.28253C9.46175 5.54257 9.55796 4.2868 9.46744 2.47505Z" fill="black"/>
<path d="M6.5 2.5C6.5 2.22386 6.72386 2 7 2C7.27614 2 7.5 2.22386 7.5 2.5V11.4998C7.5 11.7759 7.27614 11.9998 7 11.9998C6.72386 11.9998 6.5 11.7759 6.5 11.4998V2.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 12.5V17.5C5.5 18.3284 6.17157 19 7 19C7.82843 19 8.5 18.3284 8.5 17.5V12.5C8.5 11.6716 7.82843 11 7 11C6.17157 11 5.5 11.6716 5.5 12.5ZM7 18C6.72386 18 6.5 17.7761 6.5 17.5V12.5C6.5 12.2239 6.72386 12 7 12C7.27614 12 7.5 12.2239 7.5 12.5V17.5C7.5 17.7761 7.27614 18 7 18Z" fill="black"/>
</svg>
`;

const Label = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_303_5009)">
<g opacity="0.8">
<path d="M4.48526 2.48682C4.48534 2.48593 4.48542 2.48505 4.4855 2.48416C4.48639 2.48407 4.48728 2.48399 4.48817 2.48391C4.94496 2.44168 5.58179 2.39754 6.30365 2.36885C7.76299 2.31087 9.49683 2.31927 10.7832 2.51105C10.8417 2.51977 10.9175 2.55227 10.9937 2.6284L18.747 10.3818C18.9423 10.577 18.9423 10.8936 18.747 11.0889L13.0902 16.7457C12.8949 16.941 12.5783 16.941 12.3831 16.7457L4.62972 8.99236C4.55358 8.91623 4.52109 8.84041 4.51237 8.78192C4.32059 7.49552 4.3122 5.76167 4.3702 4.30232C4.39888 3.58045 4.44303 2.94362 4.48526 2.48682Z" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</g>
<path d="M9.3559 2.62971L17.1093 10.3831C17.4998 10.7736 17.4998 11.4067 17.1093 11.7973L11.4524 17.4541C11.0619 17.8446 10.4287 17.8446 10.0382 17.4541L2.28483 9.70077C2.14174 9.55768 2.05276 9.38665 2.0265 9.2105C1.82763 7.8765 1.82094 6.10482 1.87926 4.63732C1.90826 3.90748 1.95295 3.26189 1.99604 2.79566C2.01102 2.63367 2.02561 2.49536 2.03904 2.3839C2.15051 2.37046 2.28882 2.35586 2.45082 2.34089C2.91704 2.29779 3.56263 2.25311 4.29247 2.22411C5.75995 2.16579 7.53163 2.1725 8.86563 2.37137C9.04178 2.39763 9.21281 2.48661 9.3559 2.62971Z" stroke="black" stroke-linecap="round"/>
<circle cx="6.94974" cy="7.37952" r="1" transform="rotate(-45 6.94974 7.37952)" stroke="black"/>
</g>
<defs>
<clipPath id="clip0_303_5009">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Leave = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<rect x="6" y="4" width="10" height="15" rx="1" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6667 7.5L17.75 10L15.6667 7.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6667 12.5L17.75 10L15.6667 12.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M17 10L9.5 10" stroke="black" stroke-linecap="round"/>
<path d="M4 3L13 3" stroke="black" stroke-linecap="round"/>
<path d="M4 17H13" stroke="black" stroke-linecap="round"/>
<path d="M13 3V7" stroke="black" stroke-linecap="round"/>
<path d="M13 13V17" stroke="black" stroke-linecap="round"/>
<path d="M4 3L4 17" stroke="black" stroke-linecap="round"/>
</svg>
`;

const Letter = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.8" x="4.5" y="5.5" width="15" height="12" rx="1.5" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 4H3C2.72386 4 2.5 4.22386 2.5 4.5V15.5C2.5 15.7761 2.72386 16 3 16H17C17.2761 16 17.5 15.7761 17.5 15.5V4.5C17.5 4.22386 17.2761 4 17 4ZM3.5 15V5H16.5V15H3.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3242 4.88066L10.2792 10.8807C10.0914 11.0406 9.81512 11.0397 9.62838 10.8786L2.6734 4.87859C2.32251 4.57588 2.53659 4 3 4H17C17.465 4 17.6782 4.57917 17.3242 4.88066ZM15.6418 5H4.34504L9.95708 9.84146L15.6418 5Z" fill="black"/>
</svg>
`;

const LetterOpen = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M5.53 6.3125C5.25 6.3125 5.03 6.5325 5.03 6.8125V8.3625L4.61 8.6825C4.23 8.9725 4 9.4325 4 9.9125V18.9325C4 19.0625 4.05 19.1925 4.14 19.2725C4.24 19.3725 4.37 19.4325 4.5 19.4325H19.43C19.57 19.4325 19.69 19.3825 19.78 19.2925C19.88 19.1925 19.93 19.0625 19.93 18.9325V9.9025C19.93 9.4325 19.7 8.9725 19.32 8.6825L18.9 8.3525V6.8025C18.9 6.6825 18.84 6.5525 18.74 6.4425C18.66 6.3525 18.53 6.3025 18.4 6.3025H16.2L12.88 3.7925C12.37 3.4025 11.57 3.4025 11.05 3.7925L7.73 6.3125H5.53Z" fill="currentColor"/>
</g>
<path d="M3.53 4.8125C3.25 4.8125 3.03 5.0325 3.03 5.3125V6.8625L2.61 7.1825C2.23 7.4725 2 7.9325 2 8.4125V17.4325C2 17.5625 2.05 17.6925 2.14 17.7725C2.24 17.8725 2.37 17.9325 2.5 17.9325H17.43C17.57 17.9325 17.69 17.8825 17.78 17.7925C17.88 17.6925 17.93 17.5625 17.93 17.4325V8.4025C17.93 7.9325 17.7 7.4725 17.32 7.1825L16.9 6.8525V5.3025C16.9 5.1825 16.84 5.0525 16.74 4.9425C16.66 4.8525 16.53 4.8025 16.4 4.8025H14.2L10.88 2.2925C10.37 1.9025 9.57 1.9025 9.05 2.2925L5.73 4.8125H3.53ZM16.94 16.9325H3V10.4425L9.06 15.0525C9.58 15.4425 10.37 15.4425 10.89 15.0525L16.94 10.4425V16.9325V16.9325ZM9.97 14.3525C9.86 14.3525 9.75 14.3225 9.65 14.2525L4.03 9.9725V5.8125H15.91V9.9725L10.29 14.2425C10.21 14.3125 10.09 14.3525 9.98 14.3525H9.97ZM12.54 4.8125H7.39L9.64 3.0825C9.81 2.9425 10.08 2.9325 10.27 3.0825L12.53 4.8125H12.54Z" fill="black"/>
<path d="M13.34 8.05238H6.59003C6.36003 8.05238 6.16003 7.86238 6.16003 7.62238C6.16003 7.38238 6.35003 7.19238 6.59003 7.19238H13.34C13.57 7.19238 13.77 7.38238 13.77 7.62238C13.77 7.86238 13.58 8.05238 13.34 8.05238Z" fill="black"/>
<path d="M11.62 11.4924H8.31C8.08 11.4924 7.88 11.3024 7.88 11.0624C7.88 10.8224 8.07 10.6324 8.31 10.6324H11.62C11.85 10.6324 12.05 10.8224 12.05 11.0624C12.05 11.3024 11.86 11.4924 11.62 11.4924Z" fill="black"/>
<path d="M13.34 9.77248H6.59003C6.36003 9.77248 6.16003 9.58248 6.16003 9.34248C6.16003 9.10248 6.35003 8.91248 6.59003 8.91248H13.34C13.57 8.91248 13.77 9.10248 13.77 9.34248C13.77 9.58248 13.58 9.77248 13.34 9.77248Z" fill="black"/>
</svg>
`;

const List = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<circle cx="6" cy="7.25" r="1.5" fill="currentColor"/>
<circle cx="6" cy="11.25" r="1.5" fill="currentColor"/>
<circle cx="6" cy="15.25" r="1.5" fill="currentColor"/>
<line x1="9.5" y1="7.25" x2="16.5" y2="7.25" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<line x1="9.5" y1="11.25" x2="16.5" y2="11.25" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<line x1="9.5" y1="15.25" x2="16.5" y2="15.25" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
</g>
<circle cx="5" cy="6" r="1.5" fill="black"/>
<circle cx="5" cy="10" r="1.5" fill="black"/>
<circle cx="5" cy="14" r="1.5" fill="black"/>
<line x1="8" y1="6.5" x2="16" y2="6.5" stroke="black" stroke-linecap="round"/>
<line x1="8" y1="10.5" x2="16" y2="10.5" stroke="black" stroke-linecap="round"/>
<line x1="8" y1="14.5" x2="16" y2="14.5" stroke="black" stroke-linecap="round"/>
</svg>
`;

const LockClosed = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 9.64494V6.5C8 4.567 9.567 3 11.5 3C13.433 3 15 4.567 15 6.5V9.64494C16.4457 10.0752 17.5 11.4145 17.5 13V16C17.5 17.933 15.933 19.5 14 19.5H9C7.067 19.5 5.5 17.933 5.5 16V13C5.5 11.4145 6.55426 10.0752 8 9.64494ZM9.5 9.5V6.5C9.5 5.39543 10.3954 4.5 11.5 4.5C12.6046 4.5 13.5 5.39543 13.5 6.5V9.5H9.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 12.5C7.5 13.6046 8.39543 14.5 9.5 14.5C10.6046 14.5 11.5 13.6046 11.5 12.5C11.5 11.3954 10.6046 10.5 9.5 10.5C8.39543 10.5 7.5 11.3954 7.5 12.5ZM10.5 12.5C10.5 13.0523 10.0523 13.5 9.5 13.5C8.94772 13.5 8.5 13.0523 8.5 12.5C8.5 11.9477 8.94772 11.5 9.5 11.5C10.0523 11.5 10.5 11.9477 10.5 12.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.5H7C5.067 7.5 3.5 9.067 3.5 11V14C3.5 15.933 5.067 17.5 7 17.5H12C13.933 17.5 15.5 15.933 15.5 14V11C15.5 9.067 13.933 7.5 12 7.5ZM4.5 11C4.5 9.61929 5.61929 8.5 7 8.5H12C13.3807 8.5 14.5 9.61929 14.5 11V14C14.5 15.3807 13.3807 16.5 12 16.5H7C5.61929 16.5 4.5 15.3807 4.5 14V11Z" fill="black"/>
<path d="M7 8C7 8.27614 6.77614 8.5 6.5 8.5C6.22386 8.5 6 8.27614 6 8V4.5C6 2.567 7.567 1 9.5 1C11.433 1 13 2.567 13 4.5V8C13 8.27614 12.7761 8.5 12.5 8.5C12.2239 8.5 12 8.27614 12 8V4.5C12 3.11929 10.8807 2 9.5 2C8.11929 2 7 3.11929 7 4.5V8Z" fill="black"/>
</svg>
`;

const LockOpen = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 9.5H14C15.933 9.5 17.5 11.067 17.5 13V16C17.5 17.933 15.933 19.5 14 19.5H9C7.067 19.5 5.5 17.933 5.5 16V13C5.5 11.4145 6.55426 10.0752 8 9.64494V6.75C8 4.6928 9.55173 3 11.5 3C13.4483 3 15 4.6928 15 6.75V7C15 7.41421 14.6642 7.75 14.25 7.75C13.8358 7.75 13.5 7.41421 13.5 7V6.75C13.5 5.49349 12.5893 4.5 11.5 4.5C10.4107 4.5 9.5 5.49349 9.5 6.75V9.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 12.5C7.5 13.6046 8.39543 14.5 9.5 14.5C10.6046 14.5 11.5 13.6046 11.5 12.5C11.5 11.3954 10.6046 10.5 9.5 10.5C8.39543 10.5 7.5 11.3954 7.5 12.5ZM10.5 12.5C10.5 13.0523 10.0523 13.5 9.5 13.5C8.94772 13.5 8.5 13.0523 8.5 12.5C8.5 11.9477 8.94772 11.5 9.5 11.5C10.0523 11.5 10.5 11.9477 10.5 12.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 7.5H7C5.067 7.5 3.5 9.067 3.5 11V14C3.5 15.933 5.067 17.5 7 17.5H12C13.933 17.5 15.5 15.933 15.5 14V11C15.5 9.067 13.933 7.5 12 7.5ZM4.5 11C4.5 9.61929 5.61929 8.5 7 8.5H12C13.3807 8.5 14.5 9.61929 14.5 11V14C14.5 15.3807 13.3807 16.5 12 16.5H7C5.61929 16.5 4.5 15.3807 4.5 14V11Z" fill="black"/>
<path d="M7 8C7 8.27614 6.77614 8.5 6.5 8.5C6.22386 8.5 6 8.27614 6 8V4.5C6 2.567 7.567 1 9.5 1C11.433 1 13 2.567 13 4.5V5.5C13 5.77614 12.7761 6 12.5 6C12.2239 6 12 5.77614 12 5.5V4.5C12 3.11929 10.8807 2 9.5 2C8.11929 2 7 3.11929 7 4.5V8Z" fill="black"/>
</svg>
`;

const Loop = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 9.5C5.5 12.5376 7.96243 15 11 15C11.9892 15 12.9174 14.7389 13.7194 14.2818C13.7801 14.381 13.8534 14.4748 13.9393 14.5607L16.9393 17.5607C17.5251 18.1464 18.4749 18.1464 19.0607 17.5607C19.6464 16.9749 19.6464 16.0251 19.0607 15.4393L16.0607 12.4393C15.9748 12.3534 15.881 12.2801 15.7818 12.2194C16.2389 11.4174 16.5 10.4892 16.5 9.5C16.5 6.46243 14.0376 4 11 4C7.96243 4 5.5 6.46243 5.5 9.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.82842 4.82838C2.8758 6.781 2.8758 9.94683 4.82842 11.8994C6.78104 13.8521 9.94686 13.8521 11.8995 11.8994C13.8521 9.94683 13.8521 6.781 11.8995 4.82838C9.94687 2.87576 6.78104 2.87576 4.82842 4.82838ZM11.1924 11.1923C9.63028 12.7544 7.09762 12.7544 5.53553 11.1923C3.97343 9.63024 3.97343 7.09758 5.53553 5.53549C7.09762 3.97339 9.63028 3.97339 11.1924 5.53549C12.7545 7.09758 12.7545 9.63024 11.1924 11.1923Z" fill="black"/>
<path d="M11.1924 12.6274C10.8019 12.2369 10.8019 11.6037 11.1924 11.2132C11.583 10.8227 12.2161 10.8227 12.6066 11.2132L15.4351 14.0416C15.8256 14.4321 15.8256 15.0653 15.4351 15.4558C15.0445 15.8463 14.4114 15.8463 14.0209 15.4558L11.1924 12.6274Z" fill="black"/>
</svg>
`;

const LoopMinus = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.82843 5.8284C4.48529 8.17155 4.48529 11.9705 6.82843 14.3137C8.68524 16.1705 11.4563 16.5559 13.6926 15.4699C13.7507 15.5614 13.8196 15.648 13.8995 15.7279L17.435 19.2634C18.0208 19.8492 18.9706 19.8492 19.5564 19.2634C20.1421 18.6776 20.1421 17.7279 19.5564 17.1421L16.0208 13.6066C16.0012 13.587 15.9812 13.568 15.9608 13.5498C17.6322 11.2064 17.4165 7.93118 15.3137 5.8284C12.9706 3.48526 9.17158 3.48526 6.82843 5.8284Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.18199 5.18193C3.0341 7.32982 3.0341 10.8122 5.18199 12.9601C7.32987 15.108 10.8123 15.108 12.9602 12.9601C15.108 10.8122 15.108 7.32982 12.9602 5.18193C10.8123 3.03405 7.32987 3.03405 5.18199 5.18193ZM12.2531 12.253C10.4957 14.0104 7.64645 14.0104 5.88909 12.253C4.13174 10.4956 4.13174 7.6464 5.88909 5.88904C7.64645 4.13168 10.4957 4.13168 12.2531 5.88904C14.0104 7.6464 14.0104 10.4956 12.2531 12.253Z" fill="black"/>
<path d="M12 14.1213C11.6095 13.7308 11.6095 13.0976 12 12.7071C12.3905 12.3166 13.0237 12.3166 13.4142 12.7071L17.2028 16.4957C17.5933 16.8862 17.5933 17.5193 17.2028 17.9099C16.8123 18.3004 16.1791 18.3004 15.7886 17.9099L12 14.1213Z" fill="black"/>
<path d="M6.70712 9.41418C6.43098 9.41418 6.20712 9.19033 6.20712 8.91418C6.20712 8.63804 6.43098 8.41418 6.70712 8.41418H11.1924C11.4685 8.41418 11.6924 8.63804 11.6924 8.91418C11.6924 9.19033 11.4685 9.41418 11.1924 9.41418H6.70712Z" fill="black"/>
</svg>
`;

const LoopPlus = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.82847 5.8284C4.48532 8.17155 4.48532 11.9705 6.82847 14.3137C8.68527 16.1705 11.4563 16.5559 13.6926 15.4699C13.7507 15.5614 13.8197 15.648 13.8995 15.7279L17.4351 19.2634C18.0209 19.8492 18.9706 19.8492 19.5564 19.2634C20.1422 18.6776 20.1422 17.7279 19.5564 17.1421L16.0209 13.6066C16.0013 13.587 15.9813 13.568 15.9609 13.5498C17.6322 11.2064 17.4165 7.93118 15.3137 5.8284C12.9706 3.48526 9.17161 3.48526 6.82847 5.8284Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.18202 5.18193C3.03414 7.32982 3.03414 10.8122 5.18202 12.9601C7.3299 15.108 10.8123 15.108 12.9602 12.9601C15.1081 10.8122 15.1081 7.32982 12.9602 5.18193C10.8123 3.03405 7.3299 3.03405 5.18202 5.18193ZM12.2531 12.253C10.4957 14.0104 7.64648 14.0104 5.88913 12.253C4.13177 10.4956 4.13177 7.6464 5.88913 5.88904C7.64648 4.13168 10.4957 4.13168 12.2531 5.88904C14.0104 7.6464 14.0104 10.4956 12.2531 12.253Z" fill="black"/>
<path d="M12 14.1213C11.6095 13.7308 11.6095 13.0976 12 12.7071C12.3905 12.3166 13.0237 12.3166 13.4142 12.7071L17.2028 16.4957C17.5933 16.8862 17.5933 17.5193 17.2028 17.9099C16.8123 18.3004 16.1791 18.3004 15.7886 17.9099L12 14.1213Z" fill="black"/>
<path d="M7.20709 9.66418C6.93095 9.66418 6.70709 9.44033 6.70709 9.16418C6.70709 8.88804 6.93095 8.66418 7.20709 8.66418H11.2071C11.4832 8.66418 11.7071 8.88804 11.7071 9.16418C11.7071 9.44033 11.4832 9.66418 11.2071 9.66418H7.20709Z" fill="black"/>
<path d="M8.70709 7.16418C8.70709 6.88804 8.93095 6.66418 9.20709 6.66418C9.48323 6.66418 9.70709 6.88804 9.70709 7.16418V11.1642C9.70709 11.4403 9.48323 11.6642 9.20709 11.6642C8.93095 11.6642 8.70709 11.4403 8.70709 11.1642V7.16418Z" fill="black"/>
</svg>
`;

const Magnet = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_8_3)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.13174 4.64646C8.327 4.4512 8.64358 4.4512 8.83884 4.64646L11.8693 7.67692C12.0646 7.87218 12.0646 8.18876 11.8693 8.38403L7.62666 12.6267C7.15245 13.1009 7.15245 13.8697 7.62666 14.3439C8.10087 14.8181 8.86971 14.8181 9.34392 14.3439L13.5866 10.1013C13.7818 9.90602 14.0984 9.90602 14.2937 10.1013L17.3241 13.1317C17.5194 13.327 17.5194 13.6436 17.3241 13.8388L13.0815 18.0815C10.5431 20.6199 6.42751 20.6199 3.8891 18.0815C1.35069 15.5431 1.35069 11.4275 3.8891 8.8891L8.13174 4.64646Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4012 8.4285C13.8884 8.22339 13.639 7.64142 13.8441 7.12864L15.1943 3.75317L16.7526 4.27261L17.5714 2.56719C17.8105 2.06932 18.4079 1.85949 18.9057 2.09853C19.4036 2.33757 19.6134 2.93496 19.3744 3.43283L17.7926 6.72744L16.3509 6.24688L15.7011 7.87142C15.496 8.3842 14.914 8.63362 14.4012 8.4285Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.13174 3.64646C7.327 3.4512 7.64358 3.4512 7.83884 3.64646L10.8693 6.67692C11.0646 6.87218 11.0646 7.18876 10.8693 7.38403L6.62666 11.6267C6.15245 12.1009 6.15245 12.8697 6.62666 13.3439C7.10087 13.8181 7.86971 13.8181 8.34392 13.3439L12.5866 9.10128C12.7818 8.90602 13.0984 8.90602 13.2937 9.10128L16.3241 12.1317C16.5194 12.327 16.5194 12.6436 16.3241 12.8388L12.0815 17.0815C9.54308 19.6199 5.42751 19.6199 2.8891 17.0815C0.350692 14.5431 0.350691 10.4275 2.8891 7.8891L7.13174 3.64646ZM7.48529 4.70712L3.59621 8.59621C1.44832 10.7441 1.44832 14.2265 3.59621 16.3744C5.74409 18.5223 9.2265 18.5223 11.3744 16.3744L15.2635 12.4853L12.9401 10.1619L9.05103 14.051C8.1863 14.9158 6.78429 14.9158 5.91955 14.051C5.05482 13.1863 5.05482 11.7843 5.91955 10.9196L9.80864 7.03047L7.48529 4.70712Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.48531 10.0608L4.45485 7.03038L5.16196 6.32327L8.19241 9.35373L7.48531 10.0608Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9401 15.5157L9.90965 12.4852L10.6168 11.7781L13.6472 14.8086L12.9401 15.5157Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.5869 6.96424C12.3305 6.86169 12.2058 6.5707 12.3083 6.31431L13.4834 3.37658L15.0126 3.88629L16.0221 1.78358C16.1417 1.53465 16.4404 1.42973 16.6893 1.54925C16.9382 1.66877 17.0431 1.96746 16.9236 2.2164L15.5326 5.11371L14.0617 4.62343L13.2368 6.6857C13.1343 6.94209 12.8433 7.0668 12.5869 6.96424Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_8_3">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Map = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M15.6891 9.53422C16.5519 9.83406 17.252 10.5354 17.5489 11.4595L18.8501 15.5097C19.3619 17.1027 18.5207 18.8206 16.9712 19.3467C16.6722 19.4483 16.3594 19.5 16.0445 19.5H7.95468C6.32285 19.5 5 18.14 5 16.4624C5 16.1387 5.05033 15.8171 5.14907 15.5097L6.45027 11.4595C6.74724 10.5352 7.44769 9.83367 8.31081 9.53397C8.11499 8.90123 8 8.29712 8 7.78555C8 5.41871 9.79086 3.5 12 3.5C14.2091 3.5 16 5.41871 16 7.78555C16 8.29719 15.885 8.90139 15.6891 9.53422V9.53422Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 8.5C11.1046 8.5 12 7.60457 12 6.5C12 5.39543 11.1046 4.5 10 4.5C8.89543 4.5 8 5.39543 8 6.5C8 7.60457 8.89543 8.5 10 8.5ZM10 5.5C10.5523 5.5 11 5.94772 11 6.5C11 7.05228 10.5523 7.5 10 7.5C9.44772 7.5 9 7.05228 9 6.5C9 5.94772 9.44772 5.5 10 5.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 6.28555C5.5 8.95892 8.15253 13.5 10 13.5C11.8475 13.5 14.5 8.95892 14.5 6.28555C14.5 3.64998 12.4933 1.5 10 1.5C7.50672 1.5 5.5 3.64998 5.5 6.28555ZM13.5 6.28555C13.5 8.47937 11.1515 12.5 10 12.5C8.84852 12.5 6.5 8.47937 6.5 6.28555C6.5 4.18744 8.075 2.5 10 2.5C11.925 2.5 13.5 4.18744 13.5 6.28555Z" fill="black"/>
<path d="M13.4351 9.14065C13.1784 9.03882 13.0529 8.74818 13.1547 8.4915C13.2565 8.23482 13.5472 8.10929 13.8038 8.21112C14.6228 8.53604 15.2624 9.20622 15.5442 10.0514L16.8775 14.0514C17.4014 15.6232 16.552 17.3222 14.9801 17.8461C14.6742 17.9481 14.3539 18.0001 14.0314 18.0001H5.96857C4.31171 18.0001 2.96857 16.6569 2.96857 15.0001C2.96857 14.6776 3.02055 14.3573 3.12252 14.0514L4.45585 10.0514C4.74265 9.19096 5.40021 8.51244 6.23914 8.19446C6.49735 8.09659 6.78602 8.22657 6.88389 8.48479C6.98176 8.74301 6.85178 9.03167 6.59356 9.12954C6.03409 9.3416 5.59577 9.7939 5.40453 10.3676L4.0712 14.3676C4.00322 14.5715 3.96857 14.7851 3.96857 15.0001C3.96857 16.1046 4.864 17.0001 5.96857 17.0001H14.0314C14.2464 17.0001 14.46 16.9654 14.6639 16.8974C15.7118 16.5481 16.2781 15.4155 15.9288 14.3676L14.5955 10.3676C14.4076 9.80406 13.9813 9.35735 13.4351 9.14065Z" fill="black"/>
</svg>
`;

const Megaphone = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M6.13685 11.7828C5.70178 11.6641 5.39996 11.269 5.39996 10.818L5.39996 6.38197C5.39996 5.93102 5.70178 5.53586 6.13685 5.41721L13.7369 3.34447C14.373 3.17098 15 3.64986 15 4.30924V12.8908C15 13.5501 14.373 14.029 13.7369 13.8555L6.13685 11.7828Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.39996 10.0542L13 11.5815V5.61849L7.39996 7.14577V10.0542ZM5.39996 10.818C5.39996 11.269 5.70178 11.6641 6.13685 11.7828L13.7369 13.8555C14.373 14.029 15 13.5501 15 12.8908V4.30924C15 3.64987 14.373 3.17098 13.7369 3.34447L6.13685 5.41721C5.70178 5.53586 5.39996 5.93102 5.39996 6.38197L5.39996 10.818Z" fill="currentColor"/>
<path d="M7.01605 10.8C7.01605 11.3523 6.56834 11.8 6.01605 11.8H3.25555C3.10274 11.8 2.95597 11.736 2.85144 11.6245V11.6245C1.25751 9.9249 1.25087 7.26348 2.85326 5.57185V5.57185C2.95718 5.46215 3.10164 5.4 3.25275 5.4L6.01605 5.4C6.56834 5.4 7.01605 5.84772 7.01605 6.4L7.01605 8.58402V10.8Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.01605 9.80002V7.4H3.96888C3.54859 8.13534 3.54744 9.0554 3.9729 9.80002H5.01605ZM6.01605 11.8C6.56834 11.8 7.01605 11.3523 7.01605 10.8L7.01605 6.4C7.01605 5.84772 6.56834 5.4 6.01605 5.4L3.25275 5.4C3.10164 5.4 2.95718 5.46215 2.85326 5.57185C1.25087 7.26348 1.25751 9.9249 2.85144 11.6245C2.95597 11.736 3.10274 11.8 3.25555 11.8H6.01605Z" fill="currentColor"/>
<path d="M3.90163 11.5056C4.1276 10.6198 4.9254 10 5.83956 10H6.42422C7.7298 10 8.68532 11.2306 8.36187 12.4955L7.59473 15.4955C7.36836 16.3807 6.57081 17 5.65708 17H3.78713C3.13458 17 2.65686 16.3851 2.81816 15.7528L3.90163 11.5056Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.42422 12H5.83956L5.07426 15H5.65708L6.42422 12ZM5.83956 10C4.9254 10 4.1276 10.6198 3.90163 11.5056L2.81816 15.7528C2.65686 16.3851 3.13458 17 3.78713 17H5.65708C6.57081 17 7.36836 16.3807 7.59473 15.4955L8.36187 12.4955C8.68532 11.2306 7.7298 10 6.42422 10H5.83956Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.0319 4.44521C19.3383 4.90472 19.2142 5.5256 18.7547 5.83199L17.2548 6.8321C16.7953 7.13849 16.1744 7.01437 15.868 6.55486C15.5616 6.09536 15.6857 5.47448 16.1452 5.16809L17.6451 4.16798C18.1046 3.86159 18.7255 3.98571 19.0319 4.44521Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6999 8.60002C15.6999 8.04774 16.1476 7.60003 16.6999 7.60003L18.1998 7.60003C18.752 7.60003 19.1998 8.04775 19.1998 8.60004C19.1998 9.15232 18.752 9.60003 18.1998 9.60003L16.6999 9.60003C16.1476 9.60003 15.6999 9.15231 15.6999 8.60002Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9341 10.5089C16.2893 10.086 16.9201 10.0311 17.343 10.3863L18.7235 11.5457C19.1464 11.9009 19.2013 12.5316 18.8462 12.9546C18.491 13.3775 17.8602 13.4324 17.4373 13.0772L16.0568 11.9178C15.6339 11.5626 15.579 10.9318 15.9341 10.5089Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.39996 4.88197V9.31803L14 11.3908L14 2.80924L6.39996 4.88197ZM5.39996 9.31803C5.39996 9.76898 5.70178 10.1641 6.13685 10.2828L13.7369 12.3555C14.373 12.529 15 12.0501 15 11.3908V2.80924C15 2.14987 14.373 1.67098 13.7369 1.84447L6.13685 3.91721C5.70178 4.03586 5.39996 4.43102 5.39996 4.88197L5.39996 9.31803Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.45615 9.30002L5.5 9.30002L5.5 4.9H3.45342C2.38628 6.15981 2.38715 8.02833 3.45615 9.30002ZM5.5 10.3C6.05228 10.3 6.5 9.8523 6.5 9.30002L6.5 4.9C6.5 4.34772 6.05228 3.9 5.5 3.9H3.25275C3.10164 3.9 2.95718 3.96215 2.85326 4.07185C1.25087 5.76348 1.25751 8.4249 2.85144 10.1245C2.95597 10.236 3.10274 10.3 3.25555 10.3H5.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.26894 10.8694L4.75817 10.5904L3.78077 14.5L6.4174 14.5L7.26894 10.8694ZM4.8686 9.59651C4.37113 9.54123 3.90942 9.86227 3.78802 10.3479L2.81062 14.2575C2.65284 14.8886 3.13019 15.5 3.78077 15.5H6.4174C6.88171 15.5 7.28495 15.1804 7.39098 14.7283L8.24252 11.0977C8.37945 10.5139 7.97535 9.9417 7.37938 9.87548L4.8686 9.59651Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.616 3.2226C18.7692 3.45235 18.7071 3.76279 18.4773 3.91598L16.9774 4.9161C16.7477 5.06929 16.4373 5.00723 16.2841 4.77748C16.1309 4.54773 16.1929 4.23729 16.4227 4.08409L17.9226 3.08398C18.1523 2.93078 18.4628 2.99285 18.616 3.2226Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.2 7.10003C16.2 6.82389 16.4238 6.60003 16.7 6.60003L18.1999 6.60004C18.476 6.60004 18.6999 6.8239 18.6999 7.10004C18.6999 7.37618 18.476 7.60004 18.1999 7.60004L16.7 7.60003C16.4238 7.60003 16.2 7.37617 16.2 7.10003Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.3171 9.33046C16.4947 9.119 16.8101 9.09155 17.0216 9.26914L18.402 10.4285C18.6135 10.6061 18.6409 10.9215 18.4634 11.133C18.2858 11.3444 17.9704 11.3719 17.7589 11.1943L16.3784 10.0349C16.167 9.85731 16.1395 9.54192 16.3171 9.33046Z" fill="black"/>
</svg>
`;

const Menu = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 9.19995C2.5 8.64767 2.94772 8.19995 3.5 8.19995H13.8077C14.36 8.19995 14.8077 8.64767 14.8077 9.19995C14.8077 9.75224 14.36 10.2 13.8077 10.2H3.5C2.94772 10.2 2.5 9.75224 2.5 9.19995Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5.19995C2.5 4.64767 2.94772 4.19995 3.5 4.19995H17.5C18.0523 4.19995 18.5 4.64767 18.5 5.19995C18.5 5.75224 18.0523 6.19995 17.5 6.19995H3.5C2.94772 6.19995 2.5 5.75224 2.5 5.19995Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 13.2C2.5 12.6477 2.94772 12.2 3.5 12.2H17.5C18.0523 12.2 18.5 12.6477 18.5 13.2C18.5 13.7522 18.0523 14.2 17.5 14.2H3.5C2.94772 14.2 2.5 13.7522 2.5 13.2Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 17.2C2.5 16.6477 2.94772 16.2 3.5 16.2H13.8077C14.36 16.2 14.8077 16.6477 14.8077 17.2C14.8077 17.7522 14.36 18.2 13.8077 18.2H3.5C2.94772 18.2 2.5 17.7522 2.5 17.2Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 8.5C2 8.22386 2.22386 8 2.5 8H13.8077C14.0838 8 14.3077 8.22386 14.3077 8.5C14.3077 8.77614 14.0838 9 13.8077 9H2.5C2.22386 9 2 8.77614 2 8.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 4.22386 2.22386 4 2.5 4H17.5C17.7761 4 18 4.22386 18 4.5C18 4.77614 17.7761 5 17.5 5H2.5C2.22386 5 2 4.77614 2 4.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 12.5C2 12.2239 2.22386 12 2.5 12H17.5C17.7761 12 18 12.2239 18 12.5C18 12.7761 17.7761 13 17.5 13H2.5C2.22386 13 2 12.7761 2 12.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 16.5C2 16.2239 2.22386 16 2.5 16H13.8077C14.0838 16 14.3077 16.2239 14.3077 16.5C14.3077 16.7761 14.0838 17 13.8077 17H2.5C2.22386 17 2 16.7761 2 16.5Z" fill="black"/>
</svg>
`;

const Microphone = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.5C10.1193 2.5 9 3.61929 9 5V9C9 10.3807 10.1193 11.5 11.5 11.5C12.8807 11.5 14 10.3807 14 9V5C14 3.61929 12.8807 2.5 11.5 2.5ZM7 18C7 18.7917 8.66602 19 11.5 19C14.334 19 16 18.7917 16 18C16 17.3102 14.7355 17.0633 12.5357 17.0112V15.4228C15.3326 15.0011 17.5 12.9009 17.5 10.3V8.5C17.5 7.94772 17.0523 7.5 16.5 7.5C15.9477 7.5 15.5 7.94772 15.5 8.5V10.3C15.5 12.0249 13.744 13.5 11.5 13.5C9.25601 13.5 7.5 12.0249 7.5 10.3V8.5C7.5 7.94772 7.05228 7.5 6.5 7.5C5.94772 7.5 5.5 7.94772 5.5 8.5V10.3C5.5 12.923 7.70437 15.0368 10.5357 15.4332V17.0095C8.29194 17.058 7 17.3028 7 18Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 4.25C7.75 3.00736 8.75736 2 10 2V2C11.2426 2 12.25 3.00736 12.25 4.25V7.75C12.25 8.99264 11.2426 10 10 10V10C8.75736 10 7.75 8.99264 7.75 7.75V4.25Z" fill="black"/>
<path d="M10 17C7.51962 17 6 16.7829 6 16C6 15.2171 7.51962 15 10 15C12.4804 15 14 15.2171 14 16C14 16.7829 12.4804 17 10 17Z" fill="black"/>
<path d="M9.5 12.5L10.5 12.5V16H9.5L9.5 12.5Z" fill="black"/>
<path d="M14 7.5C14 7.22386 14.2239 7 14.5 7C14.7761 7 15 7.22386 15 7.5V9.15C15 11.5713 12.7456 13.5 10 13.5C7.25438 13.5 5 11.5713 5 9.15V7.5C5 7.22386 5.22386 7 5.5 7C5.77614 7 6 7.22386 6 7.5V9.15C6 10.9813 7.77506 12.5 10 12.5C12.2249 12.5 14 10.9813 14 9.15V7.5Z" fill="black"/>
</svg>
`;

const Microphone2 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1232_1629)">
<circle cx="11.502" cy="5.58168" r="3" transform="rotate(38.27 11.502 5.58168)" fill="currentColor" stroke="currentColor" stroke-width="2"/>
<path d="M8.38333 6.30569L3.82094 12.8962" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M11.5237 8.78317L6.17623 14.7543" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M3.82094 12.8962L6.17624 14.7543" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<path d="M4.53907 14.4638C4.53907 14.4638 3.50509 15.7918 3.38071 16.4638C3.23745 17.2378 3.51628 17.7507 3.89504 18.0495C4.27379 18.3483 5.10633 18.438 5.88833 18.3483C8.02223 18.1036 9.31112 14.9111 11.2388 13.9638C12.7258 13.2331 12.6234 13.3321 14.2388 12.9638C15.6116 12.6507 16.9366 12.4165 16.9366 12.4165" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
<rect x="9.15289" y="7.06152" width="2" height="7" transform="rotate(38.27 9.15289 7.06152)" fill="currentColor"/>
<circle cx="10.1153" cy="4.35623" r="3.15" transform="rotate(38.27 10.1153 4.35623)" stroke="black"/>
<path d="M2.44701 11.8123L6.68419 5.75082" stroke="black" stroke-linecap="round"/>
<path d="M9.76781 8.1835C7.67948 10.5154 6.89064 11.3385 4.80232 13.6704C6.77736 11.465 8.19487 9.94696 10.1094 7.81614C10.1857 7.73125 10.2628 7.64539 10.3407 7.55847" stroke="black" stroke-linecap="round"/>
<path d="M2.44702 11.8123L4.80232 13.6704" stroke="black" stroke-linecap="round"/>
<path d="M8.08241 2.24713L8.90343 3.49724C9.49731 4.40152 10.3685 5.08877 11.3861 5.45586L12.793 5.96334" stroke="black"/>
<path d="M3.60913 12.8778C3.60913 12.8778 2.13117 14.7079 2.00679 15.3799C1.86354 16.1539 2.14237 16.6668 2.52112 16.9656C2.89988 17.2644 3.73242 17.3541 4.51442 17.2644C6.64831 17.0197 7.9372 13.8272 9.86491 12.8799C11.3519 12.1492 11.2495 12.2483 12.8649 11.8799C14.2377 11.5669 15.5627 11.3326 15.5627 11.3326" stroke="black" stroke-linecap="round"/>
</g>
<defs>
<clipPath id="clip0_1232_1629">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Minus = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M6.5 12.5C5.67157 12.5 5 11.8284 5 11C5 10.1716 5.67157 9.5 6.5 9.5H16.5C17.3284 9.5 18 10.1716 18 11C18 11.8284 17.3284 12.5 16.5 12.5H6.5Z" fill="currentColor"/>
</g>
<path d="M5 10.5C4.72386 10.5 4.5 10.2761 4.5 10C4.5 9.72386 4.72386 9.5 5 9.5H15C15.2761 9.5 15.5 9.72386 15.5 10C15.5 10.2761 15.2761 10.5 15 10.5H5Z" fill="black"/>
</svg>
`;

const Monitor = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M8.5315 18.75C8.51094 18.6701 8.5 18.5863 8.5 18.5V16H3.5C2.67157 16 2 15.3284 2 14.5V4.5C2 3.67157 2.67157 3 3.5 3H18.5C19.3284 3 20 3.67157 20 4.5V14.5C20 15.3284 19.3284 16 18.5 16H13.5V18.5C13.5 18.5863 13.4891 18.6701 13.4685 18.75H15.5C15.7761 18.75 16 18.9739 16 19.25C16 19.5261 15.7761 19.75 15.5 19.75H6.5C6.22386 19.75 6 19.5261 6 19.25C6 18.9739 6.22386 18.75 6.5 18.75H8.5315Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 1.5H2.5C1.39543 1.5 0.5 2.39543 0.5 3.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H17.5C18.6046 15.5 19.5 14.6046 19.5 13.5V3.5C19.5 2.39543 18.6046 1.5 17.5 1.5ZM1.5 3.5C1.5 2.94772 1.94772 2.5 2.5 2.5H17.5C18.0523 2.5 18.5 2.94772 18.5 3.5V13.5C18.5 14.0523 18.0523 14.5 17.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V3.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 14.5H8.5C7.94772 14.5 7.5 14.9477 7.5 15.5V18C7.5 18.5523 7.94772 19 8.5 19H11.5C12.0523 19 12.5 18.5523 12.5 18V15.5C12.5 14.9477 12.0523 14.5 11.5 14.5ZM8.5 18V15.5H11.5V18H8.5Z" fill="black"/>
<path d="M5.5 19C5.22386 19 5 18.7761 5 18.5C5 18.2239 5.22386 18 5.5 18H14.5C14.7761 18 15 18.2239 15 18.5C15 18.7761 14.7761 19 14.5 19H5.5Z" fill="black"/>
<path d="M2.5 3H17.5C17.7761 3 18 3.22386 18 3.5V12.5C18 12.7761 17.7761 13 17.5 13H2.5C2.22386 13 2 12.7761 2 12.5V3.5C2 3.22386 2.22386 3 2.5 3Z" fill="black"/>
</svg>
`;

const MonitorEye = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1213_2201)">
<g opacity="0.8">
<path d="M18.2816 3.75H8.5C7.67157 3.75 7 4.42157 7 5.25V12.4811C7 13.3096 7.67157 13.9811 8.5 13.9811H13.3908H18.2816C19.11 13.9811 19.7816 13.3096 19.7816 12.4811V5.25C19.7816 4.42157 19.11 3.75 18.2816 3.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 5.25C6 3.86928 7.11929 2.75 8.5 2.75H18.2816C19.6623 2.75 20.7816 3.86929 20.7816 5.25V12.4811C20.7816 13.8618 19.6623 14.9811 18.2816 14.9811H14.3908V16.8214C14.3908 17.3737 13.9431 17.8214 13.3908 17.8214C12.8385 17.8214 12.3908 17.3737 12.3908 16.8214V14.9811H8.5C7.11929 14.9811 6 13.8618 6 12.4811V5.25ZM8.5 4.75C8.22386 4.75 8 4.97386 8 5.25V12.4811C8 12.7573 8.22386 12.9811 8.5 12.9811H18.2816C18.5577 12.9811 18.7816 12.7573 18.7816 12.4811V5.25C18.7816 4.97386 18.5577 4.75 18.2816 4.75H8.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.19543 17.3951C9.19543 16.8429 9.64315 16.3951 10.1954 16.3951H16.5862C17.1385 16.3951 17.5862 16.8429 17.5862 17.3951C17.5862 17.9474 17.1385 18.3951 16.5862 18.3951H10.1954C9.64315 18.3951 9.19543 17.9474 9.19543 17.3951Z" fill="currentColor"/>
<path d="M6.91748 10.2191C9.08105 10.2191 10.835 11.2056 10.835 12.4226C10.835 13.6396 9.08105 14.6262 6.91748 14.6262C4.75392 14.6262 3 13.6396 3 12.4226C3 11.2056 4.75392 10.2191 6.91748 10.2191Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.63766 13.1092C5.17091 13.4092 5.97491 13.6262 6.91748 13.6262C7.86005 13.6262 8.66405 13.4092 9.1973 13.1092C9.76189 12.7916 9.83496 12.5094 9.83496 12.4226C9.83496 12.3359 9.76189 12.0536 9.1973 11.736C8.66405 11.4361 7.86005 11.2191 6.91748 11.2191C5.97491 11.2191 5.17091 11.4361 4.63766 11.736C4.07308 12.0536 4 12.3359 4 12.4226C4 12.5094 4.07308 12.7916 4.63766 13.1092ZM3.65714 14.8524C2.80388 14.3724 2 13.5529 2 12.4226C2 11.2924 2.80388 10.4729 3.65714 9.99289C4.54175 9.4953 5.69648 9.21906 6.91748 9.21906C8.13848 9.21906 9.29321 9.4953 10.1778 9.99289C11.0311 10.4729 11.835 11.2924 11.835 12.4226C11.835 13.5529 11.0311 14.3724 10.1778 14.8524C9.29321 15.35 8.13848 15.6262 6.91748 15.6262C5.69648 15.6262 4.54175 15.35 3.65714 14.8524Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.91746 7.84998C7.41451 7.84998 7.81746 8.25292 7.81746 8.74998L7.81746 10.219C7.81746 10.7161 7.41451 11.119 6.91746 11.119C6.4204 11.119 6.01746 10.7161 6.01746 10.219L6.01746 8.74998C6.01746 8.25292 6.4204 7.84998 6.91746 7.84998Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.05272 8.11238C9.54013 8.20986 9.85622 8.684 9.75874 9.1714L9.5139 10.3956C9.41642 10.883 8.94227 11.1991 8.45487 11.1016C7.96747 11.0042 7.65137 10.53 7.74885 10.0426L7.99369 8.8184C8.09118 8.33099 8.56532 8.0149 9.05272 8.11238Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.78224 8.11238C4.29484 8.20986 3.97874 8.684 4.07622 9.1714L4.32106 10.3956C4.41854 10.883 4.89269 11.1991 5.38009 11.1016C5.86749 11.0042 6.18359 10.53 6.08611 10.0426L5.84127 8.8184C5.74379 8.33099 5.26964 8.0149 4.78224 8.11238Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.53693 8.95762C2.11071 9.21335 1.9725 9.76618 2.22824 10.1924L2.96276 11.4166C3.2185 11.8428 3.77133 11.981 4.19755 11.7253C4.62378 11.4696 4.76198 10.9167 4.50625 10.4905L3.77172 9.26631C3.51599 8.84009 2.96316 8.70188 2.53693 8.95762Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2979 8.95762C11.7241 9.21335 11.8623 9.76618 11.6066 10.1924L10.8721 11.4166C10.6163 11.8428 10.0635 11.981 9.63729 11.7253C9.21106 11.4696 9.07285 10.9167 9.32859 10.4905L10.0631 9.26631C10.3188 8.84009 10.8717 8.70188 11.2979 8.95762Z" fill="currentColor"/>
<path d="M6.91504 11.63C7.32925 11.63 7.66504 11.9658 7.66504 12.38C7.66504 12.7942 7.32925 13.13 6.91504 13.13C6.50083 13.13 6.16504 12.7942 6.16504 12.38C6.16504 11.9658 6.50083 11.63 6.91504 11.63Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.16504 12.38C7.16504 12.2419 7.05311 12.13 6.91504 12.13C6.77697 12.13 6.66504 12.2419 6.66504 12.38C6.66504 12.5181 6.77697 12.63 6.91504 12.63C7.05311 12.63 7.16504 12.5181 7.16504 12.38ZM6.91504 14.13C5.94854 14.13 5.16504 13.3465 5.16504 12.38C5.16504 11.4135 5.94854 10.63 6.91504 10.63C7.88154 10.63 8.66504 11.4135 8.66504 12.38C8.66504 13.3465 7.88154 14.13 6.91504 14.13Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 4.5C5 3.39543 5.89543 2.5 7 2.5H16.7816C17.8861 2.5 18.7816 3.39543 18.7816 4.5V11.7311C18.7816 12.8357 17.8861 13.7311 16.7816 13.7311H12.3908V16.0714C12.3908 16.3476 12.1669 16.5714 11.8908 16.5714C11.6146 16.5714 11.3908 16.3476 11.3908 16.0714V13.7311H10C9.72386 13.7311 9.5 13.5073 9.5 13.2311C9.5 12.955 9.72386 12.7311 10 12.7311H16.7816C17.3338 12.7311 17.7816 12.2834 17.7816 11.7311V4.5C17.7816 3.94772 17.3338 3.5 16.7816 3.5H7C6.44772 3.5 6 3.94772 6 4.5V6.75842C6 7.03456 5.77614 7.25842 5.5 7.25842C5.22386 7.25842 5 7.03456 5 6.75842V4.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.19543 16.6451C8.19543 16.369 8.41929 16.1451 8.69543 16.1451H15.0862C15.3624 16.1451 15.5862 16.369 15.5862 16.6451C15.5862 16.9213 15.3624 17.1451 15.0862 17.1451H8.69543C8.41929 17.1451 8.19543 16.9213 8.19543 16.6451Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.89253 12.795C3.51362 13.1444 4.40531 13.3762 5.41748 13.3762C6.42965 13.3762 7.32134 13.1444 7.94243 12.795C8.57918 12.4368 8.83496 12.0203 8.83496 11.6726C8.83496 11.325 8.57918 10.9084 7.94243 10.5503C7.32134 10.2009 6.42965 9.96906 5.41748 9.96906C4.40531 9.96906 3.51362 10.2009 2.89253 10.5503C2.25578 10.9084 2 11.325 2 11.6726C2 12.0203 2.25578 12.4368 2.89253 12.795ZM2.40227 13.6666C1.62118 13.2272 1 12.542 1 11.6726C1 10.8033 1.62118 10.118 2.40227 9.67868C3.19904 9.2305 4.26609 8.96906 5.41748 8.96906C6.56887 8.96906 7.63592 9.2305 8.43269 9.67868C9.21378 10.118 9.83496 10.8033 9.83496 11.6726C9.83496 12.542 9.21378 13.2272 8.43269 13.6666C7.63592 14.1148 6.56887 14.3762 5.41748 14.3762C4.26609 14.3762 3.19904 14.1148 2.40227 13.6666Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.41748 7.5C5.69362 7.5 5.91748 7.72386 5.91748 8L5.91748 9.46906C5.91748 9.7452 5.69362 9.96906 5.41748 9.96906C5.14134 9.96906 4.91748 9.7452 4.91748 9.46906L4.91748 8C4.91748 7.72386 5.14134 7.5 5.41748 7.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.47422 7.75456C7.745 7.80871 7.92061 8.07213 7.86645 8.34291L7.62161 9.56712C7.56746 9.8379 7.30404 10.0135 7.03326 9.95935C6.76248 9.90519 6.58688 9.64178 6.64103 9.371L6.88587 8.14679C6.94003 7.87601 7.20344 7.7004 7.47422 7.75456Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.36062 7.75456C3.08984 7.80871 2.91423 8.07213 2.96838 8.34291L3.21323 9.56712C3.26738 9.8379 3.5308 10.0135 3.80157 9.95935C4.07235 9.90519 4.24796 9.64178 4.19381 9.371L3.94896 8.14679C3.89481 7.87601 3.6314 7.7004 3.36062 7.75456Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.24265 8.5507C1.00586 8.69277 0.929073 8.9999 1.07115 9.23669L1.80568 10.4609C1.94775 10.6977 2.25488 10.7745 2.49167 10.6324C2.72846 10.4903 2.80524 10.1832 2.66317 9.94641L1.92864 8.7222C1.78657 8.48541 1.47944 8.40863 1.24265 8.5507Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.59207 8.55058C9.82886 8.69265 9.90564 8.99978 9.76357 9.23657L9.02904 10.4608C8.88697 10.6976 8.57984 10.7744 8.34305 10.6323C8.10626 10.4902 8.02947 10.1831 8.17155 9.94629L8.90608 8.72208C9.04815 8.48529 9.35528 8.4085 9.59207 8.55058Z" fill="black"/>
<path d="M5.42004 10.4C6.1104 10.4 6.67004 10.9597 6.67004 11.65C6.67004 12.3404 6.1104 12.9 5.42004 12.9C4.72969 12.9 4.17004 12.3404 4.17004 11.65C4.17004 10.9597 4.72969 10.4 5.42004 10.4Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.67004 11.65C4.67004 12.0642 5.00583 12.4 5.42004 12.4C5.83426 12.4 6.17004 12.0642 6.17004 11.65C6.17004 11.2358 5.83426 10.9 5.42004 10.9C5.00583 10.9 4.67004 11.2358 4.67004 11.65ZM5.42004 13.4C4.45355 13.4 3.67004 12.6165 3.67004 11.65C3.67004 10.6835 4.45355 9.90002 5.42004 9.90002C6.38654 9.90002 7.17004 10.6835 7.17004 11.65C7.17004 12.6165 6.38654 13.4 5.42004 13.4Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1213_2201">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const MonitorLoop = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1213_2228)">
<g opacity="0.8">
<path d="M17.2479 3.75H5.5C4.67157 3.75 4 4.42157 4 5.25V9.07565V12.9013C4 13.7297 4.67157 14.4013 5.5 14.4013H11.374H17.2479C18.0764 14.4013 18.7479 13.7297 18.7479 12.9013V5.25C18.7479 4.42157 18.0764 3.75 17.2479 3.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 5.25C3 3.86928 4.11929 2.75 5.5 2.75H17.2479C18.6287 2.75 19.7479 3.86929 19.7479 5.25V12.9013C19.7479 14.282 18.6287 15.4013 17.2479 15.4013H12.374V17.6786C12.374 18.2309 11.9263 18.6786 11.374 18.6786C10.8217 18.6786 10.374 18.2309 10.374 17.6786V15.4013H5.5C4.11929 15.4013 3 14.282 3 12.9013V5.25ZM5.5 4.75C5.22386 4.75 5 4.97386 5 5.25V12.9013C5 13.1774 5.22386 13.4013 5.5 13.4013H17.2479C17.5241 13.4013 17.7479 13.1774 17.7479 12.9013V5.25C17.7479 4.97386 17.5241 4.75 17.2479 4.75H5.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.68701 18.3405C6.68701 17.7882 7.13473 17.3405 7.68701 17.3405H15.061C15.6133 17.3405 16.061 17.7882 16.061 18.3405C16.061 18.8927 15.6133 19.3405 15.061 19.3405H7.68701C7.13473 19.3405 6.68701 18.8927 6.68701 18.3405Z" fill="currentColor"/>
<path d="M8.72697 13.5662C7.89942 15.1233 5.96628 15.7147 4.40919 14.8871C2.85211 14.0596 2.2607 12.1264 3.08825 10.5694C3.91581 9.01227 5.84894 8.42086 7.40603 9.24842C8.96312 10.076 9.55452 12.0091 8.72697 13.5662Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.93675 10.1315C5.86734 9.56314 4.53967 9.96931 3.97131 11.0387C3.40295 12.1081 3.80913 13.4358 4.87853 14.0041C5.94793 14.5725 7.2756 14.1663 7.84396 13.0969C8.41232 12.0275 8.00615 10.6999 6.93675 10.1315ZM2.20525 10.1001C3.29199 8.05532 5.83059 7.27869 7.87536 8.36543C9.92014 9.45218 10.6968 11.9908 9.61003 14.0355C8.68502 15.776 6.70815 16.5977 4.87926 16.1336L3.20242 19.2886C2.94322 19.7763 2.33776 19.9616 1.85007 19.7024C1.36239 19.4432 1.17716 18.8377 1.43635 18.35L3.11319 15.1949C1.70524 13.9388 1.28024 11.8406 2.20525 10.1001Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 3.39543 2.89543 2.5 4 2.5H15.7479C16.8525 2.5 17.7479 3.39543 17.7479 4.5V12.1513C17.7479 13.2559 16.8525 14.1513 15.7479 14.1513H10.374V16.9286C10.374 17.2047 10.1501 17.4286 9.87397 17.4286C9.59783 17.4286 9.37397 17.2047 9.37397 16.9286V14.1513H8.5C8.22386 14.1513 8 13.9274 8 13.6513C8 13.3751 8.22386 13.1513 8.5 13.1513H15.7479C16.3002 13.1513 16.7479 12.7036 16.7479 12.1513V4.5C16.7479 3.94771 16.3002 3.5 15.7479 3.5H4C3.44772 3.5 3 3.94772 3 4.5V7C3 7.27614 2.77614 7.5 2.5 7.5C2.22386 7.5 2 7.27614 2 7V4.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.68701 17.5905C5.68701 17.3143 5.91087 17.0905 6.18701 17.0905H13.561C13.8371 17.0905 14.061 17.3143 14.061 17.5905C14.061 17.8666 13.8371 18.0905 13.561 18.0905H6.18701C5.91087 18.0905 5.68701 17.8666 5.68701 17.5905Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.67145 8.93996C4.3582 8.242 2.7278 8.74079 2.02985 10.054C1.33189 11.3673 1.83068 12.9977 3.14392 13.6956C4.45717 14.3936 6.08757 13.8948 6.78553 12.5816C7.48348 11.2683 6.98469 9.63791 5.67145 8.93996ZM1.14681 9.58473C2.10396 7.7838 4.33983 7.09978 6.14076 8.05692C7.94169 9.01407 8.62571 11.2499 7.66856 13.0509C6.791 14.7021 4.83852 15.4143 3.13188 14.7837L1.26095 18.304C1.13135 18.5478 0.828618 18.6404 0.584775 18.5108C0.340932 18.3812 0.248317 18.0785 0.377913 17.8347L2.24885 14.3144C0.77128 13.2527 0.269248 11.2359 1.14681 9.58473Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1213_2228">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Monitor2 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 4.5C2 3.67157 2.67157 3 3.5 3H18.5C19.3284 3 20 3.67157 20 4.5V14.5C20 15.3284 19.3284 16 18.5 16H13.5V18.5C13.5 18.5863 13.4891 18.6701 13.4685 18.75H15.5C15.7761 18.75 16 18.9739 16 19.25C16 19.5261 15.7761 19.75 15.5 19.75H6.5C6.22386 19.75 6 19.5261 6 19.25C6 18.9739 6.22386 18.75 6.5 18.75H8.5315C8.51094 18.6701 8.5 18.5863 8.5 18.5V16H3.5C2.67157 16 2 15.3284 2 14.5V4.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 1.5H2.5C1.39543 1.5 0.5 2.39543 0.5 3.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H17.5C18.6046 15.5 19.5 14.6046 19.5 13.5V3.5C19.5 2.39543 18.6046 1.5 17.5 1.5ZM1.5 3.5C1.5 2.94772 1.94772 2.5 2.5 2.5H17.5C18.0523 2.5 18.5 2.94772 18.5 3.5V13.5C18.5 14.0523 18.0523 14.5 17.5 14.5H2.5C1.94772 14.5 1.5 14.0523 1.5 13.5V3.5Z" fill="black"/>
<path d="M10 14C9.58579 14 9.25 13.6642 9.25 13.25C9.25 12.8358 9.58579 12.5 10 12.5C10.4142 12.5 10.75 12.8358 10.75 13.25C10.75 13.6642 10.4142 14 10 14Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 14.5H8.5C7.94772 14.5 7.5 14.9477 7.5 15.5V18C7.5 18.5523 7.94772 19 8.5 19H11.5C12.0523 19 12.5 18.5523 12.5 18V15.5C12.5 14.9477 12.0523 14.5 11.5 14.5ZM8.5 18V15.5H11.5V18H8.5Z" fill="black"/>
<path d="M5.5 19C5.22386 19 5 18.7761 5 18.5C5 18.2239 5.22386 18 5.5 18H14.5C14.7761 18 15 18.2239 15 18.5C15 18.7761 14.7761 19 14.5 19H5.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 12H1V11H19V12Z" fill="black"/>
</svg>
`;

const Moon = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M12.6123 3.47407C11.1462 4.11939 10.0652 5.42476 9.7254 7.02351C9.15001 9.73052 10.8735 12.3901 13.5744 12.9642C15.7487 13.4263 17.9491 12.3945 19.0014 10.4699C19.2458 10.0229 19.9239 10.185 19.9398 10.6941C19.9612 11.3759 19.9002 12.0618 19.7559 12.7406C18.7782 17.3406 14.2633 20.2788 9.67123 19.3027C5.07918 18.3266 2.14968 13.8061 3.12743 9.20615C4.047 4.87987 8.11731 1.98618 12.4718 2.52015C12.9761 2.582 13.0774 3.26938 12.6123 3.47407Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.27541 6.02351C8.61523 4.42476 9.69616 3.11939 11.1623 2.47407C11.6274 2.26938 11.5261 1.582 11.0218 1.52015C6.66731 0.98618 2.59701 3.87987 1.67743 8.20615C0.69968 12.8061 3.62918 17.3266 8.22123 18.3027C12.8133 19.2788 17.3282 16.3406 18.3059 11.7406C18.4502 11.0618 18.5112 10.3759 18.4899 9.69414C18.4739 9.18497 17.7958 9.02293 17.5514 9.4699C16.4991 11.3945 14.2987 12.4263 12.1244 11.9642C9.42352 11.3901 7.70001 8.73052 8.27541 6.02351ZM2.65558 8.41406C3.35102 5.14227 6.0879 2.79892 9.27325 2.49127C8.28446 3.33513 7.57862 4.49189 7.29726 5.81559C6.60713 9.0624 8.67497 12.2533 11.9165 12.9423C13.9292 13.3701 15.9599 12.7316 17.3629 11.3577C17.3519 11.4161 17.3402 11.4744 17.3278 11.5327C16.4648 15.5929 12.4806 18.1857 8.42914 17.3246C4.37773 16.4634 1.79256 12.4742 2.65558 8.41406Z" fill="black"/>
</svg>
`;

const Motorcycle = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3215 7.38391C14.8993 8.08318 16 9.66305 16 11.5V14C16 15.1046 15.1046 16 14 16H13.4146C13.4699 16.1564 13.5 16.3247 13.5 16.5V18.5C13.5 19.3284 12.8284 20 12 20H11C10.1716 20 9.5 19.3284 9.5 18.5V16.5C9.5 16.3247 9.53008 16.1564 9.58535 16H9C7.89543 16 7 15.1046 7 14L7 11.5C7 9.66305 8.10067 8.08318 9.67849 7.38391C8.96207 6.83567 8.5 5.9718 8.5 5C8.5 3.34315 9.84315 2 11.5 2C13.1569 2 14.5 3.34315 14.5 5C14.5 5.9718 14.0379 6.83567 13.3215 7.38391Z" fill="currentColor"/>
</g>
<path d="M12.75 12C12.75 12.5523 12.3023 13 11.75 13C11.1977 13 10.75 12.5523 10.75 12C10.75 11.4477 11.1977 11 11.75 11C12.3023 11 12.75 11.4477 12.75 12Z" fill="black"/>
<path d="M9.25 12C9.25 12.5523 8.80228 13 8.25 13C7.69772 13 7.25 12.5523 7.25 12C7.25 11.4477 7.69772 11 8.25 11C8.80228 11 9.25 11.4477 9.25 12Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 7C11.6569 7 13 5.65685 13 4C13 2.34315 11.6569 1 10 1C8.34315 1 7 2.34315 7 4C7 5.65685 8.34315 7 10 7ZM10 2C11.1046 2 12 2.89543 12 4C12 5.10457 11.1046 6 10 6C8.89543 6 8 5.10457 8 4C8 2.89543 8.89543 2 10 2Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 14H9.5C8.67157 14 8 14.6716 8 15.5V17.5C8 18.3284 8.67157 19 9.5 19H10.5C11.3284 19 12 18.3284 12 17.5V15.5C12 14.6716 11.3284 14 10.5 14ZM9 15.5C9 15.2239 9.22386 15 9.5 15H10.5C10.7761 15 11 15.2239 11 15.5V17.5C11 17.7761 10.7761 18 10.5 18H9.5C9.22386 18 9 17.7761 9 17.5V15.5Z" fill="black"/>
<path d="M15.5 3.75C15.0858 3.75 14.75 3.41421 14.75 3C14.75 2.58579 15.0858 2.25 15.5 2.25H17.5C17.9142 2.25 18.25 2.58579 18.25 3C18.25 3.41421 17.9142 3.75 17.5 3.75H15.5Z" fill="black"/>
<path d="M2.5 3.75C2.08579 3.75 1.75 3.41421 1.75 3C1.75 2.58579 2.08579 2.25 2.5 2.25H4.5C4.91421 2.25 5.25 2.58579 5.25 3C5.25 3.41421 4.91421 3.75 4.5 3.75H2.5Z" fill="black"/>
<path d="M4.10634 3.36382L4.40831 2.39368L8.10634 3.13621L7.80437 4.10635L4.10634 3.36382Z" fill="black"/>
<path d="M11.8937 3.13618L12.1956 4.10632L15.8937 3.36379L15.5917 2.39365L11.8937 3.13618Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 10.5C14.5 8.01472 12.4853 6 10 6C7.51472 6 5.5 8.01472 5.5 10.5V13C5.5 14.1046 6.39543 15 7.5 15H12.5C13.6046 15 14.5 14.1046 14.5 13V10.5ZM6.5 10.5C6.5 8.567 8.067 7 10 7C11.933 7 13.5 8.567 13.5 10.5V13C13.5 13.5523 13.0523 14 12.5 14H7.5C6.94772 14 6.5 13.5523 6.5 13V10.5Z" fill="black"/>
</svg>
`;

const MoveX = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_303_5004)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7064 6.34775C15.3428 5.81741 16.2886 5.90339 16.819 6.53981L20.1523 10.5398C20.6827 11.1762 20.5967 12.1221 19.9603 12.6524C19.3239 13.1828 18.378 13.0968 17.8477 12.4604L14.5143 8.46036C13.984 7.82395 14.07 6.8781 14.7064 6.34775Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7064 16.6524C14.07 16.1221 13.984 15.1762 14.5143 14.5398L17.8477 10.5398C18.378 9.90339 19.3239 9.81741 19.9603 10.3478C20.5967 10.8781 20.6827 11.8239 20.1523 12.4604L16.819 16.4604C16.2886 17.0968 15.3428 17.1828 14.7064 16.6524Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5 11.5C18.5 12.3284 17.8285 13 17 13L9.00004 13C8.17161 13 7.50004 12.3284 7.50004 11.5C7.50004 10.6716 8.17161 10 9.00004 10L17 10C17.8285 10 18.5 10.6716 18.5 11.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.29361 16.6524C8.6572 17.1827 7.71135 17.0967 7.181 16.4603L3.84767 12.4603C3.31733 11.8239 3.40331 10.8781 4.03973 10.3477C4.67614 9.81736 5.62199 9.90335 6.15234 10.5398L9.48567 14.5398C10.016 15.1762 9.93003 16.122 9.29361 16.6524Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.29361 6.34771C9.93003 6.87805 10.016 7.8239 9.48567 8.46031L6.15233 12.4603C5.62199 13.0967 4.67614 13.1827 4.03973 12.6524C3.40331 12.122 3.31732 11.1762 3.84767 10.5398L7.181 6.53976C7.71135 5.90335 8.6572 5.81736 9.29361 6.34771Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.49996 11.5001C5.49996 10.6717 6.17153 10.0001 6.99996 10.0001L15 10.0001C15.8284 10.0001 16.5 10.6717 16.5 11.5001C16.5 12.3285 15.8284 13.0001 15 13.0001L6.99996 13.0001C6.17153 13.0001 5.49996 12.3285 5.49996 11.5001Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3466 5.61588C13.5587 5.4391 13.874 5.46776 14.0508 5.6799L17.3841 9.6799C17.5609 9.89203 17.5322 10.2073 17.3201 10.3841C17.1079 10.5609 16.7927 10.5322 16.6159 10.3201L13.2826 6.32008C13.1058 6.10794 13.1344 5.79266 13.3466 5.61588Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3466 14.3841C13.1344 14.2073 13.1058 13.892 13.2826 13.6799L16.6159 9.6799C16.7927 9.46776 17.1079 9.4391 17.3201 9.61588C17.5322 9.79266 17.5609 10.1079 17.3841 10.3201L14.0508 14.3201C13.874 14.5322 13.5587 14.5609 13.3466 14.3841Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.50004 9.5L16.5 9.5C16.7762 9.5 17 9.72386 17 10C17 10.2761 16.7762 10.5 16.5 10.5L3.50004 10.5C3.2239 10.5 3.00004 10.2761 3.00004 10C3.00004 9.72386 3.2239 9.5 3.50004 9.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.65342 14.3841C6.44128 14.5609 6.126 14.5322 5.94922 14.3201L2.61589 10.3201C2.43911 10.108 2.46777 9.79268 2.67991 9.6159C2.89204 9.43912 3.20733 9.46778 3.38411 9.67992L6.71744 13.6799C6.89422 13.8921 6.86556 14.2073 6.65342 14.3841Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.65342 5.6159C6.86556 5.79268 6.89422 6.10797 6.71744 6.3201L3.38411 10.3201C3.20733 10.5322 2.89204 10.5609 2.67991 10.3841C2.46777 10.2073 2.4391 9.89206 2.61589 9.67992L5.94922 5.67992C6.126 5.46778 6.44128 5.43912 6.65342 5.6159Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.49995 10C4.49995 9.72386 4.72381 9.5 4.99995 9.5L13 9.5C13.2761 9.5 13.5 9.72386 13.5 10C13.5 10.2761 13.2761 10.5 13 10.5L4.99995 10.5C4.72381 10.5 4.49995 10.2761 4.49995 10Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_303_5004">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const MoveY = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.34767 8.29361C5.81732 7.6572 5.90331 6.71135 6.53972 6.181L10.5397 2.84767C11.1761 2.31733 12.122 2.40331 12.6523 3.03973C13.1827 3.67614 13.0967 4.62199 12.4603 5.15234L8.46028 8.48567C7.82386 9.01601 6.87801 8.93003 6.34767 8.29361Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6523 8.29361C16.122 8.93003 15.1761 9.01601 14.5397 8.48567L10.5397 5.15234C9.90331 4.62199 9.81732 3.67614 10.3477 3.03973C10.878 2.40331 11.8239 2.31733 12.4603 2.84767L16.4603 6.181C17.0967 6.71135 17.1827 7.6572 16.6523 8.29361Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 4.5C12.3284 4.5 13 5.17157 13 6V14C13 14.8284 12.3284 15.5 11.5 15.5C10.6716 15.5 10 14.8284 10 14V6C10 5.17157 10.6716 4.5 11.5 4.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6523 13.7065C17.1827 14.3429 17.0967 15.2888 16.4603 15.8191L12.4603 19.1525C11.8239 19.6828 10.878 19.5968 10.3477 18.9604C9.81732 18.324 9.90331 17.3781 10.5397 16.8478L14.5397 13.5145C15.1761 12.9841 16.122 13.0701 16.6523 13.7065Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.34767 13.7065C6.87801 13.0701 7.82386 12.9841 8.46028 13.5145L12.4603 16.8478C13.0967 17.3781 13.1827 18.324 12.6523 18.9604C12.122 19.5968 11.1761 19.6828 10.5397 19.1525L6.53972 15.8191C5.90331 15.2888 5.81732 14.3429 6.34767 13.7065Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 17.5001C10.6716 17.5001 10 16.8285 10 16.0001V8.00012C10 7.17169 10.6716 6.50012 11.5 6.50012C12.3284 6.50012 13 7.17169 13 8.00012V16.0001C13 16.8285 12.3284 17.5001 11.5 17.5001Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.61589 6.65345C5.43911 6.44132 5.46777 6.12603 5.67991 5.94925L9.67991 2.61592C9.89205 2.43914 10.2073 2.4678 10.3841 2.67994C10.5609 2.89207 10.5322 3.20736 10.3201 3.38414L6.32009 6.71747C6.10796 6.89425 5.79267 6.86559 5.61589 6.65345Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3841 6.65345C14.2073 6.86559 13.892 6.89425 13.6799 6.71747L9.67991 3.38414C9.46777 3.20736 9.43911 2.89207 9.61589 2.67994C9.79267 2.4678 10.108 2.43914 10.3201 2.61592L14.3201 5.94925C14.5322 6.12603 14.5609 6.44132 14.3841 6.65345Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 4.5C10.2761 4.5 10.5 4.72386 10.5 5V13C10.5 13.2761 10.2761 13.5 10 13.5C9.72386 13.5 9.5 13.2761 9.5 13V5C9.5 4.72386 9.72386 4.5 10 4.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.3841 13.3465C14.5609 13.5587 14.5322 13.874 14.3201 14.0507L10.3201 17.3841C10.108 17.5609 9.79268 17.5322 9.61589 17.3201C9.43911 17.1079 9.46777 16.7926 9.67991 16.6159L13.6799 13.2825C13.8921 13.1057 14.2073 13.1344 14.3841 13.3465Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.61589 13.3465C5.79268 13.1344 6.10796 13.1057 6.3201 13.2825L10.3201 16.6159C10.5322 16.7926 10.5609 17.1079 10.3841 17.3201C10.2073 17.5322 9.89205 17.5609 9.67991 17.3841L5.67991 14.0507C5.46777 13.874 5.43911 13.5587 5.61589 13.3465Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 17C9.72386 17 9.5 16.7761 9.5 16.5V3.5C9.5 3.22386 9.72386 3 10 3C10.2761 3 10.5 3.22386 10.5 3.5V16.5C10.5 16.7761 10.2761 17 10 17Z" fill="black"/>
</svg>
`;

const MusicNoteDouble = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 3.80989C8.25 3.29386 8.64265 2.86257 9.15642 2.81428L18.1564 1.96832C18.7431 1.91318 19.25 2.37468 19.25 2.96394V4V5.14519V16C19.25 17.3807 17.9069 18.5 16.25 18.5C14.5931 18.5 13.25 17.3807 13.25 16C13.25 14.6193 14.5931 13.5 16.25 13.5C16.6006 13.5 16.9372 13.5501 17.25 13.6423V6.24931L10.25 6.94382V17C10.25 18.3807 8.90685 19.5 7.25 19.5C5.59315 19.5 4.25 18.3807 4.25 17C4.25 15.6193 5.59315 14.5 7.25 14.5C7.60064 14.5 7.93722 14.5501 8.25 14.6423V6.03812V5V3.80989Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.1388 1.37578L8.13875 1.89638C7.35564 1.95462 6.75 2.60698 6.75 3.39225V4.12892C6.75038 4.1583 6.75058 4.17298 6.75115 4.18766C6.75173 4.20233 6.75268 4.21699 6.7546 4.24631C6.81943 5.0722 7.5415 5.68915 8.36739 5.62432L15.3674 5.07481C16.1479 5.01354 16.75 4.36231 16.75 3.57941V2.87165C16.7493 2.81599 16.7493 2.81597 16.7459 2.76046L16.7459 2.7604C16.6844 1.93426 15.9649 1.31434 15.1388 1.37578ZM7.75 4.12892V3.39225C7.75 3.1305 7.95188 2.91304 8.21292 2.89363L15.2129 2.37303C15.4883 2.35255 15.7281 2.55919 15.7486 2.83457C15.7492 2.84383 15.7495 2.84846 15.7497 2.8531C15.7498 2.85773 15.7499 2.86237 15.75 2.87165V3.57941C15.75 3.84037 15.5493 4.05745 15.2891 4.07787L8.28913 4.62738C8.01383 4.649 7.77314 4.44334 7.75153 4.16805C7.75089 4.15828 7.75058 4.15339 7.75038 4.1485C7.75019 4.14361 7.75013 4.13871 7.75 4.12892Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.75 16C1.75 17.4083 3.1146 18.5 4.75 18.5C6.3854 18.5 7.75 17.4083 7.75 16C7.75 14.5917 6.3854 13.5 4.75 13.5C3.1146 13.5 1.75 14.5917 1.75 16ZM6.75 16C6.75 16.8008 5.87602 17.5 4.75 17.5C3.62398 17.5 2.75 16.8008 2.75 16C2.75 15.1992 3.62398 14.5 4.75 14.5C5.87602 14.5 6.75 15.1992 6.75 16Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6699 16.8046C12.2259 17.2495 12.9663 17.5 13.75 17.5C15.3854 17.5 16.75 16.4083 16.75 15C16.75 13.5917 15.3854 12.5 13.75 12.5C12.1146 12.5 10.75 13.5917 10.75 15C10.75 15.6971 11.0905 16.3411 11.6699 16.8046ZM15.75 15C15.75 15.8008 14.876 16.5 13.75 16.5C13.1896 16.5 12.6702 16.3242 12.2946 16.0238C11.9423 15.742 11.75 15.3782 11.75 15C11.75 14.1992 12.624 13.5 13.75 13.5C14.876 13.5 15.75 14.1992 15.75 15Z" fill="black"/>
<path d="M6.75 3.5C6.75 3.22386 6.97386 3 7.25 3C7.52614 3 7.75 3.22386 7.75 3.5V16C7.75 16.2761 7.52614 16.5 7.25 16.5C6.97386 16.5 6.75 16.2761 6.75 16V3.5Z" fill="black"/>
<path d="M15.75 3.5C15.75 3.22386 15.9739 3 16.25 3C16.5261 3 16.75 3.22386 16.75 3.5V15C16.75 15.2761 16.5261 15.5 16.25 15.5C15.9739 15.5 15.75 15.2761 15.75 15V3.5Z" fill="black"/>
</svg>
`;

const MusicNoteSingle = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.531 2.33645C15.8538 5.27397 18 7.40061 18 8.94299C18 10.4353 17.1791 11.6422 15.6041 12.5261C15.168 12.7708 14.6824 12.2944 14.9188 11.8537C15.3256 11.0953 15.1916 10.2468 14.4579 9.23688C14.0063 8.6153 13.438 8.09236 12.75 7.66769V15.6389C12.75 15.6558 12.7496 15.6726 12.7487 15.6893C12.7496 15.7141 12.75 15.7389 12.75 15.7639C12.75 17.2459 11.2709 18.3889 9.5 18.3889C7.72914 18.3889 6.25 17.2459 6.25 15.7639C6.25 14.2818 7.72914 13.1389 9.5 13.1389C9.94085 13.1389 10.3636 13.2097 10.75 13.339V6.43384V5.63886V2.75C10.75 2.34864 11.1991 2.11086 11.531 2.33645Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.75 7.80413C16.75 6.26176 14.6038 4.13512 10.281 1.19759C9.94906 0.972008 9.5 1.20978 9.5 1.61114V5.29498C9.5 5.51063 9.63826 5.70198 9.84301 5.76969C11.3174 6.25731 12.434 7.03285 13.2079 8.09803C13.9416 9.10793 14.0756 9.95646 13.6688 10.7148C13.4324 11.1555 13.918 11.632 14.3541 11.3872C15.9291 10.5034 16.75 9.29646 16.75 7.80413ZM10.5 4.94056V2.56389C13.9918 5.01467 15.75 6.82274 15.75 7.80413C15.75 8.5504 15.4721 9.19993 14.8955 9.76443C14.8758 9.04 14.5787 8.28357 14.0169 7.51024C13.1776 6.35503 12.0012 5.49802 10.5 4.94056Z" fill="black"/>
<path d="M9.5 4.5C9.5 4.22386 9.72386 4 10 4C10.2761 4 10.5 4.22386 10.5 4.5V15C10.5 15.2761 10.2761 15.5 10 15.5C9.72386 15.5 9.5 15.2761 9.5 15V4.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 15C4.5 16.4083 5.8646 17.5 7.5 17.5C9.1354 17.5 10.5 16.4083 10.5 15C10.5 13.5917 9.1354 12.5 7.5 12.5C5.8646 12.5 4.5 13.5917 4.5 15ZM9.5 15C9.5 15.8008 8.62602 16.5 7.5 16.5C6.37398 16.5 5.5 15.8008 5.5 15C5.5 14.1992 6.37398 13.5 7.5 13.5C8.62602 13.5 9.5 14.1992 9.5 15Z" fill="black"/>
</svg>
`;

const NextTrack = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M11.0387 10.0548C11.4137 10.4425 11.4137 11.0576 11.0387 11.4452L5.20884 17.4729C4.58386 18.1191 3.49004 17.6767 3.49004 16.7777L3.49004 4.72235C3.49004 3.82338 4.58386 3.38095 5.20884 4.02713L11.0387 10.0548Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.92874 10.75L5.49004 7.19467L5.49004 14.3054L8.92874 10.75ZM11.0387 11.4452C11.4137 11.0576 11.4137 10.4425 11.0387 10.0548L5.20884 4.02713C4.58386 3.38095 3.49004 3.82338 3.49004 4.72235L3.49004 16.7777C3.49004 17.6767 4.58386 18.1191 5.20884 17.4729L11.0387 11.4452Z" fill="currentColor"/>
<path d="M17.251 10.0548C17.626 10.4425 17.626 11.0576 17.251 11.4452L11.4211 17.4729C10.7961 18.1191 9.70232 17.6767 9.70232 16.7777V4.72235C9.70232 3.82338 10.7961 3.38095 11.4211 4.02713L17.251 10.0548Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.141 10.75L11.7023 7.19467V14.3054L15.141 10.75ZM17.251 11.4452C17.626 11.0576 17.626 10.4425 17.251 10.0548L11.4211 4.02713C10.7961 3.38095 9.70232 3.82338 9.70232 4.72235V16.7777C9.70232 17.6767 10.7961 18.1191 11.4211 17.4729L17.251 11.4452Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.738 3.48688C18.2903 3.48688 18.738 3.93459 18.738 4.48688V17.0132C18.738 17.5655 18.2903 18.0132 17.738 18.0132C17.1857 18.0132 16.738 17.5655 16.738 17.0132V4.48688C16.738 3.93459 17.1857 3.48688 17.738 3.48688Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.07504 15.6694L8.70099 9.50002L3.07504 3.33069L3.07504 15.6694ZM9.43989 10.1738C9.78802 9.79207 9.78802 9.20796 9.43989 8.8262L3.81394 2.65687C3.19856 1.98205 2.07504 2.41741 2.07504 3.33069L2.07504 15.6694C2.07504 16.5826 3.19856 17.018 3.81394 16.3432L9.43989 10.1738Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.71078 15.6694L15.3367 9.50002L9.71078 3.33069V15.6694ZM16.0756 10.1738C16.4238 9.79207 16.4238 9.20796 16.0756 8.8262L10.4497 2.65687C9.8343 1.98205 8.71078 2.41741 8.71078 3.33069V15.6694C8.71078 16.5826 9.8343 17.018 10.4497 16.3432L16.0756 10.1738Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.323 2.98688C16.5991 2.98688 16.823 3.21074 16.823 3.48688V16.0132C16.823 16.2893 16.5991 16.5132 16.323 16.5132C16.0469 16.5132 15.823 16.2893 15.823 16.0132V3.48688C15.823 3.21074 16.0469 2.98688 16.323 2.98688Z" fill="black"/>
</svg>
`;

const Open = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.8" x="7" y="6" width="11" height="11" rx="1" fill="currentColor"/>
<path d="M14.5 14.5V11.25C14.5 10.9739 14.7239 10.75 15 10.75C15.2761 10.75 15.5 10.9739 15.5 11.25V15C15.5 15.2761 15.2761 15.5 15 15.5H5C4.72386 15.5 4.5 15.2761 4.5 15V5C4.5 4.72386 4.72386 4.5 5 4.5H8.75C9.02614 4.5 9.25 4.72386 9.25 5C9.25 5.27614 9.02614 5.5 8.75 5.5H5.5V14.5H14.5Z" fill="black"/>
<path d="M10.3536 10.3536C10.1583 10.5488 9.84171 10.5488 9.64645 10.3536C9.45118 10.1583 9.45118 9.84171 9.64645 9.64645L14.6464 4.64645C14.8417 4.45118 15.1583 4.45118 15.3536 4.64645C15.5488 4.84171 15.5488 5.15829 15.3536 5.35355L10.3536 10.3536Z" fill="black"/>
<path d="M15.5 8.5C15.5 8.77614 15.2761 9 15 9C14.7239 9 14.5 8.77614 14.5 8.5V5C14.5 4.72386 14.7239 4.5 15 4.5C15.2761 4.5 15.5 4.72386 15.5 5V8.5Z" fill="black"/>
<path d="M11.5 5.5C11.2239 5.5 11 5.27614 11 5C11 4.72386 11.2239 4.5 11.5 4.5H15C15.2761 4.5 15.5 4.72386 15.5 5C15.5 5.27614 15.2761 5.5 15 5.5H11.5Z" fill="black"/>
</svg>
`;

const PaintPallet = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_1139)">
<g opacity="0.8">
<path d="M10.5896 5.93864C14.3891 6.95671 16.6954 10.711 15.7246 14.3342C14.6313 18.4146 9.42662 21.6777 6.84274 18.8947C6.01967 18.0082 5.80843 17.0333 5.95296 15.7336C5.97792 15.5091 5.99947 15.3622 6.06577 14.9399C6.22776 13.9081 6.22599 13.5002 6.01192 13.1518C5.80534 12.8155 5.43446 12.7294 4.33401 12.7156C4.28019 12.7149 4.28019 12.7149 4.22591 12.7142C2.67773 12.6922 1.92684 12.4348 1.54351 11.3506C0.274886 7.76224 6.32303 4.79543 10.5896 5.93864Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.8426 4.43006C13.3311 4.40927 12.8607 4.09221 12.5375 3.48435C11.9801 2.43603 11.8585 0.917407 12.6482 0.497495C13.438 0.0775839 14.6289 1.02762 15.1863 2.07593C15.4869 2.64121 15.5076 3.17152 15.2927 3.59351C15.4711 3.68323 15.6244 3.82716 15.7253 4.01687C15.7308 4.02728 15.7362 4.03778 15.7413 4.04837L19.8336 12.4482C19.9869 12.7628 19.8635 13.1423 19.5545 13.3065C19.2452 13.471 18.8612 13.3618 18.6847 13.0592L13.9771 4.98894C13.8746 4.81319 13.8318 4.61905 13.8426 4.43006Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7246 13.3342C15.6954 9.71095 13.3891 5.95668 9.58956 4.93861C5.32303 3.7954 -0.725113 6.76221 0.543511 10.3505C0.926836 11.4348 1.67773 11.6922 3.22591 11.7141L3.33401 11.7156C4.43446 11.7294 4.80534 11.8155 5.01192 12.1517C5.22599 12.5002 5.22776 12.9081 5.06577 13.9399C4.99947 14.3622 4.97792 14.509 4.95296 14.7336C4.80843 16.0333 5.01967 17.0081 5.84274 17.8946C8.42662 20.6776 13.6313 17.4146 14.7246 13.3342ZM1.48632 10.0172C0.577621 7.44693 5.70337 4.93259 9.33074 5.90454C12.6082 6.78273 14.5833 9.99776 13.7587 13.0753C12.8355 16.5206 8.47174 19.2565 6.57558 17.2142C5.98161 16.5745 5.83147 15.8816 5.94683 14.8441C5.96952 14.64 5.98984 14.5015 6.05367 14.095C6.2538 12.8202 6.25136 12.2589 5.86397 11.6283C5.3993 10.8719 4.80502 10.734 3.34657 10.7156L3.24008 10.7142C2.08097 10.6978 1.67812 10.5597 1.48632 10.0172Z" fill="black"/>
<path d="M4.75 9.5C4.05964 9.5 3.5 8.94036 3.5 8.25C3.5 7.55964 4.05964 7 4.75 7C5.44036 7 6 7.55964 6 8.25C6 8.94036 5.44036 9.5 4.75 9.5Z" fill="black"/>
<path d="M8.75 9.5C8.05964 9.5 7.5 8.94036 7.5 8.25C7.5 7.55964 8.05964 7 8.75 7C9.44036 7 10 7.55964 10 8.25C10 8.94036 9.44036 9.5 8.75 9.5Z" fill="black"/>
<path d="M11.25 12.5C10.5596 12.5 10 11.9404 10 11.25C10 10.5596 10.5596 10 11.25 10C11.9404 10 12.5 10.5596 12.5 11.25C12.5 11.9404 11.9404 12.5 11.25 12.5Z" fill="black"/>
<path d="M9.75 16C9.05964 16 8.5 15.4404 8.5 14.75C8.5 14.0596 9.05964 13.5 9.75 13.5C10.4404 13.5 11 14.0596 11 14.75C11 15.4404 10.4404 16 9.75 16Z" fill="black"/>
<path d="M13.3707 3.60451C13.8605 3.34411 14.466 3.52923 14.7253 4.01686C14.7308 4.02727 14.7362 4.03777 14.7413 4.04836L18.8336 12.4482C18.9869 12.7628 18.8635 13.1422 18.5545 13.3065C18.2452 13.471 17.8612 13.3618 17.6847 13.0592L12.9771 4.98893C12.6993 4.5127 12.8602 3.90144 13.3364 3.62364C13.3477 3.61704 13.3592 3.61066 13.3707 3.60451Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5375 3.48434C12.0238 4.39897 12.8434 4.65522 13.6347 4.23444C14.4262 3.81362 14.6726 2.99053 14.1863 2.07592C13.6289 1.0276 12.438 0.0775719 11.6482 0.497483C10.8585 0.917395 10.9801 2.43602 11.5375 3.48434ZM12.4204 3.01486C12.2581 2.70947 12.1315 2.26269 12.1007 1.8773C12.0806 1.62643 12.1063 1.45889 12.1151 1.40204C12.1171 1.38903 12.1182 1.38181 12.1176 1.38073C12.1183 1.38172 12.1245 1.38462 12.1356 1.38985C12.1866 1.41372 12.3408 1.48594 12.5391 1.64416C12.8414 1.88525 13.141 2.24 13.3034 2.54539C13.5316 2.97464 13.4668 3.19118 13.1653 3.3515C12.8641 3.51165 12.6488 3.44435 12.4204 3.01486Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_1139">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Pause = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M5.5 6C5.5 4.89543 6.39543 4 7.5 4H8.20588C9.31045 4 10.2059 4.89543 10.2059 6V16C10.2059 17.1046 9.31045 18 8.20588 18H7.5C6.39543 18 5.5 17.1046 5.5 16V6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.20588 6H7.5V16H8.20588V6ZM7.5 4C6.39543 4 5.5 4.89543 5.5 6V16C5.5 17.1046 6.39543 18 7.5 18H8.20588C9.31045 18 10.2059 17.1046 10.2059 16V6C10.2059 4.89543 9.31045 4 8.20588 4H7.5Z" fill="currentColor"/>
<path d="M12.0882 6C12.0882 4.89543 12.9837 4 14.0882 4H14.7941C15.8987 4 16.7941 4.89543 16.7941 6V16C16.7941 17.1046 15.8987 18 14.7941 18H14.0882C12.9837 18 12.0882 17.1046 12.0882 16V6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7941 6H14.0882V16H14.7941L14.7941 6ZM14.0882 4C12.9837 4 12.0882 4.89543 12.0882 6V16C12.0882 17.1046 12.9837 18 14.0882 18H14.7941C15.8987 18 16.7941 17.1046 16.7941 16V6C16.7941 4.89543 15.8987 4 14.7941 4H14.0882Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.70591 4H6.00003C5.44775 4 5.00003 4.44772 5.00003 5V15C5.00003 15.5523 5.44775 16 6.00003 16H6.70591C7.2582 16 7.70591 15.5523 7.70591 15V5C7.70591 4.44772 7.2582 4 6.70591 4ZM6.00003 3C4.89546 3 4.00003 3.89543 4.00003 5V15C4.00003 16.1046 4.89546 17 6.00003 17H6.70591C7.81048 17 8.70591 16.1046 8.70591 15V5C8.70591 3.89543 7.81048 3 6.70591 3H6.00003Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2941 4H12.5883C12.036 4 11.5883 4.44772 11.5883 5V15C11.5883 15.5523 12.036 16 12.5883 16H13.2941C13.8464 16 14.2941 15.5523 14.2941 15V5C14.2941 4.44772 13.8464 4 13.2941 4ZM12.5883 3C11.4837 3 10.5883 3.89543 10.5883 5V15C10.5883 16.1046 11.4837 17 12.5883 17H13.2941C14.3987 17 15.2941 16.1046 15.2941 15V5C15.2941 3.89543 14.3987 3 13.2941 3H12.5883Z" fill="black"/>
</svg>
`;

const Pen = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M4.79643 11.7244L14.8744 1.64643C15.0696 1.45117 15.3862 1.45117 15.5815 1.64643L19.4706 5.53552C19.6658 5.73078 19.6658 6.04736 19.4706 6.24262L9.39263 16.3206C9.31739 16.3958 9.22012 16.4451 9.11495 16.4612L4.52042 17.1667C4.18664 17.2179 3.89909 16.9304 3.95033 16.5966L4.65578 12.002C4.67193 11.8969 4.7212 11.7996 4.79643 11.7244Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0815 0.853583L3.00354 10.9315C2.92831 11.0068 2.87903 11.104 2.86289 11.2092L2.15744 15.8037C2.10619 16.1375 2.39374 16.4251 2.72753 16.3738L7.32206 15.6684C7.42723 15.6522 7.5245 15.6029 7.59973 15.5277L17.6777 5.44978C17.8729 5.25452 17.8729 4.93793 17.6777 4.74267L13.7886 0.853583C13.5933 0.658321 13.2767 0.658321 13.0815 0.853583ZM3.24927 15.282L3.82645 11.5228L13.435 1.91424L16.617 5.09622L7.00843 14.7048L3.24927 15.282Z" fill="black"/>
<path d="M10.8539 4.06103L11.5604 3.35332L15.0968 6.88369L14.3903 7.59141L10.8539 4.06103Z" fill="black"/>
</svg>
`;

const People = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M9.75 7.75C9.75 9.40685 8.40685 10.75 6.75 10.75C5.09315 10.75 3.75 9.40685 3.75 7.75C3.75 6.09315 5.09315 4.75 6.75 4.75C8.40685 4.75 9.75 6.09315 9.75 7.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.75 8.75C7.30228 8.75 7.75 8.30228 7.75 7.75C7.75 7.19772 7.30228 6.75 6.75 6.75C6.19772 6.75 5.75 7.19772 5.75 7.75C5.75 8.30228 6.19772 8.75 6.75 8.75ZM6.75 10.75C8.40685 10.75 9.75 9.40685 9.75 7.75C9.75 6.09315 8.40685 4.75 6.75 4.75C5.09315 4.75 3.75 6.09315 3.75 7.75C3.75 9.40685 5.09315 10.75 6.75 10.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.80007 11.5C5.97162 11.5 5.30003 12.1716 5.30003 13L5.30002 14.5C5.30001 15.0523 4.8523 15.5 4.30001 15.5C3.74773 15.5 3.30001 15.0523 3.30002 14.5L3.30003 13C3.30004 11.067 4.86706 9.5 6.80007 9.5C8.73305 9.5 10.3 11.067 10.3 13V13.5C10.3 14.0523 9.85233 14.5 9.30004 14.5C8.74776 14.5 8.30004 14.0523 8.30004 13.5V13C8.30004 12.1716 7.62848 11.5 6.80007 11.5Z" fill="currentColor"/>
<path d="M12.75 7.75C12.75 9.40685 14.0931 10.75 15.75 10.75C17.4069 10.75 18.75 9.40685 18.75 7.75C18.75 6.09315 17.4069 4.75 15.75 4.75C14.0931 4.75 12.75 6.09315 12.75 7.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.75 8.75C15.1977 8.75 14.75 8.30228 14.75 7.75C14.75 7.19772 15.1977 6.75 15.75 6.75C16.3023 6.75 16.75 7.19772 16.75 7.75C16.75 8.30228 16.3023 8.75 15.75 8.75ZM15.75 10.75C14.0931 10.75 12.75 9.40685 12.75 7.75C12.75 6.09315 14.0931 4.75 15.75 4.75C17.4069 4.75 18.75 6.09315 18.75 7.75C18.75 9.40685 17.4069 10.75 15.75 10.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6999 11.5C16.5284 11.5 17.2 12.1716 17.2 13L17.2 14.5C17.2 15.0523 17.6477 15.5 18.2 15.5C18.7523 15.5 19.2 15.0523 19.2 14.5L19.2 13C19.2 11.067 17.6329 9.5 15.6999 9.5C13.7669 9.5 12.2 11.067 12.2 13V13.5C12.2 14.0523 12.6477 14.5 13.2 14.5C13.7522 14.5 14.2 14.0523 14.2 13.5V13C14.2 12.1716 14.8715 11.5 15.6999 11.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3001 14.25C10.4716 14.25 9.80003 14.9216 9.80003 15.75L9.80002 17.25C9.80001 17.8023 9.3523 18.25 8.80001 18.25C8.24773 18.25 7.80001 17.8023 7.80002 17.25L7.80003 15.75C7.80004 13.817 9.36706 12.25 11.3001 12.25C13.2331 12.25 14.8 13.817 14.8 15.75V17.25C14.8 17.8023 14.3523 18.25 13.8 18.25C13.2478 18.25 12.8 17.8023 12.8 17.25V15.75C12.8 14.9216 12.1285 14.25 11.3001 14.25Z" fill="currentColor"/>
<path d="M14.25 10.5C14.25 12.1569 12.9069 13.5 11.25 13.5C9.59315 13.5 8.25 12.1569 8.25 10.5C8.25 8.84315 9.59315 7.5 11.25 7.5C12.9069 7.5 14.25 8.84315 14.25 10.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 11.5C11.8023 11.5 12.25 11.0523 12.25 10.5C12.25 9.94772 11.8023 9.5 11.25 9.5C10.6977 9.5 10.25 9.94772 10.25 10.5C10.25 11.0523 10.6977 11.5 11.25 11.5ZM11.25 13.5C12.9069 13.5 14.25 12.1569 14.25 10.5C14.25 8.84315 12.9069 7.5 11.25 7.5C9.59315 7.5 8.25 8.84315 8.25 10.5C8.25 12.1569 9.59315 13.5 11.25 13.5Z" fill="currentColor"/>
<path d="M4.25 11.5H9.25V15.5H4.25V11.5Z" fill="currentColor"/>
<path d="M13.25 11.5H18.25V15.5H13.25V11.5Z" fill="currentColor"/>
<path d="M9.25 13.5H13.25L13.75 18.25H8.75L9.25 13.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.00003 9C6.1046 9 7.00003 8.10457 7.00003 7C7.00003 5.89543 6.1046 5 5.00003 5C3.89546 5 3.00003 5.89543 3.00003 7C3.00003 8.10457 3.89546 9 5.00003 9ZM5.00003 10C6.65688 10 8.00003 8.65685 8.00003 7C8.00003 5.34315 6.65688 4 5.00003 4C3.34318 4 2.00003 5.34315 2.00003 7C2.00003 8.65685 3.34318 10 5.00003 10Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.85355 8.89645C4.04882 9.09171 4.04882 9.40829 3.85355 9.60355L3.51612 9.94098C3.13529 10.3218 2.84835 10.7861 2.67803 11.297C2.56011 11.6508 2.5 12.0212 2.5 12.3941V14.25C2.5 14.5262 2.27614 14.75 2 14.75C1.72386 14.75 1.5 14.5262 1.5 14.25V12.3941C1.5 11.9138 1.57744 11.4365 1.72935 10.9808C1.94876 10.3226 2.3184 9.72449 2.80902 9.23388L3.14645 8.89645C3.34171 8.70118 3.65829 8.70118 3.85355 8.89645Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.6464 8.59646C15.4512 8.79172 15.4512 9.1083 15.6464 9.30357L15.9839 9.641C16.3647 10.0218 16.6517 10.4861 16.822 10.9971C16.9399 11.3508 17 11.7213 17 12.0941V14.25C17 14.5261 17.2239 14.75 17.5 14.75C17.7761 14.75 18 14.5261 18 14.25V12.0941C18 11.6138 17.9226 11.1365 17.7707 10.6808C17.5512 10.0226 17.1816 9.4245 16.691 8.93389L16.3536 8.59646C16.1583 8.4012 15.8417 8.4012 15.6464 8.59646Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 9C12.8955 9 12 8.10457 12 7C12 5.89543 12.8955 5 14 5C15.1046 5 16 5.89543 16 7C16 8.10457 15.1046 9 14 9ZM14 10C12.3432 10 11 8.65685 11 7C11 5.34315 12.3432 4 14 4C15.6569 4 17 5.34315 17 7C17 8.65685 15.6569 10 14 10Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.50006 13.25C8.11933 13.25 7.00002 14.3693 7.00001 15.75L7 17.05C7 17.3261 6.77614 17.55 6.5 17.55C6.22385 17.55 6 17.3261 6 17.05L6.00001 15.75C6.00002 13.817 7.56704 12.25 9.50006 12.25C11.433 12.25 13 13.817 13 15.75V17.05C13 17.3261 12.7762 17.55 12.5 17.55C12.2239 17.55 12 17.3261 12 17.05V15.75C12 14.3693 10.8808 13.25 9.50006 13.25Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.50003 11.75C10.6046 11.75 11.5 10.8546 11.5 9.75C11.5 8.64543 10.6046 7.75 9.50003 7.75C8.39546 7.75 7.50003 8.64543 7.50003 9.75C7.50003 10.8546 8.39546 11.75 9.50003 11.75ZM9.50003 12.75C11.1569 12.75 12.5 11.4069 12.5 9.75C12.5 8.09315 11.1569 6.75 9.50003 6.75C7.84318 6.75 6.50003 8.09315 6.50003 9.75C6.50003 11.4069 7.84318 12.75 9.50003 12.75Z" fill="black"/>
</svg>
`;

const Person = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 6.6C7.75 4.6491 9.2804 3 11.25 3C13.2196 3 14.75 4.6491 14.75 6.6C14.75 8.5509 13.2196 10.2 11.25 10.2C9.2804 10.2 7.75 8.5509 7.75 6.6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.2635 9.06665C8.03924 9.06665 5.25 11.538 5.25 14.8333L5.2517 17.0008C5.25214 17.5522 5.69886 17.9991 6.25 18L16.25 18C16.8023 18 17.25 17.5523 17.25 17V14.8333C17.25 11.5447 14.4949 9.06665 11.2635 9.06665Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 3C8.11929 3 7 4.11929 7 5.5C7 6.88071 8.11929 8 9.5 8C10.8807 8 12 6.88071 12 5.5C12 4.11929 10.8807 3 9.5 3ZM6 5.5C6 3.567 7.567 2 9.5 2C11.433 2 13 3.567 13 5.5C13 7.433 11.433 9 9.5 9C7.567 9 6 7.433 6 5.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 14.5C3.5 11.1782 6.16909 8 9.5 8C12.8309 8 15.5 11.1782 15.5 14.5V16.5C15.5 16.7761 15.2761 17 15 17C14.7239 17 14.5 16.7761 14.5 16.5V14.5C14.5 11.6266 12.1802 9 9.5 9C6.81983 9 4.5 11.6266 4.5 14.5V16.5C4.5 16.7761 4.27614 17 4 17C3.72386 17 3.5 16.7761 3.5 16.5V14.5Z" fill="black"/>
</svg>
`;

const PersonCheckmark = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_303_4954)">
<g opacity="0.8">
<path d="M11 6.6C11 8.03594 9.88071 9.2 8.5 9.2C7.11929 9.2 6 8.03594 6 6.6C6 5.16406 7.11929 4 8.5 4C9.88071 4 11 5.16406 11 6.6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 5C7.70818 5 7 5.67902 7 6.6C7 7.52098 7.70818 8.2 8.5 8.2C9.29182 8.2 10 7.52098 10 6.6C10 5.67902 9.29182 5 8.5 5ZM5 6.6C5 4.6491 6.5304 3 8.5 3C10.4696 3 12 4.6491 12 6.6C12 8.5509 10.4696 10.2 8.5 10.2C6.5304 10.2 5 8.5509 5 6.6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 17V14.8333C13.5 12.1487 11.2458 10.0667 8.51348 10.0667C5.78117 10.0667 3.5 12.1487 3.5 14.8333L3.5017 17" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 14.8333C2.5 11.538 5.28924 9.06665 8.51348 9.06665C11.7449 9.06665 14.5 11.5447 14.5 14.8333V17C14.5 17.5523 14.0523 18 13.5 18C12.9477 18 12.5 17.5523 12.5 17V14.8333C12.5 12.7527 10.7467 11.0667 8.51348 11.0667C6.27323 11.0667 4.50022 12.7593 4.5 14.8329C4.5 14.8331 4.5 14.8328 4.5 14.8329L4.5017 16.9992C4.50214 17.5515 4.05478 17.9995 3.50249 18C2.95021 18.0004 2.50214 17.5531 2.5017 17.0008L2.5 14.8333Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.0968 4.12584C20.5795 4.39405 20.7535 5.00286 20.4853 5.48564L17.7075 10.4856C17.4393 10.9684 16.8305 11.1424 16.3477 10.8742C15.8649 10.6059 15.691 9.99714 15.9592 9.51436L18.737 4.51436C19.0052 4.03157 19.614 3.85763 20.0968 4.12584Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.2747 7.15311C13.6197 6.72185 14.249 6.65193 14.6802 6.99694L17.458 9.21916C17.8893 9.56417 17.9592 10.1935 17.6142 10.6247C17.2692 11.056 16.6399 11.1259 16.2086 10.7809L13.4309 8.55868C12.9996 8.21367 12.9297 7.58437 13.2747 7.15311Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 18H3.5V17H13.5V18Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.79999 3C5.41928 3 4.29999 4.11929 4.29999 5.5C4.29999 6.88071 5.41928 8 6.79999 8C8.1807 8 9.29999 6.88071 9.29999 5.5C9.29999 4.11929 8.1807 3 6.79999 3ZM3.29999 5.5C3.29999 3.567 4.86699 2 6.79999 2C8.73298 2 10.3 3.567 10.3 5.5C10.3 7.433 8.73298 9 6.79999 9C4.86699 9 3.29999 7.433 3.29999 5.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.799988 14.5C0.799988 11.1782 3.46907 8 6.79999 8C10.1309 8 12.8 11.1782 12.8 14.5V16.5C12.8 16.7761 12.5761 17 12.3 17C12.0238 17 11.8 16.7761 11.8 16.5V14.5C11.8 11.6266 9.48016 9 6.79999 9C4.11982 9 1.79999 11.6266 1.79999 14.5V16.5C1.79999 16.7761 1.57613 17 1.29999 17C1.02385 17 0.799988 16.7761 0.799988 16.5V14.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.1539 3.56295C18.3953 3.69706 18.4823 4.00146 18.3482 4.24285L15.5704 9.24285C15.4363 9.48424 15.1319 9.57122 14.8905 9.43711C14.6491 9.303 14.5621 8.9986 14.6962 8.75721L17.474 3.75721C17.6081 3.51582 17.9125 3.42884 18.1539 3.56295Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9651 6.46544C12.1376 6.24981 12.4522 6.21485 12.6679 6.38735L15.4456 8.60958C15.6613 8.78208 15.6962 9.09673 15.5237 9.31236C15.3512 9.52799 15.0366 9.56295 14.8209 9.39045L12.0432 7.16822C11.8275 6.99572 11.7926 6.68107 11.9651 6.46544Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_303_4954">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const PersonPlus = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_303_4955)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.95 7.75C12.95 7.19772 13.3977 6.75 13.95 6.75H19.2C19.7523 6.75 20.2 7.19772 20.2 7.75C20.2 8.30228 19.7523 8.75 19.2 8.75H13.95C13.3977 8.75 12.95 8.30228 12.95 7.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 11.5C15.9477 11.5 15.5 11.0523 15.5 10.5V5.25001C15.5 4.69772 15.9477 4.25001 16.5 4.25001C17.0523 4.25001 17.5 4.69772 17.5 5.25001V10.5C17.5 11.0523 17.0523 11.5 16.5 11.5Z" fill="currentColor"/>
<path d="M11 6.6C11 8.03594 9.88071 9.2 8.5 9.2C7.11929 9.2 6 8.03594 6 6.6C6 5.16406 7.11929 4 8.5 4C9.88071 4 11 5.16406 11 6.6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 5C7.70818 5 7 5.67902 7 6.6C7 7.52098 7.70818 8.2 8.5 8.2C9.29182 8.2 10 7.52098 10 6.6C10 5.67902 9.29182 5 8.5 5ZM5 6.6C5 4.6491 6.5304 3 8.5 3C10.4696 3 12 4.6491 12 6.6C12 8.5509 10.4696 10.2 8.5 10.2C6.5304 10.2 5 8.5509 5 6.6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 17V14.8333C13.5 12.1487 11.2458 10.0667 8.51348 10.0667C5.78117 10.0667 3.5 12.1487 3.5 14.8333L3.5017 17" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 14.8333C2.5 11.538 5.28924 9.06665 8.51348 9.06665C11.7449 9.06665 14.5 11.5447 14.5 14.8333V17C14.5 17.5523 14.0523 18 13.5 18C12.9477 18 12.5 17.5523 12.5 17V14.8333C12.5 12.7527 10.7467 11.0667 8.51348 11.0667C6.27323 11.0667 4.50022 12.7593 4.5 14.8329C4.5 14.8331 4.5 14.8328 4.5 14.8329L4.5017 16.9992C4.50214 17.5515 4.05478 17.9995 3.50249 18C2.95021 18.0004 2.50214 17.5531 2.5017 17.0008L2.5 14.8333Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 18H3.5V17H13.5V18Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.95 6.75C11.95 6.47386 12.1739 6.25 12.45 6.25H17.7C17.9762 6.25 18.2 6.47386 18.2 6.75C18.2 7.02614 17.9762 7.25 17.7 7.25H12.45C12.1739 7.25 11.95 7.02614 11.95 6.75Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 10C14.7239 10 14.5 9.77614 14.5 9.5V4.25001C14.5 3.97386 14.7239 3.75001 15 3.75001C15.2761 3.75001 15.5 3.97386 15.5 4.25001V9.5C15.5 9.77614 15.2761 10 15 10Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.79999 3C5.41928 3 4.29999 4.11929 4.29999 5.5C4.29999 6.88071 5.41928 8 6.79999 8C8.1807 8 9.29999 6.88071 9.29999 5.5C9.29999 4.11929 8.1807 3 6.79999 3ZM3.29999 5.5C3.29999 3.567 4.86699 2 6.79999 2C8.73298 2 10.3 3.567 10.3 5.5C10.3 7.433 8.73298 9 6.79999 9C4.86699 9 3.29999 7.433 3.29999 5.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.799988 14.5C0.799988 11.1782 3.46907 8 6.79999 8C10.1309 8 12.8 11.1782 12.8 14.5V16.5C12.8 16.7761 12.5761 17 12.3 17C12.0238 17 11.8 16.7761 11.8 16.5V14.5C11.8 11.6266 9.48016 9 6.79999 9C4.11982 9 1.79999 11.6266 1.79999 14.5V16.5C1.79999 16.7761 1.57613 17 1.29999 17C1.02385 17 0.799988 16.7761 0.799988 16.5V14.5Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_303_4955">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Persons = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_303_4956)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.12268 10.8047C5.58014 11.6185 5.29063 12.5747 5.29063 13.5528L5.29063 14.25C5.29063 14.8022 4.84292 15.25 4.29063 15.25C3.73835 15.25 3.29063 14.8022 3.29063 14.25L3.29063 13.5528C3.29063 12.1799 3.69701 10.8377 4.45858 9.69531L6.12268 10.8047Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.09341 9.75C7.30149 9.75 6.56197 10.1458 6.12269 10.8047L4.45859 9.6953C5.2688 8.47998 6.63279 7.75 8.09341 7.75H8.29064C8.84292 7.75 9.29064 8.19772 9.29064 8.75C9.29064 9.30228 8.84292 9.75 8.29064 9.75H8.09341Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3048 10.8047C10.8473 11.6185 11.1368 12.5747 11.1368 13.5528L11.1368 14.25C11.1368 14.8022 11.5845 15.25 12.1368 15.25C12.6891 15.25 13.1368 14.8022 13.1368 14.25L13.1368 13.5528C13.1368 12.1799 12.7304 10.8377 11.9689 9.69531L10.3048 10.8047Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.33402 9.75C9.12594 9.75 9.86546 10.1458 10.3047 10.8047L11.9688 9.6953C11.1586 8.47998 9.79464 7.75 8.33402 7.75H8.13679C7.58451 7.75 7.13679 8.19772 7.13679 8.75C7.13679 9.30228 7.58451 9.75 8.13679 9.75H8.33402Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.88678 14.75C3.88678 14.4739 4.11064 14.25 4.38678 14.25H11.3868C11.6629 14.25 11.8868 14.4739 11.8868 14.75C11.8868 15.0261 11.6629 15.25 11.3868 15.25H4.38678C4.11064 15.25 3.88678 15.0261 3.88678 14.75Z" fill="currentColor"/>
<path d="M11.3868 5.75C11.3868 7.54493 9.93171 9 8.13678 9C6.34185 9 4.88678 7.54493 4.88678 5.75C4.88678 3.95507 6.34185 2.5 8.13678 2.5C9.93171 2.5 11.3868 3.95507 11.3868 5.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.13678 7C8.82714 7 9.38678 6.44036 9.38678 5.75C9.38678 5.05964 8.82714 4.5 8.13678 4.5C7.44642 4.5 6.88678 5.05964 6.88678 5.75C6.88678 6.44036 7.44642 7 8.13678 7ZM8.13678 9C9.9317 9 11.3868 7.54493 11.3868 5.75C11.3868 3.95507 9.9317 2.5 8.13678 2.5C6.34185 2.5 4.88678 3.95507 4.88678 5.75C4.88678 7.54493 6.34185 9 8.13678 9Z" fill="currentColor"/>
<path d="M4.88678 9.75H11.3868V14.75H4.88678V9.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3727 14.0547C12.8301 14.8685 12.5406 15.8247 12.5406 16.8028L12.5406 17.5C12.5406 18.0522 12.0929 18.5 11.5406 18.5C10.9883 18.5 10.5406 18.0522 10.5406 17.5L10.5406 16.8028C10.5406 15.4299 10.947 14.0877 11.7086 12.9453L13.3727 14.0547Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3434 13C14.5515 13 13.812 13.3958 13.3727 14.0547L11.7086 12.9453C12.5188 11.73 13.8828 11 15.3434 11H15.5406C16.0929 11 16.5406 11.4477 16.5406 12C16.5406 12.5523 16.0929 13 15.5406 13H15.3434Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5548 14.0547C18.0973 14.8685 18.3868 15.8247 18.3868 16.8028L18.3868 17.5C18.3868 18.0522 18.8345 18.5 19.3868 18.5C19.9391 18.5 20.3868 18.0522 20.3868 17.5L20.3868 16.8028C20.3868 15.4299 19.9804 14.0877 19.2189 12.9453L17.5548 14.0547Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.584 13C16.3759 13 17.1155 13.3958 17.5547 14.0547L19.2188 12.9453C18.4086 11.73 17.0446 11 15.584 11H15.3868C14.8345 11 14.3868 11.4477 14.3868 12C14.3868 12.5523 14.8345 13 15.3868 13H15.584Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.8868 18C10.8868 17.7239 11.1106 17.5 11.3868 17.5H19.3868C19.6629 17.5 19.8868 17.7239 19.8868 18C19.8868 18.2761 19.6629 18.5 19.3868 18.5H11.3868C11.1106 18.5 10.8868 18.2761 10.8868 18Z" fill="currentColor"/>
<path d="M18.6368 9C18.6368 10.7949 17.1817 12.25 15.3868 12.25C13.5919 12.25 12.1368 10.7949 12.1368 9C12.1368 7.20507 13.5919 5.75 15.3868 5.75C17.1817 5.75 18.6368 7.20507 18.6368 9Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3868 10.25C16.0771 10.25 16.6368 9.69036 16.6368 9C16.6368 8.30964 16.0771 7.75 15.3868 7.75C14.6964 7.75 14.1368 8.30964 14.1368 9C14.1368 9.69036 14.6964 10.25 15.3868 10.25ZM15.3868 12.25C17.1817 12.25 18.6368 10.7949 18.6368 9C18.6368 7.20507 17.1817 5.75 15.3868 5.75C13.5919 5.75 12.1368 7.20507 12.1368 9C12.1368 10.7949 13.5919 12.25 15.3868 12.25Z" fill="currentColor"/>
<path d="M11.8868 12.75H18.3868V17.75H11.8868V12.75Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.36087 9.97696C2.75855 10.8804 2.43714 11.942 2.43714 13.0278L2.43715 13.9999C2.43715 14.2761 2.21329 14.5 1.93715 14.5C1.661 14.5 1.43715 14.2761 1.43715 14L1.43714 13.0278C1.43714 11.7446 1.81699 10.49 2.52882 9.42226L2.63666 9.2605C2.78983 9.03073 3.10027 8.96865 3.33003 9.12182C3.5598 9.275 3.62188 9.58543 3.46871 9.8152L3.36087 9.97696Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.1793 8.36456C5.09007 8.36456 4.0729 8.90893 3.46871 9.81523L2.63666 9.26053C3.42632 8.07603 4.75571 7.36456 6.1793 7.36456H6.39931C6.67545 7.36456 6.89931 7.58842 6.89931 7.86456C6.89931 8.14071 6.67545 8.36456 6.39931 8.36456H6.1793Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.25833 9.96528C9.72854 10.6706 9.97945 11.4993 9.97945 12.347L10.9794 12.347C10.9795 11.3019 10.6701 10.2802 10.0904 9.41058L9.99033 9.26051C9.83716 9.03074 9.52672 8.96866 9.29696 9.12183C9.06719 9.27501 9.00511 9.58544 9.15828 9.81521L9.25833 9.96528Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.44769 8.36456C7.53692 8.36456 8.55408 8.90893 9.15828 9.81523L9.99033 9.26053C9.20066 8.07603 7.87127 7.36456 6.44769 7.36456H6.22768C5.95153 7.36456 5.72768 7.58842 5.72768 7.86456C5.72768 8.14071 5.95153 8.36456 6.22768 8.36456H6.44769Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 7.25C7.49264 7.25 8.5 6.24264 8.5 5C8.5 3.75736 7.49264 2.75 6.25 2.75C5.00736 2.75 4 3.75736 4 5C4 6.24264 5.00736 7.25 6.25 7.25ZM6.25 8.25C8.04493 8.25 9.5 6.79493 9.5 5C9.5 3.20507 8.04493 1.75 6.25 1.75C4.45507 1.75 3 3.20507 3 5C3 6.79493 4.45507 8.25 6.25 8.25Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.5085 13.1863C9.90619 14.0898 9.58478 15.1513 9.58479 16.2372L9.58479 17.2708C9.58479 17.547 9.36093 17.7708 9.08479 17.7708C8.80865 17.7708 8.58479 17.547 8.58479 17.2708L8.58478 16.2372C8.58478 14.9539 8.96463 13.6993 9.67646 12.6316L9.80892 12.4329C9.9621 12.2031 10.2725 12.1411 10.5023 12.2942C10.7321 12.4474 10.7941 12.7578 10.641 12.9876L10.5085 13.1863Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4205 11.5C12.3036 11.5 11.2605 12.0582 10.6409 12.9876L9.8089 12.4329C10.6139 11.2253 11.9692 10.5 13.4205 10.5H13.6454C13.9216 10.5 14.1454 10.7239 14.1454 11C14.1454 11.2761 13.9216 11.5 13.6454 11.5H13.4205Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6069 13.1863C17.2093 14.0898 17.5307 15.1513 17.5307 16.2372L17.5307 17.2708C17.5307 17.547 17.7545 17.7708 18.0307 17.7708C18.3068 17.7708 18.5307 17.547 18.5307 17.2708L18.5307 16.2372C18.5307 14.9539 18.1508 13.6993 17.439 12.6316L17.3065 12.4329C17.1534 12.2031 16.8429 12.1411 16.6132 12.2942C16.3834 12.4474 16.3213 12.7578 16.4745 12.9876L16.6069 13.1863Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6949 11.5C14.8119 11.5 15.855 12.0582 16.4745 12.9876L17.3066 12.4329C16.5015 11.2253 15.1462 10.5 13.6949 10.5H13.4701C13.1939 10.5 12.9701 10.7239 12.9701 11C12.9701 11.2761 13.1939 11.5 13.4701 11.5H13.6949Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 10.5C14.7426 10.5 15.75 9.49264 15.75 8.25C15.75 7.00736 14.7426 6 13.5 6C12.2573 6 11.25 7.00736 11.25 8.25C11.25 9.49264 12.2573 10.5 13.5 10.5ZM13.5 11.5C15.2949 11.5 16.75 10.0449 16.75 8.25C16.75 6.45507 15.2949 5 13.5 5C11.705 5 10.25 6.45507 10.25 8.25C10.25 10.0449 11.705 11.5 13.5 11.5Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_303_4956">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Phone = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M12.4389 11.7743L13.0208 11.1924C14.1924 10.0208 16.0919 10.0208 17.2635 11.1924L18.6777 12.6066C19.8492 13.7782 19.8492 15.6777 18.6777 16.8492L15.872 19.6549C15.5932 19.9337 15.1766 20.0227 14.8082 19.882C8.31798 17.4042 3.87438 12.9301 1.50011 6.5696C1.36317 6.20273 1.45296 5.78968 1.72986 5.51278L4.53554 2.70711C5.70711 1.53554 7.6066 1.53554 8.77818 2.70711L10.1924 4.12132C11.364 5.2929 11.364 7.19239 10.1924 8.36396L9.61168 8.94467C10.4943 9.94935 11.4366 10.8925 12.4389 11.7743Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8744 9.54594L11.9632 10.4571C10.6931 9.37249 9.51513 8.19356 8.42915 6.9201L9.33884 6.01041C10.3151 5.0341 10.3151 3.45119 9.33884 2.47488L7.92462 1.06066C6.94831 0.0843525 5.3654 0.0843525 4.38909 1.06066L1.58342 3.86634C1.44497 4.00479 1.40007 4.21131 1.46854 4.39474C3.79256 10.6206 8.13045 14.9883 14.4866 17.4149C14.6707 17.4852 14.879 17.4408 15.0184 17.3014L17.8241 14.4957C18.8004 13.5194 18.8004 11.9365 17.8241 10.9602L16.4099 9.54594C15.4336 8.56963 13.8507 8.56963 12.8744 9.54594ZM17.117 11.6673C17.7028 12.2531 17.7028 13.2028 17.117 13.7886L14.542 16.3636C8.72055 14.0584 4.73059 10.0434 2.5194 4.34456L5.0962 1.76777C5.68198 1.18198 6.63173 1.18198 7.21752 1.76777L8.63173 3.18198C9.21752 3.76777 9.21752 4.71752 8.63173 5.3033L7.3978 6.53723C7.21533 6.71971 7.2017 7.01108 7.36634 7.20979C8.66925 8.78233 10.105 10.2191 11.6731 11.5199C11.8718 11.6848 12.1633 11.6712 12.3459 11.4887L13.5815 10.2531C14.1673 9.66726 15.117 9.66726 15.7028 10.2531L17.117 11.6673Z" fill="black"/>
</svg>
`;

const Photo = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 3C3.67157 3 3 3.67157 3 4.5V18.5C3 19.3284 3.67157 20 4.5 20H18.5C19.3284 20 20 19.3284 20 18.5V4.5C20 3.67157 19.3284 3 18.5 3H4.5ZM9 9C10.1046 9 11 8.10457 11 7C11 5.89543 10.1046 5 9 5C7.89543 5 7 5.89543 7 7C7 8.10457 7.89543 9 9 9ZM13.0059 10.1229C12.6071 9.66241 11.8928 9.66241 11.4941 10.1229L9.93098 11.9278L9.30294 11.0817C8.90313 10.5431 8.09685 10.5431 7.69703 11.0817L5.78763 13.654C5.29782 14.3138 5.76881 15.25 6.59058 15.25H9.24274H10.4094H15.2572C16.114 15.25 16.574 14.243 16.0132 13.5953L13.0059 10.1229Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 5V7V11.3595L6.09112 9.88962C6.11131 9.86243 6.13183 9.8357 6.1527 9.80943C5.43994 9.08712 5 8.09494 5 7C5 6.27143 5.19479 5.58835 5.53513 5H5ZM4.5 3C3.67157 3 3 3.67157 3 4.5V18.5C3 19.3284 3.67157 20 4.5 20H18.5C19.3284 20 20 19.3284 20 18.5V4.5C20 3.67157 19.3284 3 18.5 3H4.5ZM12.4649 5H18V13.0213C17.8832 12.7655 17.726 12.5181 17.525 12.286L14.5178 8.81357C14.0782 8.30595 13.5107 7.98487 12.9094 7.85032C12.9688 7.57629 13 7.29179 13 7C13 6.27143 12.8052 5.58835 12.4649 5ZM11.7322 9.9215C12.136 9.67686 12.6778 9.74399 13.0059 10.1229L16.0132 13.5953C16.574 14.243 16.114 15.25 15.2572 15.25H6.59058C5.76881 15.25 5.29782 14.3138 5.78763 13.654L7.69703 11.0817C7.76442 10.9909 7.84335 10.9154 7.92994 10.8553C8.09672 10.7394 8.2919 10.6802 8.48767 10.6778C8.66484 10.6757 8.84249 10.72 9 10.8108C9.08313 10.8588 9.16065 10.9197 9.22953 10.9935C9.25526 11.0211 9.27978 11.0505 9.30294 11.0817L9.93098 11.9278L11.4941 10.1229C11.5647 10.0413 11.6453 9.97417 11.7322 9.9215ZM10.1439 8.64082C10.2562 8.56237 10.3601 8.47269 10.4539 8.3734C10.7924 8.01514 11 7.53181 11 7C11 5.89543 10.1046 5 9 5C7.89543 5 7 5.89543 7 7C7 7.73303 7.39435 8.37395 7.98248 8.72218C8.28058 8.89869 8.62846 9 9 9C9.22116 9 9.43394 8.9641 9.63282 8.89781C9.81646 8.83661 9.98825 8.7495 10.1439 8.64082ZM18 15.4654C17.5505 16.479 16.5557 17.25 15.2572 17.25H6.59058C5.98881 17.25 5.44975 17.0827 5 16.8009V18H18V15.4654Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 8C8.55228 8 9 7.55228 9 7C9 6.44772 8.55228 6 8 6C7.44772 6 7 6.44772 7 7C7 7.55228 7.44772 8 8 8ZM8 9C9.10457 9 10 8.10457 10 7C10 5.89543 9.10457 5 8 5C6.89543 5 6 5.89543 6 7C6 8.10457 6.89543 9 8 9Z" fill="black"/>
<path d="M7.49999 10.6777L5.59058 13.25L7.49999 13.25L9.40939 14.25H5.59058C4.76881 14.25 4.29782 13.3138 4.78763 12.654L6.69703 10.0817C7.09685 9.54308 7.90313 9.54308 8.30294 10.0817L9.25765 11.3678L8.45469 11.9639L7.49999 10.6777Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2573 13.25L11.25 9.77753L8.24275 13.25L14.2573 13.25ZM12.0059 9.12287C11.6072 8.66241 10.8928 8.66241 10.4941 9.12287L7.48682 12.5953C6.92595 13.243 7.386 14.25 8.24275 14.25H14.2573C15.114 14.25 15.5741 13.243 15.0132 12.5953L12.0059 9.12287Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 2.5H3C2.72386 2.5 2.5 2.72386 2.5 3V17C2.5 17.2761 2.72386 17.5 3 17.5H17C17.2761 17.5 17.5 17.2761 17.5 17V3C17.5 2.72386 17.2761 2.5 17 2.5ZM3 1.5C2.17157 1.5 1.5 2.17157 1.5 3V17C1.5 17.8284 2.17157 18.5 3 18.5H17C17.8284 18.5 18.5 17.8284 18.5 17V3C18.5 2.17157 17.8284 1.5 17 1.5H3Z" fill="black"/>
</svg>
`;

const PhotoCamera = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M7.76225 7.5L8.17154 6.23204C8.50479 5.19965 9.46583 4.5 10.5507 4.5L13.4489 4.5C14.5337 4.5 15.4947 5.19965 15.828 6.23204L16.2373 7.5H17.5C18.8807 7.5 20 8.61929 20 10V16C20 17.3807 18.8807 18.5 17.5 18.5H6.5C5.11929 18.5 4 17.3807 4 16L4 10C4 8.61929 5.11929 7.5 6.5 7.5H7.76225Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.17154 5.23204L5.76225 6.5H4.5C3.11929 6.5 2 7.61929 2 9V15C2 16.3807 3.11929 17.5 4.5 17.5H15.5C16.8807 17.5 18 16.3807 18 15V9C18 7.61929 16.8807 6.5 15.5 6.5H14.2373L13.828 5.23204C13.4947 4.19965 12.5337 3.5 11.4489 3.5H8.55067C7.46583 3.5 6.50479 4.19965 6.17154 5.23204ZM4.5 7.5H6.49027L7.12319 5.53922C7.32314 4.91979 7.89976 4.5 8.55067 4.5H11.4489C12.0998 4.5 12.6764 4.91979 12.8763 5.53922L13.5093 7.5H15.5C16.3284 7.5 17 8.17157 17 9V15C17 15.8284 16.3284 16.5 15.5 16.5H4.5C3.67157 16.5 3 15.8284 3 15V9C3 8.17157 3.67157 7.5 4.5 7.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7 11.5C7 13.1569 8.34315 14.5 10 14.5C11.6569 14.5 13 13.1569 13 11.5C13 9.84315 11.6569 8.5 10 8.5C8.34315 8.5 7 9.84315 7 11.5ZM12 11.5C12 12.6046 11.1046 13.5 10 13.5C8.89543 13.5 8 12.6046 8 11.5C8 10.3954 8.89543 9.5 10 9.5C11.1046 9.5 12 10.3954 12 11.5Z" fill="black"/>
</svg>
`;

const PhotoStudio = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1210_639)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 17.45C20.5 17.0358 20.1642 16.7 19.75 16.7H16.25C15.8358 16.7 15.5 17.0358 15.5 17.45C15.5 17.8642 15.8358 18.2 16.25 18.2H19.75C20.1642 18.2 20.5 17.8642 20.5 17.45Z" fill="currentColor"/>
<path d="M15.6044 12.5883C15.8656 12.5883 16.1245 12.5384 16.3576 12.4204C17.1532 12.0179 19 10.9095 19 9.29414C19 7.67876 17.1532 6.57036 16.3576 6.16783C16.1245 6.04989 15.8656 6.00002 15.6044 6.00002H15C13.8955 6.00002 13 6.89545 13 8.00002V10.5883C13 11.6928 13.8955 12.5883 15 12.5883H15.6044Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5467 8.00002C15.86 8.1656 16.2767 8.42151 16.6048 8.73103C16.9894 9.09384 17 9.28363 17 9.29414C17 9.30464 16.9894 9.49444 16.6048 9.85725C16.2767 10.1668 15.86 10.4227 15.5467 10.5883L15 10.5883V8.00002H15.5467ZM16.3576 12.4204C16.1245 12.5384 15.8656 12.5883 15.6044 12.5883H15C13.8955 12.5883 13 11.6928 13 10.5883V8.00002C13 6.89545 13.8955 6.00002 15 6.00002H15.6044C15.8656 6.00002 16.1245 6.04989 16.3576 6.16783C17.1532 6.57036 19 7.67876 19 9.29414C19 10.9095 17.1532 12.0179 16.3576 12.4204Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.25 8.84998C17.8358 8.84998 17.5 9.18576 17.5 9.59998V16.7647C17.5 17.1789 17.8358 17.5147 18.25 17.5147C18.6642 17.5147 19 17.1789 19 16.7647V9.59998C19 9.18576 18.6642 8.84998 18.25 8.84998Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.03084 9.49998L4.7202 6.74252L2.77992 6.25745L1.93523 9.63618C1.69855 10.5829 2.41459 11.5 3.39045 11.5H10.1097C11.0855 11.5 11.8016 10.5829 11.5649 9.63618L10.7202 6.25745L8.77992 6.74252L9.46928 9.49998H4.03084Z" fill="currentColor"/>
<path d="M3.63898 6.9444H9.8612V10.5H3.63898V6.9444Z" fill="currentColor"/>
<path d="M3.75006 3H9.75006V6.5H3.75006V3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75006 2H10.7501V7.5H2.75006V2ZM4.75006 4V5.5H8.75006V4H4.75006Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.90002 2.20001C1.90002 1.92387 2.12388 1.70001 2.40002 1.70001H11.1C11.3762 1.70001 11.6 1.92387 11.6 2.20001C11.6 2.47615 11.3762 2.70001 11.1 2.70001H2.40002C2.12388 2.70001 1.90002 2.47615 1.90002 2.20001Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.40005 2.5C1.40005 1.94771 1.84777 1.5 2.40005 1.5H8.60005C9.15234 1.5 9.60005 1.94771 9.60005 2.5V6.3C9.60005 6.85228 9.15234 7.3 8.60005 7.3H2.40006C1.84777 7.3 1.40005 6.85228 1.40005 6.3V2.5ZM8.60005 2.5L2.40005 2.5V6.3H8.60005V2.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.649994 2C0.649994 1.72386 0.873852 1.5 1.14999 1.5H9.84999C10.1261 1.5 10.35 1.72386 10.35 2C10.35 2.27614 10.1261 2.5 9.84999 2.5H1.14999C0.873852 2.5 0.649994 2.27614 0.649994 2Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.39029 6.59803L1.6099 10.5L9.39009 10.5L8.60971 6.59803L9.59029 6.40192L10.3707 10.3039C10.4944 10.9226 10.0211 11.5 9.39009 11.5H1.6099C0.978852 11.5 0.505559 10.9227 0.629317 10.3039L1.40971 6.40192L2.39029 6.59803Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.25 17.5C19.25 17.2239 19.0261 17 18.75 17H14.75C14.4739 17 14.25 17.2239 14.25 17.5C14.25 17.7761 14.4739 18 14.75 18H18.75C19.0261 18 19.25 17.7761 19.25 17.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.75 7.00002H14.3543C14.4908 7.00002 14.589 7.02618 14.6561 7.06012C15.0149 7.24164 15.5796 7.56845 16.0409 8.0036C16.5138 8.44967 16.75 8.88504 16.75 9.29414C16.75 9.70324 16.5138 10.1386 16.0409 10.5847C15.5796 11.0198 15.0149 11.3466 14.6561 11.5282C14.589 11.5621 14.4908 11.5883 14.3543 11.5883H13.75C13.1977 11.5883 12.75 11.1405 12.75 10.5883V8.00002C12.75 7.44774 13.1977 7.00002 13.75 7.00002ZM15.1076 12.4204C14.8745 12.5384 14.6156 12.5883 14.3543 12.5883H13.75C12.6454 12.5883 11.75 11.6928 11.75 10.5883V8.00002C11.75 6.89545 12.6454 6.00002 13.75 6.00002H14.3543C14.6156 6.00002 14.8745 6.04989 15.1076 6.16783C15.9032 6.57036 17.75 7.67876 17.75 9.29414C17.75 10.9095 15.9032 12.0179 15.1076 12.4204Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.25 8.70001C16.9739 8.70001 16.75 8.92387 16.75 9.20001V16.7647C16.75 17.0409 16.9739 17.2647 17.25 17.2647C17.5261 17.2647 17.75 17.0409 17.75 16.7647V9.20001C17.75 8.92387 17.5261 8.70001 17.25 8.70001Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1210_639">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Pill = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_858)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.06498 4.42894C7.66633 2.8276 10.2626 2.8276 11.864 4.42894L17.663 10.2279C19.2643 11.8293 19.2643 14.4256 17.663 16.0269V16.0269C16.0616 17.6283 13.4653 17.6283 11.864 16.0269L6.06498 10.2279C4.46364 8.62659 4.46364 6.03029 6.06498 4.42894V4.42894Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8492 10.1924L9.48529 3.82843C7.92319 2.26633 5.39053 2.26633 3.82843 3.82843C2.26634 5.39052 2.26634 7.92318 3.82843 9.48528L10.1924 15.8492C11.7545 17.4113 14.2872 17.4113 15.8492 15.8492C17.4113 14.2871 17.4113 11.7545 15.8492 10.1924ZM4.53554 4.53553C5.70711 3.36396 7.60661 3.36396 8.77818 4.53553L15.1421 10.8995C16.3137 12.0711 16.3137 13.9706 15.1421 15.1421C13.9706 16.3137 12.0711 16.3137 10.8995 15.1421L4.53554 8.77817C3.36397 7.6066 3.36397 5.70711 4.53554 4.53553Z" fill="black"/>
<path d="M13.0369 7.58066L12.7944 8.55081C11.5929 8.25043 10.571 8.39641 9.693 8.98176C8.82365 9.56133 8.23928 10.6688 7.96219 12.337L6.97571 12.1731C7.29422 10.2556 8.00765 8.90348 9.1383 8.14971C10.2603 7.40173 11.5718 7.21437 13.0369 7.58066Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_858">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Pin = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1210_842)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9956 4.85207C11.5371 4.54419 10.9159 4.66631 10.608 5.12482L8.09943 8.86075L6.43902 7.74584L8.94757 4.00991C9.87119 2.63438 11.735 2.26803 13.1106 3.19165L16.4314 5.42147C17.8069 6.3451 18.1733 8.20893 17.2496 9.58446L14.7411 13.3204L13.0807 12.2055L15.5892 8.46955C15.8971 8.01104 15.775 7.38976 15.3165 7.08189L11.9956 4.85207Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.82749 9.53666C3.13537 9.07815 3.75665 8.95603 4.21516 9.26391L14.1776 15.9534C14.6361 16.2612 14.7583 16.8825 14.4504 17.341C14.1425 17.7995 13.5212 17.9217 13.0627 17.6138L3.10024 10.9243C2.64173 10.6164 2.51962 9.99517 2.82749 9.53666Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.63439 9.35933C6.22408 9.41259 5.84774 9.49922 5.63903 9.60478C5.43601 9.70747 5.14956 9.95037 4.86907 10.2379C4.74014 10.37 4.63017 10.493 4.55273 10.5828C4.51423 10.6273 4.48437 10.663 4.46487 10.6866L4.44374 10.7124L4.43973 10.7174C4.09549 11.1491 3.4663 11.2203 3.03446 10.8761C2.60256 10.5319 2.53147 9.90277 2.87568 9.47087L3.65771 10.0941C2.87568 9.47087 2.8756 9.47098 2.87568 9.47087L2.87754 9.46854L2.8806 9.46473L2.89025 9.45278L2.9231 9.41268C2.95078 9.37917 2.98994 9.33245 3.03876 9.27589C3.13594 9.16331 3.27376 9.00905 3.43753 8.84119C3.74243 8.52868 4.22098 8.08074 4.73638 7.82006C5.26693 7.55173 5.93135 7.4338 6.37697 7.37597C6.61637 7.3449 6.82867 7.32703 6.98152 7.31685C7.0583 7.31174 7.12102 7.30851 7.16574 7.30653L7.21909 7.30439L7.23488 7.30387L7.23991 7.30373L7.24169 7.30368L7.2427 7.30365C7.24284 7.30365 7.24297 7.30364 7.26796 8.25569L7.2427 7.30365C7.7948 7.28916 8.25438 7.72496 8.26887 8.27706C8.28335 8.82882 7.84807 9.28791 7.29645 9.30293C7.29612 9.30294 7.29578 9.30295 7.29545 9.30295L7.26921 8.3033C7.29545 9.30295 7.29633 9.30293 7.29645 9.30293L7.28883 9.30318L7.25445 9.30456C7.22288 9.30596 7.17495 9.3084 7.11435 9.31244C6.99242 9.32055 6.82296 9.33486 6.63439 9.35933Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1775 13.7528C13.2835 14.1528 13.3457 14.5339 13.327 14.767C13.3088 14.9938 13.1924 15.3509 13.0325 15.7193C12.9589 15.8887 12.8867 16.037 12.833 16.1427C12.8062 16.1952 12.7845 16.2363 12.7701 16.2633L12.7542 16.2926L12.7511 16.2982C12.4818 16.7802 12.654 17.3896 13.136 17.659C13.6181 17.9285 14.2274 17.7562 14.4969 17.2741L13.624 16.7862C14.4969 17.2741 14.4968 17.2742 14.4969 17.2741L14.4983 17.2715L14.5007 17.2672L14.5081 17.2538L14.5328 17.2082C14.5533 17.1699 14.5817 17.116 14.6156 17.0494C14.683 16.9168 14.7737 16.7309 14.867 16.5157C15.0409 16.1152 15.2744 15.5028 15.3206 14.927C15.3682 14.3344 15.2259 13.6748 15.1107 13.2404C15.0489 13.0071 14.9851 12.8038 14.9366 12.6585C14.9123 12.5855 14.8916 12.5262 14.8765 12.484L14.8582 12.4339L14.8527 12.419L14.851 12.4143L14.8504 12.4127L14.85 12.4117C14.8499 12.4116 14.8499 12.4115 13.9592 12.7487L14.85 12.4117C14.6544 11.8952 14.0771 11.6348 13.5606 11.8303C13.0444 12.0257 12.7842 12.6024 12.9791 13.1187C12.9792 13.119 12.9793 13.1193 12.9795 13.1196L13.9147 12.7655C12.9795 13.1196 12.9791 13.1188 12.9791 13.1187L12.9818 13.1258L12.9935 13.1582C13.0041 13.1879 13.02 13.2332 13.0392 13.2908C13.0779 13.4067 13.1288 13.569 13.1775 13.7528Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.63891 13.4389C9.09742 13.7467 9.21953 14.368 8.91166 14.8265L7.23929 17.3171C6.93142 17.7756 6.31014 17.8978 5.85163 17.5899C5.39312 17.282 5.27101 16.6607 5.57888 16.2022L7.25125 13.7116C7.55912 13.2531 8.1804 13.131 8.63891 13.4389Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9769 8.19682L10.3352 3.73717L6.99048 8.71841L6.16027 8.16096L4.48791 10.6516L5.31811 11.209L11.9598 15.6687L12.79 16.2261L14.4623 13.7355L13.6321 13.1781L16.9769 8.19682Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.77 2.93222C10.0822 2.47041 9.15027 2.65358 8.68846 3.34135L6.17991 7.07728L5.3497 6.51982L7.85825 2.78389C8.62794 1.63761 10.1811 1.33233 11.3274 2.10201L14.6482 4.33183C15.7945 5.10152 16.0998 6.65471 15.3301 7.80099L12.8216 11.5369L11.9914 10.9795L14.4999 7.24353C14.9617 6.55577 14.7785 5.62385 14.0908 5.16204L10.77 2.93222Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.73818 8.31064C1.89212 8.08139 2.20275 8.02033 2.43201 8.17427L12.3945 14.8637C12.6237 15.0177 12.6848 15.3283 12.5309 15.5576C12.3769 15.7868 12.0663 15.8479 11.837 15.6939L1.87455 9.00447C1.6453 8.85054 1.58424 8.5399 1.73818 8.31064Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.06563 7.35875C4.64649 7.41315 4.19814 7.50761 3.90897 7.65386C3.62785 7.79604 3.29337 8.09021 3.00678 8.38396C2.86914 8.52503 2.75221 8.65587 2.66983 8.7513C2.62876 8.79888 2.59657 8.83732 2.57502 8.8634L2.55097 8.89276L2.54538 8.89967L2.54432 8.901C2.54435 8.90096 2.54432 8.901 2.1533 8.58938M2.1533 8.58938C1.76229 8.27776 1.76233 8.2777 1.76238 8.27765L1.76352 8.27622L1.76593 8.27322L1.77422 8.26295L1.80414 8.22642C1.82978 8.19539 1.86661 8.15143 1.91285 8.09787C2.00509 7.991 2.13595 7.84455 2.29101 7.68562C2.58981 7.37936 3.02033 6.98268 3.45764 6.7615C3.90773 6.53386 4.50013 6.42376 4.93692 6.36707C5.16362 6.33765 5.36521 6.32067 5.51032 6.31101C5.58306 6.30617 5.64208 6.30313 5.68351 6.30129L5.73212 6.29935L5.74571 6.2989L5.74967 6.29879L5.75093 6.29875C5.751 6.29875 5.75169 6.29873 5.76481 6.79856L5.75093 6.29875C6.02697 6.29151 6.25739 6.50939 6.26464 6.78544C6.27188 7.06145 6.05404 7.29108 5.77804 7.29838L5.77616 7.29844L5.76699 7.29874L5.72787 7.30031C5.69301 7.30186 5.64139 7.3045 5.57674 7.3088C5.44708 7.31743 5.26691 7.33263 5.06563 7.35875" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.1565 12.12C12.2647 12.5285 12.347 12.9793 12.3211 13.3023C12.2959 13.6163 12.1502 14.0372 11.9868 14.4137C11.9083 14.5945 11.8314 14.7522 11.7743 14.8646C11.7458 14.9206 11.7224 14.965 11.7064 14.9948L11.6883 15.0282L11.684 15.0359L11.6832 15.0374C11.6833 15.0374 11.6832 15.0374 12.1197 15.2814M12.1197 15.2814C12.5561 15.5254 12.5561 15.5253 12.5562 15.5253L12.557 15.5237L12.5589 15.5203L12.5653 15.5087L12.5878 15.4672C12.6068 15.4317 12.6335 15.381 12.6656 15.3179C12.7296 15.1921 12.8156 15.0156 12.9041 14.8119C13.0744 14.4194 13.2787 13.8708 13.3179 13.3823C13.3582 12.8795 13.2359 12.2895 13.1231 11.8638C13.0645 11.6428 13.0039 11.4498 12.9579 11.3118C12.9349 11.2426 12.9154 11.1869 12.9014 11.1478L12.8848 11.1021L12.8801 11.0893L12.8787 11.0856L12.8782 11.0845C12.8782 11.0844 12.878 11.0837 12.4103 11.2608L12.8782 11.0845C12.7804 10.8262 12.4916 10.6954 12.2333 10.7932C11.9751 10.8909 11.845 11.1795 11.9427 11.4377L11.9434 11.4395L11.9465 11.4481L11.9599 11.4849C11.9717 11.5177 11.9888 11.5665 12.0092 11.628C12.0503 11.7512 12.1045 11.9238 12.1565 12.12" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.41327 11.519C7.64252 11.6729 7.70358 11.9836 7.54964 12.2128L5.31982 15.5337C5.16588 15.7629 4.85524 15.824 4.62599 15.67C4.39673 15.5161 4.33568 15.2055 4.48961 14.9762L6.71943 11.6554C6.87337 11.4261 7.18401 11.3651 7.41327 11.519Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1210_842">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Pinpoint = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M12.5 19.5C9.72259 19.5 5.5 12.6249 5.5 8.62313C5.5 4.69121 8.63188 1.5 12.5 1.5C16.3681 1.5 19.5 4.69121 19.5 8.62313C19.5 12.6249 15.2774 19.5 12.5 19.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11ZM10 6C11.1046 6 12 6.89543 12 8C12 9.10457 11.1046 10 10 10C8.89543 10 8 9.10457 8 8C8 6.89543 8.89543 6 10 6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 8.12313C3 12.1249 7.22259 19 10 19C12.7774 19 17 12.1249 17 8.12313C17 4.19121 13.8681 1 10 1C6.13188 1 3 4.19121 3 8.12313ZM16 8.12313C16 11.6434 12.0959 18 10 18C7.90411 18 4 11.6434 4 8.12313C4 4.73934 6.68841 2 10 2C13.3116 2 16 4.73934 16 8.12313Z" fill="black"/>
</svg>
`;

const PinpointOff = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M12.5 19.5C9.72259 19.5 5.5 12.6249 5.5 8.62313C5.5 4.69121 8.63188 1.5 12.5 1.5C16.3681 1.5 19.5 4.69121 19.5 8.62313C19.5 12.6249 15.2774 19.5 12.5 19.5Z" fill="currentColor"/>
</g>
<path d="M1.64645 1.85355C1.45118 1.65829 1.45118 1.34171 1.64645 1.14645C1.84171 0.951184 2.15829 0.951184 2.35355 1.14645L18.8536 17.6464C19.0488 17.8417 19.0488 18.1583 18.8536 18.3536C18.6583 18.5488 18.3417 18.5488 18.1464 18.3536L1.64645 1.85355Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 11C11.6569 11 13 9.65685 13 8C13 6.34315 11.6569 5 10 5C8.34315 5 7 6.34315 7 8C7 9.65685 8.34315 11 10 11ZM10 6C11.1046 6 12 6.89543 12 8C12 9.10457 11.1046 10 10 10C8.89543 10 8 9.10457 8 8C8 6.89543 8.89543 6 10 6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 8.12313C3 12.1249 7.22259 19 10 19C12.7774 19 17 12.1249 17 8.12313C17 4.19121 13.8681 1 10 1C6.13188 1 3 4.19121 3 8.12313ZM16 8.12313C16 11.6434 12.0959 18 10 18C7.90411 18 4 11.6434 4 8.12313C4 4.73934 6.68841 2 10 2C13.3116 2 16 4.73934 16 8.12313Z" fill="black"/>
</svg>
`;

const Play = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M19.4897 10.1901C20.1542 10.5936 20.1244 11.5679 19.4364 11.9299L7.46565 18.2288C6.79975 18.5792 5.99999 18.0963 5.99999 17.3438L5.99999 10.5V3.77701C5.99999 2.99738 6.85255 2.51761 7.51897 2.92222L19.4897 10.1901Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.65002 16.8438L16.6207 10.5449L4.65001 3.27701L4.65002 16.8438ZM17.0864 11.4299C17.7744 11.0679 17.8042 10.0936 17.1397 9.69015L5.16899 2.42222C4.50257 2.01761 3.65001 2.49738 3.65001 3.27701L3.65001 16.8438C3.65001 17.5963 4.44977 18.0792 5.11568 17.7288L17.0864 11.4299Z" fill="black"/>
</svg>
`;

const Plus = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 4.5C10.6716 4.5 10 5.17157 10 6V9.5H6.5C5.67157 9.5 5 10.1716 5 11C5 11.8284 5.67157 12.5 6.5 12.5H10V16C10 16.8284 10.6716 17.5 11.5 17.5C12.3284 17.5 13 16.8284 13 16V12.5H16.5C17.3284 12.5 18 11.8284 18 11C18 10.1716 17.3284 9.5 16.5 9.5H13V6C13 5.17157 12.3284 4.5 11.5 4.5Z" fill="currentColor"/>
</g>
<path d="M5 10.5C4.72386 10.5 4.5 10.2761 4.5 10C4.5 9.72386 4.72386 9.5 5 9.5H15C15.2761 9.5 15.5 9.72386 15.5 10C15.5 10.2761 15.2761 10.5 15 10.5H5Z" fill="black"/>
<path d="M9.5 5C9.5 4.72386 9.72386 4.5 10 4.5C10.2761 4.5 10.5 4.72386 10.5 5V15C10.5 15.2761 10.2761 15.5 10 15.5C9.72386 15.5 9.5 15.2761 9.5 15V5Z" fill="black"/>
</svg>
`;

const Power = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_3909)">
<g opacity="0.8">
<path d="M11.5 20C7.63401 20 4.5 16.866 4.5 13C4.5 9.13401 7.63401 6 11.5 6C15.366 6 18.5 9.13401 18.5 13C18.5 16.866 15.366 20 11.5 20Z" fill="currentColor"/>
</g>
<path d="M4.47659 5.45962C4.70925 5.22366 5.08914 5.22098 5.3251 5.45364C5.56106 5.6863 5.56373 6.06619 5.33107 6.30215C4.22977 7.41907 3.60002 8.92906 3.60002 10.5422C3.60002 13.8535 6.24345 16.5344 9.50002 16.5344C12.7566 16.5344 15.4 13.8535 15.4 10.5422C15.4 8.92906 14.7703 7.41907 13.669 6.30215C13.4363 6.06619 13.439 5.6863 13.675 5.45364C13.9109 5.22098 14.2908 5.22366 14.5235 5.45962C15.8444 6.79928 16.6 8.61113 16.6 10.5422C16.6 14.5125 13.4232 17.7344 9.50002 17.7344C5.5769 17.7344 2.40002 14.5125 2.40002 10.5422C2.40002 8.61113 3.15566 6.79928 4.47659 5.45962Z" fill="black"/>
<path d="M8.87805 1.25002C8.87805 0.918654 9.14668 0.650024 9.47805 0.650024C9.80942 0.650024 10.0781 0.918654 10.0781 1.25002V8.33477C10.0781 8.66614 9.80942 8.93477 9.47805 8.93477C9.14668 8.93477 8.87805 8.66614 8.87805 8.33477L8.87805 1.25002Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_3909">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const PreviousTrack = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M10.9513 10.3048C10.5764 10.6925 10.5764 11.3076 10.9513 11.6952L16.7812 17.7229C17.4062 18.3691 18.5 17.9267 18.5 17.0277V4.97235C18.5 4.07338 17.4062 3.63095 16.7812 4.27713L10.9513 10.3048Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0613 11L16.5 7.44467V14.5554L13.0613 11ZM10.9513 11.6952C10.5764 11.3076 10.5764 10.6925 10.9513 10.3048L16.7812 4.27713C17.4062 3.63095 18.5 4.07338 18.5 4.97235V17.0277C18.5 17.9267 17.4062 18.3691 16.7812 17.7229L10.9513 11.6952Z" fill="currentColor"/>
<path d="M4.73902 10.3048C4.36409 10.6925 4.36409 11.3076 4.73902 11.6952L10.5689 17.7229C11.1939 18.3691 12.2877 17.9267 12.2877 17.0277V4.97235C12.2877 4.07338 11.1939 3.63095 10.5689 4.27713L4.73902 10.3048Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.84903 11L10.2877 7.44467V14.5554L6.84903 11ZM4.73902 11.6952C4.36409 11.3076 4.36409 10.6925 4.73902 10.3048L10.5689 4.27713C11.1939 3.63095 12.2877 4.07338 12.2877 4.97235V17.0277C12.2877 17.9267 11.1939 18.3691 10.5689 17.7229L4.73902 11.6952Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.25208 3.73688C3.69979 3.73688 3.25208 4.18459 3.25208 4.73688L3.25208 17.2632C3.25208 17.8155 3.69979 18.2632 4.25208 18.2632C4.80436 18.2632 5.25208 17.8155 5.25208 17.2632L5.25208 4.73688C5.25208 4.18459 4.80436 3.73688 4.25208 3.73688Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.9234 15.6694L11.2974 9.50002L16.9234 3.33069V15.6694ZM10.5585 10.1738C10.2104 9.79207 10.2104 9.20796 10.5585 8.8262L16.1845 2.65687C16.7999 1.98205 17.9234 2.41741 17.9234 3.33069V15.6694C17.9234 16.5826 16.7999 17.018 16.1845 16.3432L10.5585 10.1738Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2876 15.6694L4.66168 9.50002L10.2876 3.33069V15.6694ZM3.92278 10.1738C3.57465 9.79207 3.57465 9.20796 3.92278 8.8262L9.54873 2.65687C10.1641 1.98205 11.2876 2.41741 11.2876 3.33069V15.6694C11.2876 16.5826 10.1641 17.018 9.54873 16.3432L3.92278 10.1738Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.67542 2.98688C3.39927 2.98688 3.17542 3.21074 3.17542 3.48688L3.17542 16.0132C3.17542 16.2893 3.39927 16.5132 3.67542 16.5132C3.95156 16.5132 4.17542 16.2893 4.17542 16.0132L4.17542 3.48688C4.17542 3.21074 3.95156 2.98688 3.67542 2.98688Z" fill="black"/>
</svg>
`;

const Printer = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect opacity="0.8" x="2" y="7.5" width="18" height="11" rx="3" fill="currentColor"/>
<path d="M4.5 2C4.5 1.44772 4.94772 1 5.5 1H14.5C15.0523 1 15.5 1.44772 15.5 2V6.5H4.5V2Z" fill="white"/>
<path d="M5 6.5H4V2.1C4 1.23445 4.61204 0.5 5.41667 0.5H14.5833C15.388 0.5 16 1.23445 16 2.1V6.5H15V2.1C15 1.75052 14.7912 1.5 14.5833 1.5H5.41667C5.20877 1.5 5 1.75052 5 2.1V6.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16 6H4C2.34315 6 1 7.34315 1 9V14C1 15.6569 2.34315 17 4 17H16C17.6569 17 19 15.6569 19 14V9C19 7.34315 17.6569 6 16 6ZM2 9C2 7.89543 2.89543 7 4 7H16C17.1046 7 18 7.89543 18 9V14C18 15.1046 17.1046 16 16 16H4C2.89543 16 2 15.1046 2 14V9Z" fill="black"/>
<path d="M15.5 17.5313C15.5 18.0835 15.0523 18.5312 14.5 18.5312H5.5C4.94771 18.5312 4.5 18.0835 4.5 17.5312V11.9687L15.5 11.9688V17.5313Z" fill="white"/>
<path d="M15 11.9688H16V17.2188C16 18.1894 15.412 19.0312 14.5833 19.0312H5.41667C4.58798 19.0312 4 18.1894 4 17.2188V11.9687H5V17.2188C5 17.6979 5.23283 18.0312 5.41667 18.0312H14.5833C14.7672 18.0312 15 17.6979 15 17.2188V11.9688Z" fill="black"/>
<path d="M13.5 15.5C13.7761 15.5 14 15.7239 14 16C14 16.2761 13.7761 16.5 13.5 16.5H6.5C6.22386 16.5 6 16.2761 6 16C6 15.7239 6.22386 15.5 6.5 15.5H13.5Z" fill="black"/>
<path d="M13.5 13.5C13.7761 13.5 14 13.7239 14 14C14 14.2761 13.7761 14.5 13.5 14.5L6.5 14.5C6.22386 14.5 6 14.2761 6 14C6 13.7239 6.22386 13.5 6.5 13.5H13.5Z" fill="black"/>
</svg>
`;

const QrCode = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<mask id="path-1-inside-1_303_5008" fill="white">
<rect x="5" y="5" width="13.5" height="13.5" rx="0.5"/>
</mask>
<rect x="5" y="5" width="13.5" height="13.5" rx="0.5" fill="currentColor" stroke="currentColor" stroke-width="3" stroke-linecap="square" stroke-linejoin="round" mask="url(#path-1-inside-1_303_5008)"/>
</g>
<mask id="path-2-inside-2_303_5008" fill="white">
<rect x="4.5" y="4.5" width="5" height="5" rx="0.5"/>
</mask>
<rect x="4.5" y="4.5" width="5" height="5" rx="0.5" stroke="black" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" mask="url(#path-2-inside-2_303_5008)"/>
<mask id="path-3-inside-3_303_5008" fill="white">
<rect x="10.5" y="4.5" width="5" height="5" rx="0.5"/>
</mask>
<rect x="10.5" y="4.5" width="5" height="5" rx="0.5" stroke="black" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" mask="url(#path-3-inside-3_303_5008)"/>
<mask id="path-4-inside-4_303_5008" fill="white">
<rect x="4.5" y="10.5" width="5" height="5" rx="0.5"/>
</mask>
<rect x="4.5" y="10.5" width="5" height="5" rx="0.5" stroke="black" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" mask="url(#path-4-inside-4_303_5008)"/>
<mask id="path-5-inside-5_303_5008" fill="white">
<rect x="10.5" y="10.5" width="5" height="5" rx="0.5"/>
</mask>
<rect x="10.5" y="10.5" width="5" height="5" rx="0.5" fill="black" stroke="black" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" mask="url(#path-5-inside-5_303_5008)"/>
<path d="M3 3H6.5" stroke="black" stroke-linecap="round"/>
<path d="M3 3V6.5" stroke="black" stroke-linecap="round"/>
<path d="M3 17L3 13.5" stroke="black" stroke-linecap="round"/>
<path d="M3 17H6.5" stroke="black" stroke-linecap="round"/>
<path d="M17 17H13.5" stroke="black" stroke-linecap="round"/>
<path d="M17 17V13.5" stroke="black" stroke-linecap="round"/>
<path d="M17 3V6.5" stroke="black" stroke-linecap="round"/>
<path d="M17 3L13.5 3" stroke="black" stroke-linecap="round"/>
</svg>
`;

const Question = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M12.7387 17.2133C12.7387 18.3178 11.8432 19.2133 10.7387 19.2133C9.63411 19.2133 8.73868 18.3178 8.73868 17.2133C8.73868 16.1087 9.63411 15.2133 10.7387 15.2133C11.8432 15.2133 12.7387 16.1087 12.7387 17.2133Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7098 5.76475C10.0395 5.76475 9.46488 5.96522 9.06038 6.25085C8.66959 6.52678 8.47719 6.84837 8.42132 7.1251C8.26284 7.91007 7.49802 8.41795 6.71305 8.25947C5.92807 8.101 5.42019 7.33618 5.57867 6.5512C5.80607 5.42486 6.5038 4.50597 7.38766 3.88188C8.30812 3.23194 9.47392 2.86475 10.7098 2.86475C13.2675 2.86475 15.9179 4.57476 15.9179 7.32121C15.9179 8.91038 14.9731 10.1972 13.7492 10.9466C13.0662 11.3648 12.1736 11.1502 11.7554 10.4672C11.3372 9.7843 11.5518 8.89165 12.2348 8.47345C12.8053 8.12405 13.0179 7.67955 13.0179 7.32121C13.0179 6.74681 12.3032 5.76475 10.7098 5.76475Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.7098 9.62927C11.5106 9.62927 12.1598 10.2785 12.1598 11.0793V12.5825C12.1598 13.3833 11.5106 14.0325 10.7098 14.0325C9.90898 14.0325 9.25979 13.3833 9.25979 12.5825V11.0793C9.25979 10.2785 9.90898 9.62927 10.7098 9.62927Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.2388 8.96651C14.6502 9.6536 14.4266 10.5441 13.7395 10.9554L11.4546 12.3234C10.7675 12.7347 9.87708 12.5112 9.46573 11.8241C9.05438 11.137 9.27791 10.2465 9.965 9.83518L12.2499 8.46724C12.937 8.05589 13.8275 8.27942 14.2388 8.96651Z" fill="currentColor"/>
</g>
<path d="M11 16.25C11 16.9404 10.4404 17.5 9.75 17.5C9.05964 17.5 8.5 16.9404 8.5 16.25C8.5 15.5596 9.05964 15 9.75 15C10.4404 15 11 15.5596 11 16.25Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.70982 4.0647C8.903 4.0647 8.18566 4.30542 7.65661 4.67898C7.14681 5.03895 6.83243 5.50471 6.73516 5.98652C6.65319 6.39255 6.25759 6.65524 5.85157 6.57327C5.44555 6.4913 5.18286 6.0957 5.26483 5.68968C5.45082 4.76842 6.02657 3.9937 6.79142 3.45365C7.58734 2.89165 8.61044 2.5647 9.70982 2.5647C12.0347 2.5647 14.2179 4.099 14.2179 6.32116C14.2179 7.61324 13.4498 8.6967 12.3836 9.34959C12.0304 9.5659 11.5687 9.45489 11.3524 9.10164C11.136 8.7484 11.2471 8.28668 11.6003 8.07037C12.3286 7.6244 12.7179 6.9766 12.7179 6.32116C12.7179 5.22247 11.536 4.0647 9.70982 4.0647Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.70981 9.32922C10.124 9.32922 10.4598 9.66501 10.4598 10.0792V11.5825C10.4598 11.9967 10.124 12.3325 9.70981 12.3325C9.29559 12.3325 8.95981 11.9967 8.95981 11.5825V10.0792C8.95981 9.66501 9.29559 9.32922 9.70981 9.32922Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6382 8.32605C12.851 8.68144 12.7354 9.14202 12.38 9.35479L10.0951 10.7227C9.73968 10.9355 9.27909 10.8199 9.06633 10.4645C8.85356 10.1091 8.96918 9.64851 9.32457 9.43574L11.6095 8.0678C11.9649 7.85504 12.4255 7.97066 12.6382 8.32605Z" fill="black"/>
</svg>
`;

const QuestionCircle = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 11C5 7.13401 8.13401 4 12 4C15.866 4 19 7.13401 19 11C19 14.866 15.866 18 12 18C8.13401 18 5 14.866 5 11Z" fill="currentColor"/>
</g>
<path d="M10.5 14.5C10.5 14.7761 10.2761 15 10 15C9.72386 15 9.5 14.7761 9.5 14.5C9.5 14.2239 9.72386 14 10 14C10.2761 14 10.5 14.2239 10.5 14.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 3.5C6.41015 3.5 3.5 6.41015 3.5 10C3.5 13.5899 6.41015 16.5 10 16.5C13.5899 16.5 16.5 13.5899 16.5 10C16.5 6.41015 13.5899 3.5 10 3.5ZM2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.5C9.4635 6.5 8.98652 6.66007 8.63477 6.90844C8.29581 7.14778 8.08687 7.4574 8.02222 7.7776C7.96757 8.04828 7.70384 8.22341 7.43316 8.16877C7.16248 8.11412 6.98735 7.85039 7.042 7.57971C7.16579 6.96654 7.54899 6.45095 8.05797 6.09156C8.58764 5.71756 9.26846 5.5 10 5.5C11.547 5.5 13 6.52094 13 8C13 8.85999 12.4888 9.58106 11.7793 10.0155C11.5438 10.1597 11.236 10.0857 11.0918 9.85024C10.9476 9.61474 11.0216 9.30693 11.2571 9.16272C11.7413 8.8662 12 8.43557 12 8C12 7.26992 11.2145 6.5 10 6.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.99616 12.9999C9.72003 12.9978 9.49789 12.7723 9.5 12.4961L9.51527 10.4963C9.51738 10.2201 9.74295 9.998 10.0191 10.0001C10.2952 10.0022 10.5174 10.2278 10.5152 10.5039L10.5 12.5038C10.4979 12.7799 10.2723 13.0021 9.99616 12.9999Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.949 9.33309C12.0908 9.57001 12.0138 9.87707 11.7768 10.0189L10.2568 10.9289C10.0199 11.0708 9.71285 10.9937 9.57101 10.7568C9.42916 10.5198 9.50624 10.2128 9.74317 10.0709L11.2632 9.16092C11.5001 9.01908 11.8072 9.09616 11.949 9.33309Z" fill="black"/>
</svg>
`;

const Radio = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M4 10C4 8.34315 5.34315 7 7 7H17C18.6569 7 20 8.34315 20 10V16C20 17.6569 18.6569 19 17 19H7C5.34315 19 4 17.6569 4 16V10Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.6708 2.66457C16.8561 3.03505 16.7059 3.48556 16.3354 3.6708L6.33541 8.67083C5.96492 8.85607 5.51442 8.7059 5.32917 8.33542C5.14393 7.96493 5.2941 7.51443 5.66458 7.32919L15.6646 2.32916C16.0351 2.14392 16.4856 2.29408 16.6708 2.66457Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 7H5C3.89543 7 3 7.89543 3 9V15C3 16.1046 3.89543 17 5 17H15C16.1046 17 17 16.1046 17 15V9C17 7.89543 16.1046 7 15 7ZM5 6C3.34315 6 2 7.34315 2 9V15C2 16.6569 3.34315 18 5 18H15C16.6569 18 18 16.6569 18 15V9C18 7.34315 16.6569 6 15 6H5Z" fill="black"/>
<path d="M10 12C10 13.3807 8.88071 14.5 7.5 14.5C6.11929 14.5 5 13.3807 5 12C5 10.6193 6.11929 9.5 7.5 9.5C8.88071 9.5 10 10.6193 10 12Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4472 1.47406C14.5707 1.72105 14.4706 2.02138 14.2236 2.14488L4.22361 7.1449C3.97662 7.2684 3.67629 7.16829 3.55279 6.9213C3.4293 6.67431 3.52941 6.37397 3.7764 6.25048L13.7764 1.25045C14.0234 1.12696 14.3237 1.22707 14.4472 1.47406Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 10.6499C11 10.4566 11.1567 10.2999 11.35 10.2999H14.65C14.8433 10.2999 15 10.4566 15 10.6499C15 10.8432 14.8433 10.9999 14.65 10.9999H11.35C11.1567 10.9999 11 10.8432 11 10.6499Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 12.1499C11 11.9566 11.1567 11.7999 11.35 11.7999H14.65C14.8433 11.7999 15 11.9566 15 12.1499C15 12.3432 14.8433 12.4999 14.65 12.4999H11.35C11.1567 12.4999 11 12.3432 11 12.1499Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11 13.6499C11 13.4566 11.1567 13.2999 11.35 13.2999H14.65C14.8433 13.2999 15 13.4566 15 13.6499C15 13.8432 14.8433 13.9999 14.65 13.9999H11.35C11.1567 13.9999 11 13.8432 11 13.6499Z" fill="black"/>
</svg>
`;

const Refresh = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.8" cx="12" cy="10.5" r="6.5" fill="currentColor"/>
<path d="M5.25381 14.5962C5.05855 14.4009 5.05855 14.0843 5.25381 13.8891C5.44907 13.6938 5.76565 13.6938 5.96091 13.8891C6.98603 14.9142 8.37101 15.5 9.85 15.5C12.8876 15.5 15.35 13.0376 15.35 10C15.35 9.72386 15.5739 9.5 15.85 9.5C16.1261 9.5 16.35 9.72386 16.35 10C16.35 13.5899 13.4399 16.5 9.85 16.5C8.10306 16.5 6.4646 15.807 5.25381 14.5962Z" fill="black"/>
<path d="M13.1311 12.416C12.9014 12.5691 12.5909 12.507 12.4378 12.2772C12.2846 12.0475 12.3467 11.737 12.5765 11.5839L15.5769 9.58388C15.8066 9.43072 16.1171 9.49282 16.2702 9.72259C16.4234 9.95237 16.3613 10.2628 16.1315 10.416L13.1311 12.416Z" fill="black"/>
<path d="M18.266 12.7226C18.4192 12.9523 18.3571 13.2628 18.1273 13.4159C17.8976 13.5691 17.5871 13.507 17.434 13.2773L15.434 10.2773C15.2808 10.0475 15.3429 9.73706 15.5726 9.58388C15.8024 9.43071 16.1128 9.49279 16.266 9.72256L18.266 12.7226Z" fill="black"/>
<path d="M14.3536 5.20471C14.5488 5.39997 14.5488 5.71655 14.3536 5.91182C14.1583 6.10708 13.8417 6.10708 13.6464 5.91182C12.6213 4.8867 11.2364 4.3009 9.75736 4.3009C6.71979 4.3009 4.25736 6.76334 4.25736 9.8009C4.25736 10.077 4.0335 10.3009 3.75736 10.3009C3.48122 10.3009 3.25736 10.077 3.25736 9.8009C3.25736 6.21105 6.16751 3.3009 9.75736 3.3009C11.5043 3.3009 13.1428 3.99391 14.3536 5.20471Z" fill="black"/>
<path d="M6.47621 7.38482C6.70598 7.23166 7.01642 7.29376 7.16958 7.52353C7.32274 7.75331 7.26064 8.06374 7.03086 8.2169L4.03049 10.2169C3.80071 10.3701 3.49028 10.308 3.33712 10.0782C3.18396 9.84841 3.24606 9.53798 3.47584 9.38482L6.47621 7.38482Z" fill="black"/>
<path d="M1.34135 7.07822C1.18817 6.84846 1.25026 6.53803 1.48002 6.38485C1.70978 6.23167 2.02022 6.29376 2.1734 6.52352L4.1734 9.52352C4.32657 9.75329 4.26448 10.0637 4.03472 10.2169C3.80496 10.3701 3.49452 10.308 3.34135 10.0782L1.34135 7.07822Z" fill="black"/>
</svg>
`;

const Reload = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle opacity="0.8" cx="12" cy="11.5" r="6.5" fill="currentColor"/>
<path d="M13.3745 5.0382C13.6027 5.19368 13.6616 5.50473 13.5062 5.73294C13.3507 5.96115 13.0396 6.02011 12.8114 5.86463C11.9888 5.30418 11.0178 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C12.7614 15 15 12.7614 15 10C15 9.72386 15.2239 9.5 15.5 9.5C15.7761 9.5 16 9.72386 16 10C16 13.3137 13.3137 16 10 16C6.68629 16 4 13.3137 4 10C4 6.68629 6.68629 4 10 4C11.2202 4 12.3871 4.36553 13.3745 5.0382Z" fill="black"/>
<path d="M12.769 11.5851C12.5364 11.7339 12.2272 11.6659 12.0784 11.4333C11.9296 11.2006 11.9976 10.8914 12.2302 10.7426L15.712 8.51555C15.9447 8.36676 16.2539 8.43472 16.4026 8.66734C16.5514 8.89997 16.4835 9.20917 16.2509 9.35796L12.769 11.5851Z" fill="black"/>
<path d="M17.9468 12.1141C18.0593 12.3663 17.946 12.6619 17.6939 12.7744C17.4417 12.8869 17.146 12.7737 17.0335 12.5215L15.5254 9.14069C15.4129 8.8885 15.5261 8.59286 15.7783 8.48036C16.0305 8.36786 16.3261 8.4811 16.4386 8.73329L17.9468 12.1141Z" fill="black"/>
</svg>
`;

const Repeat = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5137 3.7487C15.8402 3.49393 16.3115 3.55217 16.5663 3.87876L18.1128 5.86132C18.3676 6.18792 18.3094 6.65921 17.9828 6.91398C17.6562 7.16874 17.1849 7.11051 16.9301 6.78392L15.3836 4.80136C15.1288 4.47476 15.1871 4.00347 15.5137 3.7487Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9777 5.72744C17.649 5.47544 17.1782 5.53765 16.9262 5.86638L15.3797 7.88384C15.1277 8.21258 15.1899 8.68336 15.5187 8.93536C15.8474 9.18736 16.3182 9.12515 16.5702 8.79641L18.1167 6.77896C18.3687 6.45022 18.3065 5.97944 17.9777 5.72744Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.47498 10.3226C3.47498 7.56121 5.71355 5.32263 8.47498 5.32263H16.3354C16.8877 5.32263 17.3354 5.77035 17.3354 6.32263C17.3354 6.87492 16.8877 7.32263 16.3354 7.32263H8.47498C6.81812 7.32263 5.47498 8.66578 5.47498 10.3226V10.8226C5.47498 11.3749 5.02726 11.8226 4.47498 11.8226C3.92269 11.8226 3.47498 11.3749 3.47498 10.8226V10.3226Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.48281 18.2512C6.15621 18.506 5.68492 18.4478 5.43015 18.1212L3.88363 16.1386C3.62887 15.812 3.6871 15.3407 4.01369 15.086C4.34029 14.8312 4.81158 14.8894 5.06635 15.216L6.61287 17.1986C6.86764 17.5252 6.80941 17.9965 6.48281 18.2512Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.01873 16.2726C4.34747 16.5246 4.81825 16.4624 5.07025 16.1336L6.61676 14.1162C6.86876 13.7874 6.80655 13.3166 6.47781 13.0646C6.14907 12.8126 5.67829 12.8749 5.42629 13.2036L3.87978 15.221C3.62778 15.5498 3.68999 16.0206 4.01873 16.2726Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5215 11.6774C18.5215 14.4388 16.2829 16.6774 13.5215 16.6774H5.66102C5.10873 16.6774 4.66102 16.2297 4.66102 15.6774C4.66102 15.1251 5.10873 14.6774 5.66102 14.6774H13.5215C15.1783 14.6774 16.5215 13.3342 16.5215 11.6774V11.1774C16.5215 10.6251 16.9692 10.1774 17.5215 10.1774C18.0738 10.1774 18.5215 10.6251 18.5215 11.1774V11.6774Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.6674 2.94581C14.8851 2.77597 15.1993 2.81479 15.3692 3.03252L16.9157 5.01508C17.0855 5.23281 17.0467 5.547 16.829 5.71685C16.6113 5.88669 16.2971 5.84787 16.1272 5.63014L14.5807 3.64758C14.4109 3.42985 14.4497 3.11566 14.6674 2.94581Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.8256 4.92583C16.6065 4.75783 16.2926 4.79931 16.1246 5.01847L14.5781 7.03592C14.4101 7.25508 14.4516 7.56894 14.6708 7.73694C14.8899 7.90494 15.2038 7.86346 15.3718 7.6443L16.9183 5.62685C17.0863 5.40769 17.0448 5.09383 16.8256 4.92583Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.97498 9.32263C2.97498 6.83735 4.98969 4.82263 7.47498 4.82263H15.975C16.2511 4.82263 16.475 5.04649 16.475 5.32263C16.475 5.59877 16.2511 5.82263 15.975 5.82263H7.47498C5.54198 5.82263 3.97498 7.38964 3.97498 9.32263V10.6598C3.97498 10.936 3.75112 11.1598 3.47498 11.1598C3.19883 11.1598 2.97498 10.936 2.97498 10.6598V9.32263Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.32905 17.0541C5.11132 17.224 4.79713 17.1852 4.62728 16.9674L3.08076 14.9849C2.91092 14.7671 2.94974 14.4529 3.16747 14.2831C3.3852 14.1132 3.6994 14.1521 3.86924 14.3698L5.41576 16.3524C5.58561 16.5701 5.54679 16.8843 5.32905 17.0541Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.17081 15.0742C3.38997 15.2422 3.70382 15.2007 3.87182 14.9815L5.41833 12.9641C5.58633 12.7449 5.54486 12.4311 5.3257 12.2631C5.10654 12.0951 4.79269 12.1365 4.62469 12.3557L3.07818 14.3732C2.91018 14.5923 2.95165 14.9062 3.17081 15.0742Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.0215 10.6774C17.0215 13.1626 15.0068 15.1774 12.5215 15.1774H4.02148C3.74534 15.1774 3.52148 14.9535 3.52148 14.6774C3.52148 14.4012 3.74534 14.1774 4.02148 14.1774H12.5215C14.4545 14.1774 16.0215 12.6104 16.0215 10.6774V9.34016C16.0215 9.06402 16.2453 8.84016 16.5215 8.84016C16.7976 8.84016 17.0215 9.06402 17.0215 9.34016V10.6774Z" fill="black"/>
</svg>
`;

const Rewind = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M11.5929 9.97187C11.2343 10.3561 11.2343 10.9523 11.5929 11.3365L17.7689 17.9537C18.3882 18.6172 19.5 18.179 19.5 17.2713V4.03705C19.5 3.12942 18.3882 2.69121 17.7689 3.35473L11.5929 9.97187Z" fill="currentColor"/>
<path d="M4.43685 9.97187C4.07826 10.3561 4.07826 10.9523 4.43685 11.3365L10.6129 17.9537C11.2321 18.6172 12.3439 18.179 12.3439 17.2713V4.03705C12.3439 3.12942 11.2321 2.69121 10.6129 3.35473L4.43685 9.97187Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.5999 16.6163L10.4239 9.99916L16.5999 3.38202V16.6163ZM9.69283 10.6815C9.33424 10.2973 9.33424 9.70105 9.69283 9.31684L15.8688 2.6997C16.4881 2.03618 17.5999 2.4744 17.5999 3.38202V16.6163C17.5999 17.5239 16.4881 17.9621 15.8688 17.2986L9.69283 10.6815Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.44383 16.6163L3.26782 9.99916L9.44383 3.38202V16.6163ZM2.53677 10.6815C2.17817 10.2973 2.17817 9.70105 2.53677 9.31684L8.71277 2.6997C9.33206 2.03618 10.4438 2.4744 10.4438 3.38202V16.6163C10.4438 17.5239 9.33206 17.9621 8.71277 17.2986L2.53677 10.6815Z" fill="black"/>
</svg>
`;

const RewindTime = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1213_1907)">
<g opacity="0.8">
<path d="M18.5 11C18.5 14.866 15.366 18 11.5 18C7.63401 18 4.5 14.866 4.5 11C4.5 7.13401 7.63401 4 11.5 4C15.366 4 18.5 7.13401 18.5 11Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 16C14.2614 16 16.5 13.7614 16.5 11C16.5 8.23858 14.2614 6 11.5 6C8.73858 6 6.5 8.23858 6.5 11C6.5 13.7614 8.73858 16 11.5 16ZM11.5 18C15.366 18 18.5 14.866 18.5 11C18.5 7.13401 15.366 4 11.5 4C7.63401 4 4.5 7.13401 4.5 11C4.5 14.866 7.63401 18 11.5 18Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.6041 5.4491C4.15108 6.88207 3.52197 8.83659 3.7215 10.7282C3.75046 11.0028 3.55132 11.2489 3.2767 11.2779C3.00209 11.3068 2.75598 11.1077 2.72701 10.8331C2.49706 8.65299 3.22236 6.39347 4.90193 4.7371C7.83939 1.84018 12.5771 1.88713 15.484 4.83471C18.3909 7.78229 18.372 12.5202 15.4346 15.4172C14.0186 16.8136 12.1825 17.5263 10.3367 17.5592C9.61703 17.572 8.89554 17.4815 8.19622 17.288C7.93008 17.2143 7.77405 16.9389 7.84771 16.6727C7.92137 16.4066 8.19683 16.2506 8.46297 16.3242C9.06913 16.492 9.69477 16.5704 10.3189 16.5593C11.9191 16.5308 13.5068 15.9139 14.7324 14.7052C17.2733 12.1993 17.2944 8.09451 14.772 5.53689C12.2497 2.97926 8.14507 2.94321 5.6041 5.4491Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.59361 11.3625C3.41007 11.5688 3.09403 11.5873 2.8877 11.4037L1.16767 9.87373C0.961344 9.6902 0.942865 9.37416 1.1264 9.16783C1.30993 8.9615 1.62597 8.94302 1.8323 9.12656L3.55233 10.6566C3.75866 10.8401 3.77714 11.1561 3.59361 11.3625Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.81998 11.3C2.98567 11.5209 3.29907 11.5657 3.51998 11.4L5.51998 9.90006C5.7409 9.73438 5.78567 9.42098 5.61999 9.20006C5.45431 8.97915 5.14091 8.93437 4.91999 9.10006L2.91999 10.6C2.69907 10.7657 2.6543 11.0791 2.81998 11.3Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 6.5C10.2761 6.5 10.5 6.72386 10.5 7V10.5C10.5 10.7761 10.2761 11 10 11C9.72386 11 9.5 10.7761 9.5 10.5V7C9.5 6.72386 9.72386 6.5 10 6.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 10.5C13.5 10.7761 13.2761 11 13 11H10C9.72386 11 9.5 10.7761 9.5 10.5C9.5 10.2239 9.72386 10 10 10H13C13.2761 10 13.5 10.2239 13.5 10.5Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1213_1907">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Scissors = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 19.5C8.15685 19.5 9.5 18.1569 9.5 16.5C9.5 15.8457 9.29051 15.2403 8.93495 14.7472C9.14795 14.7656 9.36732 14.6933 9.53033 14.5303L11.25 12.8107L16.9697 18.5303C17.2626 18.8232 17.7374 18.8232 18.0303 18.5303C18.3232 18.2374 18.3232 17.7626 18.0303 17.4697L12.3107 11.75L18.0303 6.03033C18.3232 5.73744 18.3232 5.26256 18.0303 4.96967C17.7374 4.67678 17.2626 4.67678 16.9697 4.96967L11.25 10.6893L9.53033 8.96967C9.43881 8.87815 9.32953 8.81523 9.21358 8.7809C9.39727 8.39245 9.5 7.95822 9.5 7.5C9.5 5.84315 8.15685 4.5 6.5 4.5C4.84315 4.5 3.5 5.84315 3.5 7.5C3.5 9.15685 4.84315 10.5 6.5 10.5C7.19572 10.5 7.83613 10.2632 8.34501 9.86575C8.37798 9.92472 8.41953 9.98019 8.46967 10.0303L10.1893 11.75L8.46967 13.4697C8.30666 13.6327 8.23438 13.8521 8.25281 14.065C7.75974 13.7095 7.15434 13.5 6.5 13.5C4.84315 13.5 3.5 14.8431 3.5 16.5C3.5 18.1569 4.84315 19.5 6.5 19.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 8.5C7.15685 8.5 8.5 7.15685 8.5 5.5C8.5 3.84315 7.15685 2.5 5.5 2.5C3.84315 2.5 2.5 3.84315 2.5 5.5C2.5 7.15685 3.84315 8.5 5.5 8.5ZM5.5 3.5C6.60457 3.5 7.5 4.39543 7.5 5.5C7.5 6.60457 6.60457 7.5 5.5 7.5C4.39543 7.5 3.5 6.60457 3.5 5.5C3.5 4.39543 4.39543 3.5 5.5 3.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 18.5C7.15685 18.5 8.5 17.1569 8.5 15.5C8.5 13.8431 7.15685 12.5 5.5 12.5C3.84315 12.5 2.5 13.8431 2.5 15.5C2.5 17.1569 3.84315 18.5 5.5 18.5ZM5.5 13.5C6.60457 13.5 7.5 14.3954 7.5 15.5C7.5 16.6046 6.60457 17.5 5.5 17.5C4.39543 17.5 3.5 16.6046 3.5 15.5C3.5 14.3954 4.39543 13.5 5.5 13.5Z" fill="black"/>
<path d="M16.9784 15.7823C17.1764 15.9748 17.1809 16.2913 16.9885 16.4893C16.796 16.6874 16.4795 16.6919 16.2814 16.4994L7.40465 7.87265C7.20662 7.6802 7.2021 7.36365 7.39455 7.16562C7.587 6.96759 7.90355 6.96306 8.10159 7.15552L16.9784 15.7823Z" fill="black"/>
<path d="M7.14645 13.1464C6.95118 13.3417 6.95118 13.6583 7.14645 13.8536C7.34171 14.0488 7.65829 14.0488 7.85355 13.8536L16.8536 4.85355C17.0488 4.65829 17.0488 4.34171 16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645L7.14645 13.1464Z" fill="black"/>
</svg>
`;

const Send = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_1996)">
<g opacity="0.8">
<path d="M1.87428 9.45439C1.40175 9.33081 1.36853 8.67265 1.82621 8.50212L17.5413 2.6468C17.9274 2.50295 18.3121 2.86161 18.1955 3.2568L13.4507 19.3421C13.3137 19.8065 12.6626 19.8245 12.5001 19.3684L9.69715 11.5002L1.87428 9.45439Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M0.874275 7.45439L8.69715 9.50024L11.5001 17.3684C11.6626 17.8245 12.3137 17.8065 12.4507 17.3421L17.1955 1.2568C17.3121 0.861613 16.9274 0.502948 16.5413 0.646803L0.82621 6.50212C0.368533 6.67265 0.401753 7.33081 0.874275 7.45439ZM2.65726 6.88705L15.9534 1.93302L11.9263 15.5851L9.55044 8.91561C9.49494 8.7598 9.36597 8.64152 9.20594 8.59967L2.65726 6.88705Z" fill="black"/>
<path d="M16 1.29291L16.7071 2.00001L9 9.70712L8.29289 9.00001L16 1.29291Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_1996">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const ShareAndroid = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.17451 14.2075C6.82435 14.3942 6.42453 14.5 6 14.5C4.61929 14.5 3.5 13.3807 3.5 12C3.5 10.6193 4.61929 9.5 6 9.5C6.52196 9.5 7.00656 9.65996 7.40745 9.93353L12.5011 6.92362C12.5415 5.57825 13.6448 4.5 15 4.5C16.3807 4.5 17.5 5.61929 17.5 7C17.5 8.38071 16.3807 9.5 15 9.5C14.1422 9.5 13.3853 9.06794 12.935 8.40957L8.34206 11.1236C8.44417 11.3963 8.5 11.6916 8.5 12C8.5 12.3894 8.41096 12.7581 8.25213 13.0866L12.9102 15.6274C13.3571 14.9483 14.1262 14.5 15 14.5C16.3807 14.5 17.5 15.6193 17.5 17C17.5 18.3807 16.3807 19.5 15 19.5C13.6574 19.5 12.562 18.4416 12.5025 17.1137L7.17451 14.2075Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 12.5C6.38071 12.5 7.5 11.3807 7.5 10C7.5 8.61929 6.38071 7.5 5 7.5C3.61929 7.5 2.5 8.61929 2.5 10C2.5 11.3807 3.61929 12.5 5 12.5ZM5 8.5C5.82843 8.5 6.5 9.17157 6.5 10C6.5 10.8284 5.82843 11.5 5 11.5C4.17157 11.5 3.5 10.8284 3.5 10C3.5 9.17157 4.17157 8.5 5 8.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 7.5C15.3807 7.5 16.5 6.38071 16.5 5C16.5 3.61929 15.3807 2.5 14 2.5C12.6193 2.5 11.5 3.61929 11.5 5C11.5 6.38071 12.6193 7.5 14 7.5ZM14 3.5C14.8284 3.5 15.5 4.17157 15.5 5C15.5 5.82843 14.8284 6.5 14 6.5C13.1716 6.5 12.5 5.82843 12.5 5C12.5 4.17157 13.1716 3.5 14 3.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 17.5C15.3807 17.5 16.5 16.3807 16.5 15C16.5 13.6193 15.3807 12.5 14 12.5C12.6193 12.5 11.5 13.6193 11.5 15C11.5 16.3807 12.6193 17.5 14 17.5ZM14 13.5C14.8284 13.5 15.5 14.1716 15.5 15C15.5 15.8284 14.8284 16.5 14 16.5C13.1716 16.5 12.5 15.8284 12.5 15C12.5 14.1716 13.1716 13.5 14 13.5Z" fill="black"/>
<path d="M6.75437 9.18048L6.24564 8.31955L11.7456 5.06955L12.2544 5.93048L6.75437 9.18048Z" fill="black"/>
<path d="M12 14.8779L12.4789 14L6.97885 11L6.5 11.8779L12 14.8779Z" fill="black"/>
</svg>
`;

const ShareIos = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_2042)">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M15.5 9H16.5C17.6046 9 18.5 9.75767 18.5 10.6923V18.3077C18.5 19.2423 17.6046 20 16.5 20H8.5C7.39543 20 6.5 19.2423 6.5 18.3077L6.5 10.6923C6.5 9.75767 7.39543 9 8.5 9H9.5" fill="currentColor"/>
<path d="M9.99834 2.50008C9.99829 2.22394 10.2221 2.00004 10.4983 2C10.7744 1.99996 10.9983 2.22378 10.9983 2.49992L11 12.9999C11 13.2761 10.7762 13.5 10.5001 13.5C10.2239 13.5 10 13.2762 10 13.0001L9.99834 2.50008Z" fill="black"/>
<path d="M10.8201 2.8841C11.0322 2.70732 11.0609 2.39203 10.8841 2.1799C10.7073 1.96776 10.392 1.93909 10.1799 2.11588L7.17991 4.61588C6.96777 4.79266 6.93911 5.10794 7.11589 5.32008C7.29267 5.53222 7.60796 5.56088 7.82009 5.3841L10.8201 2.8841Z" fill="black"/>
<path d="M10.1799 2.8841C9.96777 2.70732 9.9391 2.39203 10.1159 2.1799C10.2927 1.96776 10.608 1.93909 10.8201 2.11588L13.8201 4.61588C14.0322 4.79266 14.0609 5.10794 13.8841 5.32008C13.7073 5.53222 13.392 5.56088 13.1799 5.3841L10.1799 2.8841Z" fill="black"/>
<path d="M13.2483 9C12.9722 9 12.7483 8.77614 12.7483 8.5C12.7483 8.22386 12.9722 8 13.2483 8L14.165 8C15.4362 8 16.4983 8.89134 16.4983 10.0385V16.9615C16.4983 18.1087 15.4362 19 14.165 19H6.83167C5.56052 19 4.49834 18.1087 4.49834 16.9615L4.49834 10.0385C4.49834 8.89134 5.56052 8 6.83167 8H7.74834C8.02448 8 8.24834 8.22386 8.24834 8.5C8.24834 8.77614 8.02448 9 7.74834 9H6.83167C6.07778 9 5.49834 9.48625 5.49834 10.0385L5.49834 16.9615C5.49834 17.5138 6.07778 18 6.83167 18H14.165C14.9189 18 15.4983 17.5138 15.4983 16.9615L15.4983 10.0385C15.4983 9.48625 14.9189 9 14.165 9H13.2483Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_2042">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Shuffle = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2094 4.97167C17.882 4.71794 17.4109 4.77766 17.1571 5.10507L15.6571 7.04062C15.4034 7.36802 15.4631 7.83912 15.7905 8.09285C16.1179 8.34658 16.5891 8.28686 16.8428 7.95945L18.3428 6.02391C18.5965 5.6965 18.5368 5.2254 18.2094 4.97167Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.2094 17.0929C17.882 17.3466 17.4109 17.2869 17.1571 16.9595L15.6571 15.024C15.4034 14.6966 15.4631 14.2255 15.7905 13.9717C16.1179 13.718 16.5891 13.7777 16.8428 14.1051L18.3428 16.0407C18.5965 16.3681 18.5368 16.8392 18.2094 17.0929Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8 2.90004C15.4686 3.14857 15.4015 3.61867 15.65 3.95004L17.15 5.95004C17.3985 6.28141 17.8686 6.34857 18.2 6.10004C18.5314 5.85152 18.5985 5.38142 18.35 5.05004L16.85 3.05004C16.6015 2.71867 16.1314 2.65152 15.8 2.90004Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.8 19.1001C15.4686 18.8515 15.4015 18.3814 15.65 18.0501L17.15 16.0501C17.3985 15.7187 17.8686 15.6515 18.2 15.9001C18.5314 16.1486 18.5985 16.6187 18.35 16.9501L16.85 18.9501C16.6015 19.2814 16.1314 19.3486 15.8 19.1001Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 5.68005C2.75 5.12777 3.19772 4.68005 3.75 4.68005C7.56153 4.68005 10.91 7.37639 10.91 10.999C10.91 14.6216 7.56153 17.3179 3.75 17.3179C3.19772 17.3179 2.75 16.8702 2.75 16.3179C2.75 15.7656 3.19772 15.3179 3.75 15.3179C6.74262 15.3179 8.91 13.2515 8.91 10.999C8.91 8.74646 6.74262 6.68005 3.75 6.68005C3.19772 6.68005 2.75 6.23234 2.75 5.68005Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.07 5.68005C17.07 5.12777 16.6223 4.68005 16.07 4.68005C12.2585 4.68005 8.91001 7.37639 8.91001 10.999C8.91001 14.6216 12.2585 17.3179 16.07 17.3179C16.6223 17.3179 17.07 16.8702 17.07 16.3179C17.07 15.7656 16.6223 15.3179 16.07 15.3179C13.0774 15.3179 10.91 13.2515 10.91 10.999C10.91 8.74646 13.0774 6.68005 16.07 6.68005C16.6223 6.68005 17.07 6.23234 17.07 5.68005Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5563 4.16926C17.338 4.00011 17.0239 4.03993 16.8548 4.2582L15.3548 6.19374C15.1856 6.41201 15.2254 6.72608 15.4437 6.89524C15.662 7.06439 15.976 7.02457 16.1452 6.8063L17.6452 4.87076C17.8143 4.65249 17.7745 4.33842 17.5563 4.16926Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5563 15.8952C17.338 16.0643 17.0239 16.0245 16.8548 15.8063L15.3548 13.8707C15.1856 13.6524 15.2254 13.3384 15.4437 13.1692C15.662 13.0001 15.976 13.0399 16.1452 13.2581L17.6452 15.1937C17.8143 15.412 17.7745 15.726 17.5563 15.8952Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.45 2.10003C15.2291 2.26571 15.1843 2.57912 15.35 2.80003L16.85 4.80003C17.0157 5.02094 17.3291 5.06571 17.55 4.90003C17.7709 4.73434 17.8157 4.42094 17.65 4.20003L16.15 2.20003C15.9843 1.97912 15.6709 1.93434 15.45 2.10003Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.45 17.9C15.2291 17.7343 15.1843 17.4209 15.35 17.2L16.85 15.2C17.0157 14.9791 17.3291 14.9343 17.55 15.1C17.7709 15.2657 17.8157 15.5791 17.65 15.8L16.15 17.8C15.9843 18.0209 15.6709 18.0657 15.45 17.9Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.75 4.68005C2.75 4.40391 2.97386 4.18005 3.25 4.18005C6.8568 4.18005 9.91 6.7189 9.91 9.99899C9.91 13.2791 6.8568 15.8179 3.25 15.8179C2.97386 15.8179 2.75 15.5941 2.75 15.3179C2.75 15.0418 2.97386 14.8179 3.25 14.8179C6.44735 14.8179 8.91 12.594 8.91 9.99899C8.91 7.40394 6.44735 5.18005 3.25 5.18005C2.97386 5.18005 2.75 4.9562 2.75 4.68005Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.25 4.68005C17.25 4.40391 17.0261 4.18005 16.75 4.18005H15.57C11.9632 4.18005 8.91001 6.7189 8.91001 9.99899C8.91001 13.2791 11.9632 15.8179 15.57 15.8179H16.75C17.0261 15.8179 17.25 15.5941 17.25 15.3179C17.25 15.0418 17.0261 14.8179 16.75 14.8179H15.57C12.3727 14.8179 9.91001 12.594 9.91001 9.99899C9.91001 7.40394 12.3727 5.18005 15.57 5.18005H16.75C17.0261 5.18005 17.25 4.9562 17.25 4.68005Z" fill="black"/>
</svg>
`;

const Sliders = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 6.25C3 5.69772 3.44772 5.25 4 5.25H10.5C11.0523 5.25 11.5 5.69772 11.5 6.25C11.5 6.80228 11.0523 7.25 10.5 7.25H4C3.44772 7.25 3 6.80228 3 6.25ZM14.375 6.25C14.375 5.69772 14.8227 5.25 15.375 5.25H17C17.5523 5.25 18 5.69772 18 6.25C18 6.80228 17.5523 7.25 17 7.25H15.375C14.8227 7.25 14.375 6.80228 14.375 6.25Z" fill="currentColor"/>
<path d="M16 6.5C16 8.01878 14.7688 9.25 13.25 9.25C11.7312 9.25 10.5 8.01878 10.5 6.5C10.5 4.98122 11.7312 3.75 13.25 3.75C14.7688 3.75 16 4.98122 16 6.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 7.25C13.6642 7.25 14 6.91421 14 6.5C14 6.08579 13.6642 5.75 13.25 5.75C12.8358 5.75 12.5 6.08579 12.5 6.5C12.5 6.91421 12.8358 7.25 13.25 7.25ZM13.25 9.25C14.7688 9.25 16 8.01878 16 6.5C16 4.98122 14.7688 3.75 13.25 3.75C11.7312 3.75 10.5 4.98122 10.5 6.5C10.5 8.01878 11.7312 9.25 13.25 9.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 16.25C3 15.6977 3.44772 15.25 4 15.25H10.5C11.0523 15.25 11.5 15.6977 11.5 16.25C11.5 16.8023 11.0523 17.25 10.5 17.25H4C3.44772 17.25 3 16.8023 3 16.25ZM14.375 16.25C14.375 15.6977 14.8227 15.25 15.375 15.25H17C17.5523 15.25 18 15.6977 18 16.25C18 16.8023 17.5523 17.25 17 17.25H15.375C14.8227 17.25 14.375 16.8023 14.375 16.25Z" fill="currentColor"/>
<path d="M16 16.5C16 18.0188 14.7688 19.25 13.25 19.25C11.7312 19.25 10.5 18.0188 10.5 16.5C10.5 14.9812 11.7312 13.75 13.25 13.75C14.7688 13.75 16 14.9812 16 16.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.25 17.25C13.6642 17.25 14 16.9142 14 16.5C14 16.0858 13.6642 15.75 13.25 15.75C12.8358 15.75 12.5 16.0858 12.5 16.5C12.5 16.9142 12.8358 17.25 13.25 17.25ZM13.25 19.25C14.7688 19.25 16 18.0188 16 16.5C16 14.9812 14.7688 13.75 13.25 13.75C11.7312 13.75 10.5 14.9812 10.5 16.5C10.5 18.0188 11.7312 19.25 13.25 19.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 11.25C3 10.6977 3.44772 10.25 4 10.25H5.625C6.17728 10.25 6.625 10.6977 6.625 11.25C6.625 11.8023 6.17728 12.25 5.625 12.25H4C3.44772 12.25 3 11.8023 3 11.25ZM9.5 11.25C9.5 10.6977 9.94772 10.25 10.5 10.25H17C17.5523 10.25 18 10.6977 18 11.25C18 11.8023 17.5523 12.25 17 12.25H10.5C9.94772 12.25 9.5 11.8023 9.5 11.25Z" fill="currentColor"/>
<path d="M11 11.5C11 13.0188 9.76878 14.25 8.25 14.25C6.73122 14.25 5.5 13.0188 5.5 11.5C5.5 9.98122 6.73122 8.75 8.25 8.75C9.76878 8.75 11 9.98122 11 11.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 12.25C8.66421 12.25 9 11.9142 9 11.5C9 11.0858 8.66421 10.75 8.25 10.75C7.83579 10.75 7.5 11.0858 7.5 11.5C7.5 11.9142 7.83579 12.25 8.25 12.25ZM8.25 14.25C9.76878 14.25 11 13.0188 11 11.5C11 9.98122 9.76878 8.75 8.25 8.75C6.73122 8.75 5.5 9.98122 5.5 11.5C5.5 13.0188 6.73122 14.25 8.25 14.25Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 4.75C3 4.47386 3.22386 4.25 3.5 4.25H10.5C10.7761 4.25 11 4.47386 11 4.75C11 5.02614 10.7761 5.25 10.5 5.25H3.5C3.22386 5.25 3 5.02614 3 4.75ZM14.38 4.75C14.38 4.47386 14.6039 4.25 14.88 4.25H16.5C16.7761 4.25 17 4.47386 17 4.75C17 5.02614 16.7761 5.25 16.5 5.25H14.88C14.6039 5.25 14.38 5.02614 14.38 4.75Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 6.5C13.5784 6.5 14.25 5.82843 14.25 5C14.25 4.17157 13.5784 3.5 12.75 3.5C11.9216 3.5 11.25 4.17157 11.25 5C11.25 5.82843 11.9216 6.5 12.75 6.5ZM12.75 7.5C14.1307 7.5 15.25 6.38071 15.25 5C15.25 3.61929 14.1307 2.5 12.75 2.5C11.3693 2.5 10.25 3.61929 10.25 5C10.25 6.38071 11.3693 7.5 12.75 7.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 14.75C3 14.4739 3.22386 14.25 3.5 14.25H10.5C10.7761 14.25 11 14.4739 11 14.75C11 15.0261 10.7761 15.25 10.5 15.25H3.5C3.22386 15.25 3 15.0261 3 14.75ZM14.38 14.75C14.38 14.4739 14.6039 14.25 14.88 14.25H16.5C16.7761 14.25 17 14.4739 17 14.75C17 15.0261 16.7761 15.25 16.5 15.25H14.88C14.6039 15.25 14.38 15.0261 14.38 14.75Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.75 16.5C13.5784 16.5 14.25 15.8284 14.25 15C14.25 14.1716 13.5784 13.5 12.75 13.5C11.9216 13.5 11.25 14.1716 11.25 15C11.25 15.8284 11.9216 16.5 12.75 16.5ZM12.75 17.5C14.1307 17.5 15.25 16.3807 15.25 15C15.25 13.6193 14.1307 12.5 12.75 12.5C11.3693 12.5 10.25 13.6193 10.25 15C10.25 16.3807 11.3693 17.5 12.75 17.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3 9.75C3 9.47386 3.22386 9.25 3.5 9.25H5.63C5.90614 9.25 6.13 9.47386 6.13 9.75C6.13 10.0261 5.90614 10.25 5.63 10.25H3.5C3.22386 10.25 3 10.0261 3 9.75ZM9.5 9.75C9.5 9.47386 9.72386 9.25 10 9.25H16.5C16.7761 9.25 17 9.47386 17 9.75C17 10.0261 16.7761 10.25 16.5 10.25H10C9.72386 10.25 9.5 10.0261 9.5 9.75Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 11.5C8.57843 11.5 9.25 10.8284 9.25 10C9.25 9.17157 8.57843 8.5 7.75 8.5C6.92157 8.5 6.25 9.17157 6.25 10C6.25 10.8284 6.92157 11.5 7.75 11.5ZM7.75 12.5C9.13071 12.5 10.25 11.3807 10.25 10C10.25 8.61929 9.13071 7.5 7.75 7.5C6.36929 7.5 5.25 8.61929 5.25 10C5.25 11.3807 6.36929 12.5 7.75 12.5Z" fill="black"/>
</svg>
`;

const Smartphone = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M6 2.58333C6 1.70888 6.67157 1 7.5 1H16.5C17.3284 1 18 1.70888 18 2.58333V18.4167C18 19.2911 17.3284 20 16.5 20H7.5C6.67157 20 6 19.2911 6 18.4167V2.58333Z" fill="currentColor"/>
</g>
<path d="M5.5 2.54C5.5 2.24177 5.72386 2 6 2H14C14.2761 2 14.5 2.24177 14.5 2.54V14.96C14.5 15.2582 14.2761 15.5 14 15.5H6C5.72386 15.5 5.5 15.2582 5.5 14.96V2.54Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4 2.08333C4 1.20888 4.67157 0.5 5.5 0.5H14.5C15.3284 0.5 16 1.20888 16 2.08333V17.9167C16 18.7911 15.3284 19.5 14.5 19.5H5.5C4.67157 19.5 4 18.7911 4 17.9167V2.08333ZM5.5 1.55556C5.22386 1.55556 5 1.79185 5 2.08333V17.9167C5 18.2082 5.22386 18.4444 5.5 18.4444H14.5C14.7761 18.4444 15 18.2082 15 17.9167V2.08333C15 1.79185 14.7761 1.55556 14.5 1.55556H5.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 17C9 16.4477 9.44772 16 10 16C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18C9.44772 18 9 17.5523 9 17Z" fill="black"/>
</svg>
`;

const SmartphoneNotch = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M6 2.5C6 1.67157 6.67157 1 7.5 1H16.5C17.3284 1 18 1.67157 18 2.5V18.5C18 19.3284 17.3284 20 16.5 20H7.5C6.67157 20 6 19.3284 6 18.5V2.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 0.5C4.67157 0.5 4 1.17157 4 2V18C4 18.8284 4.67157 19.5 5.5 19.5H14.5C15.3284 19.5 16 18.8284 16 18V2C16 1.17157 15.3284 0.5 14.5 0.5H5.5ZM5 2C5 1.72386 5.22386 1.5 5.5 1.5H7V2.5C7 2.77614 7.22386 3 7.5 3H12.5C12.7761 3 13 2.77614 13 2.5V1.5H14.5C14.7761 1.5 15 1.72386 15 2V18C15 18.2761 14.7761 18.5 14.5 18.5H5.5C5.22386 18.5 5 18.2761 5 18V2Z" fill="black"/>
</svg>
`;

const Smartphone2 = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" d="M7.63636 1H16.3636C17.2674 1 18 1.67157 18 2.5V18.5C18 19.3284 17.2674 20 16.3636 20H7.63636C6.73262 20 6 19.3284 6 18.5V2.5C6 1.67157 6.73262 1 7.63636 1Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 0.5H5.5C4.67157 0.5 4 1.17157 4 2V18C4 18.8284 4.67157 19.5 5.5 19.5H14.5C15.3284 19.5 16 18.8284 16 18V2C16 1.17157 15.3284 0.5 14.5 0.5ZM5 2C5 1.72386 5.22386 1.5 5.5 1.5H14.5C14.7761 1.5 15 1.72386 15 2V18C15 18.2761 14.7761 18.5 14.5 18.5H5.5C5.22386 18.5 5 18.2761 5 18V2Z" fill="black"/>
<path d="M10 18C9.44772 18 9 17.5523 9 17C9 16.4477 9.44772 16 10 16C10.5523 16 11 16.4477 11 17C11 17.5523 10.5523 18 10 18Z" fill="black"/>
</svg>
`;

const SoftDrink = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M8.58933 4.5L15.411 4.5C16.5155 4.5 17.411 5.39543 17.411 6.5C17.411 6.58078 17.4061 6.66148 17.3963 6.74167L16.179 16.7417C16.0569 17.7454 15.2048 18.5 14.1937 18.5H9.80944C8.79855 18.5 7.9466 17.7457 7.82417 16.7422L6.60405 6.74223C6.47027 5.64579 7.25066 4.6485 8.3471 4.51472C8.42747 4.50492 8.50836 4.5 8.58933 4.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.411 4.5H6.58933C6.50836 4.5 6.42747 4.50492 6.3471 4.51472C5.25066 4.6485 4.47027 5.64579 4.60405 6.74223L5.82417 16.7422C5.9466 17.7457 6.79855 18.5 7.80944 18.5H12.1937C13.2048 18.5 14.0569 17.7454 14.179 16.7417L15.3963 6.74167C15.4061 6.66148 15.411 6.58078 15.411 6.5C15.411 5.39543 14.5155 4.5 13.411 4.5ZM6.46822 5.50736C6.5084 5.50246 6.54885 5.5 6.58933 5.5H13.411C13.9633 5.5 14.411 5.94772 14.411 6.5C14.411 6.54039 14.4085 6.58074 14.4036 6.62084L13.1864 16.6208C13.1253 17.1227 12.6992 17.5 12.1937 17.5H7.80944C7.304 17.5 6.87802 17.1228 6.81681 16.6211L5.59669 6.62111C5.5298 6.07289 5.92 5.57425 6.46822 5.50736Z" fill="black"/>
<path d="M8.97789 14.647C8.89668 14.911 8.61688 15.0591 8.35295 14.9779C8.08902 14.8967 7.9409 14.6169 8.02211 14.353L12.0221 1.35295C12.1033 1.08902 12.3831 0.940897 12.647 1.02211C12.911 1.10332 13.0591 1.38311 12.9779 1.64704L8.97789 14.647Z" fill="black"/>
<path d="M5.5 10C5.22386 10 5 9.77614 5 9.5C5 9.22386 5.22386 9 5.5 9H14.5C14.7761 9 15 9.22386 15 9.5C15 9.77614 14.7761 10 14.5 10H5.5Z" fill="black"/>
<path d="M12.3787 1.98507C12.1108 1.91809 11.948 1.64663 12.0149 1.37873C12.0819 1.11083 12.3534 0.947951 12.6213 1.01492L16.6213 2.01493C16.8892 2.0819 17.052 2.35337 16.9851 2.62126C16.9181 2.88916 16.6466 3.05204 16.3787 2.98507L12.3787 1.98507Z" fill="black"/>
</svg>
`;

const Sort = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4393 9.56066C10.8536 8.97487 10.8536 8.02513 11.4393 7.43934L14.4393 4.43934C15.0251 3.85355 15.9749 3.85355 16.5607 4.43934C17.1464 5.02513 17.1464 5.97487 16.5607 6.56066L13.5607 9.56066C12.9749 10.1464 12.0251 10.1464 11.4393 9.56066Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M19.5607 9.56066C18.9749 10.1464 18.0251 10.1464 17.4393 9.56066L14.4393 6.56066C13.8536 5.97487 13.8536 5.02513 14.4393 4.43934C15.0251 3.85355 15.9749 3.85355 16.5607 4.43934L19.5607 7.43934C20.1464 8.02513 20.1464 8.97487 19.5607 9.56066Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5 6C16.3284 6 17 6.67157 17 7.5V15.5C17 16.3284 16.3284 17 15.5 17C14.6716 17 14 16.3284 14 15.5V7.5C14 6.67157 14.6716 6 15.5 6Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5607 13.4393C12.1464 14.0251 12.1464 14.9749 11.5607 15.5607L8.56066 18.5607C7.97487 19.1464 7.02513 19.1464 6.43934 18.5607C5.85355 17.9749 5.85355 17.0251 6.43934 16.4393L9.43934 13.4393C10.0251 12.8536 10.9749 12.8536 11.5607 13.4393Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.43934 13.4393C4.02513 12.8536 4.97487 12.8536 5.56066 13.4393L8.56066 16.4393C9.14645 17.0251 9.14645 17.9749 8.56066 18.5607C7.97487 19.1464 7.02513 19.1464 6.43934 18.5607L3.43934 15.5607C2.85355 14.9749 2.85355 14.0251 3.43934 13.4393Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.5 17C6.67157 17 6 16.3284 6 15.5L6 7.5C6 6.67157 6.67157 6 7.5 6C8.32843 6 9 6.67157 9 7.5V15.5C9 16.3284 8.32843 17 7.5 17Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.6464 7.35355C10.4512 7.15829 10.4512 6.84171 10.6464 6.64645L13.6464 3.64645C13.8417 3.45118 14.1583 3.45118 14.3536 3.64645C14.5488 3.84171 14.5488 4.15829 14.3536 4.35355L11.3536 7.35355C11.1583 7.54882 10.8417 7.54882 10.6464 7.35355Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.3536 7.35355C17.1583 7.54882 16.8417 7.54882 16.6464 7.35355L13.6464 4.35355C13.4512 4.15829 13.4512 3.84171 13.6464 3.64645C13.8417 3.45118 14.1583 3.45118 14.3536 3.64645L17.3536 6.64645C17.5488 6.84171 17.5488 7.15829 17.3536 7.35355Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 4C14.2761 4 14.5 4.22386 14.5 4.5V14C14.5 14.2761 14.2761 14.5 14 14.5C13.7239 14.5 13.5 14.2761 13.5 14V4.5C13.5 4.22386 13.7239 4 14 4Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.35355 12.6464C9.54882 12.8417 9.54882 13.1583 9.35355 13.3536L6.35355 16.3536C6.15829 16.5488 5.84171 16.5488 5.64645 16.3536C5.45118 16.1583 5.45118 15.8417 5.64645 15.6464L8.64645 12.6464C8.84171 12.4512 9.15829 12.4512 9.35355 12.6464Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.64645 12.6464C2.84171 12.4512 3.15829 12.4512 3.35355 12.6464L6.35355 15.6464C6.54882 15.8417 6.54882 16.1583 6.35355 16.3536C6.15829 16.5488 5.84171 16.5488 5.64645 16.3536L2.64645 13.3536C2.45118 13.1583 2.45118 12.8417 2.64645 12.6464Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 16C5.72386 16 5.5 15.7761 5.5 15.5L5.5 6C5.5 5.72386 5.72386 5.5 6 5.5C6.27614 5.5 6.5 5.72386 6.5 6L6.5 15.5C6.5 15.7761 6.27614 16 6 16Z" fill="black"/>
</svg>
`;

const SpeakerHigh = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.29521 13.5409H3C2.72386 13.5409 2.5 13.317 2.5 13.0409V7.84091C2.5 7.56476 2.72386 7.34091 3 7.34091H6.39936L10.6718 3.62282C10.9953 3.34123 11.5 3.57105 11.5 3.99999V17C11.5 17.4298 10.9936 17.6593 10.6704 17.376L6.29521 13.5409Z" fill="currentColor"/>
<path d="M13.6518 13.7584C13.2329 14.1184 12.6016 14.0707 12.2416 13.6518C11.8816 13.2329 11.9294 12.6016 12.3482 12.2416C12.3761 12.2176 12.4039 12.1914 12.4312 12.1631C12.5494 12.0405 12.6575 11.8815 12.747 11.6934C12.9093 11.3524 13 10.9391 13 10.5C13 9.80772 12.7732 9.19154 12.4312 8.83698C12.4039 8.80862 12.3761 8.78242 12.3482 8.75842C11.9294 8.39845 11.8816 7.76709 12.2416 7.34823C12.6016 6.92938 13.2329 6.88164 13.6518 7.24161C13.7274 7.30658 13.8004 7.37561 13.8707 7.44846C14.5888 8.19298 15 9.31015 15 10.5C15 11.2325 14.8448 11.9396 14.553 12.5528C14.3731 12.9309 14.143 13.2692 13.8707 13.5516C13.8004 13.6244 13.7274 13.6935 13.6518 13.7584Z" fill="currentColor"/>
<path d="M14.5485 16.8362C14.0866 17.1391 13.4667 17.0103 13.1638 16.5484C12.8609 16.0866 12.9897 15.4667 13.4516 15.1638C13.6081 15.0612 13.7594 14.951 13.9049 14.8339C14.0503 14.7168 14.1899 14.5928 14.323 14.4624C14.456 14.3321 14.5824 14.1955 14.7017 14.0532C14.821 13.911 14.933 13.7633 15.0374 13.6105C15.1417 13.4579 15.2383 13.3004 15.3267 13.1386C15.415 12.977 15.4952 12.8112 15.5669 12.6419C15.6384 12.4728 15.7014 12.3004 15.7557 12.125C15.8097 11.9502 15.855 11.7727 15.8913 11.5928C15.9275 11.4138 15.9547 11.2326 15.9729 11.0496C15.9909 10.8679 16 10.6846 16 10.5C16 10.3154 15.9909 10.1321 15.9729 9.95036C15.9547 9.76741 15.9275 9.5862 15.8913 9.40717C15.855 9.2273 15.8097 9.04974 15.7557 8.87497C15.7014 8.69959 15.6384 8.52714 15.5669 8.35813C15.4952 8.18878 15.415 8.02302 15.3267 7.86141C15.2383 7.69962 15.1417 7.54212 15.0374 7.38948C14.933 7.2367 14.821 7.08893 14.7017 6.94674C14.5824 6.80444 14.456 6.66786 14.323 6.53754C14.1899 6.40715 14.0503 6.28316 13.9049 6.16607C13.7594 6.04894 13.6081 5.93883 13.4516 5.83618C12.9897 5.53328 12.8609 4.91335 13.1638 4.45154C13.4667 3.98973 14.0866 3.86091 14.5485 4.16381C14.7592 4.30203 14.9629 4.45032 15.159 4.6081C15.355 4.76592 15.5431 4.93308 15.7226 5.10894C15.9022 5.28486 16.0729 5.46933 16.2342 5.66164C16.3956 5.85405 16.5473 6.05413 16.6887 6.26116C16.8303 6.46829 16.9614 6.68217 17.0816 6.90207C17.2018 7.12203 17.311 7.34779 17.4087 7.57861C17.5063 7.80921 17.5923 8.04464 17.6664 8.28415C17.7402 8.52295 17.8021 8.76558 17.8517 9.01133C17.9011 9.25581 17.9383 9.50315 17.9631 9.75269C17.9876 10.0001 18 10.2494 18 10.5C18 10.7506 17.9876 10.9999 17.9631 11.2473C17.9383 11.4968 17.9011 11.7442 17.8517 11.9887C17.8021 12.2344 17.7402 12.477 17.6664 12.7158C17.5923 12.9553 17.5063 13.1908 17.4087 13.4214C17.311 13.6522 17.2018 13.878 17.0816 14.0979C16.9614 14.3178 16.8303 14.5317 16.6887 14.7388C16.5473 14.9458 16.3956 15.1459 16.2342 15.3383C16.0729 15.5307 15.9022 15.7151 15.7226 15.891C15.5431 16.0669 15.355 16.2341 15.159 16.3919C14.9629 16.5497 14.7592 16.698 14.5485 16.8362Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.67176 2.12282L5.39936 5.84091H2C1.72386 5.84091 1.5 6.06476 1.5 6.34091V11.5409C1.5 11.817 1.72386 12.0409 2 12.0409H5.29521L9.67042 15.876C9.99362 16.1593 10.5 15.9298 10.5 15.5V2.49999C10.5 2.07105 9.99534 1.84123 9.67176 2.12282ZM5.88379 6.74498L9.5 3.59795V14.3968L6.01411 11.3413C5.93704 11.1645 5.76073 11.0409 5.55556 11.0409H2.5V6.84091H5.39356C5.55132 6.89541 5.73636 6.87329 5.88379 6.74498Z" fill="black"/>
<path d="M13.3259 11.8792C13.1165 12.0592 12.8008 12.0353 12.6208 11.8259C12.4408 11.6165 12.4647 11.3008 12.6741 11.1208C12.7139 11.0866 12.753 11.0497 12.7911 11.0102C12.9478 10.8477 13.0864 10.6438 13.1985 10.4082C13.3931 9.99922 13.5 9.51248 13.5 9.00001C13.5 8.18332 13.2271 7.44189 12.7911 6.98984C12.753 6.95036 12.7139 6.91345 12.6741 6.87921C12.4647 6.69923 12.4408 6.38354 12.6208 6.17412C12.8008 5.96469 13.1165 5.94082 13.3259 6.12081C13.3896 6.17553 13.4512 6.23386 13.5108 6.29558C14.1349 6.94261 14.5 7.93454 14.5 9.00001C14.5 9.65916 14.3609 10.2928 14.1015 10.8379C13.9442 11.1685 13.7446 11.462 13.5108 11.7044C13.4512 11.7662 13.3896 11.8245 13.3259 11.8792Z" fill="black"/>
<path d="M14.2742 14.9181C14.0433 15.0695 13.7334 15.0051 13.5819 14.7742C13.4305 14.5433 13.4949 14.2334 13.7258 14.0819C13.8958 13.9704 14.0602 13.8507 14.2184 13.7234C14.3765 13.5961 14.5282 13.4614 14.6729 13.3196C14.8175 13.1779 14.955 13.0293 15.0848 12.8745C15.2146 12.7198 15.3366 12.5589 15.4502 12.3926C15.5638 12.2263 15.669 12.0547 15.7654 11.8784C15.8617 11.7022 15.9492 11.5215 16.0273 11.3367C16.1054 11.1523 16.1742 10.9641 16.2333 10.7727C16.2923 10.5819 16.3418 10.3881 16.3814 10.1918C16.4209 9.99639 16.4506 9.79864 16.4704 9.59904C16.4901 9.40092 16.5 9.20109 16.5 9C16.5 8.7989 16.4901 8.59907 16.4704 8.40095C16.4506 8.20135 16.4209 8.00361 16.3814 7.80821C16.3418 7.61187 16.2923 7.41805 16.2333 7.22727C16.1742 7.03585 16.1054 6.84766 16.0273 6.66326C15.9492 6.47854 15.8617 6.29778 15.7654 6.12158C15.669 5.94526 15.5638 5.77367 15.4502 5.60741C15.3366 5.44106 15.2146 5.28022 15.0848 5.12547C14.955 4.97066 14.8175 4.82212 14.6729 4.68039C14.5282 4.53864 14.3765 4.40386 14.2184 4.27658C14.0602 4.14929 13.8958 4.02963 13.7258 3.91809C13.4949 3.76664 13.4305 3.45668 13.5819 3.22577C13.7334 2.99487 14.0433 2.93045 14.2742 3.0819C14.4714 3.21123 14.662 3.34998 14.8454 3.4976C15.0288 3.64523 15.2048 3.8016 15.3727 3.96609C15.5406 4.13062 15.7003 4.30311 15.8511 4.48292C16.0019 4.66278 16.1437 4.84978 16.2759 5.04324C16.4081 5.23675 16.5306 5.43654 16.6429 5.64191C16.7551 5.84728 16.8571 6.05804 16.9483 6.27349C17.0393 6.4887 17.1196 6.70838 17.1887 6.93186C17.2576 7.15465 17.3153 7.38101 17.3616 7.6103C17.4077 7.83841 17.4424 8.06922 17.4655 8.30211C17.4885 8.53306 17.5 8.76588 17.5 9C17.5 9.23411 17.4885 9.46693 17.4655 9.69788C17.4424 9.93077 17.4077 10.1616 17.3616 10.3897C17.3153 10.619 17.2576 10.8453 17.1887 11.0681C17.1196 11.2916 17.0393 11.5113 16.9483 11.7265C16.8571 11.9419 16.7551 12.1527 16.6429 12.3581C16.5306 12.5635 16.4081 12.7632 16.2759 12.9567C16.1437 13.1502 16.0019 13.3372 15.8511 13.5171C15.7003 13.6969 15.5406 13.8694 15.3727 14.0339C15.2048 14.1984 15.0288 14.3548 14.8454 14.5024C14.662 14.65 14.4714 14.7888 14.2742 14.9181Z" fill="black"/>
</svg>
`;

const SpeakerLow = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.29521 13.5409H3C2.72386 13.5409 2.5 13.317 2.5 13.0409V7.84091C2.5 7.56476 2.72386 7.34091 3 7.34091H6.39936L10.6718 3.62282C10.9953 3.34123 11.5 3.57105 11.5 3.99999V17C11.5 17.4298 10.9936 17.6593 10.6704 17.376L6.29521 13.5409Z" fill="currentColor"/>
<path d="M13.6518 13.7584C13.2329 14.1184 12.6016 14.0707 12.2416 13.6518C11.8816 13.2329 11.9293 12.6016 12.3482 12.2416C12.3761 12.2176 12.4038 12.1914 12.4312 12.1631C12.5494 12.0405 12.6575 11.8815 12.747 11.6934C12.9092 11.3524 13 10.9391 13 10.5C13 9.80772 12.7732 9.19154 12.4312 8.83698C12.4038 8.80862 12.3761 8.78242 12.3482 8.75842C11.9293 8.39845 11.8816 7.76709 12.2416 7.34823C12.6016 6.92938 13.2329 6.88164 13.6518 7.24161C13.7274 7.30658 13.8004 7.37561 13.8706 7.44846C14.5888 8.19298 15 9.31015 15 10.5C15 11.2325 14.8447 11.9396 14.553 12.5528C14.373 12.9309 14.143 13.2692 13.8706 13.5516C13.8004 13.6244 13.7274 13.6935 13.6518 13.7584Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.67176 2.12282L5.39936 5.84091H2C1.72386 5.84091 1.5 6.06476 1.5 6.34091V11.5409C1.5 11.817 1.72386 12.0409 2 12.0409H5.29521L9.67042 15.876C9.99362 16.1593 10.5 15.9298 10.5 15.5V2.49999C10.5 2.07105 9.99534 1.84123 9.67176 2.12282ZM5.88379 6.74498L9.5 3.59795V14.3968L6.01411 11.3413C5.93704 11.1645 5.76073 11.0409 5.55556 11.0409H2.5V6.84091H5.39356C5.55132 6.89541 5.73636 6.87329 5.88379 6.74498Z" fill="black"/>
<path d="M13.3259 11.8792C13.1165 12.0592 12.8008 12.0353 12.6208 11.8259C12.4408 11.6165 12.4647 11.3008 12.6741 11.1208C12.714 11.0866 12.753 11.0497 12.7911 11.0102C12.9478 10.8477 13.0864 10.6438 13.1985 10.4082C13.3931 9.99922 13.5 9.51248 13.5 9.00001C13.5 8.18332 13.2271 7.44189 12.7911 6.98984C12.753 6.95036 12.714 6.91345 12.6741 6.87921C12.4647 6.69923 12.4408 6.38354 12.6208 6.17412C12.8008 5.96469 13.1165 5.94082 13.3259 6.12081C13.3896 6.17553 13.4513 6.23386 13.5108 6.29558C14.1349 6.94261 14.5 7.93454 14.5 9.00001C14.5 9.65916 14.3609 10.2928 14.1015 10.8379C13.9442 11.1685 13.7446 11.462 13.5108 11.7044C13.4513 11.7662 13.3896 11.8245 13.3259 11.8792Z" fill="black"/>
</svg>
`;

const SpeakerOff = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.29521 13.5409H3C2.72386 13.5409 2.5 13.317 2.5 13.0409V7.84091C2.5 7.56476 2.72386 7.34091 3 7.34091H6.39936L10.6718 3.62282C10.9953 3.34123 11.5 3.57105 11.5 3.99999V17C11.5 17.4298 10.9936 17.6593 10.6704 17.376L6.29521 13.5409Z" fill="currentColor"/>
<path d="M13.6518 13.7584C13.2329 14.1184 12.6016 14.0707 12.2416 13.6518C11.8816 13.2329 11.9293 12.6016 12.3482 12.2416C12.3761 12.2176 12.4038 12.1914 12.4312 12.1631C12.5494 12.0405 12.6575 11.8815 12.747 11.6934C12.9092 11.3524 13 10.9391 13 10.5C13 9.80772 12.7732 9.19154 12.4312 8.83698C12.4038 8.80862 12.3761 8.78242 12.3482 8.75842C11.9293 8.39845 11.8816 7.76709 12.2416 7.34823C12.6016 6.92938 13.2329 6.88164 13.6518 7.24161C13.7274 7.30658 13.8004 7.37561 13.8706 7.44846C14.5888 8.19298 15 9.31015 15 10.5C15 11.2325 14.8447 11.9396 14.553 12.5528C14.373 12.9309 14.143 13.2692 13.8706 13.5516C13.8004 13.6244 13.7274 13.6935 13.6518 13.7584Z" fill="currentColor"/>
<path d="M14.5484 16.8362C14.0866 17.1391 13.4667 17.0103 13.1638 16.5484C12.8609 16.0866 12.9897 15.4667 13.4515 15.1638C13.608 15.0612 13.7593 14.951 13.9048 14.8339C14.0503 14.7168 14.1899 14.5928 14.3229 14.4624C14.456 14.3321 14.5824 14.1955 14.7017 14.0532C14.8209 13.911 14.933 13.7633 15.0374 13.6105C15.1417 13.4579 15.2382 13.3004 15.3267 13.1386C15.415 12.977 15.4952 12.8112 15.5669 12.6419C15.6384 12.4728 15.7014 12.3004 15.7556 12.125C15.8097 11.9502 15.855 11.7727 15.8913 11.5928C15.9274 11.4138 15.9547 11.2326 15.9729 11.0496C15.9909 10.8679 16 10.6846 16 10.5C16 10.3154 15.9909 10.1321 15.9729 9.95036C15.9547 9.76741 15.9274 9.5862 15.8913 9.40717C15.855 9.2273 15.8097 9.04974 15.7556 8.87497C15.7014 8.69959 15.6384 8.52714 15.5669 8.35813C15.4952 8.18878 15.415 8.02302 15.3267 7.86141C15.2382 7.69962 15.1417 7.54212 15.0374 7.38948C14.933 7.2367 14.8209 7.08893 14.7017 6.94674C14.5824 6.80444 14.456 6.66786 14.3229 6.53754C14.1899 6.40715 14.0503 6.28316 13.9048 6.16607C13.7593 6.04894 13.608 5.93883 13.4515 5.83618C12.9897 5.53328 12.8609 4.91335 13.1638 4.45154C13.4667 3.98973 14.0866 3.86091 14.5484 4.16381C14.7592 4.30203 14.9629 4.45032 15.1589 4.6081C15.355 4.76592 15.5431 4.93308 15.7226 5.10894C15.9022 5.28486 16.0729 5.46933 16.2342 5.66164C16.3955 5.85405 16.5473 6.05413 16.6887 6.26116C16.8302 6.46829 16.9614 6.68217 17.0816 6.90207C17.2018 7.12203 17.311 7.34779 17.4087 7.57861C17.5063 7.80921 17.5923 8.04464 17.6664 8.28415C17.7402 8.52295 17.8021 8.76558 17.8517 9.01133C17.9011 9.25581 17.9383 9.50315 17.9631 9.75269C17.9876 10.0001 18 10.2494 18 10.5C18 10.7506 17.9876 10.9999 17.9631 11.2473C17.9383 11.4968 17.9011 11.7442 17.8517 11.9887C17.8021 12.2344 17.7402 12.477 17.6664 12.7158C17.5923 12.9553 17.5063 13.1908 17.4087 13.4214C17.311 13.6522 17.2018 13.878 17.0816 14.0979C16.9614 14.3178 16.8302 14.5317 16.6887 14.7388C16.5473 14.9458 16.3955 15.1459 16.2342 15.3383C16.0729 15.5307 15.9022 15.7151 15.7226 15.891C15.5431 16.0669 15.355 16.2341 15.1589 16.3919C14.9629 16.5497 14.7592 16.698 14.5484 16.8362Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.67176 2.12282L5.39936 5.84091H2C1.72386 5.84091 1.5 6.06476 1.5 6.34091V11.5409C1.5 11.817 1.72386 12.0409 2 12.0409H5.29521L9.67042 15.876C9.99362 16.1593 10.5 15.9298 10.5 15.5V2.49999C10.5 2.07105 9.99534 1.84123 9.67176 2.12282ZM5.88379 6.74498L9.5 3.59795V14.3968L6.01411 11.3413C5.93704 11.1645 5.76073 11.0409 5.55556 11.0409H2.5V6.84091H5.39356C5.55132 6.89541 5.73636 6.87329 5.88379 6.74498Z" fill="black"/>
<path d="M13.3259 11.8792C13.1165 12.0592 12.8008 12.0353 12.6208 11.8259C12.4408 11.6165 12.4647 11.3008 12.6741 11.1208C12.714 11.0866 12.753 11.0497 12.7911 11.0102C12.9478 10.8477 13.0864 10.6438 13.1985 10.4082C13.3931 9.99922 13.5 9.51248 13.5 9.00001C13.5 8.18332 13.2271 7.44189 12.7911 6.98984C12.753 6.95036 12.714 6.91345 12.6741 6.87921C12.4647 6.69923 12.4408 6.38354 12.6208 6.17412C12.8008 5.96469 13.1165 5.94082 13.3259 6.12081C13.3896 6.17553 13.4513 6.23386 13.5108 6.29558C14.1349 6.94261 14.5 7.93454 14.5 9.00001C14.5 9.65916 14.3609 10.2928 14.1015 10.8379C13.9442 11.1685 13.7446 11.462 13.5108 11.7044C13.4513 11.7662 13.3896 11.8245 13.3259 11.8792Z" fill="black"/>
<path d="M14.2743 14.9181C14.0433 15.0695 13.7334 15.0051 13.5819 14.7742C13.4305 14.5433 13.4949 14.2334 13.7258 14.0819C13.8959 13.9704 14.0603 13.8507 14.2184 13.7234C14.3765 13.5961 14.5282 13.4614 14.6729 13.3196C14.8175 13.1779 14.9551 13.0293 15.0849 12.8745C15.2146 12.7198 15.3366 12.5589 15.4502 12.3926C15.5638 12.2263 15.6691 12.0547 15.7654 11.8784C15.8618 11.7022 15.9492 11.5215 16.0274 11.3367C16.1054 11.1523 16.1742 10.9641 16.2334 10.7727C16.2924 10.5819 16.3418 10.3881 16.3814 10.1918C16.4209 9.99639 16.4506 9.79864 16.4704 9.59904C16.4901 9.40092 16.5 9.20109 16.5 9C16.5 8.7989 16.4901 8.59907 16.4704 8.40095C16.4506 8.20135 16.4209 8.00361 16.3814 7.80821C16.3418 7.61187 16.2924 7.41805 16.2334 7.22727C16.1742 7.03585 16.1054 6.84766 16.0274 6.66326C15.9492 6.47854 15.8618 6.29778 15.7654 6.12158C15.6691 5.94526 15.5638 5.77367 15.4502 5.60741C15.3366 5.44106 15.2146 5.28022 15.0849 5.12547C14.9551 4.97066 14.8175 4.82212 14.6729 4.68039C14.5282 4.53864 14.3765 4.40386 14.2184 4.27658C14.0603 4.14929 13.8959 4.02963 13.7258 3.91809C13.4949 3.76664 13.4305 3.45668 13.5819 3.22577C13.7334 2.99487 14.0433 2.93045 14.2743 3.0819C14.4714 3.21123 14.6621 3.34998 14.8454 3.4976C15.0289 3.64523 15.2048 3.8016 15.3727 3.96609C15.5407 4.13062 15.7003 4.30311 15.8511 4.48292C16.0019 4.66278 16.1437 4.84978 16.2759 5.04324C16.4081 5.23675 16.5306 5.43654 16.6429 5.64191C16.7552 5.84728 16.8571 6.05804 16.9483 6.27349C17.0394 6.4887 17.1196 6.70838 17.1887 6.93186C17.2576 7.15465 17.3154 7.38101 17.3617 7.6103C17.4077 7.83841 17.4424 8.06922 17.4655 8.30211C17.4885 8.53306 17.5 8.76588 17.5 9C17.5 9.23411 17.4885 9.46693 17.4655 9.69788C17.4424 9.93077 17.4077 10.1616 17.3617 10.3897C17.3154 10.619 17.2576 10.8453 17.1887 11.0681C17.1196 11.2916 17.0394 11.5113 16.9483 11.7265C16.8571 11.9419 16.7552 12.1527 16.6429 12.3581C16.5306 12.5635 16.4081 12.7632 16.2759 12.9567C16.1437 13.1502 16.0019 13.3372 15.8511 13.5171C15.7003 13.6969 15.5407 13.8694 15.3727 14.0339C15.2048 14.1984 15.0289 14.3548 14.8454 14.5024C14.6621 14.65 14.4714 14.7888 14.2743 14.9181Z" fill="black"/>
<path d="M1.68216 3.38598C1.469 3.21043 1.4385 2.89532 1.61405 2.68216C1.78959 2.469 2.10471 2.4385 2.31787 2.61405L19.3179 16.614C19.531 16.7896 19.5615 17.1047 19.386 17.3179C19.2104 17.531 18.8953 17.5615 18.6822 17.386L1.68216 3.38598Z" fill="black"/>
</svg>
`;

const Square = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M8 7H16C16.2761 7 16.5 7.22386 16.5 7.5V15.5C16.5 15.7761 16.2761 16 16 16H8C7.72386 16 7.5 15.7761 7.5 15.5V7.5C7.5 7.22386 7.72386 7 8 7Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14 5.5H6C5.72386 5.5 5.5 5.72386 5.5 6V14C5.5 14.2761 5.72386 14.5 6 14.5H14C14.2761 14.5 14.5 14.2761 14.5 14V6C14.5 5.72386 14.2761 5.5 14 5.5ZM6.5 13.5V6.5H13.5V13.5H6.5Z" fill="black"/>
</svg>
`;

const Star = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 15.8995L6.86475 18L7.39781 12.8702L4 9.03851L8.96471 7.96859L11.5 3.5L14.0353 7.96859L19 9.03851L15.6022 12.8702L16.1353 18L11.5 15.8995Z" fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.57113 17.4554L10 15.4484L14.4289 17.4554C14.7806 17.6148 15.1725 17.3324 15.1326 16.9483L14.6223 12.0373L17.8741 8.37025C18.128 8.08399 17.9794 7.63033 17.6053 7.54973L12.8596 6.52701L10.4349 2.25327C10.2433 1.91558 9.75672 1.91558 9.56513 2.25327L7.14039 6.52701L2.39468 7.54973C2.02067 7.63033 1.87207 8.08399 2.12591 8.37025L5.37776 12.0373L4.86744 16.9483C4.82753 17.3324 5.21945 17.6148 5.57113 17.4554ZM9.79364 14.4441L5.95215 16.1849L6.39514 11.9218C6.40963 11.7824 6.36492 11.6433 6.27192 11.5384L3.44186 8.34701L7.57005 7.45737C7.70938 7.42735 7.82927 7.33929 7.8996 7.21533L10 3.51324L12.1004 7.21533C12.1708 7.33929 12.2906 7.42735 12.43 7.45737L16.5582 8.34701L13.7281 11.5384C13.6351 11.6433 13.5904 11.7824 13.6049 11.9218L14.0479 16.1849L10.2064 14.4441C10.0752 14.3846 9.9248 14.3846 9.79364 14.4441Z" fill="black"/>
</svg>
`;

const Stopwatch = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M18.5 11.5C18.5 15.0899 15.5899 18 12 18C8.41015 18 5.5 15.0899 5.5 11.5C5.5 7.91015 8.41015 5 12 5C15.5899 5 18.5 7.91015 18.5 11.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 16C14.4853 16 16.5 13.9853 16.5 11.5C16.5 9.01472 14.4853 7 12 7C9.51472 7 7.5 9.01472 7.5 11.5C7.5 13.9853 9.51472 16 12 16ZM12 18C15.5899 18 18.5 15.0899 18.5 11.5C18.5 7.91015 15.5899 5 12 5C8.41015 5 5.5 7.91015 5.5 11.5C5.5 15.0899 8.41015 18 12 18Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.5C13.0376 16.5 15.5 14.0376 15.5 11C15.5 7.96243 13.0376 5.5 10 5.5C6.96243 5.5 4.5 7.96243 4.5 11C4.5 14.0376 6.96243 16.5 10 16.5ZM10 17.5C13.5899 17.5 16.5 14.5899 16.5 11C16.5 7.41015 13.5899 4.5 10 4.5C6.41015 4.5 3.5 7.41015 3.5 11C3.5 14.5899 6.41015 17.5 10 17.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.64645 4.6464C3.84171 4.45114 4.15829 4.45114 4.35355 4.6464L5.85355 6.1464C6.04882 6.34166 6.04882 6.65824 5.85355 6.85351C5.65829 7.04877 5.34171 7.04877 5.14645 6.85351L3.64645 5.35351C3.45118 5.15824 3.45118 4.84166 3.64645 4.6464Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1464 6.8536C14.3417 7.04886 14.6583 7.04886 14.8536 6.8536L16.3536 5.3536C16.5488 5.15834 16.5488 4.84176 16.3536 4.64649C16.1583 4.45123 15.8417 4.45123 15.6464 4.64649L14.1464 6.14649C13.9512 6.34176 13.9512 6.65834 14.1464 6.8536Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8904 8.68767C13.0629 8.9033 13.028 9.21795 12.8123 9.39045L10.3123 11.3905C10.0967 11.563 9.78207 11.528 9.60956 11.3124C9.43706 11.0967 9.47202 10.7821 9.68765 10.6096L12.1876 8.60958C12.4033 8.43708 12.7179 8.47204 12.8904 8.68767Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 5V3H10.5V5H9.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 3C8 2.72386 8.22386 2.5 8.5 2.5H11.5C11.7761 2.5 12 2.72386 12 3C12 3.27614 11.7761 3.5 11.5 3.5H8.5C8.22386 3.5 8 3.27614 8 3Z" fill="black"/>
</svg>
`;

const StudioBackdrop = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M5.25 3.5C5.25 3.22386 5.47386 3 5.75 3H16.75C17.0261 3 17.25 3.22386 17.25 3.5V10.5C17.25 10.7761 17.0261 11 16.75 11H5.75C5.47386 11 5.25 10.7761 5.25 10.5V3.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 5V9H15.25V5H7.25ZM5.75 3C5.47386 3 5.25 3.22386 5.25 3.5V10.5C5.25 10.7761 5.47386 11 5.75 11H16.75C17.0261 11 17.25 10.7761 17.25 10.5V3.5C17.25 3.22386 17.0261 3 16.75 3H5.75Z" fill="currentColor"/>
<path d="M5.25 10.5C5.25 10.2239 5.47386 10 5.75 10H16.75C17.0261 10 17.25 10.2239 17.25 10.5V17.5C17.25 17.7761 17.0261 18 16.75 18H5.75C5.47386 18 5.25 17.7761 5.25 17.5V10.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 12V16H15.25V12H7.25ZM5.75 10C5.47386 10 5.25 10.2239 5.25 10.5V17.5C5.25 17.7761 5.47386 18 5.75 18H16.75C17.0261 18 17.25 17.7761 17.25 17.5V10.5C17.25 10.2239 17.0261 10 16.75 10H5.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 3C3.25 2.58579 3.58579 2.25 4 2.25H18.5C18.9142 2.25 19.25 2.58579 19.25 3C19.25 3.41421 18.9142 3.75 18.5 3.75H4C3.58579 3.75 3.25 3.41421 3.25 3Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.57575 16.5L7.21154 10.7747L5.28849 10.2253L3.37954 16.9066C3.1514 17.7051 3.75097 18.5 4.58145 18.5H17.9186C18.7491 18.5 19.3486 17.7051 19.1205 16.9066L17.2115 10.2253L15.2885 10.7747L16.9243 16.5H5.57575Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.5 3C3.5 2.44772 3.94772 2 4.5 2H15.5C16.0523 2 16.5 2.44771 16.5 3V10C16.5 10.5523 16.0523 11 15.5 11H4.5C3.94772 11 3.5 10.5523 3.5 10V3ZM15.5 3H4.5V10H15.5V3Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.25 2.5C2.25 2.22386 2.47386 2 2.75 2H17.25C17.5261 2 17.75 2.22386 17.75 2.5C17.75 2.77614 17.5261 3 17.25 3H2.75C2.47386 3 2.25 2.77614 2.25 2.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.49029 10.098L3.1099 17H16.8901L15.5097 10.098L16.4903 9.90192L17.8707 16.8039C17.9944 17.4227 17.5211 18 16.8901 18H3.1099C2.47885 18 2.00556 17.4227 2.12932 16.8039L3.50971 9.90192L4.49029 10.098Z" fill="black"/>
</svg>
`;

const StudioLightFront = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3 8C11.8523 8 12.3 7.55228 12.3 7C12.3 6.44772 11.8523 6 11.3 6C10.7477 6 10.3 6.44772 10.3 7C10.3 7.55228 10.7477 8 11.3 8ZM11.3 10C12.9568 10 14.3 8.65685 14.3 7C14.3 5.34315 12.9568 4 11.3 4C9.64313 4 8.29999 5.34315 8.29999 7C8.29999 8.65685 9.64313 10 11.3 10Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.31348 3.50774C6.53571 2.17443 7.49746 0.5 9.04104 0.5H13.559C15.1025 0.5 16.0643 2.17443 15.2865 3.50774L13.5388 6.50387L11.8112 5.49613L13.559 2.5H9.04104L10.7888 5.49613L9.06122 6.50387L7.31348 3.50774Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.2865 10.4923C16.0643 11.8256 15.1025 13.5 13.5589 13.5H9.04101C7.49743 13.5 6.53569 11.8256 7.31345 10.4923L9.0612 7.49613L10.7888 8.50387L9.04101 11.5H13.5589L11.8112 8.50387L13.5388 7.49613L15.2865 10.4923Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.90939 10.2956C6.58028 11.1817 4.79999 10.2289 4.79999 8.63148V5.36851C4.79999 3.77112 6.58028 2.81834 7.90939 3.70441L10.8547 5.66795L9.96665 7L10.8547 8.33205L7.90939 10.2956ZM9.24721 7L6.79999 5.36851L6.79999 8.63148L9.24721 7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.6906 3.70442C16.0197 2.81834 17.8 3.77113 17.8 5.36852V8.63148C17.8 10.2289 16.0197 11.1817 14.6906 10.2956L11.7453 8.33205L12.6333 7L11.7453 5.66795L14.6906 3.70442ZM13.3528 7L15.8 8.63148L15.8 5.36852L13.3528 7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7138 18.4061C16.4895 18.9108 15.8985 19.1381 15.3938 18.9138L12.3 17.5388V18.5C12.3 19.0523 11.8523 19.5 11.3 19.5C10.7477 19.5 10.3 19.0523 10.3 18.5V17.5388L7.20612 18.9138C6.70144 19.1381 6.11047 18.9108 5.88617 18.4061C5.66187 17.9015 5.88916 17.3105 6.39384 17.0862L10.3 15.3501V13C10.3 12.4477 10.7477 12 11.3 12C11.8523 12 12.3 12.4477 12.3 13V15.3501L16.2061 17.0862C16.7108 17.3105 16.9381 17.9015 16.7138 18.4061Z" fill="currentColor"/>
<path d="M8.29999 2H14.3V12H8.29999V2Z" fill="currentColor"/>
<path d="M16.3 4V10H6.29999V4L16.3 4Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 8.5C10.8284 8.5 11.5 7.82843 11.5 7C11.5 6.17157 10.8284 5.5 10 5.5C9.17157 5.5 8.5 6.17157 8.5 7C8.5 7.82843 9.17157 8.5 10 8.5ZM10 9.5C11.3807 9.5 12.5 8.38071 12.5 7C12.5 5.61929 11.3807 4.5 10 4.5C8.61929 4.5 7.5 5.61929 7.5 7C7.5 8.38071 8.61929 9.5 10 9.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.96046 2.76282C5.36988 1.76289 6.0907 0.5 7.25201 0.5L12.748 0.5C13.9093 0.5 14.6301 1.7629 14.0395 2.76282L12.3465 5.62927L11.4855 5.12073L13.1785 2.25427C13.3753 1.92097 13.1351 1.5 12.748 1.5L7.25201 1.5C6.86491 1.5 6.62463 1.92097 6.82149 2.25427L8.51449 5.12073L7.65346 5.62927L5.96046 2.76282Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.0395 11.2372C14.6301 12.2371 13.9093 13.5 12.748 13.5H7.25203C6.09072 13.5 5.3699 12.2371 5.96048 11.2372L7.65348 8.37073L8.51451 8.87927L6.82151 11.7457C6.62465 12.079 6.86493 12.5 7.25203 12.5H12.748C13.1351 12.5 13.3754 12.079 13.1785 11.7457L11.4855 8.87927L12.3465 8.37073L14.0395 11.2372Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.84829 10.3389C4.85289 11.0214 3.5 10.3087 3.5 9.10177L3.5 4.89823C3.5 3.69129 4.85289 2.97858 5.84829 3.66114L8.65776 5.58764L8.09224 6.41236L5.28276 4.48587C4.95096 4.25835 4.5 4.49592 4.5 4.89823V9.10177C4.5 9.50408 4.95096 9.74165 5.28277 9.51413L8.09224 7.58764L8.65776 8.41237L5.84829 10.3389Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1517 3.66114C15.1471 2.97858 16.5 3.69129 16.5 4.89823V9.10177C16.5 10.3087 15.1471 11.0214 14.1517 10.3389L11.3422 8.41236L11.9078 7.58764L14.7172 9.51413C15.049 9.74165 15.5 9.50408 15.5 9.10177V4.89823C15.5 4.49592 15.049 4.25835 14.7172 4.48587L11.9078 6.41236L11.3422 5.58763L14.1517 3.66114Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.9569 18.2031C14.8448 18.4554 14.5493 18.5691 14.2969 18.4569L10.5 16.7694V18.5C10.5 18.7761 10.2761 19 10 19C9.72385 19 9.5 18.7761 9.5 18.5V16.7694L5.70307 18.4569C5.45072 18.5691 5.15524 18.4554 5.04309 18.2031C4.93094 17.9507 5.04459 17.6552 5.29693 17.5431L9.5 15.6751V13C9.5 12.7239 9.72385 12.5 10 12.5C10.2761 12.5 10.5 12.7239 10.5 13V15.6751L14.7031 17.5431C14.9554 17.6552 15.0691 17.9507 14.9569 18.2031Z" fill="black"/>
</svg>
`;

const StudioLightSide = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1210_544)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8158 5.86381C16.1367 4.89339 18 5.83656 18 7.47557V9.52443C18 11.1634 16.1367 12.1066 14.8158 11.1362L12.9079 9.73446L13.8149 8.5L12.9079 7.26555L14.8158 5.86381ZM14.6056 8.5L16 9.52443V7.47557L14.6056 8.5Z" fill="currentColor"/>
<path d="M12.5 8.75L16.25 6.15192V11.3481L12.5 8.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.4138 18.9077C15.1895 19.4124 14.5985 19.6397 14.0939 19.4154L11 18.0403V19.0015C11 19.5538 10.5523 20.0015 9.99999 20.0015C9.44771 20.0015 8.99999 19.5538 8.99999 19.0015V18.0403L5.90613 19.4154C5.40145 19.6397 4.81049 19.4124 4.58618 18.9077C4.36188 18.403 4.58917 17.812 5.09386 17.5877L8.99999 15.8517V12.0015C8.99999 11.4493 9.44771 11.0015 9.99999 11.0015C10.5523 11.0015 11 11.4493 11 12.0015V15.8517L14.9061 17.5877C15.4108 17.812 15.6381 18.403 15.4138 18.9077Z" fill="currentColor"/>
<path d="M7.5 7C7.5 6.44772 7.94772 6 8.5 6H11.5C12.0523 6 12.5 6.44772 12.5 7V10C12.5 10.5523 12.0523 11 11.5 11H8.5C7.94772 11 7.5 10.5523 7.5 10V7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 7C6.5 5.89543 7.39543 5 8.5 5H11.5C12.6046 5 13.5 5.89543 13.5 7V10C13.5 11.1046 12.6046 12 11.5 12H8.5C7.39543 12 6.5 11.1046 6.5 10V7ZM11.5 7H8.5V10H11.5V7Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 6.70865C11.9024 6.31812 11.9024 5.68496 12.2929 5.29444L14.9863 2.60101C15.3768 2.21049 16.01 2.21049 16.4005 2.60101C16.791 2.99154 16.791 3.6247 16.4005 4.01523L13.7071 6.70865C13.3166 7.09917 12.6834 7.09917 12.2929 6.70865Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.2073 14.2069C15.8169 14.5975 15.1838 14.5977 14.7931 14.2073L12.2931 11.7089C11.9025 11.3185 11.9023 10.6853 12.2927 10.2947C12.6831 9.90401 13.3162 9.90382 13.7069 10.2942L16.2069 12.7927C16.5975 13.1831 16.5977 13.8163 16.2073 14.2069Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1679 4.87199C15.1648 4.20743 16.5 4.92202 16.5 6.12006V9.38303C16.5 10.5811 15.1648 11.2957 14.1679 10.6311L11.2227 8.66757L11.7773 7.83552L14.7226 9.79905C15.0549 10.0206 15.5 9.78237 15.5 9.38303V6.12006C15.5 5.72071 15.0549 5.48252 14.7226 5.70404L11.7773 7.66757L11.2227 6.83552L14.1679 4.87199Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4569 17.9546C13.3448 18.207 13.0493 18.3206 12.7969 18.2084L9 16.5209V18.2515C9 18.5277 8.77614 18.7515 8.5 18.7515C8.22385 18.7515 8 18.5277 8 18.2515L8 16.5209L4.20307 18.2084C3.95072 18.3206 3.65524 18.207 3.54309 17.9546C3.43094 17.7023 3.54459 17.4068 3.79693 17.2946L8 15.4266V11.2515C8 10.9754 8.22385 10.7515 8.5 10.7515C8.77614 10.7515 9 10.9754 9 11.2515V15.4266L13.2031 17.2946C13.4554 17.4068 13.5691 17.7023 13.4569 17.9546Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 5.75154C5 4.92311 5.67157 4.25154 6.5 4.25154H10.5C11.3284 4.25154 12 4.92311 12 5.75154V9.75154C12 10.58 11.3284 11.2515 10.5 11.2515H6.5C5.67157 11.2515 5 10.58 5 9.75154V5.75154ZM6.5 5.25154C6.22386 5.25154 6 5.4754 6 5.75154V9.75154C6 10.0277 6.22386 10.2515 6.5 10.2515H10.5C10.7761 10.2515 11 10.0277 11 9.75154V5.75154C11 5.4754 10.7761 5.25154 10.5 5.25154H6.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.1464 5.6051C10.9512 5.40983 10.9512 5.09325 11.1464 4.89799L14.1464 1.89799C14.3417 1.70273 14.6583 1.70273 14.8536 1.89799C15.0488 2.09325 15.0488 2.40983 14.8536 2.6051L11.8536 5.6051C11.6583 5.80036 11.3417 5.80036 11.1464 5.6051Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.8536 13.6051C14.6583 13.8004 14.3417 13.8004 14.1464 13.6051L11.1464 10.6051C10.9512 10.4098 10.9512 10.0932 11.1464 9.89799C11.3417 9.70272 11.6583 9.70272 11.8535 9.89799L14.8536 12.898C15.0488 13.0932 15.0488 13.4098 14.8536 13.6051Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1210_544">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Sun = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M14 10.5C14 12.433 12.433 14 10.5 14C8.567 14 7 12.433 7 10.5C7 8.567 8.567 7 10.5 7C12.433 7 14 8.567 14 10.5Z" fill="currentColor"/>
<path d="M1 10.5C1 9.94772 1.44772 9.5 2 9.5H4C4.55228 9.5 5 9.94772 5 10.5C5 11.0523 4.55228 11.5 4 11.5H2C1.44772 11.5 1 11.0523 1 10.5Z" fill="currentColor"/>
<path d="M16 10.5C16 9.94772 16.4477 9.5 17 9.5H19C19.5523 9.5 20 9.94772 20 10.5C20 11.0523 19.5523 11.5 19 11.5H17C16.4477 11.5 16 11.0523 16 10.5Z" fill="currentColor"/>
<path d="M14.5 14.5C14.8905 14.1095 15.5237 14.1095 15.9142 14.5L17.3284 15.9142C17.719 16.3047 17.719 16.9379 17.3284 17.3284C16.9379 17.7189 16.3048 17.7189 15.9142 17.3284L14.5 15.9142C14.1095 15.5237 14.1095 14.8905 14.5 14.5Z" fill="currentColor"/>
<path d="M3.50001 3.49999C3.89054 3.10946 4.5237 3.10946 4.91423 3.49999L6.32844 4.9142C6.71897 5.30472 6.71897 5.93789 6.32844 6.32841C5.93792 6.71894 5.30475 6.71894 4.91423 6.32841L3.50001 4.9142C3.10949 4.52367 3.10949 3.89051 3.50001 3.49999Z" fill="currentColor"/>
<path d="M10.5 16C11.0523 16 11.5 16.4477 11.5 17V19C11.5 19.5523 11.0523 20 10.5 20C9.94772 20 9.5 19.5523 9.5 19V17C9.5 16.4477 9.94772 16 10.5 16Z" fill="currentColor"/>
<path d="M10.5 1C11.0523 1 11.5 1.44772 11.5 2V4C11.5 4.55228 11.0523 5 10.5 5C9.94772 5 9.5 4.55228 9.5 4V2C9.5 1.44772 9.94772 1 10.5 1Z" fill="currentColor"/>
<path d="M17.3284 3.50001C17.7189 3.89054 17.7189 4.5237 17.3284 4.91423L15.9142 6.32844C15.5237 6.71897 14.8905 6.71897 14.5 6.32844C14.1095 5.93792 14.1095 5.30475 14.5 4.91423L15.9142 3.50001C16.3047 3.10949 16.9379 3.10949 17.3284 3.50001Z" fill="currentColor"/>
<path d="M6.32841 14.5C6.71894 14.8905 6.71894 15.5237 6.32841 15.9142L4.9142 17.3284C4.52368 17.719 3.89051 17.719 3.49999 17.3284C3.10946 16.9379 3.10946 16.3048 3.49999 15.9142L4.9142 14.5C5.30472 14.1095 5.93789 14.1095 6.32841 14.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 13.5C11.933 13.5 13.5 11.933 13.5 10C13.5 8.067 11.933 6.5 10 6.5C8.067 6.5 6.5 8.067 6.5 10C6.5 11.933 8.067 13.5 10 13.5ZM10 7.5C11.3807 7.5 12.5 8.61929 12.5 10C12.5 11.3807 11.3807 12.5 10 12.5C8.61929 12.5 7.5 11.3807 7.5 10C7.5 8.61929 8.61929 7.5 10 7.5Z" fill="black"/>
<rect x="1" y="10.5" width="1" height="3" rx="0.5" transform="rotate(-90 1 10.5)" fill="black"/>
<rect x="16" y="10.5" width="1" height="3" rx="0.5" transform="rotate(-90 16 10.5)" fill="black"/>
<rect x="14" y="14.7071" width="1" height="3" rx="0.5" transform="rotate(-45 14 14.7071)" fill="black"/>
<rect x="3" y="3.70709" width="1" height="3" rx="0.5" transform="rotate(-45 3 3.70709)" fill="black"/>
<rect x="9.5" y="16" width="1" height="3" rx="0.5" fill="black"/>
<rect x="9.5" y="1" width="1" height="3" rx="0.5" fill="black"/>
<rect x="16.1213" y="3" width="1" height="3" rx="0.5" transform="rotate(45 16.1213 3)" fill="black"/>
<rect x="5.12131" y="14" width="1" height="3" rx="0.5" transform="rotate(45 5.12131 14)" fill="black"/>
</svg>
`;

const Syringe = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_899)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.55475 18.4941C9.84765 18.787 9.84765 19.2619 9.55475 19.5547C9.26186 19.8476 8.78699 19.8476 8.49409 19.5547L6.01777 17.0784L5.32844 17.7678L6.16943 18.6088C6.46232 18.9016 6.46232 19.3765 6.16943 19.6694C5.87653 19.9623 5.40166 19.9623 5.10877 19.6694L2.28034 16.841C1.98745 16.5481 1.98745 16.0732 2.28034 15.7803C2.57323 15.4874 3.04811 15.4874 3.341 15.7803L4.26778 16.7071L4.95711 16.0178L2.53034 13.591C2.23745 13.2981 2.23745 12.8232 2.53034 12.5303C2.82323 12.2374 3.29811 12.2374 3.591 12.5303L4.65892 13.5983C4.73279 13.2219 4.91552 12.8627 5.20712 12.5711L12.1858 5.59241C12.5661 5.21212 13.0835 5.00102 13.6213 5.00673L14.9961 5.02136C15.2664 5.02423 15.524 5.08071 15.7586 5.18073L18.4697 2.46967C18.7626 2.17678 19.2374 2.17678 19.5303 2.46967C19.8232 2.76256 19.8232 3.23744 19.5303 3.53033L16.8177 6.24297C16.9132 6.46896 16.9684 6.71627 16.9743 6.97596L17.0062 8.38307C17.0185 8.92907 16.8071 9.45638 16.4209 9.84256L9.44976 16.8137C9.15816 17.1053 8.79893 17.288 8.42257 17.3619L9.55475 18.4941Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.20713 11.5711C2.42608 12.3521 2.42608 13.6184 3.20713 14.3995L4.62134 15.8137C5.40239 16.5947 6.66872 16.5947 7.44977 15.8137L14.4209 8.84254C14.8071 8.45636 15.0186 7.92906 15.0062 7.38305L14.9743 5.97595C14.9499 4.89756 14.0747 4.03281 12.9961 4.02134L11.6213 4.00672C11.0835 4.001 10.5661 4.2121 10.1858 4.59239L3.20713 11.5711ZM13.7138 8.13544L6.74266 15.1066C6.35214 15.4971 5.71897 15.4971 5.32845 15.1066L3.91423 13.6924C3.52371 13.3018 3.52371 12.6687 3.91423 12.2782L10.8929 5.2995C11.083 5.10936 11.3417 5.0038 11.6106 5.00666L12.9855 5.02128C13.5248 5.02702 13.9624 5.45939 13.9746 5.99859L14.0064 7.40569C14.0126 7.67869 13.9069 7.94235 13.7138 8.13544Z" fill="black"/>
<path d="M9.52082 12.1066C9.71608 12.3019 9.71608 12.6185 9.52082 12.8137C9.32556 13.009 9.00898 13.009 8.81371 12.8137L7.3995 11.3995C7.20424 11.2042 7.20424 10.8877 7.3995 10.6924C7.59476 10.4971 7.91134 10.4971 8.10661 10.6924L9.52082 12.1066Z" fill="black"/>
<path d="M3.56397 17.7635C3.75923 17.9587 3.75923 18.2753 3.56397 18.4706C3.36871 18.6658 3.05213 18.6658 2.85687 18.4706L0.328438 15.9421C0.133176 15.7469 0.133176 15.4303 0.328438 15.235C0.5237 15.0398 0.840283 15.0398 1.03554 15.235L3.56397 17.7635Z" fill="black"/>
<path d="M7.35355 17.6464C7.54882 17.8417 7.54882 18.1583 7.35355 18.3535C7.15829 18.5488 6.84171 18.5488 6.64645 18.3535L0.646447 12.3535C0.451185 12.1583 0.451185 11.8417 0.646447 11.6464C0.841709 11.4512 1.15829 11.4512 1.35355 11.6464L7.35355 17.6464Z" fill="black"/>
<path d="M11.6422 9.98527C11.8374 10.1805 11.8374 10.4971 11.6422 10.6924C11.4469 10.8876 11.1303 10.8876 10.9351 10.6924L9.52084 9.27816C9.32558 9.0829 9.32558 8.76632 9.52084 8.57106C9.7161 8.37579 10.0327 8.37579 10.2279 8.57106L11.6422 9.98527Z" fill="black"/>
<path d="M2 17.4571L1.29289 16.75L3.75 14.2929L4.45711 15L2 17.4571Z" fill="black"/>
<path d="M16.8536 1.35354C17.0488 1.15828 17.3654 1.15828 17.5607 1.35354C17.7559 1.5488 17.7559 1.86538 17.5607 2.06065L14.5607 5.06065C14.3654 5.25591 14.0488 5.25591 13.8536 5.06065C13.6583 4.86538 13.6583 4.5488 13.8536 4.35354L16.8536 1.35354Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_899">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const TShirt = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M4.83164 10.4263L3.66594 11.0085C3.37505 11.1538 3.02504 10.9872 2.95445 10.6697L2.01194 6.43208C1.97476 6.26493 2.02571 6.09038 2.14696 5.96947L4.39316 3.7297C4.86179 3.26241 5.49659 3 6.15839 3L8.16531 3C8.40867 3 8.61669 3.17521 8.65804 3.41503C8.94393 5.07298 9.69694 5.82353 10.9981 5.82353C12.2993 5.82353 13.053 5.0728 13.34 3.41473C13.3815 3.17505 13.5894 3 13.8327 3H15.84C16.5015 3 17.136 3.26216 17.6046 3.72907L19.8529 5.96934C19.9743 6.09033 20.0253 6.26507 19.988 6.43237L19.0435 10.6677C18.9728 10.9847 18.6232 11.1512 18.3325 11.0064L17.1663 10.4254V17.5C17.1663 18.8807 16.047 20 14.6663 20H7.33164C5.95093 20 4.83164 18.8807 4.83164 17.5V10.4263Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M2.66811 10.0085L3.83381 9.42628V16.5C3.83381 17.8807 4.95309 19 6.33381 19H13.6685C15.0492 19 16.1685 17.8807 16.1685 16.5V9.42537L17.3347 10.0064C17.6254 10.1512 17.9749 9.9847 18.0456 9.66766L18.9902 5.43237C19.0275 5.26507 18.9765 5.09033 18.8551 4.96934L16.6068 2.72907C16.1382 2.26216 15.5037 2 14.8422 2H12.8348C12.5916 2 12.3836 2.17505 12.3422 2.41473C12.0552 4.0728 11.3015 4.82353 10.0002 4.82353C8.69911 4.82353 7.9461 4.07298 7.66021 2.41503C7.61885 2.17521 7.41084 2 7.16748 2H5.16056C4.49876 2 3.86396 2.26241 3.39532 2.7297L1.14913 4.96947C1.02787 5.09038 0.976925 5.26493 1.0141 5.43208L1.95662 9.66975C2.02721 9.98715 2.37721 10.1538 2.66811 10.0085ZM5.16056 3H6.75927C7.1952 4.84 8.2974 5.82353 10.0002 5.82353C11.7031 5.82353 12.8058 4.84005 13.2428 3H14.8422C15.2391 3 15.6198 3.1573 15.9009 3.43744L17.9542 5.4834L17.2087 8.82637L15.8915 8.17011C15.5591 8.0045 15.1685 8.24627 15.1685 8.61765V16.5C15.1685 17.3284 14.4969 18 13.6685 18H6.33381C5.50538 18 4.83381 17.3284 4.83381 16.5V8.61765C4.83381 8.24605 4.44283 8.0043 4.11039 8.17034L2.79382 8.82792L2.04995 5.48341L4.10142 3.43782C4.3826 3.15745 4.76348 3 5.16056 3Z" fill="black"/>
<path d="M12 10.5C11.7239 10.5 11.5 10.2761 11.5 10C11.5 9.72386 11.7239 9.5 12 9.5H14C14.2761 9.5 14.5 9.72386 14.5 10C14.5 10.2761 14.2761 10.5 14 10.5H12Z" fill="black"/>
</svg>
`;

const Taxi = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13 3.5C13 2.67157 12.3284 2 11.5 2C10.6716 2 10 2.67157 10 3.5C10 3.67532 10.0301 3.84361 10.0854 4H7.67116C6.75343 4 5.95346 4.62459 5.73088 5.51493L4.59959 10.0401C3.6869 10.2256 3 11.0326 3 12V15C3 15.8061 3.4769 16.5008 4.16396 16.8174C4.05913 17.0222 4 17.2542 4 17.5V18.5C4 19.3284 4.67157 20 5.5 20C6.32843 20 7 19.3284 7 18.5V17.5C7 17.3247 6.96992 17.1564 6.91465 17H16.0854C16.0301 17.1564 16 17.3247 16 17.5V18.5C16 19.3284 16.6716 20 17.5 20C18.3284 20 19 19.3284 19 18.5V17.5C19 17.2542 18.9409 17.0222 18.836 16.8174C19.5231 16.5008 20 15.8061 20 15V12C20 11.0326 19.3131 10.2256 18.4004 10.0401L17.2691 5.51493C17.0465 4.62459 16.2466 4 15.3288 4H12.9146C12.9699 3.84361 13 3.67532 13 3.5Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.17116 3C5.25343 3 4.45346 3.62459 4.23088 4.51493L3.09959 9.04009C2.1869 9.22556 1.5 10.0326 1.5 11V14C1.5 15.1046 2.39543 16 3.5 16H16.5C17.6046 16 18.5 15.1046 18.5 14V11C18.5 10.0326 17.8131 9.22556 16.9004 9.04009L15.7691 4.51493C15.5465 3.62459 14.7466 3 13.8288 3H6.17116ZM3.5 10C3.72943 10 3.92943 9.84385 3.98507 9.62127L5.20102 4.75746C5.31231 4.3123 5.7123 4 6.17116 4H13.8288C14.2877 4 14.6877 4.3123 14.799 4.75746L16.0149 9.62127C16.0706 9.84385 16.2706 10 16.5 10C17.0523 10 17.5 10.4477 17.5 11V14C17.5 14.5523 17.0523 15 16.5 15H3.5C2.94772 15 2.5 14.5523 2.5 14V11C2.5 10.4477 2.94772 10 3.5 10Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 14C15.8284 14 16.5 13.3284 16.5 12.5C16.5 11.6716 15.8284 11 15 11C14.1716 11 13.5 11.6716 13.5 12.5C13.5 13.3284 14.1716 14 15 14ZM15 12C15.2761 12 15.5 12.2239 15.5 12.5C15.5 12.7761 15.2761 13 15 13C14.7239 13 14.5 12.7761 14.5 12.5C14.5 12.2239 14.7239 12 15 12Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 14C5.82843 14 6.5 13.3284 6.5 12.5C6.5 11.6716 5.82843 11 5 11C4.17157 11 3.5 11.6716 3.5 12.5C3.5 13.3284 4.17157 14 5 14ZM5 12C5.27614 12 5.5 12.2239 5.5 12.5C5.5 12.7761 5.27614 13 5 13C4.72386 13 4.5 12.7761 4.5 12.5C4.5 12.2239 4.72386 12 5 12Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 16.5C5.5 15.6716 4.82843 15 4 15C3.17157 15 2.5 15.6716 2.5 16.5V17.5C2.5 18.3284 3.17157 19 4 19C4.82843 19 5.5 18.3284 5.5 17.5V16.5ZM3.5 16.5C3.5 16.2239 3.72386 16 4 16C4.27614 16 4.5 16.2239 4.5 16.5V17.5C4.5 17.7761 4.27614 18 4 18C3.72386 18 3.5 17.7761 3.5 17.5V16.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 16.5C17.5 15.6716 16.8284 15 16 15C15.1716 15 14.5 15.6716 14.5 16.5V17.5C14.5 18.3284 15.1716 19 16 19C16.8284 19 17.5 18.3284 17.5 17.5V16.5ZM15.5 16.5C15.5 16.2239 15.7239 16 16 16C16.2761 16 16.5 16.2239 16.5 16.5V17.5C16.5 17.7761 16.2761 18 16 18C15.7239 18 15.5 17.7761 15.5 17.5V16.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.6476 5H7.35207C6.66122 5 6.05971 5.47186 5.89521 6.14284L5.4049 8.14284C5.37624 8.25973 5.36176 8.37965 5.36176 8.5C5.36176 9.32843 6.03333 10 6.86176 10H13.1379C13.2582 10 13.3781 9.98552 13.495 9.95686C14.2996 9.7596 14.792 8.94744 14.5947 8.14284L14.1044 6.14284C13.9399 5.47186 13.3384 5 12.6476 5ZM6.86645 6.38095C6.92128 6.15729 7.12179 6 7.35207 6H12.6476C12.8779 6 13.0784 6.15729 13.1332 6.38095L13.6235 8.38095C13.6893 8.64915 13.5251 8.91987 13.2569 8.98562C13.218 8.99517 13.178 9 13.1379 9H6.86176C6.58561 9 6.36176 8.77614 6.36176 8.5C6.36176 8.45988 6.36658 8.41991 6.37614 8.38095L6.86645 6.38095Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.5 2.5C11.5 1.67157 10.8284 1 10 1C9.17157 1 8.5 1.67157 8.5 2.5C8.5 3.32843 9.17157 4 10 4C10.8284 4 11.5 3.32843 11.5 2.5ZM9.5 2.5C9.5 2.22386 9.72386 2 10 2C10.2761 2 10.5 2.22386 10.5 2.5C10.5 2.77614 10.2761 3 10 3C9.72386 3 9.5 2.77614 9.5 2.5Z" fill="black"/>
</svg>
`;

const Television = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 5.42442L13.9143 3.03148C14.539 2.25061 15.7103 3.18765 15.0857 3.96852L13.4605 6H16C17.6569 6 19 7.34315 19 9V14C19 15.6569 17.6569 17 16 17H8.5C6.84315 17 5.5 15.6569 5.5 14V9C5.5 7.34315 6.84315 6 8.5 6H10.5395L8.91435 3.96852C8.28965 3.18765 9.46096 2.25061 10.0857 3.03148L12 5.42442Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.25 9V14C3.25 15.6569 4.59315 17 6.25 17H13.75C15.4069 17 16.75 15.6569 16.75 14V9C16.75 7.34315 15.4069 6 13.75 6H6.25C4.59315 6 3.25 7.34315 3.25 9ZM6.25 16C5.14543 16 4.25 15.1046 4.25 14V9C4.25 7.89543 5.14543 7 6.25 7H13.75C14.8546 7 15.75 7.89543 15.75 9V14C15.75 15.1046 14.8546 16 13.75 16H6.25Z" fill="black"/>
<path d="M9.85957 5.68765L11.8596 3.18765C12.276 2.66707 13.0569 3.29177 12.6404 3.81235L10.6404 6.31235C10.224 6.83293 9.4431 6.20823 9.85957 5.68765Z" fill="black"/>
<path d="M8.85957 6.31235L6.85957 3.81235C6.4431 3.29177 7.22397 2.66707 7.64044 3.18765L9.64044 5.68765C10.0569 6.20823 9.27603 6.83293 8.85957 6.31235Z" fill="black"/>
</svg>
`;

const TextBubble = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.8" fill-rule="evenodd" clip-rule="evenodd" d="M4 8C4 6.89543 4.89543 6 6 6H18C19.1046 6 20 6.89543 20 8V14.1024C20 15.207 19.1046 16.1024 18 16.1024H10.4508C10.4508 16.1024 8.36316 18 7.70388 18C7.04461 18 6.64753 16.1024 6.64753 16.1024H6C4.89543 16.1024 4 15.207 4 14.1024V8Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 12.1024C1.5 13.4832 2.61929 14.6024 4 14.6024H4.24871C4.55632 15.8396 4.99016 16.5 5.70388 16.5C6.3065 16.5 7.22282 15.8804 8.64333 14.6024H16C17.3807 14.6024 18.5 13.4832 18.5 12.1024V6C18.5 4.61929 17.3807 3.5 16 3.5H4C2.61929 3.5 1.5 4.61929 1.5 6V12.1024ZM2.5 12.1024V6C2.5 5.17157 3.17157 4.5 4 4.5H16C16.8284 4.5 17.5 5.17157 17.5 6V12.1024C17.5 12.9309 16.8284 13.6024 16 13.6024H8.25749L8.11447 13.7325C6.8338 14.8965 5.96021 15.5 5.70388 15.5C5.61157 15.5 5.35398 15.0373 5.13693 14L5.05373 13.6024H4C3.17157 13.6024 2.5 12.9309 2.5 12.1024Z" fill="black"/>
<circle cx="7" cy="9" r="1" fill="black"/>
<circle cx="10" cy="9" r="1" fill="black"/>
<circle cx="13" cy="9" r="1" fill="black"/>
</svg>
`;

const ThumbsDown = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M19.31 12.11C19.31 12.6623 18.8623 13.11 18.31 13.11H15.81C15.2577 13.11 14.81 12.6623 14.81 12.11V6.60999C14.81 6.0577 15.2577 5.60999 15.81 5.60999H18.31C18.8623 5.60999 19.31 6.0577 19.31 6.60999V10.11V12.11Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.81 12.11H18.31L18.31 6.60999H15.81V12.11ZM18.31 13.11C18.8623 13.11 19.31 12.6623 19.31 12.11V6.60999C19.31 6.0577 18.8623 5.60999 18.31 5.60999H15.81C15.2577 5.60999 14.81 6.0577 14.81 6.60999V12.11C14.81 12.6623 15.2577 13.11 15.81 13.11H18.31Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4148 17.5964C10.8701 17.5055 10.5021 16.9903 10.5929 16.4455L10.7965 15.2239C11.031 13.8167 11.8376 12.5693 13.0246 11.7779L14.134 13.442C13.4069 13.9267 12.9129 14.6908 12.7693 15.5527L12.5656 16.7744C12.4748 17.3191 11.9596 17.6872 11.4148 17.5964Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.3287 16.4452C10.4206 16.5371 10.5776 16.4936 10.6092 16.3675L12.5494 16.8525C12.1409 18.4868 10.1056 19.0506 8.91445 17.8594L8.87219 17.8171C8.48166 17.4266 8.48166 16.7934 8.87219 16.4029C9.26271 16.0124 9.89588 16.0124 10.2864 16.4029L10.3287 16.4452Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.57187 13.1399C10.1077 13.2739 10.4334 13.8168 10.2994 14.3526L10.1509 14.9466C10.1062 15.1255 10.0867 15.3098 10.093 15.4941L10.107 15.9045C10.1138 16.1036 10.1905 16.2939 10.3235 16.4421L8.835 17.7779C8.38837 17.2802 8.13108 16.6412 8.1082 15.9729L8.09415 15.5626C8.08146 15.1919 8.12067 14.8213 8.21064 14.4614L8.35916 13.8675C8.49313 13.3317 9.03608 13.0059 9.57187 13.1399Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0793 14.11C10.0793 14.6623 9.63157 15.11 9.07928 15.11H7.57928C7.027 15.11 6.57928 14.6623 6.57928 14.11C6.57928 13.5577 7.027 13.11 7.57928 13.11H9.07928C9.63157 13.11 10.0793 13.5577 10.0793 14.11Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.30295 12.3212C6.54467 12.8046 7.03878 13.11 7.57928 13.11L7.5793 15.11C6.28125 15.11 5.0946 14.3766 4.51409 13.2156L4.1849 12.5572C3.93791 12.0633 4.13813 11.4626 4.63211 11.2156C5.12609 10.9686 5.72676 11.1688 5.97375 11.6628L6.30295 12.3212Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.9335 6.17484C6.44999 6.37045 6.71011 6.94771 6.5145 7.4642L5.97409 8.89112C5.62637 9.80925 5.63785 10.8248 6.00624 11.7348L4.15238 12.4853C3.595 11.1084 3.57763 9.5719 4.10373 8.18277L4.64415 6.75584C4.83975 6.23936 5.41702 5.97923 5.9335 6.17484Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.30729 6.5723C7.69091 6.39811 7.0338 6.65439 6.69812 7.19991L6.43097 7.63405C6.14153 8.10441 5.52559 8.25108 5.05523 7.96164C4.58486 7.6722 4.43819 7.05626 4.72763 6.5859L4.99477 6.15176C5.79925 4.8444 7.37402 4.23022 8.85121 4.64769L8.30729 6.5723Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5599 6.8061C14.4516 7.34766 13.9247 7.69888 13.3832 7.59057L8.38319 6.59057C7.84163 6.48225 7.49041 5.95543 7.59872 5.41387C7.70704 4.87231 8.23386 4.52109 8.77542 4.6294L13.7754 5.6294C14.317 5.73772 14.6682 6.26454 14.5599 6.8061Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5793 13.61C13.027 13.61 12.5793 13.1623 12.5793 12.61V6.60999C12.5793 6.0577 13.027 5.60999 13.5793 5.60999C14.1316 5.60999 14.5793 6.0577 14.5793 6.60999V12.61C14.5793 13.1623 14.1316 13.61 13.5793 13.61Z" fill="currentColor"/>
<path d="M13.81 12.11L10.81 17.11L8.31 14.61L5.81 12.11L5.31 9.60999L5.81 6.10999L13.31 6.60999L13.81 12.11Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.1 10.0814H16.6L16.6 4.58136H14.1V10.0814ZM16.6 11.0814C17.1523 11.0814 17.6 10.6336 17.6 10.0814V4.58136C17.6 4.02908 17.1523 3.58136 16.6 3.58136H14.1C13.5477 3.58136 13.1 4.02908 13.1 4.58136V10.0814C13.1 10.6336 13.5477 11.0814 14.1 11.0814H16.6Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0561 15.755C9.75693 15.7051 9.55481 15.4221 9.60468 15.1229L9.82836 13.7809C10.061 12.3849 10.8612 11.1475 12.0388 10.3624L12.6481 11.2764C11.7231 11.893 11.0946 12.865 10.9119 13.9615L10.6882 15.3035C10.6383 15.6027 10.3553 15.8048 10.0561 15.755Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.38435 15.4205C8.78719 15.8233 9.47549 15.6327 9.61366 15.08L10.6793 15.3464C10.3341 16.7274 8.61421 17.2038 7.60763 16.1972L7.5612 16.1508C7.34672 15.9363 7.34672 15.5886 7.5612 15.3741C7.77569 15.1596 8.12344 15.1596 8.33793 15.3741L8.38435 15.4205Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.80819 11.9343C8.10246 12.0078 8.28137 12.3061 8.20778 12.6003L8.04464 13.2528C7.98308 13.499 7.95624 13.7526 7.96493 14.0063L7.98036 14.457C7.99226 14.8046 8.12605 15.1368 8.3583 15.3956L7.54076 16.1293C7.13627 15.6786 6.90326 15.0999 6.88254 14.4946L6.86711 14.0439C6.85492 13.6879 6.89258 13.3319 6.97899 12.9863L7.14213 12.3339C7.21571 12.0396 7.51392 11.8607 7.80819 11.9343Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.94952 12.4671C7.94952 12.7704 7.70363 13.0163 7.40029 13.0163H5.7526C5.44927 13.0163 5.20337 12.7704 5.20337 12.4671C5.20337 12.1637 5.44927 11.9178 5.7526 11.9178H7.40029C7.70363 11.9178 7.94952 12.1637 7.94952 12.4671Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.85933 10.7478C4.21788 11.4649 4.95082 11.9179 5.75258 11.9179L5.75259 13.0163C4.53476 13.0163 3.42146 12.3283 2.87683 11.239L2.51522 10.5158C2.37957 10.2445 2.48954 9.91458 2.76085 9.77893C3.03216 9.64328 3.36206 9.75325 3.49772 10.0246L3.85933 10.7478Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M3.75026 4.26423C4.03393 4.37166 4.1768 4.68871 4.06936 4.97238L3.47574 6.5398C3.04479 7.67767 3.05903 8.93624 3.51559 10.0641L2.49739 10.4763C1.93703 9.09201 1.91956 7.54731 2.44848 6.15075L3.04211 4.58333C3.14954 4.29966 3.46659 4.15679 3.75026 4.26423Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.70172 3.65869C5.78825 3.40054 4.81445 3.78034 4.31697 4.58878L4.02352 5.06566C3.86456 5.324 3.52626 5.40456 3.26792 5.24559C3.00958 5.08662 2.92903 4.74833 3.088 4.48999L3.38144 4.01311C4.13639 2.78624 5.61421 2.20987 7.00046 2.60163L6.70172 3.65869Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.8819 4.33631C12.8225 4.63375 12.5331 4.82665 12.2357 4.76716L6.74336 3.6687C6.44592 3.60922 6.25302 3.31987 6.31251 3.02243C6.372 2.72499 6.66135 2.53209 6.95879 2.59157L12.4511 3.69004C12.7485 3.74952 12.9414 4.03887 12.8819 4.33631Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.3392 11.3686C12.0359 11.3686 11.79 11.1227 11.79 10.8194V4.2286C11.79 3.92526 12.0359 3.67937 12.3392 3.67937C12.6425 3.67937 12.8884 3.92526 12.8884 4.2286V10.8194C12.8884 11.1227 12.6425 11.3686 12.3392 11.3686Z" fill="black"/>
<path d="M14.35 6.08136C14.35 5.52908 14.7977 5.08136 15.35 5.08136C15.9023 5.08136 16.35 5.52908 16.35 6.08136C16.35 6.63364 15.9023 7.08136 15.35 7.08136C14.7977 7.08136 14.35 6.63364 14.35 6.08136Z" fill="black"/>
</svg>
`;

const ThumbsUp = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_303_4958)">
<g opacity="0.8">
<path d="M3.75 9.75C3.75 9.19772 4.19772 8.75 4.75 8.75H7.25C7.80228 8.75 8.25 9.19772 8.25 9.75V15.25C8.25 15.8023 7.80228 16.25 7.25 16.25H4.75C4.19772 16.25 3.75 15.8023 3.75 15.25V11.75V9.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.25 9.75H4.75L4.75 15.25H7.25V9.75ZM4.75 8.75C4.19772 8.75 3.75 9.19772 3.75 9.75V15.25C3.75 15.8023 4.19772 16.25 4.75 16.25H7.25C7.80228 16.25 8.25 15.8023 8.25 15.25V9.75C8.25 9.19772 7.80228 8.75 7.25 8.75H4.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6452 4.26364C12.19 4.35444 12.558 4.86967 12.4672 5.41444L12.2635 6.63612C12.029 8.04333 11.2225 9.2907 10.0354 10.0821L8.92602 8.41795C9.65308 7.93325 10.1471 7.16922 10.2908 6.3073L10.4944 5.08562C10.5852 4.54085 11.1004 4.17283 11.6452 4.26364Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.7314 5.41482C12.6394 5.3229 12.4824 5.3664 12.4509 5.49251L10.5106 5.00744C10.9192 3.37316 12.9544 2.80943 14.1456 4.0006L14.1878 4.04287C14.5784 4.43339 14.5784 5.06656 14.1878 5.45708C13.7973 5.8476 13.1641 5.8476 12.7736 5.45708L12.7314 5.41482Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.4882 8.72009C12.9524 8.58612 12.6266 8.04317 12.7606 7.50738L12.9091 6.9134C12.9539 6.73448 12.9734 6.55018 12.967 6.36585L12.953 5.9555C12.9462 5.75643 12.8695 5.56611 12.7365 5.41787L14.225 4.08208C14.6717 4.57978 14.9289 5.21875 14.9518 5.88708L14.9659 6.29743C14.9786 6.6681 14.9394 7.03873 14.8494 7.39855L14.7009 7.99253C14.5669 8.52832 14.0239 8.85406 13.4882 8.72009Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9807 7.75C12.9807 7.19772 13.4284 6.75 13.9807 6.75H15.4807C16.033 6.75 16.4807 7.19772 16.4807 7.75C16.4807 8.30228 16.033 8.75 15.4807 8.75H13.9807C13.4284 8.75 12.9807 8.30228 12.9807 7.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.7571 9.53878C16.5154 9.05535 16.0213 8.74997 15.4808 8.74998L15.4808 6.74998C16.7788 6.74997 17.9655 7.48335 18.546 8.64436L18.8752 9.30275C19.1221 9.79673 18.9219 10.3974 18.4279 10.6444C17.934 10.8914 17.3333 10.6912 17.0863 10.1972L16.7571 9.53878Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.1266 15.6851C16.6101 15.4895 16.3499 14.9123 16.5456 14.3958L17.086 12.9689C17.4337 12.0507 17.4222 11.0352 17.0538 10.1252L18.9077 9.37473C19.4651 10.7516 19.4824 12.2881 18.9563 13.6772L18.4159 15.1041C18.2203 15.6206 17.643 15.8808 17.1266 15.6851Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.7527 15.2877C15.3691 15.4619 16.0262 15.2056 16.3619 14.6601L16.629 14.2259C16.9185 13.7556 17.5344 13.6089 18.0048 13.8983C18.4751 14.1878 18.6218 14.8037 18.3324 15.2741L18.0652 15.7082C17.2607 17.0156 15.686 17.6298 14.2088 17.2123L14.7527 15.2877Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.50014 15.0539C8.60845 14.5123 9.13528 14.1611 9.67684 14.2694L14.6768 15.2694C15.2184 15.3777 15.5696 15.9046 15.4613 16.4461C15.353 16.9877 14.8262 17.3389 14.2846 17.2306L9.28461 16.2306C8.74305 16.1223 8.39183 15.5954 8.50014 15.0539Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.48071 8.25C10.033 8.25 10.4807 8.69772 10.4807 9.25V15.25C10.4807 15.8023 10.033 16.25 9.48071 16.25C8.92843 16.25 8.48071 15.8023 8.48071 15.25V9.25C8.48071 8.69772 8.92843 8.25 9.48071 8.25Z" fill="currentColor"/>
<path d="M9.25 9.75L12.25 4.75L14.75 7.25L17.25 9.75L17.75 12.25L17.25 15.75L9.75 15.25L9.25 9.75Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.70001 8.50348H3.20001L3.20001 14.0035H5.70001V8.50348ZM3.20001 7.50348C2.64773 7.50348 2.20001 7.95119 2.20001 8.50348V14.0035C2.20001 14.5558 2.64773 15.0035 3.20001 15.0035H5.70001C6.2523 15.0035 6.70001 14.5558 6.70001 14.0035V8.50348C6.70001 7.95119 6.2523 7.50348 5.70001 7.50348H3.20001Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.74388 2.82988C10.0431 2.87975 10.2452 3.16273 10.1953 3.46193L9.97166 4.8039C9.73897 6.19992 8.93884 7.43738 7.76126 8.22244L7.15194 7.30846C8.0769 6.69182 8.70538 5.71984 8.88815 4.6233L9.11182 3.28133C9.16169 2.98213 9.44468 2.78 9.74388 2.82988Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.4157 3.16434C11.0128 2.7615 10.3245 2.95214 10.1864 3.50483L9.1207 3.23842C9.46595 1.85739 11.1858 1.38102 12.1924 2.38761L12.2388 2.43403C12.4533 2.64852 12.4533 2.99627 12.2388 3.21076C12.0243 3.42525 11.6766 3.42525 11.4621 3.21076L11.4157 3.16434Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.9918 6.65057C11.6976 6.57699 11.5187 6.27879 11.5922 5.98452L11.7554 5.33205C11.8169 5.08583 11.8438 4.83221 11.8351 4.57857L11.8197 4.12781C11.8078 3.78028 11.674 3.44801 11.4417 3.1892L12.2593 2.45555C12.6637 2.90629 12.8968 3.48497 12.9175 4.09023L12.9329 4.54098C12.9451 4.89698 12.9074 5.25294 12.821 5.59851L12.6579 6.25097C12.5843 6.54525 12.2861 6.72415 11.9918 6.65057Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8505 6.11777C11.8505 5.81444 12.0964 5.56854 12.3997 5.56854H14.0474C14.3507 5.56854 14.5966 5.81444 14.5966 6.11777C14.5966 6.4211 14.3507 6.667 14.0474 6.667H12.3997C12.0964 6.667 11.8505 6.4211 11.8505 6.11777Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9407 7.83707C15.5821 7.11996 14.8492 6.66698 14.0474 6.66698L14.0474 5.56852C15.2653 5.56851 16.3786 6.25657 16.9232 7.34582L17.2848 8.06904C17.4204 8.34035 17.3105 8.67025 17.0392 8.80591C16.7679 8.94156 16.438 8.83159 16.3023 8.56029L15.9407 7.83707Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M16.0498 14.3206C15.7661 14.2132 15.6232 13.8961 15.7307 13.6125L16.3243 12.045C16.7552 10.9072 16.741 9.6486 16.2844 8.52076L17.3026 8.10858C17.863 9.49283 17.8805 11.0375 17.3515 12.4341L16.7579 14.0015C16.6505 14.2852 16.3334 14.428 16.0498 14.3206Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0983 14.9261C14.0118 15.1843 14.9856 14.8045 15.483 13.9961L15.7765 13.5192C15.9355 13.2608 16.2738 13.1803 16.5321 13.3392C16.7904 13.4982 16.871 13.8365 16.712 14.0949L16.4186 14.5717C15.6636 15.7986 14.1858 16.375 12.7996 15.9832L13.0983 14.9261Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.91807 14.2485C6.97756 13.9511 7.26691 13.7582 7.56435 13.8177L13.0567 14.9161C13.3541 14.9756 13.547 15.265 13.4875 15.5624C13.428 15.8599 13.1387 16.0528 12.8412 15.9933L7.34893 14.8948C7.05149 14.8353 6.85859 14.546 6.91807 14.2485Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.46078 7.21625C7.76411 7.21625 8.01001 7.46215 8.01001 7.76548V14.3562C8.01001 14.6596 7.76411 14.9055 7.46078 14.9055C7.15745 14.9055 6.91155 14.6596 6.91155 14.3562V7.76548C6.91155 7.46215 7.15745 7.21625 7.46078 7.21625Z" fill="black"/>
<path d="M5.45001 12.5035C5.45001 13.0558 5.0023 13.5035 4.45001 13.5035C3.89773 13.5035 3.45001 13.0558 3.45001 12.5035C3.45001 11.9512 3.89773 11.5035 4.45001 11.5035C5.0023 11.5035 5.45001 11.9512 5.45001 12.5035Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_303_4958">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Times = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.13197 6.47653C5.56672 7.08215 5.59945 8.03134 6.20507 8.59659L8.78016 11L6.20507 13.4034C5.59945 13.9687 5.56672 14.9179 6.13197 15.5235C6.69722 16.1291 7.6464 16.1618 8.25203 15.5966L10.9786 13.0518L13.7051 15.5966C14.3107 16.1618 15.2599 16.1291 15.8251 15.5235C16.3904 14.9179 16.3577 13.9687 15.752 13.4034L13.1769 11L15.752 8.59659C16.3577 8.03134 16.3904 7.08215 15.8251 6.47653C15.2599 5.8709 14.3107 5.83817 13.7051 6.40342L10.9786 8.94818L8.25203 6.40342C7.6464 5.83817 6.69722 5.8709 6.13197 6.47653Z" fill="currentColor"/>
</g>
<path d="M6.85355 13.8536C6.65829 14.0488 6.34171 14.0488 6.14645 13.8536C5.95118 13.6583 5.95118 13.3417 6.14645 13.1464L13.1464 6.14645C13.3417 5.95118 13.6583 5.95118 13.8536 6.14645C14.0488 6.34171 14.0488 6.65829 13.8536 6.85355L6.85355 13.8536Z" fill="black"/>
<path d="M6.14645 6.85355C5.95118 6.65829 5.95118 6.34171 6.14645 6.14645C6.34171 5.95118 6.65829 5.95118 6.85355 6.14645L13.8536 13.1464C14.0488 13.3417 14.0488 13.6583 13.8536 13.8536C13.6583 14.0488 13.3417 14.0488 13.1464 13.8536L6.14645 6.85355Z" fill="black"/>
</svg>
`;

const Tool = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M13.3008 7.83234L18.6031 14.1514C19.4906 15.209 19.3527 16.7859 18.295 17.6734C17.2373 18.5609 15.6604 18.423 14.7729 17.3653L9.47063 11.0463C9.34739 10.8994 9.23881 10.7414 9.14614 10.5746C7.79242 10.6159 6.43645 10.0062 5.50123 8.89166C4.31866 7.48233 4.05794 5.56096 4.81266 4.02998C4.97231 3.70613 5.41207 3.65308 5.64415 3.92966L7.38562 6.00506C7.56312 6.2166 7.8785 6.24419 8.09004 6.06669L8.67131 5.57895C8.88284 5.40145 8.91044 5.08607 8.73293 4.87453L6.99147 2.79913C6.75938 2.52254 6.88799 2.09868 7.23464 1.99769C8.87343 1.52029 10.7203 2.11069 11.9029 3.52002C12.8501 4.64882 13.2119 6.1123 12.9169 7.45073C13.0558 7.56585 13.1844 7.69351 13.3008 7.83234Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.8763 7.57355C11.7599 7.43472 11.6313 7.30706 11.4924 7.19194C11.7874 5.85352 11.4256 4.39003 10.4784 3.26123C9.29583 1.85191 7.44893 1.2615 5.81015 1.73891C5.46349 1.83989 5.33488 2.26376 5.56697 2.54034L7.30844 4.61574C7.48594 4.82728 7.45834 5.14266 7.24681 5.32016L6.66554 5.8079C6.454 5.9854 6.13862 5.95781 5.96112 5.74627L4.21965 3.67087C3.98757 3.39429 3.54781 3.44734 3.38816 3.77119C2.63344 5.30217 2.89416 7.22354 4.07673 8.63287C5.01195 9.74742 6.36792 10.3571 7.72164 10.3158C7.81431 10.4826 7.92289 10.6406 8.04613 10.7875L13.3484 17.1065C14.2359 18.1642 15.8128 18.3022 16.8705 17.4146C17.9282 16.5271 18.0661 14.9503 17.1786 13.8926L11.8763 7.57355ZM4.84278 7.99008C4.10835 7.11483 3.82676 5.99906 4.02334 4.99264L5.19508 6.38906C5.72758 7.02367 6.67371 7.10645 7.30832 6.57395L7.8896 6.0862C8.52421 5.5537 8.60698 4.60757 8.07448 3.97296L6.90274 2.57653C7.92801 2.55771 8.97793 3.02877 9.71236 3.90402C10.5257 4.87332 10.7896 6.14369 10.4446 7.24405C10.377 7.45967 10.4625 7.69383 10.653 7.81527C10.8248 7.92473 10.979 8.0599 11.1103 8.21634L16.4126 14.5354C16.9451 15.17 16.8623 16.1161 16.2277 16.6486C15.5931 17.1811 14.647 17.0983 14.1145 16.4637L8.81217 10.1447C8.6765 9.98302 8.56748 9.80114 8.48889 9.60585C8.40467 9.39659 8.19075 9.26963 7.96671 9.29595C6.83357 9.42906 5.64661 8.94805 4.84278 7.99008Z" fill="black"/>
</svg>
`;

const Train = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_0_2923)">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M19 5.00002C19 3.06702 17.433 1.50002 15.5 1.50002L8.5 1.50002C6.567 1.50002 5 3.06703 5 5.00002V11.9553C5 13.1404 5.59619 14.2188 6.54298 14.8573L5.56608 18.7649C5.43214 19.3007 5.7579 19.8436 6.29369 19.9776C6.82949 20.1115 7.37242 19.7858 7.50637 19.25L7.68667 18.5288H16.3858L16.5661 19.25C16.7 19.7858 17.243 20.1115 17.7788 19.9776C18.3146 19.8436 18.6403 19.3007 18.5064 18.7649L17.5188 14.8147C18.4297 14.1714 19 13.1144 19 11.9553L19 5.00002ZM15.8858 16.5288L15.6406 15.5482C14.4282 15.8493 13.2144 16 12 16C10.8084 16 9.61734 15.8549 8.42762 15.565L8.18667 16.5288H15.8858Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 4.5C17 2.567 15.433 1 13.5 1L6.5 1C4.567 1 3 2.56701 3 4.5V11.4552C3 12.9896 3.99941 14.3451 5.4652 14.7988C6.97486 15.266 8.48696 15.5 10 15.5C11.513 15.5 13.0252 15.266 14.5348 14.7988C16.0006 14.3451 17 12.9896 17 11.4552L17 4.5ZM4 11.4552V4.5C4 3.11929 5.11929 2 6.5 2L13.5 2C14.8807 2 16 3.11929 16 4.5L16 11.4552C16 12.5512 15.2862 13.5194 14.2392 13.8435C12.8242 14.2814 11.4116 14.5 10 14.5C8.58839 14.5 7.17585 14.2814 5.76086 13.8435C4.71386 13.5194 4 12.5512 4 11.4552Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.5 13C7.32843 13 8 12.3284 8 11.5C8 10.6716 7.32843 10 6.5 10C5.67157 10 5 10.6716 5 11.5C5 12.3284 5.67157 13 6.5 13ZM6.5 11C6.77614 11 7 11.2239 7 11.5C7 11.7761 6.77614 12 6.5 12C6.22386 12 6 11.7761 6 11.5C6 11.2239 6.22386 11 6.5 11Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.5 13C14.3284 13 15 12.3284 15 11.5C15 10.6716 14.3284 10 13.5 10C12.6716 10 12 10.6716 12 11.5C12 12.3284 12.6716 13 13.5 13ZM13.5 11C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12C13.2239 12 13 11.7761 13 11.5C13 11.2239 13.2239 11 13.5 11Z" fill="black"/>
<path d="M15.5318 18.6757C15.6288 18.9342 15.917 19.0652 16.1756 18.9683C16.4341 18.8713 16.5651 18.5831 16.4682 18.3245L14.9682 14.3245C14.8712 14.066 14.583 13.935 14.3244 14.0319C14.0659 14.1289 13.9349 14.4171 14.0318 14.6757L15.5318 18.6757Z" fill="black"/>
<path d="M5.53183 14.3245C5.62879 14.0659 5.917 13.9349 6.17556 14.0319C6.43412 14.1288 6.56512 14.417 6.46816 14.6756L4.96816 18.6756C4.8712 18.9341 4.58299 19.0651 4.32443 18.9682C4.06587 18.8712 3.93487 18.583 4.03183 18.3245L5.53183 14.3245Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 5C15 3.89543 14.1046 3 13 3H7C5.89543 3 5 3.89543 5 5V7.56491C5 8.45546 5.58882 9.23873 6.4443 9.48616C7.62792 9.82852 8.81358 10 10 10C11.1864 10 12.3721 9.82852 13.5557 9.48615C14.4112 9.23871 15 8.45545 15 7.56491L15 5ZM6 7.56491V5C6 4.44772 6.44772 4 7 4H13C13.5523 4 14 4.44772 14 5L14 7.56491C14 8.01018 13.7056 8.40181 13.2779 8.52553C12.1836 8.84204 11.0914 9 10 9C8.90857 9 7.81637 8.84204 6.72215 8.52554C6.29441 8.40182 6 8.01019 6 7.56491Z" fill="black"/>
<path d="M5.25 17.5C4.97386 17.5 4.75 17.2761 4.75 17C4.75 16.7239 4.97386 16.5 5.25 16.5H15.25C15.5261 16.5 15.75 16.7239 15.75 17C15.75 17.2761 15.5261 17.5 15.25 17.5H5.25Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_0_2923">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Trash = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<rect x="7" y="7" width="10" height="11.5" rx="1" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.0156 4.25C10.1393 3.2647 10.982 2.5 11.9998 2.5C13.0176 2.5 13.8603 3.2647 13.984 4.25H17C17.4142 4.25 17.75 4.58579 17.75 5C17.75 5.41421 17.4142 5.75 17 5.75H7C6.58579 5.75 6.25 5.41421 6.25 5C6.25 4.58579 6.58579 4.25 7 4.25H10.0156Z" fill="currentColor"/>
</g>
<path d="M8.5 14.999C8.5 15.2752 8.27614 15.499 8 15.499C7.72386 15.499 7.5 15.2752 7.5 14.999V8.99902C7.5 8.72288 7.72386 8.49902 8 8.49902C8.27614 8.49902 8.5 8.72288 8.5 8.99902V14.999Z" fill="black"/>
<path d="M10.5 14.999C10.5 15.2752 10.2761 15.499 10 15.499C9.72386 15.499 9.5 15.2752 9.5 14.999V8.99902C9.5 8.72288 9.72386 8.49902 10 8.49902C10.2761 8.49902 10.5 8.72288 10.5 8.99902V14.999Z" fill="black"/>
<path d="M12.5 14.999C12.5 15.2752 12.2761 15.499 12 15.499C11.7239 15.499 11.5 15.2752 11.5 14.999V8.99902C11.5 8.72288 11.7239 8.49902 12 8.49902C12.2761 8.49902 12.5 8.72288 12.5 8.99902V14.999Z" fill="black"/>
<path d="M11.5004 4.4989H11.4994H8.50073C8.50073 3.67169 9.1738 2.99951 10.0001 2.99951C10.8268 2.99951 11.4998 3.67169 11.5004 4.49792V4.4989Z" fill="black"/>
<path d="M4.5 4.99902C4.22386 4.99902 4 4.77517 4 4.49902C4 4.22288 4.22386 3.99902 4.5 3.99902H15.5C15.7761 3.99902 16 4.22288 16 4.49902C16 4.77517 15.7761 4.99902 15.5 4.99902H4.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 5.5H5.5C5.22386 5.5 5 5.72386 5 6V17C5 17.2761 5.22386 17.5 5.5 17.5H14.5C14.7761 17.5 15 17.2761 15 17V6C15 5.72386 14.7761 5.5 14.5 5.5ZM6 16.5V6.5H14V16.5H6Z" fill="black"/>
</svg>
`;

const TriangleDown = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M12.076 16.265L7.07599 8.265C6.86785 7.93198 7.10728 7.5 7.49999 7.5L17.5 7.5C17.8927 7.5 18.1321 7.93198 17.924 8.265L12.924 16.265C12.7282 16.5783 12.2718 16.5783 12.076 16.265Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.57599 7.265L9.57599 15.265C9.77183 15.5783 10.2282 15.5783 10.424 15.265L15.424 7.265C15.6321 6.93198 15.3927 6.5 15 6.5L4.99999 6.5C4.60728 6.5 4.36785 6.93198 4.57599 7.265ZM14.0979 7.5L9.99999 14.0566L5.90212 7.5L14.0979 7.5Z" fill="black"/>
</svg>
`;

const TriangleLeft = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M7.735 10.576L15.735 5.57599C16.068 5.36785 16.5 5.60728 16.5 5.99999V16C16.5 16.3927 16.068 16.6321 15.735 16.424L7.735 11.424C7.42167 11.2282 7.42167 10.7718 7.735 10.576Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.735 4.57599L5.735 9.57599C5.42167 9.77183 5.42167 10.2282 5.735 10.424L13.735 15.424C14.068 15.6321 14.5 15.3927 14.5 15V4.99999C14.5 4.60728 14.068 4.36785 13.735 4.57599ZM13.5 5.90212V14.0979L6.9434 9.99999L13.5 5.90212Z" fill="black"/>
</svg>
`;

const TriangleRight = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M17.265 11.424L9.265 16.424C8.93198 16.6321 8.5 16.3927 8.5 16L8.5 6.00001C8.5 5.60729 8.93198 5.36787 9.265 5.57601L17.265 10.576C17.5783 10.7718 17.5783 11.2282 17.265 11.424Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.265 15.424L15.265 10.424C15.5783 10.2282 15.5783 9.77184 15.265 9.57601L7.265 4.57601C6.93198 4.36787 6.5 4.60729 6.5 5.00001L6.5 15C6.5 15.3927 6.93198 15.6321 7.265 15.424ZM7.5 14.0979L7.5 5.90213L14.0566 10L7.5 14.0979Z" fill="black"/>
</svg>
`;

const TriangleUp = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M12.924 6.735L17.924 14.735C18.1321 15.068 17.8927 15.5 17.5 15.5H7.50001C7.10729 15.5 6.86787 15.068 7.07601 14.735L12.076 6.735C12.2718 6.42167 12.7282 6.42167 12.924 6.735Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.424 13.735L10.424 5.735C10.2282 5.42167 9.77184 5.42167 9.57601 5.735L4.57601 13.735C4.36787 14.068 4.60729 14.5 5.00001 14.5H15C15.3927 14.5 15.6321 14.068 15.424 13.735ZM5.90213 13.5L10 6.9434L14.0979 13.5H5.90213Z" fill="black"/>
</svg>
`;

const Trophy = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M5.32676 5.78333C5.15431 4.57831 6.08929 3.5 7.30659 3.5H14.6934C15.9107 3.5 16.8457 4.57831 16.6732 5.78333L16.0363 10.234C16.0122 10.4023 15.9643 10.5662 15.8941 10.7209V10.7209C13.9854 14.9247 8.01457 14.9247 6.10591 10.7209V10.7209C6.03566 10.5662 5.98777 10.4023 5.9637 10.234L5.32676 5.78333Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.6934 5.5L7.30659 5.5L7.93925 9.92081C9.14668 12.5247 12.8533 12.5247 14.0607 9.9208L14.6934 5.5ZM7.30659 3.5C6.08929 3.5 5.15431 4.57831 5.32676 5.78333L5.9637 10.234C5.98777 10.4023 6.03566 10.5662 6.10591 10.7209C8.01457 14.9247 13.9854 14.9247 15.8941 10.7209C15.9643 10.5662 16.0122 10.4023 16.0363 10.234L16.6732 5.78333C16.8457 4.57831 15.9107 3.5 14.6934 3.5H7.30659Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 16.5V13.5H12V16.5H10Z" fill="currentColor"/>
<path d="M8.00002 16.5V16.5C9.65688 14.8431 12.3432 14.8431 14 16.5V16.5L14.7929 17.2929C15.4229 17.9229 14.9767 19 14.0858 19H7.91424C7.02333 19 6.57716 17.9229 7.20713 17.2929L8.00002 16.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.12326 17.5C10.1773 16.5098 11.8228 16.5098 12.8768 17.5H9.12326ZM14 16.5C12.3432 14.8431 9.65688 14.8431 8.00002 16.5L7.20713 17.2929C6.57716 17.9229 7.02333 19 7.91424 19H14.0858C14.9767 19 15.4229 17.9229 14.7929 17.2929L14 16.5Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.5468 5.5011C18.6099 5.49797 18.6741 5.5008 18.739 5.51006C19.2857 5.58816 19.6656 6.09469 19.5875 6.64143L19.5176 7.13062C19.1998 9.35482 17.4781 11.117 15.2619 11.4864L15.2586 11.4663C15.1761 11.4883 15.0894 11.5 15 11.5H6.99999C6.93639 11.5 6.87417 11.4941 6.81386 11.4827C4.60814 11.1055 2.89663 9.34754 2.57992 7.13062L2.51246 6.65838C2.50796 6.63011 2.50465 6.60145 2.50257 6.57245C2.49371 6.45207 2.50677 6.33447 2.5386 6.2239C2.57727 6.08903 2.64355 5.96583 2.73093 5.86081C2.83318 5.73771 2.96504 5.63873 3.1176 5.57574C3.21162 5.5368 3.31286 5.51179 3.41877 5.50328C3.45223 5.50052 3.48549 5.49946 3.51845 5.50003H18.5C18.5157 5.50003 18.5313 5.50039 18.5468 5.5011Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.6934 3.25H6.30659C5.69794 3.25 5.23045 3.78916 5.31668 4.39166L5.95362 8.84238C5.96425 8.91671 5.98541 8.98914 6.01645 9.05751C7.57001 12.4792 12.43 12.4792 13.9835 9.05751C14.0146 8.98914 14.0357 8.91671 14.0464 8.84238L14.6833 4.39167C14.7695 3.78916 14.302 3.25 13.6934 3.25ZM6.30659 2.25C5.08929 2.25 4.15431 3.32831 4.32676 4.53333L4.9637 8.98405C4.98777 9.15226 5.03566 9.3162 5.10591 9.47093C7.01457 13.6747 12.9854 13.6747 14.8941 9.47093C14.9643 9.3162 15.0122 9.15226 15.0363 8.98405L15.6732 4.53333C15.8457 3.32831 14.9107 2.25 13.6934 2.25H6.30659Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.5 14.75V12.25H10.5V14.75H9.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.0858 16.75L12.2929 15.9571C11.0266 14.6908 8.97346 14.6908 7.70713 15.9571L6.91424 16.75L13.0858 16.75ZM13 15.25C11.3432 13.5931 8.65688 13.5931 7.00002 15.25L6.20713 16.0429C5.57716 16.6729 6.02333 17.75 6.91424 17.75H13.0858C13.9767 17.75 14.4229 16.6729 13.7929 16.0429L13 15.25Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5 5C5 5.27614 4.77614 5.5 4.5 5.5H2C1.72386 5.5 1.5 5.27614 1.5 5C1.5 4.72386 1.72386 4.5 2 4.5H4.5C4.77614 4.5 5 4.72386 5 5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.42889 9.49491C3.27768 9.18589 1.65511 7.37217 1.51333 5.21857L1.5011 5.03285C1.48296 4.7573 1.69163 4.51922 1.96718 4.50108C2.24272 4.48294 2.4808 4.69161 2.49894 4.96715L2.51117 5.15288C2.6229 6.85004 3.90242 8.26537 5.57109 8.50507L5.42889 9.49491Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 5C15 5.27614 15.2239 5.5 15.5 5.5H18C18.2761 5.5 18.5 5.27614 18.5 5C18.5 4.72386 18.2761 4.5 18 4.5H15.5C15.2239 4.5 15 4.72386 15 5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5711 9.49493C16.6854 9.19121 18.3419 7.54889 18.4773 5.37867L18.499 5.03115C18.5162 4.75555 18.3067 4.51818 18.0311 4.50099C17.7555 4.48379 17.5182 4.69327 17.501 4.96888L17.4793 5.31639C17.3757 6.97588 16.1128 8.2632 14.4289 8.50509L14.5711 9.49493Z" fill="black"/>
</svg>
`;

const Truck = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M9 6H18C19.1046 6 20 6.89543 20 8V15C20 15.7009 19.6395 16.3175 19.0938 16.6747C19.1946 16.9302 19.25 17.2086 19.25 17.5C19.25 18.7426 18.2426 19.75 17 19.75C15.7574 19.75 14.75 18.7426 14.75 17.5C14.75 17.3282 14.7693 17.1608 14.8058 17H10.1942C10.2307 17.1608 10.25 17.3282 10.25 17.5C10.25 18.7426 9.24264 19.75 8 19.75C6.75736 19.75 5.75 18.7426 5.75 17.5C5.75 17.3282 5.76927 17.1608 5.80575 17H3C1.89543 17 1 16.1046 1 15V13L1.79907 10.4103C2.05777 9.5719 2.83274 9 3.71016 9H7V8C7 6.89543 7.89543 6 9 6Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 16.5C5.5 17.6046 6.39543 18.5 7.5 18.5C8.60457 18.5 9.5 17.6046 9.5 16.5C9.5 15.3954 8.60457 14.5 7.5 14.5C6.39543 14.5 5.5 15.3954 5.5 16.5ZM8.5 16.5C8.5 17.0523 8.05228 17.5 7.5 17.5C6.94772 17.5 6.5 17.0523 6.5 16.5C6.5 15.9477 6.94772 15.5 7.5 15.5C8.05228 15.5 8.5 15.9477 8.5 16.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.5 16.5C14.5 17.6046 15.3954 18.5 16.5 18.5C17.6046 18.5 18.5 17.6046 18.5 16.5C18.5 15.3954 17.6046 14.5 16.5 14.5C15.3954 14.5 14.5 15.3954 14.5 16.5ZM17.5 16.5C17.5 17.0523 17.0523 17.5 16.5 17.5C15.9477 17.5 15.5 17.0523 15.5 16.5C15.5 15.9477 15.9477 15.5 16.5 15.5C17.0523 15.5 17.5 15.9477 17.5 16.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M17 4.5H9C7.89543 4.5 7 5.39543 7 6.5V13.5C7 14.6046 7.89543 15.5 9 15.5H17C18.1046 15.5 19 14.6046 19 13.5V6.5C19 5.39543 18.1046 4.5 17 4.5ZM8 6.5C8 5.94772 8.44772 5.5 9 5.5H17C17.5523 5.5 18 5.94772 18 6.5V13.5C18 14.0523 17.5523 14.5 17 14.5H9C8.44772 14.5 8 14.0523 8 13.5V6.5Z" fill="black"/>
<path d="M10.25 8.5C9.97386 8.5 9.75 8.27614 9.75 8C9.75 7.72386 9.97386 7.5 10.25 7.5H15.75C16.0261 7.5 16.25 7.72386 16.25 8C16.25 8.27614 16.0261 8.5 15.75 8.5H10.25Z" fill="black"/>
<path d="M10.25 10.5C9.97386 10.5 9.75 10.2761 9.75 10C9.75 9.72386 9.97386 9.5 10.25 9.5H15.75C16.0261 9.5 16.25 9.72386 16.25 10C16.25 10.2761 16.0261 10.5 15.75 10.5H10.25Z" fill="black"/>
<path d="M10.25 12.5C9.97386 12.5 9.75 12.2761 9.75 12C9.75 11.7239 9.97386 11.5 10.25 11.5H15.75C16.0261 11.5 16.25 11.7239 16.25 12C16.25 12.2761 16.0261 12.5 15.75 12.5H10.25Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M6 7.5H2.71016C1.83274 7.5 1.05777 8.0719 0.79907 8.91032L0 11.5V13.5C0 14.6046 0.89543 15.5 2 15.5H6C7.10457 15.5 8 14.6046 8 13.5V9.5C8 8.39543 7.10457 7.5 6 7.5ZM1 13.5V11.6508L1.75462 9.20516C1.88397 8.78595 2.27145 8.5 2.71016 8.5H6C6.55228 8.5 7 8.94772 7 9.5V13.5C7 14.0523 6.55228 14.5 6 14.5H2C1.44772 14.5 1 14.0523 1 13.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.59998H2.79046C2.56147 9.59998 2.36175 9.75553 2.30568 9.97754L2.01522 11.1276L2 11.25V12.1C2 12.3761 2.22386 12.6 2.5 12.6H4.5C4.77614 12.6 5 12.3761 5 12.1V10.1C5 9.82383 4.77614 9.59998 4.5 9.59998ZM3 11.6V11.3122L3.17988 10.6H4V11.6H3Z" fill="black"/>
</svg>
`;

const Umbrella = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M17.9981 12.5153C18.9261 12.5188 19.5 11.9301 19.5 11.0154C19.5 7.0875 16.7194 3.97003 12.9593 3.56093C12.9858 3.4711 13 3.37602 13 3.27761V1.75319C13 1.2009 12.5523 0.753185 12 0.753185C11.4477 0.753185 11 1.2009 11 1.75319V3.27761C11 3.38558 11.0171 3.48955 11.0488 3.58695C7.33672 4.09084 4.50003 7.19551 4.50003 11.0154C4.50003 11.9278 5.08439 12.4886 5.98532 12.5151C6.31258 12.5248 6.55493 12.3522 6.82207 12.0417C6.90381 11.9466 6.98714 11.8388 7.09085 11.6965C7.12065 11.6556 7.19647 11.5498 7.25954 11.4618C7.30106 11.4039 7.33705 11.3537 7.35074 11.3348C7.70851 10.8408 7.94601 10.6044 8.10482 10.5703C8.14153 10.5625 8.28045 10.6412 8.65736 10.9395C9.26019 11.4167 9.58816 11.5908 10.0821 11.5086C10.3878 11.4577 10.6512 11.3234 11 11.0815V17.5154L11.007 17.6336C11.1723 19.0224 12.0411 19.8735 13.3863 19.8735C14.8907 19.8735 15.6111 18.6746 15.6111 16.8352C15.6111 16.283 15.1634 15.8352 14.6111 15.8352C14.0588 15.8352 13.6111 16.283 13.6111 16.8352C13.6111 17.7136 13.515 17.8735 13.3863 17.8735C13.1119 17.8735 13.0488 17.8241 13 17.4533V11.0846C13.3651 11.3385 13.6132 11.4623 13.9249 11.5097C14.4159 11.5843 14.7331 11.4038 15.342 10.899C15.7196 10.5861 15.8664 10.4984 15.8998 10.5052C16.041 10.5341 16.2788 10.7801 16.6432 11.2976C16.6485 11.305 16.6662 11.3304 16.6903 11.3649C16.7545 11.4567 16.8637 11.6131 16.9034 11.6687C17.0064 11.8132 17.0903 11.9244 17.1723 12.022C17.4371 12.3372 17.6752 12.514 17.9981 12.5153Z" fill="currentColor"/>
</g>
<path d="M9.5 10.5C9.5 10.2239 9.72386 10 10 10C10.2761 10 10.5 10.2239 10.5 10.5L10.4963 17.0563C10.5797 17.7343 10.8603 18 11.4601 18C11.981 18 12.25 17.5673 12.25 16.4249C12.25 16.1488 12.4739 15.9249 12.75 15.9249C13.0261 15.9249 13.25 16.1488 13.25 16.4249C13.25 18.0494 12.6591 19 11.4601 19C10.3401 19 9.64721 18.3439 9.5 17.1174V10.5Z" fill="black"/>
<path d="M9.50006 1.76538C9.50006 1.48924 9.72392 1.26538 10.0001 1.26538C10.2762 1.26538 10.5001 1.48924 10.5001 1.76538V3.28981C10.5001 3.56595 10.2762 3.78981 10.0001 3.78981C9.72392 3.78981 9.50006 3.56595 9.50006 3.28981L9.50006 1.76538Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.9982 12.2653C16.9261 12.2688 17.5001 11.6801 17.5001 10.7654C17.5001 6.54833 14.2949 3.26538 10.1136 3.26538C5.89319 3.26538 2.50006 6.58764 2.50006 10.7654C2.50006 11.6778 3.08442 12.2386 3.98535 12.2652C4.31262 12.2748 4.55496 12.1022 4.8221 11.7917C4.90384 11.6966 4.98717 11.5888 5.09088 11.4465C5.12068 11.4056 5.1965 11.2998 5.25957 11.2118C5.30109 11.1539 5.33708 11.1037 5.35077 11.0848C5.70855 10.5908 5.94604 10.3544 6.10486 10.3204C6.14156 10.3125 6.28048 10.3912 6.65739 10.6896C7.26022 11.1667 7.58819 11.3408 8.08215 11.2586C8.39286 11.2069 8.65993 11.069 9.0175 10.8194C9.07317 10.7805 9.11973 10.7472 9.21734 10.6768C9.64505 10.3685 9.83443 10.2681 10.0081 10.2653C10.1616 10.2628 10.3455 10.361 10.7763 10.6744L10.8594 10.7347C11.3049 11.0568 11.5748 11.2065 11.9249 11.2597C12.416 11.3344 12.7331 11.1538 13.3421 10.649C13.7196 10.3361 13.8665 10.2484 13.8998 10.2552C14.041 10.2841 14.2788 10.5301 14.6432 11.0476C14.6485 11.055 14.6662 11.0804 14.6902 11.1148C14.7544 11.2066 14.8637 11.363 14.9034 11.4187C15.0064 11.5633 15.0903 11.6744 15.1723 11.772C15.4371 12.0872 15.6752 12.2641 15.9982 12.2653ZM10.1136 4.26538C13.7372 4.26538 16.5001 7.09531 16.5001 10.7654C16.5001 11.1328 16.3695 11.2667 16.002 11.2653C16.0328 11.2654 15.9656 11.1728 15.7999 10.9448C15.7136 10.8259 15.6006 10.6703 15.4608 10.4718C14.9354 9.72575 14.5989 9.37758 14.1003 9.27554C13.6207 9.17736 13.3697 9.32723 12.7039 9.87915C12.3325 10.187 12.1617 10.2842 12.0752 10.2711C11.9357 10.2498 11.7634 10.1543 11.4453 9.92431L11.3645 9.86567C10.7453 9.41534 10.4509 9.25803 9.99198 9.26545C9.53482 9.27283 9.23301 9.43277 8.63259 9.86557C8.53642 9.93494 8.49504 9.96456 8.44516 9.99937C8.20097 10.1698 8.0431 10.2513 7.91797 10.2722C7.81814 10.2888 7.64863 10.1988 7.278 9.90544C6.61491 9.38063 6.36876 9.24107 5.89527 9.34256C5.39709 9.44935 5.05101 9.7939 4.54088 10.4982C4.42013 10.665 4.32023 10.7997 4.24073 10.907C4.04883 11.1658 3.97573 11.2644 4.01477 11.2656C3.63946 11.2546 3.50006 11.1208 3.50006 10.7654C3.50006 7.14471 6.4408 4.26538 10.1136 4.26538Z" fill="black"/>
</svg>
`;

const Watch = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M16.1 11.25C16.1 13.7353 14.0853 15.75 11.6 15.75C9.11472 15.75 7.10001 13.7353 7.10001 11.25C7.10001 8.76472 9.11472 6.75 11.6 6.75C14.0853 6.75 16.1 8.76472 16.1 11.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.6 9C12.0142 9 12.35 9.33579 12.35 9.75V11.25C12.35 11.6642 12.0142 12 11.6 12C11.1858 12 10.85 11.6642 10.85 11.25V9.75C10.85 9.33579 11.1858 9 11.6 9Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.85 11.25C13.85 11.6642 13.5142 12 13.1 12H11.6C11.1858 12 10.85 11.6642 10.85 11.25C10.85 10.8358 11.1858 10.5 11.6 10.5H13.1C13.5142 10.5 13.85 10.8358 13.85 11.25Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.60001 3.75C9.60001 3.47386 9.82386 3.25 10.1 3.25H13.1C13.3761 3.25 13.6 3.47386 13.6 3.75C13.6 4.02614 13.3761 4.25 13.1 4.25H10.1C9.82386 4.25 9.60001 4.02614 9.60001 3.75Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2437 3.2711C10.5082 3.35045 10.6583 3.62919 10.5789 3.89368L9.07891 8.89368C8.99956 9.15818 8.72082 9.30827 8.45633 9.22892C8.19183 9.14957 8.04174 8.87083 8.12109 8.60634L9.62109 3.60634C9.70044 3.34184 9.97918 3.19175 10.2437 3.2711Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10.2437 19.2289C10.5082 19.1496 10.6583 18.8708 10.5789 18.6063L9.07891 13.6063C8.99956 13.3418 8.72082 13.1917 8.45633 13.2711C8.19183 13.3504 8.04174 13.6292 8.12109 13.8937L9.62109 18.8937C9.70044 19.1582 9.97918 19.3083 10.2437 19.2289Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9563 19.2289C12.6918 19.1496 12.5417 18.8708 12.6211 18.6063L14.1211 13.6063C14.2004 13.3418 14.4792 13.1917 14.7437 13.2711C15.0082 13.3504 15.1583 13.6292 15.0789 13.8937L13.5789 18.8937C13.4996 19.1582 13.2208 19.3083 12.9563 19.2289Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9563 3.2711C12.6918 3.35045 12.5417 3.62919 12.6211 3.89368L14.1211 8.89368C14.2004 9.15818 14.4792 9.30827 14.7437 9.22892C15.0082 9.14957 15.1583 8.87083 15.0789 8.60634L13.5789 3.60634C13.4996 3.34184 13.2208 3.19175 12.9563 3.2711Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.60001 18.75C9.60001 18.4739 9.82386 18.25 10.1 18.25H13.1C13.3761 18.25 13.6 18.4739 13.6 18.75C13.6 19.0261 13.3761 19.25 13.1 19.25H10.1C9.82386 19.25 9.60001 19.0261 9.60001 18.75Z" fill="currentColor"/>
<path d="M10.1 4.25H13.1L14.1 7.25H9.10001L10.1 4.25Z" fill="currentColor"/>
<path d="M13.1 18.25H10.1L9.10001 15.25H14.1L13.1 18.25Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6ZM5 10C5 7.23858 7.23858 5 10 5C12.7614 5 15 7.23858 15 10C15 12.7614 12.7614 15 10 15C7.23858 15 5 12.7614 5 10Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C10.2761 8 10.5 8.22386 10.5 8.5V10C10.5 10.2761 10.2761 10.5 10 10.5C9.72386 10.5 9.5 10.2761 9.5 10V8.5C9.5 8.22386 9.72386 8 10 8Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 10C12 10.2761 11.7761 10.5 11.5 10.5H10C9.72386 10.5 9.5 10.2761 9.5 10C9.5 9.72386 9.72386 9.5 10 9.5H11.5C11.7761 9.5 12 9.72386 12 10Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 2.5C8 2.22386 8.22386 2 8.5 2H11.5C11.7761 2 12 2.22386 12 2.5C12 2.77614 11.7761 3 11.5 3H8.5C8.22386 3 8 2.77614 8 2.5Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.63737 2.01924C8.90288 2.09511 9.05663 2.37185 8.98077 2.63737L7.98077 6.13737C7.90491 6.40288 7.62816 6.55663 7.36265 6.48077C7.09713 6.40491 6.94338 6.12816 7.01924 5.86265L8.01924 2.36265C8.09511 2.09713 8.37185 1.94338 8.63737 2.01924Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.63737 17.9808C8.90288 17.9049 9.05663 17.6282 8.98077 17.3626L7.98077 13.8626C7.90491 13.5971 7.62816 13.4434 7.36265 13.5192C7.09713 13.5951 6.94338 13.8718 7.01924 14.1374L8.01924 17.6374C8.09511 17.9029 8.37185 18.0566 8.63737 17.9808Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3626 17.9808C11.0971 17.9049 10.9434 17.6282 11.0192 17.3626L12.0192 13.8626C12.0951 13.5971 12.3718 13.4434 12.6374 13.5192C12.9029 13.5951 13.0566 13.8718 12.9808 14.1374L11.9808 17.6374C11.9049 17.9029 11.6282 18.0566 11.3626 17.9808Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M11.3626 2.01924C11.0971 2.09511 10.9434 2.37185 11.0192 2.63737L12.0192 6.13737C12.0951 6.40288 12.3718 6.55663 12.6374 6.48077C12.9029 6.40491 13.0566 6.12816 12.9808 5.86265L11.9808 2.36265C11.9049 2.09713 11.6282 1.94338 11.3626 2.01924Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 17.5C8 17.2239 8.22386 17 8.5 17H11.5C11.7761 17 12 17.2239 12 17.5C12 17.7761 11.7761 18 11.5 18H8.5C8.22386 18 8 17.7761 8 17.5Z" fill="black"/>
</svg>
`;

const WaterDrop = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1210_1003)">
<g opacity="0.8">
<path d="M18.4478 14.9829C16.6406 18.4836 12.3377 19.8564 8.83702 18.0491C5.33635 16.2419 3.96354 11.939 5.77076 8.43833C6.87748 6.29458 10.0822 3.17505 15.185 2.61125C16.3189 3.1782 14.0246 4.67157 15.3816 5.37208C18.8822 7.1793 20.255 11.4822 18.4478 14.9829Z" fill="currentColor"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15.3816 5.37208C15.0125 5.18156 14.9136 4.9324 14.9422 4.65918C14.9687 4.40676 15.1042 4.13381 15.2363 3.86759C15.2605 3.81891 15.2845 3.77045 15.3078 3.72238C15.5257 3.27171 15.6735 2.85551 15.185 2.61125C14.8459 2.64872 14.5151 2.69748 14.1928 2.75649C13.9657 2.79808 13.7427 2.84476 13.524 2.89616C13.5094 2.89958 13.4949 2.90303 13.4804 2.90649C9.36449 3.88814 6.74864 6.54414 5.77076 8.43833C3.96354 11.939 5.33635 16.2419 8.83702 18.0491C12.3377 19.8564 16.6406 18.4836 18.4478 14.9829C20.255 11.4822 18.8822 7.1793 15.3816 5.37208ZM12.9655 5.13229C10.021 6.11995 8.20294 8.08697 7.54792 9.35579C6.24739 11.875 7.2353 14.9715 9.75448 16.272C12.2737 17.5725 15.3701 16.5846 16.6707 14.0654C17.9712 11.5462 16.9833 8.44976 14.4641 7.14923C14.0671 6.9443 13.6483 6.62966 13.3426 6.14921C13.1287 5.81301 13.0138 5.46405 12.9655 5.13229Z" fill="currentColor"/>
</g>
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.05835 10.856C7.10205 10.5563 6.90598 10.2583 6.61918 10.1894C6.33141 10.1203 6.06127 10.308 6.01581 10.6087L6.53686 10.7338C6.01581 10.6087 6.01583 10.6085 6.01581 10.6087L6.01561 10.61L6.01537 10.6116L6.0148 10.6155L6.01333 10.6263C6.01221 10.6348 6.01083 10.6457 6.00933 10.659C6.00634 10.6856 6.00281 10.7216 5.99979 10.7658C5.99378 10.8537 5.98962 10.9758 5.99613 11.12C6.00889 11.4026 6.06397 11.801 6.25179 12.1977C6.43896 12.593 6.70857 12.8862 6.91708 13.0743C7.0233 13.1701 7.11921 13.2436 7.19026 13.2942C7.22593 13.3197 7.25577 13.3396 7.27803 13.354C7.28917 13.3613 7.29845 13.3671 7.30567 13.3716L7.31492 13.3772L7.31834 13.3793L7.31974 13.3801L7.32065 13.3807C7.32079 13.3808 7.32093 13.3809 7.55417 12.8981L7.32065 13.3807C7.58197 13.5359 7.8985 13.4458 8.02731 13.1792C8.15608 12.9127 8.04878 12.5708 7.78767 12.4155L7.78839 12.4159L7.79011 12.4169C7.79039 12.4171 7.79011 12.4169 7.79011 12.4169L7.7817 12.4116C7.77263 12.4057 7.75709 12.3954 7.73654 12.3807C7.69516 12.3512 7.6353 12.3055 7.56817 12.245C7.42998 12.1203 7.28259 11.9523 7.18851 11.7536C7.09509 11.5563 7.05852 11.3338 7.04994 11.144C7.04579 11.052 7.04854 10.975 7.0521 10.9229C7.05387 10.897 7.0558 10.8779 7.05706 10.8667L7.05835 10.856Z" fill="black"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.3265 1.64128C13.8671 1.91159 13.6285 2.39247 13.3778 2.89762C13.1027 3.45199 12.8131 4.03558 13.5231 4.40211C17.0237 6.20933 18.3966 10.5122 16.5893 14.0129C14.7821 17.5136 10.4792 18.8864 6.97853 17.0792C3.47786 15.2719 2.10505 10.969 3.91227 7.46836C4.98263 5.39503 8.01543 2.40898 12.8298 1.70499C12.9933 1.68108 13.1589 1.6598 13.3265 1.64128ZM12.3117 2.80903C8.22443 3.62589 5.68571 6.21309 4.80085 7.92709C3.24697 10.937 4.42733 14.6367 7.43726 16.1906C10.4472 17.7445 14.1469 16.5641 15.7008 13.5542C17.2546 10.5443 16.0743 6.84456 13.0643 5.29068C12.7811 5.14443 12.5154 4.93714 12.3279 4.64243C12.1351 4.33954 12.072 4.01822 12.0797 3.72844C12.0889 3.38312 12.2039 3.05502 12.3117 2.80903Z" fill="black"/>
</g>
<defs>
<clipPath id="clip0_1210_1003">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
`;

const Wifi = `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.8">
<path d="M14.6961 12.2821C15.0926 12.6665 15.1024 13.2996 14.7179 13.6961C14.3335 14.0926 13.7004 14.1024 13.3039 13.7179C13.273 13.688 13.2391 13.6581 13.2022 13.6285C13.0406 13.4986 12.8292 13.3788 12.5791 13.2796C12.1265 13.1001 11.5793 13 11 13C10.086 13 9.26716 13.2511 8.79777 13.6285C8.76089 13.6581 8.72699 13.688 8.69613 13.7179C8.29964 14.1024 7.66655 14.0926 7.28209 13.6961C6.89762 13.2996 6.90738 12.6665 7.30387 12.2821C7.37977 12.2085 7.46015 12.1377 7.54472 12.0697C8.39422 11.3868 9.65538 11 11 11C11.8267 11 12.6239 11.1459 13.3163 11.4204C13.7456 11.5907 14.131 11.809 14.4553 12.0697C14.5399 12.1377 14.6202 12.2085 14.6961 12.2821Z" fill="currentColor"/>
<path d="M17.2128 9.68869C17.6002 10.0824 17.595 10.7155 17.2013 11.1029C16.8076 11.4902 16.1745 11.485 15.7872 11.0913C15.6908 10.9934 15.5866 10.898 15.4751 10.8056C15.362 10.712 15.2416 10.6216 15.1142 10.5349C14.9855 10.4473 14.8498 10.3636 14.7078 10.2842C14.5647 10.2042 14.4152 10.1287 14.2601 10.058C14.104 9.9869 13.9424 9.92084 13.7758 9.86013C13.6085 9.79914 13.4364 9.74364 13.2601 9.6939C13.0833 9.64404 12.9026 9.60002 12.7185 9.56207C12.5345 9.52413 12.3472 9.49229 12.1573 9.46673C11.968 9.44124 11.7762 9.42202 11.5824 9.40919C11.3899 9.39644 11.1956 9.39001 11 9.39001C10.8044 9.39001 10.6101 9.39644 10.4176 9.40919C10.2238 9.42202 10.032 9.44124 9.84266 9.46673C9.65277 9.49229 9.46551 9.52413 9.28146 9.56207C9.09736 9.60002 8.91666 9.64404 8.73993 9.6939C8.56364 9.74364 8.39152 9.79914 8.22416 9.86013C8.0576 9.92084 7.89597 9.9869 7.73987 10.058C7.58477 10.1287 7.43534 10.2042 7.29217 10.2842C7.15018 10.3636 7.01455 10.4473 6.88581 10.5349C6.75842 10.6216 6.63797 10.712 6.52494 10.8056C6.41338 10.898 6.30922 10.9934 6.21284 11.0913C5.82551 11.485 5.19237 11.4902 4.79868 11.1029C4.40498 10.7155 4.39983 10.0824 4.78716 9.68869C4.93166 9.54182 5.0859 9.40053 5.24924 9.26525C5.41113 9.13118 5.58183 9.0031 5.76069 8.8814C5.93819 8.76061 6.12361 8.6462 6.31623 8.53851C6.50766 8.4315 6.70608 8.3312 6.91079 8.23795C7.11446 8.14517 7.32421 8.05944 7.53934 7.98104C7.75355 7.90297 7.97295 7.83222 8.19683 7.76905C8.41971 7.70617 8.64688 7.65083 8.87767 7.60326C9.10719 7.55594 9.34013 7.51634 9.57585 7.48461C9.80999 7.45309 10.0467 7.42936 10.2855 7.41356C10.522 7.39789 10.7604 7.39001 11 7.39001C11.2396 7.39001 11.478 7.39789 11.7145 7.41356C11.9533 7.42936 12.19 7.45309 12.4241 7.48461C12.6599 7.51634 12.8928 7.55594 13.1223 7.60326C13.3531 7.65083 13.5803 7.70617 13.8032 7.76905C14.0271 7.83222 14.2464 7.90297 14.4607 7.98104C14.6758 8.05944 14.8855 8.14517 15.0892 8.23795C15.2939 8.3312 15.4923 8.4315 15.6838 8.53851C15.8764 8.6462 16.0618 8.76061 16.2393 8.8814C16.4182 9.0031 16.5889 9.13118 16.7508 9.26525C16.9141 9.40053 17.0683 9.54182 17.2128 9.68869Z" fill="currentColor"/>
<path d="M19.2454 7.22201C19.6136 7.63366 19.5783 8.26584 19.1667 8.63403C18.755 9.00221 18.1228 8.96697 17.7546 8.55532C17.6133 8.3973 17.4611 8.24398 17.2987 8.09599C17.1352 7.94702 16.9614 7.80363 16.7782 7.66645C16.5939 7.5285 16.4001 7.397 16.1977 7.27253C15.9944 7.14748 15.7825 7.02968 15.5629 6.91965C15.3426 6.80922 15.1147 6.70676 14.8801 6.61271C14.6448 6.51841 14.4031 6.43268 14.1558 6.35591C13.9082 6.27907 13.6552 6.21129 13.3976 6.15288C13.1404 6.09455 12.8788 6.04562 12.6136 6.00636C12.3494 5.96723 12.0818 5.93773 11.8116 5.91805C11.5433 5.89851 11.2725 5.88866 11 5.88866C10.7275 5.88866 10.4568 5.89851 10.1884 5.91805C9.91819 5.93773 9.65062 5.96723 9.38638 6.00636C9.12121 6.04562 8.85962 6.09455 8.60238 6.15288C8.34479 6.21129 8.0918 6.27907 7.84422 6.35591C7.59687 6.43268 7.35518 6.51841 7.11995 6.61271C6.88536 6.70676 6.65746 6.80922 6.43708 6.91965C6.2175 7.02968 6.00564 7.14748 5.80229 7.27253C5.59988 7.397 5.40615 7.5285 5.22185 7.66645C5.03857 7.80363 4.86484 7.94702 4.70132 8.09599C4.53888 8.24398 4.38671 8.3973 4.24538 8.55532C3.87719 8.96697 3.24501 9.00221 2.83335 8.63403C2.4217 8.26584 2.38646 7.63366 2.75464 7.22201C2.94178 7.01278 3.14198 6.81106 3.35441 6.61753C3.56577 6.42498 3.78906 6.24069 4.02339 6.06529C4.2567 5.89067 4.50075 5.725 4.75463 5.56888C5.00756 5.41334 5.27004 5.26739 5.54111 5.13157C5.81132 4.99617 6.08986 4.87094 6.37575 4.75633C6.66085 4.64203 6.95304 4.53839 7.25138 4.4458C7.54872 4.35351 7.85193 4.27227 8.1601 4.20239C8.46682 4.13284 8.77822 4.0746 9.09344 4.02793C9.40671 3.98154 9.72353 3.94661 10.0431 3.92334C10.3598 3.90027 10.679 3.88866 11 3.88866C11.321 3.88866 11.6402 3.90027 11.9569 3.92334C12.2765 3.94661 12.5933 3.98154 12.9066 4.02793C13.2218 4.0746 13.5332 4.13284 13.8399 4.20239C14.1481 4.27227 14.4513 4.35351 14.7486 4.4458C15.047 4.53839 15.3392 4.64203 15.6243 4.75633C15.9102 4.87094 16.1887 4.99617 16.4589 5.13157C16.73 5.26739 16.9925 5.41334 17.2454 5.56888C17.4993 5.725 17.7433 5.89067 17.9766 6.06529C18.211 6.24069 18.4342 6.42498 18.6456 6.61753C18.858 6.81106 19.0582 7.01278 19.2454 7.22201Z" fill="currentColor"/>
<path d="M13 16.25C13 17.3546 12.1046 18.25 11 18.25C9.89543 18.25 9 17.3546 9 16.25C9 15.1454 9.89543 14.25 11 14.25C12.1046 14.25 13 15.1454 13 16.25Z" fill="currentColor"/>
</g>
<path d="M13.3481 11.641C13.5463 11.8333 13.5512 12.1498 13.359 12.3481C13.1667 12.5463 12.8502 12.5512 12.6519 12.359C12.6098 12.3181 12.5643 12.278 12.5155 12.2388C12.3132 12.0762 12.0583 11.9317 11.7634 11.8148C11.2508 11.6116 10.6411 11.5 10 11.5C8.97837 11.5 8.04893 11.7851 7.4845 12.2388C7.43571 12.278 7.39018 12.3181 7.34807 12.359C7.14982 12.5512 6.83327 12.5463 6.64104 12.3481C6.44881 12.1498 6.45369 11.8333 6.65194 11.641C6.71658 11.5784 6.78533 11.5178 6.85798 11.4594C7.61245 10.8529 8.76304 10.5 10 10.5C10.7648 10.5 11.4996 10.6344 12.132 10.8852C12.5165 11.0377 12.8584 11.2314 13.142 11.4594C13.2147 11.5178 13.2834 11.5784 13.3481 11.641Z" fill="black"/>
<path d="M15.8564 9.03935C16.0501 9.2362 16.0475 9.55277 15.8507 9.74644C15.6538 9.9401 15.3372 9.93752 15.1436 9.74068C15.0352 9.63049 14.9185 9.52361 14.794 9.42049C14.6687 9.31677 14.5357 9.21697 14.3955 9.12153C14.2545 9.02564 14.1065 8.93426 13.9518 8.84781C13.7966 8.76102 13.6349 8.6793 13.4674 8.60299C13.2994 8.52647 13.1257 8.45549 12.947 8.39036C12.768 8.3251 12.584 8.26579 12.3958 8.21269C12.2076 8.15957 12.0153 8.11272 11.8195 8.07237C11.6241 8.03208 11.4254 7.9983 11.224 7.9712C11.0235 7.9442 10.8204 7.92385 10.6154 7.91028C10.4119 7.8968 10.2066 7.89001 10 7.89001C9.79341 7.89001 9.58811 7.8968 9.38457 7.91028C9.17957 7.92385 8.97652 7.9442 8.77596 7.9712C8.57461 7.9983 8.37593 8.03208 8.18051 8.07237C7.98474 8.11272 7.79242 8.15957 7.60416 8.21269C7.41597 8.26579 7.23203 8.3251 7.05296 8.39036C6.87425 8.45549 6.70059 8.52647 6.5326 8.60299C6.3651 8.6793 6.20342 8.76102 6.04818 8.84781C5.89354 8.93426 5.74546 9.02564 5.60453 9.12153C5.46427 9.21697 5.33126 9.31677 5.20602 9.42049C5.08151 9.52361 4.96483 9.63049 4.85642 9.74068C4.66276 9.93752 4.34618 9.9401 4.14934 9.74644C3.95249 9.55277 3.94991 9.2362 4.14358 9.03935C4.27605 8.90471 4.41777 8.77489 4.56817 8.65033C4.71784 8.52638 4.87598 8.40772 5.04197 8.29478C5.20728 8.18229 5.38025 8.07555 5.56021 7.97494C5.73958 7.87467 5.92575 7.78056 6.11806 7.69296C6.30984 7.60561 6.50756 7.52479 6.71054 7.45081C6.91304 7.37701 7.12062 7.31008 7.3326 7.25026C7.54395 7.19063 7.7595 7.13813 7.97862 7.09296C8.19677 7.04799 8.41829 7.01033 8.64256 6.98014C8.8655 6.95013 9.09101 6.92753 9.3185 6.91246C9.54404 6.89753 9.77138 6.89001 10 6.89001C10.2286 6.89001 10.456 6.89753 10.6815 6.91246C10.909 6.92753 11.1345 6.95013 11.3574 6.98014C11.5817 7.01033 11.8032 7.04799 12.0214 7.09296C12.2405 7.13813 12.4561 7.19063 12.6674 7.25026C12.8794 7.31008 13.087 7.37701 13.2895 7.45081C13.4924 7.52479 13.6902 7.60561 13.8819 7.69296C14.0742 7.78056 14.2604 7.87467 14.4398 7.97494C14.6198 8.07555 14.7927 8.18229 14.958 8.29478C15.124 8.40772 15.2822 8.52638 15.4318 8.65033C15.5822 8.77489 15.724 8.90471 15.8564 9.03935Z" fill="black"/>
<path d="M17.8727 6.55534C18.0568 6.76117 18.0392 7.07726 17.8333 7.26135C17.6275 7.44544 17.3114 7.42782 17.1273 7.22199C16.9745 7.05117 16.8104 6.88575 16.6354 6.72638C16.4599 6.56651 16.2738 6.4129 16.0778 6.26617C15.8812 6.11905 15.6749 5.979 15.4596 5.84662C15.2439 5.71395 15.0194 5.58911 14.7869 5.47264C14.5541 5.35597 14.3135 5.24781 14.0661 5.14862C13.8184 5.04932 13.5641 4.95911 13.304 4.87839C13.044 4.79769 12.7784 4.72654 12.5082 4.66526C12.2386 4.60413 11.9646 4.55287 11.6869 4.51176C11.4104 4.47082 11.1305 4.43996 10.848 4.41938C10.5675 4.39895 10.2846 4.38867 10 4.38867C9.71539 4.38867 9.43252 4.39895 9.15205 4.41938C8.86952 4.43996 8.58964 4.47082 8.31314 4.51176C8.03545 4.55287 7.76141 4.60413 7.4918 4.66526C7.22157 4.72654 6.95603 4.79769 6.69601 4.87839C6.43591 4.95911 6.18159 5.04932 5.9339 5.14862C5.68648 5.24781 5.44592 5.35597 5.21308 5.47264C4.98063 5.58911 4.75611 5.71395 4.54037 5.84662C4.32509 5.979 4.11878 6.11905 3.92223 6.26617C3.72619 6.4129 3.54007 6.56651 3.36459 6.72638C3.18965 6.88575 3.02547 7.05117 2.87269 7.22199C2.6886 7.42782 2.3725 7.44544 2.16668 7.26135C1.96085 7.07726 1.94323 6.76117 2.12732 6.55534C2.30301 6.35891 2.4912 6.1693 2.69113 5.98715C2.89053 5.80549 3.10143 5.63143 3.323 5.46559C3.54406 5.30013 3.77553 5.14301 4.01654 4.9948C4.25708 4.84688 4.5069 4.70797 4.7651 4.57859C5.02285 4.44944 5.28873 4.3299 5.56179 4.22043C5.83442 4.11113 6.11399 4.01197 6.39958 3.92333C6.68448 3.83491 6.97514 3.75703 7.27066 3.69002C7.56501 3.62327 7.86396 3.56736 8.16667 3.52254C8.46768 3.47797 8.77219 3.4444 9.07941 3.42202C9.38405 3.39983 9.69115 3.38867 10 3.38867C10.3089 3.38867 10.616 3.39983 10.9206 3.42202C11.2278 3.4444 11.5323 3.47797 11.8333 3.52254C12.1361 3.56736 12.435 3.62327 12.7293 3.69002C13.0249 3.75703 13.3155 3.83491 13.6004 3.92333C13.886 4.01197 14.1656 4.11113 14.4382 4.22043C14.7113 4.3299 14.9772 4.44944 15.2349 4.57859C15.4931 4.70797 15.7429 4.84688 15.9835 4.9948C16.2245 5.14301 16.456 5.30013 16.677 5.46559C16.8986 5.63143 17.1095 5.80549 17.3089 5.98715C17.5088 6.1693 17.697 6.35891 17.8727 6.55534Z" fill="black"/>
<path d="M11.75 15.25C11.75 16.2165 10.9665 17 10 17C9.0335 17 8.25 16.2165 8.25 15.25C8.25 14.2835 9.0335 13.5 10 13.5C10.9665 13.5 11.75 14.2835 11.75 15.25Z" fill="black"/>
</svg>
`;

/** Do not edit! This file is auto-generated. */
// ======= //
/* EXPORTS */
// ======= //
const printAirplane = Airplane;
const printAlarm = Alarm;
const printAngleDown = AngleDown;
const printAngleLeft = AngleLeft;
const printAngleRight = AngleRight;
const printAngleUp = AngleUp;
const printArrowDown = ArrowDown;
const printArrowDownLeft = ArrowDownLeft;
const printArrowDownRight = ArrowDownRight;
const printArrowLeft = ArrowLeft;
const printArrowRight = ArrowRight;
const printArrowUp = ArrowUp;
const printArrowUpLeft = ArrowUpLeft;
const printArrowUpRight = ArrowUpRight;
const printBank = Bank;
const printBattery = Battery;
const printBell = Bell;
const printBellOff = BellOff;
const printBicycle = Bicycle;
const printBluetooth = Bluetooth;
const printBook = Book;
const printBookmark = Bookmark;
const printBriefcase = Briefcase;
const printBuilding = Building;
const printCalculator = Calculator;
const printCalendar = Calendar;
const printCamera = Camera;
const printCan = Can;
const printCar = Car;
const printCart = Cart;
const printCellphoneEye = CellphoneEye;
const printCellphoneLoop = CellphoneLoop;
const printChain = Chain;
const printCheckmark = Checkmark;
const printCircle = Circle;
const printClipboard = Clipboard;
const printClipboardCheck = ClipboardCheck;
const printClipboardCheckCircle = ClipboardCheckCircle;
const printClock = Clock;
const printCloud = Cloud;
const printCloudDown = CloudDown;
const printCloudUp = CloudUp;
const printCoctail = Coctail;
const printCode = Code;
const printColorPicker = ColorPicker;
const printContract = Contract;
const printController = Controller;
const printCountdown = Countdown;
const printCreditCard = CreditCard;
const printCrown = Crown;
const printCup = Cup;
const printCv = Cv;
const printDivision = Division;
const printDotsX = DotsX;
const printDotsY = DotsY;
const printDress = Dress;
const printDuplicate = Duplicate;
const printElectricity = Electricity;
const printEnter = Enter;
const printExclamation = Exclamation;
const printExclamationCircle = ExclamationCircle;
const printExpand = Expand;
const printEye = Eye;
const printEyeClosed = EyeClosed;
const printEyeFrame = EyeFrame;
const printEyeOff = EyeOff;
const printFastForward = FastForward;
const printFile = File;
const printFileLoop = FileLoop;
const printFilmFrame = FilmFrame;
const printFire = Fire;
const printFlag = Flag;
const printFlagStraight = FlagStraight;
const printFlower = Flower;
const printFlowerBud = FlowerBud;
const printFolder = Folder;
const printFoldingStool = FoldingStool;
const printGear = Gear;
const printGift = Gift;
const printGrab = Grab;
const printHamburger = Hamburger;
const printHandGrab = HandGrab;
const printHandOpen = HandOpen;
const printHandPoint = HandPoint;
const printHandPointOpen = HandPointOpen;
const printHandshake = Handshake;
const printHash = Hash;
const printHeadphone = Headphone;
const printHeart = Heart;
const printHourglass = Hourglass;
const printHouse = House;
const printIdentification = Identification;
const printInfo = Info;
const printInfoCircle = InfoCircle;
const printInternet = Internet;
const printKey = Key;
const printKniveFork = KniveFork;
const printLabel = Label;
const printLeave = Leave;
const printLetter = Letter;
const printLetterOpen = LetterOpen;
const printList = List;
const printLockClosed = LockClosed;
const printLockOpen = LockOpen;
const printLoop = Loop;
const printLoopMinus = LoopMinus;
const printLoopPlus = LoopPlus;
const printMagnet = Magnet;
const printMap = Map;
const printMegaphone = Megaphone;
const printMenu = Menu;
const printMicrophone = Microphone;
const printMicrophone2 = Microphone2;
const printMinus = Minus;
const printMonitor = Monitor;
const printMonitorEye = MonitorEye;
const printMonitorLoop = MonitorLoop;
const printMonitor2 = Monitor2;
const printMoon = Moon;
const printMotorcycle = Motorcycle;
const printMoveX = MoveX;
const printMoveY = MoveY;
const printMusicNoteDouble = MusicNoteDouble;
const printMusicNoteSingle = MusicNoteSingle;
const printNextTrack = NextTrack;
const printOpen = Open;
const printPaintPallet = PaintPallet;
const printPause = Pause;
const printPen = Pen;
const printPeople = People;
const printPerson = Person;
const printPersonCheckmark = PersonCheckmark;
const printPersonPlus = PersonPlus;
const printPersons = Persons;
const printPhone = Phone;
const printPhoto = Photo;
const printPhotoCamera = PhotoCamera;
const printPhotoStudio = PhotoStudio;
const printPill = Pill;
const printPin = Pin;
const printPinpoint = Pinpoint;
const printPinpointOff = PinpointOff;
const printPlay = Play;
const printPlus = Plus;
const printPower = Power;
const printPreviousTrack = PreviousTrack;
const printPrinter = Printer;
const printQrCode = QrCode;
const printQuestion = Question;
const printQuestionCircle = QuestionCircle;
const printRadio = Radio;
const printRefresh = Refresh;
const printReload = Reload;
const printRepeat = Repeat;
const printRewind = Rewind;
const printRewindTime = RewindTime;
const printScissors = Scissors;
const printSend = Send;
const printShareAndroid = ShareAndroid;
const printShareIos = ShareIos;
const printShuffle = Shuffle;
const printSliders = Sliders;
const printSmartphone = Smartphone;
const printSmartphoneNotch = SmartphoneNotch;
const printSmartphone2 = Smartphone2;
const printSoftDrink = SoftDrink;
const printSort = Sort;
const printSpeakerHigh = SpeakerHigh;
const printSpeakerLow = SpeakerLow;
const printSpeakerOff = SpeakerOff;
const printSquare = Square;
const printStar = Star;
const printStopwatch = Stopwatch;
const printStudioBackdrop = StudioBackdrop;
const printStudioLightFront = StudioLightFront;
const printStudioLightSide = StudioLightSide;
const printSun = Sun;
const printSyringe = Syringe;
const printTShirt = TShirt;
const printTaxi = Taxi;
const printTelevision = Television;
const printTextBubble = TextBubble;
const printThumbsDown = ThumbsDown;
const printThumbsUp = ThumbsUp;
const printTimes = Times;
const printTool = Tool;
const printTrain = Train;
const printTrash = Trash;
const printTriangleDown = TriangleDown;
const printTriangleLeft = TriangleLeft;
const printTriangleRight = TriangleRight;
const printTriangleUp = TriangleUp;
const printTrophy = Trophy;
const printTruck = Truck;
const printUmbrella = Umbrella;
const printWatch = Watch;
const printWaterDrop = WaterDrop;
const printWifi = Wifi;
const print = {
    'airplane': Airplane,
    'alarm': Alarm,
    'angle-down': AngleDown,
    'angle-left': AngleLeft,
    'angle-right': AngleRight,
    'angle-up': AngleUp,
    'arrow-down': ArrowDown,
    'arrow-down-left': ArrowDownLeft,
    'arrow-down-right': ArrowDownRight,
    'arrow-left': ArrowLeft,
    'arrow-right': ArrowRight,
    'arrow-up': ArrowUp,
    'arrow-up-left': ArrowUpLeft,
    'arrow-up-right': ArrowUpRight,
    'bank': Bank,
    'battery': Battery,
    'bell': Bell,
    'bell-off': BellOff,
    'bicycle': Bicycle,
    'bluetooth': Bluetooth,
    'book': Book,
    'bookmark': Bookmark,
    'briefcase': Briefcase,
    'building': Building,
    'calculator': Calculator,
    'calendar': Calendar,
    'camera': Camera,
    'can': Can,
    'car': Car,
    'cart': Cart,
    'cellphone-eye': CellphoneEye,
    'cellphone-loop': CellphoneLoop,
    'chain': Chain,
    'checkmark': Checkmark,
    'circle': Circle,
    'clipboard': Clipboard,
    'clipboard-check': ClipboardCheck,
    'clipboard-check-circle': ClipboardCheckCircle,
    'clock': Clock,
    'cloud': Cloud,
    'cloud-down': CloudDown,
    'cloud-up': CloudUp,
    'coctail': Coctail,
    'code': Code,
    'color-picker': ColorPicker,
    'contract': Contract,
    'controller': Controller,
    'countdown': Countdown,
    'credit-card': CreditCard,
    'crown': Crown,
    'cup': Cup,
    'cv': Cv,
    'division': Division,
    'dots-x': DotsX,
    'dots-y': DotsY,
    'dress': Dress,
    'duplicate': Duplicate,
    'electricity': Electricity,
    'enter': Enter,
    'exclamation': Exclamation,
    'exclamation-circle': ExclamationCircle,
    'expand': Expand,
    'eye': Eye,
    'eye-closed': EyeClosed,
    'eye-frame': EyeFrame,
    'eye-off': EyeOff,
    'fast-forward': FastForward,
    'file': File,
    'file-loop': FileLoop,
    'film-frame': FilmFrame,
    'fire': Fire,
    'flag': Flag,
    'flag-straight': FlagStraight,
    'flower': Flower,
    'flower-bud': FlowerBud,
    'folder': Folder,
    'folding-stool': FoldingStool,
    'gear': Gear,
    'gift': Gift,
    'grab': Grab,
    'hamburger': Hamburger,
    'hand-grab': HandGrab,
    'hand-open': HandOpen,
    'hand-point': HandPoint,
    'hand-point-open': HandPointOpen,
    'handshake': Handshake,
    'hash': Hash,
    'headphone': Headphone,
    'heart': Heart,
    'hourglass': Hourglass,
    'house': House,
    'identification': Identification,
    'info': Info,
    'info-circle': InfoCircle,
    'internet': Internet,
    'key': Key,
    'knive-fork': KniveFork,
    'label': Label,
    'leave': Leave,
    'letter': Letter,
    'letter-open': LetterOpen,
    'list': List,
    'lock-closed': LockClosed,
    'lock-open': LockOpen,
    'loop': Loop,
    'loop-minus': LoopMinus,
    'loop-plus': LoopPlus,
    'magnet': Magnet,
    'map': Map,
    'megaphone': Megaphone,
    'menu': Menu,
    'microphone': Microphone,
    'microphone2': Microphone2,
    'minus': Minus,
    'monitor': Monitor,
    'monitor-eye': MonitorEye,
    'monitor-loop': MonitorLoop,
    'monitor2': Monitor2,
    'moon': Moon,
    'motorcycle': Motorcycle,
    'move-x': MoveX,
    'move-y': MoveY,
    'music-note-double': MusicNoteDouble,
    'music-note-single': MusicNoteSingle,
    'next-track': NextTrack,
    'open': Open,
    'paint-pallet': PaintPallet,
    'pause': Pause,
    'pen': Pen,
    'people': People,
    'person': Person,
    'person-checkmark': PersonCheckmark,
    'person-plus': PersonPlus,
    'persons': Persons,
    'phone': Phone,
    'photo': Photo,
    'photo-camera': PhotoCamera,
    'photo-studio': PhotoStudio,
    'pill': Pill,
    'pin': Pin,
    'pinpoint': Pinpoint,
    'pinpoint-off': PinpointOff,
    'play': Play,
    'plus': Plus,
    'power': Power,
    'previous-track': PreviousTrack,
    'printer': Printer,
    'qr-code': QrCode,
    'question': Question,
    'question-circle': QuestionCircle,
    'radio': Radio,
    'refresh': Refresh,
    'reload': Reload,
    'repeat': Repeat,
    'rewind': Rewind,
    'rewind-time': RewindTime,
    'scissors': Scissors,
    'send': Send,
    'share-android': ShareAndroid,
    'share-ios': ShareIos,
    'shuffle': Shuffle,
    'sliders': Sliders,
    'smartphone': Smartphone,
    'smartphone-notch': SmartphoneNotch,
    'smartphone2': Smartphone2,
    'soft-drink': SoftDrink,
    'sort': Sort,
    'speaker-high': SpeakerHigh,
    'speaker-low': SpeakerLow,
    'speaker-off': SpeakerOff,
    'square': Square,
    'star': Star,
    'stopwatch': Stopwatch,
    'studio-backdrop': StudioBackdrop,
    'studio-light-front': StudioLightFront,
    'studio-light-side': StudioLightSide,
    'sun': Sun,
    'syringe': Syringe,
    't-shirt': TShirt,
    'taxi': Taxi,
    'television': Television,
    'text-bubble': TextBubble,
    'thumbs-down': ThumbsDown,
    'thumbs-up': ThumbsUp,
    'times': Times,
    'tool': Tool,
    'train': Train,
    'trash': Trash,
    'triangle-down': TriangleDown,
    'triangle-left': TriangleLeft,
    'triangle-right': TriangleRight,
    'triangle-up': TriangleUp,
    'trophy': Trophy,
    'truck': Truck,
    'umbrella': Umbrella,
    'watch': Watch,
    'water-drop': WaterDrop,
    'wifi': Wifi,
};

/**
 * @returns {{ r: number, g: number, b: number, a?: number }} { r: [0-255], g: [0-255], b: [0-255}<, a: [0-100]>}
 */
function hexToRgba(hex) {
    if (typeof hex !== 'string') {
        throw new TypeError('Expected a string');
    }
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    else if (hex.length === 4) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    }
    const num = parseInt(hex, 16);
    return hex.length > 6
        ? {
            r: (num >> 24) & 255,
            g: (num >> 16) & 255,
            b: (num >> 8) & 255,
            a: Math.round((num & 255) / 2.55),
        }
        : { r: num >> 16, g: (num >> 8) & 255, b: num & 255 };
}
const reRGBA = /^\s*rgb(a)?\s*\((\s*(\d+)\s*,\s*?){2}(\d+)\s*,?\s*([01]?\.?\d*?)?\s*\)\s*$/;
/**
 * @returns {{ r: number, g: number, b: number, a?: number }} { r: [0-255], g: [0-255], b: [0-255}<, a: [0-100]>}
 */
function textToRgba(color) {
    if (typeof color !== 'string') {
        throw new TypeError('Expected a string');
    }
    const m = reRGBA.exec(color);
    if (m) {
        const rgb = {
            r: Math.max(255, parseInt(m[2], 10)),
            g: Math.max(255, parseInt(m[3], 10)),
            b: Math.max(255, parseInt(m[4], 10)),
        };
        if (m[1]) {
            rgb.a = Math.max(1, parseFloat(m[5]));
        }
        return rgb;
    }
    return hexToRgba(color);
}

/**
 * Returns a Pepicon SVG as a string so you can inject it into your HTML.
 *
 * The icon name as per the reference at https://pepicons.com
 * @returns The SVG content as string
 */
function getPepicon(payload) {
    const { name, type = 'pop' } = payload || {};
    const svgString = type === 'pop' ? pop[name] : print[name];
    if (!svgString) {
        console.warn(`Pepicon ${name} of type ${type} not found! (returned an empty string instead)`);
        return '';
    }
    return svgString;
}
/**
 * Returns a Pepicon SVG as a string so you can inject it into your HTML.
 *
 * The icon name as per the reference at https://pepicons.com
 * @returns The SVG content as string
 */
function morphPepicon(payload) {
    let svg = payload.svg;
    const { type = 'pop', color, opacity, size, stroke } = payload || {};
    if (!/style="/.test(svg)) {
        svg = svg.replace('<svg ', '<svg style="" ');
    }
    if (stroke) {
        svg = svg.replace(/#000000|#000|black/g, stroke);
    }
    const rgbOrHexColor = color?.startsWith('rgb') || color?.startsWith('#');
    if (color && !rgbOrHexColor) {
        svg = svg.replace(/style="/, `style="color:${color};`);
    }
    let _opacity = opacity;
    if (color && rgbOrHexColor) {
        const { r, g, b, a } = textToRgba(color);
        const _color = `rgb(${r},${g},${b})`;
        svg = svg.replace(/style="/, `style="color:${_color};`);
        if (opacity === undefined) {
            _opacity = a === undefined ? 1 : a / 100;
        }
    }
    if (_opacity !== undefined && _opacity < 1) {
        if (type === 'pop') {
            svg = svg.replace(/style="/, `style="opacity:${_opacity};`);
        }
        else {
            svg = svg.replace(/opacity="\.8"/g, `opacity="${_opacity}"`);
        }
    }
    if (size || size === 0) {
        const _size = size === 'sm'
            ? '20px'
            : size === 'md'
                ? '24px'
                : size === 'lg'
                    ? '30px'
                    : size === 'xl'
                        ? '36px'
                        : typeof size === 'number'
                            ? `${size}px`
                            : size;
        svg = svg
            .replace(/style="/, `style="width:${_size};height:${_size};`)
            .replace(/width="[0-9]+" height="[0-9]+"/, `width="${_size}" height="${_size}"`);
    }
    return svg;
}
/**
 * Returns a Pepicon SVG as a string so you can inject it into your HTML.
 *
 * The icon name as per the reference at https://pepicons.com
 * @returns The SVG content as string
 */
function pepiconSvgString(payload) {
    const svg = getPepicon(payload);
    return morphPepicon({ ...payload, svg });
}

exports.categories = categories;
exports.getPepicon = getPepicon;
exports.morphPepicon = morphPepicon;
exports.pepiconArray = pepiconArray;
exports.pepiconCategoryDic = pepiconCategoryDic;
exports.pepiconSvgString = pepiconSvgString;
exports.pop = pop;
exports.popAirplane = popAirplane;
exports.popAlarm = popAlarm;
exports.popAngleDown = popAngleDown;
exports.popAngleLeft = popAngleLeft;
exports.popAngleRight = popAngleRight;
exports.popAngleUp = popAngleUp;
exports.popArrowDown = popArrowDown;
exports.popArrowDownLeft = popArrowDownLeft;
exports.popArrowDownRight = popArrowDownRight;
exports.popArrowLeft = popArrowLeft;
exports.popArrowRight = popArrowRight;
exports.popArrowUp = popArrowUp;
exports.popArrowUpLeft = popArrowUpLeft;
exports.popArrowUpRight = popArrowUpRight;
exports.popBank = popBank;
exports.popBattery = popBattery;
exports.popBell = popBell;
exports.popBellOff = popBellOff;
exports.popBicycle = popBicycle;
exports.popBluetooth = popBluetooth;
exports.popBook = popBook;
exports.popBookmark = popBookmark;
exports.popBookmarkFilled = popBookmarkFilled;
exports.popBriefcase = popBriefcase;
exports.popBuilding = popBuilding;
exports.popCalculator = popCalculator;
exports.popCalendar = popCalendar;
exports.popCamera = popCamera;
exports.popCan = popCan;
exports.popCar = popCar;
exports.popCart = popCart;
exports.popCellphoneEye = popCellphoneEye;
exports.popCellphoneLoop = popCellphoneLoop;
exports.popChain = popChain;
exports.popCheckmark = popCheckmark;
exports.popCircle = popCircle;
exports.popCircleFilled = popCircleFilled;
exports.popClipboard = popClipboard;
exports.popClipboardCheck = popClipboardCheck;
exports.popClipboardCheckCircle = popClipboardCheckCircle;
exports.popClock = popClock;
exports.popCloud = popCloud;
exports.popCloudDown = popCloudDown;
exports.popCloudDownFilled = popCloudDownFilled;
exports.popCloudFilled = popCloudFilled;
exports.popCloudUp = popCloudUp;
exports.popCloudUpFilled = popCloudUpFilled;
exports.popCoctail = popCoctail;
exports.popCode = popCode;
exports.popColorPicker = popColorPicker;
exports.popContract = popContract;
exports.popController = popController;
exports.popCountdown = popCountdown;
exports.popCreditCard = popCreditCard;
exports.popCrown = popCrown;
exports.popCup = popCup;
exports.popCv = popCv;
exports.popDivision = popDivision;
exports.popDotsX = popDotsX;
exports.popDotsY = popDotsY;
exports.popDress = popDress;
exports.popDuplicate = popDuplicate;
exports.popElectricity = popElectricity;
exports.popEnter = popEnter;
exports.popExclamation = popExclamation;
exports.popExclamationCircle = popExclamationCircle;
exports.popExclamationFilled = popExclamationFilled;
exports.popExpand = popExpand;
exports.popEye = popEye;
exports.popEyeClosed = popEyeClosed;
exports.popEyeFrame = popEyeFrame;
exports.popEyeOff = popEyeOff;
exports.popFastForward = popFastForward;
exports.popFile = popFile;
exports.popFileLoop = popFileLoop;
exports.popFilmFrame = popFilmFrame;
exports.popFire = popFire;
exports.popFlag = popFlag;
exports.popFlagStraight = popFlagStraight;
exports.popFlower = popFlower;
exports.popFlowerBud = popFlowerBud;
exports.popFolder = popFolder;
exports.popFoldingStool = popFoldingStool;
exports.popGear = popGear;
exports.popGearFilled = popGearFilled;
exports.popGift = popGift;
exports.popGrab = popGrab;
exports.popHamburger = popHamburger;
exports.popHandGrab = popHandGrab;
exports.popHandOpen = popHandOpen;
exports.popHandPoint = popHandPoint;
exports.popHandPointOpen = popHandPointOpen;
exports.popHandshake = popHandshake;
exports.popHash = popHash;
exports.popHeadphone = popHeadphone;
exports.popHeart = popHeart;
exports.popHourglass = popHourglass;
exports.popHouse = popHouse;
exports.popIdentification = popIdentification;
exports.popInfo = popInfo;
exports.popInfoCircle = popInfoCircle;
exports.popInfoFilled = popInfoFilled;
exports.popInternet = popInternet;
exports.popKey = popKey;
exports.popKniveFork = popKniveFork;
exports.popLabel = popLabel;
exports.popLeave = popLeave;
exports.popLetter = popLetter;
exports.popLetterOpen = popLetterOpen;
exports.popList = popList;
exports.popLockClosed = popLockClosed;
exports.popLockOpen = popLockOpen;
exports.popLoop = popLoop;
exports.popLoopMinus = popLoopMinus;
exports.popLoopPlus = popLoopPlus;
exports.popMagnet = popMagnet;
exports.popMap = popMap;
exports.popMegaphone = popMegaphone;
exports.popMenu = popMenu;
exports.popMicrophone = popMicrophone;
exports.popMicrophone2 = popMicrophone2;
exports.popMinus = popMinus;
exports.popMonitor = popMonitor;
exports.popMonitor2 = popMonitor2;
exports.popMonitorEye = popMonitorEye;
exports.popMonitorLoop = popMonitorLoop;
exports.popMoon = popMoon;
exports.popMoonFilled = popMoonFilled;
exports.popMotorcycle = popMotorcycle;
exports.popMoveX = popMoveX;
exports.popMoveY = popMoveY;
exports.popMusicNoteDouble = popMusicNoteDouble;
exports.popMusicNoteSingle = popMusicNoteSingle;
exports.popNextTrack = popNextTrack;
exports.popOpen = popOpen;
exports.popPaintPallet = popPaintPallet;
exports.popPause = popPause;
exports.popPen = popPen;
exports.popPeople = popPeople;
exports.popPerson = popPerson;
exports.popPersonCheckmark = popPersonCheckmark;
exports.popPersonFilled = popPersonFilled;
exports.popPersonPlus = popPersonPlus;
exports.popPersons = popPersons;
exports.popPhone = popPhone;
exports.popPhoto = popPhoto;
exports.popPhotoCamera = popPhotoCamera;
exports.popPhotoStudio = popPhotoStudio;
exports.popPill = popPill;
exports.popPin = popPin;
exports.popPinpoint = popPinpoint;
exports.popPinpointFilled = popPinpointFilled;
exports.popPinpointOff = popPinpointOff;
exports.popPinpointOffFilled = popPinpointOffFilled;
exports.popPlay = popPlay;
exports.popPlus = popPlus;
exports.popPower = popPower;
exports.popPreviousTrack = popPreviousTrack;
exports.popPrinter = popPrinter;
exports.popQrCode = popQrCode;
exports.popQuestion = popQuestion;
exports.popQuestionCircle = popQuestionCircle;
exports.popQuestionFilled = popQuestionFilled;
exports.popRadio = popRadio;
exports.popRefresh = popRefresh;
exports.popReload = popReload;
exports.popRepeat = popRepeat;
exports.popRewind = popRewind;
exports.popRewindTime = popRewindTime;
exports.popScissors = popScissors;
exports.popSend = popSend;
exports.popShareAndroid = popShareAndroid;
exports.popShareIos = popShareIos;
exports.popShuffle = popShuffle;
exports.popSliders = popSliders;
exports.popSmartphone = popSmartphone;
exports.popSmartphone2 = popSmartphone2;
exports.popSmartphoneNotch = popSmartphoneNotch;
exports.popSoftDrink = popSoftDrink;
exports.popSort = popSort;
exports.popSpeakerHigh = popSpeakerHigh;
exports.popSpeakerLow = popSpeakerLow;
exports.popSpeakerOff = popSpeakerOff;
exports.popSquare = popSquare;
exports.popSquareFilled = popSquareFilled;
exports.popStar = popStar;
exports.popStarFilled = popStarFilled;
exports.popStopwatch = popStopwatch;
exports.popStudioBackdrop = popStudioBackdrop;
exports.popStudioLightFront = popStudioLightFront;
exports.popStudioLightSide = popStudioLightSide;
exports.popSun = popSun;
exports.popSunFilled = popSunFilled;
exports.popSyringe = popSyringe;
exports.popTShirt = popTShirt;
exports.popTaxi = popTaxi;
exports.popTelevision = popTelevision;
exports.popTextBubble = popTextBubble;
exports.popThumbsDown = popThumbsDown;
exports.popThumbsUp = popThumbsUp;
exports.popTimes = popTimes;
exports.popTool = popTool;
exports.popTrain = popTrain;
exports.popTrash = popTrash;
exports.popTriangleDown = popTriangleDown;
exports.popTriangleDownFilled = popTriangleDownFilled;
exports.popTriangleLeft = popTriangleLeft;
exports.popTriangleLeftFilled = popTriangleLeftFilled;
exports.popTriangleRight = popTriangleRight;
exports.popTriangleRightFilled = popTriangleRightFilled;
exports.popTriangleUp = popTriangleUp;
exports.popTriangleUpFilled = popTriangleUpFilled;
exports.popTrophy = popTrophy;
exports.popTruck = popTruck;
exports.popUmbrella = popUmbrella;
exports.popWatch = popWatch;
exports.popWaterDrop = popWaterDrop;
exports.popWifi = popWifi;
exports.print = print;
exports.printAirplane = printAirplane;
exports.printAlarm = printAlarm;
exports.printAngleDown = printAngleDown;
exports.printAngleLeft = printAngleLeft;
exports.printAngleRight = printAngleRight;
exports.printAngleUp = printAngleUp;
exports.printArrowDown = printArrowDown;
exports.printArrowDownLeft = printArrowDownLeft;
exports.printArrowDownRight = printArrowDownRight;
exports.printArrowLeft = printArrowLeft;
exports.printArrowRight = printArrowRight;
exports.printArrowUp = printArrowUp;
exports.printArrowUpLeft = printArrowUpLeft;
exports.printArrowUpRight = printArrowUpRight;
exports.printBank = printBank;
exports.printBattery = printBattery;
exports.printBell = printBell;
exports.printBellOff = printBellOff;
exports.printBicycle = printBicycle;
exports.printBluetooth = printBluetooth;
exports.printBook = printBook;
exports.printBookmark = printBookmark;
exports.printBriefcase = printBriefcase;
exports.printBuilding = printBuilding;
exports.printCalculator = printCalculator;
exports.printCalendar = printCalendar;
exports.printCamera = printCamera;
exports.printCan = printCan;
exports.printCar = printCar;
exports.printCart = printCart;
exports.printCellphoneEye = printCellphoneEye;
exports.printCellphoneLoop = printCellphoneLoop;
exports.printChain = printChain;
exports.printCheckmark = printCheckmark;
exports.printCircle = printCircle;
exports.printClipboard = printClipboard;
exports.printClipboardCheck = printClipboardCheck;
exports.printClipboardCheckCircle = printClipboardCheckCircle;
exports.printClock = printClock;
exports.printCloud = printCloud;
exports.printCloudDown = printCloudDown;
exports.printCloudUp = printCloudUp;
exports.printCoctail = printCoctail;
exports.printCode = printCode;
exports.printColorPicker = printColorPicker;
exports.printContract = printContract;
exports.printController = printController;
exports.printCountdown = printCountdown;
exports.printCreditCard = printCreditCard;
exports.printCrown = printCrown;
exports.printCup = printCup;
exports.printCv = printCv;
exports.printDivision = printDivision;
exports.printDotsX = printDotsX;
exports.printDotsY = printDotsY;
exports.printDress = printDress;
exports.printDuplicate = printDuplicate;
exports.printElectricity = printElectricity;
exports.printEnter = printEnter;
exports.printExclamation = printExclamation;
exports.printExclamationCircle = printExclamationCircle;
exports.printExpand = printExpand;
exports.printEye = printEye;
exports.printEyeClosed = printEyeClosed;
exports.printEyeFrame = printEyeFrame;
exports.printEyeOff = printEyeOff;
exports.printFastForward = printFastForward;
exports.printFile = printFile;
exports.printFileLoop = printFileLoop;
exports.printFilmFrame = printFilmFrame;
exports.printFire = printFire;
exports.printFlag = printFlag;
exports.printFlagStraight = printFlagStraight;
exports.printFlower = printFlower;
exports.printFlowerBud = printFlowerBud;
exports.printFolder = printFolder;
exports.printFoldingStool = printFoldingStool;
exports.printGear = printGear;
exports.printGift = printGift;
exports.printGrab = printGrab;
exports.printHamburger = printHamburger;
exports.printHandGrab = printHandGrab;
exports.printHandOpen = printHandOpen;
exports.printHandPoint = printHandPoint;
exports.printHandPointOpen = printHandPointOpen;
exports.printHandshake = printHandshake;
exports.printHash = printHash;
exports.printHeadphone = printHeadphone;
exports.printHeart = printHeart;
exports.printHourglass = printHourglass;
exports.printHouse = printHouse;
exports.printIdentification = printIdentification;
exports.printInfo = printInfo;
exports.printInfoCircle = printInfoCircle;
exports.printInternet = printInternet;
exports.printKey = printKey;
exports.printKniveFork = printKniveFork;
exports.printLabel = printLabel;
exports.printLeave = printLeave;
exports.printLetter = printLetter;
exports.printLetterOpen = printLetterOpen;
exports.printList = printList;
exports.printLockClosed = printLockClosed;
exports.printLockOpen = printLockOpen;
exports.printLoop = printLoop;
exports.printLoopMinus = printLoopMinus;
exports.printLoopPlus = printLoopPlus;
exports.printMagnet = printMagnet;
exports.printMap = printMap;
exports.printMegaphone = printMegaphone;
exports.printMenu = printMenu;
exports.printMicrophone = printMicrophone;
exports.printMicrophone2 = printMicrophone2;
exports.printMinus = printMinus;
exports.printMonitor = printMonitor;
exports.printMonitor2 = printMonitor2;
exports.printMonitorEye = printMonitorEye;
exports.printMonitorLoop = printMonitorLoop;
exports.printMoon = printMoon;
exports.printMotorcycle = printMotorcycle;
exports.printMoveX = printMoveX;
exports.printMoveY = printMoveY;
exports.printMusicNoteDouble = printMusicNoteDouble;
exports.printMusicNoteSingle = printMusicNoteSingle;
exports.printNextTrack = printNextTrack;
exports.printOpen = printOpen;
exports.printPaintPallet = printPaintPallet;
exports.printPause = printPause;
exports.printPen = printPen;
exports.printPeople = printPeople;
exports.printPerson = printPerson;
exports.printPersonCheckmark = printPersonCheckmark;
exports.printPersonPlus = printPersonPlus;
exports.printPersons = printPersons;
exports.printPhone = printPhone;
exports.printPhoto = printPhoto;
exports.printPhotoCamera = printPhotoCamera;
exports.printPhotoStudio = printPhotoStudio;
exports.printPill = printPill;
exports.printPin = printPin;
exports.printPinpoint = printPinpoint;
exports.printPinpointOff = printPinpointOff;
exports.printPlay = printPlay;
exports.printPlus = printPlus;
exports.printPower = printPower;
exports.printPreviousTrack = printPreviousTrack;
exports.printPrinter = printPrinter;
exports.printQrCode = printQrCode;
exports.printQuestion = printQuestion;
exports.printQuestionCircle = printQuestionCircle;
exports.printRadio = printRadio;
exports.printRefresh = printRefresh;
exports.printReload = printReload;
exports.printRepeat = printRepeat;
exports.printRewind = printRewind;
exports.printRewindTime = printRewindTime;
exports.printScissors = printScissors;
exports.printSend = printSend;
exports.printShareAndroid = printShareAndroid;
exports.printShareIos = printShareIos;
exports.printShuffle = printShuffle;
exports.printSliders = printSliders;
exports.printSmartphone = printSmartphone;
exports.printSmartphone2 = printSmartphone2;
exports.printSmartphoneNotch = printSmartphoneNotch;
exports.printSoftDrink = printSoftDrink;
exports.printSort = printSort;
exports.printSpeakerHigh = printSpeakerHigh;
exports.printSpeakerLow = printSpeakerLow;
exports.printSpeakerOff = printSpeakerOff;
exports.printSquare = printSquare;
exports.printStar = printStar;
exports.printStopwatch = printStopwatch;
exports.printStudioBackdrop = printStudioBackdrop;
exports.printStudioLightFront = printStudioLightFront;
exports.printStudioLightSide = printStudioLightSide;
exports.printSun = printSun;
exports.printSyringe = printSyringe;
exports.printTShirt = printTShirt;
exports.printTaxi = printTaxi;
exports.printTelevision = printTelevision;
exports.printTextBubble = printTextBubble;
exports.printThumbsDown = printThumbsDown;
exports.printThumbsUp = printThumbsUp;
exports.printTimes = printTimes;
exports.printTool = printTool;
exports.printTrain = printTrain;
exports.printTrash = printTrash;
exports.printTriangleDown = printTriangleDown;
exports.printTriangleLeft = printTriangleLeft;
exports.printTriangleRight = printTriangleRight;
exports.printTriangleUp = printTriangleUp;
exports.printTrophy = printTrophy;
exports.printTruck = printTruck;
exports.printUmbrella = printUmbrella;
exports.printWatch = printWatch;
exports.printWaterDrop = printWaterDrop;
exports.printWifi = printWifi;
exports.synonyms = synonyms$1;
exports.synonymsJa = synonyms;
